import React from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
function handleSubmit() {
  console.log("SUBMIT");
}
function onChange() {
  console.log("CHANGA");
}
const input = "Your comment";

export const Ratings = () => {
  return (
    <div className="w-full flex flex-col h-auto justify-center items-center">
      <div className=" w-full  md:w-2/5  flex flex-col flow-row bg-blackitems-start justify-start pt-5 pb-5 pl-5 md:pl-0">
        <h2 className=" text-xl">Game Stats</h2>
      </div>
      <form
        onSubmit={handleSubmit}
        className=" w-full  md:w-2/5 flex flex-col h-[700px] rounded-lg md:p-10 p-1 bg-[#1d1f30]"
      >
        <div className=" w-full flex flex-col md:flex-row">
          <div className=" flex flex-col items-start justify-center w-full border border-[#5865F2] rounded-lg md:p-10 p-5">
            <div className="flex flex-row items-start justify-start w-full">
              <p className=" font-extrabold text-5xl text-[#5865F2] mr-3">
                4.2
              </p>
              <div className="flex flex-col items-baseline">
                <span>⭐</span>
                <p className=" text-sm"> 830 votes</p>
              </div>
            </div>
            <div className="flex flex-row items-end justify-between w-full">
              <p className=" flex items-end w-[20%]">5 stars</p>
              <hr className=" border-0  w-[32%] h-1 bg-[#5865F2] rounded-sm" />
              <div className=" h-1 bg-[#2b2f49] w-[28%] rounded-sm"></div>
              <p className="w-[20%] text-end">53.3%</p>
            </div>
            <div className="flex flex-row items-end justify-between w-full">
              <p className="w-[20%]">4 stars</p>
              <hr className=" border-0  w-[13.8%] h-1 bg-[#5865F2] rounded-sm" />
              <div className=" h-1 bg-[#2b2f49] w-[46.2%] rounded-sm"></div>
              <p className="w-[20%] text-end">23.3%</p>
            </div>
            <div className="flex flex-row items-end justify-between w-full">
              <p className="w-[20%]">3 stars</p>
              <hr className=" border-0  w-[10.8%] h-1 bg-[#5865F2] rounded-sm" />
              <div className=" h-1 bg-[#2b2f49] w-[49.2%] rounded-sm"></div>
              <p className="w-[20%] text-end">18.3%</p>
            </div>
            <div className="flex flex-row items-end justify-between w-full">
              <p className="w-[20%]">2 stars</p>
              <hr className=" border-0  w-[2%] h-1 bg-[#5865F2] rounded-sm" />
              <div className=" h-1 bg-[#2b2f49] w-[58%] rounded-sm"></div>
              <p className="w-[20%] text-end">3.1%</p>
            </div>
            <div className="flex flex-row items-end justify-between w-full">
              <p className="w-[20%]">1 stars</p>
              <hr className=" border-0  w-[1%] h-1 bg-[#5865F2] rounded-sm" />
              <div className=" h-1 bg-[#2b2f49] w-[59%] rounded-sm"></div>
              <p className="w-[20%] text-end">1.3%</p>
            </div>
          </div>

          <div className=" w-full flex flex-col justify-center items-center ">
            <h2>Your opinion matters to us!</h2>
            <h3>Rate your experiance.</h3>
            <p>
              <span>⭐</span>
              <span>⭐</span>
              <span>⭐</span>
              <span>⭐</span>
              <span>⭐</span>
            </p>
          </div>
        </div>
        <div className=" mt-10 mb-10">
          <div className="input"> your comment</div>
        </div>
        <div className=" flex flex-col justify-end md:items-end">
          <Input
            className="bg-[#2b2f49] border border-[#5865F2] rounded-lg h-24"
            value={input}
            readOnly={true}
            // onChange // zbog greske koju izbacuje next dodat read only mode dok se ne konfigurise forma i prosledi onChange handler
          />
          <Button className="  mt-10 mb-10">POST COMMENT</Button>
        </div>
      </form>
    </div>
  );
};
