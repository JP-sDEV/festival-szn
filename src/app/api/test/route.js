"use server";

export async function GET() {
  return Response.json({ hello: "world" }, { status: 200 });
}
