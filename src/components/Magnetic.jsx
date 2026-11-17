import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

const Magnetic = ({ children, strength = 0.35, className = '', ...props }) => {
  const magneticRef = useRef(null);

  useEffect(() => {
    const el = magneticRef.current;
    if (!el) return;

    // Disable magnetic pull on touch devices and small viewports
    if (window.matchMedia('(pointer: coarse), (max-width: 1024px)').matches) return;

    const handleMouseMove = (e) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - (rect.left + rect.width / 2);
      const y = e.clientY - (rect.top + rect.height / 2);

      gsap.to(el, {
        x: x * strength,
        y: y * strength,
        rotate: (x * strength) * 0.08,
        duration: 0.4,
        ease: 'power2.out'
      });
    };

    const handleMouseLeave = () => {
      gsap.to(el, {
        x: 0,
        y: 0,
        rotate: 0,
        duration: 0.7,
        ease: 'elastic.out(1.2, 0.4)'
      });
    };

    el.addEventListener('mousemove', handleMouseMove);
    el.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      el.removeEventListener('mousemove', handleMouseMove);
      el.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [strength]);

  return (
    <div
      ref={magneticRef}
      className={`magnetic-wrap ${className}`}
      style={{ display: 'inline-block' }}
      {...props}
    >
      {children}
    </div>
  );
};

export default Magnetic;

