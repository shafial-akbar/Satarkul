import React, { useState, useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import PageWrapper from '../../components/layout/PageWrapper';
import { motion, AnimatePresence } from 'motion/react';
import * as Icons from 'lucide-react';
import { getContributions } from '../../api/apiClient';

export default function ContributionTrackingPage() {
  const { lang } = useLanguage();
  const [contributions, setContributions] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedEvidence, setSelectedEvidence] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getContributions();
        setContributions(result);
      } catch (error) {
        console.error('Error fetching contributions:', error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-bg">
        <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <PageWrapper 
      title={lang === 'en' ? 'Donor & Contribution Tracking' : 'ডোনার এবং অনুদান ট্র্যাকিং'} 
      subtitle={lang === 'en' ? 'Ensuring transparency and accountability in our mission.' : 'আমাদের লক্ষ্য বাস্তবায়নে স্বচ্ছতা ও জবাবদিহিতা নিশ্চিতকরণ।'}
    >
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Transparency Intro */}
        <div className="bg-white p-8 rounded-[2.5rem] border border-border shadow-sm flex flex-col md:flex-row items-center gap-8">
          <div className="w-20 h-20 bg-emerald-100 rounded-3xl flex items-center justify-center text-emerald-600 shrink-0">
            <Icons.ShieldCheck size={40} />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-text-main mb-2">
              {lang === 'en' ? 'Our Transparency Commitment' : 'আমাদের স্বচ্ছতার অঙ্গীকার'}
            </h2>
            <p className="text-muted leading-relaxed">
              {lang === 'en' 
                ? 'We maintain detailed records of every contribution and how it is utilized to support our children. Your trust is our greatest asset.' 
                : 'আমরা প্রতিটি অনুদানের বিস্তারিত রেকর্ড এবং এটি কীভাবে শিশুদের সহায়তার জন্য ব্যবহার করা হয় তা বজায় রাখি। আপনার বিশ্বাসই আমাদের সবচেয়ে বড় সম্পদ।'}
            </p>
          </div>
        </div>

        {/* Contributions List */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {contributions.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-[2rem] border border-border overflow-hidden shadow-sm hover:border-primary transition-all group"
            >
              <div className="p-8">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-2">
                      {item.sector[lang]}
                    </span>
                    <h3 className="text-xl font-bold text-text-main group-hover:text-primary transition-colors">{item.donorName}</h3>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-primary">৳{item.amount.toLocaleString()}</div>
                    <div className="text-sm text-muted">{new Date(item.date).toLocaleDateString(lang === 'en' ? 'en-US' : 'bn-BD')}</div>
                  </div>
                </div>

                <p className="text-muted mb-8 italic leading-relaxed">
                  "{item.description[lang]}"
                </p>

                <button 
                  onClick={() => setSelectedEvidence(item)}
                  className="w-full py-4 bg-surface-alt rounded-2xl border border-border group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all flex items-center justify-center gap-2 font-bold"
                >
                  <Icons.Camera size={18} />
                  {lang === 'en' ? 'View Evidence' : 'প্রমাণপত্র দেখুন'}
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Evidence Modal */}
      <AnimatePresence>
        {selectedEvidence && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedEvidence(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative bg-white rounded-[2.5rem] p-4 max-w-3xl w-full shadow-2xl overflow-hidden"
            >
              <button 
                onClick={() => setSelectedEvidence(null)}
                className="absolute top-6 right-6 z-10 w-10 h-10 bg-white shadow-lg rounded-full flex items-center justify-center text-text-main hover:bg-red-50 hover:text-red-500 transition-all"
              >
                <Icons.X size={20} />
              </button>
              <div className="aspect-[4/3] rounded-2xl overflow-hidden relative group">
                <img 
                  src={selectedEvidence.evidence} 
                  alt="Evidence" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent p-8 flex flex-end items-end">
                  <div className="text-white">
                    <p className="text-sm font-medium opacity-80">{lang === 'en' ? 'Contribution Record' : 'অনুদান রেকর্ড'}</p>
                    <h4 className="text-xl font-bold">{selectedEvidence.donorName} - {selectedEvidence.sector[lang]}</h4>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </PageWrapper>
  );
}
