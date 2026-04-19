export const committeeMeetingsData = {
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
      },
      minutes: {
        en: "Minutes: Approval of committee reports, funds collection strategy for Ramadan relief, and Dengue awareness plan.",
        bn: "কার্যবিবরণী: কমিটির রিপোর্ট অনুমোদন, রমজান ট্রাণের তহবিল সংগ্রহ কৌশল এবং ডেঙ্গু সচেতনতা পরিকল্পনা।"
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
      },
      minutes: {
        en: "Minutes: Sector-wise audit for 2022 approved. 2023 work plan and budget presented. New EC committee elected by consensus.",
        bn: "কার্যবিবরণী: ২০২২ সালের বিভাগীয় নিরীক্ষা অনুমোদিত। ২০২৩ সালের কর্মপরিকল্পনা ও বাজেট উপস্থাপিত। সর্বসম্মতিক্রমে নতুন ইসি কমিটি নির্বাচিত।"
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
};
