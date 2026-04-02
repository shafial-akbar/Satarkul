/**
 * siteContent.js
 * This file contains all the static text content for the application.
 * It is structured by page and section to make it easy to manage and fetch via API.
 */

const siteContent = {
  common: {
    orgName: { en: 'Satarkul Protibondhi Unnayan Songstha', bn: 'সাতারকুল প্রতিবন্ধী উন্নয়ন সংস্থা' },
    motto: { en: 'Empowering Lives, Ensuring Rights', bn: 'জীবনকে ক্ষমতায়ন, অধিকার নিশ্চিতকরণ' },
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
          title: { en: "Empowering Lives, Ensuring Rights", bn: "জীবনকে ক্ষমতায়ন, অধিকার নিশ্চিতকরণ" },
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
      yearsService: { en: "Years of dedicated service to the community.", bn: "সম্প্রদায়ের জন্য নিবেদিত সেবার ১০ বছরেরও বেশি।" }
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
      resources: [
        { title: { en: 'Organization Profile', bn: 'সংস্থার প্রোফাইল' }, file: 'spus-organization-profile.pdf', size: '2.4 MB' },
        { title: { en: 'Annual Report 2023', bn: 'বার্ষিক প্রতিবেদন ২০২৩' }, file: 'spus-annual-report-2023.pdf', size: '3.1 MB' },
      ]
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
        title: { en: "Education Program", bn: "শিক্ষা কার্যক্রম" },
        subtitle: { en: "Ensuring quality education and mainstreaming students with disabilities.", bn: "গুণগত শিক্ষা নিশ্চিত করা এবং প্রতিবন্ধী শিক্ষার্থীদের মূলধারার সাথে সম্পৃক্ত করা।" }
      },
      health: {
        title: { en: "Health Services", bn: "স্বাস্থ্যসেবা" },
        subtitle: { en: "Providing essential healthcare and medical support to our community.", bn: "আমাদের সম্প্রদায়ের জন্য প্রয়োজনীয় স্বাস্থ্যসেবা এবং চিকিৎসা সহায়তা প্রদান।" }
      }
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
