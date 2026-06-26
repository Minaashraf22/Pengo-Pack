import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useLang } from '../contexts/LanguageContext';
import { useTheme } from '../contexts/ThemeContext';
import { translations } from '../data/translations';
import { servicesData } from '../data/services';
import { industriesData } from '../data/industries';
import { portfolioData } from '../data/portfolio';
import { testimonialsData } from '../data/testimonials';
import { partnersData } from '../data/partners';
import { materialsData } from '../data/materials';
import { productionProcess } from '../data/process';
import { getIcon } from '../utils/iconMap';
import SectionHeader from '../components/ui/SectionHeader';
import AnimatedCounter from '../components/ui/AnimatedCounter';
import { useInView } from '../hooks/useScrollAnimation';
import {
  FaArrowLeft, FaArrowRight, FaChevronRight, FaCheckCircle,
  FaQuoteLeft, FaCalendarAlt, FaFileAlt, FaRegLightbulb, FaRegCheckCircle,
  FaCompress, FaCubes, FaClipboardCheck, FaShippingFast, FaCommentDots, FaWhatsapp,
  FaStar, FaCut, FaPalette,
} from 'react-icons/fa';



const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.6 },
};

export default function Home() {
  const { t, lang, dir } = useLang();
  const { isDark } = useTheme();
  const { stats } = translations;

  const { ref: statsInViewRef } = useInView(0.3);

  const bgClass = isDark ? 'bg-[#0a0a0a]' : 'bg-white';
  const bgAlt = isDark ? 'bg-[#111111]' : 'bg-gray-50';
  const textClass = isDark ? 'text-white' : 'text-[#0a0a0a]';
  const textMuted = isDark ? 'text-gray-400' : 'text-gray-500';
  const cardBg = isDark ? 'bg-[#111111] border-white/5' : 'bg-white border-gray-100';
  const borderColor = isDark ? 'border-white/5' : 'border-gray-100';

  // Home page uses first 6 services, first 6 industries, first 4 portfolio, first 3 testimonials
  const featuredServices = servicesData.slice(0, 6);
  const featuredIndustries = industriesData.slice(0, 6);
  const featuredPortfolio = portfolioData.slice(0, 4);
  const featuredTestimonials = testimonialsData.slice(0, 3);
  const featuredMaterials = materialsData.slice(0, 8);
  const featuredPartners = partnersData.slice(0, 8);

  const trustProofs = [
    { icon: FaCalendarAlt, text: { ar: '10+ سنوات خبرة', en: '10+ Years Experience' } },
    { icon: FaFileAlt, text: { ar: 'خبرة B2B في التغليف والطباعة', en: 'B2B Packaging & Printing Expertise' } },
    { icon: FaShippingFast, text: { ar: 'تسليم سريع للمشاريع التجارية', en: 'Fast Turnaround for Commercial Runs' } },
    { icon: FaClipboardCheck, text: { ar: 'إنتاج مراقب بالجودة', en: 'Quality-Controlled Production' } },
    { icon: FaCut, text: { ar: 'حلول كرتونية وتشطيب مخصص', en: 'Custom Carton & Finishing Solutions' } },
  ];

  const whyChooseItems = [
    {
      icon: FaPalette,
      title: { ar: 'جودة طباعة متناسقة', en: 'Consistent Print Quality' },
      desc: { ar: 'نضبط ألوان CMYK بدقة عالية لضمان تناسق المطبوعات عبر الدفعات المختلفة.', en: 'We calibrate CMYK colors with high precision to ensure consistency across batches.' },
    },
    {
      icon: FaCubes,
      title: { ar: 'تغليف يتناسب مع المنتج والرف', en: 'Packaging Tailored to Product & Shelf' },
      desc: { ar: 'نصمم كل علبة لتناسب أبعاد المنتج وتقديمه بشكل احترافي على الرف.', en: 'We design every box to fit product dimensions and present it professionally on shelf.' },
    },
    {
      icon: FaCalendarAlt,
      title: { ar: 'مواعيد إنتاج موثوقة', en: 'Reliable Production Timelines' },
      desc: { ar: 'نلتزم بالجدول الزمني المتفق عليه مع مرونة في التعامل مع المشاريع العاجلة.', en: 'We adhere to the agreed timeline with flexibility for urgent projects.' },
    },
    {
      icon: FaCompress,
      title: { ar: 'دعم الكميات الصغيرة والكبيرة', en: 'Short-Run & Large-Scale Support' },
      desc: { ar: 'نخدم الكميات الصغيرة بالطباعة الرقمية والكميات الكبيرة بالطباعة الأوفست.', en: 'We serve small quantities with digital printing and large quantities with offset printing.' },
    },
    {
      icon: FaPalette,
      title: { ar: 'تشطيبات ترفع قيمة المنتج', en: 'Finishing That Elevates Perceived Value' },
      desc: { ar: 'UV، تغليف، تذهيب، وقص دقيق لإضافة لمسة فاخرة على التغليف.', en: 'UV, lamination, foil, and precision die-cutting to add a premium touch to packaging.' },
    },
    {
      icon: FaCommentDots,
      title: { ar: 'خدمة تعاونية من الفكرة إلى التسليم', en: 'Collaborative Service from Brief to Delivery' },
      desc: { ar: 'فريقنا يعمل معك في كل خطوة: من المراجعة الفنية إلى الإنتاج والتشطيب.', en: 'Our team works with you at every step: from technical review to production and finishing.' },
    },
  ];

  return (
    <div className={`${bgClass} ${textClass}`}>
      {/* ===== 1. HERO SECTION ===== */}
            {/* ===== 1. HERO SECTION ===== */}
      <section className="relative min-h-screen overflow-hidden pt-28 pb-10">
        {/* Background */}
        {/* Background Video + Fallback */}
<div className="absolute inset-0">

  {/* 🎥 VIDEO (Desktop + Tablet) */}
  <video
    className="w-full h-full object-cover scale-105 hidden md:block transition-opacity duration-1000"
    src="/flova_Factory_drone_flyover_video_202606231752_89867a.mp4"
    autoPlay
    muted
    loop
    playsInline
    preload="auto"
    onCanPlay={(e) => {
      e.currentTarget.style.opacity = '1';
    }}
    style={{ opacity: 0 }}
  />

  {/* 📱 IMAGE FALLBACK (Mobile only) */}
  <img
    src="/hero.png"
    alt="factory"
    className="w-full h-full object-cover md:hidden"
  />

  {/* 🌫 OVERLAYS (same design preserved) */}
  <div className="absolute inset-0 bg-[linear-gradient(110deg,rgba(0,0,0,0.94)_0%,rgba(0,0,0,0.82)_42%,rgba(0,0,0,0.48)_100%)]" />
  <div className="absolute inset-0 industrial-grid opacity-50" />
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(247,147,30,0.18),transparent_30%)]" />
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(247,147,30,0.12),transparent_32%)]" />

