import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, X, ArrowRight, Loader2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '../../context/LanguageContext';
import { globalSearch } from '../../api/searchService';

export default function SearchModal({ isOpen, onClose }) {
  const { t } = useTranslation();
  const { lang } = useLanguage();
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
      setQuery('');
      setResults([]);
    }
  }, [isOpen]);

  useEffect(() => {
    const performSearch = async () => {
      if (query.length < 2) {
        setResults([]);
        return;
      }

      setIsLoading(true);
      try {
        const data = await globalSearch(query, lang);
        setResults(data);
      } catch (error) {
        console.error('Search error:', error);
      } finally {
        setIsLoading(false);
      }
    };

    const debounceTimer = setTimeout(performSearch, 300);
    return () => clearTimeout(debounceTimer);
  }, [query, lang]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-start justify-center pt-20 px-4 sm:pt-32">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-md"
          />

          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            className="relative w-full max-w-2xl bg-surface rounded-3xl shadow-2xl border border-border overflow-hidden"
          >
            {/* Search Input Area */}
            <div className="p-6 border-b border-border bg-surface-alt/50">
              <div className="relative flex items-center">
                <Search className="absolute left-4 text-muted" size={24} />
                <input
                  ref={inputRef}
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder={lang === 'en' ? 'Search for programs, news, or activities...' : 'কার্যক্রম, সংবাদ বা কর্মসূচি খুঁজুন...'}
                  className="w-full pl-14 pr-12 py-4 bg-surface border-2 border-border focus:border-primary rounded-2xl outline-none text-lg font-medium transition-all"
                />
                <button
                  onClick={onClose}
                  className="absolute right-4 p-1 hover:bg-surface-alt rounded-lg transition-colors text-muted hover:text-text-main"
                >
                  <X size={20} />
                </button>
              </div>
            </div>

            {/* Results Area */}
            <div className="max-h-[60vh] overflow-y-auto p-4 custom-scrollbar">
              {isLoading ? (
                <div className="flex flex-col items-center justify-center py-12 text-muted">
                  <Loader2 size={32} className="animate-spin mb-4 text-primary" />
                  <p className="font-medium">{lang === 'en' ? 'Searching...' : 'খোঁজা হচ্ছে...'}</p>
                </div>
              ) : query.length > 0 && results.length === 0 ? (
                <div className="text-center py-12 text-muted">
                  <p className="text-lg font-medium mb-2">
                    {lang === 'en' ? 'No results found for' : 'কোন ফলাফল পাওয়া যায়নি'} "{query}"
                  </p>
                  <p className="text-sm">
                    {lang === 'en' ? 'Try different keywords or check spelling.' : 'অন্যান্য কীওয়ার্ড চেষ্টা করুন বা বানান পরীক্ষা করুন।'}
                  </p>
                </div>
              ) : query.length === 0 ? (
                <div className="py-8 px-4">
                  <h3 className="text-sm font-bold text-muted uppercase tracking-wider mb-4">
                    {lang === 'en' ? 'Quick Links' : 'দ্রুত লিঙ্ক'}
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {[
                      { to: '/programs', label: lang === 'en' ? 'Our Programs' : 'আমাদের কার্যক্রম' },
                      { to: '/activities', label: lang === 'en' ? 'Recent Activities' : 'সাম্প্রতিক কর্মসূচি' },
                      { to: '/news', label: lang === 'en' ? 'Latest News' : 'সর্বশেষ সংবাদ' },
                      { to: '/support/donate', label: lang === 'en' ? 'Donate Now' : 'অনুদান দিন' },
                    ].map((link, idx) => (
                      <Link
                        key={idx}
                        to={link.to}
                        onClick={onClose}
                        className="flex items-center justify-between p-4 rounded-2xl bg-surface-alt hover:bg-primary hover:text-white transition-all group"
                      >
                        <span className="font-bold">{link.label}</span>
                        <ArrowRight size={18} className="opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="space-y-2">
                  <h3 className="text-sm font-bold text-muted uppercase tracking-wider px-2 mb-4">
                    {lang === 'en' ? 'Search Results' : 'অনুসন্ধানের ফলাফল'} ({results.length})
                  </h3>
                  {results.map((result, idx) => (
                    <Link
                      key={idx}
                      to={result.path}
                      onClick={onClose}
                      className="flex items-start gap-4 p-4 rounded-2xl hover:bg-surface-alt transition-all group"
                    >
                      <div className="mt-1 p-2 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-all">
                        <Search size={18} />
                      </div>
                      <div className="flex-grow">
                        <h4 className="font-bold text-text-main group-hover:text-primary transition-colors">
                          {result.title}
                        </h4>
                        <p className="text-sm text-muted line-clamp-1">
                          {result.description}
                        </p>
                        <div className="flex items-center gap-2 mt-2">
                          <span className="text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full bg-surface-alt text-muted group-hover:bg-primary/20 group-hover:text-primary transition-all">
                            {result.type}
                          </span>
                        </div>
                      </div>
                      <ArrowRight size={18} className="text-muted opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="p-4 bg-surface-alt/30 border-t border-border flex justify-between items-center text-[10px] font-bold text-muted uppercase tracking-widest">
              <span>SPUS Global Search</span>
              <div className="flex gap-4">
                <span>ESC to close</span>
                <span>Enter to select</span>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
