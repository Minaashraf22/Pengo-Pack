import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useLang } from '../contexts/LanguageContext';
import { useTheme } from '../contexts/ThemeContext';
import { servicesData } from '../data/services';
import { materialsData } from '../data/materials';
import { getIcon } from '../utils/iconMap';
import PageHero from '../components/ui/PageHero';
import {
  FaCheckCircle,
  FaPrint, FaTabletAlt, FaBoxOpen, FaTags, FaPills, FaCog, FaIndustry,
} from 'react-icons/fa';

export default function Services() {
  const { t } = useLang();
  const { isDark } = useTheme();
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const bgClass = isDark ? 'bg-[#0a0a0a]' : 'bg-white';
  const bgAlt = isDark ? 'bg-[#111111]' : 'bg-gray-50';
  const textClass = isDark ? 'text-white' : 'text-[#0a0a0a]';
  const textMuted = isDark ? 'text-gray-400' : 'text-gray-500';
  const cardBg = isDark ? 'bg-[#111111] border-white/5' : 'bg-white border-gray-100';
  const borderColor = isDark ? 'border-white/5' : 'border-gray-100';

  const navIcons: Record<string, IconType> = {
    'offset-printing': FaPrint,
    'digital-printing': FaTabletAlt,
    'folding-cartons': FaBoxOpen,
    'commercial-printing': FaIndustry,
    'labels-stickers': FaTags,
    'pharmaceutical-inserts': FaPills,
    'post-printing-finishing': FaCog,
  };
  type IconType = React.ComponentType<{ size?: number; className?: string }>;

  const navItems = servicesData.map((s) => ({
    id: s.id,
    title: s.title,
    icon: navIcons[s.id] || FaCog,
  }));

  // const finishingSection = servicesData.find((s) => s.id === 'post-printing-finishing');
  const featuredFinishes = materialsData.filter((m) => m.category === 'finish');

  const comparisonData = {
    headers: {
      offset: { ar: 'الطباعة الأوفست', en: 'Offset Printing' },
      digital: { ar: 'الطباعة الرقمية', en: 'Digital Printing' },
    },
    rows: [
      { ar: 'الكمية المثالية', en: 'Ideal Quantity', offset: { ar: '5,000+ قطعة', en: '5,000+ pieces' }, digital: { ar: '100–3,000 قطعة', en: '100–3,000 pieces' } },
      { ar: 'تكلفة الإعداد', en: 'Setup Cost', offset: { ar: 'أعلى (ألواح طباعية)', en: 'Higher (printing plates)' }, digital: { ar: 'لا توجد', en: 'None' } },
      { ar: 'تكلفة الوحدة', en: 'Per-Unit Cost', offset: { ar: 'أقل كلما زادت الكمية', en: 'Lower with larger quantity' }, digital: { ar: 'ثابتة (لا تتغير كثيراً)', en: 'Fixed (does not change much)' } },
      { ar: 'دقة الألوان', en: 'Color Accuracy', offset: { ar: 'عالية جداً (CMYK+Pantone)', en: 'Very high (CMYK+Pantone)' }, digital: { ar: 'عالية (CMYK)', en: 'High (CMYK)' } },
      { ar: 'تخصيص البيانات', en: 'Variable Data', offset: { ar: 'غير متاح', en: 'Not available' }, digital: { ar: 'متاح (أسماء، أرقام، باركود)', en: 'Available (names, numbers, barcode)' } },
      { ar: 'سرعة الإنتاج', en: 'Production Speed', offset: { ar: 'سريع بعد الإعداد', en: 'Fast after setup' }, digital: { ar: 'سريع جداً (بدون إعداد)', en: 'Very fast (no setup)' } },
      { ar: 'المناسب لـ', en: 'Best For', offset: { ar: 'الكميات الكبيرة، التناسق', en: 'Large quantities, consistency' }, digital: { ar: 'النماذج، العاجل، الكميات الصغيرة', en: 'Prototypes, urgent, small quantities' } },
    ],
  };

  return (
    <div className={bgClass}>
      <PageHero
        title={t({ ar: 'قدراتنا وخدماتنا', en: 'Our Capabilities & Services' })}
        subtitle={t({ ar: 'حلول طباعة وتغليف متكاملة للشركات التي تبحث عن الجودة والموثوقية', en: 'Comprehensive printing and packaging solutions for companies seeking quality and reliability' })}
        breadcrumb={t({ ar: 'الخدمات', en: 'Services' })}
      />

      {/* Quick Jump Navigation */}
      <section className={`sticky top-20 z-40 ${isDark ? 'bg-[#0a0a0a]/95 backdrop-blur-md border-b border-white/5' : 'bg-white/95 backdrop-blur-md border-b border-gray-100'}`}>
        <div className="container-custom py-3">
          <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveSection(item.id);
                    document.getElementById(`svc-${item.id}`)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold whitespace-nowrap transition-all duration-300 flex-shrink-0 ${
                    isActive
                      ? 'bg-[#F7931E] text-white shadow-lg shadow-orange-500/20'
                      : isDark
                      ? 'bg-[#111111] text-gray-400 hover:text-white border border-white/5'
                      : 'bg-gray-50 text-gray-600 hover:text-gray-900 border border-gray-100'
                  }`}
                >
                  <Icon size={14} />
                  {t(item.title)}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Service Sections */}
      <section className={`section-padding ${bgClass}`}>
        <div className="container-custom space-y-24">
          {servicesData.map((svc, i) => {
            const Icon = getIcon(svc.icon);
            const isEven = i % 2 === 1;
            return (
              <motion.div
                key={svc.id}
                id={`svc-${svc.id}`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.7 }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${isEven ? 'lg:grid-flow-col-dense' : ''}`}
              >
                {/* Image */}
                <div className={`relative ${isEven ? 'lg:col-start-2' : ''}`}>
                  <div className="relative rounded-2xl overflow-hidden aspect-[4/3] group">
                    <img src={svc.imageUrl} alt={t(svc.title)} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-br from-[#F7931E]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                  <div className="absolute -bottom-5 -start-5 w-14 h-14 bg-[#F7931E] rounded-2xl flex items-center justify-center shadow-xl shadow-orange-500/30">
                    <Icon size={22} className="text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className={isEven ? 'lg:col-start-1 lg:row-start-1' : ''}>
                  <span className="text-[#F7931E] text-sm font-bold uppercase tracking-widest mb-3 block">
                    {t({ ar: 'الخدمة', en: 'Service' })} {String(i + 1).padStart(2, '0')}
                  </span>
                  <h2 className={`text-2xl md:text-3xl font-bold mb-4 ${textClass}`}>{t(svc.title)}</h2>
                  <div className="w-12 h-1 bg-[#F7931E] rounded-full mb-5" />
                  <p className={`text-base leading-relaxed mb-6 ${textMuted}`}>{t(svc.fullDesc)}</p>

                  {/* Suitable For */}
                  <div className={`p-4 rounded-xl mb-5 ${isDark ? 'bg-[#1a1a1a]' : 'bg-gray-50'}`}>
                    <p className={`text-xs font-bold uppercase tracking-wider mb-2 text-[#F7931E]`}>
                      {t({ ar: 'المناسب لـ', en: 'Suitable For' })}
                    </p>
                    <p className={`text-sm ${textMuted}`}>{t(svc.suitableFor)}</p>
                  </div>

                  {/* Benefits */}
                  <div className="mb-5">
                    <p className={`text-xs font-bold uppercase tracking-wider mb-3 ${textClass}`}>
                      {t({ ar: 'المميزات', en: 'Benefits' })}
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {svc.benefits.map((b, j) => (
                        <div key={j} className="flex items-center gap-2">
                          <FaCheckCircle size={14} className="text-[#F7931E] flex-shrink-0" />
                          <span className={`text-sm ${textMuted}`}>{t(b)}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Process */}
                  <div className={`p-5 rounded-xl border mb-5 ${cardBg}`}>
                    <p className={`text-xs font-bold uppercase tracking-wider mb-4 ${textClass}`}>
                      {t({ ar: 'كيف نعمل', en: 'How We Work' })}
                    </p>
                    <div className="flex flex-wrap gap-3">
                      {svc.process.map((step, j) => (
                        <div key={j} className="flex items-center gap-2">
                          <span className="w-6 h-6 rounded-full bg-[#F7931E] text-white text-xs font-bold flex items-center justify-center flex-shrink-0">
                            {j + 1}
                          </span>
                          <span className={`text-xs ${textMuted}`}>{t(step)}</span>
                          {j < svc.process.length - 1 && <span className="text-gray-300 dark:text-gray-600">→</span>}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Finishing Options */}
                  {svc.finishingOptions && (
                    <div className="mb-6">
                      <p className={`text-xs font-bold uppercase tracking-wider mb-2 ${textClass}`}>
                        {t({ ar: 'تشطيبات متاحة', en: 'Available Finishes' })}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {svc.finishingOptions.map((f, j) => (
                          <span key={j} className="text-xs px-3 py-1 rounded-full bg-[#F7931E]/10 text-[#F7931E] font-medium">
                            {t(f)}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  <Link to="/contact" className="btn-primary inline-flex">
                    {t({ ar: 'اطلب عرض سعر', en: 'Request a Quote' })}
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* How to Choose Between Offset & Digital */}
      <section className={`section-padding ${bgAlt}`}>
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className={`text-3xl md:text-4xl font-bold mb-3 ${textClass}`}>
              {t({ ar: 'أوفست أم رقمية؟', en: 'Offset vs. Digital?' })}
            </h2>
            <p className={`text-lg mb-8 max-w-2xl ${textMuted}`}>
              {t({ ar: 'جدول مقارنة يساعدك في اختيار الطريقة المناسبة لمشروعك', en: 'Comparison table to help you choose the right method for your project' })}
            </p>
          </motion.div>

          <div className={`overflow-hidden rounded-2xl border ${borderColor}`}>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className={`${isDark ? 'bg-[#1a1a1a]' : 'bg-gray-50'}`}>
                    <th className={`text-start px-5 py-4 font-bold ${textClass}`}>
                      {t({ ar: 'المعيار', en: 'Criteria' })}
                    </th>
                    <th className={`text-center px-5 py-4 font-bold text-[#F7931E]`}>
                      {t(comparisonData.headers.offset)}
                    </th>
                    <th className={`text-center px-5 py-4 font-bold text-[#F7931E]`}>
                      {t(comparisonData.headers.digital)}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.rows.map((row, i) => (
                    <tr
                      key={i}
                      className={`${i % 2 === 0 ? (isDark ? 'bg-[#111111]' : 'bg-white') : (isDark ? 'bg-[#0a0a0a]' : 'bg-gray-50')}`}
                    >
                      <td className={`px-5 py-4 font-semibold ${textClass}`}>
                        {t({ ar: row.ar, en: row.en })}
                      </td>
                      <td className={`px-5 py-4 text-center ${textMuted}`}>
                        {t({ ar: row.offset.ar, en: row.offset.en })}
                      </td>
                      <td className={`px-5 py-4 text-center ${textMuted}`}>
                        {t({ ar: row.digital.ar, en: row.digital.en })}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Finishing Options Deep Section */}
      <section className={`section-padding ${bgClass}`}>
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className={`text-3xl md:text-4xl font-bold mb-3 ${textClass}`}>
              {t({ ar: 'التشطيبات التي ترفع قيمة التغليف', en: 'Finishing That Elevates Packaging Value' })}
            </h2>
            <p className={`text-lg mb-10 max-w-2xl ${textMuted}`}>
              {t({ ar: 'تشطيبات متنوعة تضيف لمسة فاخرة وتعزز جاذبية المنتج على الرف', en: 'Diverse finishes that add a premium touch and enhance product appeal on the shelf' })}
            </p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {featuredFinishes.map((fin, i) => (
              <motion.div
                key={fin.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
                className={`group p-5 rounded-xl border ${cardBg} hover:-translate-y-1 transition-all duration-300 cursor-default`}
                style={{ boxShadow: isDark ? '0 4px 20px rgba(0,0,0,0.3)' : '0 4px 20px rgba(0,0,0,0.06)' }}
              >
                <div className="w-10 h-10 bg-[#F7931E]/10 rounded-xl flex items-center justify-center mb-3 group-hover:bg-[#F7931E] transition-all duration-300">
                  <FaCog size={16} className="text-[#F7931E] group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className={`font-bold text-sm mb-2 ${textClass}`}>{t(fin.title)}</h3>
                <p className={`text-xs leading-relaxed ${textMuted}`}>{t(fin.description)}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Need Help Choosing CTA */}
      <section className={`py-20 ${bgAlt}`}>
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={`text-center p-10 rounded-3xl border ${borderColor} ${isDark ? 'bg-[#111111]' : 'bg-white'}`}
            style={{ boxShadow: isDark ? '0 4px 40px rgba(0,0,0,0.4)' : '0 4px 40px rgba(0,0,0,0.08)' }}
          >
            <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${textClass}`}>
              {t({ ar: 'هل تحتاج مساعدة في اختيار الحل المناسب؟', en: 'Need Help Choosing the Right Solution?' })}
            </h2>
            <p className={`text-lg mb-8 max-w-2xl mx-auto ${textMuted}`}>
              {t({ ar: 'فريقنا الفني مستعد لتحليل احتياجاتك واقتراح الحل الأمثل لمشروعك. استشارة مجانية بدون التزام.', en: 'Our technical team is ready to analyze your needs and suggest the optimal solution for your project. Free consultation with no obligation.' })}
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/contact" className="btn-primary">
                {t({ ar: 'تحدث مع فني', en: 'Talk to a Specialist' })}
              </Link>
              <Link to="/contact" className="btn-outline-dark">
                {t({ ar: 'اطلب عرض سعر', en: 'Request a Quote' })}
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
