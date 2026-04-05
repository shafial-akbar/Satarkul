import siteContent from '../data/siteContent';

/**
 * Global Search Service
 * Abstracted search logic to mimic a real backend integration.
 */

// Pre-defined searchable routes and their corresponding content keys
const searchableRoutes = [
  { path: '/', title: { en: 'Home', bn: 'মূলপাতা' }, contentKey: 'home' },
  { path: '/about', title: { en: 'About Us', bn: 'আমাদের কথা' }, contentKey: 'about' },
  { path: '/about/vision-mission', title: { en: 'Vision & Mission', bn: 'লক্ষ্য ও উদ্দেশ্য' }, contentKey: 'visionMission' },
  { path: '/about/governing-body', title: { en: 'Governing Body', bn: 'পরিচালনা পর্ষদ' }, contentKey: 'governingBody' },
  { path: '/about/work-area', title: { en: 'Work Area', bn: 'আমাদের কর্মক্ষেত্র' }, contentKey: 'workArea' },
  { path: '/about/legal-status', title: { en: 'Legal Status', bn: 'আইনি মর্যাদা' }, contentKey: 'legalStatus' },
  { path: '/programs', title: { en: 'Programs', bn: 'কার্যক্রম' }, contentKey: 'programs' },
  { path: '/programs/education', title: { en: 'Education Program', bn: 'শিক্ষা কার্যক্রম' }, contentKey: 'education' },
  { path: '/programs/health', title: { en: 'Health Program', bn: 'স্বাস্থ্য কার্যক্রম' }, contentKey: 'health' },
  { path: '/programs/skill-development', title: { en: 'Skill Development', bn: 'দক্ষতা উন্নয়ন' }, contentKey: 'skillDevelopment' },
  { path: '/programs/financial-support', title: { en: 'Financial Support', bn: 'আর্থিক সহায়তা' }, contentKey: 'financialSupport' },
  { path: '/programs/assistive-devices', title: { en: 'Assistive Devices', bn: 'সহায়ক উপকরণ' }, contentKey: 'assistiveDevices' },
  { path: '/programs/awareness', title: { en: 'Awareness Program', bn: 'সচেতনতা কার্যক্রম' }, contentKey: 'awareness' },
  { path: '/programs/social-support', title: { en: 'Social Support', bn: 'সামাজিক সহায়তা' }, contentKey: 'socialSupport' },
  { path: '/programs/special-programs', title: { en: 'Special Programs', bn: 'বিশেষ কার্যক্রম' }, contentKey: 'specialPrograms' },
  { path: '/activities', title: { en: 'Activities', bn: 'কর্মসূচি' }, contentKey: 'activities' },
  { path: '/activities/relief', title: { en: 'Relief Activities', bn: 'ত্রাণ কার্যক্রম' }, contentKey: 'relief' },
  { path: '/activities/cultural', title: { en: 'Cultural Activities', bn: 'সাংস্কৃতিক কার্যক্রম' }, contentKey: 'cultural' },
  { path: '/activities/special-days', title: { en: 'Special Days', bn: 'বিশেষ দিন' }, contentKey: 'specialDays' },
  { path: '/activities/advocacy', title: { en: 'Advocacy', bn: 'অ্যাডভোকেসি' }, contentKey: 'advocacy' },
  { path: '/activities/committee-meetings', title: { en: 'Committee Meetings', bn: 'কমিটি মিটিং' }, contentKey: 'meetings' },
  { path: '/news', title: { en: 'News & Media', bn: 'সংবাদ ও মিডিয়া' }, contentKey: 'news' },
  { path: '/blog', title: { en: 'Blog', bn: 'ব্লগ' }, contentKey: 'blog' },
  { path: '/gallery', title: { en: 'Gallery', bn: 'গ্যালারি' }, contentKey: 'gallery' },
  { path: '/videos', title: { en: 'Videos', bn: 'ভিডিও' }, contentKey: 'videos' },
  { path: '/contact', title: { en: 'Contact Us', bn: 'যোগাযোগ' }, contentKey: 'contact' },
  { path: '/support/donate', title: { en: 'Donate', bn: 'অনুদান' }, contentKey: 'donate' },
  { path: '/support/volunteer', title: { en: 'Volunteer', bn: 'স্বেচ্ছাসেবী' }, contentKey: 'volunteer' },
  { path: '/support/partner', label: { en: 'Partner', bn: 'অংশীদার' }, contentKey: 'partner' },
];

/**
 * Global Search Function
 * @param {string} query - The search query
 * @param {string} lang - The current language ('en' or 'bn')
 * @returns {Promise<Array>} - A list of search results
 */
export const globalSearch = async (query, lang = 'en') => {
  // Simulate API delay to make it "API-ready"
  await new Promise(resolve => setTimeout(resolve, 400));

  if (!query || query.trim().length < 2) return [];

  const q = query.toLowerCase().trim();
  const results = [];

  // 1. Search in searchableRoutes (Page Titles)
  searchableRoutes.forEach(route => {
    const title = route.title?.[lang] || route.label?.[lang] || '';
    if (title.toLowerCase().includes(q)) {
      results.push({
        title: title,
        description: lang === 'en' ? `Navigate to ${title} page` : `${title} পাতায় যান`,
        path: route.path,
        type: lang === 'en' ? 'Page' : 'পাতা'
      });
    }
  });

  // 2. Search in siteContent (Deep Search)
  // We'll look for specific sections that might contain relevant text
  const searchInContent = (obj, path = '', type = 'Content') => {
    for (const key in obj) {
      const value = obj[key];
      if (typeof value === 'string' && value.toLowerCase().includes(q)) {
        // Avoid adding too many generic results, try to find a meaningful parent
        results.push({
          title: value.length > 40 ? value.substring(0, 40) + '...' : value,
          description: value.length > 100 ? value.substring(0, 100) + '...' : value,
          path: path || '/',
          type: type
        });
      } else if (typeof value === 'object' && value !== null) {
        // If it's a translation object
        if (value.en && value.bn) {
          if (value[lang].toLowerCase().includes(q)) {
            results.push({
              title: value[lang].length > 50 ? value[lang].substring(0, 50) + '...' : value[lang],
              description: value[lang].length > 120 ? value[lang].substring(0, 120) + '...' : value[lang],
              path: path || '/',
              type: type
            });
          }
        } else {
          // Recursive search, but limit depth or specific keys to avoid noise
          if (['hero', 'about', 'programs', 'activities', 'news'].includes(key)) {
             // Map key to path if possible
             const newPath = mapKeyToPath(key) || path;
             searchInContent(value, newPath, key.charAt(0).toUpperCase() + key.slice(1));
          } else {
             searchInContent(value, path, type);
          }
        }
      }
    }
  };

  const mapKeyToPath = (key) => {
    const found = searchableRoutes.find(r => r.contentKey === key);
    return found ? found.path : null;
  };

  // Start deep search in major sections
  ['about', 'programs', 'activities', 'news'].forEach(section => {
    if (siteContent[section]) {
      searchInContent(siteContent[section], mapKeyToPath(section), section.charAt(0).toUpperCase() + section.slice(1));
    }
  });

  // 3. Remove duplicates (based on title and path)
  const uniqueResults = results.filter((v, i, a) => 
    a.findIndex(t => (t.title === v.title && t.path === v.path)) === i
  );

  // 4. Limit results
  return uniqueResults.slice(0, 10);
};
