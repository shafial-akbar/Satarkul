import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '../../context/LanguageContext';

export default function MemberCompositionChart() {
  const { t } = useTranslation();
  const { lang } = useLanguage();

  const data = [
    { name: lang === 'en' ? 'Men' : 'পুরুষ', value: 291, color: '#006A4E' },
    { name: lang === 'en' ? 'Women' : 'নারী', value: 294, color: '#C0392B' },
    { name: lang === 'en' ? 'Children' : 'শিশু', value: 120, color: '#F59E0B' },
  ];

  return (
    <div className="bg-surface p-6 rounded-3xl shadow-xl border border-border h-[400px] flex flex-col">
      <h4 className="text-xl font-display font-bold text-text-main mb-6 text-center">
        {lang === 'en' ? 'Member Composition' : 'সদস্য বিন্যাস'}
      </h4>
      <div className="flex-grow">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} layout="vertical" margin={{ left: 20, right: 30, top: 20, bottom: 20 }}>
            <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} stroke="var(--color-border)" />
            <XAxis type="number" hide />
            <YAxis 
              dataKey="name" 
              type="category" 
              axisLine={false} 
              tickLine={false} 
              tick={{ fill: 'var(--color-text)', fontWeight: 'bold', fontSize: 14 }}
            />
            <Tooltip 
              cursor={{ fill: 'var(--color-surface-alt)' }}
              contentStyle={{ backgroundColor: 'var(--color-surface)', borderColor: 'var(--color-border)', borderRadius: '12px' }}
            />
            <Bar dataKey="value" radius={[0, 10, 10, 0]} barSize={40}>
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
      <p className="text-xs text-muted text-center mt-4 italic">
        {lang === 'en' ? 'Total: 705 Members' : 'মোট: ৭০৫ জন সদস্য'}
      </p>
    </div>
  );
}
