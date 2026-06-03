"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { LeadForm } from "./LeadForm";
import { X } from "lucide-react";

interface LeadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function LeadModal({ isOpen, onClose }: LeadModalProps) {
  const { strings } = useLanguage();

  if (!strings) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-abyss/80 backdrop-blur-sm"
          />
          
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-lg bg-[#0a0a0a] border border-white/10 rounded-2xl shadow-2xl flex flex-col"
          >
            {/* Header Glow with rounded corners */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-current-cta to-transparent rounded-t-2xl" />
            
            <button 
              onClick={onClose}
              className="absolute top-4 right-4 p-2 text-gray-500 hover:text-white hover:bg-white/5 rounded-full transition-colors z-10"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="p-8 md:p-10">
              <h2 className="font-display text-2xl md:text-3xl text-white mb-2">
                {strings.modalTitle}
              </h2>
              <p className="font-body text-gray-300 mb-8">
                {strings.modalSubtitle}
              </p>

              <LeadForm onSuccess={onClose} />
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
