"use client";

import { motion } from "framer-motion";
import CountUp from "react-countup";
import {
  ArrowRight,
  Download,
  Sparkles,
} from "lucide-react";

export default function HeroContent() {
  return (
    <div className="max-w-2xl">

      {/* Badge */}

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: .6 }}
        className="inline-flex items-center gap-3 rounded-full border border-[#E7E1D8] bg-white px-5 py-2 shadow-sm"
      >
        <motion.span
          animate={{ rotate: [0, 15, 0, -15, 0], scale: [1, 1.15, 1] }}
          transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
        >
          <Sparkles
            size={15}
            className="text-[#9A7B53]"
          />
        </motion.span>

        <span className="text-sm font-medium text-[#66645F]">
          Available for Freelance & Full-Time AI Roles
        </span>

        <motion.span
          animate={{ opacity: [1, 0.3, 1] }}
          transition={{ repeat: Infinity, duration: 1.8 }}
          className="h-2 w-2 rounded-full bg-emerald-500"
        />

      </motion.div>

      {/* Heading */}

      <motion.h1
        initial={{ opacity: 0, y: 35 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: .1 }}
        className="mt-10 text-[38px] font-semibold leading-[1.05] tracking-[-0.05em] text-[#1D1D1B] sm:text-[52px] lg:text-[70px]"
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
        <p className="text-[18px] font-semibold text-[#1D1D1B]">
         I am Samuel Roshan
        </p>

        <p className="mt-2 text-[15px] text-[#66645F]">
          This is my  personal website!
        </p>
      </motion.div>

      {/* Description */}

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: .3 }}
        className="mt-10 max-w-xl text-[17px] leading-9 text-[#66645F]"
      >
        I design and develop AI-powered applications,
        intelligent automation systems, Retrieval-Augmented
        Generation pipelines, and modern LLM solutions for
        startups, businesses and real-world products.
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
          className="flex items-center gap-2 rounded-full bg-[#1D1D1B] px-7 py-4 text-white transition-all duration-300 hover:-translate-y-1"
        >
          View Projects
          <ArrowRight size={18} />
        </a>

        <a
          href="/resume/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 rounded-full border border-[#DDD6CC] bg-white px-7 py-4 text-[#1D1D1B] transition-all duration-300 hover:border-[#9A7B53]"
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
        className="mt-20 flex flex-wrap gap-12 border-t border-[#E6E1D9] pt-10"
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

          <p className="mt-2 text-sm text-[#66645F]">
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

          <p className="mt-2 text-sm text-[#66645F]">
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

          <p className="mt-2 text-sm text-[#66645F]">
            Industry
            <br />
            Internship
          </p>

        </motion.div>

      </motion.div>

    </div>
  );
}