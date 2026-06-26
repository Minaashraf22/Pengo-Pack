import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useLang } from '../contexts/LanguageContext';
import { useTheme } from '../contexts/ThemeContext';
import { testimonialsData } from '../data/testimonials';
import { partnersData } from '../data/partners';
import PageHero from '../components/ui/PageHero';
import SectionHeader from '../components/ui/SectionHeader';
import {
  FaHandshake, FaAward, FaStar, FaCheckCircle, FaBuilding, FaIndustry, FaBoxes, FaQuoteLeft,
} from 'react-icons/fa';

export default function Partners() {
  const { t, lang, dir } = useLang();
  const { isDark } = useTheme();

  const bgClass = isDark ? 'bg-[#0a0a0a]' : 'bg-white';
  const bgAlt = isDark ? 'bg-[#111111]' : 'bg-gray-50';
  const textClass = isDark ? 'text-white' : 'text-[#0a0a0a]';
  const textMuted = isDark ? 'text-gray-400' : 'text-gray-500';
  const cardBg = isDark ? 'bg-[#111111] border-white/5' : 'bg-white border-gray-100';

  const partnerRows = [partnersData.slice(0, 6), partnersData.slice(6)];

  const whyPartner = [
    { icon: FaAward, title: { ar: 'جودة لا تتنازل', en: 'Uncompromising Quality' }, desc: { ar: 'نضمن أعلى معايير الجودة في كل مشروع بدون استثناء', en: 'We guarantee the highest quality standards in every project without exception' } },
    { icon: FaHandshake, title: { ar: 'شراكة طويلة الأمد', en: 'Long-term Partnership' }, desc: { ar: 'نبني علاقات شراكة مستدامة قائمة على الثقة والنتائج', en: 'We build sustainable partnerships based on trust and results' } },
    { icon: FaStar, title: { ar: 'خدمة متميزة', en: 'Distinguished Service' }, desc: { ar: 'فريقنا متاح دائماً لضمان رضاك الكامل وإنجاز مشروعاتك', en: 'Our team is always available to ensure your complete satisfaction and project completion' } },
    { icon: FaCheckCircle, title: { ar: 'التزام بالمواعيد', en: 'On-time Delivery' }, desc: { ar: 'نلتزم دائماً بمواعيد التسليم المتفق عليها بكل دقة', en: 'We always commit to agreed delivery timelines with precision' } },
  ];

  const trustMetrics = [
    { icon: FaBuilding, label: { ar: 'سنوات خبرة', en: 'Years Experience' }, val: '10+' },
    { icon: FaIndustry, label: { ar: 'مشروع منجز', en: 'Projects Completed' }, val: '500+' },
    { icon: FaBoxes, label: { ar: 'عميل راضٍ', en: 'Satisfied Clients' }, val: '100+' },
    { icon: FaStar, label: { ar: 'معدل رضا العملاء', en: 'Client Satisfaction' }, val: '95%' },
  ];

  return (
    <div className={bgClass}>
      <PageHero
        title={t({ ar: 'شركاؤنا', en: 'Our Partners' })}
        subtitle={t({ ar: 'نفخر بخدمة مجموعة من أبرز العلامات التجارية في مصر والشرق الأوسط', en: 'We are proud to serve some of the most prominent brands in Egypt and the Middle East' })}
        breadcrumb={t({ ar: 'شركاؤنا', en: 'Partners' })}
      />

      {/* Trust Metrics */}
      <section className={`py-12 ${bgClass}`}>
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {trustMetrics.map((m, i) => {
              const Icon = m.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className={`text-center p-5 rounded-2xl border ${cardBg}`}
                >
                  <div className="w-10 h-10 bg-[#F7931E]/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <Icon size={18} className="text-[#F7931E]" />
                  </div>
                  <div className="text-2xl font-black text-[#F7931E] mb-1">{m.val}</div>
                  <div className={`text-xs font-semibold ${textMuted}`}>{t(m.label)}</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Carousel rows */}
      <section className={`py-16 ${bgClass} overflow-hidden`}>
        <div className="container-custom mb-8">
          <SectionHeader title={t({ ar: 'علامات تجارية تثق فينا', en: 'Brands That Trust Us' })} subtitle={t({ ar: 'نفخر بخدمة شركات رائدة في القطاعات الغذائية والدوائية والاستهلاكية', en: 'Proud to serve leading companies in food, pharmaceutical, and consumer sectors' })} />
        </div>
        <div className="space-y-6">
          {partnerRows.map((row, rowIndex) => (
            <div key={rowIndex} className="flex overflow-hidden">
              <div
                className={`flex gap-6 items-center whitespace-nowrap ${
                  rowIndex % 2 === 0
                    ? dir === 'rtl' ? 'animate-marquee-rtl' : 'animate-marquee'
                    : dir === 'rtl' ? 'animate-marquee' : 'animate-marquee-rtl'
                }`}
                style={{ animationDuration: `${20 + rowIndex * 5}s` }}
              >
                {[...row, ...row, ...row].map((partner, i) => (
                  <div
                    key={i}
                    className={`flex-shrink-0 px-8 py-5 rounded-2xl border transition-all duration-300 hover:border-[#F7931E] group cursor-default ${
                      isDark ? 'bg-[#111111] border-white/5 hover:bg-[#1a1a1a]' : 'bg-white border-gray-100 hover:shadow-md'
                    }`}
                  >
                    <div className={`font-black text-lg group-hover:text-[#F7931E] transition-colors ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                      {partner.name}
                    </div>
                    <div className={`text-xs mt-1 ${textMuted}`}>{t(partner.sector)}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Grid of logos */}
      <section className={`section-padding ${bgAlt}`}>
        <div className="container-custom">
          <SectionHeader
            title={t({ ar: 'شركاؤنا في النجاح', en: 'Our Success Partners' })}
            subtitle={t({ ar: 'قائمة الشركات والعلامات التجارية التي نفخر بالتعامل معها', en: 'List of companies and brands we are proud to work with' })}
          />
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {partnersData.map((partner, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ delay: i * 0.05, duration: 0.4 }}
                whileHover={{ y: -4, scale: 1.02 }}
                className={`group p-5 rounded-2xl border text-center cursor-default transition-all duration-300 ${cardBg} hover:border-[#F7931E]/30`}
                style={{ boxShadow: isDark ? '0 4px 20px rgba(0,0,0,0.2)' : '0 4px 20px rgba(0,0,0,0.05)' }}
              >
                <div className={`font-black text-base mb-1 group-hover:text-[#F7931E] transition-colors ${textClass}`}>
                  {partner.name}
                </div>
                <div className={`text-xs ${textMuted}`}>{t(partner.sector)}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Partner */}
      <section className={`section-padding ${bgClass}`}>
        <div className="container-custom">
          <SectionHeader
            title={t({ ar: 'لماذا يختارنا شركاؤنا؟', en: 'Why Do Our Partners Choose Us?' })}
            subtitle={t({ ar: 'نبني شراكات قائمة على الثقة والجودة والالتزام والنتائج', en: 'We build partnerships based on trust, quality, commitment, and results' })}
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyPartner.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className={`group p-6 rounded-2xl border text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${
                  isDark ? 'bg-[#111111] border-white/5 hover:border-[#F7931E]/30' : 'bg-gray-50 border-gray-100 hover:border-[#F7931E]/30 hover:bg-white'
                }`}
              >
                <div className="w-14 h-14 bg-[#F7931E]/10 group-hover:bg-[#F7931E] rounded-2xl flex items-center justify-center mx-auto mb-4 transition-all duration-300">
                  <item.icon size={22} className="text-[#F7931E] group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className={`font-bold mb-2 ${textClass}`}>{t(item.title)}</h3>
                <p className={`text-sm ${textMuted}`}>{t(item.desc)}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className={`section-padding ${bgAlt}`}>
        <div className="container-custom">
          <SectionHeader
            title={t({ ar: 'شهادات عملائنا', en: 'Client Testimonials' })}
            subtitle={t({ ar: 'آراء من شركاء نجاح في مختلف القطاعات الصناعية', en: 'Opinions from success partners across different industrial sectors' })}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonialsData.map((tm, i) => (
              <motion.div
                key={tm.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className={`p-6 rounded-2xl border ${cardBg}`}
                style={{ boxShadow: isDark ? '0 4px 30px rgba(0,0,0,0.3)' : '0 4px 30px rgba(0,0,0,0.06)' }}
              >
                <div className="absolute top-6 right-6 text-4xl text-[#F7931E]/20 font-serif leading-none select-none">
                  <FaQuoteLeft />
                </div>
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: tm.rating }).map((_, j) => (
                    <FaStar key={j} size={14} className="text-[#F7931E]" />
                  ))}
                </div>
                <p className={`text-sm leading-relaxed mb-5 ${textMuted}`}>{lang === 'ar' ? tm.text.ar : tm.text.en}</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#F7931E] to-[#d97a0f] flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                    {(lang === 'ar' ? tm.name.ar : tm.name.en)[0]}
                  </div>
                  <div>
                    <p className={`text-sm font-bold ${textClass}`}>{lang === 'ar' ? tm.name.ar : tm.name.en}</p>
                    <p className={`text-xs ${textMuted}`}>{lang === 'ar' ? tm.role.ar : tm.role.en} — {lang === 'ar' ? tm.company.ar : tm.company.en}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#F7931E] to-[#d97a0f]" />
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-72 h-72 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-white rounded-full blur-3xl" />
        </div>
        <div className="relative container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <FaHandshake size={48} className="text-white/30 mx-auto mb-6" />
            <blockquote className="text-2xl md:text-3xl font-bold text-white mb-6 max-w-3xl mx-auto">
              {t({ ar: '"نثق في Pengo Pack كشريك استراتيجي يفهم احتياجاتنا ويقدم حلولاً مبتكرة بجودة عالية"', en: '"We trust Pengo Pack as a strategic partner that understands our needs and delivers innovative solutions with high quality"' })}
            </blockquote>
            <p className="text-white/70 font-semibold">
              {t({ ar: '— مدير المشتريات، شركة دوائية رائدة', en: '— Procurement Director, Leading Pharmaceutical Company' })}
            </p>
          </motion.div>
        </div>
      </section>

      <section className={`py-20 ${bgAlt}`}>
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${textClass}`}>
              {t({ ar: 'كن شريكنا القادم', en: 'Become Our Next Partner' })}
            </h2>
            <p className={`text-lg mb-8 max-w-xl mx-auto ${textMuted}`}>
              {t({ ar: 'انضم إلى قائمة عملائنا الكبار وابدأ رحلة شراكة ناجحة مع Pengo Pack', en: 'Join our list of major clients and start a successful partnership journey with Pengo Pack' })}
            </p>
            <Link to="/contact" className="btn-primary inline-flex">
              {t({ ar: 'ابدأ الشراكة الآن', en: 'Start Partnership Now' })}
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
