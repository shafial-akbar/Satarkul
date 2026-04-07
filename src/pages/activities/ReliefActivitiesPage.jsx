import React, { useState, useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import PageWrapper from '../../components/layout/PageWrapper';
import { motion } from 'motion/react';
import * as Icons from 'lucide-react';
import { getReliefData } from '../../api/apiClient';

export default function ReliefActivitiesPage() {
  const { lang } = useLanguage();
  const [relief, setRelief] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const data = await getReliefData();
        setRelief(data);
      } catch (error) {
        console.error('Error fetching relief data:', error);
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
          {lang === 'en' ? 'Loading relief activities...' : 'ত্রাণ কার্যক্রম লোড হচ্ছে...'}
        </p>
      </div>
    );
  }

  return (
    <PageWrapper 
      title={getLocalized(relief?.title)}
      subtitle={getLocalized(relief?.subtitle)}
    >
      <div className="space-y-20">
        {/* Intro Section */}
        <section className="max-w-4xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full font-bold text-sm uppercase tracking-widest">
            <Icons.HeartHandshake size={18} /> {getLocalized(relief?.intro?.tag)}
          </div>
          <h2 className="text-4xl font-display font-bold text-text-main leading-tight">
            {getLocalized(relief?.intro?.title)}
          </h2>
          <p className="text-muted text-lg leading-relaxed">
            {getLocalized(relief?.intro?.description)}
          </p>
        </section>

        {/* Relief Items Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {(relief?.activities || []).map((activity, idx) => {
            const IconComponent = Icons[activity.icon] || Icons.Package;
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
                      {activity.stats.beneficiaries && (
                        <div className="p-4 bg-surface-alt rounded-2xl border border-border">
                          <p className="text-2xl font-display font-bold text-primary">{activity.stats.beneficiaries}</p>
                          <p className="text-xs font-bold text-muted uppercase tracking-widest">{lang === 'en' ? 'Beneficiaries' : 'উপকারভোগী'}</p>
                        </div>
                      )}
                      {activity.stats.partner && (
                        <div className="p-4 bg-surface-alt rounded-2xl border border-border">
                          <p className="text-sm font-bold text-text-main leading-tight">{activity.stats.partner}</p>
                          <p className="text-xs font-bold text-muted uppercase tracking-widest">{lang === 'en' ? 'Partner' : 'অংশীদার'}</p>
                        </div>
                      )}
                      {activity.stats.target && (
                        <div className="p-4 bg-surface-alt rounded-2xl border border-border col-span-2">
                          <p className="text-sm font-bold text-text-main">{getLocalized(activity.stats.target)}</p>
                          <p className="text-xs font-bold text-muted uppercase tracking-widest">{lang === 'en' ? 'Target Group' : 'লক্ষ্যভুক্ত গ্রুপ'}</p>
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

        {/* Impact Section */}
        <section className="bg-primary p-12 lg:p-20 rounded-[4rem] text-white overflow-hidden relative">
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl font-display font-bold leading-tight">
                {getLocalized(relief?.impact?.title)}
              </h2>
              <p className="text-white/80 text-lg leading-relaxed">
                {getLocalized(relief?.impact?.description)}
              </p>
              <div className="flex flex-wrap gap-6">
                {(relief?.impact?.stats || []).map((stat, sIdx) => (
                  <div key={sIdx} className="space-y-1">
                    <p className="text-4xl font-display font-bold">{stat.value}</p>
                    <p className="text-sm font-bold text-white/60 uppercase tracking-widest">{getLocalized(stat.label)}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <button className="px-12 py-6 bg-white text-primary rounded-3xl font-bold text-xl hover:bg-surface-alt transition-all shadow-2xl flex items-center gap-3">
                {getLocalized(relief?.impact?.cta)} <Icons.ArrowRight size={24} />
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
