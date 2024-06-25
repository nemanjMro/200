"use client";
import React, { useState, useEffect } from "react";
import { Game } from "./Game";
import { Button } from "@/components/ui/button";
// import Link from "next/link";
import { Search } from "./Search";

export const GameListAllGames = ({ data }) => {
  const [games, setGames] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filter, setFilter] = useState(null);
  const show = 100;

  useEffect(() => {
    setGames(data);
  }, [data]);

  // MachineId hot igrica
  const hotMachineIds = [
    261, 346, 362, 272, 300, 333, 268, 307, 347, 367, 342, 292, 339, 358, 337,
    232, 348, 181, 341, 271,
  ];
  // MachineId new igrica
  const newMachineIds = [
    35, 413, 3, 330, 3, 412, 1, 371, 356, 35, 410, 411, 404, 380, 348, 403, 402,
    366, 367,
  ];
  // GameId table igrica koje treba isključiti kako bi se pokazale samo slots
  const excludeSlotGameIds = [35, 1, 0, 24, 19 ,2 , 12];

  const filteredGames = games
    .filter((game) =>
      game.displayName.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .filter((game) => {
      if (filter === "hot") {
        return hotMachineIds.includes(game.machineId);
      }
      if (filter === "new") {
        return newMachineIds.includes(game.machineId);
      }
      if (filter === "slots") {
        return !excludeSlotGameIds.includes(game.gameId);
      }
      return true;
    });

  return (
    <>
      <div className="flex flex-col items-center max-w-6xl w-6xl h-auto rounded-2xl bg-[#131419] p-10">
        <div className="w-full md:w-3/5 pb-10 grid md:grid-cols-3 grid-cols-1 gap-3">
          <Button
            size="lg"
            className="border-spacing-1 bg-[#131419] border border-[#5865F2] hover:bg-[#5865F2]"
            onClick={() => setFilter("slots")}
          >
            SLOTS
          </Button>
          <Button
            size="lg"
            className="border-spacing-1 bg-[#131419] border border-[#5865F2] hover:bg-[#5865F2]"
            onClick={() => setFilter("hot")}
          >
            HOT GAMES
          </Button>
          <Button
            size="lg"
            className="border-spacing-1 bg-[#131419] border border-[#5865F2] hover:bg-[#5865F2]"
            onClick={() => setFilter("new")}
          >
            NEW GAMES
          </Button>
        </div>

        <div className="flex justify-center items-center flex-col text-white pt-10">
          <h2 className="text-xl font-semibold pb-12">Our slots</h2>
          <p className="text-center text-base font-normal">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus
            suscipit, quam perspiciatis quibusdam doloremque laboriosam tenetur
            assumenda veritatis similique expedita ipsa consequatur praesentium
            cumque totam dolor modi error vero illum. Nulla dignissimos sit
            eaque explicabo quae. Id mollitia nesciunt voluptatum quisquam sequi
          </p>
        </div>
      </div>
      <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

      <Game games={filteredGames} show={show} />
    </>
  );
};
