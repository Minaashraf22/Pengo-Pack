import { Link } from 'react-router-dom';
import { useLang } from '../../contexts/LanguageContext';
import { translations } from '../../data/translations';
import {
  FaPhone, FaEnvelope, FaMapMarkerAlt, FaWhatsapp,
  FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube
} from 'react-icons/fa';

export default function Footer() {
  const { t } = useLang();
  const nav = translations.nav;
  const footer = translations.footer;
  const contact = translations.contact;

  const serviceLinks = [
    { ar: 'الطباعة الأوفست', en: 'Offset Printing' },
    { ar: 'الطباعة الرقمية', en: 'Digital Printing' },
    { ar: 'علب الكرتون القابلة للطي', en: 'Folding Cartons' },
    { ar: 'المطبوعات التجارية', en: 'Commercial Printing' },
    { ar: 'الملصقات والإستيكرات', en: 'Labels & Stickers' },
    { ar: 'خدمات ما بعد الطباعة', en: 'Post-Printing Finishing' },
  ];

  const quickLinks = [
    { key: 'home', path: '/' },
    { key: 'about', path: '/about' },
    { key: 'services', path: '/services' },
    { key: 'industries', path: '/industries' },
    { key: 'portfolio', path: '/portfolio' },
    { key: 'contact', path: '/contact' },
  ] as const;

  return (
    <footer className="bg-[#0a0a0a] text-white">
      {/* Main Footer */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block mb-5">
              <img src="/PENGO_FINAL-01.png" alt="Pengo Pack" className="h-14 w-auto object-contain" />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              {t({ ar: 'نقدم حلولاً متكاملة للطباعة والتغليف وتصنيع الكرتون بأعلى معايير الجودة في مصر.', en: 'Providing comprehensive printing, packaging, and carton manufacturing solutions to the highest quality standards in Egypt.' })}
            </p>
            <div className="flex gap-3">
              {[
                { icon: FaFacebookF, href: '#', label: 'Facebook' },
                { icon: FaInstagram, href: '#', label: 'Instagram' },
                { icon: FaLinkedinIn, href: '#', label: 'LinkedIn' },
                { icon: FaYoutube, href: '#', label: 'YouTube' },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-lg bg-white/5 hover:bg-[#F7931E] flex items-center justify-center transition-all duration-200 hover:-translate-y-1"
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-sm uppercase tracking-wider text-[#F7931E] mb-5">
              {t(footer.quickLinks)}
            </h3>
            <ul className="space-y-3">
              {quickLinks.map(({ key, path }) => (
                <li key={key}>
                  <Link
                    to={path}
                    className="text-gray-400 hover:text-[#F7931E] text-sm transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-[#F7931E] opacity-0 group-hover:opacity-100 transition-opacity" />
                    {t(nav[key as keyof typeof nav] as { ar: string; en: string })}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-sm uppercase tracking-wider text-[#F7931E] mb-5">
              {t(footer.servicesTitle)}
            </h3>
            <ul className="space-y-3">
              {serviceLinks.map((svc, i) => (
                <li key={i}>
                  <Link
                    to="/services"
                    className="text-gray-400 hover:text-[#F7931E] text-sm transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-[#F7931E] opacity-0 group-hover:opacity-100 transition-opacity" />
                    {t(svc)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact + Newsletter */}
          <div>
            <h3 className="font-bold text-sm uppercase tracking-wider text-[#F7931E] mb-5">
              {t(footer.contactTitle)}
            </h3>
            <ul className="space-y-4 mb-6">
              <li>
                <a href="tel:+201014500077" className="flex items-start gap-3 text-sm text-gray-400 hover:text-white transition-colors group">
                  <FaPhone size={14} className="mt-0.5 text-[#F7931E] flex-shrink-0" />
                  <span dir="ltr">+20 10 14500077</span>
                </a>
              </li>
              <li>
                <a href="https://wa.me/201014500077" target="_blank" rel="noreferrer" className="flex items-start gap-3 text-sm text-gray-400 hover:text-white transition-colors group">
                  <FaWhatsapp size={14} className="mt-0.5 text-[#F7931E] flex-shrink-0" />
                  <span dir="ltr">+20 10 14500077</span>
                </a>
              </li>
              <li>
                <a href="mailto:support@pengopack.com" className="flex items-start gap-3 text-sm text-gray-400 hover:text-white transition-colors group">
                  <FaEnvelope size={14} className="mt-0.5 text-[#F7931E] flex-shrink-0" />
                  <span>support@pengopack.com</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-sm text-gray-400">
                  <FaMapMarkerAlt size={14} className="mt-0.5 text-[#F7931E] flex-shrink-0" />
                  <span>{t(contact.info.addressValue)}</span>
                </div>
              </li>
            </ul>

            {/* Newsletter */}
            <div>
              <p className="text-xs font-semibold text-gray-300 mb-3">{t(footer.newsletter)}</p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder={t(footer.newsletterPlaceholder)}
                  className="flex-1 bg-white/5 border border-white/10 text-white placeholder-gray-500 text-xs px-3 py-2.5 rounded-lg focus:outline-none focus:border-[#F7931E] transition-colors"
                />
                <button className="bg-[#F7931E] hover:bg-[#d97a0f] text-white text-xs font-semibold px-4 py-2.5 rounded-lg transition-colors flex-shrink-0">
                  {t(footer.newsletterBtn)}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5">
        <div className="container-custom py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-gray-500 text-xs">{t(footer.copyright)}</p>
          <p className="text-gray-600 text-xs flex items-center gap-1">
            {t(footer.madeWith)}
            <span className="text-[#F7931E]">♥</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
