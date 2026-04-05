import React, { useState, useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import PageWrapper from '../../components/layout/PageWrapper';
import { motion, AnimatePresence } from 'motion/react';
import * as Icons from 'lucide-react';
import { getSpecialProgramsData } from '../../api/apiClient';

export default function SpecialProgramsPage() {
  const { lang } = useLanguage();
  const [specialProgramsData, setSpecialProgramsData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const data = await getSpecialProgramsData();
        setSpecialProgramsData(data);
      } catch (error) {
        console.error('Error fetching special programs data:', error);
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
          {lang === 'en' ? 'Loading special programs...' : 'বিশেষ কার্যক্রম লোড হচ্ছে...'}
        </p>
      </div>
    );
  }

  const programs = (specialProgramsData?.programs || []).map(program => ({
    ...program,
    title: program.title?.[lang] || program.title?.en || '',
    desc: program.desc?.[lang] || program.desc?.en || '',
    timeline: program.timeline?.[lang] || program.timeline?.en || '',
    icon: Icons[program.icon] || Icons.HelpCircle,
    features: (program.features || []).map(f => f[lang] || f.en || '')
  }));

  return (
    <PageWrapper 
      title={specialProgramsData?.title?.[lang]}
      subtitle={specialProgramsData?.subtitle?.[lang]}
    >
      <div className="space-y-24">
        {/* Hero Section */}
        <section className="relative rounded-[4rem] overflow-hidden bg-surface-alt p-12 lg:p-20 border border-border">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
            <div className="space-y-6">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white text-primary rounded-full font-bold text-sm uppercase tracking-widest shadow-sm">
                  <Icons.Sparkles size={18} /> {specialProgramsData?.hero?.tag?.[lang]}
                </div>
                <h2 className="text-4xl lg:text-5xl font-display font-bold text-text-main leading-tight">
                  {specialProgramsData?.hero?.title?.[lang]}
                </h2>
              </div>
              <p className="text-muted leading-relaxed text-lg">
                {specialProgramsData?.hero?.description?.[lang]}
              </p>
              <div className="flex flex-wrap gap-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center">
                    <Icons.Users size={24} />
                  </div>
                  <div>
                    <p className="font-bold text-text-main">{specialProgramsData?.hero?.stats?.[0]?.value?.[lang] || '2026'}</p>
                    <p className="text-xs text-muted uppercase tracking-widest">{specialProgramsData?.hero?.stats?.[0]?.label?.[lang]}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-secondary/10 text-secondary rounded-full flex items-center justify-center">
                    <Icons.Activity size={24} />
                  </div>
                  <div>
                    <p className="font-bold text-text-main">{specialProgramsData?.hero?.stats?.[1]?.value?.[lang]}</p>
                    <p className="text-xs text-muted uppercase tracking-widest">{specialProgramsData?.hero?.stats?.[1]?.label?.[lang]}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://picsum.photos/seed/specialcare/1200/900" 
                alt="Special Care" 
                className="rounded-[3rem] shadow-2xl w-full aspect-[4/3] object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-accent rounded-full flex items-center justify-center text-white font-bold text-center p-4 shadow-xl rotate-12">
                {specialProgramsData?.hero?.badge?.[lang]}
              </div>
            </div>
          </div>
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl translate-x-1/4 translate-y-1/4" />
        </section>

        {/* Programs Grid */}
        <section className="space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-text-main">
              {specialProgramsData?.listTitle?.[lang]}
            </h2>
            <p className="text-muted">
              {specialProgramsData?.listSubtitle?.[lang]}
            </p>
          </div>
          <div className="grid grid-cols-1 gap-12">
            {programs.map((program, idx) => {
              const ProgramIcon = program.icon;
              const isEven = idx % 2 === 0;
              return (
                <motion.div 
                  key={program.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center bg-white p-8 lg:p-12 rounded-[4rem] border border-border hover:border-primary/30 shadow-xl transition-all duration-500`}
                >
                  <div className="w-full lg:w-1/2 space-y-8">
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className={`w-14 h-14 ${program.color} rounded-2xl flex items-center justify-center shadow-sm`}>
                          <ProgramIcon size={28} />
                        </div>
                        <div className="flex items-center gap-2 text-xs font-bold text-secondary uppercase tracking-widest">
                          <Icons.Calendar size={14} /> {program.timeline}
                        </div>
                      </div>
                      <h3 className="text-3xl lg:text-4xl font-display font-bold text-text-main leading-tight">
                        {program.title}
                      </h3>
                    </div>
                    <p className="text-muted text-lg leading-relaxed">
                      {program.desc}
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {program.features.map((feature, fIdx) => (
                        <div key={fIdx} className="flex items-center gap-3 p-3 bg-surface-alt rounded-xl border border-border/50">
                          <Icons.CheckCircle2 size={20} className="text-primary shrink-0" />
                          <span className="font-bold text-text-main text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="w-full lg:w-1/2">
                    <div className="relative group">
                      <img 
                        src={program.image || `https://picsum.photos/seed/${program.id}/800/600`} 
                        alt={program.title} 
                        className="rounded-[3rem] shadow-lg w-full aspect-[4/3] object-cover group-hover:scale-[1.02] transition-transform duration-700"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-[3rem]" />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* Impact Quote */}
        <section className="text-center py-20 px-8 bg-surface-alt rounded-[4rem] border border-border relative overflow-hidden">
          <Icons.Quote size={80} className="absolute top-10 left-10 text-primary/5 -rotate-12" />
          <div className="max-w-4xl mx-auto space-y-8 relative z-10">
            <h2 className="text-3xl lg:text-5xl font-display font-bold text-text-main italic leading-tight">
              {specialProgramsData?.quote?.text?.[lang]}
            </h2>
            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-1 bg-primary rounded-full" />
              <p className="font-bold text-muted uppercase tracking-widest">{specialProgramsData?.quote?.author?.[lang]}</p>
              <div className="w-12 h-1 bg-primary rounded-full" />
            </div>
          </div>
        </section>
      </div>
    </PageWrapper>
  );
}
