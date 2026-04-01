import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '../../context/LanguageContext';
import PageWrapper from '../../components/layout/PageWrapper';
import { motion } from 'motion/react';
import * as Icons from 'lucide-react';

export default function PartnerPage() {
  const { t } = useTranslation();
  const { lang } = useLanguage();
  const [formStatus, setFormStatus] = useState(null);

  const benefits = [
    {
      icon: <Icons.Target className="text-primary" size={32} />,
      title: lang === 'en' ? 'Shared Vision' : 'অংশীদারিত্বের লক্ষ্য',
      desc: lang === 'en' ? 'Align your organization with our mission to create an inclusive society.' : 'একটি অন্তর্ভুক্তিমূলক সমাজ গঠনের লক্ষ্যে আপনার সংস্থাকে আমাদের সাথে যুক্ত করুন।'
    },
    {
      icon: <Icons.Users className="text-secondary" size={32} />,
      title: lang === 'en' ? 'Community Impact' : 'সামাজিক প্রভাব',
      desc: lang === 'en' ? 'Directly contribute to the empowerment of persons with disabilities.' : 'প্রতিবন্ধী ব্যক্তিদের ক্ষমতায়নে সরাসরি অবদান রাখুন।'
    },
    {
      icon: <Icons.Award className="text-accent" size={32} />,
      title: lang === 'en' ? 'Brand Recognition' : 'ব্র্যান্ড পরিচিতি',
      desc: lang === 'en' ? 'Enhance your corporate social responsibility profile through meaningful partnership.' : 'অর্থপূর্ণ অংশীদারিত্বের মাধ্যমে আপনার করপোরেট সামাজিক দায়বদ্ধতা বৃদ্ধি করুন।'
    }
  ];

  const partnershipTypes = [
    {
      title: lang === 'en' ? 'Corporate Partnership' : 'করপোরেট অংশীদারিত্ব',
      icon: <Icons.Building2 size={40} />,
      features: lang === 'en' 
        ? ['CSR Initiatives', 'Employee Engagement', 'Event Sponsorship'] 
        : ['CSR উদ্যোগ', 'কর্মচারী অংশগ্রহণ', 'ইভেন্ট স্পনসরশিপ']
    },
    {
      title: lang === 'en' ? 'NGO Collaboration' : 'এনজিও সহযোগিতা',
      icon: <Icons.Globe size={40} />,
      features: lang === 'en' 
        ? ['Joint Programs', 'Resource Sharing', 'Advocacy Networks'] 
        : ['যৌথ কর্মসূচি', 'সম্পদ ভাগাভাগি', 'অ্যাডভোকেসি নেটওয়ার্ক']
    },
    {
      title: lang === 'en' ? 'Individual Partner' : 'ব্যক্তিগত অংশীদার',
      icon: <Icons.UserCheck size={40} />,
      features: lang === 'en' 
        ? ['Monthly Support', 'Technical Expertise', 'Mentorship'] 
        : ['মাসিক সহায়তা', 'প্রযুক্তিগত দক্ষতা', 'মেন্টরশিপ']
    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus('success');
    setTimeout(() => setFormStatus(null), 5000);
  };

  return (
    <PageWrapper 
      title={lang === 'en' ? 'Partner With Us' : 'আমাদের সাথে অংশীদার হন'}
      subtitle={lang === 'en' ? 'Collaborate with us to scale our impact and reach more people in need.' : 'আমাদের প্রভাব বাড়াতে এবং আরও বেশি মানুষের কাছে পৌঁছাতে আমাদের সাথে সহযোগিতা করুন।'}
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

        {/* Partnership Types */}
        <section className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-text-main">
              {lang === 'en' ? 'Ways to Collaborate' : 'সহযোগিতার উপায়'}
            </h2>
            <p className="text-muted max-w-2xl mx-auto">
              {lang === 'en' 
                ? 'We offer various partnership models tailored to your organizations goals and resources.' 
                : 'আমরা আপনার সংস্থার লক্ষ্য এবং সম্পদের সাথে সামঞ্জস্যপূর্ণ বিভিন্ন অংশীদারিত্বের মডেল অফার করি।'}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {partnershipTypes.map((type, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -10 }}
                className="bg-white rounded-[3rem] border border-border overflow-hidden shadow-lg flex flex-col"
              >
                <div className="p-10 space-y-8 flex-grow">
                  <div className="w-20 h-20 bg-primary/10 text-primary rounded-2xl flex items-center justify-center">
                    {type.icon}
                  </div>
                  <div className="space-y-6">
                    <h3 className="text-2xl font-display font-bold text-text-main">{type.title}</h3>
                    <ul className="space-y-3">
                      {type.features.map((feature, fIdx) => (
                        <li key={fIdx} className="flex items-center gap-3 text-muted">
                          <Icons.CheckCircle2 size={18} className="text-secondary" />
                          <span className="font-medium">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="p-8 bg-surface-alt border-t border-border">
                  <button className="w-full py-4 bg-primary text-white rounded-2xl font-bold hover:bg-primary/90 transition-all">
                    {lang === 'en' ? 'Learn More' : 'আরও জানুন'}
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Partnership Form */}
        <section className="bg-surface-alt rounded-[4rem] p-8 lg:p-16 border border-border">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl font-display font-bold text-text-main leading-tight">
                {lang === 'en' ? 'Ready to Start a Partnership?' : 'অংশীদারিত্ব শুরু করতে প্রস্তুত?'}
              </h2>
              <p className="text-muted text-lg leading-relaxed">
                {lang === 'en' 
                  ? 'Fill out the form and our partnership team will get in touch with you within 48 hours to discuss potential collaborations.' 
                  : 'ফর্মটি পূরণ করুন এবং সম্ভাব্য সহযোগিতা নিয়ে আলোচনার জন্য আমাদের অংশীদারিত্ব টিম ৪৮ ঘণ্টার মধ্যে আপনার সাথে যোগাযোগ করবে।'}
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4 text-text-main font-bold">
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm">
                    <Icons.Mail className="text-primary" size={20} />
                  </div>
                  partner@example.org
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
                  <label className="text-sm font-bold text-text-main uppercase tracking-wider">{lang === 'en' ? 'Organization Name' : 'প্রতিষ্ঠানের নাম'}</label>
                  <input required type="text" className="w-full px-6 py-4 bg-surface-alt border border-border rounded-2xl focus:ring-2 focus:ring-primary outline-none transition-all" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-text-main uppercase tracking-wider">{lang === 'en' ? 'Contact Person' : 'যোগাযোগকারী ব্যক্তি'}</label>
                  <input required type="text" className="w-full px-6 py-4 bg-surface-alt border border-border rounded-2xl focus:ring-2 focus:ring-primary outline-none transition-all" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-text-main uppercase tracking-wider">{lang === 'en' ? 'Email Address' : 'ইমেইল ঠিকানা'}</label>
                <input required type="email" className="w-full px-6 py-4 bg-surface-alt border border-border rounded-2xl focus:ring-2 focus:ring-primary outline-none transition-all" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-text-main uppercase tracking-wider">{lang === 'en' ? 'Partnership Interest' : 'অংশীদারিত্বের আগ্রহ'}</label>
                <select className="w-full px-6 py-4 bg-surface-alt border border-border rounded-2xl focus:ring-2 focus:ring-primary outline-none transition-all">
                  <option>{lang === 'en' ? 'Corporate CSR' : 'করপোরেট CSR'}</option>
                  <option>{lang === 'en' ? 'NGO Project' : 'এনজিও প্রকল্প'}</option>
                  <option>{lang === 'en' ? 'Event Sponsorship' : 'ইভেন্ট স্পনসরশিপ'}</option>
                  <option>{lang === 'en' ? 'Other' : 'অন্যান্য'}</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-text-main uppercase tracking-wider">{lang === 'en' ? 'Message' : 'বার্তা'}</label>
                <textarea rows="4" className="w-full px-6 py-4 bg-surface-alt border border-border rounded-2xl focus:ring-2 focus:ring-primary outline-none transition-all resize-none"></textarea>
              </div>
              <button type="submit" className="w-full py-5 bg-secondary text-white rounded-2xl font-bold text-lg hover:bg-secondary/90 transition-all shadow-lg flex items-center justify-center gap-2">
                {lang === 'en' ? 'Send Proposal' : 'প্রস্তাব পাঠান'} <Icons.Send size={20} />
              </button>
              {formStatus === 'success' && (
                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center text-primary font-bold">
                  {lang === 'en' ? 'Thank you! Your proposal has been sent.' : 'ধন্যবাদ! আপনার প্রস্তাব পাঠানো হয়েছে।'}
                </motion.p>
              )}
            </form>
          </div>
        </section>
      </div>
    </PageWrapper>
  );
}
