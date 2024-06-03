import React from "react";
import { Category } from "./Category";

const imgUrl1 = "@/free-slots-RTS-advanture-game.jpg";
const imgUrl2 = "@/free-slots-spin-logic-game.jpg";
const imgUrl3 = "@/free-slots-progressive-game.jpg";

export const Categories = () => {
  return (
    <section className=" w-full flex flex-col justify-center items-center text-white pt-14">
      <h2 className=" font-semibold text-xl">Games Category</h2>
      <p className=" font-medium text-xs pb-5 mb-10">
        Experience the Best Gaming Affiliates Website.
      </p>
      <div className="w-full flex justify-center items-center">
        {/* <div className="flex justify-center items-center w-full"> */}
        <Category imgUrl={imgUrl1} />
      </div>
      <div className="flex justify-center items-center w-full">
        <Category imgUrl={imgUrl2} />
      </div>
      <div className="flex justify-center items-center w-full">
        <Category imgUrl={imgUrl3} />
      </div>
    </section>
  );
};
