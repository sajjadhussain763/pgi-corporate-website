'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './AboutUs.module.css';

const STATS = [
  { number: 25, suffix: '+', label: 'Years of Legacy' },
  { number: 3000, suffix: '+', label: 'Empowered Staff' },
  { number: 150, suffix: '+', label: 'Partner Institutions' },
  { number: 45, suffix: '', label: 'Countries Reached' },
];

function AnimatedCounter({ target, suffix }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let start = 0;
          const step = Math.max(1, Math.floor(target / 60));
          const timer = setInterval(() => {
            start += step;
            if (start >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(start);
            }
          }, 25);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={ref} className={styles.statNumber}>
      {count.toLocaleString()}{suffix}
    </span>
  );
}

export default function AboutUs() {
  return (
    <section className={`section ${styles.about}`} id="about">
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.content}>
            <span className="section-label">About PG Training</span>
            <h2 className="section-title">
              A Quarter-Century Legacy of <span className="text-gradient">Academic Excellence</span>
            </h2>
            <p className={styles.description}>
              For over 25 years, PG Training has been at the forefront of professional development
              in Higher Education. We have empowered more than 3,000 academic and administrative
              staff worldwide, equipping them with the skills to drive institutional transformation
              and achieve global competence.
            </p>
            <p className={styles.description}>
              Our evidence-based methodologies, combined with real-world application frameworks,
              ensure that every participant gains actionable insights that translate directly
              into measurable outcomes within their institutions.
            </p>
            <div className={styles.highlights}>
              <div className={styles.highlight}>
                <span className={styles.highlightIcon}>🎓</span>
                <div>
                  <strong>PhD Candidates</strong>
                  <span>Research methodology support</span>
                </div>
              </div>
              <div className={styles.highlight}>
                <span className={styles.highlightIcon}>📊</span>
                <div>
                  <strong>Heads of Department</strong>
                  <span>Strategic leadership programmes</span>
                </div>
              </div>
              <div className={styles.highlight}>
                <span className={styles.highlightIcon}>🌐</span>
                <div>
                  <strong>Early-Career Academics</strong>
                  <span>Career acceleration pathways</span>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.statsGrid}>
            {STATS.map((stat) => (
              <div key={stat.label} className={styles.statCard}>
                <AnimatedCounter target={stat.number} suffix={stat.suffix} />
                <span className={styles.statLabel}>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
