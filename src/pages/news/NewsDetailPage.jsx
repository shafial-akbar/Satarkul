import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '../../context/LanguageContext';
import { 
  Calendar, 
  User, 
  ChevronLeft, 
  Share2, 
  Facebook, 
  Twitter, 
  Linkedin, 
  ArrowRight,
  Clock,
  Tag
} from 'lucide-react';
import { newsData } from '../../data/newsData';

export default function NewsDetailPage() {
  const { id } = useParams();
  const { t } = useTranslation();
  const { lang } = useLanguage();

  const post = newsData.find(item => item.id === id);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-bg">
        <div className="text-center space-y-6">
          <h2 className="text-3xl font-display font-bold text-text-main">Post Not Found</h2>
          <Link to="/news" className="inline-flex items-center gap-2 text-primary font-bold">
            <ChevronLeft size={20} /> Back to News
          </Link>
        </div>
      </div>
    );
  }

  const getLocalized = (obj) => {
    if (!obj) return '';
    return obj[lang] || obj['en'] || '';
  };

  return (
    <div className="min-h-screen bg-bg pb-24">
      {/* Hero Section */}
      <section className="relative h-[60vh] lg:h-[70vh] overflow-hidden">
        <img 
          src={post.image} 
          alt={getLocalized(post.title)} 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        
        <div className="absolute bottom-0 left-0 w-full p-6 lg:p-24">
          <div className="max-w-4xl mx-auto space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 backdrop-blur-md border border-white/20 rounded-full text-accent font-bold text-sm uppercase tracking-widest"
            >
              {getLocalized(post.category)}
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-3xl lg:text-6xl font-display font-bold text-white leading-tight"
            >
              {getLocalized(post.title)}
            </motion.h1>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-wrap items-center gap-8 text-white/80 text-sm font-bold uppercase tracking-widest"
            >
              <div className="flex items-center gap-2">
                <Calendar size={16} className="text-accent" />
                {post.date}
              </div>
              <div className="flex items-center gap-2">
                <User size={16} className="text-accent" />
                {post.author}
              </div>
              <div className="flex items-center gap-2">
                <Clock size={16} className="text-accent" />
                5 min read
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            {/* Main Content */}
            <div className="lg:col-span-8 space-y-12">
              <Link to="/news" className="inline-flex items-center gap-2 text-primary font-bold hover:gap-4 transition-all mb-8">
                <ChevronLeft size={20} /> {lang === 'en' ? 'Back to News' : 'সংবাদে ফিরে যান'}
              </Link>

              <div className="prose prose-lg max-w-none text-muted leading-relaxed space-y-6">
                <p className="text-xl text-text-main font-medium italic border-l-4 border-primary pl-6 py-2 bg-surface-alt rounded-r-2xl">
                  {getLocalized(post.excerpt)}
                </p>
                <div className="whitespace-pre-line">
                  {getLocalized(post.content)}
                </div>
              </div>

              {/* Share Section */}
              <div className="pt-12 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-6">
                <div className="flex items-center gap-4 text-text-main font-bold">
                  <Share2 size={20} className="text-primary" />
                  {lang === 'en' ? 'Share this story:' : 'এই সংবাদটি শেয়ার করুন:'}
                </div>
                <div className="flex items-center gap-3">
                  <button className="w-12 h-12 rounded-full bg-surface-alt text-primary flex items-center justify-center hover:bg-primary hover:text-white transition-all shadow-sm">
                    <Facebook size={20} />
                  </button>
                  <button className="w-12 h-12 rounded-full bg-surface-alt text-primary flex items-center justify-center hover:bg-primary hover:text-white transition-all shadow-sm">
                    <Twitter size={20} />
                  </button>
                  <button className="w-12 h-12 rounded-full bg-surface-alt text-primary flex items-center justify-center hover:bg-primary hover:text-white transition-all shadow-sm">
                    <Linkedin size={20} />
                  </button>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-4 space-y-12">
              {/* Recent Posts */}
              <div className="bg-white p-8 rounded-[2.5rem] border border-border shadow-lg space-y-8">
                <h3 className="text-2xl font-display font-bold text-text-main border-b border-border pb-4">
                  {lang === 'en' ? 'Recent Posts' : 'সাম্প্রতিক পোস্ট'}
                </h3>
                <div className="space-y-6">
                  {newsData.filter(item => item.id !== id).slice(0, 3).map((item) => (
                    <Link key={item.id} to={`/news/${item.id}`} className="group flex gap-4">
                      <div className="w-20 h-20 rounded-2xl overflow-hidden flex-shrink-0">
                        <img src={item.image} alt={getLocalized(item.title)} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                      </div>
                      <div className="space-y-1">
                        <h4 className="font-bold text-text-main group-hover:text-primary transition-colors line-clamp-2 leading-tight">
                          {getLocalized(item.title)}
                        </h4>
                        <p className="text-xs text-muted font-bold uppercase tracking-widest">{item.date}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Categories */}
              <div className="bg-white p-8 rounded-[2.5rem] border border-border shadow-lg space-y-8">
                <h3 className="text-2xl font-display font-bold text-text-main border-b border-border pb-4">
                  {lang === 'en' ? 'Categories' : 'ক্যাটাগরি'}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {[...new Set(newsData.map(item => getLocalized(item.category)))].map((cat) => (
                    <Link 
                      key={cat} 
                      to="/news" 
                      className="px-4 py-2 bg-surface-alt text-muted rounded-full text-sm font-bold hover:bg-primary hover:text-white transition-all"
                    >
                      {cat}
                    </Link>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="bg-primary p-10 rounded-[3rem] shadow-2xl text-white space-y-6 relative overflow-hidden">
                <div className="relative z-10 space-y-4">
                  <h3 className="text-2xl font-display font-bold">{lang === 'en' ? 'Support Our Mission' : 'আমাদের লক্ষ্যকে সমর্থন করুন'}</h3>
                  <p className="text-white/80 text-sm leading-relaxed">
                    {lang === 'en' ? 'Your contribution helps us create more impact stories like this one.' : 'আপনার অবদান আমাদের এইরকম আরও অনেক প্রভাবের গল্প তৈরি করতে সাহায্য করে।'}
                  </p>
                  <Link to="/support/donate" className="inline-flex items-center gap-2 px-8 py-3 bg-white text-primary rounded-xl font-bold text-sm hover:bg-surface-alt transition-all shadow-lg">
                    {t('common.donateNow')} <ArrowRight size={16} />
                  </Link>
                </div>
                <div className="absolute -bottom-10 -right-10 text-white/10">
                  <Tag size={160} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
