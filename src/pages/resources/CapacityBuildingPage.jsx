import React, { useState, useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import PageWrapper from '../../components/layout/PageWrapper';
import { motion } from 'motion/react';
import * as Icons from 'lucide-react';
import { getTrainingData } from '../../api/apiClient';

export default function CapacityBuildingPage() {
  const { lang } = useLanguage();
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getTrainingData();
        setData(result);
      } catch (error) {
        console.error('Error fetching training data:', error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-bg">
        <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <PageWrapper 
      title={data.title[lang]} 
      subtitle={data.subtitle[lang]}
    >
      <div className="max-w-4xl mx-auto space-y-16">
        {/* Intro */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-primary/5 p-8 rounded-3xl border border-primary/10"
        >
          <p className="text-lg text-text-main leading-relaxed italic">
            "{data.intro[lang]}"
          </p>
        </motion.div>

        {/* Training Types */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {data.trainingTypes.map((item, idx) => {
            const Icon = Icons[item.icon] || Icons.BookOpen;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-8 rounded-3xl shadow-sm border border-border group hover:border-primary transition-all duration-300"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform">
                  <Icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-text-main mb-4">{item.title[lang]}</h3>
                <p className="text-muted leading-relaxed">{item.desc[lang]}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Resources */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <h2 className="text-3xl font-display font-bold text-text-main">
            {lang === 'en' ? 'Training Resources' : 'প্রশিক্ষণ উপকরণ'}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {data.resources.map((res, idx) => (
              <a 
                key={idx}
                href={res.link}
                className="flex items-center gap-4 p-6 bg-surface-alt rounded-2xl border border-border hover:border-primary hover:bg-white transition-all group shadow-sm"
              >
                <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-primary shadow-sm group-hover:scale-110 transition-transform">
                  <Icons.FileText size={20} />
                </div>
                <span className="font-medium text-text-main group-hover:text-primary transition-colors">{res.title[lang]}</span>
                <Icons.Download size={18} className="ml-auto text-muted group-hover:text-primary transition-colors" />
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </PageWrapper>
  );
}
