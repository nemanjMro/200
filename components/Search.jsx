import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

export const Search = ({ searchQuery, setSearchQuery }) => {
  return (
    <div className=" w-4/5  md:w-2/5 flex flex-col items-center justify-center ">
      <div className="flex justify-start items-center pl-5 w-full h-10 rounded-3xl text-[#5E6166] font-normal text-sm bg-[#1D1F30] mb-5 border-[#5865F2] border">
        <span> 🔍 </span>
        <input
          type="text"
          placeholder="Search by game name"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="bg-transparent outline-none pl-2 w-full text-white"
        />
      </div>
      {/* <div className=" w-full md:w-5/5 pb-10  grid grid-cols-1 md:grid-cols-5 gap-3">
        <Button
          asChild
          size="lg"
          className=" border-spacing-1 bg-[rgb(9,5,55)] border border-[#5865F2] hover:bg-[#5865F2] rounded-3xl"
        >
          <Link href="/" className=" px-10">
            GAME TYPE
          </Link>
        </Button>
        <Button
          asChild
          size="lg"
          className=" border-spacing-1 bg-[rgb(9,5,55)] border border-[#5865F2] hover:bg-[#5865F2] rounded-3xl"
        >
          <Link href="/" className=" px-10">
            SOFTWARE
          </Link>
        </Button>
        <Button
          asChild
          size="lg"
          className=" border-spacing-1 bg-[rgb(9,5,55)] border border-[#5865F2] hover:bg-[#5865F2] rounded-3xl"
        >
          <Link href="/" className=" px-10">
            LABELS
          </Link>
        </Button>
        <Button
          asChild
          size="lg"
          className=" border-spacing-1 bg-[rgb(9,5,55)] border border-[#5865F2] hover:bg-[#5865F2] rounded-3xl"
        >
          <Link href="/" className=" px-10">
            FEATURES
          </Link>
        </Button>
        <Button
          asChild
          size="lg"
          className=" border-spacing-1 bg-[rgb(9,5,55)] border border-[#5865F2] hover:bg-[#5865F2] rounded-3xl"
        >
          <Link href="/" className=" px-10">
            THEMES
          </Link>
        </Button>
      </div> */}
    </div>
  );
};
