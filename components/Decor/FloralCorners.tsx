export function FloralCorners() {
  return (
    <>
      <Flower className="left-5 top-9 -rotate-12" />
      <Flower className="right-5 top-10 rotate-[35deg] scale-90" />
      <Flower className="bottom-11 left-5 rotate-[220deg] scale-90" />
      <Flower className="bottom-9 right-5 rotate-[155deg]" />
    </>
  );
}

function Flower({ className }: { className: string }) {
  return (
    <span className={`pointer-events-none absolute h-24 w-24 opacity-70 drop-shadow-lg ${className}`} aria-hidden="true">
      <span className="absolute left-5 top-5 h-12 w-12 rounded-[999px_999px_999px_20px] bg-gradient-to-br from-rose to-coral" />
      <span className="absolute left-9 top-14 h-5 w-14 rounded-full bg-gradient-to-br from-sage to-[#d8e7d3]" />
    </span>
  );
}
