import React, { useState, useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import PageWrapper from '../../components/layout/PageWrapper';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ChevronLeft, 
  ChevronRight, 
  Info, 
  X, 
  CalendarCheck, 
  CheckCircle,
  Clock,
  User,
  Phone as PhoneIcon,
  MessageSquare
} from 'lucide-react';
import { getSchedule, submitBooking } from '../../api/apiClient';
import { 
  format, 
  addMonths, 
  subMonths, 
  startOfMonth, 
  endOfMonth, 
  startOfWeek, 
  endOfWeek, 
  isSameMonth, 
  isSameDay, 
  addDays, 
  isBefore, 
  startOfToday,
  parseISO
} from 'date-fns';

export default function BookingPage() {
  const { lang } = useLanguage();
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);
  const [schedule, setSchedule] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [bookingStatus, setBookingStatus] = useState('idle'); // idle, submitting, success

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getSchedule();
        setSchedule(result);
      } catch (error) {
        console.error('Error fetching schedule:', error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  const nextMonth = () => setCurrentMonth(addMonths(currentMonth, 1));
  const prevMonth = () => setCurrentMonth(subMonths(currentMonth, 1));

  const onDateClick = (day) => {
    if (isBefore(day, startOfToday())) return;
    setSelectedDate(day);
    setIsBookingModalOpen(true);
  };

  if (isLoading || !schedule) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-bg">
        <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <PageWrapper 
      title={lang === 'en' ? 'Program Booking' : 'প্রোগ্রাম বুকিং'} 
      subtitle={lang === 'en' ? 'Schedule therapy sessions, training, or school visits online.' : 'অনলাইনে থেরাপি সেশন, ট্রেনিং বা স্কুল ভিজিট বুক করুন।'}
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
        
        {/* Calendar Column */}
        <div className="lg:col-span-2 space-y-8">
          <div className="bg-white rounded-[2.5rem] border border-border shadow-soft overflow-hidden">
            {/* Header */}
            <div className="p-8 border-b border-border flex items-center justify-between bg-surface-alt/50">
              <h2 className="text-2xl font-display font-bold text-text-main capitalize">
                {format(currentMonth, 'MMMM yyyy')}
              </h2>
              <div className="flex gap-2">
                <button 
                  onClick={prevMonth}
                  className="p-3 bg-white border border-border rounded-xl text-text-main hover:bg-primary hover:text-white transition-all shadow-sm"
                >
                  <ChevronLeft size={20} />
                </button>
                <button 
                  onClick={nextMonth}
                  className="p-3 bg-white border border-border rounded-xl text-text-main hover:bg-primary hover:text-white transition-all shadow-sm"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>

            {/* Calendar Grid */}
            <div className="p-4 sm:p-8">
              <div className="grid grid-cols-7 gap-2">
                {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                  <div key={day} className="text-center text-[10px] sm:text-xs font-black uppercase text-muted tracking-widest py-4">
                    {lang === 'en' ? day : (day === 'Sun' ? 'রবি' : day === 'Mon' ? 'সোম' : day === 'Tue' ? 'মঙ্গল' : day === 'Wed' ? 'বুধ' : day === 'Thu' ? 'বৃহ' : day === 'Fri' ? 'শুক্র' : 'শনি')}
                  </div>
                ))}
                <CalendarDays 
                  currentMonth={currentMonth} 
                  selectedDate={selectedDate} 
                  onDateClick={onDateClick} 
                  bookings={schedule.existingBookings}
                  lang={lang}
                />
              </div>
            </div>
          </div>

          {/* Legend */}
          <div className="flex flex-wrap gap-6 px-8 py-4 bg-surface-alt/30 rounded-3xl border border-border/50">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-primary" />
              <span className="text-xs font-bold text-muted">{lang === 'en' ? 'Current Day' : 'আজকের দিন'}</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-primary/20" />
              <span className="text-xs font-bold text-muted">{lang === 'en' ? 'Available' : 'ফাঁকা রয়েছে'}</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-border" />
              <span className="text-xs font-bold text-muted">{lang === 'en' ? 'Past / Unavailable' : 'বন্ধ / পুরনো'}</span>
            </div>
          </div>
        </div>

        {/* Sidebar Column */}
        <div className="space-y-8">
          <div className="bg-white p-8 rounded-[2.5rem] border border-border shadow-soft space-y-6">
            <h3 className="text-xl font-bold text-text-main border-b border-border pb-4">
              {lang === 'en' ? 'Our Programs' : 'আমাদের প্রোগ্রামসমূহ'}
            </h3>
            <div className="space-y-4">
              {schedule.programs.map((prog) => (
                <div key={prog.id} className="group p-4 bg-surface-alt rounded-2xl border border-border hover:border-primary transition-all">
                  <div className="flex items-center gap-4">
                    <div className={`w-3 h-10 ${prog.color} rounded-full`} />
                    <div>
                      <h4 className="font-bold text-text-main group-hover:text-primary transition-colors">{prog.name[lang]}</h4>
                      <p className="text-xs text-muted font-bold tracking-tight">{prog.duration} session</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-primary p-8 rounded-[2.5rem] text-white space-y-4 shadow-xl">
            <Info size={32} className="opacity-50" />
            <h4 className="text-lg font-bold">{lang === 'en' ? 'Special Request?' : 'বিশেষ অনুরোধ?'}</h4>
            <p className="text-sm text-white/80 leading-relaxed">
              {lang === 'en' 
                ? 'If you need a slot outside of the regular schedule, please call our coordination desk directly.' 
                : 'যদি আপনি নিয়মিত তফশিলের বাইরে সময় প্রয়োজন মনে করেন, তবে সরাসরি আমাদের কর্ডিনেশন ডেস্কে কল করুন।'}
            </p>
            <button className="w-full py-3 bg-white/20 hover:bg-white/30 rounded-xl font-bold transition-all text-sm">
              01743214468
            </button>
          </div>
        </div>
      </div>

      {/* Booking Modal */}
      <AnimatePresence>
        {isBookingModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsBookingModalOpen(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-md"
            />
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative bg-white rounded-[3rem] p-8 max-w-xl w-full shadow-2xl overflow-hidden"
            >
              <button 
                onClick={() => setIsBookingModalOpen(false)}
                className="absolute top-6 right-6 z-10 p-2 text-muted hover:text-red-500 transition-all"
              >
                <X size={24} />
              </button>

              <BookingForm 
                date={selectedDate} 
                schedule={schedule}
                lang={lang} 
                onSuccess={() => {
                  setBookingStatus('success');
                  setTimeout(() => {
                    setIsBookingModalOpen(false);
                    setBookingStatus('idle');
                  }, 2000);
                }}
              />
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </PageWrapper>
  );
}

function CalendarDays({ currentMonth, selectedDate, onDateClick, bookings, lang }) {
  const monthStart = startOfMonth(currentMonth);
  const monthEnd = endOfMonth(monthStart);
  const startDate = startOfWeek(monthStart);
  const endDate = endOfWeek(monthEnd);

  const rows = [];
  let days = [];
  let day = startDate;
  let formattedDate = "";

  while (day <= endDate) {
    for (let i = 0; i < 7; i++) {
      formattedDate = format(day, "d");
      const cloneDay = day;
      const isSelected = isSameDay(day, selectedDate);
      const isCurrentMonth = isSameMonth(day, monthStart);
      const isPast = isBefore(day, startOfToday());
      const isToday = isSameDay(day, startOfToday());
      
      const dayBookings = bookings.filter(b => b.date === format(day, 'yyyy-MM-dd'));

      days.push(
        <div
          key={day.toString()}
          className={`relative aspect-square sm:aspect-video flex flex-col items-center justify-center p-2 sm:p-4 rounded-2xl border border-transparent transition-all cursor-pointer shadow-sm
            ${!isCurrentMonth ? 'text-muted/30 pointer-events-none' : isPast ? 'bg-surface-alt text-muted/50' : 'bg-surface-alt hover:bg-white hover:shadow-lg hover:border-primary/20'}
            ${isSelected ? 'bg-primary border-primary text-white scale-105 z-10' : ''}
            ${isToday && !isSelected ? 'ring-2 ring-primary ring-offset-2' : ''}
          `}
          onClick={() => onDateClick(cloneDay)}
        >
          <span className={`text-sm sm:text-lg font-black ${isSelected ? 'text-white' : 'text-text-main'}`}>{formattedDate}</span>
          {isCurrentMonth && !isPast && dayBookings.length > 0 && (
            <div className="absolute top-2 right-2 flex gap-0.5">
               {dayBookings.slice(0, 3).map((_, i) => (
                 <div key={i} className={`w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full ${isSelected ? 'bg-white' : 'bg-primary'}`} />
               ))}
            </div>
          )}
          {isCurrentMonth && !isPast && (
            <span className={`text-[8px] sm:text-[10px] font-black uppercase tracking-tighter mt-1 ${isSelected ? 'text-white/80' : 'text-muted'}`}>
                {dayBookings.length >= 7 ? (lang === 'en' ? 'Full' : 'পূর্ণ') : (lang === 'en' ? 'Open' : 'বুকিং')}
            </span>
          )}
        </div>
      );
      day = addDays(day, 1);
    }
    rows.push(
      <React.Fragment key={day.toString()}>
        {days}
      </React.Fragment>
    );
    days = [];
  }
  return rows;
}

function BookingForm({ date, schedule, lang, onSuccess }) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    programId: '',
    time: '',
    name: '',
    phone: '',
    notes: ''
  });

  const selectedDateStr = date ? format(date, 'yyyy-MM-dd') : '';
  const bookedTimes = schedule.existingBookings
    .filter(b => b.date === selectedDateStr)
    .map(b => b.time);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStep(3); // Loading state
    try {
      await submitBooking({ ...formData, date: selectedDateStr });
      onSuccess();
    } catch (error) {
      console.error('Booking failed:', error);
      setStep(1);
    }
  };

  if (step === 3) {
    return (
      <div className="py-12 flex flex-col items-center justify-center text-center space-y-6">
        <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
        <p className="font-bold text-text-main">{lang === 'en' ? 'Confirming your slot...' : 'আপনার স্লটটি নিশ্চিত করা হচ্ছে...'}</p>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div className="flex items-center gap-4 border-b border-border pb-6">
        <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center shrink-0">
          <CalendarCheck size={24} />
        </div>
        <div>
          <h3 className="text-xl font-bold text-text-main">
            {lang === 'en' ? 'Confirm Booking' : 'বুকিং নিশ্চিত করুন'}
          </h3>
          <p className="text-sm font-bold text-primary">{date ? format(date, 'MMMM d, yyyy') : ''}</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-[10px] font-black uppercase text-muted tracking-tight">{lang === 'en' ? 'Select Program' : 'প্রোগ্রাম নির্ধারণ করুন'}</label>
            <select 
              required
              className="w-full px-4 py-3 bg-surface-alt border border-border rounded-xl focus:outline-none focus:border-primary transition-all font-bold text-sm"
              value={formData.programId}
              onChange={e => setFormData({...formData, programId: e.target.value})}
            >
              <option value="">-- {lang === 'en' ? 'Choose' : 'নির্বাচন'} --</option>
              {schedule.programs.map(p => (
                <option key={p.id} value={p.id}>{p.name[lang]}</option>
              ))}
            </select>
          </div>

          <div className="space-y-2">
            <label className="text-[10px] font-black uppercase text-muted tracking-tight">{lang === 'en' ? 'Available Slots' : 'উপলব্ধ সময়সমূহ'}</label>
            <div className="grid grid-cols-2 gap-2">
              {schedule.slots.map(time => {
                const isBooked = bookedTimes.includes(time);
                return (
                  <button
                    key={time}
                    type="button"
                    disabled={isBooked}
                    onClick={() => setFormData({...formData, time})}
                    className={`px-3 py-2 rounded-lg text-[10px] font-bold border transition-all
                      ${isBooked ? 'bg-border text-muted border-transparent cursor-not-allowed opacity-50' : 
                        formData.time === time ? 'bg-primary text-white border-primary shadow-md' : 'bg-white border-border text-text-main hover:border-primary'}
                    `}
                  >
                    {time}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        <div className="space-y-4 pt-4 border-t border-border">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase text-muted tracking-tight">{lang === 'en' ? 'Full Name' : 'পূর্ণ নাম'}</label>
              <input 
                required
                type="text" 
                className="w-full px-4 py-3 bg-surface-alt border border-border rounded-xl focus:outline-none focus:border-primary transition-all font-bold text-sm"
                value={formData.name}
                onChange={e => setFormData({...formData, name: e.target.value})}
              />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase text-muted tracking-tight">{lang === 'en' ? 'Phone Number' : 'ফোন নম্বর'}</label>
              <input 
                required
                type="tel" 
                className="w-full px-4 py-3 bg-surface-alt border border-border rounded-xl focus:outline-none focus:border-primary transition-all font-bold text-sm"
                value={formData.phone}
                onChange={e => setFormData({...formData, phone: e.target.value})}
              />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-[10px] font-black uppercase text-muted tracking-tight">{lang === 'en' ? 'Notes (Optional)' : 'নোট (ঐচ্ছিক)'}</label>
            <textarea 
              rows={2}
              className="w-full px-4 py-3 bg-surface-alt border border-border rounded-xl focus:outline-none focus:border-primary transition-all font-bold text-sm"
              value={formData.notes}
              onChange={e => setFormData({...formData, notes: e.target.value})}
            />
          </div>
        </div>

        <button 
          type="submit"
          className="w-full py-4 bg-primary text-white rounded-2xl font-bold shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all flex items-center justify-center gap-2"
        >
          <CheckCircle size={20} />
          {lang === 'en' ? 'Request Appointment' : 'সাক্ষাতের অনুরোধ পাঠান'}
        </button>
      </form>
    </div>
  );
}
