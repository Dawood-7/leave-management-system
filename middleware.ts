// /middleware.ts
// import { NextResponse } from "next/server";
// import type { NextRequest } from "next/server";
// import { supabaseClient } from "./lib/supabaseClient";

// export async function middleware(req: NextRequest) {
//   const {
//     data: { session },
//   } = await supabaseClient.auth.getSession();

//   const loginUrl = new URL("/login", req.url);

//   // If there's no session and the user is NOT already on the login page, redirect them
//   if (!session && req.nextUrl.pathname !== "/login") {
//     return NextResponse.redirect(loginUrl);
//   }

//   // If the user is authenticated and is on the login page, redirect them away from login
//   if (session && req.nextUrl.pathname === "/login") {
//     return NextResponse.redirect(new URL("/", req.url)); // Or some other page after login
//   }

//   return NextResponse.next();
// }

// // Specify which routes the middleware should apply to
// export const config = {
//   matcher: ["/((?!login).*)"], // Protect all routes except /login
// };

import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isPublicRoute = createRouteMatcher(["/login(.*)"]);

export default clerkMiddleware((auth, request) => {
  if (!isPublicRoute(request)) {
    auth().protect();
  }
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};