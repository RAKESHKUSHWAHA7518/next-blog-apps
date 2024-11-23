 
 
// import { NextResponse } from "next/server";

// export function middleware(request) {
//     const path = request.nextUrl.pathname;

//     // Define paths that are publicly accessible
//     const isPublicPath = path === '/login' || path === '/register' || path === '/';

//     // Get token from cookies
//     const token = request.cookies.get('token')?.value || '';

//     // If the user is on a public path and is already logged in (token exists), redirect them to the admin page
//     if (isPublicPath && token && path !== '/admin') {
//         // Redirect only if the user is logged in and tries to access public paths like login/register
//         return NextResponse.redirect(new URL('/admin', request.nextUrl));
//     }

//     // If the user is on a protected path (admin) and not logged in (no token), redirect them to login
//     if (path.startsWith('/admin') && !token) {
//         return NextResponse.redirect(new URL('/login', request.nextUrl));
//     }

//     // Allow other requests to proceed if no issues
//     return NextResponse.next();
// }

import { NextResponse } from "next/server";

export function middleware(request) {
    const path = request.nextUrl.pathname;

     
    const isPublicPath = path === '/login' || path === '/register';

     
    const token = request.cookies.get('token')?.value || '';

     
    if (path === '/') {
        return NextResponse.next();
    }

     
    if (isPublicPath && token) {
        return NextResponse.redirect(new URL('/admin', request.nextUrl));
    }

     
    if (path.startsWith('/admin') && !token) {
        return NextResponse.redirect(new URL('/login', request.nextUrl));
    }

     
    return NextResponse.next();
}





// See "Matching Paths" below to learn more
export const config = {
  matcher: [    
    '/login',
    '/register',
    '/',
    '/admin'
  ],
}

 