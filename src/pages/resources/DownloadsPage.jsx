import React from 'react';
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '../../context/LanguageContext';
import { Download, FileText, Presentation, FileDown, ArrowRight } from 'lucide-react';
import { downloadsData } from '../../data/downloadsData';

export default function DownloadsPage() {
  const { t } = useTranslation();
  const { lang } = useLanguage();

  const getLocalized = (obj) => obj[lang] || obj['en'];

  const getIcon = (iconName) => {
    switch (iconName) {
      case 'FileText': return <FileText size={24} />;
      case 'Presentation': return <Presentation size={24} />;
      default: return <FileDown size={24} />;
    }
  };

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
              {lang === 'en' ? 'Resources' : 'রিসোর্স'}
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl lg:text-6xl font-display font-bold text-white"
            >
              {lang === 'en' ? 'Downloads' : 'ডাউনলোড'}
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-white/80 max-w-2xl mx-auto text-lg"
            >
              {lang === 'en' 
                ? 'Access our official documents, prospectuses, and presentations.' 
                : 'আমাদের অফিসিয়াল নথি, প্রসপেক্টাস এবং উপস্থাপনাগুলো সংগ্রহ করুন।'}
            </motion.p>
          </div>
        </div>
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/20 rounded-full blur-2xl -translate-x-1/2 translate-y-1/2" />
      </section>

      {/* Downloads Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {downloadsData.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="group bg-white p-8 rounded-[2.5rem] border border-border shadow-lg hover:shadow-2xl hover:border-primary transition-all duration-500"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-surface-alt text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-500">
                    {getIcon(item.icon)}
                  </div>
                  <span className="px-3 py-1 bg-surface-alt text-muted rounded-lg text-xs font-bold uppercase tracking-widest">
                    {item.type}
                  </span>
                </div>
                
                <h3 className="text-xl font-display font-bold text-text-main mb-3 group-hover:text-primary transition-colors">
                  {getLocalized(item.title)}
                </h3>
                <p className="text-muted text-sm leading-relaxed mb-8">
                  {getLocalized(item.description)}
                </p>
                
                <div className="flex items-center justify-between pt-6 border-t border-border">
                  <span className="text-xs text-muted font-bold uppercase tracking-widest">
                    Size: {item.size}
                  </span>
                  <a 
                    href={item.link} 
                    className="flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-xl font-bold text-sm hover:bg-primary/90 transition-all shadow-md group-hover:scale-105"
                  >
                    <Download size={18} /> {lang === 'en' ? 'Download' : 'ডাউনলোড'}
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Info */}
          <div className="mt-24 bg-surface-alt p-12 rounded-[3rem] border border-border flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="space-y-4 max-w-xl">
              <h3 className="text-3xl font-display font-bold text-text-main">
                {lang === 'en' ? 'Need something else?' : 'অন্য কিছু প্রয়োজন?'}
              </h3>
              <p className="text-muted leading-relaxed">
                {lang === 'en' 
                  ? 'If you are looking for a specific document that is not listed here, please contact our office.' 
                  : 'আপনি যদি এখানে তালিকাভুক্ত নয় এমন কোনো নির্দিষ্ট নথি খুঁজছেন, তবে আমাদের অফিসের সাথে যোগাযোগ করুন।'}
              </p>
            </div>
            <a 
              href="/contact" 
              className="px-10 py-4 bg-white border-2 border-primary text-primary rounded-2xl font-bold hover:bg-primary hover:text-white transition-all shadow-lg flex items-center gap-2"
            >
              {lang === 'en' ? 'Contact Us' : 'যোগাযোগ করুন'} <ArrowRight size={20} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
