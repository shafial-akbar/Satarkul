import React, { useState, useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import PageWrapper from '../../components/layout/PageWrapper';
import { motion } from 'motion/react';
import * as Icons from 'lucide-react';
import { getNeedsAssessment } from '../../api/apiClient';

const priorityColors = {
  High: 'bg-red-50 text-red-600 border-red-100',
  Medium: 'bg-orange-50 text-orange-600 border-orange-100',
  Low: 'bg-blue-50 text-blue-600 border-blue-100'
};

export default function NeedsAssessmentPage() {
  const { lang } = useLanguage();
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getNeedsAssessment();
        setData(result);
      } catch (error) {
        console.error('Error fetching needs assessment:', error);
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
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Priority Legend */}
        <div className="flex flex-wrap items-center justify-center gap-6 p-6 bg-white rounded-3xl border border-border">
          <span className="text-sm font-bold uppercase tracking-wider text-muted">
            {lang === 'en' ? 'Priority Levels:' : 'গুরুত্বের পর্যায়:'}
          </span>
          {Object.entries(priorityColors).map(([key, style]) => (
            <div key={key} className="flex items-center gap-2">
              <div className={`w-3 h-3 rounded-full ${style.split(' ')[0]}`} />
              <span className="text-sm font-bold text-text-main">{key}</span>
            </div>
          ))}
        </div>

        {/* Priorities List */}
        <div className="space-y-6">
          {data.priorities.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white rounded-[2rem] border border-border p-8 hover:border-primary transition-all group relative overflow-hidden"
            >
              <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
                <div className={`shrink-0 px-6 py-2 rounded-full border text-sm font-black uppercase tracking-[0.2em] shadow-sm ${priorityColors[item.priority]}`}>
                  {item.priority}
                </div>
                <div className="flex-grow space-y-2">
                  <h3 className="text-2xl font-bold text-text-main group-hover:text-primary transition-colors">{item.title[lang]}</h3>
                  <p className="text-muted leading-relaxed max-w-2xl">{item.desc[lang]}</p>
                </div>
                <div className="shrink-0 w-full md:w-auto p-4 bg-surface-alt rounded-2xl border border-border">
                  <span className="text-xs font-bold text-muted uppercase block mb-1">
                    {lang === 'en' ? 'Current Status' : 'বর্তমান অবস্থা'}
                  </span>
                  <span className="text-sm font-semibold text-text-main">{item.status[lang]}</span>
                </div>
              </div>
              
              {/* Decorative accent */}
              <div className="absolute top-0 right-0 w-1 h-full bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>

        {/* Future Vision CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="p-12 bg-primary rounded-[3rem] text-white text-center space-y-6 shadow-xl relative overflow-hidden"
        >
          <div className="relative z-10">
            <h2 className="text-3xl font-display font-bold">
              {lang === 'en' ? 'Help Us Build the Future' : 'ভবিষ্যৎ গড়তে আমাদের পাশে থাকুন'}
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto leading-relaxed text-lg">
              {lang === 'en' 
                ? 'Your support can turn these priorities into reality. Every contribution brings us one step closer to our vision of an inclusive society.' 
                : 'আপনার সহযোগিতা এই পরিকল্পনাগুলোকে বাস্তবে রূপ দিতে পারে। প্রতিটি অনুদান আমাদের অন্তর্ভুক্তিমূলক সমাজ গঠনের লক্ষ্যকে আরও একধাপ এগিয়ে নিয়ে যায়।'}
            </p>
          </div>
          {/* Decorative shapes */}
          <div className="absolute -top-12 -left-12 w-48 h-48 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-white/10 rounded-full blur-3xl" />
        </motion.div>
      </div>
    </PageWrapper>
  );
}
