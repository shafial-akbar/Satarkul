import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '../../../context/LanguageContext';
import { useTheme } from '../../../context/ThemeContext';
import { 
  ArrowRight, 
  Heart, 
  Leaf,
  Sprout,
  Trees,
  Globe,
  Users,
  Calendar,
  Quote
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Variant4() {
  const { t } = useTranslation();
  const { lang } = useLanguage();
  const { setCurrentTheme, themes } = useTheme();

  useEffect(() => {
    const theme = themes.find(t => t.id === 'green-earth');
    if (theme) setCurrentTheme(theme);
  }, [setCurrentTheme, themes]);

  return (
    <div className="bg-bg min-h-screen font-sans selection:bg-primary selection:text-white">
      {/* Hero Section - Organic & Earthy */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=2013&auto=format&fit=crop" 
            className="w-full h-full object-cover opacity-20"
            alt="Nature Background"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-bg/50 via-bg/80 to-bg" />
        </div>

        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-lg font-bold text-sm uppercase tracking-widest"
            >
              <Leaf size={18} /> {lang === 'en' ? 'Growing Hope Since 2013' : '২০১৩ থেকে আশা জাগিয়ে তুলছি'}
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-6xl lg:text-8xl font-display font-bold text-text-main leading-tight"
            >
              {lang === 'en' ? 'Nurturing Potential, Rooted in Care' : 'যত্নে বেড়ে ওঠা, সম্ভাবনার লালন'}
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-muted leading-relaxed max-w-xl"
            >
              {lang === 'en' 
                ? 'We provide a sustainable ecosystem of support for individuals with disabilities to thrive in their communities.' 
                : 'আমরা প্রতিবন্ধী ব্যক্তিদের তাদের সম্প্রদায়ে বিকাশের জন্য সহায়তার একটি টেকসই ইকোসিস্টেম প্রদান করি।'}
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <Link to="/support/donate" className="px-10 py-5 bg-primary text-white rounded-xl font-bold text-lg hover:bg-primary-dark transition-all flex items-center gap-2 shadow-lg shadow-primary/20">
                <Sprout size={24} /> {t('common.donateNow')}
              </Link>
              <Link to="/about" className="px-10 py-5 bg-surface text-text-main rounded-xl font-bold text-lg hover:bg-surface-alt transition-all border border-border">
                {t('common.learnMore')}
              </Link>
            </motion.div>
          </div>

          <div className="relative hidden lg:block">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="relative z-10"
            >
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-6 pt-12">
                  <img src="https://picsum.photos/seed/nature1/400/500" className="rounded-3xl shadow-2xl" alt="Impact" referrerPolicy="no-referrer" />
                  <div className="bg-secondary p-8 rounded-3xl text-white space-y-2">
                    <p className="text-4xl font-bold">690+</p>
                    <p className="font-medium opacity-80 uppercase tracking-widest text-xs">{t('home.stats.members')}</p>
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="bg-accent p-8 rounded-3xl text-white space-y-2">
                    <p className="text-4xl font-bold">11</p>
                    <p className="font-medium opacity-80 uppercase tracking-widest text-xs">{lang === 'en' ? 'Wards Covered' : 'ওয়ার্ড কভার করা হয়েছে'}</p>
                  </div>
                  <img src="https://picsum.photos/seed/nature2/400/500" className="rounded-3xl shadow-2xl" alt="Impact" referrerPolicy="no-referrer" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Roots - Core Values */}
      <section className="py-24 lg:py-32 bg-surface">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-1 space-y-6">
            <h2 className="text-4xl font-display font-bold text-text-main">{lang === 'en' ? 'Our Roots' : 'আমাদের মূল ভিত্তি'}</h2>
            <p className="text-muted leading-relaxed">{lang === 'en' ? 'Built on a foundation of empathy, inclusion, and sustainable growth.' : 'সহানুভূতি, অন্তর্ভুক্তি এবং টেকসই প্রবৃদ্ধির ভিত্তির ওপর নির্মিত।'}</p>
          </div>
          
          {[
            { title: lang === 'en' ? 'Inclusion' : 'অন্তর্ভুক্তি', icon: Globe, desc: lang === 'en' ? 'Every voice matters in our community.' : 'আমাদের সম্প্রদায়ে প্রতিটি কণ্ঠস্বর গুরুত্বপূর্ণ।' },
            { title: lang === 'en' ? 'Growth' : 'প্রবৃদ্ধি', icon: Sprout, desc: lang === 'en' ? 'Nurturing skills for a better tomorrow.' : 'আগামীর জন্য দক্ষতার লালন।' },
            { title: lang === 'en' ? 'Community' : 'সম্প্রদায়', icon: Users, desc: lang === 'en' ? 'Stronger together, rooted in unity.' : 'একসাথে শক্তিশালী, ঐক্যে অবিচল।' },
          ].map((value, idx) => (
            <div key={idx} className="p-8 bg-bg rounded-2xl border border-border hover:border-primary transition-all group">
              <value.icon size={40} className="text-primary mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold text-text-main mb-3">{value.title}</h3>
              <p className="text-muted text-sm leading-relaxed">{value.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Our Branches - Programs */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 space-y-16">
          <div className="text-center space-y-4">
            <p className="text-primary font-bold uppercase tracking-widest text-sm">{lang === 'en' ? 'Our Branches' : 'আমাদের শাখাগুলি'}</p>
            <h2 className="text-4xl lg:text-6xl font-display font-bold text-text-main">{lang === 'en' ? 'How We Branch Out' : 'আমরা যেভাবে ছড়িয়ে পড়ি'}</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                title: t('nav.education'), 
                icon: Sprout, 
                color: 'bg-primary',
                desc: lang === 'en' ? 'Inclusive education for children with diverse needs.' : 'বিভিন্ন চাহিদাসম্পন্ন শিশুদের জন্য অন্তর্ভুক্তিমূলক শিক্ষা।'
              },
              { 
                title: t('nav.health'), 
                icon: Heart, 
                color: 'bg-secondary',
                desc: lang === 'en' ? 'Holistic healthcare and rehabilitation services.' : 'সামগ্রিক স্বাস্থ্যসেবা এবং পুনর্বাসন পরিষেবা।'
              },
              { 
                title: t('nav.skills'), 
                icon: Trees, 
                color: 'bg-accent',
                desc: lang === 'en' ? 'Empowering adults through vocational training.' : 'বৃত্তিমূলক প্রশিক্ষণের মাধ্যমে প্রাপ্তবয়স্কদের ক্ষমতায়ন।'
              },
            ].map((program, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -10 }}
                className="bg-surface-alt p-10 rounded-3xl border border-border group relative overflow-hidden"
              >
                <div className={`w-16 h-16 ${program.color} text-white rounded-xl flex items-center justify-center mb-8 shadow-lg shadow-current/20`}>
                  <program.icon size={32} />
                </div>
                <h3 className="text-2xl font-display font-bold text-text-main mb-4">{program.title}</h3>
                <p className="text-muted leading-relaxed mb-8">{program.desc}</p>
                <Link to="/programs" className="inline-flex items-center gap-2 text-primary font-bold group-hover:gap-4 transition-all">
                  {t('common.learnMore')} <ArrowRight size={20} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Story - Full Width Image with Quote */}
      <section className="relative py-32 lg:py-48 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070&auto=format&fit=crop" 
            className="w-full h-full object-cover"
            alt="Impact Story"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />
        </div>

        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center space-y-12">
          <Quote size={64} className="mx-auto text-primary opacity-50" />
          <h2 className="text-3xl lg:text-5xl font-display font-bold text-white leading-tight italic">
            {lang === 'en' 
              ? '"SPUS is not just an organization; it\'s a family that nurtures dreams and turns them into reality."' 
              : '"এসপিইউএস কেবল একটি সংস্থা নয়; এটি একটি পরিবার যা স্বপ্ন লালন করে এবং সেগুলোকে বাস্তবে রূপান্তর করে।"'}
          </h2>
          <div className="space-y-2">
            <p className="text-2xl font-bold text-white">Md. Abdul Karim</p>
            <p className="text-primary font-medium uppercase tracking-widest text-sm">{lang === 'en' ? 'Community Leader' : 'কমিউনিটি লিডার'}</p>
          </div>
        </div>
      </section>

      {/* CTA - Eco Friendly Feel */}
      <section className="py-24 bg-bg">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-primary rounded-[3rem] p-12 lg:p-20 text-white flex flex-col lg:flex-row items-center justify-between gap-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            
            <div className="space-y-6 relative z-10 lg:max-w-2xl">
              <h2 className="text-4xl lg:text-6xl font-display font-bold leading-tight">
                {lang === 'en' ? 'Plant a Seed of Hope Today' : 'আজই আশার একটি বীজ বপন করুন'}
              </h2>
              <p className="text-white/80 text-xl">
                {lang === 'en' ? 'Your contribution helps us grow a more inclusive and sustainable future for all.' : 'আপনার অবদান আমাদের সবার জন্য আরও অন্তর্ভুক্তিমূলক এবং টেকসই ভবিষ্যৎ গড়ে তুলতে সাহায্য করে।'}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 relative z-10">
              <Link to="/support/donate" className="px-12 py-6 bg-white text-primary rounded-2xl font-bold text-xl hover:scale-105 transition-all shadow-2xl">
                {t('common.donateNow')}
              </Link>
              <Link to="/support/volunteer" className="px-12 py-6 bg-transparent border-2 border-white text-white rounded-2xl font-bold text-xl hover:bg-white hover:text-primary transition-all">
                {t('nav.volunteer')}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

