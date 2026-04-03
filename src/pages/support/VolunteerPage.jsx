import React from 'react';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '../../context/LanguageContext';
import { useContent } from '../../context/ContentContext';
import PageWrapper from '../../components/layout/PageWrapper';
import { motion } from 'motion/react';
import * as Icons from 'lucide-react';

export default function VolunteerPage() {
  const { t } = useTranslation();
  const { lang } = useLanguage();
  const { content } = useContent();

  const volunteer = content?.support?.volunteer;

  const roles = (volunteer?.roles || []).map(role => ({
    ...role,
    title: role.title?.[lang] || role.title?.en || '',
    desc: role.desc?.[lang] || role.desc?.en || '',
    icon: Icons[role.icon] || Icons.User
  }));

  return (
    <PageWrapper 
      title={volunteer?.page?.title?.[lang] || (lang === 'en' ? 'Join Our Volunteer Team' : 'আমাদের স্বেচ্ছাসেবী দলে যোগ দিন')}
      subtitle={volunteer?.page?.subtitle?.[lang] || (lang === 'en' ? 'Your time and skills can make a significant difference in the lives of persons with disabilities.' : 'আপনার সময় এবং দক্ষতা প্রতিবন্ধী ব্যক্তিদের জীবনে উল্লেখযোগ্য পরিবর্তন আনতে পারে।')}
    >
      <div className="space-y-24">
        {/* Intro Section */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/10 text-secondary rounded-full font-bold text-sm uppercase tracking-widest">
                <Icons.Users size={18} /> {lang === 'en' ? 'Be the Change' : 'পরিবর্তন হোন'}
              </div>
              <h2 className="text-4xl lg:text-5xl font-display font-bold text-text-main leading-tight">
                {lang === 'en' ? 'Why Volunteer With SPUS?' : 'কেন এসপিইউএস-এর সাথে স্বেচ্ছাসেবী হবেন?'}
              </h2>
            </div>
            <p className="text-muted leading-relaxed text-lg">
              {lang === 'en' 
                ? 'Volunteering with us is more than just giving back; it\'s about building an inclusive society. We offer various opportunities for individuals to contribute their expertise and passion to our mission.' 
                : 'আমাদের সাথে স্বেচ্ছাসেবী হওয়া মানে শুধু ফিরিয়ে দেওয়া নয়; এটি একটি অন্তর্ভুক্তিমূলক সমাজ গড়ার কাজ। আমরা ব্যক্তিদের তাদের দক্ষতা এবং আবেগ আমাদের মিশনে অবদান রাখার জন্য বিভিন্ন সুযোগ প্রদান করি।'}
            </p>
            <div className="space-y-4">
              {[
                { title: lang === 'en' ? 'Gain Experience' : 'অভিজ্ঞতা অর্জন', desc: lang === 'en' ? 'Work directly with the disability community.' : 'প্রতিবন্ধী সম্প্রদায়ের সাথে সরাসরি কাজ করুন।' },
                { title: lang === 'en' ? 'Make an Impact' : 'প্রভাব ফেলুন', desc: lang === 'en' ? 'See the real-world results of your efforts.' : 'আপনার প্রচেষ্টার বাস্তব ফলাফল দেখুন।' },
              ].map((benefit, idx) => (
                <div key={idx} className="flex items-start gap-4 p-4 bg-surface-alt rounded-2xl border border-border">
                  <div className="w-10 h-10 bg-white text-primary rounded-xl flex items-center justify-center shadow-sm shrink-0">
                    <Icons.CheckCircle2 size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-text-main">{benefit.title}</h4>
                    <p className="text-sm text-muted">{benefit.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-[4rem] overflow-hidden shadow-2xl">
              <img 
                src="https://picsum.photos/seed/volunteer-team/1000/1000" 
                alt="Volunteer Team" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-3xl shadow-xl border border-border hidden md:block">
              <div className="flex items-center gap-4">
                <div className="flex -space-x-4">
                  {[1, 2, 3, 4].map(i => (
                    <div key={i} className="w-12 h-12 rounded-full border-4 border-white overflow-hidden">
                      <img src={`https://i.pravatar.cc/150?u=${i}`} alt="Volunteer" referrerPolicy="no-referrer" />
                    </div>
                  ))}
                </div>
                <div>
                  <p className="text-primary font-bold text-xl">200+</p>
                  <p className="text-xs text-muted font-bold uppercase tracking-widest">{lang === 'en' ? 'Active Volunteers' : 'সক্রিয় স্বেচ্ছাসেবী'}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Roles Grid */}
        <section className="space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-text-main">
              {lang === 'en' ? 'Volunteer Roles' : 'স্বেচ্ছাসেবী ভূমিকা'}
            </h2>
            <p className="text-muted">
              {lang === 'en' ? 'Find a role that matches your skills and interests.' : 'আপনার দক্ষতা এবং আগ্রহের সাথে মেলে এমন একটি ভূমিকা খুঁজুন।'}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {roles.map((role, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="p-10 bg-white rounded-[3rem] border border-border hover:border-primary hover:shadow-2xl transition-all group"
              >
                <div className="w-16 h-16 bg-surface-alt text-primary rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform shadow-sm">
                  <role.icon size={32} />
                </div>
                <h3 className="text-2xl font-display font-bold text-text-main mb-4">{role.title}</h3>
                <p className="text-muted leading-relaxed mb-4">{role.desc}</p>
                <button className="text-primary font-bold flex items-center gap-2 hover:gap-3 transition-all">
                  {lang === 'en' ? 'Apply for this role' : 'এই ভূমিকার জন্য আবেদন করুন'} <Icons.ArrowRight size={18} />
                </button>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Application Form Placeholder */}
        <section className="bg-primary p-12 lg:p-24 rounded-[4rem] text-white overflow-hidden relative">
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl lg:text-5xl font-display font-bold leading-tight">
                {lang === 'en' ? 'Ready to Start Your Journey?' : 'আপনার যাত্রা শুরু করতে প্রস্তুত?'}
              </h2>
              <p className="text-white/80 text-lg leading-relaxed">
                {lang === 'en' 
                  ? 'Fill out our volunteer application form and our team will get in touch with you shortly to discuss the next steps.' 
                  : 'আমাদের স্বেচ্ছাসেবী আবেদনপত্র পূরণ করুন এবং পরবর্তী পদক্ষেপগুলো নিয়ে আলোচনা করতে আমাদের টিম শীঘ্রই আপনার সাথে যোগাযোগ করবে।'}
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="px-10 py-5 bg-white text-primary rounded-2xl font-bold text-lg shadow-xl hover:bg-surface-alt transition-all">
                  {lang === 'en' ? 'Download Application Form' : 'আবেদনপত্র ডাউনলোড করুন'}
                </button>
                <button className="px-10 py-5 bg-transparent border-2 border-white text-white rounded-2xl font-bold text-lg hover:bg-white/10 transition-all">
                  {lang === 'en' ? 'Contact Coordinator' : 'সমন্বয়কারীর সাথে যোগাযোগ করুন'}
                </button>
              </div>
            </div>
            <div className="relative hidden lg:block">
              <div className="w-full aspect-square bg-white/10 backdrop-blur-3xl rounded-full flex items-center justify-center p-12 border border-white/20">
                <Icons.UserPlus size={120} className="text-white/40" />
              </div>
            </div>
          </div>
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/20 rounded-full blur-3xl translate-x-1/4 translate-y-1/4" />
        </section>
      </div>
    </PageWrapper>
  );
}
