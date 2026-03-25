'use client';

import styles from './Footer.module.css';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.brand}>
            <div className={styles.logo}>
              <span className={styles.logoIcon}>PG</span>
              <span className={styles.logoText}>Training</span>
            </div>
            <p className={styles.tagline}>
              Empowering the global academic community through strategic profissional development 
              and linguistic excellence for over 25 years.
            </p>
            <div className={styles.socials}>
              {['ln', 'tw', 'fb', 'ig'].map(s => (
                <a key={s} href={`#${s}`} className={styles.socialLink}>
                  {s.toUpperCase()}
                </a>
              ))}
            </div>
          </div>

          <div className={styles.linksColumn}>
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#programmes">Programmes</a></li>
              <li><a href="#packages">Pricing & Packages</a></li>
              <li><a href="#schedule">Training Schedule</a></li>
            </ul>
          </div>

          <div className={styles.linksColumn}>
            <h4>Programmes</h4>
            <ul>
              <li><a href="#programmes">Academic Excellence</a></li>
              <li><a href="#programmes">Administrative Dev</a></li>
              <li><a href="#programmes">English Language</a></li>
              <li><a href="#malta">Malta Experience</a></li>
              <li><a href="#programmes">Linguistic Immersion</a></li>
            </ul>
          </div>

          <div className={styles.linksColumn}>
            <h4>Legal</h4>
            <ul>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Service</a></li>
              <li><a href="#">Cookie Policy</a></li>
              <li><a href="#">Accreditation</a></li>
            </ul>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>&copy; {year} PG Corporate Training. All rights reserved.</p>
          <div className={styles.bottomLinks}>
            <span>Global Competence • Strategic Growth • Educational Legacy</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
