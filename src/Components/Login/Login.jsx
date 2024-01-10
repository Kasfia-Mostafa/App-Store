import {  useContext, useState } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Link, useNavigate,  } from "react-router-dom";
import { toast } from "react-toastify";
import { bg } from "../../assets";

const login = () => {
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signIn, googleSignIn } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    console.log(e.currentTarget);
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");

    if ((email, password)) {
      signIn(email, password)
        .then((result) => {
          navigate("/");
        })
        .catch((error) => {
          setError(error.massage);
        });
    }
  };
  


  const handleGoogleLogin = () => {
    googleSignIn().then((result) => {
      console.log(result.user);
    });
  };


  const notification = () => toast("Successfully Login");

  return (
   
      <div
        style={{
          background: `url(${bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        className="w-screen h-screen flex justify-center items-center "
      >
      <section className="w-full">
        <div className="flex flex-col items-center justify-center  px-6 py-8 mx-auto md:h-screen lg:py-0 text-white">
        <div className="w-full bg-transparent backdrop-blur-md rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0 ">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-3xl text-center font-bold leading-tight tracking-tight text-white">
                Login to your account
              </h1>
              <form
                onSubmit={handleLogin}
                className="space-y-4 md:space-y-6"
                action="#"
              >
                <div>
                  <label
                    className="block mb-2 text-sm font-medium text-white"
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="email"
                    required=""
                  />
                </div>
                <div>
                  <label
                    
                    className="block mb-2 text-sm font-medium text-white dark:text-white"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="password"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required=""
                  />
                </div>

                <div className="flex justify-center">
                  <button
                    onClick={notification}
                    type="submit"
                    className="text-white bg-gradient-to-r from-black to-slate-600 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                  >
                    Login
                  </button>
                </div>
               <div className="flex justify-center">
               <p className="text-sm font-light text-white">
                  Do not have an account yet?
                  <Link className="ml-2" to="/register">
                    Register
                  </Link>
                </p>
               </div>
              </form>
              <div className="flex justify-center">
                <button
                  onClick={handleGoogleLogin}
                  type="button"
                  className="flex hover:text-white hover:bg-black bg-white text-black focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center  dark:focus:ring-[#4285F4]/55 mr-2 mb-2"
                >
                  <svg
                    class="w-4 h-4 mr-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 18 19"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8.842 18.083a8.8 8.8 0 0 1-8.65-8.948 8.841 8.841 0 0 1 8.8-8.652h.153a8.464 8.464 0 0 1 5.7 2.257l-2.193 2.038A5.27 5.27 0 0 0 9.09 3.4a5.882 5.882 0 0 0-.2 11.76h.124a5.091 5.091 0 0 0 5.248-4.057L14.3 11H9V8h8.34c.066.543.095 1.09.088 1.636-.086 5.053-3.463 8.449-8.4 8.449l-.186-.002Z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  Login with Google
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      </div>
    
  );
};

export default login;
