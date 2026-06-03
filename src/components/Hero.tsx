"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export function Hero() {
  const { strings } = useLanguage();

  if (!strings) return null;

  return (
    <section className="relative w-full min-h-screen flex flex-col justify-center overflow-hidden py-24">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/Hero_Loop.mp4" type="video/mp4" />
        </video>
        {/* Dark Gradient Overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#010E13]/80 via-[#010E13]/60 to-[#010E13] z-10" />
      </div>

      {/* Content */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-4 md:px-8 text-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex flex-col items-center"
        >
          {/* Logo instead of Text */}
          <div className="relative w-40 h-16 md:w-56 md:h-24 mb-6">
            <Image
              src="/hackxlogo.webp"
              alt="hackX Jr. 9.0"
              fill
              className="object-contain drop-shadow-[0_0_15px_rgba(114,229,248,0.3)]"
              priority
            />
          </div>

          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl xl:text-9xl text-white tracking-widest drop-shadow-2xl mb-6">
            {strings.heroTitle}
          </h1>
          <p className="font-body font-light text-base md:text-xl lg:text-2xl text-gray-300 max-w-3xl leading-relaxed mb-2">
            {strings.heroSubtitle1}<br></br> {strings.heroSubtitle2}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="flex flex-col items-center gap-0 mt-2"
        >
          <div className="relative h-32 w-[400px] md:h-40 md:w-[600px]">
            <Image
              src="/organizerslogo.webp"
              alt="Organizers: IMSSA, Ministry of Science and Technology, NSF"
              fill
              className="object-contain"
            />
          </div>
          <p className="font-body text-xs md:text-sm text-gray-400 max-w-2xl -mt-6 md:-mt-8 opacity-80 leading-relaxed px-4">
            {strings.organizersText}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
