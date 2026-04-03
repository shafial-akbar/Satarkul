import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { useContent } from '../../context/ContentContext';
import PageWrapper from '../../components/layout/PageWrapper';
import { motion } from 'motion/react';
import * as Icons from 'lucide-react';
import MemberCompositionChart from '../../components/infographics/MemberCompositionChart';

export default function MembershipPage() {
  const { lang } = useLanguage();
  const { content } = useContent();

  const membership = content?.about?.membership;

  const stats = (membership?.stats || []).map(stat => ({
    ...stat,
    label: stat.label?.[lang] || stat.label?.en || '',
    icon: Icons[stat.icon] || Icons.Users
  }));

  const benefits = (membership?.benefits?.list || []).map(benefit => ({
    ...benefit,
    title: benefit.title?.[lang] || benefit.title?.en || '',
    desc: benefit.desc?.[lang] || benefit.desc?.en || '',
    icon: Icons[benefit.icon] || Icons.Star
  }));

  const steps = (membership?.steps?.list || []).map(step => ({
    ...step,
    title: step.title?.[lang] || step.title?.en || '',
    desc: step.desc?.[lang] || step.desc?.en || '',
    icon: Icons[step.icon] || Icons.ClipboardCheck
  }));

  return (
    <PageWrapper 
      title={membership?.page?.title?.[lang] || (lang === 'en' ? 'Join Our Community' : 'আমাদের সম্প্রদায়ে যোগ দিন')}
      subtitle={membership?.page?.subtitle?.[lang] || (lang === 'en' ? 'Become a member and contribute to a more inclusive society.' : 'সদস্য হন এবং একটি আরও অন্তর্ভুক্তিমূলক সমাজে অবদান রাখুন।')}
    >
      <div className="space-y-32">
        {/* Stats Grid - High Impact */}
        <section className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-10 rounded-[3rem] shadow-xl border border-border text-center space-y-6 hover:shadow-2xl transition-all group relative overflow-hidden"
            >
              <div className={`absolute top-0 right-0 w-20 h-20 ${stat.bg} rounded-full -mr-10 -mt-10 group-hover:scale-150 transition-transform duration-700`} />
              <div className={`w-16 h-16 mx-auto ${stat.bg} ${stat.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform relative z-10`}>
                <stat.icon size={32} />
              </div>
              <div className="space-y-1 relative z-10">
                <p className="text-sm font-bold text-muted uppercase tracking-widest">{stat.label}</p>
                <p className="text-4xl font-display font-bold text-text-main">{stat.value}</p>
              </div>
            </motion.div>
          ))}
        </section>

        {/* Composition & Chart Section */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-5xl lg:text-6xl font-display font-bold text-text-main leading-tight">
              {lang === 'en' ? 'Diverse Representation' : 'বৈচিত্র্যময় প্রতিনিধিত্ব'}
            </h2>
            <p className="text-muted text-xl leading-relaxed">
              {lang === 'en' 
                ? 'Our membership reflects the diverse community we serve. We ensure that every group, from children to the elderly, has a voice in our organization.' 
                : 'আমাদের সদস্যপদ আমাদের সেবাপ্রাপ্ত বৈচিত্র্যময় সম্প্রদায়ের প্রতিফলন। আমরা নিশ্চিত করি যে শিশু থেকে প্রবীণ পর্যন্ত প্রতিটি গোষ্ঠীর আমাদের সংস্থায় কথা বলার সুযোগ থাকে।'}
            </p>
            <div className="p-10 bg-surface-alt rounded-[3rem] border border-border space-y-8">
              <h3 className="text-2xl font-display font-bold text-text-main">{membership?.childrenBreakdown?.title?.[lang] || (lang === 'en' ? 'Children Breakdown' : 'শিশুদের বিস্তারিত')}</h3>
              <div className="grid grid-cols-2 gap-8">
                <div className="flex items-center gap-6">
                  <div className="w-12 h-12 bg-primary/10 text-primary rounded-2xl flex items-center justify-center shadow-sm">
                    <Icons.Heart size={24} />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-muted uppercase tracking-widest">{content?.common?.labels?.boys?.[lang] || (lang === 'en' ? 'Boys' : 'ছেলে')}</p>
                    <p className="text-3xl font-display font-bold text-text-main">{membership?.childrenBreakdown?.boysValue || '74'}</p>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="w-12 h-12 bg-secondary/10 text-secondary rounded-2xl flex items-center justify-center shadow-sm">
                    <Icons.Heart size={24} />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-muted uppercase tracking-widest">{content?.common?.labels?.girls?.[lang] || (lang === 'en' ? 'Girls' : 'মেয়ে')}</p>
                    <p className="text-3xl font-display font-bold text-text-main">{membership?.childrenBreakdown?.girlsValue || '46'}</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-white p-12 rounded-[5rem] shadow-2xl border border-border"
          >
            <MemberCompositionChart />
          </motion.div>
        </section>

        {/* Benefits Section */}
        <section className="bg-text-main p-16 lg:p-24 rounded-[5rem] text-white space-y-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-primary via-transparent to-transparent" />
          </div>
          <div className="text-center max-w-3xl mx-auto space-y-4 relative z-10">
            <h2 className="text-4xl lg:text-5xl font-display font-bold">
              {membership?.benefits?.title?.[lang] || (lang === 'en' ? 'Why Join Us?' : 'কেন আমাদের সাথে যোগ দেবেন?')}
            </h2>
            <p className="text-white/60 text-lg">
              {membership?.benefits?.subtitle?.[lang] || (lang === 'en' ? 'Unlock exclusive benefits and be part of a meaningful movement.' : 'একচেটিয়া সুবিধাগুলো আনলক করুন এবং একটি অর্থপূর্ণ আন্দোলনের অংশ হন।')}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="bg-white/5 p-10 rounded-[3rem] border border-white/10 hover:bg-white/10 transition-all group">
                <div className={`w-16 h-16 ${benefit.bg} ${benefit.color} rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform`}>
                  <benefit.icon size={32} />
                </div>
                <h3 className="text-2xl font-display font-bold mb-4">{benefit.title}</h3>
                <p className="text-white/60 leading-relaxed">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Application Process - Step by Step */}
        <section className="space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <h2 className="text-4xl lg:text-5xl font-display font-bold text-text-main">
              {membership?.steps?.title?.[lang] || (lang === 'en' ? 'How to Become a Member' : 'কিভাবে সদস্য হবেন')}
            </h2>
            <p className="text-muted text-lg">
              {membership?.steps?.subtitle?.[lang] || (lang === 'en' ? 'Follow these simple steps to join our growing family of change-makers.' : 'পরিবর্তন-প্রস্তুতকারীদের আমাদের ক্রমবর্ধমান পরিবারে যোগ দিতে এই সহজ পদক্ষেপগুলো অনুসরণ করুন।')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-border -translate-y-1/2 z-0" />
            {steps.map((step, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="relative z-10 bg-white p-10 rounded-[3rem] shadow-xl border border-border text-center space-y-6 group hover:border-primary transition-colors"
              >
                <div className="w-20 h-20 bg-surface-alt text-primary rounded-full flex items-center justify-center mx-auto shadow-lg group-hover:bg-primary group-hover:text-white transition-all relative">
                  <step.icon size={36} />
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-text-main text-white rounded-full flex items-center justify-center font-bold text-sm">
                    {idx + 1}
                  </div>
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-display font-bold text-text-main">{step.title}</h3>
                  <p className="text-muted leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center space-y-6">
          <div className="space-y-4">
            <h2 className="text-4xl font-display font-bold text-text-main">{membership?.cta?.title?.[lang] || (lang === 'en' ? 'Ready to Make an Impact?' : 'প্রভাব ফেলতে প্রস্তুত?')}</h2>
            <p className="text-muted text-xl max-w-2xl mx-auto">{membership?.cta?.desc?.[lang] || (lang === 'en' ? 'Join us today and help us build a world where everyone has equal opportunities.' : 'আজই আমাদের সাথে যোগ দিন এবং এমন একটি বিশ্ব গড়তে সাহায্য করুন যেখানে সবার সমান সুযোগ রয়েছে।')}</p>
          </div>
          <div className="flex justify-center gap-4">
            <button className="flex items-center gap-3 px-10 py-5 bg-primary text-white rounded-full font-bold text-lg shadow-2xl hover:scale-105 transition-all">
              {content?.common?.labels?.applyNow?.[lang] || (lang === 'en' ? 'Apply Now' : 'এখনই আবেদন করুন')} <Icons.ArrowRight size={24} />
            </button>
          </div>
        </section>
      </div>
    </PageWrapper>
  );
}

