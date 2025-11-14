import { ReactNode } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface ScrollAnimationProps {
  children: ReactNode;
  className?: string;
  animationType?: 'fade-in' | 'fade-up' | 'fade-left' | 'fade-right' | 'scale';
  delay?: 0 | 1 | 2 | 3 | 4 | 5;
  threshold?: number;
}

export default function ScrollAnimation({
  children,
  className = '',
  animationType = 'fade-up',
  delay = 0,
  threshold = 0.1,
}: ScrollAnimationProps) {
  const { ref, isVisible } = useScrollAnimation({ threshold, triggerOnce: true });

  const animationClass = `scroll-${animationType}`;
  const delayClass = delay > 0 ? `scroll-delay-${delay}` : '';
  const visibleClass = isVisible ? 'visible' : '';

  return (
    <div
      ref={ref}
      className={`${animationClass} ${delayClass} ${visibleClass} ${className}`}
    >
      {children}
    </div>
  );
}

