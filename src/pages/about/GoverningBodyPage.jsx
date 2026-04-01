import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import PageWrapper from '../../components/layout/PageWrapper';
import { motion } from 'motion/react';
import { User, Mail, Phone, ShieldCheck, Award, Briefcase, ArrowRight, Users, Facebook, Twitter, Linkedin } from 'lucide-react';

export default function GoverningBodyPage() {
  const { lang } = useLanguage();

  const members = [
    { name: 'Nazma Ara Begum', nameBn: 'নাজমা আরা বেগম', role: 'President', roleBn: 'সভাপতি', disability: 'Visual Disability', disabilityBn: 'দৃষ্টি প্রতিবন্ধী', image: 'https://picsum.photos/seed/member1/400/500' },
    { name: 'Ria Arefine', nameBn: 'রিয়া আরেফিন', role: 'Vice-President', roleBn: 'সহ-সভাপতি', disability: 'Speech and Hearing', disabilityBn: 'শ্রবণ ও বাক প্রতিবন্ধী', image: 'https://picsum.photos/seed/member2/400/500' },
    { name: 'Ujjala Banik', nameBn: 'উজ্জলা বনিক', role: 'General Secretary', roleBn: 'সাধারণ সম্পাদক', disability: 'Visual Disability', disabilityBn: 'দৃষ্টি প্রতিবন্ধী', image: 'https://picsum.photos/seed/member3/400/500' },
    { name: 'Lucky Akter', nameBn: 'লাকি আক্তার', role: 'Treasurer', roleBn: 'কোষাধ্যক্ষ', disability: 'Physical Disability', disabilityBn: 'শারীরিক প্রতিবন্ধী', image: 'https://picsum.photos/seed/member4/400/500' },
    { name: 'Shirin Akter', nameBn: 'শিরিন আক্তার', role: 'Executive Member', roleBn: 'নির্বাহী সদস্য', disability: 'Visual Disability', disabilityBn: 'দৃষ্টি প্রতিবন্ধী', image: 'https://picsum.photos/seed/member5/400/500' },
    { name: 'Nazma Akter', nameBn: 'নাজমা আক্তার', role: 'Executive Member', roleBn: 'নির্বাহী সদস্য', disability: 'Physical Disability', disabilityBn: 'শারীরিক প্রতিবন্ধী', image: 'https://picsum.photos/seed/member6/400/500' },
    { name: 'Shanaj', nameBn: 'শানাজ', role: 'Executive Member', roleBn: 'নির্বাহী সদস্য', disability: 'Physical Disability', disabilityBn: 'শারীরিক প্রতিবন্ধী', image: 'https://picsum.photos/seed/member7/400/500' },
  ];

  return (
    <PageWrapper 
      title={lang === 'en' ? 'Governing Body' : 'নির্বাহী কমিটি'}
      subtitle={lang === 'en' ? 'Our organization is 100% led by persons with disabilities, ensuring authentic representation.' : 'আমাদের সংস্থা ১০০% প্রতিবন্ধী ব্যক্তিদের দ্বারা পরিচালিত, যা সঠিক প্রতিনিধিত্ব নিশ্চিত করে।'}
    >
      <div className="space-y-32">
        {/* Leadership Intro - Split Layout */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full font-bold text-sm uppercase tracking-widest">
              <ShieldCheck size={18} /> {lang === 'en' ? 'Authentic Leadership' : 'সঠিক নেতৃত্ব'}
            </div>
            <h2 className="text-5xl lg:text-6xl font-display font-bold text-text-main leading-tight">
              {lang === 'en' ? 'Led by Lived Experience' : 'অভিজ্ঞতার মাধ্যমে পরিচালিত'}
            </h2>
            <p className="text-muted text-xl leading-relaxed">
              {lang === 'en' 
                ? 'The governing body of SPUS consists of dedicated individuals who have lived experience with various disabilities. This unique perspective allows us to design programs that truly meet the needs of our community.' 
                : 'এসপিইউএস-এর নির্বাহী কমিটি এমন নিবেদিতপ্রাণ ব্যক্তিদের নিয়ে গঠিত যাদের বিভিন্ন প্রতিবন্ধকতার সাথে বসবাসের অভিজ্ঞতা রয়েছে। এই অনন্য দৃষ্টিভঙ্গি আমাদের এমন কর্মসূচি ডিজাইন করতে সাহায্য করে যা আমাদের সম্প্রদায়ের চাহিদাগুলো সত্যিকার অর্থে পূরণ করে।'}
            </p>
            <div className="p-10 bg-surface-alt rounded-[4rem] border border-border space-y-8 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700" />
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 bg-primary text-white rounded-3xl flex items-center justify-center shadow-xl">
                  <Award size={32} />
                </div>
                <div>
                  <h3 className="text-2xl font-display font-bold text-text-main">{lang === 'en' ? 'Focal Person' : 'যোগাযোগ ব্যক্তি'}</h3>
                  <p className="text-muted font-bold uppercase tracking-widest text-xs mt-1">{lang === 'en' ? 'General Secretary' : 'সাধারণ সম্পাদক'}</p>
                </div>
              </div>
              <div className="space-y-2">
                <p className="text-4xl font-display font-bold text-primary">{lang === 'en' ? 'Ujjala Banik' : 'উজ্জলা বনিক'}</p>
                <div className="flex gap-4 pt-2">
                  <a href="mailto:info@spus.org" className="text-muted hover:text-primary transition-colors"><Mail size={20} /></a>
                  <a href="tel:+880123456789" className="text-muted hover:text-secondary transition-colors"><Phone size={20} /></a>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            <div className="aspect-[3/4] rounded-[4rem] overflow-hidden shadow-2xl border-4 border-white">
              <img src={members[2].image} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </div>
            <div className="aspect-[3/4] rounded-[4rem] overflow-hidden shadow-2xl border-4 border-white mt-16">
              <img src={members[0].image} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </div>
          </motion.div>
        </section>

        {/* Members Grid - Professional Cards */}
        <section className="space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <h2 className="text-4xl font-display font-bold text-text-main">
              {lang === 'en' ? 'Executive Committee Members' : 'নির্বাহী কমিটির সদস্যবৃন্দ'}
            </h2>
            <p className="text-muted text-lg">
              {lang === 'en' ? 'A team of 100% disabled leaders driving social change.' : 'সামাজিক পরিবর্তন পরিচালনাকারী ১০০% প্রতিবন্ধী নেতাদের একটি দল।'}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {members.map((member, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group bg-white rounded-[3rem] border border-border overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
              >
                <div className="aspect-square overflow-hidden relative">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-text-main/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                    <div className="flex gap-4">
                      <button className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-primary transition-colors">
                        <Facebook size={20} />
                      </button>
                      <button className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-primary transition-colors">
                        <Twitter size={20} />
                      </button>
                      <button className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-primary transition-colors">
                        <Linkedin size={20} />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="p-10 space-y-6">
                  <div className="space-y-2">
                    <h3 className="text-2xl font-display font-bold text-text-main group-hover:text-primary transition-colors">
                      {lang === 'en' ? member.name : member.nameBn}
                    </h3>
                    <p className="text-primary font-bold text-sm uppercase tracking-widest">
                      {lang === 'en' ? member.role : member.roleBn}
                    </p>
                  </div>
                  <div className="pt-6 border-t border-border flex items-center gap-4">
                    <div className="w-10 h-10 bg-surface-alt text-secondary rounded-xl flex items-center justify-center group-hover:bg-secondary group-hover:text-white transition-colors duration-300">
                      <Briefcase size={20} />
                    </div>
                    <p className="text-sm text-muted font-bold">
                      {lang === 'en' ? member.disability : member.disabilityBn}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Governance & Transparency - Feature Blocks */}
        <section className="bg-text-main p-16 lg:p-24 rounded-[5rem] text-white relative overflow-hidden">
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -ml-32 -mb-32" />
          <div className="relative z-10 space-y-16">
            <div className="text-center max-w-3xl mx-auto space-y-4">
              <h2 className="text-4xl lg:text-5xl font-display font-bold">
                {lang === 'en' ? 'Governance & Transparency' : 'সুশাসন ও স্বচ্ছতা'}
              </h2>
              <p className="text-white/60 text-lg">
                {lang === 'en' 
                  ? 'We maintain strict governance protocols to ensure accountability and effective decision-making.' 
                  : 'জবাবদিহিতা এবং কার্যকর সিদ্ধান্ত গ্রহণ নিশ্চিত করতে আমরা কঠোর সুশাসন প্রোটোকল বজায় রাখি।'}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <motion.div 
                whileHover={{ y: -10 }}
                className="bg-white/5 backdrop-blur-sm p-12 rounded-[4rem] border border-white/10 space-y-8"
              >
                <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center shadow-xl">
                  <Users size={32} />
                </div>
                <h4 className="text-3xl font-display font-bold">{lang === 'en' ? 'Executive Committee Meetings' : 'নির্বাহী কমিটির সভা'}</h4>
                <p className="text-white/50 leading-relaxed text-lg">
                  {lang === 'en' 
                    ? 'Organized every 3 months as per Article 20 of the Constitution of SPUS. Decisions include committee approval, legal assistance, and action planning.' 
                    : 'এসপিইউএস-এর সংবিধানের ২০ ধারা অনুযায়ী প্রতি ৩ মাসে নির্বাহী কমিটির সভা আয়োজন করা হয়। সিদ্ধান্তের মধ্যে রয়েছে কমিটির অনুমোদন, আইনি সহায়তা এবং কর্মপরিকল্পনা।'}
                </p>
                <div className="flex items-center gap-4 text-primary font-bold">
                  <ArrowRight size={24} /> {lang === 'en' ? '4 Meetings per Year' : 'বছরে ৪টি সভা'}
                </div>
              </motion.div>
              <motion.div 
                whileHover={{ y: -10 }}
                className="bg-white/5 backdrop-blur-sm p-12 rounded-[4rem] border border-white/10 space-y-8"
              >
                <div className="w-16 h-16 bg-secondary rounded-2xl flex items-center justify-center shadow-xl">
                  <ShieldCheck size={32} />
                </div>
                <h4 className="text-3xl font-display font-bold">{lang === 'en' ? 'Annual General Meeting' : 'বার্ষিক সাধারণ সভা'}</h4>
                <p className="text-white/50 leading-relaxed text-lg">
                  {lang === 'en' 
                    ? 'Held annually to review income-expenditure, appoint auditors, and approve the annual work plan and budget.' 
                    : 'আয়-ব্যয় পর্যালোচনা, নিরীক্ষক নিয়োগ এবং বার্ষিক কর্মপরিকল্পনা ও বাজেট অনুমোদনের জন্য প্রতি বছর অনুষ্ঠিত হয়।'}
                </p>
                <div className="flex items-center gap-4 text-secondary font-bold">
                  <ArrowRight size={24} /> {lang === 'en' ? 'Inclusive Participation' : 'অন্তর্ভুক্তিমূলক অংশগ্রহণ'}
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </PageWrapper>
  );
}

