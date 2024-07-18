"use client";
import React, { useState, useEffect, useMemo } from "react";
import { Game } from "./Game";
import { Button } from "@/components/ui/button";
import { Search } from "./Search";

export const GameListAllGames = ({ data }) => {
  const [allGames, setAllGames] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(null);
  const show = 100;

  const categories = [
    { id: "slots", name: "SLOTS" },
    { id: "hot", name: "HOT GAMES" },
    { id: "new", name: "NEW GAMES" },
  ];

  const hotGamesMachIds = [
    261, 346, 362, 272, 300, 333, 268, 307, 347, 367, 342, 292, 339, 358, 337,
    232, 348, 181, 341, 271,
  ];
  const newGamesMachIds = [
    35, 413, 3, 330, 3, 412, 1, 371, 356, 35, 410, 411, 404, 380, 348, 403, 402,
    366, 367,
  ];
  const excludedSlotsMachIds = [35, 1, 0, 24, 19, 2, 12];

  useEffect(() => {
    const uniqueGames = Array.from(
      new Set(data.map((game) => `${game.gameId}-${game.machineId}`))
    ).map((id) =>
      data.find((game) => `${game.gameId}-${game.machineId}` === id)
    );
    setAllGames(uniqueGames);
  }, [data]);

  const filteredGames = useMemo(() => {
    let filtered = allGames;

    if (selectedCategory) {
      switch (selectedCategory) {
        case "slots":
          filtered = filtered.filter(
            (game) => !excludedSlotsMachIds.includes(game.machineId)
          );
          break;
        case "hot":
          filtered = filtered.filter((game) =>
            hotGamesMachIds.includes(game.machineId)
          );
          break;
        case "new":
          filtered = filtered.filter((game) =>
            newGamesMachIds.includes(game.machineId)
          );
          break;
      }
    }

    if (searchTerm.trim()) {
      const lowercaseSearchTerm = searchTerm.toLowerCase().trim();
      filtered = filtered.filter((game) => {
        const displayName = game.displayName.toLowerCase();
        if (displayName.startsWith(lowercaseSearchTerm)) return true;
        if (displayName.includes(lowercaseSearchTerm)) return true;
        if (
          game.description &&
          game.description.toLowerCase().includes(lowercaseSearchTerm)
        )
          return true;
        return false;
      });
    }

    return filtered;
  }, [allGames, searchTerm, selectedCategory]);

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const handleCategorySelect = (categoryId) => {
    setSelectedCategory(categoryId === selectedCategory ? null : categoryId);
  };

  return (
    <>
      <div className="flex flex-col items-center w-full md:w-3/5 h-auto rounded-2xl bg-[#131419] p-10">
        <div className="w-full md:w-3/5 pb-10 grid md:grid-cols-3 grid-cols-1 gap-3">
          {categories.map((category) => (
            <Button
              key={category.id}
              onClick={() => handleCategorySelect(category.id)}
              className={`border-spacing-1 ${
                selectedCategory === category.id
                  ? "bg-[#5865F2]"
                  : "bg-[#131419]"
              } border border-[#5865F2] hover:bg-[#5865F2]`}
            >
              {category.name}
            </Button>
          ))}
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
      <Search onSearch={handleSearch} />

      <Game games={filteredGames} show={show} />
    </>
  );
};

export default GameListAllGames;
