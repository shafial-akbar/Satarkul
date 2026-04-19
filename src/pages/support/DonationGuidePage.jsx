import React, { useState, useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import PageWrapper from '../../components/layout/PageWrapper';
import { motion } from 'motion/react';
import * as Icons from 'lucide-react';
import { getDonationGuide } from '../../api/apiClient';

const levelColors = {
  High: 'bg-red-500 text-white',
  Medium: 'bg-amber-500 text-white',
  Low: 'bg-blue-500 text-white'
};

export default function DonationGuidePage() {
  const { lang } = useLanguage();
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getDonationGuide();
        setData(result);
      } catch (error) {
        console.error('Error fetching donation guide:', error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-bg">
        <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <PageWrapper 
      title={data.title[lang]} 
      subtitle={data.subtitle[lang]}
    >
      <div className="max-w-6xl mx-auto space-y-20">
        
        {/* Philosophy / Intro Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-[2.5rem] border border-border overflow-hidden shadow-sm flex flex-col md:flex-row"
        >
          <div className="md:w-1/3 bg-primary/5 p-12 flex flex-col justify-center border-b md:border-b-0 md:border-r border-border">
            <h2 className="text-3xl font-display font-black text-text-main leading-tight">
              {data.philosophy.title[lang]}
            </h2>
          </div>
          <div className="md:w-2/3 p-12 flex items-center">
            <p className="text-lg text-muted leading-relaxed italic">
              "{data.philosophy.desc[lang]}"
            </p>
          </div>
        </motion.div>

        {/* Priority Dashboard */}
        <section className="space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-2">
              <h2 className="text-4xl font-display font-bold text-text-main leading-tight">
                {lang === 'en' ? 'Priority Wishlist' : 'চাহিদার অগ্রাধিকার তালিকা'}
              </h2>
              <p className="text-muted tracking-wide uppercase text-xs font-black">
                {lang === 'en' ? 'Updated monthly based on child development progress' : 'শিশুদের উন্নয়ন অগ্রগতির ভিত্তিতে প্রতি মাসে আপডেট করা হয়'}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {data.priorities.map((item, idx) => {
              const Icon = Icons[item.icon] || Icons.Gift;
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white p-8 rounded-[2rem] border border-border hover:border-primary hover:shadow-xl transition-all group flex gap-6"
                >
                  <div className="shrink-0">
                    <div className="w-16 h-16 bg-surface-alt rounded-2xl flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                      <Icon size={32} />
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <h3 className="text-xl font-bold text-text-main">{item.title[lang]}</h3>
                      <span className={`px-2 py-0.5 rounded-md text-[10px] font-black uppercase tracking-tighter ${levelColors[item.level]}`}>
                        {item.level}
                      </span>
                    </div>
                    <p className="text-muted leading-relaxed font-medium">
                      {item.items[lang]}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* Dos and Don'ts Grid */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 pt-8">
          {/* Dos */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="flex items-center gap-4 text-emerald-600">
              <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center shadow-sm">
                <Icons.CheckCircle2 size={24} />
              </div>
              <h3 className="text-2xl font-bold">{lang === 'en' ? 'Best Practices (Pros)' : 'উত্তম চর্চা (করণীয়)'}</h3>
            </div>
            <div className="space-y-4">
              {data.guidelines.dos.map((text, idx) => (
                <div key={idx} className="flex gap-4 p-5 bg-emerald-50/50 rounded-2xl border border-emerald-100 items-start group hover:bg-emerald-50 transition-colors">
                  <div className="w-6 h-6 rounded-full bg-emerald-600 text-white flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5 shadow-sm group-hover:scale-110 transition-transform">
                    {idx + 1}
                  </div>
                  <p className="text-text-main font-medium leading-relaxed">{text[lang]}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Don'ts */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="flex items-center gap-4 text-rose-600">
              <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center shadow-sm">
                <Icons.XCircle size={24} />
              </div>
              <h3 className="text-2xl font-bold">{lang === 'en' ? 'Items to Avoid (Cons)' : 'যা দেওয়া এড়িয়ে চলবেন'}</h3>
            </div>
            <div className="space-y-4">
              {data.guidelines.donts.map((text, idx) => (
                <div key={idx} className="flex gap-4 p-5 bg-rose-50/50 rounded-2xl border border-rose-100 items-start group hover:bg-rose-50 transition-colors">
                  <Icons.AlertCircle size={20} className="shrink-0 mt-1" />
                  <p className="text-text-main font-medium leading-relaxed">{text[lang]}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Coordination CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-primary p-12 lg:p-16 rounded-[3rem] text-white text-center space-y-8 relative overflow-hidden shadow-2xl"
        >
          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            <h2 className="text-3xl font-display font-bold">
              {lang === 'en' ? 'Coordinate Your Kindness' : 'আপনার মহানুভবতাকে সঠিক পথে চালিত করুন'}
            </h2>
            <p className="text-white/80 text-lg leading-relaxed">
              {data.cta[lang]}
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <button className="px-8 py-4 bg-white text-primary rounded-2xl font-bold hover:shadow-xl hover:-translate-y-1 transition-all flex items-center gap-2">
                <Icons.Phone size={18} />
                {lang === 'en' ? 'Call Office' : 'অফিসে কল করুন'}
              </button>
              <button className="px-8 py-4 bg-primary/20 backdrop-blur-md border border-white/20 text-white rounded-2xl font-bold hover:bg-white/10 transition-all flex items-center gap-2">
                <Icons.Mail size={18} />
                {lang === 'en' ? 'Send Email' : 'ইমেইল করুন'}
              </button>
            </div>
          </div>
          {/* Decorative shapes */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-x-1/4 -translate-y-1/4" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/20 rounded-full blur-3xl translate-x-1/4 translate-y-1/4" />
        </motion.div>

      </div>
    </PageWrapper>
  );
}
