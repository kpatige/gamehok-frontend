export default function BottomNav() {
  return (
    <nav className="fixed inset-x-0 bottom-0 z-30 mx-auto w-full max-w-[390px] border-t border-[#184737] bg-[#031f17] px-4 pb-2 pt-2">
      <div className="flex items-center justify-between text-[10px] text-[#9bcdb8]">
        <button type="button" className="flex w-[72px] flex-col items-center gap-1 text-[#19db72]">
          <IconHome active />
          <span>Home</span>
        </button>
        <button type="button" className="flex w-[72px] flex-col items-center gap-1">
          <IconTrophy />
          <span>My Tournament</span>
        </button>
        <button type="button" className="flex w-[72px] flex-col items-center gap-1">
          <IconUsers />
          <span>Social</span>
        </button>
        <button type="button" className="flex w-[72px] flex-col items-center gap-1">
          <IconChat />
          <span>Chats</span>
        </button>
      </div>
    </nav>
  );
}

function IconBase({
  children,
  active = false,
}: {
  children: React.ReactNode;
  active?: boolean;
}) {
  return (
    <div
      className={
        active
          ? 'grid h-9 w-9 place-items-center rounded-xl bg-[#0b3a26] text-[#19db72]'
          : 'grid h-9 w-9 place-items-center rounded-xl bg-transparent text-[#b7d8ca]'
      }
    >
      {children}
    </div>
  );
}

function IconHome({ active = false }: { active?: boolean }) {
  return (
    <IconBase active={active}>
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path
          d="M3 10.5 12 3l9 7.5V21a1 1 0 0 1-1 1h-5v-7H9v7H4a1 1 0 0 1-1-1V10.5Z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
      </svg>
    </IconBase>
  );
}

function IconTrophy() {
  return (
    <IconBase>
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path
          d="M8 21h8M12 17v4M7 4h10v3a5 5 0 0 1-10 0V4Z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
        <path
          d="M7 6H4v2a4 4 0 0 0 4 4M17 6h3v2a4 4 0 0 1-4 4"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
      </svg>
    </IconBase>
  );
}

function IconUsers() {
  return (
    <IconBase>
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path
          d="M16 21v-1a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v1"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
        <path
          d="M9 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
          stroke="currentColor"
          strokeWidth="1.8"
        />
        <path
          d="M22 21v-1a4 4 0 0 0-3-3.87"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
        <path
          d="M16 3.13a4 4 0 0 1 0 7.75"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
      </svg>
    </IconBase>
  );
}

function IconChat() {
  return (
    <IconBase>
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path
          d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v8Z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
      </svg>
    </IconBase>
  );
}