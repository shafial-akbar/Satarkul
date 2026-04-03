import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '../../context/LanguageContext';
import { useContent } from '../../context/ContentContext';
import PageWrapper from '../../components/layout/PageWrapper';
import { motion } from 'motion/react';
import { Heart, DollarSign, Users, ShieldCheck, ArrowRight, CheckCircle2, Info, Calculator, PieChart } from 'lucide-react';
import FinancialImpactChart from '../../components/infographics/FinancialImpactChart';

export default function DonatePage() {
  const { t } = useTranslation();
  const { lang } = useLanguage();
  const { content } = useContent();
  const [amount, setAmount] = useState(1000);
  const [customAmount, setCustomAmount] = useState('');

  const donate = content?.support?.donate;

  const impactLevels = (donate?.impactLevels || []).map(level => ({
    ...level,
    label: level.label?.[lang] || level.label?.en || '',
    impact: level.impact?.[lang] || level.impact?.en || ''
  }));

  const paymentMethods = (donate?.paymentMethods || []).map(method => ({
    ...method,
    type: method.type?.[lang] || method.type?.en || ''
  }));

  const allocation = (donate?.transparency?.allocation || []).map(item => ({
    ...item,
    label: item.label?.[lang] || item.label?.en || ''
  }));

  const handleAmountClick = (val) => {
    setAmount(val);
    setCustomAmount('');
  };

  const handleCustomAmountChange = (e) => {
    setCustomAmount(e.target.value);
    setAmount(Number(e.target.value) || 0);
  };

  return (
    <PageWrapper 
      title={donate?.page?.title?.[lang] || (lang === 'en' ? 'Support Our Cause' : 'আমাদের পাশে দাঁড়ান')}
      subtitle={donate?.page?.subtitle?.[lang] || (lang === 'en' ? 'Your contribution empowers people with disabilities and builds a more inclusive society.' : 'আপনার অবদান প্রতিবন্ধী ব্যক্তিদের ক্ষমতায়ন করে এবং একটি আরও অন্তর্ভুক্তিমূলক সমাজ গঠন করে।')}
    >
      <div className="space-y-24">
        {/* Donation Form & Impact Calculator */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="bg-white p-8 lg:p-12 rounded-[3rem] shadow-2xl border border-border space-y-6 relative overflow-hidden">
            <div className="space-y-4 relative z-10">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 text-primary rounded-2xl flex items-center justify-center">
                  <Heart size={24} />
                </div>
                <h2 className="text-3xl font-display font-bold text-text-main">
                  {donate?.form?.title?.[lang] || (lang === 'en' ? 'Make a Donation' : 'অনুদান দিন')}
                </h2>
              </div>
              <p className="text-muted leading-relaxed">
                {donate?.form?.description?.[lang] || (lang === 'en' 
                  ? 'Choose an amount to contribute. Every bit helps us reach our goals.' 
                  : 'অবদানের জন্য একটি পরিমাণ চয়ন করুন। প্রতিটি ক্ষুদ্র অংশ আমাদের লক্ষ্য অর্জনে সহায়তা করে।')}
              </p>
            </div>

            <div className="space-y-8 relative z-10">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {[500, 1000, 2500, 5000].map((val) => (
                  <button 
                    key={val}
                    onClick={() => handleAmountClick(val)}
                    className={`py-4 rounded-2xl font-bold text-lg border-2 transition-all ${amount === val && !customAmount ? 'bg-primary text-white border-primary shadow-lg scale-105' : 'bg-surface-alt text-text-main border-border hover:border-primary'}`}
                  >
                    ৳{val}
                  </button>
                ))}
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-muted uppercase tracking-widest">{lang === 'en' ? 'Custom Amount' : 'অন্যান্য পরিমাণ'}</label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-2xl font-bold text-muted">৳</span>
                  <input 
                    type="number" 
                    value={customAmount}
                    onChange={handleCustomAmountChange}
                    placeholder={lang === 'en' ? 'Enter amount' : 'পরিমাণ লিখুন'} 
                    className="w-full pl-10 pr-4 py-5 rounded-2xl border-2 border-border outline-none focus:border-primary text-2xl font-bold text-text-main transition-all" 
                  />
                </div>
              </div>

              <div className="p-6 bg-surface-alt rounded-3xl border border-border space-y-4">
                <div className="flex items-center gap-3 text-primary font-bold">
                  <Calculator size={20} />
                  <span>{lang === 'en' ? 'Your Impact' : 'আপনার প্রভাব'}</span>
                </div>
                <p className="text-text-main font-medium leading-relaxed">
                  {amount > 0 
                    ? (lang === 'en' ? `Your donation of ৳${amount} will help us provide:` : `আপনার ৳${amount} অনুদান আমাদের সহায়তা করবে:`)
                    : (lang === 'en' ? 'Select an amount to see your impact.' : 'আপনার প্রভাব দেখতে একটি পরিমাণ নির্বাচন করুন।')}
                </p>
                <div className="flex items-start gap-3 p-4 bg-white rounded-2xl border border-border shadow-sm">
                  <CheckCircle2 size={24} className="text-secondary shrink-0" />
                  <p className="text-muted text-sm font-bold">
                    {impactLevels.find(l => amount >= l.amount)?.impact || (lang === 'en' ? 'Contributing to our general fund for inclusive development.' : 'অন্তর্ভুক্তিমূলক উন্নয়নের জন্য আমাদের সাধারণ তহবিলে অবদান রাখা।')}
                  </p>
                </div>
              </div>

              <button className="w-full py-6 bg-primary text-white rounded-[2rem] font-bold text-xl shadow-xl hover:bg-primary/90 hover:scale-[1.02] transition-all flex items-center justify-center gap-3">
                {lang === 'en' ? 'Proceed to Donate' : 'অনুদানের জন্য এগিয়ে যান'} <ArrowRight size={24} />
              </button>
            </div>

            {/* Decorative background */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
          </div>

          <div className="space-y-12">
            <div className="space-y-6">
              <h2 className="text-4xl font-display font-bold text-text-main leading-tight">
                {lang === 'en' ? 'Why Your Support Matters' : 'কেন আপনার সমর্থন গুরুত্বপূর্ণ'}
              </h2>
              <p className="text-muted leading-relaxed text-lg">
                {lang === 'en' 
                  ? 'We are a 100% disability-led organization. Your support goes directly into programs that empower and include people with disabilities in the community.' 
                  : 'আমরা ১০০% প্রতিবন্ধী-নেতৃত্বাধীন একটি সংস্থা। আপনার সমর্থন সরাসরি সেইসব কর্মসূচিতে যায় যা প্রতিবন্ধী ব্যক্তিদের ক্ষমতায়ন এবং সমাজে অন্তর্ভুক্ত করে।'}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { icon: ShieldCheck, title: lang === 'en' ? 'Transparency' : 'স্বচ্ছতা', desc: lang === 'en' ? 'Regular financial audits and reports.' : 'নিয়মিত আর্থিক অডিট এবং রিপোর্ট।' },
                { icon: Users, title: lang === 'en' ? 'Direct Impact' : 'সরাসরি প্রভাব', desc: lang === 'en' ? 'Direct support to beneficiaries.' : 'সুবিধাভোগীদের সরাসরি সহায়তা।' },
              ].map((item, idx) => (
                <div key={idx} className="p-6 bg-surface-alt rounded-3xl border border-border space-y-4 group hover:bg-white hover:shadow-xl transition-all">
                  <div className="w-12 h-12 bg-white text-primary rounded-2xl flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                    <item.icon size={24} />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-xl font-display font-bold text-text-main">{item.title}</h4>
                    <p className="text-sm text-muted leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-8 bg-surface-alt rounded-[3rem] border border-border space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-secondary text-white rounded-2xl flex items-center justify-center shadow-lg">
                  <DollarSign size={24} />
                </div>
                <h3 className="text-2xl font-display font-bold text-text-main">{lang === 'en' ? 'Payment Methods' : 'পেমেন্ট পদ্ধতি'}</h3>
              </div>
              <div className="space-y-4">
                {paymentMethods.map((method, idx) => (
                  <div key={idx} className="flex items-center justify-between p-4 bg-white rounded-2xl border border-border shadow-sm">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-surface-alt text-primary rounded-xl flex items-center justify-center font-bold">
                        {method.name[0]}
                      </div>
                      <div>
                        <p className="font-bold text-text-main">{method.name}</p>
                        <p className="text-xs text-muted font-bold uppercase tracking-widest">{method.type}</p>
                      </div>
                    </div>
                    <p className="font-mono font-bold text-primary">{method.number}</p>
                  </div>
                ))}
              </div>
              <div className="p-4 bg-primary/5 rounded-2xl border border-primary/10 flex items-start gap-3">
                <div className="shrink-0 mt-1">
                  <Info size={20} className="text-primary" />
                </div>
                <p className="text-xs text-muted leading-relaxed">
                  {lang === 'en' 
                    ? 'Please mention "Donation" in the reference while sending money. For bank transfers, please contact us directly.' 
                    : 'টাকা পাঠানোর সময় রেফারেন্সে "Donation" উল্লেখ করুন। ব্যাংক ট্রান্সফারের জন্য দয়া করে আমাদের সাথে সরাসরি যোগাযোগ করুন।'}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Financial Transparency */}
        <section className="space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <h2 className="text-3xl font-display font-bold text-text-main">
              {donate?.transparency?.title?.[lang] || (lang === 'en' ? 'Financial Transparency' : 'আর্থিক স্বচ্ছতা')}
            </h2>
            <p className="text-muted leading-relaxed">
              {donate?.transparency?.description?.[lang] || (lang === 'en' 
                ? 'We believe in full accountability. Here is how we allocate our resources to create impact.' 
                : 'আমরা পূর্ণ জবাবদিহিতায় বিশ্বাস করি। প্রভাব তৈরি করতে আমরা কীভাবে আমাদের সম্পদ বরাদ্দ করি তা এখানে দেওয়া হলো।')}
            </p>
          </div>
          <div className="bg-white p-8 lg:p-12 rounded-[4rem] shadow-xl border border-border">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-secondary font-bold">
                    <PieChart size={24} />
                    <span>{lang === 'en' ? 'Allocation Breakdown' : 'বরাদ্দ ব্রেকডাউন'}</span>
                  </div>
                  <h3 className="text-3xl font-display font-bold text-text-main leading-tight">
                    {lang === 'en' ? 'Where Your Money Goes' : 'আপনার টাকা কোথায় যায়'}
                  </h3>
                </div>
                <div className="space-y-6">
                  {allocation.map((item, idx) => (
                    <div key={idx} className="space-y-2">
                      <div className="flex justify-between items-center text-sm font-bold">
                        <span className="text-text-main">{item.label}</span>
                        <span className="text-muted">{item.value}%</span>
                      </div>
                      <div className="h-3 bg-surface-alt rounded-full overflow-hidden">
                        <motion.div 
                          initial={{ width: 0 }}
                          whileInView={{ width: `${item.value}%` }}
                          transition={{ duration: 1, delay: idx * 0.1 }}
                          className={`h-full ${item.color}`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="h-[400px]">
                <FinancialImpactChart />
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <h2 className="text-3xl font-display font-bold text-text-main">
              {lang === 'en' ? 'Donation FAQs' : 'অনুদান সংক্রান্ত সাধারণ জিজ্ঞাসা'}
            </h2>
          </div>
          <div className="max-w-4xl mx-auto space-y-4">
            {[
              { q: 'Is my donation tax-deductible?', qBn: 'আমার অনুদান কি কর-ছাড়যোগ্য?', a: 'Yes, we are a registered non-profit organization. We can provide donation receipts for tax purposes.', aBn: 'হ্যাঁ, আমরা একটি নিবন্ধিত অলাভজনক সংস্থা। আমরা করের উদ্দেশ্যে অনুদান রশিদ প্রদান করতে পারি।' },
              { q: 'Can I donate in honor of someone?', qBn: 'আমি কি কারো সম্মানে দান করতে পারি?', a: 'Absolutely. Please mention the person\'s name in the reference or contact us to set up a memorial fund.', aBn: 'অবশ্যই। দয়া করে রেফারেন্সে ব্যক্তির নাম উল্লেখ করুন অথবা একটি মেমোরিয়াল ফান্ড সেট আপ করতে আমাদের সাথে যোগাযোগ করুন।' },
              { q: 'How can I set up a recurring donation?', qBn: 'আমি কীভাবে একটি পুনরাবৃত্ত অনুদান সেট আপ করতে পারি?', a: 'Currently, we accept one-time donations via mobile banking. For monthly support, please contact our office.', aBn: 'বর্তমানে আমরা মোবাইল ব্যাংকিংয়ের মাধ্যমে এককালীন অনুদান গ্রহণ করি। মাসিক সহায়তার জন্য দয়া করে আমাদের অফিসের সাথে যোগাযোগ করুন।' },
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
