import React from 'react';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '../../context/LanguageContext';
import PageWrapper from '../../components/layout/PageWrapper';
import { motion } from 'motion/react';
import * as Icons from 'lucide-react';
import { committeeMeetings } from '../../data/committeeMeetingsData';

export default function CommitteeMeetingsPage() {
  const { t } = useTranslation();
  const { lang } = useLanguage();

  const getLocalized = (obj) => {
    if (!obj) return '';
    return obj[lang] || obj['en'] || '';
  };

  return (
    <PageWrapper 
      title={lang === 'en' ? 'Committee Meetings' : 'কমিটির সভা'}
      subtitle={lang === 'en' ? 'Ensuring transparency, democratic leadership, and organizational growth through regular meetings.' : 'নিয়মিত সভার মাধ্যমে স্বচ্ছতা, গণতান্ত্রিক নেতৃত্ব এবং সাংগঠনিক বৃদ্ধি নিশ্চিত করা।'}
    >
      <div className="space-y-24">
        {/* Intro Section */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-surface-alt text-primary rounded-full font-bold text-sm uppercase tracking-widest">
                <Icons.Gavel size={18} /> {lang === 'en' ? 'Governance' : 'সুশাসন'}
              </div>
              <h2 className="text-4xl lg:text-5xl font-display font-bold text-text-main leading-tight">
                {lang === 'en' ? 'Democratic Decision Making' : 'গণতান্ত্রিক সিদ্ধান্ত গ্রহণ'}
              </h2>
            </div>
            <p className="text-muted leading-relaxed text-lg">
              {lang === 'en' 
                ? 'At SPUS, our governance is built on the principles of transparency and collective decision-making. Regular committee meetings and annual general assemblies ensure that every voice is heard and that our initiatives align with our core mission.' 
                : 'এসপিইউএস-এ আমাদের সুশাসন স্বচ্ছতা এবং সম্মিলিত সিদ্ধান্ত গ্রহণের নীতির উপর ভিত্তি করে নির্মিত। নিয়মিত কমিটির সভা এবং বার্ষিক সাধারণ সভা নিশ্চিত করে যে প্রতিটি কণ্ঠস্বর শোনা হয় এবং আমাদের উদ্যোগগুলো আমাদের মূল লক্ষ্যের সাথে সামঞ্জস্যপূর্ণ থাকে।'}
            </p>
          </div>
          <div className="relative">
            <div className="aspect-video rounded-[3rem] overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2070&auto=format&fit=crop" 
                alt="Committee Meeting" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 bg-white p-8 rounded-3xl shadow-xl border border-border max-w-xs hidden md:block">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center">
                  <Icons.CheckCircle size={24} />
                </div>
                <div>
                  <p className="text-text-main font-bold">{lang === 'en' ? 'Transparency' : 'স্বচ্ছতা'}</p>
                  <p className="text-xs text-muted">{lang === 'en' ? 'Full Accountability' : 'পূর্ণ জবাবদিহিতা'}</p>
                </div>
              </div>
              <p className="text-sm text-muted italic">
                {lang === 'en' ? '"Decisions made collectively for the betterment of the community."' : '"সমাজের মঙ্গলের জন্য সম্মিলিতভাবে নেওয়া সিদ্ধান্ত।"'}
              </p>
            </div>
          </div>
        </section>

        {/* Meetings List */}
        <section className="space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-text-main">
              {lang === 'en' ? 'Meeting Highlights' : 'সভার হাইলাইটস'}
            </h2>
          </div>
          
          <div className="space-y-12">
            {committeeMeetings.map((meeting, idx) => {
              const MeetingIcon = Icons[meeting.icon] || Icons.HelpCircle;
              return (
                <motion.div 
                  key={meeting.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="bg-white rounded-[3rem] border border-border overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
                >
                  <div className="p-8 lg:p-12 space-y-6">
                    <div className="flex flex-col lg:flex-row justify-between gap-8">
                      <div className="space-y-6 lg:w-2/3">
                        <div className="space-y-4">
                          <div className="flex items-center gap-3">
                            <div className={`w-14 h-14 ${meeting.color} rounded-2xl flex items-center justify-center shadow-sm`}>
                              <MeetingIcon size={28} />
                            </div>
                            <div className="flex items-center gap-2 text-xs font-bold text-secondary uppercase tracking-widest">
                              <Icons.Calendar size={14} /> {getLocalized(meeting.timeline)}
                            </div>
                          </div>
                          <h3 className="text-3xl font-display font-bold text-text-main leading-tight">
                            {getLocalized(meeting.title)}
                          </h3>
                        </div>
                        <p className="text-muted text-lg leading-relaxed">
                          {getLocalized(meeting.desc)}
                        </p>
                      </div>

                      {meeting.stats && (
                        <div className="lg:w-1/3 space-y-6">
                          <div className="bg-surface-alt p-6 rounded-3xl border border-border space-y-6">
                            <h4 className="text-sm font-bold text-secondary uppercase tracking-widest text-center border-bottom border-border pb-4">
                              {lang === 'en' ? 'Attendance Statistics' : 'উপস্থিতি পরিসংখ্যান'}
                            </h4>
                            <div className="grid grid-cols-3 gap-4 text-center">
                              <div>
                                <p className="text-2xl font-display font-bold text-text-main">{meeting.stats.total}</p>
                                <p className="text-[10px] text-muted uppercase font-bold">{lang === 'en' ? 'Total' : 'মোট'}</p>
                              </div>
                              <div>
                                <p className="text-2xl font-display font-bold text-primary">{meeting.stats.female}</p>
                                <p className="text-[10px] text-muted uppercase font-bold">{lang === 'en' ? 'Female' : 'নারী'}</p>
                              </div>
                              <div>
                                <p className="text-2xl font-display font-bold text-secondary">{meeting.stats.male}</p>
                                <p className="text-[10px] text-muted uppercase font-bold">{lang === 'en' ? 'Male' : 'পুরুষ'}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>

                    {meeting.stats?.disabilityBreakdown && (
                      <div className="space-y-6">
                        <h4 className="text-xl font-display font-bold text-text-main">
                          {lang === 'en' ? 'Disability Type Breakdown' : 'প্রতিবন্ধিতার ধরন অনুযায়ী বিভাজন'}
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                          {meeting.stats.disabilityBreakdown.map((item, iIdx) => (
                            <div key={iIdx} className="p-6 bg-surface-alt rounded-3xl border border-border text-center space-y-2 hover:border-primary/30 transition-all">
                              <p className="text-3xl font-display font-bold text-primary">{item.value}</p>
                              <p className="text-xs font-bold text-muted uppercase tracking-tight leading-tight">
                                {getLocalized(item.label)}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-primary p-12 lg:p-20 rounded-[4rem] text-white overflow-hidden relative">
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl font-display font-bold leading-tight">
                {lang === 'en' ? 'Our Commitment to Transparency' : 'স্বচ্ছতার প্রতি আমাদের প্রতিশ্রুতি'}
              </h2>
              <p className="text-white/80 text-lg leading-relaxed">
                {lang === 'en' 
                  ? 'We maintain detailed records of all our meetings and decisions. If you are a member or a donor and wish to see our detailed reports, please feel free to contact us.' 
                  : 'আমরা আমাদের সমস্ত সভা এবং সিদ্ধান্তের বিস্তারিত রেকর্ড বজায় রাখি। আপনি যদি একজন সদস্য বা দাতা হন এবং আমাদের বিস্তারিত প্রতিবেদন দেখতে চান, তবে অনুগ্রহ করে আমাদের সাথে যোগাযোগ করুন।'}
              </p>
              <button className="px-10 py-5 bg-white text-primary rounded-2xl font-bold text-lg shadow-xl hover:bg-surface-alt transition-all">
                {lang === 'en' ? 'Contact for Reports' : 'প্রতিবেদনের জন্য যোগাযোগ'}
              </button>
            </div>
            <div className="relative hidden lg:block">
              <div className="w-full aspect-square bg-white/10 backdrop-blur-3xl rounded-full flex items-center justify-center p-12 border border-white/20">
                <Icons.FileText size={120} className="text-white/40" />
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
