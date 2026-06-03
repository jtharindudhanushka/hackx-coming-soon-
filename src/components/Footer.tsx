"use client";

import React from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

export function Footer() {
  const { strings } = useLanguage();

  if (!strings) return null;

  return (
    <footer className="w-full bg-[#010E13] border-t border-white/5 py-16 px-4 md:px-8 relative z-10">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row justify-between items-center lg:items-start gap-12 lg:gap-16">

        {/* Left Side: Organizers */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left flex-1">
          <div className="relative w-[380px] h-28 md:w-[480px] md:h-36 mb-2">
            <Image
              src="/organizerslogo.webp"
              alt="Organizers: IMSSA, Ministry of Science and Technology, NSF"
              fill
              className="object-contain object-center lg:object-left"
            />
          </div>
          <p className="font-body text-sm text-gray-400 leading-relaxed mb-6 max-w-lg -mt-6 relative z-10">
            {strings.organizersText}
          </p>
          <p className="font-mono text-xs text-gray-500">
            © 2026 hackX Jr. All rights reserved.
          </p>
        </div>

        {/* Right Side: Connect */}
        <div className="flex flex-col items-center lg:items-end text-center lg:text-right flex-1 pt-4">
          <h3 className="font-display text-xl text-white tracking-wider mb-6">
            Get in Touch
          </h3>

          <div className="flex flex-wrap justify-center lg:justify-end gap-3 mb-8 max-w-md">
            <a href="tel:+94772086681" className="px-5 py-2.5 rounded-full bg-white/[0.02] border border-lagoon/30 hover:border-lagoon hover:bg-[#052E3F] transition-all flex items-center gap-2 group">
              <span className="text-gray-400 font-body text-xs group-hover:text-gray-200">Harshana</span>
              <span className="text-white font-mono text-sm">+94 77 208 6681</span>
            </a>
            <a href="tel:+94715435636" className="px-5 py-2.5 rounded-full bg-white/[0.02] border border-lagoon/30 hover:border-lagoon hover:bg-[#052E3F] transition-all flex items-center gap-2 group">
              <span className="text-gray-400 font-body text-xs group-hover:text-gray-200">Lawindi</span>
              <span className="text-white font-mono text-sm">+94 71 543 5636</span>
            </a>
            <a href="tel:+94724170019" className="px-5 py-2.5 rounded-full bg-white/[0.02] border border-lagoon/30 hover:border-lagoon hover:bg-[#052E3F] transition-all flex items-center gap-2 group">
              <span className="text-gray-400 font-body text-xs group-hover:text-gray-200">Thuvarakan</span>
              <span className="text-white font-mono text-sm">+94 72 417 0019</span>
            </a>
          </div>

          <div className="flex gap-4">
            <a
              href="https://www.facebook.com/share/1Eq5BVbYQQ/?mibextid=wwXIfr"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/[0.02] border border-white/10 hover:bg-[#052E3F] hover:border-lagoon transition-all text-gray-400 hover:text-white group"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:scale-110 transition-transform"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
            </a>
            <a
              href="https://www.instagram.com/imssa.uok?igsh=MThpanZ5MnB6eXhpdA=="
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/[0.02] border border-white/10 hover:bg-[#052E3F] hover:border-lagoon transition-all text-gray-400 hover:text-white group"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:scale-110 transition-transform"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
            </a>
            <a
              href="https://www.linkedin.com/company/imssauok/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/[0.02] border border-white/10 hover:bg-[#052E3F] hover:border-lagoon transition-all text-gray-400 hover:text-white group"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:scale-110 transition-transform"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
            </a>
            <a
              href="https://www.youtube.com/@hackX_UoK"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/[0.02] border border-white/10 hover:bg-[#052E3F] hover:border-lagoon transition-all text-gray-400 hover:text-white group"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:scale-110 transition-transform"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" /><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" /></svg>
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
