"use client";
import React from "react";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";

const GameStats = () => {
  const [progressive, setProgressive] = useState("");
  const [description, setDescription] = useState("");
  const [themes, setThemes] = useState("");
  const [releaseDate, setReleaseDate] = useState("");
  const [mobile, setMobile] = useState("");
  const [reels, setReels] = useState("");
  const [paylines, setPaylines] = useState("");
  const [rtp, setRtp] = useState("");
  const [volatility, setVolatility] = useState("");
  const [freeSpins, setFreeSpins] = useState("");
  const [bonusRound, setBonusRound] = useState("");
  const [wild, setWild] = useState("");
  const [scatter, setScatter] = useState("");
  const [multiplier, setMultiplier] = useState("");
  const [jackpot, setJackpot] = useState("");
  const [maxWin, setMaxWin] = useState("");
  const [bonusFeatures, setBonusFeatures] = useState("");
  const [displayName, setDisplayName] = useState("");

  const pathname = usePathname();
  const parts = pathname.split("/");
  const slug = parts[1];
  useEffect(() => {
    axios
      .get(`http://localhost:1337/api/games?filters[slug][$eq]=${slug}`)
      .then((response) => {
        const gameData = response.data.data[0]?.attributes;
        if (gameData) {
          setProgressive(gameData.progressive || "progressive not available");
          setDescription(gameData.description || "Description not available");
          setThemes(gameData.themes || "Theme not available");
          setReleaseDate(gameData.releaseDate || "Release Date not available");
          setMobile(gameData.mobile || "Mobile not available");
          setReels(gameData.reels || "Reels count not available");
          setPaylines(gameData.paylines || "Paylines not available");
          setRtp(gameData.rtp || "Rtp not available");
          setVolatility(gameData.volatility || "Volatility not available");
          setFreeSpins(gameData.freeSpins || "Free spins not available");
          setBonusRound(gameData.bonusRound || "Bonus round not available");
          setWild(gameData.wild || "Wild not available");
          setScatter(gameData.scatter || "Scatter not available");
          setMultiplier(gameData.multiplier || "Multiplier not available");
          setJackpot(gameData.jackpot || "Jackpot not available");
          setMaxWin(gameData.maxWin || "Max win not available");
          setBonusFeatures(
            gameData.bonusFeatures || "Bonus features not available"
          );
          setDisplayName(gameData.displayName || "progressive not available");
        }
      })
      .catch((error) => {
        console.error("Error fetching game description:", error);
      });
  }, [slug]);

  return (
    <div className="flex-col w-full items-center justify-center">
      <div className="bg-gray-900 text-white w-full md:w-[85%] lg:w-[65%] 2xl:w-full">
        <div className=" container mx-auto p-6">
          <h1 className="text-xl py-5 mb-5">{displayName} Game Details</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-[#1d1f30] rounded-lg flex items-center">
              <Image
                src="/icon-1.svg"
                alt="logo free casino games"
                width={50}
                height={21}
                className="border border-[#5865F2] rounded-md"
              />
              <div className="pl-3">
                <h2 className="text-sm font-medium">Themes</h2>
                <p className="text-[#5865F2] text-base pl-5">{themes}</p>
              </div>
            </div>
            <div className="p-4 bg-[#1d1f30] rounded-lg flex items-center">
              <Image
                src="/icon-2.svg"
                alt="logo free casino games"
                width={50}
                height={21}
                className="border border-[#5865F2] rounded-md"
              />
              <div className="pl-3">
                <h2 className="text-sm font-medium">Release Date</h2>
                <p className="text-[#5865F2] text-base pl-5">{releaseDate}</p>
              </div>
            </div>
            <div className="p-4 bg-[#1d1f30] rounded-lg flex items-center">
              <Image
                src="/icon-3.svg"
                alt="logo free casino games"
                width={50}
                height={21}
                className="border border-[#5865F2] rounded-md"
              />
              <div className="pl-3">
                <h2 className="text-sm font-medium">Mobile</h2>
                <p className="text-[#5865F2] text-base pl-5">{mobile}</p>
              </div>
            </div>
            <div className="p-4 bg-[#1d1f30] rounded-lg flex items-center">
              <Image
                src="/icon-4.svg"
                alt="logo free casino games"
                width={50}
                height={21}
                className="border border-[#5865F2] rounded-md"
              />
              <div className="pl-3">
                <h2 className="text-sm font-medium">Reels</h2>
                <p className="text-[#5865F2] text-base pl-5">{reels}</p>
              </div>
            </div>
            <div className="p-4 bg-[#1d1f30] rounded-lg flex items-center">
              <Image
                src="/icon-5.svg"
                alt="logo free casino games"
                width={50}
                height={21}
                className="border border-[#5865F2] rounded-md"
              />
              <div className="pl-3">
                <h2 className="text-sm font-medium">Paylines</h2>
                <p className="text-[#5865F2] text-base pl-5">{paylines}</p>
              </div>
            </div>
            <div className="p-4 bg-[#1d1f30] rounded-lg flex items-center">
              <Image
                src="/icon-6.svg"
                alt="logo free casino games"
                width={50}
                height={21}
                className="border border-[#5865F2] rounded-md"
              />
              <div className="pl-3">
                <h2 className="text-sm font-medium">RTP</h2>
                <p className="text-[#5865F2] text-base pl-5">{rtp}</p>
              </div>
            </div>
            <div className="p-4 bg-[#1d1f30] rounded-lg flex items-center">
              <Image
                src="/icon-7.svg"
                alt="logo free casino games"
                width={50}
                height={21}
                className="border border-[#5865F2] rounded-md"
              />
              <div className="pl-3">
                <h2 className="text-sm font-medium">Volatility</h2>
                <p className="text-[#5865F2] text-base pl-5">{volatility}</p>
              </div>
            </div>
            <div className="p-4 bg-[#1d1f30] rounded-lg flex items-center">
              <Image
                src="/icon-8.svg"
                alt="logo free casino games"
                width={50}
                height={21}
                className="border border-[#5865F2] rounded-md"
              />
              <div className="pl-3">
                <h2 className="text-sm font-medium">Free Spins</h2>
                <p className="text-[#5865F2] text-base pl-5">{freeSpins}</p>
              </div>
            </div>
            <div className="p-4 bg-[#1d1f30] rounded-lg flex items-center">
              <Image
                src="/icon-9.svg"
                alt="logo free casino games"
                width={50}
                height={21}
                className="border border-[#5865F2] rounded-md"
              />
              <div className="pl-3">
                <h2 className="text-sm font-medium">Bonus Round</h2>
                <p className="text-[#5865F2] text-base pl-5">{bonusRound}</p>
              </div>
            </div>
            <div className="p-4 bg-[#1d1f30] rounded-lg flex items-center">
              <Image
                src="/icon-10.svg"
                alt="logo free casino games"
                width={50}
                height={21}
                className="border border-[#5865F2] rounded-md"
              />
              <div className="pl-3">
                <h2 className="text-sm font-medium">Wild</h2>
                <p className="text-[#5865F2] text-base pl-5">{wild}</p>
              </div>
            </div>
            <div className="p-4 bg-[#1d1f30] rounded-lg flex items-center">
              <Image
                src="/icon-11.svg"
                alt="logo free casino games"
                width={50}
                height={21}
                className="border border-[#5865F2] rounded-md"
              />
              <div className="pl-3">
                <h2 className="text-sm font-medium">Scatter</h2>
                <p className="text-[#5865F2] text-base pl-5">{scatter}</p>
              </div>
            </div>
            <div className="p-4 bg-[#1d1f30] rounded-lg flex items-center">
              <Image
                src="/icon-12.svg"
                alt="logo free casino games"
                width={50}
                height={21}
                className="border border-[#5865F2] rounded-md"
              />
              <div className="pl-3">
                <h2 className="text-sm font-medium">Multiplier</h2>
                <p className="text-[#5865F2] text-base pl-5">{multiplier}</p>
              </div>
            </div>
            <div className="p-4 bg-[#1d1f30] rounded-lg flex items-center">
              <Image
                src="/icon-13.svg"
                alt="logo free casino games"
                width={50}
                height={21}
                className="border border-[#5865F2] rounded-md"
              />
              <div className="pl-3">
                <h2 className="text-sm font-medium">Jackpot</h2>
                <p className="text-[#5865F2] text-base pl-5">{jackpot}</p>
              </div>
            </div>
            <div className="p-4 bg-[#1d1f30] rounded-lg flex items-center">
              <Image
                src="/icon-14.svg"
                alt="logo free casino games"
                width={50}
                height={21}
                className="border border-[#5865F2] rounded-md"
              />
              <div className="pl-3">
                <h2 className="text-sm font-medium">Progressive</h2>
                <p className="text-[#5865F2] text-base pl-5">{progressive}</p>
              </div>
            </div>
            <div className="p-4 bg-[#1d1f30] rounded-lg flex items-center">
              <Image
                src="/icon-15.svg"
                alt="logo free casino games"
                width={50}
                height={21}
                className="border border-[#5865F2] rounded-md"
              />
              <div className="pl-3">
                <h2 className="text-sm font-medium">Max Win</h2>
                <p className="text-[#5865F2] text-base pl-5">{maxWin}</p>
              </div>
            </div>
            <div className="p-4 bg-[#1d1f30] rounded-lg flex items-center">
              <Image
                src="/icon-15.svg"
                alt="logo free casino games"
                width={50}
                height={21}
                className="border border-[#5865F2] rounded-md"
              />
              <div className="pl-3">
                <h2 className="text-sm font-medium">Bonus Features</h2>
                <p className="text-[#5865F2] text-base pl-5">{bonusFeatures}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-col justify-center items-center w-full">
        <div className="flex flex-col items-center w-full">
          <div className="flex flex-col items-center w-[90%] lg:w-full md:w-4/4 border border-[#5865F2] mb-5 p-3">
            <p className="text-left">{displayName} RTP Industry Comparison</p>
            <Image
              src="/rtp.png"
              alt="rtp casino games"
              width={800}
              height={21}
              className="mx-auto"
            />
            <p className="text-center">
              Among average return to player rate slots, Kensei Blades ranks
              #10131 out of 13853, with an RTP of 95.12%. Players can expect to
              receive $95.12 back from every $100 bet in the long run.
            </p>
          </div>
          <div className="flex flex-col items-center w-[90%] lg:w-full md:w-4/4 border border-[#5865F2] p-3">
            <p className="text-left">{displayName} Volatility</p>
            <Image
              src={`/${volatility}.png`}
              alt="volatility casino games"
              width={800}
              height={21}
              className="mx-auto"
            />
            <p className="text-center">
              Among average return to player rate slots, Kensei Blades ranks
              #10131 out of 13853, with an RTP of 95.12%. Players can expect to
              receive $95.12 back from every $100 bet in the long run.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameStats;
