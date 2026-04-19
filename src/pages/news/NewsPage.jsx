import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '../../context/LanguageContext';
import { 
  Calendar, 
  User, 
  Tag, 
  ArrowRight, 
  Search, 
  ChevronRight, 
  Newspaper,
  LayoutGrid,
  List as ListIcon,
  Filter,
  Loader2
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { getNews } from '../../api/apiClient';

export default function NewsPage() {
  const { t } = useTranslation();
  const { lang } = useLanguage();
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'list'

  useEffect(() => {
    const fetchNews = async () => {
      setIsLoading(true);
      try {
        const data = await getNews();
        setNews(data);
      } catch (error) {
        console.error('Error fetching news:', error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchNews();
  }, []);

  const getLocalized = (obj) => {
    if (!obj) return '';
    return obj[lang] || obj['en'] || '';
  };

  const categories = ['All', ...new Set(news.map(item => getLocalized(item.category)))];

  const filteredNews = news.filter(item => {
    const matchesSearch = 
      getLocalized(item.title).toLowerCase().includes(searchTerm.toLowerCase()) ||
      getLocalized(item.excerpt).toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || getLocalized(item.category) === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-bg pb-24">
      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 bg-primary overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-3xl space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-accent font-bold text-sm uppercase tracking-widest"
            >
              <Newspaper size={16} />
              {lang === 'en' ? 'Latest Updates' : 'সাম্প্রতিক আপডেট'}
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl lg:text-6xl font-display font-bold text-white leading-tight"
            >
              {lang === 'en' ? 'News & Blog' : 'সংবাদ এবং ব্লগ'}
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg lg:text-xl text-white/80 font-medium leading-relaxed"
            >
              {lang === 'en' 
                ? 'Stay updated with our latest activities, impact stories, and organizational news.' 
                : 'আমাদের সর্বশেষ কার্যক্রম, প্রভাবের গল্প এবং সাংগঠনিক সংবাদের সাথে আপডেট থাকুন।'}
            </motion.p>
          </div>
        </div>
        
        {/* Background Pattern */}
        <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border-[40px] border-white rounded-full" />
        </div>
      </section>

      {/* Filters & Search */}
      <section className="sticky top-[72px] lg:top-[88px] z-30 bg-white/80 backdrop-blur-md border-b border-border py-6">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            {/* Search */}
            <div className="relative w-full lg:max-w-md">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted" size={20} />
              <input 
                type="text" 
                placeholder={lang === 'en' ? 'Search news...' : 'সংবাদ খুঁজুন...'}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-6 py-3 bg-surface-alt border border-border rounded-2xl focus:outline-none focus:border-primary transition-all"
              />
            </div>

            {/* Category Filters */}
            <div className="flex items-center gap-3 overflow-x-auto pb-2 lg:pb-0 w-full lg:w-auto no-scrollbar">
              <div className="flex items-center gap-2 mr-4 text-muted font-bold text-sm uppercase tracking-widest whitespace-nowrap">
                <Filter size={16} /> {lang === 'en' ? 'Filter:' : 'ফিল্টার:'}
              </div>
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all whitespace-nowrap ${
                    selectedCategory === cat 
                      ? 'bg-primary text-white shadow-lg' 
                      : 'bg-surface-alt text-muted hover:bg-border'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* View Toggle */}
            <div className="hidden lg:flex items-center gap-2 bg-surface-alt p-1 rounded-xl border border-border">
              <button 
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-lg transition-all ${viewMode === 'grid' ? 'bg-white text-primary shadow-sm' : 'text-muted hover:text-primary'}`}
              >
                <LayoutGrid size={20} />
              </button>
              <button 
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-lg transition-all ${viewMode === 'list' ? 'bg-white text-primary shadow-sm' : 'text-muted hover:text-primary'}`}
              >
                <ListIcon size={20} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* News Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatePresence mode="wait">
            {isLoading ? (
              <motion.div 
                key="loading"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex flex-col items-center justify-center py-32 text-muted"
              >
                <Loader2 size={48} className="animate-spin mb-4 text-primary" />
                <p className="font-medium text-lg">{lang === 'en' ? 'Loading news...' : 'সংবাদ লোড হচ্ছে...'}</p>
              </motion.div>
            ) : filteredNews.length > 0 ? (
              <motion.div 
                key={viewMode + selectedCategory + searchTerm}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className={viewMode === 'grid' ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10" : "space-y-8"}
              >
                {filteredNews.map((item) => (
                  <NewsCard key={item.id} item={item} lang={lang} viewMode={viewMode} getLocalized={getLocalized} />
                ))}
              </motion.div>
            ) : (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-32 space-y-6"
              >
                <div className="inline-flex items-center justify-center w-24 h-24 bg-surface-alt rounded-full text-muted mb-4">
                  <Search size={48} />
                </div>
                <h2 className="text-2xl font-display font-bold text-text-main">
                  {lang === 'en' ? 'No results found' : 'কোন ফলাফল পাওয়া যায়নি'}
                </h2>
                <p className="text-muted max-w-md mx-auto">
                  {lang === 'en' 
                    ? 'Try adjusting your search or filter to find what you are looking for.' 
                    : 'আপনি যা খুঁজছেন তা পেতে আপনার অনুসন্ধান বা ফিল্টার সামঞ্জস্য করার চেষ্টা করুন।'}
                </p>
                <button 
                  onClick={() => { setSearchTerm(''); setSelectedCategory('All'); }}
                  className="text-primary font-bold hover:underline"
                >
                  {lang === 'en' ? 'Clear all filters' : 'সব ফিল্টার মুছে ফেলুন'}
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </div>
  );
}

function NewsCard({ item, lang, viewMode, getLocalized }) {
  const isList = viewMode === 'list';
  const FacebookIcon = () => (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
      <path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978 1.602 0 2.453.109 2.852.166v2.827h-1.446c-1.258 0-1.636.851-1.636 2.103v1.64h3.33l-.473 3.667h-2.857v7.98H9.101z" />
    </svg>
  );

  return (
    <motion.div
      layout
      className={`group bg-white rounded-[2.5rem] overflow-hidden border border-border shadow-lg hover:shadow-2xl transition-all duration-500 flex ${isList ? 'flex-col lg:flex-row' : 'flex-col'}`}
    >
      {/* Image */}
      <div className={`relative overflow-hidden ${isList ? 'lg:w-[400px] h-64 lg:h-auto' : 'h-64'}`}>
        <img 
          src={item.image} 
          alt={getLocalized(item.title)} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          referrerPolicy="no-referrer"
        />
        <div className="absolute top-6 left-6 px-4 py-2 bg-white/90 backdrop-blur-md rounded-full text-primary text-xs font-bold uppercase tracking-widest shadow-lg">
          {getLocalized(item.category)}
        </div>
        {item.fbLink && (
          <a 
            href={item.fbLink}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute top-6 right-6 w-10 h-10 bg-[#1877F2] text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all z-10"
            title="View on Facebook"
          >
            <FacebookIcon />
          </a>
        )}
      </div>

      {/* Content */}
      <div className="p-8 lg:p-10 flex flex-col flex-grow space-y-6">
        <div className="flex flex-wrap items-center gap-6 text-muted text-xs font-bold uppercase tracking-widest">
          <div className="flex items-center gap-2">
            <Calendar size={14} className="text-primary" />
            {item.date}
          </div>
          <div className="flex items-center gap-2">
            <User size={14} className="text-primary" />
            {item.author}
          </div>
        </div>

        <div className="space-y-4 flex-grow">
          <h3 className={`font-display font-bold text-text-main group-hover:text-primary transition-colors leading-tight ${isList ? 'text-2xl lg:text-3xl' : 'text-2xl'}`}>
            {getLocalized(item.title)}
          </h3>
          <p className="text-muted leading-relaxed line-clamp-3">
            {getLocalized(item.excerpt)}
          </p>
        </div>

        <div className="pt-6 border-t border-border flex items-center justify-between">
          <Link 
            to={`/news/${item.id}`} 
            className="inline-flex items-center gap-2 text-primary font-bold hover:gap-4 transition-all group/btn"
          >
            {lang === 'en' ? 'Read Full Story' : 'পুরো সংবাদ পড়ুন'} 
            <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
          </Link>
          <div className="flex items-center gap-2">
            <button className="w-10 h-10 rounded-full bg-surface-alt text-muted flex items-center justify-center hover:bg-primary hover:text-white transition-all">
              <Search size={16} />
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
