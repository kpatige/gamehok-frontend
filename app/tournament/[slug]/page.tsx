"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useSearchParams } from "next/navigation";

const tabs = ["Overview", "Teams", "Lobbies", "Rules"];
const rounds = ["Round 1", "Round2", "Round 3"];

export default function TournamentDetailsPage() {
  const searchParams = useSearchParams();
  const firstTab = searchParams.get("tab") === "lobbies" ? "Lobbies" : "Overview";
  const [activeTab, setActiveTab] = useState(firstTab);
  const [activeRound, setActiveRound] = useState("Round 1");

  return (
    <main className="min-h-screen bg-[#00190f] pb-20 text-white">
      <section className="px-3 pt-2">
        <Link href="/" className="text-sm text-[#d6f6e8]">
          ←
        </Link>
        <Hero />
        <TitleBlock />
        <TabBar activeTab={activeTab} onChange={setActiveTab} />
        {activeTab === "Lobbies" ? (
          <LobbySection
            activeRound={activeRound}
            onRoundChange={setActiveRound}
            compact
          />
        ) : activeTab === "Overview" ? (
          <OverviewSection />
        ) : (
          <section className="mt-6 rounded-xl border border-[#205141] bg-[#08281f] p-4 text-sm text-[#b8dacc]">
            Coming soon.
          </section>
        )}
      </section>
    </main>
  );
}

function Hero() {
  return (
    <div className="mt-2 overflow-hidden rounded-xl border border-[#1e5140]">
      <Image alt="Tournament hero" src="/figma/hero.png" width={687} height={265} className="h-auto w-full" />
      <div className="mt-[-35px] flex justify-between px-2 pb-2 text-[11px]">
        <span className="rounded-full bg-[#142b23] px-2 py-1">⌚ Next match in 10h 15min</span>
        <span className="rounded-full bg-[#142b23] px-2 py-1">☠ 670/800</span>
      </div>
    </div>
  );
}

function TitleBlock() {
  return (
    <section className="mt-3 flex items-start justify-between">
      <div>
        <h1 className="text-[20px] font-extrabold tracking-wide text-white">GS MONTHLY SHOWDOWN</h1>
        <p className="mt-1 text-[11px] font-semibold text-[#b7d8ca]">BY GS ESPORTS</p>
        <div className="mt-2 flex gap-2 text-[11px] font-semibold text-[#e8fff5]">
          <span className="rounded-md bg-[#0e5138] px-3 py-1 leading-none">BGMI</span>
          <span className="rounded-md bg-[#0e5138] px-3 py-1 leading-none">Entry - Free</span>
        </div>
      </div>
      <Image alt="GS badge" src="/figma/badge-gs.png" width={42} height={42} className="h-10 w-10" />
    </section>
  );
}

function TabBar({
  activeTab,
  onChange,
}: {
  activeTab: string;
  onChange: (tab: string) => void;
}) {
  return (
    <div className="mt-4 flex gap-7 overflow-x-auto border-b border-[#1d4a3b] text-[13px]">
      {tabs.map((tab) => (
        <button
          key={tab}
          className={`whitespace-nowrap pb-3 ${
            tab === activeTab
              ? "-mb-px border-b-2 border-[#00d867] text-white"
              : "text-[#8abca8]"
          }`}
          onClick={() => onChange(tab)}
          type="button"
        >
          {tab}
        </button>
      ))}
    </div>
  );
}

