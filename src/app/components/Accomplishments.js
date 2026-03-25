'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './Accomplishments.module.css';

const STATS = [
  { number: 30000, suffix: '+', label: 'Support Given' },
  { number: 20, suffix: '+', label: 'Years of Experience' },
  { number: 500, suffix: '+', label: 'Global Workshops' },
  { number: 98, suffix: '%', label: 'Satisfaction Rate' },
];

function Counter({ target, suffix }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let start = 0;
          const duration = 2000;
          const stepTime = 30;
          const steps = duration / stepTime;
          const stepValue = target / steps;
          
          const timer = setInterval(() => {
            start += stepValue;
            if (start >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(start));
            }
          }, stepTime);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={ref} className={styles.number}>
      {count.toLocaleString()}{suffix}
    </span>
  );
}

export default function Accomplishments() {
  return (
    <section className={`section ${styles.accomplishments}`}>
      <div className="container">
        <div className={styles.grid}>
          {STATS.map((stat) => (
            <div key={stat.label} className={styles.statBox}>
              <Counter target={stat.number} suffix={stat.suffix} />
              <span className={styles.label}>{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
