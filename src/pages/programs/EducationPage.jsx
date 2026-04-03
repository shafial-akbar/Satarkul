import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { useContent } from '../../context/ContentContext';
import PageWrapper from '../../components/layout/PageWrapper';
import { motion } from 'motion/react';
import * as Icons from 'lucide-react';
import SchoolEnrollmentChart from '../../components/infographics/SchoolEnrollmentChart';
import DisabilityTypeChart from '../../components/infographics/DisabilityTypeChart';

export default function EducationPage() {
  const { lang } = useLanguage();
  const { content } = useContent();

  const education = content?.programs?.details?.education;

  const classes = (education?.intro?.classes || []).map(cls => ({
    ...cls,
    title: cls.title?.[lang] || cls.title?.en || '',
    icon: Icons[cls.icon] || Icons.HelpCircle
  }));

  const stats = (education?.stats?.list || []).map(stat => ({
    ...stat,
    label: stat.label?.[lang] || stat.label?.en || '',
    icon: Icons[stat.icon] || Icons.Users
  }));

  const subPrograms = (education?.subPrograms?.list || []).map(program => ({
    ...program,
    title: program.title?.[lang] || program.title?.en || '',
    desc: program.desc?.[lang] || program.desc?.en || '',
    timeline: program.timeline?.[lang] || program.timeline?.en || '',
    icon: Icons[program.icon] || Icons.HelpCircle
  }));

  const curriculumItems = (education?.curriculum?.items || []).map(item => ({
    text: item?.[lang] || item?.en || ''
  }));

  const adultBenefits = (education?.adultEducation?.benefits || []).map(benefit => ({
    label: benefit?.[lang] || benefit?.en || ''
  }));

  return (
    <PageWrapper 
      title={education?.title?.[lang]}
      subtitle={education?.subtitle?.[lang]}
    >
      <div className="space-y-24">
        {/* School Intro */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-surface-alt text-primary rounded-full font-bold text-sm uppercase tracking-widest">
                <Icons.GraduationCap size={18} /> {education?.intro?.established?.[lang]}
              </div>
              <h2 className="text-4xl lg:text-5xl font-display font-bold text-text-main leading-tight">
                {education?.intro?.title?.[lang]}
              </h2>
            </div>
            <div className="space-y-6 text-muted leading-relaxed text-lg">
              <p>
                {education?.intro?.description?.[lang]}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {classes.map((cls, idx) => (
                  <div key={idx} className="flex items-center gap-4 p-4 bg-surface-alt rounded-2xl border border-border">
                    <div className="w-10 h-10 bg-white text-primary rounded-xl flex items-center justify-center shadow-sm">
                      <cls.icon size={20} />
                    </div>
                    <span className="font-bold text-text-main">{cls.title}</span>
                  </div>
                ))}
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
              <p className="text-secondary font-bold text-sm uppercase tracking-widest mb-2">
                {education?.curriculum?.title?.[lang]}
              </p>
              <div className="text-text-main font-bold text-sm leading-relaxed space-y-2">
                {curriculumItems.map((item, idx) => (
                  <p key={idx}>• {item.text}</p>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <h2 className="text-3xl font-display font-bold text-text-main">
              {education?.stats?.title?.[lang]}
            </h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, idx) => (
              <div key={idx} className="bg-white p-8 rounded-[2.5rem] border border-border text-center space-y-4 shadow-sm">
                <div className={`w-16 h-16 mx-auto bg-surface-alt ${stat.color} rounded-2xl flex items-center justify-center`}>
                  <stat.icon size={32} />
                </div>
                <div className="space-y-1">
                  <div className="text-4xl font-display font-bold text-text-main">{stat.value}</div>
                  <p className="text-sm font-bold text-muted uppercase tracking-widest">{stat.label}</p>
                </div>
              </div>
            ))}
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
              {education?.subPrograms?.title?.[lang]}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {subPrograms.map((program, idx) => (
              <div key={idx} className="group bg-white p-8 rounded-[3rem] border border-border hover:border-primary shadow-lg transition-all duration-500 flex flex-col md:flex-row gap-8">
                <div className="w-20 h-20 bg-surface-alt text-primary rounded-[2rem] flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                  <program.icon size={40} />
                </div>
                <div className="space-y-4">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 text-xs font-bold text-secondary uppercase tracking-widest">
                      <Icons.Clock size={14} /> {program.timeline}
                    </div>
                    <h4 className="text-2xl font-display font-bold text-text-main">{program.title}</h4>
                  </div>
                  <p className="text-muted leading-relaxed">{program.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Adult Education */}
        <section className="bg-primary p-12 lg:p-20 rounded-[4rem] text-white overflow-hidden relative">
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-4xl font-display font-bold leading-tight">
                  {education?.adultEducation?.title?.[lang]}
                </h2>
                <p className="text-white/80 text-lg leading-relaxed">
                  {education?.adultEducation?.description?.[lang]}
                </p>
              </div>
              <div className="grid grid-cols-1 gap-4">
                {adultBenefits.map((item, idx) => (
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
