import { Job } from "@/app/types/types";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500"],
});

export default function TimelineCard(job: Job) {
  return (
    <div
      className={`flex flex-col gap-3 my-5 border border-sb rounded bg-[#141414] mt-6 sm:mt-8 p-4 sm:p-10 ${poppins.className}`}
    >
      <h2 className="text-lg sm:text-2xl font-bold text-center text-goldenrod">
        {job.role}
      </h2>
      <div className="flex flex-col gap-1">
        <span className="text-zinc-400 text-sm">{job.company}</span>
        <span className="text-zinc-400 text-sm">{job.period}</span>
      </div>
      <p className="mt-3 text-sm sm:text-lg text-left">{job.description}</p>
    </div>
  );
}
