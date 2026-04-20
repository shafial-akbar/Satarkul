import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation, EffectFade, FreeMode } from 'swiper/modules';
import CountUp from 'react-countup';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '../../../context/LanguageContext';
import { useTheme } from '../../../context/ThemeContext';
import { useContent } from '../../../context/ContentContext';
import { 
  GraduationCap, 
  HeartPulse, 
  Wrench, 
  Banknote, 
  Accessibility, 
  Megaphone, 
  ArrowRight, 
  Heart,
  Users,
  Calendar,
  MapPin,
  CheckCircle2,
  Target,
  Eye,
  Award,
  Quote,
  ArrowUpRight,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  CalendarDays,
  PhoneCall,
  Compass,
  LineChart
} from 'lucide-react';
import { Link } from 'react-router-dom';

// Data imports
import { donorsData } from '../../../data/donorsData';
import { newsData } from '../../../data/newsData';

// Infographics
import SchoolEnrollmentChart from '../../../components/infographics/SchoolEnrollmentChart';
import MemberCompositionChart from '../../../components/infographics/MemberCompositionChart';
import HealthServicesStats from '../../../components/infographics/HealthServicesStats';
import WorkAreaGrid from '../../../components/infographics/WorkAreaGrid';

// Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

export default function Variant1() {
  const { t } = useTranslation();
  const { lang } = useLanguage();
  const { currentTheme } = useTheme();
  const { content } = useContent();

  const getLocalized = (obj) => {
    if (!obj) return '';
    return obj[lang] || obj['en'] || '';
  };

  const heroSlides = [
    {
      image: 'https://picsum.photos/seed/empower/1920/1080',
      title: content?.home?.hero?.slides?.[0]?.title?.[lang] || (lang === 'en' ? 'Empowering Lives, Ensuring Rights' : 'জীবনকে ক্ষমতায়ন, অধিকার নিশ্চিতকরণ'),
      subtitle: content?.home?.hero?.slides?.[0]?.subtitle?.[lang] || t('common.motto'),
      tag: content?.home?.hero?.slides?.[0]?.tag?.[lang] || (lang === 'en' ? 'Welcome to SPUS' : 'এসপিইউএস-এ আপনাকে স্বাগতম'),
    },
    {
      image: 'https://picsum.photos/seed/education-hero/1920/1080',
      title: content?.home?.hero?.slides?.[1]?.title?.[lang] || (lang === 'en' ? 'Inclusive Education for Every Child' : 'প্রতিটি শিশুর জন্য অন্তর্ভুক্তিমূলক শিক্ষা'),
      subtitle: content?.home?.hero?.slides?.[1]?.subtitle?.[lang] || (lang === 'en' ? 'Breaking barriers to learning and growth for children with disabilities.' : 'প্রতিবন্ধী শিশুদের শেখার এবং বিকাশের বাধাগুলো দূর করা।'),
      tag: content?.home?.hero?.slides?.[1]?.tag?.[lang] || (lang === 'en' ? 'Education Program' : 'শিক্ষা কার্যক্রম'),
    },
    {
      image: 'https://picsum.photos/seed/healthcare-hero/1920/1080',
      title: content?.home?.hero?.slides?.[2]?.title?.[lang] || (lang === 'en' ? 'Better Health, Brighter Future' : 'উন্নত স্বাস্থ্য, উজ্জ্বল ভবিষ্যৎ'),
      subtitle: content?.home?.hero?.slides?.[2]?.subtitle?.[lang] || (lang === 'en' ? 'Providing essential healthcare and assistive devices to our community.' : 'আমাদের সম্প্রদায়ের জন্য প্রয়োজনীয় স্বাস্থ্যসেবা এবং সহায়ক উপকরণ প্রদান।'),
      tag: content?.home?.hero?.slides?.[2]?.tag?.[lang] || (lang === 'en' ? 'Health Services' : 'স্বাস্থ্যসেবা'),
    },
  ];

  const stats = [
    { label: content?.home?.stats?.members, value: 705, icon: Users, color: 'text-primary' },
    { label: content?.home?.stats?.winterClothes, value: 200, icon: Heart, color: 'text-secondary' },
    { label: content?.home?.stats?.students, value: 120, icon: GraduationCap, color: 'text-accent' },
    { label: content?.home?.stats?.relief, value: 1000, icon: CheckCircle2, color: 'text-primary' },
    { label: content?.home?.stats?.years, value: 13, icon: Calendar, color: 'text-secondary' },
  ];

  const programs = content?.programs?.list?.map(p => ({
    ...p,
    title: p.title?.[lang] || p.title?.['en'] || '',
    desc: p.desc?.[lang] || p.desc?.['en'] || '',
    icon: {
      'education': GraduationCap,
      'health': HeartPulse,
      'skill-development': Wrench,
      'financial-support': Banknote,
      'assistive-devices': Accessibility,
      'awareness': Megaphone,
      'social-support': Users,
      'special-programs': Target
    }[p.id] || Target,
    color: {
      'education': 'text-primary',
      'health': 'text-secondary',
      'skill-development': 'text-accent',
      'financial-support': 'text-primary',
      'assistive-devices': 'text-secondary',
      'awareness': 'text-accent',
      'social-support': 'text-primary',
      'special-programs': 'text-secondary'
    }[p.id] || 'text-primary'
  })) || [];

  const testimonials = content?.home?.testimonials?.list?.map(t => ({
    ...t,
    name: t.name?.[lang] || t.name?.['en'] || '',
    role: t.role?.[lang] || t.role?.['en'] || '',
    quote: t.quote?.[lang] || t.quote?.['en'] || ''
  })) || [];

  return (
    <div className="overflow-hidden bg-bg">
      {/* Hero Slider */}
      <section className="relative h-[90vh] lg:h-screen">
        <Swiper
          modules={[Autoplay, Pagination, Navigation, EffectFade]}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          autoplay={{ delay: 6000 }}
          pagination={{ 
            clickable: true,
            renderBullet: (index, className) => {
              return `<span class="${className} !w-12 !h-1.5 !rounded-full !bg-white/30 !transition-all"></span>`;
            }
          }}
          navigation={{
            nextEl: '.hero-next',
            prevEl: '.hero-prev',
          }}
          loop
          className="h-full w-full"
        >
          {(content?.home?.hero?.slides || [
            {
              image: 'https://picsum.photos/seed/empower/1920/1080',
              title: { en: 'Empowering Lives, Ensuring Rights', bn: 'জীবনকে ক্ষমতায়ন, অধিকার নিশ্চিতকরণ' },
              subtitle: { en: 'Dedicated to the welfare and rights of persons with disabilities.', bn: 'প্রতিবন্ধী ব্যক্তিদের কল্যাণ ও অধিকারের জন্য নিবেদিত।' },
              tag: { en: 'Welcome to SPUS', bn: 'এসপিইউএস-এ আপনাকে স্বাগতম' },
            },
            {
              image: 'https://picsum.photos/seed/education-hero/1920/1080',
              title: { en: 'Inclusive Education for Every Child', bn: 'প্রতিটি শিশুর জন্য অন্তর্ভুক্তিমূলক শিক্ষা' },
              subtitle: { en: 'Breaking barriers to learning and growth for children with disabilities.', bn: 'প্রতিবন্ধী শিশুদের শেখার এবং বিকাশের বাধাগুলো দূর করা।' },
              tag: { en: 'Education Program', bn: 'শিক্ষা কার্যক্রম' },
            },
            {
              image: 'https://picsum.photos/seed/healthcare-hero/1920/1080',
              title: { en: 'Better Health, Brighter Future', bn: 'উন্নত স্বাস্থ্য, উজ্জ্বল ভবিষ্যৎ' },
              subtitle: { en: 'Providing essential healthcare and assistive devices to our community.', bn: 'আমাদের সম্প্রদায়ের জন্য প্রয়োজনীয় স্বাস্থ্যসেবা এবং সহায়ক উপকরণ প্রদান।' },
              tag: { en: 'Health Services', bn: 'স্বাস্থ্যসেবা' },
            },
          ]).map((slide, idx) => (
            <SwiperSlide key={idx}>
              {({ isActive }) => (
                <div className="relative h-full w-full overflow-hidden">
                  <motion.div 
                    initial={{ scale: 1.1 }}
                    animate={isActive ? { scale: 1 } : { scale: 1.1 }}
                    transition={{ duration: 6 }}
                    className="absolute inset-0"
                  >
                    <img 
                      src={slide.image || `https://picsum.photos/seed/hero-${idx}/1920/1080`} 
                      alt={slide.title?.[lang] || slide.title?.en} 
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </motion.div>
                  <div className="absolute inset-0" style={{ background: 'var(--hero-overlay)' }} />
                  
                  <div className="absolute inset-0 flex items-center px-6 lg:px-24">
                    <div className="max-w-4xl space-y-6">
                      <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={isActive ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                        transition={{ duration: 0.6 }}
                        className="inline-flex items-center gap-3 px-5 py-2 bg-primary/20 backdrop-blur-md border border-white/20 rounded-full text-accent font-bold text-sm uppercase tracking-widest"
                      >
                        <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                        {slide.tag?.[lang] || slide.tag?.en}
                      </motion.div>
                      
                      <motion.h1 
                        initial={{ opacity: 0, y: 30 }}
                        animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="text-4xl lg:text-7xl font-display font-bold text-white leading-[1.1]"
                      >
                        {slide.title?.[lang] || slide.title?.en}
                      </motion.h1>
                      
                      <motion.p 
                        initial={{ opacity: 0, y: 30 }}
                        animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                        className="text-lg lg:text-2xl text-white/80 max-w-2xl font-medium leading-relaxed"
                      >
                        {slide.subtitle?.[lang] || slide.subtitle?.en}
                      </motion.p>
                      
                      <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                        transition={{ delay: 0.6, duration: 0.6 }}
                        className="flex flex-wrap gap-6 pt-6"
                      >
                        <Link to="/support/donate" className="group px-10 py-5 bg-primary text-white rounded-2xl font-bold text-lg hover:bg-primary/90 transition-all shadow-2xl flex items-center gap-3">
                          {content?.common?.buttons?.donateNow?.[lang] || (lang === 'en' ? 'Donate Now' : 'এখনই দান করুন')} <Heart size={20} className="group-hover:scale-125 transition-transform" />
                        </Link>
                        <Link to="/about" className="px-10 py-5 bg-white/10 backdrop-blur-md border border-white/30 text-white rounded-2xl font-bold text-lg hover:bg-white/20 transition-all shadow-xl">
                          {content?.common?.buttons?.learnMore?.[lang] || (lang === 'en' ? 'Learn More' : 'আরও জানুন')}
                        </Link>
                      </motion.div>
                    </div>
                  </div>
                </div>
              )}
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Navigation */}
        <div className="absolute bottom-12 right-12 z-20 flex gap-4">
          <button className="hero-prev w-14 h-14 rounded-full border border-white/30 bg-white/10 backdrop-blur-md text-white flex items-center justify-center hover:bg-primary hover:border-primary transition-all shadow-xl">
            <ChevronLeft size={24} />
          </button>
          <button className="hero-next w-14 h-14 rounded-full border border-white/30 bg-white/10 backdrop-blur-md text-white flex items-center justify-center hover:bg-primary hover:border-primary transition-all shadow-xl">
            <ChevronRight size={24} />
          </button>
        </div>
      </section>

      {/* Quick About Section */}
      <section className="py-24 lg:py-32 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl aspect-[4/5]">
                <img 
                  src="https://picsum.photos/seed/about-spus/1000/1250" 
                  alt="About SPUS" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-10 -right-10 z-20 bg-primary p-10 rounded-[2.5rem] shadow-2xl text-white max-w-xs hidden md:block">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                    <Award size={24} />
                  </div>
                  <p className="text-xl font-display font-bold">{content?.home?.about?.since?.[lang] || (lang === 'en' ? 'Since 2013' : '২০১৩ থেকে')}</p>
                </div>
                <p className="text-white/80 text-sm leading-relaxed">
                  {content?.home?.about?.sinceDesc?.[lang] || (lang === 'en' ? 'Dedicated to empowering persons with disabilities in Badda, Dhaka.' : 'বাড্ডা, ঢাকায় প্রতিবন্ধী ব্যক্তিদের ক্ষমতায়নে নিবেদিত।')}
                </p>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-accent/20 rounded-full blur-3xl" />
              <div className="absolute top-1/2 right-0 w-32 h-32 bg-secondary/10 rounded-full blur-2xl" />
            </div>

            <div className="space-y-6">
              <div className="space-y-4">
                <span className="text-primary font-bold tracking-[0.2em] uppercase text-sm">
                  {content?.home?.about?.tag?.[lang] || (lang === 'en' ? 'Who We Are' : 'আমরা কে')}
                </span>
                <h2 className="text-4xl lg:text-5xl font-display font-bold text-text-main leading-tight">
                  {content?.home?.about?.title?.[lang] || (lang === 'en' ? 'Working for an Inclusive Society' : 'একটি অন্তর্ভুক্তিমূলক সমাজের জন্য কাজ করছি')}
                </h2>
                <p className="text-muted text-lg leading-relaxed">
                  {content?.home?.about?.description?.[lang] || (lang === 'en' 
                    ? 'Swadhin Protibondhi Unnayan Sangstha (SPUS) is a non-political, non-profit organization dedicated to the welfare and rights of persons with disabilities.' 
                    : 'স্বাধীন প্রতিবন্ধী উন্নয়ন সংস্থা (এসপিইউএস) একটি অরাজনৈতিক, অলাভজনক সংস্থা যা প্রতিবন্ধী ব্যক্তিদের কল্যাণ ও অধিকারের জন্য নিবেদিত।')}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4 p-6 bg-surface-alt rounded-3xl border border-border">
                  <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center">
                    <Target size={24} />
                  </div>
                  <h3 className="text-xl font-display font-bold text-text-main">{content?.about?.mission?.title?.[lang] || (lang === 'en' ? 'Our Mission' : 'আমাদের লক্ষ্য')}</h3>
                  <p className="text-sm text-muted leading-relaxed">
                    {content?.about?.mission?.text?.[lang] || (lang === 'en' ? 'To ensure the rights and dignity of every person with a disability.' : 'প্রতিটি প্রতিবন্ধী ব্যক্তির অধিকার ও মর্যাদা নিশ্চিত করা।')}
                  </p>
                </div>
                <div className="space-y-4 p-6 bg-surface-alt rounded-3xl border border-border">
                  <div className="w-12 h-12 bg-secondary/10 text-secondary rounded-xl flex items-center justify-center">
                    <Eye size={24} />
                  </div>
                  <h3 className="text-xl font-display font-bold text-text-main">{content?.about?.vision?.title?.[lang] || (lang === 'en' ? 'Our Vision' : 'আমাদের স্বপ্ন')}</h3>
                  <p className="text-sm text-muted leading-relaxed">
                    {content?.about?.vision?.text?.[lang] || (lang === 'en' ? 'A society where disability is not a barrier to success.' : 'এমন একটি সমাজ যেখানে প্রতিবন্ধকতা সাফল্যের পথে বাধা নয়।')}
                  </p>
                </div>
              </div>

              <div className="pt-4">
                <Link to="/about" className="inline-flex items-center gap-2 text-primary font-bold text-lg hover:gap-4 transition-all group">
                  {content?.home?.about?.discoverMore?.[lang] || (lang === 'en' ? 'Discover More About Us' : 'আমাদের সম্পর্কে আরও জানুন')} <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-primary relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-12">
            {stats.map((stat, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="text-center space-y-3"
              >
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-[2rem] bg-white/10 text-accent mb-2 shadow-inner">
                  <stat.icon size={36} />
                </div>
                <div className="text-3xl lg:text-5xl font-display font-bold text-white">
                  <CountUp end={stat.value} duration={2.5} enableScrollSpy />
                  {stat.value >= 10 && '+'}
                </div>
                <p className="text-white/60 text-xs font-bold uppercase tracking-[0.2em]">
                  {stat.label?.[lang] || stat.label?.en}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
        {/* Background Pattern */}
        <div className="absolute top-0 right-0 w-full h-full opacity-5 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] border-[60px] border-white rounded-full" />
        </div>
      </section>

      {/* Presentation Highlight: Digital Services & Transparency */}
      <section className="py-24 lg:py-32 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
            <span className="text-primary font-bold tracking-[0.2em] uppercase text-sm">
              {lang === 'en' ? 'New Digital Features' : 'নতুন ডিজিটাল বৈশিষ্ট্য'}
            </span>
            <h2 className="text-4xl lg:text-5xl font-display font-bold text-text-main leading-tight">
              {lang === 'en' ? 'Empowering Through Technology & Transparency' : 'প্রযুক্তি এবং স্বচ্ছতার মাধ্যমে ক্ষমতায়ন'}
            </h2>
            <p className="text-muted text-lg">
              {lang === 'en' 
                ? 'We have introduced new digital tools to make our services more accessible and our operations more transparent.' 
                : 'আমাদের পরিষেবাগুলোকে আরও সহজলভ্য এবং আমাদের কার্যক্রমকে আরও স্বচ্ছ করতে আমরা নতুন ডিজিটাল টুল চালু করেছি।'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: { en: 'Program Booking', bn: 'প্রোগ্রাম বুকিং' },
                desc: { en: 'Book therapy and training slots online via interactive calendar.', bn: 'ইন্টারেক্টিভ ক্যালেন্ডারের মাধ্যমে অনলাইনে থেরাপি এবং ট্রেনিং স্লট বুক করুন।' },
                icon: CalendarDays,
                link: '/support/booking',
                color: 'bg-blue-500',
              },
              {
                title: { en: 'Medical Helpline', bn: 'মেডিকেল হেল্পলাইন' },
                desc: { en: 'Instant access to emergency medical contact information.', bn: 'জরুরী মেডিকেল কন্টাক্ট ইনফরমেশন দ্রুত খুঁজে পান।' },
                icon: PhoneCall,
                link: '/support/helpline',
                color: 'bg-emerald-500',
              },
              {
                title: { en: 'Donation Guide', bn: 'অনুদান সহায়িকা' },
                desc: { en: 'Strategic priority list to help donors contribute effectively.', bn: 'দাতাদের কার্যকরভাবে অবদান রাখতে সহায়তার জন্য চাহিদার তালিকা।' },
                icon: Compass,
                link: '/support/donation-guide',
                color: 'bg-amber-500',
              },
              {
                title: { en: 'Contribution Tracking', bn: 'অনুদান ট্র্যাকিং' },
                desc: { en: 'Transparent tracking of all small and large contributions.', bn: 'সব ছোট এবং বড় অনুদানের স্বচ্ছ ট্র্যাকিং ব্যবস্থা।' },
                icon: LineChart,
                link: '/support/contribution-tracking',
                color: 'bg-rose-500',
              }
            ].map((feature, fIdx) => (
              <motion.div
                key={fIdx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: fIdx * 0.1 }}
                className="group relative"
              >
                <Link to={feature.link} className="block space-y-6 p-10 rounded-[2.5rem] bg-surface-alt border border-border hover:border-primary hover:shadow-2xl transition-all duration-500 h-full">
                  <div className={`w-16 h-16 ${feature.color} text-white rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                    <feature.icon size={30} />
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-2xl font-display font-bold text-text-main group-hover:text-primary transition-colors">
                      {getLocalized(feature.title)}
                    </h3>
                    <p className="text-muted leading-relaxed text-sm">
                      {getLocalized(feature.desc)}
                    </p>
                  </div>
                  <div className="pt-4 flex items-center gap-2 text-primary font-bold text-sm">
                    {lang === 'en' ? 'Open Module' : 'মডিউলটি খুলুন'} <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-1/2 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-x-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />
      </section>

      {/* Programs Section */}
      <section className="py-24 lg:py-32 bg-surface">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-end justify-between gap-8 mb-16">
            <div className="max-w-2xl space-y-4">
              <span className="text-secondary font-bold tracking-[0.2em] uppercase text-sm">
                {content?.home?.programs?.tag?.[lang] || (lang === 'en' ? 'Our Impact Areas' : 'আমাদের প্রভাব ক্ষেত্র')}
              </span>
              <h2 className="text-4xl lg:text-5xl font-display font-bold text-text-main leading-tight">
                {content?.home?.programs?.title?.[lang] || (lang === 'en' ? 'Programs That Change Lives' : 'জীবন বদলে দেওয়া কর্মসূচি')}
              </h2>
            </div>
            <Link to="/programs" className="px-8 py-4 bg-white border-2 border-primary text-primary rounded-2xl font-bold hover:bg-primary hover:text-white transition-all shadow-lg flex items-center gap-2">
              {content?.nav?.allPrograms?.[lang] || (lang === 'en' ? 'All Programs' : 'সব কার্যক্রম')} <ArrowUpRight size={20} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {programs.map((program, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -12 }}
                className="group bg-white p-10 rounded-[3rem] shadow-xl border border-border hover:border-primary transition-all duration-500 flex flex-col h-full"
              >
                <div className={`w-20 h-20 rounded-[2rem] bg-surface-alt flex items-center justify-center ${program.color} mb-8 group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-inner`}>
                  <program.icon size={40} />
                </div>
                <h3 className="text-2xl font-display font-bold text-text-main mb-4 group-hover:text-primary transition-colors leading-tight">
                  {program.title}
                </h3>
                <p className="text-muted leading-relaxed mb-8 flex-grow">
                  {program.desc}
                </p>
                  <div className="flex items-center justify-between pt-6 border-t border-border">
                    <Link to={`/programs/${program.id}`} className="text-primary font-bold flex items-center gap-2 group-hover:gap-4 transition-all">
                      {content?.common?.buttons?.readMore?.[lang] || (lang === 'en' ? 'Read More' : 'আরও পড়ুন')} <ArrowRight size={18} />
                    </Link>
                    <Link to="/support/donate" className="w-10 h-10 rounded-full bg-surface-alt text-primary flex items-center justify-center hover:bg-primary hover:text-white transition-all">
                      <Heart size={18} />
                    </Link>
                  </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Activities (News) Slider */}
      <section className="py-24 lg:py-32 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-accent font-bold tracking-[0.2em] uppercase text-sm">
              {content?.home?.news?.tag?.[lang] || (lang === 'en' ? 'Recent Updates' : 'সাম্প্রতিক আপডেট')}
            </span>
            <h2 className="text-4xl lg:text-5xl font-display font-bold text-text-main">
              {content?.home?.news?.title?.[lang] || (lang === 'en' ? 'Activities & News' : 'কার্যক্রম এবং সংবাদ')}
            </h2>
          </div>

          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            spaceBetween={30}
            slidesPerView={1}
            autoplay={{ delay: 4000 }}
            pagination={{ clickable: true }}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="pb-16"
          >
            {/* Mix of News, Relief and Special Days */}
            {[
              ...newsData, 
              ...(content?.activities?.relief?.activities?.slice(0, 1) || []), 
              ...(content?.activities?.specialDays?.days?.slice(0, 1) || [])
            ].map((item, idx) => (
              <SwiperSlide key={idx}>
                <div className="group bg-surface-alt rounded-[2.5rem] overflow-hidden border border-border shadow-lg hover:shadow-2xl transition-all duration-500 h-full flex flex-col">
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={item.image || 'https://picsum.photos/seed/activity-placeholder/800/600'} 
                      alt={getLocalized(item.title)} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-6 left-6 px-4 py-2 bg-white/90 backdrop-blur-md rounded-full text-primary text-xs font-bold uppercase tracking-widest shadow-lg">
                      {item.timeline ? getLocalized(item.timeline) : (typeof item.date === 'string' ? item.date : getLocalized(item.date))}
                    </div>
                  </div>
                  <div className="p-8 space-y-4 flex-grow">
                    <h3 className="text-2xl font-display font-bold text-text-main group-hover:text-primary transition-colors leading-tight line-clamp-2">
                      {getLocalized(item.title)}
                    </h3>
                    <p className="text-muted text-sm leading-relaxed line-clamp-3">
                      {getLocalized(item.excerpt || item.desc || item.description)}
                    </p>
                  </div>
                  <div className="px-8 py-6 border-t border-border flex items-center justify-between">
                    <Link to={item.excerpt ? `/news/${item.id}` : "/activities"} className="text-sm font-bold text-primary flex items-center gap-2">
                      {content?.home?.news?.viewDetails?.[lang] || (lang === 'en' ? 'View Details' : 'বিস্তারিত দেখুন')} <ArrowRight size={16} />
                    </Link>
                    <div className="flex items-center gap-2 text-muted text-xs font-bold uppercase tracking-widest">
                      <Calendar size={14} /> {item.fullDate || (typeof item.date === 'string' ? item.date.split('-')[0] : '2024')}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 lg:py-32 bg-surface relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <span className="text-primary font-bold tracking-[0.2em] uppercase text-sm">
                {content?.home?.testimonials?.tag?.[lang] || (lang === 'en' ? 'Our Voices' : 'আমাদের কণ্ঠস্বর')}
              </span>
              <h2 className="text-4xl lg:text-5xl font-display font-bold text-text-main leading-tight">
                {content?.home?.testimonials?.title?.[lang] || (lang === 'en' ? 'Stories of Hope and Resilience' : 'আশা এবং সহনশীলতার গল্প')}
              </h2>
              <p className="text-muted text-lg leading-relaxed">
                {content?.home?.testimonials?.description?.[lang] || (lang === 'en' 
                  ? 'Hear from the people whose lives have been transformed through our programs and collective efforts.' 
                  : 'আমাদের কর্মসূচি এবং সম্মিলিত প্রচেষ্টার মাধ্যমে যাদের জীবন বদলে গেছে তাদের কাছ থেকে শুনুন।')}
              </p>
              <div className="pt-4">
                <Link to="/about/success-stories" className="px-10 py-5 bg-primary text-white rounded-2xl font-bold text-lg hover:bg-primary/90 transition-all shadow-xl inline-flex items-center gap-2">
                  {content?.home?.testimonials?.readMore?.[lang] || (lang === 'en' ? 'Read More Stories' : 'আরও গল্প পড়ুন')} <ArrowRight size={20} />
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -top-10 -left-10 text-primary/10">
                <Quote size={120} />
              </div>
              <Swiper
                modules={[Autoplay, Pagination]}
                autoplay={{ delay: 5000 }}
                pagination={{ clickable: true }}
                className="pb-12"
              >
                {testimonials.map((t, idx) => (
                  <SwiperSlide key={idx}>
                    <div className="bg-white p-12 rounded-[3rem] shadow-2xl border border-border space-y-8 relative z-10">
                      <p className="text-xl lg:text-2xl text-text-main italic leading-relaxed font-medium">
                        "{t.quote}"
                      </p>
                      <div className="flex items-center gap-6">
                        <img src={t.image} alt={t.name} className="w-16 h-16 rounded-2xl object-cover shadow-lg" />
                        <div>
                          <p className="text-xl font-display font-bold text-text-main">{t.name}</p>
                          <p className="text-primary font-bold text-sm uppercase tracking-widest">{t.role}</p>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </section>

      {/* Partners/Donors Logo Slider */}
      <section className="py-20 bg-white border-y border-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-muted font-bold uppercase tracking-[0.3em] text-xs">
              {content?.home?.donors?.tag?.[lang] || (lang === 'en' ? 'Our Respected Donars' : 'আমাদের সম্মানিত দাতাগণ')}
            </p>
          </div>
          <Swiper
            modules={[Autoplay, FreeMode]}
            spaceBetween={60}
            slidesPerView={2}
            loop={true}
            speed={4000}
            freeMode={true}
            autoplay={{ 
              delay: 0, 
              disableOnInteraction: false,
              pauseOnMouseEnter: true
            }}
            breakpoints={{
              640: { slidesPerView: 3 },
              1024: { slidesPerView: 5 },
            }}
            className="flex items-center partner-slider"
          >
            {donorsData.map((donor) => (
              <SwiperSlide key={donor.id}>
                <div className="grayscale hover:grayscale-0 opacity-50 hover:opacity-100 transition-all duration-500 flex items-center justify-center p-4">
                  <img 
                    src={donor.logo} 
                    alt={donor.name} 
                    className="max-h-20 w-auto object-contain" 
                    referrerPolicy="no-referrer"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Join Our Mission Section */}
      <section className="py-24 lg:py-32 bg-surface-alt">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              whileHover={{ y: -10 }}
              className="relative group overflow-hidden rounded-[3rem] shadow-2xl min-h-[450px] flex bg-primary/10"
            >
                <img 
                  src="https://picsum.photos/seed/volunteer/1200/800" 
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 z-0" 
                  alt="Volunteer"
                  referrerPolicy="no-referrer"
                />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-10" />
              <div className="relative z-20 flex flex-col justify-end p-10 lg:p-16 space-y-4 w-full">
                <h3 className="text-3xl lg:text-4xl font-display font-bold text-white">
                  {content?.home?.join?.volunteer?.title?.[lang] || (lang === 'en' ? 'Become a Volunteer' : 'স্বেচ্ছাসেবী হিসেবে যোগ দিন')}
                </h3>
                <p className="text-white/80 text-lg max-w-md">
                  {content?.home?.join?.volunteer?.desc?.[lang] || (lang === 'en' 
                    ? 'Join our community of passionate volunteers and help us create a more inclusive world.' 
                    : 'আমাদের উৎসাহী স্বেচ্ছাসেবকদের সম্প্রদায়ে যোগ দিন এবং একটি অন্তর্ভুক্তিমূলক বিশ্ব গড়তে সাহায্য করুন।')}
                </p>
                <div className="pt-4">
                  <Link to="/support/volunteer" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary rounded-2xl font-bold hover:bg-primary hover:text-white transition-all shadow-xl">
                    {content?.common?.buttons?.volunteer?.[lang] || (lang === 'en' ? 'Volunteer' : 'স্বেচ্ছাসেবী')} <ArrowRight size={20} />
                  </Link>
                </div>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ y: -10 }}
              className="relative group overflow-hidden rounded-[3rem] shadow-2xl min-h-[450px] flex bg-secondary/10"
            >
                <img 
                  src="https://picsum.photos/seed/partnership/1200/800" 
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 z-0" 
                  alt="Partner"
                  referrerPolicy="no-referrer"
                />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-10" />
              <div className="relative z-20 flex flex-col justify-end p-10 lg:p-16 space-y-4 w-full">
                <h3 className="text-3xl lg:text-4xl font-display font-bold text-white">
                  {content?.home?.join?.partner?.title?.[lang] || (lang === 'en' ? 'Partner With Us' : 'আমাদের সাথে অংশীদার হন')}
                </h3>
                <p className="text-white/80 text-lg max-w-md">
                  {content?.home?.join?.partner?.desc?.[lang] || (lang === 'en' 
                    ? 'Collaborate with us to scale our impact and reach more people in need.' 
                    : 'আমাদের প্রভাব বাড়াতে এবং আরও বেশি মানুষের কাছে পৌঁছাতে আমাদের সাথে সহযোগিতা করুন।')}
                </p>
                <div className="pt-4">
                  <Link to="/support/partner" className="inline-flex items-center gap-2 px-8 py-4 bg-secondary text-white rounded-2xl font-bold hover:bg-secondary/90 transition-all shadow-xl">
                    {content?.common?.buttons?.partner?.[lang] || (lang === 'en' ? 'Partner' : 'অংশীদার')} <ArrowRight size={20} />
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final CTA Banner */}
      <section className="py-24 lg:py-40 relative overflow-hidden">
        <div 
          className="absolute inset-0 z-0" 
          style={{ background: currentTheme.ctaGradient }}
        />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="text-white space-y-6 text-center lg:text-left">
              <h2 className="text-4xl lg:text-6xl font-display font-bold leading-tight">
                {content?.home?.cta?.title?.[lang] || (lang === 'en' ? 'Ready to Make a Real Difference?' : 'একটি প্রকৃত পরিবর্তন আনতে প্রস্তুত?')}
              </h2>
              <p className="text-lg lg:text-2xl text-white/80 font-medium leading-relaxed max-w-xl mx-auto lg:mx-0">
                {content?.home?.cta?.desc?.[lang] || (lang === 'en' 
                  ? 'Your contribution helps us provide education, healthcare, and dignity to persons with disabilities.' 
                  : 'আপনার অবদান আমাদের প্রতিবন্ধী ব্যক্তিদের শিক্ষা, স্বাস্থ্যসেবা এবং মর্যাদা প্রদানে সহায়তা করে।')}
              </p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-6 pt-4">
                <Link to="/support/donate" className="group px-12 py-6 bg-white text-primary rounded-2xl font-bold text-xl hover:bg-surface-alt transition-all shadow-2xl flex items-center gap-3">
                  {content?.common?.buttons?.donateNow?.[lang] || (lang === 'en' ? 'Donate Now' : 'এখনই দান করুন')} <Heart size={24} className="fill-primary group-hover:scale-125 transition-transform" />
                </Link>
                <Link to="/contact" className="px-12 py-6 bg-transparent border-2 border-white text-white rounded-2xl font-bold text-xl hover:bg-white/10 transition-all shadow-2xl">
                  {content?.nav?.contact?.[lang] || (lang === 'en' ? 'Contact' : 'যোগাযোগ')}
                </Link>
              </div>
            </div>
            <div className="relative hidden lg:block">
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-6">
                  <div className="aspect-square rounded-[3rem] overflow-hidden shadow-2xl rotate-3">
                    <img src="https://picsum.photos/seed/cta1/800/800" className="w-full h-full object-cover" alt="CTA 1" referrerPolicy="no-referrer" />
                  </div>
                  <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl -rotate-3">
                    <img src="https://picsum.photos/seed/cta2/800/1000" className="w-full h-full object-cover" alt="CTA 2" referrerPolicy="no-referrer" />
                  </div>
                </div>
                <div className="space-y-6 pt-12">
                  <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl -rotate-6">
                    <img src="https://picsum.photos/seed/cta3/800/1000" className="w-full h-full object-cover" alt="CTA 3" referrerPolicy="no-referrer" />
                  </div>
                  <div className="aspect-square rounded-[3rem] overflow-hidden shadow-2xl rotate-6">
                    <img src="https://picsum.photos/seed/cta4/800/800" className="w-full h-full object-cover" alt="CTA 4" referrerPolicy="no-referrer" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="bg-surface-alt p-10 lg:p-16 rounded-[4rem] border border-border flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="max-w-md space-y-4 text-center lg:text-left">
              <h2 className="text-3xl font-display font-bold text-text-main">
                {content?.home?.newsletter?.title?.[lang] || (lang === 'en' ? 'Stay Informed' : 'সংযুক্ত থাকুন')}
              </h2>
              <p className="text-muted">
                {content?.home?.newsletter?.desc?.[lang] || (lang === 'en' ? 'Subscribe to our newsletter for the latest updates and impact stories.' : 'সর্বশেষ আপডেট এবং প্রভাবের গল্পের জন্য আমাদের নিউজলেটারে সাবস্ক্রাইব করুন।')}
              </p>
            </div>
            <form className="w-full max-w-md flex flex-col sm:flex-row gap-4">
              <input 
                type="email" 
                placeholder={content?.home?.newsletter?.placeholder?.[lang] || (lang === 'en' ? 'Your email address' : 'আপনার ইমেল ঠিকানা')} 
                className="flex-grow px-8 py-5 bg-white border border-border rounded-2xl focus:outline-none focus:border-primary transition-all shadow-inner"
              />
              <button className="px-10 py-5 bg-primary text-white rounded-2xl font-bold hover:bg-primary/90 transition-all shadow-xl whitespace-nowrap">
                {content?.home?.newsletter?.button?.[lang] || (lang === 'en' ? 'Subscribe' : 'সাবস্ক্রাইব')}
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
