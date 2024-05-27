"use client";
import React from "react";
import { useState, useEffect } from "react";
import { Game } from "./Game";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { LatestGames } from "./LatestGames";

export const GameList = ({ data }) => {
  const [games, setGames] = useState([]);
  const show = 14;

  useEffect(() => {
    setGames(data);
  }, [data]);

  return (
    <>
      <div className=" flex flex-col items-center max-w-6xl w-6xl h-auto rounded-2xl bg-[rgb(9,5,55)] p-10">
        <div className=" w-full md:w-3/5 pb-10  grid grid-cols-3 gap-3">
          {/* ponekad se pojavi greska koa ukazuje na Buuton => TypeError: Cannot read properties of null (reading 'useState')  istraziti*/}
          <Button
            asChild
            size="lg"
            className=" border-spacing-1 bg-[rgb(9,5,55)] border border-[#5865F2] hover:bg-[#5865F2]"
          >
            <Link href="/" className=" px-10">
              SLOTS
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            className=" border-spacing-1 bg-[rgb(9,5,55)] border border-[#5865F2] hover:bg-[#5865F2]"
          >
            <Link href="/" className=" px-10">
              HOT GAMES
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            className=" border-spacing-1 bg-[rgb(9,5,55)] border border-[#5865F2] hover:bg-[#5865F2]"
          >
            <Link href="/" className=" px-10">
              PROGRESSIVES
            </Link>
          </Button>
        </div>

        <Game games={games} show={show} />

        <div className=" pt-10">
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
      <LatestGames games={games} />
    </>
  );
};
