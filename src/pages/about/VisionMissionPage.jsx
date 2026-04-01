import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import PageWrapper from '../../components/layout/PageWrapper';
import { motion } from 'motion/react';
import { Target, Compass, Eye, Rocket, CheckCircle2 } from 'lucide-react';

export default function VisionMissionPage() {
  const { lang } = useLanguage();

  const values = [
    { en: 'Inclusivity', bn: 'অন্তর্ভুক্তি' },
    { en: 'Integrity', bn: 'সততা' },
    { en: 'Empowerment', bn: 'ক্ষমতায়ন' },
    { en: 'Compassion', bn: 'মমতা' },
  ];

  return (
    <PageWrapper 
      title={lang === 'en' ? 'Vision & Mission' : 'লক্ষ্য ও উদ্দেশ্য'}
      subtitle={lang === 'en' ? 'Our guiding principles for creating an inclusive society.' : 'একটি অন্তর্ভুক্তিমূলক সমাজ গঠনের জন্য আমাদের পথপ্রদর্শক নীতিসমূহ।'}
    >
      <div className="space-y-32">
        {/* Vision & Mission - Overlapping Cards */}
        <section className="relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-0">
            {/* Vision Card */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-primary p-16 lg:p-24 rounded-[4rem] lg:rounded-r-none text-white relative z-10 shadow-2xl"
            >
              <div className="w-20 h-20 bg-white/10 rounded-3xl flex items-center justify-center mb-10">
                <Eye size={40} className="text-accent" />
              </div>
              <h3 className="text-4xl lg:text-5xl font-display font-bold mb-8">
                {lang === 'en' ? 'Our Vision' : 'আমাদের লক্ষ্য'}
              </h3>
              <p className="text-white/80 leading-relaxed text-xl lg:text-2xl italic font-serif">
                "{lang === 'en' 
                  ? 'A non-discriminatory society where people with disabilities enjoy their rights and responsibilities and they are fully capable of participating spontaneously at every level of society.' 
                  : 'একটি বৈষম্যহীন সমাজ যেখানে প্রতিবন্ধী ব্যক্তিরা তাদের অধিকার এবং দায়িত্ব ভোগ করে এবং তারা সমাজের প্রতিটি স্তরে স্বতঃস্ফূর্তভাবে অংশগ্রহণ করতে সম্পূর্ণভাবে সক্ষম।'}"
              </p>
            </motion.div>

            {/* Mission Card */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-secondary p-16 lg:p-24 rounded-[4rem] lg:rounded-l-none text-white lg:-ml-12 lg:mt-24 relative z-20 shadow-2xl"
            >
              <div className="w-20 h-20 bg-white/10 rounded-3xl flex items-center justify-center mb-10">
                <Rocket size={40} className="text-accent" />
              </div>
              <h3 className="text-4xl lg:text-5xl font-display font-bold mb-8">
                {lang === 'en' ? 'Our Mission' : 'আমাদের উদ্দেশ্য'}
              </h3>
              <p className="text-white/80 leading-relaxed text-xl lg:text-2xl">
                {lang === 'en' 
                  ? 'The main goal of the organization is to create a barrier-free environment and rights-based integrated society for the very poor disabled men, women and children who are backward in all fields.' 
                  : 'সংস্থার মূল লক্ষ্য হল সকল ক্ষেত্রে পিছিয়ে থাকা অত্যন্ত দরিদ্র প্রতিবন্ধী পুরুষ, নারী এবং শিশুদের জন্য একটি বাধামুক্ত পরিবেশ এবং অধিকার-ভিত্তিক সমন্বিত সমাজ সৃষ্টি করা।'}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Core Values Section */}
        <section className="bg-surface-alt p-16 lg:p-24 rounded-[5rem] border border-border">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl lg:text-5xl font-display font-bold text-text-main">
                {lang === 'en' ? 'Our Core Values' : 'আমাদের মূল মূল্যবোধ'}
              </h2>
              <p className="text-muted text-lg leading-relaxed">
                {lang === 'en' 
                  ? 'These values define our culture and guide our actions as we work towards social justice and inclusion.' 
                  : 'এই মূল্যবোধগুলি আমাদের সংস্কৃতিকে সংজ্ঞায়িত করে এবং সামাজিক ন্যায়বিচার ও অন্তর্ভুক্তির দিকে কাজ করার সময় আমাদের ক্রিয়াকলাপকে গাইড করে।'}
              </p>
              <div className="grid grid-cols-2 gap-6">
                {values.map((val, idx) => (
                  <div key={idx} className="flex items-center gap-4">
                    <div className="w-8 h-8 bg-primary/10 text-primary rounded-full flex items-center justify-center">
                      <CheckCircle2 size={18} />
                    </div>
                    <span className="font-bold text-text-main text-lg">{lang === 'en' ? val.en : val.bn}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-primary/5 rounded-[4rem] rotate-3" />
              <img 
                src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=2070&auto=format&fit=crop" 
                alt="Values" 
                className="rounded-[4rem] shadow-xl relative z-10 border-4 border-white"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center space-y-8 py-12">
          <h2 className="text-3xl lg:text-4xl font-display font-bold text-text-main">
            {lang === 'en' ? 'Join Us in Our Mission' : 'আমাদের মিশনে যোগ দিন'}
          </h2>
          <div className="flex flex-wrap justify-center gap-6">
            <button className="px-10 py-5 bg-primary text-white rounded-full font-bold text-lg shadow-xl hover:bg-primary/90 transition-all">
              {lang === 'en' ? 'Become a Volunteer' : 'স্বেচ্ছাসেবী হন'}
            </button>
            <button className="px-10 py-5 bg-white text-text-main border border-border rounded-full font-bold text-lg shadow-lg hover:bg-surface-alt transition-all">
              {lang === 'en' ? 'Donate Now' : 'এখনই দান করুন'}
            </button>
          </div>
        </section>
      </div>
    </PageWrapper>
  );
}

