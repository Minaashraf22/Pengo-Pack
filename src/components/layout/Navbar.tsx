import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useLang } from '../../contexts/LanguageContext';
import { useTheme } from '../../contexts/ThemeContext';
import { translations } from '../../data/translations';
import { HiMenu, HiX, HiSun, HiMoon } from 'react-icons/hi';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import BrandLogo from '../ui/BrandLogo';

const navLinks = [
  { key: 'home', path: '/' },
  { key: 'about', path: '/about' },
  { key: 'services', path: '/services' },
  { key: 'industries', path: '/industries' },
  { key: 'portfolio', path: '/portfolio' },
  { key: 'partners', path: '/partners' },
  { key: 'contact', path: '/contact' },
] as const;

export default function Navbar() {
  const { lang, setLang, t, dir } = useLang();
  const { isDark, toggleTheme } = useTheme();
  const location = useLocation();

  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const nav = translations.nav;
  const isActive = (path: string) => location.pathname === path;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  const headerShell = scrolled
    ? isDark
      ? 'bg-[#090909]/88 border-white/8 shadow-[0_20px_60px_rgba(0,0,0,0.38)]'
      : 'bg-white/88 border-black/8 shadow-[0_18px_50px_rgba(0,0,0,0.10)]'
    : isDark
    ? 'bg-black/28 border-white/10 shadow-[0_16px_40px_rgba(0,0,0,0.24)]'
    : 'bg-white/60 border-black/6 shadow-[0_16px_40px_rgba(0,0,0,0.08)]';

  const navText = isDark
    ? scrolled
      ? 'text-white/78 hover:text-white'
      : 'text-white/80 hover:text-white'
    : scrolled
    ? 'text-[#242424]/78 hover:text-[#111111]'
    : 'text-[#1d1d1d]/82 hover:text-[#111111]';

  const controlClass = isDark
    ? 'border-white/10 bg-white/[0.04] text-white hover:border-[#F7931E]/40 hover:text-[#F7931E]'
    : 'border-black/8 bg-white/70 text-[#111111] hover:border-[#F7931E]/40 hover:text-[#F7931E]';

  return (
    <motion.header
      initial={{ y: -90, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.65, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50 px-3 sm:px-4 lg:px-6 pt-3"
    >
      <div className="container-custom">
        <div
          className={`navbar-shell transition-all duration-500 ${headerShell}`}
        >
          {/* Desktop / Main bar */}
          <div className="flex h-[78px] items-center justify-between gap-4 px-4 sm:px-5 lg:px-6">
            {/* Brand */}
            <div className="flex items-center flex-shrink-0">
              <BrandLogo compact className="max-[420px]:gap-2" />
            </div>

            {/* Desktop Nav */}
            <nav className="hidden xl:flex items-center gap-1.5">
              {navLinks.map(({ key, path }) => (
                <Link
                  key={key}
                  to={path}
                  className={`relative px-4 py-2.5 rounded-xl text-[14px] font-semibold transition-all duration-300 ${
                    isActive(path)
                      ? 'text-[#F7931E]'
                      : navText
                  }`}
                >
                  <span className="relative z-[1]">
                    {t(nav[key as keyof typeof nav] as { ar: string; en: string })}
                  </span>

                  {isActive(path) ? (
                    <motion.span
                      layoutId="navbar-active-pill"
                      className="absolute inset-0 rounded-xl bg-[#F7931E]/10 border border-[#F7931E]/18"
                    />
                  ) : (
                    <span className="absolute inset-0 rounded-xl bg-transparent hover:bg-white/[0.04] dark:hover:bg-white/[0.04]" />
                  )}
                </Link>
              ))}
            </nav>

            {/* Actions */}
            <div className="flex items-center gap-2 sm:gap-2.5">
              {/* Language */}
              <button
                onClick={() => setLang(lang === 'ar' ? 'en' : 'ar')}
                className={`hidden sm:flex h-11 min-w-[56px] items-center justify-center rounded-xl border px-3 text-xs font-black uppercase tracking-[0.08em] transition-all duration-300 ${controlClass}`}
                aria-label="Switch language"
              >
                {lang === 'ar' ? 'EN' : 'AR'}
              </button>

              {/* Theme */}
              <button
                onClick={toggleTheme}
                className={`hidden sm:flex h-11 w-11 items-center justify-center rounded-xl border transition-all duration-300 ${controlClass}`}
                aria-label="Toggle theme"
              >
                {isDark ? <HiSun size={18} /> : <HiMoon size={18} />}
              </button>

              {/* CTA */}
              <Link
                to="/contact"
                className="hidden md:inline-flex items-center gap-2 btn-primary-premium text-sm px-5 lg:px-6 py-3"
              >
                {t(nav.requestQuote)}
                {dir === 'rtl' ? <FaArrowLeft size={12} /> : <FaArrowRight size={12} />}
              </Link>

              {/* Mobile Menu */}
              <button
                onClick={() => setMobileOpen((v) => !v)}
                className={`xl:hidden flex h-11 w-11 items-center justify-center rounded-xl border transition-all duration-300 ${controlClass}`}
                aria-label="Toggle menu"
              >
                {mobileOpen ? <HiX size={22} /> : <HiMenu size={22} />}
              </button>
            </div>
          </div>

          {/* Mobile menu */}
          <AnimatePresence>
            {mobileOpen && (
              <motion.div
                initial={{ opacity: 0, y: -12, height: 0 }}
                animate={{ opacity: 1, y: 0, height: 'auto' }}
                exit={{ opacity: 0, y: -10, height: 0 }}
                transition={{ duration: 0.28 }}
                className={`xl:hidden overflow-hidden border-t ${
                  isDark ? 'border-white/10' : 'border-black/8'
                }`}
              >
                <div className="px-4 pb-4 pt-3">
                  <div className="grid gap-2">
                    {navLinks.map(({ key, path }) => (
                      <Link
                        key={key}
                        to={path}
                        className={`rounded-2xl px-4 py-3.5 text-sm font-semibold transition-all duration-300 ${
                          isActive(path)
                            ? 'bg-[#F7931E]/12 text-[#F7931E] border border-[#F7931E]/15'
                            : isDark
                            ? 'text-white/82 bg-white/[0.03] hover:bg-white/[0.06]'
                            : 'text-[#171717] bg-black/[0.03] hover:bg-black/[0.05]'
                        }`}
                      >
                        {t(nav[key as keyof typeof nav] as { ar: string; en: string })}
                      </Link>
                    ))}
                  </div>

                  <div className="mt-4 grid grid-cols-2 gap-2">
                    <button
                      onClick={() => setLang(lang === 'ar' ? 'en' : 'ar')}
                      className={`h-11 rounded-xl border text-sm font-bold transition-all duration-300 ${controlClass}`}
                    >
                      {lang === 'ar' ? 'English' : 'العربية'}
                    </button>

                    <button
                      onClick={toggleTheme}
                      className={`h-11 rounded-xl border text-sm font-bold transition-all duration-300 ${controlClass}`}
                    >
                      {isDark ? t(translations.common.lightMode) : t(translations.common.darkMode)}
                    </button>
                  </div>

                  <Link
                    to="/contact"
                    className="mt-3 inline-flex w-full items-center justify-center gap-2 btn-primary-premium py-3.5"
                  >
                    {t(nav.requestQuote)}
                    {dir === 'rtl' ? <FaArrowLeft size={12} /> : <FaArrowRight size={12} />}
                  </Link>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.header>
  );
}