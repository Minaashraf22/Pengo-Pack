import { useInView } from '../../hooks/useScrollAnimation';
import { useCounter } from '../../hooks/useCounter';

interface Props {
  target: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
}

export default function AnimatedCounter({ target, suffix = '', prefix = '', duration = 2000 }: Props) {
  const { ref, inView } = useInView(0.3);
  const count = useCounter(target, duration, inView);

  return (
    <span ref={ref}>
      {prefix}{count}{suffix}
    </span>
  );
}
