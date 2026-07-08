"use client";

import { motion } from "framer-motion";
import { useState } from "react";

type EnvelopeProps = {
  onOpen: () => void;
};

export function Envelope({ onOpen }: EnvelopeProps) {
  const [isOpening, setIsOpening] = useState(false);

  function handleOpen() {
    if (isOpening) return;
    setIsOpening(true);
    window.setTimeout(onOpen, 1450);
  }

  return (
    <button
      className="group relative h-[230px] w-[310px] border-0 bg-transparent p-0 outline-none drop-shadow-[0_28px_34px_rgba(78,59,59,.18)]"
      aria-label="Abrir invitación"
      onClick={handleOpen}
    >
      <span className="absolute bottom-[-18px] left-10 h-[28px] w-[230px] rounded-full bg-[rgba(78,59,59,.15)] blur-[12px]" />

      <span className="absolute inset-x-[18px] bottom-[18px] top-[54px] rounded-[22px] border border-[rgba(201,162,39,.34)] bg-[linear-gradient(135deg,#fffdfb,#fff1f3)]">
        <span className="absolute inset-0 rounded-[22px] opacity-40 [background-image:radial-gradient(rgba(201,162,39,.18)_1px,transparent_1px)] [background-size:14px_14px]" />
      </span>

      <motion.span
        className="absolute left-[48px] right-[48px] top-[55px] grid h-[126px] place-items-start rounded-[18px_18px_10px_10px] border border-[rgba(201,162,39,.28)] bg-[#fffefa] px-5 pt-6 shadow-[0_10px_20px_rgba(84,58,45,.08)]"
        style={{
          background:
            "radial-gradient(circle at 16% 12%, rgba(247,217,227,.45), transparent 24%), radial-gradient(circle at 88% 20%, rgba(220,206,248,.40), transparent 30%), linear-gradient(180deg,#fffefa,#fffaf5)"
        }}
        animate={{
          y: isOpening ? -58 : 46,
          rotate: isOpening ? -1.5 : 0
        }}
        transition={{ duration: 1.35, delay: 0.25, ease: [0.2, 0.8, 0.2, 1] }}
      >
        <span className="mx-auto font-serif text-sm font-bold tracking-[.18em] text-[#9E842A]">
          J & C
        </span>
        <span className="mt-5 h-[1px] w-full bg-[rgba(201,162,39,.18)]" />
        <span className="mx-auto mt-4 font-serif text-[1.05rem] text-[#7B6159]">
          Cumpleaños Inolvidable
        </span>
      </motion.span>

      <motion.span
        className="absolute inset-x-[18px] top-[36px] z-10 h-[124px] rounded-[22px_22px_8px_8px] border border-[rgba(201,162,39,.34)] bg-gradient-to-br from-[#fff8fb] via-rose to-[#ffeef0]"
        style={{
          clipPath: "polygon(0 0, 50% 94%, 100% 0, 100% 100%, 0 100%)",
          transformOrigin: "50% 100%"
        }}
        animate={{ rotateX: isOpening ? 176 : 0 }}
        transition={{ duration: 1.25, ease: [0.2, 0.8, 0.2, 1] }}
      />

      <span
        className="absolute inset-x-[18px] bottom-[18px] z-20 h-[142px] rounded-[0_0_22px_22px] border border-[rgba(201,162,39,.34)]"
        style={{
          background:
            "linear-gradient(35deg, rgba(247,217,227,.82) 0 49%, transparent 50%), linear-gradient(-35deg, rgba(220,206,248,.60) 0 49%, transparent 50%), linear-gradient(180deg, #fffafa, #fff1f3)"
        }}
      >
        <span className="absolute inset-0 rounded-[0_0_22px_22px] opacity-35 [background-image:radial-gradient(rgba(255,255,255,.9)_1px,transparent_1px)] [background-size:12px_12px]" />
      </span>

      <motion.span
        className="absolute left-1/2 top-[112px] z-30 grid h-[70px] w-[70px] -translate-x-1/2 place-items-center rounded-full font-serif font-bold text-white shadow-[0_12px_22px_rgba(99,45,52,.25)]"
        style={{
          background:
            "radial-gradient(circle at 30% 22%, rgba(255,255,255,.38), transparent 18%), linear-gradient(145deg, #f48c8c, #df7178)"
        }}
        animate={{
          scale: isOpening ? 0.12 : 1,
          opacity: isOpening ? 0 : 1,
          rotate: isOpening ? 22 : 0
        }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        J & C
      </motion.span>

      <motion.span
        className="absolute left-[78px] top-[20px] h-8 w-10 opacity-0"
        animate={{
          opacity: isOpening ? [0, 1, 0] : 0,
          y: isOpening ? [-8, -42, -72] : 0,
          x: isOpening ? [0, -24, -42] : 0,
          rotate: isOpening ? [0, -18, -28] : 0
        }}
        transition={{ duration: 1.4, delay: 0.2 }}
      >
        <MiniButterfly />
      </motion.span>

      <motion.span
        className="absolute right-[70px] top-[34px] h-8 w-10 opacity-0"
        animate={{
          opacity: isOpening ? [0, 1, 0] : 0,
          y: isOpening ? [-6, -36, -66] : 0,
          x: isOpening ? [0, 20, 48] : 0,
          rotate: isOpening ? [0, 16, 34] : 0
        }}
        transition={{ duration: 1.4, delay: 0.35 }}
      >
        <MiniButterfly gold />
      </motion.span>
    </button>
  );
}

function MiniButterfly({ gold = false }: { gold?: boolean }) {
  const color = gold ? "from-[#f5dd83] to-gold" : "from-lavender to-coral";

  return (
    <span className="relative block h-8 w-10">
      <span className={`absolute left-0 top-1 h-7 w-5 origin-bottom rounded-[70%_40%_70%_40%] bg-gradient-to-br ${color}`} />
      <span className={`absolute right-0 top-1 h-7 w-5 origin-bottom scale-x-[-1] rounded-[70%_40%_70%_40%] bg-gradient-to-br ${color}`} />
    </span>
  );
}
