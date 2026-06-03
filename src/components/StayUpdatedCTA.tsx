"use client";

import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { LeadForm } from "./LeadForm";

export function StayUpdatedCTA() {
  const { strings } = useLanguage();

  if (!strings) return null;

  return (
    <section className="w-full py-24 md:py-32 px-4 md:px-8 bg-[#010E13] flex justify-center border-t border-white/5">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-6xl bg-white/[0.02] border border-white/10 rounded-2xl p-6 md:p-12"
      >
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="flex-1 text-center lg:text-left">
            <h2 className="font-display text-4xl md:text-5xl text-white mb-6 tracking-wider">
              {strings.cardTitle}
            </h2>
            <p className="font-body text-lg text-gray-400 leading-relaxed max-w-md mx-auto lg:mx-0">
              {strings.cardBody}
            </p>
          </div>
          <div className="w-full lg:w-[450px]">
            <LeadForm />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
