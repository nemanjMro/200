"use client";

import { signIn } from "next-auth/react";
import Image from "next/image";

export function GoogleSignInButton() {
  const handleClick = async () => {
    await signIn("google", {
      callbackUrl: `${window.location.origin}`,
    });
  };

  return (
    <button
      onClick={handleClick}
      className=" hover:bg-slate-100 shadow-sm inline-flex h-10 w-full items-center justify-center gap-2 rounded border border-slate-300 bg-white p-2 text-sm font-medium text-black outline-none focus:ring-2 focus:ring-[#333] focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-60"
    >
      <Image
        width={24}
        height={24}
        src="https://www.svgrepo.com/show/475656/google-color.svg"
        alt="Google"
        className="h-[18px] w-[18px] "
      />
      Continue with Google
    </button>
  );
}

export function FacebookSignInButton() {
  const handleClick = async () => {
    await signIn("facebook", {
      callbackUrl: `${window.location.origin}`,
    });
  };

  return (
    <button
      onClick={handleClick}
      className="hover:bg-slate-100 shadow-sm inline-flex h-10 w-full items-center justify-center gap-2 rounded border border-slate-300 bg-white p-2 text-sm font-medium text-black outline-none focus:ring-2 focus:ring-[#333] focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-60"
    >
      <Image
        width={24}
        height={24}
        src="https://www.svgrepo.com/show/475647/facebook-color.svg"
        alt="Facebook sign in button"
        className="h-[18px] w-[18px] "
      />
      Continue with Facebook
    </button>
  );
}
