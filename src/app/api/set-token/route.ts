import { cookies } from "next/headers";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const url = new URL(request.url);
  const token = url.searchParams.get("token");

  if (!token) {
    return new Response("Token is required", { status: 400 });
  }

  // set token to the cookie
  const day = process.env.JWT_EXPIRES_DAY || 30;
  const expires = new Date(Date.now() + Number(day) * 24 * 60 * 60 * 1000);
  cookies().set("jwt", token, {
    expires,
    httpOnly: true,
    secure: true,
    sameSite: "none",
  });

  return new Response("Token is set", { status: 200 });
}
