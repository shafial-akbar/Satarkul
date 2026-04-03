import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { useContent } from '../../context/ContentContext';
import PageWrapper from '../../components/layout/PageWrapper';
import { motion } from 'motion/react';
import * as Icons from 'lucide-react';
import WorkAreaGrid from '../../components/infographics/WorkAreaGrid';

export default function WorkAreaPage() {
  const { lang } = useLanguage();
  const { content } = useContent();

  const workArea = content?.about?.workArea;

  const stats = (workArea?.stats || []).map(stat => ({
    ...stat,
    label: stat.label?.[lang] || stat.label?.en || '',
    details: typeof stat.details === 'object' ? (stat.details?.[lang] || stat.details?.en || '') : stat.details,
    icon: Icons[stat.icon] || Icons.MapPin
  }));

  const locationFocusList = (workArea?.locationFocus?.list || []).map(item => ({
    en: item.en,
    bn: item.bn
  }));

  return (
    <PageWrapper 
      title={workArea?.page?.title?.[lang] || (lang === 'en' ? 'Our Work Area' : 'আমাদের কর্ম এলাকা')}
      subtitle={workArea?.page?.subtitle?.[lang] || (lang === 'en' ? 'Expanding our reach to create an inclusive Dhaka.' : 'একটি অন্তর্ভুক্তিমূলক ঢাকা গড়ার জন্য আমাদের পরিধি বিস্তার করছি।')}
    >
      <div className="space-y-32">
        {/* Stats Grid - High Impact */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-8 lg:p-12 rounded-[3rem] lg:rounded-[4rem] shadow-xl border border-border space-y-6 hover:shadow-2xl transition-all group relative overflow-hidden"
            >
              <div className={`absolute top-0 right-0 w-32 h-32 ${stat.bg} rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700`} />
              <div className={`w-20 h-20 ${stat.bg} ${stat.color} rounded-3xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                <stat.icon size={40} />
              </div>
              <div className="space-y-4 relative z-10">
                <p className="text-sm font-bold text-muted uppercase tracking-widest">{stat.label}</p>
                <p className="text-6xl font-display font-bold text-text-main">{stat.value}</p>
                <p className="text-muted leading-relaxed text-lg">{stat.details}</p>
              </div>
            </motion.div>
          ))}
        </section>

        {/* Geographical Breakdown - Visual Section */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/10 text-secondary rounded-full font-bold text-sm uppercase tracking-widest">
              <Icons.Navigation size={18} /> {workArea?.locationFocus?.tag?.[lang] || (lang === 'en' ? 'Location Focus' : 'অবস্থান ফোকাস')}
            </div>
            <h2 className="text-5xl lg:text-6xl font-display font-bold text-text-main leading-tight">
              {workArea?.locationFocus?.title?.[lang] || (lang === 'en' ? 'Strategic Reach Across Dhaka' : 'ঢাকা জুড়ে কৌশলগত বিস্তার')}
            </h2>
            <p className="text-muted text-xl leading-relaxed">
              {workArea?.locationFocus?.description?.[lang] || (lang === 'en' 
                ? 'We are actively working in several wards of Badda Thana and surrounding areas to support the local disabled community through grassroots initiatives.' 
                : 'আমরা তৃণমূল পর্যায়ের উদ্যোগের মাধ্যমে স্থানীয় প্রতিবন্ধী সম্প্রদায়কে সহায়তা করার জন্য বাড্ডা থানা এবং পার্শ্ববর্তী এলাকার বেশ কয়েকটি ওয়ার্ডে সক্রিয়ভাবে কাজ করছি।')}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {locationFocusList.map((item, idx) => (
                <div key={idx} className="flex items-center gap-4 p-4 bg-surface-alt rounded-2xl border border-border group hover:border-primary transition-colors">
                  <div className="w-8 h-8 bg-primary/10 text-primary rounded-full flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                    <Icons.CheckCircle2 size={18} />
                  </div>
                  <span className="font-bold text-text-main">{lang === 'en' ? item.en : item.bn}</span>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-white p-6 lg:p-12 rounded-[3rem] lg:rounded-[5rem] shadow-2xl border border-border"
          >
            <WorkAreaGrid />
          </motion.div>
        </section>

        {/* Call to Action - Map Integration Placeholder */}
        <section className="bg-text-main p-8 lg:p-24 rounded-[3rem] lg:rounded-[5rem] text-white text-center space-y-6 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary via-transparent to-transparent" />
          </div>
          <h2 className="text-4xl lg:text-5xl font-display font-bold relative z-10">
            {lang === 'en' ? 'Visit Our Administrative Office' : 'আমাদের প্রশাসনিক অফিস পরিদর্শন করুন'}
          </h2>
          <p className="text-white/60 text-xl max-w-2xl mx-auto relative z-10">
            {lang === 'en' 
              ? 'Located in the heart of Satarkul, our office is open for consultations and community support.' 
              : 'সাতারকুলের প্রাণকেন্দ্রে অবস্থিত আমাদের অফিস পরামর্শ এবং সম্প্রদায় সহায়তার জন্য উন্মুক্ত।'}
          </p>
          <div className="flex justify-center relative z-10">
            <button className="flex items-center gap-3 px-10 py-5 bg-primary text-white rounded-full font-bold text-lg shadow-2xl hover:scale-105 transition-all">
              {lang === 'en' ? 'Get Directions' : 'দিকনির্দেশ পান'} <Icons.ArrowRight size={24} />
            </button>
          </div>
        </section>
      </div>
    </PageWrapper>
  );
}

