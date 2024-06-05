// import AllGames from "@/components/AllGames";
import LandingGamesPage from "@/components/LandingGamesPage";
import { GameListAllGames } from "@/components/GameListAllGames";
import { promises as fs } from 'fs';

// const fetchData = async () => {
  //   try {
    //     const response = await fetch(
      //       "https://api.eternalslots.com/game/get-active-games"
      //     );
      //     const data = await response.json();
      //     if (!data) {
        //       throw new Error("Failed to fetch data");
        //     }
        //     return data;
        //   } catch (err) {
          //     console.error(err);
          //     // return <ErrorMessage />;
          //   }
          // };
          
          // const data = await fetchData();
// promena nacina dohvatanja podataka potrebnih za kreiranje url za igrice
const file = await fs.readFile(process.cwd() + '/public/apiEternalData.json', 'utf8');
const data = JSON.parse(file);

export default async function Games(props) {
  const text = {
    // zbog upotrebe cms-a dodata je funkcionalnost da na ovu strelicu (^) recenica bude prelomljena u novi red
    landingText: "Games,^ Games!",
    offerText:
      "Welcome to Spin Logic Slots! Your go-to hub for top-notch online gambling info, expert ratings, and player reviews. Stay ahead with the latest casino news, including new game releases and exclusive bonuses. Subscribe now for insider access to tips and promotions that you won't find anywhere else. Join us and elevate your online gaming experience today!",
  };

  return (
    <div className=" flex flex-col items-center justify-center w-full h-auto bg-[#131419] md:px-0 px-2  pb-80">
      <LandingGamesPage text={text} />
      <GameListAllGames data={data} />
    </div>
  );
}
