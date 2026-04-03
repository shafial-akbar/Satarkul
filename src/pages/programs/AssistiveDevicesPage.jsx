import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { useContent } from '../../context/ContentContext';
import PageWrapper from '../../components/layout/PageWrapper';
import { motion } from 'motion/react';
import * as Icons from 'lucide-react';

export default function AssistiveDevicesPage() {
  const { lang } = useLanguage();
  const { content } = useContent();

  const assistive = content?.programs?.details?.['assistive-devices'];

  const devices = (assistive?.devices || []).map(device => ({
    ...device,
    title: device.title?.[lang] || device.title?.en || '',
    desc: device.desc?.[lang] || device.desc?.en || '',
    icon: Icons[device.icon] || Icons.HelpCircle
  }));

  const impactPoints = (assistive?.impact?.points || []).map(point => ({
    ...point,
    title: point.title?.[lang] || point.title?.en || '',
    desc: point.desc?.[lang] || point.desc?.en || ''
  }));

  return (
    <PageWrapper 
      title={assistive?.title?.[lang]}
      subtitle={assistive?.subtitle?.[lang]}
    >
      <div className="space-y-24">
        
        {/* Hero / Advocacy Section */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-surface-alt text-primary rounded-full font-bold text-sm uppercase tracking-widest shadow-sm border border-border">
              <Icons.Sparkles size={18} /> {assistive?.intro?.tag?.[lang]}
            </div>
            <h2 className="text-4xl lg:text-5xl font-display font-bold text-text-main leading-tight">
              {assistive?.intro?.title?.[lang]}
            </h2>
            <p className="text-muted leading-relaxed text-lg">
              {assistive?.intro?.description?.[lang]}
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-center gap-4 p-4 bg-white rounded-2xl border border-border shadow-sm">
                <div className="w-10 h-10 bg-primary/10 text-primary rounded-xl flex items-center justify-center">
                  <Icons.Clock size={20} />
                </div>
                <div>
                  <div className="text-xs font-bold text-muted uppercase tracking-widest">{assistive?.intro?.timelineLabel?.[lang]}</div>
                  <div className="font-bold text-text-main">{assistive?.intro?.timeline?.[lang]}</div>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 bg-white rounded-2xl border border-border shadow-sm">
                <div className="w-10 h-10 bg-secondary/10 text-secondary rounded-xl flex items-center justify-center">
                  <Icons.Users size={20} />
                </div>
                <div>
                  <div className="text-xs font-bold text-muted uppercase tracking-widest">{assistive?.intro?.targetGroupLabel?.[lang]}</div>
                  <div className="font-bold text-text-main">{assistive?.intro?.targetGroup?.[lang]}</div>
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
                  <div className="font-display font-bold text-xl">{assistive?.intro?.imageLabel?.[lang]}</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Devices Grid */}
        <section className="space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-text-main">
              {assistive?.devicesTitle?.[lang]}
            </h2>
            <p className="text-muted leading-relaxed">
              {assistive?.devicesSubtitle?.[lang]}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {devices.map((device, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-8 rounded-[2.5rem] border border-border shadow-sm hover:shadow-xl transition-all duration-500 group text-center space-y-6"
              >
                <div className={`w-20 h-20 mx-auto rounded-3xl ${device.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-sm`}>
                  <device.icon size={40} />
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-display font-bold text-text-main group-hover:text-primary transition-colors">
                    {device.title}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed">
                    {device.desc}
                  </p>
                </div>
                <div className="pt-4">
                  <div className="inline-flex items-center gap-2 text-xs font-bold text-primary uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    {assistive?.learnMoreLabel?.[lang]} <Icons.ChevronRight size={14} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Impact Section */}
        <section className="bg-surface-alt p-12 lg:p-20 rounded-[4rem] border border-border relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
            <div className="space-y-8">
              <h2 className="text-3xl lg:text-4xl font-display font-bold text-text-main leading-tight">
                {assistive?.impact?.title?.[lang]}
              </h2>
              <div className="space-y-6">
                {impactPoints.map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="shrink-0 w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center mt-1">
                      <Icons.CheckCircle2 size={14} />
                    </div>
                    <div>
                      <h4 className="font-bold text-text-main">{item.title}</h4>
                      <p className="text-sm text-muted">{item.desc}</p>
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
            <h2 className="text-4xl font-display font-bold">{assistive?.ctaTitle?.[lang]}</h2>
            <p className="text-white/80 text-lg">
              {assistive?.ctaDescription?.[lang]}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="px-10 py-4 bg-white text-primary rounded-full font-bold text-lg hover:scale-105 transition-all shadow-xl">
                {assistive?.ctaButton1?.[lang]}
              </button>
              <button className="px-10 py-4 bg-transparent border-2 border-white text-white rounded-full font-bold text-lg hover:bg-white/10 transition-all">
                {assistive?.ctaButton2?.[lang]}
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