function OverviewSection() {
  return (
    <section className="mt-4 space-y-6">
      <div>
        <h2 className="mb-4 text-[22px] font-bold">Details</h2>

        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <div className="grid h-9 w-9 place-items-center rounded-lg border border-[#1bd87066] bg-[#06261d]">👥</div>
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-wide text-[#86b9a5]">TEAM SIZE</p>
              <p className="text-[14px] font-semibold text-white">Solo</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="grid h-9 w-9 place-items-center rounded-lg border border-[#1bd87066] bg-[#06261d]">🧩</div>
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-wide text-[#86b9a5]">FORMAT</p>
              <p className="text-[14px] font-semibold text-white">Single Elimination</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="grid h-9 w-9 place-items-center rounded-lg border border-[#1bd87066] bg-[#06261d]">📅</div>
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-wide text-[#86b9a5]">TOURNAMENT STARTS</p>
              <p className="text-[14px] font-semibold text-white">24th April at 01:00 PM</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="grid h-9 w-9 place-items-center rounded-full border border-[#1bd87066] bg-[#06261d]">🕒</div>
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-wide text-[#86b9a5]">CHECK-IN</p>
              <p className="text-[14px] font-semibold text-white">10 mins before the match starts</p>
            </div>
          </div>
        </div>
      </div>

      <InfoCard title="">
        {[
          ["Total Tournament Prize", "2000"],
          ["1st Prize", "1000"],
          ["2nd Prize", "500"],
          ["3rd Prize", "200"],
        ].map(([label, value]) => (
          <div
            key={label}
            className="flex items-center justify-between border-b border-[#204e3f] py-3 text-[13px]"
          >
            <p className="text-[#b8dacc]">{label}</p>
            <div className="flex items-center gap-2 text-white">
              <span className="text-[14px] font-semibold">{value}</span>
              <Image alt="Coin" src="/figma/coin.png" width={14} height={14} className="h-3.5 w-3.5" />
            </div>
          </div>
        ))}
      </InfoCard>

      <div>
        <h2 className="mb-3 text-[22px] font-bold">Rounds and Schedule</h2>

        <div className="space-y-3">
          {[
            ["Qualifiers (Round 1)", "Single Elimination", "3rd Aug, 10:00 pm"],
            ["Top 4 to next round", "Single Elimination", "3rd Aug, 10:00 pm"],
            ["Qualifiers (Round 1)", "Single Elimination", "3rd Aug, 10:00 pm"],
          ].map(([left, pill, right], idx) => (
            <div key={`${left}-${idx}`} className="flex items-start justify-between gap-4 text-[12px]">
              <div className="text-[#d7ffe7]">{left}</div>
              <div className="flex items-center gap-3">
                <span className="rounded-full bg-[#5e4e8f] px-3 py-1 text-[10px] text-white">{pill}</span>
                <span className="text-[#86b9a5]">{right}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2 className="mb-2 text-[22px] font-bold">How to Join a Match</h2>
        <ul className="list-disc space-y-2 pl-5 text-[12px] leading-relaxed text-[#86b9a5]">
          <li>Have your game open already and on the latest version</li>
          <li>Once the match is configured you will receive an invite in-game to join the lobby.</li>
          <li>Join the match and wait for the game to start.</li>
          <li>
            When eliminated return to the match room page to be ready to join the next map in the round.
          </li>
        </ul>
      </div>

      <article className="rounded-xl border border-[#205141] bg-[#08281f] p-3">
        <p className="mb-2 text-[12px] font-semibold text-[#b8dacc]">Organiser&apos;s Details and contact</p>
        <div className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-[#7c4dff]" aria-hidden />
          <p className="text-[13px] font-semibold text-white">GS ESPORTS</p>
        </div>
        <p className="mt-1 text-[11px] text-[#86b9a5]">support@gsesports.com</p>
      </article>

      <div>
        <h2 className="mb-2 text-xl font-bold">More tournaments for you</h2>
        <div className="overflow-hidden rounded-xl border border-[#1e5341]">
          <Image alt="More tournaments" src="/figma/featured-card.png" width={680} height={500} className="h-auto w-full" />
        </div>
      </div>

      <button className="w-full rounded-lg bg-[#11cf66] py-2 text-sm font-bold text-[#043020]" type="button">
        JOIN TOURNAMENT
      </button>
    </section>
  );
}

function LobbySection({
  activeRound,
  onRoundChange,
  compact = false,
}: {
  activeRound: string;
  onRoundChange: (round: string) => void;
  compact?: boolean;
}) {
  const lobbyCount = compact ? 6 : 12;

  return (
    <section className="mt-4">
      <div className="mb-3 flex gap-2 overflow-x-auto">
        {rounds.map((round) => (
          <button
            key={round}
            className={`rounded-full px-3 py-1 text-[11px] ${
              round === activeRound ? "bg-[#145e43] text-[#dffff0]" : "bg-[#2b3f37] text-[#d0e2d9]"
            }`}
            onClick={() => onRoundChange(round)}
            type="button"
          >
            {round}
          </button>
        ))}
      </div>

      <div className="grid gap-2">
        {Array.from({ length: lobbyCount }).map((_, idx) => (
          <article
            key={idx}
            className="rounded-lg border border-[#205141] bg-[#06261d] px-3 py-3 text-xs"
          >
            <div className="flex items-center justify-between">
              <p className="text-[14px] font-bold leading-none">Lobby {idx + (idx > 0 ? 0 : 1)}</p>
              <button className="text-sm text-[#1fd379]" type="button">
                View Participants
              </button>
            </div>
            <p className="mt-2 text-[14px] text-[#d2e8dd]">⏲ Yet to be scheduled</p>
          </article>
        ))}
      </div>

      <button
        className="mt-3 w-full rounded-lg bg-[#15c868] py-2 text-xl font-bold text-[#f0ffee]"
        type="button"
      >
        JOIN TOURNAMENT
      </button>
    </section>
  );
}

function InfoCard({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <article className="rounded-xl border border-[#205141] bg-[#08281f] p-3">
      {title && <h2 className="mb-2 text-sm font-semibold">{title}</h2>}
      {children}
    </article>
  );
}
