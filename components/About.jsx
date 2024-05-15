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
      <h2 className=" text-center text-xl py-6 font-semibold my-6">
        {" "}
        A Platform for Games
      </h2>
      <p className=" text-center pb-6 md:w-2/3">
        Dress with crossover V-neckline with ruffled trims.opns Features &
        longslee sleeves with ruffled trims, elastic cuffs, a cinched waist
        ruffled hem loreming ipsum dolor amet. Lorem ipsum dolor amet.
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
