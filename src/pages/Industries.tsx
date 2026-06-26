import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useLang } from '../contexts/LanguageContext';
import { useTheme } from '../contexts/ThemeContext';
import { industriesData } from '../data/industries';
import { getIcon } from '../utils/iconMap';
import PageHero from '../components/ui/PageHero';
import { FaCheckCircle } from 'react-icons/fa';

export default function Industries() {
  const { t } = useLang();
  const { isDark } = useTheme();

  const bgClass = isDark ? 'bg-[#0a0a0a]' : 'bg-white';
  const bgAlt = isDark ? 'bg-[#111111]' : 'bg-gray-50';
  const textClass = isDark ? 'text-white' : 'text-[#0a0a0a]';
  const textMuted = isDark ? 'text-gray-400' : 'text-gray-500';

  return (
    <div className={bgClass}>
      <PageHero
        title={t({ ar: 'القطاعات التي نخدمها', en: 'Industries We Serve' })}
        subtitle={t({ ar: 'حلول تغليف وطباعة مخصصة لأكثر القطاعات تطلباً في السوق', en: 'Custom packaging and printing solutions for the most demanding market sectors' })}
        breadcrumb={t({ ar: 'الصناعات', en: 'Industries' })}
      />

      <section className={`section-padding ${bgClass}`}>
        <div className="container-custom">
          <div className="space-y-12">
            {industriesData.map((ind, i) => {
              const Icon = getIcon(ind.icon);
              const isEven = i % 2 === 1;
              return (
                <motion.div
                  key={ind.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.7 }}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center ${isEven ? 'lg:grid-flow-col-dense' : ''}`}
                >
                  <div className={`relative ${isEven ? 'lg:col-start-2' : ''}`}>
                    <div className="relative rounded-2xl overflow-hidden aspect-[4/3] group">
                      <img src={ind.imageUrl} alt={t(ind.title)} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                      <div className={`absolute inset-0 bg-gradient-to-br ${ind.color} opacity-60`} />
                    </div>
                    <div className="absolute -bottom-4 -start-4 w-12 h-12 bg-[#F7931E] rounded-xl flex items-center justify-center shadow-xl shadow-orange-500/30">
                      <Icon size={20} className="text-white" />
                    </div>
                  </div>
                  <div className={isEven ? 'lg:col-start-1 lg:row-start-1' : ''}>
                    <span className={`text-xs font-bold uppercase tracking-widest mb-2 block ${ind.iconColor}`}>{ind.iconColor.replace('text-', '').toUpperCase()}</span>
                    <h2 className={`text-2xl md:text-3xl font-bold mb-3 ${textClass}`}>{t(ind.title)}</h2>
                    <p className={`text-lg mb-4 ${textMuted}`}>{t(ind.subtitle)}</p>
                    <div className="w-12 h-1 bg-[#F7931E] rounded-full mb-5" />
                    <p className={`text-sm leading-relaxed mb-5 ${textMuted}`}>{t(ind.description)}</p>
                    <div className="space-y-3 mb-6">
                      <div className={`p-4 rounded-xl border ${isDark ? 'bg-[#1a1a1a] border-white/5' : 'bg-gray-50 border-gray-100'}`}>
                        <p className={`text-xs font-bold uppercase tracking-wider mb-1 text-[#F7931E]`}>{t({ ar: 'الاحتياج الصناعي', en: 'Industrial Need' })}</p>
                        <p className={`text-sm ${textMuted}`}>{t(ind.needs)}</p>
                      </div>
                      <div className={`p-4 rounded-xl border ${isDark ? 'bg-[#1a1a1a] border-white/5' : 'bg-gray-50 border-gray-100'}`}>
                        <p className={`text-xs font-bold uppercase tracking-wider mb-1 text-[#F7931E]`}>{t({ ar: 'كيف ندعم', en: 'How We Support' })}</p>
                        <p className={`text-sm ${textMuted}`}>{t(ind.support)}</p>
                      </div>
                    </div>
                    <div className="mb-6">
                      <p className={`text-xs font-bold uppercase tracking-wider mb-2 ${textClass}`}>{t({ ar: 'المميزات', en: 'Features' })}</p>
                      <div className="grid grid-cols-2 gap-2">
                        {ind.features.map((feat, j) => (
                          <div key={j} className="flex items-center gap-2">
                            <FaCheckCircle size={12} className="text-[#F7931E] flex-shrink-0" />
                            <span className={`text-sm ${textMuted}`}>{t(feat)}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <p className="text-sm text-[#F7931E] font-semibold mb-5 border-l-2 border-[#F7931E] pl-3">
                      {t(ind.whyPrecision)}
                    </p>
                    <Link to="/contact" className="btn-primary inline-flex text-sm">
                      {t({ ar: 'اطلب عرض سعر', en: 'Request a Quote' })}
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>
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
              {t({ ar: 'هل قطاعك غير مدرج؟', en: 'Your Sector Not Listed?' })}
            </h2>
            <p className={`text-lg mb-8 max-w-xl mx-auto ${textMuted}`}>
              {t({ ar: 'نخدم العديد من القطاعات الأخرى. تواصل معنا لمناقشة احتياجاتك المخصصة.', en: 'We serve many other sectors. Contact us to discuss your custom needs.' })}
            </p>
            <Link to="/contact" className="btn-primary">
              {t({ ar: 'تواصل معنا', en: 'Contact Us' })}
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
