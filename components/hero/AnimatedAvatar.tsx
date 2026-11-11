"use client";

import { motion, useReducedMotion } from "framer-motion";

// An illustrated developer at a glowing laptop (no photo): floating code, blinking eyes, a pulsing screen.
export default function AnimatedAvatar() {
  const still = useReducedMotion();
  const loop = (duration: number, delay = 0) =>
    still ? { duration: 0 } : { repeat: Infinity, duration, delay, ease: "easeInOut" as const };

  return (
    <svg viewBox="0 0 360 300" role="img" aria-label="Illustration of Samuel coding at a laptop" className="h-auto w-full">
      <defs>
        <radialGradient id="glow" cx="50%" cy="60%" r="55%">
          <stop offset="0%" stopColor="#22D3EE" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#22D3EE" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="screen" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#0B2A3A" />
          <stop offset="100%" stopColor="#06121C" />
        </linearGradient>
      </defs>

      {/* glow behind the person */}
      <motion.circle cx="180" cy="170" r="130" fill="url(#glow)"
        animate={still ? undefined : { opacity: [0.6, 1, 0.6] }} transition={loop(4)} />

      {/* floating code symbols */}
      {[
        { x: 52, y: 70, t: "</>", c: "#22D3EE", d: 0 },
        { x: 290, y: 60, t: "{ }", c: "#4ADE80", d: 0.8 },
        { x: 300, y: 150, t: "AI", c: "#7DD3FC", d: 1.6 },
        { x: 40, y: 160, t: "RAG", c: "#4ADE80", d: 2.2 },
      ].map((s) => (
        <motion.text key={s.t} x={s.x} y={s.y} fill={s.c} fontFamily="ui-monospace, monospace" fontSize="18" fontWeight="700"
          animate={still ? undefined : { y: [s.y, s.y - 12, s.y], opacity: [0.4, 1, 0.4] }} transition={loop(3.6, s.d)}>
          {s.t}
        </motion.text>
      ))}

      {/* body */}
      <path d="M95 300 C100 230 135 205 180 205 C225 205 260 230 265 300 Z" fill="#1E2A44" />
      <path d="M150 205 L180 240 L210 205 Z" fill="#0F1629" />

      {/* head */}
      <motion.g animate={still ? undefined : { rotate: [0, 2, 0, -1.5, 0] }} transition={loop(6)} style={{ originX: "180px", originY: "190px" }}>
        <rect x="168" y="168" width="24" height="30" rx="8" fill="#C68B6B" />
        <ellipse cx="180" cy="138" rx="40" ry="44" fill="#D59A78" />
        {/* hair */}
        <path d="M138 132 C136 98 160 86 182 88 C206 88 226 102 222 134 C214 116 196 108 180 110 C164 112 148 118 138 132 Z" fill="#1A1A2E" />
        {/* beard */}
        <path d="M146 150 C150 182 168 190 180 190 C192 190 210 182 214 150 C206 166 194 172 180 172 C166 172 154 166 146 150 Z" fill="#2A1E1A" opacity="0.85" />
        {/* eyes, blinking */}
        {[164, 196].map((x) => (
          <motion.ellipse key={x} cx={x} cy="140" rx="4.5" ry="4.5" fill="#0A0E1A"
            animate={still ? undefined : { ry: [4.5, 4.5, 0.6, 4.5] }} transition={loop(4.2)} />
        ))}
        {/* glasses */}
        <rect x="152" y="130" width="24" height="18" rx="6" fill="none" stroke="#22D3EE" strokeWidth="2.5" />
        <rect x="184" y="130" width="24" height="18" rx="6" fill="none" stroke="#22D3EE" strokeWidth="2.5" />
        <line x1="176" y1="138" x2="184" y2="138" stroke="#22D3EE" strokeWidth="2.5" />
      </motion.g>

      {/* laptop */}
      <rect x="100" y="232" width="160" height="10" rx="4" fill="#94A3B8" />
      <path d="M118 232 L130 176 L230 176 L242 232 Z" fill="#1E2A44" stroke="#22D3EE" strokeWidth="1.5" />
      <motion.path d="M126 226 L136 182 L224 182 L234 226 Z" fill="url(#screen)"
        animate={still ? undefined : { opacity: [0.85, 1, 0.85] }} transition={loop(2.4)} />
      {/* code lines typing on the screen */}
      {[0, 1, 2, 3].map((i) => (
        <motion.rect key={i} x={142 + (i % 2) * 6} y={192 + i * 8} height="3.5" rx="1.5" fill={i % 2 ? "#4ADE80" : "#22D3EE"}
          initial={{ width: 0 }} animate={still ? { width: 52 - i * 6 } : { width: [0, 64 - i * 8, 64 - i * 8, 0] }}
          transition={loop(3.2, i * 0.35)} />
      ))}
      <circle cx="180" cy="204" r="0" fill="#22D3EE" />
    </svg>
  );
}
