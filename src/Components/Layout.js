import { Outlet, Link } from "react-router-dom";
import { useKindeAuth } from "@kinde-oss/kinde-auth-react";

const Layout = () => {
  const { user, isAuthenticated, isLoading } = useKindeAuth();
  const { login, register, logout } = useKindeAuth();

  return (
    <>
      <header href="/" className="text-gray-600 body-font bg-white backdrop-blur-lg">
        <div className="container mx-auto flex flex-wrap p-2 flex-row justify-center">
          <a href="/" className="flex title-font font-medium items-center text-gray-900 mb-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-10 h-10 text-white p-2 bg-red-500 rounded-full"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span className="ml-3 text-xl text-black">PhotoHub</span>
          </a>
          {isAuthenticated ? (
             <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
             <Link class="mr-5 hover:text-gray-900" to="/upload">
               Upload
             </Link>
             <Link class="mr-5 hover:text-gray-900" to="/myUploads">
               My Uploads
             </Link>
           </nav>
          ) : (
            <div></div>
          )}


          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            {/* Your navigation links */}
          </nav>
          
          
          {isAuthenticated ? (
            <div>
              <button
                className="inline-flex items-center bg-red-600 border-0 py-1 px-3 focus:outline-none hover:bg-red-700 text-white rounded text-base mt-4 md:mt-0"
                onClick={logout}
                type="button"
              >
                Sign out
              </button>
            </div>
          ) : (
            <div className="flex gap-7 justify-end">
              <button
                className="inline-flex items-center bg-red-600 border-0 py-1 px-3 focus:outline-none hover:bg-red-700 text-white rounded text-base mt-4 md:mt-0"
                onClick={register}
                type="button"
              >
                Sign up
              </button>
              <button
                className="inline-flex items-center bg-red-600 border-0 py-1 px-3 focus:outline-none hover:bg-red-700 text-white rounded text-base mt-4 md:mt-0"
                onClick={login}
                type="button"
              >
                Sign in
              </button>
            </div>
          )}
        </div>
      </header>

      <Outlet />
    </>
  );
};

export default Layout;
