import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '../../context/LanguageContext';
import { useContent } from '../../context/ContentContext';
import PageWrapper from '../../components/layout/PageWrapper';
import { motion } from 'motion/react';
import * as Icons from 'lucide-react';
import { donorsData } from '../../data/donorsData';
import { getDonorContributions } from '../../api/apiClient';

export default function DonorsPage() {
  const { t } = useTranslation();
  const { lang } = useLanguage();
  const { content } = useContent();
  const [contributions, setContributions] = useState(null);

  useEffect(() => {
    getDonorContributions().then(setContributions);
  }, []);

  const donors = content?.support?.donors;

  const getLocalized = (obj) => {
    if (!obj) return '';
    return obj[lang] || obj['en'] || '';
  };

  return (
    <PageWrapper 
      title={donors?.page?.title?.[lang] || (lang === 'en' ? 'Our Recent Donors' : 'সাম্প্রতিক দাতা সংস্থা')}
      subtitle={donors?.page?.subtitle?.[lang] || (lang === 'en' ? 'We are deeply grateful to the organizations that support our mission to empower persons with disabilities.' : 'প্রতিবন্ধী ব্যক্তিদের ক্ষমতায়নের লক্ষ্যে আমাদের মিশনকে সমর্থনকারী সংস্থাগুলোর প্রতি আমরা গভীরভাবে কৃতজ্ঞ।')}
    >
      <div className="space-y-24">
        {/* Intro Section */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/10 text-secondary rounded-full font-bold text-sm uppercase tracking-widest">
                <Icons.Heart size={18} /> {lang === 'en' ? 'Partners in Impact' : 'প্রভাবের অংশীদার'}
              </div>
              <h2 className="text-4xl lg:text-5xl font-display font-bold text-text-main leading-tight">
                {lang === 'en' ? 'Together We Create Change' : 'একসাথে আমরা পরিবর্তন আনি'}
              </h2>
            </div>
            <p className="text-muted leading-relaxed text-lg">
              {lang === 'en' 
                ? 'Our work would not be possible without the generous support of our donors and partners. Their commitment to social justice and inclusion allows us to provide essential services, education, and advocacy for the disability community in Bangladesh.' 
                : 'আমাদের দাতাদের এবং অংশীদারদের উদার সমর্থন ছাড়া আমাদের কাজ সম্ভব হতো না। সামাজিক ন্যায়বিচার এবং অন্তর্ভুক্তির প্রতি তাদের প্রতিশ্রুতি আমাদের বাংলাদেশের প্রতিবন্ধী সম্প্রদায়ের জন্য প্রয়োজনীয় সেবা, শিক্ষা এবং অ্যাডভোকেসি প্রদানের সুযোগ করে দেয়।'}
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 px-4 py-2 bg-surface-alt rounded-xl border border-border">
                <Icons.CheckCircle2 size={18} className="text-primary" />
                <span className="text-sm font-bold text-text-main">{lang === 'en' ? 'Transparent Funding' : 'স্বচ্ছ অর্থায়ন'}</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-surface-alt rounded-xl border border-border">
                <Icons.CheckCircle2 size={18} className="text-primary" />
                <span className="text-sm font-bold text-text-main">{lang === 'en' ? 'Accountable Impact' : 'জবাবদিহিমূলক প্রভাব'}</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-video rounded-[3rem] overflow-hidden shadow-2xl">
              <img 
                src="https://picsum.photos/seed/partnership-impact/1200/800" 
                alt="Support and Partnership" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 bg-white p-8 rounded-3xl shadow-xl border border-border max-w-xs hidden md:block">
              <p className="text-primary font-display font-bold text-4xl mb-2">100%</p>
              <p className="text-text-main font-bold mb-2">{lang === 'en' ? 'Direct Impact' : 'সরাসরি প্রভাব'}</p>
              <p className="text-sm text-muted">
                {lang === 'en' ? 'Every donation goes directly towards our programs and services.' : 'প্রতিটি অনুদান সরাসরি আমাদের কার্যক্রম এবং সেবার দিকে যায়।'}
              </p>
            </div>
          </div>
        </section>

        {/* Donors Grid */}
        <section className="space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-text-main">
              {lang === 'en' ? 'Our Esteemed Donors' : 'আমাদের সম্মানিত দাতাগণ'}
            </h2>
            <p className="text-muted">
              {lang === 'en' ? 'We are proud to work with these leading organizations to drive social inclusion.' : 'সামাজিক অন্তর্ভুক্তি নিশ্চিত করতে আমরা এই শীর্ষস্থানীয় সংস্থাগুলোর সাথে কাজ করতে পেরে গর্বিত।'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {donorsData.map((donor, idx) => (
              <motion.div
                key={donor.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="group bg-white rounded-[3rem] border border-border overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 flex flex-col"
              >
                <div className="p-10 space-y-8 flex-grow">
                  <div className="flex items-center justify-between">
                    <div className="w-20 h-25 bg-white rounded-2xl flex items-center justify-center p-2 group-hover:scale-110 transition-transform duration-500 border border-border overflow-hidden">
                      <img 
                        src={donor.logo} 
                        alt={donor.name} 
                        className="w-full h-full object-contain"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <span className="px-4 py-1 bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-widest rounded-full border border-primary/20">
                      {donor.category}
                    </span>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-2xl font-display font-bold text-text-main group-hover:text-primary transition-colors">
                      {donor.name}
                    </h3>
                    <p className="text-muted leading-relaxed">
                      {getLocalized(donor.description)}
                    </p>
                  </div>
                </div>
                <div className="px-10 py-6 bg-surface-alt border-t border-border flex items-center justify-between">
                  <span className="text-xs font-bold text-muted uppercase tracking-widest">
                    {lang === 'en' ? 'Partner Since 2022' : '২০২২ থেকে অংশীদার'}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-white border border-border text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all">
                    <Icons.ExternalLink size={16} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Donor Contributions - New Section */}
        {contributions && (
          <section className="space-y-16">
            <div className="text-center max-w-3xl mx-auto space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/5 text-primary rounded-full font-bold text-sm uppercase tracking-widest border border-primary/10">
                <Icons.Award size={18} /> {lang === 'en' ? 'Impact Breakdown' : 'প্রভাবের বিস্তারিত'}
              </div>
              <h2 className="text-4xl lg:text-5xl font-display font-bold text-text-main leading-tight">
                {contributions.title?.[lang] || contributions.title?.en}
              </h2>
              <p className="text-muted text-lg">
                {contributions.subtitle?.[lang] || contributions.subtitle?.en}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {contributions.categories.map((category, catIdx) => {
                const Icon = Icons[category.icon] || Icons.Circle;
                return (
                  <motion.div
                    key={category.id}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: catIdx * 0.1 }}
                    className="bg-white rounded-[2.5rem] border border-border p-8 shadow-sm hover:shadow-xl transition-all duration-300 group"
                  >
                    <div className="flex items-center gap-4 mb-8">
                      <div className="w-14 h-14 bg-primary/10 text-primary rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                        <Icon size={28} />
                      </div>
                      <h3 className="text-2xl font-display font-bold text-text-main">
                        {category.title?.[lang] || category.title?.en}
                      </h3>
                    </div>

                    <div className="space-y-6">
                      {category.items.map((item, itemIdx) => (
                        <div key={itemIdx} className="space-y-3">
                          <p className="text-sm font-bold text-primary flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                            {item.label?.[lang] || item.label?.en}
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {item.contributors.map((contributor, conIdx) => (
                              <span 
                                key={conIdx} 
                                className="px-3 py-1 bg-surface-alt text-muted text-[11px] font-medium rounded-lg border border-border hover:border-primary/30 hover:text-primary transition-colors cursor-default"
                              >
                                {contributor}
                              </span>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </section>
        )}

        {/* Call to Action */}
        <section className="bg-primary p-12 lg:p-20 rounded-[4rem] text-white overflow-hidden relative">
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl font-display font-bold leading-tight">
                {lang === 'en' ? 'Become a Partner in Our Mission' : 'আমাদের মিশনের অংশীদার হন'}
              </h2>
              <p className="text-white/80 text-lg leading-relaxed">
                {lang === 'en' 
                  ? 'Join our network of donors and help us create a more inclusive world for persons with disabilities. Your contribution can change lives.' 
                  : 'আমাদের দাতাদের নেটওয়ার্কে যোগ দিন এবং প্রতিবন্ধী ব্যক্তিদের জন্য আরও অন্তর্ভুক্তিমূলক বিশ্ব তৈরিতে আমাদের সাহায্য করুন। আপনার অবদান জীবন বদলে দিতে পারে।'}
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="px-10 py-5 bg-white text-primary rounded-2xl font-bold text-lg shadow-xl hover:bg-surface-alt transition-all">
                  {lang === 'en' ? 'Partner With Us' : 'আমাদের সাথে অংশীদার হন'}
                </button>
                <button className="px-10 py-5 bg-transparent border-2 border-white text-white rounded-2xl font-bold text-lg hover:bg-white/10 transition-all">
                  {lang === 'en' ? 'View Impact Reports' : 'প্রভাব প্রতিবেদন দেখুন'}
                </button>
              </div>
            </div>
            <div className="relative hidden lg:block">
              <div className="w-full aspect-square bg-white/10 backdrop-blur-3xl rounded-full flex items-center justify-center p-12 border border-white/20 animate-pulse">
                <Icons.Handshake size={120} className="text-white/40" />
              </div>
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
