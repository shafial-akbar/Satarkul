import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '../../../context/LanguageContext';
import { useTheme } from '../../../context/ThemeContext';
import { 
  ArrowRight, 
  Heart, 
  Sparkles,
  BookOpen,
  Smile,
  Sun,
  Star,
  CheckCircle2,
  Play
} from 'lucide-react';
import { Link } from 'react-router-dom';

import { useContent } from '../../../context/ContentContext';

export default function Variant3() {
  const { t } = useTranslation();
  const { lang } = useLanguage();
  const { currentTheme } = useTheme();
  const { content } = useContent();

  return (
    <div className="bg-bg min-h-screen font-sans selection:bg-primary selection:text-white overflow-hidden">
      {/* Hero Section - Playful & Vibrant */}
      <section className="relative min-h-screen flex items-center pt-20">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [0, 90, 0],
              x: [0, 50, 0],
              y: [0, -50, 0]
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute -top-24 -left-24 w-96 h-96 bg-primary/10 rounded-full blur-3xl" 
          />
          <motion.div 
            animate={{ 
              scale: [1, 1.5, 1],
              x: [0, -100, 0],
              y: [0, 100, 0]
            }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/2 -right-48 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-[120px]" 
          />
        </div>

        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-flex items-center gap-3 px-6 py-3 bg-white rounded-full shadow-xl border border-border"
            >
              <Sun className="text-primary animate-spin-slow" size={24} />
              <span className="text-text-main font-bold tracking-wide uppercase text-sm">
                {content?.home?.hero?.slides?.[0]?.tag?.[lang] || (lang === 'en' ? 'Spreading Joy & Hope' : 'আনন্দ ও আশা ছড়িয়ে দিচ্ছি')}
              </span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-6xl lg:text-8xl font-display font-bold text-text-main leading-[0.95]"
            >
              {content?.home?.hero?.slides?.[0]?.title?.[lang] || (lang === 'en' ? 'Every Child Deserves a Bright Future' : 'প্রতিটি শিশুর একটি উজ্জ্বল ভবিষ্যৎ প্রাপ্য')}
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl lg:text-2xl text-muted leading-relaxed max-w-xl"
            >
              {content?.home?.hero?.slides?.[0]?.subtitle?.[lang] || (lang === 'en' 
                ? 'Join our mission to provide inclusive education and healthcare for children with disabilities.' 
                : 'প্রতিবন্ধী শিশুদের জন্য অন্তর্ভুক্তিমূলক শিক্ষা এবং স্বাস্থ্যসেবা প্রদানের আমাদের মিশনে যোগ দিন।')}
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-6"
            >
              <Link to="/support/donate" className="px-12 py-6 bg-primary text-white rounded-[2.5rem] font-bold text-xl hover:shadow-2xl hover:scale-105 transition-all flex items-center gap-3 shadow-xl shadow-primary/20">
                <Heart size={24} /> {content?.common?.buttons?.donateNow?.[lang] || (lang === 'en' ? 'Donate Now' : 'এখনই দান করুন')}
              </Link>
              <button className="w-20 h-20 bg-white text-primary rounded-full flex items-center justify-center shadow-xl hover:scale-110 transition-all border border-border group">
                <Play size={32} fill="currentColor" className="ml-1 group-hover:scale-110 transition-transform" />
              </button>
            </motion.div>
          </div>

          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="relative z-10 rounded-[5rem] overflow-hidden shadow-2xl border-[12px] border-white"
            >
              <img 
                src="https://picsum.photos/seed/happy-child/1200/1500" 
                alt="Happy Child"
                referrerPolicy="no-referrer"
              />
            </motion.div>
            
            {/* Floating Elements */}
            <motion.div 
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -top-10 -right-10 w-32 h-32 bg-secondary rounded-3xl shadow-2xl flex items-center justify-center text-white rotate-12 z-20"
            >
              <Sparkles size={48} />
            </motion.div>
            <motion.div 
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 5, repeat: Infinity }}
              className="absolute -bottom-10 -left-10 w-40 h-40 bg-accent rounded-full shadow-2xl flex flex-col items-center justify-center text-white -rotate-12 z-20"
            >
              <p className="text-3xl font-bold">100+</p>
              <p className="text-xs font-bold uppercase tracking-widest">{content?.home?.stats?.students?.[lang] || (lang === 'en' ? 'Students' : 'শিক্ষার্থী')}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How We Help - Step by Step */}
      <section className="py-24 lg:py-32 bg-surface">
        <div className="max-w-7xl mx-auto px-6 space-y-20">
          <div className="text-center space-y-4">
            <h2 className="text-4xl lg:text-6xl font-display font-bold text-text-main">{content?.home?.about?.title?.[lang] || (lang === 'en' ? 'Our Simple Process' : 'আমাদের সহজ প্রক্রিয়া')}</h2>
            <p className="text-muted text-lg max-w-2xl mx-auto">{content?.home?.about?.description?.[lang] || (lang === 'en' ? 'We follow a holistic approach to ensure every member receives the care they deserve.' : 'আমরা প্রতিটি সদস্যের যথাযথ যত্ন নিশ্চিত করতে একটি সামগ্রিক পদ্ধতি অনুসরণ করি।')}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
            <div className="hidden lg:block absolute top-1/2 left-0 w-full h-1 bg-dashed border-t-4 border-dashed border-primary/20 -translate-y-1/2 z-0" />
            
            {[
              { title: lang === 'en' ? 'Identify Needs' : 'প্রয়োজন চিহ্নিত করা', icon: Star, color: 'bg-primary' },
              { title: lang === 'en' ? 'Provide Support' : 'সহায়তা প্রদান', icon: Heart, color: 'bg-secondary' },
              { title: lang === 'en' ? 'Empower Lives' : 'জীবন ক্ষমতায়ন', icon: Smile, color: 'bg-accent' },
            ].map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.2 }}
                className="relative z-10 flex flex-col items-center text-center space-y-6"
              >
                <div className={`w-24 h-24 ${step.color} text-white rounded-[2.5rem] flex items-center justify-center shadow-2xl shadow-current/20`}>
                  <step.icon size={40} />
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-display font-bold text-text-main">{step.title}</h3>
                  <p className="text-muted leading-relaxed">
                    {lang === 'en' ? 'We carefully assess and provide tailored resources for each individual.' : 'আমরা প্রতিটি ব্যক্তির জন্য সতর্কতার সাথে মূল্যায়ন করি এবং উপযোগী সম্পদ প্রদান করি।'}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Masonry Grid */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 space-y-16">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8">
            <div className="space-y-4">
              <p className="text-primary font-bold uppercase tracking-widest text-sm">{content?.home?.programs?.tag?.[lang] || (lang === 'en' ? 'What We Do' : 'আমরা যা করি')}</p>
              <h2 className="text-4xl lg:text-6xl font-display font-bold text-text-main leading-tight">
                {content?.home?.programs?.title?.[lang] || (lang === 'en' ? 'Programs that Change Lives' : 'জীবন পরিবর্তনকারী প্রোগ্রামসমূহ')}
              </h2>
            </div>
            <Link to="/programs" className="px-8 py-4 bg-surface-alt text-primary rounded-2xl font-bold hover:bg-primary hover:text-white transition-all">
              {content?.home?.programs?.viewAll?.[lang] || (lang === 'en' ? 'Explore All Programs' : 'সব প্রোগ্রাম দেখুন')}
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 bg-primary text-white p-12 rounded-[4rem] flex flex-col justify-between min-h-[400px] relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-700" />
              <div className="space-y-6 relative z-10">
                <BookOpen size={64} className="mb-4" />
                <h3 className="text-4xl font-display font-bold">{content?.nav?.education?.[lang] || (lang === 'en' ? 'Education' : 'শিক্ষা')}</h3>
                <p className="text-white/80 text-xl max-w-xl">
                  {content?.home?.programs?.list?.[0]?.desc?.[lang] || (lang === 'en' ? 'Our inclusive school provides specialized education for children with various disabilities.' : 'আমাদের অন্তর্ভুক্তিমূলক স্কুল বিভিন্ন প্রতিবন্ধী শিশুদের জন্য বিশেষায়িত শিক্ষা প্রদান করে।')}
                </p>
              </div>
              <Link to="/programs/education" className="inline-flex items-center gap-2 font-bold text-xl hover:gap-4 transition-all relative z-10">
                {content?.common?.buttons?.learnMore?.[lang] || (lang === 'en' ? 'Learn More' : 'আরও জানুন')} <ArrowRight size={24} />
              </Link>
            </div>

            <div className="bg-secondary text-white p-12 rounded-[4rem] flex flex-col justify-between min-h-[400px] group">
              <div className="space-y-6">
                <HeartPulse size={64} className="mb-4" />
                <h3 className="text-3xl font-display font-bold">{content?.nav?.health?.[lang] || (lang === 'en' ? 'Health' : 'স্বাস্থ্য')}</h3>
                <p className="text-white/80">
                  {content?.home?.programs?.list?.[1]?.desc?.[lang] || (lang === 'en' ? 'Regular health camps and therapy sessions for our members.' : 'আমাদের সদস্যদের জন্য নিয়মিত স্বাস্থ্য ক্যাম্প এবং থেরাপি সেশন।')}
                </p>
              </div>
              <Link to="/programs/health" className="inline-flex items-center gap-2 font-bold hover:gap-4 transition-all">
                {content?.common?.buttons?.learnMore?.[lang] || (lang === 'en' ? 'Learn More' : 'আরও জানুন')} <ArrowRight size={20} />
              </Link>
            </div>

            <div className="bg-accent text-white p-12 rounded-[4rem] flex flex-col justify-between min-h-[400px] group">
              <div className="space-y-6">
                <Sparkles size={64} className="mb-4" />
                <h3 className="text-3xl font-display font-bold">{content?.nav?.skills?.[lang] || (lang === 'en' ? 'Skills' : 'দক্ষতা')}</h3>
                <p className="text-white/80">
                  {content?.home?.programs?.list?.[2]?.desc?.[lang] || (lang === 'en' ? 'Vocational training to help adults achieve financial independence.' : 'প্রাপ্তবয়স্কদের আর্থিক স্বাধীনতা অর্জনে সহায়তা করার জন্য বৃত্তিমূলক প্রশিক্ষণ।')}
                </p>
              </div>
              <Link to="/programs/skill-development" className="inline-flex items-center gap-2 font-bold hover:gap-4 transition-all">
                {content?.common?.buttons?.learnMore?.[lang] || (lang === 'en' ? 'Learn More' : 'আরও জানুন')} <ArrowRight size={20} />
              </Link>
            </div>

            <div className="lg:col-span-2 bg-surface-alt p-12 rounded-[4rem] border border-border flex flex-col lg:flex-row gap-12 items-center">
              <div className="lg:w-1/2 space-y-6">
                <h3 className="text-3xl font-display font-bold text-text-main">{lang === 'en' ? 'Sponsor a Child Today' : 'আজই একটি শিশুকে স্পনসর করুন'}</h3>
                <p className="text-muted leading-relaxed">
                  {lang === 'en' 
                    ? 'Your monthly support can provide education, food, and medical care for a child in need.' 
                    : 'আপনার মাসিক সহায়তা প্রয়োজনে থাকা একটি শিশুর শিক্ষা, খাদ্য এবং চিকিৎসা সেবা প্রদান করতে পারে।'}
                </p>
                <Link to="/support/donate" className="inline-flex px-8 py-4 bg-primary text-white rounded-2xl font-bold hover:shadow-xl transition-all">
                  {lang === 'en' ? 'Start Sponsoring' : 'স্পনসর করা শুরু করুন'}
                </Link>
              </div>
              <div className="lg:w-1/2 grid grid-cols-2 gap-4">
                {[1, 2, 3, 4].map(i => (
                  <img 
                    key={i}
                    src={`https://picsum.photos/seed/child-${i}/200/200`} 
                    className="rounded-3xl shadow-lg hover:scale-105 transition-transform"
                    alt="Child"
                    referrerPolicy="no-referrer"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials / Happy Faces */}
      <section className="py-24 lg:py-32 bg-primary text-white text-center">
        <div className="max-w-4xl mx-auto px-6 space-y-12">
          <Smile size={80} className="mx-auto text-accent" />
          <h2 className="text-4xl lg:text-6xl font-display font-bold leading-tight">
            {content?.home?.testimonials?.list?.[0]?.quote?.[lang] || (lang === 'en' ? '"SPUS gave my son a reason to smile and a path to follow."' : '"এসপিইউএস আমার ছেলেকে হাসির কারণ এবং চলার পথ দিয়েছে।"')}
          </h2>
          <div className="flex flex-col items-center space-y-2">
            <p className="text-2xl font-bold">{content?.home?.testimonials?.list?.[0]?.author?.[lang] || 'Rahima Begum'}</p>
            <p className="text-white/60 font-medium uppercase tracking-widest text-sm">{content?.home?.testimonials?.list?.[0]?.role?.[lang] || (lang === 'en' ? 'Mother of a Student' : 'একজন শিক্ষার্থীর মা')}</p>
          </div>
        </div>
      </section>
    </div>
  );
}