</div>

        <div className="relative container-custom">
          <div className="hero-shell">
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.02),transparent_30%)]" />

            <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-8 lg:gap-10 px-6 sm:px-8 lg:px-10 py-10 sm:py-12 lg:py-14">
              {/* Left Content */}
              <div className="relative z-10 flex flex-col justify-center">
                {/* Kicker */}
                <motion.div
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.55 }}
                  className="mb-6"
                >
                  <div className="section-kicker">
                    <span className="w-2 h-2 rounded-full bg-[#F7931E]" />
                    <span>
                      {t({
                        ar: 'مصنع طباعة وتغليف متخصص — العاشر من رمضان',
                        en: 'Specialized Printing & Packaging Manufacturer — 10th of Ramadan',
                      })}
                    </span>
                  </div>
                </motion.div>

                {/* Headline */}
                <motion.h1
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.08 }}
                  className="max-w-4xl text-white font-black leading-[1.05] tracking-tight text-4xl sm:text-5xl lg:text-[68px]"
                >
                  {lang === 'ar' ? (
                    <>
                      نصنع حلول
                      <span className="text-[#F7931E]"> الطباعة والتغليف </span>
                      التي ترفع قيمة منتجك على الرف وتدعم حضور علامتك في السوق
                    </>
                  ) : (
                    <>
                      We Build
                      <span className="text-[#F7931E]"> Printing & Packaging Solutions </span>
                      That Strengthen Shelf Impact And Elevate Your Brand Presence
                    </>
                  )}
                </motion.h1>

                {/* Subheadline */}
                <motion.p
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.18 }}
                  className="mt-6 max-w-2xl text-base sm:text-lg lg:text-[19px] leading-8 text-gray-300"
                >
                  {t({
                    ar: 'من الطباعة الأوفست والدجيتال إلى تصنيع العلب الكرتونية والتشطيبات التجارية، نقدم حلول إنتاج متكاملة بجودة ثابتة، تسليم منضبط، وخبرة تناسب احتياجات العلامات التجارية والمصانع والشركات.',
                    en: 'From offset and digital printing to carton manufacturing and finishing, we deliver integrated production solutions with consistent quality, disciplined delivery, and execution built for brands, factories, and commercial businesses.',
                  })}
                </motion.p>

                {/* Service chips */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.65, delay: 0.28 }}
                  className="mt-7 flex flex-wrap gap-3"
                >
                  {[
                    t({ ar: 'طباعة أوفست', en: 'Offset Printing' }),
                    t({ ar: 'طباعة رقمية', en: 'Digital Printing' }),
                    t({ ar: 'علب كرتونية', en: 'Carton Boxes' }),
                    t({ ar: 'تشطيبات تجارية', en: 'Commercial Finishing' }),
                  ].map((item) => (
                    <span key={item} className="hero-chip">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#F7931E]" />
                      {item}
                    </span>
                  ))}
                </motion.div>

                {/* CTA row */}
                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.35 }}
                  className="mt-9 flex flex-col sm:flex-row gap-4"
                >
                  <Link to="/contact" className="btn-primary text-center">
                    {t({ ar: 'اطلب عرض سعر لمشروعك', en: 'Request a Quote' })}
                  </Link>

                  <Link
                    to="/services"
                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 backdrop-blur-sm px-7 py-4 text-white font-semibold hover:bg-white/10 transition-all duration-300"
                  >
                    {t({ ar: 'استكشف خدماتنا', en: 'Explore Services' })}
                    {dir === 'rtl' ? <FaArrowLeft /> : <FaArrowRight />}
                  </Link>
                </motion.div>

                {/* Trust strip */}
                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.45 }}
                  className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-3"
                >
                  {[
                    {
                      value: '10+',
                      label: t({ ar: 'سنوات خبرة', en: 'Years Experience' }),
                    },
                    {
                      value: '500+',
                      label: t({ ar: 'مشروع منجز', en: 'Projects Delivered' }),
                    },
                    {
                      value: '100+',
                      label: t({ ar: 'عميل وشريك', en: 'Clients & Partners' }),
                    },
                    {
                      value: '95%',
                      label: t({ ar: 'رضا العملاء', en: 'Client Satisfaction' }),
                    },
                  ].map((item) => (
                    <div key={item.label} className="metric-card px-4 py-4">
                      <div className="text-[#F7931E] text-2xl sm:text-3xl font-black">{item.value}</div>
                      <div className="mt-1 text-sm text-gray-300">{item.label}</div>
                    </div>
                  ))}
                </motion.div>
              </div>

              {/* Right Panel */}
              <motion.div
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.75, delay: 0.22 }}
                className="relative z-10 flex items-center"
              >
                <div className="hero-panel w-full p-5 sm:p-6 lg:p-7">
                  {/* Top panel header */}
                  <div className="flex items-center justify-between gap-4 pb-5 border-b border-white/10">
                    <div>
                      <div className="text-white text-xl sm:text-2xl font-bold">
                        {t({ ar: 'قدرات إنتاجية متكاملة', en: 'Integrated Production Capabilities' })}
                      </div>
                      <div className="mt-2 text-sm text-gray-400 leading-7">
                        {t({
                          ar: 'نربط بين الطباعة، التغليف، والتشطيب داخل تجربة إنتاج واحدة أكثر تنظيمًا ووضوحًا.',
                          en: 'We connect printing, packaging, and finishing into one organized production experience.',
                        })}
                      </div>
                    </div>

                    <div className="hidden sm:flex w-12 h-12 rounded-2xl items-center justify-center bg-[#F7931E]/15 border border-[#F7931E]/20 text-[#F7931E] text-xl">
                      <FaCheckCircle />
                    </div>
                  </div>

                  {/* Capability list */}
                  <div className="mt-6 space-y-4">
                    {[
                      {
                        title: t({ ar: 'طباعة أوفست تجارية', en: 'Commercial Offset Printing' }),
                        desc: t({
                          ar: 'للكميات المتوسطة والكبيرة بجودة لونية ثابتة.',
                          en: 'For medium and large runs with consistent color quality.',
                        }),
                      },
                      {
                        title: t({ ar: 'طباعة رقمية سريعة', en: 'Fast Digital Printing' }),
                        desc: t({
                          ar: 'للطلبات السريعة، النماذج الأولية، والكميات المحدودة.',
                          en: 'For urgent jobs, prototypes, and short-run quantities.',
                        }),
                      },
                      {
                        title: t({ ar: 'تصنيع علب وكرتون', en: 'Carton & Box Manufacturing' }),
                        desc: t({
                          ar: 'علب مخصصة للمنتجات الغذائية والدوائية والتجارية.',
                          en: 'Custom cartons for food, pharma, and commercial products.',
                        }),
                      },
                      {
                        title: t({ ar: 'تشطيبات تضيف قيمة', en: 'Value-Adding Finishing' }),
                        desc: t({
                          ar: 'لامينيشن، UV، قص، تكسير، طي، وتغليف نهائي.',
                          en: 'Lamination, UV, die-cutting, folding, and final finishing.',
                        }),
                      },
                    ].map((item, i) => (
                      <div
                        key={item.title}
                        className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 hover:bg-white/[0.05] transition-all duration-300"
                      >
                        <div className="flex items-start gap-4">
                          <div className="w-10 h-10 rounded-xl bg-[#F7931E]/15 border border-[#F7931E]/20 flex items-center justify-center text-[#F7931E] font-black shrink-0">
                            0{i + 1}
                          </div>

                          <div>
                            <h3 className="text-white font-bold text-base sm:text-lg">{item.title}</h3>
                            <p className="mt-1 text-sm text-gray-400 leading-7">{item.desc}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Bottom micro CTA */}
                  <div className="mt-6 grid sm:grid-cols-2 gap-3">
                    <div className="rounded-2xl border border-white/10 bg-[#F7931E]/10 p-4">
                      <div className="text-[#F7931E] text-sm font-bold">
                        {t({ ar: 'مناسب للعلامات التجارية والمصانع', en: 'Built for brands & manufacturers' })}
                      </div>
                      <p className="mt-1 text-sm text-gray-300 leading-7">
                        {t({
                          ar: 'حلول إنتاج تناسب التعبئة، العرض، والطباعة التجارية.',
                          en: 'Production solutions for packaging, retail display, and commercial print.',
                        })}
                      </p>
                    </div>

                    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                      <div className="text-white text-sm font-bold">
                        {t({ ar: 'ابدأ بطلب تسعير واضح', en: 'Start with a clear quotation request' })}
                      </div>
                      <p className="mt-1 text-sm text-gray-400 leading-7">
                        {t({
                          ar: 'أرسل نوع المنتج، المقاس، والكمية لنقترح أنسب مسار إنتاج.',
                          en: 'Send product type, size, and quantity to get the right production route.',
                        })}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Secondary trust row under hero */}
          <div className="mt-6 grid md:grid-cols-3 gap-4">
            {[
              {
                title: t({ ar: 'تشغيل صناعي منظم', en: 'Organized Industrial Execution' }),
                desc: t({
                  ar: 'مسار واضح من الاستلام الفني وحتى التسليم النهائي.',
                  en: 'A clear route from technical review to final delivery.',
                }),
              },
              {
                title: t({ ar: 'مرونة بين الأوفست والدجيتال', en: 'Flexible Offset / Digital Routing' }),
                desc: t({
                  ar: 'نختار التقنية الأنسب حسب الكمية والزمن والجودة المطلوبة.',
                  en: 'We choose the right process based on quantity, speed, and quality.',
                }),
              },
              {
                title: t({ ar: 'حلول مناسبة لقطاعات متعددة', en: 'Suitable for Multiple Industries' }),
                desc: t({
                  ar: 'غذائي، دوائي، تجزئة، مستحضرات تجميل، ومنتجات استهلاكية.',
                  en: 'Food, pharma, retail, cosmetics, and consumer goods.',
                }),
              },
            ].map((item) => (
              <div key={item.title} className="premium-card p-6">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-2xl bg-[#F7931E]/10 border border-[#F7931E]/20 flex items-center justify-center text-[#F7931E] shrink-0">
                    <FaCheckCircle />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold">{item.title}</h3>
                    <p className={`mt-2 text-sm leading-7 ${textMuted}`}>{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 2. TRUST STRIP / PROOF BAR ===== */}
      <section className="relative py-10 bg-gradient-to-r from-[#F7931E] to-[#d97a0f] overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-72 h-72 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-white rounded-full blur-3xl" />
        </div>
        <div className="relative container-custom">
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-6 items-center">
            {trustProofs.map((proof, i) => {
              const Icon = proof.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.4 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-9 h-9 rounded-lg bg-white/15 flex items-center justify-center flex-shrink-0">
                    <Icon size={16} className="text-white" />
                  </div>
                  <span className="text-white text-sm font-semibold leading-tight">{t(proof.text)}</span>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== 3. CORE CAPABILITIES SECTION ===== */}
      <section className={`section-padding ${bgAlt}`}>
        <div className="container-custom">
          <SectionHeader
            title={t({ ar: 'قدراتنا الأساسية', en: 'Core Capabilities' })}
            subtitle={t({ ar: 'نقدم حلول طباعة وتغليف متكاملة تناسب احتياجات الشركات الصناعية والتجارية', en: 'We provide comprehensive printing and packaging solutions that fit industrial and commercial business needs' })}
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {featuredServices.map((svc, i) => {
              const Icon = getIcon(svc.icon);
              return (
                <motion.div
                  key={svc.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  whileHover={{ y: -6 }}
                  className={`group p-6 rounded-2xl border ${cardBg} transition-all duration-300 hover:shadow-xl cursor-default`}
                  style={{ boxShadow: isDark ? '0 4px 30px rgba(0,0,0,0.3)' : '0 4px 30px rgba(0,0,0,0.06)' }}
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-[#F7931E]/10 group-hover:bg-[#F7931E] rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300">
                      <Icon size={20} className="text-[#F7931E] group-hover:text-white transition-colors duration-300" />
                    </div>
                    <div>
                      <h3 className={`font-bold text-base mb-1 ${textClass}`}>{t(svc.title)}</h3>
                      <div className="flex flex-wrap gap-1">
                        {svc.tags.slice(0, 3).map((tag, j) => (
                          <span key={j} className="text-[10px] px-2 py-0.5 rounded-full bg-[#F7931E]/10 text-[#F7931E] font-medium">
                            {t(tag)}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className={`text-sm leading-relaxed mb-3 ${textMuted}`}>{t(svc.shortDesc)}</p>
                  <p className="text-xs text-[#F7931E] font-semibold">
                    {t({ ar: 'المناسب لـ:', en: 'Suitable for:' })} {t(svc.suitableFor)}
                  </p>
                  <div className="mt-4 pt-4 border-t border-dashed border-gray-200 dark:border-white/10">
                    <div className="flex flex-wrap gap-1.5">
                      {svc.typicalOutputs.slice(0, 3).map((out, j) => (
                        <span key={j} className={`text-[10px] px-2 py-1 rounded-md ${isDark ? 'bg-white/5 text-gray-300' : 'bg-gray-100 text-gray-600'}`}>
                          {t(out)}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
          <motion.div {...fadeUp} className="text-center mt-10">
            <Link to="/services" className="btn-outline-dark inline-flex items-center gap-2">
              {t({ ar: 'عرض جميع القدرات والتفاصيل', en: 'View All Capabilities & Details' })}
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ===== 4. INDUSTRIES WE SERVE ===== */}
      <section className={`section-padding ${bgClass}`}>
        <div className="container-custom">
          <SectionHeader
            title={t({ ar: 'القطاعات التي نخدمها', en: 'Industries We Serve' })}
            subtitle={t({ ar: 'حلول تغليف وطباعة مخصصة لكل قطاع صناعي', en: 'Custom packaging and printing solutions for every industry sector' })}
          />
          <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
            {featuredIndustries.map((ind, i) => {
              const Icon = getIcon(ind.icon);
              return (
                <motion.div
                  key={ind.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className={`group relative overflow-hidden p-6 rounded-2xl border cursor-default transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${isDark ? 'bg-[#111111] border-white/5' : 'bg-white border-gray-100'}`}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${ind.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl`} />
                  <div className="relative">
                    <div className="w-11 h-11 rounded-xl bg-gray-100 dark:bg-white/5 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                      <Icon size={20} className={ind.iconColor} />
                    </div>
                    <h3 className={`font-bold text-sm mb-2 ${textClass}`}>{t(ind.title)}</h3>
                    <p className={`text-xs leading-relaxed mb-3 ${textMuted}`}>{t(ind.description).substring(0, 120)}...</p>
                    <div className="space-y-1">
                      <div className="flex items-center gap-1.5">
                        <FaRegLightbulb size={10} className="text-[#F7931E] flex-shrink-0" />
                        <span className="text-[10px] text-[#F7931E] font-semibold">{t({ ar: 'الاحتياج:', en: 'Need:' })} {t(ind.needs).substring(0, 40)}...</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <FaRegCheckCircle size={10} className="text-[#F7931E] flex-shrink-0" />
                        <span className="text-[10px] text-[#F7931E] font-semibold">{t({ ar: 'الدعم:', en: 'Support:' })} {t(ind.support).substring(0, 40)}...</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
          <motion.div {...fadeUp} className="text-center mt-10">
            <Link to="/industries" className="btn-outline-dark inline-flex items-center gap-2">
              {t({ ar: 'استكشف جميع القطاعات', en: 'Explore All Industries' })}
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ===== 5. FEATURED CASE STUDIES / WORK ===== */}
      <section className={`section-padding ${bgAlt}`}>
        <div className="container-custom">
          <SectionHeader
            title={t({ ar: 'نماذج من أعمالنا', en: 'Featured Case Studies' })}
            subtitle={t({ ar: 'مشاريع مختارة تعكس قدراتنا في التغليف والطباعة', en: 'Selected projects reflecting our packaging and printing capabilities' })}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featuredPortfolio.map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                className={`group relative overflow-hidden rounded-2xl border ${borderColor} ${isDark ? 'bg-[#111111]' : 'bg-white'} transition-all duration-300 hover:shadow-xl`}
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={item.featuredImage}
                    alt={t(item.title)}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute bottom-4 start-4 flex gap-2">
                    <span className="bg-[#F7931E] text-white text-xs font-bold px-3 py-1 rounded-full">
                      {t(item.packagingType)}
                    </span>
                    <span className="bg-white/20 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1 rounded-full">
                      {t(item.category === 'food' ? { ar: 'تغليف غذائي', en: 'Food Packaging' } : item.category === 'pharma' ? { ar: 'تغليف دوائي', en: 'Pharma Packaging' } : item.category === 'retail' ? { ar: 'تغليف تجزئة', en: 'Retail Packaging' } : { ar: 'تغليف مخصص', en: 'Custom Packaging' })}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className={`font-bold text-lg mb-2 ${textClass}`}>{t(item.title)}</h3>
                  <p className={`text-sm leading-relaxed mb-4 ${textMuted}`}>{t(item.summary)}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {item.finishingTags.map((tag, j) => (
                      <span key={j} className="text-[10px] px-2 py-1 rounded-md bg-[#F7931E]/10 text-[#F7931E] font-semibold">
                        {t(tag)}
                      </span>
                    ))}
                  </div>
                  {item.specs && (
                    <p className="text-xs text-gray-400 mb-4 border-l-2 border-[#F7931E] pl-3">
                      {t(item.specs)}
                    </p>
                  )}
                  <Link
                    to="/portfolio"
                    className="text-[#F7931E] text-sm font-semibold flex items-center gap-1 group/link hover:gap-2 transition-all"
                  >
                    {t({ ar: 'عرض التفاصيل', en: 'View Details' })}
                    {dir === 'rtl' ? <FaChevronRight size={10} className="rotate-180" /> : <FaChevronRight size={10} />}
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
          <motion.div {...fadeUp} className="text-center mt-10">
            <Link to="/portfolio" className="btn-primary inline-flex items-center gap-2">
              {t({ ar: 'عرض جميع المشاريع', en: 'View All Projects' })}
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ===== 6. WHY COMPANIES CHOOSE PENGO PACK ===== */}
      <section className={`section-padding ${bgClass}`}>
        <div className="container-custom">
          <SectionHeader
            title={t({ ar: 'لماذا تختار Pengo Pack؟', en: 'Why Companies Choose Pengo Pack' })}
            subtitle={t({ ar: 'أسباب تجارية وصناعية تجعلنا الشريك المفضل للشركات التي تبحث عن الجودة', en: 'Business and industrial reasons that make us the preferred partner for companies seeking quality' })}
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseItems.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  whileHover={{ y: -6 }}
                  className={`group p-7 rounded-2xl border ${cardBg} transition-all duration-300 hover:shadow-xl cursor-default`}
                  style={{ boxShadow: isDark ? '0 4px 30px rgba(0,0,0,0.3)' : '0 4px 30px rgba(0,0,0,0.06)' }}
                >
                  <div className="w-14 h-14 bg-[#F7931E]/10 group-hover:bg-[#F7931E] rounded-2xl flex items-center justify-center mb-5 transition-all duration-300">
                    <Icon size={22} className="text-[#F7931E] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className={`text-base font-bold mb-3 ${textClass}`}>{t(item.title)}</h3>
                  <p className={`text-sm leading-relaxed ${textMuted}`}>{t(item.desc)}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== 7. HOW WE WORK / PRODUCTION PROCESS ===== */}
      <section className={`section-padding ${bgAlt}`}>
        <div className="container-custom">
          <SectionHeader
            title={t({ ar: 'كيف نعمل', en: 'How We Work' })}
            subtitle={t({ ar: 'عملية إنتاج منظمة من الاستفسار إلى التسليم', en: 'An organized production process from inquiry to delivery' })}
          />
          <div className="relative">
            {/* Connecting line - desktop only */}
            <div className="absolute top-8 left-0 right-0 h-0.5 bg-gradient-to-r from-[#F7931E]/30 via-[#F7931E] to-[#F7931E]/30 hidden lg:block" />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
              {productionProcess.map((step, i) => (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="relative"
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="relative z-10 w-16 h-16 bg-gradient-to-br from-[#F7931E] to-[#d97a0f] rounded-2xl flex items-center justify-center text-white font-black text-xl shadow-lg shadow-orange-500/20 mb-4">
                      {step.stepNumber}
                    </div>
                    <h3 className={`font-bold text-sm mb-2 ${textClass}`}>{t(step.title)}</h3>
                    <p className={`text-xs leading-relaxed mb-3 ${textMuted}`}>{t(step.description)}</p>
                    <div className="space-y-1">
                      {step.deliverables.map((d, j) => (
                        <div key={j} className="flex items-center gap-1 justify-center">
                          <FaCheckCircle size={8} className="text-[#F7931E] flex-shrink-0" />
                          <span className="text-[10px] text-gray-500">{t(d)}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== 8. MATERIALS & FINISHING PREVIEW ===== */}
      <section className={`section-padding ${bgClass}`}>
        <div className="container-custom">
          <SectionHeader
            title={t({ ar: 'الخامات والتشطيبات', en: 'Materials & Finishes' })}
            subtitle={t({ ar: 'خامات عالية الجودة وتشطيبات متنوعة تضيف قيمة جمالية وحماية', en: 'High-quality materials and diverse finishes that add aesthetic value and protection' })}
          />
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {featuredMaterials.map((mat, i) => (
              <motion.div
                key={mat.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
                className={`group p-5 rounded-xl border ${cardBg} transition-all duration-300 hover:-translate-y-1 hover:shadow-lg cursor-default`}
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                    mat.category === 'material'
                      ? 'bg-blue-500/10 text-blue-500'
                      : mat.category === 'finish'
                      ? 'bg-[#F7931E]/10 text-[#F7931E]'
                      : 'bg-green-500/10 text-green-500'
                  }`}>
                    {mat.category === 'material' ? t({ ar: 'خامة', en: 'Material' }) : mat.category === 'finish' ? t({ ar: 'تشطيب', en: 'Finish' }) : t({ ar: 'عملية', en: 'Process' })}
                  </span>
                </div>
                <h3 className={`font-bold text-sm mb-2 ${textClass}`}>{t(mat.title)}</h3>
                <p className={`text-xs leading-relaxed ${textMuted}`}>{t(mat.description)}</p>
                {mat.tags && (
                  <div className="flex flex-wrap gap-1 mt-3">
                    {mat.tags.map((tag, j) => (
                      <span key={j} className="text-[10px] px-2 py-0.5 rounded-full bg-gray-100 dark:bg-white/5 text-gray-500">
                        {t(tag)}
                      </span>
                    ))}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
          <motion.div {...fadeUp} className="text-center mt-10">
            <Link to="/services" className="btn-outline-dark inline-flex items-center gap-2">
              {t({ ar: 'استكشف جميع التشطيبات', en: 'Explore All Finishes' })}
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ===== 9. CTA BAND FOR REQUEST QUOTE ===== */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#141414] to-[#0a0a0a]" />
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/3735218/pexels-photo-3735218.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="CTA background"
            className="w-full h-full object-cover opacity-15"
          />
        </div>
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: 'radial-gradient(circle at 50% 50%, #F7931E 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#F7931E]/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ repeat: Infinity, duration: 6 }}
        />
        <div className="relative container-custom text-center">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="inline-block text-[#F7931E] text-sm font-bold uppercase tracking-widest mb-4"
          >
            {t({ ar: 'ابدأ مشروعك الآن', en: 'Start Your Project Now' })}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight"
          >
            {t({ ar: 'هل لديك مشروع تغليف أو طباعة؟', en: 'Have a Packaging or Printing Project?' })}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-gray-400 text-lg mb-8 max-w-xl mx-auto"
          >
            {t({ ar: 'أرسل مواصفاتك واحصل على عرض سعر مخصص يناسب احتياجاتك', en: 'Send your specifications and get a tailored quote for your needs' })}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap gap-4 justify-center"
          >
            <Link to="/contact" className="btn-primary">
              {t({ ar: 'اطلب عرض سعر', en: 'Request a Quote' })}
            </Link>
            <Link to="/contact" className="btn-outline">
              {t({ ar: 'تواصل مع المبيعات', en: 'Contact Sales' })}
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ===== 10. TESTIMONIALS / TRUST SIGNALS ===== */}
      <section className={`section-padding ${bgAlt}`}>
        <div className="container-custom">
          <SectionHeader
            title={t({ ar: 'ماذا يقول عملاؤنا', en: 'What Our Clients Say' })}
            subtitle={t({ ar: 'آراء من شركاء نجاح يثقون في قدراتنا الإنتاجية', en: 'Opinions from success partners who trust our production capabilities' })}
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredTestimonials.map((t2, i) => (
              <motion.div
                key={t2.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                className={`p-7 rounded-2xl border relative ${cardBg}`}
                style={{ boxShadow: isDark ? '0 4px 30px rgba(0,0,0,0.3)' : '0 4px 30px rgba(0,0,0,0.06)' }}
              >
                <div className="absolute top-6 right-6 text-4xl text-[#F7931E]/20 font-serif leading-none select-none">
                  <FaQuoteLeft />
                </div>
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t2.rating }).map((_, j) => (
                    <FaStar key={j} size={14} className="text-[#F7931E]" />
                  ))}
                </div>
                <p className={`text-sm leading-relaxed mb-5 ${textMuted}`}>
                  {lang === 'ar' ? t2.text.ar : t2.text.en}
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#F7931E] to-[#d97a0f] flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                    {(lang === 'ar' ? t2.name.ar : t2.name.en)[0]}
                  </div>
                  <div>
                    <p className={`text-sm font-bold ${textClass}`}>{lang === 'ar' ? t2.name.ar : t2.name.en}</p>
                    <p className={`text-xs ${textMuted}`}>{lang === 'ar' ? t2.role.ar : t2.role.en} — {lang === 'ar' ? t2.company.ar : t2.company.en}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Partner logos strip ===== */}
      <section className={`py-12 ${bgClass} overflow-hidden border-y ${borderColor}`}>
        <div className="container-custom mb-8">
          <p className={`text-center text-sm font-bold uppercase tracking-widest ${textMuted}`}>
            {t({ ar: 'شركاء نجاحنا', en: 'Our Success Partners' })}
          </p>
        </div>
        <div className="relative">
          <div className="flex overflow-hidden">
            <div className={`flex gap-8 items-center ${dir === 'rtl' ? 'animate-marquee-rtl' : 'animate-marquee'} whitespace-nowrap`}>
              {[...featuredPartners, ...featuredPartners, ...featuredPartners, ...featuredPartners].map((partner, i) => (
                <div
                  key={i}
                  className={`flex-shrink-0 px-6 py-3 rounded-xl border font-bold text-sm tracking-tight transition-all duration-300 hover:border-[#F7931E] hover:text-[#F7931E] ${
                    isDark
                      ? 'bg-[#111111] border-white/5 text-gray-500 hover:bg-[#1a1a1a]'
                      : 'bg-gray-50 border-gray-100 text-gray-400 hover:bg-white'
                  }`}
                >
                  {partner.name}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== 11. FINAL CTA ===== */}
      <section className={`section-padding ${bgClass}`}>
        <div className="container-custom">
          <div className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center ${bgAlt} rounded-3xl p-8 lg:p-12`}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className={`text-3xl md:text-4xl font-bold mb-4 leading-tight ${textClass}`}>
                {t({ ar: 'جاهز للبدء؟', en: 'Ready to Get Started?' })}
              </h2>
              <p className={`text-lg mb-6 ${textMuted}`}>
                {t({ ar: 'تواصل معنا الآن للحصول على استشارة فنية وعرض سعر مجاني لمشروعك', en: 'Contact us now for a technical consultation and free quote for your project' })}
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/contact" className="btn-primary">
                  {t({ ar: 'اطلب عرض سعر', en: 'Request a Quote' })}
                </Link>
                <a
                  href="https://wa.me/201014500077"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-green-500 text-green-500 hover:bg-green-500 hover:text-white font-semibold transition-all duration-300"
                >
                  <FaWhatsapp size={18} />
                  {t({ ar: 'واتساب مباشر', en: 'WhatsApp Direct' })}
                </a>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-2 gap-4"
              ref={statsInViewRef}
            >
              {[
                { val: 10, suffix: '+', label: stats.years },
                { val: 500, suffix: '+', label: stats.projects },
                { val: 100, suffix: '+', label: stats.clients },
                { val: 95, suffix: '%', label: stats.satisfaction },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className={`text-center p-5 rounded-2xl border ${cardBg}`}
                >
                  <div className="text-3xl lg:text-4xl font-black text-[#F7931E] mb-1">
                    <AnimatedCounter target={stat.val} suffix={stat.suffix} />
                  </div>
                  <div className={`text-xs font-semibold ${textMuted}`}>{t(stat.label)}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
