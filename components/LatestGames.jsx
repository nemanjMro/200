"use client";
import React, { useState, useEffect } from "react";
import { Progress } from "@/components/ui/progress";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";
import Link from "next/link";
import slugify from "slugify";
import { Button } from "./ui/button";
import Autoplay from "embla-carousel-autoplay";

export const LatestGames = ({ games }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [totalSlides, setTotalSlides] = useState(0);
  const [carouselApi, setCarouselApi] = useState(null);

  useEffect(() => {
    if (!carouselApi) return;

    const updateSlideIndex = () => {
      const index = carouselApi.selectedScrollSnap();
      setCurrentIndex(index);
    };

    carouselApi.on("select", updateSlideIndex);

    return () => {
      carouselApi.off("select", updateSlideIndex);
    };
  }, [carouselApi]);

  useEffect(() => {
    setTotalSlides(games?.length);
  }, [games]);

  return (
    <main className="text-white bg-[#FBF2FF] w-full flex flex-col justify-center items-center p-10">
      <div className="pb-6">
        <h2 className="text-xl md:text-4xl font-semibold text-center">
          Latest Games
        </h2>
        <h3 className="fontsize-17px md:text-lg font-medium text-center text-gray2 pt-5">
          Your next win awaits. Play the latest games now.
        </h3>
        <br />
      </div>
      <div>
        <Carousel
          setApi={setCarouselApi}
          plugins={[
            Autoplay({
              delay: 2000,
            }),
          ]}
          opts={{
            align: "start",
          }}
          className="w-full lg:max-w-6xl max-w-sm"
        >
          <CarouselContent className="-ml-4 w-full">
            {games?.map((game, index) => (
              <CarouselItem
                key={index}
                className="basis-auto md:basis-auto pl-4"
              >
                <div className="bg-[#131825] flex justify-center items-center flex-col pb-6">
                  <Image
                    src={game.gameImageUrl}
                    alt={game.displayName}
                    className="rounded-md"
                    width={140}
                    height={185}
                  />

                  <Button
                    asChild
                    size="sm"
                    className=" -translate-y-6 hover:bg-white hover:text-secondary-foreground"
                  >
                    <Link
                      href={`/${slugify(
                        game.displayName,
                        {
                          lower: true,
                        }
                      )}`}
                    >
                      VIEW GAME
                    </Link>
                  </Button>
                  <h3 className="text-white text-lg font-semibold text-center">
                    {game.displayName}
                  </h3>
                  <p className="text-white text-sm text-center mt-2">
                    Theme:{" "}
                    {game.description.match(/Theme: (.+?)\b/)
                      ? game.description.match(/Theme: (.+?)\b/)[1]
                      : "N/A"}
                  </p>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
      <Progress
        className="w-[50%] h-1 mt-6"
        value={((currentIndex + 1) / totalSlides) * 100}
      />
    </main>
  );
};
