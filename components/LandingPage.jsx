import Image from "next/image";
import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

import profilePic from "@/public/spin-logic-cash-bandit-slot-game.png";

// <!-- Extra small (mobilni telefoni) -->
// <div class="sm:hidden">...</div>

// <!-- Small (tableti: 640px and up) -->                         640 px  sm
// <div class="sm:block md:hidden">...</div>

// <!-- Medium (laptopi: 768px and up) -->                        768 px  md
// <div class="md:block lg:hidden">...</div>

// <!-- Large (desktopi: 1024px and up) -->                       1024 px lg
// <div class="lg:block xl:hidden">...</div>

// <!-- Extra large (veoma veliki desktopi: 1280px and up) -->    1280 px xl
// <div class="xl:block">...</div>

const LandingPage = ({ text }) => {
  const landingText = text?.data?.attributes?.landingText;
  // const parts = landingText.split("^");
  const parts = landingText ? landingText.split("^") : [];
  const offerText = text?.data?.attributes?.offerText;

  const mainText = text?.data?.attributes?.mainText;

  return (
    <div className=" w-full  h-[775px] relative flex flex-col justify-start md:justify-center items-center">
      <Image
        src={profilePic}
        layout="fill"
        // objectFit="cover" // ovom vrednoscu se ne prikazuje dobr na malom ekranu ali izgleda da je pomerilo prokazivanje texta
        // objectFit="fill"
        // width={1280}
        // height={720}
        placeholder="blur"
        priority={true}
        quality={100}
        alt="Free casino slot games spin logic slots"
        // className=" w-full"
      />
      <div className=" w-full h-auto z-10 flex items-center justify-between flex-col">
        {parts.map((part, index) => (
          <h1
            className="text-4xl md:text-4xl lg:text-5xl overflow-hidden  text-center font-bold text-white p-2"
            key={index}
          >
            {part}
            {index !== parts.length - 1 && <br />}{" "}
            {/* Dodajemo <br /> između delova osim za poslednji deo */}
          </h1>
        ))}

        <p className="text-xl md:text-2xl overflow-hidden font-normal text-white text-center py-10 md:py-14 lg:py-24 w-3/4 md:w-2/4">
          {offerText}
        </p>
        <div className=" flex justify-center">
          <Button
            asChild
            size="lg"
            className="hover:bg-white hover:text-secondary-foreground"
          >
            <Link href="/login" className=" px-10">
              SUBSCRIBE
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
