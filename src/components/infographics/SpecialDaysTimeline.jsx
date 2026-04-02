import React from 'react';
import { motion } from 'motion/react';
import { Star } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { specialDaysTimelineData } from '../../data/infographicsData';

export default function SpecialDaysTimeline({ chartData = specialDaysTimelineData }) {
  const { lang } = useLanguage();

  const days = chartData.map(item => ({
    date: item.date,
    title: item.label[lang] || item.label['en']
  }));

  return (
    <div className="bg-surface p-6 rounded-3xl shadow-xl border border-border h-[400px] flex flex-col overflow-hidden">
      <h4 className="text-xl font-display font-bold text-text-main mb-6 text-center">
        {lang === 'en' ? 'Special Day Observances' : 'বিশেষ দিবস পালন'}
      </h4>
      <div className="flex-grow overflow-y-auto pr-2 custom-scrollbar">
        <div className="relative pl-8 space-y-6 before:content-[''] before:absolute before:left-3 before:top-0 before:bottom-0 before:w-0.5 before:bg-border">
          {days.map((day, idx) => (
            <motion.div
              key={idx}
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: idx * 0.1 }}
              className="relative"
            >
              <div className="absolute -left-8 top-1.5 w-6 h-6 rounded-full bg-primary border-4 border-white shadow-md flex items-center justify-center">
                <Star size={10} className="text-white" />
              </div>
              <div className="p-3 bg-surface-alt rounded-xl border border-border shadow-sm">
                <span className="text-xs font-bold text-secondary uppercase tracking-widest">{day.date}</span>
                <h5 className="font-bold text-text-main text-sm">{day.title}</h5>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <p className="text-xs text-muted text-center mt-4 italic">
        {lang === 'en' ? '10+ Days Observed Annually' : 'বার্ষিক ১০+ দিবস পালিত হয়'}
      </p>
    </div>
  );
}
