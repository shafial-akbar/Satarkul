import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ChevronDown, Heart, Languages, Search, Phone, Mail, Facebook } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '../../context/LanguageContext';
import { SpusLogoFull } from '../ui/SpusLogo';

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
  const { pathname } = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { to: '/', label: t('common.home') },
    { 
      to: '/about', 
      label: t('common.about'),
      children: [
        { to: '/about', label: t('nav.background') },
        { to: '/about/vision-mission', label: t('nav.visionMission') },
        { to: '/about/governing-body', label: t('nav.governingBody') },
        { to: '/about/work-area', label: t('nav.workArea') },
        { to: '/about/legal-status', label: t('nav.legalStatus') },
        { to: '/about/membership', label: t('nav.membership') },
      ]
    },
    { 
      to: '/programs', 
      label: t('common.programs'),
      children: [
        { to: '/programs', label: t('nav.allPrograms') },
        { to: '/programs/education', label: t('nav.education') },
        { to: '/programs/health', label: t('nav.health') },
        { to: '/programs/skill-development', label: t('nav.skills') },
        { to: '/programs/financial-support', label: t('nav.finance') },
        { to: '/programs/assistive-devices', label: t('nav.devices') },
        { to: '/programs/awareness', label: t('nav.awareness') },
        { to: '/programs/social-support', label: t('nav.socialSupport') },
        { to: '/programs/special-programs', label: t('nav.specialPrograms') },
      ]
    },
    { 
      to: '/activities', 
      label: t('common.activities'),
      children: [
        { to: '/activities', label: t('nav.overview') },
        { to: '/activities/relief', label: t('nav.relief') },
        { to: '/activities/cultural', label: t('nav.cultural') },
        { to: '/activities/special-days', label: t('nav.specialDays') },
        { to: '/activities/advocacy', label: t('nav.advocacy') },
        { to: '/activities/committee-meetings', label: t('nav.meetings') },
        { to: '/activities/special-programs', label: t('nav.specialPrograms') },
      ]
    },
    { 
      to: '/news', 
      label: t('common.media'),
      children: [
        { to: '/news', label: t('common.news') },
        { to: '/blog', label: t('common.blog') },
        { to: '/gallery', label: t('common.gallery') },
        { to: '/videos', label: t('common.videos') },
        { to: '/resources/downloads', label: t('common.downloads') },
      ]
    },
    { 
      to: '/support', 
      label: t('common.supportUs'),
      children: [
        { to: '/support/donate', label: t('common.donate') },
        { to: '/support/volunteer', label: t('common.volunteer') },
        { to: '/support/partner', label: t('common.partner') },
        { to: '/support/donors', label: t('nav.donors') },
      ]
    },
    { to: '/contact', label: t('common.contact') },
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
              {t('common.donate')}
            </Link>

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
                  {t('common.donate')}
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
