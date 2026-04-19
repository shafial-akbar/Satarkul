import React, { useState, useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import PageWrapper from '../../components/layout/PageWrapper';
import { motion } from 'motion/react';
import * as Icons from 'lucide-react';
import { getHelplineData } from '../../api/apiClient';

export default function HelplinePage() {
  const { lang } = useLanguage();
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getHelplineData();
        setData(result);
      } catch (error) {
        console.error('Error fetching helpline data:', error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-bg">
        <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <PageWrapper 
      title={data.title[lang]} 
      subtitle={data.subtitle[lang]}
    >
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Emergency Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {data.emergencyContacts.map((contact, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-red-500 rounded-[2.5rem] p-8 text-white flex items-center gap-8 shadow-lg relative overflow-hidden group"
            >
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                <Icons.PhoneCall size={32} />
              </div>
              <div>
                <span className="text-white/80 text-sm font-bold uppercase tracking-widest">{contact.label[lang]}</span>
                <p className="text-3xl font-black">{contact.number}</p>
              </div>
              <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-white/5 rounded-full" />
            </motion.div>
          ))}
        </div>

        {/* Medical Support Track */}
        <div className="space-y-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <h2 className="text-3xl font-display font-bold text-text-main">
              {lang === 'en' ? 'Medical Professionals Commitment' : 'চিকিৎসা বিশেষজ্ঞদের প্রতিশ্রুতি'}
            </h2>
            <div className="flex items-center gap-2 text-primary font-bold bg-primary/10 px-4 py-2 rounded-full text-sm">
              <Icons.ShieldCheck size={18} />
              <span>{lang === 'en' ? 'Verified Support' : 'যাচাইকৃত সহায়তা'}</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {data.medicalPartners.map((partner, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white rounded-3xl border border-border p-8 hover:border-primary hover:shadow-xl transition-all group"
              >
                <div className="w-12 h-12 bg-primary text-white rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-primary/20">
                  <Icons.Stethoscope size={24} />
                </div>
                <h3 className="text-xl font-bold text-text-main mb-1">{partner.name}</h3>
                <p className="text-primary text-sm font-semibold mb-4">{partner.designation || partner.location}</p>
                
                <div className="p-4 bg-surface-alt rounded-2xl border border-border mb-6">
                  <span className="text-[10px] font-black uppercase text-muted tracking-tighter block mb-2">Commitment</span>
                  <p className="text-sm text-text-main leading-relaxed font-medium italic">
                    "{partner.commitment[lang]}"
                  </p>
                </div>

                <div className="flex items-center gap-2 text-xs text-muted font-bold">
                  <Icons.Clock size={14} />
                  <span>{lang === 'en' ? 'Validity:' : 'সময়সীমা:'} {partner.validity[lang]}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Help Desk CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white p-8 rounded-[2.5rem] border border-border shadow-sm text-center space-y-6"
        >
          <div className="w-20 h-20 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto">
            <Icons.Headset size={40} />
          </div>
          <h2 className="text-2xl font-bold text-text-main">
            {lang === 'en' ? 'Need More Specialized Help?' : 'আপনার কি বিশেষ সহায়তার প্রয়োজন?'}
          </h2>
          <p className="text-muted max-w-2xl mx-auto leading-relaxed">
            {lang === 'en' 
              ? 'Our helpdesk is always ready to connect you with the right resources and medical support. Call us or visit our office for a detailed assessment.' 
              : 'আমাদের হেল্পডেস্ক আপনাকে সঠিক সংস্থান এবং চিকিৎসা সহায়তার সাথে সংযুক্ত করতে সর্বদা প্রস্তুত। বিস্তারিত তথ্য বা মূল্যায়নের জন্য আমাদের কল করুন অথবা অফিসে যোগাযোগ করুন।'}
          </p>
          <button className="px-8 py-4 bg-primary text-white rounded-2xl font-bold hover:shadow-xl hover:-translate-y-1 transition-all">
            {lang === 'en' ? 'Contact Helpdesk' : 'হেল্পডেস্কের সাথে যোগাযোগ করুন'}
          </button>
        </motion.div>
      </div>
    </PageWrapper>
  );
}
