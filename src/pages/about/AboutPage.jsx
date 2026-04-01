import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import PageWrapper from '../../components/layout/PageWrapper';
import { motion } from 'motion/react';
import { History, ShieldCheck, Heart, CheckCircle2, ArrowRight, GraduationCap, Megaphone, FileText, Download, Calendar, Award, Building2 } from 'lucide-react';
import TargetGroupsInfographic from '../../components/infographics/TargetGroupsInfographic';

export default function AboutPage() {
  const { lang } = useLanguage();

  const philosophy = [
    { title: lang === 'en' ? 'Education' : 'শিক্ষা', icon: GraduationCap, color: 'text-primary', bg: 'bg-primary/10', desc: lang === 'en' ? 'Empowering through knowledge and skill development.' : 'জ্ঞান ও দক্ষতা উন্নয়নের মাধ্যমে ক্ষমতায়ন।' },
    { title: lang === 'en' ? 'Awareness' : 'সচেতনতা', icon: Megaphone, color: 'text-secondary', bg: 'bg-secondary/10', desc: lang === 'en' ? 'Breaking social stigmas and promoting inclusion.' : 'সামাজিক কুসংস্কার দূর করা এবং অন্তর্ভুক্তি প্রচার করা।' },
    { title: lang === 'en' ? 'Rights & Justice' : 'অধিকার ও ন্যায়বিচার', icon: ShieldCheck, color: 'text-accent', bg: 'bg-accent/10', desc: lang === 'en' ? 'Advocating for legal rights and social equity.' : 'আইনি অধিকার এবং সামাজিক সমতার জন্য ওকালতি।' },
    { title: lang === 'en' ? 'Empowerment' : 'ক্ষমতায়ন', icon: Heart, color: 'text-primary', bg: 'bg-primary/10', desc: lang === 'en' ? 'Creating opportunities for self-reliance.' : 'স্বনির্ভরতার সুযোগ তৈরি করা।' },
  ];

  const timeline = [
    { year: '2013', title: lang === 'en' ? 'Foundation' : 'প্রতিষ্ঠা', desc: lang === 'en' ? 'SPUS was founded on 28th December to serve Badda, Bhatara, and Satarkul.' : 'বাড্ডা, ভাটারা এবং সাতারকুলের সেবায় ২৮শে ডিসেম্বর এসপিইউএস প্রতিষ্ঠিত হয়।' },
    { year: '2017', title: lang === 'en' ? 'Registration' : 'নিবন্ধন', desc: lang === 'en' ? 'Officially registered with the Department of Social Welfare, Dhaka.' : 'সমাজসেবা অধিদপ্তর, ঢাকা থেকে আনুষ্ঠানিকভাবে নিবন্ধিত।' },
    { year: 'Today', title: lang === 'en' ? 'Growing Impact' : 'ক্রমবর্ধমান প্রভাব', desc: lang === 'en' ? 'Serving thousands of disabled individuals across our work areas.' : 'আমাদের কর্মক্ষেত্রে হাজার হাজার প্রতিবন্ধী ব্যক্তিদের সেবা প্রদান করছি।' },
  ];

  return (
    <PageWrapper 
      title={lang === 'en' ? 'About SPUS' : 'এসপিইউএস সম্পর্কে'}
      subtitle={lang === 'en' ? 'A journey of compassion, resilience, and empowerment since 2013.' : '২০১৩ থেকে মমতা, স্থিতিস্থাপকতা এবং ক্ষমতায়নের একটি যাত্রা।'}
    >
      <div className="space-y-32">
        {/* Hero Section - Split Layout */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full font-bold text-sm uppercase tracking-widest">
              <History size={18} /> {lang === 'en' ? 'Our Legacy' : 'আমাদের ঐতিহ্য'}
            </div>
            <h2 className="text-5xl lg:text-6xl font-display font-bold text-text-main leading-tight">
              {lang === 'en' ? 'Empowering Lives Since 2013' : '২০১৩ থেকে জীবন ক্ষমতায়ন'}
            </h2>
            <p className="text-muted text-xl leading-relaxed">
              {lang === 'en' 
                ? 'Satarkul Protibondhi Unnayan Songstha (SPUS) emerged from a collective vision to ensure the rights of persons with disabilities in family, society, and state.' 
                : 'সাতারকুল প্রতিবন্ধী উন্নয়ন সংস্থা (এসপিইউএস) পরিবার, সমাজ এবং রাষ্ট্রে প্রতিবন্ধী ব্যক্তিদের অধিকার নিশ্চিত করার একটি সম্মিলিত দৃষ্টিভঙ্গি থেকে উদ্ভূত হয়েছে।'}
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-3 px-6 py-4 bg-surface-alt rounded-2xl border border-border">
                <Building2 className="text-primary" />
                <div>
                  <p className="text-xs font-bold text-muted uppercase">{lang === 'en' ? 'Type' : 'ধরন'}</p>
                  <p className="font-bold text-text-main">{lang === 'en' ? 'Non-Profit NGO' : 'অলাভজনক এনজিও'}</p>
                </div>
              </div>
              <div className="flex items-center gap-3 px-6 py-4 bg-surface-alt rounded-2xl border border-border">
                <Award className="text-secondary" />
                <div>
                  <p className="text-xs font-bold text-muted uppercase">{lang === 'en' ? 'Reg No' : 'নিবন্ধন নং'}</p>
                  <p className="font-bold text-text-main">Dha-09437</p>
                </div>
              </div>
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
            <img 
              src="https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?q=80&w=2070&auto=format&fit=crop" 
              alt="SPUS Community" 
              className="rounded-[4rem] shadow-2xl relative z-10 border-8 border-white"
              referrerPolicy="no-referrer"
            />
            <div className="absolute -bottom-12 right-12 bg-white p-8 rounded-3xl shadow-2xl border border-border z-20 max-w-xs">
              <p className="text-primary font-display font-bold text-4xl mb-2">10+</p>
              <p className="text-text-main font-bold leading-tight">
                {lang === 'en' ? 'Years of dedicated service to the community.' : 'সম্প্রদায়ের জন্য নিবেদিত সেবার ১০ বছরেরও বেশি।'}
              </p>
            </div>
          </motion.div>
        </section>

        {/* Philosophy Cards - Grid Layout */}
        <section className="space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <h2 className="text-4xl font-display font-bold text-text-main">
              {lang === 'en' ? 'Our Philosophy of Change' : 'আমাদের পরিবর্তনের দর্শন'}
            </h2>
            <p className="text-muted text-lg">
              {lang === 'en' 
                ? 'We believe in a holistic approach to social transformation, focusing on four core pillars.' 
                : 'আমরা সামাজিক রূপান্তরের একটি সামগ্রিক পদ্ধতিতে বিশ্বাস করি, যা চারটি মূল স্তম্ভের উপর দৃষ্টি নিবদ্ধ করে।'}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {philosophy.map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group bg-white p-10 rounded-[3rem] border border-border hover:border-primary hover:shadow-2xl transition-all duration-500"
              >
                <div className={`w-20 h-20 ${item.bg} ${item.color} rounded-3xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500`}>
                  <item.icon size={40} />
                </div>
                <h4 className="text-2xl font-display font-bold text-text-main mb-4">{item.title}</h4>
                <p className="text-muted leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Timeline Section */}
        <section className="bg-text-main p-16 lg:p-24 rounded-[5rem] text-white overflow-hidden relative">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/10 skew-x-12 translate-x-1/2" />
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-1 space-y-6">
              <h2 className="text-4xl font-display font-bold">{lang === 'en' ? 'Our Growth Timeline' : 'আমাদের বৃদ্ধির টাইমলাইন'}</h2>
              <p className="text-white/60 text-lg">
                {lang === 'en' ? 'Tracing our steps from a small initiative to a recognized organization.' : 'একটি ছোট উদ্যোগ থেকে একটি স্বীকৃত সংস্থায় আমাদের পদক্ষেপগুলি অনুসরণ করা।'}
              </p>
            </div>
            <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-3 gap-8">
              {timeline.map((item, idx) => (
                <div key={idx} className="relative pl-8 border-l border-white/20 space-y-4">
                  <div className="absolute -left-1.5 top-0 w-3 h-3 bg-primary rounded-full shadow-[0_0_15px_rgba(var(--primary-rgb),0.5)]" />
                  <div className="text-primary font-display font-bold text-3xl">{item.year}</div>
                  <h4 className="text-xl font-bold">{item.title}</h4>
                  <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* People We Concern - Infographic Integration */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="order-2 lg:order-1">
            <TargetGroupsInfographic />
          </div>
          <div className="order-1 lg:order-2 space-y-6">
            <h2 className="text-5xl font-display font-bold text-text-main leading-tight">
              {lang === 'en' ? 'Who We Serve' : 'আমরা যাদের সেবা করি'}
            </h2>
            <p className="text-muted text-xl leading-relaxed">
              {lang === 'en' 
                ? 'Our primary focus is the empowerment of persons with disabilities, with a special emphasis on women and children who face double marginalization.' 
                : 'আমাদের প্রাথমিক ফোকাস হল প্রতিবন্ধী ব্যক্তিদের ক্ষমতায়ন, বিশেষ করে নারী ও শিশুদের উপর গুরুত্ব দেওয়া যারা দ্বিগুণ প্রান্তিককরণের সম্মুখীন হয়।'}
            </p>
            <div className="space-y-6">
              {[
                { en: 'Ultra poor disabled women and men', bn: 'অতি দরিদ্র প্রতিবন্ধী নারী ও পুরুষ' },
                { en: 'Disabled and non-disabled children', bn: 'প্রতিবন্ধী ও অ-প্রতিবন্ধী শিশু' },
                { en: 'Disabled adolescents & elderly', bn: 'প্রতিবন্ধী কিশোর-কিশোরী ও বয়স্ক' },
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-6 group">
                  <div className="w-12 h-12 bg-surface-alt text-primary rounded-2xl flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    <CheckCircle2 size={24} />
                  </div>
                  <span className="text-xl font-bold text-text-main">{lang === 'en' ? item.en : item.bn}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Resources Section */}
        <section className="space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="space-y-4">
              <h2 className="text-4xl font-display font-bold text-text-main">{lang === 'en' ? 'Transparency & Resources' : 'স্বচ্ছতা ও সম্পদ'}</h2>
              <p className="text-muted text-lg">{lang === 'en' ? 'Access our official documents and annual reports.' : 'আমাদের অফিসিয়াল নথি এবং বার্ষিক প্রতিবেদনগুলি অ্যাক্সেস করুন।'}</p>
            </div>
            <button className="flex items-center gap-2 text-primary font-bold hover:gap-4 transition-all">
              {lang === 'en' ? 'View All Resources' : 'সব সম্পদ দেখুন'} <ArrowRight size={20} />
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: 'Organization Profile', titleBn: 'সংস্থার প্রোফাইল', file: 'spus-organization-profile.pdf', size: '2.4 MB' },
              { title: 'Annual Report 2023', titleBn: 'বার্ষিক প্রতিবেদন ২০২৩', file: 'spus-annual-report-2023.pdf', size: '3.1 MB' },
            ].map((doc, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -10 }}
                className="p-10 bg-white rounded-[3rem] shadow-xl border border-border flex items-center justify-between group"
              >
                <div className="flex items-center gap-8">
                  <div className="w-20 h-20 bg-surface-alt text-primary rounded-[2rem] flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors duration-500">
                    <FileText size={36} />
                  </div>
                  <div>
                    <h4 className="text-2xl font-display font-bold text-text-main">
                      {lang === 'en' ? doc.title : doc.titleBn}
                    </h4>
                    <div className="flex items-center gap-4 mt-2">
                      <span className="text-sm font-bold text-muted uppercase tracking-widest">PDF</span>
                      <span className="w-1.5 h-1.5 bg-border rounded-full" />
                      <span className="text-sm font-bold text-muted uppercase tracking-widest">{doc.size}</span>
                    </div>
                  </div>
                </div>
                <button className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
                  <Download size={24} />
                </button>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </PageWrapper>
  );
}

