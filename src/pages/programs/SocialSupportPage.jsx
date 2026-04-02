import React from 'react';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '../../context/LanguageContext';
import PageWrapper from '../../components/layout/PageWrapper';
import { motion } from 'motion/react';
import * as Icons from 'lucide-react';
import { socialSupportServices } from '../../data/socialSupportData';

export default function SocialSupportPage() {
  const { t } = useTranslation();
  const { lang } = useLanguage();

  const getLocalized = (obj) => {
    if (!obj) return '';
    return obj[lang] || obj['en'] || '';
  };

  return (
    <PageWrapper 
      title={lang === 'en' ? 'Social Support Services' : 'সামাজিক সহায়তা সেবা'}
      subtitle={lang === 'en' ? 'Empowering disabled individuals through documentation and legal assistance.' : 'নথিপত্র এবং আইনি সহায়তার মাধ্যমে প্রতিবন্ধী ব্যক্তিদের ক্ষমতায়ন।'}
    >
      <div className="space-y-24">
        {/* Intro Section */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-surface-alt text-primary rounded-full font-bold text-sm uppercase tracking-widest">
                <Icons.ShieldCheck size={18} /> {lang === 'en' ? 'Rights & Protection' : 'অধিকার ও সুরক্ষা'}
              </div>
              <h2 className="text-4xl lg:text-5xl font-display font-bold text-text-main leading-tight">
                {lang === 'en' ? 'Ensuring Your Rights and Identity' : 'আপনার অধিকার এবং পরিচয় নিশ্চিত করা'}
              </h2>
            </div>
            <p className="text-muted leading-relaxed text-lg">
              {lang === 'en' 
                ? 'At SPUS, we believe that every individual deserves recognition and legal protection. Our social support services are designed to bridge the gap between disabled persons and the essential government services they are entitled to. From birth registration to legal advocacy, we stand by our members every step of the way.' 
                : 'এসপিইউএস-এ আমরা বিশ্বাস করি যে প্রতিটি ব্যক্তির স্বীকৃতি এবং আইনি সুরক্ষা প্রাপ্য। আমাদের সামাজিক সহায়তা সেবাগুলো প্রতিবন্ধী ব্যক্তি এবং তারা যে প্রয়োজনীয় সরকারি সেবাগুলোর অধিকারী তার মধ্যে ব্যবধান ঘুচিয়ে দেওয়ার জন্য ডিজাইন করা হয়েছে। জন্ম নিবন্ধন থেকে শুরু করে আইনি অ্যাডভোকেসি পর্যন্ত, আমরা আমাদের সদস্যদের পাশে প্রতিটি পদক্ষেপে থাকি।'}
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="px-8 py-4 bg-primary text-white rounded-2xl font-bold hover:bg-primary/90 transition-all shadow-lg shadow-primary/20">
                {lang === 'en' ? 'Request Support' : 'সহায়তা অনুরোধ করুন'}
              </button>
              <button className="px-8 py-4 bg-surface-alt text-text-main rounded-2xl font-bold hover:bg-border transition-all">
                {lang === 'en' ? 'Learn More' : 'আরও জানুন'}
              </button>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-[4rem] overflow-hidden shadow-2xl">
              <img 
                src="https://picsum.photos/seed/legal/1000/1000" 
                alt="Legal Support" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 bg-white p-8 rounded-3xl shadow-xl border border-border max-w-xs">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-accent/10 text-accent rounded-xl flex items-center justify-center">
                  <Icons.Award size={24} />
                </div>
                <div>
                  <p className="text-text-main font-bold">{lang === 'en' ? 'Certified Support' : 'প্রত্যয়িত সহায়তা'}</p>
                  <p className="text-xs text-muted">{lang === 'en' ? 'Legal & Admin Experts' : 'আইনি ও প্রশাসনিক বিশেষজ্ঞ'}</p>
                </div>
              </div>
              <p className="text-sm text-muted italic">
                {lang === 'en' ? '"Helping over 500+ members secure their legal identity."' : '"৫০০+ এর বেশি সদস্যকে তাদের আইনি পরিচয় নিশ্চিত করতে সাহায্য করছি।"'}
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-text-main">
              {lang === 'en' ? 'Our Support Areas' : 'আমাদের সহায়তা ক্ষেত্রসমূহ'}
            </h2>
            <p className="text-muted">
              {lang === 'en' ? 'Comprehensive assistance tailored to the unique needs of persons with disabilities.' : 'প্রতিবন্ধী ব্যক্তিদের অনন্য প্রয়োজনের জন্য উপযোগী ব্যাপক সহায়তা।'}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {socialSupportServices.map((service, idx) => {
              const ServiceIcon = Icons[service.icon] || Icons.HelpCircle;
              return (
                <motion.div 
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="group bg-white p-10 rounded-[3rem] border border-border hover:border-primary shadow-lg transition-all duration-500"
                >
                  <div className="flex flex-col lg:flex-row gap-8">
                    <div className={`w-20 h-20 ${service.color} rounded-[2rem] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-500`}>
                      <ServiceIcon size={40} />
                    </div>
                    <div className="space-y-6">
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-xs font-bold text-secondary uppercase tracking-widest">
                          <Icons.Clock size={14} /> {getLocalized(service.timeline)}
                        </div>
                        <h3 className="text-2xl lg:text-3xl font-display font-bold text-text-main leading-tight">
                          {getLocalized(service.title)}
                        </h3>
                      </div>
                      <p className="text-muted leading-relaxed">
                        {getLocalized(service.desc)}
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {service.features.map((feature, fIdx) => (
                          <div key={fIdx} className="flex items-center gap-2 text-sm font-bold text-text-main">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                            {getLocalized(feature)}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="bg-secondary p-12 lg:p-20 rounded-[4rem] text-white overflow-hidden relative">
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="max-w-2xl space-y-6">
              <h2 className="text-4xl font-display font-bold leading-tight">
                {lang === 'en' ? 'Need Legal or Documentation Help?' : 'আইনি বা নথিপত্র সংক্রান্ত সাহায্য প্রয়োজন?'}
              </h2>
              <p className="text-white/80 text-lg">
                {lang === 'en' 
                  ? 'Our team is ready to assist you. Whether it is a survey, identity card, or legal advice, we are here to help you navigate the process.' 
                  : 'আমাদের টিম আপনাকে সাহায্য করার জন্য প্রস্তুত। জরিপ, পরিচয় পত্র বা আইনি পরামর্শ যাই হোক না কেন, আমরা আপনাকে প্রক্রিয়াটি সম্পন্ন করতে সাহায্য করতে এখানে আছি।'}
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/20">
                  <Icons.Phone size={24} className="text-accent" />
                  <div>
                    <p className="text-xs text-white/60 uppercase tracking-widest font-bold">{lang === 'en' ? 'Call Us' : 'আমাদের কল করুন'}</p>
                    <p className="font-bold">+880 1712-345678</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/20">
                  <Icons.Mail size={24} className="text-accent" />
                  <div>
                    <p className="text-xs text-white/60 uppercase tracking-widest font-bold">{lang === 'en' ? 'Email Us' : 'আমাদের ইমেল করুন'}</p>
                    <p className="font-bold">support@spus.org</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="shrink-0">
              <button className="px-12 py-6 bg-accent text-white rounded-3xl font-bold text-xl hover:bg-accent/90 transition-all shadow-2xl shadow-accent/40 flex items-center gap-3">
                {lang === 'en' ? 'Contact Support' : 'সহায়তা যোগাযোগ'} <Icons.ArrowRight size={24} />
              </button>
            </div>
          </div>
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl translate-x-1/4 translate-y-1/4" />
        </section>
      </div>
    </PageWrapper>
  );
}
