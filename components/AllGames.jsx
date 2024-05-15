"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

export const AllGames = () => {
  const [games, setGames] = useState([]);
  const [visibleGames, setVisibleGames] = useState(20); // Početni broj vidljivih igara

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const response = await fetch(
          "https://api.eternalslots.com/game/get-active-games"
        );
        const data = await response.json();
        setGames(data);
      } catch (error) {
        console.error("Error fetching games:", error);
      }
    };

    fetchGames();
  }, []);

  const handleShowMore = () => {
    setVisibleGames((prevVisibleGames) => prevVisibleGames + 10); // Dodaj još 2 igre kada se klikne na dugme
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3">
      {games?.slice(0, visibleGames).map((game) => (
        <div key={game.gameId} className=" rounded-md">
          <Image
            src={game?.gameImageUrl}
            alt={game?.displayName}
            width={140}
            height={185}
            objectFit="cover"
            className="rounded-md"
          />
          <h2 className="text-lg mt-2 text-white font-normal font-raleway">
            Rewiew game
          </h2>
          {/* <h2 className="text-lg font-semibold mt-2">{game.displayName}</h2> */}
          {/* <p className="text-sm text-gray-500">{game.description}</p> */}
        </div>
      ))}
      {games.length > visibleGames && (
        <button
          onClick={handleShowMore}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md"
        >
          Prikaži još
        </button>
      )}
    </div>
  );
};

export default AllGames;

//-------------------------------------------------------------------------------------

// import { useEffect, useState } from "react";

// const Home = () => {
//   const [games, setGames] = useState([]);

//   useEffect(() => {
//     // Poziv API endpoint-a za dobijanje informacija o igrama
//     fetch("https://vas-api-endpoint/igre")
//       .then((response) => response.json())
//       .then((data) => setGames(data))
//       .catch((error) => console.error("Greška pri dobijanju igara:", error));
//   }, []);

//   return (
//     <div>
//       <h1>Dobrodošli na početnu stranicu</h1>
//       <div className="games-list">
//         {games.map((game) => (
//           <div key={game.machineId} className="game-item">
//             <img src={game.gameImageUrl} alt={game.displayName} />
//             <h2>{game.displayName}</h2>
//             <p>{game.description}</p>
//             <a
//               href={`https://rtgdemocdk.services-games.com:2072/Lobby.aspx?cdkModule=gameLauncher&skinid=${
//                 game.skinId
//               }&forReal=false&gameid=${game.gameId}&machid=${
//                 game.machineId
//               }&gameName=${encodeURIComponent(game.displayName)}`}
//             >
//               Igrajte {game.displayName}
//             </a>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Home;
