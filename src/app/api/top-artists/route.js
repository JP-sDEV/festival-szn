import { getServerSession } from "next-auth/next";
import { authOptions } from "../auth/[...nextauth]/route";

export async function GET(req) {
  const session = await getServerSession(authOptions);

  if (!session) {
    return Response.json({ error: "Not signed in" }, { status: 400 });
  }

  const accessToken = session.accessToken;

  const spotifyRes = await fetch(
    "https://api.spotify.com/v1/me/top/artists?limit=50",
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );

  if (!spotifyRes.ok) {
    return Response.json(
      { error: "Failed to fetch top artists" },
      { status: spotifyRes.status }
    );
  }

  const data = await spotifyRes.json();
  return Response.json({ data: data }, { status: 200 });
}
