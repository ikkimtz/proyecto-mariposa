export function FloralCorners() {
  return (
    <>
      <Flower className="left-4 top-9 -rotate-12" />
      <Flower className="right-4 top-10 rotate-[35deg] scale-90" />
      <Flower className="bottom-12 left-4 rotate-[220deg] scale-90" />
      <Flower className="bottom-9 right-4 rotate-[155deg]" />
    </>
  );
}

function Flower({ className }: { className: string }) {
  return (
    <span
      className={`pointer-events-none absolute h-28 w-28 opacity-75 drop-shadow-[0_12px_16px_rgba(84,58,45,.08)] ${className}`}
      aria-hidden="true"
    >
      <span className="absolute left-6 top-5 h-12 w-12 rounded-[999px_999px_999px_24px] bg-gradient-to-br from-rose to-coral" />
      <span className="absolute left-3 top-8 h-9 w-9 rounded-[999px_999px_999px_16px] bg-gradient-to-br from-lavender to-rose opacity-90" />
      <span className="absolute left-9 top-2 h-8 w-8 rounded-[999px_999px_999px_14px] bg-gradient-to-br from-[#fff7c8] to-rose opacity-75" />
      <span className="absolute left-[45px] top-[60px] h-5 w-16 rounded-full bg-gradient-to-br from-sage to-[#d8e7d3]" />
      <span className="absolute left-[24px] top-[70px] h-4 w-12 -rotate-12 rounded-full bg-gradient-to-br from-sage to-[#d8e7d3] opacity-90" />
      <span className="absolute left-[48px] top-[38px] h-3 w-3 rounded-full bg-white/80" />
    </span>
  );
}
