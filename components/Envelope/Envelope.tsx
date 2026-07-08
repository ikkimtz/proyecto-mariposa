"use client";

import { motion } from "framer-motion";

type EnvelopeProps = {
  isOpening: boolean;
  onOpen: () => void;
};

export function Envelope({ isOpening, onOpen }: EnvelopeProps) {
  return (
    <button
      className="relative h-[330px] w-[390px] max-w-[97vw] border-0 bg-transparent p-0 outline-none"
      aria-label="Abrir invitación"
      onClick={onOpen}
    >
      <motion.div
        className="absolute inset-0"
        animate={{
          scale: isOpening ? [1, 1.01, 1.07] : 1,
          y: isOpening ? [0, -5, -14] : 0,
          opacity: isOpening ? [1, 1, 0.96] : 1
        }}
        transition={{ duration: 2.7, ease: [0.2, 0.8, 0.2, 1] }}
      >
        <img
          src="/illustrations/envelope-mockup-premium.svg"
          alt="Sobre premium de invitación"
          className="h-full w-full select-none object-contain"
          draggable={false}
        />
      </motion.div>

      <motion.div
        className="absolute left-1/2 top-[82px] z-10 h-[150px] w-[210px] -translate-x-1/2 rounded-[20px] border border-[rgba(200,168,78,.30)] bg-[#fffefa] px-6 pt-8 text-center shadow-[0_14px_28px_rgba(84,58,45,.10)]"
        style={{
          background:
            "radial-gradient(circle at 18% 12%, rgba(232,184,199,.38), transparent 25%), radial-gradient(circle at 90% 24%, rgba(220,206,248,.34), transparent 30%), linear-gradient(180deg,#fffefa,#fff8f1)"
        }}
        animate={{
          y: isOpening ? [44, 8, -72, -148] : 44,
          scale: isOpening ? [1, 1, 1.02, 1.08] : 1,
          rotate: isOpening ? [0, -0.8, 1.2, -1.2] : 0,
          opacity: isOpening ? [0.92, 1, 1, 0.98] : 0.92
        }}
        transition={{
          duration: 2.35,
          ease: [0.2, 0.8, 0.2, 1],
          times: [0, 0.36, 0.72, 1]
        }}
      >
        <div className="font-serif text-sm font-bold tracking-[.18em] text-[#9E842A]">J & C</div>
        <div className="mx-auto mt-5 h-[1px] w-full bg-[linear-gradient(90deg,transparent,#C8A84E,transparent)]" />
        <div className="mt-4 font-serif text-[1.05rem] text-[#7B6159]">Cumpleaños Inolvidable</div>
      </motion.div>

      <motion.div
        className="absolute left-[86px] top-[105px] z-20 h-8 w-10 opacity-0"
        animate={{
          opacity: isOpening ? [0, 0, 1, 1, 0] : 0,
          y: isOpening ? [0, 0, -28, -78, -130] : 0,
          x: isOpening ? [0, 0, -18, -72, -122] : 0,
          rotate: isOpening ? [0, 0, -12, -28, -40] : 0
        }}
        transition={{ duration: 1.8, delay: 1.08 }}
      >
        <MiniButterfly />
      </motion.div>

      <motion.div
        className="absolute right-[86px] top-[108px] z-20 h-8 w-10 opacity-0"
        animate={{
          opacity: isOpening ? [0, 0, 1, 1, 0] : 0,
          y: isOpening ? [0, 0, -22, -74, -128] : 0,
          x: isOpening ? [0, 0, 22, 78, 128] : 0,
          rotate: isOpening ? [0, 0, 14, 30, 44] : 0
        }}
        transition={{ duration: 1.8, delay: 1.16 }}
      >
        <MiniButterfly gold />
      </motion.div>
    </button>
  );
}

function MiniButterfly({ gold = false }: { gold?: boolean }) {
  const color = gold ? "from-[#f5dd83] to-gold" : "from-lavender to-coral";

  return (
    <span className="relative block h-8 w-10">
      <span
        className={`absolute left-0 top-1 h-7 w-5 origin-bottom rounded-[70%_40%_70%_40%] bg-gradient-to-br ${color} animate-[wing_.55s_ease-in-out_infinite_alternate]`}
      />
      <span
        className={`absolute right-0 top-1 h-7 w-5 origin-bottom scale-x-[-1] rounded-[70%_40%_70%_40%] bg-gradient-to-br ${color} animate-[wing_.55s_ease-in-out_infinite_alternate]`}
      />
      <span className="absolute left-1/2 top-2 h-5 w-[2px] -translate-x-1/2 rounded-full bg-[#7B6159]/40" />
    </span>
  );
}
