import Image from "next/image";

import { Poppins } from "next/font/google";
import techIcons from "@/assets/icons/icons";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500"],
});

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center w-full p-24">
      <section className={`${poppins.className} text-white pt-8 pb-6`}>
        <div className="flex flex-row gap-5">
          <Image
            src="https://github.com/otaviosc.png"
            width={150}
            height={150}
            className="grayscale border-goldenrod rounded-lg h-30 w-30 object-contain "
            alt="Personal photo"
          />
          <div>
            <h1
              className={`font-bold text-center my-4 inline-block text-goldenrod text-4xl`}
            >
              Otávio Carmo
            </h1>
            <samp className="block my-2 text-xl">
              Hello Visitor, I'm a Software Engineer born in 🇧🇷 enthusiastic for
              Computer Science.
            </samp>
          </div>
        </div>
      </section>
    </main>
  );
}
