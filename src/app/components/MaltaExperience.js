'use client';

import styles from './MaltaExperience.module.css';

export default function MaltaExperience() {
  return (
    <section className={`section ${styles.malta}`} id="malta">
      <div className={styles.bg}>
        <div className={styles.overlay} />
      </div>
      <div className={`container ${styles.content}`}>
        <span className={styles.badge}>Physical Programme</span>
        <h2 className={styles.title}>
          The Malta <span className="text-gradient">Experience</span>
        </h2>
        <p className={styles.tagline}>
          Where Companies Thrive and Startups Flourish
        </p>
        <p className={styles.description}>
          Immerse yourself in the Mediterranean&apos;s most dynamic business hub. Malta — a European
          Union member state with a thriving fintech ecosystem, world-class universities, and a
          multicultural environment that attracts talent from across the globe.
        </p>
        <div className={styles.features}>
          <div className={styles.featureCard}>
            <span className={styles.featureIcon}>🏝️</span>
            <h4>Island Campus</h4>
            <p>Learn in a stunning Mediterranean setting with modern facilities and inspiring surroundings.</p>
          </div>
          <div className={styles.featureCard}>
            <span className={styles.featureIcon}>🤝</span>
            <h4>Industry Networking</h4>
            <p>Connect with local businesses, startups, and international organisations during your stay.</p>
          </div>
          <div className={styles.featureCard}>
            <span className={styles.featureIcon}>🌐</span>
            <h4>Cultural Immersion</h4>
            <p>Experience a bilingual nation where English is an official language — ideal for language growth.</p>
          </div>
          <div className={styles.featureCard}>
            <span className={styles.featureIcon}>🎓</span>
            <h4>Elite Certification</h4>
            <p>Graduate with a premium portfolio and certificate recognised by institutions worldwide.</p>
          </div>
        </div>
        <a href="#packages" className="btn btn-gold btn-lg">
          Explore the Premium Malta Package
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </a>
      </div>
    </section>
  );
}
