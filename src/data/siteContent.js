/**
 * siteContent.js
 * This file contains all the static text content for the application.
 * It is structured by page and section to make it easy to manage and fetch via API.
 */

const siteContent = {
  common: {
    orgName: { en: 'Satarkul Protibondhi Unnayan Songstha', bn: 'সাতারকুল প্রতিবন্ধী উন্নয়ন সংস্থা' },
    motto: { en: 'Empowering Lives, Ensuring Rights', bn: 'জীবনকে ক্ষমতায়ন, অধিকার নিশ্চিতকরণ' },
    contact: {
      email: 'info@spus.org',
      phone: '+880123456789',
      address: { en: 'Satarkul, Badda, Dhaka', bn: 'সাতারকুল, বাড্ডা, ঢাকা' }
    },
    labels: {
      regNumber: { en: 'Reg Number', bn: 'নিবন্ধন নম্বর' },
      date: { en: 'Date', bn: 'তারিখ' },
      applyNow: { en: 'Apply Now', bn: 'এখনই আবেদন করুন' },
      getDirections: { en: 'Get Directions', bn: 'দিকনির্দেশ পান' },
      boys: { en: 'Boys', bn: 'ছেলে' },
      girls: { en: 'Girls', bn: 'মেয়ে' }
    },
    buttons: {
      learnMore: { en: "Learn More", bn: "আরও জানুন" },
      donateNow: { en: "Donate Now", bn: "এখনই দান করুন" },
      readMore: { en: "Read More", bn: "আরও পড়ুন" },
      volunteer: { en: "Volunteer", bn: "স্বেচ্ছাসেবী" },
      partner: { en: "Partner", bn: "অংশীদার" },
      contactUs: { en: "Contact Us", bn: "যোগাযোগ করুন" },
      viewDetails: { en: "View Details", bn: "বিস্তারিত দেখুন" }
    }
  },
  nav: {
    home: { en: 'Home', bn: 'হোম' },
    about: { en: 'About Us', bn: 'আমাদের সম্পর্কে' },
    programs: { en: 'Programs', bn: 'কার্যক্রম' },
    activities: { en: 'Activities', bn: 'কর্মসূচি' },
    media: { en: 'Media', bn: 'মিডিয়া' },
    news: { en: 'News', bn: 'সংবাদ' },
    blog: { en: 'Blog', bn: 'ব্লগ' },
    gallery: { en: 'Gallery', bn: 'গ্যালারি' },
    videos: { en: 'Videos', bn: 'ভিডিও' },
    downloads: { en: 'Downloads', bn: 'ডাউনলোড' },
    supportUs: { en: 'Support Us', bn: 'আমাদের সমর্থন করুন' },
    contact: { en: 'Contact', bn: 'যোগাযোগ' },
    background: { en: 'Background', bn: 'পটভূমি' },
    visionMission: { en: 'Vision & Mission', bn: 'লক্ষ্য ও উদ্দেশ্য' },
    governingBody: { en: 'Governing Body', bn: 'পরিচালনা পর্ষদ' },
    workArea: { en: 'Work Area', bn: 'কর্ম এলাকা' },
    legalStatus: { en: 'Legal Status', bn: 'আইনি মর্যাদা' },
    membership: { en: 'Membership', bn: 'সদস্যপদ' },
    allPrograms: { en: 'All Programs', bn: 'সব কার্যক্রম' },
    education: { en: 'Education', bn: 'শিক্ষা' },
    health: { en: 'Health', bn: 'স্বাস্থ্য' },
    skills: { en: 'Skills', bn: 'দক্ষতা' },
    finance: { en: 'Finance', bn: 'অর্থ' },
    devices: { en: 'Devices', bn: 'উপকরণ' },
    awareness: { en: 'Awareness', bn: 'সচেতনতা' },
    socialSupport: { en: 'Social Support', bn: 'সামাজিক সহায়তা' },
    specialPrograms: { en: 'Special Programs', bn: 'বিশেষ কার্যক্রম' },
    overview: { en: 'Overview', bn: 'সংক্ষিপ্ত বিবরণ' },
    relief: { en: 'Relief', bn: 'ত্রাণ' },
    cultural: { en: 'Cultural', bn: 'সাংস্কৃতিক' },
    specialDays: { en: 'Special Days', bn: 'বিশেষ দিন' },
    advocacy: { en: 'Advocacy', bn: 'অ্যাডভোকেসি' },
    meetings: { en: 'Meetings', bn: 'সভা' },
    donors: { en: 'Donors', bn: 'দাতা' },
  },
  home: {
    hero: {
      slides: [
        {
          title: { en: "Empowering Lives, Ensuring Rights.", bn: "জীবনকে ক্ষমতায়ন, অধিকার নিশ্চিতকরণ" },
          subtitle: { en: "Dedicated to the welfare and rights of persons with disabilities.", bn: "প্রতিবন্ধী ব্যক্তিদের কল্যাণ ও অধিকারের জন্য নিবেদিত।" },
          tag: { en: "Welcome to SPUS", bn: "এসপিইউএস-এ আপনাকে স্বাগতম" }
        },
        {
          title: { en: "Inclusive Education for Every Child", bn: "প্রতিটি শিশুর জন্য অন্তর্ভুক্তিমূলক শিক্ষা" },
          subtitle: { en: "Breaking barriers to learning and growth for children with disabilities.", bn: "প্রতিবন্ধী শিশুদের শেখার এবং বিকাশের বাধাগুলো দূর করা।" },
          tag: { en: "Education Program", bn: "শিক্ষা কার্যক্রম" }
        },
        {
          title: { en: "Better Health, Brighter Future", bn: "উন্নত স্বাস্থ্য, উজ্জ্বল ভবিষ্যৎ" },
          subtitle: { en: "Providing essential healthcare and assistive devices to our community.", bn: "আমাদের সম্প্রদায়ের জন্য প্রয়োজনীয় স্বাস্থ্যসেবা এবং সহায়ক উপকরণ প্রদান।" },
          tag: { en: "Health Services", bn: "স্বাস্থ্যসেবা" }
        }
      ]
    },
    about: {
      tag: { en: "Who We Are", bn: "আমরা কে" },
      title: { en: "Working for an Inclusive Society", bn: "একটি অন্তর্ভুক্তিমূলক সমাজের জন্য কাজ করছি" },
      description: { en: "Swadhin Protibondhi Unnayan Sangstha (SPUS) is a non-political, non-profit organization dedicated to the welfare and rights of persons with disabilities.", bn: "স্বাধীন প্রতিবন্ধী উন্নয়ন সংস্থা (এসপিইউএস) একটি অরাজনৈতিক, অলাভজনক সংস্থা যা প্রতিবন্ধী ব্যক্তিদের কল্যাণ ও অধিকারের জন্য নিবেদিত।" },
      since: { en: "Since 2013", bn: "২০১৩ থেকে" },
      sinceDesc: { en: "Dedicated to empowering persons with disabilities in Badda, Dhaka.", bn: "বাড্ডা, ঢাকায় প্রতিবন্ধী ব্যক্তিদের ক্ষমতায়নে নিবেদিত।" },
      discoverMore: { en: "Discover More About Us", bn: "আমাদের সম্পর্কে আরও জানুন" }
    },
    stats: {
      members: { en: "Total Members", bn: "মোট সদস্য" },
      winterClothes: { en: "Winter Clothes", bn: "শীতবস্ত্র" },
      students: { en: "Students", bn: "শিক্ষার্থী" },
      relief: { en: "Relief Distribution", bn: "ত্রাণ বিতরণ" },
      years: { en: "Years of Service", bn: "সেবার বছর" }
    },
    programs: {
      tag: { en: "Our Impact Areas", bn: "আমাদের প্রভাব ক্ষেত্র" },
      title: { en: "Programs That Change Lives", bn: "জীবন বদলে দেওয়া কর্মসূচি" }
    },
    news: {
      tag: { en: "Recent Updates", bn: "সাম্প্রতিক আপডেট" },
      title: { en: "Activities & News", bn: "কার্যক্রম এবং সংবাদ" },
      viewDetails: { en: "View Details", bn: "বিস্তারিত দেখুন" }
    },
    testimonials: {
      tag: { en: "Our Voices", bn: "আমাদের কণ্ঠস্বর" },
      title: { en: "Stories of Hope and Resilience", bn: "আশা এবং সহনশীলতার গল্প" },
      description: { en: "Hear from the people whose lives have been transformed through our programs and collective efforts.", bn: "আমাদের কর্মসূচি এবং সম্মিলিত প্রচেষ্টার মাধ্যমে যাদের জীবন বদলে গেছে তাদের কাছ থেকে শুনুন।" },
      readMore: { en: "Read More Stories", bn: "আরও গল্প পড়ুন" },
      list: [
        {
          name: { en: 'Rahim Uddin', bn: 'রহিম উদ্দিন' },
          role: { en: 'Parent of Student', bn: 'শিক্ষার্থীর অভিভাবক' },
          quote: { en: 'SPUS has given my son a new lease on life. The education and care he receives here are unmatched.', bn: 'এসপিইউএস আমার ছেলেকে নতুন জীবন দিয়েছে। এখানে সে যে শিক্ষা ও যত্ন পায় তা অতুলনীয়।' },
          image: 'https://i.pravatar.cc/150?u=rahim'
        },
        {
          name: { en: 'Fatema Begum', bn: 'ফাতেমা বেগম' },
          role: { en: 'Member', bn: 'সদস্য' },
          quote: { en: 'The assistive devices and health support from SPUS have made me independent and confident.', bn: 'এসপিইউএস থেকে প্রাপ্ত সহায়ক উপকরণ এবং স্বাস্থ্য সহায়তা আমাকে স্বাধীন এবং আত্মবিশ্বাসী করেছে।' },
          image: 'https://i.pravatar.cc/150?u=fatema'
        }
      ]
    },
    partners: {
      tag: { en: "Our Trusted Partners", bn: "আমাদের বিশ্বস্ত অংশীদার" }
    },
    join: {
      volunteer: {
        title: { en: "Become a Volunteer", bn: "স্বেচ্ছাসেবী হিসেবে যোগ দিন" },
        desc: { en: "Join our community of passionate volunteers and help us create a more inclusive world.", bn: "আমাদের উৎসাহী স্বেচ্ছাসেবকদের সম্প্রদায়ে যোগ দিন এবং একটি অন্তর্ভুক্তিমূলক বিশ্ব গড়তে সাহায্য করুন।" }
      },
      partner: {
        title: { en: "Partner With Us", bn: "আমাদের সাথে অংশীদার হন" },
        desc: { en: "Collaborate with us to scale our impact and reach more people in need.", bn: "আমাদের প্রভাব বাড়াতে এবং আরও বেশি মানুষের কাছে পৌঁছাতে আমাদের সাথে সহযোগিতা করুন।" }
      }
    },
    cta: {
      title: { en: "Ready to Make a Real Difference?", bn: "একটি প্রকৃত পরিবর্তন আনতে প্রস্তুত?" },
      desc: { en: "Your contribution helps us provide education, healthcare, and dignity to persons with disabilities.", bn: "আপনার অবদান আমাদের প্রতিবন্ধী ব্যক্তিদের শিক্ষা, স্বাস্থ্যসেবা এবং মর্যাদা প্রদানে সহায়তা করে।" }
    },
    newsletter: {
      title: { en: "Stay Informed", bn: "সংযুক্ত থাকুন" },
      desc: { en: "Subscribe to our newsletter for the latest updates and impact stories.", bn: "সর্বশেষ আপডেট এবং প্রভাবের গল্পের জন্য আমাদের নিউজলেটারে সাবস্ক্রাইব করুন।" },
      placeholder: { en: "Your email address", bn: "আপনার ইমেল ঠিকানা" },
      button: { en: "Subscribe", bn: "সাবস্ক্রাইব" }
    }
  },
  about: {
    page: {
      title: { en: "About SPUS", bn: "এসপিইউএস সম্পর্কে" },
      subtitle: { en: "A journey of compassion, resilience, and empowerment since 2013.", bn: "২০১৩ থেকে মমতা, স্থিতিস্থাপকতা এবং ক্ষমতায়নের একটি যাত্রা।" }
    },
    legacy: {
      tag: { en: "Our Legacy", bn: "আমাদের ঐতিহ্য" },
      title: { en: "Empowering Lives Since 2013", bn: "২০১৩ থেকে জীবন ক্ষমতায়ন" },
      description: { en: "Satarkul Protibondhi Unnayan Songstha (SPUS) emerged from a collective vision to ensure the rights of persons with disabilities in family, society, and state.", bn: "সাতারকুল প্রতিবন্ধী উন্নয়ন সংস্থা (এসপিইউএস) পরিবার, সমাজ এবং রাষ্ট্রে প্রতিবন্ধী ব্যক্তিদের অধিকার নিশ্চিত করার একটি সম্মিলিত দৃষ্টিভঙ্গি থেকে উদ্ভূত হয়েছে।" },
      type: { en: "Type", bn: "ধরন" },
      typeVal: { en: "Non-Profit NGO", bn: "অলাভজনক এনজিও" },
      regNo: { en: "Reg No", bn: "নিবন্ধন নং" },
      regNoVal: "Dha-09437",
      yearsService: { en: "Years of dedicated service to the community.", bn: "সম্প্রদায়ের জন্য নিবেদিত সেবার ১০ বছরেরও বেশি।" },
      yearsServiceVal: "10+",
      heroAlt: { en: "Education Community photo", bn: "শিক্ষা সম্প্রদায় ছবি" }
    },
    mission: {
      title: { en: "Our Mission", bn: "আমাদের লক্ষ্য" },
      text: { en: "To ensure the rights and dignity of every person with a disability in family, society, and state.", bn: "পরিবার, সমাজ এবং রাষ্ট্রে প্রতিটি প্রতিবন্ধী ব্যক্তির অধিকার ও মর্যাদা নিশ্চিত করা।" }
    },
    vision: {
      title: { en: "Our Vision", bn: "আমাদের স্বপ্ন" },
      text: { en: "A society where disability is not a barrier to success and every individual can reach their full potential.", bn: "এমন একটি সমাজ যেখানে প্রতিবন্ধকতা সাফল্যের পথে বাধা নয় এবং প্রতিটি ব্যক্তি তাদের পূর্ণ সম্ভাবনা অর্জন করতে পারে।" }
    },
    philosophy: {
      title: { en: "Our Philosophy of Change to a new dimention", bn: "আমাদের পরিবর্তনের দর্শন" },
      subtitle: { en: "We believe in a holistic and selective approach to social transformation, focusing on four core pillars.", bn: "আমরা সামাজিক রূপান্তরের একটি সামগ্রিক পদ্ধতিতে বিশ্বাস করি, যা চারটি মূল স্তম্ভের উপর দৃষ্টি নিবদ্ধ করে।" },
      list: [
        { id: 'education', title: { en: 'Education', bn: 'শিক্ষা' }, desc: { en: 'Empowering through knowledge and skill development.', bn: 'জ্ঞান ও দক্ষতা উন্নয়নের মাধ্যমে ক্ষমতায়ন।' } },
        { id: 'awareness', title: { en: 'Awareness', bn: 'সচেতনতা' }, desc: { en: 'Breaking social stigmas and promoting inclusion.', bn: 'সামাজিক কুসংস্কার দূর করা এবং অন্তর্ভুক্তি প্রচার করা।' } },
        { id: 'rights', title: { en: 'Rights & Justice', bn: 'অধিকার ও ন্যায়বিচার' }, desc: { en: 'Advocating for legal rights and social equity.', bn: 'আইনি অধিকার এবং সামাজিক সমতার জন্য ওকালতি।' } },
        { id: 'empowerment', title: { en: 'Empowerment', bn: 'ক্ষমতায়ন' }, desc: { en: 'Creating opportunities for self-reliance.', bn: 'স্বনির্ভরতার সুযোগ তৈরি করা।' } },
      ]
    },
    timeline: {
      title: { en: "Our Growth Timeline", bn: "আমাদের বৃদ্ধির টাইমলাইন" },
      subtitle: { en: "Tracing our steps from a small initiative to a recognized organization.", bn: "একটি ছোট উদ্যোগ থেকে একটি স্বীকৃত সংস্থায় আমাদের পদক্ষেপগুলি অনুসরণ করা।" },
      list: [
        { year: '2013', title: { en: 'Foundation', bn: 'প্রতিষ্ঠা' }, desc: { en: 'SPUS was founded on 28th December to serve Badda, Bhatara, and Satarkul.', bn: 'বাড্ডা, ভাটারা এবং সাতারকুলের সেবায় ২৮শে ডিসেম্বর এসপিইউএস প্রতিষ্ঠিত হয়।' } },
        { year: '2017', title: { en: 'Registration', bn: 'নিবন্ধন' }, desc: { en: 'Officially registered with the Department of Social Welfare, Dhaka.', bn: 'সমাজসেবা অধিদপ্তর, ঢাকা থেকে আনুষ্ঠানিকভাবে নিবন্ধিত।' } },
        { year: 'Today', title: { en: 'Growing Impact', bn: 'ক্রমবর্ধমান প্রভাব' }, desc: { en: 'Serving thousands of disabled individuals across our work areas.', bn: 'আমাদের কর্মক্ষেত্রে হাজার হাজার প্রতিবন্ধী ব্যক্তিদের সেবা প্রদান করছি।' } },
      ]
    },
    whoWeServe: {
      title: { en: "Who We Serve", bn: "আমরা যাদের সেবা করি" },
      description: { en: "Our primary focus is the empowerment of persons with disabilities, with a special emphasis on women and children who face double marginalization.", bn: "আমাদের প্রাথমিক ফোকাস হল প্রতিবন্ধী ব্যক্তিদের ক্ষমতায়ন, বিশেষ করে নারী ও শিশুদের উপর গুরুত্ব দেওয়া যারা দ্বিগুণ প্রান্তিককরণের সম্মুখীন হয়।" },
      list: [
        { en: 'Ultra poor disabled women and men', bn: 'অতি দরিদ্র প্রতিবন্ধী নারী ও পুরুষ' },
        { en: 'Disabled and non-disabled children', bn: 'প্রতিবন্ধী ও অ-প্রতিবন্ধী শিশু' },
        { en: 'Disabled adolescents & elderly', bn: 'প্রতিবন্ধী কিশোর-কিশোরী ও বয়স্ক' },
      ]
    },
    transparency: {
      title: { en: 'Transparency & Resources', bn: 'স্বচ্ছতা ও সম্পদ' },
      subtitle: { en: 'Access our official documents and annual reports.', bn: 'আমাদের অফিসিয়াল নথি এবং বার্ষিক প্রতিবেদনগুলি অ্যাক্সেস করুন।' },
      viewAll: { en: 'View All Resources', bn: 'সব সম্পদ দেখুন' },
      fileType: { en: 'PDF', bn: 'পিডিএফ' },
      resources: [
        { title: { en: 'Organization Profile', bn: 'সংস্থার প্রোফাইল' }, file: 'spus-organization-profile.pdf', size: '2.4 MB' },
        { title: { en: 'Annual Report 2023', bn: 'বার্ষিক প্রতিবেদন ২০২৩' }, file: 'spus-annual-report-2023.pdf', size: '3.1 MB' },
      ]
    },
    membership: {
      page: {
        title: { en: 'Join Our Community', bn: 'আমাদের সম্প্রদায়ে যোগ দিন' },
        subtitle: { en: 'Become a member and contribute to a more inclusive society.', bn: 'সদস্য হন এবং একটি আরও অন্তর্ভুক্তিমূলক সমাজে অবদান রাখুন।' },
      },
      stats: [
        { label: { en: 'Total Members', bn: 'মোট সদস্য' }, value: '705', icon: 'Users', color: 'text-primary', bg: 'bg-primary/10' },
        { label: { en: 'Men', bn: 'পুরুষ' }, value: '291', icon: 'User', color: 'text-secondary', bg: 'bg-secondary/10' },
        { label: { en: 'Women', bn: 'নারী' }, value: '294', icon: 'User', color: 'text-accent', bg: 'bg-accent/10' },
        { label: { en: 'Children', bn: 'শিশু' }, value: '120', icon: 'Baby', color: 'text-primary', bg: 'bg-primary/10' },
      ],
      benefits: {
        title: { en: 'Why Join Us?', bn: 'কেন আমাদের সাথে যোগ দেবেন?' },
        subtitle: { en: 'Membership offers unique opportunities for growth and contribution.', bn: 'সদস্যপদ বৃদ্ধি এবং অবদানের জন্য অনন্য সুযোগ প্রদান করে।' },
        list: [
          { title: { en: 'Voice & Representation', bn: 'কণ্ঠস্বর এবং প্রতিনিধিত্ব' }, desc: { en: 'Participate in decision-making processes and represent the disabled community.', bn: 'সিদ্ধান্ত গ্রহণ প্রক্রিয়ায় অংশগ্রহণ করুন এবং প্রতিবন্ধী সম্প্রদায়ের প্রতিনিধিত্ব করুন।' }, icon: 'Users', color: 'text-primary', bg: 'bg-primary/10' },
          { title: { en: 'Skill Development', bn: 'দক্ষতা বৃদ্ধি' }, desc: { en: 'Access to exclusive training programs, workshops, and vocational courses.', bn: 'একচেটিয়া প্রশিক্ষণ কর্মসূচি, কর্মশালা এবং বৃত্তিমূলক কোর্সে প্রবেশাধিকার।' }, icon: 'Star', color: 'text-secondary', bg: 'bg-secondary/10' },
          { title: { en: 'Community Support', bn: 'সম্প্রদায় সহায়তা' }, desc: { en: 'Join a network of peers and professionals dedicated to mutual empowerment.', bn: 'পারস্পরিক ক্ষমতায়নের জন্য নিবেদিত সমবয়সী এবং পেশাদারদের একটি নেটওয়ার্কে যোগ দিন।' }, icon: 'Heart', color: 'text-accent', bg: 'bg-accent/10' },
        ]
      },
      steps: {
        title: { en: 'How to Join', bn: 'কীভাবে যোগ দেবেন' },
        subtitle: { en: 'Follow these simple steps to become a registered member.', bn: 'নিবন্ধিত সদস্য হতে এই সহজ পদক্ষেপগুলি অনুসরণ করুন।' },
        list: [
          { title: { en: 'Eligibility Check', bn: 'যোগ্যতা যাচাই' }, desc: { en: 'Ensure you meet the criteria for membership as a person with disability.', bn: 'প্রতিবন্ধী ব্যক্তি হিসেবে সদস্যপদ পাওয়ার মানদণ্ড পূরণ করছেন কিনা তা নিশ্চিত করুন।' }, icon: 'ClipboardCheck' },
          { title: { en: 'Form Submission', bn: 'ফর্ম জমা' }, desc: { en: 'Fill out the membership application form available at our office.', bn: 'আমাদের অফিসে উপলব্ধ সদস্যপদ আবেদনপত্র পূরণ করুন।' }, icon: 'UserPlus' },
          { title: { en: 'Verification', bn: 'যাচাইকরণ' }, desc: { en: 'Our committee will review and verify your application details.', bn: 'আমাদের কমিটি আপনার আবেদনের বিবরণ পর্যালোচনা এবং যাচাই করবে।' }, icon: 'UserCheck' },
        ]
      },
      childrenBreakdown: {
        title: { en: 'Children Breakdown', bn: 'শিশুদের বিস্তারিত' },
        boysValue: '74',
        girlsValue: '46'
      },
      cta: {
        title: { en: 'Ready to Make an Impact?', bn: 'প্রভাব ফেলতে প্রস্তুত?' },
        desc: { en: 'Join us today and help us build a world where everyone has equal opportunities.', bn: 'আজই আমাদের সাথে যোগ দিন এবং এমন একটি বিশ্ব গড়তে সাহায্য করুন যেখানে সবার সমান সুযোগ রয়েছে।' }
      }
    },
    workArea: {
      page: {
        title: { en: 'Our Work Area', bn: 'আমাদের কর্ম এলাকা' },
        subtitle: { en: 'Expanding our reach to create an inclusive Dhaka.', bn: 'একটি অন্তর্ভুক্তিমূলক ঢাকা গড়ার জন্য আমাদের পরিধি বিস্তার করছি।' },
      },
      stats: [
        { label: { en: 'Wards Covered', bn: 'ওয়ার্ড সমূহ' }, value: '11', icon: 'MapPin', color: 'text-primary', bg: 'bg-primary/10', details: '20, 21, 22, 23, 24, 37, 38, 39, 40, 41, 42' },
        { label: { en: 'Persons Served', bn: 'সেবাপ্রাপ্ত ব্যক্তি' }, value: '690+', icon: 'Users', color: 'text-secondary', bg: 'bg-secondary/10', details: { en: 'Empowering 690+ persons with disabilities.', bn: '৬৯০+ প্রতিবন্ধী ব্যক্তিকে ক্ষমতায়ন করছি।' } },
        { label: { en: 'Active Thanas', bn: 'সক্রিয় থানা' }, value: '07', icon: 'Globe', color: 'text-accent', bg: 'bg-accent/10', details: { en: 'Badda, Bhatara, Rampura, Khilgaon, Tejgaon, Mirpur, Dokkhinkhan.', bn: 'বাড্ডা, ভাটারা, রামপুরা, খিলগাঁও, তেজগাঁও, মিরপুর, দক্ষিণখান।' } },
      ],
      locationFocus: {
        tag: { en: 'Location Focus', bn: 'অবস্থান ফোকাস' },
        title: { en: 'Strategic Reach Across Dhaka', bn: 'ঢাকা জুড়ে কৌশলগত বিস্তার' },
        description: { en: 'We are actively working in several wards of Badda Thana and surrounding areas to support the local disabled community through grassroots initiatives.', bn: 'আমরা তৃণমূল পর্যায়ের উদ্যোগের মাধ্যমে স্থানীয় প্রতিবন্ধী সম্প্রদায়কে সহায়তা করার জন্য বাড্ডা থানা এবং পার্শ্ববর্তী এলাকার বেশ কয়েকটি ওয়ার্ডে সক্রিয়ভাবে কাজ করছি।' },
        list: [
          { en: 'Badda Thana', bn: 'বাড্ডা থানা' },
          { en: 'Bhatara Thana', bn: 'ভাটারা থানা' },
          { en: 'Rampura Thana', bn: 'রামপুরা থানা' },
          { en: 'Khilgaon Thana', bn: 'খিলগাঁও থানা' },
        ]
      },
      cta: {
        title: { en: 'Visit Our Administrative Office', bn: 'আমাদের প্রশাসনিক অফিস পরিদর্শন করুন' },
        desc: { en: 'Located in the heart of Satarkul, our office is open for consultations and community support.', bn: 'সাতারকুলের প্রাণকেন্দ্রে অবস্থিত আমাদের অফিস পরামর্শ এবং সম্প্রদায় সহায়তার জন্য উন্মুক্ত।' }
      }
    },
    support: {
      page: {
        title: { en: 'Support Our Mission', bn: 'আমাদের মিশনকে সমর্থন করুন' },
        subtitle: { en: 'There are many ways to contribute to our cause. Choose the one that fits you best.', bn: 'আমাদের উদ্দেশ্যে অবদান রাখার অনেক উপায় আছে। আপনার জন্য সবচেয়ে উপযুক্ত একটি বেছে নিন।' }
      },
      hero: {
        title: { en: 'Your Support Changes Lives', bn: 'আপনার সমর্থন জীবন বদলে দেয়' },
        description: { en: 'Every contribution, whether big or small, helps us provide essential services and advocate for the rights of persons with disabilities.', bn: 'প্রতিটি অবদান, ছোট বা বড় যাই হোক না কেন, আমাদের প্রয়োজনীয় সেবা প্রদান করতে এবং প্রতিবন্ধী ব্যক্তিদের অধিকারের জন্য অ্যাডভোকেসি করতে সাহায্য করে।' }
      },
      options: [
        {
          id: 'donate',
          title: { en: 'Donate Now', bn: 'এখনই দান করুন' },
          description: { en: 'Financial contributions go directly to our programs, providing education, health, and skill training.', bn: 'আর্থিক অবদান সরাসরি আমাদের কর্মসূচিতে যায়, যা শিক্ষা, স্বাস্থ্য এবং দক্ষতা প্রশিক্ষণ প্রদান করে।' },
          icon: 'Heart',
          link: '/support/donate',
          color: 'text-primary',
          bg: 'bg-primary/10'
        },
        {
          id: 'volunteer',
          title: { en: 'Volunteer', bn: 'স্বেচ্ছাসেবী' },
          description: { en: 'Share your time and skills to help us manage events, mentor youth, or support our admin team.', bn: 'আমাদের ইভেন্ট পরিচালনা, যুবকদের মেন্টর করা বা আমাদের অ্যাডমিন টিমকে সহায়তা করতে আপনার সময় এবং দক্ষতা শেয়ার করুন।' },
          icon: 'Users',
          link: '/support/volunteer',
          color: 'text-secondary',
          bg: 'bg-secondary/10'
        },
        {
          id: 'partner',
          title: { en: 'Partner With Us', bn: 'আমাদের সাথে অংশীদার হন' },
          description: { en: 'Organizations can collaborate with us through CSR initiatives, joint programs, or sponsorships.', bn: 'সংস্থাগুলো CSR উদ্যোগ, যৌথ কর্মসূচি বা স্পনসরশিপের মাধ্যমে আমাদের সাথে সহযোগিতা করতে পারে।' },
          icon: 'Handshake',
          link: '/support/partner',
          color: 'text-accent',
          bg: 'bg-accent/10'
        },
        {
          id: 'donors',
          title: { en: 'Our Donors', bn: 'আমাদের দাতাগণ' },
          description: { en: 'See the organizations and individuals who make our work possible through their generous support.', bn: 'সেইসব সংস্থা এবং ব্যক্তিদের দেখুন যারা তাদের উদার সমর্থনের মাধ্যমে আমাদের কাজ সম্ভব করে তোলেন।' },
          icon: 'Award',
          link: '/support/donors',
          color: 'text-primary',
          bg: 'bg-primary/10'
        }
      ],
      impact: {
        title: { en: 'The Impact of Your Support', bn: 'আপনার সমর্থনের প্রভাব' },
        subtitle: { en: 'See how your contributions are making a real difference in the community.', bn: 'আপনার অবদান কীভাবে সম্প্রদায়ে বাস্তব পরিবর্তন আনছে তা দেখুন।' },
        stats: [
          { label: { en: 'Lives Impacted', bn: 'প্রভাবিত জীবন' }, value: '5,000+', icon: 'UserCheck' },
          { label: { en: 'Programs Funded', bn: 'অর্থায়িত কর্মসূচি' }, value: '15+', icon: 'Target' },
          { label: { en: 'Volunteers Joined', bn: 'যোগ দেওয়া স্বেচ্ছাসেবী' }, value: '200+', icon: 'Users' }
        ]
      },
      donate: {
        page: {
          title: { en: 'Support Our Cause', bn: 'আমাদের পাশে দাঁড়ান' },
          subtitle: { en: 'Your contribution empowers people with disabilities and builds a more inclusive society.', bn: 'আপনার অবদান প্রতিবন্ধী ব্যক্তিদের ক্ষমতায়ন করে এবং একটি আরও অন্তর্ভুক্তিমূলক সমাজ গঠন করে।' }
        },
        form: {
          title: { en: 'Make a Donation', bn: 'অনুদান দিন' },
          description: { en: 'Choose an amount to contribute. Every bit helps us reach our goals.', bn: 'অবদানের জন্য একটি পরিমাণ চয়ন করুন। প্রতিটি ক্ষুদ্র অংশ আমাদের লক্ষ্য অর্জনে সহায়তা করে।' }
        },
        impactLevels: [
          { amount: 500, label: { en: 'Basic Support', bn: 'মৌলিক সহায়তা' }, impact: { en: 'Provides educational materials for 1 child for a month.', bn: '১টি শিশুর এক মাসের শিক্ষা উপকরণ প্রদান করে।' } },
          { amount: 1000, label: { en: 'Health & Nutrition', bn: 'স্বাস্থ্য ও পুষ্টি' }, impact: { en: 'Covers essential health check-ups and nutrition for 1 child.', bn: '১টি শিশুর প্রয়োজনীয় স্বাস্থ্য পরীক্ষা ও পুষ্টির খরচ বহন করে।' } },
          { amount: 2500, label: { en: 'Skill Training', bn: 'দক্ষতা প্রশিক্ষণ' }, impact: { en: 'Supports skill training for 1 person with disability.', bn: '১জন প্রতিবন্ধী ব্যক্তির দক্ষতা প্রশিক্ষণে সহায়তা করে।' } },
          { amount: 5000, label: { en: 'Community Impact', bn: 'সামাজিক প্রভাব' }, impact: { en: 'Funds a community awareness workshop for 20+ people.', bn: '২০+ মানুষের জন্য একটি সামাজিক সচেতনতা কর্মশালার অর্থায়ন করে।' } },
        ],
        paymentMethods: [
          { name: 'bKash', number: '01743214468', type: { en: 'Personal', bn: 'ব্যক্তিগত' } },
          { name: 'Nagad', number: '01743214468', type: { en: 'Personal', bn: 'ব্যক্তিগত' } },
          { name: 'Rocket', number: '01743214468', type: { en: 'Personal', bn: 'ব্যক্তিগত' } },
        ],
        transparency: {
          title: { en: 'Financial Transparency', bn: 'আর্থিক স্বচ্ছতা' },
          description: { en: 'We believe in full accountability. Here is how we allocate our resources to create impact.', bn: 'আমরা পূর্ণ জবাবদিহিতায় বিশ্বাস করি। প্রভাব তৈরি করতে আমরা কীভাবে আমাদের সম্পদ বরাদ্দ করি তা এখানে দেওয়া হলো।' },
          allocation: [
            { label: { en: 'Education & Schooling', bn: 'শিক্ষা ও স্কুলিং' }, value: 45, color: 'bg-primary' },
            { label: { en: 'Health & Medical Support', bn: 'স্বাস্থ্য ও চিকিৎসা সহায়তা' }, value: 25, color: 'bg-secondary' },
            { label: { en: 'Skill Training & Loans', bn: 'দক্ষতা প্রশিক্ষণ ও ঋণ' }, value: 20, color: 'bg-accent' },
            { label: { en: 'Administration & Operations', bn: 'প্রশাসন ও পরিচালনা' }, value: 10, color: 'bg-muted' },
          ]
        }
      },
      volunteer: {
        page: {
          title: { en: 'Join Our Volunteer Team', bn: 'আমাদের স্বেচ্ছাসেবী দলে যোগ দিন' },
          subtitle: { en: 'Your time and skills can make a significant difference in the lives of persons with disabilities.', bn: 'আপনার সময় এবং দক্ষতা প্রতিবন্ধী ব্যক্তিদের জীবনে উল্লেখযোগ্য পরিবর্তন আনতে পারে।' }
        },
        roles: [
          { title: { en: 'Event Support', bn: 'ইভেন্ট সহায়তা' }, desc: { en: 'Help us organize and manage our community events and awareness campaigns.', bn: 'আমাদের কমিউনিটি ইভেন্ট এবং সচেতনতামূলক প্রচারণা সংগঠিত ও পরিচালনা করতে সহায়তা করুন।' }, icon: 'Calendar' },
          { title: { en: 'Skill Mentoring', bn: 'দক্ষতা মেন্টরিং' }, desc: { en: 'Share your professional skills to mentor persons with disabilities in vocational training.', bn: 'বৃত্তিমূলক প্রশিক্ষণে প্রতিবন্ধী ব্যক্তিদের মেন্টর করতে আপনার পেশাদার দক্ষতা শেয়ার করুন।' }, icon: 'BookOpen' },
          { title: { en: 'Office Support', bn: 'অফিস সহায়তা' }, desc: { en: 'Assist our administrative team with data entry, documentation, and communication.', bn: 'ডেটা এন্ট্রি, ডকুমেন্টেশন এবং যোগাযোগের ক্ষেত্রে আমাদের প্রশাসনিক দলকে সহায়তা করুন।' }, icon: 'FileText' },
        ]
      },
      partner: {
        page: {
          title: { en: 'Strategic Partnerships', bn: 'কৌশলগত অংশীদারিত্ব' },
          subtitle: { en: 'We collaborate with organizations to drive sustainable social inclusion.', bn: 'সামাজিক অন্তর্ভুক্তি নিশ্চিত করতে আমরা বিভিন্ন সংস্থার সাথে সহযোগিতা করি।' }
        },
        types: [
          { title: { en: 'Corporate CSR', bn: 'করপোরেট সিএসআর' }, desc: { en: 'Align your corporate social responsibility goals with our impactful programs.', bn: 'আপনার করপোরেট সামাজিক দায়বদ্ধতার লক্ষ্যগুলোকে আমাদের প্রভাবশালী কর্মসূচির সাথে সারিবদ্ধ করুন।' }, icon: 'Building2' },
          { title: { en: 'Institutional Support', bn: 'প্রাতিষ্ঠানিক সহায়তা' }, desc: { en: 'Joint initiatives with NGOs, government bodies, and international agencies.', bn: 'এনজিও, সরকারি সংস্থা এবং আন্তর্জাতিক সংস্থাগুলোর সাথে যৌথ উদ্যোগ।' }, icon: 'Globe' },
          { title: { en: 'Community Partners', bn: 'কমিউনিটি অংশীদার' }, desc: { en: 'Local businesses and groups supporting grassroots development.', bn: 'তৃণমূল পর্যায়ের উন্নয়নকে সমর্থনকারী স্থানীয় ব্যবসা এবং গ্রুপ।' }, icon: 'Users' },
        ]
      },
      donors: {
        page: {
          title: { en: 'Our Recent Donors', bn: 'সাম্প্রতিক দাতা সংস্থা' },
          subtitle: { en: 'We are deeply grateful to the organizations that support our mission to empower persons with disabilities.', bn: 'প্রতিবন্ধী ব্যক্তিদের ক্ষমতায়নের লক্ষ্যে আমাদের মিশনকে সমর্থনকারী সংস্থাগুলোর প্রতি আমরা গভীরভাবে কৃতজ্ঞ।' }
        }
      }
    },
    visionMission: {
      page: {
        title: { en: 'Vision & Mission', bn: 'লক্ষ্য ও উদ্দেশ্য' },
        subtitle: { en: 'Our guiding principles for creating an inclusive society.', bn: 'একটি অন্তর্ভুক্তিমূলক সমাজ গঠনের জন্য আমাদের পথপ্রদর্শক নীতিসমূহ।' },
      },
      vision: {
        title: { en: 'Our Vision', bn: 'আমাদের লক্ষ্য' },
        text: { en: 'A non-discriminatory society where people with disabilities enjoy their rights and responsibilities and they are fully capable of participating spontaneously at every level of society.', bn: 'একটি বৈষম্যহীন সমাজ যেখানে প্রতিবন্ধী ব্যক্তিরা তাদের অধিকার এবং দায়িত্ব ভোগ করে এবং তারা সমাজের প্রতিটি স্তরে স্বতঃস্ফূর্তভাবে অংশগ্রহণ করতে সম্পূর্ণভাবে সক্ষম।' }
      },
      mission: {
        title: { en: 'Our Mission', bn: 'আমাদের উদ্দেশ্য' },
        text: { en: 'The main goal of the organization is to create a barrier-free environment and rights-based integrated society for the very poor disabled men, women and children who are backward in all fields.', bn: 'সংস্থার মূল লক্ষ্য হল সকল ক্ষেত্রে পিছিয়ে থাকা অত্যন্ত দরিদ্র প্রতিবন্ধী পুরুষ, নারী এবং শিশুদের জন্য একটি বাধামুক্ত পরিবেশ এবং অধিকার-ভিত্তিক সমন্বিত সমাজ সৃষ্টি করা।' }
      },
      values: {
        title: { en: 'Our Core Values', bn: 'আমাদের মূল মূল্যবোধ' },
        desc: { en: 'These values define our culture and guide our actions as we work towards social justice and inclusion.', bn: 'এই মূল্যবোধগুলি আমাদের সংস্কৃতিকে সংজ্ঞায়িত করে এবং সামাজিক ন্যায়বিচার ও অন্তর্ভুক্তির দিকে কাজ করার সময় আমাদের ক্রিয়াকলাপকে গাইড করে।' },
        list: [
          { en: 'Inclusivity', bn: 'অন্তর্ভুক্তি' },
          { en: 'Integrity', bn: 'সততা' },
          { en: 'Empowerment', bn: 'ক্ষমতায়ন' },
          { en: 'Compassion', bn: 'মমতা' },
        ]
      },
      join: {
        title: { en: 'Join Us in Our Mission', bn: 'আমাদের মিশনে যোগ দিন' },
        volunteer: { en: 'Become a Volunteer', bn: 'স্বেচ্ছাসেবী হন' },
        donate: { en: 'Donate Now', bn: 'এখনই দান করুন' }
      }
    },
    governingBody: {
      page: {
        title: { en: 'Governing Body', bn: 'নির্বাহী কমিটি' },
        subtitle: { en: 'Our organization is 100% led by persons with disabilities, ensuring authentic representation.', bn: 'আমাদের সংস্থা ১০০% প্রতিবন্ধী ব্যক্তিদের দ্বারা পরিচালিত, যা সঠিক প্রতিনিধিত্ব নিশ্চিত করে।' },
      },
      intro: {
        tag: { en: 'Authentic Leadership', bn: 'সঠিক নেতৃত্ব' },
        title: { en: 'Led by Lived Experience', bn: 'অভিজ্ঞতার মাধ্যমে পরিচালিত' },
        description: { en: 'The governing body of SPUS consists of dedicated individuals who have lived experience with various disabilities. This unique perspective allows us to design programs that truly meet the needs of our community.', bn: 'এসপিইউএস-এর নির্বাহী কমিটি এমন নিবেদিতপ্রাণ ব্যক্তিদের নিয়ে গঠিত যাদের বিভিন্ন প্রতিবন্ধকতার সাথে বসবাসের অভিজ্ঞতা রয়েছে। এই অনন্য দৃষ্টিভঙ্গি আমাদের এমন কর্মসূচি ডিজাইন করতে সাহায্য করে যা আমাদের সম্প্রদায়ের চাহিদাগুলো সত্যিকার অর্থে পূরণ করে।' },
      },
      focal: {
        title: { en: 'Focal Person', bn: 'যোগাযোগ ব্যক্তি' },
        role: { en: 'General Secretary', bn: 'সাধারণ সম্পাদক' },
        name: { en: 'Ujjala Banik', bn: 'উজ্জলা বনিক' },
      },
      members: {
        title: { en: 'Executive Committee Members', bn: 'নির্বাহী কমিটির সদস্যবৃন্দ' },
        subtitle: { en: 'A team of 100% disabled leaders driving social change.', bn: 'সামাজিক পরিবর্তন পরিচালনাকারী ১০০% প্রতিবন্ধী নেতাদের একটি দল।' },
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
        subtitle: { en: 'We maintain strict governance protocols to ensure accountability and effective decision-making.', bn: 'জবাবদিহিতা এবং কার্যকর সিদ্ধান্ত গ্রহণ নিশ্চিত করতে আমরা কঠোর সুশাসন প্রোটোকল বজায় রাখি।' },
        ecm: {
          title: { en: 'Executive Committee Meetings', bn: 'নির্বাহী কমিটির সভা' },
          desc: { en: 'Organized every 3 months as per Article 20 of the Constitution of SPUS. Decisions include committee approval, legal assistance, and action planning.', bn: 'এসপিইউএস-এর সংবিধানের ২০ ধারা অনুযায়ী প্রতি ৩ মাসে নির্বাহী কমিটির সভা আয়োজন করা হয়। সিদ্ধান্তের মধ্যে রয়েছে কমিটির অনুমোদন, আইনি সহায়তা এবং কর্মপরিকল্পনা।' },
          tag: { en: '4 Meetings per Year', bn: 'বছরে ৪টি সভা' }
        },
        agm: {
          title: { en: 'Annual General Meeting', bn: 'বার্ষিক সাধারণ সভা' },
          desc: { en: 'Held annually to review income-expenditure, appoint auditors, and approve the annual work plan and budget.', bn: 'আয়-ব্যয় পর্যালোচনা, নিরীক্ষক নিয়োগ এবং বার্ষিক কর্মপরিকল্পনা ও বাজেট অনুমোদনের জন্য প্রতি বছর অনুষ্ঠিত হয়।' },
          tag: { en: 'Inclusive Participation', bn: 'অন্তর্ভুক্তিমূলক অংশগ্রহণ' }
        }
      }
    },
    legalStatus: {
      page: {
        title: { en: 'Legal Status & Compliance', bn: 'আইনি মর্যাদা এবং সম্মতি' },
        subtitle: { en: 'Transparency and accountability are the foundations of our organization.', bn: 'স্বচ্ছতা এবং জবাবদিহিতা আমাদের সংগঠনের ভিত্তি।' },
      },
      intro: {
        title: { en: 'Fully Registered & Governed', bn: 'সম্পূর্ণ নিবন্ধিত এবং পরিচালিত' },
        description: { en: 'BPKS Satarkul is a non-profit, non-political, and non-governmental organization registered under the laws of Bangladesh. We maintain strict compliance with all regulatory bodies.', bn: 'বিপিকেএস সাতারকুল একটি অলাভজনক, অরাজনৈতিক এবং বেসরকারি সংস্থা যা বাংলাদেশের আইনের অধীনে নিবন্ধিত। আমরা সকল নিয়ন্ত্রক সংস্থার সাথে কঠোর সম্মতি বজায় রাখি।' },
        features: [
          { en: 'Regular Audit Compliance', bn: 'নিয়মিত অডিট সম্মতি' },
          { en: 'Transparent Financial Reporting', bn: 'স্বচ্ছ আর্থিক প্রতিবেদন' },
          { en: 'Ethical Governance Standards', bn: 'নৈতিক শাসন মান' }
        ]
      },
      documents: {
        title: { en: 'Official Documents', bn: 'অফিসিয়াল নথি' },
        subtitle: { en: 'Download our registration certificates and legal papers.', bn: 'আমাদের নিবন্ধন সনদ এবং আইনি কাগজপত্র ডাউনলোড করুন।' },
      },
      registrations: [
        {
          title: { en: 'Social Welfare Registration', bn: 'সমাজসেবা নিবন্ধন' },
          number: '(Dha)-09437',
          date: { en: '14th June 2017', bn: '১৪ই জুন ২০১৭' },
          authority: { en: 'Department of Social Welfare, Dhaka', bn: 'সমাজসেবা অধিদপ্তর, ঢাকা' },
          type: 'social'
        },
        {
          title: { en: 'NGO Affairs Bureau', bn: 'এনজিও বিষয়ক ব্যুরো' },
          number: '৩১৬৭',
          date: { en: '04/07/2018', bn: '০৪/০৭/২০১৮' },
          authority: { en: 'NGO Affairs Bureau, Prime Minister\'s Office', bn: 'এনজিও বিষয়ক ব্যুরো, প্রধানমন্ত্রীর কার্যালয়' },
          type: 'ngo'
        },
        {
          title: { en: 'Joint Stock Registration', bn: 'যৌথ মূলধন নিবন্ধন' },
          number: 'S-12242/2015',
          date: { en: '14/07/2015', bn: '১৪/০৭/২০১৫' },
          authority: { en: 'Registrar of Joint Stock Companies & Firms', bn: 'যৌথ মূলধন কোম্পানি ও ফার্মসমূহের পরিদপ্তর' },
          type: 'joint'
        }
      ]
    },
  },
  programs: {
    page: {
      title: { en: 'Our Programs', bn: 'আমাদের কার্যক্রম' },
      subtitle: { en: 'Discover how we support and empower persons with disabilities through various initiatives.', bn: 'বিভিন্ন উদ্যোগের মাধ্যমে আমরা কীভাবে প্রতিবন্ধী ব্যক্তিদের সহায়তা এবং ক্ষমতায়ন করি তা আবিষ্কার করুন।' },
    },
    learnMore: { en: 'Learn More', bn: 'আরও জানুন' },
    list: [
      {
        id: 'education',
        title: { en: 'Education Program', bn: 'শিক্ষা কার্যক্রম' },
        desc: { en: 'Quality education for children with disabilities at Satarkul Diversity Disabled School.', bn: 'সাতারকুল বৈচিত্র্য প্রতিবন্ধী বিদ্যালয়ে প্রতিবন্ধী শিশুদের জন্য গুণগত শিক্ষা।' }
      },
      {
        id: 'health',
        title: { en: 'Health Services', bn: 'স্বাস্থ্য সেবা কার্যক্রম' },
        desc: { en: 'Comprehensive health support and medical assistance for persons with disabilities.', bn: 'প্রতিবন্ধী ব্যক্তিদের জন্য ব্যাপক স্বাস্থ্য সহায়তা এবং চিকিৎসা সহায়তা।' }
      },
      {
        id: 'skill-development',
        title: { en: 'Skill Development', bn: 'দক্ষতা উন্নয়ন প্রশিক্ষণ' },
        desc: { en: 'Vocational training in handicrafts, tailoring, and art for economic empowerment.', bn: 'আর্থিক ক্ষমতায়নের জন্য হস্তশিল্প, দর্জিবিজ্ঞান এবং শিল্পকলায় বৃত্তিমূলক প্রশিক্ষণ।' }
      },
      {
        id: 'financial-support',
        title: { en: 'Financial Support', bn: 'আর্থিক সহায়তা কার্যক্রম' },
        desc: { en: 'Providing financial aid to ultra-poor disabled individuals and their families.', bn: 'অতি দরিদ্র প্রতিবন্ধী ব্যক্তি এবং তাদের পরিবারকে আর্থিক সহায়তা প্রদান।' }
      },
      {
        id: 'assistive-devices',
        title: { en: 'Assistive Devices', bn: 'সহায়ক উপকরণ বিতরণ' },
        desc: { en: 'Distributing wheelchairs, crutches, and other assistive devices for mobility.', bn: 'চলাচলের জন্য হুইলচেয়ার, ক্রাচ এবং অন্যান্য সহায়ক উপকরণ বিতরণ।' }
      },
      {
        id: 'awareness',
        title: { en: 'Awareness Program', bn: 'সচেতনতামূলক কার্যক্রম' },
        desc: { en: 'Promoting disability rights and social inclusion through community awareness.', bn: 'সামাজিক সচেতনতার মাধ্যমে প্রতিবন্ধী অধিকার এবং সামাজিক অন্তর্ভুক্তি প্রচার করা।' }
      },
      {
        id: 'social-support',
        title: { en: 'Social Support Services', bn: 'সামাজিক সহায়তা সেবা' },
        desc: { en: 'Empowering disabled individuals through documentation and legal assistance.', bn: 'নথিপত্র এবং আইনি সহায়তার মাধ্যমে প্রতিবন্ধী ব্যক্তিদের ক্ষমতায়ন।' }
      },
      {
        id: 'special-programs',
        title: { en: 'Special Programs', bn: 'বিশেষ কার্যক্রম' },
        desc: { en: 'Innovative initiatives designed for specialized care and development.', bn: 'বিশেষায়িত যত্ন এবং উন্নয়নের জন্য ডিজাইন করা উদ্ভাবনী উদ্যোগ।' }
      }
    ],
    details: {
      education: {
        title: { en: "Inclusive Education Program", bn: "অন্তর্ভুক্তিমূলক শিক্ষা কার্যক্রম" },
        subtitle: { en: "Providing quality education and specialized support for children with disabilities.", bn: "প্রতিবন্ধী শিশুদের জন্য মানসম্মত শিক্ষা এবং বিশেষায়িত সহায়তা প্রদান।" },
        intro: {
          established: { en: 'Established: 1st Sept 2014', bn: 'প্রতিষ্ঠাকাল: ১লা সেপ্টেম্বর ২০১৪' },
          tag: { en: 'Special School', bn: 'বিশেষ বিদ্যালয়' },
          title: { en: 'Satarkul Diversity Disabled School', bn: 'সাতারকুল বৈচিত্র্য প্রতিবন্ধী বিদ্যালয়' },
          description: { en: 'In 2014, based on field surveys and discussions with parents of disabled children, it was found that disabled children are in the most vulnerable position in Bangladesh in terms of receiving education. Although the primary education enrollment rate is 97 percent, only 11 percent of children with disabilities receive any form of education. Due to lack of birth registration, many children with disabilities experience deprivation from the beginning of their lives. Due to lack of awareness and finances in very poor families, backward disabled children focus on begging instead of education. After reviewing this situation, Satarkul Development Organization for Disability took the initiative to establish a school for very poor disabled children who are deprived of educational opportunities.', bn: '২০১৪ সালে মাঠ পর্যায়ের জরিপ এবং প্রতিবন্ধী শিশুদের অভিভাবকদের সাথে আলোচনার ভিত্তিতে দেখা যায় যে বাংলাদেশে প্রতিবন্ধী শিশুরা শিক্ষা গ্রহণের ক্ষেত্রে সবচেয়ে দুর্বল অবস্থানে রয়েছে। প্রাথমিক শিক্ষায় ভর্তির হার ৯৭ শতাংশ হলেও মাত্র ১১ শতাংশ প্রতিবন্ধী শিশু কোনো প্রকার শিক্ষা গ্রহণ করে। জন্ম নিবন্ধনের অভাবে অনেক প্রতিবন্ধী শিশু তাদের জীবনের শুরু থেকেই বঞ্চনার শিকার হয়। অত্যন্ত দরিদ্র পরিবারে সচেতনতার অভাব এবং অর্থের অভাবে পিছিয়ে পড়া প্রতিবন্ধী শিশুরা শিক্ষার পরিবর্তে ভিক্ষাবৃত্তির দিকে ঝুঁকে পড়ে। এই পরিস্থিতি পর্যালোচনা করে সাতারকুল প্রতিবন্ধী উন্নয়ন সংস্থা শিক্ষার সুযোগ থেকে বঞ্চিত অত্যন্ত দরিদ্র প্রতিবন্ধী শিশুদের জন্য একটি বিদ্যালয় প্রতিষ্ঠার উদ্যোগ গ্রহণ করে।' },
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
            { en: 'Music, Dance, Drama, Rhymes, Poetry, Recitation', bn: 'গান, নাচ, নাটক, ছড়া, কবিতা, আবৃত্তি' },
            { en: 'Clay-Stone Crafts, Hand Painting, Sewing, Block-Batik', bn: 'মাটি-পাথরের কারুশিল্প, হাতে আঁকা, নকশী কাঁথা সেলাই, ব্লক-বাটিক' },
            { en: 'Cooking, Proper Dressing, Hand-Foot Washing Rules', bn: 'রান্না করা এবং সঠিক পোশাক পরিধান, হাত-পা ধোয়ার নিয়ম' },
          ]
        },
        stats: {
          title: { en: 'Student Demographics', bn: 'শিক্ষার্থী পরিসংখ্যান' },
          list: [
            { label: { en: 'Total Students', bn: 'মোট শিক্ষার্থী' }, value: '120', icon: 'Users', color: 'text-primary' },
            { label: { en: 'Boys', bn: 'ছেলে' }, value: '74', icon: 'User', color: 'text-secondary' },
            { label: { en: 'Girls', bn: 'মেয়ে' }, value: '46', icon: 'User', color: 'text-accent' },
            { label: { en: 'Teachers', bn: 'শিক্ষক' }, value: '08', icon: 'GraduationCap', color: 'text-primary' },
          ]
        },
        subPrograms: {
          title: { en: 'Comprehensive Support', bn: 'ব্যাপক সহায়তা' },
          list: [
            { title: { en: 'Physiotherapy', bn: 'ফিজিওথেরাপি' }, desc: { en: 'Regular physiotherapy sessions for students with physical disabilities.', bn: 'শারীরিক প্রতিবন্ধী শিক্ষার্থীদের জন্য নিয়মিত ফিজিওথেরাপি সেশন।' }, icon: 'Activity', timeline: { en: 'Daily', bn: 'প্রতিদিন' } },
            { title: { en: 'Speech Therapy', bn: 'স্পিচ থেরাপি' }, desc: { en: 'Specialized support for children with speech and communication challenges.', bn: 'কথা বলা এবং যোগাযোগের চ্যালেঞ্জযুক্ত শিশুদের জন্য বিশেষায়িত সহায়তা।' }, icon: 'Mic2', timeline: { en: 'Weekly', bn: 'সাপ্তাহিক' } },
            { title: { en: 'Nutritious Food', bn: 'পুষ্টিকর খাবার' }, desc: { en: 'Providing balanced meals to ensure healthy growth and development.', bn: 'সুস্থ বৃদ্ধি এবং বিকাশ নিশ্চিত করতে সুষম খাবার সরবরাহ করা।' }, icon: 'Utensils', timeline: { en: 'Daily', bn: 'প্রতিদিন' } },
            { title: { en: 'Transport Service', bn: 'পরিবহন সেবা' }, desc: { en: 'Safe and accessible transport for students to and from school.', bn: 'শিক্ষার্থীদের স্কুলে আসা-যাওয়ার জন্য নিরাপদ এবং সহজলভ্য পরিবহন।' }, icon: 'Bus', timeline: { en: 'Daily', bn: 'প্রতিদিন' } },
          ]
        },
        adultEducation: {
          title: { en: 'Adult Education Program', bn: 'বয়স্ক শিক্ষা কার্যক্রম' },
          description: { en: 'Every year, an adult education program is conducted with 25 parents of disabled students and ultra-poor disabled women and men. Here they are taught literacy, enabling them to read, write, and sign in Bangla, making them more self-aware and caring towards their children.', bn: 'প্রতি বছর প্রতিবন্ধী শিক্ষার্থীদের ২৫ জন অভিভাবক এবং অতি দরিদ্র প্রতিবন্ধী নারী ও পুরুষদের নিয়ে বয়স্ক শিক্ষা কার্যক্রম পরিচালিত হয়। এখানে তাদের অক্ষর জ্ঞান শেখানো হয়, যার ফলে তারা পড়তে ও স্বাক্ষর করতে পারে এবং আগের চেয়ে বেশি আত্মসচেতন হয়।' },
          benefits: [
            { en: 'Literacy & Signature Skills', bn: 'সাক্ষরতা ও স্বাক্ষর দক্ষতা' },
            { en: 'Child Care Awareness', bn: 'শিশু যত্ন সচেতনতা' },
            { en: 'Self-Awareness Training', bn: 'আত্মসচেতনতা প্রশিক্ষণ' },
          ]
        }
      },
      health: {
        title: { en: "Health Services", bn: "স্বাস্থ্যসেবা" },
        subtitle: { en: "Providing essential healthcare and medical support to our community.", bn: "আমাদের সম্প্রদায়ের জন্য প্রয়োজনীয় স্বাস্থ্যসেবা এবং চিকিৎসা সহায়তা প্রদান।" },
        intro: {
          tag: { en: 'Health Services', bn: 'স্বাস্থ্যসেবা' },
          title: { en: 'Comprehensive Health Support', bn: 'ব্যাপক স্বাস্থ্য সহায়তা' },
          description: { en: 'We provide essential healthcare services, including regular checkups, specialized therapies, and emergency medical support to persons with disabilities in our community.', bn: 'আমরা আমাদের সম্প্রদায়ের প্রতিবন্ধী ব্যক্তিদের নিয়মিত চেকআপ, বিশেষায়িত থেরাপি এবং জরুরি চিকিৎসা সহায়তা সহ প্রয়োজনীয় স্বাস্থ্যসেবা প্রদান করি।' },
          targetGroup: { en: 'Disabled Persons & Members', bn: 'প্রতিবন্ধী ব্যক্তি ও সদস্য' }
        },
        beneficiariesLabel: { en: 'Beneficiaries:', bn: 'উপকারভোগী:' },
        services: [
          { title: { en: 'Medical Checkups', bn: 'চিকিৎসা পরীক্ষা' }, desc: { en: 'Regular health screenings and general medical checkups for disabled individuals.', bn: 'প্রতিবন্ধী ব্যক্তিদের জন্য নিয়মিত স্বাস্থ্য স্ক্রিনিং এবং সাধারণ চিকিৎসা পরীক্ষা।' }, icon: 'Stethoscope', color: 'bg-primary/10 text-primary', timeline: { en: 'Monthly', bn: 'মাসিক' } },
          { title: { en: 'Physiotherapy', bn: 'ফিজিওথেরাপি' }, desc: { en: 'Specialized physical therapy sessions to improve mobility and strength.', bn: 'চলাচল এবং শক্তি উন্নত করার জন্য বিশেষায়িত শারীরিক থেরাপি সেশন।' }, icon: 'Activity', color: 'bg-secondary/10 text-secondary', timeline: { en: 'Weekly', bn: 'সাপ্তাহিক' } },
          { title: { en: 'Medicine Distribution', bn: 'ওষুধ বিতরণ' }, desc: { en: 'Providing essential medicines to ultra-poor disabled patients.', bn: 'অতি দরিদ্র প্রতিবন্ধী রোগীদের প্রয়োজনীয় ওষুধ সরবরাহ করা।' }, icon: 'Pill', color: 'bg-accent/10 text-accent', timeline: { en: 'As Needed', bn: 'প্রয়োজন অনুযায়ী' } },
        ],
        impact: {
          title: { en: 'Data-Driven Healthcare', bn: 'তথ্য-চালিত স্বাস্থ্যসেবা' },
          description: { en: 'We track every medical intervention to ensure our community receives the best possible care and support.', bn: 'আমাদের সম্প্রদায় যাতে সর্বোত্তম যত্ন এবং সহায়তা পায় তা নিশ্চিত করার জন্য আমরা প্রতিটি চিকিৎসা হস্তক্ষেপ ট্র্যাক করি।' },
          stats: [
            { label: { en: 'Eye Checkups', bn: 'চক্ষু পরীক্ষা' }, value: '155+' },
            { label: { en: 'ORS Beneficiaries', bn: 'ওআরএস উপকারভোগী' }, value: '150+' },
          ]
        },
        events: [
          { title: { en: 'Eye Care Camp', bn: 'চক্ষু সেবা ক্যাম্প' }, date: '2023', icon: 'Eye', beneficiaries: { en: '155 Persons', bn: '১৫৫ জন' } },
          { title: { en: 'Health Awareness', bn: 'স্বাস্থ্য সচেতনতা' }, date: '2023', icon: 'HeartPulse', beneficiaries: { en: '200+ Families', bn: '২০০+ পরিবার' } },
        ]
      },
      'skill-development': {
        title: { en: 'Skill Development Training', bn: 'দক্ষতা উন্নয়ন প্রশিক্ষণ' },
        subtitle: { en: 'Empowering disabled women and youth through vocational skills and handicrafts.', bn: 'বৃত্তিমূলক দক্ষতা এবং হস্তশিল্পের মাধ্যমে প্রতিবন্ধী নারী ও যুবকদের ক্ষমতায়ন।' },
        intro: {
          tag: { en: 'Vocational Training', bn: 'বৃত্তিমূলক প্রশিক্ষণ' },
          title: { en: 'Handicrafts & Vocational Skills', bn: 'হস্তশিল্প ও বৃত্তিমূলক দক্ষতা' },
          description: { en: 'Our skill development program focuses on providing sustainable livelihoods for disabled women, adolescent girls, and their guardians. By teaching creative and practical skills, we help them achieve financial independence and social recognition.', bn: 'আমাদের দক্ষতা উন্নয়ন কর্মসূচির লক্ষ্য হলো প্রতিবন্ধী নারী, কিশোরী এবং তাদের অভিভাবকদের জন্য টেকসই জীবিকার ব্যবস্থা করা। সৃজনশীল এবং ব্যবহারিক দক্ষতা শেখানোর মাধ্যমে আমরা তাদের আর্থিক স্বাধীনতা এবং সামাজিক স্বীকৃতি অর্জনে সহায়তা করি।' },
          targetGroupLabel: { en: 'Target Group:', bn: 'লক্ষ্যভুক্ত গোষ্ঠী:' },
          targetGroup: { en: 'Disabled Women, Girls & Guardians', bn: 'প্রতিবন্ধী নারী, কিশোরী ও অভিভাবক' }
        },
        coursesTitle: { en: 'Training Courses', bn: 'প্রশিক্ষণ কোর্সসমূহ' },
        courses: [
          { title: { en: 'Handicrafts', bn: 'হস্তশিল্প' }, desc: { en: 'Training in making various handicraft items for local and global markets.', bn: 'স্থানীয় এবং বিশ্ববাজারের জন্য বিভিন্ন হস্তশিল্প তৈরির প্রশিক্ষণ।' }, icon: 'Palette', timeline: { en: '6 Months', bn: '৬ মাস' } },
          { title: { en: 'Tailoring', bn: 'দর্জিবিজ্ঞান' }, desc: { en: 'Professional tailoring and dressmaking courses for women with disabilities.', bn: 'প্রতিবন্ধী নারীদের জন্য পেশাদার দর্জিবিজ্ঞান এবং পোশাক তৈরির কোর্স।' }, icon: 'Scissors', timeline: { en: '4 Months', bn: '৪ মাস' } },
          { title: { en: 'Computer Literacy', bn: 'কম্পিউটার শিক্ষা' }, desc: { en: 'Basic computer skills and digital literacy for the modern workforce.', bn: 'আধুনিক কর্মীবাহিনীর জন্য মৌলিক কম্পিউটার দক্ষতা এবং ডিজিটাল সাক্ষরতা।' }, icon: 'Monitor', timeline: { en: '3 Months', bn: '৩ মাস' } },
        ],
        projectsTitle: { en: 'Featured Projects', bn: 'উল্লেখযোগ্য প্রকল্পসমূহ' },
        partnerLabel: { en: 'Partner Organization:', bn: 'অংশীদার সংস্থা:' },
        projects: [
          { 
            title: { en: 'Vocational Training for Disabled Women', bn: 'প্রতিবন্ধী নারীদের জন্য বৃত্তিমূলক প্রশিক্ষণ' }, 
            desc: { en: 'A comprehensive project aimed at providing specialized vocational training to disabled women and adolescent girls.', bn: 'প্রতিবন্ধী নারী ও কিশোরীদের বিশেষায়িত বৃত্তিমূলক প্রশিক্ষণ প্রদানের লক্ষ্যে একটি ব্যাপক প্রকল্প।' }, 
            partner: { en: 'NGO Affairs Bureau', bn: 'এনজিও বিষয়ক ব্যুরো' }, 
            duration: { en: '1 Year', bn: '১ বছর' }, 
            participants: { en: '50 Persons', bn: '৫০ জন' }, 
            icon: 'Award' 
          },
          { 
            title: { en: 'Handicraft Production Center', bn: 'হস্তশিল্প উৎপাদন কেন্দ্র' }, 
            desc: { en: 'Establishing a center where trained individuals can produce and sell their handicrafts.', bn: 'একটি কেন্দ্র স্থাপন করা যেখানে প্রশিক্ষিত ব্যক্তিরা তাদের হস্তশিল্প উৎপাদন এবং বিক্রি করতে পারে।' }, 
            partner: { en: 'Local Government', bn: 'স্থানীয় সরকার' }, 
            duration: { en: 'Ongoing', bn: 'চলমান' }, 
            participants: { en: '30+ Artisans', bn: '৩০+ কারিগর' }, 
            icon: 'Home' 
          }
        ],
        galleryTitle: { en: 'Training Gallery', bn: 'প্রশিক্ষণ গ্যালারি' },
        gallerySubtitle: { en: 'Glimpses of our members learning and creating.', bn: 'আমাদের সদস্যদের শেখার এবং তৈরির কিছু মুহূর্ত।' },
        ctaTitle: { en: 'Support Our Artisans', bn: 'আমাদের কারিগরদের সমর্থন করুন' },
        ctaDescription: { en: 'You can support our skill development program by donating materials or purchasing handicrafts made by our members.', bn: 'আপনি উপকরণ দান করে বা আমাদের সদস্যদের তৈরি হস্তশিল্প কিনে আমাদের দক্ষতা উন্নয়ন কর্মসূচিতে সহায়তা করতে পারেন।' },
        ctaButton: { en: 'Contact for Orders', bn: 'অর্ডারের জন্য যোগাযোগ করুন' }
      },
      'financial-support': {
        title: { en: 'Financial Support & Micro-SME', bn: 'আর্থিক সহায়তা এবং ক্ষুদ্র-SME' },
        subtitle: { en: 'Providing financial aid and micro-loans for sustainable livelihoods.', bn: 'টেকসই জীবিকার জন্য আর্থিক সহায়তা এবং ক্ষুদ্র ঋণ প্রদান।' },
        overview: {
          tag: { en: 'Economic Empowerment', bn: 'অর্থনৈতিক ক্ষমতায়ন' },
          title: { en: 'Financial Independence', bn: 'আর্থিক স্বাধীনতা' },
          description: { en: 'We offer various financial support programs, including one-time grants for small businesses and micro-loans for SME development, specifically tailored for persons with disabilities.', bn: 'আমরা বিভিন্ন আর্থিক সহায়তা কর্মসূচি অফার করি, যার মধ্যে রয়েছে ছোট ব্যবসার জন্য এককালীন অনুদান এবং SME উন্নয়নের জন্য ক্ষুদ্র ঋণ, যা বিশেষভাবে প্রতিবন্ধী ব্যক্তিদের জন্য তৈরি।' },
          target: { en: 'Disabled Entrepreneurs & Families', bn: 'প্রতিবন্ধী উদ্যোক্তা ও পরিবার' },
          stats: [
            { label: { en: 'Total Grants', bn: 'মোট অনুদান' }, value: '50+', color: 'text-primary' },
            { label: { en: 'Active Loans', bn: 'সক্রিয় ঋণ' }, value: '35', color: 'text-secondary' },
            { label: { en: 'Success Rate', bn: 'সাফল্যের হার' }, value: '92%', color: 'text-accent', fullWidth: true, icon: 'TrendingUp' }
          ]
        },
        grantsTitle: { en: 'Financial Grants', bn: 'আর্থিক অনুদান' },
        grantsSubtitle: { en: 'One-time support for starting small home-based businesses.', bn: 'ছোট গৃহভিত্তিক ব্যবসা শুরু করার জন্য এককালীন সহায়তা।' },
        grantsTag: { en: 'Grant Program', bn: 'অনুদান কর্মসূচি' },
        grantAmountLabel: { en: 'Total Grant Amount:', bn: 'মোট অনুদানের পরিমাণ:' },
        beneficiariesLabel: { en: 'Beneficiaries:', bn: 'উপকারভোগী:' },
        grants: [
          { 
            title: { en: 'Small Shop Setup Grant', bn: 'ছোট দোকান স্থাপনের অনুদান' }, 
            date: '2023',
            amount: '35,000 BDT',
            beneficiaries: { en: '10 Families', bn: '১০টি পরিবার' },
            items: [
              { name: { en: 'Shop Rent', bn: 'দোকান ভাড়া' }, purpose: { en: 'Advance Payment', bn: 'অগ্রিম প্রদান' }, icon: 'Home', amount: '11,000' },
              { name: { en: 'Initial Stock', bn: 'প্রাথমিক স্টক' }, purpose: { en: 'Grocery Items', bn: 'মুদি পণ্য' }, icon: 'Package', amount: '24,000' }
            ]
          },
          { 
            title: { en: 'Education Stipend', bn: 'শিক্ষা উপবৃত্তি' }, 
            desc: { en: 'Financial aid for students with disabilities to cover educational expenses.', bn: 'প্রতিবন্ধী শিক্ষার্থীদের শিক্ষাগত খরচ মেটানোর জন্য আর্থিক সহায়তা।' },
            date: '2023',
            amount: '12,000 BDT',
            beneficiaries: { en: '25 Students', bn: '২৫ জন' }
          }
        ],
        loansTitle: { en: 'Micro-SME Loan Program', bn: 'ক্ষুদ্র-SME ঋণ কার্যক্রম' },
        loansSubtitle: { en: 'Revolving fund for business expansion and sustainability.', bn: 'ব্যবসা সম্প্রসারণ এবং স্থায়িত্বের জন্য আবর্তনশীল তহবিল।' },
        loans: [
          { 
            title: { en: 'Micro-SME Loan Phase 1', bn: 'ক্ষুদ্র-SME ঋণ পর্যায় ১' }, 
            desc: { en: 'Initial capital for small-scale home-based businesses.', bn: 'ক্ষুদ্রাকৃতির গৃহভিত্তিক ব্যবসার জন্য প্রাথমিক পুঁজি।' },
            date: 'Jan 2023',
            stats: { en: '15 Loans', bn: '১৫টি ঋণ' }
          },
          { 
            title: { en: 'Micro-SME Loan Phase 2', bn: 'ক্ষুদ্র-SME ঋণ পর্যায় ২' }, 
            desc: { en: 'Expansion capital for established small shops.', bn: 'প্রতিষ্ঠিত ছোট দোকানের জন্য সম্প্রসারণ পুঁজি।' },
            date: 'Jul 2023',
            stats: { en: '20 Loans', bn: '২০টি ঋণ' }
          }
        ],
        galleryTitle: { en: 'Success Stories', bn: 'সাফল্যের গল্প' },
        ctaTitle: { en: 'Empower an Entrepreneur', bn: 'একজন উদ্যোক্তাকে ক্ষমতায়ন করুন' },
        ctaDescription: { en: 'Your contribution can provide the seed capital for a disabled person to start their own business and achieve independence.', bn: 'আপনার অবদান একজন প্রতিবন্ধী ব্যক্তিকে নিজস্ব ব্যবসা শুরু করতে এবং স্বাধীনতা অর্জনে বীজ মূলধন সরবরাহ করতে পারে।' },
        ctaButton: { en: 'Support a Business', bn: 'ব্যবসায় সহায়তা করুন' }
      },
      'assistive-devices': {
        title: { en: 'Assistive Devices Distribution', bn: 'সহায়ক উপকরণ বিতরণ' },
        subtitle: { en: 'Enhancing mobility and accessibility through essential assistive tools.', bn: 'অপরিহার্য সহায়ক সরঞ্জামের মাধ্যমে গতিশীলতা এবং অ্যাক্সেসযোগ্যতা বৃদ্ধি।' },
        intro: {
          title: { en: 'Tools for Independence', bn: 'স্বাধীনতার জন্য সরঞ্জাম' },
          description: { en: 'Through advocacy with various donor organizations and philanthropists, we distribute high-quality assistive devices to our members, ensuring they can navigate the world with dignity.', bn: 'বিভিন্ন দাতা সংস্থা এবং জনহিতৈষীদের সাথে অ্যাডভোকেসির মাধ্যমে, আমরা আমাদের সদস্যদের মধ্যে উচ্চ-মানের সহায়ক সরঞ্জাম বিতরণ করি, যাতে তারা মর্যাদার সাথে চলাফেরা করতে পারে।' },
          timeline: { en: 'Ongoing', bn: 'চলমান' },
          targetGroup: { en: 'Disabled Persons & Students', bn: 'প্রতিবন্ধী ব্যক্তি ও শিক্ষার্থী' }
        },
        devices: [
          { title: { en: 'Wheelchairs', bn: 'হুইলচেয়ার' }, desc: { en: 'Manual and motorized wheelchairs for mobility.', bn: 'চলাচলের জন্য ম্যানুয়াল এবং মোটরচালিত হুইলচেয়ার।' }, icon: 'Wheelchair', color: 'bg-blue-50 text-blue-600' },
          { title: { en: 'White Canes', bn: 'সাদা ছড়ি' }, desc: { en: 'Essential tools for visually impaired individuals.', bn: 'দৃষ্টিপ্রতিবন্ধী ব্যক্তিদের জন্য অপরিহার্য সরঞ্জাম।' }, icon: 'Accessibility', color: 'bg-amber-50 text-amber-600' },
          { title: { en: 'Hearing Aids', bn: 'শ্রবণ সহায়ক যন্ত্র' }, desc: { en: 'Digital hearing aids for hearing impaired members.', bn: 'শ্রবণপ্রতিবন্ধী সদস্যদের জন্য ডিজিটাল শ্রবণ সহায়ক যন্ত্র।' }, icon: 'Ear', color: 'bg-emerald-50 text-emerald-600' },
          { title: { en: 'Crutches & Walkers', bn: 'ক্রাচ এবং ওয়াকার' }, desc: { en: 'Support tools for those with physical disabilities.', bn: 'শারীরিক প্রতিবন্ধীদের জন্য সহায়ক সরঞ্জাম।' }, icon: 'Activity', color: 'bg-purple-50 text-purple-600' }
        ],
        impact: {
          title: { en: 'Why Assistive Technology Matters', bn: 'সহায়ক প্রযুক্তি কেন গুরুত্বপূর্ণ' },
          points: [
            { title: { en: 'Increased Mobility', bn: 'বর্ধিত গতিশীলতা' }, desc: { en: 'Enabling individuals to move freely within their communities.', bn: 'ব্যক্তিদের তাদের সম্প্রদায়ের মধ্যে অবাধে চলাফেরা করতে সক্ষম করা।' } },
            { title: { en: 'Educational Access', bn: 'শিক্ষায় প্রবেশাধিকার' }, desc: { en: 'Helping students with disabilities attend school regularly.', bn: 'প্রতিবন্ধী শিক্ষার্থীদের নিয়মিত স্কুলে যেতে সাহায্য করা।' } },
            { title: { en: 'Economic Participation', bn: 'আর্থিক অংশগ্রহণ' }, desc: { en: 'Supporting workers to reach their workplaces safely.', bn: 'কর্মীদের নিরাপদে তাদের কর্মস্থলে পৌঁছাতে সহায়তা করা।' } }
          ]
        }
      },
      'awareness': {
        title: { en: 'Awareness & Advocacy', bn: 'সচেতনতা এবং অ্যাডভোকেসি' },
        subtitle: { en: 'Promoting disability rights and social inclusion through awareness.', bn: 'সচেতনতার মাধ্যমে প্রতিবন্ধী অধিকার এবং সামাজিক অন্তর্ভুক্তি প্রচার।' },
        intro: {
          tag: { en: 'Social Awareness', bn: 'সামাজিক সচেতনতা' },
          title: { en: 'Changing Perspectives', bn: 'দৃষ্টিভঙ্গি পরিবর্তন' },
          description: { en: 'We work tirelessly to raise awareness about disability rights, social inclusion, and the potential of persons with disabilities. Through campaigns, workshops, and advocacy, we aim to build a more inclusive society.', bn: 'আমরা প্রতিবন্ধী অধিকার, সামাজিক অন্তর্ভুক্তি এবং প্রতিবন্ধী ব্যক্তিদের সম্ভাবনা সম্পর্কে সচেতনতা বৃদ্ধিতে নিরলসভাবে কাজ করি। প্রচারণা, কর্মশালা এবং অ্যাডভোকেসির মাধ্যমে আমরা একটি অন্তর্ভুক্তিমূলক সমাজ গঠনের লক্ষ্য রাখি।' }
        },
        programs: [
          { 
            id: 'disability-rights',
            title: { en: 'Disability Rights Campaign', bn: 'প্রতিবন্ধী অধিকার প্রচারণা' }, 
            description: { en: 'Advocating for the implementation of disability laws and ensuring equal opportunities.', bn: 'প্রতিবন্ধী আইন বাস্তবায়নের জন্য অ্যাডভোকেসি এবং সমান সুযোগ নিশ্চিত করা।' }, 
            image: 'https://picsum.photos/seed/rights/800/600',
            icon: 'ShieldCheck',
            color: 'bg-primary/10 text-primary',
            date: { en: 'Ongoing', bn: 'চলমান' }
          },
          { 
            id: 'community-workshops',
            title: { en: 'Community Awareness Workshops', bn: 'সামাজিক সচেতনতা কর্মশালা' }, 
            description: { en: 'Workshops for community leaders and families to reduce social stigma.', bn: 'সামাজিক কুসংস্কার কমাতে সামাজিক নেতা এবং পরিবারের জন্য কর্মশালা।' }, 
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
          imageTitle: { en: 'Rights for All', bn: 'সবার জন্য অধিকার' },
          title: { en: 'Policy & Rights Advocacy', bn: 'নীতি ও অধিকার অ্যাডভোকেসি' },
          description: { en: 'We engage with policymakers and local authorities to ensure that the voices of persons with disabilities are heard and their rights are protected.', bn: 'আমরা নীতিনির্ধারক এবং স্থানীয় কর্তৃপক্ষের সাথে যুক্ত হই যাতে প্রতিবন্ধী ব্যক্তিদের কণ্ঠস্বর শোনা যায় এবং তাদের অধিকার সুরক্ষিত হয়।' },
          points: [
            { text: { en: 'Implementation of Disability Acts', bn: 'প্রতিবন্ধী আইন বাস্তবায়ন' }, icon: 'FileText' },
            { text: { en: 'Accessible Public Infrastructure', bn: 'সহজলভ্য সরকারি অবকাঠামো' }, icon: 'Building' },
            { text: { en: 'Inclusive Employment Policies', bn: 'অন্তর্ভুক্তিমূলক কর্মসংস্থান নীতি' }, icon: 'Briefcase' }
          ]
        },
        ctaTitle: { en: 'Join Our Advocacy', bn: 'আমাদের অ্যাডভোকেসিতে যোগ দিন' },
        ctaDescription: { en: 'Your voice matters. Help us advocate for a world where everyone has equal rights and opportunities.', bn: 'আপনার কণ্ঠস্বর গুরুত্বপূর্ণ। এমন একটি বিশ্বের জন্য আমাদের অ্যাডভোকেসিতে সহায়তা করুন যেখানে সবার সমান অধিকার এবং সুযোগ রয়েছে।' },
        ctaButton1: { en: 'Become a Member', bn: 'সদস্য হন' },
        ctaButton2: { en: 'Contact Us', bn: 'যোগাযোগ করুন' }
      },
      'social-support': {
        title: { en: 'Social & Legal Support', bn: 'সামাজিক এবং আইনি সহায়তা' },
        subtitle: { en: 'Providing essential social services and legal aid for persons with disabilities.', bn: 'প্রতিবন্ধী ব্যক্তিদের জন্য প্রয়োজনীয় সামাজিক সেবা এবং আইনি সহায়তা প্রদান।' },
        intro: {
          tag: { en: 'Social Services', bn: 'সামাজিক সেবা' },
          title: { en: 'Holistic Social Support', bn: 'সামগ্রিক সামাজিক সহায়তা' },
          description: { en: 'We provide a range of social and legal support services to ensure that persons with disabilities can live with dignity and security. From legal aid to social counseling, we are here to support our community.', bn: 'আমরা প্রতিবন্ধী ব্যক্তিরা যাতে মর্যাদা ও নিরাপত্তার সাথে বসবাস করতে পারে তা নিশ্চিত করতে বিভিন্ন সামাজিক ও আইনি সহায়তা সেবা প্রদান করি। আইনি সহায়তা থেকে শুরু করে সামাজিক কাউন্সেলিং পর্যন্ত, আমরা আমাদের সম্প্রদায়কে সমর্থন করতে এখানে আছি।' },
          cta1: { en: 'Request Support', bn: 'সহায়তা অনুরোধ করুন' },
          cta2: { en: 'Learn More', bn: 'আরও জানুন' },
          badgeTitle: { en: 'Legal Aid Partner', bn: 'আইনি সহায়তা অংশীদার' },
          badgeSubtitle: { en: 'Certified Support', bn: 'প্রত্যয়িত সহায়তা' },
          badgeQuote: { en: '"Justice and dignity for every individual."', bn: '"প্রত্যেক ব্যক্তির জন্য ন্যায়বিচার ও মর্যাদা।"' }
        },
        servicesTitle: { en: 'Our Support Services', bn: 'আমাদের সহায়তা সেবাসমূহ' },
        servicesSubtitle: { en: 'Comprehensive assistance for social and legal challenges.', bn: 'সামাজিক এবং আইনি চ্যালেঞ্জের জন্য ব্যাপক সহায়তা।' },
        services: [
          { 
            id: 'legal-aid',
            title: { en: 'Legal Aid & Counseling', bn: 'আইনি সহায়তা এবং কাউন্সেলিং' }, 
            desc: { en: 'Free legal advice and representation for disability-related cases.', bn: 'প্রতিবন্ধকতা সংক্রান্ত মামলার জন্য বিনামূল্যে আইনি পরামর্শ এবং প্রতিনিধিত্ব।' }, 
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
            title: { en: 'Social Counseling', bn: 'সামাজিক কাউন্সেলিং' }, 
            desc: { en: 'Psychosocial support for individuals and families to cope with social barriers.', bn: 'সামাজিক বাধা মোকাবিলায় ব্যক্তি ও পরিবারের জন্য মনস্তাত্ত্বিক সহায়তা।' }, 
            icon: 'Heart',
            color: 'bg-rose-50 text-rose-600',
            timeline: { en: 'Weekly', bn: 'সাপ্তাহিক' },
            features: [
              { en: 'Family Support', bn: 'পারিবারিক সহায়তা' },
              { en: 'Mental Wellness', bn: 'মানসিক সুস্থতা' }
            ]
          }
        ],
        cta: {
          title: { en: 'Need Social or Legal Help?', bn: 'সামাজিক বা আইনি সাহায্য প্রয়োজন?' },
          description: { en: 'Our dedicated team is ready to assist you with any social or legal challenges you may be facing.', bn: 'আমাদের নিবেদিত দল আপনার যেকোনো সামাজিক বা আইনি চ্যালেঞ্জে আপনাকে সহায়তা করতে প্রস্তুত।' },
          phoneLabel: { en: 'Call Us', bn: 'আমাদের কল করুন' },
          phone: '+880 1712-345678',
          emailLabel: { en: 'Email Us', bn: 'আমাদের ইমেল করুন' },
          email: 'support@spus.org',
          buttonText: { en: 'Get Help Now', bn: 'এখনই সাহায্য নিন' }
        }
      },
      'special-programs': {
        title: { en: 'Special Programs', bn: 'বিশেষ কার্যক্রম' },
        subtitle: { en: 'Innovative initiatives designed for specialized care and development.', bn: 'বিশেষায়িত যত্ন এবং উন্নয়নের জন্য ডিজাইন করা উদ্ভাবনী উদ্যোগ।' },
        hero: {
          title: { en: 'Dedicated Support for Unique Needs', bn: 'অনন্য প্রয়োজনের জন্য নিবেদিত সহায়তা' },
          description: { en: 'Our special programs focus on providing targeted interventions that go beyond standard care. We collaborate with international partners and experts to bring world-class therapy and educational support directly to our students.', bn: 'আমাদের বিশেষ কার্যক্রমগুলো সাধারণ যত্নের বাইরে লক্ষ্যভিত্তিক হস্তক্ষেপ প্রদানের উপর দৃষ্টি নিবদ্ধ করে। আমরা আমাদের শিক্ষার্থীদের জন্য বিশ্বমানের থেরাপি এবং শিক্ষা সহায়তা সরাসরি পৌঁছে দিতে আন্তর্জাতিক অংশীদার এবং বিশেষজ্ঞদের সাথে কাজ করি।' }
        },
        programs: [
          {
            id: 'international-training',
            title: { en: 'International Expert Training', bn: 'আন্তর্জাতিক বিশেষজ্ঞ প্রশিক্ষণ' },
            desc: { en: 'Collaborating with experts from UK, USA, and Australia to train our teachers and therapists.', bn: 'আমাদের শিক্ষক এবং থেরাপিস্টদের প্রশিক্ষণের জন্য যুক্তরাজ্য, যুক্তরাষ্ট্র এবং অস্ট্রেলিয়ার বিশেষজ্ঞদের সাথে কাজ করা।' },
            icon: 'Globe',
            color: 'bg-indigo-50 text-indigo-600',
            timeline: { en: 'Annual', bn: 'বার্ষিক' },
            image: 'https://picsum.photos/seed/training/800/600',
            features: [
              { en: 'Advanced Pedagogy', bn: 'উন্নত শিক্ষাদান পদ্ধতি' },
              { en: 'Therapy Techniques', bn: 'থেরাপি কৌশল' },
              { en: 'Global Best Practices', bn: 'বৈশ্বিক সেরা অনুশীলন' },
              { en: 'Certification', bn: 'সনদ প্রদান' }
            ]
          },
          {
            id: 'sensory-integration',
            title: { en: 'Sensory Integration Therapy', bn: 'সেন্সরি ইন্টিগ্রেশন থেরাপি' },
            desc: { en: 'Specialized therapy sessions for children with sensory processing challenges.', bn: 'সেন্সরি প্রসেসিং চ্যালেঞ্জ থাকা শিশুদের জন্য বিশেষায়িত থেরাপি সেশন।' },
            icon: 'Zap',
            color: 'bg-amber-50 text-amber-600',
            timeline: { en: 'Daily', bn: 'প্রতিদিন' },
            image: 'https://picsum.photos/seed/sensory/800/600',
            features: [
              { en: 'Sensory Room Access', bn: 'সেন্সরি রুম অ্যাক্সেস' },
              { en: 'Individualized Plans', bn: 'ব্যক্তিগত পরিকল্পনা' },
              { en: 'Expert Guidance', bn: 'বিশেষজ্ঞ নির্দেশিকা' },
              { en: 'Progress Tracking', bn: 'অগ্রগতি ট্র্যাকিং' }
            ]
          },
          {
            id: 'community-outreach',
            title: { en: 'Community Outreach', bn: 'কমিউনিটি আউটরিচ' },
            desc: { en: 'Reaching out to remote areas to identify and support children with disabilities.', bn: 'প্রতিবন্ধী শিশুদের শনাক্ত ও সহায়তা করতে প্রত্যন্ত অঞ্চলে পৌঁছে যাওয়া।' },
            icon: 'MapPin',
            color: 'bg-rose-50 text-rose-600',
            timeline: { en: 'Ongoing', bn: 'চলমান' },
            image: 'https://picsum.photos/seed/outreach/800/600',
            features: [
              { en: 'Door-to-door Surveys', bn: 'দ্বারে দ্বারে জরিপ' },
              { en: 'Awareness Camps', bn: 'সচেতনতা ক্যাম্প' },
              { en: 'Referral Services', bn: 'রেফারেল সেবা' },
              { en: 'Family Counseling', bn: 'পারিবারিক কাউন্সেলিং' }
            ]
          }
        ],
        quote: {
          text: { en: '"Every child has a different learning style and pace. Each child is unique, not only capable of learning but also capable of succeeding."', bn: '"প্রতিটি শিশুর শেখার ধরণ এবং গতি আলাদা। প্রতিটি শিশু অনন্য, তারা কেবল শিখতেই সক্ষম নয় বরং সফল হতেও সক্ষম।"' },
          author: { en: 'Our Philosophy', bn: 'আমাদের দর্শন' }
        }
      }
    }
  },
  activities: {
      page: {
        title: { en: 'Our Activities', bn: 'আমাদের কার্যক্রম' },
        subtitle: { en: 'A comprehensive overview of how we serve, advocate, and celebrate with our community.', bn: 'আমরা কীভাবে আমাদের সম্প্রদায়ের সেবা করি, অ্যাডভোকেসি করি এবং উদযাপন করি তার একটি বিস্তারিত রূপরেখা।' },
      },
      intro: {
        tag: { en: 'Our Core Pillars', bn: 'আমাদের মূল স্তম্ভ' },
        title: { en: 'Diverse Initiatives for Holistic Impact', bn: 'সামগ্রিক প্রভাবের জন্য বৈচিত্র্যময় উদ্যোগ' },
        description: { en: 'From immediate relief to long-term advocacy, our activities are designed to empower and support every individual in our community.', bn: 'তাৎক্ষণিক ত্রাণ থেকে শুরু করে দীর্ঘমেয়াদী অ্যাডভোকেসি পর্যন্ত, আমাদের কার্যক্রমগুলো আমাদের সম্প্রদায়ের প্রতিটি ব্যক্তিকে ক্ষমতায়ন এবং সহায়তা করার জন্য ডিজাইন করা হয়েছে।' }
      },
      categories: [
        {
          id: 'relief',
          title: { en: 'Relief Activities', bn: 'ত্রাণ সেবা' },
          description: { en: 'Providing essential support including winter clothing, Ramadan food relief, and annual gifts to students and families.', bn: 'শিক্ষার্থী এবং পরিবারের জন্য শীতবস্ত্র, রমজান খাদ্য সহায়তা এবং বার্ষিক উপহার সহ প্রয়োজনীয় সহায়তা প্রদান।' },
          icon: 'HeartHandshake',
          color: 'bg-blue-600',
          lightColor: 'bg-blue-50',
          to: '/activities/relief',
          stats: { en: '1,000+ Served', bn: '১,০০০+ সেবাপ্রাপ্ত' }
        },
        {
          id: 'cultural',
          title: { en: 'Cultural Activities', bn: 'সাংস্কৃতিক কার্যক্রম' },
          description: { en: 'Fostering creativity and confidence through annual cultural programs and dance performances by our talented students.', bn: 'বার্ষিক সাংস্কৃতিক অনুষ্ঠান এবং আমাদের মেধাবী শিক্ষার্থীদের নৃত্য পরিবেশনার মাধ্যমে সৃজনশীলতা এবং আত্মবিশ্বাস বৃদ্ধি।' },
          icon: 'Music',
          color: 'bg-rose-600',
          lightColor: 'bg-rose-50',
          to: '/activities/cultural',
          stats: { en: 'Annual Events', bn: 'বার্ষিক অনুষ্ঠান' }
        },
        {
          id: 'special-days',
          title: { en: 'Special Day Observances', bn: 'বিভিন্ন দিবস পালন' },
          description: { en: 'Commemorating significant national and international days to raise awareness and celebrate our heritage.', bn: 'সচেতনতা বৃদ্ধি এবং আমাদের ঐতিহ্য উদযাপনের জন্য গুরুত্বপূর্ণ জাতীয় ও আন্তর্জাতিক দিবসসমূহ পালন।' },
          icon: 'Calendar',
          color: 'bg-emerald-600',
          lightColor: 'bg-emerald-50',
          to: '/activities/special-days',
          stats: { en: '10+ Days/Year', bn: '১০+ দিবস/বছর' }
        },
        {
          id: 'advocacy',
          title: { en: 'Advocacy Activities', bn: 'এডভোকেসী কার্যক্রম' },
          description: { en: 'Demanding rights and dignity for persons with disabilities through human chains, press conferences, and memorandums.', bn: 'মানববন্ধন, সংবাদ সম্মেলন এবং স্মারকলিপির মাধ্যমে প্রতিবন্ধী ব্যক্তিদের অধিকার ও মর্যাদা নিশ্চিত করা।' },
          icon: 'Megaphone',
          color: 'bg-amber-600',
          lightColor: 'bg-amber-50',
          to: '/activities/advocacy',
          stats: { en: '11-Point Demands', bn: '১১-দফা দাবি' }
        },
        {
          id: 'special-programs',
          title: { en: 'Special Programs', bn: 'বিশেষ কার্যক্রম' },
          description: { en: 'Targeted initiatives like Speech and Occupational Training, Home Teacher programs, and Therapy centers.', bn: 'স্পিচ ও অকুপেশনাল ট্রেনিং, হোম টিচার প্রোগ্রাম এবং থেরাপি সেন্টারের মতো লক্ষ্যভিত্তিক উদ্যোগ।' },
          icon: 'Star',
          color: 'bg-indigo-600',
          lightColor: 'bg-indigo-50',
          to: '/activities/special-programs',
          stats: { en: 'Ongoing Care', bn: 'চলমান যত্ন' }
        },
        {
          id: 'meetings',
          title: { en: 'Committee Meetings', bn: 'কমিটির সভা' },
          description: { en: 'Ensuring democratic governance and transparency through regular executive and general meetings.', bn: 'নিয়মিত নির্বাহী এবং সাধারণ সভার মাধ্যমে গণতান্ত্রিক সুশাসন এবং স্বচ্ছতা নিশ্চিত করা।' },
          icon: 'Users',
          color: 'bg-slate-700',
          lightColor: 'bg-slate-50',
          to: '/activities/committee-meetings',
          stats: { en: 'Monthly/Annual', bn: 'মাসিক/বার্ষিক' }
        }
      ],
      relief: {
        title: { en: 'Relief Activities', bn: 'ত্রাণ কার্যক্রম' },
        subtitle: { en: 'Providing essential support and relief items to those in need.', bn: 'প্রয়োজনে মানুষের মাঝে প্রয়োজনীয় সহায়তা এবং ত্রাণ সামগ্রী প্রদান।' },
        intro: {
          tag: { en: 'Community Support', bn: 'সম্প্রদায় সহায়তা' },
          title: { en: 'Reaching Out with Compassion', bn: 'সহমর্মিতার সাথে হাত বাড়িয়ে দেওয়া' },
          description: { en: 'Our relief activities are focused on providing immediate assistance to persons with disabilities and their families during critical times, including winter and the holy month of Ramadan.', bn: 'আমাদের ত্রাণ কার্যক্রমগুলো শীতকাল এবং পবিত্র রমজান মাস সহ সংকটময় সময়ে প্রতিবন্ধী ব্যক্তি এবং তাদের পরিবারের সদস্যদের তাৎক্ষণিক সহায়তা প্রদানের দিকে মনোনিবেশ করে।' }
        },
        activities: [
          {
            id: 'winter-clothing',
            icon: 'Snowflake',
            color: 'bg-blue-50 text-blue-600',
            timeline: { en: 'Every year', bn: 'প্রতি বছর' },
            title: { en: 'Winter Clothing Distribution', bn: 'শীত বস্ত্র বিতরণ' },
            description: { en: 'On November 7, 2022, Edition Foundation distributed winter sweaters to 68 disabled students of SPUS.', bn: 'নভেম্বর ৭, ২০২২ তারিখে এডিশন ফাউন্ডেশন এসপিইউএস-এর ৬৮ জন প্রতিবন্ধী শিক্ষার্থীদের মধ্যে শীতকালীন সোয়েটার বিতরণ করে।' },
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
            title: { en: 'Ramadan Relief', bn: 'পবিত্র মাহে রমজান উপলক্ষে খাদ্য-সামগ্রী, ঈদ বস্ত্র বিতরণ' },
            description: { en: 'In April 2023, through communication and advocacy with various organizations and philanthropists, cash donations, Ramadan and Eid items were distributed among 845 members of SPUS.', bn: '২০২৩ সালের এপ্রিল মাসে বিভিন্ন সংস্থা এবং জনহিতৈষীদের সাথে যোগাযোগ এবং অ্যাডভোকেসির মাধ্যমে পবিত্র রমজান মাস উপলক্ষে এসপিইউএস-এর ৮৪৫ জন সদস্যদের মধ্যে নগদ দান, রমজান এবং ঈদ সামগ্রী বিতরণ করা হয়েছিল।' },
            stats: {
              beneficiaries: 845
            }
          },
          {
            id: 'annual-gifts',
            icon: 'Gift',
            color: 'bg-pink-50 text-pink-600',
            timeline: { en: 'Date: 4/12/24', bn: 'তারিখ: ৪/১২/২৪ইং' },
            title: { en: 'Annual Student Gifts', bn: 'শিক্ষার্থীদের বাৎসরিক উপহার' },
            description: { en: 'Annual gifts for students including winter blankets, Vaseline lotion, snow, mosquito nets and mosquito killing bats for dengue mosquito control, etc. are distributed.', bn: 'শিক্ষার্থীদের বাৎসরিক উপহার হিসাবে শীতের কম্বল, বেসলিন লোশন, স্নো, ডেঙ্গু মশা নিধনে মশারী ও মশা মারা বাট ইত্যাদি বিতরণ করা হয়।' },
            features: [
              { en: 'Winter Blankets', bn: 'শীতের কম্বল' },
              { en: 'Vaseline & Skin Care', bn: 'বেসলিন ও লোশন' },
              { en: 'Mosquito Nets', bn: 'মশারী' },
              { en: 'Mosquito Killing Bats', bn: 'মশা মারা বাট' }
            ]
          },
          {
            id: 'sewing-machines',
            icon: 'Scissors',
            color: 'bg-primary/10 text-primary',
            timeline: { en: 'Date: 6/11/22', bn: 'তারিখ: ৬/১১/২২' },
            title: { en: 'Sewing Machine Distribution', bn: 'প্রতিবন্ধী নারীদের মাঝে সেলাই মেশিন বিতরণ' },
            description: { en: 'Sewing machines are distributed among disabled women to promote self-employment and economic independence.', bn: 'প্রতিবন্ধী নারীদের মাঝে সেলাই মেশিন বিতরণ করা হয় যাতে তারা আত্মনির্ভরশীল হতে পারে।' },
            stats: {
              target: { en: 'Disabled Women', bn: 'প্রতিবন্ধী নারী' }
            }
          }
        ],
        impact: {
          title: { en: 'Your Support Makes a Difference', bn: 'আপনার সমর্থন পরিবর্তন আনে' },
          description: { en: 'Every donation helps us reach more families in need. Together, we can ensure that no one is left behind during difficult times.', bn: 'প্রতিটি অনুদান আমাদের প্রয়োজনে আরও বেশি পরিবারের কাছে পৌঁছাতে সাহায্য করে। একসাথে, আমরা নিশ্চিত করতে পারি যে কঠিন সময়ে কেউ পিছিয়ে থাকবে না।' },
          list: [
            { en: '845+ Ramadan Relief Beneficiaries', bn: '৮৪৫+ রমজান ত্রাণ উপকারভোগী' },
            { en: 'Annual Winter Clothing for 60+ Students', bn: '৬০+ শিক্ষার্থীর জন্য বার্ষিক শীতবস্ত্র' },
            { en: 'Ongoing Support for Ultra-Poor Families', bn: 'অতি দরিদ্র পরিবারের জন্য চলমান সহায়তা' }
          ],
          stats: [
            { label: { en: 'Lives Impacted', bn: 'প্রভাবিত জীবন' }, value: '1,000+' },
            { label: { en: 'Partners', bn: 'অংশীদার' }, value: '50+' }
          ],
          cta: { en: 'Donate Now', bn: 'এখনই অনুদান দিন' }
        }
      },
      specialDays: {
        title: { en: 'Special Day Observances', bn: 'বিভিন্ন দিবস পালন' },
        subtitle: { en: 'Commemorating significant national and international days with our community.', bn: 'আমাদের সম্প্রদায়ের সাথে গুরুত্বপূর্ণ জাতীয় ও আন্তর্জাতিক দিবসসমূহ উদযাপন।' },
        intro: {
          tag: { en: 'Annual Calendar', bn: 'বার্ষিক ক্যালেন্ডার' },
          title: { en: 'Celebrating Our Heritage & Rights', bn: 'আমাদের ঐতিহ্য ও অধিকার উদযাপন' },
          description: { en: 'At SPUS, we believe in the power of collective remembrance and celebration. We observe various national and international days to raise awareness, foster community spirit, and educate our students about history and rights.', bn: 'এসপিইউএস-এ আমরা সম্মিলিত স্মরণ এবং উদযাপনের শক্তিতে বিশ্বাস করি। আমরা সচেতনতা বৃদ্ধি, সম্প্রদায়ের চেতনা বৃদ্ধি এবং আমাদের শিক্ষার্থীদের ইতিহাস ও অধিকার সম্পর্কে শিক্ষিত করার জন্য বিভিন্ন জাতীয় ও আন্তর্জাতিক দিবস পালন করি।' }
        },
        days: [
          {
            id: 'mother-language-day',
            icon: 'Languages',
            color: 'bg-red-500',
            date: { en: '21 February', bn: '২১শে ফেব্রুয়ারি' },
            fullDate: '21/02/24',
            title: { en: 'International Mother Language Day', bn: 'আন্তর্জাতিক মাতৃভাষা দিবস' },
            description: { en: '21st February International (Mother Language Day), National Sign Language Day observance.', bn: '২১শে ফেব্রুয়ারি আন্তর্জাতিক (মাতৃভাষা দিবস), জাতীয় ইশারা ভাষা দিবস পালন।' },
            image: 'https://picsum.photos/seed/language/1200/800'
          },
          {
            id: 'childrens-day',
            icon: 'Baby',
            color: 'bg-blue-400',
            date: { en: '17 March', bn: '১৭ই মার্চ' },
            fullDate: '17/03/24',
            title: { en: "Children's Day", bn: 'শিশু দিবস' },
            description: { en: "17th March Children's Day observance.", bn: '১৭ই মার্চ শিশু দিবস পালন।' },
            image: 'https://picsum.photos/seed/children/1200/800'
          },
          {
            id: 'womens-day',
            icon: 'Venus',
            color: 'bg-pink-500',
            date: { en: '8 March', bn: '৮ই মার্চ' },
            fullDate: '08/03/24',
            title: { en: "International Women's Day", bn: 'আন্তর্জাতিক নারী দিবস' },
            description: { en: 'On the occasion of Women\'s Day on 8th March, 1 awareness discussion meeting was organized with mothers and sisters of students and women members of SPUS where various important aspects of women\'s issues were discussed.', bn: '৮ই মার্চ নারী দিবস উপলক্ষে মা ও শিক্ষার্থীদের মা ও এসপিইউএস-এর নারী সদস্যদের সাথে ১টি সচেতনতা আলোচনা সভা আয়োজন করা হয় যেখানে নারী বিষয়ক বিভিন্ন গুরুত্বপূর্ণ দিক নিয়ে আলোচনা করা হয়।' },
            image: 'https://picsum.photos/seed/women/1200/800'
          },
          {
            id: 'independence-day',
            icon: 'Flag',
            color: 'bg-green-600',
            date: { en: '26 March', bn: '২৬শে মার্চ' },
            fullDate: '26/03/24',
            title: { en: 'Independence Day', bn: 'মহান স্বাধীনতা দিবস' },
            description: { en: 'On 26 March 2023, the importance and history of the Great Independence Day was discussed with the students of SPUS. At the end of the discussion session, a cultural program was organized with the participation of the students.', bn: '২৬শে মার্চ ২০২৩ তারিখে মহান স্বাধীনতা দিবসের গুরুত্ব ও ইতিহাস এসপিইউএস-এর শিক্ষার্থীদের সাথে আলোচনা করা হয়। আলোচনা সেশনের শেষে শিক্ষার্থীদের অংশগ্রহণে একটি সাংস্কৃতিক অনুষ্ঠান আয়োজন করা হয়।' },
            image: 'https://picsum.photos/seed/independence/1200/800'
          },
          {
            id: 'mothers-day',
            icon: 'Heart',
            color: 'bg-rose-400',
            date: { en: '8 May', bn: '৮ই মে' },
            fullDate: '08/05/24',
            title: { en: "Mother's Day", bn: 'মা দিবস' },
            description: { en: "Observance of Mother's Day to honor the mothers of our students and community.", bn: 'আমাদের শিক্ষার্থী এবং সম্প্রদায়ের মায়েদের সম্মান জানাতে মা দিবস পালন।' },
            image: 'https://picsum.photos/seed/mother/1200/800'
          },
          {
            id: 'mourning-day',
            icon: 'CloudRain',
            color: 'bg-gray-800',
            date: { en: '15 August', bn: '১৫ই আগস্ট' },
            fullDate: '15/08/24',
            title: { en: 'National Mourning Day', bn: 'জাতীয় শোক দিবস' },
            description: { en: 'National Mourning Day was observed on the occasion of the death anniversary of Father of the Nation Bangabandhu Sheikh Mujibur Rahman and his family on 15th August 2023 with the members of SPUS. A Milat-Doa was organized seeking forgiveness of the souls of the deceased. About 100 disabled students, men and women and some prominent philanthropists of the society were present in the meeting.', bn: 'বঙ্গবন্ধু শেখ মুজিবুর রহমান এবং তাঁর পরিবারের মৃত্যুবার্ষিকী উপলক্ষে ১৫ই আগস্ট ২০২৩ তারিখে এসপিইউএস-এর সদস্যদের সাথে জাতীয় শোক দিবস পালন করা হয়। যেখানে মৃতদের আত্মার মাগফিরাত কামনা করে একটি মিলাদ-দোয়া আয়োজন করা হয়। সভায় প্রায় ১০০ জন প্রতিবন্ধী শিক্ষার্থী, নারী-পুরুষ এবং সমাজের কিছু বিশিষ্ট জনহিতৈষী উপস্থিত ছিলেন।' },
            image: 'https://picsum.photos/seed/mourning/1200/800'
          },
          {
            id: 'white-cane-day',
            icon: 'Accessibility',
            color: 'bg-amber-500',
            date: { en: '15 October', bn: '১৫ই অক্টোবর' },
            fullDate: '15/10/24',
            title: { en: 'White Cane Safety Day', bn: 'সাদা ছড়ি নিরাপত্তা দিবস' },
            description: { en: 'World White Cane Day was observed on 15 October 2023. The General Secretary of SPUS Mr. Ujjala Banik discussed the use, importance and significance of White Cane. A cultural program was organized for the participation of the students. Finally, the function ended with cake cutting and lunch.', bn: 'বিশ্ব সাদা ছড়ি দিবস ১৫ অক্টোবর ২০২৩ তারিখে পালিত হয়। এসপিইউএস-এর সাধারণ সম্পাদক জনাব উজ্জলা বনিক সাদা ছড়ির ব্যবহার, গুরুত্ব এবং তাৎপর্য নিয়ে আলোচনা করেন। শিক্ষার্থীদের অংশগ্রহণের জন্য একটি সাংস্কৃতিক অনুষ্ঠান আয়োজন করা হয়। অবশেষে, কেক কাটা এবং দুপুরের খাবারের মাধ্যমে অনুষ্ঠানটি শেষ হয়।' },
            image: 'https://picsum.photos/seed/white-cane/1200/800'
          },
          {
            id: 'disability-day',
            icon: 'Users',
            color: 'bg-indigo-600',
            date: { en: '3 December', bn: '৩রা ডিসেম্বর' },
            fullDate: '03/12/24',
            title: { en: 'International Day of Persons with Disabilities', bn: 'আন্তর্জাতিক প্রতিবন্ধী দিবস' },
            description: { en: '3rd December International Day of Persons with Disabilities observance with various awareness programs and cultural events.', bn: '৩রা ডিসেম্বর বিভিন্ন সচেতনতামূলক কর্মসূচি এবং সাংস্কৃতিক অনুষ্ঠানের মাধ্যমে আন্তর্জাতিক প্রতিবন্ধী দিবস পালন।' },
            image: 'https://picsum.photos/seed/disability/1200/800'
          },
          {
            id: 'victory-day',
            icon: 'Trophy',
            color: 'bg-emerald-600',
            date: { en: '16 December', bn: '১৬ই ডিসেম্বর' },
            fullDate: '16/12/24',
            title: { en: 'Victory Day', bn: 'মহান বিজয় দিবস' },
            description: { en: 'On the occasion of Great Victory Day on 16th December 2022, the annual action competition and cultural program of the students of Satarkul Diversity Handicapped School was organized. 60 food plates were distributed among the students in this program in collaboration with LCDB and Inner Wheel.', bn: '১৬ই ডিসেম্বর ২০২২ তারিখে মহান বিজয় দিবস উপলক্ষে সাতারকুল বৈচিত্র্য প্রতিবন্ধী বিদ্যালয়ের শিক্ষার্থীদের বার্ষিক অ্যাকশন প্রতিযোগিতা ও সাংস্কৃতিক অনুষ্ঠান আয়োজন করা হয়। এই অনুষ্ঠানে এলসিডিবি এবং ইনার হুইলের সহযোগিতায় শিক্ষার্থীদের মধ্যে ৬০টি খাবার প্লেট বিতরণ করা হয়।' },
            image: 'https://picsum.photos/seed/victory/1200/800'
          }
        ],
        impact: {
          title: { en: 'Impact of Our Observances', bn: 'আমাদের দিবস পালনের প্রভাব' },
          description: { en: 'Through these events, we have reached over 1,000 community members annually, providing a platform for expression, learning, and solidarity.', bn: 'এই অনুষ্ঠানগুলোর মাধ্যমে আমরা বার্ষিক ১,০০০-এরও বেশি সম্প্রদায়ের মানুষের কাছে পৌঁছেছি, যা প্রকাশ, শিক্ষা এবং সংহতির জন্য একটি প্ল্যাটফর্ম প্রদান করে।' },
          stats: [
            { label: { en: 'Days Observed', bn: 'পালিত দিবস' }, value: '10+' },
            { label: { en: 'Community Reach', bn: 'সামাজিক প্রসার' }, value: '1,000+' },
            { label: { en: 'Students Engaged', bn: 'অংশগ্রহণকারী শিক্ষার্থী' }, value: '500+' }
          ]
        },
        cta: {
          title: { en: 'Support Our Cultural Programs', bn: 'আমাদের সাংস্কৃতিক কর্মসূচিতে সহায়তা করুন' },
          description: { en: 'Help us continue these important traditions. Your support provides food, cultural materials, and a sense of belonging for our students.', bn: 'এই গুরুত্বপূর্ণ ঐতিহ্যগুলো অব্যাহত রাখতে আমাদের সাহায্য করুন। আপনার সমর্থন আমাদের শিক্ষার্থীদের জন্য খাবার, সাংস্কৃতিক উপকরণ এবং আপনত্বের অনুভূতি প্রদান করে।' },
          button: { en: 'Donate for Events', bn: 'অনুষ্ঠানের জন্য অনুদান দিন' }
        }
      },
      advocacy: {
        title: { en: 'Advocacy Activities', bn: 'এডভোকেসী কার্যক্রম' },
        subtitle: { en: 'Demanding rights and dignity for persons with disabilities through collective action.', bn: 'সম্মিলিত পদক্ষেপের মাধ্যমে প্রতিবন্ধী ব্যক্তিদের অধিকার এবং মর্যাদা নিশ্চিত করা।' },
        tag: { en: 'Ongoing', bn: 'চলমান' },
        heroTitle: { en: 'Demanding Rights, Ensuring Dignity', bn: 'অধিকারের দাবি, মর্যাদা নিশ্চিত করা' },
        description: { en: 'Various human chains, press conferences, memorandum submissions, etc. are conducted demanding monthly allowance of 5000 taka for disabled persons along with other 11-point demands.', bn: 'প্রতিবন্ধী মানুষের মাসিক ভাতা ৫০০০ টাকা সহ আরো অন্যান্য ১১ দফা দাবি বিশিষ্ট বিভিন্ন মানববন্ধন, সাংবাদিক সম্মেলন, স্মারক লিপি প্রেরণ ইত্যাদি কার্যক্রম পরিচালনা করা হয়।' },
        demandsTitle: { en: 'Our Core Demands:', bn: 'আমাদের প্রধান দাবিসমূহ:' },
        demands: [
          { en: 'Monthly allowance of 5000 taka for disabled persons', bn: 'প্রতিবন্ধী ব্যক্তিদের মাসিক ভাতা ৫০০০ টাকা' },
          { en: 'Other 11-point demands', bn: 'অন্যান্য ১১ দফা দাবি' }
        ],
        methodsTitle: { en: 'How We Advocate', bn: 'আমরা যেভাবে অ্যাডভোকেসি করি' },
        methodsSubtitle: { en: 'Our methods for bringing attention to the needs and rights of our community.', bn: 'আমাদের সম্প্রদায়ের প্রয়োজন এবং অধিকারের প্রতি দৃষ্টি আকর্ষণ করার জন্য আমাদের পদ্ধতিসমূহ।' },
        activities: [
          {
            id: 'human-chains',
            icon: 'Users',
            title: { en: 'Human Chains', bn: 'মানববন্ধন' },
            description: { en: 'Organizing public demonstrations to bring attention to the rights of disabled persons.', bn: 'প্রতিবন্ধী ব্যক্তিদের অধিকারের প্রতি দৃষ্টি আকর্ষণ করার জন্য জনসমক্ষে বিক্ষোভ প্রদর্শন করা।' }
          },
          {
            id: 'press-conferences',
            icon: 'Mic2',
            title: { en: 'Press Conferences', bn: 'সংবাদ সম্মেলন' },
            description: { en: 'Engaging with media to spread our message and demands to a wider audience.', bn: 'আমাদের বার্তা এবং দাবিগুলো বৃহত্তর শ্রোতাদের কাছে পৌঁছে দেওয়ার জন্য মিডিয়ার সাথে সম্পৃক্ত হওয়া।' }
          },
          {
            id: 'memorandums',
            icon: 'FileText',
            title: { en: 'Memorandum Submissions', bn: 'স্মারকলিপি প্রদান' },
            description: { en: 'Submitting formal requests and demands to government authorities.', bn: 'সরকারি কর্তৃপক্ষের কাছে আনুষ্ঠানিক অনুরোধ এবং দাবি পেশ করা।' }
          }
        ],
        galleryTitle: { en: 'Advocacy in Action', bn: 'অ্যাডভোকেসি ইন অ্যাকশন' },
        ctaTitle: { en: 'Join Our Voice', bn: 'আমাদের সাথে কণ্ঠ মেলান' },
        ctaDescription: { en: 'Your presence strengthens our demands. Join us in our next human chain or press conference to make a difference.', bn: 'আপনার উপস্থিতি আমাদের দাবিগুলোকে আরও শক্তিশালী করে। পরিবর্তন আনতে আমাদের পরবর্তী মানববন্ধন বা সংবাদ সম্মেলনে যোগ দিন।' },
        ctaButton: { en: 'Support Our Cause', bn: 'আমাদের উদ্দেশ্যকে সমর্থন করুন' }
      },
      cultural: {
        title: { en: 'Cultural Activities', bn: 'সাংস্কৃতিক কার্যক্রম' },
        subtitle: { en: 'Fostering creativity and expression through cultural programs and events.', bn: 'সাংস্কৃতিক কর্মসূচি এবং অনুষ্ঠানের মাধ্যমে সৃজনশীলতা এবং অভিব্যক্তি বৃদ্ধি করা।' },
        intro: {
          tag: { en: 'Cultural Expression', bn: 'সাংস্কৃতিক অভিব্যক্তি' },
          title: { en: 'Celebrating Talent & Diversity', bn: 'প্রতিভা ও বৈচিত্র্য উদযাপন' },
          description: { en: 'Our cultural activities provide a platform for persons with disabilities to showcase their talents, build confidence, and engage with the wider community through music, dance, and performance.', bn: 'আমাদের সাংস্কৃতিক কার্যক্রমগুলো প্রতিবন্ধী ব্যক্তিদের তাদের প্রতিভা প্রদর্শনের জন্য একটি প্ল্যাটফর্ম প্রদান করে, যা আত্মবিশ্বাস তৈরি করে এবং সঙ্গীত, নৃত্য ও অভিনয়ের মাধ্যমে বৃহত্তর সম্প্রদায়ের সাথে সম্পৃক্ত হতে সাহায্য করে।' }
        },
        activities: [
          {
            id: 'annual-cultural',
            icon: 'Music',
            color: 'bg-rose-500',
            timeline: { en: 'Annual', bn: 'বার্ষিক' },
            title: { en: 'Annual Cultural Program', bn: 'বার্ষিক সাংস্কৃতিক অনুষ্ঠান' },
            description: { en: 'A grand celebration where students perform dance, music, and drama for the community.', bn: 'একটি বিশাল উদযাপন যেখানে শিক্ষার্থীরা সম্প্রদায়ের জন্য নৃত্য, সঙ্গীত এবং নাটক পরিবেশন করে।' },
            stats: {
              location: 'Local Community Center',
              partner: 'Local Arts Council'
            },
            features: [
              { en: 'Dance Performances', bn: 'নৃত্য পরিবেশনা' },
              { en: 'Musical Recitals', bn: 'সঙ্গীতানুষ্ঠান' },
              { en: 'Drama & Skits', bn: 'নাটক ও প্রহসন' }
            ]
          },
          {
            id: 'dance-training',
            icon: 'Palette',
            color: 'bg-amber-500',
            timeline: { en: 'Weekly', bn: 'সাপ্তাহিক' },
            title: { en: 'Dance & Arts Training', bn: 'নৃত্য ও কলা প্রশিক্ষণ' },
            description: { en: 'Regular classes to develop artistic skills and physical coordination.', bn: 'শৈল্পিক দক্ষতা এবং শারীরিক সমন্বয় বিকাশের জন্য নিয়মিত ক্লাস।' },
            features: [
              { en: 'Traditional Dance', bn: 'ঐতিহ্যবাহী নৃত্য' },
              { en: 'Modern Expression', bn: 'আধুনিক অভিব্যক্তি' },
              { en: 'Visual Arts', bn: 'দৃশ্যমান শিল্পকলা' }
            ]
          }
        ],
        galleryTitle: { en: 'Cultural Highlights', bn: 'সাংস্কৃতিক হাইলাইটস' },
        ctaTitle: { en: 'Support Our Cultural Programs', bn: 'আমাদের সাংস্কৃতিক কর্মসূচিতে সহায়তা করুন' },
        ctaDescription: { en: 'Help us continue these important traditions. Your support provides food, cultural materials, and a sense of belonging for our students.', bn: 'এই গুরুত্বপূর্ণ ঐতিহ্যগুলো অব্যাহত রাখতে আমাদের সাহায্য করুন। আপনার সমর্থন আমাদের শিক্ষার্থীদের জন্য খাবার, সাংস্কৃতিক উপকরণ এবং আপনত্বের অনুভূতি প্রদান করে।' },
        ctaButton: { en: 'Donate for Events', bn: 'অনুষ্ঠানের জন্য অনুদান দিন' }
      },
      meetings: {
        title: { en: 'Committee Meetings', bn: 'কমিটির সভা' },
        subtitle: { en: 'Ensuring transparency, democratic leadership, and organizational growth through regular meetings.', bn: 'নিয়মিত সভার মাধ্যমে স্বচ্ছতা, গণতান্ত্রিক নেতৃত্ব এবং সাংগঠনিক বৃদ্ধি নিশ্চিত করা।' },
        intro: {
          tag: { en: 'Governance', bn: 'সুশাসন' },
          title: { en: 'Democratic Decision Making', bn: 'গণতান্ত্রিক সিদ্ধান্ত গ্রহণ' },
          description: { en: 'At SPUS, our governance is built on the principles of transparency and collective decision-making. Regular committee meetings and annual general assemblies ensure that every voice is heard and that our initiatives align with our core mission.', bn: 'এসপিইউএস-এ আমাদের সুশাসন স্বচ্ছতা এবং সম্মিলিত সিদ্ধান্ত গ্রহণের নীতির উপর ভিত্তি করে নির্মিত। নিয়মিত কমিটির সভা এবং বার্ষিক সাধারণ সভা নিশ্চিত করে যে প্রতিটি কণ্ঠস্বর শোনা হয় এবং আমাদের উদ্যোগগুলো আমাদের মূল লক্ষ্যের সাথে সামঞ্জস্যপূর্ণ থাকে।' },
          quote: { en: '"Decisions made collectively for the betterment of the community."', bn: '"সমাজের মঙ্গলের জন্য সম্মিলিতভাবে নেওয়া সিদ্ধান্ত।"' },
          transparency: { en: 'Transparency', bn: 'স্বচ্ছতা' },
          accountability: { en: 'Full Accountability', bn: 'পূর্ণ জবাবদিহিতা' }
        },
        list: [
          {
            id: 'executive-committee',
            icon: 'Users',
            color: 'bg-blue-50 text-blue-600',
            timeline: { en: 'Every 3 months', bn: 'প্রতি ৩ মাস পর পর' },
            title: { en: 'Executive Committee Meeting', bn: 'নির্বাহী কমিটির সভা' },
            description: { en: 'The Executive Committee meeting is organized every 3 months as per Article 20 of the Constitution of SPUS. A total of 4 meetings were held from January to December 2023. A total of 28 people attended the 4 meetings and all were women. Important activities such as approval of the committee, legal assistance, fund collection, 3-monthly activities report, financial report, dengue mosquito prevention, 3-monthly activities action plan, Ramadan activities school pre-run etc. were decided to implement.', bn: 'এসপিইউএস-এর সংবিধানের ২০ ধারা অনুযায়ী প্রতি ৩ মাসে নির্বাহী কমিটির সভা আয়োজন করা হয়। জানুয়ারি থেকে ডিসেম্বর ২০২৩ পর্যন্ত মোট ৪টি সভা অনুষ্ঠিত হয়েছে। ৪টি সভায় মোট ২৮ জন উপস্থিত ছিলেন এবং সকলেই নারী ছিলেন। উক্ত সভায় কমিটির অনুমোদন, আইনি সহায়তা, তহবিল সংগ্রহ, ৩ মাসিক কার্যক্রম প্রতিবেদন, আর্থিক প্রতিবেদন, ডেঙ্গু মশা প্রতিরোধ, ৩ মাসিক কার্যক্রম অ্যাকশন প্ল্যান, রমজান কার্যক্রম স্কুল প্রি-রান ইত্যাদি গুরুত্বপূর্ণ কার্যক্রম বাস্তবায়নের সিদ্ধান্ত নেওয়া হয়।' },
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
            description: { en: 'Annual General Meeting of SPUS was held on 7/01/2023. A total of 21 people were present in the meeting. Among them 16 women and 5 men. In the said meeting, income-expenditure account according to the sector from January to December 2022, appointment of auditors for 2023, annual work plan for 2023, possible budget for 2023, financial report for 2022 and other important decisions including the election of the 5th EC committee were made by all participation, proposal, support and consensus.', bn: 'এসপিইউএস-এর বার্ষিক সাধারণ সভা ৭/০১/২০২৩ তারিখে অনুষ্ঠিত হয়। সভায় মোট ২১ জন উপস্থিত ছিলেন। তাদের মধ্যে ১৬ জন নারী এবং ৫ জন পুরুষ। উক্ত সভায় জানুয়ারি থেকে ডিসেম্বর ২০২২ পর্যন্ত সেক্টর অনুযায়ী আয়-ব্যয় হিসাব, ২০২৩-এর জন্য নিরীক্ষক নিয়োগ, ২০২৩-এর বার্ষিক কর্ম পরিকল্পনা, ২০২৩-এর সম্ভাব্য বাজেট, ২০২২-এর আর্থিক প্রতিবেদন এবং ৫ম ইসি কমিটির নির্বাচন সহ অন্যান্য গুরুত্বপূর্ণ সিদ্ধান্ত সকলের অংশগ্রহণ, প্রস্তাব, সমর্থন এবং সর্বসম্মতিক্রমে অনুমোদন পায়।' },
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
            title: { en: 'Executive Committee Election', bn: 'নির্বাহী কমিটির নির্বাচন' },
            description: { en: 'Executive Committee election held to ensure democratic leadership and organizational growth.', bn: 'গণতান্ত্রিক নেতৃত্ব এবং সাংগঠনিক বৃদ্ধি নিশ্চিত করতে নির্বাহী কমিটির নির্বাচন অনুষ্ঠিত হয়।' }
          },
          {
            id: 'womens-council',
            icon: 'Users2',
            color: 'bg-rose-50 text-rose-600',
            timeline: { en: 'Date: 26', bn: 'তারিখ: ২৬' },
            title: { en: "Women's Council OPID Meeting", bn: 'নারী পরিষদে অপিডির মিটিং' },
            description: { en: 'OPID meeting held at Women\'s Council to discuss specific issues and initiatives related to women with disabilities.', bn: 'প্রতিবন্ধী নারীদের সাথে সম্পর্কিত সুনির্দিষ্ট বিষয় এবং উদ্যোগ নিয়ে আলোচনার জন্য নারী পরিষদে অপিডির মিটিং করা হয়।' }
          }
        ],
        cta: {
          title: { en: 'Our Commitment to Transparency', bn: 'স্বচ্ছতার প্রতি আমাদের প্রতিশ্রুতি' },
          description: { en: 'We maintain detailed records of all our meetings and decisions. If you are a member or a donor and wish to see our detailed reports, please feel free to contact us.', bn: 'আমরা আমাদের সমস্ত সভা এবং সিদ্ধান্তের বিস্তারিত রেকর্ড বজায় রাখি। আপনি যদি একজন সদস্য বা দাতা হন এবং আমাদের বিস্তারিত প্রতিবেদন দেখতে চান, তবে অনুগ্রহ করে আমাদের সাথে যোগাযোগ করুন।' },
          button: { en: 'Contact for Reports', bn: 'প্রতিবেদনের জন্য যোগাযোগ' }
        }
      },
      cta: {
        title: { en: 'Join Us in Creating a More Inclusive World', bn: 'আরও অন্তর্ভুক্তিমূলক বিশ্ব তৈরিতে আমাদের সাথে যোগ দিন' },
        description: { en: 'Whether through volunteering, partnership, or donation, your involvement powers our activities and changes lives.', bn: 'স্বেচ্ছাসেবা, অংশীদারিত্ব বা অনুদানের মাধ্যমেই হোক, আপনার সম্পৃক্ততা আমাদের কার্যক্রমকে শক্তিশালী করে এবং জীবন বদলে দেয়।' },
        volunteer: { en: 'Volunteer with Us', bn: 'স্বেচ্ছাসেবী হিসেবে যোগ দিন' },
        donate: { en: 'Donate Now', bn: 'এখনই দান করুন' }
      }
  },
  contact: {
    page: {
      title: { en: 'Get in Touch', bn: 'যোগাযোগ করুন' },
      subtitle: { en: 'We are here to help. Reach out to us for any inquiries or support.', bn: 'আমরা সাহায্য করতে এখানে আছি। যেকোনো জিজ্ঞাসা বা সহায়তার জন্য আমাদের সাথে যোগাযোগ করুন।' },
    },
    info: {
      title: { en: 'Contact Information', bn: 'যোগাযোগের তথ্য' },
      description: { en: 'Feel free to visit our office or reach out via phone or email. We respond to all inquiries within 24 hours.', bn: 'আমাদের অফিসে আসতে পারেন অথবা ফোন বা ইমেলের মাধ্যমে যোগাযোগ করতে পারেন। আমরা ২৪ ঘণ্টার মধ্যে সব জিজ্ঞাসার উত্তর দিই।' },
      address: { en: 'Address', bn: 'ঠিকানা' },
      phone: { en: 'Phone', bn: 'ফোন' },
      whatsapp: { en: 'WhatsApp', bn: 'হোয়াটসঅ্যাপ' },
      email: { en: 'Email', bn: 'ইমেইল' },
    },
    hours: {
      title: { en: 'Office Hours', bn: 'অফিস সময়' },
      satWed: { en: 'Sat – Wed', bn: 'শনি – বুধ' },
      thu: { en: 'Thursday', bn: 'বৃহস্পতিবার' },
      fri: { en: 'Friday', bn: 'শুক্রবার' },
      closed: { en: 'Closed', bn: 'বন্ধ' },
    },
    form: {
      title: { en: 'Send a Message', bn: 'বার্তা পাঠান' },
      name: { en: 'Your Name', bn: 'আপনার নাম' },
      phone: { en: 'Phone Number', bn: 'ফোন নম্বর' },
      email: { en: 'Email Address', bn: 'ইমেইল ঠিকানা' },
      subject: { en: 'Select Subject', bn: 'বিষয় নির্বাচন করুন' },
      message: { en: 'Your Message', bn: 'আপনার বার্তা' },
      submit: { en: 'Send Message', bn: 'বার্তা পাঠান' },
      success: { en: 'Message sent successfully!', bn: 'বার্তা সফলভাবে পাঠানো হয়েছে!' },
      subjects: {
        general: { en: 'General Inquiry', bn: 'সাধারণ জিজ্ঞাসা' },
        donation: { en: 'Donation', bn: 'অনুদান' },
        volunteer: { en: 'Volunteer', bn: 'স্বেচ্ছাসেবক' },
        partnership: { en: 'Partnership', bn: 'অংশীদারিত্ব' },
      }
    },
    faq: {
      title: { en: 'Frequently Asked Questions', bn: 'সাধারণ জিজ্ঞাসা' },
      subtitle: { en: 'Quick answers to common questions about our organization and services.', bn: 'আমাদের সংস্থা এবং পরিষেবাগুলি সম্পর্কে সাধারণ প্রশ্নের দ্রুত উত্তর।' },
    }
  }
};

export default siteContent;
