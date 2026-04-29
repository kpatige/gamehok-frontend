export default function BouncyCard() {
  return (
    <section className="mt-4 flex items-center justify-between gap-3 rounded-2xl border border-[#3a8d6f] bg-gradient-to-r from-[#79d6e7] to-[#8ef0c2] px-4 py-3 text-[#083329]">
      <div>
        <p className="text-xs font-semibold">Introducing</p>
        <h3 className="text-lg font-black tracking-wide text-[#6947ff]">BOUNCY BIRD</h3>
        <p className="text-xs">Play daily, win weekly</p>
      </div>

      <button className="rounded-full bg-[#2dbd3b] px-4 py-2 text-xs font-bold text-white shadow">
        Play
      </button>
    </section>
  );
}