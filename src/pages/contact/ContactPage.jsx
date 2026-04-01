import React from 'react';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '../../context/LanguageContext';
import PageWrapper from '../../components/layout/PageWrapper';
import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Facebook, MessageCircle, Clock, Send, CheckCircle2 } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

const contactSchema = z.object({
  name: z.string().min(2, 'Name is too short'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Invalid phone number'),
  subject: z.string().min(1, 'Please select a subject'),
  message: z.string().min(10, 'Message is too short'),
});

export default function ContactPage() {
  const { t } = useTranslation();
  const { lang } = useLanguage();
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data) => {
    // Mock submit
    await new Promise(resolve => setTimeout(resolve, 1000));
    alert(lang === 'en' ? 'Message sent successfully!' : 'বার্তা সফলভাবে পাঠানো হয়েছে!');
    reset();
  };

  const contactInfo = [
    { icon: MapPin, label: lang === 'en' ? 'Address' : 'ঠিকানা', value: 'House 16, Road 5, Lane 2, Ward 41, Satarkul West Padordia, Badda, Dhaka-1212', color: 'text-primary' },
    { icon: Phone, label: lang === 'en' ? 'Phone' : 'ফোন', value: '01743214468', color: 'text-secondary' },
    { icon: MessageCircle, label: lang === 'en' ? 'WhatsApp' : 'হোয়াটসঅ্যাপ', value: '01849386845', color: 'text-[#25D366]' },
    { icon: Mail, label: lang === 'en' ? 'Email' : 'ইমেইল', value: 'spus.bd2019@gmail.com', color: 'text-accent' },
  ];

  return (
    <PageWrapper 
      title={lang === 'en' ? 'Get in Touch' : 'যোগাযোগ করুন'}
      subtitle={lang === 'en' ? 'We are here to help. Reach out to us for any inquiries or support.' : 'আমরা সাহায্য করতে এখানে আছি। যেকোনো জিজ্ঞাসা বা সহায়তার জন্য আমাদের সাথে যোগাযোগ করুন।'}
    >
      <div className="space-y-24">
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div className="space-y-12">
            <div className="space-y-6">
              <h2 className="text-4xl font-display font-bold text-text-main leading-tight">
                {lang === 'en' ? 'Contact Information' : 'যোগাযোগের তথ্য'}
              </h2>
              <p className="text-muted leading-relaxed text-lg">
                {lang === 'en' 
                  ? 'Feel free to visit our office or reach out via phone or email. We respond to all inquiries within 24 hours.' 
                  : 'আমাদের অফিসে আসতে পারেন অথবা ফোন বা ইমেলের মাধ্যমে যোগাযোগ করতে পারেন। আমরা ২৪ ঘণ্টার মধ্যে সব জিজ্ঞাসার উত্তর দিই।'}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {contactInfo.map((info, idx) => (
                <div key={idx} className="space-y-4 group">
                  <div className={`w-12 h-12 bg-surface-alt ${info.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <info.icon size={24} />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-xs font-bold text-muted uppercase tracking-widest">{info.label}</h4>
                    <p className="font-bold text-text-main leading-snug">{info.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-8 bg-surface-alt rounded-[3rem] border border-border space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary text-white rounded-2xl flex items-center justify-center shadow-lg">
                  <Clock size={24} />
                </div>
                <h3 className="text-2xl font-display font-bold text-text-main">{lang === 'en' ? 'Office Hours' : 'অফিস সময়'}</h3>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b border-border">
                  <span className="font-medium text-muted">{lang === 'en' ? 'Sat – Wed' : 'শনি – বুধ'}</span>
                  <span className="font-bold text-text-main">9:00 AM – 5:00 PM</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-border">
                  <span className="font-medium text-muted">{lang === 'en' ? 'Thursday' : 'বৃহস্পতিবার'}</span>
                  <span className="font-bold text-text-main">9:00 AM – 2:00 PM</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="font-medium text-muted">{lang === 'en' ? 'Friday' : 'শুক্রবার'}</span>
                  <span className="font-bold text-secondary">{lang === 'en' ? 'Closed' : 'বন্ধ'}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 lg:p-12 rounded-[3rem] shadow-2xl border border-border space-y-8 relative overflow-hidden">
            <div className="space-y-4 relative z-10">
              <h3 className="text-2xl font-display font-bold text-text-main">
                {lang === 'en' ? 'Send a Message' : 'বার্তা পাঠান'}
              </h3>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-1">
                    <input 
                      {...register('name')}
                      placeholder={lang === 'en' ? 'Your Name' : 'আপনার নাম'} 
                      className={`w-full px-4 py-4 rounded-xl border ${errors.name ? 'border-secondary' : 'border-border'} outline-none focus:border-primary transition-all`} 
                    />
                    {errors.name && <p className="text-xs text-secondary font-bold">{errors.name.message}</p>}
                  </div>
                  <div className="space-y-1">
                    <input 
                      {...register('phone')}
                      placeholder={lang === 'en' ? 'Phone Number' : 'ফোন নম্বর'} 
                      className={`w-full px-4 py-4 rounded-xl border ${errors.phone ? 'border-secondary' : 'border-border'} outline-none focus:border-primary transition-all`} 
                    />
                    {errors.phone && <p className="text-xs text-secondary font-bold">{errors.phone.message}</p>}
                  </div>
                </div>
                <div className="space-y-1">
                  <input 
                    {...register('email')}
                    placeholder={lang === 'en' ? 'Email Address' : 'ইমেইল ঠিকানা'} 
                    className={`w-full px-4 py-4 rounded-xl border ${errors.email ? 'border-secondary' : 'border-border'} outline-none focus:border-primary transition-all`} 
                  />
                  {errors.email && <p className="text-xs text-secondary font-bold">{errors.email.message}</p>}
                </div>
                <div className="space-y-1">
                  <select 
                    {...register('subject')}
                    className={`w-full px-4 py-4 rounded-xl border ${errors.subject ? 'border-secondary' : 'border-border'} outline-none focus:border-primary transition-all bg-white`}
                  >
                    <option value="">{lang === 'en' ? 'Select Subject' : 'বিষয় নির্বাচন করুন'}</option>
                    <option value="general">{lang === 'en' ? 'General Inquiry' : 'সাধারণ জিজ্ঞাসা'}</option>
                    <option value="donation">{lang === 'en' ? 'Donation' : 'অনুদান'}</option>
                    <option value="volunteer">{lang === 'en' ? 'Volunteer' : 'স্বেচ্ছাসেবক'}</option>
                    <option value="partnership">{lang === 'en' ? 'Partnership' : 'অংশীদারিত্ব'}</option>
                  </select>
                  {errors.subject && <p className="text-xs text-secondary font-bold">{errors.subject.message}</p>}
                </div>
                <div className="space-y-1">
                  <textarea 
                    {...register('message')}
                    rows={4} 
                    placeholder={lang === 'en' ? 'Your Message' : 'আপনার বার্তা'} 
                    className={`w-full px-4 py-4 rounded-xl border ${errors.message ? 'border-secondary' : 'border-border'} outline-none focus:border-primary transition-all resize-none`} 
                  />
                  {errors.message && <p className="text-xs text-secondary font-bold">{errors.message.message}</p>}
                </div>
                <button 
                  disabled={isSubmitting}
                  className="w-full py-5 bg-primary text-white rounded-2xl font-bold text-lg shadow-xl hover:bg-primary/90 hover:scale-105 transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:scale-100"
                >
                  {isSubmitting ? (
                    <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <>
                      <Send size={24} /> {lang === 'en' ? 'Send Message' : 'বার্তা পাঠান'}
                    </>
                  )}
                </button>
              </form>
            </div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
          </div>
        </section>

        {/* FAQ Section */}
        <section className="space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <h2 className="text-3xl font-display font-bold text-text-main">
              {lang === 'en' ? 'Frequently Asked Questions' : 'সাধারণ জিজ্ঞাসা'}
            </h2>
            <p className="text-muted leading-relaxed">
              {lang === 'en' 
                ? 'Quick answers to common questions about our organization and services.' 
                : 'আমাদের সংস্থা এবং পরিষেবাগুলি সম্পর্কে সাধারণ প্রশ্নের দ্রুত উত্তর।'}
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {[
              { q: 'How can I join as a member?', qBn: 'আমি কীভাবে সদস্য হিসেবে যোগ দিতে পারি?', a: 'You can visit our office or contact us via phone to learn about membership eligibility and process.', aBn: 'সদস্যপদ যোগ্যতা এবং প্রক্রিয়া সম্পর্কে জানতে আপনি আমাদের অফিসে আসতে পারেন বা ফোনের মাধ্যমে আমাদের সাথে যোগাযোগ করতে পারেন।' },
              { q: 'Is the school free for disabled children?', qBn: 'প্রতিবন্ধী শিশুদের জন্য কি স্কুলটি বিনামূল্যে?', a: 'Yes, we provide free education and support for children with diverse disabilities.', aBn: 'হ্যাঁ, আমরা বিভিন্ন ধরণের প্রতিবন্ধী শিশুদের জন্য বিনামূল্যে শিক্ষা এবং সহায়তা প্রদান করি।' },
              { q: 'How is the organization funded?', qBn: 'সংস্থাটি কীভাবে অর্থায়ন করা হয়?', a: 'We are funded by individual donations, corporate partnerships, and grants from foundations.', aBn: 'আমরা ব্যক্তিগত অনুদান, কর্পোরেট অংশীদারিত্ব এবং ফাউন্ডেশন থেকে অনুদানের মাধ্যমে অর্থায়ন করি।' },
            ].map((faq, idx) => (
              <details key={idx} className="group bg-surface-alt rounded-2xl border border-border overflow-hidden">
                <summary className="flex items-center justify-between p-6 cursor-pointer font-bold text-text-main hover:bg-white transition-colors">
                  {lang === 'en' ? faq.q : faq.qBn}
                  <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-primary group-open:rotate-180 transition-transform shadow-sm">
                    <CheckCircle2 size={18} />
                  </div>
                </summary>
                <div className="p-6 pt-0 text-muted leading-relaxed border-t border-border bg-white">
                  {lang === 'en' ? faq.a : faq.aBn}
                </div>
              </details>
            ))}
          </div>
        </section>
      </div>
    </PageWrapper>
  );
}
