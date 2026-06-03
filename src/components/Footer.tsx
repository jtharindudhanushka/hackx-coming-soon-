"use client";

import React from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

export function Footer() {
  const { strings } = useLanguage();

  if (!strings) return null;

  return (
    <footer className="w-full bg-[#010E13] relative z-10 flex flex-col">
      <div className="w-full border-t border-white/5 py-8 px-4 md:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-8 items-center lg:items-stretch">

          {/* Left Side: Organizers */}
          <div className="flex flex-col items-center lg:items-start justify-end text-center lg:text-left w-full h-full">
            <p className="font-body text-sm md:text-[15px] text-gray-300 leading-relaxed mb-2 font-light tracking-wide max-w-md">
              {strings.organizersText}
            </p>
            <div className="relative w-[320px] h-24 md:w-[420px] md:h-32 lg:w-[520px] lg:h-[160px] -ml-2 lg:-ml-4">
              <Image
                src="/organizerslogo.webp"
                alt="Organizers: IMSSA, Ministry of Science and Technology, NSF"
                fill
                className="object-contain object-center lg:object-left-bottom"
              />
            </div>
          </div>

          {/* Center: hackX Logo */}
          <div className="flex flex-col items-center justify-center w-full lg:px-6 self-center">
            <div className="relative w-64 h-24 md:w-80 md:h-28 lg:w-[340px] lg:h-[120px]">
              <Image
                src="/hackxlogo.webp"
                alt="hackX Jr 2026 Logo"
                fill
                className="object-contain object-center"
              />
            </div>
          </div>

          {/* Right Side: Connect */}
          <div className="flex flex-col items-center lg:items-end w-full relative z-10 pt-2">
            <div className="flex flex-col items-center w-full max-w-[320px]">
              <h3 className="font-display text-xl lg:text-2xl text-white tracking-widest mb-6 uppercase bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 text-center w-full">
                Get in Touch
              </h3>

              <div className="flex flex-col w-full gap-3.5 mb-10">
                <a href="tel:+94772086681" className="w-full px-6 py-3 rounded-full bg-white/[0.02] border border-white/10 hover:border-white/20 hover:bg-white/5 transition-all duration-300 flex items-center justify-between group backdrop-blur-md">
                  <span className="text-gray-400 font-body text-sm group-hover:text-white transition-colors">Harshana</span>
                  <span className="text-white font-mono text-sm group-hover:text-[#00E5FF] transition-colors">+94 77 208 6681</span>
                </a>
                <a href="tel:+94715435636" className="w-full px-6 py-3 rounded-full bg-white/[0.02] border border-white/10 hover:border-white/20 hover:bg-white/5 transition-all duration-300 flex items-center justify-between group backdrop-blur-md">
                  <span className="text-gray-400 font-body text-sm group-hover:text-white transition-colors">Lavindi</span>
                  <span className="text-white font-mono text-sm group-hover:text-[#00E5FF] transition-colors">+94 71 543 5636</span>
                </a>
                <a href="tel:+94724170019" className="w-full px-6 py-3 rounded-full bg-white/[0.02] border border-white/10 hover:border-white/20 hover:bg-white/5 transition-all duration-300 flex items-center justify-between group backdrop-blur-md">
                  <span className="text-gray-400 font-body text-sm group-hover:text-white transition-colors">Thuvarakan</span>
                  <span className="text-white font-mono text-sm group-hover:text-[#00E5FF] transition-colors">+94 72 417 0019</span>
                </a>
              </div>

              <div className="flex justify-center lg:justify-between gap-4 w-full">
                <a
                  href="https://www.facebook.com/share/1Eq5BVbYQQ/?mibextid=wwXIfr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex justify-center p-3.5 rounded-full bg-white/[0.02] border border-white/10 hover:bg-white/5 hover:border-white/20 transition-all duration-300 text-gray-400 hover:text-white group backdrop-blur-sm"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:scale-110 transition-transform duration-300"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
                </a>
                <a
                  href="https://www.instagram.com/imssa.uok?igsh=MThpanZ5MnB6eXhpdA=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex justify-center p-3.5 rounded-full bg-white/[0.02] border border-white/10 hover:bg-white/5 hover:border-white/20 transition-all duration-300 text-gray-400 hover:text-white group backdrop-blur-sm"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:scale-110 transition-transform duration-300"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
                </a>
                <a
                  href="https://www.linkedin.com/company/imssauok/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex justify-center p-3.5 rounded-full bg-white/[0.02] border border-white/10 hover:bg-white/5 hover:border-white/20 transition-all duration-300 text-gray-400 hover:text-white group backdrop-blur-sm"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:scale-110 transition-transform duration-300"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
                </a>
                <a
                  href="https://www.youtube.com/@hackX_UoK"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex justify-center p-3.5 rounded-full bg-white/[0.02] border border-white/10 hover:bg-white/5 hover:border-white/20 transition-all duration-300 text-gray-400 hover:text-white group backdrop-blur-sm"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:scale-110 transition-transform duration-300"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" /><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" /></svg>
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="w-full bg-[#00080B] border-t border-white/5 py-6 px-4 md:px-8">
        <div className="w-full flex flex-col md:flex-row justify-between items-center gap-4 text-xs md:text-sm text-gray-500 font-body">
          <p>Organized by The Industrial Management Science Students&apos; Association</p>
          <p>© 2026 hackX Jr. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
