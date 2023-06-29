"use client";

import { IconContext, OrangeSlice } from "@phosphor-icons/react";
import Link from "next/link";
import MobileNav from "../navMobile/NavMobile";

export default function Navbar() {
  return (
    <IconContext.Provider
      value={{
        size: 21,
        weight: "fill",
      }}
    >
      <header className="fixed inset-x-0 top-0 z-30 mx-auto h-max w-full max-w-5xl py-4 px-4 text-zinc-300 backdrop-blur-md">
        <div className="flex w-full items-center justify-between py-4 sm:items-right sm:justify-center">
          <div className="text-xl hidden sm:block">
            <ul className="flex flex-row gap-x-10 font-bold w-full">
              <li className="text-yellow-600 hover:text-yellow-300 duration-75">
                <Link href="/" className="p-1 sm:p-3">
                  <samp>Home</samp>
                </Link>
              </li>
              <li className="hover:text-yellow-600 duration-75">
                <Link href="/work" className="p-1 sm:p-3">
                  <samp>Work</samp>
                </Link>
              </li>
              <li className="hover:text-yellow-600 duration-75">
                <Link href="/about" className="p-1 sm:p-3">
                  <samp>About</samp>
                </Link>
              </li>
              <li className="hover:text-yellow-600 duration-75">
                <Link
                  href="https://blog.ocarmo.dev"
                  target="_blank"
                  className="p-1 sm:p-3"
                >
                  <samp>Blog</samp>
                </Link>
              </li>
            </ul>
          </div>
          <div className="items-left">
            <MobileNav />
          </div>
        </div>
      </header>
    </IconContext.Provider>
  );
}
