export const scheduleData = {
  programs: [
    { id: 'therapy-p1', name: { en: 'Speech Therapy', bn: 'স্পিচ থেরাপি' }, duration: '45 min', color: 'bg-blue-500' },
    { id: 'therapy-p2', name: { en: 'Occupational Therapy', bn: 'অকুপেশনাল থেরাপি' }, duration: '60 min', color: 'bg-emerald-500' },
    { id: 'training-p1', name: { en: 'Parent Training', bn: 'অভিভাবক প্রশিক্ষণ' }, duration: '90 min', color: 'bg-amber-500' },
    { id: 'special-p1', name: { en: 'Sensory Integration', bn: 'সেন্সরি ইন্টিগ্রেশন' }, duration: '45 min', color: 'bg-rose-500' }
  ],
  slots: [
    '09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '02:00 PM', '03:00 PM', '04:00 PM'
  ],
  existingBookings: [
    { id: 'b1', date: '2026-04-20', time: '09:00 AM', programId: 'therapy-p1' },
    { id: 'b2', date: '2026-04-20', time: '10:00 AM', programId: 'therapy-p1' },
    { id: 'b3', date: '2026-04-21', time: '02:00 PM', programId: 'therapy-p2' },
    { id: 'b4', date: '2026-04-22', time: '11:00 AM', programId: 'training-p1' }
  ]
};
