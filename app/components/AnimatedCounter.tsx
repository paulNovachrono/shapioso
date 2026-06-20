"use client";

import { useEffect, useRef, useState } from "react";

export default function AnimatedCounter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const [display, setDisplay] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const [hasBeenInView, setHasBeenInView] = useState(false);
  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Start or restart the counter
          setDisplay(0);
          setHasBeenInView(true);

          const duration = 1500;
          const steps = 30;
          const increment = value / steps;
          let current = 0;
          let step = 0;

          if (timerRef.current) cancelAnimationFrame(timerRef.current);

          const animate = () => {
            step++;
            current = Math.min(Math.round(increment * step), value);
            setDisplay(current);
            if (current < value) {
              timerRef.current = requestAnimationFrame(animate);
            }
          };
          timerRef.current = requestAnimationFrame(animate);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => {
      observer.disconnect();
      if (timerRef.current) cancelAnimationFrame(timerRef.current);
    };
  }, [value]);

  return (
    <div ref={ref}>
      {display}{suffix}
    </div>
  );
}
