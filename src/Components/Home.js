import { useKindeAuth } from "@kinde-oss/kinde-auth-react";

function Home() {
  const { login, register, logout } = useKindeAuth();
  return (
    <div>
      <section class="text-gray-600 body-font">
        <div class="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
          <img
            class="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded shadow-xl border border-black"
            alt="hero"
            src="/hero.gif"
          />
          <div class="text-center lg:w-2/3 w-full">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Share and Host Your Images with Ease
            </h1>
            <p class="mb-8 leading-relaxed">
              Effortlessly upload, store, and share your images with our
              intuitive image hosting web app. Whether it's for personal use,
              collaboration, or showcasing your creativity, we've got you
              covered.
            </p>
            <div class="flex justify-center">
              <button
                onClick={login}
                class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
              >
                Get Started
              </button>
              {/* <button class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Learn More</button> */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
