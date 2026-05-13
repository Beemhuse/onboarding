import { NextResponse, type NextRequest } from "next/server";

export async function proxy(request: NextRequest) {
  // Better Auth session cookie names
  const sessionToken = request.cookies.get("better-auth.session_token") || 
                       request.cookies.get("__Secure-better-auth.session_token");

  const { pathname } = request.nextUrl;
  const isProtectedPath = pathname.startsWith("/dashboard") || pathname.startsWith("/onboarding");
  const isAuthPath = pathname.startsWith("/login") || pathname.startsWith("/signup");

  if (!sessionToken && isProtectedPath) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  if (sessionToken && isAuthPath) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/dashboard/:path*",
    "/onboarding/:path*",
    "/login",
    "/signup"
  ],
};
