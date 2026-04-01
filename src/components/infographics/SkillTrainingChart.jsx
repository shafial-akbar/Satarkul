import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '../../context/LanguageContext';

export default function SkillTrainingChart() {
  const { t } = useTranslation();
  const { lang } = useLanguage();

  const data = [
    { name: lang === 'en' ? 'Tailoring' : 'দর্জি বিজ্ঞান', value: 10, color: '#6D28D9' },
    { name: lang === 'en' ? 'Beads' : 'হস্তশিল্প', value: 10, color: '#10B981' },
    { name: lang === 'en' ? 'Painting' : 'পেইন্টিং', value: 10, color: '#F59E0B' },
  ];

  return (
    <div className="bg-surface p-6 rounded-3xl shadow-xl border border-border h-[400px] flex flex-col">
      <h4 className="text-xl font-display font-bold text-text-main mb-6 text-center">
        {lang === 'en' ? 'Skill Training Distribution' : 'দক্ষতা প্রশিক্ষণ বিন্যাস'}
      </h4>
      <div className="flex-grow">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={100}
              paddingAngle={5}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip 
              contentStyle={{ backgroundColor: 'var(--color-surface)', borderColor: 'var(--color-border)', borderRadius: '12px' }}
            />
            <Legend verticalAlign="bottom" height={36} />
          </PieChart>
        </ResponsiveContainer>
      </div>
      <p className="text-xs text-muted text-center mt-4 italic">
        {lang === 'en' ? 'Total: 30 Members Trained' : 'মোট: ৩০ জন সদস্য প্রশিক্ষিত'}
      </p>
    </div>
  );
}
