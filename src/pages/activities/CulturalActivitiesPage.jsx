import React, { useState, useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import PageWrapper from '../../components/layout/PageWrapper';
import { motion } from 'motion/react';
import * as Icons from 'lucide-react';
import { getCulturalData } from '../../api/apiClient';

export default function CulturalActivitiesPage() {
  const { lang } = useLanguage();
  const [cultural, setCultural] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const data = await getCulturalData();
        setCultural(data);
      } catch (error) {
        console.error('Error fetching cultural data:', error);
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
          {lang === 'en' ? 'Loading cultural activities...' : 'সাংস্কৃতিক কার্যক্রম লোড হচ্ছে...'}
        </p>
      </div>
    );
  }

  return (
    <PageWrapper 
      title={getLocalized(cultural?.title)}
      subtitle={getLocalized(cultural?.subtitle)}
    >
      <div className="space-y-20">
        {/* Intro Section */}
        <section className="max-w-4xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/10 text-secondary rounded-full font-bold text-sm uppercase tracking-widest">
            <Icons.Music size={18} /> {getLocalized(cultural?.intro?.tag)}
          </div>
          <h2 className="text-4xl font-display font-bold text-text-main leading-tight">
            {getLocalized(cultural?.intro?.title)}
          </h2>
          <p className="text-muted text-lg leading-relaxed">
            {getLocalized(cultural?.intro?.description)}
          </p>
        </section>

        {/* Cultural Items Grid */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {(cultural?.activities || []).map((activity, idx) => {
            const IconComponent = Icons[activity.icon] || Icons.Palette;
            return (
              <motion.div
                key={activity.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="group bg-white rounded-[3rem] border border-border overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 flex flex-col"
              >
                <div className="aspect-[16/9] overflow-hidden relative">
                  <img 
                    src={activity.image || "https://picsum.photos/seed/cultural-event/800/600"} 
                    alt={getLocalized(activity.title)} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-6 left-6 flex gap-2">
                    <div className={`w-12 h-12 ${activity.color} text-white rounded-xl flex items-center justify-center shadow-lg`}>
                      <IconComponent size={24} />
                    </div>
                  </div>
                </div>

                <div className="p-10 flex-grow flex flex-col justify-between space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 text-xs font-bold text-primary uppercase tracking-[0.2em]">
                      <Icons.Calendar size={14} /> {getLocalized(activity.timeline)}
                    </div>
                    <h3 className="text-3xl font-display font-bold text-text-main group-hover:text-primary transition-colors leading-tight">
                      {getLocalized(activity.title)}
                    </h3>
                    <p className="text-muted text-lg leading-relaxed">
                      {getLocalized(activity.description)}
                    </p>
                  </div>

                  {activity.features && (
                    <div className="flex flex-wrap gap-2 pt-4">
                      {activity.features.map((feature, fIdx) => (
                        <span key={fIdx} className="px-5 py-2.5 bg-surface-alt text-text-main text-xs font-bold rounded-full border border-border group-hover:bg-primary/5 group-hover:border-primary/20 transition-all">
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
              {getLocalized(cultural?.galleryTitle)}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="aspect-square rounded-[3rem] overflow-hidden shadow-xl">
              <img src="https://picsum.photos/seed/culture/1200/1200" className="w-full h-full object-cover" alt="Cultural 1" referrerPolicy="no-referrer" />
            </div>
            <div className="aspect-square rounded-[3rem] overflow-hidden shadow-xl">
              <img src="https://picsum.photos/seed/dance/1200/1200" className="w-full h-full object-cover" alt="Cultural 2" referrerPolicy="no-referrer" />
            </div>
            <div className="aspect-square rounded-[3rem] overflow-hidden shadow-xl">
              <img src="https://picsum.photos/seed/music/1200/1200" className="w-full h-full object-cover" alt="Cultural 3" referrerPolicy="no-referrer" />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-secondary p-12 lg:p-20 rounded-[4rem] text-white text-center space-y-8 relative overflow-hidden">
          <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            <h2 className="text-4xl font-display font-bold leading-tight">
              {getLocalized(cultural?.ctaTitle)}
            </h2>
            <p className="text-white/80 text-lg">
              {getLocalized(cultural?.ctaDescription)}
            </p>
            <div className="pt-4">
              <button className="px-12 py-6 bg-white text-secondary rounded-3xl font-bold text-xl hover:bg-surface-alt transition-all shadow-2xl">
                {getLocalized(cultural?.ctaButton)}
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
