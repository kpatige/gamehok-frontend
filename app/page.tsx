'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useMemo } from 'react';

import BottomNav from '@/components/BottomNav';

function HeaderBar() {
  return (
    <header className="flex items-center justify-between px-3 pt-2">
      <div className="flex items-center gap-2">
        <div className="grid h-8 w-8 place-items-center rounded-full bg-[#0b3a26] text-xs">👤</div>
      </div>

      <div className="flex items-center gap-3">
        <div className="flex items-center gap-1 rounded-full bg-[#0f8d4f] px-3 py-1 text-[12px] font-semibold text-white">
          <Image alt="Coin" src="/figma/coin.png" width={14} height={14} className="h-3.5 w-3.5" />
          <span>2456</span>
        </div>
        <button type="button" className="text-white/90" aria-label="Notifications">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
            <path
              d="M18 8a6 6 0 1 0-12 0c0 7-3 7-3 7h18s-3 0-3-7Z"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinejoin="round"
            />
            <path
              d="M13.73 21a2 2 0 0 1-3.46 0"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>
    </header>
  );
}

export default function Home() {
  const gameTiles = useMemo(
    () => [
      { name: 'BGMI', src: '/figma/game-bgmi.png' },
      { name: 'FREE FIRE', src: '/figma/game-freefire.png' },
      { name: 'COD MOBILE', src: '/figma/game-cod.png' },
      // The reference shows the same 3 games repeated in the next row.
      { name: 'BGMI', src: '/figma/game-bgmi.png' },
      { name: 'FREE FIRE', src: '/figma/game-freefire.png' },
      { name: 'COD MOBILE', src: '/figma/game-cod.png' },
    ],
    [],
  );

  return (
    <main className="min-h-screen bg-[#00190f] px-3 pb-28 pt-3 text-white">
      <HeaderBar />
      <section className="mt-3 overflow-hidden rounded-2xl">
        <Image
          alt="Social Star"
          src="/figma/social-star-banner.png"
          width={1024}
          height={512}
          className="h-auto w-full"
          priority
        />
      </section>

      {/* Featured tournaments */}
      <section className="mt-3">
        <div className="mb-2 flex items-center justify-between">
          <h2 className="text-[18px] font-bold leading-none">Featured Tournaments</h2>
          <Link href="/tournament/gs-monthly-showdown?tab=overview" className="text-xs text-[#08d96f]">
            View All
          </Link>
        </div>
        <div className="overflow-hidden rounded-xl border border-[#225642] bg-[#04241b]">
          <Image
            alt="Featured tournament"
            src="/figma/featured-crown.png"
            width={350}
            height={340}
            className="h-auto w-full"
            priority
          />
        </div>
      </section>

      {/* Bouncy bird card */}
      <section className="mt-3 overflow-hidden rounded-xl">
        <Image alt="Bouncy bird card" src="/figma/bouncy.png" width={760} height={210} className="h-auto w-full" />
      </section>

      {/* Play Tournament by Games */}
      <section className="mt-3">
        <h2 className="text-[28px] font-bold leading-none">Play Tournament by Games</h2>
        <div className="mt-3 grid grid-cols-3 gap-2">
          {gameTiles.map((game, idx) => (
            <article key={`${game.name}-${idx}`}>
              <div className="flex h-[74px] items-center justify-center overflow-hidden rounded-lg bg-[#001a12]">
                <Image
                  alt={game.name}
                  src={game.src}
                  width={220}
                  height={180}
                  className="h-full w-full object-contain"
                />
              </div>
              <p className="mt-1 text-center text-[10px] font-bold text-[#00d867]">{game.name}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Compete in Battles */}
      <section className="mt-3">
        <div className="mb-2 flex items-center justify-between">
          <h2 className="text-[28px] font-bold leading-none">Compete in Battles</h2>
          <span className="text-xs text-[#08d96f]">View All</span>
        </div>

        <div className="grid grid-cols-2 gap-3">
          {[
            {
              name: 'GS Daily Scrims',
              org: 'By GS Esports',
              icon: '/figma/badge-gs.png',
            },
            {
              name: 'TMR Daily Scrims',
              org: 'By TMR Esports',
              icon: '/figma/badge-tmr.png',
            },
          ].map((card) => (
            <article
              key={card.name}
              className="rounded-lg bg-gradient-to-b from-[#1a3a30] to-[#152f27] p-4 text-center"
            >
              <div className="mx-auto flex h-[54px] w-[54px] items-center justify-center overflow-hidden rounded-full border border-[#2f8060] bg-[#0b3a26]">
                <Image
                  alt={card.name}
                  src={card.icon}
                  width={54}
                  height={54}
                  className="h-[54px] w-[54px] object-contain"
                />
              </div>
              <p className="mt-2 text-[16px] font-semibold leading-tight">{card.name}</p>
              <p className="mt-0.5 text-[10px] text-[#9bcdb8]">{card.org}</p>
              <p className="mt-2 text-[11px] leading-snug text-[#bbd9ce]">
                Play daily scrims and sharpen your skill for the bigger events
              </p>
              <button
                className="mx-auto mt-3 inline-flex items-center justify-center rounded border border-[#19db72] bg-transparent px-3 py-1 text-[12px] font-semibold text-[#19db72]"
                type="button"
              >
                Explore scrims <span aria-hidden>›</span>
              </button>
            </article>
          ))}
        </div>
      </section>

      {/* Game Highlights */}
      <section className="mt-3">
        <div className="mb-2 flex items-center justify-between">
          <h2 className="text-[18px] font-bold leading-none">Game Highlights</h2>
          <span className="text-xs text-[#08d96f]">View All</span>
        </div>
        <div className="grid grid-cols-[1.6fr_1fr] gap-3">
          <article className="overflow-hidden rounded-xl border border-[#1c4f3f] bg-[#061f18]">
            <Image
              alt="Call of Duty"
              src="/figma/highlight-callofduty.png"
              width={500}
              height={404}
              className="h-[120px] w-full object-cover"
            />
            <div className="px-3 pb-3 pt-2 text-[11px] text-[#d7ffe7]">Call of Duty</div>
          </article>

          <article className="overflow-hidden rounded-xl border border-[#1c4f3f] bg-[#061f18]">
            <Image
              alt="BGMI Tournaments"
              src="/figma/highlight-bgmi.png"
              width={300}
              height={404}
              className="h-[120px] w-full object-cover"
            />
            <div className="px-3 pb-3 pt-2 text-[11px] text-[#d7ffe7]">BGMI Tournaments</div>
          </article>
        </div>
      </section>

      <BottomNav />
    </main>
  );
}