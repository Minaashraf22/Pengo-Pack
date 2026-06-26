import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { FaWhatsapp, FaTimes } from 'react-icons/fa';
import { useLang } from '../../contexts/LanguageContext';

export default function FloatingWhatsApp() {
  const [open, setOpen] = useState(false);
  const { t } = useLang();

  return (
    <div className="fixed bottom-6 left-6 z-50 flex flex-col items-start gap-3">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 10 }}
            transition={{ duration: 0.2 }}
            className="bg-white dark:bg-[#1a1a1a] rounded-2xl shadow-2xl p-5 w-72 border border-gray-100 dark:border-white/10"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-full bg-[#25D366] flex items-center justify-center flex-shrink-0">
                <FaWhatsapp size={20} className="text-white" />
              </div>
              <div>
                <p className="font-bold text-sm text-gray-900 dark:text-white">Pengo Pack</p>
                <p className="text-xs text-green-500">{t({ ar: 'متصل الآن', en: 'Online now' })}</p>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="ms-auto text-gray-400 hover:text-gray-600 dark:hover:text-white transition-colors"
              >
                <FaTimes size={14} />
              </button>
            </div>
            <div className="bg-gray-50 dark:bg-white/5 rounded-xl p-3 mb-4">
              <p className="text-sm text-gray-700 dark:text-gray-300">
                {t({
                  ar: 'مرحباً! كيف يمكننا مساعدتك؟ تواصل معنا الآن عبر واتساب.',
                  en: 'Hello! How can we help you? Chat with us on WhatsApp now.',
                })}
              </p>
            </div>
            <a
              href="https://wa.me/201014500077?text=Hello%20Pengo%20Pack%2C%20I%20would%20like%20to%20inquire%20about%20your%20services."
              target="_blank"
              rel="noreferrer"
              className="w-full bg-[#25D366] hover:bg-[#1ebe5d] text-white text-sm font-semibold py-3 rounded-xl flex items-center justify-center gap-2 transition-colors"
            >
              <FaWhatsapp size={16} />
              {t({ ar: 'ابدأ المحادثة', en: 'Start Chat' })}
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setOpen(!open)}
        className="w-14 h-14 bg-[#25D366] hover:bg-[#1ebe5d] rounded-full flex items-center justify-center shadow-lg shadow-green-500/30 hover:shadow-green-500/50 transition-all duration-300"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        animate={{ y: [0, -4, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
      >
        <FaWhatsapp size={26} className="text-white" />
      </motion.button>
    </div>
  );
}
