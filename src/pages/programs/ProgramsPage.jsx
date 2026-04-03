import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { useContent } from '../../context/ContentContext';
import PageWrapper from '../../components/layout/PageWrapper';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import * as Icons from 'lucide-react';

const iconMap = {
  'education': Icons.GraduationCap,
  'health': Icons.HeartPulse,
  'skill-development': Icons.Palette,
  'financial-support': Icons.Banknote,
  'assistive-devices': Icons.Accessibility,
  'awareness': Icons.Megaphone,
  'social-support': Icons.ShieldCheck,
  'special-programs': Icons.Sparkles
};

const colorMap = {
  'education': 'bg-primary',
  'health': 'bg-secondary',
  'skill-development': 'bg-accent',
  'financial-support': 'bg-primary',
  'assistive-devices': 'bg-secondary',
  'awareness': 'bg-accent',
  'social-support': 'bg-primary',
  'special-programs': 'bg-secondary'
};

export default function ProgramsPage() {
  const { lang } = useLanguage();
  const { content } = useContent();

  const programsData = content?.programs;
  
  const programs = (programsData?.list || []).map(program => ({
    ...program,
    to: `/programs/${program.id}`,
    title: program.title?.[lang] || program.title?.en || '',
    desc: program.desc?.[lang] || program.desc?.en || '',
    icon: iconMap[program.id] || Icons.HelpCircle,
    color: colorMap[program.id] || 'bg-primary'
  }));

  return (
    <PageWrapper 
      title={programsData?.page?.title?.[lang]}
      subtitle={programsData?.page?.subtitle?.[lang]}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {programs.map((program, idx) => (
          <motion.div
            key={program.id}
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
                  {programsData?.learnMore?.[lang]}
                  <Icons.ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
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
