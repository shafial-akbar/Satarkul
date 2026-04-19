import React, { useState, useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import PageWrapper from '../../components/layout/PageWrapper';
import { motion, AnimatePresence } from 'motion/react';
import * as Icons from 'lucide-react';
import { getStudents } from '../../api/apiClient';

export default function StudentProfilesPage() {
  const { lang } = useLanguage();
  const [students, setStudents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedStudent, setSelectedStudent] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getStudents();
        setStudents(result);
      } catch (error) {
        console.error('Error fetching students:', error);
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
      title={lang === 'en' ? 'Student Profiles' : 'শিক্ষার্থী পরিচিতি'} 
      subtitle={lang === 'en' ? 'Meet the wonderful children of Satarkul Diversity Disabled School.' : 'সাতারকুল বৈচিত্র্য প্রতিবন্ধী বিদ্যালয়ের চমৎকার শিশুদের সাথে পরিচিত হন।'}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {students.map((student, idx) => (
            <motion.div
              key={student.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              onClick={() => setSelectedStudent(student)}
              className="group bg-white rounded-[2rem] border border-border p-4 hover:border-primary hover:shadow-2xl transition-all cursor-pointer"
            >
              <div className="aspect-square rounded-2xl overflow-hidden mb-6 relative">
                <img 
                  src={student.image} 
                  alt={student.name[lang]} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                  <span className="text-white font-bold text-sm flex items-center gap-2">
                    {lang === 'en' ? 'View Details' : 'বিস্তারিত দেখুন'}
                    <Icons.ArrowRight size={16} />
                  </span>
                </div>
              </div>
              <div className="px-2 pb-2">
                <h3 className="text-xl font-bold text-text-main group-hover:text-primary transition-colors">{student.name[lang]}</h3>
                <div className="flex items-center gap-2 text-muted text-sm font-semibold mt-1">
                  <span>{student.disabilityType[lang]}</span>
                  <span className="w-1 h-1 bg-muted/40 rounded-full" />
                  <span>{lang === 'en' ? 'Age' : 'বয়স'}: {student.age}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Student Details Modal */}
      <AnimatePresence>
        {selectedStudent && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedStudent(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              className="relative bg-white rounded-[3rem] p-8 max-w-4xl w-full shadow-2xl overflow-hidden flex flex-col md:flex-row gap-8"
            >
              <button 
                onClick={() => setSelectedStudent(null)}
                className="absolute top-6 right-6 z-10 w-10 h-10 bg-white shadow-lg rounded-full flex items-center justify-center text-text-main hover:bg-red-50 hover:text-red-500 transition-all"
              >
                <Icons.X size={20} />
              </button>

              <div className="w-full md:w-1/2 aspect-square rounded-[2rem] overflow-hidden shrink-0">
                <img 
                  src={selectedStudent.image} 
                  alt={selectedStudent.name[lang]} 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="flex-grow flex flex-col justify-center space-y-6">
                <div>
                  <h4 className="text-3xl font-display font-black text-text-main mb-2">{selectedStudent.name[lang]}</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-4 py-1.5 bg-primary/10 text-primary rounded-full text-xs font-bold uppercase tracking-wider border border-primary/20">
                      {selectedStudent.disabilityType[lang]}
                    </span>
                    <span className="px-4 py-1.5 bg-surface-alt text-muted rounded-full text-xs font-bold uppercase tracking-wider border border-border">
                      {selectedStudent.class[lang]}
                    </span>
                  </div>
                </div>

                <div className="bg-surface-alt p-6 rounded-3xl border border-border">
                  <h5 className="text-[10px] font-black uppercase tracking-tighter text-muted mb-2">Personal Story & Info</h5>
                  <p className="text-text-main leading-relaxed italic">
                    "{selectedStudent.info[lang]}"
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-white border border-border rounded-2xl flex items-center gap-4">
                    <Icons.Calendar size={20} className="text-primary" />
                    <div>
                      <p className="text-[10px] font-black text-muted uppercase">Age</p>
                      <p className="font-bold text-text-main">{selectedStudent.age} {lang === 'en' ? 'Years' : 'বছর'}</p>
                    </div>
                  </div>
                  <div className="p-4 bg-white border border-border rounded-2xl flex items-center gap-4">
                    <Icons.User size={20} className="text-primary" />
                    <div>
                      <p className="text-[10px] font-black text-muted uppercase">ID</p>
                      <p className="font-bold text-text-main">#{selectedStudent.id.split('-')[1]}</p>
                    </div>
                  </div>
                </div>

                <button 
                  onClick={() => setSelectedStudent(null)}
                  className="w-full py-4 bg-primary text-white rounded-2xl font-bold hover:shadow-xl hover:-translate-y-1 transition-all"
                >
                  {lang === 'en' ? 'Close Profile' : 'প্রোফাইল বন্ধ করুন'}
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </PageWrapper>
  );
}
