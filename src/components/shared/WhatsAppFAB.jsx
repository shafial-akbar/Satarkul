import React from 'react';
import { MessageCircle } from 'lucide-react';

export default function WhatsAppFAB() {
  return (
    <a
      href="https://wa.me/8801849386845"
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform duration-300 group"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={28} className="group-hover:rotate-12 transition-transform" />
      <span className="absolute right-full mr-4 px-3 py-1.5 bg-white text-[#25D366] rounded-xl shadow-lg text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-[#25D366]/20">
        Chat with SPUS
      </span>
    </a>
  );
}
