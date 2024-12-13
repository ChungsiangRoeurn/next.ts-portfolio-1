import { BorderTrail } from "@/components/ui/border-trail";
import Image from "next/image";

export function Card() {
  return (
    <div className="relative h-[500px] w-[500px] overflow-hidden rounded-3xl border border-zinc-950/10 text-zinc-700 outline-none dark:border-zinc-50/20 dark:bg-zinc-950 dark:text-zinc-300">
      <Image
        width={500}
        height={500}
        src="/assets/chungsiangAsKid.jpg"
        alt="Description"
        className="absolute rounded-3xl p-1 top-0 left-0 h-full w-full object-cover opacity-50 "
      />
      <textarea className="h-full w-full resize-none rounded-md bg-transparent px-4 py-3 text-sm outline-none" />
      <BorderTrail
        className="bg-gradient-to-l from-blue-200 via-blue-500 to-blue-200 dark:from-blue-400 dark:via-blue-500 dark:to-blue-700"
        size={300}
      />
    </div>
  );
}
