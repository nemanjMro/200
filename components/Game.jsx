"use client";

// Komponenta Game.js
// import { useState } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import slugify from "slugify"; // Uvozimo biblioteku za generisanje slugova

// export const Game = ({ games }) => {
//   const [visibleGames, setVisibleGames] = useState(14); // Početni broj vidljivih igara

//   return (
//     <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3">
//       {games.slice(0, visibleGames).map((game) => {
//         // Generišemo slug za ime igre
//         const slug = slugify(game.displayName, { lower: true });

//         return (
//           <div key={game.machineId} className="rounded-md">
//             <div className="item">
//               <Link href={`/game/${game.machineId}/${slug}`}>
//                 <Image
//                   src={game.gameImageUrl}
//                   alt={game.displayName}
//                   width={140}
//                   height={185}
//                   className="rounded-md"
//                 />
//                 <h2 className="text-lg mt-2 text-white font-normal font-raleway">
//                   Rewiew game
//                 </h2>
//               </Link>
//             </div>
//           </div>
//         );
//       })}
//     </div>
//   );
// };

// export default Game;

//=================================================================\
// http://localhost:3000/game/362/big-cat-links

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import slugify from "slugify"; // Uvozimo biblioteku za generisanje slugova

export const Game = ({ games, show }) => {
  const [visibleGames, setVisibleGames] = useState(show); // Početni broj vidljivih igara
  const shouldHideOnSmallScreen = (index) => { //sakriva na telefonu poslednje 2 igrice
    return (
      index >= Math.floor(visibleGames / 3) * 3 &&
      index < visibleGames &&
      index % 3 !== 2
    );
  };
  return (
    <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 md:gap-3 gap-1">
      {games?.slice(0, visibleGames).map((game, index) => {
        // Generisanje slug za ime igre
        const slug = slugify(game.displayName, { lower: true });

        return (
          <div
            key={game.machineId}
            className={`rounded-md ${
              shouldHideOnSmallScreen(index) ? "hidden sm:block" : ""
            }`}
          >
            <Link href={`/game/${game.machineId}/${slug}`} passHref>
              <div className="item">
                <Image
                  src={game.gameImageUrl}
                  alt={game.displayName}
                  width={140}
                  height={185}
                  className="rounded-md"
                />
                <h2 className="text-lg mt-2 text-white font-normal font-raleway hidden md:block">
                  Rewiew game
                </h2>
                <h2 className="text-lg mt-2 text-white font-normal font-raleway md:hidden">
                  Rewiew
                </h2>
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Game;
