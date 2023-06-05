import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center w-full p-24">
      <section className="pt-8 pb-6">
        <h1 className="my-4 inline-block font-bold text-yellow-600 text-3xl">Hello Visitor 👋</h1>
        <p className="my-2 text-xl">I'm Otávio and this is my website. Here you can see my recent works, blog posts and contributions.</p>
      </section>
    </main>
  );
}
