"use client";
// import { useState } from "react";
// import { signIn } from "next-auth/react";
// import { useRouter } from "next/navigation";

// export const CredentialsForm = () => {
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
//           router.push("/games"); // ovde zelim da kada se user loguje odem na path koji je dinamicki. kako to da uradim
//         }
//       })
//       .catch((e) => console.error(e));
//   };

import { useState, useEffect } from "react";
import { signIn } from "next-auth/react";
// import { useRouter } from "next/navigation"; //iz nekog razloga push na url ne radi sa rauterom

export const CredentialsForm = () => {
  //   const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [callbackUrl, setCallbackUrl] = useState("");

  useEffect(() => {
    const query = new URLSearchParams(window.location.search);
    const callbackUrlParam = query.get("callbackUrl");
    if (callbackUrlParam) {
      setCallbackUrl(callbackUrlParam);
    }
  }, []);

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const clearInputs = () => {
    setEmail("");
    setPassword("");
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    signIn("credentials", {
      email,
      password,
      redirect: false,
    })
      .then((res) => {
        if (res.error) {
          setError(JSON.parse(res.error).message);
        } else {
          clearInputs();
          // Preusmeravanje na callback URL
          window.location.href = callbackUrl || "/";
          //   router.push(callbackUrl || "/");
          //   router.push(callbackUrl);
        }
      })
      .catch((e) => console.error(e));
  };

  return (
    <form className="w-full" onSubmit={handleSubmit}>
      <label htmlFor="email" className="sr-only">
        Email address
      </label>
      <input
        id="email"
        name="email"
        type="email"
        autoComplete="email"
        required=""
        value={email}
        onChange={handleEmailChange}
        className="block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-black focus:ring-offset-1  text-black"
        placeholder="Email Address"
      />
      <label htmlFor="password" className="sr-only">
        Password
      </label>
      <input
        id="password"
        name="password"
        type="password"
        autoComplete="current-password"
        required=""
        className="mt-2 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-black focus:ring-offset-1 text-black"
        placeholder="Password"
        value={password}
        onChange={handlePasswordChange}
      />
      <p className="mb-3 mt-2 text-sm text-gray-500">
        <a
          href="/forgot-password"
          className="text-blue-800 hover:text-blue-600"
        >
          Reset your password?
        </a>
      </p>
      <button
        type="submit"
        className="inline-flex w-full items-center justify-center rounded-lg bg-black p-2 py-3 text-sm font-medium text-white outline-none focus:ring-2 focus:ring-black focus:ring-offset-1 disabled:bg-gray-400"
      >
        Continue
      </button>
      {error && <p className="text-red-500 font-bold text-center">{error}</p>}
    </form>
  );
};
