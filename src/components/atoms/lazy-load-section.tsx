import React, { useEffect, useRef, useState } from "react";

interface LazyLoadSectionProps {
  children: React.ReactNode;
  offset?: string;
  delay?: number;
  threshold?: number;
  duration?: string;
  transform?: string;
}

const LazyLoadSection: React.FC<LazyLoadSectionProps> = ({
  children,
  offset = "translate-y-6 opacity-0",
  delay = 0,
  threshold = 0.15,
  duration = "duration-1000",
  transform = "",
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const currentRef = ref.current;

    if (!currentRef) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          // Use double RAF for ultra-smooth timing
          requestAnimationFrame(() => {
            requestAnimationFrame(() => {
              if (delay > 0) {
                setTimeout(() => {
                  setIsVisible(true);
                  setHasAnimated(true);
                }, delay);
              } else {
                setIsVisible(true);
                setHasAnimated(true);
              }
            });
          });
          observer.disconnect();
        }
      },
      {
        root: null,
        rootMargin: "0px 0px -5% 0px", // Start animation when 5% before entering
        threshold,
      },
    );

    observer.observe(currentRef);

    // eslint-disable-next-line consistent-return
    return () => {
      observer.disconnect();
    };
  }, [delay, threshold, hasAnimated]);

  return (
    <div
      ref={ref}
      className={`
        transition-all 
        ${duration} 
        transform-gpu 
        will-change-transform 
        ${
          isVisible
            ? `translate-x-0 translate-y-0 scale-100 opacity-100 ${transform}`
            : offset
        }
      `}
      style={{
        // Ultra-smooth cubic bezier curves
        transitionTimingFunction: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
        // Ensure hardware acceleration
        backfaceVisibility: "hidden",
        perspective: "1000px",
        // Optimize for compositing
        transform: "translateZ(0)",
      }}
    >
      {children}
    </div>
  );
};

export default LazyLoadSection;
