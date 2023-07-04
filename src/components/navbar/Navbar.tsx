"use client";

import Link from "next/link";
import MobileNav from "../navMobile/NavMobile";

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-30 mx-auto h-max w-full max-w-5xl py-4 px-4 text-zinc-300 backdrop-blur-md">
      <div className="flex w-full py-4 items-center place-content-center">
        <div className="text-xl block">
          <ul className="flex flex-row gap-x-10 font-bold w-full items-center">
            <li className=" hover:text-yellow-600 duration-75">
              <Link href="/" className="p-1 sm:p-3">
                <samp className="text-base md:text-xl">Home</samp>
              </Link>
            </li>
            <li className="hover:text-yellow-600 duration-75">
              <Link href="/work" className="p-1 sm:p-3">
                <samp className="text-base md:text-xl">Work</samp>
              </Link>
            </li>
            <li className="hover:text-yellow-600 duration-75">
              <Link href="/about" className="p-1 sm:p-3">
                <samp className="text-base md:text-xl">About</samp>
              </Link>
            </li>
            <li className="hover:text-yellow-600 duration-75">
              <Link
                href="https://blog.ocarmo.dev"
                target="_blank"
                className="p-1 sm:p-3"
              >
                <samp className="text-base md:text-xl">Blog</samp>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
