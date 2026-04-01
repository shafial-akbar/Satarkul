import React from 'react';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '../../context/LanguageContext';
import PageWrapper from '../../components/layout/PageWrapper';
import { motion } from 'motion/react';
import * as Icons from 'lucide-react';
import { culturalActivities } from '../../data/culturalActivitiesData';

export default function CulturalActivitiesPage() {
  const { t } = useTranslation();
  const { lang } = useLanguage();

  const getLocalized = (obj) => {
    if (!obj) return '';
    return obj[lang] || obj['en'] || '';
  };

  return (
    <PageWrapper 
      title={t('nav.cultural')}
      subtitle={lang === 'en' ? 'Fostering creativity and expression through cultural programs and events.' : 'সাংস্কৃতিক কর্মসূচি এবং অনুষ্ঠানের মাধ্যমে সৃজনশীলতা এবং অভিব্যক্তি বৃদ্ধি করা।'}
    >
      <div className="space-y-20">
        {/* Intro Section */}
        <section className="max-w-4xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/10 text-secondary rounded-full font-bold text-sm uppercase tracking-widest">
            <Icons.Music size={18} /> {lang === 'en' ? 'Cultural Expression' : 'সাংস্কৃতিক অভিব্যক্তি'}
          </div>
          <h2 className="text-4xl font-display font-bold text-text-main leading-tight">
            {lang === 'en' ? 'Celebrating Talent & Diversity' : 'প্রতিভা ও বৈচিত্র্য উদযাপন'}
          </h2>
          <p className="text-muted text-lg leading-relaxed">
            {lang === 'en' 
              ? 'Our cultural activities provide a platform for persons with disabilities to showcase their talents, build confidence, and engage with the wider community through music, dance, and performance.' 
              : 'আমাদের সাংস্কৃতিক কার্যক্রমগুলো প্রতিবন্ধী ব্যক্তিদের তাদের প্রতিভা প্রদর্শনের জন্য একটি প্ল্যাটফর্ম প্রদান করে, যা আত্মবিশ্বাস তৈরি করে এবং সঙ্গীত, নৃত্য ও অভিনয়ের মাধ্যমে বৃহত্তর সম্প্রদায়ের সাথে সম্পৃক্ত হতে সাহায্য করে।'}
          </p>
        </section>

        {/* Cultural Items Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {culturalActivities.map((activity, idx) => {
            const IconComponent = Icons[activity.icon] || Icons.Palette;
            return (
              <motion.div
                key={activity.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="group bg-white rounded-[3rem] border border-border overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
              >
                <div className="p-10 space-y-8">
                  <div className="flex items-start justify-between">
                    <div className={`w-20 h-20 ${activity.color} rounded-[2rem] flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform duration-500`}>
                      <IconComponent size={40} />
                    </div>
                    <div className="text-right">
                      <p className="text-xs font-bold text-muted uppercase tracking-widest mb-1">{lang === 'en' ? 'Timeline' : 'সময়কাল'}</p>
                      <p className="text-sm font-bold text-text-main">{getLocalized(activity.timeline)}</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-2xl font-display font-bold text-text-main group-hover:text-primary transition-colors leading-tight">
                      {getLocalized(activity.title)}
                    </h3>
                    <p className="text-muted leading-relaxed">
                      {getLocalized(activity.desc)}
                    </p>
                  </div>

                  {activity.stats && (
                    <div className="grid grid-cols-2 gap-4 pt-4">
                      {activity.stats.location && (
                        <div className="p-4 bg-surface-alt rounded-2xl border border-border col-span-2">
                          <p className="text-sm font-bold text-text-main leading-tight">{activity.stats.location}</p>
                          <p className="text-xs font-bold text-muted uppercase tracking-widest">{lang === 'en' ? 'Location' : 'স্থান'}</p>
                        </div>
                      )}
                      {activity.stats.partner && (
                        <div className="p-4 bg-surface-alt rounded-2xl border border-border">
                          <p className="text-sm font-bold text-text-main leading-tight">{activity.stats.partner}</p>
                          <p className="text-xs font-bold text-muted uppercase tracking-widest">{lang === 'en' ? 'Partner' : 'অংশীদার'}</p>
                        </div>
                      )}
                    </div>
                  )}

                  {activity.features && (
                    <div className="flex flex-wrap gap-2 pt-4">
                      {activity.features.map((feature, fIdx) => (
                        <span key={fIdx} className="px-4 py-2 bg-surface-alt text-text-main text-xs font-bold rounded-full border border-border">
                          {getLocalized(feature)}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </section>

        {/* Gallery Section */}
        <section className="space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-text-main leading-tight">
              {lang === 'en' ? 'Cultural Highlights' : 'সাংস্কৃতিক হাইলাইটস'}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="aspect-square rounded-[3rem] overflow-hidden shadow-xl">
              <img src="https://images.unsplash.com/photo-1514525253361-bee8718a340b?q=80&w=2074&auto=format&fit=crop" className="w-full h-full object-cover" alt="Cultural 1" referrerPolicy="no-referrer" />
            </div>
            <div className="aspect-square rounded-[3rem] overflow-hidden shadow-xl">
              <img src="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover" alt="Cultural 2" referrerPolicy="no-referrer" />
            </div>
            <div className="aspect-square rounded-[3rem] overflow-hidden shadow-xl">
              <img src="https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover" alt="Cultural 3" referrerPolicy="no-referrer" />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-secondary p-12 lg:p-20 rounded-[4rem] text-white text-center space-y-8 relative overflow-hidden">
          <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            <h2 className="text-4xl font-display font-bold leading-tight">
              {lang === 'en' ? 'Support Our Cultural Programs' : 'আমাদের সাংস্কৃতিক কর্মসূচিতে সহায়তা করুন'}
            </h2>
            <p className="text-white/80 text-lg">
              {lang === 'en' 
                ? 'Help us continue these important traditions. Your support provides food, cultural materials, and a sense of belonging for our students.' 
                : 'এই গুরুত্বপূর্ণ ঐতিহ্যগুলো অব্যাহত রাখতে আমাদের সাহায্য করুন। আপনার সমর্থন আমাদের শিক্ষার্থীদের জন্য খাবার, সাংস্কৃতিক উপকরণ এবং আপনত্বের অনুভূতি প্রদান করে।'}
            </p>
            <div className="pt-4">
              <button className="px-12 py-6 bg-white text-secondary rounded-3xl font-bold text-xl hover:bg-surface-alt transition-all shadow-2xl">
                {lang === 'en' ? 'Donate for Events' : 'অনুষ্ঠানের জন্য অনুদান দিন'}
              </button>
            </div>
          </div>
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl translate-x-1/4 translate-y-1/4" />
        </section>
      </div>
    </PageWrapper>
  );
}
