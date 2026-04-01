import React, { Suspense, lazy } from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import activeVariant from '../../config/homepageVariant';

const Variant1 = lazy(() => import('./variants/Variant1'));
const Variant2 = lazy(() => import('./variants/Variant2'));
const Variant3 = lazy(() => import('./variants/Variant3'));
const Variant4 = lazy(() => import('./variants/Variant4'));
const Variant5 = lazy(() => import('./variants/Variant5'));
const Variant6 = lazy(() => import('./variants/Variant6'));

const variants = {
  1: Variant1,
  2: Variant2,
  3: Variant3,
  4: Variant4,
  5: Variant5,
  6: Variant6,
};

export default function HomePage() {
  const { t } = useTranslation();
  const searchParams = new URLSearchParams(window.location.search);
  const variantParam = parseInt(searchParams.get('v'));
  const ActiveVariant = variants[variantParam] || variants[activeVariant] || Variant1;

  return (
    <>
      <Helmet>
        <title>{t('common.orgName')} | {t('common.home')}</title>
        <meta name="description" content={t('common.motto')} />
      </Helmet>
      
      <Suspense fallback={
        <div className="min-h-screen flex items-center justify-center bg-bg">
          <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin" />
        </div>
      }>
        <ActiveVariant />
      </Suspense>
    </>
  );
}
