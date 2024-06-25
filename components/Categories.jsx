import React from "react";
import { Category } from "./Category";

const imgUrl1 = "/free-slots-RTS-advanture-game.jpg";
const imgUrl2 = "/free-slots-spin-logic-game.jpg";
const imgUrl3 = "/free-slots-progressive-game.jpg";

const name1 = "Slots"
const name2 = "Hot Games"
const name3 = "New Games"
const description1 = "Step up to our slots where every spin brings you closer to epic jackpots."
const description2 = "Play the most popular titles that gamers can’t get enough of."
const description3 = "Discover fresh, exciting challenges awaiting your play."

export const Categories = () => {
  return (
    <section className=" w-full flex flex-col justify-center items-center text-white pt-14">
      <h2 className=" text-xl md:text-4xl font-semibold text-center">Games Category</h2>
      <p className=" font-medium fontsize-17px pb-5 mb-10 text-gray2 pt-5 text-center">
      Explore a universe of diverse games where every click leads to adventure.
      </p>
      <div className="w-full flex justify-center items-center">
        {/* <div className="flex justify-center items-center w-full"> */}
        <Category imgUrl={imgUrl1} name={name1} description={description1}/>
      </div>
      <div className="w-full flex justify-center items-center">
        <Category imgUrl={imgUrl2} name={name2} description={description2}/>
      </div>
      <div className="w-full flex justify-center items-center">
        <Category imgUrl={imgUrl3} name={name3} description={description3}/>
      </div>
    </section>
  );
};
