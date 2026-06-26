import { motion } from 'framer-motion';
import { useTheme } from '../../contexts/ThemeContext';

interface Props {
  title: string;
  subtitle?: string;
  center?: boolean;
  light?: boolean;
}

export default function SectionHeader({ title, subtitle, center = true, light = false }: Props) {
  const { isDark } = useTheme();

  return (
    <motion.div
      className={`mb-14 ${center ? 'text-center' : ''}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6 }}
    >
      <h2
        className={`text-4xl md:text-5xl font-bold mb-4 ${
          light ? 'text-white' : isDark ? 'text-white' : 'text-[#0a0a0a]'
        }`}
      >
        {title}
      </h2>
      <div className={`w-16 h-1 bg-[#F7931E] rounded-full mb-5 ${center ? 'mx-auto' : ''}`} />
      {subtitle && (
        <p
          className={`text-lg leading-relaxed max-w-2xl ${
            light ? 'text-gray-300' : isDark ? 'text-gray-400' : 'text-gray-500'
          } ${center ? 'mx-auto' : ''}`}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
