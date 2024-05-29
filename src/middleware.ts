import { clerkMiddleware } from "@clerk/nextjs/server";

export default clerkMiddleware();

export const config = {
      matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
}






// // import { authMiddleware } from '@clerk/nextjs';
// export default authMiddleware({
//     publicRoutes: ["/", "/auth(.*)","/portal(.*)"],
//     ignoredRoutes: ['/chatbot'],
// })

// export const config = {
//       matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
// }
