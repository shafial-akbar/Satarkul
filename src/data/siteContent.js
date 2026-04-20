/**
 * siteContent.js
 * এই ফাইলটিতে অ্যাপ্লিকেশনের সকল স্ট্যাটিক টেক্সট কন্টেন্ট রয়েছে।
 * এটি পেজ এবং সেকশন অনুযায়ী সাজানো হয়েছে যাতে এপিআই-এর মাধ্যমে সহজে পরিচালনা ও ব্যবহার করা যায়।
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
      getDirections: { en: 'Get Directions', bn: 'লোকেশন ম্যাপ' },
      boys: { en: 'Boys', bn: 'বালক' },
      girls: { en: 'Girls', bn: 'বালিকা' }
    },
    buttons: {
      learnMore: { en: "Learn More", bn: "আরও জানুন" },
      donateNow: { en: "Donate Now", bn: "অনুদান দিন" },
      readMore: { en: "Read More", bn: "বিস্তারিত পড়ুন" },
      volunteer: { en: "Volunteer", bn: "স্বেচ্ছাসেবী" },
      partner: { en: "Partner", bn: "অংশীদার" },
      contactUs: { en: "Contact Us", bn: "যোগাযোগ করুন" },
      viewDetails: { en: "View Details", bn: "বিস্তারিত দেখুন" }
    }
  },
  nav: {
    home: { en: 'Home', bn: 'মূলপাতা' },
    about: { en: 'About Us', bn: 'আমাদের কথা' },
    programs: { en: 'Programs', bn: 'কার্যক্রম' },
    activities: { en: 'Activities', bn: 'কর্মসূচি' },
    media: { en: 'Media', bn: 'মিডিয়া' },
    news: { en: 'News', bn: 'খবর' },
    blog: { en: 'Blog', bn: 'ব্লগ' },
    gallery: { en: 'Gallery', bn: 'গ্যালারি' },
    videos: { en: 'Videos', bn: 'ভিডিও' },
    downloads: { en: 'Downloads', bn: 'ডাউনলোড' },
    supportUs: { en: 'Support Us', bn: 'সহযোগিতা' },
    contact: { en: 'Contact', bn: 'যোগাযোগ' },
    background: { en: 'Background', bn: 'পটভূমি' },
    visionMission: { en: 'Vision & Mission', bn: 'লক্ষ্য ও উদ্দেশ্য' },
    governingBody: { en: 'Governing Body', bn: 'পরিচালনা পর্ষদ' },
    workArea: { en: 'Work Area', bn: 'আমাদের কর্মক্ষেত্র' },
    legalStatus: { en: 'Legal Status', bn: 'আইনি মর্যাদা' },
    membership: { en: 'Membership', bn: 'সদস্যপদ' },
    allPrograms: { en: 'All Programs', bn: 'সকল কার্যক্রম' },
    education: { en: 'Education', bn: 'শিক্ষা' },
    health: { en: 'Health', bn: 'স্বাস্থ্যসেবা' },
    skills: { en: 'Skills', bn: 'দক্ষতা উন্নয়ন' },
    finance: { en: 'Finance', bn: 'আর্থিক সহায়তা' },
    devices: { en: 'Devices', bn: 'সহায়ক উপকরণ' },
    awareness: { en: 'Awareness', bn: 'সচেতনতা' },
    socialSupport: { en: 'Social Support', bn: 'সামাজিক সহায়তা' },
    specialPrograms: { en: 'Special Programs', bn: 'বিশেষ কার্যক্রম' },
    overview: { en: 'Overview', bn: 'সংক্ষিপ্ত সার' },
    relief: { en: 'Relief', bn: 'ত্রাণ বিতরণ' },
    cultural: { en: 'Cultural', bn: 'সাংস্কৃতিক' },
    specialDays: { en: 'Special Days', bn: 'বিশেষ দিবস' },
    advocacy: { en: 'Advocacy', bn: 'অধিকার সুরক্ষা' },
    meetings: { en: 'Meetings', bn: 'সভা-সেমিনার' },
    donors: { en: 'Donors', bn: 'দাতা সংস্থা' },
  },
  home: {
    hero: {
      slides: [
        {
          title: { 
            en: "Share the pain. Share the hope. Share the future. Disability is not a barrier.", 
            bn: "বেদনা ভাগ করি, আশা জাগাই, গড়ব সুন্দর ভবিষ্যৎ। প্রতিবন্ধিতা কোনো বাধা নয়।" 
          },
          subtitle: { 
            en: "Empowering lives and ensuring rights for every person with disabilities.", 
            bn: "প্রতিবন্ধী ব্যক্তিদের ক্ষমতায়ন এবং মৌলিক অধিকার নিশ্চিতে আমাদের অঙ্গীকার।" 
          },
          tag: { 
            en: "Welcome to SPUS", 
            bn: "SPUS-এ আপনাকে স্বাগতম" 
          }
        },
        {
          title: { en: "Empowering Lives, Ensuring Rights.", bn: "সক্ষম জীবন, সুরক্ষিত অধিকার" },
          subtitle: { en: "Dedicated to the welfare and rights of persons with disabilities.", bn: "প্রতিবন্ধী ব্যক্তিদের সার্বিক কল্যাণ ও নাগরিক অধিকার নিশ্চিতে আমাদের নিরলস পথচলা।" },
          tag: { en: "Welcome to SPUS", bn: "SPUS-এ আপনাকে স্বাগত" }
        },
        {
          title: { en: "Inclusive Education for Every Child", bn: "প্রতিটি শিশুর জন্য অন্তর্ভুক্তিমূলক শিক্ষা" },
          subtitle: { en: "Breaking barriers to learning and growth for children with disabilities.", bn: "প্রতিবন্ধী শিশুদের শিক্ষা ও বিকাশের সকল বাধা দূর করতে আমরা বদ্ধপরিকর।" },
          tag: { en: "Education Program", bn: "শিক্ষা কার্যক্রম" }
        },
        {
          title: { en: "Better Health, Brighter Future", bn: "সুস্বাস্থ্যেই সমৃদ্ধ ভবিষ্যৎ" },
          subtitle: { en: "Providing essential healthcare and assistive devices to our community.", bn: "অসহায় মানুষের জন্য প্রয়োজনীয় চিকিৎসা সেবা ও সহায়ক উপকরণ নিশ্চিত করছি।" },
          tag: { en: "Health Services", bn: "স্বাস্থ্যসেবা" }
        }
      ]
    },
    about: {
      tag: { en: "Who We Are", bn: "আমাদের পরিচয়" },
      title: { en: "Working for an Inclusive Society", bn: "একটি বৈষম্যহীন সমাজ গঠনে কাজ করছি" },
      description: { en: "Swadhin Protibondhi Unnayan Sangstha (SPUS) is a non-political, non-profit organization dedicated to the welfare and rights of persons with disabilities.", bn: "সাতারকুল প্রতিবন্ধী উন্নয়ন সংস্থা (SPUS) একটি অরাজনৈতিক ও অলাভজনক প্রতিষ্ঠান, যা সমাজের পিছিয়ে পড়া প্রতিবন্ধী মানুষের অধিকার ও কল্যাণে কাজ করে।" },
      since: { en: "Since 2013", bn: "প্রতিষ্ঠাকাল ২০১৩" },
      sinceDesc: { en: "Dedicated to empowering persons with disabilities in Badda, Dhaka.", bn: "ঢাকার বাড্ডা এলাকায় প্রতিবন্ধী ব্যক্তিদের স্বাবলম্বী করতে আমরা নিবেদিত।" },
      discoverMore: { en: "Discover More About Us", bn: "আমাদের সম্পর্কে আরও জানুন" }
    },
    stats: {
      members: { en: "Total Members", bn: "মোট সদস্য" },
      winterClothes: { en: "Winter Clothes", bn: "শীতবস্ত্র বিতরণ" },
      students: { en: "Students", bn: "শিক্ষার্থী সংখ্যা" },
      relief: { en: "Relief Distribution", bn: "ত্রাণ কার্যক্রম" },
      years: { en: "Years of Service", bn: "সেবার এক দশক" }
    },
    programs: {
      tag: { en: "Our Impact Areas", bn: "আমাদের সেবাসমূহ" },
      title: { en: "Programs That Change Lives", bn: "জীবন বদলে দেওয়া কিছু উদ্যোগ" }
    },
    news: {
      tag: { en: "Recent Updates", bn: "সাম্প্রতিক সংবাদ" },
      title: { en: "Activities & News", bn: "কার্যক্রম ও সর্বশেষ সংবাদ" },
      viewDetails: { en: "View Details", bn: "বিস্তারিত দেখুন" }
    },
    testimonials: {
      tag: { en: "Our Voices", bn: "অনুপ্রেরণার কথা" },
      title: { en: "Stories of Hope and Resilience", bn: "অদম্য জীবনের জয়গাথা" },
      description: { en: "Hear from the people whose lives have been transformed through our programs and collective efforts.", bn: "আমাদের উদ্যোগ ও সম্মিলিত প্রচেষ্টায় যাদের জীবন ইতিবাচকভাবে বদলে গেছে, শুনুন তাদের অভিজ্ঞতার কথা।" },
      readMore: { en: "Read More Stories", bn: "আরও গল্প পড়ুন" },
      list: [
        {
          name: { en: 'Rahim Uddin', bn: 'রহিম উদ্দিন' },
          role: { en: 'Parent of Student', bn: 'শিক্ষার্থীর অভিভাবক' },
          quote: { en: 'SPUS has given my son a new lease on life. The education and care he receives here are unmatched.', bn: 'SPUS আমার ছেলেকে নতুন জীবনের স্বপ্ন দেখিয়েছে। এখানকার শিক্ষা ও নিবিড় যত্ন সত্যিই অতুলনীয়।' },
          image: 'https://i.pravatar.cc/150?u=rahim'
        },
        {
          name: { en: 'Fatema Begum', bn: 'ফাতেমা বেগম' },
          role: { en: 'Member', bn: 'সদস্য' },
          quote: { en: 'The assistive devices and health support from SPUS have made me independent and confident.', bn: 'এই সংস্থা থেকে পাওয়া সহায়ক উপকরণ ও স্বাস্থ্যসেবা আমাকে স্বাবলম্বী ও আত্মবিশ্বাসী করে তুলেছে।' },
          image: 'https://i.pravatar.cc/150?u=fatema'
        }
      ]
    },
    partners: {
      tag: { en: "Our Trusted Partners", bn: "আমাদের বিশ্বস্ত সহযোগী" }
    },
    join: {
      volunteer: {
        title: { en: "Become a Volunteer", bn: "স্বেচ্ছাসেবী হিসেবে যোগ দিন" },
        desc: { en: "Join our community of passionate volunteers and help us create a more inclusive world.", bn: "মানবসেবায় নিজেকে নিয়োজিত করতে আমাদের স্বেচ্ছাসেবী দলে যোগ দিন এবং বৈষম্যহীন সমাজ গড়তে ভূমিকা রাখুন।" }
      },
      partner: {
        title: { en: "Partner With Us", bn: "অংশীদার হিসেবে যুক্ত হোন" },
        desc: { en: "Collaborate with us to scale our impact and reach more people in need.", bn: "আমাদের সাথে যৌথভাবে কাজ করে আরও বেশি মানুষের দোরগোড়ায় সেবা পৌঁছে দিন।" }
      }
    },
    cta: {
      title: { en: "Ready to Make a Real Difference?", bn: "আপনি কি প্রকৃত পরিবর্তনে অংশ নিতে চান?" },
      desc: { en: "Your contribution helps us provide education, healthcare, and dignity to persons with disabilities.", bn: "আপনার ক্ষুদ্র সাহায্য একজন প্রতিবন্ধী ব্যক্তির শিক্ষা, চিকিৎসা ও মর্যাদাপূর্ণ জীবন নিশ্চিত করতে পারে।" }
    },
    newsletter: {
      title: { en: "Stay Informed", bn: "সাথেই থাকুন" },
      desc: { en: "Subscribe to our newsletter for the latest updates and impact stories.", bn: "আমাদের কার্যক্রমের সর্বশেষ সংবাদ ও সফলতার গল্প জানতে নিউজলেটারে সাবস্ক্রাইব করুন।" },
      placeholder: { en: "Your email address", bn: "আপনার ইমেইল ঠিকানা" },
      button: { en: "Subscribe", bn: "সাবস্ক্রাইব" }
    }
  },
  about: {
    page: {
      title: { en: "About SPUS", bn: "আমাদের সম্পর্কে" },
      subtitle: { en: "A journey of compassion, resilience, and empowerment since 2013.", bn: "২০১৩ সাল থেকে মমতা ও সহমর্মিতার সাথে স্বাবলম্বী করার এক নিরন্তর পথচলা।" }
    },
    legacy: {
      tag: { en: "Our Legacy", bn: "আমাদের ঐতিহ্য" },
      title: { en: "Empowering Lives Since 2013", bn: "২০১৩ থেকে সামর্থ্যের পথে" },
      description: { en: "Satarkul Protibondhi Unnayan Songstha (SPUS) emerged from a collective vision to ensure the rights of persons with disabilities in family, society, and state.", bn: "পরিবার, সমাজ ও রাষ্ট্রে প্রতিবন্ধী মানুষের ন্যায্য অধিকার নিশ্চিত করার লক্ষ্যে সাতারকুল প্রতিবন্ধী উন্নয়ন সংস্থা (SPUS)-এর পথচলা শুরু।" },
      type: { en: "Type", bn: "প্রতিষ্ঠানের ধরন" },
      typeVal: { en: "Non-Profit NGO", bn: "অলাভজনক এনজিও" },
      regNo: { en: "Reg No", bn: "নিবন্ধন নম্বর" },
      regNoVal: "Dha-09437",
      yearsService: { en: "Years of dedicated service to the community.", bn: "এক দশকেরও বেশি সময় ধরে মানুষের সেবায় নিবেদিত।" },
      yearsServiceVal: "10+",
      heroAlt: { en: "Education Community photo", bn: "শিক্ষা ও উন্নয়ন কার্যক্রম" }
    },
    mission: {
      title: { en: "Our Mission", bn: "আমাদের লক্ষ্য" },
      text: { en: "To ensure the rights and dignity of every person with a disability in family, society, and state.", bn: "পরিবার, সমাজ ও রাষ্ট্রে প্রতিটি প্রতিবন্ধী ব্যক্তির মানবিক মর্যাদা ও নাগরিক অধিকার সুপ্রতিষ্ঠিত করা।" }
    },
    vision: {
      title: { en: "Our Vision", bn: "আমাদের স্বপ্ন" },
      text: { en: "A society where disability is not a barrier to success and every individual can reach their full potential.", bn: "এমন এক সমাজ যেখানে শারীরিক সীমাবদ্ধতা সফলতার পথে বাধা হবে না এবং প্রতিটি মানুষ তার পূর্ণ সামর্থ্য প্রকাশের সুযোগ পাবে।" }
    },
    philosophy: {
      title: { en: "Our Philosophy of Change to a new dimention", bn: "পরিবর্তনের নতুন দিগন্ত" },
      subtitle: { en: "We believe in a holistic and selective approach to social transformation, focusing on four core pillars.", bn: "আমরা চারটি মূল স্তম্ভের ওপর ভিত্তি করে সামাজিক পরিবর্তনের একটি পূর্ণাঙ্গ ও সমন্বিত পদ্ধতিতে বিশ্বাস করি।" },
      list: [
        { id: 'education', title: { en: 'Education', bn: 'শিক্ষা' }, desc: { en: 'Empowering through knowledge and skill development.', bn: 'জ্ঞান ও কারিগরি শিক্ষার মাধ্যমে দক্ষ মানবসম্পদ গড়ে তোলা।' } },
        { id: 'awareness', title: { en: 'Awareness', bn: 'সচেতনতা' }, desc: { en: 'Breaking social stigmas and promoting inclusion.', bn: 'সামাজিক কুসংস্কার দূর করে অন্তর্ভুক্তিমূলক সমাজ গঠন।' } },
        { id: 'rights', title: { en: 'Rights & Justice', bn: 'অধিকার ও ন্যায়বিচার' }, desc: { en: 'Advocating for legal rights and social equity.', bn: 'আইনি অধিকার নিশ্চিতকরণ ও সামাজিক সমতা প্রতিষ্ঠা।' } },
        { id: 'empowerment', title: { en: 'Empowerment', bn: 'ক্ষমতায়ন' }, desc: { en: 'Creating opportunities for self-reliance.', bn: 'স্বনির্ভর হয়ে সম্মানের সাথে বেঁচে থাকার সুযোগ তৈরি।' } },
      ]
    },
    timeline: {
      title: { en: "Our Growth Timeline", bn: "সাফল্যের পথরেখা" },
      subtitle: { en: "Tracing our steps from a small initiative to a recognized organization.", bn: "একটি ক্ষুদ্র উদ্যোগ থেকে একটি সুপ্রতিষ্ঠিত সংস্থায় রূপান্তরের ইতিহাস।" },
      list: [
        { year: '2013', title: { en: 'Foundation', bn: 'যাত্রা শুরু' }, desc: { en: 'SPUS was founded on 28th December to serve Badda, Bhatara, and Satarkul.', bn: '২৮শে ডিসেম্বর বাড্ডা, ভাটারা ও সাতারকুল এলাকার মানুষের সেবায় SPUS প্রতিষ্ঠিত হয়।' } },
        { year: '2017', title: { en: 'Registration', bn: 'নিবন্ধন' }, desc: { en: 'Officially registered with the Department of Social Welfare, Dhaka.', bn: 'সমাজসেবা অধিদপ্তর, ঢাকা থেকে আমরা আনুষ্ঠানিকভাবে নিবন্ধিত হই।' } },
        { year: 'Today', title: { en: 'Growing Impact', bn: 'বর্তমান সাফল্য' }, desc: { en: 'Serving thousands of disabled individuals across our work areas.', bn: 'বর্তমানে আমরা আমাদের বিশাল কর্মক্ষেত্রে হাজার হাজার প্রতিবন্ধী মানুষের সেবায় নিয়োজিত।' } },
      ]
    },
    whoWeServe: {
      title: { en: "Who We Serve", bn: "আমরা যাদের পাশে আছি" },
      description: { en: "Our primary focus is the empowerment of persons with disabilities, with a special emphasis on women and children who face double marginalization.", bn: "আমাদের মূল লক্ষ্য প্রতিবন্ধী ব্যক্তিদের ক্ষমতায়ন, বিশেষ করে অবহেলিত নারী ও শিশুদের অধিকার রক্ষায় আমরা আপোষহীন।" },
      list: [
        { en: 'Ultra poor disabled women and men', bn: 'অত্যন্ত দরিদ্র প্রতিবন্ধী নারী ও পুরুষ' },
        { en: 'Disabled and non-disabled children', bn: 'প্রতিবন্ধী ও সাধারণ সকল শিশু' },
        { en: 'Disabled adolescents & elderly', bn: 'প্রতিবন্ধী কিশোর-কিশোরী ও প্রবীণ ব্যক্তিবর্গ' },
      ]
    },
    transparency: {
      title: { en: 'Transparency & Resources', bn: 'স্বচ্ছতা ও তথ্যাবলী' },
      subtitle: { en: 'Access our official documents and annual reports.', bn: 'আমাদের দাপ্তরিক নথিপত্র ও বার্ষিক প্রতিবেদনগুলো এখান থেকে দেখুন।' },
      viewAll: { en: 'View All Resources', bn: 'সকল তথ্য দেখুন' },
      fileType: { en: 'PDF', bn: 'পিডিএফ' },
      resources: [
        { title: { en: 'Organization Profile', bn: 'সংস্থার প্রোফাইল' }, file: 'spus-organization-profile.pdf', size: '2.4 MB' },
        { title: { en: 'Annual Report 2023', bn: 'বার্ষিক প্রতিবেদন ২০২৩' }, file: 'spus-annual-report-2023.pdf', size: '3.1 MB' },
      ]
    },
    membership: {
      page: {
        title: { en: 'Join Our Community', bn: 'আমাদের পরিবারের অংশ হোন' },
        subtitle: { en: 'Become a member and contribute to a more inclusive society.', bn: 'সদস্য হিসেবে যুক্ত হয়ে বৈষম্যহীন সমাজ গড়তে ভূমিকা রাখুন।' },
      },
      stats: [
        { label: { en: 'Total Members', bn: 'মোট সদস্য' }, value: '705', icon: 'Users', color: 'text-primary', bg: 'bg-primary/10' },
        { label: { en: 'Men', bn: 'পুরুষ' }, value: '291', icon: 'User', color: 'text-secondary', bg: 'bg-secondary/10' },
        { label: { en: 'Women', bn: 'নারী' }, value: '294', icon: 'User', color: 'text-accent', bg: 'bg-accent/10' },
        { label: { en: 'Children', bn: 'শিশু' }, value: '120', icon: 'Baby', color: 'text-primary', bg: 'bg-primary/10' },
      ],
      benefits: {
        title: { en: 'Why Join Us?', bn: 'কেন সদস্য হবেন?' },
        subtitle: { en: 'Membership offers unique opportunities for growth and contribution.', bn: 'সদস্যপদ আপনাকে ব্যক্তিগত উন্নয়ন ও জনসেবার অনন্য সুযোগ এনে দেয়।' },
        list: [
          { title: { en: 'Voice & Representation', bn: 'অধিকার ও প্রতিনিধিত্ব' }, desc: { en: 'Participate in decision-making processes and represent the disabled community.', bn: 'সিদ্ধান্ত গ্রহণ প্রক্রিয়ায় সরাসরি অংশ নিন এবং প্রতিবন্ধী সমাজের প্রতিনিধিত্ব করুন।' }, icon: 'Users', color: 'text-primary', bg: 'bg-primary/10' },
          { title: { en: 'Skill Development', bn: 'দক্ষতা বৃদ্ধি' }, desc: { en: 'Access to exclusive training programs, workshops, and vocational courses.', bn: 'বিশেষ প্রশিক্ষণ ও বৃত্তিমূলক কোর্সের মাধ্যমে নিজেকে দক্ষ করে তোলার সুযোগ।' }, icon: 'Star', color: 'text-secondary', bg: 'bg-secondary/10' },
          { title: { en: 'Community Support', bn: 'পারস্পরিক সহযোগিতা' }, desc: { en: 'Join a network of peers and professionals dedicated to mutual empowerment.', bn: 'একই লক্ষ্যের মানুষের সাথে মিলে একটি শক্তিশালী নেটওয়ার্ক গড়ে তুলুন।' }, icon: 'Heart', color: 'text-accent', bg: 'bg-accent/10' },
        ]
      },
      steps: {
        title: { en: 'How to Join', bn: 'সদস্য হওয়ার প্রক্রিয়া' },
        subtitle: { en: 'Follow these simple steps to become a registered member.', bn: 'নিবন্ধিত সদস্য হতে এই সহজ ধাপগুলো অনুসরণ করুন।' },
        list: [
          { title: { en: 'Eligibility Check', bn: 'যোগ্যতা যাচাই' }, desc: { en: 'Ensure you meet the criteria for membership as a person with disability.', bn: 'প্রতিবন্ধী ব্যক্তি হিসেবে সদস্যপদ পাওয়ার শর্তাবলি সম্পর্কে নিশ্চিত হোন।' }, icon: 'ClipboardCheck' },
          { title: { en: 'Form Submission', bn: 'ফরম জমা' }, desc: { en: 'Fill out the membership application form available at our office.', bn: 'আমাদের কার্যালয়ে সংরক্ষিত আবেদনপত্রটি যথাযথভাবে পূরণ করে জমা দিন।' }, icon: 'UserPlus' },
          { title: { en: 'Verification', bn: 'যাচাইকরণ' }, desc: { en: 'Our committee will review and verify your application details.', bn: 'আমাদের কার্যনির্বাহী কমিটি আপনার আবেদনটি পর্যালোচনা করে অনুমোদন দেবেন।' }, icon: 'UserCheck' },
        ]
      },
      childrenBreakdown: {
        title: { en: 'Children Breakdown', bn: 'শিশুদের পরিসংখ্যান' },
        boysValue: '74',
        girlsValue: '46'
      },
      cta: {
        title: { en: 'Ready to Make an Impact?', bn: 'আপনি কি পরিবর্তনের অংশ হতে চান?' },
        desc: { en: 'Join us today and help us build a world where everyone has equal opportunities.', bn: 'আজই আমাদের সাথে যুক্ত হোন এবং সবার জন্য সমান সুযোগের পৃথিবী গড়তে সাহায্য করুন।' }
      }
    },
    workArea: {
      page: {
        title: { en: 'Our Work Area', bn: 'আমাদের কর্ম এলাকা' },
        subtitle: { en: 'Expanding our reach to create an inclusive Dhaka.', bn: 'একটি অন্তর্ভুক্তিমূলক ঢাকা গড়তে আমরা আমাদের সেবার পরিধি বাড়িয়ে চলেছি।' },
      },
      stats: [
        { label: { en: 'Wards Covered', bn: 'অন্তর্ভুক্ত ওয়ার্ড' }, value: '11', icon: 'MapPin', color: 'text-primary', bg: 'bg-primary/10', details: '২০, ২১, ২২, ২৩, ২৪, ৩৭, ৩৮, ৩৯, ৪০, ৪১, ৪২' },
        { label: { en: 'Persons Served', bn: 'সেবাপ্রাপ্ত ব্যক্তি' }, value: '690+', icon: 'Users', color: 'text-secondary', bg: 'bg-secondary/10', details: { en: 'Empowering 690+ persons with disabilities.', bn: '৬৯০ জনেরও বেশি প্রতিবন্ধী ব্যক্তিকে ক্ষমতায়ন করা হয়েছে।' } },
        { label: { en: 'Active Thanas', bn: 'সক্রিয় থানা' }, value: '07', icon: 'Globe', color: 'text-accent', bg: 'bg-accent/10', details: { en: 'Badda, Bhatara, Rampura, Khilgaon, Tejgaon, Mirpur, Dokkhinkhan.', bn: 'বাড্ডা, ভাটারা, রামপুরা, খিলগাঁও, তেজগাঁও, মিরপুর ও দক্ষিণখান।' } },
      ],
      locationFocus: {
        tag: { en: 'Location Focus', bn: 'কর্মক্ষেত্রের কেন্দ্রবিন্দু' },
        title: { en: 'Strategic Reach Across Dhaka', bn: 'ঢাকা জুড়ে আমাদের সেবার বিস্তার' },
        description: { en: 'We are actively working in several wards of Badda Thana and surrounding areas to support the local disabled community through grassroots initiatives.', bn: 'বাড্ডা থানাসহ পার্শ্ববর্তী এলাকার বিভিন্ন ওয়ার্ডে আমরা তৃণমূল পর্যায়ে প্রতিবন্ধী মানুষের উন্নয়নে কাজ করছি।' },
        list: [
          { en: 'Badda Thana', bn: 'বাড্ডা থানা' },
          { en: 'Bhatara Thana', bn: 'ভাটারা থানা' },
          { en: 'Rampura Thana', bn: 'রামপুরা থানা' },
          { en: 'Khilgaon Thana', bn: 'খিলগাঁও থানা' },
        ]
      },
      cta: {
        title: { en: 'Visit Our Administrative Office', bn: 'আমাদের প্রশাসনিক কার্যালয়' },
        desc: { en: 'Located in the heart of Satarkul, our office is open for consultations and community support.', bn: 'সাতারকুলের প্রাণকেন্দ্রে অবস্থিত আমাদের কার্যালয়ে আপনি পরামর্শ ও সহায়তার জন্য আমন্ত্রিত।' }
      }
    },
    support: {
      page: {
        title: { en: 'Support Our Mission', bn: 'আমাদের মিশনে পাশে থাকুন' },
        subtitle: { en: 'There are many ways to contribute to our cause. Choose the one that fits you best.', bn: 'আমাদের এই মহৎ উদ্দেশ্যে আপনি নানাভাবে শরিক হতে পারেন। আপনার পছন্দের উপায়টি বেছে নিন।' }
      },
      hero: {
        title: { en: 'Your Support Changes Lives', bn: 'আপনার সামান্য সহযোগিতা জীবন বদলে দেয়' },
        description: { en: 'Every contribution, whether big or small, helps us provide essential services and advocate for the rights of persons with disabilities.', bn: 'আপনার প্রতিটি অনুদান আমাদের সেবামূলক কাজকে আরও গতিশীল করে এবং প্রতিবন্ধী মানুষের অধিকার আদায়ে শক্তি জোগায়।' }
      },
      options: [
        {
          id: 'donate',
          title: { en: 'Donate Now', bn: 'সহযোগিতার হাত বাড়ান' },
          description: { en: 'Financial contributions go directly to our programs, providing education, health, and skill training.', bn: 'আপনার আর্থিক সাহায্য সরাসরি শিক্ষা, স্বাস্থ্য ও কারিগরি প্রশিক্ষণ কর্মসূচিতে ব্যয় করা হয়।' },
          icon: 'Heart',
          link: '/support/donate',
          color: 'text-primary',
          bg: 'bg-primary/10'
        },
        {
          id: 'volunteer',
          title: { en: 'Volunteer', bn: 'স্বেচ্ছাসেবী হোন' },
          description: { en: 'Share your time and skills to help us manage events, mentor youth, or support our admin team.', bn: 'আপনার সময় ও মেধা দিয়ে আমাদের বিভিন্ন আয়োজন ও প্রশিক্ষণে সহায়তা করুন।' },
          icon: 'Users',
          link: '/support/volunteer',
          color: 'text-secondary',
          bg: 'bg-secondary/10'
        },
        {
          id: 'partner',
          title: { en: 'Partner With Us', bn: 'অংশীদার হিসেবে যুক্ত হোন' },
          description: { en: 'Organizations can collaborate with us through CSR initiatives, joint programs, or sponsorships.', bn: 'বিভিন্ন প্রতিষ্ঠান CSR কার্যক্রম বা যৌথ কর্মসূচির মাধ্যমে আমাদের উন্নয়ন সহযোগী হতে পারে।' },
          icon: 'Handshake',
          link: '/support/partner',
          color: 'text-accent',
          bg: 'bg-accent/10'
        },
        {
          id: 'donors',
          title: { en: 'Our Donors', bn: 'সম্মানিত দাতাগণ' },
          description: { en: 'See the organizations and individuals who make our work possible through their generous support.', bn: 'যাদের উদার সহযোগিতায় আমাদের এই মানবিক পথচলা অব্যাহত রয়েছে, তাদের সম্পর্কে জানুন।' },
          icon: 'Award',
          link: '/support/donors',
          color: 'text-primary',
          bg: 'bg-primary/10'
        }
      ],
      impact: {
        title: { en: 'The Impact of Your Support', bn: 'আপনার সহযোগিতার সুফল' },
        subtitle: { en: 'See how your contributions are making a real difference in the community.', bn: 'আপনার অনুদান কীভাবে অবহেলিত মানুষের জীবনে ইতিবাচক পরিবর্তন আনছে তা দেখুন।' },
        stats: [
          { label: { en: 'Lives Impacted', bn: 'উপকারভোগী মানুষ' }, value: '5,000+', icon: 'UserCheck' },
          { label: { en: 'Programs Funded', bn: 'সফল কর্মসূচি' }, value: '15+', icon: 'Target' },
          { label: { en: 'Volunteers Joined', bn: 'নিবেদিত স্বেচ্ছাসেবী' }, value: '200+', icon: 'Users' }
        ]
      },
      donate: {
        page: {
          title: { en: 'Support Our Cause', bn: 'মানবসেবায় এগিয়ে আসুন' },
          subtitle: { en: 'Your contribution empowers people with disabilities and builds a more inclusive society.', bn: 'আপনার সাহায্য প্রতিবন্ধী ব্যক্তিদের স্বাবলম্বী করতে এবং একটি বৈষম্যহীন সমাজ গড়তে সহায়ক হবে।' }
        },
        form: {
          title: { en: 'Make a Donation', bn: 'অনুদান প্রদান করুন' },
          description: { en: 'Choose an amount to contribute. Every bit helps us reach our goals.', bn: 'আপনার সামর্থ্য অনুযায়ী অনুদান প্রদান করুন। প্রতিটি ক্ষুদ্র সাহায্যই আমাদের লক্ষ্যের পথে অনেক বড় ভূমিকা রাখে।' }
        },
        impactLevels: [
          { amount: 500, label: { en: 'Basic Support', bn: 'প্রাথমিক সহায়তা' }, impact: { en: 'Provides educational materials for 1 child for a month.', bn: '১টি শিশুর এক মাসের প্রয়োজনীয় শিক্ষা উপকরণের খরচ।' } },
          { amount: 1000, label: { en: 'Health & Nutrition', bn: 'স্বাস্থ্য ও পুষ্টি' }, impact: { en: 'Covers essential health check-ups and nutrition for 1 child.', bn: '১টি শিশুর স্বাস্থ্য পরীক্ষা ও পুষ্টিকর খাবারের ব্যবস্থা।' } },
          { amount: 2500, label: { en: 'Skill Training', bn: 'দক্ষতা প্রশিক্ষণ' }, impact: { en: 'Supports skill training for 1 person with disability.', bn: '১জন প্রতিবন্ধী ব্যক্তিকে কর্মমুখী প্রশিক্ষণের মাধ্যমে দক্ষ করে তোলা।' } },
          { amount: 5000, label: { en: 'Community Impact', bn: 'সামাজিক প্রভাব' }, impact: { en: 'Funds a community awareness workshop for 20+ people.', bn: '২০ জনেরও বেশি মানুষের জন্য একটি সচেতনতামূলক কর্মশালার আয়োজন।' } },
        ],
        paymentMethods: [
          { name: 'bKash', number: '01743214468', type: { en: 'Personal', bn: 'ব্যক্তিগত' } },
          { name: 'Nagad', number: '01743214468', type: { en: 'Personal', bn: 'ব্যক্তিগত' } },
          { name: 'Rocket', number: '01743214468', type: { en: 'Personal', bn: 'ব্যক্তিগত' } },
        ],
        transparency: {
          title: { en: 'Financial Transparency', bn: 'আর্থিক স্বচ্ছতা' },
          description: { en: 'We believe in full accountability. Here is how we allocate our resources to create impact.', bn: 'আমরা পূর্ণ জবাবদিহিতায় বিশ্বাসী। অনুদানের প্রতিটি অর্থ যেভাবে মানুষের কল্যাণে ব্যবহৃত হয়।' },
          allocation: [
            { label: { en: 'Education & Schooling', bn: 'শিক্ষা ও বিদ্যালয় পরিচালনা' }, value: 45, color: 'bg-primary' },
            { label: { en: 'Health & Medical Support', bn: 'স্বাস্থ্য ও চিকিৎসা সহায়তা' }, value: 25, color: 'bg-secondary' },
            { label: { en: 'Skill Training & Loans', bn: 'দক্ষতা প্রশিক্ষণ ও ক্ষুদ্রঋণ' }, value: 20, color: 'bg-accent' },
            { label: { en: 'Administration & Operations', bn: 'প্রশাসনিক ও পরিচালনা ব্যয়' }, value: 10, color: 'bg-muted' },
          ]
        }
      },
      volunteer: {
        page: {
          title: { en: 'Join Our Volunteer Team', bn: 'আমাদের স্বেচ্ছাসেবী দলে যোগ দিন' },
          subtitle: { en: 'Your time and skills can make a significant difference in the lives of persons with disabilities.', bn: 'আপনার সময় ও মেধা প্রতিবন্ধী ব্যক্তিদের জীবনে এক বিশাল পরিবর্তন আনতে পারে।' }
        },
        roles: [
          { title: { en: 'Event Support', bn: 'আয়োজনে সহায়তা' }, desc: { en: 'Help us organize and manage our community events and awareness campaigns.', bn: 'আমাদের বিভিন্ন সামাজিক অনুষ্ঠান ও সচেতনতামূলক প্রচারণা আয়োজনে সাহায্য করুন।' }, icon: 'Calendar' },
          { title: { en: 'Skill Mentoring', bn: 'দক্ষতা উন্নয়ন' }, desc: { en: 'Share your professional skills to mentor persons with disabilities in vocational training.', bn: 'আপনার পেশাগত দক্ষতা দিয়ে প্রতিবন্ধী ব্যক্তিদের স্বাবলম্বী হতে প্রশিক্ষণ দিন।' }, icon: 'BookOpen' },
          { title: { en: 'Office Support', bn: 'দাপ্তরিক কাজ' }, desc: { en: 'Assist our administrative team with data entry, documentation, and communication.', bn: 'আমাদের প্রশাসনিক কাজে তথ্য সংগ্রহ ও যোগাযোগের ক্ষেত্রে সহায়তা করুন।' }, icon: 'FileText' },
        ]
      },
      partner: {
        page: {
          title: { en: 'Strategic Partnerships', bn: 'কৌশলগত অংশীদারিত্ব' },
          subtitle: { en: 'We collaborate with organizations to drive sustainable social inclusion.', bn: 'টেকসই সামাজিক উন্নয়ন নিশ্চিত করতে আমরা বিভিন্ন প্রতিষ্ঠানের সাথে যৌথভাবে কাজ করি।' }
        },
        types: [
          { title: { en: 'Corporate CSR', bn: 'কর্পোরেট CSR' }, desc: { en: 'Align your corporate social responsibility goals with our impactful programs.', bn: 'আপনার প্রতিষ্ঠানের সামাজিক দায়বদ্ধতা আমাদের মানবিক কার্যক্রমের সাথে যুক্ত করুন।' }, icon: 'Building2' },
          { title: { en: 'Institutional Support', bn: 'প্রাতিষ্ঠানিক সহায়তা' }, desc: { en: 'Joint initiatives with NGOs, government bodies, and international agencies.', bn: 'সরকারি সংস্থা এবং আন্তর্জাতিক উন্নয়ন প্রতিষ্ঠানের সাথে যৌথ উদ্যোগ।' }, icon: 'Globe' },
          { title: { en: 'Community Partners', bn: 'কমিউনিটি অংশীদার' }, desc: { en: 'Local businesses and groups supporting grassroots development.', bn: 'তৃণমূলের উন্নয়নে স্থানীয় ব্যবসায়ী ও সামাজিক সংগঠনসমূহের অংশগ্রহণ।' }, icon: 'Users' },
        ]
      },
      donors: {
        page: {
          title: { en: 'Our Recent Donors', bn: 'আমাদের সম্মানিত দাতাগণ' },
          subtitle: { en: 'We are deeply grateful to the organizations that support our mission to empower persons with disabilities.', bn: 'প্রতিবন্ধী ব্যক্তিদের স্বাবলম্বী করতে যারা আমাদের পাশে দাঁড়িয়েছেন, তাদের প্রতি আমরা চিরকৃতজ্ঞ।' }
        }
      }
    },
    visionMission: {
      page: {
        title: { en: 'Vision & Mission', bn: 'লক্ষ্য ও উদ্দেশ্য' },
        subtitle: { en: 'Our guiding principles for creating an inclusive society.', bn: 'বৈষম্যহীন সমাজ গঠনের পথে আমাদের পথপ্রদর্শক নীতিসমূহ।' },
      },
      vision: {
        title: { en: 'Our Vision', bn: 'আমাদের স্বপ্ন' },
        text: { en: 'A non-discriminatory society where people with disabilities enjoy their rights and responsibilities and they are fully capable of participating spontaneously at every level of society.', bn: 'এমন একটি বৈষম্যহীন সমাজ যেখানে প্রতিবন্ধী ব্যক্তিরা তাদের অধিকার ও মর্যাদা ভোগ করবে এবং সমাজের প্রতিটি স্তরে স্বতঃস্ফূর্তভাবে অংশ নেবে।' }
      },
      mission: {
        title: { en: 'Our Mission', bn: 'আমাদের উদ্দেশ্য' },
        text: { en: 'The main goal of the organization is to create a barrier-free environment and rights-based integrated society for the very poor disabled men, women and children who are backward in all fields.', bn: 'সমাজের সকল ক্ষেত্রে পিছিয়ে পড়া অতি দরিদ্র প্রতিবন্ধী মানুষের জন্য একটি বাধামুক্ত পরিবেশ এবং অধিকারভিত্তিক সমন্বিত সমাজ গড়ে তোলা।' }
      },
      values: {
        title: { en: 'Our Core Values', bn: 'আমাদের মূল্যবোধ' },
        desc: { en: 'These values define our culture and guide our actions as we work towards social justice and inclusion.', bn: 'এই আদর্শগুলোই আমাদের প্রতিটি কাজের অনুপ্রেরণা এবং সামাজিক ন্যায়বিচার ও অন্তর্ভুক্তি নিশ্চিত করার গাইড।' },
        list: [
          { en: 'Inclusivity', bn: 'সকলের অন্তর্ভুক্তি' },
          { en: 'Integrity', bn: 'সততা ও নিষ্ঠা' },
          { en: 'Empowerment', bn: 'ক্ষমতায়ন' },
          { en: 'Compassion', bn: 'সহমর্মিতা' },
        ]
      },
      join: {
        title: { en: 'Join Us in Our Mission', bn: 'আমাদের মিশনে যোগ দিন' },
        volunteer: { en: 'Become a Volunteer', bn: 'স্বেচ্ছাসেবী হোন' },
        donate: { en: 'Donate Now', bn: 'অনুদান দিন' }
      }
    },
    governingBody: {
      page: {
        title: { en: 'Governing Body', bn: 'পরিচালনা পর্ষদ' },
        subtitle: { en: 'Our organization is 100% led by persons with disabilities, ensuring authentic representation.', bn: 'আমাদের সংস্থাটি শতভাগ প্রতিবন্ধী ব্যক্তিদের দ্বারা পরিচালিত, যা সঠিক প্রতিনিধিত্ব নিশ্চিত করে।' },
      },
      intro: {
        tag: { en: 'Authentic Leadership', bn: 'যথাযথ নেতৃত্ব' },
        title: { en: 'Led by Lived Experience', bn: 'অভিজ্ঞতার আলোকে নেতৃত্ব' },
        description: { en: 'The governing body of SPUS consists of dedicated individuals who have lived experience with various disabilities. This unique perspective allows us to design programs that truly meet the needs of our community.', bn: 'SPUS-এর পরিচালনা পর্ষদ এমন একদল সাহসী মানুষকে নিয়ে গঠিত যারা নিজেরা প্রতিবন্ধকতার মুখোমুখি হয়েও অদম্য। তাদের বাস্তব অভিজ্ঞতাই আমাদের কার্যক্রমকে আরও সার্থক করে তোলে।' },
      },
      focal: {
        title: { en: 'Focal Person', bn: 'প্রধান যোগাযোগকারী' },
        role: { en: 'General Secretary', bn: 'সাধারণ সম্পাদক' },
        name: { en: 'Ujjala Banik', bn: 'উজ্জলা বনিক' },
      },
      members: {
        title: { en: 'Executive Committee Members', bn: 'কার্যনির্বাহী কমিটির সদস্যবৃন্দ' },
        subtitle: { en: 'A team of 100% disabled leaders driving social change.', bn: 'প্রতিবন্ধী নেতাদের এক শক্তিশালী দল, যারা নিরন্তর সামাজিক পরিবর্তনে কাজ করছেন।' },
        list: [
          { name: { en: 'Nazma Ara Begum', bn: 'নাজমা আরা বেগম' }, role: { en: 'President', bn: 'সভাপতি' }, disability: { en: 'Visual Disability', bn: 'দৃষ্টি প্রতিবন্ধী' }, image: 'https://picsum.photos/seed/member1/400/500' },
          { name: { en: 'Ria Arefine', bn: 'রিয়া আরেফিন' }, role: { en: 'Vice-President', bn: 'সহ-সভাপতি' }, disability: { en: 'Speech and Hearing', bn: 'শ্রবণ ও বাক প্রতিবন্ধী' }, image: 'https://picsum.photos/seed/member2/400/500' },
          { name: { en: 'Ujjala Banik', bn: 'উজ্জলা বনিক' }, role: { en: 'General Secretary', bn: 'সাধারণ সম্পাদক' }, disability: { en: 'Visual Disability', bn: 'দৃষ্টি প্রতিবন্ধী' }, image: 'https://picsum.photos/seed/member3/400/500' },
          { name: { en: 'Lucky Akter', bn: 'লাকি আক্তার' }, role: { en: 'Treasurer', bn: 'কোষাধ্যক্ষ' }, disability: { en: 'Physical Disability', bn: 'শারীরিক প্রতিবন্ধী' }, image: 'https://picsum.photos/seed/member4/400/500' },
          { name: { en: 'Shirin Akter', bn: 'শিরিন আক্তার' }, role: { en: 'Executive Member', bn: 'নির্বাহী সদস্য' }, disability: { en: 'Visual Disability', bn: 'দৃষ্টি প্রতিবন্ধী' }, image: 'https://picsum.photos/seed/member5/400/500' },
          { name: { en: 'Nazma Akter', bn: 'নাজমা আক্তার' }, role: { en: 'Executive Member', bn: 'নির্বাহী সদস্য' }, disability: { en: 'Physical Disability', bn: 'শারীরিক প্রতিবন্ধী' }, image: 'https://picsum.photos/seed/member6/400/500' },
          { name: { en: 'Shanaj', bn: 'শানাজ' }, role: { en: 'Executive Member', bn: 'নির্বাহী সদস্য' }, disability: { en: 'Physical Disability', bn: 'শারীরিক প্রতিবন্ধী' }, image: 'https://picsum.photos/seed/member7/400/500' },
        ]
      },
      governance: {
        title: { en: 'Governance & Transparency', bn: 'সুশাসন ও স্বচ্ছতা' },
        subtitle: { en: 'We maintain strict governance protocols to ensure accountability and effective decision-making.', bn: 'যথাযথ সিদ্ধান্ত গ্রহণ ও জবাবদিহিতা নিশ্চিত করতে আমরা কঠোর সাংগঠনিক নিয়ম মেনে চলি।' },
        ecm: {
          title: { en: 'Executive Committee Meetings', bn: 'কার্যনির্বাহী কমিটির সভা' },
          desc: { en: 'Organized every 3 months as per Article 20 of the Constitution of SPUS. Decisions include committee approval, legal assistance, and action planning.', bn: 'গঠনতন্ত্রের ২০ ধারা অনুযায়ী প্রতি ৩ মাস অন্তর এই সভা অনুষ্ঠিত হয়, যেখানে প্রশাসনিক ও ভবিষ্যৎ কর্মপরিকল্পনা গৃহীত হয়।' },
          tag: { en: '4 Meetings per Year', bn: 'বছরে ৪টি সভা' }
        },
        agm: {
          title: { en: 'Annual General Meeting', bn: 'বার্ষিক সাধারণ সভা' },
          desc: { en: 'Held annually to review income-expenditure, appoint auditors, and approve the annual work plan and budget.', bn: 'প্রতি বছর আয়-ব্যয় পর্যালোচনা, অডিটর নিয়োগ ও বার্ষিক বাজেট অনুমোদনের জন্য এই সভা আয়োজিত হয়।' },
          tag: { en: 'Inclusive Participation', bn: 'সকলের অংশগ্রহণ' }
        }
      }
    },
    legalStatus: {
      page: {
        title: { en: 'Legal Status & Compliance', bn: 'আইনি মর্যাদা ও নীতিমালা' },
        subtitle: { en: 'Transparency and accountability are the foundations of our organization.', bn: 'স্বচ্ছতা এবং জবাবদিহিতা আমাদের সংগঠনের মূল ভিত্তি।' },
      },
      intro: {
        title: { en: 'Fully Registered & Governed', bn: 'নিবন্ধিত ও স্বীকৃত প্রতিষ্ঠান' },
        description: { en: 'BPKS Satarkul is a non-profit, non-political, and non-governmental organization registered under the laws of Bangladesh. We maintain strict compliance with all regulatory bodies.', bn: 'সাতারকুল প্রতিবন্ধী উন্নয়ন সংস্থা একটি অলাভজনক ও অরাজনৈতিক স্বেচ্ছাসেবী সংস্থা, যা বাংলাদেশ সরকারের সকল আইনি নিয়ম মেনে পরিচালিত হয়।' },
        features: [
          { en: 'Regular Audit Compliance', bn: 'নিয়মিত অডিট সম্পন্ন' },
          { en: 'Transparent Financial Reporting', bn: 'স্বচ্ছ আর্থিক প্রতিবেদন' },
          { en: 'Ethical Governance Standards', bn: 'নৈতিক প্রশাসনিক মানদণ্ড' }
        ]
      },
      documents: {
        title: { en: 'Official Documents', bn: 'অফিসিয়াল নথিপত্র' },
        subtitle: { en: 'Download our registration certificates and legal papers.', bn: 'আমাদের নিবন্ধন সনদ এবং প্রয়োজনীয় আইনি কাগজপত্র এখান থেকে সংগ্রহ করুন।' },
      },
      registrations: [
        {
          title: { en: 'Social Welfare Registration', bn: 'সমাজসেবা নিবন্ধন' },
          number: '(Dha)-09437',
          date: { en: '14th June 2017', bn: '১৪ জুন ২০১৭' },
          authority: { en: 'Department of Social Welfare, Dhaka', bn: 'সমাজসেবা অধিদপ্তর, ঢাকা' },
          type: 'social'
        },
        {
          title: { en: 'NGO Affairs Bureau', bn: 'এনজিও বিষয়ক ব্যুরো' },
          number: '৩১৬৭',
          date: { en: '04/07/2018', bn: '০৪ জুলাই ২০১৮' },
          authority: { en: 'NGO Affairs Bureau, Prime Minister\'s Office', bn: 'এনজিও বিষয়ক ব্যুরো, প্রধানমন্ত্রীর কার্যালয়' },
          type: 'ngo'
        },
        {
          title: { en: 'Joint Stock Registration', bn: 'যৌথ মূলধন নিবন্ধন' },
          number: 'S-12242/2015',
          date: { en: '14/07/2015', bn: '১৪ জুলাই ২০১৫' },
          authority: { en: 'Registrar of Joint Stock Companies & Firms', bn: 'যৌথ মূলধন কোম্পানি ও ফার্মসমূহের পরিদপ্তর' },
          type: 'joint'
        }
      ]
    },
  },
  programs: {
    page: {
      title: { en: 'Our Programs', bn: 'আমাদের কর্মসূচি' },
      subtitle: { en: 'Discover how we support and empower persons with disabilities through various initiatives.', bn: 'বিভিন্ন উদ্যোগের মাধ্যমে আমরা কীভাবে প্রতিবন্ধী ব্যক্তিদের স্বাবলম্বী করছি, তা জানুন।' },
    },
    learnMore: { en: 'Learn More', bn: 'আরও জানুন' },
    list: [
      {
        id: 'education',
        title: { en: 'Education Program', bn: 'শিক্ষা কার্যক্রম' },
        desc: { en: 'Quality education for children with disabilities at Satarkul Diversity Disabled School.', bn: 'সাতারকুল বৈচিত্র্য প্রতিবন্ধী বিদ্যালয়ের মাধ্যমে বিশেষ শিশুদের মানসম্মত শিক্ষা নিশ্চিতকরণ।' }
      },
      {
        id: 'health',
        title: { en: 'Health Services', bn: 'স্বাস্থ্যসেবা কার্যক্রম' },
        desc: { en: 'Comprehensive health support and medical assistance for persons with disabilities.', bn: 'প্রতিবন্ধী ব্যক্তিদের সুচিকিৎসা এবং প্রয়োজনীয় স্বাস্থ্য সহায়তা প্রদান।' }
      },
      {
        id: 'skill-development',
        title: { en: 'Skill Development', bn: 'দক্ষতা উন্নয়ন প্রশিক্ষণ' },
        desc: { en: 'Vocational training in handicrafts, tailoring, and art for economic empowerment.', bn: 'আর্থিক ক্ষমতায়নের জন্য হস্তশিল্প, সেলাই এবং বিভিন্ন বৃত্তিমূলক প্রশিক্ষণ।' }
      },
      {
        id: 'financial-support',
        title: { en: 'Financial Support', bn: 'আর্থিক সহায়তা কার্যক্রম' },
        desc: { en: 'Providing financial aid to ultra-poor disabled individuals and their families.', bn: 'অতি দরিদ্র প্রতিবন্ধী ব্যক্তি ও তাদের পরিবারকে নগদ আর্থিক সহায়তা প্রদান।' }
      },
      {
        id: 'assistive-devices',
        title: { en: 'Assistive Devices', bn: 'সহায়ক উপকরণ বিতরণ' },
        desc: { en: 'Distributing wheelchairs, crutches, and other assistive devices for mobility.', bn: 'চলাচলের সুবিধার জন্য হুইলচেয়ার, ক্রাচ ও অন্যান্য সহায়ক সামগ্রী বিতরণ।' }
      },
      {
        id: 'awareness',
        title: { en: 'Awareness Program', bn: 'সচেতনতামূলক কার্যক্রম' },
        desc: { en: 'Promoting disability rights and social inclusion through community awareness.', bn: 'প্রতিবন্ধী অধিকার এবং সামাজিক অন্তর্ভুক্তি বিষয়ে জনসচেতনতা বৃদ্ধি।' }
      },
      {
        id: 'social-support',
        title: { en: 'Social Support Services', bn: 'সামাজিক সহায়তা সেবা' },
        desc: { en: 'Empowering disabled individuals through documentation and legal assistance.', bn: 'আইনি সহায়তা ও প্রয়োজনীয় নথিপত্র প্রস্তুতের মাধ্যমে স্বাবলম্বী করে তোলা।' }
      },
      {
        id: 'special-programs',
        title: { en: 'Special Programs', bn: 'বিশেষ কার্যক্রম' },
        desc: { en: 'Innovative initiatives designed for specialized care and development.', bn: 'বিশেষ যত্ন এবং উন্নয়নের জন্য পরিকল্পিত আধুনিক ও উদ্ভাবনী উদ্যোগ।' }
      }
    ],
    details: {
      education: {
        title: { en: "Inclusive Education Program", bn: "অন্তর্ভুক্তিমূলক শিক্ষা কার্যক্রম" },
        subtitle: { en: "Providing quality education and specialized support for children with disabilities.", bn: "প্রতিবন্ধী শিশুদের জন্য মানসম্মত শিক্ষা ও বিশেষ সহায়তামূলক উদ্যোগ।" },
        intro: {
          established: { en: 'Established: 1st Sept 2014', bn: 'প্রতিষ্ঠাকাল: ১ সেপ্টেম্বর ২০১৪' },
          tag: { en: 'Special School', bn: 'বিশেষ বিদ্যালয়' },
          title: { en: 'Satarkul Diversity Disabled School', bn: 'সাতারকুল বৈচিত্র্য প্রতিবন্ধী বিদ্যালয়' },
          description: { en: 'In 2014, based on field surveys and discussions with parents of disabled children, it was found that disabled children are in the most vulnerable position in Bangladesh in terms of receiving education. Although the primary education enrollment rate is 97 percent, only 11 percent of children with disabilities receive any form of education. Due to lack of birth registration, many children with disabilities experience deprivation from the beginning of their lives. Due to lack of awareness and finances in very poor families, backward disabled children focus on begging instead of education. After reviewing this situation, Satarkul Development Organization for Disability took the initiative to establish a school for very poor disabled children who are deprived of educational opportunities.', bn: '২০১৪ সালের জরিপে দেখা যায় যে প্রতিবন্ধী শিশুরা শিক্ষার ক্ষেত্রে চরম অবহেলার শিকার। আর্থিক অনটন ও সচেতনতার অভাবে অনেক দরিদ্র পরিবারের শিশুরা শিক্ষার পরিবর্তে ভিক্ষাবৃত্তিতে জড়িয়ে পড়ে। এই বাস্তবতাকে সামনে রেখেই সুবিধাবঞ্চিত শিশুদের জন্য SPUS এই বিশেষ বিদ্যালয়টি চালু করে।' },
          classes: [
            { title: { en: 'Mother and Child Class', bn: 'মা ও শিশু শ্রেণী' }, icon: 'Heart' },
            { title: { en: 'Children Class', bn: 'শিশু শ্রেণী' }, icon: 'Baby' },
            { title: { en: 'Special Education Class', bn: 'বিশেষ শিক্ষা শ্রেণী' }, icon: 'Accessibility' },
            { title: { en: 'Vocational Class', bn: 'বৃত্তিমূলক শ্রেণী' }, icon: 'Wrench' },
          ]
        },
        curriculum: {
          title: { en: 'Curriculum', bn: 'পাঠ্যক্রম' },
          items: [
            { en: 'Music, Dance, Drama, Rhymes, Poetry, Recitation', bn: 'সঙ্গীত, নৃত্য, নাটক, ছড়া ও কবিতা আবৃত্তি' },
            { en: 'Clay-Stone Crafts, Hand Painting, Sewing, Block-Batik', bn: 'কারুশিল্প, চিত্রাঙ্কন, সেলাই ও ব্লক-বাটিক' },
            { en: 'Cooking, Proper Dressing, Hand-Foot Washing Rules', bn: 'ব্যক্তিগত পরিচ্ছন্নতা, রান্না ও জীবনমুখী আচরণ শিক্ষা' },
          ]
        },
        stats: {
          title: { en: 'Student Demographics', bn: 'শিক্ষার্থী পরিসংখ্যান' },
          list: [
            { label: { en: 'Total Students', bn: 'মোট শিক্ষার্থী' }, value: '120', icon: 'Users', color: 'text-primary' },
            { label: { en: 'Boys', bn: 'বালক' }, value: '74', icon: 'User', color: 'text-secondary' },
            { label: { en: 'Girls', bn: 'বালিকা' }, value: '46', icon: 'User', color: 'text-accent' },
            { label: { en: 'Teachers', bn: 'শিক্ষক' }, value: '08', icon: 'GraduationCap', color: 'text-primary' },
          ]
        },
        subPrograms: {
          title: { en: 'Comprehensive Support', bn: 'সমন্বিত সহায়তা' },
          list: [
            { title: { en: 'Physiotherapy', bn: 'ফিজিওথেরাপি' }, desc: { en: 'Regular physiotherapy sessions for students with physical disabilities.', bn: 'শারীরিক প্রতিবন্ধী শিক্ষার্থীদের জন্য নিয়মিত থেরাপির ব্যবস্থা।' }, icon: 'Activity', timeline: { en: 'Daily', bn: 'প্রতিদিন' } },
            { title: { en: 'Speech Therapy', bn: 'স্পিচ থেরাপি' }, desc: { en: 'Specialized support for children with speech and communication challenges.', bn: 'কথা বলা ও যোগাযোগের সমস্যা দূর করতে বিশেষ সেশন।' }, icon: 'Mic2', timeline: { en: 'Weekly', bn: 'সাপ্তাহিক' } },
            { title: { en: 'Nutritious Food', bn: 'পুষ্টিকর খাবার' }, desc: { en: 'Providing balanced meals to ensure healthy growth and development.', bn: 'শিশুদের স্বাভাবিক বিকাশে সুষম ও পুষ্টিকর খাবার সরবরাহ।' }, icon: 'Utensils', timeline: { en: 'Daily', bn: 'প্রতিদিন' } },
            { title: { en: 'Transport Service', bn: 'পরিবহন সুবিধা' }, desc: { en: 'Safe and accessible transport for students to and from school.', bn: 'শিক্ষার্থীদের নিরাপদে স্কুলে আনা-নেওয়ার জন্য নিজস্ব পরিবহন।' }, icon: 'Bus', timeline: { en: 'Daily', bn: 'প্রতিদিন' } },
          ]
        },
        adultEducation: {
          title: { en: 'Adult Education Program', bn: 'বয়স্ক শিক্ষা কার্যক্রম' },
          description: { en: 'Every year, an adult education program is conducted with 25 parents of disabled students and ultra-poor disabled women and men. Here they are taught literacy, enabling them to read, write, and sign in Bangla, making them more self-aware and caring towards their children.', bn: 'প্রতি বছর অভিভাবক ও অতি দরিদ্র প্রতিবন্ধী ব্যক্তিদের অক্ষরজ্ঞান ও স্বাক্ষর প্রদান কার্যক্রম পরিচালিত হয়। এটি তাদের দৈনন্দিন জীবনে আত্মসচেতন হতে এবং সন্তানদের সঠিক যত্নে সহায়তা করে।' },
          benefits: [
            { en: 'Literacy & Signature Skills', bn: 'সাক্ষরতা ও স্বাক্ষর করার সক্ষমতা' },
            { en: 'Child Care Awareness', bn: 'শিশু যত্ন বিষয়ক সচেতনতা' },
            { en: 'Self-Awareness Training', bn: 'আত্মসচেতনতা বৃদ্ধি' },
          ]
        }
      },
      health: {
        title: { en: "Health Services", bn: "স্বাস্থ্যসেবা" },
        subtitle: { en: "Providing essential healthcare and medical support to our community.", bn: "অসহায় মানুষের জন্য প্রয়োজনীয় চিকিৎসা ও স্বাস্থ্যসেবা নিশ্চিতকরণ।" },
        intro: {
          tag: { en: 'Health Services', bn: 'স্বাস্থ্যসেবা' },
          title: { en: 'Comprehensive Health Support', bn: 'সমন্বিত স্বাস্থ্য সহায়তা' },
          description: { en: 'We provide essential healthcare services, including regular checkups, specialized therapies, and emergency medical support to persons with disabilities in our community.', bn: 'আমরা স্থানীয় প্রতিবন্ধী ব্যক্তিদের নিয়মিত স্বাস্থ্য পরীক্ষা, বিশেষ থেরাপি এবং জরুরি চিকিৎসা সেবা প্রদান করে আসছি।' },
          targetGroup: { en: 'Disabled Persons & Members', bn: 'প্রতিবন্ধী ব্যক্তি ও সদস্যবৃন্দ' }
        },
        beneficiariesLabel: { en: 'Beneficiaries:', bn: 'উপকারভোগী:' },
        services: [
          { title: { en: 'Medical Checkups', bn: 'স্বাস্থ্য পরীক্ষা' }, desc: { en: 'Regular health screenings and general medical checkups for disabled individuals.', bn: 'প্রতিবন্ধী ব্যক্তিদের নিয়মিত সাধারণ স্বাস্থ্য পরীক্ষার ব্যবস্থা।' }, icon: 'Stethoscope', color: 'bg-primary/10 text-primary', timeline: { en: 'Monthly', bn: 'মাসিক' } },
          { title: { en: 'Physiotherapy', bn: 'ফিজিওথেরাপি' }, desc: { en: 'Specialized physical therapy sessions to improve mobility and strength.', bn: 'শারীরিক সক্ষমতা ও চলাফেরার উন্নতিতে বিশেষ থেরাপি সেশন।' }, icon: 'Activity', color: 'bg-secondary/10 text-secondary', timeline: { en: 'Weekly', bn: 'সাপ্তাহিক' } },
          { title: { en: 'Medicine Distribution', bn: 'ওষুধ বিতরণ' }, desc: { en: 'Providing essential medicines to ultra-poor disabled patients.', bn: 'দরিদ্র ও অসহায় রোগীদের জন্য বিনামূল্যে প্রয়োজনীয় ওষুধ সরবরাহ।' }, icon: 'Pill', color: 'bg-accent/10 text-accent', timeline: { en: 'As Needed', bn: 'প্রয়োজন অনুযায়ী' } },
        ],
        impact: {
          title: { en: 'Data-Driven Healthcare', bn: 'পরিকল্পিত স্বাস্থ্যসেবা' },
          description: { en: 'We track every medical intervention to ensure our community receives the best possible care and support.', bn: 'প্রতিটি চিকিৎসা কার্যক্রম নিবিড়ভাবে পর্যবেক্ষণ করা হয় যাতে সবাই সঠিক সেবা পায়।' },
          stats: [
            { label: { en: 'Eye Checkups', bn: 'চক্ষু পরীক্ষা' }, value: '155+' },
            { label: { en: 'ORS Beneficiaries', bn: 'ওরস্যালাইন সুবিধাভোগী' }, value: '150+' },
          ]
        },
        events: [
          { title: { en: 'Eye Care Camp', bn: 'চক্ষু চিকিৎসা ক্যাম্প' }, date: '2023', icon: 'Eye', beneficiaries: { en: '155 Persons', bn: '১৫৫ জন' } },
          { title: { en: 'Health Awareness', bn: 'স্বাস্থ্য সচেতনতা' }, date: '2023', icon: 'HeartPulse', beneficiaries: { en: '200+ Families', bn: '২০০+ পরিবার' } },
        ]
      },
      'skill-development': {
        title: { en: 'Skill Development Training', bn: 'দক্ষতা উন্নয়ন প্রশিক্ষণ' },
        subtitle: { en: 'Empowering disabled women and youth through vocational skills and handicrafts.', bn: 'বৃত্তিমূলক প্রশিক্ষণ ও হস্তশিল্পের মাধ্যমে প্রতিবন্ধী নারী ও যুবকদের ক্ষমতায়ন।' },
        intro: {
          tag: { en: 'Vocational Training', bn: 'বৃত্তিমূলক প্রশিক্ষণ' },
          title: { en: 'Handicrafts & Vocational Skills', bn: 'হস্তশিল্প ও কর্মমুখী শিক্ষা' },
          description: { en: 'Our skill development program focuses on providing sustainable livelihoods for disabled women, adolescent girls, and their guardians. By teaching creative and practical skills, we help them achieve financial independence and social recognition.', bn: 'আমাদের এই কর্মসূচির লক্ষ্য হলো প্রতিবন্ধী নারী ও কিশোরীদের জন্য আয়ের পথ তৈরি করা, যাতে তারা স্বাবলম্বী হতে পারে।' },
          targetGroupLabel: { en: 'Target Group:', bn: 'উদ্দিষ্ট গোষ্ঠী:' },
          targetGroup: { en: 'Disabled Women, Girls & Guardians', bn: 'প্রতিবন্ধী নারী, কিশোরী ও অভিভাবকবৃন্দ' }
        },
        coursesTitle: { en: 'Training Courses', bn: 'প্রশিক্ষণ কোর্সসমূহ' },
        courses: [
          { title: { en: 'Handicrafts', bn: 'হস্তশিল্প' }, desc: { en: 'Training in making various handicraft items for local and global markets.', bn: 'বাজারের চাহিদা অনুযায়ী নান্দনিক হস্তশিল্প তৈরির প্রশিক্ষণ।' }, icon: 'Palette', timeline: { en: '6 Months', bn: '৬ মাস' } },
          { title: { en: 'Tailoring', bn: 'সেলাই ও দর্জিবিজ্ঞান' }, desc: { en: 'Professional tailoring and dressmaking courses for women with disabilities.', bn: 'পেশাদার দর্জি হিসেবে নিজেকে গড়ে তুলতে আধুনিক পোশাক তৈরির প্রশিক্ষণ।' }, icon: 'Scissors', timeline: { en: '4 Months', bn: '৪ মাস' } },
          { title: { en: 'Computer Literacy', bn: 'কম্পিউটার শিক্ষা' }, desc: { en: 'Basic computer skills and digital literacy for the modern workforce.', bn: 'আধুনিক বিশ্বের সাথে তাল মেলাতে কম্পিউটার ও ডিজিটাল সাক্ষরতা প্রদান।' }, icon: 'Monitor', timeline: { en: '3 Months', bn: '৩ মাস' } },
        ],
        projectsTitle: { en: 'Featured Projects', bn: 'উল্লেখযোগ্য প্রকল্পসমূহ' },
        partnerLabel: { en: 'Partner Organization:', bn: 'অংশীদার সংস্থা:' },
        projects: [
          { 
            title: { en: 'Vocational Training for Disabled Women', bn: 'প্রতিবন্ধী নারীদের কর্মমুখী প্রশিক্ষণ' }, 
            desc: { en: 'A comprehensive project aimed at providing specialized vocational training to disabled women and adolescent girls.', bn: 'নারী ও কিশোরীদের স্বাবলম্বী করতে পরিচালিত একটি বিশেষ প্রশিক্ষণ প্রকল্প।' }, 
            partner: { en: 'NGO Affairs Bureau', bn: 'এনজিও বিষয়ক ব্যুরো' }, 
            duration: { en: '1 Year', bn: '১ বছর' }, 
            participants: { en: '50 Persons', bn: '৫০ জন' }, 
            icon: 'Award' 
          },
          { 
            title: { en: 'Handicraft Production Center', bn: 'হস্তশিল্প উৎপাদন কেন্দ্র' }, 
            desc: { en: 'Establishing a center where trained individuals can produce and sell their handicrafts.', bn: 'প্রশিক্ষিত কারিগরদের তৈরি পণ্য বিক্রির জন্য একটি স্থায়ী উৎপাদন কেন্দ্র।' }, 
            partner: { en: 'Local Government', bn: 'স্থানীয় সরকার' }, 
            duration: { en: 'Ongoing', bn: 'চলমান' }, 
            participants: { en: '30+ Artisans', bn: '৩০+ কারিগর' }, 
            icon: 'Home' 
          }
        ],
        galleryTitle: { en: 'Training Gallery', bn: 'প্রশিক্ষণ গ্যালারি' },
        gallerySubtitle: { en: 'Glimpses of our members learning and creating.', bn: 'সদস্যদের কাজ শেখার ও সৃজনশীলতার কিছু মুহূর্ত।' },
        ctaTitle: { en: 'Support Our Artisans', bn: 'আমাদের কারিগরদের পাশে দাঁড়ান' },
        ctaDescription: { en: 'You can support our skill development program by donating materials or purchasing handicrafts made by our members.', bn: 'উপকরণ দান করে অথবা আমাদের সদস্যদের তৈরি পণ্য কিনে আপনিও এই উদ্যোগের অংশ হতে পারেন।' },
        ctaButton: { en: 'Contact for Orders', bn: 'অর্ডারের জন্য যোগাযোগ করুন' }
      },
      'financial-support': {
        title: { en: 'Financial Support & Micro-SME', bn: 'আর্থিক সহায়তা ও ক্ষুদ্রঋণ' },
        subtitle: { en: 'Providing financial aid and micro-loans for sustainable livelihoods.', bn: 'টেকসই জীবনজীবিকার জন্য অনুদান ও ক্ষুদ্রঋণ সহায়তা।' },
        overview: {
          tag: { en: 'Economic Empowerment', bn: 'অর্থনৈতিক ক্ষমতায়ন' },
          title: { en: 'Financial Independence', bn: 'আর্থিক স্বনির্ভরতা' },
          description: { en: 'We offer various financial support programs, including one-time grants for small businesses and micro-loans for SME development, specifically tailored for persons with disabilities.', bn: 'আমরা ক্ষুদ্র ব্যবসা শুরুর জন্য এককালীন অনুদান এবং ব্যবসা সম্প্রসারণে সহজ শর্তে ঋণের ব্যবস্থা করি।' },
          target: { en: 'Disabled Entrepreneurs & Families', bn: 'উদ্যোক্তা প্রতিবন্ধী ব্যক্তি ও তাদের পরিবার' },
          stats: [
            { label: { en: 'Total Grants', bn: 'মোট অনুদান' }, value: '50+', color: 'text-primary' },
            { label: { en: 'Active Loans', bn: 'সক্রিয় ঋণ' }, value: '35', color: 'text-secondary' },
            { label: { en: 'Success Rate', bn: 'সাফল্যের হার' }, value: '92%', color: 'text-accent', fullWidth: true, icon: 'TrendingUp' }
          ]
        },
        grantsTitle: { en: 'Financial Grants', bn: 'আর্থিক অনুদান' },
        grantsSubtitle: { en: 'One-time support for starting small home-based businesses.', bn: 'গৃহভিত্তিক ছোট ব্যবসা শুরুর জন্য এককালীন নগদ সহায়তা।' },
        grantsTag: { en: 'Grant Program', bn: 'অনুদান কর্মসূচি' },
        grantAmountLabel: { en: 'Total Grant Amount:', bn: 'মোট অনুদানের পরিমাণ:' },
        beneficiariesLabel: { en: 'Beneficiaries:', bn: 'উপকারভোগী:' },
        grants: [
          { 
            title: { en: 'Small Shop Setup Grant', bn: 'দোকান স্থাপনের অনুদান' }, 
            date: '2023',
            amount: '35,000 BDT',
            beneficiaries: { en: '10 Families', bn: '১০টি পরিবার' },
            items: [
              { name: { en: 'Shop Rent', bn: 'দোকান ভাড়া' }, purpose: { en: 'Advance Payment', bn: 'অগ্রিম প্রদান' }, icon: 'Home', amount: '11,000' },
              { name: { en: 'Initial Stock', bn: 'প্রাথমিক মালামাল' }, purpose: { en: 'Grocery Items', bn: 'মুদি পণ্য' }, icon: 'Package', amount: '24,000' }
            ]
          },
          { 
            title: { en: 'Education Stipend', bn: 'শিক্ষা উপবৃত্তি' }, 
            desc: { en: 'Financial aid for students with disabilities to cover educational expenses.', bn: 'প্রতিবন্ধী শিক্ষার্থীদের শিক্ষার ব্যয় মেটাতে আর্থিক উপবৃত্তি।' },
            date: '2023',
            amount: '12,000 BDT',
            beneficiaries: { en: '25 Students', bn: '২৫ জন শিক্ষার্থী' }
          }
        ],
        loansTitle: { en: 'Micro-SME Loan Program', bn: 'ক্ষুদ্রঋণ কার্যক্রম (SME)' },
        loansSubtitle: { en: 'Revolving fund for business expansion and sustainability.', bn: 'ব্যবসা বড় করতে এবং স্থায়িত্ব বাড়াতে আবর্তনশীল তহবিল।' },
        loans: [
          { 
            title: { en: 'Micro-SME Loan Phase 1', bn: 'ক্ষুদ্রঋণ পর্যায় - ১' }, 
            desc: { en: 'Initial capital for small-scale home-based businesses.', bn: 'স্বল্প পরিসরের ব্যবসার জন্য প্রাথমিক পুঁজি সরবরাহ।' },
            date: 'Jan 2023',
            stats: { en: '15 Loans', bn: '১৫টি ঋণ' }
          },
          { 
            title: { en: 'Micro-SME Loan Phase 2', bn: 'ক্ষুদ্রঋণ পর্যায় - ২' }, 
            desc: { en: 'Expansion capital for established small shops.', bn: 'চলতি ব্যবসার পরিধি বাড়াতে অতিরিক্ত মূলধন।' },
            date: 'Jul 2023',
            stats: { en: '20 Loans', bn: '২০টি ঋণ' }
          }
        ],
        galleryTitle: { en: 'Success Stories', bn: 'সাফল্যের গল্প' },
        ctaTitle: { en: 'Empower an Entrepreneur', bn: 'একজন উদ্যোক্তার স্বপ্ন পূরণ করুন' },
        ctaDescription: { en: 'Your contribution can provide the seed capital for a disabled person to start their own business and achieve independence.', bn: 'আপনার সামান্য দান একজন প্রতিবন্ধী ব্যক্তির ব্যবসার পুঁজি হতে পারে, যা তাকে সারাজীবন সম্মানের সাথে বেঁচে থাকতে সাহায্য করবে।' },
        ctaButton: { en: 'Support a Business', bn: 'ব্যবসায় সহায়তা করুন' }
      },
      'assistive-devices': {
        title: { en: 'Assistive Devices Distribution', bn: 'সহায়ক উপকরণ বিতরণ' },
        subtitle: { en: 'Enhancing mobility and accessibility through essential assistive tools.', bn: 'চলাচলের স্বাধীনতা ও সহজলভ্যতা নিশ্চিত করতে প্রয়োজনীয় সহায়ক সরঞ্জাম প্রদান।' },
        intro: {
          title: { en: 'Tools for Independence', bn: 'নির্ভরশীলতামুক্ত জীবনের হাতিয়ার' },
          description: { en: 'Through advocacy with various donor organizations and philanthropists, we distribute high-quality assistive devices to our members, ensuring they can navigate the world with dignity.', bn: 'দাতা সংস্থা ও দানশীল ব্যক্তিদের সহযোগিতায় আমরা উচ্চমানের সহায়ক উপকরণ বিতরণ করি, যাতে প্রতিবন্ধী ব্যক্তিরা মর্যাদার সাথে চলাফেরা করতে পারেন।' },
          timeline: { en: 'Ongoing', bn: 'চলমান কার্যক্রম' },
          targetGroup: { en: 'Disabled Persons & Students', bn: 'প্রতিবন্ধী ব্যক্তি ও শিক্ষার্থী' }
        },
        devices: [
          { title: { en: 'Wheelchairs', bn: 'হুইলচেয়ার' }, desc: { en: 'Manual and motorized wheelchairs for mobility.', bn: 'চলাচলের জন্য সাধারণ ও মোটরচালিত হুইলচেয়ার।' }, icon: 'Wheelchair', color: 'bg-blue-50 text-blue-600' },
          { title: { en: 'White Canes', bn: 'সাদা ছড়ি' }, desc: { en: 'Essential tools for visually impaired individuals.', bn: 'দৃষ্টিপ্রতিবন্ধী ব্যক্তিদের পথচলার প্রধান অবলম্বন।' }, icon: 'Accessibility', color: 'bg-amber-50 text-amber-600' },
          { title: { en: 'Hearing Aids', bn: 'শ্রবণ সহায়ক যন্ত্র' }, desc: { en: 'Digital hearing aids for hearing impaired members.', bn: 'শ্রবণশক্তিহীন ব্যক্তিদের জন্য ডিজিটাল শ্রবণ যন্ত্র।' }, icon: 'Ear', color: 'bg-emerald-50 text-emerald-600' },
          { title: { en: 'Crutches & Walkers', bn: 'ক্রাচ ও ওয়াকার' }, desc: { en: 'Support tools for those with physical disabilities.', bn: 'শারীরিক প্রতিবন্ধী ব্যক্তিদের জন্য বিশেষ সহায়ক সরঞ্জাম।' }, icon: 'Activity', color: 'bg-purple-50 text-purple-600' }
        ],
        impact: {
          title: { en: 'Why Assistive Technology Matters', bn: 'সহায়ক প্রযুক্তির গুরুত্ব' },
          points: [
            { title: { en: 'Increased Mobility', bn: 'চলাচলের অবাধ সুযোগ' }, desc: { en: 'Enabling individuals to move freely within their communities.', bn: 'সামাজিক কর্মকাণ্ডে সহজে অংশ নেওয়ার সুযোগ তৈরি করে।' } },
            { title: { en: 'Educational Access', bn: 'শিক্ষার অনুকূল পরিবেশ' }, desc: { en: 'Helping students with disabilities attend school regularly.', bn: 'সহায়ক উপকরণের মাধ্যমে শিক্ষার্থীদের নিয়মিত স্কুলে আসা নিশ্চিত হয়।' } },
            { title: { en: 'Economic Participation', bn: 'অর্থনৈতিক অংশগ্রহণ' }, desc: { en: 'Supporting workers to reach their workplaces safely.', bn: 'নিরাপদে কর্মস্থলে পৌঁছাতে এবং কাজ করতে সাহায্য করে।' } }
          ]
        }
      },
      'awareness': {
        title: { en: 'Awareness & Advocacy', bn: 'সচেতনতা ও অ্যাডভোকেসি' },
        subtitle: { en: 'Promoting disability rights and social inclusion through awareness.', bn: 'সচেতনতার মাধ্যমে প্রতিবন্ধী অধিকার ও সামাজিক অন্তর্ভুক্তি নিশ্চিতকরণ।' },
        intro: {
          tag: { en: 'Social Awareness', bn: 'সামাজিক সচেতনতা' },
          title: { en: 'Changing Perspectives', bn: 'দৃষ্টিভঙ্গি পরিবর্তন' },
          description: { en: 'We work tirelessly to raise awareness about disability rights, social inclusion, and the potential of persons with disabilities. Through campaigns, workshops, and advocacy, we aim to build a more inclusive society.', bn: 'আমরা প্রতিবন্ধী অধিকার, সামাজিক অন্তর্ভুক্তি এবং মানুষের অফুরন্ত সম্ভাবনা সম্পর্কে সচেতনতা বৃদ্ধিতে নিরলস কাজ করছি।' }
        },
        programs: [
          { 
            id: 'disability-rights',
            title: { en: 'Disability Rights Campaign', bn: 'অধিকার আদায়ের প্রচারণা' }, 
            description: { en: 'Advocating for the implementation of disability laws and ensuring equal opportunities.', bn: 'প্রতিবন্ধী আইন বাস্তবায়ন এবং সবার জন্য সমান সুযোগ নিশ্চিত করার জন্য ওকালতি।' }, 
            image: 'https://picsum.photos/seed/rights/800/600',
            icon: 'ShieldCheck',
            color: 'bg-primary/10 text-primary',
            date: { en: 'Ongoing', bn: 'চলমান' }
          },
          { 
            id: 'community-workshops',
            title: { en: 'Community Awareness Workshops', bn: 'সামাজিক সচেতনতামূলক কর্মশালা' }, 
            description: { en: 'Workshops for community leaders and families to reduce social stigma.', bn: 'সামাজিক কুসংস্কার দূর করতে নেতৃস্থানীয় ব্যক্তি ও পরিবারের জন্য কর্মশালা।' }, 
            image: 'https://picsum.photos/seed/workshop/800/600',
            icon: 'Users',
            color: 'bg-secondary/10 text-secondary',
            date: { en: 'Monthly', bn: 'মাসিক' }
          }
        ],
        disabilityRightsTags: {
          en: ['Legal Rights', 'Accessibility', 'Equal Opportunity', 'Social Dignity'],
          bn: ['আইনি অধিকার', 'অ্যাক্সেসযোগ্যতা', 'সমান সুযোগ', 'সামাজিক মর্যাদা']
        },
        advocacy: {
          tag: { en: 'Advocacy', bn: 'অ্যাডভোকেসি' },
          imageTitle: { en: 'Rights for All', bn: 'সবার জন্য সমান অধিকার' },
          title: { en: 'Policy & Rights Advocacy', bn: 'নীতিমালা ও অধিকারের পক্ষে কথা বলা' },
          description: { en: 'We engage with policymakers and local authorities to ensure that the voices of persons with disabilities are heard and their rights are protected.', bn: 'প্রতিবন্ধী মানুষের কণ্ঠস্বর যেন সঠিক জায়গায় পৌঁছায় এবং তাদের অধিকার যেন সুরক্ষিত থাকে, সেজন্য আমরা নীতিনির্ধারকদের সাথে কাজ করি।' },
          points: [
            { text: { en: 'Implementation of Disability Acts', bn: 'প্রতিবন্ধী সুরক্ষা আইন বাস্তবায়ন' }, icon: 'FileText' },
            { text: { en: 'Accessible Public Infrastructure', bn: 'সহজলভ্য সরকারি অবকাঠামো' }, icon: 'Building' },
            { text: { en: 'Inclusive Employment Policies', bn: 'অন্তর্ভুক্তিমূলক কর্মসংস্থান নীতি' }, icon: 'Briefcase' }
          ]
        },
        ctaTitle: { en: 'Join Our Advocacy', bn: 'আমাদের প্রতিবাদে একাত্ম হোন' },
        ctaDescription: { en: 'Your voice matters. Help us advocate for a world where everyone has equal rights and opportunities.', bn: 'আপনার মতামত গুরুত্বপূর্ণ। বৈষম্যহীন পৃথিবী গড়তে আমাদের অধিকার আদায়ের লড়াইয়ে শামিল হোন।' },
        ctaButton1: { en: 'Become a Member', bn: 'সদস্য হোন' },
        ctaButton2: { en: 'Contact Us', bn: 'যোগাযোগ করুন' }
      },
      'social-support': {
        title: { en: 'Social & Legal Support', bn: 'সামাজিক ও আইনি সহায়তা' },
        subtitle: { en: 'Providing essential social services and legal aid for persons with disabilities.', bn: 'প্রতিবন্ধী ব্যক্তিদের প্রয়োজনীয় সামাজিক সেবা ও আইনি সহায়তা নিশ্চিতকরণ।' },
        intro: {
          tag: { en: 'Social Services', bn: 'সামাজিক সেবা' },
          title: { en: 'Holistic Social Support', bn: 'সামগ্রিক সামাজিক সুরক্ষা' },
          description: { en: 'We provide a range of social and legal support services to ensure that persons with disabilities can live with dignity and security. From legal aid to social counseling, we are here to support our community.', bn: 'আমরা আইনি সহায়তা থেকে শুরু করে সামাজিক কাউন্সিলিং পর্যন্ত সব ধরণের সেবা দিয়ে থাকি, যাতে কেউ নিরাপত্তাহীনতায় না ভোগে।' },
          cta1: { en: 'Request Support', bn: 'সহায়তা চান' },
          cta2: { en: 'Learn More', bn: 'আরও জানুন' },
          badgeTitle: { en: 'Legal Aid Partner', bn: 'আইনি সহায়তা অংশীদার' },
          badgeSubtitle: { en: 'Certified Support', bn: 'স্বীকৃত সেবা' },
          badgeQuote: { en: '"Justice and dignity for every individual."', bn: '"প্রত্যেক ব্যক্তির জন্য ন্যায়বিচার ও মর্যাদা।"' }
        },
        servicesTitle: { en: 'Our Support Services', bn: 'আমাদের সেবাসমূহ' },
        servicesSubtitle: { en: 'Comprehensive assistance for social and legal challenges.', bn: 'সামাজিক ও আইনি জটিলতা নিরসনে পূর্ণাঙ্গ সহায়তা।' },
        services: [
          { 
            id: 'legal-aid',
            title: { en: 'Legal Aid & Counseling', bn: 'আইনি সহায়তা ও পরামর্শ' }, 
            desc: { en: 'Free legal advice and representation for disability-related cases.', bn: 'প্রতিবন্ধকতা সংশ্লিষ্ট যে কোনো আইনি সমস্যায় বিনামূল্যে আইনি পরামর্শ ও সহায়তা।' }, 
            icon: 'Gavel',
            color: 'bg-blue-50 text-blue-600',
            timeline: { en: 'As Needed', bn: 'প্রয়োজন অনুযায়ী' },
            features: [
              { en: 'Rights Protection', bn: 'অধিকার সুরক্ষা' },
              { en: 'Legal Documentation', bn: 'আইনি নথিপত্র' }
            ]
          },
          { 
            id: 'social-counseling',
            title: { en: 'Social Counseling', bn: 'সামাজিক কাউন্সিলিং' }, 
            desc: { en: 'Psychosocial support for individuals and families to cope with social barriers.', bn: 'মানসিক ও সামাজিক প্রতিকূলতা মোকাবিলায় ব্যক্তি ও পরিবারের জন্য বিশেষ কাউন্সিলিং।' }, 
            icon: 'Heart',
            color: 'bg-rose-50 text-rose-600',
            timeline: { en: 'Weekly', bn: 'সাপ্তাহিক' },
            features: [
              { en: 'Family Support', bn: 'পারিবারিক সহায়তা' },
              { en: 'Mental Wellness', bn: 'মানসিক সুস্থতা' }
            ]
          }
        ],
        cta: {
          title: { en: 'Need Social or Legal Help?', bn: 'সামাজিক বা আইনি সহায়তা প্রয়োজন?' },
          description: { en: 'Our dedicated team is ready to assist you with any social or legal challenges you may be facing.', bn: 'আমাদের নিবেদিত দল আপনার যে কোনো সামাজিক বা আইনি সমস্যা সমাধানে পাশে আছে।' },
          phoneLabel: { en: 'Call Us', bn: 'কল করুন' },
          phone: '+880 1712-345678',
          emailLabel: { en: 'Email Us', bn: 'ইমেইল করুন' },
          email: 'support@spus.org',
          buttonText: { en: 'Get Help Now', bn: 'এখনই সহায়তা নিন' }
        }
      },
      'special-programs': {
        title: { en: 'Special Programs', bn: 'বিশেষ কার্যক্রম' },
        subtitle: { en: 'Innovative initiatives designed for specialized care and development.', bn: 'বিশেষ যত্ন এবং নিবিড় উন্নয়নের জন্য পরিকল্পিত আধুনিক উদ্যোগসমূহ।' },
        hero: {
          title: { en: 'Dedicated Support for Unique Needs', bn: 'ব্যতিক্রমী প্রয়োজনের জন্য বিশেষ সহায়তা' },
          description: { en: 'Our special programs focus on providing targeted interventions that go beyond standard care. We collaborate with international partners and experts to bring world-class therapy and educational support directly to our students.', bn: 'আমরা প্রচলিত সেবার বাইরেও আন্তর্জাতিক বিশেষজ্ঞদের সহায়তায় আধুনিক থেরাপি ও শিক্ষা সেবা নিশ্চিত করছি।' }
        },
        programs: [
          {
            id: 'international-training',
            title: { en: 'International Expert Training', bn: 'আন্তর্জাতিক বিশেষজ্ঞ প্রশিক্ষণ' },
            desc: { en: 'Collaborating with experts from UK, USA, and Australia to train our teachers and therapists.', bn: 'যুক্তরাজ্য, যুক্তরাষ্ট্র ও অস্ট্রেলিয়ার বিশেষজ্ঞদের সাথে আমাদের শিক্ষক ও থেরাপিস্টদের প্রশিক্ষণ।' },
            icon: 'Globe',
            color: 'bg-indigo-50 text-indigo-600',
            timeline: { en: 'Annual', bn: 'বার্ষিক' },
            image: 'https://picsum.photos/seed/training/800/600',
            features: [
              { en: 'Advanced Pedagogy', bn: 'উন্নত শিক্ষাদান পদ্ধতি' },
              { en: 'Therapy Techniques', bn: 'আধুনিক থেরাপি কৌশল' },
              { en: 'Global Best Practices', bn: 'বৈশ্বিক সেরা অনুশীলন' },
              { en: 'Certification', bn: 'সনদ প্রদান' }
            ]
          },
          {
            id: 'sensory-integration',
            title: { en: 'Sensory Integration Therapy', bn: 'সেন্সরি ইন্টিগ্রেশন থেরাপি' },
            desc: { en: 'Specialized therapy sessions for children with sensory processing challenges.', bn: 'ইন্দ্রিয়গত জটিলতা রয়েছে এমন শিশুদের জন্য বিশেষায়িত থেরাপি সেশন।' },
            icon: 'Zap',
            color: 'bg-amber-50 text-amber-600',
            timeline: { en: 'Daily', bn: 'প্রতিদিন' },
            image: 'https://picsum.photos/seed/sensory/800/600',
            features: [
              { en: 'Sensory Room Access', bn: 'সেন্সরি রুম ব্যবহারের সুযোগ' },
              { en: 'Individualized Plans', bn: 'ব্যক্তিগত পর্যবেক্ষণ' },
              { en: 'Expert Guidance', bn: 'বিশেষজ্ঞ নির্দেশিকা' },
              { en: 'Progress Tracking', bn: 'অগ্রগতি পর্যবেক্ষণ' }
            ]
          },
          {
            id: 'community-outreach',
            title: { en: 'Community Outreach', bn: 'তৃণমূল প্রচার কার্যক্রম' },
            desc: { en: 'Reaching out to remote areas to identify and support children with disabilities.', bn: 'প্রত্যন্ত এলাকায় গিয়ে প্রতিবন্ধী শিশুদের শনাক্ত করা এবং তাদের সেবার আওতায় আনা।' },
            icon: 'MapPin',
            color: 'bg-rose-50 text-rose-600',
            timeline: { en: 'Ongoing', bn: 'চলমান কার্যক্রম' },
            image: 'https://picsum.photos/seed/outreach/800/600',
            features: [
              { en: 'Door-to-door Surveys', bn: 'বাড়ি বাড়ি গিয়ে জরিপ' },
              { en: 'Awareness Camps', bn: 'সচেতনতামূলক ক্যাম্প' },
              { en: 'Referral Services', bn: 'রেফারেল সুবিধা' },
              { en: 'Family Counseling', bn: 'পারিবারিক কাউন্সিলিং' }
            ]
          }
        ],
        quote: {
          text: { en: '"Every child has a different learning style and pace. Each child is unique, not only capable of learning but also capable of succeeding."', bn: '"প্রতিটি শিশুর শেখার ধরণ ও গতি ভিন্ন। প্রতিটি শিশু অনন্য, এবং সঠিক পরিবেশ পেলে তাদের প্রত্যেকেই সফল হতে সক্ষম।"' },
          author: { en: 'Our Philosophy', bn: 'আমাদের মূল দর্শন' }
        }
      }
    }
  },
  activities: {
      page: {
        title: { en: 'Our Activities', bn: 'আমাদের কার্যক্রম' },
        subtitle: { en: 'A comprehensive overview of how we serve, advocate, and celebrate with our community.', bn: 'আমরা কীভাবে সেবা দিই, অধিকার আদায়ে কথা বলি এবং আনন্দ উদযাপন করি, তার বিস্তারিত রূপরেখা।' },
      },
      intro: {
        tag: { en: 'Our Core Pillars', bn: 'আমাদের মূল ভিত্তি' },
        title: { en: 'Diverse Initiatives for Holistic Impact', bn: 'সমন্বিত উন্নয়নের জন্য নানামুখী উদ্যোগ' },
        description: { en: 'From immediate relief to long-term advocacy, our activities are designed to empower and support every individual in our community.', bn: 'জরুরি ত্রাণ সহায়তা থেকে শুরু করে দীর্ঘমেয়াদী অধিকার প্রতিষ্ঠা পর্যন্ত আমাদের সব কার্যক্রম মানুষকে স্বাবলম্বী করার জন্য পরিকল্পিত।' }
      },
      categories: [
        {
          id: 'relief',
          title: { en: 'Relief Activities', bn: 'ত্রাণ ও মানবিক সহায়তা' },
          description: { en: 'Providing essential support including winter clothing, Ramadan food relief, and annual gifts to students and families.', bn: 'অসহায় পরিবারগুলোর মাঝে শীতবস্ত্র, রমজানে খাদ্য সহায়তা এবং বাৎসরিক উপহার সামগ্রী বিতরণ।' },
          icon: 'HeartHandshake',
          color: 'bg-blue-600',
          lightColor: 'bg-blue-50',
          to: '/activities/relief',
          stats: { en: '1,000+ Served', bn: '১০০০+ সেবাপ্রাপ্ত' }
        },
        {
          id: 'cultural',
          title: { en: 'Cultural Activities', bn: 'সাংস্কৃতিক কার্যক্রম' },
          description: { en: 'Fostering creativity and confidence through annual cultural programs and dance performances by our talented students.', bn: 'আমাদের শিক্ষার্থীদের সৃজনশীলতা ও আত্মবিশ্বাস বাড়াতে বাৎসরিক সাংস্কৃতিক অনুষ্ঠান ও নৃত্য পরিবেশনা।' },
          icon: 'Music',
          color: 'bg-rose-600',
          lightColor: 'bg-rose-50',
          to: '/activities/cultural',
          stats: { en: 'Annual Events', bn: 'বাৎসরিক আয়োজন' }
        },
        {
          id: 'special-days',
          title: { en: 'Special Day Observances', bn: 'বিশেষ দিবস উদযাপন' },
          description: { en: 'Commemorating significant national and international days to raise awareness and celebrate our heritage.', bn: 'সচেতনতা বাড়াতে এবং জাতীয় ঐতিহ্যকে তুলে ধরতে বিভিন্ন জাতীয় ও আন্তর্জাতিক দিবস উদযাপন।' },
          icon: 'Calendar',
          color: 'bg-emerald-600',
          lightColor: 'bg-emerald-50',
          to: '/activities/special-days',
          stats: { en: '10+ Days/Year', bn: 'বছরে ১০+ দিবস' }
        },
        {
          id: 'advocacy',
          title: { en: 'Advocacy Activities', bn: 'অ্যাডভোকেসি ও আন্দোলন' },
          description: { en: 'Demanding rights and dignity for persons with disabilities through human chains, press conferences, and memorandums.', bn: 'মানববন্ধন, সংবাদ সম্মেলন ও স্মারকলিপি প্রদানের মাধ্যমে প্রতিবন্ধী মানুষের অধিকার প্রতিষ্ঠা।' },
          icon: 'Megaphone',
          color: 'bg-amber-600',
          lightColor: 'bg-amber-50',
          to: '/activities/advocacy',
          stats: { en: '11-Point Demands', bn: '১১-দফা দাবি' }
        },
        {
          id: 'special-programs',
          title: { en: 'Special Programs', bn: 'বিশেষ কর্মসূচি' },
          description: { en: 'Targeted initiatives like Speech and Occupational Training, Home Teacher programs, and Therapy centers.', bn: 'স্পিচ ও অকুপেশনাল ট্রেনিং এবং থেরাপি সেন্টারের মতো বিশেষায়িত সেবা কর্মসূচি।' },
          icon: 'Star',
          color: 'bg-indigo-600',
          lightColor: 'bg-indigo-50',
          to: '/activities/special-programs',
          stats: { en: 'Ongoing Care', bn: 'চলমান সেবা' }
        },
        {
          id: 'meetings',
          title: { en: 'Committee Meetings', bn: 'কমিটির সভা' },
          description: { en: 'Ensuring democratic governance and transparency through regular executive and general meetings.', bn: 'সংগঠনের স্বচ্ছতা ও সুশাসন নিশ্চিত করতে নিয়মিত কার্যনির্বাহী ও সাধারণ সভা আয়োজন।' },
          icon: 'Users',
          color: 'bg-slate-700',
          lightColor: 'bg-slate-50',
          to: '/activities/committee-meetings',
          stats: { en: 'Monthly/Annual', bn: 'মাসিক/বার্ষিক' }
        }
      ],
      relief: {
        title: { en: 'Relief Activities', bn: 'ত্রাণ ও মানবিক কার্যক্রম' },
        subtitle: { en: 'Providing essential support and relief items to those in need.', bn: 'অসহায় ও দুস্থ মানুষের মাঝে প্রয়োজনীয় ত্রাণ সামগ্রী বিতরণ।' },
        intro: {
          tag: { en: 'Community Support', bn: 'সামাজিক সহায়তা' },
          title: { en: 'Reaching Out with Compassion', bn: 'সহযোগিতার প্রসন্ন হাত' },
          description: { en: 'Our relief activities are focused on providing immediate assistance to persons with disabilities and their families during critical times, including winter and the holy month of Ramadan.', bn: 'শীতকাল কিংবা পবিত্র রমজানের মতো বিশেষ সময়ে আমরা প্রতিবন্ধী পরিবারগুলোর মাঝে প্রয়োজনীয় ত্রাণ সহায়তা পৌঁছে দিই।' }
        },
        activities: [
          {
            id: 'winter-clothing',
            icon: 'Snowflake',
            color: 'bg-blue-50 text-blue-600',
            timeline: { en: 'Every year', bn: 'প্রতি বছর' },
            title: { en: 'Winter Clothing Distribution', bn: 'শীতবস্ত্র বিতরণ' },
            description: { en: 'On November 7, 2022, Edition Foundation distributed winter sweaters to 68 disabled students of SPUS.', bn: '৭ নভেম্বর ২০২২ তারিখে এডিশন ফাউন্ডেশনের সহযোগিতায় এসপিইউএস-এর ৬৮ জন শিক্ষার্থীর মাঝে শীতের সোয়েটার বিতরণ করা হয়।' },
            stats: {
              beneficiaries: 68,
              partner: 'Edition Foundation'
            }
          },
          {
            id: 'ramadan-relief',
            icon: 'Sun',
            color: 'bg-orange-50 text-orange-600',
            timeline: { en: 'Every year', bn: 'প্রতি বছর' },
            title: { en: 'Ramadan Relief', bn: 'রমজান ও ঈদ উপহার বিতরণ' },
            description: { en: 'In April 2023, through communication and advocacy with various organizations and philanthropists, cash donations, Ramadan and Eid items were distributed among 845 members of SPUS.', bn: '২০২৩ সালের এপ্রিলে বিভিন্ন দাতা সংস্থার সহায়তায় ৮৪৫ জন সদস্যের মাঝে নগদ অর্থ ও খাদ্য সামগ্রী বিতরণ করা হয়েছে।' },
            stats: {
              beneficiaries: 845
            }
          },
          {
            id: 'annual-gifts',
            icon: 'Gift',
            color: 'bg-pink-50 text-pink-600',
            timeline: { en: 'Date: 4/12/24', bn: 'তারিখ: ৪/১২/২৪' },
            title: { en: 'Annual Student Gifts', bn: 'শিক্ষার্থীদের বাৎসরিক উপহার' },
            description: { en: 'Annual gifts for students including winter blankets, Vaseline lotion, snow, mosquito nets and mosquito killing bats for dengue mosquito control, etc. are distributed.', bn: 'শিক্ষার্থীদের জন্য বাৎসরিক উপহার হিসেবে কম্বল, লোশন, মশারী ও মশা মারার ব্যাটসহ প্রয়োজনীয় সামগ্রী বিতরণ করা হয়।' },
            features: [
              { en: 'Winter Blankets', bn: 'শীতের কম্বল' },
              { en: 'Vaseline & Skin Care', bn: 'বেসলিন ও স্কিন কেয়ার' },
              { en: 'Mosquito Nets', bn: 'মশারী' },
              { en: 'Mosquito Killing Bats', bn: 'মশা নিধন ব্যাট' }
            ]
          },
          {
            id: 'sewing-machines',
            icon: 'Scissors',
            color: 'bg-primary/10 text-primary',
            timeline: { en: 'Date: 6/11/22', bn: 'তারিখ: ৬/১১/২২' },
            title: { en: 'Sewing Machine Distribution', bn: 'সেলাই মেশিন বিতরণ' },
            description: { en: 'Sewing machines are distributed among disabled women to promote self-employment and economic independence.', bn: 'প্রতিবন্ধী নারীদের স্বাবলম্বী করতে এবং আয়ের পথ প্রশস্ত করতে বিনামূল্যে সেলাই মেশিন বিতরণ করা হয়।' },
            stats: {
              target: { en: 'Disabled Women', bn: 'প্রতিবন্ধী নারী' }
            }
          }
        ],
        impact: {
          title: { en: 'Your Support Makes a Difference', bn: 'আপনার সহযোগিতা বড় পরিবর্তন আনে' },
          description: { en: 'Every donation helps us reach more families in need. Together, we can ensure that no one is left behind during difficult times.', bn: 'আপনার প্রতিটি দান আমাদের আরও বেশি পরিবারের কাছে পৌঁছাতে সাহায্য করে। বিপদে কেউ যেন একা না থাকে, আমরা সেই লক্ষ্যেই কাজ করি।' },
          list: [
            { en: '845+ Ramadan Relief Beneficiaries', bn: '৮৪৫+ রমজান ত্রাণ উপকারভোগী' },
            { en: 'Annual Winter Clothing for 60+ Students', bn: '৬০+ শিক্ষার্থীর জন্য বাৎসরিক শীতবস্ত্র' },
            { en: 'Ongoing Support for Ultra-Poor Families', bn: 'অসহায় পরিবারগুলোর জন্য নিরন্তর সেবা' }
          ],
          stats: [
            { label: { en: 'Lives Impacted', bn: 'জীবন বদলেছে' }, value: '1,000+' },
            { label: { en: 'Partners', bn: 'অংশীদার' }, value: '50+' }
          ],
          cta: { en: 'Donate Now', bn: 'এখনই অনুদান দিন' }
        }
      },
      specialDays: {
        title: { en: 'Special Day Observances', bn: 'বিশেষ দিবস উদযাপন' },
        subtitle: { en: 'Commemorating significant national and international days with our community.', bn: 'জাতীয় ও আন্তর্জাতিক গুরুত্বপূর্ণ দিবসগুলো উৎসবের সাথে উদযাপন।' },
        intro: {
          tag: { en: 'Annual Calendar', bn: 'বাৎসরিক ক্যালেন্ডার' },
          title: { en: 'Celebrating Our Heritage & Rights', bn: 'ঐতিহ্য ও অধিকারের উদযাপন' },
          description: { en: 'At SPUS, we believe in the power of collective remembrance and celebration. We observe various national and international days to raise awareness, foster community spirit, and educate our students about history and rights.', bn: 'আমরা সম্মিলিত উদযাপনে বিশ্বাস করি। শিক্ষার্থীদের ইতিহাস ও অধিকার সম্পর্কে সচেতন করতে আমরা বছরজুড়ে বিভিন্ন দিবস পালন করি।' }
        },
        days: [
          {
            id: 'mother-language-day',
            icon: 'Languages',
            color: 'bg-red-500',
            date: { en: '21 February', bn: '২১ ফেব্রুয়ারি' },
            fullDate: '21/02/24',
            title: { en: 'International Mother Language Day', bn: 'আন্তর্জাতিক মাতৃভাষা দিবস' },
            description: { en: '21st February International (Mother Language Day), National Sign Language Day observance.', bn: '২১শে ফেব্রুয়ারি আন্তর্জাতিক মাতৃভাষা দিবস ও জাতীয় ইশারা ভাষা দিবস পালন।' },
            image: 'https://picsum.photos/seed/language/1200/800'
          },
          {
            id: 'childrens-day',
            icon: 'Baby',
            color: 'bg-blue-400',
            date: { en: '17 March', bn: '১৭ মার্চ' },
            fullDate: '17/03/24',
            title: { en: "Children's Day", bn: 'জাতীয় শিশু দিবস' },
            description: { en: "17th March Children's Day observance.", bn: '১৭ই মার্চ যথাযোগ্য মর্যাদায় শিশু দিবস উদযাপন।' },
            image: 'https://picsum.photos/seed/children/1200/800'
          },
          {
            id: 'womens-day',
            icon: 'Venus',
            color: 'bg-pink-500',
            date: { en: '8 March', bn: '৮ মার্চ' },
            fullDate: '08/03/24',
            title: { en: "International Women's Day", bn: 'আন্তর্জাতিক নারী দিবস' },
            description: { en: 'On the occasion of Women\'s Day on 8th March, 1 awareness discussion meeting was organized with mothers and sisters of students and women members of SPUS where various important aspects of women\'s issues were discussed.', bn: '৮ই মার্চ নারী দিবস উপলক্ষে নারী সদস্যদের নিয়ে আলোচনা সভা এবং সচেতনতামূলক বৈঠক করা হয়।' },
            image: 'https://picsum.photos/seed/women/1200/800'
          },
          {
            id: 'independence-day',
            icon: 'Flag',
            color: 'bg-green-600',
            date: { en: '26 March', bn: '২৬ মার্চ' },
            fullDate: '26/03/24',
            title: { en: 'Independence Day', bn: 'মহান স্বাধীনতা দিবস' },
            description: { en: 'On 26 March 2023, the importance and history of the Great Independence Day was discussed with the students of SPUS. At the end of the discussion session, a cultural program was organized with the participation of the students.', bn: '২৬শে মার্চ মহান স্বাধীনতা দিবসের ইতিহাস ও গুরুত্ব নিয়ে আলোচনা এবং সাংস্কৃতিক অনুষ্ঠান আয়োজন করা হয়।' },
            image: 'https://picsum.photos/seed/independence/1200/800'
          },
          {
            id: 'mothers-day',
            icon: 'Heart',
            color: 'bg-rose-400',
            date: { en: '8 May', bn: '৮ মে' },
            fullDate: '08/05/24',
            title: { en: "Mother's Day", bn: 'মা দিবস' },
            description: { en: "Observance of Mother's Day to honor the mothers of our students and community.", bn: 'শিক্ষার্থী ও এলাকাবাসীর মায়েদের প্রতি শ্রদ্ধা জানাতে মা দিবস উদযাপন।' },
            image: 'https://picsum.photos/seed/mother/1200/800'
          },
          {
            id: 'mourning-day',
            icon: 'CloudRain',
            color: 'bg-gray-800',
            date: { en: '15 August', bn: '১৫ আগস্ট' },
            fullDate: '15/08/24',
            title: { en: 'National Mourning Day', bn: 'জাতীয় শোক দিবস' },
            description: { en: 'National Mourning Day was observed on the occasion of the death anniversary of Father of the Nation Bangabandhu Sheikh Mujibur Rahman and his family on 15th August 2023 with the members of SPUS. A Milat-Doa was organized seeking forgiveness of the souls of the deceased. About 100 disabled students, men and women and some prominent philanthropists of the society were present in the meeting.', bn: '১৫ই আগস্ট শোক দিবসে মিলাদ-মাহফিল ও দোয়ার আয়োজন করা হয় এবং বঙ্গবন্ধুসহ সকল শহীদদের প্রতি শ্রদ্ধা জানানো হয়।' },
            image: 'https://picsum.photos/seed/mourning/1200/800'
          },
          {
            id: 'white-cane-day',
            icon: 'Accessibility',
            color: 'bg-amber-500',
            date: { en: '15 October', bn: '১৫ অক্টোবর' },
            fullDate: '15/10/24',
            title: { en: 'White Cane Safety Day', bn: 'সাদা ছড়ি নিরাপত্তা দিবস' },
            description: { en: 'World White Cane Day was observed on 15 October 2023. The General Secretary of SPUS Mr. Ujjala Banik discussed the use, importance and significance of White Cane. A cultural program was organized for the participation of the students. Finally, the function ended with cake cutting and lunch.', bn: 'দৃষ্টিপ্রতিবন্ধী মানুষের নিরাপদ পথচলার অধিকার আদায়ে সাদা ছড়ি দিবস ও বিশেষ সাংস্কৃতিক অনুষ্ঠানের আয়োজন।' },
            image: 'https://picsum.photos/seed/white-cane/1200/800'
          },
          {
            id: 'disability-day',
            icon: 'Users',
            color: 'bg-indigo-600',
            date: { en: '3 December', bn: '৩ ডিসেম্বর' },
            fullDate: '03/12/24',
            title: { en: 'International Day of Persons with Disabilities', bn: 'আন্তর্জাতিক প্রতিবন্ধী দিবস' },
            description: { en: '3rd December International Day of Persons with Disabilities observance with various awareness programs and cultural events.', bn: '৩রা ডিসেম্বর নানাবিধ সাংস্কৃতিক ও সচেতনতামূলক কর্মসূচির মাধ্যমে প্রতিবন্ধী দিবস উদযাপন।' },
            image: 'https://picsum.photos/seed/disability/1200/800'
          },
          {
            id: 'victory-day',
            icon: 'Trophy',
            color: 'bg-emerald-600',
            date: { en: '16 December', bn: '১৬ ডিসেম্বর' },
            fullDate: '16/12/24',
            title: { en: 'Victory Day', bn: 'মহান বিজয় দিবস' },
            description: { en: 'On the occasion of Great Victory Day on 16th December 2022, the annual action competition and cultural program of the students of Satarkul Diversity Handicapped School was organized. 60 food plates were distributed among the students in this program in collaboration with LCDB and Inner Wheel.', bn: '১৬ই ডিসেম্বর বিজয় দিবস উপলক্ষে শিক্ষার্থীদের নিয়ে বার্ষিক ক্রীড়া ও সাংস্কৃতিক অনুষ্ঠানের আয়োজন করা হয়।' },
            image: 'https://picsum.photos/seed/victory/1200/800'
          }
        ],
        impact: {
          title: { en: 'Impact of Our Observances', bn: 'দিবস পালনের ইতিবাচক প্রভাব' },
          description: { en: 'Through these events, we have reached over 1,000 community members annually, providing a platform for expression, learning, and solidarity.', bn: 'এই আয়োজনগুলোর মাধ্যমে প্রতি বছর হাজারো মানুষের মাঝে সম্প্রীতি ও সচেতনতা ছড়িয়ে দেওয়া হচ্ছে।' },
          stats: [
            { label: { en: 'Days Observed', bn: 'পালিত দিবস' }, value: '10+' },
            { label: { en: 'Community Reach', bn: 'সামাজিক বিস্তার' }, value: '1,000+' },
            { label: { en: 'Students Engaged', bn: 'অংশগ্রহণকারী শিক্ষার্থী' }, value: '500+' }
          ]
        },
        cta: {
          title: { en: 'Support Our Cultural Programs', bn: 'সাংস্কৃতিক কর্মকাণ্ডে সহায়তা করুন' },
          description: { en: 'Help us continue these important traditions. Your support provides food, cultural materials, and a sense of belonging for our students.', bn: 'আপনার ছোট ছোট অনুদান এই শিশুগুলোর আনন্দ উদযাপন এবং খাবারের ব্যবস্থা করতে সাহায্য করবে।' },
          button: { en: 'Donate for Events', bn: 'আয়োজনের জন্য অনুদান দিন' }
        }
      },
      advocacy: {
        title: { en: 'Advocacy Activities', bn: 'অধিকার সুরক্ষা কার্যক্রম' },
        subtitle: { en: 'Demanding rights and dignity for persons with disabilities through collective action.', bn: 'সম্মিলিত প্রচেষ্টার মাধ্যমে প্রতিবন্ধী ব্যক্তিদের অধিকার ও মর্যাদা প্রতিষ্ঠা।' },
        tag: { en: 'Ongoing', bn: 'চলমান কার্যক্রম' },
        heroTitle: { en: 'Demanding Rights, Ensuring Dignity', bn: 'অধিকারের দাবি, মর্যাদার সুরক্ষা' },
        description: { en: 'Various human chains, press conferences, memorandum submissions, etc. are conducted demanding monthly allowance of 5000 taka for disabled persons along with other 11-point demands.', bn: 'প্রতিবন্ধী ভাতার পরিমাণ ৫০০০ টাকা নির্ধারণসহ ১১-দফা দাবি আদায়ে আমরা মানববন্ধন ও স্মারকলিপি প্রদানের মতো নানা কর্মসূচি পালন করি।' },
        demandsTitle: { en: 'Our Core Demands:', bn: 'আমাদের প্রধান দাবিসমূহ:' },
        demands: [
          { en: 'Monthly allowance of 5000 taka for disabled persons', bn: 'প্রতিবন্ধী ব্যক্তিদের মাসিক ভাতা ৫০০০ টাকায় উন্নীতকরণ' },
          { en: 'Other 11-point demands', bn: 'ন্যায্য অধিকার আদায়ে আমাদের ১১-দফা দাবি' }
        ],
        methodsTitle: { en: 'How We Advocate', bn: 'আমরা যেভাবে দাবি জানাই' },
        methodsSubtitle: { en: 'Our methods for bringing attention to the needs and rights of our community.', bn: 'প্রতিবন্ধী মানুষের চাহিদা ও অধিকার আদায়ে আমাদের কার্যক্রমসমূহ।' },
        activities: [
          {
            id: 'human-chains',
            icon: 'Users',
            title: { en: 'Human Chains', bn: 'মানববন্ধন' },
            description: { en: 'Organizing public demonstrations to bring attention to the rights of disabled persons.', bn: 'দাবি আদায়ে রাজপথে জনগণের দৃষ্টি আকর্ষণ করতে মানববন্ধন আয়োজন।' }
          },
          {
            id: 'press-conferences',
            icon: 'Mic2',
            title: { en: 'Press Conferences', bn: 'সংবাদ সম্মেলন' },
            description: { en: 'Engaging with media to spread our message and demands to a wider audience.', bn: 'সংবাদমাধ্যমের সামনে আমাদের দাবিগুলো জোরালোভাবে তুলে ধরা।' }
          },
          {
            id: 'memorandums',
            icon: 'FileText',
            title: { en: 'Memorandum Submissions', bn: 'স্মারকলিপি প্রদান' },
            description: { en: 'Submitting formal requests and demands to government authorities.', bn: 'সংশ্লিষ্ট সরকারি দপ্তরে আমাদের দাবি সংবলিত স্মারকলিপি পেশ।' }
          }
        ],
        galleryTitle: { en: 'Advocacy in Action', bn: 'আন্দোলনের কিছু চিত্র' },
        ctaTitle: { en: 'Join Our Voice', bn: 'আমাদের সাথে একাত্ম হোন' },
        ctaDescription: { en: 'Your presence strengthens our demands. Join us in our next human chain or press conference to make a difference.', bn: 'আপনার উপস্থিতি আমাদের দাবিগুলোকে আরও শক্তিশালী করবে। আগামী কর্মসূচিতে আমাদের পাশে থাকুন।' },
        ctaButton: { en: 'Support Our Cause', bn: 'আমাদের দাবিকে সমর্থন করুন' }
      },
      cultural: {
        title: { en: 'Cultural Activities', bn: 'সাংস্কৃতিক কার্যক্রম' },
        subtitle: { en: 'Fostering creativity and expression through cultural programs and events.', bn: 'সাংস্কৃতিক আয়োজনের মাধ্যমে শিক্ষার্থীদের সুপ্ত প্রতিভা বিকাশ করা।' },
        intro: {
          tag: { en: 'Cultural Expression', bn: 'সাংস্কৃতিক বহিঃপ্রকাশ' },
          title: { en: 'Celebrating Talent & Diversity', bn: 'প্রতিভা ও বৈচিত্র্যের উদযাপন' },
          description: { en: 'Our cultural activities provide a platform for persons with disabilities to showcase their talents, build confidence, and engage with the wider community through music, dance, and performance.', bn: 'আমাদের শিক্ষার্থীরা গান, নাচ ও অভিনয়ের মাধ্যমে সমাজের মূলধারার সাথে নিজেদের সম্পৃক্ত করার সুযোগ পায়।' }
        },
        activities: [
          {
            id: 'annual-cultural',
            icon: 'Music',
            color: 'bg-rose-500',
            timeline: { en: 'Annual', bn: 'বার্ষিক' },
            title: { en: 'Annual Cultural Program', bn: 'বার্ষিক সাংস্কৃতিক অনুষ্ঠান' },
            description: { en: 'A grand celebration where students perform dance, music, and drama for the community.', bn: 'একটি বৃহৎ উৎসব যেখানে শিক্ষার্থীরা সবার সামনে তাদের গান ও নাচের নৈপুণ্য দেখায়।' },
            stats: {
              location: 'Local Community Center',
              partner: 'Local Arts Council'
            },
            features: [
              { en: 'Dance Performances', bn: 'নৃত্য পরিবেশনা' },
              { en: 'Musical Recitals', bn: 'সঙ্গীত পরিবেশনা' },
              { en: 'Drama & Skits', bn: 'নাটিকা ও অভিনয়' }
            ]
          },
          {
            id: 'dance-training',
            icon: 'Palette',
            color: 'bg-amber-500',
            timeline: { en: 'Weekly', bn: 'সাপ্তাহিক' },
            title: { en: 'Dance & Arts Training', bn: 'নৃত্য ও শিল্পকলা প্রশিক্ষণ' },
            description: { en: 'Regular classes to develop artistic skills and physical coordination.', bn: 'শিশুদের শারীরিক ও মানসিক বিকাশে নিয়মিত ছবি আঁকা ও নাচের প্রশিক্ষণ দেওয়া হয়।' },
            features: [
              { en: 'Traditional Dance', bn: 'ঐতিহ্যবাহী লোকনৃত্য' },
              { en: 'Modern Expression', bn: 'আধুনিক শিল্পকলা' },
              { en: 'Visual Arts', bn: 'দৃশ্যমান শিল্পকলা' }
            ]
          }
        ],
        galleryTitle: { en: 'Cultural Highlights', bn: 'সাংস্কৃতিক মুহূর্ত' },
        ctaTitle: { en: 'Support Our Cultural Programs', bn: 'আমাদের সাংস্কৃতিক কর্মকাণ্ডে পাশে থাকুন' },
        ctaDescription: { en: 'Help us continue these important traditions. Your support provides food, cultural materials, and a sense of belonging for our students.', bn: 'সাংস্কৃতিক উপকরণের জন্য অনুদান দিয়ে এই শিশুগুলোর আনন্দকে নিরবচ্ছিন্ন রাখুন।' },
        ctaButton: { en: 'Donate for Events', bn: 'আয়োজনের জন্য সহায়তা দিন' }
      },
      meetings: {
        title: { en: 'Committee Meetings', bn: 'কমিটির সভা' },
        subtitle: { en: 'Ensuring transparency, democratic leadership, and organizational growth through regular meetings.', bn: 'স্বচ্ছতা, গণতান্ত্রিক নেতৃত্ব এবং সাংগঠনিক উন্নয়ন নিশ্চিত করতে নিয়মিত সভা আয়োজন।' },
        intro: {
          tag: { en: 'Governance', bn: 'সুশাসন' },
          title: { en: 'Democratic Decision Making', bn: 'গণতান্ত্রিক সিদ্ধান্ত গ্রহণ' },
          description: { en: 'At SPUS, our governance is built on the principles of transparency and collective decision-making. Regular committee meetings and annual general assemblies ensure that every voice is heard and that our initiatives align with our core mission.', bn: 'এসপিইউএস-এর প্রতিটি সিদ্ধান্ত স্বচ্ছতা ও সম্মিলিত মতামতের ভিত্তিতে নেওয়া হয়। নিয়মিত সভাগুলো আমাদের কার্যক্রমকে আরও গতিশীল ও জবাবদিহিমূলক করে তোলে।' },
          quote: { en: '"Decisions made collectively for the betterment of the community."', bn: '"সমাজের মঙ্গলের জন্য প্রতিটি সিদ্ধান্ত হোক সম্মিলিত ও সুচিন্তিত।"' },
          transparency: { en: 'Transparency', bn: 'স্বচ্ছতা' },
          accountability: { en: 'Full Accountability', bn: 'পূর্ণ জবাবদিহিতা' }
        },
        list: [
          {
            id: 'executive-committee',
            icon: 'Users',
            color: 'bg-blue-50 text-blue-600',
            timeline: { en: 'Every 3 months', bn: 'প্রতি ৩ মাস অন্তর' },
            title: { en: 'Executive Committee Meeting', bn: 'কার্যনির্বাহী কমিটির সভা' },
            description: { en: 'The Executive Committee meeting is organized every 3 months as per Article 20 of the Constitution of SPUS. A total of 4 meetings were held from January to December 2023. A total of 28 people attended the 4 meetings and all were women. Important activities such as approval of the committee, legal assistance, fund collection, 3-monthly activities report, financial report, dengue mosquito prevention, 3-monthly activities action plan, Ramadan activities school pre-run etc. were decided to implement.', bn: '২০ ধারা অনুযায়ী প্রতি ৩ মাসে এই সভা আয়োজিত হয়। ২০২৩ সালে ৪টি সভায় কমিটির অনুমোদন, তহবিল সংগ্রহ ও ডেঙ্গু প্রতিরোধসহ নানা গুরুত্বপূর্ণ সিদ্ধান্ত নেওয়া হয়েছে।' },
            stats: {
              total: 28,
              female: 28,
              male: 0,
              disabilityBreakdown: [
                { label: { en: 'Hearing & Speech', bn: 'শ্রবণ ও বাক' }, value: 4 },
                { label: { en: 'Physical Disability', bn: 'শারীরিক প্রতিবন্ধিতা' }, value: 16 },
                { label: { en: 'Visual Disability', bn: 'দৃষ্টি প্রতিবন্ধিতা' }, value: 12 }
              ]
            }
          },
          {
            id: 'annual-general',
            icon: 'Calendar',
            color: 'bg-purple-50 text-purple-600',
            timeline: { en: 'Date: 7/01/2023', bn: 'তারিখ: ৭/০১/২০২৩' },
            title: { en: 'Annual General Meeting', bn: 'বার্ষিক সাধারণ সভা' },
            description: { en: 'Annual General Meeting of SPUS was held on 7/01/2023. A total of 21 people were present in the meeting. Among them 16 women and 5 men. In the said meeting, income-expenditure account according to the sector from January to December 2022, appointment of auditors for 2023, annual work plan for 2023, possible budget for 2023, financial report for 2022 and other important decisions including the election of the 5th EC committee were made by all participation, proposal, support and consensus.', bn: '৭ জানুয়ারি ২০২৩ তারিখে অনুষ্ঠিত বার্ষিক সাধারণ সভায় আয়-ব্যয় অনুমোদন, অডিটর নিয়োগ এবং আগামী বছরের বাজেট পেশ করা হয়।' },
            stats: {
              total: 21,
              female: 16,
              male: 5,
              disabilityBreakdown: [
                { label: { en: 'Speech-Hearing', bn: 'শ্রবণ ও বাক' }, value: 1 },
                { label: { en: 'Physical Disability', bn: 'শারীরিক প্রতিবন্ধিতা' }, value: 11 },
                { label: { en: 'Visual Disability', bn: 'দৃষ্টি প্রতিবন্ধিতা' }, value: 8 },
                { label: { en: 'Multiple Disability', bn: 'বহুমাত্রিক প্রতিবন্ধিতা' }, value: 1 }
              ]
            }
          },
          {
            id: 'committee-election',
            icon: 'Vote',
            color: 'bg-orange-50 text-orange-600',
            timeline: { en: 'Date: 2025', bn: 'তারিখ: ২০২৫' },
            title: { en: 'Executive Committee Election', bn: 'কার্যনির্বাহী কমিটির নির্বাচন' },
            description: { en: 'Executive Committee election held to ensure democratic leadership and organizational growth.', bn: 'গণতান্ত্রিক নেতৃত্ব ও সাংগঠনিক গতিশীলতা নিশ্চিত করতে নিয়মিত নির্বাচন আয়োজন করা হয়।' }
          },
          {
            id: 'womens-council',
            icon: 'Users2',
            color: 'bg-rose-50 text-rose-600',
            timeline: { en: 'Date: 26', bn: 'তারিখ: ২৬' },
            title: { en: "Women's Council OPID Meeting", bn: 'নারী পরিষদে অপিডির মিটিং' },
            description: { en: 'OPID meeting held at Women\'s Council to discuss specific issues and initiatives related to women with disabilities.', bn: 'প্রতিবন্ধী নারীদের বিশেষ সমস্যা ও উন্নয়ন নিয়ে আলোচনার জন্য এই বৈঠকটি অনুষ্ঠিত হয়।' }
          }
        ],
        cta: {
          title: { en: 'Our Commitment to Transparency', bn: 'স্বচ্ছতার প্রতি আমাদের অঙ্গীকার' },
          description: { en: 'We maintain detailed records of all our meetings and decisions. If you are a member or a donor and wish to see our detailed reports, please feel free to contact us.', bn: 'আমাদের প্রতিটি সভার সিদ্ধান্ত ও কার্যক্রমের রেকর্ড সংরক্ষিত আছে। স্বচ্ছতা নিশ্চিতে যে কেউ চাইলে আমাদের দাপ্তরিক রিপোর্ট দেখতে পারেন।' },
          button: { en: 'Contact for Reports', bn: 'রিপোর্টের জন্য যোগাযোগ করুন' }
        }
      },
      cta: {
        title: { en: 'Join Us in Creating a More Inclusive World', bn: 'বৈষম্যহীন পৃথিবী গড়তে আমাদের সাথী হোন' },
        description: { en: 'Whether through volunteering, partnership, or donation, your involvement powers our activities and changes lives.', bn: 'স্বেচ্ছাসেবা কিংবা অনুদান—আপনার যে কোনো ভূমিকা আমাদের এই অদম্য অগ্রযাত্রায় সহায়ক হবে।' },
        volunteer: { en: 'Volunteer with Us', bn: 'স্বেচ্ছাসেবী হিসেবে যোগ দিন' },
        donate: { en: 'Donate Now', bn: 'অনুদানে সহায়তা করুন' }
      }
  },
  contact: {
    page: {
      title: { en: 'Get in Touch', bn: 'যোগাযোগ করুন' },
      subtitle: { en: 'We are here to help. Reach out to us for any inquiries or support.', bn: 'আমরা সব সময় আপনার পাশে আছি। যে কোনো প্রয়োজনে আমাদের সাথে যোগাযোগ করুন।' },
    },
    info: {
      title: { en: 'Contact Information', bn: 'যোগাযোগের তথ্য' },
      description: { en: 'Feel free to visit our office or reach out via phone or email. We respond to all inquiries within 24 hours.', bn: 'সরাসরি অফিস ভিজিট করুন অথবা ফোন ও ইমেইলের মাধ্যমে যোগাযোগ করুন। আমরা দ্রুত আপনার জিজ্ঞাসার উত্তর দেব।' },
      address: { en: 'Address', bn: 'ঠিকানা' },
      phone: { en: 'Phone', bn: 'ফোন' },
      whatsapp: { en: 'WhatsApp', bn: 'হোয়াটসঅ্যাপ' },
      email: { en: 'Email', bn: 'ইমেইল' },
    },
    hours: {
      title: { en: 'Office Hours', bn: 'অফিসের সময়সূচী' },
      satWed: { en: 'Sat – Wed', bn: 'শনি – বুধ' },
      thu: { en: 'Thursday', bn: 'বৃহস্পতিবার' },
      fri: { en: 'Friday', bn: 'শুক্রবার' },
      closed: { en: 'Closed', bn: 'সাপ্তাহিক বন্ধ' },
    },
    form: {
      title: { en: 'Send a Message', bn: 'বার্তা পাঠান' },
      name: { en: 'Your Name', bn: 'আপনার নাম' },
      phone: { en: 'Phone Number', bn: 'ফোন নম্বর' },
      email: { en: 'Email Address', bn: 'ইমেইল ঠিকানা' },
      subject: { en: 'Select Subject', bn: 'বিষয় নির্বাচন করুন' },
      message: { en: 'Your Message', bn: 'আপনার বার্তা' },
      submit: { en: 'Send Message', bn: 'বার্তা পাঠান' },
      success: { en: 'Message sent successfully!', bn: 'বার্তাটি সফলভাবে পাঠানো হয়েছে!' },
      subjects: {
        general: { en: 'General Inquiry', bn: 'সাধারণ জিজ্ঞাসা' },
        donation: { en: 'Donation', bn: 'অনুদান সংক্রান্ত' },
        volunteer: { en: 'Volunteer', bn: 'স্বেচ্ছাসেবা সংক্রান্ত' },
        partnership: { en: 'Partnership', bn: 'অংশীদারিত্ব সংক্রান্ত' },
      }
    },
    faq: {
      title: { en: 'Frequently Asked Questions', bn: 'সাধারণ জিজ্ঞাসা ও উত্তর' },
      subtitle: { en: 'Quick answers to common questions about our organization and services.', bn: 'সংস্থা ও সেবা সংক্রান্ত আপনার সাধারণ প্রশ্নগুলোর দ্রুত উত্তর।' },
    }
  }
};

export default siteContent;