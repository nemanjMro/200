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
      <h2 className=" text-xl md:text-4xl font-semibold text-center">
        Top Brands
      </h2>
      <p className=" font-medium fontsize-17px pb-5 text-gray2 pt-2 md:w-1/4 text-center">
        Check out the best and most trusted names in the casino industry and
        give them your vote of confidence!
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
          <div className="flex flex-col justify-center items-center mb-5">
            <h2 className=" text-center text-xl font-bold pt-5">Mr O Casino</h2>
            <p className=" text-center font-normal fontsize-17px pb-4 text-gray">
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
          </div>
          {/* <p className=" text-center text-sm pt-2 pb-6 font-normal">
          </p> */}
        </div>
        <div className="w-full flex flex-col justify-center items-center md:ml-4 p-0 bg-[#131825]">
          <Image
            src={Eternal}
            width={400}
            height={400}
            objectFit="cover"
            alt="Free casino slots games"
          />
          <div className="flex flex-col justify-center items-center mb-5">
            <h2 className=" text-center text-xl font-bold pt-5">
              Eternal Slots
            </h2>
            <p className=" text-center font-normal  fontsize-17px pb-4 text-gray">
              Sometimes, the darkest woods conceal the best odds.
            </p>
            <Button
              asChild
              size="lg"
              className="hover:bg-white hover:text-secondary-foreground py-6 mb-4 my-2"
            >
              <Link
                href="https://eternalslots.com/"
                target="_blank"
                className=" px-6"
              >
                VIEW PUBLISHER
              </Link>
            </Button>
            {/* <p className=" text-center text-sm pt-2 pb-6 font-normal">
          </p> */}
          </div>
        </div>
      </div>
    </section>
  );
};
