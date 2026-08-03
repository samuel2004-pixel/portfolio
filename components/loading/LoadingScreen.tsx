"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { Sparkles, BrainCircuit } from "lucide-react";

const NeuralNetworkLoader = dynamic(
  () => import("../three/NeuralNetworkLoader"),
  { ssr: false }
);

const BOOT_LOG = [
  "Initializing neural core...",
  "Loading transformer weights...",
  "Compiling attention layers...",
  "Calibrating embeddings...",
  "Connecting synapses...",
  "AI Product Studio ready.",
];

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [logIndex, setLogIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) return 100;
        return Math.min(100, prev + Math.random() * 13);
      });
    }, 120);

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    const step = Math.min(
      BOOT_LOG.length - 1,
      Math.floor((progress / 100) * BOOT_LOG.length)
    );
    setLogIndex(step);
  }, [progress]);

  return (
    <AnimatePresence mode="wait">
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: 1.05,
          }}
          transition={{
            duration: 0.8,
          }}
          className="fixed inset-0 z-[999999] overflow-hidden bg-[#1D1D1B]"
        >
          {/* Aurora — warm gold glows, same palette as the Hero card & Footer */}

          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 20, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 8,
            }}
            className="absolute left-[-250px] top-[-250px] h-[700px] w-[700px] rounded-full bg-[#9A7B53]/20 blur-[170px]"
          />

          <motion.div
            animate={{
              scale: [1.2, 1, 1.2],
              rotate: [0, -20, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 9,
            }}
            className="absolute bottom-[-250px] right-[-250px] h-[700px] w-[700px] rounded-full bg-[#C5AE89]/20 blur-[170px]"
          />

          {/* Grid */}

          <div
            className="absolute inset-0 opacity-[0.05]"
            style={{
              backgroundImage: `
              linear-gradient(to right,#fff 1px,transparent 1px),
              linear-gradient(to bottom,#fff 1px,transparent 1px)
            `,
              backgroundSize: "60px 60px",
            }}
          />

          {/* Scanning horizontal line — sweeps top to bottom like a system scan */}

          <motion.div
            animate={{ top: ["-5%", "105%"] }}
            transition={{
              repeat: Infinity,
              duration: 3.2,
              ease: "linear",
            }}
            className="pointer-events-none absolute left-0 h-px w-full bg-gradient-to-r from-transparent via-[#C5AE89]/60 to-transparent"
          />

          {/* Floating particles */}

          {Array.from({ length: 18 }).map((_, i) => {
            const left = (i * 53) % 100;
            const delay = (i % 6) * 0.6;
            const duration = 6 + (i % 5) * 1.4;
            const size = i % 3 === 0 ? 3 : 2;

            return (
              <motion.span
                key={i}
                initial={{ y: "110vh", opacity: 0 }}
                animate={{ y: "-10vh", opacity: [0, 1, 1, 0] }}
                transition={{
                  repeat: Infinity,
                  duration,
                  delay,
                  ease: "linear",
                }}
                style={{
                  left: `${left}%`,
                  width: size,
                  height: size,
                }}
                className="absolute rounded-full bg-[#C5AE89]/70"
              />
            );
          })}

          {/* Corner HUD brackets — frames the scene like a targeting / boot HUD */}

          {[
            "left-8 top-8 border-l border-t",
            "right-8 top-8 border-r border-t",
            "left-8 bottom-8 border-l border-b",
            "right-8 bottom-8 border-r border-b",
          ].map((pos, i) => (
            <motion.div
              key={pos}
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              transition={{ delay: 0.3 + i * 0.1, duration: 0.6 }}
              className={`absolute hidden h-10 w-10 border-[#C5AE89]/40 sm:block ${pos}`}
            />
          ))}

          {/* Top-left system tag */}

          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="absolute left-8 top-8 hidden items-center gap-2 font-mono text-[11px] uppercase tracking-[.2em] text-[#C5AE89]/70 sm:flex"
          >
            <BrainCircuit size={14} />
            neural.init
          </motion.div>

          {/* Top-right progress readout */}

          <motion.div
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="absolute right-8 top-8 hidden font-mono text-[11px] uppercase tracking-[.2em] text-[#C5AE89]/70 sm:block"
          >
            sys.boot // {Math.round(progress)}%
          </motion.div>

          {/* Center */}

          <div className="relative flex h-full flex-col items-center justify-center px-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative w-full"
            >
              {/* Pulsing glow ring behind the network */}

              <motion.div
                animate={{
                  scale: [1, 1.15, 1],
                  opacity: [0.35, 0.6, 0.35],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 3,
                  ease: "easeInOut",
                }}
                className="absolute left-1/2 top-1/2 h-[280px] w-[280px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#9A7B53]/20 blur-[80px] sm:h-[360px] sm:w-[360px]"
              />

              {/* Rotating dashed ring */}

              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  repeat: Infinity,
                  ease: "linear",
                  duration: 22,
                }}
                className="absolute left-1/2 top-1/2 h-[260px] w-[260px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-[#C5AE89]/25 sm:h-[340px] sm:w-[340px]"
              />

              <NeuralNetworkLoader />

              {/* Layer labels beneath the network */}

              <div className="mx-auto -mt-6 flex w-full max-w-[560px] items-center justify-between px-4 font-mono text-[9px] uppercase tracking-[.25em] text-[#9A7B53]/70 sm:text-[10px]">
                <span>Input</span>
                <span>Hidden</span>
                <span>Hidden</span>
                <span>Output</span>
              </div>
            </motion.div>

            {/* Brand line — ties directly into the Hero's "AI Product Studio" card */}

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="mt-4 flex items-center gap-2 text-[#C5AE89]"
            >
              <Sparkles size={16} />
              <p className="text-xs uppercase tracking-[.35em]">
                samuel personal Resume
              </p>
            </motion.div>

            {/* Boot log line — cycles through status text as progress climbs */}

            <div className="mt-4 h-5">
              <AnimatePresence mode="wait">
                <motion.p
                  key={logIndex}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.3 }}
                  className="font-mono text-[12px] text-neutral-400"
                >
                  {BOOT_LOG[logIndex]}
                </motion.p>
              </AnimatePresence>
            </div>

            {/* Progress */}

            <div className="mt-6 flex w-72 items-center gap-4">
              <div className="h-1 flex-1 overflow-hidden rounded-full bg-white/10">
                <motion.div
                  animate={{
                    width: `${progress}%`,
                  }}
                  transition={{
                    ease: "easeOut",
                  }}
                  className="h-full rounded-full bg-gradient-to-r from-[#9A7B53] via-[#C5AE89] to-[#EFE7DB]"
                />
              </div>

              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="w-11 shrink-0 text-right font-mono text-sm tabular-nums text-neutral-400"
              >
                {Math.round(progress)}%
              </motion.span>
            </div>

            {/* Pulsing dots */}

            <div className="mt-6 flex gap-2">
              {[0, 1, 2].map((i) => (
                <motion.span
                  key={i}
                  animate={{
                    scale: [1, 1.6, 1],
                    opacity: [0.4, 1, 0.4],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 1.2,
                    delay: i * 0.2,
                  }}
                  className="h-1.5 w-1.5 rounded-full bg-[#C5AE89]"
                />
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
