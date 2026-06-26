import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useLang } from '../contexts/LanguageContext';
import { useTheme } from '../contexts/ThemeContext';
import { translations } from '../data/translations';
import { productionProcess } from '../data/process';

import SectionHeader from '../components/ui/SectionHeader';
import PageHero from '../components/ui/PageHero';
import {
  FaBullseye, FaEye, FaAward, FaCheckCircle, FaCogs, FaShieldAlt, FaCog, FaPalette, FaCompress, FaCubes, FaClipboardCheck, FaStar, FaUsers, FaPrint, FaTabletAlt, FaBoxOpen,
} from 'react-icons/fa';

const timelineData = [
  { year: '2013', title: { ar: 'تأسيس الشركة', en: 'Company Founded' }, desc: { ar: 'بدأت Pengo Pack رحلتها في مجال التغليف والطباعة في العاشر من رمضان', en: 'Pengo Pack began its journey in packaging and printing in 10th of Ramadan' } },
  { year: '2016', title: { ar: 'توسع الطاقة الإنتاجية', en: 'Production Expansion' }, desc: { ar: 'توسعنا في خطوط الإنتاج لتلبية الطلب المتزايد من العملاء', en: 'We expanded production lines to meet growing client demand' } },
  { year: '2018', title: { ar: 'شراكات كبرى', en: 'Major Partnerships' }, desc: { ar: 'بدأنا في خدمة كبرى العلامات التجارية في مصر', en: 'Began serving major brands across Egypt' } },
  { year: '2020', title: { ar: 'تطوير تقني', en: 'Technical Advancement' }, desc: { ar: 'أدخلنا أحدث تقنيات الطباعة الرقمية والتشطيب', en: 'Introduced the latest digital printing and finishing technologies' } },
  { year: '2022', title: { ar: 'توسع إقليمي', en: 'Regional Expansion' }, desc: { ar: 'توسعنا لخدمة عملاء في منطقة الشرق الأوسط', en: 'Expanded to serve clients across the Middle East region' } },
  { year: '2026', title: { ar: 'الآن', en: 'Present Day' }, desc: { ar: 'نستمر في قيادة الجودة في صناعة التغليف والطباعة', en: 'Continuing to lead quality in packaging and printing industry' } },
];

const teamValues = [
  { icon: FaAward, title: { ar: 'الجودة', en: 'Quality' }, desc: { ar: 'نرفض التنازل عن الجودة في أي مرحلة', en: 'We refuse to compromise quality at any stage' } },
  { icon: FaCogs, title: { ar: 'الكفاءة', en: 'Efficiency' }, desc: { ar: 'نستثمر في التقنية والتدريب لتحسين الإنتاج', en: 'We invest in technology and training to improve production' } },
  { icon: FaBullseye, title: { ar: 'الالتزام', en: 'Commitment' }, desc: { ar: 'نلتزم بالمواعيد والمواصفات المتفق عليها', en: 'We commit to agreed timelines and specifications' } },
  { icon: FaEye, title: { ar: 'الشفافية', en: 'Transparency' }, desc: { ar: 'نبقي عملائنا مطلعين على كل مرحلة من مراحل المشروع', en: 'We keep clients informed at every stage of the project' } },
  { icon: FaUsers, title: { ar: 'الشراكة', en: 'Partnership' }, desc: { ar: 'نرى عملاءنا كشركاء نجاح طويلة الأمد', en: 'We see clients as long-term success partners' } },
  { icon: FaShieldAlt, title: { ar: 'الأمانة', en: 'Integrity' }, desc: { ar: 'نلتزم بأعلى معايير الأمانة في التعامل والإنتاج', en: 'We adhere to highest integrity standards in dealings and production' } },
];

