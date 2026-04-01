import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function Breadcrumb() {
  const { t } = useTranslation();
  const { pathname } = useLocation();
  const paths = pathname.split('/').filter(p => p);

  if (pathname === '/') return null;

  return (
    <nav className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-muted mb-8 overflow-x-auto whitespace-nowrap pb-2 custom-scrollbar">
      <Link to="/" className="flex items-center gap-1.5 hover:text-primary transition-colors">
        <Home size={14} /> {t('common.home')}
      </Link>
      {paths.map((path, idx) => {
        const to = `/${paths.slice(0, idx + 1).join('/')}`;
        const isLast = idx === paths.length - 1;
        
        return (
          <React.Fragment key={idx}>
            <ChevronRight size={12} className="text-border" />
            {isLast ? (
              <span className="text-primary">{path.replace(/-/g, ' ')}</span>
            ) : (
              <Link to={to} className="hover:text-primary transition-colors">
                {path.replace(/-/g, ' ')}
              </Link>
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
}
