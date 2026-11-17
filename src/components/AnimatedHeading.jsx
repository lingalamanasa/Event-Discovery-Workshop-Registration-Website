import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const AnimatedHeading = ({
  text,
  tag = 'h2',
  className = '',
  delay = 0,
  stagger = 0.04,
  scrollTrigger = true,
  children
}) => {
  const containerRef = useRef(null);
  const Tag = tag;

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const words = el.querySelectorAll('.animated-word-inner');
    if (!words.length) return;

    gsap.set(words, {
      y: '115%',
      opacity: 0,
      rotateX: -25
    });

    const animConfig = {
      y: '0%',
      opacity: 1,
      rotateX: 0,
      duration: 0.85,
      stagger: stagger,
      delay: delay,
      ease: 'power3.out'
    };

    if (scrollTrigger) {
      ScrollTrigger.create({
        trigger: el,
        start: 'top 85%',
        once: true,
        onEnter: () => {
          gsap.to(words, animConfig);
        }
      });
    } else {
      gsap.to(words, animConfig);
    }
  }, [text, delay, stagger, scrollTrigger]);

  const rawText = text || (typeof children === 'string' ? children : '');
  const wordsArray = rawText.split(' ');

  return (
    <Tag
      ref={containerRef}
      className={`animated-heading-container ${className}`}
      style={{ perspective: '800px' }}
    >
      {wordsArray.map((word, index) => (
        <span
          key={index}
          className="animated-word-wrap"
          style={{
            display: 'inline-block',
            overflow: 'hidden',
            marginRight: '0.28em',
            verticalAlign: 'top'
          }}
        >
          <span
            className="animated-word-inner"
            style={{
              display: 'inline-block',
              transformOrigin: 'bottom center'
            }}
          >
            {word}
          </span>
        </span>
      ))}
    </Tag>
  );
};

export default AnimatedHeading;