const manufacturingCapabilities = [
  { icon: FaPalette, title: { ar: 'ما قبل الطباعة والأعمال الفنية', en: 'Prepress & Artwork Preparation' }, desc: { ar: 'مراجعة الملفات، تصحيح الألوان، إنتاج الألواح، وضمان جاهزية الملفات للطباعة.', en: 'File review, color correction, plate production, and ensuring file readiness for printing.' } },
  { icon: FaPrint, title: { ar: 'الطباعة الأوفست', en: 'Offset Printing' }, desc: { ar: 'طباعة أوفست احترافية للكميات المتوسطة والكبيرة مع تناسق ألوان عالٍ.', en: 'Professional offset printing for medium to large quantities with high color consistency.' } },
  { icon: FaTabletAlt, title: { ar: 'الطباعة الرقمية', en: 'Digital Printing' }, desc: { ar: 'طباعة رقمية عالية الدقة للكميات الصغيرة والنماذج والمشاريع العاجلة.', en: 'High-resolution digital printing for small quantities, prototypes, and urgent projects.' } },
  { icon: FaBoxOpen, title: { ar: 'تحويل الكرتون', en: 'Carton Conversion' }, desc: { ar: 'قص وتجعيد وطي دقيق للكرتون لإنتاج علب قابلة للطي بأبعاد مخصصة.', en: 'Precision cutting, creasing, and folding of carton to produce custom folding boxes.' } },
  { icon: FaCompress, title: { ar: 'الطي والتجميع', en: 'Folding & Gluing' }, desc: { ar: 'طي وتجميع آلي ويدوي للعلب الكرتونية بأشكال متنوعة.', en: 'Automatic and manual folding and assembly of carton boxes in various styles.' } },
  { icon: FaPalette, title: { ar: 'التشطيب والتلميع السطحي', en: 'Finishing & Surface Enhancement' }, desc: { ar: 'UV، تغليف، تذهيب، ورنيش لإضافة لمسة فاخرة وحماية للمطبوعات.', en: 'UV, lamination, foil, and varnish to add a premium touch and protect prints.' } },
  { icon: FaCubes, title: { ar: 'دعم تجميع التغليف', en: 'Packaging Assembly Support' }, desc: { ar: 'تجميع العلب النهائية، التعبئة، والتجهيز للشحن والتسليم.', en: 'Final box assembly, packing, and preparation for shipping and delivery.' } },
];

const qualityCommitments = [
  { icon: FaClipboardCheck, title: { ar: 'مراقبة الجودة المستمرة', en: 'Continuous Quality Monitoring' }, desc: { ar: 'نراقب الجودة في كل مرحلة من مراحل الإنتاج، من الملفات الفنية حتى التسليم النهائي.', en: 'We monitor quality at every production stage, from artwork files to final delivery.' } },
  { icon: FaPalette, title: { ar: 'اختيار الخامات بعناية', en: 'Careful Material Selection' }, desc: { ar: 'نختار الخامات من موردين معتمدين ونتحقق من جودتها قبل بدء الإنتاج.', en: 'We select materials from approved suppliers and verify quality before starting production.' } },
  { icon: FaCog, title: { ar: 'فحوصات الإنتاج الدورية', en: 'Periodic Production Checks' }, desc: { ar: 'نجرى فحوصات دورية أثناء الطباعة والتشطيب للتأكد من التناسق والدقة.', en: 'We conduct periodic checks during printing and finishing to ensure consistency and accuracy.' } },
  { icon: FaStar, title: { ar: 'جودة التشطيب النهائي', en: 'Final Finishing Quality' }, desc: { ar: 'نفحص كل منتج قبل التسليم للتأكد من جودة التشطيب وخلوه من العيوب.', en: 'We inspect every product before delivery to ensure finishing quality and defect-free.' } },
  { icon: FaUsers, title: { ar: 'خدمة موجهة نحو العميل', en: 'Customer-Oriented Service' }, desc: { ar: 'نضع احتياجات العميل في المقام الأول ونلتزم بالمواصفات المتفق عليها.', en: 'We put client needs first and adhere to agreed specifications.' } },
];

