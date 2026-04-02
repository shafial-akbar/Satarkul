import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import { useLanguage } from '../../context/LanguageContext';
import { skillTrainingData } from '../../data/infographicsData';

export default function SkillTrainingChart({ chartData = skillTrainingData }) {
  const { lang } = useLanguage();

  const data = chartData.map(item => ({
    name: item.label[lang] || item.label['en'],
    value: item.value,
    color: item.color
  }));

  const totalTrained = data.reduce((sum, item) => sum + item.value, 0);

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
        {lang === 'en' ? `Total: ${totalTrained} Members Trained` : `মোট: ${totalTrained} জন সদস্য প্রশিক্ষিত`}
      </p>
    </div>
  );
}
