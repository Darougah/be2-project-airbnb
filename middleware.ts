// // middleware.ts
// import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';
// import { NextResponse } from 'next/server';

// // const isAdminRoute = createRouteMatcher(['/admin(.*)']);

// // export default clerkMiddleware(async (auth, req) => {
// //   const { userId } = auth();
// //   const isAdminUser = userId === process.env.ADMIN_USER_ID;

// //   if (isAdminRoute(req) && !isAdminUser) {
// //     return NextResponse.redirect(new URL('/', req.url));
// //   }
// //   // Allow the request to proceed
// //   return NextResponse.next();
// // });
// const isPublicRoute = createRouteMatcher(['/', '/properties(.*)']);
// const isAdminRoute = createRouteMatcher(['/admin(.*)']);
// export default clerkMiddleware((auth, req) => {
//   const isAdminUser = auth().userId === process.env.ADMIN_USER_ID;

//   if (isAdminRoute(req) && !isAdminUser) {
//     return NextResponse.redirect(new URL('/', req.url));
//   }

//   if (!isPublicRoute(req) && !auth().userId) {
//     return NextResponse.redirect(new URL('/login', req.url)); // Redirect to login for protected routes
//   }
// });

// export const config = {
//   matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
// };


import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';

// Define the route matchers
const isPublicRoute = createRouteMatcher([
  '/', 
  '/properties(.*)', // Add other routes that should be accessible without login
]);
const isAdminRoute = createRouteMatcher(['/admin(.*)']);
export default clerkMiddleware((auth, req) => {
  const isAdminUser = auth().userId === process.env.ADMIN_USER_ID;

  // If the route is an admin route and the user is not an admin, redirect to home
  if (isAdminRoute(req) && !isAdminUser) {
    return NextResponse.redirect(new URL('/', req.url));
  }

  // If the route is not public and the user is not logged in, redirect to the login page
  if (!isPublicRoute(req) && !auth().userId) {
    // Clear cookies to prevent potential redirect loop
    const response = NextResponse.redirect(new URL('/', req.url));
    response.cookies.delete('auth-session'); // Adjust cookie name if necessary
    return response;
  }

  // Proceed without redirect if the route is public or the user is authenticated
  return NextResponse.next();
});

// Middleware config to specify the routes to match
export const config = {
  matcher: [
    '/((?!.*\\..*|_next).*)', 
    '/', 
    '/(api|trpc)(.*)', 
  ],
};
