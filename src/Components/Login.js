// import "./App.css";

import { useKindeAuth } from "@kinde-oss/kinde-auth-react";

function Login() {
  const { login, register } = useKindeAuth();

  // onRedirectCallback={(user, app_state) => {
  //     console.log({user, app_state});
  // }}

  return (
    <div className="flex gap-7">
      <button onClick={register} type="button">
        <button class="inline-flex items-center bg-red-600 border-0 py-1 px-3 focus:outline-none hover:bg-red-700 text-white rounded text-base mt-4 md:mt-0">
          Sign up
        </button>
      </button>
      <button onClick={login} type="button">
        <button class="inline-flex items-center bg-red-600 border-0 py-1 px-3 focus:outline-none hover:bg-red-700 text-white rounded text-base mt-4 md:mt-0">
          Sign in
        </button>
      </button>
    </div>
  );
}

export default Login;
