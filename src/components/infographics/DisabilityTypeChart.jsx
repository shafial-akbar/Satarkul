import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { useLanguage } from '../../context/LanguageContext';
import { disabilityTypeData } from '../../data/infographicsData';

export default function DisabilityTypeChart({ chartData = disabilityTypeData }) {
  const { lang } = useLanguage();

  const data = chartData.map(item => ({
    name: item.label[lang] || item.label['en'],
    value: item.value,
    color: item.color || '#006A4E'
  }));

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
