export default function Variant2() {
  const { t } = useTranslation();
  const { lang } = useLanguage();
  const { currentTheme } = useTheme();

  const stats = [
    { label: t('home.stats.members'), value: 690, icon: Users, color: 'text-primary' },
    { label: lang === 'en' ? 'Winter Clothes' : 'শীতবস্ত্র', value: 200, icon: Heart, color: 'text-secondary' },
    { label: t('home.stats.students'), value: 100, icon: GraduationCap, color: 'text-accent' },
    { label: t('home.stats.relief'), value: 845, icon: CheckCircle2, color: 'text-primary' },
  ];

  return (
    <div className="bg-bg min-h-screen font-body selection:bg-primary selection:text-white">
      {/* Hero Section - Split Layout */}
      <section className="relative min-h-[90vh] flex flex-col lg:flex-row overflow-hidden">
        <div className="lg:w-1/2 flex items-center px-6 lg:px-20 py-20 lg:py-0 bg-surface relative z-10">
          <div className="max-w-xl space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-bold uppercase tracking-widest"
            >
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              {lang === 'en' ? 'Empowering Lives Since 2013' : '২০১৩ সাল থেকে জীবন ক্ষমতায়ন'}
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-5xl lg:text-7xl font-display font-bold text-text-main leading-[1.1]"
            >
              {lang === 'en' ? 'Building a World of Equal Opportunity' : 'সমান সুযোগের এক বিশ্ব নির্মাণ'}
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-muted leading-relaxed"
            >
              {t('common.motto')}
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-6 pt-4"
            >
              <Link to="/support/donate" className="group px-10 py-5 bg-primary text-white rounded-2xl font-bold text-lg hover:bg-primary/90 transition-all shadow-2xl flex items-center gap-3">
                {t('common.donateNow')} <Heart size={20} className="group-hover:scale-125 transition-transform" />
              </Link>
              <Link to="/about" className="px-10 py-5 bg-surface-alt text-text-main border border-border rounded-2xl font-bold text-lg hover:bg-border transition-all shadow-xl">
                {t('common.learnMore')}
              </Link>
            </motion.div>
          </div>
          
          {/* Decorative Background Element */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10 translate-x-1/2 -translate-y-1/2" />
        </div>

        <div className="lg:w-1/2 relative min-h-[400px]">
          <img 
            src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070&auto=format&fit=crop" 
            className="absolute inset-0 w-full h-full object-cover"
            alt="Hero"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent lg:bg-gradient-to-l lg:from-transparent lg:to-surface" />
          
          {/* Floating Stats Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="absolute bottom-12 left-12 right-12 lg:left-auto lg:right-12 bg-white/90 backdrop-blur-md p-8 rounded-[2.5rem] shadow-2xl border border-white/20 max-w-sm"
          >
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 bg-primary text-white rounded-2xl flex items-center justify-center shadow-lg">
                <Users size={32} />
              </div>
              <div>
                <p className="text-3xl font-display font-bold text-text-main">690+</p>
                <p className="text-sm font-bold text-muted uppercase tracking-widest">{t('home.stats.members')}</p>
              </div>
            </div>
            <div className="mt-6 pt-6 border-t border-border/50">
              <p className="text-sm text-muted italic">
                {lang === 'en' ? '"SPUS has given us a new identity and hope for a better future."' : '"এসপিইউএস আমাদের একটি নতুন পরিচয় এবং উজ্জ্বল ভবিষ্যতের আশা দিয়েছে।"'}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section - Refined ThemeForest Style */}
      <section className="py-24 lg:py-32 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="relative group">
              <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl transform group-hover:scale-[1.02] transition-transform duration-700">
                <img 
                  src="https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2070&auto=format&fit=crop" 
                  className="w-full h-full object-cover" 
                  alt="About Main" 
                  referrerPolicy="no-referrer" 
                />
              </div>
              <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-primary rounded-[3rem] -z-10 hidden lg:block" />
              <div className="absolute -top-10 -left-10 w-48 h-48 border-[20px] border-secondary/20 rounded-full -z-10 hidden lg:block" />
              
              {/* Floating Badge */}
              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="absolute top-1/2 -right-12 transform -translate-y-1/2 bg-white p-8 rounded-[2.5rem] shadow-2xl border border-border hidden xl:block"
              >
                <div className="text-center space-y-2">
                  <p className="text-5xl font-display font-bold text-primary">13+</p>
                  <p className="text-sm font-bold text-muted uppercase tracking-tighter">
                    {lang === 'en' ? 'Years Experience' : 'বছরের অভিজ্ঞতা'}
                  </p>
                </div>
              </motion.div>
            </div>

            <div className="space-y-6">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-[2px] bg-primary" />
                  <span className="text-primary font-bold tracking-[0.2em] uppercase text-sm">
                    {lang === 'en' ? 'About Our Organization' : 'আমাদের সংস্থা সম্পর্কে'}
                  </span>
                </div>
                <h2 className="text-4xl lg:text-6xl font-display font-bold text-text-main leading-tight">
                  {lang === 'en' ? 'We are Dedicated to Empowering the Disabled' : 'আমরা প্রতিবন্ধীদের ক্ষমতায়নে নিবেদিত'}
                </h2>
                <p className="text-muted text-lg leading-relaxed">
                  {lang === 'en' 
                    ? 'Swadhin Protibondhi Unnayan Sangstha (SPUS) works tirelessly to create a society where every individual, regardless of their physical or mental abilities, can live with dignity and equal rights.' 
                    : 'স্বাধীন প্রতিবন্ধী উন্নয়ন সংস্থা (এসপিইউএস) এমন একটি সমাজ গঠনের জন্য নিরলসভাবে কাজ করে যেখানে প্রতিটি ব্যক্তি, তাদের শারীরিক বা মানসিক ক্ষমতা নির্বিশেষে, মর্যাদা এবং সমান অধিকারের সাথে বাঁচতে পারে।'}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="p-8 bg-surface-alt rounded-[2.5rem] border border-border hover:border-primary transition-all group">
                  <div className="w-14 h-14 bg-white text-primary rounded-2xl flex items-center justify-center shadow-md mb-6 group-hover:bg-primary group-hover:text-white transition-all">
                    <Target size={28} />
                  </div>
                  <h4 className="text-xl font-display font-bold text-text-main mb-3">{lang === 'en' ? 'Our Vision' : 'আমাদের স্বপ্ন'}</h4>
                  <p className="text-muted text-sm leading-relaxed">
                    {lang === 'en' ? 'To build an inclusive world with zero discrimination.' : 'বৈষম্যহীন এক অন্তর্ভুক্তিমূলক বিশ্ব গড়ে তোলা।'}
                  </p>
                </div>
                <div className="p-8 bg-surface-alt rounded-[2.5rem] border border-border hover:border-secondary transition-all group">
                  <div className="w-14 h-14 bg-white text-secondary rounded-2xl flex items-center justify-center shadow-md mb-6 group-hover:bg-secondary group-hover:text-white transition-all">
                    <Award size={28} />
                  </div>
                  <h4 className="text-xl font-display font-bold text-text-main mb-3">{lang === 'en' ? 'Our Values' : 'আমাদের মূল্যবোধ'}</h4>
                  <p className="text-muted text-sm leading-relaxed">
                    {lang === 'en' ? 'Integrity, compassion, and respect for all humanity.' : 'সততা, সহানুভূতি এবং মানবতার প্রতি শ্রদ্ধা।'}
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-8 pt-4">
                <Link to="/about" className="px-10 py-5 bg-text-main text-white rounded-2xl font-bold text-lg hover:bg-primary transition-all shadow-xl flex items-center gap-3">
                  {lang === 'en' ? 'Learn More About Us' : 'আমাদের সম্পর্কে আরও জানুন'} <ArrowRight size={20} />
                </Link>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white shadow-lg">
                    <img src="https://i.pravatar.cc/150?u=spus" alt="Director" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-text-main">{lang === 'en' ? 'Md. Director Name' : 'মোঃ পরিচালকের নাম'}</p>
                    <p className="text-xs text-muted">{lang === 'en' ? 'Executive Director' : 'নির্বাহী পরিচালক'}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section - Staggered Cards */}
      <section className="py-24 lg:py-32 bg-surface-alt relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
            <span className="text-secondary font-bold tracking-[0.2em] uppercase text-sm">
              {lang === 'en' ? 'Our Impact Areas' : 'আমাদের প্রভাব ক্ষেত্র'}
            </span>
            <h2 className="text-4xl lg:text-6xl font-display font-bold text-text-main">
              {lang === 'en' ? 'Programs That Change Lives' : 'জীবন বদলে দেওয়া কর্মসূচি'}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              { id: 'education', title: t('nav.education'), icon: GraduationCap, color: 'bg-primary' },
              { id: 'health', title: t('nav.health'), icon: HeartPulse, color: 'bg-secondary' },
              { id: 'skills', title: t('nav.skills'), icon: Wrench, color: 'bg-accent' },
              { id: 'finance', title: t('nav.finance'), icon: Banknote, color: 'bg-primary' },
              { id: 'devices', title: t('nav.devices'), icon: Accessibility, color: 'bg-secondary' },
              { id: 'awareness', title: t('nav.awareness'), icon: Megaphone, color: 'bg-accent' },
            ].map((program, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -15 }}
                className="group bg-white p-10 rounded-[3rem] shadow-xl border border-border hover:border-primary transition-all duration-500 flex flex-col h-full"
              >
                <div className={`w-20 h-20 rounded-[2.5rem] ${program.color} text-white flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 shadow-lg`}>
                  <program.icon size={40} />
                </div>
                <h3 className="text-2xl font-display font-bold text-text-main mb-4 group-hover:text-primary transition-colors">
                  {program.title}
                </h3>
                <p className="text-muted leading-relaxed mb-8 flex-grow">
                  {lang === 'en' ? 'Providing specialized support and resources to ensure equal access and opportunity for all.' : 'সবার জন্য সমান সুযোগ এবং অধিকার নিশ্চিত করতে বিশেষায়িত সহায়তা এবং সম্পদ প্রদান।'}
                </p>
                <Link to={`/programs/${program.id}`} className="inline-flex items-center gap-2 text-primary font-bold hover:gap-4 transition-all">
                  {t('common.readMore')} <ArrowRight size={20} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* Background Pattern */}
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] border-[100px] border-primary rounded-full -translate-y-1/2 translate-x-1/2" />
        </div>
      </section>

      {/* Media & Contact Section - ThemeForest Style */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 space-y-20">
          {/* Row 1: Media Intro */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
            <div className="space-y-6">
              <span className="text-accent font-bold tracking-[0.2em] uppercase text-sm">
                {lang === 'en' ? 'Media & Gallery' : 'মিডিয়া ও গ্যালারি'}
              </span>
              <h2 className="text-4xl lg:text-6xl font-display font-bold text-text-main">
                {lang === 'en' ? 'Capturing Moments of Impact' : 'প্রভাবের মুহূর্তগুলো ধারণ করা'}
              </h2>
            </div>
            <div className="flex flex-col sm:flex-row gap-6">
              <div className="flex -space-x-4">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-14 h-14 rounded-full border-4 border-white overflow-hidden shadow-lg">
                    <img src={`https://i.pravatar.cc/150?u=spus${i}`} alt="User" className="w-full h-full object-cover" />
                  </div>
                ))}
                <div className="w-14 h-14 rounded-full border-4 border-white bg-surface-alt flex items-center justify-center text-primary font-bold shadow-lg">
                  +50
                </div>
              </div>
              <p className="text-muted text-sm max-w-xs">
                {lang === 'en' ? 'Join our community of supporters and see the difference we make together.' : 'আমাদের সমর্থকদের সম্প্রদায়ে যোগ দিন এবং আমরা একসাথে যে পরিবর্তন আনছি তা দেখুন।'}
              </p>
            </div>
          </div>

          {/* Row 2: Contact & Map */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left: Contact Info */}
            <div className="bg-surface-alt p-10 lg:p-16 rounded-[3rem] space-y-16">
              <div className="space-y-6">
                <h3 className="text-3xl font-display font-bold text-text-main">
                  {lang === 'en' ? 'Get in Touch' : 'যোগাযোগ করুন'}
                </h3>
                <p className="text-muted">
                  {lang === 'en' ? 'Have questions or want to volunteer? Reach out to us anytime.' : 'প্রশ্ন আছে বা স্বেচ্ছাসেবক হতে চান? যেকোনো সময় আমাদের সাথে যোগাযোগ করুন।'}
                </p>
              </div>

              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="w-14 h-14 bg-white text-primary rounded-2xl flex items-center justify-center shadow-md shrink-0">
                    <MapPin size={28} />
                  </div>
                  <div>
                    <h5 className="font-bold text-text-main mb-1">{lang === 'en' ? 'Office Address' : 'অফিসের ঠিকানা'}</h5>
                    <p className="text-muted text-sm">সাতারকুল, বাড্ডা, ঢাকা-১২১২</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-14 h-14 bg-white text-secondary rounded-2xl flex items-center justify-center shadow-md shrink-0">
                    <Phone size={28} />
                  </div>
                  <div>
                    <h5 className="font-bold text-text-main mb-1">{lang === 'en' ? 'Phone Number' : 'ফোন নম্বর'}</h5>
                    <p className="text-muted text-sm">+৮৮০ ১৭১২-৩৪৫৬৭৮</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-14 h-14 bg-white text-accent rounded-2xl flex items-center justify-center shadow-md shrink-0">
                    <Mail size={28} />
                  </div>
                  <div>
                    <h5 className="font-bold text-text-main mb-1">{lang === 'en' ? 'Email Address' : 'ইমেইল ঠিকানা'}</h5>
                    <p className="text-muted text-sm">info@spus-bd.org</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Google Map */}
            <div className="rounded-[3rem] overflow-hidden shadow-2xl min-h-[400px] relative group">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.050444589201!2d90.4357!3d23.7812!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7937746473d%3A0x673010f3c552174c!2sSatarkul%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1711963911000!5m2!1sen!2sbd" 
                className="absolute inset-0 w-full h-full border-0 grayscale group-hover:grayscale-0 transition-all duration-700" 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="SPUS Location"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Full Width Image */}
      <section className="relative py-32 lg:py-48 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1593113598332-cd288d649433?q=80&w=2070&auto=format&fit=crop" 
            className="w-full h-full object-cover"
            alt="CTA"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/70 backdrop-blur-[2px]" />
        </div>

        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center space-y-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center justify-center w-24 h-24 bg-white text-primary rounded-full shadow-2xl mb-4"
          >
            <Heart size={48} className="fill-primary" />
          </motion.div>
          <h2 className="text-4xl lg:text-7xl font-display font-bold text-white leading-tight">
            {lang === 'en' ? 'Your Support Can Change a Life Today' : 'আপনার সমর্থন আজ একটি জীবন বদলে দিতে পারে'}
          </h2>
          <p className="text-xl lg:text-2xl text-white/80 max-w-2xl mx-auto font-medium">
            {lang === 'en' 
              ? 'Join our mission and help us build a more inclusive and equitable society for everyone.' 
              : 'আমাদের মিশনে যোগ দিন এবং সবার জন্য একটি অন্তর্ভুক্তিমূলক এবং ন্যায়সঙ্গত সমাজ গঠনে সহায়তা করুন।'}
          </p>
          <div className="flex flex-wrap justify-center gap-6 pt-6">
            <Link to="/support/donate" className="px-12 py-6 bg-primary text-white rounded-2xl font-bold text-xl hover:bg-primary/90 transition-all shadow-2xl">
              {t('common.donateNow')}
            </Link>
            <Link to="/contact" className="px-12 py-6 bg-white text-text-main rounded-2xl font-bold text-xl hover:bg-surface-alt transition-all shadow-2xl">
              {t('nav.contact')}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

import { 
  ArrowRight, 
  Heart, 
  Users, 
  GraduationCap, 
  HeartPulse, 
  Award,
  Target,
  Wrench,
  Banknote,
  Accessibility,
  Megaphone,
  CheckCircle2,
  MapPin,
  Phone,
  Mail
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '../../../context/LanguageContext';
import { useTheme } from '../../../context/ThemeContext';

