import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Palette, X, Check, Languages } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { useLanguage } from '../../context/LanguageContext';

export default function ThemeSwitcher() {
  const [isOpen, setIsOpen] = useState(false);
  const { currentTheme, setCurrentTheme, themes } = useTheme();
  const { lang, toggleLang } = useLanguage();

  return (
    <div className="fixed bottom-6 left-6 z-50">
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-primary text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform duration-300 group"
        aria-label="Theme Switcher"
      >
        {isOpen ? <X size={24} /> : <Palette size={24} className="group-hover:rotate-12 transition-transform" />}
      </button>

      {/* Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: -100, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: -100, scale: 0.9 }}
            className="absolute bottom-20 left-0 w-80 bg-surface rounded-3xl shadow-2xl border border-border p-6 overflow-hidden"
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-display font-bold text-text-main">
                {lang === 'en' ? 'Customize Experience' : 'পছন্দমতো সাজান'}
              </h3>
              <button 
                onClick={toggleLang}
                className="flex items-center gap-2 px-3 py-1.5 bg-surface-alt rounded-full text-sm font-semibold text-primary hover:bg-primary hover:text-white transition-colors"
              >
                <Languages size={16} />
                {lang === 'en' ? 'বাংলা' : 'English'}
              </button>
            </div>

            <div className="space-y-4 max-h-[60vh] overflow-y-auto pr-2 custom-scrollbar">
              {themes.map((theme) => (
                <button
                  key={theme.id}
                  onClick={() => setCurrentTheme(theme)}
                  className={`w-full flex items-start gap-4 p-4 rounded-2xl transition-all duration-300 text-left border-2 ${
                    currentTheme.id === theme.id ? 'border-primary bg-surface-alt ring-4 ring-primary/10' : 'border-transparent hover:bg-surface-alt'
                  }`}
                >
                  <div 
                    className="w-10 h-10 rounded-full flex-shrink-0 border-2 border-white shadow-md flex items-center justify-center"
                    style={{ backgroundColor: theme.primary }}
                  >
                    {currentTheme.id === theme.id && <Check size={18} className="text-white" />}
                  </div>
                  
                  <div className="flex-grow">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-text-main">
                        {lang === 'en' ? theme.name : theme.nameBn}
                      </span>
                    </div>
                    <p className="text-xs text-muted mt-1 leading-relaxed italic">
                      {theme.tagline}
                    </p>
                    <div className="flex gap-1.5 mt-2">
                      <div className="w-4 h-4 rounded-full" style={{ backgroundColor: theme.secondary }} />
                      <div className="w-4 h-4 rounded-full" style={{ backgroundColor: theme.accent }} />
                      <div className="w-4 h-4 rounded-full" style={{ backgroundColor: theme.background }} />
                    </div>
                  </div>
                </button>
              ))}
            </div>

            <div className="mt-6 pt-6 border-t border-border">
              <p className="text-xs text-muted mb-2 uppercase tracking-widest font-bold">
                {lang === 'en' ? 'Font Preview' : 'ফন্ট প্রিভিউ'}
              </p>
              <div 
                className="p-4 bg-surface-alt rounded-xl border border-border"
                style={{ fontFamily: currentTheme.displayFont }}
              >
                <p className="text-lg font-bold text-text-main">
                  {lang === 'en' ? 'Share the Hope' : 'আশা ভাগ করুন'}
                </p>
                <p className="text-sm text-muted font-body mt-1">
                  {lang === 'en' ? 'Disabilities is not barrier.' : 'প্রতিবন্ধিতা বাধা নয়।'}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
