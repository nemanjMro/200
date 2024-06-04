import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
const mail = "/mail-icon.svg";

const Footer = () => {
  return (
    <footer className=" text-white w-full h-auto flex flex-col justify-center items-center bg-[#090D14]        ">
      <div className=" max-w-6xl w-full flex flex-col md:flex-row justify-between items-center px-4 my-10">
        <div className="max-w-6xl w-full flex flex-col justify-between self-start items-left px-4 my-10">
          <h3>ABOUT US</h3>
          <p>
            Introducing &#34;LevelX&#34; a cutting0edge fictive gaming affiliate
            website
          </p>
          <p>
            <span className=" w-auto h-auto inline-block mr-2">
              <Image width={15} height={15} src={mail} alt="mail to" />
            </span>
            help@example.com
          </p>
        </div>
        <div className=" max-w-6xl w-full flex flex-col justify-between  self-start items-left px-4 my-10">
          <h3>PUBLISHER</h3>
          <p>Games</p>
          <p>Bonuses</p>
          <p>About Us</p>
          <p>Privacy Policy</p>
          <p>Terms and Conditions</p>
        </div>
        <div className=" max-w-6xl w-full flex flex-col justify-between  self-start items-left px-4 my-10">
          <h3>ABOUT US</h3>
          <p>Slots</p>
          <p>Hot Games</p>
          <p>Table Games</p>
          <p>Video Poker</p>
          <p>Progresive</p>
        </div>
        <div className=" max-w-6xl w-full flex flex-col justify-between  self-start items-left px-4 my-10">
          <h3>SUBSCRIBE</h3>
          <p>
            Wafer cake gummies jelly-o ice cream. Pastry halvah carrot cake
            gummi bears caramels. Gummies lemon drops cake.
          </p>
          <div className="flex flow-roow justify-end md:justify-start pt-5 md:pr-2">
            <Button
              asChild
              variant="outline"
              className="bg-[#151515] hover:bg-[#353E8B] hover:text-white border-0"
              size="sm"
            >
              <Link href="/login">Insert your email</Link>
            </Button>
          </div>
        </div>
      </div>
      <hr className=" w-full border-[#60606060] mb-10 " />
      <div>
        <h3></h3>
      </div>
    </footer>
  );
};

export default Footer;
