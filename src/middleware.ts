import { NextRequest, NextResponse } from 'next/server';
import { getRoleByCookie } from '@/libs/api';

// Define allowed roles
type Role = 'Administrator' | 'User' | 'Guest';

// Define routes and roles
const routesByRole: Record<Role, string[]> = {
    Administrator: [
        '/create-event',
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
    // Get the cookie token
    let role: Role = "Guest"; // Default role

    try {
        const response = await getRoleByCookie(token);
        role = response.role;
    } catch (error) {
        console.error('Error fetching role:', error);
    }

    console.log("Current path: ", request.nextUrl.pathname);
    console.log("User role: ", role);

    // Check access based on the current route
    const currentPath = request.nextUrl.pathname;
    const isAuthorized = Object.entries(routesByRole).some(([allowedRole, paths]) => {
        if (role === allowedRole) {
            return paths.some((route) => currentPath.startsWith(route));
        }
        return false;
    });

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
