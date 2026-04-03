import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { useContent } from '../../context/ContentContext';
import PageWrapper from '../../components/layout/PageWrapper';
import { motion } from 'motion/react';
import * as Icons from 'lucide-react';
import { Link } from 'react-router-dom';

export default function SupportPage() {
  const { lang } = useLanguage();
  const { content } = useContent();

  const support = content?.support;

  const impactStats = (support?.impact?.stats || []).map(stat => ({
    ...stat,
    label: stat.label?.[lang] || stat.label?.en || '',
    icon: Icons[stat.icon] || Icons.CheckCircle2
  }));

  const supportOptions = (support?.options || []).map(option => ({
    ...option,
    title: option.title?.[lang] || option.title?.en || '',
    description: option.description?.[lang] || option.description?.en || '',
    icon: Icons[option.icon] || Icons.Heart
  }));

  return (
    <PageWrapper 
      title={support?.page?.title?.[lang] || (lang === 'en' ? 'Support Our Mission' : 'আমাদের মিশনকে সমর্থন করুন')}
      subtitle={support?.page?.subtitle?.[lang] || (lang === 'en' ? 'There are many ways to contribute to our cause. Choose the one that fits you best.' : 'আমাদের উদ্দেশ্যে অবদান রাখার অনেক উপায় আছে। আপনার জন্য সবচেয়ে উপযুক্ত একটি বেছে নিন।')}
    >
      <div className="space-y-32">
        {/* Hero Section - Split Layout */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full font-bold text-sm uppercase tracking-widest">
              <Icons.Heart size={18} /> {lang === 'en' ? 'Make a Difference' : 'পরিবর্তন আনুন'}
            </div>
            <h2 className="text-5xl lg:text-7xl font-display font-bold text-text-main leading-tight">
              {support?.hero?.title?.[lang] || (lang === 'en' ? 'Your Support Changes Lives' : 'আপনার সমর্থন জীবন বদলে দেয়')}
            </h2>
            <p className="text-muted text-xl leading-relaxed max-w-xl">
              {support?.hero?.description?.[lang] || (lang === 'en' 
                ? 'Every contribution, whether big or small, helps us provide essential services and advocate for the rights of persons with disabilities.' 
                : 'প্রতিটি অবদান, ছোট বা বড় যাই হোক না কেন, আমাদের প্রয়োজনীয় সেবা প্রদান করতে এবং প্রতিবন্ধী ব্যক্তিদের অধিকারের জন্য অ্যাডভোকেসি করতে সাহায্য করে।')}
            </p>
            <div className="flex flex-wrap gap-6">
              <Link 
                to="/support/donate" 
                className="px-10 py-5 bg-primary text-white rounded-full font-bold text-lg shadow-2xl hover:scale-105 transition-all flex items-center gap-3"
              >
                {lang === 'en' ? 'Donate Now' : 'এখনই দান করুন'} <Icons.ArrowRight size={24} />
              </Link>
              <Link 
                to="/contact" 
                className="px-10 py-5 bg-white text-text-main border border-border rounded-full font-bold text-lg shadow-lg hover:bg-surface-alt transition-all"
              >
                {lang === 'en' ? 'Contact Us' : 'যোগাযোগ করুন'}
              </Link>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse" />
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-secondary/5 rounded-full blur-3xl animate-pulse delay-1000" />
            <div className="aspect-square rounded-[4rem] overflow-hidden shadow-2xl border-8 border-white relative z-10">
              <img 
                src="https://picsum.photos/seed/support-hero/1200/1200" 
                alt="Support SPUS" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Floating Stats */}
            <div className="absolute -bottom-12 -right-12 bg-white p-8 rounded-3xl shadow-2xl border border-border z-20 max-w-xs hidden md:block">
              <p className="text-primary font-display font-bold text-5xl mb-2">100%</p>
              <p className="text-text-main font-bold text-lg leading-tight">
                {lang === 'en' ? 'Transparency in every donation.' : 'প্রতিটি অনুদানে স্বচ্ছতা।'}
              </p>
            </div>
          </motion.div>
        </section>

        {/* Support Options Grid */}
        <section className="space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <h2 className="text-4xl lg:text-5xl font-display font-bold text-text-main">
              {lang === 'en' ? 'Ways to Get Involved' : 'অংশগ্রহণের উপায়'}
            </h2>
            <p className="text-muted text-lg">
              {lang === 'en' 
                ? 'Whether you want to give money, time, or expertise, there is a place for you in our mission.' 
                : 'আপনি টাকা, সময় বা দক্ষতা যাই দিতে চান না কেন, আমাদের মিশনে আপনার জন্য একটি জায়গা রয়েছে।'}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {supportOptions.map((option, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group bg-white p-10 lg:p-16 rounded-[4rem] border border-border hover:border-primary hover:shadow-2xl transition-all duration-500 relative overflow-hidden"
              >
                <div className={`absolute top-0 right-0 w-48 h-48 ${option.bg} rounded-full -mr-24 -mt-24 group-hover:scale-150 transition-transform duration-700`} />
                <div className="relative z-10 space-y-8">
                  <div className={`w-20 h-20 ${option.bg} ${option.color} rounded-3xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                    <option.icon size={40} />
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-3xl font-display font-bold text-text-main">{option.title}</h3>
                    <p className="text-muted text-lg leading-relaxed">{option.description}</p>
                  </div>
                  <Link 
                    to={option.link} 
                    className="inline-flex items-center gap-2 text-primary font-bold text-lg hover:gap-4 transition-all"
                  >
                    {lang === 'en' ? 'Learn More' : 'আরও জানুন'} <Icons.ArrowRight size={20} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Impact Stats - Bento Grid Style */}
        <section className="bg-text-main p-16 lg:p-24 rounded-[5rem] text-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-primary via-transparent to-transparent" />
          </div>
          <div className="relative z-10 space-y-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
              <div className="space-y-6">
                <h2 className="text-4xl lg:text-6xl font-display font-bold leading-tight">
                  {support?.impact?.title?.[lang] || (lang === 'en' ? 'The Impact of Your Support' : 'আপনার সমর্থনের প্রভাব')}
                </h2>
                <p className="text-white/60 text-xl max-w-xl">
                  {support?.impact?.subtitle?.[lang] || (lang === 'en' ? 'See how your contributions are making a real difference in the community.' : 'আপনার অবদান কীভাবে সম্প্রদায়ে বাস্তব পরিবর্তন আনছে তা দেখুন।')}
                </p>
              </div>
              <div className="flex lg:justify-end">
                <Link to="/news" className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 rounded-full font-bold transition-all">
                  {lang === 'en' ? 'Read Impact Stories' : 'প্রভাবের গল্পগুলো পড়ুন'}
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {impactStats.map((stat, idx) => (
                <div key={idx} className="p-10 bg-white/5 backdrop-blur-sm rounded-[3rem] border border-white/10 space-y-6 hover:bg-white/10 transition-all">
                  <div className="w-16 h-16 bg-primary/20 text-primary rounded-2xl flex items-center justify-center">
                    <stat.icon size={32} />
                  </div>
                  <div className="space-y-2">
                    <p className="text-5xl font-display font-bold text-white">{stat.value}</p>
                    <p className="text-white/60 font-bold uppercase tracking-widest text-sm">{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action - Partnership */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center bg-surface-alt p-12 lg:p-24 rounded-[5rem] border border-border">
          <div className="space-y-8">
            <h2 className="text-4xl lg:text-5xl font-display font-bold text-text-main leading-tight">
              {lang === 'en' ? 'Corporate & Institutional Partnerships' : 'করপোরেট ও প্রাতিষ্ঠানিক অংশীদারিত্ব'}
            </h2>
            <p className="text-muted text-xl leading-relaxed">
              {lang === 'en' 
                ? 'We work with organizations to create sustainable impact through CSR initiatives and joint programs. Let\'s build a more inclusive future together.' 
                : 'আমরা CSR উদ্যোগ এবং যৌথ কর্মসূচির মাধ্যমে টেকসই প্রভাব তৈরি করতে বিভিন্ন সংস্থার সাথে কাজ করি। আসুন একসাথে আরও অন্তর্ভুক্তিমূলক ভবিষ্যৎ গড়ি।'}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/support/partner" className="px-10 py-5 bg-secondary text-white rounded-full font-bold text-lg shadow-xl hover:scale-105 transition-all">
                {lang === 'en' ? 'Partner With Us' : 'আমাদের সাথে অংশীদার হন'}
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-video rounded-[3rem] overflow-hidden shadow-2xl">
              <img 
                src="https://picsum.photos/seed/partnership/1200/800" 
                alt="Partnership" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </section>
      </div>
    </PageWrapper>
  );
}
