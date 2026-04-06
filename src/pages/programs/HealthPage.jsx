import React, { useState, useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import PageWrapper from '../../components/layout/PageWrapper';
import { motion, AnimatePresence } from 'motion/react';
import * as Icons from 'lucide-react';
import HealthServicesStats from '../../components/infographics/HealthServicesStats';
import { getHealthData } from '../../api/apiClient';

export default function HealthPage() {
  const { lang } = useLanguage();
  const [health, setHealth] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const data = await getHealthData();
        setHealth(data);
      } catch (error) {
        console.error('Error fetching health data:', error);
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
          {lang === 'en' ? 'Loading health programs...' : 'স্বাস্থ্য কার্যক্রম লোড হচ্ছে...'}
        </p>
      </div>
    );
  }

  const services = (health?.services || []).map(service => ({
    ...service,
    title: service.title?.[lang] || service.title?.en || '',
    desc: service.desc?.[lang] || service.desc?.en || '',
    timeline: service.timeline?.[lang] || service.timeline?.en || '',
    icon: Icons[service.icon] || Icons.HelpCircle
  }));

  const events = (health?.events || []).map(event => ({
    ...event,
    title: event.title?.[lang] || event.title?.en || '',
    date: event.date?.[lang] || event.date?.en || event.date || '',
    beneficiaries: event.beneficiaries?.[lang] || event.beneficiaries?.en || '',
    icon: Icons[event.icon] || Icons.HelpCircle
  }));

  const impactStats = (health?.impact?.stats || []).map(stat => ({
    ...stat,
    label: stat.label?.[lang] || stat.label?.en || ''
  }));

  return (
    <PageWrapper 
      title={health?.title?.[lang]}
      subtitle={health?.subtitle?.[lang]}
    >
      <div className="space-y-24">
        
        {/* Featured Services Section */}
        <section className="space-y-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-8 rounded-[2.5rem] border border-border shadow-sm hover:shadow-xl transition-all duration-500 group relative overflow-hidden"
              >
                <div className={`w-16 h-16 rounded-2xl ${service.color} flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500`}>
                  <service.icon size={32} />
                </div>
                <div className="space-y-4">
                  {service.timeline && (
                    <div className="flex items-center gap-2 text-xs font-bold text-secondary uppercase tracking-widest">
                      <Icons.Clock size={14} /> {service.timeline}
                    </div>
                  )}
                  <h3 className="text-2xl font-display font-bold text-text-main leading-tight">
                    {service.title}
                  </h3>
                  <p className="text-muted leading-relaxed">
                    {service.desc}
                  </p>
                </div>
                
                {/* Decorative background element */}
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-surface-alt rounded-full opacity-50 group-hover:scale-150 transition-transform duration-700" />
              </motion.div>
            ))}
          </div>
        </section>

        {/* Impact & Infographics */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center bg-surface-alt p-8 lg:p-16 rounded-[3rem] border border-border">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white text-primary rounded-full font-bold text-sm uppercase tracking-widest shadow-sm">
              <Icons.Activity size={18} /> {health?.impact?.tag?.[lang]}
            </div>
            <h2 className="text-4xl lg:text-5xl font-display font-bold text-text-main leading-tight">
              {health?.impact?.title?.[lang]}
            </h2>
            <p className="text-muted leading-relaxed text-lg">
              {health?.impact?.description?.[lang]}
            </p>
            <div className="grid grid-cols-2 gap-6">
              {impactStats.map((stat, idx) => (
                <div key={idx} className="bg-white p-6 rounded-3xl border border-border shadow-sm">
                  <div className="text-3xl font-display font-bold text-primary mb-1">{stat.value}</div>
                  <div className="text-sm font-bold text-muted uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          <HealthServicesStats />
        </section>

        {/* Events & Campaigns Timeline-style Grid */}
        <section className="space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-text-main">
              {health?.eventsTitle?.[lang]}
            </h2>
            <p className="text-muted leading-relaxed">
              {health?.eventsSubtitle?.[lang]}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {events.map((event, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="bg-white rounded-[2.5rem] border border-border overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col sm:flex-row"
              >
                <div className="sm:w-32 bg-surface-alt flex flex-col items-center justify-center p-6 border-b sm:border-b-0 sm:border-r border-border">
                  <div className="w-12 h-12 bg-white text-primary rounded-xl flex items-center justify-center shadow-sm mb-3">
                    <event.icon size={24} />
                  </div>
                  <span className="text-xs font-bold text-muted uppercase tracking-widest text-center">
                    {event.date}
                  </span>
                </div>
                <div className="p-8 flex-1 space-y-4">
                  <h4 className="text-xl font-display font-bold text-text-main">
                    {event.title}
                  </h4>
                  
                  {event.beneficiaries && (
                    <div className="flex items-center gap-2 text-sm font-bold text-secondary">
                      <Icons.Users size={16} /> {health?.beneficiariesLabel?.[lang] || (lang === 'en' ? 'Beneficiaries:' : 'উপকারভোগী:') } {event.beneficiaries}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Gallery Section */}
        <section className="space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <h2 className="text-3xl font-display font-bold text-text-main">
              {health?.galleryTitle?.[lang]}
            </h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
            {(health?.galleryImages || []).map((img, i) => (
              <div key={i} className="relative group rounded-[2rem] overflow-hidden aspect-video shadow-lg">
                <img 
                  src={img.url || `https://picsum.photos/seed/${img.seed}/800/450`} 
                  alt={img.label?.[lang]}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <span className="text-white font-bold tracking-wide uppercase text-sm">{img.label?.[lang]}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary p-12 lg:p-20 rounded-[4rem] text-white text-center space-y-8 relative overflow-hidden">
          <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            <h2 className="text-4xl font-display font-bold">{health?.ctaTitle?.[lang]}</h2>
            <p className="text-white/80 text-lg">
              {health?.ctaDescription?.[lang]}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="px-10 py-4 bg-white text-primary rounded-full font-bold text-lg hover:scale-105 transition-all shadow-xl">
                {health?.ctaButton1?.[lang]}
              </button>
              <button className="px-10 py-4 bg-transparent border-2 border-white text-white rounded-full font-bold text-lg hover:bg-white/10 transition-all">
                {health?.ctaButton2?.[lang]}
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
