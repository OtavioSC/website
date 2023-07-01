import Image from "next/image";

import { Poppins } from "next/font/google";
import { socialIcons } from "@/assets/icons/icons";
import Link from "next/link";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500"],
});

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center md:items-left justify-center w-full p-8 md:p-24 backdrop-opacity-10">
      <section
        className={`${poppins.className} text-center md:text-left text-white pt-8 pb-4 border border-sb bg-[#141414] rounded-xl drop-shadow-lg max-w-2xl`}
      >
        <div className="flex flex-col items-center md:flex-row gap-6 p-7">
          <Image
            src="https://github.com/otaviosc.png"
            width={150}
            height={150}
            className="grayscale object-cover rounded-full md:rounded-lg h-[7rem] w-[7rem] md:h-30 md:w-30 md:object-contain border border-sb"
            alt="Personal photo"
          />
          <div>
            <h1
              className={`font-bold text-center my-2 inline-block text-goldenrod text-2xl md:text-4xl animate-pulse duration-75`}
            >
              Otávio Carmo
            </h1>
            <p className="my-2 mx-4 md:mx-0 text-lg md:text-xl md:line-clamp-2">
              Software Engineer born in Brazil and enthusiastic about Computer
              Science stuff.
            </p>
          </div>
        </div>
        <div className="flex flex-row gap-2 justify-center items-center">
          {socialIcons.map((icon) => {
            if (icon.target) {
              return (
                <Link key={icon.id} href={icon.target} target="_blank">
                  <Image
                    src={icon.src}
                    width={35}
                    alt={icon.name}
                    className="w-10 md:w-15 p-2 hover:-translate-y-2 duration-200"
                  />
                </Link>
              );
            }
          })}
        </div>
      </section>
    </main>
  );
}
