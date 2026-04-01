import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '../../context/LanguageContext';
import { Play, Image as ImageIcon, Filter, X, Maximize2, Calendar, Tag } from 'lucide-react';
import { galleryData } from '../../data/galleryData';

export default function GalleryPage() {
  const { t } = useTranslation();
  const { lang } = useLanguage();
  const [filter, setFilter] = useState('All');
  const [selectedItem, setSelectedItem] = useState(null);

  const getLocalized = (obj) => obj[lang] || obj['en'];

  const categories = ['All', ...new Set(galleryData.map(item => getLocalized(item.category)))];

  const filteredData = filter === 'All' 
    ? galleryData 
    : galleryData.filter(item => getLocalized(item.category) === filter);

  return (
    <div className="min-h-screen bg-bg">
      {/* Hero Section */}
      <section className="relative py-24 bg-surface overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center space-y-6">
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-bold uppercase tracking-widest"
            >
              {lang === 'en' ? 'Visual Journey' : 'ভিজ্যুয়াল যাত্রা'}
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl lg:text-6xl font-display font-bold text-text-main"
            >
              {lang === 'en' ? 'Our Gallery' : 'আমাদের গ্যালারি'}
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-muted max-w-2xl mx-auto text-lg"
            >
              {lang === 'en' 
                ? 'Capturing moments of impact, joy, and change across our programs.' 
                : 'আমাদের কর্মসূচির প্রভাব, আনন্দ এবং পরিবর্তনের মুহূর্তগুলো তুলে ধরা হয়েছে।'}
            </motion.p>
          </div>
        </div>
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/5 rounded-full blur-2xl -translate-x-1/2 translate-y-1/2" />
      </section>

      {/* Filter Section */}
      <section className="py-12 border-y border-border bg-white sticky top-20 z-30 shadow-sm">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-3 text-text-main font-bold">
              <Filter size={20} className="text-primary" />
              {lang === 'en' ? 'Filter by Category:' : 'ক্যাটাগরি অনুযায়ী ফিল্টার করুন:'}
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 ${
                    filter === cat 
                      ? 'bg-primary text-white shadow-lg shadow-primary/30 scale-105' 
                      : 'bg-surface-alt text-muted hover:bg-primary/10 hover:text-primary'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredData.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  className="group relative aspect-[4/3] rounded-[2.5rem] overflow-hidden bg-surface-alt shadow-lg cursor-pointer"
                  onClick={() => setSelectedItem(item)}
                >
                  <img 
                    src={item.type === 'video' ? item.thumbnail : item.url} 
                    alt={getLocalized(item.title)} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <div className="absolute bottom-0 left-0 w-full p-8 space-y-3">
                      <div className="flex items-center gap-2">
                        <span className="px-3 py-1 bg-primary text-white rounded-full text-[10px] font-bold uppercase tracking-widest">
                          {getLocalized(item.category)}
                        </span>
                        <span className="px-3 py-1 bg-white/20 backdrop-blur-md text-white rounded-full text-[10px] font-bold uppercase tracking-widest">
                          {item.type}
                        </span>
                      </div>
                      <h3 className="text-xl font-display font-bold text-white leading-tight">
                        {getLocalized(item.title)}
                      </h3>
                      <div className="flex items-center justify-between pt-2">
                        <div className="flex items-center gap-2 text-white/70 text-xs font-bold uppercase tracking-widest">
                          <Calendar size={14} /> {item.date}
                        </div>
                        <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white">
                          {item.type === 'video' ? <Play size={20} fill="currentColor" /> : <Maximize2 size={20} />}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Type Icon (Always Visible) */}
                  <div className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center text-primary shadow-lg group-hover:scale-0 transition-all duration-300">
                    {item.type === 'video' ? <Play size={18} fill="currentColor" /> : <ImageIcon size={18} />}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex items-center justify-center p-6 lg:p-12"
          >
            <button 
              onClick={() => setSelectedItem(null)}
              className="absolute top-8 right-8 w-12 h-12 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20 transition-all"
            >
              <X size={24} />
            </button>

            <div className="max-w-6xl w-full space-y-8">
              <div className="relative aspect-video rounded-[2rem] overflow-hidden bg-black shadow-2xl">
                {selectedItem.type === 'video' ? (
                  <iframe 
                    src={`${selectedItem.url}?autoplay=1`} 
                    className="w-full h-full" 
                    allow="autoplay; encrypted-media" 
                    allowFullScreen 
                  />
                ) : (
                  <img 
                    src={selectedItem.url} 
                    alt={getLocalized(selectedItem.title)} 
                    className="w-full h-full object-contain"
                    referrerPolicy="no-referrer"
                  />
                )}
              </div>
              
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 text-white">
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="px-4 py-1.5 bg-primary rounded-full text-xs font-bold uppercase tracking-widest">
                      {getLocalized(selectedItem.category)}
                    </span>
                    <div className="flex items-center gap-2 text-white/60 text-xs font-bold uppercase tracking-widest">
                      <Calendar size={14} /> {selectedItem.date}
                    </div>
                  </div>
                  <h2 className="text-3xl font-display font-bold">
                    {getLocalized(selectedItem.title)}
                  </h2>
                </div>
                <button className="flex items-center gap-2 px-8 py-3 bg-white text-black rounded-xl font-bold text-sm hover:bg-surface-alt transition-all">
                  <Tag size={18} /> {lang === 'en' ? 'View Details' : 'বিস্তারিত দেখুন'}
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
