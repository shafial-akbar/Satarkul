import React, { useState, useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import PageWrapper from '../../components/layout/PageWrapper';
import { motion } from 'motion/react';
import * as Icons from 'lucide-react';
import { getAdvocacyData } from '../../api/apiClient';

export default function AdvocacyPage() {
  const { lang } = useLanguage();
  const [advocacy, setAdvocacy] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const data = await getAdvocacyData();
        setAdvocacy(data);
      } catch (error) {
        console.error('Error fetching advocacy data:', error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  const getLocalized = (obj) => {
    if (!obj) return '';
    return obj[lang] || obj['en'] || '';
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-bg">
        <Icons.Loader2 size={48} className="animate-spin text-primary mb-4" />
        <p className="text-muted font-medium">
          {lang === 'en' ? 'Loading advocacy activities...' : 'অ্যাডভোকেসি কার্যক্রম লোড হচ্ছে...'}
        </p>
      </div>
    );
  }

  const images = [
    'https://picsum.photos/seed/advocacy/1200/800',
    'https://picsum.photos/seed/protest/1200/800',
    'https://picsum.photos/seed/meeting/1200/800'
  ];

  return (
    <PageWrapper 
      title={getLocalized(advocacy?.title)}
      subtitle={getLocalized(advocacy?.subtitle)}
    >
      <div className="space-y-24">
        {/* Hero Section */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-surface-alt text-primary rounded-full font-bold text-sm uppercase tracking-widest">
                <Icons.Megaphone size={18} /> {getLocalized(advocacy?.tag)}
              </div>
              <h2 className="text-4xl lg:text-5xl font-display font-bold text-text-main leading-tight">
                {getLocalized(advocacy?.heroTitle)}
              </h2>
            </div>
            <p className="text-muted leading-relaxed text-lg">
              {getLocalized(advocacy?.description)}
            </p>
            
            <div className="space-y-4">
              <h3 className="text-xl font-display font-bold text-text-main">
                {getLocalized(advocacy?.demandsTitle)}
              </h3>
              <div className="grid grid-cols-1 gap-4">
                {(advocacy?.demands || []).map((demand, idx) => (
                  <div key={idx} className="flex items-center gap-4 p-4 bg-surface-alt rounded-2xl border border-border">
                    <div className="w-10 h-10 bg-primary text-white rounded-xl flex items-center justify-center shrink-0">
                      <Icons.CheckCircle2 size={20} />
                    </div>
                    <span className="font-bold text-text-main">{getLocalized(demand)}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-[4rem] overflow-hidden shadow-2xl">
              <img 
                src={images[0]} 
                alt="Advocacy Activity" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 bg-white p-8 rounded-3xl shadow-xl border border-border max-w-xs hidden md:block">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-accent/10 text-accent rounded-xl flex items-center justify-center">
                  <Icons.Award size={24} />
                </div>
                <div>
                  <p className="text-text-main font-bold">{getLocalized(advocacy?.heroBadgeTitle) || (lang === 'en' ? 'Collective Action' : 'সম্মিলিত পদক্ষেপ')}</p>
                  <p className="text-xs text-muted">{getLocalized(advocacy?.heroBadgeSubtitle) || (lang === 'en' ? 'Impact through Unity' : 'ঐক্যের মাধ্যমে প্রভাব')}</p>
                </div>
              </div>
              <p className="text-sm text-muted italic">
                {getLocalized(advocacy?.heroQuote) || (lang === 'en' ? '"Standing together for the rights of every person with a disability."' : '"প্রতিপ্রতিবন্ধী ব্যক্তির অধিকারের জন্য একসাথে দাঁড়াচ্ছি।"')}
              </p>
            </div>
          </div>
        </section>

        {/* Activities Grid */}
        <section className="space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-text-main">
              {getLocalized(advocacy?.methodsTitle)}
            </h2>
            <p className="text-muted">
              {getLocalized(advocacy?.methodsSubtitle)}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {(advocacy?.activities || []).map((activity, idx) => {
              const ActivityIcon = Icons[activity.icon] || Icons.HelpCircle;
              return (
                <motion.div 
                  key={activity.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="group bg-white p-10 rounded-[3rem] border border-border hover:border-primary shadow-lg transition-all duration-500 text-center space-y-6"
                >
                  <div className="w-20 h-20 mx-auto bg-surface-alt text-primary rounded-[2rem] flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-500">
                    <ActivityIcon size={40} />
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-2xl font-display font-bold text-text-main leading-tight">
                      {getLocalized(activity.title)}
                    </h3>
                    <p className="text-muted leading-relaxed">
                      {getLocalized(activity.description)}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* Photo Gallery Section */}
        <section className="space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-text-main">
              {getLocalized(advocacy?.galleryTitle)}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="rounded-[3rem] overflow-hidden shadow-xl aspect-video">
              <img src={images[1]} className="w-full h-full object-cover" alt="Advocacy 1" referrerPolicy="no-referrer" />
            </div>
            <div className="rounded-[3rem] overflow-hidden shadow-xl aspect-video">
              <img src={images[2]} className="w-full h-full object-cover" alt="Advocacy 2" referrerPolicy="no-referrer" />
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="bg-primary p-12 lg:p-20 rounded-[4rem] text-white overflow-hidden relative">
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12 text-center lg:text-left">
            <div className="max-w-2xl space-y-6">
              <h2 className="text-4xl font-display font-bold leading-tight">
                {getLocalized(advocacy?.ctaTitle)}
              </h2>
              <p className="text-white/80 text-lg">
                {getLocalized(advocacy?.ctaDescription)}
              </p>
            </div>
            <div className="shrink-0">
              <button className="px-12 py-6 bg-white text-primary rounded-3xl font-bold text-xl hover:bg-surface-alt transition-all shadow-2xl flex items-center gap-3">
                {getLocalized(advocacy?.ctaButton)} <Icons.ArrowRight size={24} />
              </button>
            </div>
          </div>
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/20 rounded-full blur-3xl translate-x-1/4 translate-y-1/4" />
        </section>
      </div>
    </PageWrapper>
  );
}
