import React from 'react';
import { motion } from 'motion/react';
import { Eye, Droplet, Stethoscope, Hand, ShieldCheck } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '../../context/LanguageContext';

export default function HealthServicesStats() {
  const { t } = useTranslation();
  const { lang } = useLanguage();

  const stats = [
    { 
      label: lang === 'en' ? 'Eye Camp' : 'চক্ষু ক্যাম্প', 
      value: '180', 
      sub: lang === 'en' ? 'Examined' : 'পরীক্ষিত', 
      icon: Eye, 
      color: 'bg-primary' 
    },
    { 
      label: lang === 'en' ? 'ORS' : 'ওআরএস', 
      value: '500', 
      sub: lang === 'en' ? 'Beneficiaries' : 'উপকারভোগী', 
      icon: Droplet, 
      color: 'bg-secondary' 
    },
    { 
      label: lang === 'en' ? 'Red Card' : 'রেড কার্ড', 
      value: '100', 
      sub: lang === 'en' ? 'Medical Support' : 'চিকিৎসা সহায়তা', 
      icon: ShieldCheck, 
      color: 'bg-accent' 
    },
    { 
      label: lang === 'en' ? 'Deworming' : 'কৃমিনাশক', 
      value: '100', 
      sub: lang === 'en' ? 'Medicine' : 'ঔষধ', 
      icon: Droplet, 
      color: 'bg-[#10B981]' 
    },
    { 
      label: lang === 'en' ? 'ENT Camp' : 'ইএনটি ক্যাম্প', 
      value: '67', 
      sub: lang === 'en' ? 'Examined' : 'পরীক্ষিত', 
      icon: Stethoscope, 
      color: 'bg-primary' 
    },
    { 
      label: lang === 'en' ? 'Hand Wash' : 'হাত ধোয়া', 
      value: '50', 
      sub: lang === 'en' ? 'Beneficiaries' : 'উপকারভোগী', 
      icon: Hand, 
      color: 'bg-secondary' 
    },
  ];

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
