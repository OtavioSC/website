import { getWorkBySlug, aboutDirectory } from "@/lib/api";
import markdownParser from "@/lib/markdownParser";
import markdownStyles from "../styles/markdown.module.css";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["500"],
});

export default async function About() {
  const about = getWorkBySlug("about", ["author", "content"], aboutDirectory);

  const content = await markdownParser(about.content || "");

  return (
    <main className="flex min-h-screen flex-col items-center justify-center w-full p-20">
      <section className={`text-white pt-8 pb-6`}>
        <h1
          className={`font-bold text-center my-4 inline-block text-goldenrod text-2xl sm:text-4xl`}
        >
          About my history
        </h1>
        <div
          className={`${markdownStyles["markdown"]} ${poppins.className}`}
          dangerouslySetInnerHTML={{ __html: content }}
        ></div>
      </section>
    </main>
  );
}
