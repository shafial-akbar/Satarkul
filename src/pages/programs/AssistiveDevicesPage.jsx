import React from 'react';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '../../context/LanguageContext';
import PageWrapper from '../../components/layout/PageWrapper';
import { motion } from 'motion/react';
import * as Icons from 'lucide-react';
import { devices, impactPoints } from '../../data/assistiveDevicesData';

export default function AssistiveDevicesPage() {
  const { t } = useTranslation();
  const { lang } = useLanguage();

  const getLocalized = (obj) => {
    if (!obj) return '';
    return obj[lang] || obj['en'] || '';
  };

  return (
    <PageWrapper 
      title={lang === 'en' ? 'Assistive Devices Distribution' : 'সহায়ক উপকরণ বিতরণ'}
      subtitle={lang === 'en' ? 'Enhancing mobility and accessibility through essential assistive tools.' : 'অপরিহার্য সহায়ক সরঞ্জামের মাধ্যমে গতিশীলতা এবং অ্যাক্সেসযোগ্যতা বৃদ্ধি।'}
    >
      <div className="space-y-24">
        
        {/* Hero / Advocacy Section */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-surface-alt text-primary rounded-full font-bold text-sm uppercase tracking-widest shadow-sm border border-border">
              <Icons.Sparkles size={18} /> {lang === 'en' ? 'Empowering Mobility' : 'গতিশীলতার ক্ষমতায়ন'}
            </div>
            <h2 className="text-4xl lg:text-5xl font-display font-bold text-text-main leading-tight">
              {lang === 'en' ? 'Tools for Independence' : 'স্বাধীনতার জন্য সরঞ্জাম'}
            </h2>
            <p className="text-muted leading-relaxed text-lg">
              {lang === 'en' 
                ? 'Through advocacy with various donor organizations and philanthropists, we distribute high-quality assistive devices to our members, ensuring they can navigate the world with dignity.' 
                : 'বিভিন্ন দাতা সংস্থা এবং জনহিতৈষীদের সাথে অ্যাডভোকেসির মাধ্যমে, আমরা আমাদের সদস্যদের মধ্যে উচ্চ-মানের সহায়ক সরঞ্জাম বিতরণ করি, যাতে তারা মর্যাদার সাথে চলাফেরা করতে পারে।'}
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-center gap-4 p-4 bg-white rounded-2xl border border-border shadow-sm">
                <div className="w-10 h-10 bg-primary/10 text-primary rounded-xl flex items-center justify-center">
                  <Icons.Clock size={20} />
                </div>
                <div>
                  <div className="text-xs font-bold text-muted uppercase tracking-widest">{lang === 'en' ? 'Timeline' : 'সময়কাল'}</div>
                  <div className="font-bold text-text-main">{lang === 'en' ? 'Ongoing' : 'চলমান'}</div>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 bg-white rounded-2xl border border-border shadow-sm">
                <div className="w-10 h-10 bg-secondary/10 text-secondary rounded-xl flex items-center justify-center">
                  <Icons.Users size={20} />
                </div>
                <div>
                  <div className="text-xs font-bold text-muted uppercase tracking-widest">{lang === 'en' ? 'Target Group' : 'লক্ষ্য দল'}</div>
                  <div className="font-bold text-text-main">{lang === 'en' ? 'Disabled Persons & Students' : 'প্রতিবন্ধী ব্যক্তি ও শিক্ষার্থী'}</div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-[3rem] blur-2xl opacity-50 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="relative rounded-[3rem] overflow-hidden aspect-square shadow-2xl border-8 border-white">
              <img 
                src="https://picsum.photos/seed/wheelchair/1000/1000" 
                alt="Assistive Devices Distribution" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-10">
                <div className="flex items-center gap-4 text-white">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center">
                    <Icons.HandHelping size={24} />
                  </div>
                  <div className="font-display font-bold text-xl">{lang === 'en' ? 'Advocacy & Support' : 'অ্যাডভোকেসি এবং সহায়তা'}</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Devices Grid */}
        <section className="space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-text-main">
              {lang === 'en' ? 'Devices Provided' : 'প্রদত্ত উপকরণসমূহ'}
            </h2>
            <p className="text-muted leading-relaxed">
              {lang === 'en' 
                ? 'We focus on four key areas of assistive technology to support different types of disabilities.' 
                : 'আমরা বিভিন্ন ধরণের প্রতিবন্ধকতা কাটিয়ে উঠতে সহায়ক প্রযুক্তির চারটি মূল ক্ষেত্রে ফোকাস করি।'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {devices.map((device, idx) => {
              const DeviceIcon = Icons[device.icon] || Icons.HelpCircle;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white p-8 rounded-[2.5rem] border border-border shadow-sm hover:shadow-xl transition-all duration-500 group text-center space-y-6"
                >
                  <div className={`w-20 h-20 mx-auto rounded-3xl ${device.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-sm`}>
                    <DeviceIcon size={40} />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-display font-bold text-text-main group-hover:text-primary transition-colors">
                      {getLocalized(device.title)}
                    </h3>
                    <p className="text-sm text-muted leading-relaxed">
                      {getLocalized(device.desc)}
                    </p>
                  </div>
                  <div className="pt-4">
                    <div className="inline-flex items-center gap-2 text-xs font-bold text-primary uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      {lang === 'en' ? 'Learn More' : 'আরও জানুন'} <Icons.ChevronRight size={14} />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* Impact Section */}
        <section className="bg-surface-alt p-12 lg:p-20 rounded-[4rem] border border-border relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
            <div className="space-y-8">
              <h2 className="text-3xl lg:text-4xl font-display font-bold text-text-main leading-tight">
                {lang === 'en' ? 'Why Assistive Technology Matters' : 'সহায়ক প্রযুক্তি কেন গুরুত্বপূর্ণ'}
              </h2>
              <div className="space-y-6">
                {impactPoints.map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="shrink-0 w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center mt-1">
                      <Icons.CheckCircle2 size={14} />
                    </div>
                    <div>
                      <h4 className="font-bold text-text-main">{getLocalized(item.title)}</h4>
                      <p className="text-sm text-muted">{getLocalized(item.desc)}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-[2rem] overflow-hidden shadow-lg">
                <img src="https://picsum.photos/seed/mobility/600/800" alt="Mobility" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
              <div className="rounded-[2rem] overflow-hidden shadow-lg mt-8">
                <img src="https://picsum.photos/seed/support/600/800" alt="Vision" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
            </div>
          </div>
          {/* Decorative background element */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full translate-x-1/2 -translate-y-1/2 blur-3xl" />
        </section>

        {/* CTA Section */}
        <section className="bg-primary p-12 lg:p-20 rounded-[4rem] text-white text-center space-y-8 relative overflow-hidden">
          <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            <h2 className="text-4xl font-display font-bold">{lang === 'en' ? 'Give the Gift of Mobility' : 'গতিশীলতার উপহার দিন'}</h2>
            <p className="text-white/80 text-lg">
              {lang === 'en' 
                ? 'Your contribution can provide a wheelchair or a white cane to someone who has been waiting for years.' 
                : 'আপনার অবদান এমন কাউকে হুইলচেয়ার বা সাদা ছড়ি দিতে পারে যে বছরের পর বছর ধরে অপেক্ষা করছে।'}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="px-10 py-4 bg-white text-primary rounded-full font-bold text-lg hover:scale-105 transition-all shadow-xl">
                {lang === 'en' ? 'Donate a Device' : 'একটি সরঞ্জাম দান করুন'}
              </button>
              <button className="px-10 py-4 bg-transparent border-2 border-white text-white rounded-full font-bold text-lg hover:bg-white/10 transition-all">
                {lang === 'en' ? 'Partner with Us' : 'আমাদের সাথে অংশীদার হন'}
              </button>
            </div>
          </div>
          <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/20 rounded-full translate-x-1/4 translate-y-1/4 blur-3xl" />
        </section>

      </div>
    </PageWrapper>
  );
}
