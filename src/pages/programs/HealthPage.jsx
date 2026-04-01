import React from 'react';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '../../context/LanguageContext';
import PageWrapper from '../../components/layout/PageWrapper';
import { motion } from 'motion/react';
import * as Icons from 'lucide-react';
import HealthServicesStats from '../../components/infographics/HealthServicesStats';
import { healthServices, healthEvents } from '../../data/healthData';

export default function HealthPage() {
  const { t } = useTranslation();
  const { lang } = useLanguage();

  const getLocalized = (obj) => {
    if (!obj) return '';
    return obj[lang] || obj['en'] || '';
  };

  return (
    <PageWrapper 
      title={lang === 'en' ? 'Health Services' : 'স্বাস্থ্য সেবা'}
      subtitle={lang === 'en' ? 'Comprehensive medical support and specialized care for persons with disabilities.' : 'প্রতিবন্ধী ব্যক্তিদের জন্য ব্যাপক চিকিৎসা সহায়তা এবং বিশেষায়িত যত্ন।'}
    >
      <div className="space-y-24">
        
        {/* Featured Services Section */}
        <section className="space-y-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {healthServices.map((service, idx) => {
              const ServiceIcon = Icons[service.icon] || Icons.HelpCircle;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white p-8 rounded-[2.5rem] border border-border shadow-sm hover:shadow-xl transition-all duration-500 group relative overflow-hidden"
                >
                  <div className={`w-16 h-16 rounded-2xl ${service.color} flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500`}>
                    <ServiceIcon size={32} />
                  </div>
                  <div className="space-y-4">
                    {service.timeline && (
                      <div className="flex items-center gap-2 text-xs font-bold text-secondary uppercase tracking-widest">
                        <Icons.Clock size={14} /> {getLocalized(service.timeline)}
                      </div>
                    )}
                    {service.target && (
                      <div className="flex items-center gap-2 text-xs font-bold text-blue-600 uppercase tracking-widest">
                        <Icons.Users size={14} /> {getLocalized(service.target)}
                      </div>
                    )}
                    <h3 className="text-2xl font-display font-bold text-text-main leading-tight">
                      {getLocalized(service.title)}
                    </h3>
                    <p className="text-muted leading-relaxed">
                      {getLocalized(service.desc)}
                    </p>
                  </div>
                  
                  {/* Decorative background element */}
                  <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-surface-alt rounded-full opacity-50 group-hover:scale-150 transition-transform duration-700" />
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* Impact & Infographics */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center bg-surface-alt p-8 lg:p-16 rounded-[3rem] border border-border">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white text-primary rounded-full font-bold text-sm uppercase tracking-widest shadow-sm">
              <Icons.Activity size={18} /> {lang === 'en' ? 'Health Impact' : 'স্বাস্থ্য প্রভাব'}
            </div>
            <h2 className="text-4xl lg:text-5xl font-display font-bold text-text-main leading-tight">
              {lang === 'en' ? 'Data-Driven Healthcare' : 'তথ্য-চালিত স্বাস্থ্যসেবা'}
            </h2>
            <p className="text-muted leading-relaxed text-lg">
              {lang === 'en' 
                ? 'We track every medical intervention to ensure our community receives the best possible care and support.' 
                : 'আমাদের সম্প্রদায় যাতে সর্বোত্তম যত্ন এবং সহায়তা পায় তা নিশ্চিত করার জন্য আমরা প্রতিটি চিকিৎসা হস্তক্ষেপ ট্র্যাক করি।'}
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-3xl border border-border shadow-sm">
                <div className="text-3xl font-display font-bold text-primary mb-1">155+</div>
                <div className="text-sm font-bold text-muted uppercase tracking-wider">{lang === 'en' ? 'Eye Checkups' : 'চক্ষু পরীক্ষা'}</div>
              </div>
              <div className="bg-white p-6 rounded-3xl border border-border shadow-sm">
                <div className="text-3xl font-display font-bold text-secondary mb-1">150+</div>
                <div className="text-sm font-bold text-muted uppercase tracking-wider">{lang === 'en' ? 'ORS Beneficiaries' : 'ওআরএস উপকারভোগী'}</div>
              </div>
            </div>
          </div>
          <HealthServicesStats />
        </section>

        {/* Events & Campaigns Timeline-style Grid */}
        <section className="space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-text-main">
              {lang === 'en' ? 'Campaigns & Special Camps' : 'ক্যাম্পেইন এবং বিশেষ ক্যাম্প'}
            </h2>
            <p className="text-muted leading-relaxed">
              {lang === 'en' 
                ? 'Our periodic health camps and distribution programs throughout the year.' 
                : 'সারা বছর আমাদের পর্যায়ক্রমিক স্বাস্থ্য ক্যাম্প এবং বিতরণ কর্মসূচি।'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {healthEvents.map((event, idx) => {
              const EventIcon = Icons[event.icon] || Icons.HelpCircle;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  className="bg-white rounded-[2.5rem] border border-border overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col sm:flex-row"
                >
                  <div className="sm:w-32 bg-surface-alt flex flex-col items-center justify-center p-6 border-b sm:border-b-0 sm:border-r border-border">
                    <div className="w-12 h-12 bg-white text-primary rounded-xl flex items-center justify-center shadow-sm mb-3">
                      <EventIcon size={24} />
                    </div>
                    <span className="text-xs font-bold text-muted uppercase tracking-widest text-center">
                      {event.date}
                    </span>
                  </div>
                  <div className="p-8 flex-1 space-y-4">
                    <h4 className="text-xl font-display font-bold text-text-main">
                      {getLocalized(event.title)}
                    </h4>
                    
                    {event.stats && (
                      <div className="grid grid-cols-3 gap-4 pt-2">
                        {event.stats.map((s, sIdx) => (
                          <div key={sIdx} className="text-center p-2 bg-surface-alt rounded-2xl">
                            <div className="text-lg font-bold text-primary">{s.value}</div>
                            <div className="text-[10px] font-bold text-muted uppercase tracking-tight">{getLocalized(s.label)}</div>
                          </div>
                        ))}
                      </div>
                    )}

                    {event.beneficiaries && (
                      <div className="flex items-center gap-2 text-sm font-bold text-secondary">
                        <Icons.Users size={16} /> {lang === 'en' ? 'Beneficiaries:' : 'উপকারভোগী:'} {getLocalized(event.beneficiaries)}
                      </div>
                    )}

                    {event.desc && (
                      <p className="text-sm text-muted leading-relaxed">
                        {getLocalized(event.desc)}
                      </p>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* Gallery Section */}
        <section className="space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <h2 className="text-3xl font-display font-bold text-text-main">
              {lang === 'en' ? 'Service Gallery' : 'সেবা গ্যালারি'}
            </h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { seed: 'medical-1', label: lang === 'en' ? 'Eye Camp' : 'আই ক্যাম্প' },
              { seed: 'medical-2', label: lang === 'en' ? 'Health Checkup' : 'স্বাস্থ্য পরীক্ষা' },
              { seed: 'medical-3', label: lang === 'en' ? 'Therapy Session' : 'থেরাপি সেশন' },
            ].map((img, i) => (
              <div key={i} className="relative group rounded-[2rem] overflow-hidden aspect-video shadow-lg">
                <img 
                  src={`https://picsum.photos/seed/${img.seed}/800/600`} 
                  alt={img.label}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <span className="text-white font-bold tracking-wide uppercase text-sm">{img.label}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary p-12 lg:p-20 rounded-[4rem] text-white text-center space-y-8 relative overflow-hidden">
          <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            <h2 className="text-4xl font-display font-bold">{lang === 'en' ? 'Support Our Health Mission' : 'আমাদের স্বাস্থ্য মিশনে সহায়তা করুন'}</h2>
            <p className="text-white/80 text-lg">
              {lang === 'en' 
                ? 'Your donations help us organize more medical camps and provide essential medicines to those in need.' 
                : 'আপনার দান আমাদের আরও চিকিৎসা ক্যাম্প আয়োজন করতে এবং অভাবীদের প্রয়োজনীয় ওষুধ সরবরাহ করতে সহায়তা করে।'}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="px-10 py-4 bg-white text-primary rounded-full font-bold text-lg hover:scale-105 transition-all shadow-xl">
                {lang === 'en' ? 'Donate for Medical Care' : 'চিকিৎসা সেবার জন্য দান করুন'}
              </button>
              <button className="px-10 py-4 bg-transparent border-2 border-white text-white rounded-full font-bold text-lg hover:bg-white/10 transition-all">
                {lang === 'en' ? 'Volunteer' : 'স্বেচ্ছাসেবী'}
              </button>
            </div>
          </div>
          {/* Decorative circles */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/20 rounded-full translate-x-1/4 translate-y-1/4 blur-3xl" />
        </section>

      </div>
    </PageWrapper>
  );
}
