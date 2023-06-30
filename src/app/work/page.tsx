import Card from "@/components/card/Card";
import { techIcons } from "@/assets/icons/icons";
import Image from "next/image";

export default function Work() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center w-full p-24">
      <section className={`text-white pt-8 pb-6`}>
        <h1
          className={`font-bold text-center my-4 inline-block text-goldenrod text-4xl`}
        >
          Most recent work
        </h1>
        <div className="mt-4 flex flex-row gap-4 justify-center">
          {techIcons.map((icon) => {
            return (
              <Image
                key={icon.name}
                src={icon.src}
                className="h-10 w-10 grayscale hover:grayscale-0 duration-300 p-1"
                alt={icon.name}
              />
            );
          })}
        </div>
        <Card />
        <Card />
        <Card />
        <Card />
      </section>
    </main>
  );
}
