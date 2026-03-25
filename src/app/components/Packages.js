'use client';

import { useCart } from '../context/CartContext';
import styles from './Packages.module.css';

const PACKAGES = [
  {
    id: 'basic',
    tier: 'Basic',
    name: 'Foundational Grammar',
    duration: '4 Weeks',
    price: 299,
    description: 'Build a solid grammatical foundation with our intensive 4-week programme. Ideal for non-native speakers seeking confidence in academic and professional English.',
    features: [
      '20 hours live instruction',
      'Grammar fundamentals & syntax',
      'Weekly progress assessments',
      'Digital course materials',
      'Certificate of Completion',
    ],
    color: '#3B82F6',
    popular: false,
  },
  {
    id: 'standard',
    tier: 'Standard',
    name: 'Business & Interview Prep',
    duration: '8 Weeks',
    price: 549,
    description: 'Comprehensive preparation for professional contexts — from boardroom presentations to international conference delivery and academic interviews.',
    features: [
      '40 hours live instruction',
      'Business communication skills',
      'Interview simulation workshops',
      'Presentation coaching',
      'Professional writing module',
      '1-on-1 mentoring sessions',
      'Certificate of Achievement',
    ],
    color: '#E8553D',
    popular: true,
  },
  {
    id: 'premium-malta',
    tier: 'Premium',
    name: 'Elite Immersive — Malta',
    duration: '2 Weeks',
    price: 1299,
    description: 'The ultimate linguistic immersive experience on the island of Malta. Combine intensive coaching with cultural immersion where companies thrive and startups flourish.',
    features: [
      '60 hours intensive coaching',
      'On-site Malta campus access',
      'Cultural immersion activities',
      'Executive communication skills',
      'Networking with global peers',
      'Accommodation coordination',
      'Post-programme mentoring',
      'Elite Certificate & Portfolio',
    ],
    color: '#D4A843',
    popular: false,
  },
];

export default function Packages() {
  const { dispatch } = useCart();

  const addToOrder = (pkg) => {
    dispatch({
      type: 'ADD_ITEM',
      payload: { id: pkg.id, name: `${pkg.tier}: ${pkg.name}`, price: pkg.price },
    });
    dispatch({ type: 'SET_OPEN', payload: true });
  };

  return (
    <section className={`section ${styles.packages}`} id="packages">
      <div className="container">
        <div className={styles.header}>
          <span className="section-label">Pricing</span>
          <h2 className="section-title">Three-Tier <span className="text-gradient">Training Packages</span></h2>
          <p className="section-subtitle">
            Select the programme intensity that matches your goals. Stack multiple packages for a comprehensive learning journey.
          </p>
        </div>

        <div className={styles.grid}>
          {PACKAGES.map((pkg) => (
            <div key={pkg.id} className={`${styles.card} ${pkg.popular ? styles.popular : ''}`}>
              {pkg.popular && <div className={styles.badge}>Most Popular</div>}
              <div className={styles.tierTag} style={{ color: pkg.color, borderColor: `${pkg.color}30` }}>
                {pkg.tier}
              </div>
              <h3 className={styles.name}>{pkg.name}</h3>
              <div className={styles.pricing}>
                <span className={styles.currency}>£</span>
                <span className={styles.amount}>{pkg.price.toLocaleString()}</span>
                <span className={styles.duration}>/ {pkg.duration}</span>
              </div>
              <p className={styles.desc}>{pkg.description}</p>
              <ul className={styles.features}>
                {pkg.features.map(f => (
                  <li key={f} className={styles.feature}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={pkg.color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"/></svg>
                    {f}
                  </li>
                ))}
              </ul>
              <button
                className={`btn ${pkg.popular ? 'btn-primary' : 'btn-secondary'} ${styles.addBtn}`}
                onClick={() => addToOrder(pkg)}
              >
                Add to Order
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14M5 12h14"/></svg>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
