"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { verifyEmail } from "@/services/auth";
import Link from "next/link";

const VerificationForm = () => {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const clearInputs = () => {
    setEmail("");
    setPassword("");
    setError("");
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    verifyEmail(email, password)
      .then((res) => {
        console.log("::::::::::::::response", res);
        if (res.status === 201) {
          clearInputs();
          router.push("/login");
        } else {
          console.log("response else::::::::::::", res);
          setError(res.message);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

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
                Create an Account
              </p>
            </div>

            <div className="flex w-full items-center gap-2 py-6 text-sm text-slate-600"></div>

            <form className="w-full" onSubmit={handleSubmit}>
              <label htmlFor="email" className="sr-only">
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required={true}
                value={email}
                onChange={handleEmailChange}
                className="block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-black focus:ring-offset-1  text-black"
                placeholder="Email Address"
              />
              <label htmlFor="password" className="sr-only">
                Code
              </label>
              <input
                id="password"
                name="password"
                type="text"
                autoComplete="false"
                required={true}
                className="mt-2 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-black focus:ring-offset-1 text-black"
                placeholder="Enter your code"
                value={password}
                onChange={handlePasswordChange}
              />
              <p className="mb-3 mt-2 text-sm text-gray-500"></p>
              <button
                type="submit"
                className="inline-flex w-full items-center justify-center rounded-lg bg-black p-2 py-3 text-sm font-medium text-white outline-none focus:ring-2 focus:ring-black focus:ring-offset-1 disabled:bg-gray-400"
              >
                Verify
              </button>
              {error && (
                <p className="text-red-500 font-bold text-center">{error}</p>
              )}
            </form>
            <div className="mt-6 text-center text-sm text-slate-600"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerificationForm;
