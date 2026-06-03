"use client";

import React from "react";
import { motion } from "framer-motion";

import { useLanguage } from "@/context/LanguageContext";

export function EligibilitySection() {
  const { strings } = useLanguage();

  if (!strings) return null;

  const criteria = [
    { num: "01", title: strings.gradeLevelTitle, desc: strings.gradeLevelDesc },
    { num: "02", title: strings.squadSizeTitle, desc: strings.squadSizeDesc },
    { num: "03", title: strings.schoolRepTitle, desc: strings.schoolRepDesc },
    { num: "04", title: strings.beginnersTitle, desc: strings.beginnersDesc },
  ];

  return (
    <section className="relative w-full py-24 md:py-32 px-4 md:px-8 bg-[#010E13] overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-[400px] bg-bioluminance/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center flex flex-col items-center"
        >
          <h2 className="font-display text-3xl md:text-5xl text-white mb-4 tracking-wider uppercase drop-shadow-[0_0_15px_rgba(114,229,248,0.1)]">
            Ready to Step Up?
          </h2>
          <p className="font-body text-gray-400 max-w-2xl text-center">
            Review our eligibility criteria below before registrations open.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {criteria.map((item, index) => (
            <motion.div
              key={item.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative p-8 rounded-2xl bg-gradient-to-b from-white/[0.03] to-transparent border border-white/[0.05] flex flex-col hover:border-bioluminance/40 transition-all duration-300 hover:shadow-[0_0_30px_rgba(114,229,248,0.1)] backdrop-blur-sm overflow-hidden"
            >
              {/* Subtle inner hover glow */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-bioluminance/[0.05] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              
              {/* Top accent line on hover */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-bioluminance to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="font-mono text-3xl font-bold text-gray-600 group-hover:text-bioluminance transition-colors duration-300 mb-6">
                  {item.num}
                </div>
                <h3 className="font-body text-lg text-white mb-3 font-semibold group-hover:text-white transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="font-body text-sm text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
