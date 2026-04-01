import React from 'react';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '../../context/LanguageContext';
import PageWrapper from '../../components/layout/PageWrapper';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { GraduationCap, HeartPulse, Palette, Banknote, Accessibility, Megaphone, ShieldCheck, Sparkles, ArrowRight } from 'lucide-react';

export default function ProgramsPage() {
  const { t } = useTranslation();
  const { lang } = useLanguage();

  const programs = [
    {
      to: '/programs/education',
      title: lang === 'en' ? 'Education Program' : 'শিক্ষা কার্যক্রম',
      desc: lang === 'en' ? 'Quality education for children with disabilities at Satarkul Diversity Disabled School.' : 'সাতারকুল বৈচিত্র্য প্রতিবন্ধী বিদ্যালয়ে প্রতিবন্ধী শিশুদের জন্য গুণগত শিক্ষা।',
      icon: GraduationCap,
      color: 'bg-primary'
    },
    {
      to: '/programs/health',
      title: lang === 'en' ? 'Health Services' : 'স্বাস্থ্য সেবা কার্যক্রম',
      desc: lang === 'en' ? 'Comprehensive health support and medical assistance for persons with disabilities.' : 'প্রতিবন্ধী ব্যক্তিদের জন্য ব্যাপক স্বাস্থ্য সহায়তা এবং চিকিৎসা সহায়তা।',
      icon: HeartPulse,
      color: 'bg-secondary'
    },
    {
      to: '/programs/skill-development',
      title: lang === 'en' ? 'Skill Development' : 'দক্ষতা উন্নয়ন প্রশিক্ষণ',
      desc: lang === 'en' ? 'Vocational training in handicrafts, tailoring, and art for economic empowerment.' : 'আর্থিক ক্ষমতায়নের জন্য হস্তশিল্প, দর্জিবিজ্ঞান এবং শিল্পকলায় বৃত্তিমূলক প্রশিক্ষণ।',
      icon: Palette,
      color: 'bg-accent'
    },
    {
      to: '/programs/financial-support',
      title: lang === 'en' ? 'Financial Support' : 'আর্থিক সহায়তা কার্যক্রম',
      desc: lang === 'en' ? 'Providing financial aid to ultra-poor disabled individuals and their families.' : 'অতি দরিদ্র প্রতিবন্ধী ব্যক্তি এবং তাদের পরিবারকে আর্থিক সহায়তা প্রদান।',
      icon: Banknote,
      color: 'bg-primary'
    },
    {
      to: '/programs/assistive-devices',
      title: lang === 'en' ? 'Assistive Devices' : 'সহায়ক উপকরণ বিতরণ',
      desc: lang === 'en' ? 'Distributing wheelchairs, crutches, and other assistive devices for mobility.' : 'চলাচলের জন্য হুইলচেয়ার, ক্রাচ এবং অন্যান্য সহায়ক উপকরণ বিতরণ।',
      icon: Accessibility,
      color: 'bg-secondary'
    },
    {
      to: '/programs/awareness',
      title: lang === 'en' ? 'Awareness Program' : 'সচেতনতামূলক কার্যক্রম',
      desc: lang === 'en' ? 'Promoting disability rights and social inclusion through community awareness.' : 'সামাজিক সচেতনতার মাধ্যমে প্রতিবন্ধী অধিকার এবং সামাজিক অন্তর্ভুক্তি প্রচার করা।',
      icon: Megaphone,
      color: 'bg-accent'
    },
    {
      to: '/programs/social-support',
      title: lang === 'en' ? 'Social Support Services' : 'সামাজিক সহায়তা সেবা',
      desc: lang === 'en' ? 'Empowering disabled individuals through documentation and legal assistance.' : 'নথিপত্র এবং আইনি সহায়তার মাধ্যমে প্রতিবন্ধী ব্যক্তিদের ক্ষমতায়ন।',
      icon: ShieldCheck,
      color: 'bg-primary'
    },
    {
      to: '/programs/special-programs',
      title: lang === 'en' ? 'Special Programs' : 'বিশেষ কার্যক্রম',
      desc: lang === 'en' ? 'Innovative initiatives designed for specialized care and development.' : 'বিশেষায়িত যত্ন এবং উন্নয়নের জন্য ডিজাইন করা উদ্ভাবনী উদ্যোগ।',
      icon: Sparkles,
      color: 'bg-secondary'
    }
  ];

  return (
    <PageWrapper 
      title={lang === 'en' ? 'Our Programs' : 'আমাদের কার্যক্রম'}
      subtitle={lang === 'en' ? 'Discover how we support and empower persons with disabilities through various initiatives.' : 'বিভিন্ন উদ্যোগের মাধ্যমে আমরা কীভাবে প্রতিবন্ধী ব্যক্তিদের সহায়তা এবং ক্ষমতায়ন করি তা আবিষ্কার করুন।'}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {programs.map((program, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
          >
            <Link 
              to={program.to}
              className="group block h-full bg-white rounded-[2.5rem] border border-border p-8 hover:border-primary hover:shadow-2xl transition-all duration-500 relative overflow-hidden"
            >
              <div className={`w-16 h-16 ${program.color} text-white rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500`}>
                <program.icon size={32} />
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-display font-bold text-text-main group-hover:text-primary transition-colors">{program.title}</h3>
                <p className="text-muted leading-relaxed">{program.desc}</p>
                <div className="pt-4 flex items-center gap-2 text-primary font-bold text-sm uppercase tracking-widest">
                  {lang === 'en' ? 'Learn More' : 'আরও জানুন'}
                  <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
              {/* Decorative background element */}
              <div className="absolute -bottom-12 -right-12 w-32 h-32 bg-surface-alt rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
            </Link>
          </motion.div>
        ))}
      </div>
    </PageWrapper>
  );
}
