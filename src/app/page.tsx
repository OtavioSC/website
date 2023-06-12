import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ['latin'],
  weight: "600"
})

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center w-full p-24">
      <section className={`${poppins.className} text-white pt-8 pb-6`}>
        <h1 className="my-4 inline-block text-yellow-600 text-4xl">Hello 👋</h1>
        <p className="my-2 text-xl">I'm Otávio and this is my website. Here you can see my recent works, blog posts and contributions.</p>
      </section>
    </main>
  );
}
