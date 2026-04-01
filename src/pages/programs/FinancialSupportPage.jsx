import React from 'react';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '../../context/LanguageContext';
import PageWrapper from '../../components/layout/PageWrapper';
import { motion } from 'motion/react';
import * as Icons from 'lucide-react';
import { financialGrants, smeLoans } from '../../data/financialData';

export default function FinancialSupportPage() {
  const { t } = useTranslation();
  const { lang } = useLanguage();

  const getLocalized = (obj) => {
    if (!obj) return '';
    return obj[lang] || obj['en'] || '';
  };

  const getIcon = (name) => {
    const Icon = Icons[name] || Icons.HelpCircle;
    return <Icon size={24} />;
  };

  return (
    <PageWrapper 
      title={lang === 'en' ? 'SME Loans & Financial Support' : 'SME ঋণ ও আর্থিক অনুদান'}
      subtitle={lang === 'en' ? 'Empowering entrepreneurs with disabilities through financial inclusion and business grants.' : 'আর্থিক অন্তর্ভুক্তি এবং ব্যবসায়িক অনুদানের মাধ্যমে প্রতিবন্ধী উদ্যোক্তাদের ক্ষমতায়ন।'}
    >
      <div className="space-y-24">
        
        {/* Hero Section / Overview */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center bg-surface-alt p-8 lg:p-16 rounded-[3rem] border border-border">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white text-primary rounded-full font-bold text-sm uppercase tracking-widest shadow-sm">
              <Icons.Target size={18} /> {lang === 'en' ? 'Our Target' : 'আমাদের লক্ষ্য'}
            </div>
            <h2 className="text-4xl lg:text-5xl font-display font-bold text-text-main leading-tight">
              {lang === 'en' ? 'Breaking Barriers with Capital' : 'পুঁজির মাধ্যমে বাধা অতিক্রম'}
            </h2>
            <p className="text-muted leading-relaxed text-lg">
              {lang === 'en' 
                ? 'We provide targeted financial assistance and low-interest SME loans to help persons with disabilities and their families start or expand small businesses.' 
                : 'আমরা প্রতিবন্ধী ব্যক্তি এবং তাদের পরিবারকে ক্ষুদ্র ব্যবসা শুরু বা সম্প্রসারণে সহায়তা করার জন্য লক্ষ্যযুক্ত আর্থিক সহায়তা এবং স্বল্প সুদে SME ঋণ প্রদান করি।'}
            </p>
            <div className="flex items-center gap-4 text-primary font-bold">
              <Icons.Users size={24} />
              <span>{lang === 'en' ? 'Target: Disabled persons, students & parents' : 'লক্ষ্য দল: প্রতিবন্ধী ব্যক্তি, শিক্ষার্থী ও অভিভাবক'}</span>
            </div>
          </div>
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-border space-y-2">
                <div className="text-3xl font-display font-bold text-primary">44K+</div>
                <div className="text-xs font-bold text-muted uppercase tracking-widest">{lang === 'en' ? 'Max Grant/Person' : 'সর্বোচ্চ অনুদান/ব্যক্তি'}</div>
              </div>
              <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-border space-y-2">
                <div className="text-3xl font-display font-bold text-secondary">70%</div>
                <div className="text-xs font-bold text-muted uppercase tracking-widest">{lang === 'en' ? 'Women Entrepreneurs' : 'নারী উদ্যোক্তা'}</div>
              </div>
              <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-border space-y-2 col-span-2">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-3xl font-display font-bold text-text-main">Ongoing</div>
                    <div className="text-xs font-bold text-muted uppercase tracking-widest">{lang === 'en' ? 'SME Loan Program' : 'SME ঋণ কার্যক্রম'}</div>
                  </div>
                  <Icons.TrendingUp size={40} className="text-emerald-500" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Financial Grants Section */}
        <section className="space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-border pb-8">
            <div className="space-y-2">
              <h2 className="text-3xl lg:text-4xl font-display font-bold text-text-main">
                {lang === 'en' ? 'Financial Grants' : 'আর্থিক অনুদান'}
              </h2>
              <p className="text-muted">{lang === 'en' ? 'Direct cash support for business startup and equipment.' : 'ব্যবসা শুরু এবং সরঞ্জামের জন্য সরাসরি নগদ সহায়তা।'}</p>
            </div>
            <div className="flex items-center gap-2 text-primary font-bold">
              <Icons.HandCoins size={24} />
              <span className="uppercase tracking-widest text-sm">{lang === 'en' ? 'Non-Repayable' : 'অফেরতযোগ্য'}</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {financialGrants.map((grant, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="bg-white p-8 rounded-[2.5rem] border border-border shadow-sm hover:shadow-md transition-all space-y-6"
              >
                <div className="flex items-center justify-between">
                  <div className="px-4 py-1 bg-surface-alt rounded-full text-xs font-bold text-muted uppercase tracking-widest">
                    {grant.date}
                  </div>
                  <Icons.Banknote className="text-primary" size={24} />
                </div>
                <h3 className="text-2xl font-display font-bold text-text-main">{getLocalized(grant.title)}</h3>
                {grant.description && <p className="text-muted leading-relaxed">{getLocalized(grant.description)}</p>}
                
                {grant.items && (
                  <div className="space-y-4 pt-4">
                    {grant.items.map((item, iIdx) => {
                      const ItemIcon = Icons[item.icon] || Icons.Store;
                      return (
                        <div key={iIdx} className="flex items-center justify-between p-4 bg-surface-alt rounded-2xl border border-border/50">
                          <div className="flex items-center gap-3">
                            <ItemIcon size={20} className={iIdx === 1 ? "text-secondary" : "text-primary"} />
                            <div>
                              <div className="font-bold text-text-main text-sm">{getLocalized(item.name)}</div>
                              <div className="text-xs text-muted">{getLocalized(item.purpose)}</div>
                            </div>
                          </div>
                          <div className="font-display font-bold text-primary">{item.amount}</div>
                        </div>
                      );
                    })}
                  </div>
                )}

                {grant.amount && (
                  <div className="flex items-center justify-between p-6 bg-primary/5 rounded-3xl border border-primary/10">
                    <div>
                      <div className="text-xs font-bold text-primary uppercase tracking-widest mb-1">{lang === 'en' ? 'Grant Amount' : 'অনুদানের পরিমাণ'}</div>
                      <div className="text-2xl font-display font-bold text-primary">{grant.amount}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-xs font-bold text-muted uppercase tracking-widest mb-1">{lang === 'en' ? 'Beneficiaries' : 'উপকারভোগী'}</div>
                      <div className="text-xl font-bold text-text-main">{getLocalized(grant.beneficiaries)}</div>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </section>

        {/* SME Loan Program Timeline */}
        <section className="space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-text-main">
              {lang === 'en' ? 'SME Loan Program' : 'SME ঋণ কার্যক্রম'}
            </h2>
            <p className="text-muted leading-relaxed">
              {lang === 'en' 
                ? 'A structured micro-finance initiative to foster sustainable entrepreneurship.' 
                : 'টেকসই উদ্যোক্তা তৈরির জন্য একটি কাঠামোগত ক্ষুদ্রঋণ উদ্যোগ।'}
            </p>
          </div>

          <div className="relative space-y-8 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-border before:to-transparent">
            {smeLoans.map((loan, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
              >
                {/* Dot */}
                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-primary text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                  <Icons.TrendingUp size={18} />
                </div>
                {/* Content */}
                <div className="w-[calc(100%-4rem)] md:w-[45%] bg-white p-8 rounded-[2.5rem] border border-border shadow-sm hover:shadow-md transition-all">
                  <div className="flex items-center justify-between mb-4">
                    <time className="font-display font-bold text-primary">{loan.date}</time>
                    <span className="text-[10px] font-bold text-muted uppercase tracking-widest px-2 py-1 bg-surface-alt rounded-md">{getLocalized(loan.stats)}</span>
                  </div>
                  <h4 className="text-xl font-display font-bold text-text-main mb-2">{getLocalized(loan.title)}</h4>
                  <p className="text-muted text-sm leading-relaxed">{getLocalized(loan.desc)}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Success Stories / Images */}
        <section className="space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <h2 className="text-3xl font-display font-bold text-text-main">
              {lang === 'en' ? 'Empowerment in Action' : 'ক্ষমতায়নের প্রতিফলন'}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative group rounded-[3rem] overflow-hidden aspect-[4/3] shadow-xl">
              <img 
                src="https://picsum.photos/seed/sme-1/1200/900" 
                alt="SME Loan Distribution" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-10">
                <h4 className="text-white text-2xl font-display font-bold">{lang === 'en' ? 'Loan Distribution' : 'ঋণ বিতরণ'}</h4>
                <p className="text-white/70 text-sm">{lang === 'en' ? 'Providing capital to start new ventures.' : 'নতুন উদ্যোগ শুরু করার জন্য পুঁজি সরবরাহ।'}</p>
              </div>
            </div>
            <div className="relative group rounded-[3rem] overflow-hidden aspect-[4/3] shadow-xl">
              <img 
                src="https://picsum.photos/seed/sme-2/1200/900" 
                alt="Small Business Success" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-10">
                <h4 className="text-white text-2xl font-display font-bold">{lang === 'en' ? 'Thriving Businesses' : 'সফল ক্ষুদ্র ব্যবসা'}</h4>
                <p className="text-white/70 text-sm">{lang === 'en' ? 'SPUS members managing their own shops.' : 'এসপিইউএস সদস্যরা তাদের নিজস্ব দোকান পরিচালনা করছেন।'}</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-secondary p-12 lg:p-20 rounded-[4rem] text-white text-center space-y-8 relative overflow-hidden">
          <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            <h2 className="text-4xl font-display font-bold">{lang === 'en' ? 'Invest in Potential' : 'সম্ভাবনায় বিনিয়োগ করুন'}</h2>
            <p className="text-white/80 text-lg">
              {lang === 'en' 
                ? 'Your support can provide the seed capital needed for a person with disability to become self-reliant.' 
                : 'আপনার সহায়তা একজন প্রতিবন্ধী ব্যক্তিকে স্বাবলম্বী হওয়ার জন্য প্রয়োজনীয় বীজ পুঁজি সরবরাহ করতে পারে।'}
            </p>
            <button className="px-10 py-4 bg-white text-secondary rounded-full font-bold text-lg hover:scale-105 transition-all shadow-xl">
              {lang === 'en' ? 'Support an Entrepreneur' : 'একজন উদ্যোক্তাকে সহায়তা করুন'}
            </button>
          </div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full translate-x-1/2 -translate-y-1/2 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/20 rounded-full -translate-x-1/4 translate-y-1/4 blur-3xl" />
        </section>

      </div>
    </PageWrapper>
  );
}
