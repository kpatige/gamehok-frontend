type TournamentCardProps = {
  title: string;
  game: string;
  format: string;
  prize: string;
};

import Image from "next/image";

export default function TournamentCard({
  title,
  game,
  format,
  prize,
}: TournamentCardProps) {
  return (
    <article className="min-w-[230px] overflow-hidden rounded-xl border border-[#205141] bg-[#08281f]">
      <div className="h-24 bg-gradient-to-r from-[#5b22a7] via-[#2f3dc8] to-[#102f77] p-2 text-[10px] text-[#dbdcff]">
        Registration Open
      </div>

      <div className="p-3">
        <h3 className="text-sm font-semibold">{title}</h3>
        <p className="mt-1 flex items-center gap-1 text-[11px] text-[#9ecab8]">
          Prize Pool · {prize}
          <span className="inline-flex items-center">
            {/* coin icon */}
            <Image alt="Coin" src="/figma/coin.png" width={12} height={12} className="ml-1 h-3 w-3" />
          </span>
        </p>
        <div className="mt-2 flex flex-wrap gap-1 text-[10px]">
          <span className="rounded bg-[#0e5138] px-2 py-1">{game}</span>
          <span className="rounded bg-[#0e5138] px-2 py-1">{format}</span>
          <span className="rounded bg-[#0e5138] px-2 py-1">Entry - Free</span>
        </div>
      </div>
    </article>
  );
}