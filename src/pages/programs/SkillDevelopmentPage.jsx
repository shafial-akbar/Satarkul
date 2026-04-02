import React from 'react';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '../../context/LanguageContext';
import PageWrapper from '../../components/layout/PageWrapper';
import { motion } from 'motion/react';
import * as Icons from 'lucide-react';
import { mainSkills, trainingProjects } from '../../data/skillDevelopmentData';

export default function SkillDevelopmentPage() {
  const { t } = useTranslation();
  const { lang } = useLanguage();

  const getLocalized = (obj) => {
    if (!obj) return '';
    return obj[lang] || obj['en'] || '';
  };

  return (
    <PageWrapper 
      title={lang === 'en' ? 'Skill Development Training' : 'দক্ষতা উন্নয়ন প্রশিক্ষণ'}
      subtitle={lang === 'en' ? 'Empowering disabled women and youth through vocational skills and handicrafts.' : 'বৃত্তিমূলক দক্ষতা এবং হস্তশিল্পের মাধ্যমে প্রতিবন্ধী নারী ও যুবকদের ক্ষমতায়ন।'}
    >
      <div className="space-y-24">
        {/* Intro Section */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-surface-alt text-primary rounded-full font-bold text-sm uppercase tracking-widest">
                <Icons.Briefcase size={18} /> {lang === 'en' ? 'Vocational Training' : 'বৃত্তিমূলক প্রশিক্ষণ'}
              </div>
              <h2 className="text-4xl lg:text-5xl font-display font-bold text-text-main leading-tight">
                {lang === 'en' ? 'Handicrafts & Vocational Skills' : 'হস্তশিল্প ও বৃত্তিমূলক দক্ষতা'}
              </h2>
              <p className="text-lg text-muted leading-relaxed">
                {lang === 'en' 
                  ? 'Our skill development program focuses on providing sustainable livelihoods for disabled women, adolescent girls, and their guardians. By teaching creative and practical skills, we help them achieve financial independence and social recognition.' 
                  : 'আমাদের দক্ষতা উন্নয়ন কর্মসূচির লক্ষ্য হলো প্রতিবন্ধী নারী, কিশোরী এবং তাদের অভিভাবকদের জন্য টেকসই জীবিকার ব্যবস্থা করা। সৃজনশীল এবং ব্যবহারিক দক্ষতা শেখানোর মাধ্যমে আমরা তাদের আর্থিক স্বাধীনতা এবং সামাজিক স্বীকৃতি অর্জনে সহায়তা করি।'}
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4">
              <div className="flex items-center gap-4 p-4 bg-white rounded-2xl border border-border shadow-sm">
                <div className="w-12 h-12 bg-surface-alt text-primary rounded-xl flex items-center justify-center shrink-0">
                  <Icons.Users size={24} />
                </div>
                <div>
                  <p className="text-xs font-bold text-muted uppercase tracking-wider">{lang === 'en' ? 'Target Group' : 'লক্ষ্য দল'}</p>
                  <p className="font-bold text-text-main">{lang === 'en' ? 'Disabled Women, Girls & Guardians' : 'প্রতিবন্ধী নারী, কিশোরী ও অভিভাবক'}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <img 
                src="https://picsum.photos/seed/handicraft/800/1000" 
                alt="Handicrafts" 
                className="rounded-3xl shadow-lg aspect-[4/5] object-cover w-full"
                referrerPolicy="no-referrer"
              />
              <img 
                src="https://picsum.photos/seed/sewing/1000/1000" 
                alt="Sewing" 
                className="rounded-3xl shadow-lg aspect-square object-cover w-full"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="space-y-4 pt-8">
              <img 
                src="https://picsum.photos/seed/art/1000/1000" 
                alt="Art Training" 
                className="rounded-3xl shadow-lg aspect-square object-cover w-full"
                referrerPolicy="no-referrer"
              />
              <img 
                src="https://picsum.photos/seed/jewelry/800/1000" 
                alt="Jewelry Making" 
                className="rounded-3xl shadow-lg aspect-[4/5] object-cover w-full"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </section>

        {/* Main Skills Grid */}
        <section className="space-y-12">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-display font-bold text-text-main">{lang === 'en' ? 'Core Training Areas' : 'প্রধান প্রশিক্ষণ ক্ষেত্রসমূহ'}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {mainSkills.map((skill, idx) => {
              const SkillIcon = Icons[skill.icon] || Icons.HelpCircle;
              return (
                <div key={idx} className="bg-white p-8 rounded-[2.5rem] border border-border hover:border-primary transition-all duration-500 shadow-sm group">
                  <div className="w-16 h-16 bg-surface-alt text-primary rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-all">
                    <SkillIcon size={32} />
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 text-xs font-bold text-secondary uppercase tracking-widest">
                      <Icons.Clock size={14} /> {getLocalized(skill.timeline)}
                    </div>
                    <h3 className="text-2xl font-display font-bold text-text-main">{getLocalized(skill.title)}</h3>
                    <p className="text-muted leading-relaxed">{getLocalized(skill.desc)}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Featured Projects */}
        <section className="space-y-12">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-display font-bold text-text-main">{lang === 'en' ? 'Successful Training Projects' : 'সফল প্রশিক্ষণ প্রকল্পসমূহ'}</h2>
          </div>
          <div className="grid grid-cols-1 gap-8">
            {trainingProjects.map((project, idx) => {
              const ProjectIcon = Icons[project.icon] || Icons.Award;
              return (
                <div key={idx} className="bg-white rounded-[3rem] border border-border overflow-hidden shadow-lg flex flex-col lg:flex-row">
                  <div className="lg:w-1/3 bg-surface-alt p-12 flex flex-col justify-center space-y-6">
                    <div className="w-16 h-16 bg-white text-primary rounded-2xl flex items-center justify-center shadow-sm">
                      <ProjectIcon size={32} />
                    </div>
                    <div className="space-y-2">
                      <p className="text-xs font-bold text-secondary uppercase tracking-widest">{lang === 'en' ? 'Partner Organization' : 'সহযোগী সংস্থা'}</p>
                      <p className="text-xl font-display font-bold text-text-main">{getLocalized(project.partner)}</p>
                    </div>
                    <div className="space-y-4 pt-4 border-t border-border/50">
                      <div className="flex items-center gap-3 text-sm font-bold text-muted">
                        <Icons.Calendar size={18} className="text-primary" />
                        {getLocalized(project.duration)}
                      </div>
                      <div className="flex items-center gap-3 text-sm font-bold text-muted">
                        <Icons.Users size={18} className="text-primary" />
                        {getLocalized(project.participants)}
                      </div>
                    </div>
                  </div>
                  <div className="lg:w-2/3 p-12 flex flex-col justify-center space-y-6">
                    <h3 className="text-3xl font-display font-bold text-text-main">{getLocalized(project.title)}</h3>
                    <p className="text-lg text-muted leading-relaxed">{getLocalized(project.desc)}</p>
                    <div className="flex flex-wrap gap-3">
                      {lang === 'en' ? (
                        ['Vocational Skills', 'Economic Empowerment', 'Inclusion'].map((tag, tIdx) => (
                          <span key={tIdx} className="px-4 py-1.5 bg-surface-alt text-primary rounded-full text-xs font-bold uppercase tracking-wider">
                            {tag}
                          </span>
                        ))
                      ) : (
                        ['বৃত্তিমূলক দক্ষতা', 'আর্থিক ক্ষমতায়ন', 'অন্তর্ভুক্তি'].map((tag, tIdx) => (
                          <span key={tIdx} className="px-4 py-1.5 bg-surface-alt text-primary rounded-full text-xs font-bold uppercase tracking-wider">
                            {tag}
                          </span>
                        ))
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Training Gallery */}
        <section className="space-y-12">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-display font-bold text-text-main">{lang === 'en' ? 'Training Gallery' : 'প্রশিক্ষণ গ্যালারি'}</h2>
            <p className="text-muted mt-4">
              {lang === 'en' 
                ? 'Glimpses of our ongoing training sessions and the creative work of our students.' 
                : 'আমাদের চলমান প্রশিক্ষণ সেশন এবং আমাদের শিক্ষার্থীদের সৃজনশীল কাজের কিছু ঝলক।'}
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { seed: 'handicraft', label: lang === 'en' ? 'Handicrafts' : 'হস্তশিল্প' },
              { seed: 'sewing', label: lang === 'en' ? 'Tailoring' : 'দর্জিবিজ্ঞান' },
              { seed: 'art', label: lang === 'en' ? 'Art Work' : 'শিল্পকর্ম' },
              { seed: 'jewelry', label: lang === 'en' ? 'Jewelry' : 'গয়না' }
            ].map((item, i) => (
              <motion.div 
                key={i}
                whileHover={{ scale: 1.05 }}
                className="relative group rounded-3xl overflow-hidden shadow-md aspect-square"
              >
                <img 
                  src={`https://picsum.photos/seed/${item.seed}/600/600`} 
                  alt={item.label} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <p className="text-white font-bold">{item.label}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-secondary p-12 lg:p-20 rounded-[4rem] text-white text-center space-y-8 relative overflow-hidden">
          <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            <h2 className="text-4xl font-display font-bold">{lang === 'en' ? 'Support Our Artisans' : 'আমাদের কারিগরদের সহায়তা করুন'}</h2>
            <p className="text-white/80 text-lg">
              {lang === 'en' 
                ? 'Your support helps us provide raw materials and equipment for these training programs, enabling more disabled individuals to learn and earn.' 
                : 'আপনার সহায়তা আমাদের এই প্রশিক্ষণ কর্মসূচিগুলোর জন্য কাঁচামাল এবং সরঞ্জাম সরবরাহ করতে সাহায্য করে, যা আরও বেশি প্রতিবন্ধী ব্যক্তিকে শিখতে এবং উপার্জন করতে সক্ষম করে।'}
            </p>
            <button className="px-10 py-4 bg-white text-secondary rounded-full font-bold text-lg hover:scale-105 transition-all shadow-xl">
              {lang === 'en' ? 'Donate for Training' : 'প্রশিক্ষণের জন্য দান করুন'}
            </button>
          </div>
          {/* Decorative circles */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/20 rounded-full translate-x-1/4 translate-y-1/4 blur-3xl" />
        </section>
      </div>
    </PageWrapper>
  );
}
