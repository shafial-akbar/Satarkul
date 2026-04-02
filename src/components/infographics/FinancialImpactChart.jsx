import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { useLanguage } from '../../context/LanguageContext';
import { financialImpactData } from '../../data/infographicsData';

export default function FinancialImpactChart({ chartData = financialImpactData }) {
  const { lang } = useLanguage();

  const data = chartData.map(item => ({
    name: item.label[lang] || item.label['en'],
    value: item.value,
    color: item.color
  }));

  const totalValue = data.reduce((sum, item) => sum + item.value, 0);

  return (
    <div className="bg-surface p-6 rounded-3xl shadow-xl border border-border h-[400px] flex flex-col">
      <h4 className="text-xl font-display font-bold text-text-main mb-6 text-center">
        {lang === 'en' ? 'Financial Impact (BDT)' : 'আর্থিক প্রভাব (টাকা)'}
      </h4>
      <div className="flex-grow">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="var(--color-border)" />
            <XAxis 
              dataKey="name" 
              axisLine={false} 
              tickLine={false} 
              tick={{ fill: 'var(--color-text)', fontWeight: 'bold', fontSize: 10 }}
            />
            <YAxis 
              axisLine={false} 
              tickLine={false} 
              tick={{ fill: 'var(--color-text)', fontWeight: 'bold', fontSize: 10 }}
              tickFormatter={(value) => `৳${value/1000}k`}
            />
            <Tooltip 
              cursor={{ fill: 'var(--color-surface-alt)' }}
              contentStyle={{ backgroundColor: 'var(--color-surface)', borderColor: 'var(--color-border)', borderRadius: '12px' }}
              formatter={(value) => [`৳${value.toLocaleString()}`, lang === 'en' ? 'Amount' : 'পরিমাণ']}
            />
            <Bar dataKey="value" radius={[10, 10, 0, 0]} barSize={40}>
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
      <p className="text-xs text-muted text-center mt-4 italic">
        {lang === 'en' 
          ? `Total Impact: ৳${(totalValue / 1000000).toFixed(2)}M+` 
          : `মোট প্রভাব: ${(totalValue / 100000).toFixed(1)} লক্ষ+ টাকা`}
      </p>
    </div>
  );
}
