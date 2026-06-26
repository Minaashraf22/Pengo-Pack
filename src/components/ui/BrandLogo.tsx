import { Link } from 'react-router-dom';
import { useTheme } from '../../contexts/ThemeContext';

interface BrandLogoProps {
  compact?: boolean;
  className?: string;
  href?: string;
}

export default function BrandLogo({
  compact = false,
  className = '',
  href = '/',
}: BrandLogoProps) {
  const { isDark } = useTheme();

  return (
    <Link
      to={href}
      aria-label="Pengo Pack"
      className={`inline-flex items-center shrink-0 ${className}`}
    >
      <div className={`group flex items-center ${compact ? 'gap-3' : 'gap-4'}`}>
        {/* =========================
            LOGO MARK
           ========================= */}
        <div
          className={[
            'relative shrink-0 overflow-hidden rounded-2xl transition-all duration-300',
            compact ? 'h-11 w-11' : 'h-14 w-14',
            isDark
              ? 'border border-white/10 bg-[#0B0B0B] shadow-[0_14px_34px_rgba(0,0,0,0.34)]'
              : 'border border-black/8 bg-black shadow-[0_12px_28px_rgba(0,0,0,0.10)]',
          ].join(' ')}
        >
          {/* soft industrial glow */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_28%_22%,rgba(247,147,30,0.16),transparent_42%)]" />

          {/* inner frame */}
          <div className="absolute inset-[1px] rounded-[15px] overflow-hidden bg-[#0B0B0B]">

            <div className="flex h-full w-full items-center justify-center">
              <img
                src="/PENGO_FINAL-01.png"
                alt="Pengo Pack logo"
                className={[
                  'object-contain transition-transform duration-300 group-hover:scale-[1.03]',
                  compact ? 'h-[82%] w-[82%]' : 'h-[84%] w-[84%]',
                ].join(' ')}
              />
            </div>
          </div>
        </div>

        {/* =========================
            WORDMARK
            مهم جدًا:
            نجبر السطر ده يكون LTR
            علشان PACK تفضل على يمين PENGO
           ========================= */}
        <div className="flex flex-col leading-none select-none">
          <div dir="ltr" className="flex items-end gap-2.5">
            <span
              className={[
                'font-black uppercase tracking-[-0.05em]',
                compact ? 'text-[1.36rem]' : 'text-[1.72rem]',
                isDark ? 'text-white' : 'text-[#111111]',
              ].join(' ')}
            >
              PENGO
            </span>

            <span
              className={[
                'font-black uppercase text-[#F7931E] tracking-[-0.045em]',
                compact ? 'text-[0.96rem] mb-[2px]' : 'text-[1.08rem] mb-[3px]',
              ].join(' ')}
            >
              PACK
            </span>
          </div>

          {!compact && (
            <div
              dir="ltr"
              className={[
                'mt-1.5 uppercase tracking-[0.24em]',
                'text-[10px]',
                isDark ? 'text-white/42' : 'text-black/45',
              ].join(' ')}
            >
              Packaging & Printing Solutions
            </div>
          )}
        </div>
      </div>
    </Link>
  );
}