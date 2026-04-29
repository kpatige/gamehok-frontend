export default function GameCard({ name }: { name: string }) {
  return (
    <article className="min-w-[102px] overflow-hidden rounded-xl border border-[#225643] bg-[#092d22]">
      <div className="h-16 bg-gradient-to-br from-[#4f6474] to-[#1f2a38]" />
      <p className="p-2 text-center text-[11px] font-semibold">{name}</p>
    </article>
  );
}