import React from 'react';
import { motion } from 'motion/react';
import { Eye, Droplet, Stethoscope, Hand, ShieldCheck } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { healthImpactData } from '../../data/infographicsData';

const iconMap = {
  Eye,
  Droplet,
  ShieldCheck,
  Stethoscope,
  Hand
};

export default function HealthServicesStats({ chartData = healthImpactData }) {
  const { lang } = useLanguage();

  const stats = chartData.map(item => ({
    label: item.label[lang] || item.label['en'],
    value: item.value,
    sub: item.sub[lang] || item.sub['en'],
    icon: iconMap[item.icon] || Droplet,
    color: item.color
  }));

  return (
    <div className="bg-surface p-6 rounded-3xl shadow-xl border border-border h-[400px] flex flex-col overflow-y-auto">
      <h4 className="text-xl font-display font-bold text-text-main mb-6 text-center">
        {lang === 'en' ? 'Health Impact 2024' : 'স্বাস্থ্য প্রভাব ২০২৪'}
      </h4>
      <div className="grid grid-cols-2 gap-4">
        {stats.map((stat, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.05 }}
            className={`p-4 rounded-2xl ${stat.color} text-white flex flex-col items-center justify-center text-center shadow-lg`}
          >
            <stat.icon size={24} className="mb-2" />
            <span className="text-2xl font-bold">{stat.value}</span>
            <span className="text-[10px] uppercase tracking-widest font-bold opacity-80">{stat.label}</span>
            <span className="text-[10px] opacity-70 italic">{stat.sub}</span>
          </motion.div>
        ))}
      </div>
      <p className="text-xs text-muted text-center mt-4 italic">
        {lang === 'en' ? 'Source: SPUS Annual Report 2024' : 'উৎস: এসপিইউএস বার্ষিক প্রতিবেদন ২০২৪'}
      </p>
    </div>
  );
}
