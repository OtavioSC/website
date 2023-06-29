export default function Card() {
  return (
    <div className="h-50 min-h-max bg-zinc-800 align-center justify-center rounded">
      <div className="p-8 flex flex-col gap-2 my-5">
        <h2 className="text-2xl font-bold">Work</h2>
        <samp>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis nisi
          sapiente esse id, eos voluptatum nulla voluptas mollitia, enim eius
          quo, provident velit! Consectetur, ipsum nihil libero quidem
          reprehenderit facilis?
        </samp>
        <div className="flex flex-row gap-2"></div>
      </div>
    </div>
  );
}
