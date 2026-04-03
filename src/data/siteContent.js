/**
 * siteContent.js
 * This file contains all the static text content for the application.
 * It is structured by page and section to make it easy to manage and fetch via API.
 */

const siteContent = {
  common: {
    orgName: { en: 'Satarkul Protibondhi Unnayan Songstha', bn: 'সাতারকুল প্রতিবন্ধী উন্নয়ন সংস্থা' },
    motto: { en: 'Empowering Lives, Ensuring Rights', bn: 'সক্ষম জীবন, সুরক্ষিত অধিকার' },
    contact: {
      email: 'info@spus.org',
      phone: '+880123456789',
      address: { en: 'Satarkul, Badda, Dhaka', bn: 'সাতারকুল, বাড্ডা, ঢাকা' }
    },
    labels: {
      regNumber: { en: 'Reg Number', bn: 'নিবন্ধন নম্বর' },
      date: { en: 'Date', bn: 'তারিখ' },
      applyNow: { en: 'Apply Now', bn: 'আবেদন করুন' },
      getDirections: { en: 'Get Directions', bn: 'ম্যাপে দেখুন' },
      boys: { en: 'Boys', bn: 'বালক' },
      girls: { en: 'Girls', bn: 'বালিকা' }
    },
    buttons: {
      learnMore: { en: "Learn More", bn: "আরও জানুন" },
      donateNow: { en: "Donate Now", bn: "অনদান দিন" },
      readMore: { en: "Read More", bn: "আরও পড়ুন" },
      volunteer: { en: "Volunteer", bn: "স্বেচ্ছাসেবী" },
      partner: { en: "Partner", bn: "অংশীদার" },
      contactUs: { en: "Contact Us", bn: "যোগাযোগ করুন" },
      viewDetails: { en: "View Details", bn: "বিস্তারিত দেখুন" }
    }
  },
  nav: {
    home: { en: 'Home', bn: 'মূলপাতা' },
    about: { en: 'About Us', bn: 'আমাদের সম্পর্কে' },
    programs: { en: 'Programs', bn: 'কার্যক্রম' },
    activities: { en: 'Activities', bn: 'কর্মসূচি' },
    media: { en: 'Media', bn: 'মিডিয়া' },
    news: { en: 'News', bn: 'সংবাদ' },
    blog: { en: 'Blog', bn: 'ব্লগ' },
    gallery: { en: 'Gallery', bn: 'গ্যালারি' },
    videos: { en: 'Videos', bn: 'ভিডিও' },
    downloads: { en: 'Downloads', bn: 'ডাউনলোড' },
    supportUs: { en: 'Support Us', bn: 'সহযোগিতা করুন' },
    contact: { en: 'Contact', bn: 'যোগাযোগ' },
    background: { en: 'Background', bn: 'পটভূমি' },
    visionMission: { en: 'Vision & Mission', bn: 'লক্ষ্য ও উদ্দেশ্য' },
    governingBody: { en: 'Governing Body', bn: 'পরিচালনা পর্ষদ' },
    workArea: { en: 'Work Area', bn: 'কর্ম এলাকা' },
    legalStatus: { en: 'Legal Status', bn: 'আইনি স্বীকৃতি' },
    membership: { en: 'Membership', bn: 'সদস্যপদ' },
    allPrograms: { en: 'All Programs', bn: 'সকল কার্যক্রম' },
    education: { en: 'Education', bn: 'শিক্ষা' },
    health: { en: 'Health', bn: 'স্বাস্থ্য' },
    skills: { en: 'Skills', bn: 'দক্ষতা' },
    finance: { en: 'Finance', bn: 'অর্থায়ন' },
    devices: { en: 'Devices', bn: 'উপকরণ' },
    awareness: { en: 'Awareness', bn: 'সচেতনতা' },
    socialSupport: { en: 'Social Support', bn: 'সামাজিক সহায়তা' },
    specialPrograms: { en: 'Special Programs', bn: 'বিশেষ কার্যক্রম' },
    overview: { en: 'Overview', bn: 'সংক্ষিপ্ত বিবরণ' },
    relief: { en: 'Relief', bn: 'ত্রাণ' },
    cultural: { en: 'Cultural', bn: 'সাংস্কৃতিক' },
    specialDays: { en: 'Special Days', bn: 'বিশেষ দিবস' },
    advocacy: { en: 'Advocacy', bn: 'অ্যাডভোকেসি' },
    meetings: { en: 'Meetings', bn: 'সভা' },
    donors: { en: 'Donors', bn: 'দাতা' },
  },
  home: {
    hero: {
      slides: [
        {
          title: { en: "Empowering Lives, Ensuring Rights.", bn: "সক্ষম জীবন, সুরক্ষিত অধিকার" },
          subtitle: { en: "Dedicated to the welfare and rights of persons with disabilities.", bn: "প্রতিবন্ধী ব্যক্তিদের কল্যাণ ও অধিকার রক্ষায় আমরা নিবেদিত।" },
          tag: { en: "Welcome to SPUS", bn: "এসপিইউএস-এ আপনাকে স্বাগতম" }
        },
        {
          title: { en: "Inclusive Education for Every Child", bn: "প্রতিটি শিশুর জন্য অন্তর্ভুক্তিমূলক শিক্ষা" },
          subtitle: { en: "Breaking barriers to learning and growth for children with disabilities.", bn: "প্রতিবন্ধী শিশুদের শিক্ষা ও বিকাশের পথে সকল বাধা দূর করছি।" },
          tag: { en: "Education Program", bn: "শিক্ষা কার্যক্রম" }
        },
        {
          title: { en: "Better Health, Brighter Future", bn: "সুস্বাস্থ্যই সুন্দর ভবিষ্যৎ" },
          subtitle: { en: "Providing essential healthcare and assistive devices to our community.", bn: "অসহায় মানুষের জন্য প্রয়োজনীয় স্বাস্থ্যসেবা ও সহায়তামূলক উপকরণ নিশ্চিত করছি।" },
          tag: { en: "Health Services", bn: "স্বাস্থ্যসেবা" }
        }
      ]
    },
    about: {
      tag: { en: "Who We Are", bn: "আমাদের পরিচয়" },
      title: { en: "Working for an Inclusive Society", bn: "একটি বৈষম্যহীন সমাজ গড়ার প্রত্যয়ে" },
      description: { en: "Swadhin Protibondhi Unnayan Sangstha (SPUS) is a non-political, non-profit organization dedicated to the welfare and rights of persons with disabilities.", bn: "সাতারকুল প্রতিবন্ধী উন্নয়ন সংস্থা (এসপিইউএস) একটি অরাজনৈতিক ও অলাভজনক প্রতিষ্ঠান, যা প্রতিবন্ধী ব্যক্তিদের কল্যাণ ও মৌলিক অধিকার প্রতিষ্ঠায় কাজ করে।" },
      since: { en: "Since 2013", bn: "২০১৩ থেকে" },
      sinceDesc: { en: "Dedicated to empowering persons with disabilities in Badda, Dhaka.", bn: "ঢাকার বাড্ডায় প্রতিবন্ধী ব্যক্তিদের আত্মনির্ভরশীল করতে আমরা প্রতিশ্রুতিবদ্ধ।" },
      discoverMore: { en: "Discover More About Us", bn: "আমাদের সম্পর্কে আরও জানুন" }
    },
    stats: {
      members: { en: "Total Members", bn: "মোট সদস্য" },
      winterClothes: { en: "Winter Clothes", bn: "শীতবস্ত্র বিতরণ" },
      students: { en: "Students", bn: "শিক্ষার্থী" },
      relief: { en: "Relief Distribution", bn: "ত্রাণ সহায়তা" },
      years: { en: "Years of Service", bn: "সেবার বছর" }
    },
    programs: {
      tag: { en: "Our Impact Areas", bn: "সেবার ক্ষেত্রসমূহ" },
      title: { en: "Programs That Change Lives", bn: "জীবন বদলে দেওয়া কর্মসূচি" }
    },
    news: {
      tag: { en: "Recent Updates", bn: "সাম্প্রতিক তথ্য" },
      title: { en: "Activities & News", bn: "কার্যক্রম ও সংবাদ" },
      viewDetails: { en: "View Details", bn: "বিস্তারিত" }
    },
    testimonials: {
      tag: { en: "Our Voices", bn: "সফলতার গল্প" },
      title: { en: "Stories of Hope and Resilience", bn: "আশা ও ঘুরে দাঁড়ানোর গল্প" },
      description: { en: "Hear from the people whose lives have been transformed through our programs and collective efforts.", bn: "আমাদের কার্যক্রম ও সমন্বিত প্রচেষ্টায় যাদের জীবন বদলে গেছে, শুনুন তাদের কথা।" },
      readMore: { en: "Read More Stories", bn: "আরও গল্প পড়ুন" },
      list: [
        {
          name: { en: 'Rahim Uddin', bn: 'রহিম উদ্দিন' },
          role: { en: 'Parent of Student', bn: 'শিক্ষার্থীর অভিভাবক' },
          quote: { en: 'SPUS has given my son a new lease on life. The education and care he receives here are unmatched.', bn: 'এসপিইউএস আমার ছেলেকে নতুন জীবনের দিশা দিয়েছে। এখানকার শিক্ষা ও নিবিড় যত্ন সত্যিই অতুলনীয়।' },
          image: 'https://i.pravatar.cc/150?u=rahim'
        },
        {
          name: { en: 'Fatema Begum', bn: 'ফাতেমা বেগম' },
          role: { en: 'Member', bn: 'সদস্য' },
          quote: { en: 'The assistive devices and health support from SPUS have made me independent and confident.', bn: 'এসপিইউএস-এর স্বাস্থ্য সহায়তা ও বিভিন্ন উপকরণ আমাকে আজ আত্মবিশ্বাসী ও স্বাবলম্বী করে তুলেছে।' },
          image: 'https://i.pravatar.cc/150?u=fatema'
        }
      ]
    },
    partners: {
      tag: { en: "Our Trusted Partners", bn: "আমাদের গর্বিত অংশীদার" }
    },
    join: {
      volunteer: {
        title: { en: "Become a Volunteer", bn: "স্বেচ্ছাসেবী হিসেবে যোগ দিন" },
        desc: { en: "Join our community of passionate volunteers and help us create a more inclusive world.", bn: "একটি বৈষম্যহীন সমাজ গড়তে আমাদের উদ্যমী স্বেচ্ছাসেবক দলে যুক্ত হন।" }
      },
      partner: {
        title: { en: "Partner With Us", bn: "অংশীদার হিসেবে কাজ করুন" },
        desc: { en: "Collaborate with us to scale our impact and reach more people in need.", bn: "আমাদের সেবার পরিধি বাড়াতে এবং আরও মানুষের কাছে পৌঁছাতে আমাদের সাথে যুক্ত হন।" }
      }
    },
    cta: {
      title: { en: "Ready to Make a Real Difference?", bn: "আপনি কি ইতিবাচক পরিবর্তন আনতে চান?" },
      desc: { en: "Your contribution helps us provide education, healthcare, and dignity to persons with disabilities.", bn: "আপনার সামান্য অবদান প্রতিবন্ধী ব্যক্তিদের শিক্ষা, স্বাস্থ্যসেবা ও মর্যাদা নিশ্চিত করতে সহায়তা করবে।" }
    },
    newsletter: {
      title: { en: "Stay Informed", bn: "সংযুক্ত থাকুন" },
      desc: { en: "Subscribe to our newsletter for the latest updates and impact stories.", bn: "সর্বশেষ আপডেট এবং সফলতার গল্পগুলো জানতে আমাদের নিউজলেটারে যুক্ত হোন।" },
      placeholder: { en: "Your email address", bn: "আপনার ইমেইল ঠিকানা" },
      button: { en: "Subscribe", bn: "সাবস্ক্রাইব" }
    }
  },
  // ... নিচের বাকি অংশগুলোও একইভাবে আরও সাবলীল ও মার্জিত শব্দ দিয়ে আপডেট করা যেতে পারে।
};