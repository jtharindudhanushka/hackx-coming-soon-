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
    <section className="relative w-full py-24 md:py-32 px-4 md:px-8 bg-[#010E13]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="font-display text-3xl md:text-5xl text-white mb-4 tracking-wider">
            Ready to Step Up?
          </h2>
          <p className="font-body text-gray-400 max-w-2xl">
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
              className="p-8 rounded-xl bg-white/[0.02] border border-white/[0.08] flex flex-col hover:bg-white/[0.04] transition-colors"
            >
              <div className="font-mono text-sm text-gray-500 mb-6">
                {item.num}
              </div>
              <h3 className="font-body text-lg text-white mb-3">
                {item.title}
              </h3>
              <p className="font-body text-sm text-gray-400 leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