export default function About() {
  const { t } = useLang();
  const { isDark } = useTheme();
  const { about } = translations;

  const bgClass = isDark ? 'bg-[#0a0a0a]' : 'bg-white';
  const bgAlt = isDark ? 'bg-[#111111]' : 'bg-gray-50';
  const textClass = isDark ? 'text-white' : 'text-[#0a0a0a]';
  const textMuted = isDark ? 'text-gray-400' : 'text-gray-500';
  const cardBg = isDark ? 'bg-[#111111] border-white/5' : 'bg-white border-gray-100';

  return (
    <div className={bgClass}>
      <PageHero
        title={t(about.title)}
        subtitle={t({ ar: 'خبرة تمتد لأكثر من 10 سنوات في صناعة التغليف والطباعة والكرتون', en: 'Over 10 years of expertise in packaging, printing, and carton manufacturing' })}
        breadcrumb={t({ ar: 'من نحن', en: 'About Us' })}
      />

      {/* Story Section */}
      <section className={`section-padding ${bgClass}`}>
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <span className="text-[#F7931E] text-sm font-bold uppercase tracking-widest mb-4 block">
                {t({ ar: 'قصتنا', en: 'Our Story' })}
              </span>
              <h2 className={`text-3xl md:text-4xl font-bold mb-6 leading-tight ${textClass}`}>
                {t({ ar: 'أكثر من 10 سنوات من التميز في التغليف والطباعة والكرتون', en: 'Over 10 Years of Excellence in Packaging, Printing & Carton' })}
              </h2>
              <div className="w-16 h-1 bg-[#F7931E] rounded-full mb-6" />
              <p className={`text-base leading-relaxed mb-5 ${textMuted}`}>{t(about.story)}</p>
              <p className={`text-base leading-relaxed mb-8 ${textMuted}`}>
                {t({
                  ar: 'نعمل من مدينة العاشر من رمضان الصناعية لنخدم عملاء في مختلف أنحاء مصر والشرق الأوسط بأعلى معايير الجودة والاحترافية. نركز على تقديم حلول تغليف وطباعة مخصصة تناسب كل قطاع صناعي.',
                  en: 'Operating from the 10th of Ramadan Industrial City, we serve clients across Egypt and the Middle East with the highest standards of quality and professionalism. We focus on delivering customized packaging and printing solutions that fit every industrial sector.'
                })}
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { val: '10+', label: { ar: 'سنوات خبرة', en: 'Years Experience' } },
                  { val: '500+', label: { ar: 'مشروع منجز', en: 'Projects Completed' } },
                  { val: '100+', label: { ar: 'عميل راضٍ', en: 'Happy Clients' } },
                  { val: '95%', label: { ar: 'معدل رضا العملاء', en: 'Client Satisfaction' } },
                ].map((stat, i) => (
                  <div key={i} className={`p-4 rounded-xl border ${cardBg}`}>
                    <div className="text-2xl font-black text-[#F7931E] mb-1">{stat.val}</div>
                    <div className={`text-xs ${textMuted}`}>{t(stat.label)}</div>
                  </div>
                ))}
              </div>
              <Link to="/contact" className="btn-primary inline-flex">
                {t({ ar: 'تواصل معنا', en: 'Get In Touch' })}
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden aspect-[4/5]">
                <img
                  src="/group2.png"
                  alt="Pengo Pack factory"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>
              <div className="absolute bottom-8 -start-8 bg-[#F7931E] p-6 rounded-2xl shadow-2xl max-w-[180px]">
                <div className="text-4xl font-black text-white mb-1">10+</div>
                <div className="text-white/90 text-sm font-semibold leading-tight">
                  {t({ ar: 'سنوات من الجودة الصناعية', en: 'Years of Industrial Quality' })}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className={`section-padding ${bgAlt}`}>
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { icon: FaBullseye, ...about.mission, color: 'from-[#F7931E]/20 to-orange-600/10' },
              { icon: FaEye, ...about.vision, color: 'from-blue-500/20 to-blue-600/10' },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2, duration: 0.6 }}
                className={`relative p-8 rounded-2xl border overflow-hidden ${cardBg}`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-50`} />
                <div className="relative">
                  <div className="w-14 h-14 bg-[#F7931E] rounded-2xl flex items-center justify-center mb-5">
                    <item.icon size={24} className="text-white" />
                  </div>
                  <h3 className={`text-xl font-bold mb-3 ${textClass}`}>{t(item.title)}</h3>
                  <div className="w-10 h-0.5 bg-[#F7931E] mb-4" />
                  <p className={`text-sm leading-relaxed ${textMuted}`}>{t(item.text)}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className={`section-padding ${bgClass}`}>
        <div className="container-custom">
          <SectionHeader title={t(about.values.title)} />
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {teamValues.map((val, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                className={`group p-6 rounded-2xl border text-center transition-all duration-300 hover:-translate-y-2 ${
                  isDark ? 'bg-[#111111] border-white/5 hover:border-[#F7931E]/30' : 'bg-gray-50 border-gray-100 hover:border-[#F7931E]/30 hover:bg-white'
                }`}
              >
                <div className="w-12 h-12 bg-[#F7931E]/10 group-hover:bg-[#F7931E] rounded-xl flex items-center justify-center mx-auto mb-3 transition-all duration-300">
                  <val.icon size={20} className="text-[#F7931E] group-hover:text-white transition-colors duration-300" />
                </div>
                <h4 className={`font-bold text-sm mb-1 ${textClass}`}>{t(about.values.items[i])}</h4>
                <p className={`text-xs ${textMuted}`}>{t(val.desc)}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Manufacturing Capabilities */}
      <section className={`section-padding ${bgAlt}`}>
        <div className="container-custom">
          <SectionHeader
            title={t({ ar: 'قدرات التصنيع', en: 'Manufacturing Capabilities' })}
            subtitle={t({ ar: 'نظام إنتاج متكامل يغطي كل مرحلة من مراحل التغليف والطباعة', en: 'An integrated production system covering every stage of packaging and printing' })}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {manufacturingCapabilities.map((cap, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                whileHover={{ y: -6 }}
                className={`group p-6 rounded-2xl border ${cardBg} transition-all duration-300 hover:shadow-xl cursor-default`}
                style={{ boxShadow: isDark ? '0 4px 30px rgba(0,0,0,0.3)' : '0 4px 30px rgba(0,0,0,0.06)' }}
              >
                <div className="w-12 h-12 bg-[#F7931E]/10 group-hover:bg-[#F7931E] rounded-xl flex items-center justify-center mb-4 transition-all duration-300">
                  <cap.icon size={20} className="text-[#F7931E] group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className={`font-bold text-sm mb-2 ${textClass}`}>{t(cap.title)}</h3>
                <p className={`text-xs leading-relaxed ${textMuted}`}>{t(cap.desc)}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Production Workflow */}
      <section className={`section-padding ${bgClass}`}>
        <div className="container-custom">
          <SectionHeader
            title={t({ ar: 'سير العمل الإنتاجي', en: 'Production Workflow' })}
            subtitle={t({ ar: 'من الاستفسار إلى التسليم — عملية منظمة وشفافة', en: 'From inquiry to delivery — an organized and transparent process' })}
          />
          <div className="relative">
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

      {/* Quality Commitment */}
      <section className={`section-padding ${bgAlt}`}>
        <div className="container-custom">
          <SectionHeader
            title={t({ ar: 'التزامنا بالجودة', en: 'Our Quality Commitment' })}
            subtitle={t({ ar: 'جودة ليست هدفاً واحداً — هي نهج مستمر في كل عملية', en: 'Quality is not a single goal — it is an ongoing approach in every operation' })}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {qualityCommitments.map((qc, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className={`group p-6 rounded-2xl border ${cardBg} transition-all duration-300 hover:-translate-y-1 hover:shadow-xl cursor-default`}
                style={{ boxShadow: isDark ? '0 4px 30px rgba(0,0,0,0.3)' : '0 4px 30px rgba(0,0,0,0.06)' }}
              >
                <div className="w-12 h-12 bg-[#F7931E]/10 group-hover:bg-[#F7931E] rounded-xl flex items-center justify-center mb-4 transition-all duration-300">
                  <qc.icon size={20} className="text-[#F7931E] group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className={`font-bold text-sm mb-2 ${textClass}`}>{t(qc.title)}</h3>
                <p className={`text-xs leading-relaxed ${textMuted}`}>{t(qc.desc)}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className={`section-padding ${bgClass}`}>
        <div className="container-custom">
          <SectionHeader title={t(about.timeline)} />
          <div className="relative">
            <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-[#F7931E]/20 hidden md:block" />
            <div className="space-y-8">
              {timelineData.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.6 }}
                  className={`flex flex-col md:flex-row items-center gap-6 ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                >
                  <div className="md:w-1/2 flex justify-end">
                    <div className={`p-6 rounded-2xl border max-w-sm ${cardBg}`}>
                      <h3 className={`font-bold mb-2 ${textClass}`}>{t(item.title)}</h3>
                      <p className={`text-sm ${textMuted}`}>{t(item.desc)}</p>
                    </div>
                  </div>
                  <div className="flex-shrink-0 relative z-10">
                    <div className="w-14 h-14 bg-[#F7931E] rounded-full flex items-center justify-center text-white font-black text-sm shadow-lg shadow-orange-500/30">
                      {item.year}
                    </div>
                  </div>
                  <div className="md:w-1/2" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Manufacturing Excellence Banner */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="hero.png"
            alt="manufacturing"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#0a0a0a]/85" />
        </div>
        <div className="relative container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              {t({ ar: 'التميز في التصنيع', en: 'Manufacturing Excellence' })}
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-10">
              {t({
                ar: 'مصنعنا في مدينة العاشر من رمضان مجهز بأحدث تقنيات الطباعة والتغليف لضمان أعلى معايير الجودة',
                en: 'Our factory in 10th of Ramadan City is equipped with the latest printing and packaging technologies to ensure the highest quality standards'
              })}
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { val: '5000+', label: { ar: 'م² مساحة المصنع', en: 'm² Factory Area' } },
                { val: '20+', label: { ar: 'خط إنتاج', en: 'Production Lines' } },
                { val: '50+', label: { ar: 'موظف متخصص', en: 'Expert Staff' } },
                { val: '24/7', label: { ar: 'دعم ومتابعة', en: 'Support & Follow-up' } },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5"
                >
                  <div className="text-3xl font-black text-[#F7931E] mb-2">{stat.val}</div>
                  <div className="text-gray-300 text-sm">{t(stat.label)}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className={`py-20 ${bgAlt}`}>
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${textClass}`}>
              {t({ ar: 'تعرف على قدراتنا عن قرب', en: 'Learn More About Our Capabilities' })}
            </h2>
            <p className={`text-lg mb-8 max-w-xl mx-auto ${textMuted}`}>
              {t({ ar: 'تواصل معنا لزيارة المصنع أو لمناقشة مشروعك القادم', en: 'Contact us to visit the factory or discuss your next project' })}
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/contact" className="btn-primary">
                {t({ ar: 'تواصل معنا', en: 'Contact Us' })}
              </Link>
              <Link to="/services" className="btn-outline-dark">
                {t({ ar: 'استكشف الخدمات', en: 'Explore Services' })}
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
