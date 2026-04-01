import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import Breadcrumb from '../shared/Breadcrumb';

export default function PageWrapper({ children, title, subtitle, bg = 'bg-bg' }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={`min-h-screen ${bg} pb-24`}
    >
      {/* Page Header */}
      <div className="relative bg-primary py-24 lg:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center text-white space-y-8">
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-3xl lg:text-5xl font-display font-bold leading-tight"
          >
            {title}
          </motion.h1>
          {subtitle && (
            <motion.p 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-base lg:text-xl text-white/80 max-w-3xl mx-auto font-medium"
            >
              {subtitle}
            </motion.p>
          )}
        </div>
        
        {/* Abstract Pattern */}
        <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] border-[100px] border-white rounded-full" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 -mt-12 relative z-20">
        <div className="bg-surface rounded-[3rem] shadow-2xl border border-border p-8 lg:p-16">
          <Breadcrumb />
          {children}
        </div>
      </div>
    </motion.div>
  );
}
