// import LandingPage from "@/components/LandingPage";
// import { GameList } from "@/components/GameList";
// import { About } from "@/components/About";
// import { Categories } from "@/components/Categories";
// import { Brands } from "@/components/Brands";
// import Bonuses from "@/components/Bonuses";
// import Footer from "@/components/Footer";

// // import { LatestGames } from "@/components/LatestGames";
// // import TopBar from "@/components/TopBar";
// export default async function Home() {
//   // try {
//   const response = await fetch(
//     "https://api.eternalslots.com/game/get-active-games"
//   );
//   const data = await response.json();
//   // } catch (error) {
//   //   console.error("Error fetching games:", error);
//   // }

//   return (
//     // <main className="bg-black flex flex-col justify-center items-center space-y-8 h-screen">
//     <div className=" flex flex-col items-center justify-center w-full h-auto bg-[#131419] md:px-0 px-2  pb-80">
//       <LandingPage />
//       <GameList data={data} />
//       <About />
//       <Categories />
//       <Brands />
//       <Bonuses />
//       <Footer />
//       {/* <LatestGames /> */}
//     </div>
//   );
// }

// druga verzija========================================

import LandingPage from "@/components/LandingPage";
import { GameList } from "@/components/GameList";
import { About } from "@/components/About";
import { Categories } from "@/components/Categories";
import { Brands } from "@/components/Brands";
import Bonuses from "@/components/Bonuses";
import Footer from "@/components/Footer";
import { fetchData } from "@/components/FetchData";

// async function fetchData() {
//   const options = {
//     headers: {
//       Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
//     },
//   };
//   try {
//     const res = await fetch("http://127.0.0.1:1337/api/seo-texts/2", options); // /2 ID je broj koji treba da se menja u zavisnosti od igre

//     const response = await res.json();

//     if (!response) {
//       throw new Error("Failed to fetch data");
//     }

//     return response;
//   } catch (err) {
//     console.error(err);
//     // return <ErrorMessage />;
//   }
// }

// import { LatestGames } from "@/components/LatestGames";
// import TopBar from "@/components/TopBar";
export default async function Home() {
  // try {
  const response = await fetch(
    "https://api.eternalslots.com/game/get-active-games"
  );
  const data = await response.json();
  // console.log(" data ", data);
  // fetch landing text
  const textResponse = await fetchData();
  const text = await textResponse;

  // } catch (error) {
  //   console.error("Error fetching games:", error);
  // }

  return (
    // <main className="bg-black flex flex-col justify-center items-center space-y-8 h-screen">
    <div className=" flex flex-col items-center justify-center w-full h-auto bg-[#131419] md:px-0 px-2  pb-80">
      <LandingPage text={text} />
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
