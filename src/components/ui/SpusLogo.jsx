import React from 'react';

export const SpusLogo = ({ size = 40, className = "" }) => {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Outer Ring */}
      <circle cx="50" cy="50" r="48" stroke="currentColor" strokeWidth="2" strokeDasharray="4 2" className="text-secondary" />
      
      {/* Main Circle */}
      <circle cx="50" cy="50" r="42" fill="currentColor" className="text-primary" />
      
      {/* Support Symbol: Hand + Wheelchair integration */}
      <path 
        d="M50 30C45 30 41 34 41 39C41 44 45 48 50 48C55 48 59 44 59 39C59 34 55 30 50 30ZM50 44C47.2 44 45 41.8 45 39C45 36.2 47.2 34 50 34C52.8 34 55 36.2 55 39C55 41.8 52.8 44 50 44Z" 
        fill="white" 
      />
      <path 
        d="M65 55H55V48H52V58H62V75H65V55Z" 
        fill="white" 
      />
      <path 
        d="M45 55C40 55 36 59 36 64C36 69 40 73 45 73C50 73 54 69 54 64H51C51 67.3 48.3 70 45 70C41.7 70 39 67.3 39 64C39 60.7 41.7 58 45 58V55Z" 
        fill="white" 
      />
      <path 
        d="M50 52L48 55H52L50 52Z" 
        fill="white" 
      />
      
      {/* Stars */}
      <path d="M50 15L51.5 18.5L55 20L51.5 21.5L50 25L48.5 21.5L45 20L48.5 18.5L50 15Z" fill="#F59E0B" />
      <path d="M30 25L31 27.5L33.5 28.5L31 29.5L30 32L29 29.5L26.5 28.5L29 27.5L30 25Z" fill="#F59E0B" />
      <path d="M70 25L71 27.5L73.5 28.5L71 29.5L70 32L69 29.5L66.5 28.5L69 27.5L70 25Z" fill="#F59E0B" />

      {/* Text */}
      <text x="50" y="85" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold" fontFamily="sans-serif">SPUS</text>
    </svg>
  );
};

export const SpusLogoFull = ({ className = "", size = 40, vertical = false }) => {
  return (
    <div className={`flex items-center gap-2 lg:gap-3 ${vertical ? 'flex-col text-center' : 'flex-row'} ${className}`}>
      <SpusLogo size={size} />
      <div className={`flex flex-col ${vertical ? 'items-center' : 'items-start'}`}>
        <span className="text-primary font-display font-bold leading-tight text-sm lg:text-base xl:text-lg whitespace-nowrap">সাতারকুল প্রতিবন্ধী উন্নয়ন সংস্থা</span>
        <span className="text-secondary font-body font-semibold text-[9px] lg:text-[10px] xl:text-xs tracking-wider uppercase whitespace-nowrap">Satarkul Protibondhi Unnayan Songstha</span>
      </div>
    </div>
  );
};
