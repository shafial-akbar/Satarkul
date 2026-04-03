import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { useContent } from '../../context/ContentContext';
import PageWrapper from '../../components/layout/PageWrapper';
import { motion } from 'motion/react';
import * as Icons from 'lucide-react';

export default function SkillDevelopmentPage() {
  const { lang } = useLanguage();
  const { content } = useContent();

  const skillDev = content?.programs?.details?.['skill-development'];

  const courses = (skillDev?.courses || []).map(course => ({
    ...course,
    title: course.title?.[lang] || course.title?.en || '',
    desc: course.desc?.[lang] || course.desc?.en || '',
    timeline: course.timeline?.[lang] || course.timeline?.en || '',
    icon: Icons[course.icon] || Icons.HelpCircle
  }));

  const projects = (skillDev?.projects || []).map(project => ({
    ...project,
    title: project.title?.[lang] || project.title?.en || '',
    desc: project.desc?.[lang] || project.desc?.en || '',
    partner: project.partner?.[lang] || project.partner?.en || '',
    duration: project.duration?.[lang] || project.duration?.en || '',
    participants: project.participants?.[lang] || project.participants?.en || '',
    icon: Icons[project.icon] || Icons.Award
  }));

  return (
    <PageWrapper 
      title={skillDev?.title?.[lang]}
      subtitle={skillDev?.subtitle?.[lang]}
    >
      <div className="space-y-24">
        {/* Intro Section */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-surface-alt text-primary rounded-full font-bold text-sm uppercase tracking-widest">
                <Icons.Briefcase size={18} /> {skillDev?.intro?.tag?.[lang]}
              </div>
              <h2 className="text-4xl lg:text-5xl font-display font-bold text-text-main leading-tight">
                {skillDev?.intro?.title?.[lang]}
              </h2>
              <p className="text-lg text-muted leading-relaxed">
                {skillDev?.intro?.description?.[lang]}
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4">
              <div className="flex items-center gap-4 p-4 bg-white rounded-2xl border border-border shadow-sm">
                <div className="w-12 h-12 bg-surface-alt text-primary rounded-xl flex items-center justify-center shrink-0">
                  <Icons.Users size={24} />
                </div>
                <div>
                  <p className="text-xs font-bold text-muted uppercase tracking-wider">{skillDev?.intro?.targetGroupLabel?.[lang]}</p>
                  <p className="font-bold text-text-main">{skillDev?.intro?.targetGroup?.[lang]}</p>
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
            <h2 className="text-3xl font-display font-bold text-text-main">{skillDev?.coursesTitle?.[lang]}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {courses.map((skill, idx) => (
              <div key={idx} className="bg-white p-8 rounded-[2.5rem] border border-border hover:border-primary transition-all duration-500 shadow-sm group">
                <div className="w-16 h-16 bg-surface-alt text-primary rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-all">
                  <skill.icon size={32} />
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-xs font-bold text-secondary uppercase tracking-widest">
                    <Icons.Clock size={14} /> {skill.timeline}
                  </div>
                  <h3 className="text-2xl font-display font-bold text-text-main">{skill.title}</h3>
                  <p className="text-muted leading-relaxed">{skill.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Featured Projects */}
        <section className="space-y-12">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-display font-bold text-text-main">{skillDev?.projectsTitle?.[lang]}</h2>
          </div>
          <div className="grid grid-cols-1 gap-8">
            {projects.map((project, idx) => (
              <div key={idx} className="bg-white rounded-[3rem] border border-border overflow-hidden shadow-lg flex flex-col lg:flex-row">
                <div className="lg:w-1/3 bg-surface-alt p-12 flex flex-col justify-center space-y-6">
                  <div className="w-16 h-16 bg-white text-primary rounded-2xl flex items-center justify-center shadow-sm">
                    <project.icon size={32} />
                  </div>
                  <div className="space-y-2">
                    <p className="text-xs font-bold text-secondary uppercase tracking-widest">{skillDev?.partnerLabel?.[lang]}</p>
                    <p className="text-xl font-display font-bold text-text-main">{project.partner}</p>
                  </div>
                  <div className="space-y-4 pt-4 border-t border-border/50">
                    <div className="flex items-center gap-3 text-sm font-bold text-muted">
                      <Icons.Calendar size={18} className="text-primary" />
                      {project.duration}
                    </div>
                    <div className="flex items-center gap-3 text-sm font-bold text-muted">
                      <Icons.Users size={18} className="text-primary" />
                      {project.participants}
                    </div>
                  </div>
                </div>
                <div className="lg:w-2/3 p-12 flex flex-col justify-center space-y-6">
                  <h3 className="text-3xl font-display font-bold text-text-main">{project.title}</h3>
                  <p className="text-lg text-muted leading-relaxed">{project.desc}</p>
                  <div className="flex flex-wrap gap-3">
                    {(project.tags?.[lang] || []).map((tag, tIdx) => (
                      <span key={tIdx} className="px-4 py-1.5 bg-surface-alt text-primary rounded-full text-xs font-bold uppercase tracking-wider">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Training Gallery */}
        <section className="space-y-12">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-display font-bold text-text-main">{skillDev?.galleryTitle?.[lang]}</h2>
            <p className="text-muted mt-4">
              {skillDev?.gallerySubtitle?.[lang]}
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {(skillDev?.galleryItems || []).map((item, i) => (
              <motion.div 
                key={i}
                whileHover={{ scale: 1.05 }}
                className="relative group rounded-3xl overflow-hidden shadow-md aspect-square"
              >
                <img 
                  src={item.url || `https://picsum.photos/seed/${item.seed}/600/600`} 
                  alt={item.label?.[lang]} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <p className="text-white font-bold">{item.label?.[lang]}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-secondary p-12 lg:p-20 rounded-[4rem] text-white text-center space-y-8 relative overflow-hidden">
          <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            <h2 className="text-4xl font-display font-bold">{skillDev?.ctaTitle?.[lang]}</h2>
            <p className="text-white/80 text-lg">
              {skillDev?.ctaDescription?.[lang]}
            </p>
            <button className="px-10 py-4 bg-white text-secondary rounded-full font-bold text-lg hover:scale-105 transition-all shadow-xl">
              {skillDev?.ctaButton?.[lang]}
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
