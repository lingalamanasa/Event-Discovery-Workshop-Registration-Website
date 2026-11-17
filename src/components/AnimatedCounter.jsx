import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const AnimatedCounter = ({ end, prefix = '', suffix = '', duration = 2, decimals = 0, className = '' }) => {
  const [val, setVal] = useState(0);
  const counterRef = useRef(null);

  useEffect(() => {
    const el = counterRef.current;
    if (!el) return;

    const obj = { count: 0 };

    ScrollTrigger.create({
      trigger: el,
      start: 'top 88%',
      once: true,
      onEnter: () => {
        gsap.to(obj, {
          count: end,
          duration: duration,
          ease: 'power2.out',
          onUpdate: () => {
            setVal(decimals ? obj.count.toFixed(decimals) : Math.floor(obj.count));
          }
        });
      }
    });
  }, [end, duration, decimals]);

  return (
    <span ref={counterRef} className={`animated-counter ${className}`}>
      {prefix}{val.toLocaleString()}{suffix}
    </span>
  );
};

export default AnimatedCounter;

