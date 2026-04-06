// This file mimics the structure of an API response.
// You can easily replace this with a fetch call later.

export const awarenessPrograms = {
  title: { en: 'Awareness & Advocacy', bn: 'সচেতনতা ও অ্যাডভোকেসি' },
  subtitle: { en: 'Empowering the community through knowledge and fighting for the rights of persons with disabilities.', bn: 'জ্ঞানের মাধ্যমে সমাজকে ক্ষমতায়ন এবং প্রতিবন্ধী ব্যক্তিদের অধিকারের জন্য লড়াই।' },
  intro: {
    tag: { en: 'Voice for Change', bn: 'পরিবর্তনের কণ্ঠস্বর' },
    title: { en: 'Breaking Barriers Through Awareness', bn: 'সচেতনতার মাধ্যমে বাধা দূরীকরণ' },
    description: { en: 'We conduct regular awareness sessions on health, climate change, and disability rights. Our advocacy efforts focus on ensuring that persons with disabilities have equal access to education, healthcare, and social services.', bn: 'আমরা স্বাস্থ্য, জলবায়ু পরিবর্তন এবং প্রতিবন্ধী অধিকার বিষয়ে নিয়মিত সচেতনতামূলক সেশন পরিচালনা করি।' }
  },
  programs: [
    {
      id: 'menstrual-health',
      title: { en: 'Menstrual Health Awareness', bn: 'মাসিক স্বাস্থ্যবিধি সচেতনতা' },
      date: { en: '2024', bn: '২০২৪' },
      icon: 'Droplets',
      color: 'bg-rose-50 text-rose-600',
      description: { en: 'Orientation on menstrual care for adolescent girls and distribution of hygiene products.', bn: 'কিশোরীদের মাসিক কালীন পরিচর্যা বিষয়ক ওরিয়েন্টেশন এবং স্বাস্থ্যবিধি উপকরণ বিতরণ।' },
      image: 'https://picsum.photos/seed/menstrual/800/600'
    },
    {
      id: 'mental-health',
      title: { en: 'Mental Health Awareness', bn: 'মানসিক স্বাস্থ্য সচেতনতা' },
      date: { en: '11/02/2024', bn: '১১/০২/২০২৪' },
      icon: 'Brain',
      color: 'bg-indigo-50 text-indigo-600',
      description: { en: 'Creating awareness among students and parents about mental health to reduce stigma.', bn: 'মানসিক স্বাস্থ্য বিষয়ে শিক্ষার্থী ও অভিভাবকদের সচেতন করা।' },
      image: 'https://picsum.photos/seed/mental/800/600'
    },
    {
      id: 'climate-change',
      title: { en: 'Climate Change Awareness', bn: 'জলবায়ু পরিবর্তন সচেতনতা' },
      date: { en: '05/05/2024', bn: '০৫/০৫/২০২৪' },
      icon: 'ThermometerSun',
      color: 'bg-orange-50 text-orange-600',
      description: { en: 'Awareness on actions to take during excessive temperatures and heatwaves.', bn: 'অতিরিক্ত তাপমাত্রায় করণীয় বিষয়ক সচেতনতা মূলক ওরিয়েন্টেশন।' },
      image: 'https://picsum.photos/seed/climate/800/600'
    },
    {
      id: 'dengue-prevention',
      title: { en: 'Dengue Prevention', bn: 'ডেঙ্গু প্রতিরোধ সচেতনতা' },
      date: { en: '20/08/2024', bn: '২০/০৮/২০২৪' },
      icon: 'Bug',
      color: 'bg-amber-50 text-amber-600',
      description: { en: 'Creating awareness about dengue mosquito prevention and community cleaning.', bn: 'ডেঙ্গু মশা নিধনে সচেতনতা সৃষ্টি এবং পরিষ্কার-পরিচ্ছন্নতা অভিযান।' },
      special: {
        date: { en: '12/10/2023', bn: '১২/১০/২০২৩' },
        title: { en: 'Mosquito Net Distribution', bn: 'মশারি বিতরণ কার্যক্রম' },
        desc: { en: 'Distributed mosquito nets among 58 children and elderly disabled students.', bn: '৫৮ জন শিশু ও বয়স্ক প্রতিবন্ধী শিক্ষার্থীদের মধ্যে মশারি বিতরণ করা হয়।' }
      },
      image: 'https://picsum.photos/seed/dengue/800/600'
    },
    {
      id: 'disability-rights',
      title: { en: 'Disability Rights Awareness', bn: 'প্রতিবন্ধী অধিকার সচেতনতা' },
      date: { en: 'Ongoing', bn: 'চলমান' },
      icon: 'Scale',
      color: 'bg-purple-50 text-purple-600',
      description: { en: 'Support regarding identity cards, allowances, birth registration, and scholarships.', bn: 'পরিচয় পত্র, ভাতা, জন্ম নিবন্ধন ও শিক্ষা উপবৃত্তি প্রাপ্তিতে সহযোগিতা।' },
      image: 'https://picsum.photos/seed/rights/800/600'
    }
  ],
  disabilityRightsTags: {
    en: ['Identity Cards', 'Disability Allowance', 'Birth Registration', 'Voter IDs', 'Scholarships', 'Legal Support'],
    bn: ['পরিচয় পত্র', 'প্রতিবন্ধী ভাতা', 'জন্ম নিবন্ধন', 'ভোটার আইডি', 'শিক্ষা উপবৃত্তি', 'আইনি সহায়তা']
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
};
