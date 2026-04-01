// This file mimics the structure of an API response.
// You can easily replace this with a fetch call later.

export const awarenessPrograms = [
  {
    id: 'menstrual-health',
    title: {
      en: 'Menstrual Health Awareness',
      bn: 'মাসিক স্বাস্থ্যবিধি সচেতনতা'
    },
    date: '2024',
    icon: 'Droplets',
    color: 'bg-rose-50 text-rose-600',
    description: {
      en: 'Orientation on menstrual care for adolescent girls on the occasion of World Menstrual Health Day 2024. Distribution of hygiene products including tissues and nakshi pads.',
      bn: 'বিশ্ব মাসিক স্বাস্থ্য সেবা দিবস ২০২৪ উপলক্ষে কিশোরীদের মাসিক কালীন পরিচর্যা বিষয়ক অভিযেন্টেশন। প্রতিবন্ধী ব্যক্তি ও শিক্ষার্থীদের মাসিক স্বাস্থ্যবিধি ও টিস্যু ও নকশী প্যাড বিতরণ।'
    },
    image: 'https://picsum.photos/seed/menstrual/800/600'
  },
  {
    id: 'mental-health',
    title: {
      en: 'Mental Health Awareness',
      bn: 'মানসিক স্বাস্থ্য বিষয়ক সচেতনতা'
    },
    date: '11/02/2024',
    icon: 'Brain',
    color: 'bg-indigo-50 text-indigo-600',
    description: {
      en: 'Creating awareness among students and parents about mental health to reduce stigma and promote well-being.',
      bn: 'মানসিক স্বাস্থ্য বিষয়ে শিক্ষার্থীদের ও অভিভাবকদের সচেতন করা এবং সুস্থতা প্রচার করা।'
    },
    image: 'https://picsum.photos/seed/mental/800/600'
  },
  {
    id: 'climate-change',
    title: {
      en: 'Climate Change Awareness',
      bn: 'জলবায়ু পরিবর্তন সচেতনতা'
    },
    date: '05/05/2024',
    icon: 'ThermometerSun',
    color: 'bg-orange-50 text-orange-600',
    description: {
      en: 'Awareness orientation on actions to take during excessive temperatures and heatwaves due to climate change.',
      bn: 'জলবায়ু পরিবর্তনে অতিরিক্ত তাপমাত্রায় করণীয় বিষয়ক সচেতনতা মূলক অভিযেন্টেশন।'
    },
    image: 'https://picsum.photos/seed/climate/800/600'
  },
  {
    id: 'dengue-prevention',
    title: {
      en: 'Dengue Prevention',
      bn: 'ডেঙ্গু মশা নিধন সচেতনতা'
    },
    date: '20/08/2024',
    icon: 'Bug',
    color: 'bg-amber-50 text-amber-600',
    description: {
      en: 'Creating awareness among disabled people about dengue mosquito prevention and community cleaning.',
      bn: 'ডেঙ্গু মশা নিধনে প্রতিবন্ধী মানুষের মাঝে সচেতনতা সৃষ্টি করা এবং পরিষ্কার-পরিচ্ছন্নতা অভিযান।'
    },
    special: {
      date: '12/10/2023',
      title: {
        en: 'Mosquito Net Distribution',
        bn: 'মশারি বিতরণ কার্যক্রম'
      },
      desc: {
        en: 'Distributed mosquito nets among 58 children and elderly disabled students from Joy and Hope School during a dengue outbreak.',
        bn: 'ডেঙ্গু জ্বরের ঘটনা বৃদ্ধি পাওয়ায় জয় ও হোপ স্কুল থেকে এসপিইউএস-এর ৫৮ জন শিশু ও বয়স্ক প্রতিবন্ধী শিক্ষার্থীদের মধ্যে মশারি বিতরণ করা হয়।'
      }
    },
    image: 'https://picsum.photos/seed/dengue/800/600'
  },
  {
    id: 'communicable-disease',
    title: {
      en: 'Communicable Disease Awareness',
      bn: 'সংক্রামক রোগ সচেতনতা'
    },
    date: {
      en: 'Ongoing',
      bn: 'চলমান'
    },
    icon: 'Activity',
    color: 'bg-emerald-50 text-emerald-600',
    description: {
      en: 'Ongoing awareness orientation on communicable diseases such as fever, cold, cough, dysentery, and diarrhea.',
      bn: 'জ্বর, ঠান্ডা, সর্দি-কাশি, আমাশা, ডায়েরিয়া ইত্যাদি সংক্রামক রোগ বিষয়ক সচেতনতা মূলক অভিযেন্টেশন।'
    },
    image: 'https://picsum.photos/seed/disease/800/600'
  },
  {
    id: 'exchange-meeting',
    title: {
      en: 'Exchange Meeting',
      bn: 'মত বিনিময় সভা'
    },
    date: '10/02/2024',
    icon: 'MessagesSquare',
    color: 'bg-blue-50 text-blue-600',
    description: {
      en: 'Focusing on inclusion of disabled children in mainstream schools and elimination of discrimination in admission.',
      bn: 'প্রতিবন্ধী শিশুদের মূলধারার বিদ্যালয়ে অন্তর্ভুক্তি এবং শিক্ষা প্রতিষ্ঠানে ভর্তির বৈষম্য দূরীকরণ বিষয়ক আলোচনা।'
    },
    image: 'https://picsum.photos/seed/exchange/800/600'
  },
  {
    id: 'disability-rights',
    title: {
      en: 'Disability Rights Awareness',
      bn: 'প্রতিবন্ধী ব্যক্তিদের অধিকার সচেতনতা'
    },
    date: {
      en: 'Ongoing',
      bn: 'চলমান'
    },
    icon: 'Scale',
    color: 'bg-purple-50 text-purple-600',
    description: {
      en: 'Support regarding disability rights, identity cards, allowances, birth registration, voter IDs, and scholarships.',
      bn: 'প্রতিবন্ধী ব্যক্তিদের অধিকার, পরিচয় পত্র, ভাতা, জন্ম নিবন্ধন, ভোটার আইডি কার্ড ও শিক্ষা উপবৃত্তি প্রাপ্তিতে সহযোগিতা।'
    },
    image: 'https://picsum.photos/seed/rights/800/600'
  }
];
