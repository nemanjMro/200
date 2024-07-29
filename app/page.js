import LandingPage from "@/components/LandingPage";
import { GameList } from "@/components/GameList";
import { About } from "@/components/About";
import { Categories } from "@/components/Categories";
import { Brands } from "@/components/Brands";
import Bonuses from "@/components/Bonuses";
import { promises as fs } from 'fs';
import HomeHeader from "@/components/HomeHeader";
import TopCasinos from "@/components/TopCasinos";
import NoDepositCasinos from "@/components/NoDepositCasinos";
import TrustUs from "@/components/TrustUs";
import HomeGames from "@/components/HomeGames";
import HomeEvaluation from "@/components/HomeEvaluation";
import HomeLatest from "@/components/HomeLatest";
import HomeNoDepositBonus from "@/components/HomeNoDepositBonus";
import HomeMostClaimed from "@/components/HomeMostClaimed";
import HomeExclusiveNoDepositBonuses from "@/components/HomeExclusiveNoDepositBonuses";
import { Button } from "@/components/ui/button";

export default async function Home() {
  const text = {
    // zbog upotrebe cms-a dodata je funkcionalnost da na ovu strelicu (^) recenica bude prelomljena u novi red
    landingText: "Players rate,^ players get!",
    exclusiveText: `Developing strong long-term relationships with top casinos provides us with the resource to negotiate exclusive bonuses that you won’t see on any other site outside of NoDepositKings.
Online casinos are happy to work with us because we send them valuable traffic. In return, they go the extra mile by providing us with exceptionally generous bonuses that they would never want to advertise on their own sites.
When negotiating, our main focus is the get bonuses with the fairest and most favourable bonus terms. We’re all about maximising the value for the player. Explore all exclusive bonuses on our site and start playing with the best!`,
    realMoneyText:`Yes, you can win real money using no deposit bonuses. Providing that players meet the terms and conditions, real money can be won up to the value stipulated by the ‘max cashout’ clause. The ability to withdraw your winnings is what differentiates no deposit bonuses from playing games in demo mode.
We regularly refresh bonus offers from the leading online casinos, including great brands such as Slotocash, Raging Bull Casino, Royal Ace Casino, Spin Casino, and Jackpotcity Casino to make sure we offer the best possible wagering terms which increase your chances of winning real money.`,
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
   <div className="text-[#2B0054]">
      <HomeHeader/>
      <TopCasinos/>
      <NoDepositCasinos/>
      <TrustUs/>
      <div className="w-full h-[2600px] bg-[#2B0054] pt-[200px] text-[#FFFFFF]">
        <HomeGames/>
        <HomeEvaluation number={1}/>
        <HomeEvaluation />
      </div>
      <HomeLatest/>
      <HomeNoDepositBonus/>
      <HomeMostClaimed/>
      <div className="mt-24 w-full h-[1600px] bg-[#2B0054] p-24 text-[#FFFFFF]">
        <div className="whitespace-pre-line w-5/6 m-auto px-16">
          <h2 className="text-[36px] font-semibold">Exclusive No Deposite Bonuses And Free Spins</h2>
          <p className="my-10 text-[17px]">{text.exclusiveText}</p>
        </div>
        <HomeExclusiveNoDepositBonuses/>
        <div className="whitespace-pre-line w-5/6 m-auto px-16 mt-24">
          <h2 className="text-[36px] font-semibold">Can You Win Real Money With No Deposit Bonuses?</h2>
          <p className="my-10 text-[17px]">{text.realMoneyText}</p>
          <Button className='mt-4 bg-[#9D3FF6] text-primary-foreground text-[14px] font-bold rounded-[5px] w-[200px] py-2 animeButton'>
            HOW TO WIN
          </Button>
        </div>
      </div>
   </div>
  );
}
