import React from 'react';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '../../context/LanguageContext';
import PageWrapper from '../../components/layout/PageWrapper';
import { motion } from 'motion/react';
import * as Icons from 'lucide-react';
import { awarenessPrograms } from '../../data/awarenessData';

const { 
  Users, 
  CheckCircle2, 
  ShieldAlert, 
  Megaphone, 
  FileText,
  Scale
} = Icons;

export default function AwarenessPage() {
  const { t } = useTranslation();
  const { lang } = useLanguage();

  // Helper to get localized string
  const getLocalized = (obj) => {
    if (!obj) return '';
    return typeof obj === 'string' ? obj : (obj[lang] || obj['en']);
  };

  return (
    <PageWrapper 
      title={lang === 'en' ? 'Awareness Programs' : 'সচেতনতামূলক কার্যক্রম'}
      subtitle={lang === 'en' ? 'Educating and empowering our community through targeted awareness initiatives.' : 'লক্ষ্যযুক্ত সচেতনতামূলক উদ্যোগের মাধ্যমে আমাদের সম্প্রদায়কে শিক্ষিত এবং ক্ষমতায়ন করা।'}
    >
      <div className="space-y-24">
        
        {/* Intro Section */}
        <section className="bg-surface-alt p-8 lg:p-16 rounded-[3rem] border border-border relative overflow-hidden">
          <div className="max-w-3xl space-y-6 relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white text-primary rounded-full font-bold text-sm uppercase tracking-widest shadow-sm">
              <Megaphone size={18} /> {lang === 'en' ? 'Voice of Change' : 'পরিবর্তনের কণ্ঠস্বর'}
            </div>
            <h2 className="text-4xl lg:text-5xl font-display font-bold text-text-main leading-tight">
              {lang === 'en' ? 'Building a Conscious Community' : 'একটি সচেতন সমাজ গঠন'}
            </h2>
            <p className="text-muted leading-relaxed text-lg">
              {lang === 'en' 
                ? 'We believe that awareness is the first step toward inclusion. Our programs tackle health, rights, and environmental challenges to ensure our members are informed and protected.' 
                : 'আমরা বিশ্বাস করি যে সচেতনতা অন্তর্ভুক্তির প্রথম পদক্ষেপ। আমাদের কর্মসূচিগুলো স্বাস্থ্য, অধিকার এবং পরিবেশগত চ্যালেঞ্জ মোকাবিলায় আমাদের সদস্যদের অবহিত ও সুরক্ষিত রাখে।'}
            </p>
          </div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full translate-x-1/4 -translate-y-1/4 blur-3xl" />
        </section>

        {/* Awareness Grid */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {awarenessPrograms.map((program, idx) => {
            const IconComponent = Icons[program.icon] || Icons.HelpCircle;
            return (
              <motion.div
                key={program.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05 }}
                className="group bg-white rounded-[2.5rem] border border-border overflow-hidden hover:shadow-2xl transition-all duration-500 flex flex-col"
              >
                <div className="aspect-[16/9] relative overflow-hidden">
                  <img 
                    src={program.image} 
                    alt={getLocalized(program.title)} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-6 left-6">
                    <div className={`w-14 h-14 rounded-2xl ${program.color} flex items-center justify-center shadow-lg backdrop-blur-sm`}>
                      <IconComponent size={28} />
                    </div>
                  </div>
                  <div className="absolute bottom-6 right-6">
                    <div className="px-4 py-1.5 bg-white/90 backdrop-blur-md rounded-full text-[10px] font-bold text-muted uppercase tracking-widest shadow-sm">
                      {getLocalized(program.date)}
                    </div>
                  </div>
                </div>
                
                <div className="p-8 lg:p-10 flex-grow space-y-6">
                  <h3 className="text-2xl font-display font-bold text-text-main group-hover:text-primary transition-colors">
                    {getLocalized(program.title)}
                  </h3>
                  <p className="text-muted leading-relaxed">
                    {getLocalized(program.description)}
                  </p>

                  {program.special && (
                    <div className="p-6 bg-amber-50 rounded-3xl border border-amber-100 space-y-3">
                      <div className="flex items-center gap-2 text-amber-700 font-bold text-sm">
                        <ShieldAlert size={18} /> {getLocalized(program.special.title)}
                      </div>
                      <p className="text-xs text-amber-800/80 leading-relaxed">
                        {getLocalized(program.special.desc)}
                      </p>
                      <div className="text-[10px] font-bold text-amber-600 uppercase tracking-widest">
                        {getLocalized(program.special.date)}
                      </div>
                    </div>
                  )}

                  {program.id === 'disability-rights' && (
                    <div className="grid grid-cols-2 gap-3 pt-2">
                      {[
                        lang === 'en' ? 'Identity Cards' : 'পরিচয় পত্র',
                        lang === 'en' ? 'Allowances' : 'ভাতা',
                        lang === 'en' ? 'Birth Reg.' : 'জন্ম নিবন্ধন',
                        lang === 'en' ? 'Scholarships' : 'উপবৃত্তি'
                      ].map((tag, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs font-medium text-muted">
                          <CheckCircle2 size={12} className="text-primary" /> {tag}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </section>

        {/* Rights & Advocacy Section */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative rounded-[3rem] overflow-hidden aspect-square shadow-2xl">
            <img 
              src="https://picsum.photos/seed/advocacy/1000/1000" 
              alt="Disability Rights Advocacy" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-12">
              <div className="space-y-2">
                <div className="text-accent font-bold uppercase tracking-widest text-sm">{lang === 'en' ? 'Ongoing Support' : 'চলমান সহায়তা'}</div>
                <h3 className="text-white text-3xl font-display font-bold">{lang === 'en' ? 'Disability Rights & Legal Aid' : 'প্রতিবন্ধী অধিকার ও আইনি সহায়তা'}</h3>
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-text-main">
              {lang === 'en' ? 'Advocating for Inclusion' : 'অন্তর্ভুক্তির জন্য অ্যাডভোকেসি'}
            </h2>
            <p className="text-muted leading-relaxed text-lg">
              {lang === 'en' 
                ? 'Beyond health awareness, we actively work to ensure that persons with disabilities have access to their legal rights and government services.' 
                : 'স্বাস্থ্য সচেতনতার বাইরে, আমরা সক্রিয়ভাবে কাজ করি যাতে প্রতিবন্ধী ব্যক্তিরা তাদের আইনি অধিকার এবং সরকারি সেবাগুলো সহজে পেতে পারে।'}
            </p>
            <div className="space-y-4">
              {[
                { icon: FileText, text: lang === 'en' ? 'Assistance with Disability Identity Cards' : 'প্রতিবন্ধী পরিচয় পত্র প্রাপ্তিতে সহায়তা' },
                { icon: Users, text: lang === 'en' ? 'Mainstream School Inclusion Meetings' : 'মূলধারার বিদ্যালয়ে অন্তর্ভুক্তিমূলক সভা' },
                { icon: Scale, text: lang === 'en' ? 'Legal Awareness and Rights Education' : 'আইনি সচেতনতা এবং অধিকার শিক্ষা' }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 p-4 bg-white rounded-2xl border border-border hover:border-primary transition-colors cursor-default">
                  <div className="w-10 h-10 bg-primary/10 text-primary rounded-xl flex items-center justify-center">
                    <item.icon size={20} />
                  </div>
                  <span className="font-bold text-text-main">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-secondary p-12 lg:p-20 rounded-[4rem] text-white text-center space-y-8 relative overflow-hidden">
          <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            <h2 className="text-4xl font-display font-bold">{lang === 'en' ? 'Join the Movement' : 'আন্দোলনে যোগ দিন'}</h2>
            <p className="text-white/80 text-lg">
              {lang === 'en' 
                ? 'Help us spread awareness and build a more inclusive society for everyone.' 
                : 'সচেতনতা ছড়িয়ে দিতে এবং সবার জন্য একটি অন্তর্ভুক্তিমূলক সমাজ গঠনে আমাদের সহায়তা করুন।'}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="px-10 py-4 bg-white text-secondary rounded-full font-bold text-lg hover:scale-105 transition-all shadow-xl">
                {lang === 'en' ? 'Volunteer with Us' : 'আমাদের সাথে স্বেচ্ছাসেবক হন'}
              </button>
              <button className="px-10 py-4 bg-transparent border-2 border-white text-white rounded-full font-bold text-lg hover:bg-white/10 transition-all">
                {lang === 'en' ? 'Contact for Awareness' : 'সচেতনতার জন্য যোগাযোগ করুন'}
              </button>
            </div>
          </div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full translate-x-1/2 -translate-y-1/2 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/20 rounded-full -translate-x-1/4 translate-y-1/4 blur-3xl" />
        </section>

      </div>
    </PageWrapper>
  );
}
