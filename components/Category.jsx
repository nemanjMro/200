import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import Link from "next/link";

export const Category = ({ imgUrl, name, description }) => {
  return (
    <>
      {/* <div className=" flex flex-row items-center justify-center"> */}

      {/* <div className=" grid grid-cols-5 align-middle justify-between bg-slate-500"> */}
      <div className=" flex flex-row items-center md:justify-between w-full max-w-6xl lg-6xl h-auto md:h-36 rounded-sm bg-[#131825] md:p-5 my-2 p-4">
        <Image
          src={imgUrl}
          alt="logo free casino games"
          width={87}
          height={21}
        />
        <div className="hidden w-2/4 md:flex flex-col items-start p-9 justify-center">
          <h2 className=" font-semibold text-2xl">{name}</h2>
          <p className=" font-normal w-3/4 text-sm">
            {description}
            <br />
            {/* Game */}
          </p>
        </div>
        {/* // pojavljuje se sami na malom ekranu inace je skriven */}
        <div className="flex md:hidden flex-col h-auto">
          <div className="flex flex-col items-start pl-10 justify-center">
            <h2 className=" font-semibold text-2xl pb-2">{name}</h2>
            <p className=" font-normal text-sm pb-2">
              {description}
            </p>
          </div>
          <div className="flex md:hidden flex-col  items-start pl-10 py-1 pt-2 justify-center">
            <Button
              asChild
              size="lg"
              className="hover:bg-white hover:text-secondary-foreground"
            >
              <Link href="/games" className=" px-10">
                SEE ALL
              </Link>
            </Button>
          </div>
        </div>
        {/* // pojavljuje se samo na veikom ekranu inace je skriven */}

        <div className=" flex-col w-3/6 items-start p-6 justify-center hidden lg:flex">
          ⭐⭐⭐⭐⭐
        </div>
        {/* <div className=" flex-col items-start p-6 justify-center hidden lg:flex">
          {" "}
          <p>
            {" "}
            <span className=" text-[#5865F2] ">DESCRIPTION </span>
            <br />
            Armed with an arsenal of futuristic weapons
          </p>{" "}
        </div> */}
        <div className="hidden md:flex flex-col  items-start p-6 justify-center pt-12">
          <Button
            asChild
            size="lg"
            className="hover:bg-white hover:text-secondary-foreground"
          >
            <Link href="/games" className=" px-10">
              SEE ALL
            </Link>
          </Button>
          {/* <span className=" font-normal text-sm">T&C applies</span> */}
        </div>
      </div>
    </>
  );
};
