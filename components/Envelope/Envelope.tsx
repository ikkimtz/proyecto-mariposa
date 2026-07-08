"use client";

import { motion } from "framer-motion";

type EnvelopeProps = {
  isOpening: boolean;
  onOpen: () => void;
};

export function Envelope({ isOpening, onOpen }: EnvelopeProps) {
  return (
    <button
      className="relative h-[300px] w-[370px] max-w-[96vw] border-0 bg-transparent p-0 outline-none"
      aria-label="Abrir invitación"
      onClick={onOpen}
    >
      <motion.div
        className="absolute inset-0"
        animate={{
          scale: isOpening ? [1, 1.01, 1.06] : 1,
          y: isOpening ? [0, -4, -10] : 0
        }}
        transition={{ duration: 2.6, ease: [0.2, 0.8, 0.2, 1] }}
      >
        <svg
          viewBox="0 0 420 330"
          className="h-full w-full overflow-visible drop-shadow-[0_32px_38px_rgba(78,59,59,.22)]"
          role="img"
          aria-label="Sobre premium de invitación"
        >
          <defs>
            <filter id="pm-paper-noise">
              <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="3" stitchTiles="stitch" />
              <feColorMatrix type="saturate" values="0" />
              <feComponentTransfer>
                <feFuncA type="table" tableValues="0 0.055" />
              </feComponentTransfer>
            </filter>

            <filter id="pm-wax-shadow" x="-30%" y="-30%" width="160%" height="160%">
              <feDropShadow dx="0" dy="7" stdDeviation="5" floodColor="#713437" floodOpacity=".28" />
            </filter>

            <linearGradient id="pm-paper" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#fffefa" />
              <stop offset="44%" stopColor="#fff7f1" />
              <stop offset="100%" stopColor="#f6e5e4" />
            </linearGradient>

            <linearGradient id="pm-flap" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#fff8fb" />
              <stop offset="48%" stopColor="#ead4e5" />
              <stop offset="100%" stopColor="#fff0ef" />
            </linearGradient>

            <linearGradient id="pm-inside" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#e8b8c7" />
              <stop offset="100%" stopColor="#fff4f2" />
            </linearGradient>

            <radialGradient id="pm-wax" cx=".32" cy=".25" r=".72">
              <stop offset="0%" stopColor="#ffc3b9" />
              <stop offset="35%" stopColor="#f28c8c" />
              <stop offset="100%" stopColor="#b64b50" />
            </radialGradient>

            <linearGradient id="pm-gold" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#ecd995" />
              <stop offset="50%" stopColor="#c8a84e" />
              <stop offset="100%" stopColor="#f6e6ae" />
            </linearGradient>

            <radialGradient id="pm-highlight" cx=".25" cy=".18" r=".8">
              <stop offset="0%" stopColor="rgba(255,255,255,.72)" />
              <stop offset="100%" stopColor="rgba(255,255,255,0)" />
            </radialGradient>
          </defs>

          <ellipse cx="210" cy="300" rx="150" ry="20" fill="rgba(78,59,59,.14)" />

          <motion.g
            initial={false}
            animate={{
              y: isOpening ? [46, 10, -58, -128] : 46,
              rotate: isOpening ? [0, -0.8, 1.2, -1.2] : 0,
              scale: isOpening ? [1, 1, 1.02, 1.07] : 1
            }}
            transition={{
              duration: 2.35,
              ease: [0.2, 0.8, 0.2, 1],
              times: [0, 0.36, 0.72, 1]
            }}
            style={{ transformOrigin: "210px 165px" }}
          >
            <path
              d="M106 54 C130 40, 289 40, 314 55 C322 60, 326 68, 326 78 L326 220 C326 232, 316 242, 304 242 L116 242 C104 242, 94 232, 94 220 L94 78 C94 68, 99 60, 106 54 Z"
              fill="url(#pm-paper)"
              stroke="#d7bd70"
              strokeWidth="1.4"
            />
            <rect x="94" y="50" width="232" height="192" fill="white" opacity=".26" filter="url(#pm-paper-noise)" />
            <path d="M121 78 C145 71, 276 71, 299 78" fill="none" stroke="url(#pm-gold)" strokeWidth="2" opacity=".75" />
            <text x="210" y="122" textAnchor="middle" fontFamily="serif" fontSize="24" fontWeight="700" fill="#9e842a" letterSpacing="4">
              J &amp; C
            </text>
            <path d="M154 143 H266" stroke="url(#pm-gold)" strokeWidth="1.4" />
            <text x="210" y="176" textAnchor="middle" fontFamily="serif" fontSize="18" fill="#7b6159">
              Cumpleaños Inolvidable
            </text>
            <path d="M118 205 C160 214, 249 214, 300 205" fill="none" stroke="#e8b8c7" strokeWidth="1.2" opacity=".45" />
          </motion.g>

          <path
            d="M70 100 C80 76, 98 66, 120 66 H300 C322 66, 340 76, 350 100 L350 258 C350 276, 336 290, 318 290 H102 C84 290, 70 276, 70 258 Z"
            fill="url(#pm-inside)"
            opacity=".78"
            stroke="#d7bd70"
            strokeWidth="1.3"
          />
          <path d="M70 101 L210 205 L350 101" fill="none" stroke="#d7bd70" strokeWidth="1.1" opacity=".42" />

          <motion.g
            animate={{ rotateX: isOpening ? 178 : 0, y: isOpening ? -8 : 0 }}
            transition={{ duration: 1.22, delay: isOpening ? 0.75 : 0, ease: [0.2, 0.8, 0.2, 1] }}
            style={{ transformOrigin: "210px 205px", transformBox: "fill-box" }}
          >
            <path
              d="M74 96 C87 72, 107 62, 132 62 H288 C313 62, 333 72, 346 96 L210 207 Z"
              fill="url(#pm-flap)"
              stroke="#d7bd70"
              strokeWidth="1.4"
            />
            <path d="M101 91 C137 72, 281 71, 319 92" fill="none" stroke="white" strokeWidth="1.4" opacity=".42" />
            <path d="M82 98 C123 123, 166 160, 210 207 C252 160, 296 123, 338 98" fill="none" stroke="#fff" opacity=".26" />
          </motion.g>

          <path
            d="M70 100 L210 213 L350 100 L350 258 C350 276, 336 290, 318 290 H102 C84 290, 70 276, 70 258 Z"
            fill="url(#pm-paper)"
            stroke="#d7bd70"
            strokeWidth="1.4"
          />
          <path d="M72 258 L172 178" stroke="#d7bd70" strokeWidth="1" opacity=".42" />
          <path d="M348 258 L248 178" stroke="#d7bd70" strokeWidth="1" opacity=".42" />
          <path d="M70 101 C112 132, 160 172, 210 214 C260 172, 308 132, 350 101" fill="none" stroke="#fff" strokeWidth="1.5" opacity=".30" />
          <path d="M70 100 L210 213 L350 100 L350 258 C350 276 336 290 318 290 H102 C84 290 70 276 70 258 Z" fill="white" opacity=".15" filter="url(#pm-paper-noise)" />
          <path d="M70 100 L210 213 L350 100 L350 258 C350 276 336 290 318 290 H102 C84 290 70 276 70 258 Z" fill="url(#pm-highlight)" opacity=".35" />

          <motion.g
            filter="url(#pm-wax-shadow)"
            animate={{
              scale: isOpening ? [1, 1.08, 1, 0.72, 0.12] : [1, 1.035, 1],
              opacity: isOpening ? [1, 1, 1, 0.68, 0] : 1,
              rotate: isOpening ? [0, -6, 10, 22, 40] : 0,
              x: isOpening ? [0, 0, 18, 32, 48] : 0,
              y: isOpening ? [0, 0, -18, 16, 48] : 0
            }}
            transition={{ duration: isOpening ? 1.05 : 2.8, repeat: isOpening ? 0 : Infinity, ease: "easeInOut" }}
            style={{ transformOrigin: "210px 176px" }}
          >
            <path
              d="M210 134 C226 132, 242 143, 246 159 C255 168, 252 185, 241 195 C236 211, 219 218, 204 213 C188 217, 173 208, 168 194 C155 185, 154 167, 165 157 C169 142, 185 133, 200 136 C203 135, 206 134, 210 134 Z"
              fill="url(#pm-wax)"
            />
            <path d="M180 163 C190 148, 219 142, 236 158" fill="none" stroke="rgba(255,255,255,.34)" strokeWidth="4" strokeLinecap="round" />
            <circle cx="210" cy="176" r="30" fill="none" stroke="rgba(255,255,255,.30)" strokeWidth="1.4" />
            <text x="210" y="182" textAnchor="middle" fontFamily="serif" fontSize="18" fontWeight="700" fill="white">
              J&amp;C
            </text>
          </motion.g>
        </svg>
      </motion.div>

      <motion.span
        className="absolute left-[82px] top-[98px] z-40 h-8 w-10 opacity-0"
        animate={{
          opacity: isOpening ? [0, 0, 1, 1, 0] : 0,
          y: isOpening ? [0, 0, -28, -78, -128] : 0,
          x: isOpening ? [0, 0, -18, -70, -118] : 0,
          rotate: isOpening ? [0, 0, -12, -28, -38] : 0
        }}
        transition={{ duration: 1.8, delay: 1.08 }}
      >
        <MiniButterfly />
      </motion.span>

      <motion.span
        className="absolute right-[82px] top-[102px] z-40 h-8 w-10 opacity-0"
        animate={{
          opacity: isOpening ? [0, 0, 1, 1, 0] : 0,
          y: isOpening ? [0, 0, -22, -74, -124] : 0,
          x: isOpening ? [0, 0, 22, 74, 124] : 0,
          rotate: isOpening ? [0, 0, 14, 30, 42] : 0
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
      <span className={`absolute left-0 top-1 h-7 w-5 origin-bottom rounded-[70%_40%_70%_40%] bg-gradient-to-br ${color} animate-[wing_.55s_ease-in-out_infinite_alternate]`} />
      <span className={`absolute right-0 top-1 h-7 w-5 origin-bottom scale-x-[-1] rounded-[70%_40%_70%_40%] bg-gradient-to-br ${color} animate-[wing_.55s_ease-in-out_infinite_alternate]`} />
      <span className="absolute left-1/2 top-2 h-5 w-[2px] -translate-x-1/2 rounded-full bg-[#7B6159]/40" />
    </span>
  );
}
