"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Download } from "lucide-react";

export default function HeroButtons() {
  return (
    <div className="flex flex-wrap items-center gap-5">

      {/* View Work */}

      <motion.a
        href="#projects"
        whileHover={{ y: -3 }}
        whileTap={{ scale: 0.98 }}
        className="group flex items-center gap-3 rounded-full border border-[#1E2A44] bg-[#0A0E1A] px-8 py-4 text-[15px] font-medium text-[#E6F1FF] transition-all duration-300 hover:border-[#7DD3FC] hover:bg-[#0A0E1A]"
      >
        <span>View Projects</span>

        <ArrowUpRight
          size={18}
          className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
        />
      </motion.a>

      {/* Resume */}

      <motion.a
        href="/resume/resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ y: -3 }}
        whileTap={{ scale: 0.98 }}
        className="group flex items-center gap-3 rounded-full border border-[#1E2A44] px-8 py-4 text-[15px] font-medium text-[#94A3B8] transition-all duration-300 hover:border-[#7DD3FC] hover:bg-[#0F1629]"
      >
        <Download
          size={18}
          className="transition-transform duration-300 group-hover:-translate-y-1"
        />

        <span>Resume</span>
      </motion.a>

    </div>
  );
}