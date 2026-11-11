"use client";

import { motion, useReducedMotion } from "framer-motion";
import CountUp from "react-countup";
import {
  ArrowRight,
  Download,
  Sparkles,
} from "lucide-react";

function TypedLine({ text }: { text: string }) {
  const still = useReducedMotion();
  return (
    <p className="mt-8 font-mono text-[15px] text-[#22D3EE]" aria-label={text}>
      {text.split("").map((ch, i) => (
        <motion.span
          key={i}
          aria-hidden="true"
          initial={still ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: still ? 0 : 0.3 + i * 0.035 }}
        >
          {ch}
        </motion.span>
      ))}
    </p>
  );
}

export default function HeroContent() {
  return (
    <div className="max-w-2xl">

      {/* Badge */}

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: .6 }}
        className="inline-flex items-center gap-3 rounded-full border border-[#1E2A44] bg-[#0F1629] px-5 py-2 shadow-sm"
      >
        <motion.span
          animate={{ rotate: [0, 15, 0, -15, 0], scale: [1, 1.15, 1] }}
          transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
        >
          <Sparkles
            size={15}
            className="text-[#22D3EE]"
          />
        </motion.span>

        <span className="text-sm font-medium text-[#94A3B8]">
          AI Engineer Intern @ Modofx · Open to AI roles
        </span>

        <motion.span
          animate={{ opacity: [1, 0.3, 1] }}
          transition={{ repeat: Infinity, duration: 1.8 }}
          className="h-2 w-2 rounded-full bg-emerald-500"
        />

      </motion.div>

      {/* Terminal line, typed out */}

      <TypedLine text="> Initializing Samuel.exe ... [OK]" />

      {/* Heading */}

      <motion.h1
        initial={{ opacity: 0, y: 35 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: .1 }}
        className="mt-10 text-[38px] font-semibold leading-[1.05] tracking-[-0.05em] text-[#E6F1FF] sm:text-[52px] lg:text-[70px]"
      >
        Building
        <br />
        Intelligent
        <br />
        AI Products.
      </motion.h1>

      {/* Name */}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: .2 }}
        className="mt-8"
      >
        <p className="text-[18px] font-semibold text-[#E6F1FF]">
         I am Samuel Roshan
        </p>

        <p className="mt-2 text-[15px] text-[#94A3B8]">
          AI Engineer · AI Agents · LLMs · RAG
        </p>
      </motion.div>

      {/* Description */}

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: .3 }}
        className="mt-10 max-w-xl text-[17px] leading-9 text-[#94A3B8]"
      >
        I build AI agents and automation: AI agent automation
        for Hyundai at Modofx, CRM and Tally automations, and
        LLM and RAG applications for real businesses.
      </motion.p>

      {/* Buttons */}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: .4 }}
        className="mt-12 flex flex-wrap gap-4"
      >
        <a
          href="#projects"
          className="flex items-center gap-2 rounded-full bg-[#22D3EE] px-7 py-4 text-[#0A0E1A] transition-all duration-300 hover:-translate-y-1"
        >
          View Projects
          <ArrowRight size={18} />
        </a>

        <a
          href="/resume/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 rounded-full border border-[#1E2A44] bg-[#0F1629] px-7 py-4 text-[#E6F1FF] transition-all duration-300 hover:border-[#22D3EE]"
        >
          Resume
          <Download size={18} />
        </a>
      </motion.div>

      {/* Bottom */}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: .55 }}
        className="mt-20 flex flex-wrap gap-12 border-t border-[#1E2A44] pt-10"
      >
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          whileHover={{ y: -3 }}
        >

          <h3 className="text-3xl font-semibold">
            <CountUp end={5} duration={2} suffix="+" enableScrollSpy scrollSpyOnce />
          </h3>

          <p className="mt-2 text-sm text-[#94A3B8]">
            Personal AI
            <br />
            Projects
          </p>

        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.68 }}
          whileHover={{ y: -3 }}
        >

          <h3 className="text-3xl font-semibold">
            <CountUp end={3} duration={2} suffix="+" enableScrollSpy scrollSpyOnce />
          </h3>

          <p className="mt-2 text-sm text-[#94A3B8]">
            Freelance
            <br />
            Projects
          </p>

        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.76 }}
          whileHover={{ y: -3 }}
        >

          <h3 className="text-3xl font-semibold">
            <CountUp end={1} duration={1.5} enableScrollSpy scrollSpyOnce />
          </h3>

          <p className="mt-2 text-sm text-[#94A3B8]">
            Industry
            <br />
            Internship
          </p>

        </motion.div>

      </motion.div>

    </div>
  );
}