import React, { useState, useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import PageWrapper from '../../components/layout/PageWrapper';
import { motion } from 'motion/react';
import * as Icons from 'lucide-react';
import { getSpecialDaysData } from '../../api/apiClient';

export default function SpecialDaysPage() {
  const { lang } = useLanguage();
  const [specialDays, setSpecialDays] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const data = await getSpecialDaysData();
        setSpecialDays(data);
      } catch (error) {
        console.error('Error fetching special days data:', error);
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
          {lang === 'en' ? 'Loading special days...' : 'বিশেষ দিবস লোড হচ্ছে...'}
        </p>
      </div>
    );
  }

  return (
    <PageWrapper 
      title={getLocalized(specialDays?.title)}
      subtitle={getLocalized(specialDays?.subtitle)}
    >
      <div className="space-y-20">
        {/* Intro Section */}
        <section className="max-w-4xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full font-bold text-sm uppercase tracking-widest">
            <Icons.CalendarCheck size={18} /> {getLocalized(specialDays?.intro?.tag)}
          </div>
          <h2 className="text-4xl font-display font-bold text-text-main leading-tight">
            {getLocalized(specialDays?.intro?.title)}
          </h2>
          <p className="text-muted text-lg leading-relaxed">
            {getLocalized(specialDays?.intro?.description)}
          </p>
        </section>

        {/* Timeline/Grid Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {(specialDays?.days || []).map((day, idx) => {
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
                {getLocalized(specialDays?.impact?.title)}
              </h2>
              <p className="text-muted leading-relaxed">
                {getLocalized(specialDays?.impact?.description)}
              </p>
              <div className="grid grid-cols-2 gap-8">
                {(specialDays?.impact?.stats || []).map((stat, sIdx) => (
                  <div key={sIdx} className="space-y-2">
                    <p className={`text-4xl font-display font-bold ${sIdx === 0 ? 'text-primary' : 'text-secondary'}`}>{stat.value}</p>
                    <p className="text-sm font-bold text-text-main uppercase tracking-widest">{getLocalized(stat.label)}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-xl">
                    <img src="https://picsum.photos/seed/celebration/800/1000" alt="Celebration 1" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  </div>
                  <div className="aspect-square rounded-3xl overflow-hidden shadow-xl">
                    <img src="https://picsum.photos/seed/community/1000/1000" alt="Celebration 2" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  </div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="aspect-square rounded-3xl overflow-hidden shadow-xl">
                    <img src="https://picsum.photos/seed/support/1000/1000" alt="Celebration 3" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  </div>
                  <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-xl">
                    <img src="https://picsum.photos/seed/education/800/1000" alt="Celebration 4" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
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
              {getLocalized(specialDays?.cta?.title)}
            </h2>
            <p className="text-white/80 text-lg">
              {getLocalized(specialDays?.cta?.description)}
            </p>
            <div className="pt-4">
              <button className="px-12 py-6 bg-white text-secondary rounded-3xl font-bold text-xl hover:bg-surface-alt transition-all shadow-2xl">
                {getLocalized(specialDays?.cta?.button)}
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
