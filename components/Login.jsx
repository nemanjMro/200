"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";

const Login = () => {
  const { data: session } = useSession();

  return (
    <div id="Login" className="flex">
      <div className="animeButton">
        <div className="pr-2">
          {/* Dugme za prijavu ili odjavu, zavisno od stanja sesije */}
          {!session ? (
            <Button
              asChild
              variant="outline"
              size="sm"
              onClick={() => signIn()}
            >
              <Link className="text-gray-900" href="/login">
                Sign In
              </Link>
            </Button>
          ) : (
            <Button
              asChild
              variant="outline"
              size="sm"
              onClick={() => signOut()}
            >
              <Link className="text-gray-900" href="/">
                Sign Out
              </Link>
            </Button>
          )}
        </div>
      </div>
      {/* <div>
        {" "}
        <Button asChild variant="outline" size="sm" onClick={() => signOut()}>
          <Link className="text-gray-900" href="/">
            Sign Out
          </Link>
        </Button>
      </div> */}
    </div>
  );
};

export default Login;
