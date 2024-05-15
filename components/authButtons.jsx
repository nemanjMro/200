"use client";

import { signIn } from "next-auth/react";
// import { useState, useEffect } from "react";

export function GoogleSignInButton() {
  //   const [callbackUrl, setCallbackUrl] = useState("");
  //   useEffect(() => {
  //     const query = new URLSearchParams(window.location.search);
  //     const callbackUrlParam = query.get("callbackUrl");
  //     if (callbackUrlParam) {
  //       setCallbackUrl(callbackUrlParam);
  //     }
  //     window.location.href = callbackUrl || "/";
  //   }, []);

  const handleClick = () => {
    signIn("google");
    window.location.href = callbackUrl || "/";
  };

  return (
    <button
      onClick={handleClick}
      className="inline-flex h-10 w-full items-center justify-center gap-2 rounded border border-slate-300 bg-white p-2 text-sm font-medium text-black outline-none focus:ring-2 focus:ring-[#333] focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-60"
    >
      <img
        src="https://www.svgrepo.com/show/475656/google-color.svg"
        alt="Google"
        className="h-[18px] w-[18px] "
      />
      Continue with Google
    </button>
  );
}

export function FacebookSignInButton() {
  const handleClick = () => {
    signIn("facebook");
  };

  return (
    <button
      onClick={handleClick}
      className="inline-flex h-10 w-full items-center justify-center gap-2 rounded border border-slate-300 bg-white p-2 text-sm font-medium text-black outline-none focus:ring-2 focus:ring-[#333] focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-60"
    >
      <img
        src="https://www.svgrepo.com/show/475647/facebook-color.svg"
        alt="Google"
        className="h-[18px] w-[18px] "
      />
      Continue with Facebook
    </button>
  );
}
