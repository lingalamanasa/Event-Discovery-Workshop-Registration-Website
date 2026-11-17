import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const followerRef = useRef(null);

  useEffect(() => {
    // Only show custom cursor on fine pointer desktop devices
    const isTouch = window.matchMedia('(pointer: coarse), (max-width: 1024px)').matches;
    if (isTouch) return;

    const cursor = cursorRef.current;
    const follower = followerRef.current;
    if (!cursor || !follower) return;

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let followerX = mouseX;
    let followerY = mouseY;

    const onMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      gsap.to(cursor, {
        x: mouseX,
        y: mouseY,
        duration: 0.08,
        ease: 'power2.out'
      });
    };

    // Smooth follower ticker
    const ticker = gsap.ticker.add(() => {
      followerX += (mouseX - followerX) * 0.15;
      followerY += (mouseY - followerY) * 0.15;

      gsap.set(follower, {
        x: followerX,
        y: followerY
      });
    });

    // Hover scale effects on interactive elements
    const handleMouseOver = (e) => {
      const target = e.target.closest('a, button, .category-card, .event-card, .feature-card, input, select, textarea, [role="button"]');
      if (target) {
        gsap.to(follower, {
          scale: 2.2,
          backgroundColor: 'rgba(115, 87, 232, 0.15)',
          borderColor: 'rgba(115, 87, 232, 0.5)',
          duration: 0.3,
          ease: 'power2.out'
        });
        gsap.to(cursor, {
          scale: 0.5,
          backgroundColor: '#FF796C',
          duration: 0.2
        });
      }
    };

    const handleMouseOut = (e) => {
      const target = e.target.closest('a, button, .category-card, .event-card, .feature-card, input, select, textarea, [role="button"]');
      if (target) {
        gsap.to(follower, {
          scale: 1,
          backgroundColor: 'transparent',
          borderColor: 'rgba(115, 87, 232, 0.35)',
          duration: 0.3,
          ease: 'power2.out'
        });
        gsap.to(cursor, {
          scale: 1,
          backgroundColor: '#7357E8',
          duration: 0.2
        });
      }
    };

    window.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
      gsap.ticker.remove(ticker);
    };
  }, []);

  return (
    <>
      <div
        ref={cursorRef}
        className="custom-cursor-dot"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '8px',
          height: '8px',
          backgroundColor: '#7357E8',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 99999,
          transform: 'translate(-50%, -50%)'
        }}
      />
      <div
        ref={followerRef}
        className="custom-cursor-follower"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '36px',
          height: '36px',
          border: '1.5px solid rgba(115, 87, 232, 0.4)',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 99998,
          transform: 'translate(-50%, -50%)',
          transition: 'border-color 0.2s, background-color 0.2s'
        }}
      />
    </>
  );
};

export default CustomCursor;

