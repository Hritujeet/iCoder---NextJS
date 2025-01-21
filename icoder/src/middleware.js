import {clerkMiddleware, createRouteMatcher} from "@clerk/nextjs/server";

export default clerkMiddleware();
const isProtectedRoute = createRouteMatcher(['/blogs/create(.*)', '/user-profile(.*)'])

export const onRequest = clerkMiddleware((auth, context) => {
    const {redirectToSignIn, userId} = auth()
    console.log(isProtectedRoute())

    if (!userId && isProtectedRoute) {
        return redirectToSignIn()
    }
})

export const config = {
    matcher: [
        // Skip Next.js internals and all static files, unless found in search params
        '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
        // Always run for API routes
        '/(api|trpc)(.*)',
    ],
};