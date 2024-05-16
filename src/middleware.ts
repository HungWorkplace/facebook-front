import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  let cookie = request.cookies.get("jwt");

  if (!cookie) {
    return NextResponse.rewrite(new URL("/auth", request.url));
  }

  return NextResponse.next();
}

// Exclude API routes, static files, and favicon
export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|auth).*)"],
};
