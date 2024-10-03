// // /app/components/AuthWrapper.tsx
// "use client";

// import { useEffect, useState } from "react";
// import { supabaseClient } from "../lib/supabaseClient";
// import { useRouter, usePathname } from "next/navigation";
// import { error } from "console";

// interface Props {
//   children: React.ReactNode;
// }

// export default function AuthWrapper({ children }: Props) {
//   const router = useRouter();
//   const pathname = usePathname(); // Get current path
//   const [authenticated, setAuthenticated] = useState<boolean>(false);
//   const [loading, setLoading] = useState<boolean>(true);

//   useEffect(() => {
//     const checkSession = async () => {
//       const {
//         data: { session },
//       } = await supabaseClient.auth.getSession();

//       console.log("session", session);
//       console.log("pathname", pathname);
//       console.log("Error", error)

//       if (!session && pathname !== "/login") {
//         // Redirect to login only if not authenticated and not already on the login page
//         router.push("/login");
//       } else if (session && pathname === "/login") {
//         // If authenticated, don't allow access to login page, redirect to home
//         router.push("/");
//       } else {
//         // Otherwise, set authenticated state to true
//         setAuthenticated(!!session);
//         setLoading(false);
//       }
//     };

//     checkSession();

//     // Handle auth state changes (login/logout)
//     const { data: authListener } = supabaseClient.auth.onAuthStateChange(
//       (_event, session) => {
//         if (!session && pathname !== "/login") {
//           router.push("/login");
//         } else if (session && pathname === "/login") {
//           router.push("/");
//         } else {
//           setAuthenticated(!!session);
//           setLoading(false);
//         }
//       }
//     );

//     return () => {
//       authListener.subscription.unsubscribe();
//     };
//   }, [router, pathname]);

//   if (loading) {
//     return <div>Loading...</div>; // Show loading while checking the session
//   }

//   return <>{children}</>;
// }
