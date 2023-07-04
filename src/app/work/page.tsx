import Card from "@/components/card/Card";
import { Work, WorkContent } from "../types/types";
import { getAllWorks } from "@/lib/api";

type Props = {
  allWorks: WorkContent[];
};

export default function Work() {
  const works = getAllWorks(["title", "author", "description"]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center w-full p-24">
      <section className={`text-white pt-8 pb-6`}>
        <h1
          className={`font-bold text-center my-4 inline-block text-goldenrod text-2xl sm:text-4xl`}
        >
          Most recent work
        </h1>
        {works.map((work, index) => {
          return (
            <Card
              key={index}
              title={work.title}
              author={work.author}
              description={work.description}
            />
          );
        })}
      </section>
    </main>
  );
}
