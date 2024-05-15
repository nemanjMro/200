"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { registerUser } from "@/services/auth";
import Link from "next/link";

const RegistrationForm = () => {
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
    registerUser(email, password)
      .then((res) => {
        if (res.status === 201) {
          clearInputs();
          router.push("/login");
        } else {
          setError(res.message);
        }
      })
      .catch((e) => {
        console.error(e);
      });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col space-y-12 w-full px-32"
    >
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
      </div>
      <input
        type="text"
        value={email}
        onChange={handleEmailChange}
        placeholder="Enter your email address"
        className="border-b border-b-gray-200 hover:border-b-gray-500"
      />
      <input
        type="password"
        value={password}
        onChange={handlePasswordChange}
        placeholder="Enter your password"
        className="border-b border-b-gray-200 hover:border-b-gray-500"
      />
      <button
        type="submit"
        className="border rounded-lg px-6 py-2 bg-gray-100 hover:bg-gray-200 duration-300 uppercase text-sm"
      >
        Register
      </button>
      {error && <p className="text-red-500 font-bold text-center">{error}</p>}
    </form>
  );
};

export default RegistrationForm;
