import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { MapPin, Building2, Users } from 'lucide-react';
import { motion } from 'motion/react';

export default function WorkAreaGrid() {
  const { lang } = useLanguage();

  const areas = [
    { ward: 'Ward 20, 21', wardBn: 'ওয়ার্ড ২০, ২১', thana: 'Gulshan, Banani', thanaBn: 'গুলশান, বনানী', coverage: 'Gulshan, Banani, Mohakhali', coverageBn: 'গুলশান, বনানী, মহাখালী' },
    { ward: 'Ward 22, 23', wardBn: 'ওয়ার্ড ২২, ২৩', thana: 'Rampura, Khilgaon', thanaBn: 'রামপুরা, খিলগাঁও', coverage: 'Rampura, Khilgaon, Meradia', coverageBn: 'রামপুরা, খিলগাঁও, মেরাদিয়া' },
    { ward: 'Ward 24, 37', wardBn: 'ওয়ার্ড ২৪, ৩৭', thana: 'Hatirjheel, Badda', thanaBn: 'হাতিরঝিল, বাড্ডা', coverage: 'Hatirjheel, Merul Badda', coverageBn: 'হাতিরঝিল, মেরুল বাড্ডা' },
    { ward: 'Ward 38, 39', wardBn: 'ওয়ার্ড ৩৮, ৩৯', thana: 'Badda, Bhatara', thanaBn: 'বাড্ডা, ভাটারা', coverage: 'Shahzadpur, Bhatara, Solmaid', coverageBn: 'শাহজাদপুর, ভাটারা, সোলমাইদ' },
    { ward: 'Ward 40, 41', wardBn: 'ওয়ার্ড ৪০, ৪১', thana: 'Bhatara, Badda', thanaBn: 'ভাটারা, বাড্ডা', coverage: 'Satarkul, Padordia, Badda', coverageBn: 'সাতারকুল, পদরদিয়া, বাড্ডা' },
    { ward: 'Ward 42', wardBn: 'ওয়ার্ড ৪২', thana: 'Badda', thanaBn: 'বাড্ডা', coverage: 'Beroid, Badda', coverageBn: 'বেরাইদ, বাড্ডা' },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-6">
      {areas.map((area, idx) => (
        <motion.div 
          key={idx}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: idx * 0.1 }}
          className="bg-white p-6 rounded-3xl border border-border shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all group"
        >
          <div className="space-y-4">
            <div className="w-12 h-12 bg-primary/10 text-primary rounded-2xl flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
              <MapPin size={24} />
            </div>
            <div className="space-y-1">
              <h4 className="text-xl lg:text-2xl font-display font-bold text-text-main">
                {lang === 'en' ? area.ward : area.wardBn}
              </h4>
              <div className="flex items-center gap-2 text-sm text-muted font-bold uppercase tracking-widest">
                <Building2 size={14} /> {lang === 'en' ? area.thana : area.thanaBn}
              </div>
            </div>
            <div className="pt-4 border-t border-border flex items-start gap-2">
              <Users size={16} className="text-secondary shrink-0 mt-1" />
              <p className="text-sm text-muted leading-relaxed">
                {lang === 'en' ? area.coverage : area.coverageBn}
              </p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
