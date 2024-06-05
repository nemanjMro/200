"use client";
import React from "react";
import { useState, useEffect } from "react";
import { Game } from "./Game";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Search } from "./Search";
// import { LatestGames } from "./LatestGames";

export const GameListAllGames = ({ data }) => {
  const [games, setGames] = useState([]);
  const show = 100;

  useEffect(() => {
    setGames(data);
  }, [data]);

  return (
    <>
      <div className=" flex flex-col items-center max-w-6xl w-6xl h-auto rounded-2xl bg-[#131419] p-10">
        <div className=" w-full md:w-3/5 pb-10  grid grid-cols-3  md:grid-cols-1  gap-3">
          <Button
            asChild
            size="lg"
            className=" border-spacing-1 bg-[#131419] border border-[#5865F2] hover:bg-[#5865F2]"
          >
            <Link href="/" className=" px-10">
              SLOTS
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            className=" border-spacing-1 bg-[#131419] border border-[#5865F2] hover:bg-[#5865F2]"
          >
            <Link href="/" className=" px-10">
              HOT GAMES
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            className=" border-spacing-1 bg-[#131419] border border-[#5865F2] hover:bg-[#5865F2]"
          >
            <Link href="/" className=" px-10">
              NEW GAMES
            </Link>
          </Button>
        </div>

        <div className=" flex justify-center items-center flex-col text-white pt-10">
          <h2 className=" text-xl font-semibold pb-12">Our free slots</h2>
          <p className=" text-center text-base font-normal">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus
            suscipit, quam perspiciatis quibusdam doloremque laboriosam tenetur
            assumenda veritatis similique expedita ipsa consequatur praesentium
            cumque totam dolor modi error vero illum. Nulla dignissimos sit
            eaque explicabo quae. Id mollitia nesciunt voluptatum quisquam sequi
          </p>
        </div>
      </div>
      <Search />

      <Game games={games} show={show} />

      {/* <LatestGames games={games} /> */}
    </>
  );
};
