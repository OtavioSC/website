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
      <div className="absolute top-150 left-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-blob"></div>
      <div className="absolute top-110 right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-blob animation-delay-2000"></div>
      <div className="absolute top-130 left-50 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-blob animation-delay-3000"></div>
      <div className="absolute bottom-50 right-20 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-blob animation-delay-4000"></div>
      <section
        className={`${poppins.className} text-center md:text-left text-white pt-8 pb-4 border border-sb bg-[#141414] rounded-xl`}
      >
        <div className="flex flex-col items-center md:flex-row gap-4 p-3">
          <Image
            src="https://github.com/otaviosc.png"
            width={150}
            height={150}
            className="grayscale object-cover rounded-full md:rounded-lg h-[7rem] w-[7rem] md:h-30 md:w-30 md:object-contain border border-sb"
            alt="Personal photo"
          />
          <div>
            <h1
              className={`font-bold text-center my-4 inline-block text-goldenrod text-2xl md:text-4xl`}
            >
              Otávio Carmo
            </h1>
            <p className="my-2 text-sm md:text-xl line-clamp-3">
              Software Engineer borned in 🇧🇷 and enthusiastic for Computer
              Science stuffs.
            </p>
          </div>
        </div>
        <div className="flex flex-row gap-2 justify-center">
          {socialIcons.map((icon) => {
            if (icon.target) {
              return (
                <Link href={icon.target} target="_blank">
                  <Image
                    key={icon.name}
                    src={icon.src}
                    width={35}
                    alt={icon.name}
                    className="w-9 md:w-15 p-2 hover:-translate-y-2 duration-150"
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
