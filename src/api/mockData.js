export const mockStats = {
  members: 705,
  served: 690,
  students: 100,
  relief: 845,
  wards: 11,
  years: 10,
  thanas: 7,
  men: 291,
  women: 294,
  children: 120,
  boys: 74,
  girls: 46,
  schoolBoys: 49,
  schoolGirls: 51,
};

export const mockPrograms = [
  {
    id: 'education',
    slug: 'education',
    title: 'Education',
    titleBn: 'শিক্ষা',
    icon: 'GraduationCap',
    description: 'Inclusive education for children with diverse disabilities.',
    descriptionBn: 'বৈচিত্র্যময় প্রতিবন্ধী শিশুদের জন্য অন্তর্ভুক্তিমূলক শিক্ষা।',
    subPrograms: 7
  },
  {
    id: 'health',
    slug: 'health',
    title: 'Health Services',
    titleBn: 'স্বাস্থ্য সেবা',
    icon: 'HeartPulse',
    description: 'Medical camps, therapy, and regular health checkups.',
    descriptionBn: 'মেডিকেল ক্যাম্প, থেরাপি এবং নিয়মিত স্বাস্থ্য পরীক্ষা।',
    subPrograms: 10
  },
  {
    id: 'skills',
    slug: 'skill-development',
    title: 'Skill Development',
    titleBn: 'দক্ষতা উন্নয়ন',
    icon: 'Wrench',
    description: 'Vocational training in tailoring, handicrafts, and more.',
    descriptionBn: 'দর্জি বিজ্ঞান, হস্তশিল্প এবং আরও অনেক কিছুতে বৃত্তিমূলক প্রশিক্ষণ।',
    subPrograms: 3
  },
  {
    id: 'finance',
    slug: 'financial-support',
    title: 'Financial Support',
    titleBn: 'আর্থিক সহায়তা',
    icon: 'Banknote',
    description: 'SME loans and grants for self-reliance.',
    descriptionBn: 'স্বনির্ভরতার জন্য এসএমই ঋণ এবং অনুদান।',
    subPrograms: 5
  },
  {
    id: 'devices',
    slug: 'assistive-devices',
    title: 'Assistive Devices',
    titleBn: 'সহায়ক উপকরণ',
    icon: 'Accessibility',
    description: 'Distribution of wheelchairs, crutches, and white canes.',
    descriptionBn: 'হুইলচেয়ার, ক্রাচ এবং সাদা ছড়ি বিতরণ।',
    subPrograms: 4
  },
  {
    id: 'awareness',
    slug: 'awareness',
    title: 'Awareness',
    titleBn: 'সচেতনতা',
    icon: 'Megaphone',
    description: 'Advocating for disability rights and social inclusion.',
    descriptionBn: 'প্রতিবন্ধী অধিকার এবং সামাজিক অন্তর্ভুক্তির জন্য অ্যাডভোকেসি।',
    subPrograms: 8
  }
];

export const mockGoverningBody = [
  { name: 'Nazma Ara Begum', role: 'President', roleBn: 'সভাপতি', disability: 'Visual Disability', disabilityBn: 'দৃষ্টি প্রতিবন্ধী' },
  { name: 'Ria Arefine', role: 'Vice-President', roleBn: 'সহ-সভাপতি', disability: 'Speech & Hearing', disabilityBn: 'বাক ও শ্রবণ প্রতিবন্ধী' },
  { name: 'Ujjala Banik', role: 'General Secretary', roleBn: 'সাধারণ সম্পাদক', disability: 'Visual Disability', disabilityBn: 'দৃষ্টি প্রতিবন্ধী' },
  { name: 'Lucky Akter', role: 'Treasurer', roleBn: 'কোষাধ্যক্ষ', disability: 'Physical Disability', disabilityBn: 'শারীরিক প্রতিবন্ধী' },
  { name: 'Shirin Akter', role: 'Executive Member', roleBn: 'নির্বাহী সদস্য', disability: 'Visual Disability', disabilityBn: 'দৃষ্টি প্রতিবন্ধী' },
  { name: 'Nazma Akter', role: 'Executive Member', roleBn: 'নির্বাহী সদস্য', disability: 'Physical Disability', disabilityBn: 'শারীরিক প্রতিবন্ধী' },
  { name: 'Shanaj', role: 'Executive Member', roleBn: 'নির্বাহী সদস্য', disability: 'Physical Disability', disabilityBn: 'শারীরিক প্রতিবন্ধী' },
];

export const mockDonors = [
  'Edison Foundation', 'Lions International', 'Leonard Cheshire Disability', 
  'Rotary International', 'FIDA', 'Inner Wheel', 'LCDB', 'WIDE', 
  'Tan Foundation', 'Joy & Hope Project', 'Mastul Foundation'
];

export const mockActivities = [
  { id: 1, date: '2024-11-03', title: 'Eye Camp 2024', titleBn: 'চক্ষু ক্যাম্প ২০২৪', category: 'health', stats: '155 examined, 20 surgeries' },
  { id: 2, date: '2024-10-15', title: 'White Cane Day', titleBn: 'সাদা ছড়ি দিবস', category: 'events', stats: 'Distribution to 50 members' },
  { id: 3, date: '2023-09-11', title: 'Mastul Foundation Grant', titleBn: 'মাস্তুল ফাউন্ডেশন অনুদান', category: 'finance', stats: '৳484,000 distributed' },
  { id: 4, date: '2023-01-07', title: 'Annual General Meeting', titleBn: 'বার্ষিক সাধারণ সভা', category: 'governance', stats: '21 members present' },
  { id: 5, date: '2024-10-23', title: 'Athlete Training', titleBn: 'ক্রীড়াবিদ প্রশিক্ষণ', category: 'education', stats: 'Special Olympics prep' },
];
