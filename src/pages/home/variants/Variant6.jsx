import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '../../../context/LanguageContext';
import { useTheme } from '../../../context/ThemeContext';
import { 
  ArrowRight, 
  Award,
  Star,
  ShieldCheck,
  Gem,
  Crown,
  Heart,
  Users,
  Sparkles
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Variant6() {
  const { t } = useTranslation();
  const { lang } = useLanguage();
  const { setCurrentTheme, themes } = useTheme();

  useEffect(() => {
    const theme = themes.find(t => t.id === 'purple-dream');
    if (theme) setCurrentTheme(theme);
  }, [setCurrentTheme, themes]);

  return (
    <div className="bg-bg min-h-screen font-sans text-text-main selection:bg-primary selection:text-white">
      {/* Hero Section - Prestige & Elegance */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1516733725897-1aa73b87c8e8?q=80&w=2070&auto=format&fit=crop" 
            className="w-full h-full object-cover opacity-20 grayscale"
            alt="Prestige Background"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-bg via-transparent to-bg" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center space-y-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-3 px-8 py-3 bg-primary/5 border border-primary/20 rounded-full text-primary font-serif italic text-lg tracking-wide"
          >
            <Crown size={20} /> {lang === 'en' ? 'A Legacy of Care and Excellence' : 'যত্ন এবং শ্রেষ্ঠত্বের একটি উত্তরাধিকার'}
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-7xl lg:text-[10rem] font-display font-light leading-[0.85] tracking-tighter"
          >
            {lang === 'en' ? 'PRECIOUS\nLIVES' : 'অমূল্য\nজীবন'}
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-2xl lg:text-3xl text-muted max-w-3xl mx-auto leading-relaxed font-serif italic"
          >
            {lang === 'en' 
              ? 'Providing the highest standard of inclusive support for our community since 2017.' 
              : '২০১৭ সাল থেকে আমাদের সম্প্রদায়ের জন্য সর্বোচ্চ মানের অন্তর্ভুক্তিমূলক সহায়তা প্রদান করছি।'}
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap justify-center gap-8 pt-8"
          >
            <Link to="/support/donate" className="px-16 py-6 bg-primary text-white font-bold text-xl hover:bg-primary-dark transition-all shadow-2xl flex items-center gap-3 group">
              {t('common.donateNow')} <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform" />
            </Link>
            <Link to="/about" className="px-16 py-6 bg-transparent border border-border text-text-main font-bold text-xl hover:bg-surface transition-all">
              {lang === 'en' ? 'OUR HERITAGE' : 'আমাদের ঐতিহ্য'}
            </Link>
          </motion.div>
        </div>

        {/* Vertical Rail Text */}
        <div className="absolute left-10 top-1/2 -translate-y-1/2 hidden xl:block">
          <p className="writing-mode-vertical-rl rotate-180 text-[10px] uppercase tracking-[0.5em] opacity-30 font-bold">
            ESTABLISHED 2017 • DHAKA • BANGLADESH
          </p>
        </div>
      </section>

      {/* Prestige Stats - Grid Layout */}
      <section className="py-24 border-y border-border bg-surface">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1">
          {[
            { label: t('home.stats.members'), value: '690+', icon: Users },
            { label: lang === 'en' ? 'Years of Excellence' : 'শ্রেষ্ঠত্বের বছর', value: '7+', icon: Award },
            { label: lang === 'en' ? 'Certified Programs' : 'প্রত্যয়িত প্রোগ্রাম', value: '100%', icon: ShieldCheck },
            { label: lang === 'en' ? 'Impact Rating' : 'প্রভাব রেটিং', value: '5.0', icon: Star },
          ].map((stat, idx) => (
            <div key={idx} className="p-12 bg-bg flex flex-col items-center text-center space-y-4 group hover:bg-primary/5 transition-colors">
              <stat.icon size={32} className="text-primary opacity-50 group-hover:opacity-100 transition-opacity" />
              <p className="text-5xl font-display font-bold">{stat.value}</p>
              <p className="text-xs uppercase tracking-[0.2em] font-bold opacity-60">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Split Layout - Mission & Vision */}
      <section className="grid grid-cols-1 lg:grid-cols-2 min-h-[80vh]">
        <div className="relative overflow-hidden group">
          <img 
            src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070&auto=format&fit=crop" 
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-110 group-hover:scale-100"
            alt="Mission"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-primary/20 mix-blend-multiply" />
          <div className="absolute inset-0 flex items-center justify-center p-20 text-white text-center">
            <div className="space-y-8">
              <Gem size={64} className="mx-auto opacity-50" />
              <h3 className="text-5xl lg:text-7xl font-display font-bold leading-tight">
                {lang === 'en' ? 'A Vision of Pure Inclusion' : 'বিশুদ্ধ অন্তর্ভুক্তির একটি দৃষ্টিভঙ্গি'}
              </h3>
              <p className="text-xl font-serif italic opacity-80">
                {lang === 'en' ? 'We believe every life is a masterpiece waiting to be discovered.' : 'আমরা বিশ্বাস করি প্রতিটি জীবন একটি মাস্টারপিস যা আবিষ্কারের অপেক্ষায় রয়েছে।'}
              </p>
            </div>
          </div>
        </div>
        <div className="bg-surface p-12 lg:p-32 flex flex-col justify-center space-y-16">
          <div className="space-y-6">
            <h2 className="text-primary font-serif italic text-2xl">{lang === 'en' ? 'Our Philosophy' : 'আমাদের দর্শন'}</h2>
            <h3 className="text-4xl lg:text-6xl font-display font-bold leading-tight">
              {lang === 'en' ? 'Excellence in Every Interaction' : 'প্রতিটি মিথস্ক্রিয়ায় শ্রেষ্ঠত্ব'}
            </h3>
            <p className="text-xl text-muted leading-relaxed font-serif">
              {lang === 'en' 
                ? 'Our approach combines traditional values with modern methodologies to ensure the highest quality of care for our members.' 
                : 'আমাদের পদ্ধতি ঐতিহ্যগত মূল্যবোধের সাথে আধুনিক পদ্ধতির সমন্বয় করে আমাদের সদস্যদের জন্য সর্বোচ্চ মানের যত্ন নিশ্চিত করে।'}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              { title: t('nav.education'), desc: lang === 'en' ? 'Bespoke learning paths.' : 'বেসপোক লার্নিং পাথ।' },
              { title: t('nav.health'), desc: lang === 'en' ? 'Elite therapeutic care.' : 'এলিট থেরাপিউটিক যত্ন।' },
              { title: t('nav.skills'), desc: lang === 'en' ? 'Professional empowerment.' : 'পেশাদার ক্ষমতায়ন।' },
              { title: t('nav.devices'), desc: lang === 'en' ? 'Premium assistive tools.' : 'প্রিমিয়াম সহায়ক সরঞ্জাম।' },
            ].map((item, idx) => (
              <div key={idx} className="space-y-4">
                <h4 className="text-2xl font-display font-bold border-b border-border pb-4">{item.title}</h4>
                <p className="text-muted font-serif italic">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial - Elegant Quote */}
      <section className="py-32 bg-bg relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-6 text-center space-y-16 relative z-10">
          <Sparkles size={48} className="mx-auto text-primary opacity-30" />
          <blockquote className="text-4xl lg:text-7xl font-display font-light leading-tight tracking-tight italic">
            "{lang === 'en' 
              ? 'The support we received from SPUS has been nothing short of transformative. It is a sanctuary of hope and excellence.' 
              : 'SPUS থেকে আমরা যে সমর্থন পেয়েছি তা রূপান্তরমূলক ছিল। এটি আশা এবং শ্রেষ্ঠত্বের একটি অভয়ারণ্য।'}"
          </blockquote>
          <div className="space-y-2">
            <p className="text-2xl font-bold uppercase tracking-widest">{lang === 'en' ? 'A Grateful Family' : 'একজন কৃতজ্ঞ পরিবার'}</p>
            <p className="text-primary font-serif italic text-lg">{lang === 'en' ? 'Member since 2019' : '২০১৯ সাল থেকে সদস্য'}</p>
          </div>
        </div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(var(--color-primary-rgb),0.05),transparent_70%)]" />
      </section>

      {/* CTA - Final Prestige Touch */}
      <section className="py-32 bg-surface text-center px-6">
        <div className="max-w-4xl mx-auto space-y-16">
          <h2 className="text-5xl lg:text-8xl font-display font-bold leading-none tracking-tighter">
            {lang === 'en' ? 'INVEST IN A BRIGHTER FUTURE' : 'একটি উজ্জ্বল ভবিষ্যতে বিনিয়োগ করুন'}
          </h2>
          <p className="text-2xl text-muted font-serif italic">
            {lang === 'en' ? 'Your contribution ensures that our legacy of care continues to flourish for generations to come.' : 'আপনার অবদান নিশ্চিত করে যে আমাদের যত্নের উত্তরাধিকার আগামী প্রজন্মের জন্য বিকশিত হতে থাকবে।'}
          </p>
          <div className="flex flex-wrap justify-center gap-8 pt-8">
            <Link to="/support/donate" className="px-16 py-6 bg-primary text-white font-bold text-xl hover:shadow-[0_20px_50px_rgba(var(--color-primary-rgb),0.3)] transition-all">
              {t('common.donateNow')}
            </Link>
            <Link to="/contact" className="px-16 py-6 bg-transparent border border-border text-text-main font-bold text-xl hover:bg-bg transition-all">
              {t('nav.contact')}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

