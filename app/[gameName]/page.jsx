import React from "react";
import GameFrame from "@/components/GameFrame";
import { Button } from "@/components/ui/button";
import StarRating from "@/components/StarRating";
import Image from "next/image";

export async function generateStaticParams() {
  const response = await fetch(
    "https://api.eternalslots.com/game/get-active-games"
  );
  const allGames = await response.json();

  return allGames.map((game) => ({
    gameName: game.displayName
      .toLowerCase()
      .replace(/[^a-z0-9/]+/g, "-")
      .replace(/(^-|-$)/g, ""),
  }));
}

export default async function GameDetails({ params }) {
  const { gameName } = params;

  async function fetchGame() {
    const response = await fetch(
      "https://api.eternalslots.com/game/get-active-games"
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const allGames = await response.json();
    const gameData = allGames.find(
      (g) =>
        g.displayName
          .toLowerCase()
          .replace(/[^a-z0-9/]+/g, "-")
          .replace(/(^-|-$)/g, "") === gameName
    );
    if (!gameData) {
      throw new Error("Game not found");
    }
    return gameData;
  }
  const game = await fetchGame();

  async function fetchGameDetails(displayName) {
    const response = await fetch(
      "https://spinlogic.eternalslots.com/api/games"
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const detailsData = await response.json();
    const gameDetails = detailsData.data.find(
      (g) => g.attributes.displayName === displayName
    );
    if (gameDetails) {
      return {
        scatter: gameDetails.attributes.scatter || "N/A",
        multiplier: gameDetails.attributes.multiplier || "N/A",
        jackpot: gameDetails.attributes.jackpot || "N/A",
        themes: gameDetails.attributes.themes || "N/A",
        mobile: gameDetails.attributes.mobile || "N/A",
        rtp: gameDetails.attributes.rtp || "N/A",
        volatility: gameDetails.attributes.volatility || "N/A",
        freeSpins: gameDetails.attributes.freeSpins || "N/A",
        bonusRound: gameDetails.attributes.bonusRound || "N/A",
        wild: gameDetails.attributes.wild || "N/A",
        progressive: gameDetails.attributes.progressive || "N/A",
        maxWin: gameDetails.attributes.maxWin || "N/A",
        bonusFeatures: gameDetails.attributes.bonusFeatures || "N/A",
      };
    } else {
      return {
        scatter: "N/A",
        multiplier: "N/A",
        jackpot: "N/A",
        wild: "N/A",
        volatility: "N/A",
        themes: "N/A",
        mobile: "N/A",
        rtp: "N/A",
        freeSpins: "N/A",
        bonusRound: "N/A",
        wild: "N/A",
        progressive: "N/A",
        maxWin: "N/A",
        bonusFeatures: "N/A",
      };
    }
  }

  const gameDetails = await fetchGameDetails(game.displayName);


  const buttons = ["RATING", "REAL MONEY", "DETAIL", "FEATURES", "COMPARE"];

  return (
    <div className="w-full flex justify-center">
      <div className="w-full max-w-4xl">
        <h1 className="text-left font-medium text-3xl py-3">
          {game.displayName}
        </h1>

        <div className="flex flex-col items-center w-full">
          <div className="flex justify-center items-center w-full py-2">
            <GameFrame machineId={game.machineId} />
          </div>
          <div className="flex flex-wrap justify-center w-full gap-4 py-5">
            {buttons.map((buttonText, index) => (
              <Button
                key={index}
                variant="outline"
                className="md:w-[130px] w-1/2 p-4 bg-[#131419] border border-[#5865F2] hover:bg-[#5865F2]"
              >
                {buttonText}
              </Button>
            ))}
          </div>

          <div className="flex-col w-[95%]">
            <h1 className="text-xl py-5 w-full">
              {game.displayName} Slot Ratings
            </h1>
            <div className="flex justify-center items-center w-full py-5">
              <StarRating />
            </div>
          </div>
          <div className="w-full flex flex-col items-center">
            <div className="bg-gray-900 text-white w-full md:w-[85%] lg:w-[65%] 2xl:w-full">
              <div className="container mx-auto p-5">
                <h1 className="text-xl pb-5 pt-0 mb-5">
                  {game.displayName} Game Details
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { label: "Themes", value: gameDetails.themes, icon: "/icon-1.svg" },
                    { label: "Release Date", value: game.created, icon: "/icon-2.svg" },
                    { label: "Mobile", value: gameDetails.mobile, icon: "/icon-3.svg" },
                    { label: "Reels", value: game.reelsCount, icon: "/icon-4.svg" },
                    { label: "Paylines", value: game.linesCount, icon: "/icon-5.svg" },
                    { label: "RTP", value: gameDetails.rtp, icon: "/icon-6.svg" },
                    { label: "Volatility", value: gameDetails.volatility, icon: "/icon-7.svg" },
                    { label: "Free Spins", value: gameDetails.freeSpins, icon: "/icon-8.svg" },
                    { label: "Bonus Round", value: gameDetails.bonusRound, icon: "/icon-9.svg" },
                    { label: "Wild", value: gameDetails.wild, icon: "/icon-10.svg" },
                    { label: "Scatter", value: gameDetails.scatter, icon: "/icon-11.svg" },
                    { label: "Multiplier", value: gameDetails.multiplier, icon: "/icon-12.svg" },
                    { label: "Jackpot", value: gameDetails.jackpot, icon: "/icon-13.svg" },
                    { label: "Progressive", value: gameDetails.progressive, icon: "/icon-14.svg" },
                    { label: "Max Win", value: gameDetails.maxWin, icon: "/icon-15.svg" },
                    { label: "Bonus Features", value: gameDetails.bonusFeatures, icon: "/icon-16.svg" },
                  ].map((detail, index) => (
                    <div key={index} className="p-4 bg-[#1d1f30] rounded-lg flex items-center">
                      <Image
                        src={detail.icon}
                        alt={`icon ${detail.label.toLowerCase()}`}
                        width={50}
                        height={21}
                        className="border border-[#5865F2] rounded-md"
                      />
                      <div className="pl-3">
                        <h2 className="text-sm font-medium">{detail.label}</h2>
                        <p className="text-[#5865F2] text-base pl-5">
                          {detail.value}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="w-full flex flex-col items-center pb-16">
            <div className="w-[90%] lg:w-full md:w-4/4 border border-[#5865F2] mb-5 p-3">
              <p className="text-left">
                {game.displayName} RTP Industry Comparison
              </p>
              <Image
                src="/rtp.png"
                alt="rtp casino games"
                width={800}
                height={21}
                className="mx-auto"
              />
              <p className="text-center">
                Among average return to player rate slots, Kensei Blades ranks
                #10131 out of 13853, with an RTP of 95.12%. Players can expect
                to receive $95.12 back from every $100 bet in the long run.
              </p>
            </div>

            <div className="w-[90%] lg:w-full md:w-4/4 border border-[#5865F2] p-3">
              <p className="text-left">{game.displayName} Volatility</p>
              <Image
                src={`/${gameDetails.volatility}.png`}
                alt="volatility casino games"
                width={800}
                height={21}
                className="mx-auto"
              />
              <p className="text-center">
                Among average return to player rate slots, Kensei Blades ranks
                #10131 out of 13853, with an RTP of 95.12%. Players can expect
                to receive $95.12 back from every $100 bet in the long run.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export async function generateMetadata({ params }) {
  const { gameName } = params;

  const response = await fetch(
    "https://api.eternalslots.com/game/get-active-games"
  );
  const allGames = await response.json();

  const game = allGames.find(
    (game) =>
      game.displayName
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)/g, "") === gameName
  );

  if (!game) {
    return { notFound: true };
  }

  const title = game.displayName;
  return {
    title: title,
  };
}
