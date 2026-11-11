"use client";

import { motion, useReducedMotion } from "framer-motion";
import AnimatedAvatar from "./AnimatedAvatar";

const LINES: [string, string][] = [
  ["NAME", "Samuel Roshan"],
  ["ROLE", "AI Engineer Intern @ Modofx"],
  ["WORK", "AI agent automation · Hyundai"],
  ["ALSO", "CRM & Tally automations"],
  ["STACK", "LLMs · RAG · Redis · AI Agents"],
  ["DEPLOY", "Coolify · CI/CD"],
  ["STATUS", "Open to AI roles"],
];

// The hero's right side: the animated avatar above a terminal card (as in the GitHub profile README).
export default function HeroTerminal() {
  const still = useReducedMotion();
  return (
    <div className="relative w-full max-w-lg">
      <div className="mx-auto w-[78%]">
        <AnimatedAvatar />
      </div>

      <div className="-mt-4 overflow-hidden rounded-2xl border border-[#1E2A44] bg-[#0F1629] shadow-[0_0_40px_rgba(34,211,238,.07)]">
        <div className="flex items-center gap-2 border-b border-[#1E2A44] px-4 py-3">
          <span className="h-3 w-3 rounded-full bg-[#FF5F57]" />
          <span className="h-3 w-3 rounded-full bg-[#FEBC2E]" />
          <span className="h-3 w-3 rounded-full bg-[#28C840]" />
          <span className="ml-3 font-mono text-xs text-[#94A3B8]">&gt; SYSTEM_INFO.exe</span>
        </div>

        <div className="px-5 py-4 font-mono text-[13px] leading-7">
          <p className="text-[#94A3B8]">┌──[samuel@ai-lab]─[~]</p>
          {LINES.map(([key, value], i) => (
            <motion.p
              key={key}
              initial={still ? false : { opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: still ? 0 : 0.6 + i * 0.15, duration: 0.3 }}
              className="whitespace-nowrap"
            >
              <span className="text-[#94A3B8]">├─ </span>
              <span className="inline-block w-16 text-[#4ADE80]">{key}</span>
              <span className="text-[#94A3B8]">: </span>
              <span className="text-[#E6F1FF]">{value}</span>
            </motion.p>
          ))}
          <p className="text-[#94A3B8]">
            └─ <span className="text-[#22D3EE]">ready</span>
            <motion.span
              aria-hidden="true"
              animate={still ? undefined : { opacity: [1, 0, 1] }}
              transition={{ repeat: Infinity, duration: 1 }}
              className="ml-1 inline-block h-4 w-2 translate-y-0.5 bg-[#22D3EE]"
            />
          </p>
        </div>
      </div>
    </div>
  );
}
