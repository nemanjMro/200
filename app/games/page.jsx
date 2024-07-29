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
      "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available. In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the ",
  };

  return (
    <div className=" flex flex-col items-center justify-center w-full h-auto bg-[#FBF2FF] md:px-0 px-2">
      <LandingGamesPage text={text} />
      <GameListAllGames data={data} />
    </div>
  );
}
