import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import PageWrapper from '../../components/layout/PageWrapper';
import { motion } from 'motion/react';
import { FileText, ShieldCheck, Landmark, Scale, CheckCircle2, Download } from 'lucide-react';

export default function LegalStatusPage() {
  const { lang } = useLanguage();

  const registrations = [
    {
      title: lang === 'en' ? 'Social Welfare Registration' : 'সমাজসেবা নিবন্ধন',
      number: '(Dha)-09437',
      date: lang === 'en' ? '14th June 2017' : '১৪ই জুন ২০১৭',
      authority: lang === 'en' ? 'Department of Social Welfare, Dhaka' : 'সমাজসেবা অধিদপ্তর, ঢাকা',
      icon: ShieldCheck,
      color: 'text-primary',
      bg: 'bg-primary/10'
    },
    {
      title: lang === 'en' ? 'NGO Affairs Bureau' : 'এনজিও বিষয়ক ব্যুরো',
      number: '৩১৬৭',
      date: '04/07/2018',
      authority: lang === 'en' ? 'NGO Affairs Bureau, Prime Minister\'s Office' : 'এনজিও বিষয়ক ব্যুরো, প্রধানমন্ত্রীর কার্যালয়',
      icon: Landmark,
      color: 'text-secondary',
      bg: 'bg-secondary/10'
    },
    {
      title: lang === 'en' ? 'Joint Stock Registration' : 'যৌথ মূলধন নিবন্ধন',
      number: 'S-12242/2015',
      date: '14/07/2015',
      authority: lang === 'en' ? 'Registrar of Joint Stock Companies & Firms' : 'যৌথ মূলধন কোম্পানি ও ফার্মসমূহের পরিদপ্তর',
      icon: Scale,
      color: 'text-accent',
      bg: 'bg-accent/10'
    }
  ];

  return (
    <PageWrapper 
      title={lang === 'en' ? 'Legal Status & Compliance' : 'আইনি মর্যাদা এবং সম্মতি'}
      subtitle={lang === 'en' ? 'Transparency and accountability are the foundations of our organization.' : 'স্বচ্ছতা এবং জবাবদিহিতা আমাদের সংগঠনের ভিত্তি।'}
    >
      <div className="max-w-6xl mx-auto space-y-24">
        {/* Intro Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="w-20 h-20 bg-primary/10 text-primary rounded-3xl flex items-center justify-center shadow-lg">
              <FileText size={40} />
            </div>
            <h2 className="text-4xl lg:text-5xl font-display font-bold text-text-main leading-tight">
              {lang === 'en' ? 'Fully Registered & Governed' : 'সম্পূর্ণ নিবন্ধিত এবং পরিচালিত'}
            </h2>
            <p className="text-muted text-xl leading-relaxed">
              {lang === 'en' 
                ? 'BPKS Satarkul is a non-profit, non-political, and non-governmental organization registered under the laws of Bangladesh. We maintain strict compliance with all regulatory bodies.' 
                : 'বিপিকেএস সাতারকুল একটি অলাভজনক, অরাজনৈতিক এবং বেসরকারি সংস্থা যা বাংলাদেশের আইনের অধীনে নিবন্ধিত। আমরা সকল নিয়ন্ত্রক সংস্থার সাথে কঠোর সম্মতি বজায় রাখি।'}
            </p>
            <ul className="space-y-4">
              {[
                { en: 'Regular Audit Compliance', bn: 'নিয়মিত অডিট সম্মতি' },
                { en: 'Transparent Financial Reporting', bn: 'স্বচ্ছ আর্থিক প্রতিবেদন' },
                { en: 'Ethical Governance Standards', bn: 'নৈতিক শাসন মান' }
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3 text-text-main font-bold">
                  <CheckCircle2 className="text-primary" size={20} />
                  {lang === 'en' ? item.en : item.bn}
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full" />
            <div className="relative bg-white p-12 rounded-[4rem] shadow-2xl border border-border space-y-8">
              <div className="space-y-2">
                <h3 className="text-2xl font-display font-bold text-text-main">{lang === 'en' ? 'Official Documents' : 'অফিসিয়াল নথি'}</h3>
                <p className="text-muted">{lang === 'en' ? 'Download our registration certificates and legal papers.' : 'আমাদের নিবন্ধন সনদ এবং আইনি কাগজপত্র ডাউনলোড করুন।'}</p>
              </div>
              <div className="space-y-4">
                {registrations.map((reg, idx) => (
                  <button key={idx} className="w-full flex items-center justify-between p-6 bg-surface-alt rounded-2xl border border-border hover:border-primary transition-all group">
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 ${reg.bg} ${reg.color} rounded-xl flex items-center justify-center`}>
                        <reg.icon size={24} />
                      </div>
                      <span className="font-bold text-text-main text-left">{reg.title}</span>
                    </div>
                    <Download size={20} className="text-muted group-hover:text-primary transition-colors" />
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Detailed Cards */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {registrations.map((reg, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-10 rounded-[3rem] shadow-xl border border-border space-y-8 relative overflow-hidden group"
            >
              <div className={`absolute top-0 right-0 w-24 h-24 ${reg.bg} rounded-full -mr-12 -mt-12 opacity-50 group-hover:scale-150 transition-transform duration-700`} />
              <div className={`w-16 h-16 ${reg.bg} ${reg.color} rounded-2xl flex items-center justify-center shadow-lg relative z-10`}>
                <reg.icon size={32} />
              </div>
              <div className="space-y-6 relative z-10">
                <div className="space-y-2">
                  <h3 className="text-2xl font-display font-bold text-text-main">{reg.title}</h3>
                  <p className="text-sm font-bold text-primary uppercase tracking-widest">{reg.authority}</p>
                </div>
                <div className="grid grid-cols-2 gap-4 pt-6 border-t border-border">
                  <div className="space-y-1">
                    <p className="text-[10px] uppercase tracking-tighter text-muted font-bold">{lang === 'en' ? 'Reg Number' : 'নিবন্ধন নম্বর'}</p>
                    <p className="font-mono font-bold text-text-main">{reg.number}</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-[10px] uppercase tracking-tighter text-muted font-bold">{lang === 'en' ? 'Date' : 'তারিখ'}</p>
                    <p className="font-mono font-bold text-text-main">{reg.date}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </section>
      </div>
    </PageWrapper>
  );
}

