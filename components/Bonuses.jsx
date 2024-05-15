import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

const Bonuses = () => {
  return (
    <section
      id="Bonuses"
      className=" text-white w-full flex flex-col justify-center items-center "
    >
      <div className=" max-w-6xl w-full flex flex-row justify-between items-center px-4 my-10">
        <div className="">
          <h2 className=" font-semibold text-4xl text-left mb-2">Bonuses</h2>
          <h3 className=" font-medium text-sm text-left">
            At SLS, we show only the best rewards
          </h3>
        </div>
        <div className="my-6">
          <Button
            asChild
            size="lg"
            className="hover:bg-white hover:text-secondary-foreground"
          >
            <Link href="/" className=" px-20">
              ALL REWARDS
            </Link>
          </Button>
        </div>
      </div>
      <div className=" flex flex-col md:flex-row  max-w-6xl w-full justify-between items-center">
        <div className=" w-full md:w-auto flex flex-col justify-center items-center bg-[#131825] rounded-sm  mb-10">
          <div className=" bg-[#353E8B] p-10 w-full rounded-t-sm">
            <h3 className=" font-semibold text-xl text-center">Sign-up</h3>
            <p className=" font-normal text-[17px] text-center">
              Bonus Rewards
            </p>
          </div>
          <div className="bg-[#131825] w-full flex flex-col justify-center items-center font-light text-sm p-6 rounded-b-sm">
            <p className=" w-full text-center pb-5">Promotion and Marketing</p>
            <p className=" w-full text-center pb-5">
              Affiliate Tracking System
            </p>
            <p className=" w-full text-center pb-5">
              Performance-Based Commision
            </p>
            <p className=" w-full text-center pb-5">
              Affiliate Support and Resources
            </p>
            <p className=" w-full text-center pb-5">Analytics and Reporting</p>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="hover:bg-white bg-[#131825] hover:text-secondary-foreground border-[#5865F2]"
            >
              <Link href="/" className=" px-10">
                GET REWARD
              </Link>
            </Button>
          </div>
        </div>
        <div className="  w-full md:w-auto flex flex-col justify-center items-center bg-[#131825] rounded-sm  mb-10">
          <div className=" bg-[#353E8B] p-10 w-full rounded-t-sm">
            <h3 className=" font-semibold text-xl text-center">Sign-up</h3>
            <p className=" font-normal text-[17px] text-center">
              Bonus Rewards
            </p>
          </div>
          <div className="bg-[#131825] flex flex-col justify-center items-center font-light text-sm p-6 rounded-b-sm">
            <p className="pb-5">Promotion and Marketing</p>
            <p className="pb-5">Affiliate Tracking System</p>
            <p className="pb-5">Performance-Based Commision</p>
            <p className="pb-5">Affiliate Support and Resources</p>
            <p className="pb-5">Analytics and Reporting</p>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="hover:bg-white bg-[#131825] hover:text-secondary-foreground border-[#5865F2]"
            >
              <Link href="/" className=" px-10">
                GET REWARD
              </Link>
            </Button>
          </div>
        </div>
        <div className="  w-full md:w-auto flex flex-col justify-center items-center bg-[#131825] rounded-sm  mb-10">
          <div className=" bg-[#353E8B] p-10 w-full rounded-t-sm">
            <h3 className=" font-semibold text-xl text-center">Sign-up</h3>
            <p className=" font-normal text-[17px] text-center">
              Bonus Rewards
            </p>
          </div>
          <div className="bg-[#131825] flex flex-col justify-center items-center font-light text-sm p-6 rounded-b-sm">
            <p className="pb-5">Promotion and Marketing</p>
            <p className="pb-5">Affiliate Tracking System</p>
            <p className="pb-5">Performance-Based Commision</p>
            <p className="pb-5">Affiliate Support and Resources</p>
            <p className="pb-5">Analytics and Reporting</p>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="hover:bg-white bg-[#131825] hover:text-secondary-foreground border-[#5865F2]"
            >
              <Link href="/" className=" px-10">
                GET REWARD
              </Link>
            </Button>
          </div>
        </div>
        <div className="  w-full md:w-auto flex flex-col justify-center items-center bg-[#131825] rounded-sm  mb-10">
          <div className=" bg-[#353E8B] p-10 w-full rounded-t-sm">
            <h3 className=" font-semibold text-xl text-center">Sign-up</h3>
            <p className=" font-normal text-[17px] text-center">
              Bonus Rewards
            </p>
          </div>
          <div className="bg-[#131825] flex flex-col justify-center items-center font-light text-sm p-6 rounded-b-sm">
            <p className="pb-5">Promotion and Marketing</p>
            <p className="pb-5">Affiliate Tracking System</p>
            <p className="pb-5">Performance-Based Commision</p>
            <p className="pb-5">Affiliate Support and Resources</p>
            <p className="pb-5">Analytics and Reporting</p>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="hover:bg-white bg-[#131825] hover:text-secondary-foreground border-[#5865F2]"
            >
              <Link href="/" className=" px-10">
                GET REWARD
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Bonuses;
