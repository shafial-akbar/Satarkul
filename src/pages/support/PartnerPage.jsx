import React from 'react';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '../../context/LanguageContext';
import { useContent } from '../../context/ContentContext';
import PageWrapper from '../../components/layout/PageWrapper';
import { motion } from 'motion/react';
import * as Icons from 'lucide-react';

export default function PartnerPage() {
  const { t } = useTranslation();
  const { lang } = useLanguage();
  const { content } = useContent();

  const partner = content?.support?.partner;

  const partnerTypes = (partner?.types || []).map(type => ({
    ...type,
    title: type.title?.[lang] || type.title?.en || '',
    desc: type.desc?.[lang] || type.desc?.en || '',
    icon: Icons[type.icon] || Icons.Handshake
  }));

  return (
    <PageWrapper 
      title={partner?.page?.title?.[lang] || (lang === 'en' ? 'Strategic Partnerships' : 'কৌশলগত অংশীদারিত্ব')}
      subtitle={partner?.page?.subtitle?.[lang] || (lang === 'en' ? 'We collaborate with organizations to drive sustainable social inclusion.' : 'সামাজিক অন্তর্ভুক্তি নিশ্চিত করতে আমরা বিভিন্ন সংস্থার সাথে সহযোগিতা করি।')}
    >
      <div className="space-y-24">
        {/* Intro Section */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 text-accent rounded-full font-bold text-sm uppercase tracking-widest">
                <Icons.Handshake size={18} /> {lang === 'en' ? 'Collaborative Impact' : 'যৌথ প্রভাব'}
              </div>
              <h2 className="text-4xl lg:text-5xl font-display font-bold text-text-main leading-tight">
                {lang === 'en' ? 'Partnering for a Barrier-Free World' : 'বাধামুক্ত বিশ্বের জন্য অংশীদারিত্ব'}
              </h2>
            </div>
            <p className="text-muted leading-relaxed text-lg">
              {lang === 'en' 
                ? 'We believe that systemic change requires collaboration. We partner with corporations, institutions, and community groups to scale our impact and reach more persons with disabilities across Bangladesh.' 
                : 'আমরা বিশ্বাস করি যে পদ্ধতিগত পরিবর্তনের জন্য সহযোগিতা প্রয়োজন। আমরা আমাদের প্রভাব বাড়াতে এবং বাংলাদেশের আরও প্রতিবন্ধী ব্যক্তিদের কাছে পৌঁছাতে করপোরেট, প্রতিষ্ঠান এবং কমিউনিটি গ্রুপগুলোর সাথে অংশীদারিত্ব করি।'}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { title: lang === 'en' ? 'CSR Alignment' : 'সিএসআর সারিবদ্ধকরণ', icon: Icons.Target },
                { title: lang === 'en' ? 'Joint Programs' : 'যৌথ কর্মসূচি', icon: Icons.Zap },
                { title: lang === 'en' ? 'Resource Sharing' : 'সম্পদ ভাগাভাগি', icon: Icons.Share2 },
                { title: lang === 'en' ? 'Advocacy' : 'অ্যাডভোকেসি', icon: Icons.Megaphone },
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 p-4 bg-surface-alt rounded-2xl border border-border">
                  <div className="w-8 h-8 bg-white text-primary rounded-lg flex items-center justify-center shadow-sm">
                    <item.icon size={16} />
                  </div>
                  <span className="font-bold text-text-main text-sm">{item.title}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="aspect-video rounded-[3rem] overflow-hidden shadow-2xl">
              <img 
                src="https://picsum.photos/seed/partnership-meeting/1200/800" 
                alt="Partnership Meeting" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-accent/20 rounded-full blur-2xl animate-pulse" />
          </div>
        </section>

        {/* Partnership Types */}
        <section className="space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-text-main">
              {lang === 'en' ? 'How Your Organization Can Help' : 'আপনার সংস্থা যেভাবে সাহায্য করতে পারে'}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {partnerTypes.map((type, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="p-10 bg-white rounded-[3rem] border border-border hover:border-accent hover:shadow-2xl transition-all group"
              >
                <div className="w-16 h-16 bg-surface-alt text-accent rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform shadow-sm">
                  <type.icon size={32} />
                </div>
                <h3 className="text-2xl font-display font-bold text-text-main mb-4">{type.title}</h3>
                <p className="text-muted leading-relaxed mb-8">{type.desc}</p>
                <button className="text-accent font-bold flex items-center gap-2 hover:gap-3 transition-all">
                  {lang === 'en' ? 'Start a Conversation' : 'আলোচনা শুরু করুন'} <Icons.ArrowRight size={18} />
                </button>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-text-main p-12 lg:p-24 rounded-[4rem] text-white overflow-hidden relative">
          <div className="relative z-10 text-center max-w-4xl mx-auto space-y-8">
            <h2 className="text-4xl lg:text-6xl font-display font-bold leading-tight">
              {lang === 'en' ? 'Let\'s Create Impact Together' : 'আসুন একসাথে প্রভাব তৈরি করি'}
            </h2>
            <p className="text-white/70 text-xl leading-relaxed">
              {lang === 'en' 
                ? 'Contact our partnership team to explore how we can work together to empower persons with disabilities.' 
                : 'আমরা কীভাবে প্রতিবন্ধী ব্যক্তিদের ক্ষমতায়নের জন্য একসাথে কাজ করতে পারি তা অন্বেষণ করতে আমাদের অংশীদারিত্ব টিমের সাথে যোগাযোগ করুন।'}
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <button className="px-12 py-5 bg-primary text-white rounded-2xl font-bold text-lg shadow-xl hover:scale-105 transition-all">
                {lang === 'en' ? 'Contact Us Today' : 'আজই আমাদের সাথে যোগাযোগ করুন'}
              </button>
              <button className="px-12 py-5 bg-white/10 border border-white/20 text-white rounded-2xl font-bold text-lg hover:bg-white/20 transition-all">
                {lang === 'en' ? 'Download Partnership Deck' : 'অংশীদারিত্ব ডেক ডাউনলোড করুন'}
              </button>
            </div>
          </div>
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl translate-x-1/4 translate-y-1/4" />
        </section>
      </div>
    </PageWrapper>
  );
}
