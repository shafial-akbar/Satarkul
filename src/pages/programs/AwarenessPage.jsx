import React, { useState, useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import PageWrapper from '../../components/layout/PageWrapper';
import { motion, AnimatePresence } from 'motion/react';
import * as Icons from 'lucide-react';
import { getAwarenessData } from '../../api/apiClient';

export default function AwarenessPage() {
  const { lang } = useLanguage();
  const [awareness, setAwareness] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const data = await getAwarenessData();
        setAwareness(data);
      } catch (error) {
        console.error('Error fetching awareness data:', error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-bg">
        <Icons.Loader2 size={48} className="animate-spin text-primary mb-4" />
        <p className="text-muted font-medium">
          {lang === 'en' ? 'Loading awareness programs...' : 'সচেতনতা কার্যক্রম লোড হচ্ছে...'}
        </p>
      </div>
    );
  }

  const programs = (awareness?.programs || []).map(program => ({
    ...program,
    title: program.title?.[lang] || program.title?.en || '',
    description: program.description?.[lang] || program.description?.en || '',
    date: program.date?.[lang] || program.date?.en || '',
    icon: Icons[program.icon] || Icons.HelpCircle,
    special: program.special ? {
      title: program.special.title?.[lang] || program.special.title?.en || '',
      desc: program.special.desc?.[lang] || program.special.desc?.en || '',
      date: program.special.date?.[lang] || program.special.date?.en || ''
    } : null
  }));

  const advocacyPoints = (awareness?.advocacy?.points || []).map(point => ({
    ...point,
    text: point.text?.[lang] || point.text?.en || '',
    icon: Icons[point.icon] || Icons.FileText
  }));

  return (
    <PageWrapper 
      title={awareness?.title?.[lang]}
      subtitle={awareness?.subtitle?.[lang]}
    >
      <div className="space-y-24">
        
        {/* Intro Section */}
        <section className="bg-surface-alt p-8 lg:p-16 rounded-[3rem] border border-border relative overflow-hidden">
          <div className="max-w-3xl space-y-6 relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white text-primary rounded-full font-bold text-sm uppercase tracking-widest shadow-sm">
              <Icons.Megaphone size={18} /> {awareness?.intro?.tag?.[lang]}
            </div>
            <h2 className="text-4xl lg:text-5xl font-display font-bold text-text-main leading-tight">
              {awareness?.intro?.title?.[lang]}
            </h2>
            <p className="text-muted leading-relaxed text-lg">
              {awareness?.intro?.description?.[lang]}
            </p>
          </div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full translate-x-1/4 -translate-y-1/4 blur-3xl" />
        </section>

        {/* Awareness Grid */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {programs.map((program, idx) => (
            <motion.div
              key={program.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
              className="group bg-white rounded-[2.5rem] border border-border overflow-hidden hover:shadow-2xl transition-all duration-500 flex flex-col"
            >
              <div className="aspect-[16/9] relative overflow-hidden">
                <img 
                  src={program.image} 
                  alt={program.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-6 left-6">
                  <div className={`w-14 h-14 rounded-2xl ${program.color} flex items-center justify-center shadow-lg backdrop-blur-sm`}>
                    <program.icon size={28} />
                  </div>
                </div>
                <div className="absolute bottom-6 right-6">
                  <div className="px-4 py-1.5 bg-white/90 backdrop-blur-md rounded-full text-[10px] font-bold text-muted uppercase tracking-widest shadow-sm">
                    {program.date}
                  </div>
                </div>
              </div>
              
              <div className="p-8 lg:p-10 flex-grow space-y-6">
                <h3 className="text-2xl font-display font-bold text-text-main group-hover:text-primary transition-colors">
                  {program.title}
                </h3>
                <p className="text-muted leading-relaxed">
                  {program.description}
                </p>

                {program.special && (
                  <div className="p-6 bg-amber-50 rounded-3xl border border-amber-100 space-y-3">
                    <div className="flex items-center gap-2 text-amber-700 font-bold text-sm">
                      <Icons.ShieldAlert size={18} /> {program.special.title}
                    </div>
                    <p className="text-xs text-amber-800/80 leading-relaxed">
                      {program.special.desc}
                    </p>
                    <div className="text-[10px] font-bold text-amber-600 uppercase tracking-widest">
                      {program.special.date}
                    </div>
                  </div>
                )}

                {program.id === 'disability-rights' && (
                  <div className="grid grid-cols-2 gap-3 pt-2">
                    {(awareness?.disabilityRightsTags?.[lang] || []).map((tag, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs font-medium text-muted">
                        <Icons.CheckCircle2 size={12} className="text-primary" /> {tag}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </section>

        {/* Rights & Advocacy Section */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative rounded-[3rem] overflow-hidden aspect-square shadow-2xl">
            <img 
              src="https://picsum.photos/seed/awareness/1000/1000" 
              alt="Disability Rights Advocacy" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-12">
              <div className="space-y-2">
                <div className="text-accent font-bold uppercase tracking-widest text-sm">{awareness?.advocacy?.tag?.[lang]}</div>
                <h3 className="text-white text-3xl font-display font-bold">{awareness?.advocacy?.imageTitle?.[lang]}</h3>
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-text-main">
              {awareness?.advocacy?.title?.[lang]}
            </h2>
            <p className="text-muted leading-relaxed text-lg">
              {awareness?.advocacy?.description?.[lang]}
            </p>
            <div className="space-y-4">
              {advocacyPoints.map((item, i) => (
                <div key={i} className="flex items-center gap-4 p-4 bg-white rounded-2xl border border-border hover:border-primary transition-colors cursor-default">
                  <div className="w-10 h-10 bg-primary/10 text-primary rounded-xl flex items-center justify-center">
                    <item.icon size={20} />
                  </div>
                  <span className="font-bold text-text-main">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-secondary p-12 lg:p-20 rounded-[4rem] text-white text-center space-y-8 relative overflow-hidden">
          <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            <h2 className="text-4xl font-display font-bold">{awareness?.ctaTitle?.[lang]}</h2>
            <p className="text-white/80 text-lg">
              {awareness?.ctaDescription?.[lang]}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="px-10 py-4 bg-white text-secondary rounded-full font-bold text-lg hover:scale-105 transition-all shadow-xl">
                {awareness?.ctaButton1?.[lang]}
              </button>
              <button className="px-10 py-4 bg-transparent border-2 border-white text-white rounded-full font-bold text-lg hover:bg-white/10 transition-all">
                {awareness?.ctaButton2?.[lang]}
              </button>
            </div>
          </div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full translate-x-1/2 -translate-y-1/2 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/20 rounded-full -translate-x-1/4 translate-y-1/4 blur-3xl" />
        </section>

      </div>
    </PageWrapper>
  );
}
