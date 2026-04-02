import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import { useLanguage } from '../../context/LanguageContext';
import { schoolEnrollmentData } from '../../data/infographicsData';

export default function SchoolEnrollmentChart({ chartData = schoolEnrollmentData }) {
  const { lang } = useLanguage();

  const data = chartData.map(item => ({
    name: item.label[lang] || item.label['en'],
    value: item.value,
    color: item.color
  }));

  const totalStudents = data.reduce((sum, item) => sum + item.value, 0);

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
          ? `Total: ${totalStudents} Students` 
          : `মোট: ${totalStudents} জন শিক্ষার্থী`}
      </p>
    </div>
  );
}
