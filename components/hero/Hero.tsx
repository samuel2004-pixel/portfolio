"use client";

import HeroContent from "./HeroContent";
import HeroBackground from "../background/HeroBackground";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import HeroTerminal from "./HeroTerminal";

const SectionAccent = dynamic(() => import("../three/SectionAccent"), {
  ssr: false,
});

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[#0A0E1A] pt-32"
    >
      <HeroBackground />

      <div className="relative z-10 mx-auto max-w-7xl px-8 lg:px-20">

        <div className="grid min-h-screen items-center gap-16 pb-16 lg:grid-cols-[50%_50%] lg:gap-28 lg:pb-0">

          {/* LEFT */}

          <HeroContent />

          {/* RIGHT */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: .8 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-lg">
              {/* 3D sculpture drifting behind the terminal */}
              <div className="pointer-events-none absolute -top-24 -right-16 hidden h-[340px] w-[340px] lg:block">
                <SectionAccent variant="light" />
              </div>
              <HeroTerminal />
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}