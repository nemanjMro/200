// Stranica game/[machId]/[slug]/page.js
// import { useRouter } from "next/router";
"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Ratings } from "@/components/Ratings";
function Game() {
  const pathname = usePathname();
  const parts = pathname.split("/"); // Razdvojite putanju na delove koristeći '/'
  const machid = parts[2]; // Prvi deo je 'game', drugi je machId
  const slug = parts[3]; // Treći deo je slug
  const rating = 4.5;
  const ratedNum = 850;
  const playedTimeNum = 2.836;

  const gameUrl = `https://rtgdemocdk.services-games.com:2072/Lobby.aspx?instantPlay=true&user=&sPassword=&encrypted=True&token=&forReal=False&handcount=&clientIP=186.176.225.66&height=720&width=1280&cdkModule=game&skinId=1&sessionGUID=4cf3f15d-c9ee-4dd4-8bf8-f34b51624c46&gameId=18&machId=${machid}&moduleName=${slug}`;

  return (
    // <div className=" w-full h-screen bg-[#131419]">
    <div className=" w-full h-auto relative flex flex-col justify-start md:justify-center items-center pt-40 text-white">
      <div className="w-full md:max-w-6xl">
        <div className=" flex flex-col justify-start items-start w-full h-auto">
          <h1 className=" text-3xl text-white mb-5 font-semibold">{slug}</h1>
          <div className=" text-[#5e6166] flex flex-row mb-5 font-normal">
            <span className=" text-[#5865F2]">{rating} ⭐</span>
            <span>({ratedNum})</span>
            <p className=" text-[#5e6166]">
              <span> ➡️</span> Played {playedTimeNum} times
            </p>
          </div>
        </div>
        <iframe
          src={gameUrl}
          className=" w-full"
          style={{ width: "100%", height: "720px" }}
          title={slug}
        ></iframe>
      </div>

      <div className=" flex flex-col items-center max-w-6xl w-6xl h-auto rounded-2xl bg-[#131419] p-10 mt-10">
        <div className=" w-full md:w-3/5 pb-5  grid grid-cols-3 md:grid-cols-5 gap-3">
          <Button
            asChild
            size="lg"
            className=" border-spacing-1 bg-[#131419] border border-[#5865F2] hover:bg-[#5865F2]"
          >
            <Link href="/" className=" px-10">
              RATING
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            className=" border-spacing-1 bg-[#131419] border border-[#5865F2] hover:bg-[#5865F2]"
          >
            <Link href="/" className=" px-10">
              REAL MONEY
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            className=" border-spacing-1 bg-[#131419] border border-[#5865F2] hover:bg-[#5865F2]"
          >
            <Link href="/" className=" px-10">
              DETAIL
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            className=" border-spacing-1 bg-[#131419] border border-[#5865F2] hover:bg-[#5865F2]"
          >
            <Link href="/" className=" px-10">
              FEATURES
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            className=" border-spacing-1 bg-[#131419] border border-[#5865F2] hover:bg-[#5865F2]"
          >
            <Link href="/" className=" px-10">
              COMPARE
            </Link>
          </Button>
        </div>

        <div className=" flex justify-center items-center flex-col text-white pt-10">
          <p className=" text-center text-base font-normal">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus
            suscipit, quam perspiciatis quibusdam doloremque laboriosam tenetur
            assumenda veritatis similique expedita ipsa consequatur praesentium
            cumque totam dolor modi error vero illum. Nulla dignissimos sit
            eaque explicabo quae. Id mollitia nesciunt voluptatum quisquam sequi
          </p>
        </div>
      </div>
      <Ratings />
    </div>
  );
}

export default Game;
