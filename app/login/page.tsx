// 'use client'
// import { supabaseClient } from "@/lib/supabaseClient";
// import { useRouter } from "next/router";
// import { useEffect } from "react";


// const Login = () => {
//     const router = useRouter();
    
//     const handleGoogleLogin = async () => {
//         const {error} = await supabaseClient.auth.signInWithOAuth({
//             provider: 'google',
//         });
//         if (error) console.error('Error logging in', error);
//         // else router.push('/dashboard');
//     };

//     useEffect (() => {
//         const session = supabaseClient.auth.getSession().then(({data}) => {
//             if (data.session) {
//                 router.push('/'); // Redirect to homepage if already logged in
//             }
//         });
//     },[router]);
//     return (
//         <div>
//             <h1>Login</h1>
//             <button onClick={handleGoogleLogin}>Login with Google</button>
//         </div>
//     )
// }

// export default Login

import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return <SignIn />;
}