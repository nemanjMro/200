import Image from "next/image";
import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

import profilePic from "@/public/spin-logic-cash-bandit-slot-game.png";
import mobileBg from "@/public/mobile-bg.jpg"

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
  const landingText = text?.landingText;
  const parts = landingText ? landingText.split("^") : [];
  const offerText = text?.offerText;

  // const mainText = text?.data?.attributes?.mainText;
  // const parts = "Deploy na Vercel";
  // const offerText =
  //   "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit quam eaque harum, delectus quod quia odit quis corrupti earum dolorem itaque culpa ipsam labore eligendi. Culpa quis quod veniam quibusdam sed voluptas velit odit dolor perferendis quae optio voluptate odio quaerat fugiat placeat qui, cupiditate tempore est quisquam numquam consectetur.";
  return (
    // <div className=" bg-[url('/spin-logic-cash-bandit-slot-game.png')] bg-cover bg-center w-full  h-[775px] relative flex flex-col justify-start md:justify-center items-center">
    <div className="w-full h-[775px] relative flex flex-col justify-start md:justify-center items-center">
      
      {/* Slika za mobilne telefone */}
      <div className="sm:hidden w-full h-2/5">
        <Image
          src={mobileBg}

          placeholder="blur"
          priority={true}
          quality={100}
          className="absolute top-0 left-0 w-full h-full"
          alt="Mobile background image"
        />
      </div>

      {/* Slika za desktop */}
      <div className="hidden sm:block w-full h-1/5">
        <Image
          src={profilePic}
          placeholder="blur"
          priority={true}
          quality={100}
          className="absolute top-0 left-0 w-full h-full"
          alt="Desktop background image"
        />
      </div>
      
      {/* <Image
        src={profilePic}
        layout="responsive"
        // objectFit="cover" // ovom vrednoscu se ne prikazuje dobr na malom ekranu ali izgleda da je pomerilo prokazivanje texta
        // objectFit="fill"
        // width={1280}
        // height={720}
        placeholder="blur"
        priority={true}
        quality={100}
        className=" absolute top-0"
        alt="Free casino slot games spin logic slots"
      /> */}

      <div className=" w-full h-auto z-10 flex items-center justify-between flex-col">
        {parts.map((part, index) => (
          <h1
            className="text-5xl md:text-4xl lg:text-7xl   text-center font-bold text-white p-2"
            key={index}
          >
            {part}
            {index !== parts.length - 1 && <br />}{" "}
          </h1>
        ))}

        <p className="text-sm leading-6 md:text-base font-normal text-stone-300 text-center py-10 md:py-14 lg:py-12 w-4/4 md:w-2/6 px-3">
          {offerText}
        </p>
        <div className=" flex justify-center pb-8">
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
