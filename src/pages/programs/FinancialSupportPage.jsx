import React, { useState, useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import PageWrapper from '../../components/layout/PageWrapper';
import { motion, AnimatePresence } from 'motion/react';
import * as Icons from 'lucide-react';
import { getFinancialData } from '../../api/apiClient';

export default function FinancialSupportPage() {
  const { lang } = useLanguage();
  const [financial, setFinancial] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const data = await getFinancialData();
        setFinancial(data);
      } catch (error) {
        console.error('Error fetching financial data:', error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-bg">
        <Icons.Loader2 size={48} className="animate-spin text-primary mb-4" />
        <p className="text-muted font-medium">
          {lang === 'en' ? 'Loading financial programs...' : 'আর্থিক সহায়তা কার্যক্রম লোড হচ্ছে...'}
        </p>
      </div>
    );
  }

  const grants = (financial?.grants || []).map(grant => ({
    ...grant,
    title: grant.title?.[lang] || grant.title?.en || '',
    desc: grant.desc?.[lang] || grant.desc?.en || '',
    beneficiaries: grant.beneficiaries?.[lang] || grant.beneficiaries?.en || '',
    items: (grant.items || []).map(item => ({
      ...item,
      name: item.name?.[lang] || item.name?.en || '',
      purpose: item.purpose?.[lang] || item.purpose?.en || '',
      icon: Icons[item.icon] || Icons.Store
    }))
  }));

  const loans = (financial?.loans || []).map(loan => ({
    ...loan,
    title: loan.title?.[lang] || loan.title?.en || '',
    desc: loan.desc?.[lang] || loan.desc?.en || '',
    stats: loan.stats?.[lang] || loan.stats?.en || ''
  }));

  return (
    <PageWrapper 
      title={financial?.title?.[lang]}
      subtitle={financial?.subtitle?.[lang]}
    >
      <div className="space-y-24">
        
        {/* Hero Section / Overview */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center bg-surface-alt p-8 lg:p-16 rounded-[3rem] border border-border">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white text-primary rounded-full font-bold text-sm uppercase tracking-widest shadow-sm">
              <Icons.Target size={18} /> {financial?.overview?.tag?.[lang]}
            </div>
            <h2 className="text-4xl lg:text-5xl font-display font-bold text-text-main leading-tight">
              {financial?.overview?.title?.[lang]}
            </h2>
            <p className="text-muted leading-relaxed text-lg">
              {financial?.overview?.description?.[lang]}
            </p>
            <div className="flex items-center gap-4 text-primary font-bold">
              <Icons.Users size={24} />
              <span>{financial?.overview?.target?.[lang]}</span>
            </div>
          </div>
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              {(financial?.overview?.stats || []).map((stat, sIdx) => (
                <div key={sIdx} className={`bg-white p-8 rounded-[2rem] shadow-sm border border-border space-y-2 ${stat.fullWidth ? 'col-span-2' : ''}`}>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className={`text-3xl font-display font-bold ${stat.color || 'text-text-main'}`}>{stat.value?.[lang] || stat.value}</div>
                      <div className="text-xs font-bold text-muted uppercase tracking-widest">{stat.label?.[lang]}</div>
                    </div>
                    {stat.icon && <Icons.TrendingUp size={40} className="text-emerald-500" />}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Financial Grants Section */}
        <section className="space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-border pb-8">
            <div className="space-y-2">
              <h2 className="text-3xl lg:text-4xl font-display font-bold text-text-main">
                {financial?.grantsTitle?.[lang]}
              </h2>
              <p className="text-muted">{financial?.grantsSubtitle?.[lang]}</p>
            </div>
            <div className="flex items-center gap-2 text-primary font-bold">
              <Icons.HandCoins size={24} />
              <span className="uppercase tracking-widest text-sm">{financial?.grantsTag?.[lang]}</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {grants.map((grant, idx) => (
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
                <h3 className="text-2xl font-display font-bold text-text-main">{grant.title}</h3>
                {grant.desc && <p className="text-muted leading-relaxed">{grant.desc}</p>}
                
                {grant.items && grant.items.length > 0 && (
                  <div className="space-y-4 pt-4">
                    {grant.items.map((item, iIdx) => (
                      <div key={iIdx} className="flex items-center justify-between p-4 bg-surface-alt rounded-2xl border border-border/50">
                        <div className="flex items-center gap-3">
                          <item.icon size={20} className={iIdx === 1 ? "text-secondary" : "text-primary"} />
                          <div>
                            <div className="font-bold text-text-main text-sm">{item.name}</div>
                            <div className="text-xs text-muted">{item.purpose}</div>
                          </div>
                        </div>
                        <div className="font-display font-bold text-primary">{item.amount}</div>
                      </div>
                    ))}
                  </div>
                )}

                {grant.amount && (
                  <div className="flex items-center justify-between p-6 bg-primary/5 rounded-3xl border border-primary/10">
                    <div>
                      <div className="text-xs font-bold text-primary uppercase tracking-widest mb-1">{financial?.grantAmountLabel?.[lang]}</div>
                      <div className="text-2xl font-display font-bold text-primary">{grant.amount}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-xs font-bold text-muted uppercase tracking-widest mb-1">{financial?.beneficiariesLabel?.[lang]}</div>
                      <div className="text-xl font-bold text-text-main">{grant.beneficiaries}</div>
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
              {financial?.loansTitle?.[lang]}
            </h2>
            <p className="text-muted leading-relaxed">
              {financial?.loansSubtitle?.[lang]}
            </p>
          </div>

          <div className="relative space-y-8 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-border before:to-transparent">
            {loans.map((loan, idx) => (
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
                    <span className="text-[10px] font-bold text-muted uppercase tracking-widest px-2 py-1 bg-surface-alt rounded-md">{loan.stats}</span>
                  </div>
                  <h4 className="text-xl font-display font-bold text-text-main mb-2">{loan.title}</h4>
                  <p className="text-muted text-sm leading-relaxed">{loan.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Success Stories / Images */}
        <section className="space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <h2 className="text-3xl font-display font-bold text-text-main">
              {financial?.galleryTitle?.[lang]}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {(financial?.galleryItems || []).map((item, i) => (
              <div key={i} className="relative group rounded-[3rem] overflow-hidden aspect-[4/3] shadow-xl">
                <img 
                  src={item.url || `https://picsum.photos/seed/${item.seed}/1200/800`} 
                  alt={item.title?.[lang]} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-10">
                  <h4 className="text-white text-2xl font-display font-bold">{item.title?.[lang]}</h4>
                  <p className="text-white/70 text-sm">{item.subtitle?.[lang]}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-secondary p-12 lg:p-20 rounded-[4rem] text-white text-center space-y-8 relative overflow-hidden">
          <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            <h2 className="text-4xl font-display font-bold">{financial?.ctaTitle?.[lang]}</h2>
            <p className="text-white/80 text-lg">
              {financial?.ctaDescription?.[lang]}
            </p>
            <button className="px-10 py-4 bg-white text-secondary rounded-full font-bold text-lg hover:scale-105 transition-all shadow-xl">
              {financial?.ctaButton?.[lang]}
            </button>
          </div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full translate-x-1/2 -translate-y-1/2 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/20 rounded-full -translate-x-1/4 translate-y-1/4 blur-3xl" />
        </section>

      </div>
    </PageWrapper>
  );
}
