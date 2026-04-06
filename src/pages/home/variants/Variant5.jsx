import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '../../../context/LanguageContext';
import { useTheme } from '../../../context/ThemeContext';
import { 
  ArrowRight, 
  Cpu,
  Zap,
  Shield,
  Activity,
  Globe,
  Users,
  Terminal,
  Code
} from 'lucide-react';
import { Link } from 'react-router-dom';

import { useContent } from '../../../context/ContentContext';

export default function Variant5() {
  const { t } = useTranslation();
  const { lang } = useLanguage();
  const { currentTheme } = useTheme();
  const { content } = useContent();

  return (
    <div className="bg-bg min-h-screen font-sans selection:bg-primary selection:text-white text-text-main overflow-hidden">
      {/* Hero Section - Tech & Immersive */}
      <section className="relative min-h-screen flex items-center justify-center pt-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(var(--color-primary-rgb),0.15),transparent_70%)]" />
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center space-y-12">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-6 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary font-mono text-sm tracking-widest uppercase"
          >
            <Terminal size={16} /> {content?.home?.hero?.slides?.[0]?.tag?.[lang] || (lang === 'en' ? 'System Status: Empowering Lives' : 'সিস্টেম স্ট্যাটাস: জীবন ক্ষমতায়ন')}
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-6xl lg:text-9xl font-display font-bold leading-none tracking-tighter"
          >
            {content?.home?.hero?.slides?.[0]?.title?.[lang] || (lang === 'en' ? 'INNOVATING FOR INCLUSION' : 'অন্তর্ভুক্তির জন্য উদ্ভাবন')}
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl lg:text-2xl text-muted max-w-3xl mx-auto leading-relaxed font-light"
          >
            {content?.home?.hero?.slides?.[0]?.subtitle?.[lang] || (lang === 'en' 
              ? 'Leveraging technology and modern care to build a future where disability is never a barrier to potential.' 
              : 'প্রযুক্তি এবং আধুনিক যত্নের সমন্বয়ে এমন একটি ভবিষ্যৎ গড়ে তোলা যেখানে প্রতিবন্ধকতা সম্ভাবনার পথে বাধা হবে না।')}
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap justify-center gap-6"
          >
            <Link to="/support/donate" className="px-12 py-6 bg-primary text-white rounded-none font-bold text-xl hover:bg-primary-dark transition-all flex items-center gap-3 shadow-[0_0_30px_rgba(var(--color-primary-rgb),0.3)] group">
              {content?.common?.buttons?.donateNow?.[lang] || (lang === 'en' ? 'Donate Now' : 'এখনই দান করুন')} <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform" />
            </Link>
            <Link to="/programs" className="px-12 py-6 bg-transparent border border-border text-text-main rounded-none font-bold text-xl hover:bg-surface transition-all">
              {content?.home?.programs?.viewAll?.[lang] || (lang === 'en' ? 'Explore Tech' : 'প্রযুক্তি দেখুন')}
            </Link>
          </motion.div>
        </div>

        {/* Decorative Tech Lines */}
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
        <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-secondary/30 to-transparent -rotate-12" />
      </section>

      {/* Digital Stats */}
      <section className="py-24 bg-surface border-y border-border">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-12">
          {[
            { label: content?.home?.stats?.members?.[lang] || (lang === 'en' ? 'Total Members' : 'মোট সদস্য'), value: '690+', icon: Users },
            { label: content?.home?.stats?.students?.[lang] || (lang === 'en' ? 'Students' : 'শিক্ষার্থী'), value: '100+', icon: Zap },
            { label: lang === 'en' ? 'Impact Wards' : 'প্রভাবিত ওয়ার্ড', value: '11', icon: Globe },
            { label: lang === 'en' ? 'Success Rate' : 'সাফল্যের হার', value: '98%', icon: Activity },
          ].map((stat, idx) => (
            <div key={idx} className="space-y-4 group">
              <div className="flex items-center gap-3 text-primary">
                <stat.icon size={20} />
                <span className="font-mono text-xs uppercase tracking-widest opacity-60">{stat.label}</span>
              </div>
              <p className="text-5xl font-display font-bold group-hover:text-primary transition-colors">{stat.value}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Tech-Forward Programs */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 space-y-20">
          <div className="flex flex-col lg:flex-row justify-between items-end gap-8">
            <div className="space-y-4">
              <h2 className="text-primary font-mono text-sm tracking-[0.3em] uppercase">{content?.home?.about?.tag?.[lang] || (lang === 'en' ? 'Our Solutions' : 'আমাদের সমাধান')}</h2>
              <h3 className="text-4xl lg:text-6xl font-display font-bold leading-tight">
                {content?.home?.about?.title?.[lang] || (lang === 'en' ? 'Tech-Driven Support' : 'প্রযুক্তি-চালিত সহায়তা')}
              </h3>
            </div>
            <p className="text-muted max-w-md text-lg">
              {content?.home?.about?.description?.[lang] || (lang === 'en' ? 'We use modern tools and methodologies to provide the best possible care for our members.' : 'আমরা আমাদের সদস্যদের সর্বোত্তম যত্ন প্রদানের জন্য আধুনিক সরঞ্জাম এবং পদ্ধতি ব্যবহার করি।')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
            {[
              { title: content?.nav?.education?.[lang] || (lang === 'en' ? 'Education' : 'শিক্ষা'), icon: Code, desc: content?.home?.programs?.list?.[0]?.desc?.[lang] || (lang === 'en' ? 'Digital literacy and specialized learning tools.' : 'ডিজিটাল সাক্ষরতা এবং বিশেষায়িত শিক্ষার সরঞ্জাম।') },
              { title: content?.nav?.health?.[lang] || (lang === 'en' ? 'Health' : 'স্বাস্থ্য'), icon: Activity, desc: content?.home?.programs?.list?.[1]?.desc?.[lang] || (lang === 'en' ? 'Modern therapy and health monitoring systems.' : 'আধুনিক থেরাপি এবং স্বাস্থ্য পর্যবেক্ষণ ব্যবস্থা।') },
              { title: content?.nav?.skills?.[lang] || (lang === 'en' ? 'Skills' : 'দক্ষতা'), icon: Cpu, desc: content?.home?.programs?.list?.[2]?.desc?.[lang] || (lang === 'en' ? 'Vocational training in modern technologies.' : 'আধুনিক প্রযুক্তিতে বৃত্তিমূলক প্রশিক্ষণ।') },
            ].map((program, idx) => (
              <div key={idx} className="bg-surface p-12 border border-border hover:bg-bg transition-all group relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-30 transition-opacity">
                  <program.icon size={120} />
                </div>
                <div className="space-y-8 relative z-10">
                  <div className="w-16 h-16 bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all">
                    <program.icon size={32} />
                  </div>
                  <div className="space-y-4">
                    <h4 className="text-3xl font-display font-bold">{program.title}</h4>
                    <p className="text-muted leading-relaxed">{program.desc}</p>
                  </div>
                  <Link to="/programs" className="inline-flex items-center gap-2 font-bold text-primary group-hover:gap-4 transition-all uppercase tracking-widest text-sm">
                    {content?.common?.buttons?.learnMore?.[lang] || (lang === 'en' ? 'Learn More' : 'আরও জানুন')} <ArrowRight size={18} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Assistive Devices - Feature Highlight */}
      <section className="py-24 lg:py-32 bg-surface overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="relative">
            <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full" />
            <img 
              src="https://picsum.photos/seed/assistive-tech/1200/900" 
              className="rounded-none shadow-2xl relative z-10 grayscale hover:grayscale-0 transition-all duration-700"
              alt="Assistive Tech"
              referrerPolicy="no-referrer"
            />
            <div className="absolute -bottom-10 -right-10 bg-bg p-8 border border-border z-20 hidden md:block">
              <p className="text-primary font-mono text-4xl font-bold">500+</p>
              <p className="text-xs uppercase tracking-widest opacity-60">{lang === 'en' ? 'Devices Distributed' : 'ডিভাইস বিতরণ করা হয়েছে'}</p>
            </div>
          </div>
          <div className="space-y-6">
            <div className="space-y-6">
              <h3 className="text-4xl lg:text-6xl font-display font-bold leading-tight">
                {content?.home?.programs?.title?.[lang] || (lang === 'en' ? 'Assistive Technology for All' : 'সবার জন্য সহায়ক প্রযুক্তি')}
              </h3>
              <p className="text-xl text-muted leading-relaxed">
                {content?.home?.programs?.desc?.[lang] || (lang === 'en' 
                  ? 'We provide modern assistive devices to help our members gain independence and mobility in their daily lives.' 
                  : 'আমরা আমাদের সদস্যদের দৈনন্দিন জীবনে স্বাধীনতা এবং গতিশীলতা অর্জনে সহায়তা করার জন্য আধুনিক সহায়ক সরঞ্জাম সরবরাহ করি।')}
              </p>
            </div>
            <ul className="space-y-4">
              {[
                lang === 'en' ? 'Customized Wheelchairs' : 'কাস্টমাইজড হুইলচেয়ার',
                lang === 'en' ? 'Hearing Aids & Visual Tools' : 'শ্রবণ সহায়ক এবং চাক্ষুষ সরঞ্জাম',
                lang === 'en' ? 'Smart Mobility Solutions' : 'স্মার্ট মবিলিটি সমাধান',
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-4 text-lg font-medium">
                  <Shield size={20} className="text-primary" /> {item}
                </li>
              ))}
            </ul>
            <Link to="/programs/assistive-devices" className="inline-flex px-10 py-5 bg-text-main text-white hover:bg-primary transition-all font-bold">
              {lang === 'en' ? 'View All Devices' : 'সব ডিভাইস দেখুন'}
            </Link>
          </div>
        </div>
      </section>

      {/* CTA - Futuristic Feel */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary opacity-10" />
        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center space-y-12">
          <Zap size={64} className="mx-auto text-primary animate-pulse" />
          <h2 className="text-5xl lg:text-8xl font-display font-bold leading-none tracking-tighter">
            {content?.home?.cta?.title?.[lang] || (lang === 'en' ? 'BE A PART OF THE FUTURE' : 'ভবিষ্যতের অংশ হোন')}
          </h2>
          <p className="text-2xl text-muted font-light">
            {content?.home?.cta?.desc?.[lang] || (lang === 'en' ? 'Join us in building a more inclusive and technologically advanced society for everyone.' : 'সবার জন্য আরও অন্তর্ভুক্তিমূলক এবং প্রযুক্তিগতভাবে উন্নত সমাজ গঠনে আমাদের সাথে যোগ দিন।')}
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link to="/support/donate" className="px-12 py-6 bg-primary text-white font-bold text-2xl hover:shadow-[0_0_50px_rgba(var(--color-primary-rgb),0.5)] transition-all">
              {content?.common?.buttons?.donateNow?.[lang] || (lang === 'en' ? 'Donate Now' : 'এখনই দান করুন')}
            </Link>
            <Link to="/contact" className="px-12 py-6 bg-transparent border border-border text-text-main font-bold text-2xl hover:bg-surface transition-all">
              {content?.nav?.contact?.[lang] || (lang === 'en' ? 'Contact' : 'যোগাযোগ')}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

