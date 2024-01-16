import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      {/* <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/login">login</Link>
          </li>
          <li>
            <Link to="/upload">upload</Link>
          </li>
        </ul>
      </nav> */}

      <header class="text-gray-600 body-font bg-white backdrop-blur-lg">
        <div class="container mx-auto flex flex-wrap p-2 flex-row justify-center">
          <a class="flex title-font font-medium items-center text-gray-900 mb-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="w-10 h-10 text-white p-2 bg-red-500 rounded-full"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span class="ml-3 text-xl text-black">Imagene</span>
          </a>
          <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
            {/* <Link class="mr-5 hover:text-gray-900" to="/login">
              login
            </Link>
            <Link class="mr-5 hover:text-gray-900" to="/login">
              login
            </Link>
            <Link class="mr-5 hover:text-gray-900" to="/login">
              login
            </Link> */}
          </nav>
          {/* <Link class=" hover:text-gray-900 self-center" to="/login">
            <button class="inline-flex items-center bg-red-600 border-0 py-1 px-3 focus:outline-none hover:bg-red-700 text-white rounded text-base">
              Button
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-4 h-4 ml-1"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </button>
          </Link> */}
        </div>
      </header>

      <Outlet />
    </>
  );
};

export default Layout;
