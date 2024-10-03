// // /app/components/LogoutButton.tsx
// "use client";

// import { supabaseClient } from "../lib/supabaseClient";
// import { useRouter } from "next/navigation";

// const LogoutButton = () => {
//   const router = useRouter();

//   const handleLogout = async () => {
//     await supabaseClient.auth.signOut();
//     router.push("/login");
//   };

//   return <button onClick={handleLogout}>Logout</button>;
// };

// export default LogoutButton;
