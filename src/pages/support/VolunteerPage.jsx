import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '../../context/LanguageContext';
import PageWrapper from '../../components/layout/PageWrapper';
import { motion } from 'motion/react';
import * as Icons from 'lucide-react';

export default function VolunteerPage() {
  const { t } = useTranslation();
  const { lang } = useLanguage();
  const [formStatus, setFormStatus] = useState(null);

  const benefits = [
    {
      icon: <Icons.Heart className="text-secondary" size={32} />,
      title: lang === 'en' ? 'Make a Difference' : 'পরিবর্তন আনুন',
      desc: lang === 'en' ? 'Directly impact the lives of persons with disabilities in your community.' : 'আপনার সম্প্রদায়ের প্রতিবন্ধী ব্যক্তিদের জীবনে সরাসরি প্রভাব ফেলুন।'
    },
    {
      icon: <Icons.TrendingUp className="text-primary" size={32} />,
      title: lang === 'en' ? 'Skill Development' : 'দক্ষতা বৃদ্ধি',
      desc: lang === 'en' ? 'Gain valuable experience and develop new professional skills.' : 'মূল্যবান অভিজ্ঞতা অর্জন করুন এবং নতুন পেশাদার দক্ষতা বিকাশ করুন।'
    },
    {
      icon: <Icons.Users className="text-accent" size={32} />,
      title: lang === 'en' ? 'Build Connections' : 'সম্পর্ক তৈরি',
      desc: lang === 'en' ? 'Join a community of like-minded individuals dedicated to social change.' : 'সামাজিক পরিবর্তনের জন্য নিবেদিত সমমনা ব্যক্তিদের সম্প্রদায়ে যোগ দিন।'
    }
  ];

  const volunteerRoles = [
    {
      title: lang === 'en' ? 'Event Support' : 'ইভেন্ট সহায়তা',
      icon: <Icons.Calendar size={40} />,
      desc: lang === 'en' ? 'Help us organize and manage our various awareness events and health camps.' : 'আমাদের বিভিন্ন সচেতনতামূলক ইভেন্ট এবং স্বাস্থ্য ক্যাম্প আয়োজন ও পরিচালনায় সহায়তা করুন।'
    },
    {
      title: lang === 'en' ? 'Technical Mentor' : 'প্রযুক্তিগত মেন্টর',
      icon: <Icons.Cpu size={40} />,
      desc: lang === 'en' ? 'Share your professional skills in IT, design, or vocational training.' : 'আইটি, ডিজাইন বা বৃত্তিমূলক প্রশিক্ষণে আপনার পেশাদার দক্ষতা শেয়ার করুন।'
    },
    {
      title: lang === 'en' ? 'Community Advocate' : 'সামাজিক অ্যাডভোকেট',
      icon: <Icons.Megaphone size={40} />,
      desc: lang === 'en' ? 'Help us spread awareness about disability rights and social inclusion.' : 'প্রতিবন্ধী অধিকার এবং সামাজিক অন্তর্ভুক্তি সম্পর্কে সচেতনতা ছড়িয়ে দিতে সহায়তা করুন।'
    },
    {
      title: lang === 'en' ? 'Admin Support' : 'অ্যাডমিন সহায়তা',
      icon: <Icons.FileText size={40} />,
      desc: lang === 'en' ? 'Assist our team with documentation, data entry, and office management.' : 'ডকুমেন্টেশন, ডেটা এন্ট্রি এবং অফিস পরিচালনায় আমাদের টিমকে সহায়তা করুন।'
    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus('success');
    setTimeout(() => setFormStatus(null), 5000);
  };

  return (
    <PageWrapper 
      title={lang === 'en' ? 'Become a Volunteer' : 'স্বেচ্ছাসেবী হিসেবে যোগ দিন'}
      subtitle={lang === 'en' ? 'Join our community of passionate volunteers and help us create a more inclusive world.' : 'আমাদের উৎসাহী স্বেচ্ছাসেবকদের সম্প্রদায়ে যোগ দিন এবং একটি অন্তর্ভুক্তিমূলক বিশ্ব গড়তে সাহায্য করুন।'}
    >
      <div className="space-y-24">
        {/* Benefits Section */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="p-8 bg-surface-alt rounded-[2rem] border border-border space-y-4 hover:shadow-xl transition-all"
            >
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-sm">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-display font-bold text-text-main">{benefit.title}</h3>
              <p className="text-muted leading-relaxed">{benefit.desc}</p>
            </motion.div>
          ))}
        </section>

        {/* Volunteer Roles */}
        <section className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-text-main">
              {lang === 'en' ? 'Volunteer Opportunities' : 'স্বেচ্ছাসেবী সুযোগ'}
            </h2>
            <p className="text-muted max-w-2xl mx-auto">
              {lang === 'en' 
                ? 'We have various roles available depending on your interests, skills, and availability.' 
                : 'আপনার আগ্রহ, দক্ষতা এবং সময়ের উপর ভিত্তি করে আমাদের বিভিন্ন ভূমিকা উপলব্ধ রয়েছে।'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {volunteerRoles.map((role, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -10 }}
                className="bg-white p-8 rounded-[3rem] border border-border shadow-lg hover:shadow-2xl transition-all duration-500 space-y-6"
              >
                <div className="w-16 h-16 bg-primary/10 text-primary rounded-2xl flex items-center justify-center">
                  {role.icon}
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-display font-bold text-text-main group-hover:text-primary transition-colors">
                    {role.title}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed">
                    {role.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Volunteer Form */}
        <section className="bg-surface-alt rounded-[4rem] p-8 lg:p-16 border border-border">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl font-display font-bold text-text-main leading-tight">
                {lang === 'en' ? 'Ready to Join Our Mission?' : 'আমাদের মিশনে যোগ দিতে প্রস্তুত?'}
              </h2>
              <p className="text-muted text-lg leading-relaxed">
                {lang === 'en' 
                  ? 'Fill out the registration form and our volunteer coordinator will contact you to discuss the next steps.' 
                  : 'নিবন্ধন ফর্মটি পূরণ করুন এবং আমাদের স্বেচ্ছাসেবক সমন্বয়কারী পরবর্তী পদক্ষেপ নিয়ে আলোচনার জন্য আপনার সাথে যোগাযোগ করবেন।'}
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4 text-text-main font-bold">
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm">
                    <Icons.Mail className="text-primary" size={20} />
                  </div>
                  volunteer@example.org
                </div>
                <div className="flex items-center gap-4 text-text-main font-bold">
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm">
                    <Icons.Phone className="text-primary" size={20} />
                  </div>
                  +880 1234 567890
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="bg-white p-8 lg:p-12 rounded-[3rem] shadow-xl border border-border space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-text-main uppercase tracking-wider">{lang === 'en' ? 'Full Name' : 'পুরো নাম'}</label>
                  <input required type="text" className="w-full px-6 py-4 bg-surface-alt border border-border rounded-2xl focus:ring-2 focus:ring-primary outline-none transition-all" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-text-main uppercase tracking-wider">{lang === 'en' ? 'Phone Number' : 'ফোন নম্বর'}</label>
                  <input required type="tel" className="w-full px-6 py-4 bg-surface-alt border border-border rounded-2xl focus:ring-2 focus:ring-primary outline-none transition-all" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-text-main uppercase tracking-wider">{lang === 'en' ? 'Email Address' : 'ইমেইল ঠিকানা'}</label>
                <input required type="email" className="w-full px-6 py-4 bg-surface-alt border border-border rounded-2xl focus:ring-2 focus:ring-primary outline-none transition-all" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-text-main uppercase tracking-wider">{lang === 'en' ? 'Preferred Role' : 'পছন্দের ভূমিকা'}</label>
                  <select className="w-full px-6 py-4 bg-surface-alt border border-border rounded-2xl focus:ring-2 focus:ring-primary outline-none transition-all">
                    <option>{lang === 'en' ? 'Event Support' : 'ইভেন্ট সহায়তা'}</option>
                    <option>{lang === 'en' ? 'Technical Mentor' : 'প্রযুক্তিগত মেন্টর'}</option>
                    <option>{lang === 'en' ? 'Advocacy' : 'অ্যাডভোকেসি'}</option>
                    <option>{lang === 'en' ? 'Admin' : 'অ্যাডমিন'}</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-text-main uppercase tracking-wider">{lang === 'en' ? 'Availability' : 'উপলব্ধতা'}</label>
                  <select className="w-full px-6 py-4 bg-surface-alt border border-border rounded-2xl focus:ring-2 focus:ring-primary outline-none transition-all">
                    <option>{lang === 'en' ? 'Weekends' : 'সাপ্তাহিক ছুটি'}</option>
                    <option>{lang === 'en' ? 'Weekdays' : 'সাপ্তাহিক দিন'}</option>
                    <option>{lang === 'en' ? 'Flexible' : 'নমনীয়'}</option>
                  </select>
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-text-main uppercase tracking-wider">{lang === 'en' ? 'Why do you want to volunteer?' : 'আপনি কেন স্বেচ্ছাসেবী হতে চান?'}</label>
                <textarea rows="4" className="w-full px-6 py-4 bg-surface-alt border border-border rounded-2xl focus:ring-2 focus:ring-primary outline-none transition-all resize-none"></textarea>
              </div>
              <button type="submit" className="w-full py-5 bg-primary text-white rounded-2xl font-bold text-lg hover:bg-primary/90 transition-all shadow-lg flex items-center justify-center gap-2">
                {lang === 'en' ? 'Submit Application' : 'আবেদন জমা দিন'} <Icons.Send size={20} />
              </button>
              {formStatus === 'success' && (
                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center text-primary font-bold">
                  {lang === 'en' ? 'Thank you! Your application has been received.' : 'ধন্যবাদ! আপনার আবেদন গ্রহণ করা হয়েছে।'}
                </motion.p>
              )}
            </form>
          </div>
        </section>
      </div>
    </PageWrapper>
  );
}
