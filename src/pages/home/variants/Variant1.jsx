import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation, EffectFade, FreeMode } from 'swiper/modules';
import CountUp from 'react-countup';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '../../../context/LanguageContext';
import { useTheme } from '../../../context/ThemeContext';
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
  ChevronRight
} from 'lucide-react';
import { Link } from 'react-router-dom';

// Data imports
import { donorsData } from '../../../data/donorsData';
import { reliefActivities } from '../../../data/reliefActivitiesData';
import { specialDaysData } from '../../../data/specialDaysData';
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
  const { currentTheme, setCurrentTheme, themes } = useTheme();

  React.useEffect(() => {
    const theme = themes.find(t => t.id === 'light-of-hope');
    if (theme && currentTheme.id !== 'light-of-hope') setCurrentTheme(theme);
  }, [setCurrentTheme, themes, currentTheme.id]);

  const getLocalized = (obj) => {
    if (!obj) return '';
    return obj[lang] || obj['en'] || '';
  };

  const heroSlides = [
    {
      image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070&auto=format&fit=crop',
      title: lang === 'en' ? 'Empowering Lives, Ensuring Rights' : 'জীবনকে ক্ষমতায়ন, অধিকার নিশ্চিতকরণ',
      subtitle: t('common.motto'),
      tag: lang === 'en' ? 'Welcome to SPUS' : 'এসপিইউএস-এ আপনাকে স্বাগতম',
    },
    {
      image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2132&auto=format&fit=crop',
      title: lang === 'en' ? 'Inclusive Education for Every Child' : 'প্রতিটি শিশুর জন্য অন্তর্ভুক্তিমূলক শিক্ষা',
      subtitle: lang === 'en' ? 'Breaking barriers to learning and growth for children with disabilities.' : 'প্রতিবন্ধী শিশুদের শেখার এবং বিকাশের বাধাগুলো দূর করা।',
      tag: lang === 'en' ? 'Education Program' : 'শিক্ষা কার্যক্রম',
    },
    {
      image: 'https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?q=80&w=2089&auto=format&fit=crop',
      title: lang === 'en' ? 'Better Health, Brighter Future' : 'উন্নত স্বাস্থ্য, উজ্জ্বল ভবিষ্যৎ',
      subtitle: lang === 'en' ? 'Providing essential healthcare and assistive devices to our community.' : 'আমাদের সম্প্রদায়ের জন্য প্রয়োজনীয় স্বাস্থ্যসেবা এবং সহায়ক উপকরণ প্রদান।',
      tag: lang === 'en' ? 'Health Services' : 'স্বাস্থ্যসেবা',
    },
  ];

  const stats = [
    { label: t('home.stats.members'), value: 690, icon: Users, color: 'text-primary' },
    { label: lang === 'en' ? 'Winter Clothes' : 'শীতবস্ত্র', value: 200, icon: Heart, color: 'text-secondary' },
    { label: t('home.stats.students'), value: 100, icon: GraduationCap, color: 'text-accent' },
    { label: t('home.stats.relief'), value: 845, icon: CheckCircle2, color: 'text-primary' },
    { label: t('home.stats.years'), value: 13, icon: Calendar, color: 'text-secondary' },
  ];

  const programs = [
    { id: 'education', title: t('nav.education'), icon: GraduationCap, color: 'text-primary', desc: lang === 'en' ? 'Providing inclusive education and specialized training for children.' : 'শিশুদের জন্য অন্তর্ভুক্তিমূলক শিক্ষা এবং বিশেষ প্রশিক্ষণ প্রদান।' },
    { id: 'health', title: t('nav.health'), icon: HeartPulse, color: 'text-secondary', desc: lang === 'en' ? 'Ensuring access to healthcare and medical support for our members.' : 'আমাদের সদস্যদের জন্য স্বাস্থ্যসেবা এবং চিকিৎসা সহায়তা নিশ্চিত করা।' },
    { id: 'skill-development', title: t('nav.skills'), icon: Wrench, color: 'text-accent', desc: lang === 'en' ? 'Vocational training to promote self-reliance and employment.' : 'আত্মনির্ভরশীলতা এবং কর্মসংস্থান বৃদ্ধির জন্য বৃত্তিমূলক প্রশিক্ষণ।' },
    { id: 'financial-support', title: t('nav.finance'), icon: Banknote, color: 'text-primary', desc: lang === 'en' ? 'Direct financial assistance to families in extreme need.' : 'চরম প্রয়োজনে থাকা পরিবারগুলোকে সরাসরি আর্থিক সহায়তা।' },
    { id: 'assistive-devices', title: t('nav.devices'), icon: Accessibility, color: 'text-secondary', desc: lang === 'en' ? 'Distributing wheelchairs, crutches, and other vital tools.' : 'হুইলচেয়ার, ক্রাচ এবং অন্যান্য গুরুত্বপূর্ণ সরঞ্জাম বিতরণ।' },
    { id: 'awareness', title: t('nav.awareness'), icon: Megaphone, color: 'text-accent', desc: lang === 'en' ? 'Raising social consciousness about disability rights.' : 'প্রতিবন্ধী অধিকার সম্পর্কে সামাজিক সচেতনতা বৃদ্ধি।' },
  ];

  const testimonials = [
    {
      name: lang === 'en' ? 'Rahim Uddin' : 'রহিম উদ্দিন',
      role: lang === 'en' ? 'Parent of Student' : 'শিক্ষার্থীর অভিভাবক',
      quote: lang === 'en' ? 'SPUS has given my son a new lease on life. The education and care he receives here are unmatched.' : 'এসপিইউএস আমার ছেলেকে নতুন জীবন দিয়েছে। এখানে সে যে শিক্ষা ও যত্ন পায় তা অতুলনীয়।',
      image: 'https://i.pravatar.cc/150?u=rahim'
    },
    {
      name: lang === 'en' ? 'Fatema Begum' : 'ফাতেমা বেগম',
      role: lang === 'en' ? 'Member' : 'সদস্য',
      quote: lang === 'en' ? 'The assistive devices and health support from SPUS have made me independent and confident.' : 'এসপিইউএস থেকে প্রাপ্ত সহায়ক উপকরণ এবং স্বাস্থ্য সহায়তা আমাকে স্বাধীন এবং আত্মবিশ্বাসী করেছে।',
      image: 'https://i.pravatar.cc/150?u=fatema'
    }
  ];

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
          {heroSlides.map((slide, idx) => (
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
                      src={slide.image} 
                      alt={slide.title} 
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </motion.div>
                  <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
                  
                  <div className="absolute inset-0 flex items-center px-6 lg:px-24">
                    <div className="max-w-4xl space-y-6">
                      <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={isActive ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                        transition={{ duration: 0.6 }}
                        className="inline-flex items-center gap-3 px-5 py-2 bg-primary/20 backdrop-blur-md border border-white/20 rounded-full text-accent font-bold text-sm uppercase tracking-widest"
                      >
                        <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                        {slide.tag}
                      </motion.div>
                      
                      <motion.h1 
                        initial={{ opacity: 0, y: 30 }}
                        animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="text-4xl lg:text-7xl font-display font-bold text-white leading-[1.1]"
                      >
                        {slide.title}
                      </motion.h1>
                      
                      <motion.p 
                        initial={{ opacity: 0, y: 30 }}
                        animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                        className="text-lg lg:text-2xl text-white/80 max-w-2xl font-medium leading-relaxed"
                      >
                        {slide.subtitle}
                      </motion.p>
                      
                      <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                        transition={{ delay: 0.6, duration: 0.6 }}
                        className="flex flex-wrap gap-6 pt-6"
                      >
                        <Link to="/support/donate" className="group px-10 py-5 bg-primary text-white rounded-2xl font-bold text-lg hover:bg-primary/90 transition-all shadow-2xl flex items-center gap-3">
                          {t('common.donateNow')} <Heart size={20} className="group-hover:scale-125 transition-transform" />
                        </Link>
                        <Link to="/about" className="px-10 py-5 bg-white/10 backdrop-blur-md border border-white/30 text-white rounded-2xl font-bold text-lg hover:bg-white/20 transition-all shadow-xl">
                          {t('common.learnMore')}
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
                  src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=2070&auto=format&fit=crop" 
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
                  <p className="text-xl font-display font-bold">{lang === 'en' ? 'Since 2013' : '২০১৩ থেকে'}</p>
                </div>
                <p className="text-white/80 text-sm leading-relaxed">
                  {lang === 'en' ? 'Dedicated to empowering persons with disabilities in Badda, Dhaka.' : 'বাড্ডা, ঢাকায় প্রতিবন্ধী ব্যক্তিদের ক্ষমতায়নে নিবেদিত।'}
                </p>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-accent/20 rounded-full blur-3xl" />
              <div className="absolute top-1/2 right-0 w-32 h-32 bg-secondary/10 rounded-full blur-2xl" />
            </div>

            <div className="space-y-6">
              <div className="space-y-4">
                <span className="text-primary font-bold tracking-[0.2em] uppercase text-sm">
                  {lang === 'en' ? 'Who We Are' : 'আমরা কে'}
                </span>
                <h2 className="text-4xl lg:text-5xl font-display font-bold text-text-main leading-tight">
                  {lang === 'en' ? 'Working for an Inclusive Society' : 'একটি অন্তর্ভুক্তিমূলক সমাজের জন্য কাজ করছি'}
                </h2>
                <p className="text-muted text-lg leading-relaxed">
                  {lang === 'en' 
                    ? 'Swadhin Protibondhi Unnayan Sangstha (SPUS) is a non-political, non-profit organization dedicated to the welfare and rights of persons with disabilities.' 
                    : 'স্বাধীন প্রতিবন্ধী উন্নয়ন সংস্থা (এসপিইউএস) একটি অরাজনৈতিক, অলাভজনক সংস্থা যা প্রতিবন্ধী ব্যক্তিদের কল্যাণ ও অধিকারের জন্য নিবেদিত।'}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4 p-6 bg-surface-alt rounded-3xl border border-border">
                  <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center">
                    <Target size={24} />
                  </div>
                  <h3 className="text-xl font-display font-bold text-text-main">{lang === 'en' ? 'Our Mission' : 'আমাদের লক্ষ্য'}</h3>
                  <p className="text-sm text-muted leading-relaxed">
                    {lang === 'en' ? 'To ensure the rights and dignity of every person with a disability.' : 'প্রতিটি প্রতিবন্ধী ব্যক্তির অধিকার ও মর্যাদা নিশ্চিত করা।'}
                  </p>
                </div>
                <div className="space-y-4 p-6 bg-surface-alt rounded-3xl border border-border">
                  <div className="w-12 h-12 bg-secondary/10 text-secondary rounded-xl flex items-center justify-center">
                    <Eye size={24} />
                  </div>
                  <h3 className="text-xl font-display font-bold text-text-main">{lang === 'en' ? 'Our Vision' : 'আমাদের স্বপ্ন'}</h3>
                  <p className="text-sm text-muted leading-relaxed">
                    {lang === 'en' ? 'A society where disability is not a barrier to success.' : 'এমন একটি সমাজ যেখানে প্রতিবন্ধকতা সাফল্যের পথে বাধা নয়।'}
                  </p>
                </div>
              </div>

              <div className="pt-4">
                <Link to="/about" className="inline-flex items-center gap-2 text-primary font-bold text-lg hover:gap-4 transition-all group">
                  {lang === 'en' ? 'Discover More About Us' : 'আমাদের সম্পর্কে আরও জানুন'} <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
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
                  {stat.value === 10 && '+'}
                </div>
                <p className="text-white/60 text-xs font-bold uppercase tracking-[0.2em]">
                  {stat.label}
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

      {/* Programs Section */}
      <section className="py-24 lg:py-32 bg-surface">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-end justify-between gap-8 mb-16">
            <div className="max-w-2xl space-y-4">
              <span className="text-secondary font-bold tracking-[0.2em] uppercase text-sm">
                {lang === 'en' ? 'Our Impact Areas' : 'আমাদের প্রভাব ক্ষেত্র'}
              </span>
              <h2 className="text-4xl lg:text-5xl font-display font-bold text-text-main leading-tight">
                {lang === 'en' ? 'Programs That Change Lives' : 'জীবন বদলে দেওয়া কর্মসূচি'}
              </h2>
            </div>
            <Link to="/programs" className="px-8 py-4 bg-white border-2 border-primary text-primary rounded-2xl font-bold hover:bg-primary hover:text-white transition-all shadow-lg flex items-center gap-2">
              {t('nav.allPrograms')} <ArrowUpRight size={20} />
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
                    {t('common.readMore')} <ArrowRight size={18} />
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
              {lang === 'en' ? 'Recent Updates' : 'সাম্প্রতিক আপডেট'}
            </span>
            <h2 className="text-4xl lg:text-5xl font-display font-bold text-text-main">
              {lang === 'en' ? 'Activities & News' : 'কার্যক্রম এবং সংবাদ'}
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
            {[...newsData, ...reliefActivities.slice(0, 1), ...specialDaysData.slice(0, 1)].map((item, idx) => (
              <SwiperSlide key={idx}>
                <div className="group bg-surface-alt rounded-[2.5rem] overflow-hidden border border-border shadow-lg hover:shadow-2xl transition-all duration-500 h-full flex flex-col">
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={item.image || 'https://picsum.photos/seed/' + item.id + '/800/600'} 
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
                      {lang === 'en' ? 'View Details' : 'বিস্তারিত দেখুন'} <ArrowRight size={16} />
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
                {lang === 'en' ? 'Our Voices' : 'আমাদের কণ্ঠস্বর'}
              </span>
              <h2 className="text-4xl lg:text-5xl font-display font-bold text-text-main leading-tight">
                {lang === 'en' ? 'Stories of Hope and Resilience' : 'আশা এবং সহনশীলতার গল্প'}
              </h2>
              <p className="text-muted text-lg leading-relaxed">
                {lang === 'en' 
                  ? 'Hear from the people whose lives have been transformed through our programs and collective efforts.' 
                  : 'আমাদের কর্মসূচি এবং সম্মিলিত প্রচেষ্টার মাধ্যমে যাদের জীবন বদলে গেছে তাদের কাছ থেকে শুনুন।'}
              </p>
              <div className="pt-4">
                <Link to="/about/success-stories" className="px-10 py-5 bg-primary text-white rounded-2xl font-bold text-lg hover:bg-primary/90 transition-all shadow-xl inline-flex items-center gap-2">
                  {lang === 'en' ? 'Read More Stories' : 'আরও গল্প পড়ুন'} <ArrowRight size={20} />
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
              {lang === 'en' ? 'Our Trusted Partners' : 'আমাদের বিশ্বস্ত অংশীদার'}
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
                    className="max-h-12 w-auto object-contain" 
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
                src="https://images.unsplash.com/photo-1593113598332-cd288d649433?q=80&w=2070&auto=format&fit=crop" 
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 z-0" 
                alt="Volunteer"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-10" />
              <div className="relative z-20 flex flex-col justify-end p-10 lg:p-16 space-y-4 w-full">
                <h3 className="text-3xl lg:text-4xl font-display font-bold text-white">
                  {lang === 'en' ? 'Become a Volunteer' : 'স্বেচ্ছাসেবী হিসেবে যোগ দিন'}
                </h3>
                <p className="text-white/80 text-lg max-w-md">
                  {lang === 'en' 
                    ? 'Join our community of passionate volunteers and help us create a more inclusive world.' 
                    : 'আমাদের উৎসাহী স্বেচ্ছাসেবকদের সম্প্রদায়ে যোগ দিন এবং একটি অন্তর্ভুক্তিমূলক বিশ্ব গড়তে সাহায্য করুন।'}
                </p>
                <div className="pt-4">
                  <Link to="/support/volunteer" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary rounded-2xl font-bold hover:bg-primary hover:text-white transition-all shadow-xl">
                    {t('common.volunteer')} <ArrowRight size={20} />
                  </Link>
                </div>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ y: -10 }}
              className="relative group overflow-hidden rounded-[3rem] shadow-2xl min-h-[450px] flex bg-secondary/10"
            >
              <img 
                src="https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=2070&auto=format&fit=crop" 
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 z-0" 
                alt="Partner"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-10" />
              <div className="relative z-20 flex flex-col justify-end p-10 lg:p-16 space-y-4 w-full">
                <h3 className="text-3xl lg:text-4xl font-display font-bold text-white">
                  {lang === 'en' ? 'Partner With Us' : 'আমাদের সাথে অংশীদার হন'}
                </h3>
                <p className="text-white/80 text-lg max-w-md">
                  {lang === 'en' 
                    ? 'Collaborate with us to scale our impact and reach more people in need.' 
                    : 'আমাদের প্রভাব বাড়াতে এবং আরও বেশি মানুষের কাছে পৌঁছাতে আমাদের সাথে সহযোগিতা করুন।'}
                </p>
                <div className="pt-4">
                  <Link to="/support/partner" className="inline-flex items-center gap-2 px-8 py-4 bg-secondary text-white rounded-2xl font-bold hover:bg-secondary/90 transition-all shadow-xl">
                    {t('common.partner')} <ArrowRight size={20} />
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
                {lang === 'en' ? 'Ready to Make a Real Difference?' : 'একটি প্রকৃত পরিবর্তন আনতে প্রস্তুত?'}
              </h2>
              <p className="text-lg lg:text-2xl text-white/80 font-medium leading-relaxed max-w-xl mx-auto lg:mx-0">
                {lang === 'en' 
                  ? 'Your contribution helps us provide education, healthcare, and dignity to persons with disabilities.' 
                  : 'আপনার অবদান আমাদের প্রতিবন্ধী ব্যক্তিদের শিক্ষা, স্বাস্থ্যসেবা এবং মর্যাদা প্রদানে সহায়তা করে।'}
              </p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-6 pt-4">
                <Link to="/support/donate" className="group px-12 py-6 bg-white text-primary rounded-2xl font-bold text-xl hover:bg-surface-alt transition-all shadow-2xl flex items-center gap-3">
                  {t('common.donateNow')} <Heart size={24} className="fill-primary group-hover:scale-125 transition-transform" />
                </Link>
                <Link to="/contact" className="px-12 py-6 bg-transparent border-2 border-white text-white rounded-2xl font-bold text-xl hover:bg-white/10 transition-all shadow-2xl">
                  {t('nav.contact')}
                </Link>
              </div>
            </div>
            <div className="relative hidden lg:block">
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-6">
                  <div className="aspect-square rounded-[3rem] overflow-hidden shadow-2xl rotate-3">
                    <img src="https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?q=80&w=2006&auto=format&fit=crop" className="w-full h-full object-cover" alt="CTA 1" referrerPolicy="no-referrer" />
                  </div>
                  <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl -rotate-3">
                    <img src="https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover" alt="CTA 2" referrerPolicy="no-referrer" />
                  </div>
                </div>
                <div className="space-y-6 pt-12">
                  <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl -rotate-6">
                    <img src="https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2132&auto=format&fit=crop" className="w-full h-full object-cover" alt="CTA 3" referrerPolicy="no-referrer" />
                  </div>
                  <div className="aspect-square rounded-[3rem] overflow-hidden shadow-2xl rotate-6">
                    <img src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover" alt="CTA 4" referrerPolicy="no-referrer" />
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
                {lang === 'en' ? 'Stay Informed' : 'সংযুক্ত থাকুন'}
              </h2>
              <p className="text-muted">
                {lang === 'en' ? 'Subscribe to our newsletter for the latest updates and impact stories.' : 'সর্বশেষ আপডেট এবং প্রভাবের গল্পের জন্য আমাদের নিউজলেটারে সাবস্ক্রাইব করুন।'}
              </p>
            </div>
            <form className="w-full max-w-md flex flex-col sm:flex-row gap-4">
              <input 
                type="email" 
                placeholder={lang === 'en' ? 'Your email address' : 'আপনার ইমেল ঠিকানা'} 
                className="flex-grow px-8 py-5 bg-white border border-border rounded-2xl focus:outline-none focus:border-primary transition-all shadow-inner"
              />
              <button className="px-10 py-5 bg-primary text-white rounded-2xl font-bold hover:bg-primary/90 transition-all shadow-xl whitespace-nowrap">
                {lang === 'en' ? 'Subscribe' : 'সাবস্ক্রাইব'}
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
