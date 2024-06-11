import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function GET() {
  const cookiesStore = cookies();
  const token = cookiesStore.get("jwt");

  return NextResponse.json({ token: token?.value });
}
