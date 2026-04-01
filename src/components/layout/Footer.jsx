import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Facebook, Youtube, Twitter, Instagram, ArrowRight, Heart } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '../../context/LanguageContext';
import { SpusLogoFull } from '../ui/SpusLogo';

export default function Footer() {
  const { t } = useTranslation();
  const { lang } = useLanguage();

  const footerLinks = [
    {
      title: t('common.about'),
      links: [
        { to: '/about', label: t('nav.background') },
        { to: '/about/vision-mission', label: t('nav.visionMission') },
        { to: '/about/governing-body', label: t('nav.governingBody') },
        { to: '/about/work-area', label: t('nav.workArea') },
        { to: '/about/legal-status', label: t('nav.legalStatus') },
        { to: '/about/membership', label: t('nav.membership') },
      ]
    },
    {
      title: t('common.programs'),
      links: [
        { to: '/programs', label: t('nav.allPrograms') },
        { to: '/programs/education', label: t('nav.education') },
        { to: '/programs/health', label: t('nav.health') },
        { to: '/programs/skill-development', label: t('nav.skills') },
        { to: '/programs/financial-support', label: t('nav.finance') },
        { to: '/programs/assistive-devices', label: t('nav.devices') },
        { to: '/programs/awareness', label: t('nav.awareness') },
      ]
    },
    {
      title: t('common.supportUs'),
      links: [
        { to: '/support/donate', label: t('common.donate') },
        { to: '/support/volunteer', label: t('common.volunteer') },
        { to: '/support/partner', label: t('common.partner') },
        { to: '/support/donors', label: t('nav.donors') },
      ]
    },
    {
      title: t('common.media'),
      links: [
        { to: '/news', label: t('common.news') },
        { to: '/blog', label: t('common.blog') },
        { to: '/gallery', label: t('common.gallery') },
        { to: '/videos', label: t('common.videos') },
        { to: '/resources/downloads', label: t('common.downloads') },
      ]
    }
  ];

  return (
    <footer className="relative bg-surface border-t border-border overflow-hidden">
      {/* Rainbow Strip */}
      <div className="h-1.5 w-full flex">
        <div className="flex-grow bg-[#006A4E]" />
        <div className="flex-grow bg-[#C0392B]" />
        <div className="flex-grow bg-[#F59E0B]" />
        <div className="flex-grow bg-[#1B4F8A]" />
        <div className="flex-grow bg-[#6D28D9]" />
        <div className="flex-grow bg-[#10B981]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 py-20">
        {/* Row 1: Brand, About, Programs, Support Us */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          {/* Brand Column */}
          <div className="space-y-8 flex flex-col items-start">
            <SpusLogoFull size={48} className="items-start" />
            <p className="text-muted leading-relaxed text-sm italic font-medium">
              "{t('common.motto')}"
            </p>
            <div className="flex items-center gap-4">
              {[Facebook, Youtube, Twitter, Instagram].map((Icon, idx) => (
                <a 
                  key={idx} 
                  href="#" 
                  className="w-10 h-10 rounded-full bg-surface-alt flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300 shadow-sm"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns (About, Programs, Support Us) */}
          {footerLinks.slice(0, 3).map((section, idx) => (
            <div key={idx} className="space-y-6">
              <h4 className="text-lg font-display font-bold text-text-main relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-12 after:h-1 after:bg-primary after:rounded-full">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link, lIdx) => (
                  <li key={lIdx}>
                    <Link 
                      to={link.to} 
                      className="text-muted hover:text-primary hover:translate-x-2 transition-all duration-300 flex items-center gap-2 group text-sm font-medium"
                    >
                      <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 transition-all" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Row 2: Media, Contact, Google Map */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8 pt-16 border-t border-border">
          {/* Media Column */}
          <div className="space-y-6">
            <h4 className="text-lg font-display font-bold text-text-main relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-12 after:h-1 after:bg-primary after:rounded-full">
              {footerLinks[3].title}
            </h4>
            <ul className="space-y-3">
              {footerLinks[3].links.map((link, lIdx) => (
                <li key={lIdx}>
                  <Link 
                    to={link.to} 
                    className="text-muted hover:text-primary hover:translate-x-2 transition-all duration-300 flex items-center gap-2 group text-sm font-medium"
                  >
                    <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 transition-all" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div className="space-y-6">
            <h4 className="text-lg font-display font-bold text-text-main relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-12 after:h-1 after:bg-primary after:rounded-full">
              {t('common.contact')}
            </h4>
            <div className="space-y-5">
              <div className="flex items-start gap-3 group">
                <div className="w-10 h-10 rounded-xl bg-surface-alt flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300 flex-shrink-0">
                  <MapPin size={20} />
                </div>
                <p className="text-sm text-muted leading-relaxed font-medium">
                  House 16, Road 5, Lane 2, Ward 41, Satarkul West Padordia, Badda, Dhaka-1212
                </p>
              </div>
              <div className="flex items-center gap-3 group">
                <div className="w-10 h-10 rounded-xl bg-surface-alt flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300 flex-shrink-0">
                  <Phone size={20} />
                </div>
                <a href="tel:01743214468" className="text-sm text-muted font-bold hover:text-primary transition-colors">
                  01743214468
                </a>
              </div>
              <div className="flex items-center gap-3 group">
                <div className="w-10 h-10 rounded-xl bg-surface-alt flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300 flex-shrink-0">
                  <Mail size={20} />
                </div>
                <a href="mailto:spus.bd2019@gmail.com" className="text-sm text-muted font-bold hover:text-primary transition-colors break-all">
                  spus.bd2019@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Google Map Column */}
          <div className="space-y-6">
            <h4 className="text-lg font-display font-bold text-text-main relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-12 after:h-1 after:bg-primary after:rounded-full">
              {lang === 'en' ? 'Our Location' : 'আমাদের অবস্থান'}
            </h4>
            <div className="w-full h-48 rounded-2xl overflow-hidden border border-border shadow-sm">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.156!2d90.443!3d23.777!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c78f8f8f8f8f%3A0x8f8f8f8f8f8f8f8f!2sSatarkul%2C%20Badda%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1620000000000!5m2!1sen!2sbd" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-20 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-6 text-sm font-medium text-muted">
          <p>© {new Date().getFullYear()} {t('common.orgName')}. All Rights Reserved.</p>
          <div className="flex items-center gap-8">
            <Link to="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
            <Link to="/sitemap" className="hover:text-primary transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>


      {/* Background Pattern */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10 translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/5 rounded-full blur-3xl -z-10 -translate-x-1/2 translate-y-1/2" />
    </footer>
  );
}
