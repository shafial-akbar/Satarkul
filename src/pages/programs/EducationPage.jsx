import React from 'react';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '../../context/LanguageContext';
import PageWrapper from '../../components/layout/PageWrapper';
import { motion } from 'motion/react';
import * as Icons from 'lucide-react';
import SchoolEnrollmentChart from '../../components/infographics/SchoolEnrollmentChart';
import DisabilityTypeChart from '../../components/infographics/DisabilityTypeChart';
import { schoolStats, schoolClasses, subPrograms } from '../../data/educationData';

export default function EducationPage() {
  const { t } = useTranslation();
  const { lang } = useLanguage();

  const getLocalized = (obj) => {
    if (!obj) return '';
    return obj[lang] || obj['en'] || '';
  };

  return (
    <PageWrapper 
      title={lang === 'en' ? 'Education Program' : 'শিক্ষা কার্যক্রম'}
      subtitle={lang === 'en' ? 'Ensuring quality education and mainstreaming students with disabilities.' : 'গুণগত শিক্ষা নিশ্চিত করা এবং প্রতিবন্ধী শিক্ষার্থীদের মূলধারার সাথে সম্পৃক্ত করা।'}
    >
      <div className="space-y-24">
        {/* School Intro */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-surface-alt text-primary rounded-full font-bold text-sm uppercase tracking-widest">
                <Icons.GraduationCap size={18} /> {lang === 'en' ? 'Established: 1st Sept 2014' : 'প্রতিষ্ঠাকাল: ১লা সেপ্টেম্বর ২০১৪'}
              </div>
              <h2 className="text-4xl lg:text-5xl font-display font-bold text-text-main leading-tight">
                {lang === 'en' ? 'Satarkul Diversity Disabled School' : 'সাতারকুল বৈচিত্র্য প্রতিবন্ধী বিদ্যালয়'}
              </h2>
            </div>
            <div className="space-y-6 text-muted leading-relaxed text-lg">
              <p>
                {lang === 'en' 
                  ? 'In 2014, based on field surveys and discussions with parents of disabled children, it was found that disabled children are in the most vulnerable position in Bangladesh in terms of receiving education. Although the primary education enrollment rate is 97 percent, only 11 percent of children with disabilities receive any form of education. Due to lack of birth registration, many children with disabilities experience deprivation from the beginning of their lives. Due to lack of awareness and finances in very poor families, backward disabled children focus on begging instead of education. After reviewing this situation, Satarkul Development Organization for Disability took the initiative to establish a school for very poor disabled children who are deprived of educational opportunities.' 
                  : '২০১৪ সালে মাঠ পর্যায়ের জরিপ এবং প্রতিবন্ধী শিশুদের অভিভাবকদের সাথে আলোচনার ভিত্তিতে দেখা যায় যে বাংলাদেশে প্রতিবন্ধী শিশুরা শিক্ষা গ্রহণের ক্ষেত্রে সবচেয়ে দুর্বল অবস্থানে রয়েছে। প্রাথমিক শিক্ষায় ভর্তির হার ৯৭ শতাংশ হলেও মাত্র ১১ শতাংশ প্রতিবন্ধী শিশু কোনো প্রকার শিক্ষা গ্রহণ করে। জন্ম নিবন্ধনের অভাবে অনেক প্রতিবন্ধী শিশু তাদের জীবনের শুরু থেকেই বঞ্চনার শিকার হয়। অত্যন্ত দরিদ্র পরিবারে সচেতনতার অভাব এবং অর্থের অভাবে পিছিয়ে পড়া প্রতিবন্ধী শিশুরা শিক্ষার পরিবর্তে ভিক্ষাবৃত্তির দিকে ঝুঁকে পড়ে। এই পরিস্থিতি পর্যালোচনা করে সাতারকুল প্রতিবন্ধী উন্নয়ন সংস্থা শিক্ষার সুযোগ থেকে বঞ্চিত অত্যন্ত দরিদ্র প্রতিবন্ধী শিশুদের জন্য একটি বিদ্যালয় প্রতিষ্ঠার উদ্যোগ গ্রহণ করে।'}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {schoolClasses.map((cls, idx) => {
                  const ClassIcon = Icons[cls.icon] || Icons.HelpCircle;
                  return (
                    <div key={idx} className="flex items-center gap-4 p-4 bg-surface-alt rounded-2xl border border-border">
                      <div className="w-10 h-10 bg-white text-primary rounded-xl flex items-center justify-center shadow-sm">
                        <ClassIcon size={20} />
                      </div>
                      <span className="font-bold text-text-main">{getLocalized(cls.title)}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://picsum.photos/seed/classroom/1200/900" 
              alt="School Classroom" 
              className="rounded-[3rem] shadow-2xl w-full"
              referrerPolicy="no-referrer"
            />
            <div className="absolute -bottom-8 -right-8 bg-white p-8 rounded-3xl shadow-xl border border-border hidden md:block max-w-xs">
              <p className="text-secondary font-bold text-sm uppercase tracking-widest mb-2">{lang === 'en' ? 'Curriculum' : 'পাঠ্যক্রম'}</p>
              <div className="text-text-main font-bold text-sm leading-relaxed space-y-2">
                <p>{lang === 'en' ? '• Music, Dance, Drama, Rhymes, Poetry, Recitation' : '• গান, নাচ, নাটক, ছড়া, কবিতা, আবৃত্তি'}</p>
                <p>{lang === 'en' ? '• Clay-Stone Crafts, Hand Painting, Sewing, Block-Batik' : '• মাটি-পাথরের কারুশিল্প, হাতে আঁকা, নকশী কাঁথা সেলাই, ব্লক-বাটিক'}</p>
                <p>{lang === 'en' ? '• Cooking, Proper Dressing, Hand-Foot Washing Rules' : '• রান্না করা এবং সঠিক পোশাক পরিধান, হাত-পা ধোয়ার নিয়ম'}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <h2 className="text-3xl font-display font-bold text-text-main">
              {lang === 'en' ? 'Student Demographics' : 'শিক্ষার্থী পরিসংখ্যান'}
            </h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {schoolStats.map((stat, idx) => {
              const StatIcon = Icons[stat.icon] || Icons.Users;
              return (
                <div key={idx} className="bg-white p-8 rounded-[2.5rem] border border-border text-center space-y-4 shadow-sm">
                  <div className={`w-16 h-16 mx-auto bg-surface-alt ${stat.color} rounded-2xl flex items-center justify-center`}>
                    <StatIcon size={32} />
                  </div>
                  <div className="space-y-1">
                    <div className="text-4xl font-display font-bold text-text-main">{stat.value}</div>
                    <p className="text-sm font-bold text-muted uppercase tracking-widest">{getLocalized(stat.label)}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <SchoolEnrollmentChart />
            <DisabilityTypeChart />
          </div>
        </section>

        {/* Sub Programs Grid */}
        <section className="space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <h2 className="text-3xl font-display font-bold text-text-main">
              {lang === 'en' ? 'Comprehensive Support' : 'ব্যাপক সহায়তা'}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {subPrograms.map((program, idx) => {
              const ProgramIcon = Icons[program.icon] || Icons.HelpCircle;
              return (
                <div key={idx} className="group bg-white p-8 rounded-[3rem] border border-border hover:border-primary shadow-lg transition-all duration-500 flex flex-col md:flex-row gap-8">
                  <div className="w-20 h-20 bg-surface-alt text-primary rounded-[2rem] flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                    <ProgramIcon size={40} />
                  </div>
                  <div className="space-y-4">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 text-xs font-bold text-secondary uppercase tracking-widest">
                        <Icons.Clock size={14} /> {getLocalized(program.timeline)}
                      </div>
                      <h4 className="text-2xl font-display font-bold text-text-main">{getLocalized(program.title)}</h4>
                    </div>
                    <p className="text-muted leading-relaxed">{getLocalized(program.desc)}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Adult Education */}
        <section className="bg-primary p-12 lg:p-20 rounded-[4rem] text-white overflow-hidden relative">
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-4xl font-display font-bold leading-tight">
                  {lang === 'en' ? 'Adult Education Program' : 'বয়স্ক শিক্ষা কার্যক্রম'}
                </h2>
                <p className="text-white/80 text-lg leading-relaxed">
                  {lang === 'en' 
                    ? 'Every year, an adult education program is conducted with 25 parents of disabled students and ultra-poor disabled women and men. Here they are taught literacy, enabling them to read, write, and sign in Bangla, making them more self-aware and caring towards their children.' 
                    : 'প্রতি বছর প্রতিবন্ধী শিক্ষার্থীদের ২৫ জন অভিভাবক এবং অতি দরিদ্র প্রতিবন্ধী নারী ও পুরুষদের নিয়ে বয়স্ক শিক্ষা কার্যক্রম পরিচালিত হয়। এখানে তাদের অক্ষর জ্ঞান শেখানো হয়, যার ফলে তারা পড়তে ও স্বাক্ষর করতে পারে এবং আগের চেয়ে বেশি আত্মসচেতন হয়।'}
                </p>
              </div>
              <div className="grid grid-cols-1 gap-4">
                {[
                  { label: lang === 'en' ? 'Literacy & Signature Skills' : 'সাক্ষরতা ও স্বাক্ষর দক্ষতা' },
                  { label: lang === 'en' ? 'Child Care Awareness' : 'শিশু যত্ন সচেতনতা' },
                  { label: lang === 'en' ? 'Self-Awareness Training' : 'আত্মসচেতনতা প্রশিক্ষণ' },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-4 p-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20">
                    <Icons.CheckCircle2 size={24} className="text-accent" />
                    <span className="font-bold">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-video rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white/20">
                <img src="https://picsum.photos/seed/adult-education/1200/675" className="w-full h-full object-cover" referrerPolicy="no-referrer" alt="Adult Education" />
              </div>
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-accent rounded-full flex items-center justify-center text-white font-bold text-2xl shadow-xl">25+</div>
            </div>
          </div>
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/20 rounded-full blur-3xl translate-x-1/4 translate-y-1/4" />
        </section>
      </div>
    </PageWrapper>
  );
}
