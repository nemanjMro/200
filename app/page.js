import LandingPage from "@/components/LandingPage";
import { GameList } from "@/components/GameList";
import { About } from "@/components/About";
import { Categories } from "@/components/Categories";
import { Brands } from "@/components/Brands";
import Bonuses from "@/components/Bonuses";
import { promises as fs } from 'fs';

export default async function Home() {
  const text = {
    // zbog upotrebe cms-a dodata je funkcionalnost da na ovu strelicu (^) recenica bude prelomljena u novi red
    landingText: "Players rate,^ players get!",
    offerText:
      "Welcome to Spin Logic Slots! Your go-to hub for top-notch online gambling info, expert ratings, and player reviews. Stay ahead with the latest casino news, including new game releases and exclusive bonuses. Subscribe now for insider access to tips and promotions that you won't find anywhere else. Join us and elevate your online gaming experience today!",
  };

  // const fetchData = async () => {
  //   try {
  //     const response = await fetch(
  //       "https://api.eternalslots.com/game/get-active-games"
  //       // "/public/apiEternalData.json"
  //     );
  //     const data = await response.json();
  //     return data;
  //     // console.log(" data ", data);
  //     // fetch landing text
  //     // zakomentarisano zbog builda na Vercel nije povezxano sa strapijem
  //     // const textResponse = await fetchData();
  //     // const text = await textResponse;
  //   } catch (error) {
  //     console.error("Error fetching games:", error);
  //   }
  // };
  // const data = await fetchData();
  // promena nacina dohvatanja podataka potrebnih za kreiranje url
  const file = await fs.readFile(process.cwd() + '/public/apiEternalData.json', 'utf8');
  const data = JSON.parse(file);

  return (
    // <main className="bg-black flex flex-col justify-center items-center space-y-8 h-screen">
    <div className=" flex flex-col items-center justify-center w-full h-auto bg-[#131419] md:px-0 px-2  pb-0 md:pb-80">
      <LandingPage text={text} />
      {/* <LandingPage /> */}
      <GameList data={data} />
      <About />
      <Categories />
      <Brands />
      <Bonuses />
      {/* <Footer /> */}
      {/* <LatestGames /> */}
    </div>
  );
}
