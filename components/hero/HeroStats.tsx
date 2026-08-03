"use client";

import { motion } from "framer-motion";

const stats = [
  {
    value: "15+",
    label: "Projects",
  },
  {
    value: "01",
    label: "Internship",
  },
  {
    value: "15+",
    label: "Technologies",
  },
  {
    value: "2026",
    label: "Graduate",
  },
];

export default function HeroStats() {
  return (
    <div className="grid grid-cols-2 gap-5 lg:grid-cols-4">

      {stats.map((item, index) => (
        <motion.div
          key={item.label}
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.9 + index * 0.1,
          }}
          whileHover={{
            y: -6,
          }}
          className="group rounded-3xl border border-[#DDD8D2] bg-[#FCFBF8] p-5 transition-all duration-300 hover:border-[#C8B79E] hover:shadow-[0_15px_40px_rgba(0,0,0,0.05)]"
        >
          <h3 className="text-3xl font-bold tracking-tight text-[#181818]">
            {item.value}
          </h3>

          <div className="mt-3 h-px w-10 bg-[#D8D2C8] transition-all duration-300 group-hover:w-16" />

          <p className="2 text-sm uppercase tracking-[0.25em] text-[#777777]">
            {item.label}
          </p>
        </motion.div>
      ))}

    </div>
  );
}