import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { useLanguage } from '../../context/LanguageContext';
import { disabilityBreakdown, schoolStats } from '../../data/educationData';

export default function DisabilityTypeChart() {
  const { lang } = useLanguage();

  const nonDisabledStat = schoolStats.find(s => s.label.en === 'Non-disabled');
  
  const data = [
    ...disabilityBreakdown.map(item => ({
      name: item.label[lang] || item.label['en'],
      value: item.value,
      color: item.color || '#006A4E' // Fallback color
    })),
    { 
      name: lang === 'en' ? 'Non-disabled' : 'অ-প্রতিবন্ধী', 
      value: nonDisabledStat ? nonDisabledStat.value : 0, 
      color: '#27AE60' 
    }
  ];

  // Assign colors based on index or specific mapping if not provided in data
  const colors = ['#006A4E', '#C0392B', '#F59E0B', '#3498DB', '#9B59B6', '#16A085', '#E67E22', '#2C3E50', '#27AE60'];
  data.forEach((item, index) => {
    if (!item.color) item.color = colors[index % colors.length];
  });

  return (
    <div className="bg-white p-6 rounded-3xl shadow-xl border border-border h-[400px] flex flex-col">
      <h4 className="text-xl font-display font-bold text-text-main mb-6 text-center">
        {lang === 'en' ? 'Student Disability Types' : 'শিক্ষার্থীদের প্রতিবন্ধিতার ধরন'}
      </h4>
      <div className="flex-grow">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            layout="vertical"
            margin={{ top: 5, right: 30, left: 40, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} stroke="var(--color-border)" />
            <XAxis type="number" hide />
            <YAxis 
              dataKey="name" 
              type="category" 
              width={100} 
              tick={{ fontSize: 10, fontWeight: 'bold', fill: 'var(--color-text-main)' }} 
            />
            <Tooltip 
              contentStyle={{ backgroundColor: 'var(--color-surface)', borderColor: 'var(--color-border)', borderRadius: '12px' }}
              cursor={{ fill: 'rgba(0,0,0,0.05)' }}
            />
            <Bar dataKey="value" radius={[0, 10, 10, 0]} barSize={20}>
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
