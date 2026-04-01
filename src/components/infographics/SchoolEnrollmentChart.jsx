import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '../../context/LanguageContext';
import { schoolStats } from '../../data/educationData';

export default function SchoolEnrollmentChart() {
  const { t } = useTranslation();
  const { lang } = useLanguage();

  const boysStat = schoolStats.find(s => s.label.en === 'Boys');
  const girlsStat = schoolStats.find(s => s.label.en === 'Girls');
  const totalStat = schoolStats.find(s => s.label.en === 'Total Students');

  const data = [
    { name: lang === 'en' ? 'Boys' : 'বালক', value: boysStat ? boysStat.value : 0, color: '#1B4F8A' },
    { name: lang === 'en' ? 'Girls' : 'বালিকা', value: girlsStat ? girlsStat.value : 0, color: '#C0392B' },
  ];

  return (
    <div className="bg-surface p-6 rounded-3xl shadow-xl border border-border h-[400px] flex flex-col">
      <h4 className="text-xl font-display font-bold text-text-main mb-6 text-center">
        {lang === 'en' ? 'School Enrollment (Gender)' : 'স্কুল ভর্তি (লিঙ্গ)'}
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
        {lang === 'en' 
          ? `Total: ${totalStat ? totalStat.value : 0} Students` 
          : `মোট: ${totalStat ? totalStat.value : 0} জন শিক্ষার্থী`}
      </p>
    </div>
  );
}
