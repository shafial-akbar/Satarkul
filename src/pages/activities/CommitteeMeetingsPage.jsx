import React, { useState, useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import PageWrapper from '../../components/layout/PageWrapper';
import { motion } from 'motion/react';
import * as Icons from 'lucide-react';
import { getMeetingsData } from '../../api/apiClient';

export default function CommitteeMeetingsPage() {
  const { lang } = useLanguage();
  const [meetings, setMeetings] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const data = await getMeetingsData();
        setMeetings(data);
      } catch (error) {
        console.error('Error fetching meetings data:', error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  const getLocalized = (obj) => {
    if (!obj) return '';
    return obj[lang] || obj['en'] || '';
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-bg">
        <Icons.Loader2 size={48} className="animate-spin text-primary mb-4" />
        <p className="text-muted font-medium">
          {lang === 'en' ? 'Loading committee meetings...' : 'কমিটির সভা লোড হচ্ছে...'}
        </p>
      </div>
    );
  }

  return (
    <PageWrapper 
      title={getLocalized(meetings?.title)}
      subtitle={getLocalized(meetings?.subtitle)}
    >
      <div className="space-y-24">
        {/* Intro Section */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-surface-alt text-primary rounded-full font-bold text-sm uppercase tracking-widest">
                <Icons.Gavel size={18} /> {getLocalized(meetings?.intro?.tag)}
              </div>
              <h2 className="text-4xl lg:text-5xl font-display font-bold text-text-main leading-tight">
                {getLocalized(meetings?.intro?.title)}
              </h2>
            </div>
            <p className="text-muted leading-relaxed text-lg">
              {getLocalized(meetings?.intro?.description)}
            </p>
          </div>
          <div className="relative">
            <div className="aspect-video rounded-[3rem] overflow-hidden shadow-2xl">
              <img 
                src="https://picsum.photos/seed/meeting/1200/800" 
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
                  <p className="text-text-main font-bold">{getLocalized(meetings?.intro?.transparency)}</p>
                  <p className="text-xs text-muted">{getLocalized(meetings?.intro?.accountability)}</p>
                </div>
              </div>
              <p className="text-sm text-muted italic">
                {getLocalized(meetings?.intro?.quote)}
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
            {(meetings?.list || []).map((meeting, idx) => {
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
                          {getLocalized(meeting.description)}
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

                    {meeting.minutes && (
                      <div className="pt-8 border-t border-border">
                        <div className="bg-primary/5 p-8 rounded-[2.5rem] border border-primary/10">
                          <h4 className="flex items-center gap-2 text-primary font-bold uppercase tracking-widest text-sm mb-4">
                            <Icons.FileText size={18} /> {lang === 'en' ? 'Meeting Minutes' : 'সভার কার্যবিবরণী'}
                          </h4>
                          <p className="text-text-main leading-relaxed italic font-medium">
                            "{getLocalized(meeting.minutes)}"
                          </p>
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
                {getLocalized(meetings?.cta?.title)}
              </h2>
              <p className="text-white/80 text-lg leading-relaxed">
                {getLocalized(meetings?.cta?.description)}
              </p>
              <button className="px-10 py-5 bg-white text-primary rounded-2xl font-bold text-lg shadow-xl hover:bg-surface-alt transition-all">
                {getLocalized(meetings?.cta?.button)}
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
