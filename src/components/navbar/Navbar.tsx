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
      <header className="fixed inset-x-0 top-0 z-30 mx-auto h-max w-full max-w-5xl py-4 px-4 text-zinc-300">
        <div className="flex w-full items-center justify-between py-4 sm:items-right sm:justify-center">
          <div className="text-base hidden sm:block">
            <ul className="flex flex-row gap-x-12 font-bold">
              <li className="text-yellow-600 hover:text-yellow-300 duration-75">
                <Link href="/">
                  <OrangeSlice />
                </Link>
              </li>
              <li className="hover:text-yellow-600 duration-75">
                <Link href="/work" className="p-1 sm:p-4">
                  Work
                </Link>
              </li>
              <li className="hover:text-yellow-600 duration-75">
                <Link href="/about" className="p-1sm:p-4">
                  About
                </Link>
              </li>
              <li className="hover:text-yellow-600 duration-75">
                <Link
                  href="https://blog.ocarmo.dev"
                  target="_blank"
                  className="p-1sm:p-4"
                >
                  Blog
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
