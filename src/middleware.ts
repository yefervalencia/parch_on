import { NextRequest, NextResponse } from 'next/server';
import { getRoleByCookie } from '@/libs/api';

// Define allowed roles
type Role = 'Administrator' | 'User' | 'Guest';

// Define routes and roles
const routesByRole: Record<Role, string[]> = {
    Administrator: [
        '/create-event',
        '/my-events',
        '/protected',
        '/agenda',
        '/events',
        '/gallery',
        '/home',
        '/profile',
        '/reviews',
        '/settings',
        '/tickets',
    ],
    User: [
        '/my-events',
        '/agenda',
        '/events',
        '/gallery',
        '/home',
        '/profile',
        '/reviews',
        '/settings',
        '/tickets',
    ],
    Guest: [
        '/',
        '/login',
        '/register',
        '/about',
        '/contact',
        '/FAQ',
        '/testimonies',
    ],
};

// Redirect map for unauthorized access
const redirectByRole: Record<Role, string> = {
    Administrator: '/home',
    User: '/home',
    Guest: '/login',
};

export async function middleware(request: NextRequest) {
    const token = request.cookies.get('SESSIONPON')?.value;
    let role: Role = "Guest"; // Default role

    try {
        const response = await getRoleByCookie(token);
        role = response.role;
    } catch (error) {
        console.error('Error fetching role:', error);
    }

    console.log("Current path:", request.nextUrl.pathname);
    console.log("User role:", role);

    // Directly check if the current path is allowed for the user's role
    const isAuthorized = routesByRole[role].some((route) =>
        request.nextUrl.pathname.startsWith(route)
    );

    // Implement hierarchical access control
    /* const isAuthorized = role === 'Administrator' ||
        (role === 'User' && !routesByRole['Administrator'].includes(request.nextUrl.pathname)) ||
        (role === 'User' && !routesByRole['User'].includes(request.nextUrl.pathname)) ||
        (role === 'Guest' && routesByRole['Guest'].includes(request.nextUrl.pathname)); */

    console.log("Auth?", isAuthorized);

    // Redirect if not authorized
    if (!isAuthorized) {
        const redirectPath = redirectByRole[role] || '/';
        console.log(`Redirecting to ${redirectPath} due to unauthorized access.`);
        return NextResponse.redirect(new URL(redirectPath, request.url));
    }

    return NextResponse.next();
}

// Configure routes to apply middleware
export const config = {
    matcher: [
        '/protected/:path*',
        '/home/:path*',
        '/agenda/:path*',
        '/events/:path*',
        '/create-event',
        '/my-events/:path*',
        '/gallery/:path*',
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
