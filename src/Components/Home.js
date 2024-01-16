import { useKindeAuth } from "@kinde-oss/kinde-auth-react";

// function Home() {
//   const { login, register } = useKindeAuth();
//   const { user, isAuthenticated, isLoading } = useKindeAuth();

//   if (isLoading) {
//     return <p>Loading</p>;
//   }

//   if (isAuthenticated) {
//     return (
//       <div>
//         {/* <p>{user.first_name}</p>
//         {user.preferred_email} */}
//         JJJJJ
//       </div>
//     );
//   } else {
//     return (
//       <div className="flex gap-7">
//         {/* <button
//           class="inline-flex items-center bg-red-600 border-0 py-1 px-3 focus:outline-none hover:bg-red-700 text-white rounded text-base mt-4 md:mt-0"
//           onClick={register}
//           type="button"
//         >
//           Sign up
//         </button>
//         <button
//           class="inline-flex items-center bg-red-600 border-0 py-1 px-3 focus:outline-none hover:bg-red-700 text-white rounded text-base mt-4 md:mt-0"
//           onClick={login}
//           type="button"
//         >
//           Sign in
//         </button> */}
//         kkkkkkk
//       </div>
//     );
//   }
// }

function Home() {
  const { login, register , logout} = useKindeAuth();
  const { user, isAuthenticated, isLoading } = useKindeAuth();

  // if(isLoading){
  //   return (
  //     <div>Loading...</div>
  //   )
  // }

  if(isAuthenticated){
    return(
      <div>
        <button class="inline-flex items-center bg-red-600 border-0 py-1 px-3 focus:outline-none hover:bg-red-700 text-white rounded text-base mt-4 md:mt-0" onClick={logout} type="button">Sign out</button>
        </div>
    )
  }
  else{
    return(
      <div className="flex gap-7 justify-end">
         <button
        class="inline-flex items-center bg-red-600 border-0 py-1 px-3 focus:outline-none hover:bg-red-700 text-white rounded text-base mt-4 md:mt-0"
          onClick={register}
          type="button"
         >
          Sign up
        </button>
      <button
           class="inline-flex items-center bg-red-600 border-0 py-1 px-3 focus:outline-none hover:bg-red-700 text-white rounded text-base mt-4 md:mt-0"
          onClick={login}
          type="button"
         >
          Sign in
       </button>
     </div>
    )
  }
  
}

export default Home;
