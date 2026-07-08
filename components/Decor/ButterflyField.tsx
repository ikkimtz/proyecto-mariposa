export function ButterflyField() {
  return (
    <div className="pointer-events-none fixed inset-0 z-20 overflow-hidden" aria-hidden="true">
      <Butterfly className="top-[15%] left-[-12%] animate-[butterflyFlight_17s_linear_infinite]" />
      <Butterfly className="top-[42%] left-[-18%] scale-75 animate-[butterflyFlight_17s_linear_infinite] [animation-delay:5s]" />
      <Butterfly className="top-[70%] left-[-14%] scale-110 animate-[butterflyFlight_17s_linear_infinite] [animation-delay:10s]" />
      <Butterfly className="top-[56%] left-[-16%] scale-90 animate-[butterflyFlight_17s_linear_infinite] [animation-delay:13s]" gold />
    </div>
  );
}

function Butterfly({ className, gold = false }: { className: string; gold?: boolean }) {
  return (
    <span className={`absolute h-[26px] w-[34px] opacity-75 ${className}`}>
      <span
        className={`absolute left-0 top-0 h-[22px] w-[17px] origin-bottom rounded-[70%_40%_70%_40%] ${
          gold ? "bg-gradient-to-br from-[#f5dd83] to-gold" : "bg-gradient-to-br from-lavender to-coral"
        } animate-[wing_.7s_ease-in-out_infinite_alternate]`}
      />
      <span
        className={`absolute right-0 top-0 h-[22px] w-[17px] origin-bottom scale-x-[-1] rounded-[70%_40%_70%_40%] ${
          gold ? "bg-gradient-to-br from-[#f5dd83] to-gold" : "bg-gradient-to-br from-lavender to-coral"
        } animate-[wing_.7s_ease-in-out_infinite_alternate]`}
      />
    </span>
  );
}
