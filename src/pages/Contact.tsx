import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLang } from '../contexts/LanguageContext';
import { useTheme } from '../contexts/ThemeContext';
import { translations } from '../data/translations';
import { servicesData } from '../data/services';
import { faqData } from '../data/faq';
import PageHero from '../components/ui/PageHero';
import emailjs from '@emailjs/browser';
import {
  FaPhone, FaEnvelope, FaMapMarkerAlt, FaWhatsapp, FaCheckCircle,
  FaPaperclip, FaChevronDown, FaChevronUp, FaClock, FaInfoCircle,
  FaArrowRight, FaArrowLeft,
} from 'react-icons/fa';

type FormMode = 'contact' | 'quote';
type QuoteStep = 1 | 2 | 3;

export default function Contact() {
  const { t, lang, dir } = useLang();
  const { isDark } = useTheme();
  const { contact } = translations;
  const [mode, setMode] = useState<FormMode>('contact');
  const [quoteStep, setQuoteStep] = useState<QuoteStep>(1);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [openFaq, setOpenFaq] = useState<string | null>(null);

  const [contactForm, setContactForm] = useState({
    name: '', company: '', phone: '', email: '', service: '', message: '',
  });
  const [contactErrors, setContactErrors] = useState<Record<string, string>>({});

  const [quoteForm, setQuoteForm] = useState({
    name: '', company: '', phone: '', email: '',
    serviceType: '', productType: '', quantity: '',
    dimensions: '', material: '', finishing: '',
    deadline: '', details: '',
  });
  const [quoteErrors, setQuoteErrors] = useState<Record<string, string>>({});
  const [fileName, setFileName] = useState<string | null>(null);

  const bgClass = isDark ? 'bg-[#0a0a0a]' : 'bg-white';
  const bgAlt = isDark ? 'bg-[#111111]' : 'bg-gray-50';
  const textClass = isDark ? 'text-white' : 'text-[#0a0a0a]';
  const textMuted = isDark ? 'text-gray-400' : 'text-gray-500';
  const cardBg = isDark ? 'bg-[#111111] border-white/5' : 'bg-white border-gray-100';
  const borderColor = isDark ? 'border-white/5' : 'border-gray-100';

  const inputClass = `w-full px-4 py-3.5 rounded-xl border text-sm focus:outline-none focus:border-[#F7931E] transition-colors ${
    isDark
      ? 'bg-[#1a1a1a] border-white/10 text-white placeholder-gray-500 focus:bg-[#1f1f1f]'
      : 'bg-gray-50 border-gray-200 text-gray-900 placeholder-gray-400 focus:bg-white'
  }`;
  const labelClass = `block text-xs font-bold uppercase tracking-wider mb-2 ${isDark ? 'text-gray-300' : 'text-gray-600'}`;

  const serviceOptions = servicesData.map((s) => s.title);
  const finishingOptions = [
    { ar: 'تغليف لامع / مطفي', en: 'Gloss / Matte Lamination' },
    { ar: 'تلميع UV', en: 'UV Coating' },
    { ar: 'تلميع UV جزئي (Spot UV)', en: 'Spot UV' },
    { ar: 'تذهيب ذهبي / فضي', en: 'Gold / Silver Foil' },
    { ar: 'ورنيش مائي', en: 'Aqueous Varnish' },
    { ar: 'قص دقيق (Die-cutting)', en: 'Precision Die-cutting' },
    { ar: 'طي وتجميع', en: 'Folding & Assembly' },
    { ar: 'لا أعرف — أحتاج استشارة', en: 'Not Sure — Need Consultation' },
  ];
  const deadlineOptions = [
    { ar: 'عاجل (3-5 أيام)', en: 'Urgent (3-5 days)' },
    { ar: 'أسبوع (7-10 أيام)', en: 'Week (7-10 days)' },
    { ar: 'أسبوعين (2-3 أسابيع)', en: 'Two weeks (2-3 weeks)' },
    { ar: 'شهر (4-5 أسابيع)', en: 'Month (4-5 weeks)' },
    { ar: 'أكثر من شهر', en: 'More than a month' },
  ];
  const quantityOptions = [
    { ar: '100-500', en: '100-500' },
    { ar: '500-1000', en: '500-1000' },
    { ar: '1000-5000', en: '1000-5000' },
    { ar: '5000-10000', en: '5000-10000' },
    { ar: '10000-50000', en: '10000-50000' },
    { ar: '50000+', en: '50000+' },
  ];

  const contactInfo = [
    {
      icon: FaPhone,
      label: contact.info.phone,
      value: '+20 10 14500077',
      href: 'tel:+201014500077',
      color: 'bg-blue-500/10 text-blue-500',
    },
    {
      icon: FaWhatsapp,
      label: contact.info.whatsapp,
      value: '+20 10 14500077',
      href: 'https://wa.me/201014500077',
      color: 'bg-green-500/10 text-green-500',
    },
    {
      icon: FaEnvelope,
      label: contact.info.email,
      value: 'support@pengopack.com',
      href: 'mailto:support@pengopack.com',
      color: 'bg-[#F7931E]/10 text-[#F7931E]',
    },
    {
      icon: FaMapMarkerAlt,
      label: contact.info.address,
      value: null,
      href: 'https://maps.app.goo.gl/X3LzbVcTAGv42kWw7',
      color: 'bg-red-500/10 text-red-500',
    },
  ];

  const validateContact = (): boolean => {
    const errors: Record<string, string> = {};
    if (!contactForm.name.trim()) errors.name = t({ ar: 'الاسم مطلوب', en: 'Name is required' });
    if (!contactForm.phone.trim()) errors.phone = t({ ar: 'رقم الهاتف مطلوب', en: 'Phone is required' });
    if (!contactForm.message.trim()) errors.message = t({ ar: 'الرسالة مطلوبة', en: 'Message is required' });
    setContactErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const validateQuoteStep = (step: QuoteStep): boolean => {
    const errors: Record<string, string> = {};
    if (step === 1) {
      if (!quoteForm.name.trim()) errors.name = t({ ar: 'الاسم مطلوب', en: 'Name is required' });
      if (!quoteForm.phone.trim()) errors.phone = t({ ar: 'رقم الهاتف مطلوب', en: 'Phone is required' });
      if (!quoteForm.email.trim()) errors.email = t({ ar: 'البريد الإلكتروني مطلوب', en: 'Email is required' });
    } else if (step === 2) {
      if (!quoteForm.serviceType) errors.serviceType = t({ ar: 'نوع الخدمة مطلوب', en: 'Service type is required' });
      if (!quoteForm.quantity) errors.quantity = t({ ar: 'الكمية مطلوبة', en: 'Quantity is required' });
    } else if (step === 3) {
      if (!quoteForm.details.trim()) errors.details = t({ ar: 'تفاصيل المشروع مطلوبة', en: 'Project details are required' });
    }
    setQuoteErrors(errors);
    return Object.keys(errors).length === 0;
  };

const handleContactSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  if (!validateContact()) return;

  setLoading(true);

  try {
    await emailjs.send(
      'service_1t2evxq',
      'template_d6vxghr',
      {
        name: contactForm.name,
        company: contactForm.company,
        phone: contactForm.phone,
        email: contactForm.email,
        service: contactForm.service,
        message: contactForm.message,
      },
      'SrXENPeRjEL1_ynyo'
    );

    setSubmitted(true);

    setContactForm({
      name: '',
      company: '',
      phone: '',
      email: '',
      service: '',
      message: '',
    });

  } catch (error) {
    console.error('EmailJS Error:', error);
    alert('Failed to send message');
  } finally {
    setLoading(false);
  }
};

  const handleQuoteSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateQuoteStep(3)) return;
    setLoading(true);
    // TODO: Replace with real API integration
    // POST /api/quote with quoteForm data
    // TODO: Handle file upload via multipart/form-data
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  const stepLabels = [
    { ar: 'بيانات التواصل', en: 'Contact Info' },
    { ar: 'تفاصيل المشروع', en: 'Project Details' },
    { ar: 'المواصفات والتسليم', en: 'Specs & Delivery' },
  ];

  const selectedFaq = faqData.slice(0, 4);

  return (
    <div className={bgClass}>
      <PageHero
        title={t({ ar: 'اتصل بنا / اطلب عرض سعر', en: 'Contact / Request a Quote' })}
        subtitle={t({ ar: 'تواصل معنا للحصول على استشارة فنية وعرض سعر مخصص لمشروعك', en: 'Contact us for a technical consultation and a customized quote for your project' })}
        breadcrumb={t({ ar: 'اتصل بنا', en: 'Contact Us' })}
      />

      <section className={`section-padding ${bgClass}`}>
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Left Info Column */}
            <div className="lg:col-span-1 space-y-5">
              {contactInfo.map((info, i) => (
                <motion.a
                  key={i}
                  href={info.href}
                  target={info.href.startsWith('http') ? '_blank' : undefined}
                  rel={info.href.startsWith('http') ? 'noreferrer' : undefined}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className={`flex items-start gap-4 p-5 rounded-2xl border transition-all duration-300 hover:-translate-y-1 hover:shadow-lg group ${
                    isDark ? 'bg-[#111111] border-white/5 hover:border-[#F7931E]/30' : 'bg-gray-50 border-gray-100 hover:border-[#F7931E]/30 hover:bg-white'
                  }`}
                >
                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 ${info.color}`}>
                    <info.icon size={18} />
                  </div>
                  <div>
                    <p className={`text-xs font-bold uppercase tracking-wider mb-1 ${textMuted}`}>{t(info.label)}</p>
                    {info.value ? (
                      <p className={`font-semibold text-sm ${textClass}`} dir="ltr">{info.value}</p>
                    ) : (
                      <p className={`font-semibold text-sm ${textClass}`}>{t(contact.info.addressValue)}</p>
                    )}
                  </div>
                </motion.a>
              ))}

              {/* Map */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className={`rounded-2xl border overflow-hidden ${borderColor}`}
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3450.5!2d31.7!3d30.3!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzDCsDE4JzAwLjAiTiAzMcKwNDInMDAuMCJF!5e0!3m2!1sen!2seg!4v1234567890"
                  width="100%"
                  height="220"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Pengo Pack Location"
                  className="opacity-90"
                />
              </motion.div>

              {/* Working Hours */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className={`p-5 rounded-2xl border ${cardBg}`}
              >
                <div className="flex items-center gap-2 mb-4">
                  <FaClock size={16} className="text-[#F7931E]" />
                  <h4 className={`font-bold text-sm uppercase tracking-wider ${textClass}`}>
                    {t({ ar: 'ساعات العمل', en: 'Working Hours' })}
                  </h4>
                </div>
                <div className="space-y-2">
                  {[
                    { day: { ar: 'السبت – الخميس', en: 'Sat – Thu' }, time: '8:00 AM – 5:00 PM' },
                    { day: { ar: 'الجمعة', en: 'Friday' }, time: t({ ar: 'إجازة', en: 'Closed' }) },
                  ].map((wh, i) => (
                    <div key={i} className="flex justify-between items-center text-sm">
                      <span className={textMuted}>{t(wh.day)}</span>
                      <span className={`font-semibold ${i === 1 ? 'text-red-400' : 'text-[#F7931E]'}`}>{wh.time}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-3 pt-3 border-t border-dashed border-gray-200 dark:border-white/10">
                  <p className={`text-xs ${textMuted}`}>
                    {t({ ar: 'نرد على جميع الاستفسارات في غضون 24 ساعة.', en: 'We respond to all inquiries within 24 hours.' })}
                  </p>
                </div>
              </motion.div>

              {/* WhatsApp CTA */}
              <motion.a
                href="https://wa.me/201014500077"
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className={`flex items-center gap-3 p-5 rounded-2xl border transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${
                  isDark ? 'bg-green-500/5 border-green-500/20 hover:border-green-500/40' : 'bg-green-50 border-green-200 hover:border-green-400'
                }`}
              >
                <div className="w-11 h-11 rounded-xl bg-green-500 flex items-center justify-center flex-shrink-0">
                  <FaWhatsapp size={20} className="text-white" />
                </div>
                <div>
                  <p className={`font-bold text-sm ${isDark ? 'text-green-400' : 'text-green-600'}`}>
                    {t({ ar: 'واتساب مباشر', en: 'WhatsApp Direct' })}
                  </p>
                  <p className={`text-xs ${textMuted}`}>
                    {t({ ar: 'رد سريع في أقل من ساعة', en: 'Fast response in less than an hour' })}
                  </p>
                </div>
              </motion.a>
            </div>

            {/* Form Column */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-2"
            >
              {/* Mode Tabs */}
              <div className={`flex gap-2 p-1.5 rounded-xl mb-8 ${isDark ? 'bg-[#111111]' : 'bg-gray-100'}`}>
                <button
                  onClick={() => { setMode('contact'); setSubmitted(false); }}
                  className={`flex-1 py-3 px-4 rounded-lg font-semibold text-sm transition-all duration-300 ${
                    mode === 'contact'
                      ? 'bg-[#F7931E] text-white shadow-md shadow-orange-500/20'
                      : isDark ? 'text-gray-400 hover:text-white' : 'text-gray-500 hover:text-gray-800'
                  }`}
                >
                  {t({ ar: 'رسالة عامة', en: 'General Message' })}
                </button>
                <button
                  onClick={() => { setMode('quote'); setSubmitted(false); setQuoteStep(1); }}
                  className={`flex-1 py-3 px-4 rounded-lg font-semibold text-sm transition-all duration-300 ${
                    mode === 'quote'
                      ? 'bg-[#F7931E] text-white shadow-md shadow-orange-500/20'
                      : isDark ? 'text-gray-400 hover:text-white' : 'text-gray-500 hover:text-gray-800'
                  }`}
                >
                  {t({ ar: 'طلب عرض سعر', en: 'Request a Quote' })}
                </button>
              </div>

              {/* Success State */}
              <AnimatePresence>
                {submitted && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="flex items-start gap-3 p-5 rounded-xl bg-green-500/10 border border-green-500/20 mb-6"
                  >
                    <FaCheckCircle size={20} className="text-green-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-green-500 text-sm font-bold mb-1">
                        {t({ ar: 'تم إرسال طلبك بنجاح!', en: 'Your request was sent successfully!' })}
                      </p>
                      <p className="text-green-400/80 text-xs">
                        {t({ ar: 'سنقوم بمراجعة طلبك والتواصل معك في غضون 24 ساعة. شكراً لثقتك في Pengo Pack.', en: 'We will review your request and contact you within 24 hours. Thank you for trusting Pengo Pack.' })}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Contact Form */}
              <AnimatePresence mode="wait">
                {mode === 'contact' && !submitted && (
                  <motion.form
                    key="contact"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    onSubmit={handleContactSubmit}
                    className="space-y-5"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className={labelClass}>{t(contact.form.name)} *</label>
                        <input
                          required
                          type="text"
                          className={inputClass}
                          placeholder={t(contact.form.name)}
                          value={contactForm.name}
                          onChange={(e) => { setContactForm({ ...contactForm, name: e.target.value }); if (contactErrors.name) setContactErrors({ ...contactErrors, name: '' }); }}
                        />
                        {contactErrors.name && <p className="text-red-400 text-xs mt-1">{contactErrors.name}</p>}
                      </div>
                      <div>
                        <label className={labelClass}>{t(contact.form.company)}</label>
                        <input
                          type="text"
                          className={inputClass}
                          placeholder={t(contact.form.company)}
                          value={contactForm.company}
                          onChange={(e) => setContactForm({ ...contactForm, company: e.target.value })}
                        />
                      </div>
                      <div>
                        <label className={labelClass}>{t(contact.form.phone)} *</label>
                        <input
                          required
                          type="tel"
                          className={inputClass}
                          placeholder="+20 XX XXXXXXXX"
                          dir="ltr"
                          value={contactForm.phone}
                          onChange={(e) => { setContactForm({ ...contactForm, phone: e.target.value }); if (contactErrors.phone) setContactErrors({ ...contactErrors, phone: '' }); }}
                        />
                        {contactErrors.phone && <p className="text-red-400 text-xs mt-1">{contactErrors.phone}</p>}
                      </div>
                      <div>
                        <label className={labelClass}>{t(contact.form.email)}</label>
                        <input
                          type="email"
                          className={inputClass}
                          placeholder="email@company.com"
                          dir="ltr"
                          value={contactForm.email}
                          onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                        />
                      </div>
                    </div>
                    <div>
                      <label className={labelClass}>{t(contact.form.service)}</label>
                      <select
                        className={inputClass}
                        value={contactForm.service}
                        onChange={(e) => setContactForm({ ...contactForm, service: e.target.value })}
                      >
                        <option value="">{t({ ar: 'اختر الخدمة', en: 'Select Service' })}</option>
                        {serviceOptions.map((svc, i) => (
                          <option key={i} value={t(svc)}>{t(svc)}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className={labelClass}>{t(contact.form.message)} *</label>
                      <textarea
                        required
                        rows={5}
                        className={inputClass}
                        placeholder={t({ ar: 'اكتب رسالتك هنا...', en: 'Write your message here...' })}
                        value={contactForm.message}
                        onChange={(e) => { setContactForm({ ...contactForm, message: e.target.value }); if (contactErrors.message) setContactErrors({ ...contactErrors, message: '' }); }}
                      />
                      {contactErrors.message && <p className="text-red-400 text-xs mt-1">{contactErrors.message}</p>}
                    </div>
                    <button
                      type="submit"
                      disabled={loading}
                      className="btn-primary w-full flex items-center justify-center gap-2 disabled:opacity-70"
                    >
                      {loading ? (
                        <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      ) : null}
                      {loading ? t({ ar: 'جاري الإرسال...', en: 'Sending...' }) : t(contact.form.submit)}
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>

              {/* Quote Form (Multi-step) */}
              <AnimatePresence mode="wait">
                {mode === 'quote' && !submitted && (
                  <motion.form
                    key="quote"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    onSubmit={handleQuoteSubmit}
                    className="space-y-5"
                  >
                    {/* Step indicator */}
                    <div className="flex items-center gap-2 mb-4">
                      {[1, 2, 3].map((step) => (
                        <div key={step} className="flex items-center gap-2 flex-1">
                          <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300 ${
                            step === quoteStep
                              ? 'bg-[#F7931E] text-white shadow-lg shadow-orange-500/30'
                              : step < quoteStep
                              ? 'bg-green-500 text-white'
                              : isDark ? 'bg-[#1a1a1a] text-gray-500 border border-white/10' : 'bg-gray-100 text-gray-400 border border-gray-200'
                          }`}>
                            {step < quoteStep ? <FaCheckCircle size={14} /> : step}
                          </div>
                          <span className={`text-xs font-semibold hidden sm:block ${step === quoteStep ? textClass : textMuted}`}>
                            {t(stepLabels[step - 1])}
                          </span>
                          {step < 3 && <div className={`flex-1 h-0.5 rounded-full ${step < quoteStep ? 'bg-green-500' : isDark ? 'bg-white/10' : 'bg-gray-200'}`} />}
                        </div>
                      ))}
                    </div>

                    {/* Step 1: Contact Info */}
                    {quoteStep === 1 && (
                      <div className="space-y-5">
                        <h3 className={`font-bold text-lg mb-4 ${textClass}`}>
                          {t({ ar: 'أولاً: بيانات التواصل', en: 'Step 1: Contact Information' })}
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                          <div>
                            <label className={labelClass}>{t(contact.form.name)} *</label>
                            <input
                              required
                              type="text"
                              className={inputClass}
                              placeholder={t(contact.form.name)}
                              value={quoteForm.name}
                              onChange={(e) => { setQuoteForm({ ...quoteForm, name: e.target.value }); if (quoteErrors.name) setQuoteErrors({ ...quoteErrors, name: '' }); }}
                            />
                            {quoteErrors.name && <p className="text-red-400 text-xs mt-1">{quoteErrors.name}</p>}
                          </div>
                          <div>
                            <label className={labelClass}>{t(contact.form.company)} *</label>
                            <input
                              required
                              type="text"
                              className={inputClass}
                              placeholder={t(contact.form.company)}
                              value={quoteForm.company}
                              onChange={(e) => setQuoteForm({ ...quoteForm, company: e.target.value })}
                            />
                          </div>
                          <div>
                            <label className={labelClass}>{t(contact.form.phone)} *</label>
                            <input
                              required
                              type="tel"
                              className={inputClass}
                              placeholder="+20 XX XXXXXXXX"
                              dir="ltr"
                              value={quoteForm.phone}
                              onChange={(e) => { setQuoteForm({ ...quoteForm, phone: e.target.value }); if (quoteErrors.phone) setQuoteErrors({ ...quoteErrors, phone: '' }); }}
                            />
                            {quoteErrors.phone && <p className="text-red-400 text-xs mt-1">{quoteErrors.phone}</p>}
                          </div>
                          <div>
                            <label className={labelClass}>{t(contact.form.email)} *</label>
                            <input
                              required
                              type="email"
                              className={inputClass}
                              placeholder="email@company.com"
                              dir="ltr"
                              value={quoteForm.email}
                              onChange={(e) => { setQuoteForm({ ...quoteForm, email: e.target.value }); if (quoteErrors.email) setQuoteErrors({ ...quoteErrors, email: '' }); }}
                            />
                            {quoteErrors.email && <p className="text-red-400 text-xs mt-1">{quoteErrors.email}</p>}
                          </div>
                        </div>
                        <div className="flex justify-end">
                          <button
                            type="button"
                            onClick={() => {
                              if (validateQuoteStep(1)) setQuoteStep(2);
                            }}
                            className="btn-primary inline-flex items-center gap-2"
                          >
                            {t({ ar: 'التالي', en: 'Next' })}
                            {dir === 'rtl' ? <FaArrowLeft size={14} /> : <FaArrowRight size={14} />}
                          </button>
                        </div>
                      </div>
                    )}

                    {/* Step 2: Project Details */}
                    {quoteStep === 2 && (
                      <div className="space-y-5">
                        <h3 className={`font-bold text-lg mb-4 ${textClass}`}>
                          {t({ ar: 'ثانياً: تفاصيل المشروع', en: 'Step 2: Project Details' })}
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                          <div>
                            <label className={labelClass}>{t({ ar: 'نوع الخدمة', en: 'Service Type' })} *</label>
                            <select
                              required
                              className={inputClass}
                              value={quoteForm.serviceType}
                              onChange={(e) => { setQuoteForm({ ...quoteForm, serviceType: e.target.value }); if (quoteErrors.serviceType) setQuoteErrors({ ...quoteErrors, serviceType: '' }); }}
                            >
                              <option value="">{t({ ar: 'اختر نوع الخدمة', en: 'Select service type' })}</option>
                              {serviceOptions.map((svc, i) => (
                                <option key={i} value={t(svc)}>{t(svc)}</option>
                              ))}
                            </select>
                            {quoteErrors.serviceType && <p className="text-red-400 text-xs mt-1">{quoteErrors.serviceType}</p>}
                          </div>
                          <div>
                            <label className={labelClass}>{t({ ar: 'نوع المنتج', en: 'Product Type' })}</label>
                            <input
                              type="text"
                              className={inputClass}
                              placeholder={t({ ar: 'مثال: علب كرتونية، بروشورات، ملصقات...', en: 'e.g. Carton boxes, brochures, labels...' })}
                              value={quoteForm.productType}
                              onChange={(e) => setQuoteForm({ ...quoteForm, productType: e.target.value })}
                            />
                          </div>
                          <div>
                            <label className={labelClass}>{t({ ar: 'الكمية المتوقعة', en: 'Expected Quantity' })} *</label>
                            <select
                              required
                              className={inputClass}
                              value={quoteForm.quantity}
                              onChange={(e) => { setQuoteForm({ ...quoteForm, quantity: e.target.value }); if (quoteErrors.quantity) setQuoteErrors({ ...quoteErrors, quantity: '' }); }}
                            >
                              <option value="">{t({ ar: 'اختر الكمية', en: 'Select quantity' })}</option>
                              {quantityOptions.map((q, i) => (
                                <option key={i} value={t(q)}>{t(q)}</option>
                              ))}
                            </select>
                            {quoteErrors.quantity && <p className="text-red-400 text-xs mt-1">{quoteErrors.quantity}</p>}
                          </div>
                          <div>
                            <label className={labelClass}>{t({ ar: 'الأبعاد / المقاس', en: 'Dimensions / Size' })}</label>
                            <input
                              type="text"
                              className={inputClass}
                              placeholder={t({ ar: 'مثال: 20x15x5 سم', en: 'e.g. 20x15x5 cm' })}
                              value={quoteForm.dimensions}
                              onChange={(e) => setQuoteForm({ ...quoteForm, dimensions: e.target.value })}
                            />
                          </div>
                        </div>
                        <div className="flex justify-between">
                          <button
                            type="button"
                            onClick={() => setQuoteStep(1)}
                            className="btn-outline-dark inline-flex items-center gap-2"
                          >
                            {dir === 'rtl' ? <FaArrowRight size={14} /> : <FaArrowLeft size={14} />}
                            {t({ ar: 'السابق', en: 'Previous' })}
                          </button>
                          <button
                            type="button"
                            onClick={() => {
                              if (validateQuoteStep(2)) setQuoteStep(3);
                            }}
                            className="btn-primary inline-flex items-center gap-2"
                          >
                            {t({ ar: 'التالي', en: 'Next' })}
                            {dir === 'rtl' ? <FaArrowLeft size={14} /> : <FaArrowRight size={14} />}
                          </button>
                        </div>
                      </div>
                    )}

                    {/* Step 3: Specs & Delivery */}
                    {quoteStep === 3 && (
                      <div className="space-y-5">
                        <h3 className={`font-bold text-lg mb-4 ${textClass}`}>
                          {t({ ar: 'ثالثاً: المواصفات والتسليم', en: 'Step 3: Specs & Delivery' })}
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                          <div>
                            <label className={labelClass}>{t({ ar: 'الخامة / الملاحظات', en: 'Material / Notes' })}</label>
                            <input
                              type="text"
                              className={inputClass}
                              placeholder={t({ ar: 'مثال: Ivory Board 350gsm, Duplex...', en: 'e.g. Ivory Board 350gsm, Duplex...' })}
                              value={quoteForm.material}
                              onChange={(e) => setQuoteForm({ ...quoteForm, material: e.target.value })}
                            />
                          </div>
                          <div>
                            <label className={labelClass}>{t({ ar: 'التشطيبات المطلوبة', en: 'Required Finishes' })}</label>
                            <select
                              className={inputClass}
                              value={quoteForm.finishing}
                              onChange={(e) => setQuoteForm({ ...quoteForm, finishing: e.target.value })}
                            >
                              <option value="">{t({ ar: 'اختر التشطيبات', en: 'Select finishes' })}</option>
                              {finishingOptions.map((f, i) => (
                                <option key={i} value={t(f)}>{t(f)}</option>
                              ))}
                            </select>
                          </div>
                          <div>
                            <label className={labelClass}>{t({ ar: 'الموعد النهائي / التسليم', en: 'Deadline / Delivery' })}</label>
                            <select
                              className={inputClass}
                              value={quoteForm.deadline}
                              onChange={(e) => setQuoteForm({ ...quoteForm, deadline: e.target.value })}
                            >
                              <option value="">{t({ ar: 'اختر الموعد', en: 'Select deadline' })}</option>
                              {deadlineOptions.map((d, i) => (
                                <option key={i} value={t(d)}>{t(d)}</option>
                              ))}
                            </select>
                          </div>
                          <div>
                            <label className={labelClass}>{t({ ar: 'رفع ملف', en: 'File Upload' })}</label>
                            <label className={`flex items-center gap-3 px-4 py-3.5 rounded-xl border cursor-pointer transition-colors ${
                              isDark ? 'bg-[#1a1a1a] border-white/10 hover:border-[#F7931E]/50' : 'bg-gray-50 border-gray-200 hover:border-[#F7931E]/50'
                            }`}>
                              <FaPaperclip size={16} className="text-[#F7931E]" />
                              <span className={`text-sm ${fileName ? textClass : textMuted}`}>
                                {fileName || t({ ar: 'اختر ملفاً (PDF, AI, EPS, JPG)', en: 'Choose file (PDF, AI, EPS, JPG)' })}
                              </span>
                              <input
                                type="file"
                                className="hidden"
                                accept=".pdf,.ai,.eps,.jpg,.jpeg,.png"
                                onChange={(e) => {
                                  const file = e.target.files?.[0];
                                  if (file) {
                                    setFileName(file.name);
                                    // TODO: Store file for upload. In production, use FormData to upload via API
                                  }
                                }}
                              />
                            </label>
                            <p className={`text-[10px] mt-1 ${textMuted}`}>
                              {t({ ar: 'الملفات المرفوعة ستُرفق مع طلب عرض السعر. (بدون دعم تحميل فعلي حالياً)', en: 'Uploaded files will be attached with the quote request. (No actual upload support yet)' })}
                            </p>
                          </div>
                        </div>
                        <div>
                          <label className={labelClass}>{t({ ar: 'تفاصيل المشروع', en: 'Project Details' })} *</label>
                          <textarea
                            required
                            rows={4}
                            className={inputClass}
                            placeholder={t({ ar: 'صف مشروعك بالتفصيل (الألوان، التصميم، المتطلبات الخاصة...)', en: 'Describe your project in detail (colors, design, special requirements...)' })}
                            value={quoteForm.details}
                            onChange={(e) => { setQuoteForm({ ...quoteForm, details: e.target.value }); if (quoteErrors.details) setQuoteErrors({ ...quoteErrors, details: '' }); }}
                          />
                          {quoteErrors.details && <p className="text-red-400 text-xs mt-1">{quoteErrors.details}</p>}
                        </div>
                        <div className="flex justify-between">
                          <button
                            type="button"
                            onClick={() => setQuoteStep(2)}
                            className="btn-outline-dark inline-flex items-center gap-2"
                          >
                            {dir === 'rtl' ? <FaArrowRight size={14} /> : <FaArrowLeft size={14} />}
                            {t({ ar: 'السابق', en: 'Previous' })}
                          </button>
                          <button
                            type="submit"
                            disabled={loading}
                            className="btn-primary inline-flex items-center gap-2 disabled:opacity-70"
                          >
                            {loading ? (
                              <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            ) : null}
                            {loading ? t({ ar: 'جاري الإرسال...', en: 'Sending...' }) : t({ ar: 'إرسال طلب عرض السعر', en: 'Submit Quote Request' })}
                          </button>
                        </div>
                      </div>
                    )}
                  </motion.form>
                )}
              </AnimatePresence>

              {/* What happens after submission */}
              {!submitted && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  className={`mt-8 p-6 rounded-2xl border ${isDark ? 'bg-[#1a1a1a] border-white/5' : 'bg-gray-50 border-gray-100'}`}
                >
                  <div className="flex items-center gap-2 mb-4">
                    <FaInfoCircle size={16} className="text-[#F7931E]" />
                    <h4 className={`font-bold text-sm uppercase tracking-wider ${textClass}`}>
                      {t({ ar: 'ماذا يحدث بعد إرسال طلب عرض السعر؟', en: 'What Happens After You Submit a Quote Request?' })}
                    </h4>
                  </div>
                  <div className="space-y-3">
                    {[
                      { ar: 'نراجع طلبك في غضون 24 ساعة', en: 'We review your request within 24 hours' },
                      { ar: 'نتواصل معك لاستكمال أي تفاصيل ناقصة', en: 'We contact you to complete any missing details' },
                      { ar: 'نقدم عرض سعر مفصل ومخصص لمشروعك', en: 'We provide a detailed and customized quote' },
                      { ar: 'بعد الموافقة، نبدأ الإنتاج في الموعد المحدد', en: 'After approval, we start production on the agreed schedule' },
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <span className="w-6 h-6 rounded-full bg-[#F7931E]/10 text-[#F7931E] text-xs font-bold flex items-center justify-center flex-shrink-0">
                          {i + 1}
                        </span>
                        <span className={`text-sm ${textMuted}`}>{t(item)}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className={`section-padding ${bgAlt}`}>
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className={`text-3xl font-bold mb-2 text-center ${textClass}`}>
              {t({ ar: 'أسئلة شائعة', en: 'Frequently Asked Questions' })}
            </h2>
            <p className={`text-center mb-10 ${textMuted}`}>
              {t({ ar: 'إجابات على الأسئلة الأكثر شيوعاً حول خدماتنا', en: 'Answers to the most common questions about our services' })}
            </p>
            <div className="space-y-3">
              {selectedFaq.map((faq) => (
                <motion.div
                  key={faq.id}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4 }}
                  className={`rounded-xl border overflow-hidden ${cardBg}`}
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === faq.id ? null : faq.id)}
                    className="w-full flex items-center justify-between p-5 text-start"
                  >
                    <span className={`font-semibold text-sm ${textClass}`}>{lang === 'ar' ? faq.question.ar : faq.question.en}</span>
                    {openFaq === faq.id ? (
                      <FaChevronUp size={14} className="text-[#F7931E] flex-shrink-0" />
                    ) : (
                      <FaChevronDown size={14} className="text-[#F7931E] flex-shrink-0" />
                    )}
                  </button>
                  <AnimatePresence>
                    {openFaq === faq.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className={`px-5 pb-5 text-sm leading-relaxed ${textMuted}`}>
                          {lang === 'ar' ? faq.answer.ar : faq.answer.en}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Full-width map */}
      <section className={bgAlt}>
        <div className="h-[400px] relative">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110447.15!2d31.65!3d30.30!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1458208a3c2b5f35%3A0xbec5a0efa35b2e26!2s10th%20of%20Ramadan%20City%2C%20Sharqia%20Governorate%2C%20Egypt!5e0!3m2!1sen!2seg!4v1234567890!5m2!1sen!2seg"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Pengo Pack Map"
          />
          <div className="absolute bottom-4 start-4">
            <a
              href="https://maps.app.goo.gl/X3LzbVcTAGv42kWw7"
              target="_blank"
              rel="noreferrer"
              className="btn-primary text-sm py-2.5 px-5 inline-flex items-center gap-2"
            >
              <FaMapMarkerAlt size={14} />
              {t({ ar: 'احصل على الاتجاهات', en: 'Get Directions' })}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
