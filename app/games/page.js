import AllGames from "@/components/AllGames";
import LandingGamesPage from "@/components/LandingGamesPage";
import { fetchData } from "@/components/FetchData";
import { GameListAllGames } from "@/components/GameListAllGames";

// export async function getStaticProps() {
//   const response = await fetch(
//     "https://api.eternalslots.com/game/get-active-games"
//   );
//   const data = await response.json();

//   return {
//     props: {
//       data,
//     },
//   };
// }

// try {
const response = await fetch(
  "https://api.eternalslots.com/game/get-active-games"
);
const data = await response.json();
// console.log(" data ", data);

export default async function Games(props) {
  // fetch landing text
  const textResponse = await fetchData();
  const text = await textResponse;

  return (
    <div className=" flex flex-col items-center justify-center w-full h-auto bg-[#131419] md:px-0 px-2  pb-80">
      <LandingGamesPage text={text} />
      <GameListAllGames data={data} />

      {/* <AllGames data={data} /> */}
    </div>
  );
}
