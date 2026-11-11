"use client";

import { motion } from "framer-motion";
import {
  BrainCircuit,
  Bot,
  Workflow,
  Cpu,
  Database,
} from "lucide-react";

const icons = [
  {
    Icon: BrainCircuit,
    top: "8%",
    left: "72%",
    delay: 0,
    size: 28,
  },
  {
    Icon: Workflow,
    top: "34%",
    left: "88%",
    delay: 1,
    size: 30,
  },
  {
    Icon: Bot,
    top: "70%",
    left: "82%",
    delay: 2,
    size: 30,
  },
  {
    Icon: Cpu,
    top: "58%",
    left: "66%",
    delay: 1.5,
    size: 26,
  },
  {
    Icon: Database,
    top: "20%",
    left: "58%",
    delay: .8,
    size: 28,
  },
];

export default function HeroBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">

      {/* Grid */}

      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `
            linear-gradient(to right,#000 1px,transparent 1px),
            linear-gradient(to bottom,#000 1px,transparent 1px)
          `,
          backgroundSize: "90px 90px",
        }}
      />

      {/* Left Glow */}

      <motion.div
        animate={{
          x: [-30, 30, -30],
          y: [-20, 20, -20],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -left-52 top-0 h-[700px] w-[700px] rounded-full bg-[#132036] blur-[170px]"
      />

      {/* Right Glow */}

      <motion.div
        animate={{
          x: [30, -30, 30],
          y: [20, -20, 20],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -right-48 bottom-0 h-[680px] w-[680px] rounded-full bg-[#0A0E1A] blur-[170px]"
      />

      {/* Floating AI Cards */}

      {icons.map(({ Icon, top, left, delay, size }, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0.35, 1, 0.35],
            y: [-10, 10, -10],
            rotate: [-4, 4, -4],
          }}
          transition={{
            repeat: Infinity,
            duration: 8,
            delay,
          }}
          className="absolute rounded-2xl border border-[#1E2A44] bg-[#0F1629]/90 p-5 shadow-[0_10px_30px_rgba(0,0,0,.05)]"
          style={{
            top,
            left,
          }}
        >
          <Icon
            size={size}
            className="text-[#22D3EE]"
          />
        </motion.div>
      ))}

      {/* Connecting Lines */}

      <svg
        className="absolute inset-0 h-full w-full opacity-[0.12]"
        viewBox="0 0 1600 900"
      >
        <motion.path
          d="M920 180 C1050 220 1080 340 1180 360"
          stroke="#7DD3FC"
          strokeWidth="2"
          fill="transparent"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />

        <motion.path
          d="M1080 360 C1120 480 1040 620 1180 650"
          stroke="#7DD3FC"
          strokeWidth="2"
          fill="transparent"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            duration: 4,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      </svg>

      {/* Noise */}

      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage:
            "radial-gradient(circle,#000 1px,transparent 1px)",
          backgroundSize: "14px 14px",
        }}
      />

      {/* Fade */}

      <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-[#0A0E1A] to-transparent" />
    </div>
  );
}