import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Home, ArrowLeft } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function NotFoundPage() {
  const { t } = useTranslation();

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-6 bg-bg">
      <div className="text-center space-y-8 max-w-2xl">
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="relative inline-block"
        >
          <h1 className="text-[12rem] font-display font-black text-primary/10 leading-none">404</h1>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-32 h-32 bg-secondary rounded-full flex items-center justify-center shadow-2xl animate-bounce">
              <span className="text-white text-4xl font-black">!</span>
            </div>
          </div>
        </motion.div>

        <div className="space-y-4">
          <h2 className="text-4xl font-display font-bold text-text-main">
            {t('common.notFoundTitle') || 'Page Not Found'}
          </h2>
          <p className="text-muted text-lg max-w-md mx-auto">
            {t('common.notFoundDesc') || "The page you are looking for doesn't exist or has been moved."}
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          <button 
            onClick={() => window.history.back()}
            className="px-8 py-4 bg-surface-alt text-primary rounded-full font-bold flex items-center gap-2 hover:bg-primary hover:text-white transition-all shadow-lg"
          >
            <ArrowLeft size={20} /> Go Back
          </button>
          <Link 
            to="/" 
            className="px-8 py-4 bg-primary text-white rounded-full font-bold flex items-center gap-2 hover:bg-primary/90 transition-all shadow-lg"
          >
            <Home size={20} /> {t('common.home')}
          </Link>
        </div>
      </div>
    </div>
  );
}
