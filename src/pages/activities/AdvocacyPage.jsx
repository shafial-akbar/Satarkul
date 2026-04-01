import React from 'react';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '../../context/LanguageContext';
import PageWrapper from '../../components/layout/PageWrapper';
import { motion } from 'motion/react';
import * as Icons from 'lucide-react';
import { advocacyData } from '../../data/advocacyData';

export default function AdvocacyPage() {
  const { t } = useTranslation();
  const { lang } = useLanguage();

  const getLocalized = (obj) => {
    if (!obj) return '';
    return obj[lang] || obj['en'] || '';
  };

  return (
    <PageWrapper 
      title={getLocalized(advocacyData.title)}
      subtitle={getLocalized(advocacyData.subtitle)}
    >
      <div className="space-y-24">
        {/* Hero Section */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-surface-alt text-primary rounded-full font-bold text-sm uppercase tracking-widest">
                <Icons.Megaphone size={18} /> {getLocalized(advocacyData.timeline)}
              </div>
              <h2 className="text-4xl lg:text-5xl font-display font-bold text-text-main leading-tight">
                {lang === 'en' ? 'Demanding Rights, Ensuring Dignity' : 'অধিকারের দাবি, মর্যাদা নিশ্চিত করা'}
              </h2>
            </div>
            <p className="text-muted leading-relaxed text-lg">
              {getLocalized(advocacyData.mainDescription)}
            </p>
            
            <div className="space-y-4">
              <h3 className="text-xl font-display font-bold text-text-main">
                {lang === 'en' ? 'Our Core Demands:' : 'আমাদের প্রধান দাবিসমূহ:'}
              </h3>
              <div className="grid grid-cols-1 gap-4">
                {advocacyData.demands.map((demand, idx) => (
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
                src={advocacyData.images[0]} 
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
                  <p className="text-text-main font-bold">{lang === 'en' ? 'Collective Action' : 'সম্মিলিত পদক্ষেপ'}</p>
                  <p className="text-xs text-muted">{lang === 'en' ? 'Impact through Unity' : 'ঐক্যের মাধ্যমে প্রভাব'}</p>
                </div>
              </div>
              <p className="text-sm text-muted italic">
                {lang === 'en' ? '"Standing together for the rights of every person with a disability."' : '"প্রতিটি প্রতিবন্ধী ব্যক্তির অধিকারের জন্য একসাথে দাঁড়াচ্ছি।"'}
              </p>
            </div>
          </div>
        </section>

        {/* Activities Grid */}
        <section className="space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-text-main">
              {lang === 'en' ? 'How We Advocate' : 'আমরা যেভাবে অ্যাডভোকেসি করি'}
            </h2>
            <p className="text-muted">
              {lang === 'en' ? 'Our methods for bringing attention to the needs and rights of our community.' : 'আমাদের সম্প্রদায়ের প্রয়োজন এবং অধিকারের প্রতি দৃষ্টি আকর্ষণ করার জন্য আমাদের পদ্ধতিসমূহ।'}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {advocacyData.activities.map((activity, idx) => {
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
                      {getLocalized(activity.desc)}
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
              {lang === 'en' ? 'Advocacy in Action' : 'অ্যাডভোকেসি ইন অ্যাকশন'}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="rounded-[3rem] overflow-hidden shadow-xl aspect-video">
              <img src={advocacyData.images[1]} className="w-full h-full object-cover" alt="Advocacy 1" referrerPolicy="no-referrer" />
            </div>
            <div className="rounded-[3rem] overflow-hidden shadow-xl aspect-video">
              <img src={advocacyData.images[2]} className="w-full h-full object-cover" alt="Advocacy 2" referrerPolicy="no-referrer" />
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="bg-primary p-12 lg:p-20 rounded-[4rem] text-white overflow-hidden relative">
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12 text-center lg:text-left">
            <div className="max-w-2xl space-y-6">
              <h2 className="text-4xl font-display font-bold leading-tight">
                {lang === 'en' ? 'Join Our Voice' : 'আমাদের সাথে কণ্ঠ মেলান'}
              </h2>
              <p className="text-white/80 text-lg">
                {lang === 'en' 
                  ? 'Your presence strengthens our demands. Join us in our next human chain or press conference to make a difference.' 
                  : 'আপনার উপস্থিতি আমাদের দাবিগুলোকে আরও শক্তিশালী করে। পরিবর্তন আনতে আমাদের পরবর্তী মানববন্ধন বা সংবাদ সম্মেলনে যোগ দিন।'}
              </p>
            </div>
            <div className="shrink-0">
              <button className="px-12 py-6 bg-white text-primary rounded-3xl font-bold text-xl hover:bg-surface-alt transition-all shadow-2xl flex items-center gap-3">
                {lang === 'en' ? 'Support Our Cause' : 'আমাদের উদ্দেশ্যকে সমর্থন করুন'} <Icons.ArrowRight size={24} />
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
