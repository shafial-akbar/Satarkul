import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { useContent } from '../../context/ContentContext';
import PageWrapper from '../../components/layout/PageWrapper';
import { motion } from 'motion/react';
import * as Icons from 'lucide-react';

export default function CulturalActivitiesPage() {
  const { lang } = useLanguage();
  const { content } = useContent();

  const cultural = content?.activities?.cultural;

  const getLocalized = (obj) => {
    if (!obj) return '';
    return obj[lang] || obj['en'] || '';
  };

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
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {(cultural?.activities || []).map((activity, idx) => {
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
                      {getLocalized(activity.description)}
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
