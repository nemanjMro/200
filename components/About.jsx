import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";

export const About = () => {
  return (
    <section className="flex flex-col w-full md:w-3/6 items-center md:justify-center lg:justify-center justify-center text-white border rounded border-blue-500 px-2 py-10">
      <div className="">
        <Link href="/">
          <Image
            src="/logo.svg"
            alt="logo free casino games"
            width={87}
            height={21}
          />
        </Link>
      </div>
      <h2 className=" text-center text-4xl py-5 font-semibold">
        {" "}
        A Platform for Games
      </h2>
      <p className=" text-center pb-6 md:w-2/3">
        Stay ahead of the curve with Spin Logic Slots and subscribe for
        exclusive access to cutting-edge casino insights, bonuses, and
        strategies to maximize your winnings!
      </p>
      <Button
        asChild
        size="lg"
        className="hover:bg-white hover:text-secondary-foreground py-6 my-6"
      >
        <Link href="/login" className=" px-14">
          SUBSCRIBE
        </Link>
      </Button>
    </section>
  );
};
