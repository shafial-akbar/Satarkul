import React from 'react';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '../../context/LanguageContext';
import PageWrapper from '../../components/layout/PageWrapper';
import { motion } from 'motion/react';
import * as Icons from 'lucide-react';
import { specialDaysData } from '../../data/specialDaysData';

export default function SpecialDaysPage() {
  const { t } = useTranslation();
  const { lang } = useLanguage();

  const getLocalized = (obj) => {
    if (!obj) return '';
    return obj[lang] || obj['en'] || '';
  };

  return (
    <PageWrapper 
      title={lang === 'en' ? 'Special Day Observances' : 'বিভিন্ন দিবস পালন'}
      subtitle={lang === 'en' ? 'Commemorating significant national and international days with our community.' : 'আমাদের সম্প্রদায়ের সাথে গুরুত্বপূর্ণ জাতীয় ও আন্তর্জাতিক দিবসসমূহ উদযাপন।'}
    >
      <div className="space-y-20">
        {/* Intro Section */}
        <section className="max-w-4xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full font-bold text-sm uppercase tracking-widest">
            <Icons.CalendarCheck size={18} /> {lang === 'en' ? 'Annual Calendar' : 'বার্ষিক ক্যালেন্ডার'}
          </div>
          <h2 className="text-4xl font-display font-bold text-text-main leading-tight">
            {lang === 'en' ? 'Celebrating Our Heritage & Rights' : 'আমাদের ঐতিহ্য ও অধিকার উদযাপন'}
          </h2>
          <p className="text-muted text-lg leading-relaxed">
            {lang === 'en' 
              ? 'At SPUS, we believe in the power of collective remembrance and celebration. We observe various national and international days to raise awareness, foster community spirit, and educate our students about history and rights.' 
              : 'এসপিইউএস-এ আমরা সম্মিলিত স্মরণ এবং উদযাপনের শক্তিতে বিশ্বাস করি। আমরা সচেতনতা বৃদ্ধি, সম্প্রদায়ের চেতনা বৃদ্ধি এবং আমাদের শিক্ষার্থীদের ইতিহাস ও অধিকার সম্পর্কে শিক্ষিত করার জন্য বিভিন্ন জাতীয় ও আন্তর্জাতিক দিবস পালন করি।'}
          </p>
        </section>

        {/* Timeline/Grid Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {specialDaysData.map((day, idx) => {
            const IconComponent = Icons[day.icon] || Icons.Star;
            return (
              <motion.div
                key={day.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05 }}
                className="group bg-white rounded-[2.5rem] border border-border overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 flex flex-col"
              >
                {/* Image Header */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={day.image} 
                    alt={getLocalized(day.title)} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-6 right-6 flex items-center justify-between">
                    <div className="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-white text-xs font-bold uppercase tracking-widest border border-white/30">
                      {getLocalized(day.date)}
                    </div>
                    <div className={`w-10 h-10 ${day.color} text-white rounded-xl flex items-center justify-center shadow-lg`}>
                      <IconComponent size={20} />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 space-y-4 flex-grow">
                  <div className="space-y-2">
                    <p className="text-xs font-bold text-primary uppercase tracking-widest">{day.fullDate}</p>
                    <h3 className="text-xl font-display font-bold text-text-main group-hover:text-primary transition-colors leading-tight">
                      {getLocalized(day.title)}
                    </h3>
                  </div>
                  <p className="text-muted text-sm leading-relaxed line-clamp-4">
                    {getLocalized(day.description)}
                  </p>
                </div>

                {/* Footer */}
                <div className="px-8 py-6 bg-surface-alt border-t border-border flex items-center justify-between">
                  <span className="text-xs font-bold text-muted uppercase tracking-widest">
                    {lang === 'en' ? 'Event Details' : 'অনুষ্ঠানের বিবরণ'}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-white border border-border text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all">
                    <Icons.ArrowRight size={16} />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </section>

        {/* Impact Stats Section */}
        <section className="bg-surface-alt p-12 lg:p-20 rounded-[4rem] border border-border">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-3xl lg:text-4xl font-display font-bold text-text-main leading-tight">
                {lang === 'en' ? 'Impact of Our Observances' : 'আমাদের দিবস পালনের প্রভাব'}
              </h2>
              <p className="text-muted leading-relaxed">
                {lang === 'en' 
                  ? 'Through these events, we have reached over 1,000 community members annually, providing a platform for expression, learning, and solidarity.' 
                  : 'এই অনুষ্ঠানগুলোর মাধ্যমে আমরা বার্ষিক ১,০০০-এরও বেশি সম্প্রদায়ের মানুষের কাছে পৌঁছেছি, যা প্রকাশ, শিক্ষা এবং সংহতির জন্য একটি প্ল্যাটফর্ম প্রদান করে।'}
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div className="space-y-2">
                  <p className="text-4xl font-display font-bold text-primary">10+</p>
                  <p className="text-sm font-bold text-text-main uppercase tracking-widest">{lang === 'en' ? 'Days Observed' : 'পালিত দিবস'}</p>
                </div>
                <div className="space-y-2">
                  <p className="text-4xl font-display font-bold text-secondary">500+</p>
                  <p className="text-sm font-bold text-text-main uppercase tracking-widest">{lang === 'en' ? 'Students Engaged' : 'অংশগ্রহণকারী শিক্ষার্থী'}</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-xl">
                    <img src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=2070&auto=format&fit=crop" alt="Celebration 1" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  </div>
                  <div className="aspect-square rounded-3xl overflow-hidden shadow-xl">
                    <img src="https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?q=80&w=2006&auto=format&fit=crop" alt="Celebration 2" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  </div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="aspect-square rounded-3xl overflow-hidden shadow-xl">
                    <img src="https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?q=80&w=2070&auto=format&fit=crop" alt="Celebration 3" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  </div>
                  <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-xl">
                    <img src="https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2132&auto=format&fit=crop" alt="Celebration 4" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  </div>
                </div>
              </div>
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
