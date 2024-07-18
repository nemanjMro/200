"use client";
import { useEffect, useState } from "react";
import GameListAllGames from "./GameListAllGames";

export const AllGames = () => {
  const [games, setGames] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const gamesResponse = await fetch("/apiEternalData.json");
        const gamesData = await gamesResponse.json();
        setGames(gamesData);

        // Pretpostavimo da imamo endpoint za kategorije
        const categoriesResponse = await fetch("/apiCategories.json");
        const categoriesData = await categoriesResponse.json();
        setCategories(categoriesData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <GameListAllGames data={games} categories={categories} />
    </div>
  );
};

export default AllGames;