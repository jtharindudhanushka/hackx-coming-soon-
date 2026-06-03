"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Compass, Users, TrendingUp, Play, X } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export function AboutSection() {
  const { strings } = useLanguage();
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  if (!strings) return null;

  const rewards = [
    {
      title: strings.guidanceTitle,
      desc: strings.guidanceDesc,
      icon: Compass,
    },
    {
      title: strings.mentorshipTitle,
      desc: strings.mentorshipDesc,
      icon: Users,
    },
    {
      title: strings.fundingTitle,
      desc: strings.fundingDesc,
      icon: TrendingUp,
    },
  ];

  return (
    <section className="relative w-full py-24 md:py-32 px-4 md:px-8 bg-[#010E13]">
      <div className="max-w-6xl mx-auto flex flex-col gap-12 lg:gap-16">

        {/* Top Part: Text & Video */}
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center lg:items-stretch">

          {/* Left Side: Content */}
          <div className="flex-1 flex flex-col gap-12 justify-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left"
            >
              <h2 className="font-display text-3xl md:text-5xl text-white mb-6 tracking-wider">
                {strings.aboutTitle}
              </h2>
              <p className="font-body text-lg text-gray-400 leading-relaxed">
                {strings.aboutDesc}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="border-t-2 lg:border-t-0 lg:border-l-2 border-bioluminance pt-4 lg:pt-0 lg:pl-8 py-2 text-center lg:text-left"
            >
              <h3 className="font-display text-2xl md:text-3xl text-gray-200 italic tracking-wide">
                {strings.aboutQuote}
              </h3>
            </motion.div>
          </div>

          {/* Right Side: Video */}
          <div className="flex-1 w-full flex flex-col justify-center mt-8 lg:mt-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-full relative aspect-video rounded-2xl overflow-hidden border border-white/10 group cursor-pointer shadow-xl flex-grow"
              onClick={() => setIsVideoOpen(true)}
            >
              <iframe
                src="https://www.youtube.com/embed/Pj1A2AWeB28?autoplay=1&mute=1&controls=0&loop=1&playlist=Pj1A2AWeB28"
                className="w-full h-full object-cover pointer-events-none"
                allow="autoplay; encrypted-media"
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors duration-500 flex items-center justify-center">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-bioluminance flex items-center justify-center text-[#010E13] scale-90 group-hover:scale-105 transition-transform duration-500 shadow-[0_0_40px_rgba(114,229,248,0.4)]">
                  <Play className="w-8 h-8 md:w-10 md:h-10 ml-1 md:ml-2 fill-current" />
                </div>
              </div>
            </motion.div>
          </div>

        </div>

        {/* Bottom Part: Unified Card (Endless Freedom + 3 Icons) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full bg-white/[0.02] border border-white/[0.08] rounded-2xl flex flex-col lg:flex-row overflow-hidden shadow-xl"
        >
          {/* Left portion: Endless Freedom */}
          <div className="flex-1 p-8 md:p-10 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-dotted border-white/20 text-center lg:text-left">
            <h4 className="font-mono text-bioluminance tracking-widest text-sm uppercase mb-4">
              {strings.freedomTitle}
            </h4>
            <p className="font-body text-base text-gray-400 leading-relaxed">
              {strings.freedomDesc}
            </p>
          </div>

          {/* Right portion: 3 Icons */}
          <div className="flex-[1.5] flex flex-col md:flex-row relative">
            {rewards.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="flex flex-1 relative group cursor-default">
                  {/* Vertical separator for desktop */}
                  {idx > 0 && (
                    <div className="hidden md:block absolute left-0 top-6 bottom-6 w-px border-l-2 border-dotted border-white/20" />
                  )}
                  {/* Horizontal separator for mobile */}
                  {idx > 0 && (
                    <div className="block md:hidden absolute top-0 left-6 right-6 h-px border-t-2 border-dotted border-white/20" />
                  )}

                  <div className="w-full p-5 md:p-6 flex flex-col items-center justify-center text-center gap-3 transition-colors duration-500 hover:bg-white/[0.04]">
                    <div className="relative z-10 flex flex-col items-center gap-3">
                      <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.05] group-hover:scale-110 transition-transform duration-500 ease-out shrink-0">
                        <Icon className="w-5 h-5 md:w-6 md:h-6 text-gray-500 transition-colors duration-500 group-hover:text-white" />
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <h3 className="font-body font-medium text-sm md:text-base text-white leading-tight">
                          {item.title}
                        </h3>
                        <p className="font-body text-xs text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-500">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>

      </div>

      {/* Video Modal */}
      <AnimatePresence>
        {isVideoOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-[#010E13]/90 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="relative w-full max-w-5xl aspect-video bg-black rounded-2xl overflow-hidden shadow-[0_0_60px_rgba(0,0,0,0.5)] border border-white/10"
            >
              <button
                onClick={() => setIsVideoOpen(false)}
                className="absolute top-4 right-4 z-10 p-2.5 bg-black/60 hover:bg-black/90 hover:scale-110 rounded-full text-white transition-all backdrop-blur-md"
              >
                <X className="w-6 h-6" />
              </button>
              <iframe
                src="https://www.youtube.com/embed/Pj1A2AWeB28?autoplay=1"
                className="w-full h-full border-0"
                allow="autoplay; fullscreen; encrypted-media"
                allowFullScreen
              />
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
