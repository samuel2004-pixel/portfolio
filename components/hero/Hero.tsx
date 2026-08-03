"use client";

import HeroContent from "./HeroContent";
import HeroBackground from "../background/HeroBackground";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import {
  Bot,
  BriefcaseBusiness,
  BrainCircuit,
  Workflow,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";

const SectionAccent = dynamic(() => import("../three/SectionAccent"), {
  ssr: false,
});

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[#F7F5F2] pt-32"
    >
      <HeroBackground />

      <div className="relative z-10 mx-auto max-w-7xl px-8 lg:px-20">

        <div className="grid min-h-screen items-center gap-28 lg:grid-cols-[50%_50%]">

          {/* LEFT */}

          <HeroContent />

          {/* RIGHT */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: .8 }}
            className="hidden justify-end lg:flex"
          >
            <div className="relative w-full max-w-lg">

              {/* 3D sculpture — genuine 3D drifting behind the card, same gold/cream language as the loading screen */}

              <div className="pointer-events-none absolute -top-24 -right-16 hidden h-[340px] w-[340px] lg:block">
                <SectionAccent variant="light" />
              </div>

              {/* floating card */}

              <motion.div
                animate={{
                  y: [-8, 8, -8],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 6,
                  ease: "easeInOut",
                }}
                className="rounded-[34px] border border-[#E5DED3] bg-white p-8 shadow-[0_20px_60px_rgba(0,0,0,.05)]"
              >
                <div className="flex items-center justify-between">

                  <div>

                    <p className="text-xs uppercase tracking-[.28em] text-[#9A7B53]">
                      Freelance
                    </p>

                    <h3 className="mt-3 text-3xl font-semibold text-[#1D1D1B]">
                      AI devolopments
                    </h3>

                  </div>

                  <Sparkles
                    className="text-[#9A7B53]"
                    size={24}
                  />

                </div>

                <div className="mt-10 space-y-5">

                  <div className="flex items-center gap-4 rounded-2xl bg-[#F7F5F2] p-4">

                    <BrainCircuit className="text-[#9A7B53]" />

                    <div>

                      <p className="font-medium">
                        LLM Applications
                      </p>

                      <p className="text-sm text-[#66645F]">
                        AI powered products
                      </p>

                    </div>

                  </div>

                  <div className="flex items-center gap-4 rounded-2xl bg-[#F7F5F2] p-4">

                    <Workflow className="text-[#9A7B53]" />

                    <div>

                      <p className="font-medium">
                        AI Automation
                      </p>

                      <p className="text-sm text-[#66645F]">
                        n8n & workflow systems
                      </p>

                    </div>

                  </div>

                  <div className="flex items-center gap-4 rounded-2xl bg-[#F7F5F2] p-4">

                    <Bot className="text-[#9A7B53]" />

                    <div>

                      <p className="font-medium">
                        AI Agents
                      </p>

                      <p className="text-sm text-[#66645F]">
                        LangChain & RAG
                      </p>

                    </div>

                  </div>

                </div>

                <div className="mt-10 rounded-2xl border border-[#ECE6DB] p-5">

                  <div className="flex items-center justify-between">

                    <div>

                      <p className="text-xs uppercase tracking-[.2em] text-[#9A7B53]">
                        Recent Work
                      </p>

                      <h4 className="mt-3 font-semibold">
                        Freelance Projects
                      </h4>

                    </div>

                    <BriefcaseBusiness
                      className="text-[#9A7B53]"
                    />

                  </div>

                  <div className="mt-6 space-y-3">

                    
                  href="https://albo-fitness.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex justify-between transition-colors hover:text-[#9A7B53]"
                    >
                      <span>Albofitness</span>
                      <ArrowUpRight size={18} />
                    </a>
                  
                     href="https://albo-fitness.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                       className="flex justify-between transition-colors hover:text-[#9A7B53]">
                      <span>Albofitness</span>
                      <ArrowUpRight size={18} />
                    </a>

           
                    <div className="flex justify-between">
                      <span>n8n Automation</span>
                      <ArrowUpRight size={18} />
                    </div>

                  </div>

                </div>

              </motion.div>

              {/* floating cube */}

              <motion.div
                animate={{
                  y: [10, -10, 10],
                  rotate: [0, 4, 0],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 7,
                }}
                className="absolute -right-6 top-14 h-24 w-24 rounded-[28px] border border-[#E6DED2] bg-white shadow-xl"
              />

              {/* floating cube */}

              <motion.div
                animate={{
                  y: [-10, 10, -10],
                  rotate: [0, -5, 0],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 8,
                }}
                className="absolute -left-8 bottom-16 h-20 w-20 rounded-[22px] border border-[#E6DED2] bg-[#EFE8DD]"
              />

            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}