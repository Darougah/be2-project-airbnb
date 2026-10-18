import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';
const isPublicRoute = createRouteMatcher(['/', '/properties(.*)', '/sign-in(.*)', '/sign-up(.*)']);
const isAdminRoute = createRouteMatcher(['/admin(.*)']);
export default clerkMiddleware((auth, req) => {
  if (!isPublicRoute(req) && !auth().userId) return NextResponse.redirect(new URL('/sign-in', req.url));
  if (isAdminRoute(req) && (!process.env.ADMIN_USER_ID || auth().userId !== process.env.ADMIN_USER_ID)) return NextResponse.redirect(new URL('/', req.url));
  return NextResponse.next();
});
export const config = { matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'] };
