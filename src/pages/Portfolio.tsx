import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useLang } from '../contexts/LanguageContext';
import { useTheme } from '../contexts/ThemeContext';
import { portfolioData, portfolioCategories } from '../data/portfolio';
import PageHero from '../components/ui/PageHero';
import {
  FaExpand, FaChevronRight, FaTimes,
} from 'react-icons/fa';

type Category = 'all' | 'food' | 'pharma' | 'retail' | 'custom';

export default function Portfolio() {
  const { t, dir } = useLang();
  const { isDark } = useTheme();
  const [activeFilter, setActiveFilter] = useState<Category>('all');
  const [selectedProject, setSelectedProject] = useState<typeof portfolioData[0] | null>(null);

  const bgClass = isDark ? 'bg-[#0a0a0a]' : 'bg-white';
  const bgAlt = isDark ? 'bg-[#111111]' : 'bg-gray-50';
  const textClass = isDark ? 'text-white' : 'text-[#0a0a0a]';
  const textMuted = isDark ? 'text-gray-400' : 'text-gray-500';
  const cardBg = isDark ? 'bg-[#111111] border-white/5' : 'bg-white border-gray-100';
  const borderColor = isDark ? 'border-white/5' : 'border-gray-100';

  const filtered = portfolioData.filter(
    (item) => activeFilter === 'all' || item.category === activeFilter
  );

  return (
    <div className={bgClass}>
      <PageHero
        title={t({ ar: 'أعمالنا ودراسات الحالة', en: 'Portfolio & Case Studies' })}
        subtitle={t({ ar: 'مشاريع حقيقية تعكس قدراتنا في التغليف والطباعة والتشطيب', en: 'Real projects reflecting our capabilities in packaging, printing, and finishing' })}
        breadcrumb={t({ ar: 'أعمالنا', en: 'Portfolio' })}
      />

      {/* Featured Projects (large cards) */}
      <section className={`section-padding ${bgClass}`}>
        <div className="container-custom">
          {/* Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-wrap gap-3 justify-center mb-12"
          >
            {portfolioCategories.map((filter) => (
              <button
                key={filter.key}
                onClick={() => setActiveFilter(filter.key as Category)}
                className={`px-5 py-2.5 rounded-xl font-semibold text-sm transition-all duration-300 ${
                  activeFilter === filter.key
                    ? 'bg-[#F7931E] text-white shadow-lg shadow-orange-500/30 -translate-y-0.5'
                    : isDark
                    ? 'bg-[#111111] text-gray-400 border border-white/5 hover:border-[#F7931E]/30'
                    : 'bg-gray-100 text-gray-600 hover:bg-[#F7931E]/10 hover:text-[#F7931E]'
                }`}
              >
                {t(filter.label)}
              </button>
            ))}
          </motion.div>

          {/* Grid */}
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence>
              {filtered.map((item, i) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className={`group relative overflow-hidden rounded-2xl border cursor-pointer ${isDark ? 'bg-[#111111] border-white/5' : 'bg-white border-gray-100'} transition-all duration-300 hover:shadow-xl`}
                  onClick={() => setSelectedProject(item)}
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
                    </div>
                    <div className="absolute top-4 end-4 w-9 h-9 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-[#F7931E]">
                      <FaExpand size={12} className="text-white" />
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className={`font-bold text-base mb-2 ${textClass}`}>{t(item.title)}</h3>
                    <p className={`text-sm leading-relaxed mb-3 ${textMuted}`}>{t(item.summary)}</p>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {item.finishingTags.map((tag, j) => (
                        <span key={j} className="text-[10px] px-2 py-1 rounded-full bg-[#F7931E]/10 text-[#F7931E] font-semibold">
                          {t(tag)}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center justify-between">
                      <span className={`text-xs ${textMuted}`}>
                        {t({ ar: 'اضغط للتفاصيل', en: 'Click for details' })}
                      </span>
                      <span className="text-[#F7931E] text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                        {t({ ar: 'عرض', en: 'View' })}
                        {dir === 'rtl' ? <FaChevronRight size={10} className="rotate-180" /> : <FaChevronRight size={10} />}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className={`relative max-w-3xl w-full max-h-[90vh] overflow-y-auto rounded-3xl ${isDark ? 'bg-[#111111]' : 'bg-white'} border ${borderColor}`}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 end-4 z-10 w-10 h-10 bg-black/50 backdrop-blur-sm rounded-xl flex items-center justify-center text-white hover:bg-[#F7931E] transition-colors"
              >
                <FaTimes size={16} />
              </button>

              {/* Featured Image */}
              <div className="relative h-72 overflow-hidden">
                <img
                  src={selectedProject.featuredImage}
                  alt={t(selectedProject.title)}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-6 start-6 end-6">
                  <div className="flex gap-2 mb-3">
                    <span className="bg-[#F7931E] text-white text-xs font-bold px-3 py-1 rounded-full">
                      {t(selectedProject.packagingType)}
                    </span>
                    <span className="bg-white/20 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1 rounded-full">
                      {t({ ar: 'دراسة حالة', en: 'Case Study' })}
                    </span>
                  </div>
                  <h3 className="text-white font-bold text-2xl">{t(selectedProject.title)}</h3>
                </div>
              </div>

              <div className="p-8">
                {/* Summary */}
                <p className={`text-base leading-relaxed mb-6 ${textMuted}`}>
                  {t(selectedProject.summary)}
                </p>

                {/* Challenge / Solution / Outcome */}
                {(selectedProject.challenge || selectedProject.solution || selectedProject.outcome) && (
                  <div className="space-y-5 mb-6">
                    {selectedProject.challenge && (
                      <div className={`p-5 rounded-xl border-l-4 border-red-500 ${isDark ? 'bg-red-500/5' : 'bg-red-50'}`}>
                        <p className={`text-sm font-bold mb-2 ${isDark ? 'text-red-400' : 'text-red-600'}`}>
                          {t({ ar: 'التحدي', en: 'Challenge' })}
                        </p>
                        <p className={`text-sm ${textMuted}`}>{t(selectedProject.challenge)}</p>
                      </div>
                    )}
                    {selectedProject.solution && (
                      <div className={`p-5 rounded-xl border-l-4 border-blue-500 ${isDark ? 'bg-blue-500/5' : 'bg-blue-50'}`}>
                        <p className={`text-sm font-bold mb-2 ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>
                          {t({ ar: 'الحل', en: 'Solution' })}
                        </p>
                        <p className={`text-sm ${textMuted}`}>{t(selectedProject.solution)}</p>
                      </div>
                    )}
                    {selectedProject.outcome && (
                      <div className={`p-5 rounded-xl border-l-4 border-green-500 ${isDark ? 'bg-green-500/5' : 'bg-green-50'}`}>
                        <p className={`text-sm font-bold mb-2 ${isDark ? 'text-green-400' : 'text-green-600'}`}>
                          {t({ ar: 'النتيجة', en: 'Outcome' })}
                        </p>
                        <p className={`text-sm ${textMuted}`}>{t(selectedProject.outcome)}</p>
                      </div>
                    )}
                  </div>
                )}

                {/* Specs */}
                {selectedProject.specs && (
                  <div className={`p-4 rounded-xl mb-6 border-l-2 border-[#F7931E] ${isDark ? 'bg-[#F7931E]/5' : 'bg-[#F7931E]/5'}`}>
                    <p className={`text-xs font-bold uppercase tracking-wider mb-1 text-[#F7931E]`}>
                      {t({ ar: 'المواصفات التقنية', en: 'Technical Specifications' })}
                    </p>
                    <p className={`text-sm ${textMuted}`}>{t(selectedProject.specs)}</p>
                  </div>
                )}

                {/* Finishing Tags */}
                <div className="mb-6">
                  <p className={`text-xs font-bold uppercase tracking-wider mb-3 ${textClass}`}>
                    {t({ ar: 'التشطيبات المستخدمة', en: 'Finishes Used' })}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.finishingTags.map((tag, j) => (
                      <span key={j} className="text-sm px-4 py-2 rounded-xl bg-[#F7931E]/10 text-[#F7931E] font-semibold">
                        {t(tag)}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Gallery thumbnails */}
                {selectedProject.galleryImages.length > 0 && (
                  <div className="mb-6">
                    <p className={`text-xs font-bold uppercase tracking-wider mb-3 ${textClass}`}>
                      {t({ ar: 'صور المشروع', en: 'Project Images' })}
                    </p>
                    <div className="flex gap-3">
                      {selectedProject.galleryImages.map((img, j) => (
                        <img
                          key={j}
                          src={img}
                          alt={`${t(selectedProject.title)} ${j + 1}`}
                          className="w-24 h-24 rounded-xl object-cover border border-gray-200 dark:border-white/10"
                        />
                      ))}
                    </div>
                  </div>
                )}

                {/* CTA */}
                <div className="flex flex-wrap gap-4">
                  <Link to="/contact" className="btn-primary flex-1 text-center">
                    {t({ ar: 'اطلب مشروعاً مشابهاً', en: 'Request a Similar Project' })}
                  </Link>
                  <Link to="/services" className="btn-outline-dark flex-1 text-center">
                    {t({ ar: 'استكشف الخدمات', en: 'Explore Services' })}
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Stats Section */}
      <section className={`py-16 ${bgAlt}`}>
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { val: '500+', label: { ar: 'مشروع منجز', en: 'Projects Completed' } },
              { val: '100+', label: { ar: 'عميل راضٍ', en: 'Satisfied Clients' } },
              { val: '50+', label: { ar: 'علامة تجارية', en: 'Brands Served' } },
              { val: '10+', label: { ar: 'سنوات خبرة', en: 'Years Experience' } },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`text-center p-6 rounded-2xl border ${cardBg}`}
              >
                <div className="text-3xl font-black text-[#F7931E] mb-2">{stat.val}</div>
                <div className={`text-sm ${textMuted}`}>{t(stat.label)}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
