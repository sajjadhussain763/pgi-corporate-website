'use client';

import { useState, useEffect, useCallback } from 'react';
import styles from './HeroCarousel.module.css';

const SLIDES = [
  {
    tag: 'Social Inclusion',
    title: 'Empowering Communities Through Education',
    subtitle: 'Building bridges across cultures with evidence-based professional development programmes that transform institutions and uplift societies.',
    accent: '#3B82F6',
  },
  {
    tag: 'NGO & Development',
    title: 'Driving Global Competence in Higher Education',
    subtitle: 'Partnering with NGOs and development agencies to deliver capacity-building initiatives that create lasting institutional change.',
    accent: '#E8553D',
  },
  {
    tag: 'Education Excellence',
    title: 'The Linguistic Immersive Experience',
    subtitle: 'From foundational grammar to elite executive coaching — our English language programmes unlock career potential on the global stage.',
    accent: '#D4A843',
  },
];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);

  const goTo = useCallback((index) => {
    if (animating) return;
    setAnimating(true);
    setCurrent(index);
    setTimeout(() => setAnimating(false), 700);
  }, [animating]);

  useEffect(() => {
    const timer = setInterval(() => {
      goTo((current + 1) % SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [current, goTo]);

  const slide = SLIDES[current];

  return (
    <section className={styles.hero}>
      <div className={styles.bgOrbs}>
        <div className={styles.orb1} style={{ background: slide.accent }} />
        <div className={styles.orb2} />
        <div className={styles.orb3} />
      </div>

      <div className={`container ${styles.inner}`}>
        <div className={styles.content} key={current}>
          <span className={styles.tag} style={{ color: slide.accent }}>
            {slide.tag}
          </span>
          <h1 className={styles.title}>{slide.title}</h1>
          <p className={styles.subtitle}>{slide.subtitle}</p>
          <div className={styles.ctas}>
            <a href="#programmes" className="btn btn-primary btn-lg">
              Choose Your Path
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
            <a href="#about" className="btn btn-secondary btn-lg">
              Discover Our Legacy
            </a>
          </div>
        </div>

        <div className={styles.dots}>
          {SLIDES.map((_, i) => (
            <button
              key={i}
              className={`${styles.dot} ${i === current ? styles.dotActive : ''}`}
              onClick={() => goTo(i)}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>

      <div className={styles.scrollIndicator}>
        <div className={styles.scrollLine} />
      </div>
    </section>
  );
}
