import React from 'react';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '../../context/LanguageContext';
import PageWrapper from '../../components/layout/PageWrapper';
import { motion } from 'motion/react';
import * as Icons from 'lucide-react';
import { specialPrograms } from '../../data/specialProgramsData';

export default function SpecialProgramsPage() {
  const { t } = useTranslation();
  const { lang } = useLanguage();

  const getLocalized = (obj) => {
    if (!obj) return '';
    return obj[lang] || obj['en'] || '';
  };

  return (
    <PageWrapper 
      title={lang === 'en' ? 'Special Programs' : 'বিশেষ কার্যক্রম'}
      subtitle={lang === 'en' ? 'Innovative initiatives designed for specialized care and development.' : 'বিশেষায়িত যত্ন এবং উন্নয়নের জন্য ডিজাইন করা উদ্ভাবনী উদ্যোগ।'}
    >
      <div className="space-y-24">
        {/* Hero Section */}
        <section className="relative rounded-[4rem] overflow-hidden bg-surface-alt p-12 lg:p-20 border border-border">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
            <div className="space-y-6">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white text-primary rounded-full font-bold text-sm uppercase tracking-widest shadow-sm">
                  <Icons.Sparkles size={18} /> {lang === 'en' ? 'Specialized Care' : 'বিশেষায়িত যত্ন'}
                </div>
                <h2 className="text-4xl lg:text-5xl font-display font-bold text-text-main leading-tight">
                  {lang === 'en' ? 'Dedicated Support for Unique Needs' : 'অনন্য প্রয়োজনের জন্য নিবেদিত সহায়তা'}
                </h2>
              </div>
              <p className="text-muted leading-relaxed text-lg">
                {lang === 'en' 
                  ? 'Our special programs focus on providing targeted interventions that go beyond standard care. We collaborate with international partners and experts to bring world-class therapy and educational support directly to our students.' 
                  : 'আমাদের বিশেষ কার্যক্রমগুলো সাধারণ যত্নের বাইরে লক্ষ্যভিত্তিক হস্তক্ষেপ প্রদানের উপর দৃষ্টি নিবদ্ধ করে। আমরা আমাদের শিক্ষার্থীদের জন্য বিশ্বমানের থেরাপি এবং শিক্ষা সহায়তা সরাসরি পৌঁছে দিতে আন্তর্জাতিক অংশীদার এবং বিশেষজ্ঞদের সাথে কাজ করি।'}
              </p>
              <div className="flex flex-wrap gap-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center">
                    <Icons.Users size={24} />
                  </div>
                  <div>
                    <p className="font-bold text-text-main">2026</p>
                    <p className="text-xs text-muted uppercase tracking-widest">{lang === 'en' ? 'Upcoming Training' : 'আসন্ন প্রশিক্ষণ'}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-secondary/10 text-secondary rounded-full flex items-center justify-center">
                    <Icons.Activity size={24} />
                  </div>
                  <div>
                    <p className="font-bold text-text-main">{lang === 'en' ? 'Ongoing' : 'চলমান'}</p>
                    <p className="text-xs text-muted uppercase tracking-widest">{lang === 'en' ? 'Therapy Services' : 'থেরাপি সেবা'}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop" 
                alt="Special Care" 
                className="rounded-[3rem] shadow-2xl w-full aspect-[4/3] object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-accent rounded-full flex items-center justify-center text-white font-bold text-center p-4 shadow-xl rotate-12">
                {lang === 'en' ? 'Expert Support' : 'বিশেষজ্ঞ সহায়তা'}
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
              {lang === 'en' ? 'Our Specialized Initiatives' : 'আমাদের বিশেষায়িত উদ্যোগসমূহ'}
            </h2>
            <p className="text-muted">
              {lang === 'en' ? 'Discover the specific programs we run to ensure the best possible outcomes for our members.' : 'আমাদের সদস্যদের জন্য সর্বোত্তম ফলাফল নিশ্চিত করতে আমরা যে নির্দিষ্ট কার্যক্রমগুলো পরিচালনা করি তা আবিষ্কার করুন।'}
            </p>
          </div>
          <div className="grid grid-cols-1 gap-12">
            {specialPrograms.map((program, idx) => {
              const ProgramIcon = Icons[program.icon] || Icons.HelpCircle;
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
                          <Icons.Calendar size={14} /> {getLocalized(program.timeline)}
                        </div>
                      </div>
                      <h3 className="text-3xl lg:text-4xl font-display font-bold text-text-main leading-tight">
                        {getLocalized(program.title)}
                      </h3>
                    </div>
                    <p className="text-muted text-lg leading-relaxed">
                      {getLocalized(program.desc)}
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {program.features.map((feature, fIdx) => (
                        <div key={fIdx} className="flex items-center gap-3 p-3 bg-surface-alt rounded-xl border border-border/50">
                          <Icons.CheckCircle2 size={20} className="text-primary shrink-0" />
                          <span className="font-bold text-text-main text-sm">{getLocalized(feature)}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="w-full lg:w-1/2">
                    <div className="relative group">
                      <img 
                        src={program.image || `https://picsum.photos/seed/${program.id}/800/600`} 
                        alt={getLocalized(program.title)} 
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
              {lang === 'en' 
                ? '"Every child has a different learning style and pace. Each child is unique, not only capable of learning but also capable of succeeding."' 
                : '"প্রতিটি শিশুর শেখার ধরণ এবং গতি আলাদা। প্রতিটি শিশু অনন্য, তারা কেবল শিখতেই সক্ষম নয় বরং সফল হতেও সক্ষম।"'}
            </h2>
            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-1 bg-primary rounded-full" />
              <p className="font-bold text-muted uppercase tracking-widest">{lang === 'en' ? 'Our Philosophy' : 'আমাদের দর্শন'}</p>
              <div className="w-12 h-1 bg-primary rounded-full" />
            </div>
          </div>
        </section>
      </div>
    </PageWrapper>
  );
}
