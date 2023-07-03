import Image from "next/image";
import Link from "next/link";
import GithubIcon from "../../assets/icons/github.svg";
import { WorkContent } from "@/app/types/types";

export default function Card({ title, author, description }: WorkContent) {
  return (
    <div className="grid sm:flex h-50 min-h-max justify-center md:text-left text-white drop-shadow-lg max-w-content rounded-xl">
      <div className="p-8 flex flex-col gap-3 my-5 border border-sb bg-[#141414]">
        <h2 className="text-2xl font-bold">{title}</h2>
        <samp className="mt-3 hidden sm:block">{description}</samp>
        <div className="flex flex-row gap-5 justify-center items-center ">
          <Link href="https://github.com/otaviosc" target="_blank">
            <Image
              src={GithubIcon}
              width={25}
              alt="Github Icon image"
              className="w-7 md:w-7"
            />
          </Link>
          <button className="py-2 px-4 border rounded-md font-bold border-sb hover:bg-zinc-800 transition duration-200">
            <samp>Deploy</samp>
          </button>
        </div>
      </div>
    </div>
  );
}
