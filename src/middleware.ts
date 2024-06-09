import { NextResponse, NextRequest } from "next/server";

const protectedRoutes = ["/login", "/signup"];

export function middleware(request: NextRequest) {
  const token = request.cookies.get("jwt");
  const pathname = request.nextUrl.pathname;

  if (!token && !protectedRoutes.includes(pathname)) {
    const url = new URL("/login", request.nextUrl.origin);

    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};
