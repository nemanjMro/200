import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import slugify from "slugify";
import { Button } from "./ui/button";

export const Game = ({ games, show }) => {
  const [visibleGames, setVisibleGames] = useState(show);

  const loadMore = () => {
    setVisibleGames(prev => prev + show);
  };

  return (
    <>
      <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 md:gap-3 gap-1">
        {games?.slice(0, visibleGames).map((game) => {
          const slug = slugify(game.displayName, { lower: true });
          
          return (
            <div key={game.machineId} className="rounded-md">
              <Link href={`${slug}`} passHref>
                <div className="item">
                  <Image
                    src={game.gameImageUrl}
                    alt={game.displayName}
                    width={140}
                    height={185}
                    className="rounded-md"
                  />
                  <h2 className="text-lg mt-2 text-white font-normal font-raleway hidden md:block">
                    Review game
                  </h2>
                  <h2 className="text-lg mt-2 text-white font-normal font-raleway md:hidden">
                    Review
                  </h2>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
      {/* {visibleGames < games.length && (
        <Button onClick={loadMore} className="mt-4 mb-10">Load More</Button>
      )} */}
    </>
  );
};

export default Game;