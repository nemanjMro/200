"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Ratings } from "@/components/Ratings";
import axios from "axios";
import Image from "next/image";

function Game() {
  const [faqState, setFaqState] = useState({
    isOpen1: false,
    isOpen2: false,
    isOpen3: false,
    // Dodaj koliko god je potrebno za broj boxova
  });

  const toggleFAQ = (key) => {
    setFaqState({
      ...faqState,
      [key]: !faqState[key],
    });
  };

  const [themes, setThemes] = useState("");
  const [releaseDate, setReleaseDate] = useState("");
  const [mobile, setMobile] = useState("");
  const [reels, setReels] = useState("");
  const [paylines, setPaylines] = useState("");
  const [rtp, setRtp] = useState("");
  const [volatility, setVolatility] = useState("");
  const [freespins, setFreespins] = useState("");
  const [bonusround, setBonusround] = useState("");
  const [wild, setWild] = useState("");
  const [scattersymbol, setScattersymbol] = useState("");
  const [multiplier, setMultiplier] = useState("");
  const [jackpot, setJackpot] = useState("");
  const [progressive, setProgressive] = useState("");
  const [maxwin, setMaxwin] = useState("");
  const [bonusfeatures, setBonusfeatures] = useState("");

  const [description, setDescription] = useState("");
  const [game, setGame] = useState(null);
  const pathname = usePathname();
  const parts = pathname.split("/"); // Razdvojite putanju na delove koristeći '/'
  const machid = parts[2]; // Prvi deo je 'game', drugi je machId
  const slug = parts[3]; // Treći deo je slug

  // Pretvaram slug u normalno ime
  const formatSlug = (slug) => {
    return slug
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  const formattedName = formatSlug(slug);
  const rating = 4.5;
  const ratedNum = 850;
  const playedTimeNum = 2.836;

  const gameUrl = `https://rtgdemocdk.services-games.com:2072/Lobby.aspx?instantPlay=true&user=&sPassword=&encrypted=True&token=&forReal=False&handcount=&clientIP=186.176.225.66&height=720&width=1280&cdkModule=game&skinId=1&sessionGUID=4cf3f15d-c9ee-4dd4-8bf8-f34b51624c46&gameId=18&machId=${machid}&moduleName=${slug}`;

  // useEffect(() => {
  //   // Hvata podatke sa Strapija
  //   axios
  //     .get(`http://localhost:1337/api/games?filters[machid][$eq]=${machid}`)
  //     .then((response) => {
  //       const gameData = response.data.data[0]?.attributes;
  //       if (gameData) {
  //         setGame(gameData);
  //         setDescription(gameData.description || "Description not available");
  //         setThemes(gameData.themes || "Theme not available");
  //         setReleaseDate(gameData.releaseDate || "Release date not available");
  //         setMobile(gameData.mobile || "Mobile not available");
  //         setReels(gameData.reels || "Reels not available");
  //         setPaylines(gameData.paylines || "Paylines not available");
  //         setRtp(gameData.rtp || "Rtp not available");
  //         setVolatility(gameData.volatility || "Volatility not available");
  //         setFreespins(gameData.freespins || "Free spins not available");
  //         setBonusround(gameData.bonusround || "Bonus round not available");
  //         setWild(gameData.wild || "Wild not available");
  //         setScattersymbol(gameData.scattersymbol || "Scatter symbol not available");
  //         setMultiplier(gameData.multiplier || "Multiplier not available");
  //         setJackpot(gameData.jackpot || "Jackpot not available");
  //         setProgressive(gameData.progressive || "progressive not available");
  //         setMaxwin(gameData.maxwin || "MaxWin not available");
  //         setBonusfeatures(gameData.bonusfeatures || "Bonus features not available");
  //       }
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching game description:", error);
  //     });
  // }, [machid]);

  // if (!game) {
  //   return <p>Loading...</p>;
  // }

  return (
    <div className="w-full h-auto relative flex flex-col justify-start md:justify-center items-center pt-40 text-white">
      <div className="w-full md:max-w-6xl">
        <div className="flex flex-col justify-start items-start w-full h-auto">
          <h1 className="text-3xl text-white mb-5 font-semibold">
            {formattedName}
          </h1>
          <div className="text-[#5e6166] flex flex-row mb-5 font-normal">
            <span className="text-[#5865F2]">{rating} ⭐</span>
            <span>({ratedNum})</span>
            <p className="text-[#5e6166]">
              <span> ➡️</span> Played {playedTimeNum} times
            </p>
          </div>
        </div>
        <iframe
          src={gameUrl}
          className="w-full"
          style={{ width: "100%", height: "720px" }}
          title={formattedName}
        ></iframe>
      </div>
      <div className="flex flex-col items-center max-w-6xl w-6xl h-auto rounded-2xl bg-[#131419] p-10 mt-10">
        <div className="w-full md:w-3/5 pb-5 grid grid-cols-3 md:grid-cols-5 gap-3">
          <Button
            asChild
            size="lg"
            className="border-spacing-1 bg-[#131419] border border-[#5865F2] hover:bg-[#5865F2]"
          >
            <Link href="/" className="px-10">
              RATING
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            className="border-spacing-1 bg-[#131419] border border-[#5865F2] hover:bg-[#5865F2]"
          >
            <Link href="/" className="px-10">
              REAL MONEY
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            className="border-spacing-1 bg-[#131419] border border-[#5865F2] hover:bg-[#5865F2]"
          >
            <Link href="/" className="px-10">
              DETAIL
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            className="border-spacing-1 bg-[#131419] border border-[#5865F2] hover:bg-[#5865F2]"
          >
            <Link href="/" className="px-10">
              FEATURES
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            className="border-spacing-1 bg-[#131419] border border-[#5865F2] hover:bg-[#5865F2]"
          >
            <Link href="/" className="px-10">
              COMPARE
            </Link>
          </Button>
        </div>

        <div className="flex justify-center items-center flex-col text-white pt-10">
          <p className="text-center text-base font-normal">
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia, looked up one of the more
            obscure Latin words, consectetur, from a Lorem Ipsum passage, and
            going through the cites of the word in classical literature,
            discovered the undoubtable source. Lorem Ipsum comes from sections
            1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes
            of Good and Evil) by Cicero, written in 45 BC. This book is a
            treatise on the theory of ethics, very popular during the
            Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit
            amet..", comes from a line in section 1.10.32.
          </p>
        </div>
      </div>
      <Ratings />
      <div className="bg-gray-900 text-white md:w-[45%] w-full">
        <div className="container mx-auto p-6">
          <h1 className="text-xl py-5 mb-5">{formattedName} Game Details</h1>
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
                <p className="text-[#5865F2] text-base pl-5 ">{reels}</p>
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
                <p className="text-[#5865F2] text-base pl-5">{freespins}</p>
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
                <p className="text-[#5865F2] text-base pl-5">{bonusround}</p>
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
                <p className="text-[#5865F2] text-basesese pl-5">{wild}</p>
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
                <h2 className="text-sm font-medium">Scatter Symbol</h2>
                <p className="text-[#5865F2] text-base pl-5">{scattersymbol}</p>
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
                <h2 className="text-sm font-medium">Max Win Per Line</h2>
                <p className="text-[#5865F2] text-base pl-5">{maxwin}</p>
              </div>
            </div>
            <div className="p-4 bg-[#1d1f30] rounded-lg flex items-center">
              <Image
                src="/icon-16.svg"
                alt="logo free casino games"
                width={50}
                height={21}
                className="border border-[#5865F2] rounded-md"
              />
              <div className="pl-3">
                <h2 className="text-sm font-medium">Bonus Features</h2>
                <p className="text-[#5865F2] text-base pl-5">{bonusfeatures}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <div className="flex-col justify-center items-center p-5 px-5 md:px-10 w-[95%] md:w-[55%] border-[1px] border-[#5865F2] rounded-md">
        <div className="flex justify-between items-center">
          <h1 className="text-xl">{formattedName} RTP Industry Comparison</h1>
          <div className="flex justify-center items-center">
            <p className="text-3xl text-[#5865F2] pr-2 cursor-pointer">
              &#9432;
            </p>
            <p className="text-sm text-[#5865F2]"> How RTP Works</p>
          </div>
        </div>
        <div className="flex justify-center w-full h-full py-10">
          <Image
            src="/rtp.png"
            alt="logo free casino games"
            width={600}
            height={100}
          />
        </div>
        <p className="text-sm leading-7">
          Among average return to player rate slots, Kensei Blades ranks #10131
          out of 13853, with an RTP of 95.12%. Players can expect to receive
          $95.12 back from every $100 bet in the long run.
        </p>
      </div>
      <br />
      <div className="flex-col justify-center items-center p-5 px-5 md:px-10 w-[95%] md:w-[55%] border-[1px] border-[#5865F2] rounded-md">
        <div className="flex justify-between items-center">
          <h1 className="text-xl">{formattedName} Volatility</h1>
          <div className="flex justify-center items-center">
            <p className="text-3xl text-[#5865F2] pr-2 cursor-pointer">
              &#9432;
            </p>
            <p className="text-sm text-[#5865F2]"> How Volatility Works</p>
          </div>
        </div>
        <div className="flex justify-center py-10">
          <Image
            src="/medium.png"
            /*src={`/${volatility}.png`} */
            alt="logo free casino games"
            width={600}
            height={100}
          />
        </div>
        <p className="text-sm leading-7">
          Kensei Blades is a{" "}
          <span className="font-medium"> high volatility </span>slot. Play
          Kensei Blades if you are not limited by your budget and enjoy massive,
          less frequent rewards. This is a good choice for experienced players
          who enjoy the thrill of risk-taking and shorter play time.
        </p>
      </div>
      <br /> <br />
      <div className="w-[95%] md:w-[45%]">
        <div className="text-xl pb-6">
          <h1>{formattedName} Slot FAQ</h1>
        </div>

        <div className="flex-col p-5 bg-[#1D1F30] rounded-md mb-4">
          <div
            className="flex justify-between items-center cursor-pointer"
            onClick={() => toggleFAQ("isOpen1")}
          >
            <h1>
              Can I enjoy the Kensei Blades online slot without any payment?
            </h1>
            <span
              className={`transform transition-transform ${
                faqState.isOpen1 ? "rotate-180" : "rotate-0"
              }`}
            >
              &#x25BC;
            </span>
          </div>
          {faqState.isOpen1 && (
            <p className="text-gray mt-3">
              Of course. The Kensei Blades slot can be enjoyed for free on
              Chipy.com, and no downloads are necessary.
            </p>
          )}
        </div>

        <div className="flex-col p-5 bg-[#1D1F30] rounded-md mb-4">
          <div
            className="flex justify-between items-center cursor-pointer"
            onClick={() => toggleFAQ("isOpen2")}
          >
            <h1>
              I'm curious about the RTP of the Kensei Blades slot machine. Could
              you tell me what it is?
            </h1>
            <span
              className={`transform transition-transform ${
                faqState.isOpen2 ? "rotate-180" : "rotate-0"
              }`}
            >
              &#x25BC;
            </span>
          </div>
          {faqState.isOpen2 && (
            <p className="text-gray mt-3">
              Play Kensei Blades online slot, an average RTP slot machine with
              an official RTP of 95.12%, or find more similar and higher RTP
              slots on Chipy.com.
            </p>
          )}
        </div>
      </div>
      <br />
      <br />
    </div>
  );
}

export default Game;
