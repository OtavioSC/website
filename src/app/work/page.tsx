import Card from "@/components/card/Card";

export default function Work() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center w-full p-24">
      <section className={`text-white pt-8 pb-6`}>
        <Card />
        <Card />
        <Card />
        <Card />
      </section>
    </main>
  );
}
