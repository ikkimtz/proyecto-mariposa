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
    window.setTimeout(onOpen, 1150);
  }

  return (
    <button
      className="relative h-[195px] w-[270px] border-0 bg-transparent p-0 drop-shadow-[0_24px_28px_rgba(78,59,59,.16)]"
      aria-label="Abrir invitación"
      onClick={handleOpen}
    >
      <span className="absolute bottom-[-20px] left-5 h-[25px] w-[230px] rounded-full bg-[rgba(78,59,59,.13)] blur-[10px]" />

      <span className="absolute bottom-3 left-3 right-3 top-[42px] rounded-[18px] border border-[rgba(201,162,39,.34)] bg-gradient-to-br from-white to-[#fff0f2]" />

      <motion.span
        className="absolute left-[35px] right-[35px] top-[45px] grid h-[100px] place-items-start rounded-[16px_16px_8px_8px] border border-[rgba(201,162,39,.24)] bg-[#fffefa] pt-5"
        animate={{ y: isOpening ? -28 : 42 }}
        transition={{ duration: 1.2, delay: 0.25, ease: "easeInOut" }}
      >
        <span className="font-serif font-bold tracking-[.08em] text-[#9E842A]">J & C</span>
      </motion.span>

      <motion.span
        className="absolute left-3 right-3 top-[30px] z-10 h-[104px] rounded-[18px_18px_8px_8px] border border-[rgba(201,162,39,.34)] bg-gradient-to-br from-[#fff7fa] to-rose"
        style={{
          clipPath: "polygon(0 0, 50% 92%, 100% 0, 100% 100%, 0 100%)",
          transformOrigin: "50% 100%"
        }}
        animate={{ rotateX: isOpening ? 168 : 0 }}
        transition={{ duration: 1.2, ease: [0.2, 0.8, 0.2, 1] }}
      />

      <span
        className="absolute bottom-3 left-3 right-3 h-[123px] rounded-[0_0_18px_18px] border border-[rgba(201,162,39,.32)]"
        style={{
          background:
            "linear-gradient(35deg, rgba(247,217,227,.75) 0 49%, transparent 50%), linear-gradient(-35deg, rgba(220,206,248,.54) 0 49%, transparent 50%), linear-gradient(180deg, #fffafa, #fff2f3)"
        }}
      />

      <motion.span
        className="absolute left-1/2 top-[96px] z-20 grid h-[62px] w-[62px] -translate-x-1/2 place-items-center rounded-full bg-gradient-to-br from-coral to-[#df7178] font-serif font-bold text-white shadow-[0_10px_18px_rgba(99,45,52,.22)]"
        animate={{ scale: isOpening ? 0.2 : 1, opacity: isOpening ? 0 : 1 }}
        transition={{ duration: 0.75, ease: "easeInOut" }}
      >
        J & C
      </motion.span>
    </button>
  );
}
