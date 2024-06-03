import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import Image from "next/image";
const Mro = "/MrO-free-casino-slot-games.jpg";
const Eternal = "/Eternal-slots-free-casoni-games.jpg";

// const imgUrl1 = "/free-slots-RTS-advanture-game.jpg";
// const imgUrl2 = "/free-slots-spin-logic-game.jpg";

export const Brands = () => {
  return (
    <section className=" flex w-full flex-col md:w-1/2justify-center items-center text-white pt-14">
      <h2 className=" font-semibold text-xl">Our Brands</h2>
      <p className=" font-medium text-xs pb-5">
        Experience the Best Gaming Affiliates Website.
      </p>
      <div className=" w-full md:w-auto flex flex-col md:flex-row justify-between items-center md:pt-14">
        <div className="w-full flex flex-col justify-center items-center md:mr-4  p-0 bg-[#131825]">
          <Image
            src={Mro}
            width={400}
            height={400}
            objectFit="cover"
            alt="Free casino slots games"
          />
          <p className=" text-center text-sm pt-6 pb-2 font-normal">
            Intro Bonus
          </p>
          <h2 className=" text-center text-xl font-bold p-0">Mr O Casino</h2>
          <p className=" text-center font-normal text-lg pb-4">
            Dont trust us. Try us.
          </p>
          <Button
            asChild
            size="lg"
            className="hover:bg-white hover:text-secondary-foreground py-6 my-2"
          >
            <Link
              href="https://mrocasino.com/"
              target="_blank"
              className=" px-6"
            >
              VIEW PUBLISHER
            </Link>
          </Button>
          <p className=" text-center text-sm pt-2 pb-6 font-normal">
            T&C applies
          </p>
        </div>
        <div className="w-full flex flex-col justify-center items-center md:ml-4 p-0 bg-[#131825]">
          <Image
            src={Eternal}
            width={400}
            height={400}
            objectFit="cover"
            alt="Free casino slots games"
          />
          <p className=" text-center text-sm pt-6 pb-2 font-normal">
            Intro Bonus
          </p>
          <h2 className=" text-center text-xl font-bold p-0">Eternal Slots</h2>
          <p className=" text-center font-normal text-lg pb-4">
            Prides itself on its passion for gaming.
          </p>
          <Button
            asChild
            size="lg"
            className="hover:bg-white hover:text-secondary-foreground py-6 my-2"
          >
            <Link
              href="https://eternalslots.com/"
              target="_blank"
              className=" px-6"
            >
              VIEW PUBLISHER
            </Link>
          </Button>
          <p className=" text-center text-sm pt-2 pb-6 font-normal">
            T&C applies
          </p>
        </div>
      </div>
    </section>
  );
};
