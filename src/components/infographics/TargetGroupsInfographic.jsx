import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import { useLanguage } from '../../context/LanguageContext';
import { targetGroupsData } from '../../data/infographicsData';

export default function TargetGroupsInfographic({ chartData = targetGroupsData }) {
  const { lang } = useLanguage();

  const data = chartData.map(item => ({
    name: item.label[lang] || item.label['en'],
    value: item.value,
    color: item.color
  }));

  return (
    <div className="bg-white p-8 rounded-[3rem] shadow-xl border border-border h-[500px] flex flex-col">
      <h4 className="text-2xl font-display font-bold text-text-main mb-2 text-center">
        {lang === 'en' ? 'Target Groups Focus' : 'লক্ষ্যভুক্ত গোষ্ঠী'}
      </h4>
      <div className="flex-grow">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="45%"
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
              contentStyle={{ 
                backgroundColor: 'var(--color-surface)', 
                borderColor: 'var(--color-border)', 
                borderRadius: '12px',
                color: 'var(--color-text-main)'
              }}
            />
            <Legend 
              verticalAlign="bottom" 
              align="center"
              iconType="circle"
              wrapperStyle={{ paddingTop: '20px', fontSize: '12px' }}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="mt-6 pt-4 border-t border-border/50">
        <p className="text-sm text-primary font-bold text-center italic">
          {lang === 'en' ? 'Prioritizing women and children with disabilities.' : 'প্রতিবন্ধী নারী ও শিশুদের অগ্রাধিকার প্রদান।'}
        </p>
      </div>
    </div>
  );
}
