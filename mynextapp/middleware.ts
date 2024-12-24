import { NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';
import type { NextRequest } from 'next/server';

export async function middleware(req: NextRequest) {
  const token = await getToken({ req });
  const isAuthPage = req.nextUrl.pathname.startsWith('/signup');

  if (!token && !isAuthPage) {
    const callbackUrl = req.nextUrl.pathname + req.nextUrl.search;
    return NextResponse.redirect(
      new URL(`/signup?callbackUrl=${encodeURIComponent(callbackUrl)}`, req.url)
    );
  }

  if (token && isAuthPage) {
    return NextResponse.redirect(new URL('/', req.url)); // Redirect to home if already authenticated
  }

  return NextResponse.next();
}

// Apply the middleware only to protected routes
export const config = {
  matcher: ['/register'], // Adjust to your protected routes
};
