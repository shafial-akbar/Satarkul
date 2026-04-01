import React from 'react';
import { motion } from 'motion/react';
import { Shirt, ShoppingBag, Gift, Scissors } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '../../context/LanguageContext';

export default function ReliefActivitiesStats() {
  const { t } = useTranslation();
  const { lang } = useLanguage();

  const stats = [
    { 
      label: lang === 'en' ? 'Winter Clothes' : 'শীতবস্ত্র', 
      value: '200', 
      sub: lang === 'en' ? 'People (2024)' : 'ব্যক্তি (২০২৪)', 
      icon: Shirt, 
      color: 'bg-[#1B4F8A]' 
    },
    { 
      label: lang === 'en' ? 'Ramadan Relief' : 'রমজান ত্রাণ', 
      value: '100', 
      sub: lang === 'en' ? 'Families (2024)' : 'পরিবার (২০২৪)', 
      icon: ShoppingBag, 
      color: 'bg-[#006A4E]' 
    },
    { 
      label: lang === 'en' ? 'Annual Gifts' : 'বার্ষিক উপহার', 
      value: '100', 
      sub: lang === 'en' ? 'Children (2024)' : 'শিশু (২০২৪)', 
      icon: Gift, 
      color: 'bg-[#C0392B]' 
    },
    { 
      label: lang === 'en' ? 'Sewing Machines' : 'সেলাই মেশিন', 
      value: '2', 
      sub: lang === 'en' ? 'Distributed (2024)' : 'বিতরণ (২০২৪)', 
      icon: Scissors, 
      color: 'bg-[#F59E0B]' 
    },
  ];

  return (
    <div className="bg-surface p-6 rounded-3xl shadow-xl border border-border h-[400px] flex flex-col">
      <h4 className="text-xl font-display font-bold text-text-main mb-6 text-center">
        {lang === 'en' ? 'Relief Impact' : 'ত্রাণ প্রভাব'}
      </h4>
      <div className="grid grid-cols-2 gap-4 flex-grow">
        {stats.map((stat, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.05 }}
            className={`p-4 rounded-2xl ${stat.color} text-white flex flex-col items-center justify-center text-center shadow-lg`}
          >
            <stat.icon size={24} className="mb-2" />
            <span className="text-2xl font-bold">{stat.value}</span>
            <span className="text-[10px] uppercase tracking-widest font-bold opacity-80">{stat.label}</span>
            <span className="text-[10px] opacity-70 italic leading-tight">{stat.sub}</span>
          </motion.div>
        ))}
      </div>
      <p className="text-xs text-muted text-center mt-4 italic">
        {lang === 'en' ? 'Source: SPUS Relief Records' : 'উৎস: এসপিইউএস ত্রাণ রেকর্ড'}
      </p>
    </div>
  );
}
