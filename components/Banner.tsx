const stats = ["Posts", "Followers", "Likes"];

export default function Banner() {
  return (
    <section className="rounded-2xl border border-[#1a4c3b] bg-gradient-to-r from-[#0e4f37] to-[#0f7f45] p-4 shadow-[0_0_40px_rgba(16,214,110,0.14)]">
      <div className="flex items-start justify-between gap-3">
        <div>
          <h2 className="text-lg font-semibold leading-snug">
            Be the Gamehok&apos;s <span className="text-[#84f79f]">Social Star</span>
          </h2>
          <p className="mt-1 text-xs text-[#d7ffe7]">
            Earn rewards by levelling up your social game
          </p>
        </div>
        <div className="grid h-20 w-20 place-items-center rounded-2xl border border-[#8cf8aa55] bg-[#16a34a22] text-4xl">
          ⭐
        </div>
      </div>

      <div className="mt-4 grid grid-cols-3 gap-2">
        {stats.map((label) => (
          <div
            key={label}
            className="rounded-xl border border-[#8cf8aa44] bg-[#052c1fcc] p-2 text-center text-[11px] text-[#ceffe0]"
          >
            <div className="mx-auto mb-1 grid h-7 w-7 place-items-center rounded-full border border-[#31cb7355] bg-[#123b2b]">
              ✓
            </div>
            {label}
          </div>
        ))}
      </div>
    </section>
  );
}