type HeaderProps = {
  compact?: boolean;
};

export default function Header({ compact = false }: HeaderProps) {
  return (
    <header className="flex items-center justify-between gap-3">
      <div className="flex items-center gap-2">
        <div className="grid h-8 w-8 place-items-center rounded-full border border-[#2a6a50] bg-[#0f3529] text-xs">
          👨
        </div>
        {!compact && (
          <div className="text-xs text-[#9bd0bb]">
            <p className="font-semibold text-[#e9fff5]">GAMEHOK</p>
            <p>Welcome back</p>
          </div>
        )}
      </div>

      <div className="flex items-center gap-2 text-xs">
        <span className="rounded-full border border-[#33c67466] bg-[#14b76022] px-2 py-1">245</span>
        <span className="rounded-full border border-[#33c67466] bg-[#14b76022] px-2 py-1">2456</span>
        <span className="text-[#b7f3d5]">🔔</span>
      </div>
    </header>
  );
}