import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '../../context/LanguageContext';
import { Play, Youtube, Filter, Calendar, ExternalLink, ArrowUpRight } from 'lucide-react';
import { videosData } from '../../data/galleryData';

export default function VideosPage() {
  const { t } = useTranslation();
  const { lang } = useLanguage();
  const [filter, setFilter] = useState('All');
  const [selectedVideo, setSelectedVideo] = useState(null);

  const getLocalized = (obj) => obj[lang] || obj['en'];

  const categories = ['All', ...new Set(videosData.map(item => getLocalized(item.category)))];

  const filteredData = filter === 'All' 
    ? videosData 
    : videosData.filter(item => getLocalized(item.category) === filter);

  return (
    <div className="min-h-screen bg-bg">
      {/* Hero Section */}
      <section className="relative py-24 bg-primary overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center space-y-6">
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="px-4 py-2 bg-white/20 backdrop-blur-md rounded-full text-white text-sm font-bold uppercase tracking-widest"
            >
              {lang === 'en' ? 'Video Library' : 'ভিডিও লাইব্রেরি'}
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl lg:text-6xl font-display font-bold text-white"
            >
              {lang === 'en' ? 'Our Stories in Motion' : 'আমাদের গল্পের ভিডিও'}
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-white/80 max-w-2xl mx-auto text-lg"
            >
              {lang === 'en' 
                ? 'Watch and learn about our mission, programs, and the lives we impact.' 
                : 'আমাদের লক্ষ্য, কর্মসূচি এবং আমরা যাদের জীবন প্রভাবিত করি তাদের সম্পর্কে দেখুন এবং জানুন।'}
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="pt-8"
            >
              <a 
                href="https://youtube.com/@spus-bd" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-10 py-4 bg-white text-primary rounded-2xl font-bold hover:bg-surface-alt transition-all shadow-2xl group"
              >
                <Youtube size={24} className="text-[#FF0000] group-hover:scale-110 transition-transform" />
                {lang === 'en' ? 'Subscribe to Our Channel' : 'আমাদের চ্যানেলে সাবস্ক্রাইব করুন'}
                <ArrowUpRight size={20} />
              </a>
            </motion.div>
          </div>
        </div>
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/20 rounded-full blur-2xl -translate-x-1/2 translate-y-1/2" />
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

      {/* Videos Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
          >
            <AnimatePresence mode="popLayout">
              {filteredData.map((video) => (
                <motion.div
                  key={video.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  className="group bg-white rounded-[3rem] overflow-hidden border border-border shadow-lg hover:shadow-2xl hover:border-primary transition-all duration-500 flex flex-col h-full"
                >
                  <div 
                    className="relative aspect-video overflow-hidden cursor-pointer"
                    onClick={() => setSelectedVideo(video)}
                  >
                    <img 
                      src={video.thumbnail} 
                      alt={getLocalized(video.title)} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-500 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center text-primary shadow-2xl group-hover:scale-110 transition-all duration-500">
                        <Play size={28} fill="currentColor" />
                      </div>
                    </div>
                    <div className="absolute top-6 right-6 px-4 py-2 bg-white/90 backdrop-blur-md rounded-full text-primary text-[10px] font-bold uppercase tracking-widest shadow-lg">
                      {getLocalized(video.category)}
                    </div>
                  </div>
                  
                  <div className="p-8 space-y-4 flex-grow">
                    <h3 className="text-2xl font-display font-bold text-text-main group-hover:text-primary transition-colors leading-tight line-clamp-2">
                      {getLocalized(video.title)}
                    </h3>
                    <div className="flex items-center justify-between pt-4 border-t border-border">
                      <div className="flex items-center gap-2 text-muted text-xs font-bold uppercase tracking-widest">
                        <Calendar size={14} /> {video.date}
                      </div>
                      <button 
                        onClick={() => setSelectedVideo(video)}
                        className="text-primary font-bold text-sm flex items-center gap-2 hover:gap-4 transition-all"
                      >
                        {lang === 'en' ? 'Watch Now' : 'এখন দেখুন'} <ExternalLink size={16} />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Video Modal */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex items-center justify-center p-6 lg:p-12"
          >
            <button 
              onClick={() => setSelectedVideo(null)}
              className="absolute top-8 right-8 w-12 h-12 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20 transition-all"
            >
              <Youtube size={24} />
            </button>

            <div className="max-w-6xl w-full space-y-8">
              <div className="relative aspect-video rounded-[2rem] overflow-hidden bg-black shadow-2xl">
                <iframe 
                  src={`${selectedVideo.url}?autoplay=1`} 
                  className="w-full h-full" 
                  allow="autoplay; encrypted-media" 
                  allowFullScreen 
                />
              </div>
              
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 text-white">
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="px-4 py-1.5 bg-primary rounded-full text-xs font-bold uppercase tracking-widest">
                      {getLocalized(selectedVideo.category)}
                    </span>
                    <div className="flex items-center gap-2 text-white/60 text-xs font-bold uppercase tracking-widest">
                      <Calendar size={14} /> {selectedVideo.date}
                    </div>
                  </div>
                  <h2 className="text-3xl font-display font-bold">
                    {getLocalized(selectedVideo.title)}
                  </h2>
                </div>
                <a 
                  href="https://youtube.com/@spus-bd" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-8 py-3 bg-[#FF0000] text-white rounded-xl font-bold text-sm hover:bg-[#CC0000] transition-all"
                >
                  <Youtube size={18} /> {lang === 'en' ? 'Subscribe' : 'সাবস্ক্রাইব'}
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
