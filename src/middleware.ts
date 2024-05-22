import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  // const cookie = request.cookies.get("jwt");
  // const pathname = request.nextUrl.pathname;

  //   if (!cookie) {
  //     return NextResponse.redirect(new URL("/login", request.url));
  //   }

  return NextResponse.next();
}

// Exclude API routes, static files, and favicon
export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|auth).*)"],
};
