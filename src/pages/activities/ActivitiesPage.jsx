import React from 'react';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '../../context/LanguageContext';
import PageWrapper from '../../components/layout/PageWrapper';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { 
  Calendar, 
  Users, 
  HeartHandshake, 
  ArrowRight, 
  Megaphone, 
  Music, 
  Star, 
  Activity,
  CheckCircle2,
  ExternalLink
} from 'lucide-react';
import ReliefActivitiesStats from '../../components/infographics/ReliefActivitiesStats';
import SpecialDaysTimeline from '../../components/infographics/SpecialDaysTimeline';

export default function ActivitiesPage() {
  const { t } = useTranslation();
  const { lang } = useLanguage();

  const activityCategories = [
    {
      id: 'relief',
      title: lang === 'en' ? 'Relief Activities' : 'ত্রাণ সেবা',
      description: lang === 'en' ? 'Providing essential support including winter clothing, Ramadan food relief, and annual gifts to students and families.' : 'শিক্ষার্থী এবং পরিবারের জন্য শীতবস্ত্র, রমজান খাদ্য সহায়তা এবং বার্ষিক উপহার সহ প্রয়োজনীয় সহায়তা প্রদান।',
      icon: HeartHandshake,
      color: 'bg-blue-600',
      lightColor: 'bg-blue-50',
      to: '/activities/relief',
      stats: '1,000+ Served'
    },
    {
      id: 'cultural',
      title: lang === 'en' ? 'Cultural Activities' : 'সাংস্কৃতিক কার্যক্রম',
      description: lang === 'en' ? 'Fostering creativity and confidence through annual cultural programs and dance performances by our talented students.' : 'বার্ষিক সাংস্কৃতিক অনুষ্ঠান এবং আমাদের মেধাবী শিক্ষার্থীদের নৃত্য পরিবেশনার মাধ্যমে সৃজনশীলতা এবং আত্মবিশ্বাস বৃদ্ধি।',
      icon: Music,
      color: 'bg-rose-600',
      lightColor: 'bg-rose-50',
      to: '/activities/cultural',
      stats: 'Annual Events'
    },
    {
      id: 'special-days',
      title: lang === 'en' ? 'Special Day Observances' : 'বিভিন্ন দিবস পালন',
      description: lang === 'en' ? 'Commemorating significant national and international days to raise awareness and celebrate our heritage.' : 'সচেতনতা বৃদ্ধি এবং আমাদের ঐতিহ্য উদযাপনের জন্য গুরুত্বপূর্ণ জাতীয় ও আন্তর্জাতিক দিবসসমূহ পালন।',
      icon: Calendar,
      color: 'bg-emerald-600',
      lightColor: 'bg-emerald-50',
      to: '/activities/special-days',
      stats: '10+ Days/Year'
    },
    {
      id: 'advocacy',
      title: lang === 'en' ? 'Advocacy Activities' : 'এডভোকেসী কার্যক্রম',
      description: lang === 'en' ? 'Demanding rights and dignity for persons with disabilities through human chains, press conferences, and memorandums.' : 'মানববন্ধন, সংবাদ সম্মেলন এবং স্মারকলিপির মাধ্যমে প্রতিবন্ধী ব্যক্তিদের অধিকার ও মর্যাদা নিশ্চিত করা।',
      icon: Megaphone,
      color: 'bg-amber-600',
      lightColor: 'bg-amber-50',
      to: '/activities/advocacy',
      stats: '11-Point Demands'
    },
    {
      id: 'special-programs',
      title: lang === 'en' ? 'Special Programs' : 'বিশেষ কার্যক্রম',
      description: lang === 'en' ? 'Targeted initiatives like Speech and Occupational Training, Home Teacher programs, and Therapy centers.' : 'স্পিচ ও অকুপেশনাল ট্রেনিং, হোম টিচার প্রোগ্রাম এবং থেরাপি সেন্টারের মতো লক্ষ্যভিত্তিক উদ্যোগ।',
      icon: Star,
      color: 'bg-indigo-600',
      lightColor: 'bg-indigo-50',
      to: '/activities/special-programs',
      stats: 'Ongoing Care'
    },
    {
      id: 'meetings',
      title: lang === 'en' ? 'Committee Meetings' : 'কমিটির সভা',
      description: lang === 'en' ? 'Ensuring democratic governance and transparency through regular executive and general meetings.' : 'নিয়মিত নির্বাহী এবং সাধারণ সভার মাধ্যমে গণতান্ত্রিক সুশাসন এবং স্বচ্ছতা নিশ্চিত করা।',
      icon: Users,
      color: 'bg-slate-700',
      lightColor: 'bg-slate-50',
      to: '/activities/committee-meetings',
      stats: 'Monthly/Annual'
    }
  ];

  return (
    <PageWrapper 
      title={lang === 'en' ? 'Our Activities' : 'আমাদের কার্যক্রম'}
      subtitle={lang === 'en' ? 'A comprehensive overview of how we serve, advocate, and celebrate with our community.' : 'আমরা কীভাবে আমাদের সম্প্রদায়ের সেবা করি, অ্যাডভোকেসি করি এবং উদযাপন করি তার একটি বিস্তারিত রূপরেখা।'}
    >
      <div className="space-y-32">
        {/* Core Pillars Section - Unique Layout */}
        <section className="space-y-16">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 max-w-5xl">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full font-bold text-sm uppercase tracking-widest">
                <Activity size={18} /> {lang === 'en' ? 'Our Core Pillars' : 'আমাদের মূল স্তম্ভ'}
              </div>
              <h2 className="text-4xl lg:text-5xl font-display font-bold text-text-main leading-tight">
                {lang === 'en' ? 'Diverse Initiatives for Holistic Impact' : 'সামগ্রিক প্রভাবের জন্য বৈচিত্র্যময় উদ্যোগ'}
              </h2>
            </div>
            <p className="text-muted text-lg lg:max-w-md leading-relaxed">
              {lang === 'en' 
                ? 'From immediate relief to long-term advocacy, our activities are designed to empower and support every individual in our community.' 
                : 'তাৎক্ষণিক ত্রাণ থেকে শুরু করে দীর্ঘমেয়াদী অ্যাডভোকেসি পর্যন্ত, আমাদের কার্যক্রমগুলো আমাদের সম্প্রদায়ের প্রতিটি ব্যক্তিকে ক্ষমতায়ন এবং সহায়তা করার জন্য ডিজাইন করা হয়েছে।'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {activityCategories.map((activity, idx) => (
              <motion.div
                key={activity.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="group relative"
              >
                <Link to={activity.to} className="block h-full">
                  <div className="h-full bg-white rounded-[3rem] border border-border p-10 space-y-8 shadow-lg hover:shadow-2xl transition-all duration-500 flex flex-col relative overflow-hidden">
                    {/* Background Accent */}
                    <div className={`absolute top-0 right-0 w-32 h-32 ${activity.lightColor} rounded-bl-[5rem] -mr-8 -mt-8 transition-all duration-500 group-hover:w-full group-hover:h-full group-hover:rounded-none group-hover:m-0 group-hover:opacity-10`} />
                    
                    <div className="relative z-10 flex items-start justify-between">
                      <div className={`w-20 h-20 ${activity.color} text-white rounded-[2rem] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                        <activity.icon size={40} />
                      </div>
                      <div className="text-right">
                        <p className="text-[10px] font-bold text-muted uppercase tracking-[0.2em] mb-1">{lang === 'en' ? 'Impact' : 'প্রভাব'}</p>
                        <p className="text-sm font-bold text-text-main">{activity.stats}</p>
                      </div>
                    </div>

                    <div className="relative z-10 space-y-4 flex-grow">
                      <h3 className="text-2xl font-display font-bold text-text-main group-hover:text-primary transition-colors leading-tight">
                        {activity.title}
                      </h3>
                      <p className="text-muted leading-relaxed">
                        {activity.description}
                      </p>
                    </div>

                    <div className="relative z-10 pt-6 flex items-center justify-between border-t border-border">
                      <span className="text-xs font-bold text-primary uppercase tracking-widest flex items-center gap-2">
                        {lang === 'en' ? 'Learn More' : 'আরও জানুন'} <ArrowRight size={14} />
                      </span>
                      <div className="w-10 h-10 rounded-full bg-surface-alt text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all">
                        <ExternalLink size={18} />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Relief Stats Section */}
        <section className="bg-surface-alt p-12 lg:p-24 rounded-[5rem] border border-border relative overflow-hidden">
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-6">
              <div className="space-y-6">
                <h2 className="text-4xl lg:text-5xl font-display font-bold text-text-main leading-tight">
                  {lang === 'en' ? 'Our Reach & Social Support' : 'আমাদের প্রসার ও সামাজিক সহায়তা'}
                </h2>
                <p className="text-muted text-lg leading-relaxed">
                  {lang === 'en' 
                    ? 'We maintain detailed records of our relief activities to ensure transparency and accountability to our donors and the community.' 
                    : 'আমাদের দাতাদের এবং সম্প্রদায়ের কাছে স্বচ্ছতা এবং জবাবদিহিতা নিশ্চিত করতে আমরা আমাদের ত্রাণ কার্যক্রমের বিস্তারিত রেকর্ড বজায় রাখি।'}
                </p>
              </div>
              <div className="space-y-4">
                {[
                  { en: '845+ Ramadan Relief Beneficiaries', bn: '৮৪৫+ রমজান ত্রাণ উপকারভোগী' },
                  { en: 'Annual Winter Clothing for 60+ Students', bn: '৬০+ শিক্ষার্থীর জন্য বার্ষিক শীতবস্ত্র' },
                  { en: 'Ongoing Support for Ultra-Poor Families', bn: 'অতি দরিদ্র পরিবারের জন্য চলমান সহায়তা' }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-4">
                    <div className="w-6 h-6 bg-primary/20 text-primary rounded-full flex items-center justify-center shrink-0">
                      <CheckCircle2 size={14} />
                    </div>
                    <span className="font-bold text-text-main">{lang === 'en' ? item.en : item.bn}</span>
                  </div>
                ))}
              </div>
              <Link to="/support/donate" className="inline-flex items-center gap-3 px-10 py-5 bg-primary text-white rounded-2xl font-bold text-lg shadow-xl hover:bg-primary/90 hover:scale-105 transition-all">
                {lang === 'en' ? 'Support Our Relief Work' : 'আমাদের ত্রাণ কাজে সহায়তা করুন'} <ArrowRight size={20} />
              </Link>
            </div>
            <div className="bg-white p-10 rounded-[4rem] shadow-2xl border border-border">
              <ReliefActivitiesStats />
            </div>
          </div>
          {/* Decorative background */}
          <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 -skew-x-12 translate-x-1/4" />
        </section>

        {/* Special Days Timeline Section */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          <div className="bg-white p-10 rounded-[4rem] shadow-2xl border border-border order-2 lg:order-1">
            <SpecialDaysTimeline />
          </div>
          <div className="space-y-6 order-1 lg:order-2 lg:sticky lg:top-32">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/10 text-secondary rounded-full font-bold text-sm uppercase tracking-widest">
                <Calendar size={18} /> {lang === 'en' ? 'Annual Observances' : 'বার্ষিক উদযাপন'}
              </div>
              <h2 className="text-4xl lg:text-5xl font-display font-bold text-text-main leading-tight">
                {lang === 'en' ? 'Commemorating Significant Days' : 'গুরুত্বপূর্ণ দিবসসমূহ উদযাপন'}
              </h2>
              <p className="text-muted text-lg leading-relaxed">
                {lang === 'en' 
                  ? 'We observe over 10 national and international days annually to foster a sense of history, culture, and rights among our students and community.' 
                  : 'আমাদের শিক্ষার্থী এবং সম্প্রদায়ের মধ্যে ইতিহাস, সংস্কৃতি এবং অধিকারের চেতনা বৃদ্ধির জন্য আমরা বার্ষিক ১০টিরও বেশি জাতীয় ও আন্তর্জাতিক দিবস পালন করি।'}
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="p-8 bg-surface-alt rounded-[2.5rem] border border-border">
                <p className="text-4xl font-display font-bold text-secondary mb-2">10+</p>
                <p className="text-xs font-bold text-muted uppercase tracking-widest">{lang === 'en' ? 'Days Observed' : 'পালিত দিবস'}</p>
              </div>
              <div className="p-8 bg-surface-alt rounded-[2.5rem] border border-border">
                <p className="text-4xl font-display font-bold text-accent mb-2">1,000+</p>
                <p className="text-xs font-bold text-muted uppercase tracking-widest">{lang === 'en' ? 'Community Reach' : 'সামাজিক প্রসার'}</p>
              </div>
            </div>
            <Link to="/activities/special-days" className="inline-flex items-center gap-3 px-10 py-5 bg-secondary text-white rounded-2xl font-bold text-lg shadow-xl hover:bg-secondary/90 hover:scale-105 transition-all">
              {lang === 'en' ? 'View Full Calendar' : 'সম্পূর্ণ ক্যালেন্ডার দেখুন'} <ArrowRight size={20} />
            </Link>
          </div>
        </section>

        {/* Call to Action - Immersive */}
        <section className="relative bg-slate-900 rounded-[5rem] p-12 lg:p-24 text-center text-white overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <img src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=2070&auto=format&fit=crop" alt="Background" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
          </div>
          <div className="relative z-10 max-w-4xl mx-auto space-y-6">
            <h2 className="text-4xl lg:text-6xl font-display font-bold leading-tight">
              {lang === 'en' ? 'Join Us in Creating a More Inclusive World' : 'আরও অন্তর্ভুক্তিমূলক বিশ্ব তৈরিতে আমাদের সাথে যোগ দিন'}
            </h2>
            <p className="text-white/70 text-xl leading-relaxed max-w-2xl mx-auto">
              {lang === 'en' 
                ? 'Whether through volunteering, partnership, or donation, your involvement powers our activities and changes lives.' 
                : 'স্বেচ্ছাসেবা, অংশীদারিত্ব বা অনুদানের মাধ্যমেই হোক, আপনার সম্পৃক্ততা আমাদের কার্যক্রমকে শক্তিশালী করে এবং জীবন বদলে দেয়।'}
            </p>
            <div className="flex flex-wrap justify-center gap-6 pt-4">
              <Link to="/support/volunteer" className="px-12 py-6 bg-primary text-white rounded-3xl font-bold text-xl shadow-2xl hover:bg-primary/90 hover:scale-105 transition-all">
                {lang === 'en' ? 'Volunteer with Us' : 'স্বেচ্ছাসেবী হিসেবে যোগ দিন'}
              </Link>
              <Link to="/support/donate" className="px-12 py-6 bg-white text-slate-900 rounded-3xl font-bold text-xl shadow-2xl hover:bg-surface-alt hover:scale-105 transition-all">
                {lang === 'en' ? 'Donate Now' : 'এখনই দান করুন'}
              </Link>
            </div>
          </div>
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-96 h-96 bg-primary/20 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/20 rounded-full blur-[100px] translate-x-1/2 translate-y-1/2" />
        </section>
      </div>
    </PageWrapper>
  );
}
