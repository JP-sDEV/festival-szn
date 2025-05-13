import redis from "@/app/lib/data/redis";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route";
import { parseData } from "@/app/lib/helpers/parseData";
import appInsights from "@/app/lib/data/appInsights";

export async function GET(req) {
  const session = await getServerSession(authOptions);

  const email = session.user.email;
  const cacheKey = `top-artists:${email}`;
  const cached = await redis.get(cacheKey);
  const source = cached ? "redis" : "spotify-api";

  appInsights.defaultClient.trackTrace({
    message: "[top-artists] 🔍 Fetching top artists",
    properties: {
      user: email,
      source,
    },
  });

  if (!session) {
    console.log("[top-artists] ❌ No session found.");
    return Response.json({ error: "Not signed in" }, { status: 400 });
  }

  if (cached) {
    console.log(`[top-artists] ✅ Serving from Redis cache for ${email}`);
    return Response.json({ data: JSON.parse(cached), source: "cache" });
  }

  console.log(`[top-artists] 🌐 Fetching from Spotify API for ${email}`);

  const spotifyRes = await fetch(
    "https://api.spotify.com/v1/me/top/artists?limit=50",
    {
      headers: {
        Authorization: `Bearer ${session.accessToken}`,
      },
    }
  );

  if (!spotifyRes.ok) {
    console.error(`[top-artists] ❌ Spotify API error: ${spotifyRes.status}`);
    return Response.json(
      { error: "Failed to fetch top artists" },
      { status: spotifyRes.status }
    );
  }

  const data = await spotifyRes.json();
  const parsedData = parseData(data);

  await redis.set(cacheKey, JSON.stringify(parsedData), "EX", 60 * 60 * 24 * 7); // 1 week
  console.log(`[top-artists] 💾 Stored to Redis cache for ${email}`);

  return Response.json({ data: parsedData, source: "api" });
}
