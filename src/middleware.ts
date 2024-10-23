import { NextRequest, NextResponse } from 'next/server';

// Define the routes to be protected
const userProtectedRoutes = ['/protected', '/agenda', '/events', '/home', '/profile', '/reviews', '/settings', '/tickets'];
const guestProtectedRoutes = ['/', '/login', '/register', '/about', '/contact', '/FAQ', '/testimonies'];

export function middleware(request: NextRequest) {
    // Get the cookie token
    const token = request.cookies.get('SESSIONPON');

    const isAuthenticated = !!token;

    console.log("Is authenticated:", isAuthenticated);
    console.log("Current path:", request.nextUrl.pathname);

    // Determines whether the current path is an authenticated user or a guest path

    const isUserRoute = userProtectedRoutes.some(route => request.nextUrl.pathname.startsWith(route));
    const isGuestRoute = guestProtectedRoutes.some(route => request.nextUrl.pathname.startsWith(route));

    // Redirect to /login if you try to access a protected path without being authenticated

    if (isUserRoute && !isAuthenticated) {
        console.log("Redirigiendo a /login porque no hay autenticación");
        return NextResponse.redirect(new URL('/login', request.url));
    }

    if (isUserRoute && isAuthenticated) {
        return NextResponse.next();
    }

    // Redirect to /home if you try to access a guest path (login, register, etc.) and you are already authenticated
    if (isGuestRoute && isAuthenticated) {
        console.log("Redirigiendo a /home porque ya está autenticado");
        return NextResponse.redirect(new URL('/home', request.url));
    }

    if (isGuestRoute && !isAuthenticated) {
        return NextResponse.next();
    }
}

// Configure routes to apply middleware
export const config = {
    matcher: [
        '/protected/:path*',
        '/home/:path*',
        '/agenda/:path*',
        '/events/:path*',
        '/profile/:path*',
        '/reviews/:path*',
        '/settings/:path*',
        '/tickets/:path*',
        '/',
        '/login/:path*',
        '/register/:path*',
        '/about/:path*',
        '/contact/:path*',
        '/FAQ/:path*',
        '/testimonies/:path*',
    ],
};
