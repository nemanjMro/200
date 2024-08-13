"use client";
import React, { useEffect } from "react";
import Login from "./Login";
import Image from "next/image";
import Link from "next/link";

const TopBar = () => {
  useEffect(() => {
    const toggleMenu = () => {
      const mobileMenu = document.getElementById("mobile-menu");
      mobileMenu.classList.toggle("hidden");
      mobileMenu.classList.toggle("animate-open-menu");
    };

    const hamburgerBtn = document.getElementById("hamburger-button");
    const mobileMenu = document.getElementById("mobile-menu");

    const handleMenuToggle = () => toggleMenu();

    hamburgerBtn.addEventListener("click", handleMenuToggle);
    mobileMenu.addEventListener("click", handleMenuToggle);

    return () => {
      hamburgerBtn.removeEventListener("click", handleMenuToggle);
      mobileMenu.removeEventListener("click", handleMenuToggle);
    };
  }, []);

  return (
    <header
      id="TopBar"
      className="flex max-w-full h-full mx-auto my-0 justify-between items-center bg-[#FFFFFF] px-5"
    >
      <section className="flex w-full items-center md:justify-center lg:justify-center justify-end ">
        <div className=" md:w-1/6 w-full">
          <Link href="/">
            <Image
              src="/logo.svg"
              alt="logo free casino games"
              width={87}
              height={21}
            />
          </Link>
        </div>
        <div className="test md:justify-center justify-between items-center w-full">
          <button
            id="hamburger-button"
            className="text-5xl md:hidden cursor-pointer"
          >
            &#9776;
          </button>
          <nav
            className="hidden lg:flex md:flex space-x-8 text-xl justify-around"
            aria-label="main"
          >
            <div className="flex justify-evenly w-4/6 text-[#2B0054]">
              <Link href="/#Bonuses" className="">
                <span className="transition-colors hover:text-[#5865F2]">
                  About Us
                </span>
              </Link>
              <Link href="/games" className="hover:opacity-90">
                <span className="transition-colors hover:text-[#5865F2]">
                  Casinos
                </span>
              </Link>
              {/* <Link href="/blog" className="hover:opacity-90"> */}
              <Link href="/posts" className="hover:opacity-90">
                <span className="transition-colors hover:text-[#5865F2]">
                  Bonuses
                </span>
              </Link>
              <Link href="/posts" className="hover:opacity-90">
                <span className="transition-colors hover:text-[#5865F2]">
                  Games
                </span>
              </Link>
              <Link href="/posts" className="hover:opacity-90">
                <span className="transition-colors hover:text-[#5865F2]">
                  News
                </span>
              </Link>
              <Link href="/posts" className="hover:opacity-90">
                <span className="transition-colors hover:text-[#5865F2]">
                  Guides & Tips
                </span>
              </Link>
              <Link href="/posts" className="hover:opacity-90">
                <span className="transition-colors hover:text-[#5865F2]">
                  Payments Methods
                </span>
              </Link>
            </div>
          </nav>
        </div>
        <div className="flex justify-end w-1/6">
            <Login />
          </div>
      </section>
      <section
        id="mobile-menu"
        className="absolute top-0 w-full text-3xl flex-col justify-end bg-black origin-top animate-open-menu hidden z-20"
      >
        <div className="flex justify-end pr-5">
          <button className="text-7xl self-end px-6 text-blue-50">
            &times;
          </button>
        </div>
        <div>
          <nav
            className="flex flex-col min-h-screen items-center py-8 w-full"
            aria-label="mobile"
          >
            <Link
              href="/#onuses"
              className="w-full text-center py-6 hover:opacity-90 text-white"
            >
              Bonuses
            </Link>
            <Link
              href="/games"
              className="w-full text-center py-6 hover:opacity-90 text-white"
            >
              Games
            </Link>
            {/* <Link
              href="/blog"
              className="w-full text-center py-6 hover:opacity-90 text-white"
            > */}
            <Link
              href="/posts"
              className="w-full text-center py-6 hover:opacity-90 text-white"
            >
              Blog
            </Link>
            <Login />
          </nav>
        </div>
      </section>
    </header>
  );
};

export default TopBar;
