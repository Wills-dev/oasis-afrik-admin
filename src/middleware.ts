import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { jwtDecode } from "jwt-decode";

const PUBLIC_ROUTES = [
  "/",
  "/login",
  "/verify",
  "/forgot-password",
  "/reset-password",
  "/not-found",
];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const isPublic = PUBLIC_ROUTES.includes(pathname);

  if (isPublic) return NextResponse.next();

  const token = request.cookies.get("oasisAfrikAdminId")?.value;

  // No token at all → redirect
  if (!token) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  // Token exists → validate it
  try {
    const decodedToken: { exp: number } = jwtDecode(token);
    const currentTime = Math.floor(Date.now() / 1000);

    if (decodedToken.exp < currentTime) {
      const response = NextResponse.redirect(new URL("/login", request.url));
      response.cookies.delete("oasisAfrikAdminId");
      return response;
    }
  } catch {
    const response = NextResponse.redirect(new URL("/login", request.url));
    response.cookies.delete("oasisAfrikAdminId");
    return response;
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico)).*)",
  ],
};
