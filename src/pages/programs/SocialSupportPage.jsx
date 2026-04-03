import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { useContent } from '../../context/ContentContext';
import PageWrapper from '../../components/layout/PageWrapper';
import { motion } from 'motion/react';
import * as Icons from 'lucide-react';

export default function SocialSupportPage() {
  const { lang } = useLanguage();
  const { content } = useContent();

  const socialSupport = content?.programs?.details?.['social-support'];

  const services = (socialSupport?.services || []).map(service => ({
    ...service,
    title: service.title?.[lang] || service.title?.en || '',
    desc: service.desc?.[lang] || service.desc?.en || '',
    timeline: service.timeline?.[lang] || service.timeline?.en || '',
    icon: Icons[service.icon] || Icons.HelpCircle,
    features: (service.features || []).map(f => f[lang] || f.en || '')
  }));

  return (
    <PageWrapper 
      title={socialSupport?.title?.[lang]}
      subtitle={socialSupport?.subtitle?.[lang]}
    >
      <div className="space-y-24">
        {/* Intro Section */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-surface-alt text-primary rounded-full font-bold text-sm uppercase tracking-widest">
                <Icons.ShieldCheck size={18} /> {socialSupport?.intro?.tag?.[lang]}
              </div>
              <h2 className="text-4xl lg:text-5xl font-display font-bold text-text-main leading-tight">
                {socialSupport?.intro?.title?.[lang]}
              </h2>
            </div>
            <p className="text-muted leading-relaxed text-lg">
              {socialSupport?.intro?.description?.[lang]}
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="px-8 py-4 bg-primary text-white rounded-2xl font-bold hover:bg-primary/90 transition-all shadow-lg shadow-primary/20">
                {socialSupport?.intro?.cta1?.[lang]}
              </button>
              <button className="px-8 py-4 bg-surface-alt text-text-main rounded-2xl font-bold hover:bg-border transition-all">
                {socialSupport?.intro?.cta2?.[lang]}
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
                  <p className="text-text-main font-bold">{socialSupport?.intro?.badgeTitle?.[lang]}</p>
                  <p className="text-xs text-muted">{socialSupport?.intro?.badgeSubtitle?.[lang]}</p>
                </div>
              </div>
              <p className="text-sm text-muted italic">
                {socialSupport?.intro?.badgeQuote?.[lang]}
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-text-main">
              {socialSupport?.servicesTitle?.[lang]}
            </h2>
            <p className="text-muted">
              {socialSupport?.servicesSubtitle?.[lang]}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, idx) => (
              <motion.div 
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="group bg-white p-10 rounded-[3rem] border border-border hover:border-primary shadow-lg transition-all duration-500"
              >
                <div className="flex flex-col lg:flex-row gap-8">
                  <div className={`w-20 h-20 ${service.color} rounded-[2rem] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-500`}>
                    <service.icon size={40} />
                  </div>
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-xs font-bold text-secondary uppercase tracking-widest">
                        <Icons.Clock size={14} /> {service.timeline}
                      </div>
                      <h3 className="text-2xl lg:text-3xl font-display font-bold text-text-main leading-tight">
                        {service.title}
                      </h3>
                    </div>
                    <p className="text-muted leading-relaxed">
                      {service.desc}
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {service.features.map((feature, fIdx) => (
                        <div key={fIdx} className="flex items-center gap-2 text-sm font-bold text-text-main">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="bg-secondary p-12 lg:p-20 rounded-[4rem] text-white overflow-hidden relative">
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="max-w-2xl space-y-6">
              <h2 className="text-4xl font-display font-bold leading-tight">
                {socialSupport?.cta?.title?.[lang]}
              </h2>
              <p className="text-white/80 text-lg">
                {socialSupport?.cta?.description?.[lang]}
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/20">
                  <Icons.Phone size={24} className="text-accent" />
                  <div>
                    <p className="text-xs text-white/60 uppercase tracking-widest font-bold">{socialSupport?.cta?.phoneLabel?.[lang]}</p>
                    <p className="font-bold">{socialSupport?.cta?.phone?.[lang]}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/20">
                  <Icons.Mail size={24} className="text-accent" />
                  <div>
                    <p className="text-xs text-white/60 uppercase tracking-widest font-bold">{socialSupport?.cta?.emailLabel?.[lang]}</p>
                    <p className="font-bold">{socialSupport?.cta?.email?.[lang]}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="shrink-0">
              <button className="px-12 py-6 bg-accent text-white rounded-3xl font-bold text-xl hover:bg-accent/90 transition-all shadow-2xl shadow-accent/40 flex items-center gap-3">
                {socialSupport?.cta?.buttonText?.[lang]} <Icons.ArrowRight size={24} />
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
