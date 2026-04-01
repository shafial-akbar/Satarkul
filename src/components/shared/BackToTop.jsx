import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle, ArrowUp } from 'lucide-react';

export const WhatsAppFAB = () => {
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
};

export const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 400);
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          onClick={scrollToTop}
          className="fixed bottom-24 right-6 z-50 w-12 h-12 bg-primary text-white rounded-full shadow-xl flex items-center justify-center hover:scale-110 transition-transform duration-300 border-2 border-white"
          aria-label="Back to Top"
        >
          <ArrowUp size={24} />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default BackToTop;
