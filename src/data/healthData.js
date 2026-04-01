export const healthServices = [
  { 
    id: '8.6.1', 
    title: { en: 'Medical Support & Financial Assistance', bn: 'চিকিৎসা সহযোগিতা ও নগদ আর্থিক অনুদান' }, 
    target: { en: 'Disabled persons and students', bn: 'প্রতিবন্ধী ব্যক্তি ও শিক্ষার্থীদের মাঝে' },
    desc: { en: 'Medical assistance and cash financial grants are provided for the treatment of disabled persons and students.', bn: 'প্রতিবন্ধী ব্যক্তি ও শিক্ষার্থীদের চিকিৎসা সহযোগিতা ও চিকিৎসার জন্য নগদ আর্থিক অনুদান প্রদান করা হয়।' },
    icon: 'Banknote',
    color: 'bg-blue-50 text-blue-600'
  },
  { 
    id: '8.6.6', 
    title: { en: 'Regular Health Services', bn: 'নিয়মিত স্বাস্থ্য সেবা' }, 
    timeline: { en: 'Ongoing', bn: 'চলমান' },
    desc: { en: 'Every Tuesday, Ms. Shiuli Biswas (Senior Staff Nurse, FIDA International) provides medical checkups, weight/height measurement, and medicine distribution.', bn: 'প্রতি মঙ্গলবার ফিডা ইন্টারন্যাশনাল বাংলাদেশের সিনিয়র স্টাফ নার্স জনাব শিউলি বিশ্বাস শিক্ষার্থীদের ওজন, উচ্চতা এবং শারীরিক সমস্যা নির্ণয় করে ওষুধ ও চিকিৎসা সেবা প্রদান করেন।' },
    icon: 'Stethoscope',
    color: 'bg-emerald-50 text-emerald-600',
    featured: true
  },
  { 
    id: '8.6.10', 
    title: { en: 'Therapy Services', bn: 'স্পেশাল কেয়ার থেরাপি সেন্টার' }, 
    timeline: { en: 'Ongoing', bn: 'চলমান' },
    desc: { en: 'Therapy services provided every Saturday and Sunday by a physiotherapist and assistant. Includes specialized care at Bara Serai center.', bn: 'প্রতি শনিবার ও রবিবার ১ জন ফিজিওথেরাপিস্ট এবং ১ জন সহকারীর মাধ্যমে থেরাপি সেবা প্রদান করা হয়। এছাড়াও বাড়া সেরাই সেন্টারে বিশেষ সেবা প্রদান করা হয়।' },
    icon: 'Activity',
    color: 'bg-purple-50 text-purple-600',
    featured: true
  },
];

export const healthEvents = [
  { 
    id: '8.6.3', 
    title: { en: 'Eye Camp', bn: 'আই ক্যাম্প' }, 
    date: '03/11/24', 
    stats: [
      { label: { en: 'Examined', bn: 'পরীক্ষিত' }, value: '155' },
      { label: { en: 'Surgery', bn: 'অস্ত্রোপচার' }, value: '20' },
      { label: { en: 'Spectacles', bn: 'চশমা' }, value: '49' },
    ],
    icon: 'Eye' 
  },
  { 
    id: '8.6.7', 
    title: { en: 'ENT Medical Camp', bn: 'নাক, কান, গলার ডাক্তার দেখানো ও ঔষুধ বিতরণ' }, 
    date: '19/09/25', 
    beneficiaries: { en: '47 students, 20 parents', bn: '৪৭ জন শিক্ষার্থী, ২০ জন অভিভাবক' },
    desc: { en: 'Free ENT doctor consultation and medicine distribution.', bn: 'বিনা মূল্যে নাক, কান, গলার ডাক্তার দেখানো এবং ঔষুধ বিতরণ করা হয়।' },
    icon: 'Ear' 
  },
  { 
    id: '8.6.2', 
    title: { en: 'Deworming & Vitamin A', bn: 'কৃমির ট্যাবলেট ও ভিটামিন A' }, 
    date: '2025', 
    desc: { en: 'Disabled students are given deworming tablets and Vitamin A capsules.', bn: 'প্রতিবন্ধী শিক্ষার্থীদের কৃমির ট্যাবলেট ও ভিটামিন A ক্যাপসুল খাওয়ানো হয়।' },
    icon: 'Pill' 
  },
  { 
    id: '8.6.4', 
    title: { en: 'ORS Distribution', bn: 'আউটডোর অরস্যালাইন প্রোগ্রাম বিতরণ' }, 
    date: '22/08/24', 
    beneficiaries: { en: '150 persons', bn: '১৫০ জন' },
    icon: 'Droplet' 
  },
  { 
    id: '8.6.5', 
    title: { en: 'Red Card Distribution', bn: 'লাল কার্ড বিতরণ' }, 
    date: '22/08/25', 
    beneficiaries: { en: '40 persons', bn: '৪০ জন' },
    icon: 'CreditCard' 
  },
  { 
    id: '8.6.8', 
    title: { en: 'Hand Wash Program', bn: 'হ্যান্ড ওয়াশ প্রোগ্রাম ও বিতরণ' }, 
    date: '17/10/25', 
    beneficiaries: { en: '50 persons', bn: '৫০ জন' },
    icon: 'Hand' 
  },
  { 
    id: '8.6.9', 
    title: { en: 'HPV Vaccination', bn: 'ক্যান্সারের (এইচপিভি) টিকা প্রদান' }, 
    date: '13/11/24', 
    beneficiaries: { en: '3 persons', bn: '৩ জন' },
    icon: 'Syringe' 
  },
];
