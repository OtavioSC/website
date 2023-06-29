import { techIcons } from "@/assets/icons/icons";
import Image from "next/image";

export default function About() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center w-full p-24">
      <section className={`text-white pt-8 pb-6`}>
        <h1 className="my-4 inline-block text-yellow-600 text-4xl">
          <section>
            <samp className="font-bold text-center my-4 inline-block text-goldenrod text-2xl">
              Technologies that i code with
            </samp>
            <div className="mt-4 flex flex-row gap-4 justify-center">
              {techIcons.map((icon) => {
                return (
                  <Image
                    key={icon.name}
                    src={icon.src}
                    width={20}
                    height={20}
                    className="h-12 w-12 grayscale hover:grayscale-0 duration-300 p-1"
                    alt={icon.name}
                  />
                );
              })}
            </div>
          </section>
        </h1>
        <p className="my-2 text-xl"></p>
      </section>
    </main>
  );
}
