"use client";
import { motion } from "framer-motion";

export default function CodingFigure({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 280 320"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ filter: "drop-shadow(0 0 18px rgba(0,229,255,0.25))" }}
    >
      <defs>
        <filter id="cf-glow" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* ── Screen frame ── */}
      <rect x="50" y="28" width="180" height="128" rx="6"
        fill="#020210" stroke="#00e5ff" strokeWidth="1.5" />
      {/* inner display */}
      <rect x="58" y="36" width="164" height="112" rx="3" fill="#010108" />
      <rect x="58" y="36" width="164" height="112" rx="3" fill="rgba(0,229,255,0.02)" />

      {/* ── Code lines ── */}
      {/* import */}
      <rect x="68" y="47" width="28" height="3" rx="1.5" fill="#ff0080" opacity="0.9" />
      <rect x="100" y="47" width="52" height="3" rx="1.5" fill="#a0a0b0" opacity="0.45" />
      {/* func */}
      <rect x="68" y="57" width="20" height="3" rx="1.5" fill="#9900ff" opacity="0.9" />
      <rect x="92" y="57" width="38" height="3" rx="1.5" fill="#00e5ff" opacity="0.85" />
      <rect x="134" y="57" width="18" height="3" rx="1.5" fill="#a0a0b0" opacity="0.4" />
      {/* body line 1 */}
      <rect x="76" y="67" width="32" height="3" rx="1.5" fill="#00ff87" opacity="0.8" />
      <rect x="112" y="67" width="22" height="3" rx="1.5" fill="#ff0080" opacity="0.7" />
      {/* body line 2 */}
      <rect x="76" y="77" width="48" height="3" rx="1.5" fill="#00e5ff" opacity="0.75" />
      <rect x="128" y="77" width="16" height="3" rx="1.5" fill="#9900ff" opacity="0.65" />
      {/* body line 3 */}
      <rect x="76" y="87" width="25" height="3" rx="1.5" fill="#ff0080" opacity="0.75" />
      <rect x="105" y="87" width="38" height="3" rx="1.5" fill="#a0a0b0" opacity="0.4" />
      {/* body line 4 */}
      <rect x="76" y="97" width="35" height="3" rx="1.5" fill="#00ff87" opacity="0.65" />
      {/* active cursor line */}
      <rect x="68" y="107" width="14" height="3" rx="1.5" fill="#9900ff" opacity="0.85" />
      <rect x="86" y="107" width="28" height="3" rx="1.5" fill="#00e5ff" opacity="0.75" />
      <motion.rect x="118" y="105" width="2.5" height="7" rx="0.5" fill="#00e5ff"
        animate={{ opacity: [1, 0, 1] }}
        transition={{ duration: 0.85, repeat: Infinity }}
      />
      {/* closing lines */}
      <rect x="68" y="117" width="42" height="3" rx="1.5" fill="#a0a0b0" opacity="0.35" />
      <rect x="76" y="127" width="30" height="3" rx="1.5" fill="#ff0080" opacity="0.6" />
      <rect x="110" y="127" width="18" height="3" rx="1.5" fill="#00ff87" opacity="0.55" />
      <rect x="68" y="137" width="18" height="3" rx="1.5" fill="#9900ff" opacity="0.65" />

      {/* Screen top reflection */}
      <path d="M63 40 L78 36" stroke="white" strokeWidth="1.5" strokeLinecap="round" opacity="0.06" />

      {/* ── Keyboard hinge ── */}
      <rect x="50" y="155" width="180" height="3" rx="1.5" fill="#00e5ff" opacity="0.45" />
      {/* Keyboard base */}
      <path d="M36 158 L50 158 L230 158 L244 158 L248 178 L32 178 Z"
        fill="#020210" stroke="#00e5ff" strokeWidth="1.5" opacity="0.9" />
      {/* Key hints */}
      {[44, 58, 72, 86, 104, 118, 132, 146, 160, 176, 190, 206].map((x, i) => (
        <rect key={i} x={x} y="163" width={i === 4 ? 13 : 9} height="4" rx="1"
          fill="#00e5ff" opacity="0.1" />
      ))}
      {/* Touchpad */}
      <rect x="116" y="170" width="48" height="5" rx="2" fill="none"
        stroke="#00e5ff" strokeWidth="0.75" opacity="0.25" />

      {/* ── Person ── */}
      {/* Head */}
      <circle cx="140" cy="220" r="24" fill="#020210" stroke="#00e5ff" strokeWidth="1.5" />
      <circle cx="140" cy="220" r="24" fill="none" stroke="#00e5ff" strokeWidth="5" opacity="0.05" />
      {/* Eyes (minimal circuit style) */}
      <rect x="131" y="216" width="7" height="3" rx="1" fill="#00e5ff" opacity="0.25" />
      <rect x="142" y="216" width="7" height="3" rx="1" fill="#00e5ff" opacity="0.25" />
      {/* Mouth/scan line */}
      <rect x="133" y="225" width="14" height="2" rx="1" fill="#ff0080" opacity="0.2" />

      {/* Neck */}
      <rect x="133" y="242" width="14" height="10" rx="4"
        fill="#020210" stroke="#00e5ff" strokeWidth="1" opacity="0.8" />

      {/* Body */}
      <path d="M96 252 Q96 246 133 244 L147 244 Q184 246 184 252 L180 296 L100 296 Z"
        fill="#020210" stroke="#00e5ff" strokeWidth="1.5" opacity="0.9" />
      {/* Body circuit accent */}
      <path d="M118 263 L118 278 L128 278" stroke="#00e5ff" strokeWidth="0.75" opacity="0.18" />
      <path d="M162 263 L162 278 L152 278" stroke="#ff0080" strokeWidth="0.75" opacity="0.15" />
      {/* Chest dot */}
      <circle cx="140" cy="266" r="3" fill="none" stroke="#00e5ff" strokeWidth="1" opacity="0.25" />

      {/* Left arm → keyboard */}
      <path d="M98 261 Q66 246 50 180" stroke="#020210" strokeWidth="13" strokeLinecap="round" />
      <path d="M98 261 Q66 246 50 180" stroke="#00e5ff" strokeWidth="1.5" strokeLinecap="round" opacity="0.65" />

      {/* Right arm → keyboard */}
      <path d="M182 261 Q214 246 230 180" stroke="#020210" strokeWidth="13" strokeLinecap="round" />
      <path d="M182 261 Q214 246 230 180" stroke="#00e5ff" strokeWidth="1.5" strokeLinecap="round" opacity="0.65" />

      {/* ── Floating code symbols ── */}
      <motion.text x="14" y="85" fontFamily="monospace" fontSize="13" fill="#00e5ff" opacity="0.45"
        animate={{ y: [85, 75, 85], opacity: [0.45, 0.75, 0.45] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >{"</>"}</motion.text>

      <motion.text x="250" y="108" fontFamily="monospace" fontSize="12" fill="#ff0080" opacity="0.4"
        animate={{ y: [108, 98, 108], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      >{"{}"}</motion.text>

      <motion.text x="12" y="148" fontFamily="monospace" fontSize="10" fill="#9900ff" opacity="0.35"
        animate={{ y: [148, 138, 148], opacity: [0.35, 0.6, 0.35] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      >{"01"}</motion.text>

      <motion.text x="252" y="58" fontFamily="monospace" fontSize="10" fill="#00ff87" opacity="0.35"
        animate={{ y: [58, 48, 58], opacity: [0.35, 0.6, 0.35] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      >{"fn()"}</motion.text>

      {/* Corner hex accents */}
      <text x="16" y="308" fontFamily="monospace" fontSize="8" fill="#00e5ff" opacity="0.18">0x7F</text>
      <text x="234" y="308" fontFamily="monospace" fontSize="8" fill="#ff0080" opacity="0.18">0xA1</text>
    </svg>
  );
}
