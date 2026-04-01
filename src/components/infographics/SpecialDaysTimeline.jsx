import React from 'react';
import { motion } from 'motion/react';
import { Calendar, Star } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '../../context/LanguageContext';

export default function SpecialDaysTimeline() {
  const { t } = useTranslation();
  const { lang } = useLanguage();

  const days = [
    { date: '21 Feb', title: 'Mother Language Day', titleBn: 'মাতৃভাষা দিবস' },
    { date: '8 Mar', title: 'Women\'s Day', titleBn: 'নারী দিবস' },
    { date: '17 Mar', title: 'Children\'s Day', titleBn: 'শিশু দিবস' },
    { date: '26 Mar', title: 'Independence Day', titleBn: 'স্বাধীনতা দিবস' },
    { date: '12 May', title: 'Mother\'s Day', titleBn: 'মা দিবস' },
    { date: '15 Aug', title: 'Mourning Day', titleBn: 'শোক দিবস' },
    { date: '15 Oct', title: 'White Cane Day', titleBn: 'সাদাছড়ি দিবস' },
    { date: '3 Dec', title: 'Disability Day', titleBn: 'প্রতিবন্ধী দিবস' },
    { date: '16 Dec', title: 'Victory Day', titleBn: 'বিজয় দিবস' },
  ];

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
                <h5 className="font-bold text-text-main text-sm">{lang === 'en' ? day.title : day.titleBn}</h5>
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
