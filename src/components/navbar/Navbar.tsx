"use client";

import {
  IconContext,
  GithubLogo,
  LinkedinLogo,
  Coffee,
} from "@phosphor-icons/react";
import Link from "next/link";

export default function Navbar() {
  return (
    <IconContext.Provider
      value={{
        size: 22,
        weight: "fill",
      }}
    >
      <header className="fixed inset-x-0 top-0 z-30 mx-auto h-max w-full max-w-5xl py-4 px-4 text-zinc-300">
        <div className="flex w-full items-center justify-center py-4">
          <ul className="flex flex-row gap-x-12">
            <li className="text-yellow-600 hover:text-yellow-300 duration-75">
              <h1>
                <Link href="/">OCARMO</Link>
              </h1>
            </li>
            <li className="hover:text-white duration-75">
              <Link href="/works">WORK</Link>
            </li>
            <li className="hover:text-white duration-75">
              <Link href="/about">ABOUT</Link>
            </li>
            <li className="flex flex-row gap-x-2">
              <a href="https://github.com/otaviosc" target="_blank">
                <GithubLogo />
              </a>
              <a href="https://linkedin.com/in/otaviosc" target="_blank">
                <LinkedinLogo />
              </a>
            </li>
          </ul>
        </div>
      </header>
    </IconContext.Provider>
  );
}
