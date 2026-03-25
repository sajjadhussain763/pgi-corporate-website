'use client';

import styles from './Programmes.module.css';

const PROGRAMMES = [
  {
    icon: '🎓',
    title: 'Academic Excellence',
    description: 'Master the Art of Effective Teaching and Research. Our programmes empower educators with cutting-edge pedagogical techniques, research methodologies, and publication strategies.',
    features: ['Research Methodology', 'Curriculum Design', 'Publication Coaching', 'Peer Review Training'],
    color: '#3B82F6',
  },
  {
    icon: '📋',
    title: 'Administrative Excellence',
    description: 'Navigate the Complexities of Higher Education Administration. From governance frameworks to strategic planning, build the competencies that drive institutional success.',
    features: ['Governance & Compliance', 'Strategic Planning', 'Quality Assurance', 'Financial Management'],
    color: '#E8553D',
  },
  {
    icon: '🌍',
    title: 'English Language Programmes',
    description: 'A Linguistic Immersive Experience available every Monday. Whether for academic, professional, or personal growth — elevate your English to a global standard.',
    features: ['Available Every Monday', 'IELTS & TOEFL Prep', 'Academic Writing', 'Business English'],
    color: '#D4A843',
  },
];

export default function Programmes() {
  return (
    <section className={`section ${styles.programmes}`} id="programmes">
      <div className="container">
        <div className={styles.header}>
          <span className="section-label">Our Programmes</span>
          <h2 className="section-title">Three Paths to <span className="text-gradient">Professional Growth</span></h2>
          <p className="section-subtitle">
            Tailored development pathways designed for every role in Higher Education — from PhD candidates to Heads of Department.
          </p>
        </div>

        <div className={styles.grid}>
          {PROGRAMMES.map((prog) => (
            <div key={prog.title} className={styles.card}>
              <div className={styles.cardIcon} style={{ background: `${prog.color}15`, color: prog.color }}>
                <span>{prog.icon}</span>
              </div>
              <h3 className={styles.cardTitle}>{prog.title}</h3>
              <p className={styles.cardDesc}>{prog.description}</p>
              <ul className={styles.features}>
                {prog.features.map(f => (
                  <li key={f} className={styles.feature}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={prog.color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"/></svg>
                    {f}
                  </li>
                ))}
              </ul>
              <a href="#packages" className={styles.cardLink} style={{ color: prog.color }}>
                View Packages →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
