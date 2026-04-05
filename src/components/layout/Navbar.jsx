import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ChevronDown, Heart, Languages, Search, Phone, Mail, Facebook } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '../../context/LanguageContext';
import { useContent } from '../../context/ContentContext';
import { SpusLogoFull } from '../ui/SpusLogo';
import SearchModal from '../shared/SearchModal';

const NavItem = ({ to, label, children, active }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div 
      className="relative group"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <Link 
        to={to} 
        className={`flex items-center gap-1 px-2.5 xl:px-3 py-2 rounded-full font-semibold whitespace-nowrap transition-all duration-300 ${
          active ? 'bg-primary text-white' : 'text-text-main hover:bg-surface-alt hover:text-primary'
        }`}
      >
        {label}
        {children && <ChevronDown size={14} className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />}
      </Link>

      <AnimatePresence>
        {children && isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            className="absolute top-full left-0 mt-2 w-64 bg-surface rounded-2xl shadow-2xl border border-border p-3 z-50 overflow-hidden"
          >
            <div className="flex flex-col gap-1">
              {children.map((child, idx) => (
                <Link
                  key={idx}
                  to={child.to}
                  className="px-4 py-2.5 rounded-xl text-sm font-medium text-text-main hover:bg-primary hover:text-white transition-all duration-200 flex items-center justify-between group/item"
                >
                  {child.label}
                  <div className="w-1.5 h-1.5 rounded-full bg-primary group-hover/item:bg-white opacity-0 group-hover/item:opacity-100 transition-all" />
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function Navbar() {
  const { t } = useTranslation();
  const { lang, toggleLang } = useLanguage();
  const { content } = useContent();
  const { pathname } = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { to: '/', label: content?.nav?.home?.[lang] || (lang === 'en' ? 'Home' : 'হোম') },
    { 
      to: '/about', 
      label: content?.nav?.about?.[lang] || (lang === 'en' ? 'About Us' : 'আমাদের সম্পর্কে'),
      children: [
        { to: '/about', label: content?.nav?.background?.[lang] || (lang === 'en' ? 'Background' : 'পটভূমি') },
        { to: '/about/vision-mission', label: content?.nav?.visionMission?.[lang] || (lang === 'en' ? 'Vision & Mission' : 'লক্ষ্য ও উদ্দেশ্য') },
        { to: '/about/governing-body', label: content?.nav?.governingBody?.[lang] || (lang === 'en' ? 'Governing Body' : 'পরিচালনা পর্ষদ') },
        { to: '/about/work-area', label: content?.nav?.workArea?.[lang] || (lang === 'en' ? 'Work Area' : 'কর্ম এলাকা') },
        { to: '/about/legal-status', label: content?.nav?.legalStatus?.[lang] || (lang === 'en' ? 'Legal Status' : 'আইনি মর্যাদা') },
        { to: '/about/membership', label: content?.nav?.membership?.[lang] || (lang === 'en' ? 'Membership' : 'সদস্যপদ') },
      ]
    },
    { 
      to: '/programs', 
      label: content?.nav?.programs?.[lang] || (lang === 'en' ? 'Programs' : 'কার্যক্রম'),
      children: [
        { to: '/programs', label: content?.nav?.allPrograms?.[lang] || (lang === 'en' ? 'All Programs' : 'সব কার্যক্রম') },
        { to: '/programs/education', label: content?.nav?.education?.[lang] || (lang === 'en' ? 'Education' : 'শিক্ষা') },
        { to: '/programs/health', label: content?.nav?.health?.[lang] || (lang === 'en' ? 'Health' : 'স্বাস্থ্য') },
        { to: '/programs/skill-development', label: content?.nav?.skills?.[lang] || (lang === 'en' ? 'Skills' : 'দক্ষতা') },
        { to: '/programs/financial-support', label: content?.nav?.finance?.[lang] || (lang === 'en' ? 'Finance' : 'অর্থ') },
        { to: '/programs/assistive-devices', label: content?.nav?.devices?.[lang] || (lang === 'en' ? 'Devices' : 'উপকরণ') },
        { to: '/programs/awareness', label: content?.nav?.awareness?.[lang] || (lang === 'en' ? 'Awareness' : 'সচেতনতা') },
        { to: '/programs/social-support', label: content?.nav?.socialSupport?.[lang] || (lang === 'en' ? 'Social Support' : 'সামাজিক সহায়তা') },
        { to: '/programs/special-programs', label: content?.nav?.specialPrograms?.[lang] || (lang === 'en' ? 'Special Programs' : 'বিশেষ কার্যক্রম') },
      ]
    },
    { 
      to: '/activities', 
      label: content?.nav?.activities?.[lang] || (lang === 'en' ? 'Activities' : 'কর্মসূচি'),
      children: [
        { to: '/activities', label: content?.nav?.overview?.[lang] || (lang === 'en' ? 'Overview' : 'সংক্ষিপ্ত বিবরণ') },
        { to: '/activities/relief', label: content?.nav?.relief?.[lang] || (lang === 'en' ? 'Relief' : 'ত্রাণ') },
        { to: '/activities/cultural', label: content?.nav?.cultural?.[lang] || (lang === 'en' ? 'Cultural' : 'সাংস্কৃতিক') },
        { to: '/activities/special-days', label: content?.nav?.specialDays?.[lang] || (lang === 'en' ? 'Special Days' : 'বিশেষ দিন') },
        { to: '/activities/advocacy', label: content?.nav?.advocacy?.[lang] || (lang === 'en' ? 'Advocacy' : 'অ্যাডভোকেসি') },
        { to: '/activities/committee-meetings', label: content?.nav?.meetings?.[lang] || (lang === 'en' ? 'Meetings' : 'সভা') },
        { to: '/activities/special-programs', label: content?.nav?.specialPrograms?.[lang] || (lang === 'en' ? 'Special Programs' : 'বিশেষ কার্যক্রম') },
      ]
    },
    { 
      to: '/news', 
      label: content?.nav?.media?.[lang] || (lang === 'en' ? 'Media' : 'মিডিয়া'),
      children: [
        { to: '/news', label: content?.nav?.news?.[lang] || (lang === 'en' ? 'News' : 'সংবাদ') },
        { to: '/blog', label: content?.nav?.blog?.[lang] || (lang === 'en' ? 'Blog' : 'ব্লগ') },
        { to: '/gallery', label: content?.nav?.gallery?.[lang] || (lang === 'en' ? 'Gallery' : 'গ্যালারি') },
        { to: '/videos', label: content?.nav?.videos?.[lang] || (lang === 'en' ? 'Videos' : 'ভিডিও') },
        { to: '/resources/downloads', label: content?.nav?.downloads?.[lang] || (lang === 'en' ? 'Downloads' : 'ডাউনলোড') },
      ]
    },
    { 
      to: '/support', 
      label: content?.nav?.supportUs?.[lang] || (lang === 'en' ? 'Support Us' : 'আমাদের সমর্থন করুন'),
      children: [
        { to: '/support/donate', label: content?.common?.buttons?.donateNow?.[lang] || (lang === 'en' ? 'Donate Now' : 'এখনই দান করুন') },
        { to: '/support/volunteer', label: content?.common?.buttons?.volunteer?.[lang] || (lang === 'en' ? 'Volunteer' : 'স্বেচ্ছাসেবী') },
        { to: '/support/partner', label: content?.common?.buttons?.partner?.[lang] || (lang === 'en' ? 'Partner' : 'অংশীদার') },
        { to: '/support/donors', label: content?.nav?.donors?.[lang] || (lang === 'en' ? 'Donors' : 'দাতা') },
      ]
    },
    { to: '/contact', label: content?.nav?.contact?.[lang] || (lang === 'en' ? 'Contact' : 'যোগাযোগ') },
  ];

  return (
    <>
      {/* Top Bar */}
      <div className="hidden lg:block bg-primary text-white py-2 px-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-xs font-semibold tracking-wider">
          <div className="flex items-center gap-6">
            <a href="tel:01743214468" className="flex items-center gap-1.5 hover:text-accent transition-colors whitespace-nowrap">
              <Phone size={14} /> 01743214468
            </a>
            <a href="mailto:spus.bd2019@gmail.com" className="flex items-center gap-1.5 hover:text-accent transition-colors whitespace-nowrap">
              <Mail size={14} /> spus.bd2019@gmail.com
            </a>
          </div>
          <div className="flex items-center gap-4 lg:gap-6">
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="flex items-center gap-1.5 hover:text-accent transition-colors whitespace-nowrap">
              <Facebook size={14} /> Facebook
            </a>
            <div className="h-4 w-px bg-white/20" />
            <span className="">Reg. (Dha)-09437, 14 June 2017</span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav 
        className={`sticky top-0 z-40 w-full transition-all duration-500 ${
          isScrolled 
            ? 'bg-surface/95 backdrop-blur-md shadow-xl py-3' 
            : 'bg-surface py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <Link to="/" className="hover:scale-105 transition-transform duration-300">
            <SpusLogoFull size={isScrolled ? 32 : 40} />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden xl:flex items-center gap-1">
            {menuItems.map((item, idx) => (
              <NavItem 
                key={idx} 
                to={item.to} 
                label={item.label} 
                children={item.children} 
                active={pathname === item.to || (item.children && item.children.some(c => pathname === c.to))}
              />
            ))}
          </div>

          <div className="flex items-center gap-2 xl:gap-3">
            {/* Search Button */}
            <button
              onClick={() => setIsSearchOpen(true)}
              className="flex items-center justify-center p-2.5 rounded-full bg-surface-alt text-primary hover:bg-primary hover:text-white transition-all duration-300 border border-border group"
              title={lang === 'en' ? 'Search' : 'খুঁজুন'}
            >
              <Search size={18} className="group-hover:scale-110 transition-transform" />
            </button>

            {/* Language Toggle */}
            <button 
              onClick={toggleLang}
              className="hidden sm:flex items-center gap-1.5 px-3 py-2 rounded-full font-bold text-xs bg-surface-alt text-primary hover:bg-primary hover:text-white transition-all duration-300 border border-border whitespace-nowrap"
            >
              <Languages size={16} />
              {lang === 'en' ? 'বাংলা' : 'English'}
            </button>

            {/* Donate CTA */}
            <Link 
              to="/support/donate"
              className="hidden md:flex items-center gap-2 px-4 xl:px-6 py-2.5 bg-secondary text-white rounded-full font-bold text-xs xl:text-sm shadow-lg hover:bg-secondary/90 hover:scale-105 transition-all duration-300 group whitespace-nowrap"
            >
              <Heart size={16} className="group-hover:fill-white transition-all" />
              {content?.common?.buttons?.donateNow?.[lang] || (lang === 'en' ? 'Donate Now' : 'এখনই দান করুন')}
            </Link>

            {/* Mobile Search Button */}
            <button
              onClick={() => setIsSearchOpen(true)}
              className="xl:hidden p-2 text-text-main hover:bg-surface-alt rounded-xl transition-colors"
            >
              <Search size={24} />
            </button>

            {/* Mobile Menu Toggle */}
            <button 
              onClick={() => setIsMobileMenuOpen(true)}
              className="xl:hidden p-2 text-text-main hover:bg-surface-alt rounded-xl transition-colors"
            >
              <Menu size={28} />
            </button>
          </div>
        </div>
      </nav>

      <SearchModal 
        isOpen={isSearchOpen} 
        onClose={() => setIsSearchOpen(false)} 
      />

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60]"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-[85%] max-w-sm bg-surface z-[70] shadow-2xl flex flex-col"
            >
              <div className="p-6 flex items-center justify-between border-b border-border">
                <SpusLogoFull size={32} />
                <button 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 text-text-main hover:bg-surface-alt rounded-xl transition-colors"
                >
                  <X size={24} />
                </button>
              </div>

              <div className="flex-grow overflow-y-auto p-6 space-y-2 custom-scrollbar">
                {menuItems.map((item, idx) => (
                  <div key={idx} className="space-y-1">
                    <Link
                      to={item.to}
                      onClick={() => !item.children && setIsMobileMenuOpen(false)}
                      className={`block px-4 py-3 rounded-xl font-bold text-lg ${
                        pathname === item.to ? 'bg-primary text-white' : 'text-text-main hover:bg-surface-alt'
                      }`}
                    >
                      {item.label}
                    </Link>
                    {item.children && (
                      <div className="pl-6 space-y-1 border-l-2 border-border ml-4">
                        {item.children.map((child, cIdx) => (
                          <Link
                            key={cIdx}
                            to={child.to}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="block px-4 py-2 rounded-lg text-sm font-medium text-muted hover:text-primary hover:bg-surface-alt transition-all"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <div className="p-6 border-t border-border space-y-4">
                <button 
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    setIsSearchOpen(true);
                  }}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold bg-surface-alt text-primary border border-border"
                >
                  <Search size={20} />
                  {lang === 'en' ? 'Search Site' : 'সাইট অনুসন্ধান'}
                </button>
                <button 
                  onClick={toggleLang}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold bg-surface-alt text-primary border border-border"
                >
                  <Languages size={20} />
                  {lang === 'en' ? 'বাংলা সংস্করণ' : 'English Version'}
                </button>
                <Link
                  to="/support/donate"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold bg-secondary text-white shadow-lg"
                >
                  <Heart size={20} />
                  {content?.common?.buttons?.donateNow?.[lang] || (lang === 'en' ? 'Donate Now' : 'এখনই দান করুন')}
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
