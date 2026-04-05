import { newsData } from '../data/newsData';
import siteContent from '../data/siteContent';
import { schoolStats, disabilityBreakdown, schoolClasses, subPrograms } from '../data/educationData';
import { healthServices, healthEvents } from '../data/healthData';
import { mainSkills, trainingProjects } from '../data/skillDevelopmentData';
import { financialGrants, smeLoans } from '../data/financialData';
import { devices, impactPoints } from '../data/assistiveDevicesData';
import { awarenessPrograms } from '../data/awarenessData';
import { socialSupportServices } from '../data/socialSupportData';
import { specialPrograms } from '../data/specialProgramsData';
import { galleryData, videosData } from '../data/galleryData';
import { downloadsData } from '../data/downloadsData';

/**
 * Global Search Service
 * Searches across all data sources including site content, news, programs, and activities.
 */
export const globalSearch = async (query, lang = 'en') => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 300));

  if (!query || query.trim().length < 2) return [];

  const q = query.toLowerCase().trim();
  const results = [];
  const seenPaths = new Set();

  const addResult = (title, description, path, type) => {
    if (!title || !path) return;
    
    // Normalize title and description for display
    const displayTitle = typeof title === 'object' ? (title[lang] || title.en || '') : String(title);
    const displayDesc = typeof description === 'object' ? (description[lang] || description.en || '') : String(description);
    
    if (!displayTitle) return;

    const key = `${displayTitle}-${path}`;
    if (seenPaths.has(key)) return;
    seenPaths.add(key);

    results.push({
      title: displayTitle.length > 80 ? displayTitle.substring(0, 80) + '...' : displayTitle,
      description: displayDesc.length > 150 ? displayDesc.substring(0, 150) + '...' : displayDesc,
      path,
      type
    });
  };

  // 1. Search in Static Pages / Routes (Explicitly)
  const staticPages = [
    { path: '/', title: siteContent.nav.home, type: lang === 'en' ? 'Page' : 'পাতা' },
    { path: '/about', title: siteContent.nav.about, type: lang === 'en' ? 'Page' : 'পাতা' },
    { path: '/about/vision-mission', title: siteContent.nav.visionMission, type: lang === 'en' ? 'Page' : 'পাতা' },
    { path: '/about/governing-body', title: siteContent.nav.governingBody, type: lang === 'en' ? 'Page' : 'পাতা' },
    { path: '/about/work-area', title: siteContent.nav.workArea, type: lang === 'en' ? 'Page' : 'পাতা' },
    { path: '/about/legal-status', title: siteContent.nav.legalStatus, type: lang === 'en' ? 'Page' : 'পাতা' },
    { path: '/about/membership', title: siteContent.nav.membership, type: lang === 'en' ? 'Page' : 'পাতা' },
    { path: '/programs', title: siteContent.nav.programs, type: lang === 'en' ? 'Page' : 'পাতা' },
    { path: '/programs/education', title: siteContent.nav.education, type: lang === 'en' ? 'Page' : 'পাতা' },
    { path: '/programs/health', title: siteContent.nav.health, type: lang === 'en' ? 'Page' : 'পাতা' },
    { path: '/programs/skill-development', title: siteContent.nav.skills, type: lang === 'en' ? 'Page' : 'পাতা' },
    { path: '/programs/financial-support', title: siteContent.nav.finance, type: lang === 'en' ? 'Page' : 'পাতা' },
    { path: '/programs/assistive-devices', title: siteContent.nav.devices, type: lang === 'en' ? 'Page' : 'পাতা' },
    { path: '/programs/awareness', title: siteContent.nav.awareness, type: lang === 'en' ? 'Page' : 'পাতা' },
    { path: '/programs/social-support', title: siteContent.nav.socialSupport, type: lang === 'en' ? 'Page' : 'পাতা' },
    { path: '/programs/special-programs', title: siteContent.nav.specialPrograms, type: lang === 'en' ? 'Page' : 'পাতা' },
    { path: '/news', title: siteContent.nav.news, type: lang === 'en' ? 'Page' : 'পাতা' },
    { path: '/blog', title: siteContent.nav.blog, type: lang === 'en' ? 'Page' : 'পাতা' },
    { path: '/gallery', title: siteContent.nav.gallery, type: lang === 'en' ? 'Page' : 'পাতা' },
    { path: '/videos', title: siteContent.nav.videos, type: lang === 'en' ? 'Page' : 'পাতা' },
    { path: '/resources/downloads', title: siteContent.nav.downloads, type: lang === 'en' ? 'Page' : 'পাতা' },
    { path: '/contact', title: siteContent.nav.contact, type: lang === 'en' ? 'Page' : 'পাতা' },
  ];

  staticPages.forEach(page => {
    const title = page.title?.[lang] || page.title?.en || '';
    if (title.toLowerCase().includes(q)) {
      addResult(title, title, page.path, page.type);
    }
  });

  // 2. Search in News & Blog Data
  if (newsData && Array.isArray(newsData)) {
    newsData.forEach(item => {
      const title = item.title?.[lang] || item.title?.en || '';
      const excerpt = item.excerpt?.[lang] || item.excerpt?.en || '';
      const content = item.content?.[lang] || item.content?.en || '';
      const category = item.category?.[lang] || item.category?.en || '';
      
      if (
        title.toLowerCase().includes(q) || 
        excerpt.toLowerCase().includes(q) || 
        content.toLowerCase().includes(q) ||
        category.toLowerCase().includes(q)
      ) {
        addResult(title, excerpt || content, `/news/${item.id}`, lang === 'en' ? 'News & Blog' : 'সংবাদ ও ব্লগ');
      }
    });
  }

  // 3. Recursive Traversal for deep content search
  const routeMap = {
    home: '/',
    about: '/about',
    visionMission: '/about/vision-mission',
    governingBody: '/about/governing-body',
    workArea: '/about/work-area',
    legalStatus: '/about/legal-status',
    membership: '/about/membership',
    education: '/programs/education',
    health: '/programs/health',
    'skill-development': '/programs/skill-development',
    'financial-support': '/programs/financial-support',
    'assistive-devices': '/programs/assistive-devices',
    awareness: '/programs/awareness',
    'social-support': '/programs/social-support',
    'special-programs': '/programs/special-programs',
    contact: '/contact'
  };

  const traverse = (obj, path, type, depth = 0, seen = new Set()) => {
    if (!obj || depth > 10) return;
    
    // Handle objects and arrays
    if (typeof obj === 'object') {
      if (seen.has(obj)) return;
      seen.add(obj);

      // If it's a translation object {en, bn}
      if (obj.en && obj.bn) {
        const text = obj[lang] || obj.en || '';
        if (typeof text === 'string' && text.toLowerCase().includes(q)) {
          addResult(text, text, path, type);
        }
        return;
      }

      // Iterate through object properties or array items
      Object.entries(obj).forEach(([key, value]) => {
        const newPath = routeMap[key] || path;
        const newType = isNaN(Number(key)) 
          ? (key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1')) 
          : type;
        
        traverse(value, newPath, newType, depth + 1, seen);
      });
    } else if (typeof obj === 'string') {
      if (obj.toLowerCase().includes(q)) {
        addResult(obj, obj, path, type);
      }
    }
  };

  // Search in siteContent
  traverse(siteContent, '/', lang === 'en' ? 'Content' : 'কন্টেন্ট');

  // Search in specific program data
  const collections = [
    { data: schoolStats, path: '/programs/education', type: lang === 'en' ? 'Education' : 'শিক্ষা' },
    { data: schoolClasses, path: '/programs/education', type: lang === 'en' ? 'Education' : 'শিক্ষা' },
    { data: subPrograms, path: '/programs/education', type: lang === 'en' ? 'Education' : 'শিক্ষা' },
    { data: healthServices, path: '/programs/health', type: lang === 'en' ? 'Health' : 'স্বাস্থ্য' },
    { data: healthEvents, path: '/programs/health', type: lang === 'en' ? 'Health' : 'স্বাস্থ্য' },
    { data: mainSkills, path: '/programs/skill-development', type: lang === 'en' ? 'Skills' : 'দক্ষতা' },
    { data: trainingProjects, path: '/programs/skill-development', type: lang === 'en' ? 'Skills' : 'দক্ষতা' },
    { data: financialGrants, path: '/programs/financial-support', type: lang === 'en' ? 'Finance' : 'অর্থ' },
    { data: smeLoans, path: '/programs/financial-support', type: lang === 'en' ? 'Finance' : 'অর্থ' },
    { data: devices, path: '/programs/assistive-devices', type: lang === 'en' ? 'Devices' : 'উপকরণ' },
    { data: impactPoints, path: '/programs/assistive-devices', type: lang === 'en' ? 'Devices' : 'উপকরণ' },
    { data: awarenessPrograms, path: '/programs/awareness', type: lang === 'en' ? 'Awareness' : 'সচেতনতা' },
    { data: socialSupportServices, path: '/programs/social-support', type: lang === 'en' ? 'Social Support' : 'সামাজিক সহায়তা' },
    { data: specialPrograms, path: '/programs/special-programs', type: lang === 'en' ? 'Special' : 'বিশেষ' },
    { data: galleryData, path: '/gallery', type: lang === 'en' ? 'Gallery' : 'গ্যালারি' },
    { data: videosData, path: '/videos', type: lang === 'en' ? 'Video' : 'ভিডিও' },
    { data: downloadsData, path: '/resources/downloads', type: lang === 'en' ? 'Download' : 'ডাউনলোড' },
  ];

  collections.forEach(col => {
    traverse(col.data, col.path, col.type);
  });

  // Sort results: prioritize matches in title
  results.sort((a, b) => {
    const aTitleMatch = a.title.toLowerCase().includes(q);
    const bTitleMatch = b.title.toLowerCase().includes(q);
    if (aTitleMatch && !bTitleMatch) return -1;
    if (!aTitleMatch && bTitleMatch) return 1;
    return 0;
  });

  return results.slice(0, 15);
};
