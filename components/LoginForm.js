"use client";

// import { GoogleSignInButton, FacebookSignInButton } from "./authButtons";
import { CredentialsForm } from "./CredentialsForm";
import Link from "next/link";
// import { useSession } from "next-auth/react";
// import { useState, useEffect } from "react";

const LoginForm = () => {
  // ako postoji sesija redirektuj na url
  // if (useSession) window.location.href = callbackUrl || "/";

  return (
    <div
      id="login-popup"
      tabIndex="-1"
      className="bg-black/50 overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 h-full items-center justify-center flex"
    >
      <div className="relative p-4 w-full max-w-md h-full md:h-auto">
        <div className="relative bg-white rounded-lg shadow">
          <Link href="/">
            <button
              type="button"
              className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center popup-close"
            >
              <svg
                aria-hidden="true"
                className="w-5 h-5"
                fill="#c6c7c7"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span className="sr-only">Close popup</span>
            </button>
          </Link>

          <div className="p-5">
            <h3 className="text-2xl mb-0.5 font-medium"></h3>
            <p className="mb-4 text-sm font-normal text-gray-800"></p>

            <div className="text-center">
              <p className="mb-3 text-2xl font-semibold leading-5 text-slate-900">
                Login to your account
              </p>
              <p className="mt-2 text-sm leading-4 text-slate-600">
                You must be logged in to perform this action.
              </p>
            </div>

            <div className="mt-7 flex flex-col gap-2">
              {/* <GoogleSignInButton />
              <FacebookSignInButton /> */}
            </div>

            <div className="flex w-full items-center gap-2 py-6 text-sm text-slate-600">
              {/* <div className="h-px w-full bg-slate-200"></div>
              OR
              <div className="h-px w-full bg-slate-200"></div> */}
            </div>

            <CredentialsForm />

            <div className="mt-6 text-center text-sm text-slate-600">
              Don&apos;t have an account?&nbsp;
              <Link href="/register" className="font-medium text-[#4285f4]">
                Sign up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;

{
  /* 
// prva verzija


// "use client";
// import { useState } from "react";
// import { signIn } from "next-auth/react";
// import { useRouter } from "next/navigation";

// const LoginForm = () => {
//   const router = useRouter();

//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");

//   const handleEmailChange = (e) => setEmail(e.target.value);
//   const handlePasswordChange = (e) => setPassword(e.target.value);
//   const clearInputs = () => {
//     setEmail("");
//     setPassword("");
//     setError("");
//   };
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     signIn("credentials", {
//       email,
//       password,
//       redirect: false,
//     })
//       .then((res) => {
//         if (res.error) {
//           setError(JSON.parse(res.error).message);
//         } else {
//           clearInputs();
//           router.push("/");
//         }
//       })
//       .catch((e) => console.error(e));
//   };

//   return (
    // <form
    //   onSubmit={handleSubmit}
    //   classNameName="flex flex-col space-y-12 w-full px-32"
    // >
    //   <input
    //     type="text"
    //     value={email}
    //     onChange={handleEmailChange}
    //     placeholder="Enter your email address"
    //     classNameName="border-b border-b-gray-900 hover:border-b-gray-800"
    //   />
    //   <input
    //     type="password"
    //     value={password}
    //     onChange={handlePasswordChange}
    //     placeholder="Enter your password"
    //     classNameName="border-b border-b-gray-200 hover:border-b-gray-500"
    //   />
    //   <button
    //     type="submit"
    //     classNameName="border rounded-lg px-6 py-2 bg-gray-100 hover:bg-gray-200 duration-300 uppercase text-sm"
    //   >
    //     Log in
    //   </button>
    //   {error && <p classNameName="text-red-500 font-bold text-center">{error}</p>}
    // </form>
//   );
// };

// export default LoginForm; */
}
