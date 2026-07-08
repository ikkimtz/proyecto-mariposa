"use client";

import { motion } from "framer-motion";

type EnvelopeProps = {
  isOpening: boolean;
  onOpen: () => void;
};

export function Envelope({ isOpening, onOpen }: EnvelopeProps) {
  return (
    <button
      className="relative h-[320px] w-[390px] max-w-[96vw] border-0 bg-transparent p-0 outline-none"
      aria-label="Abrir invitación"
      onClick={onOpen}
    >
      <motion.svg
        viewBox="0 0 760 620"
        className="h-full w-full overflow-visible drop-shadow-[0_32px_38px_rgba(78,59,59,.22)]"
        role="img"
        aria-label="Sobre premium de invitación"
        animate={{
          scale: isOpening ? [1, 1.015, 1.07] : 1,
          y: isOpening ? [0, -4, -12] : 0
        }}
        transition={{ duration: 2.7, ease: [0.2, 0.8, 0.2, 1] }}
      >
        <defs>
          <filter id="paperNoise" x="0" y="0" width="760" height="620" filterUnits="userSpaceOnUse">
            <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" stitchTiles="stitch" />
            <feColorMatrix type="saturate" values="0" />
            <feComponentTransfer>
              <feFuncA type="table" tableValues="0 0.052" />
            </feComponentTransfer>
          </filter>

          <filter id="waxShadow" x="-30%" y="-30%" width="160%" height="160%">
            <feDropShadow dx="0" dy="8" stdDeviation="6" floodColor="#713437" floodOpacity=".30" />
          </filter>

          <linearGradient id="paper" x1="150" y1="120" x2="610" y2="540" gradientUnits="userSpaceOnUse">
            <stop stopColor="#fffefa" />
            <stop offset=".45" stopColor="#fff6f1" />
            <stop offset="1" stopColor="#f3e0e2" />
          </linearGradient>

          <linearGradient id="flap" x1="170" y1="150" x2="590" y2="360" gradientUnits="userSpaceOnUse">
            <stop stopColor="#fff8fb" />
            <stop offset=".52" stopColor="#ead4e5" />
            <stop offset="1" stopColor="#ffefed" />
          </linearGradient>

          <linearGradient id="inside" x1="380" y1="158" x2="380" y2="520" gradientUnits="userSpaceOnUse">
            <stop stopColor="#e8b8c7" />
            <stop offset="1" stopColor="#fff4f2" />
          </linearGradient>

          <linearGradient id="gold" x1="250" y1="0" x2="510" y2="0" gradientUnits="userSpaceOnUse">
            <stop stopColor="#ecd995" />
            <stop offset=".5" stopColor="#c8a84e" />
            <stop offset="1" stopColor="#f6e7b0" />
          </linearGradient>

          <radialGradient id="wax" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(365 322) rotate(45) scale(92)">
            <stop stopColor="#ffc3b9" />
            <stop offset=".38" stopColor="#f28c8c" />
            <stop offset="1" stopColor="#b64b50" />
          </radialGradient>

          <radialGradient id="paperGlow" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(245 170) rotate(55) scale(280)">
            <stop stopColor="white" stopOpacity=".84" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </radialGradient>
        </defs>

        <ellipse cx="380" cy="540" rx="215" ry="36" fill="#4E3B3B" opacity=".13" />

        {/* Carta: inicia oculta detrás del cuerpo del sobre */}
        <motion.g
          initial={false}
          animate={{
            y: isOpening ? [118, 78, 8, -74] : 118,
            rotate: isOpening ? [0, -0.7, 1.1, -1.1] : 0,
            scale: isOpening ? [1, 1, 1.02, 1.06] : 1
          }}
          transition={{
            duration: 2.35,
            ease: [0.2, 0.8, 0.2, 1],
            times: [0, 0.36, 0.72, 1]
          }}
          style={{ transformOrigin: "380px 250px" }}
        >
          <path
            d="M216 80 C245 62, 515 62, 544 80 C554 86, 560 98, 560 112 L560 360 C560 379, 545 394, 526 394 L234 394 C215 394, 200 379, 200 360 L200 112 C200 98, 206 86, 216 80 Z"
            fill="url(#paper)"
            stroke="#D7BD70"
            strokeWidth="2"
          />
          <rect x="200" y="78" width="360" height="316" fill="white" opacity=".22" filter="url(#paperNoise)" />
          <path d="M242 128 C292 116, 468 116, 518 128" fill="none" stroke="url(#gold)" strokeWidth="3" opacity=".78" />
          <text x="380" y="205" textAnchor="middle" fontFamily="Georgia, serif" fontSize="42" fontWeight="700" fill="#9E842A" letterSpacing="6">
            J &amp; C
          </text>
          <path d="M296 240 H464" stroke="url(#gold)" strokeWidth="2" />
          <text x="380" y="292" textAnchor="middle" fontFamily="Georgia, serif" fontSize="29" fill="#7B6159">
            Cumpleaños Inolvidable
          </text>
        </motion.g>

        {/* Interior del sobre */}
        <path
          d="M151 210 C171 164, 207 146, 252 146 H508 C553 146, 589 164, 609 210 L609 478 C609 509, 584 534, 553 534 H207 C176 534, 151 509, 151 478 Z"
          fill="url(#inside)"
          opacity=".78"
          stroke="#D7BD70"
          strokeWidth="2.2"
        />
        <path d="M152 213 L380 378 L608 213" stroke="#C8A84E" strokeOpacity=".35" strokeWidth="2" />

        {/* Solapa posterior animada */}
        <motion.g
          animate={{
            rotateX: isOpening ? 178 : 0,
            y: isOpening ? -8 : 0
          }}
          transition={{
            duration: 1.22,
            delay: isOpening ? 0.75 : 0,
            ease: [0.2, 0.8, 0.2, 1]
          }}
          style={{ transformOrigin: "380px 388px", transformBox: "fill-box" }}
        >
          <path
            d="M171 217 C191 174, 225 159, 265 159 H495 C535 159, 569 174, 589 217 L380 388 Z"
            fill="url(#flap)"
            stroke="#D7BD70"
            strokeWidth="2.4"
          />
          <path d="M208 214 C255 174, 506 174, 553 214" stroke="white" strokeOpacity=".52" strokeWidth="2" fill="none" />
          <path d="M186 220 C254 262, 315 323, 380 388 C445 323, 506 262, 574 220" stroke="white" strokeOpacity=".26" strokeWidth="2" fill="none" />
        </motion.g>

        {/* Frente del sobre: siempre por encima de la carta para ocultarla al inicio */}
        <path
          d="M151 213 L380 394 L609 213 L609 478 C609 509, 584 534, 553 534 H207 C176 534, 151 509, 151 478 Z"
          fill="url(#paper)"
          stroke="#D7BD70"
          strokeWidth="2.4"
        />
        <path
          d="M151 213 L380 394 L609 213 L609 478 C609 509, 584 534, 553 534 H207 C176 534, 151 509, 151 478 Z"
          fill="white"
          opacity=".18"
          filter="url(#paperNoise)"
        />
        <path d="M154 476 L316 335" stroke="#C8A84E" strokeOpacity=".34" strokeWidth="2" />
        <path d="M606 476 L444 335" stroke="#C8A84E" strokeOpacity=".34" strokeWidth="2" />
        <path d="M151 213 C219 264, 300 334, 380 394 C460 334, 541 264, 609 213" stroke="white" strokeOpacity=".38" strokeWidth="2" fill="none" />
        <path
          d="M151 213 L380 394 L609 213 L609 478 C609 509, 584 534, 553 534 H207 C176 534, 151 509, 151 478 Z"
          fill="url(#paperGlow)"
          opacity=".45"
        />

        {/* Sello de cera */}
        <motion.g
          filter="url(#waxShadow)"
          animate={{
            scale: isOpening ? [1, 1.08, 1, 0.72, 0.12] : [1, 1.035, 1],
            opacity: isOpening ? [1, 1, 1, 0.68, 0] : 1,
            rotate: isOpening ? [0, -6, 10, 22, 40] : 0,
            x: isOpening ? [0, 0, 18, 32, 48] : 0,
            y: isOpening ? [0, 0, -18, 16, 48] : 0
          }}
          transition={{
            duration: isOpening ? 1.05 : 2.8,
            repeat: isOpening ? 0 : Infinity,
            ease: "easeInOut"
          }}
          style={{ transformOrigin: "380px 334px" }}
        >
          <path
            d="M380 268 C405 264, 431 281, 437 307 C451 321, 446 349, 429 365 C421 390, 394 401, 371 393 C345 400, 321 386, 313 363 C293 348, 291 319, 309 303 C315 279, 341 265, 365 270 C370 269, 375 268, 380 268 Z"
            fill="url(#wax)"
          />
          <path d="M333 313 C351 289, 397 280, 425 306" stroke="white" strokeOpacity=".34" strokeWidth="8" strokeLinecap="round" fill="none" />
          <circle cx="380" cy="334" r="50" stroke="white" strokeOpacity=".32" strokeWidth="2" fill="none" />
          <text x="380" y="344" textAnchor="middle" fontFamily="Georgia, serif" fontSize="31" fontWeight="700" fill="white">
            J&amp;C
          </text>
        </motion.g>

        {/* Flores decorativas integradas */}
        <g opacity=".84">
          <path d="M105 138 C133 102 178 104 190 140 C201 174 164 197 134 181 C103 165 83 164 105 138Z" fill="#E8B8C7" />
          <path d="M145 157 C169 124 208 140 199 175 C190 211 141 207 132 176" fill="#DCCEF8" />
          <path d="M171 198 C201 195 222 221 196 244 C174 264 142 242 153 214" fill="#AFC9B0" opacity=".82" />
          <circle cx="157" cy="165" r="12" fill="white" opacity=".72" />
        </g>

        <g opacity=".78" transform="translate(565 120) rotate(28)">
          <path d="M38 18 C62 -7 101 2 104 36 C106 70 65 84 43 60 C19 34 12 44 38 18Z" fill="#DCCEF8" />
          <path d="M74 52 C102 28 139 47 126 82 C113 117 67 107 61 76" fill="#E8B8C7" />
          <path d="M86 105 C115 98 141 121 119 147 C99 170 62 151 70 120" fill="#AFC9B0" opacity=".82" />
        </g>
      </motion.svg>

      <motion.span
        className="absolute left-[86px] top-[118px] z-20 h-8 w-10 opacity-0"
        animate={{
          opacity: isOpening ? [0, 0, 1, 1, 0] : 0,
          y: isOpening ? [0, 0, -28, -78, -132] : 0,
          x: isOpening ? [0, 0, -18, -72, -122] : 0,
          rotate: isOpening ? [0, 0, -12, -28, -40] : 0
        }}
        transition={{ duration: 1.8, delay: 1.08 }}
      >
        <MiniButterfly />
      </motion.span>

      <motion.span
        className="absolute right-[86px] top-[122px] z-20 h-8 w-10 opacity-0"
        animate={{
          opacity: isOpening ? [0, 0, 1, 1, 0] : 0,
          y: isOpening ? [0, 0, -22, -74, -128] : 0,
          x: isOpening ? [0, 0, 22, 78, 128] : 0,
          rotate: isOpening ? [0, 0, 14, 30, 44] : 0
        }}
        transition={{ duration: 1.8, delay: 1.16 }}
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
