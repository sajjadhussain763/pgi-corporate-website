'use client';

import { useCart } from '../context/CartContext';
import styles from './SpecialOffers.module.css';

const OFFERS = [
  {
    id: 'mothers-day-bundle',
    emoji: '💐',
    title: "Mother's Day Special",
    subtitle: 'Gift the power of education',
    description: 'Treat a special educator to a transformative learning experience. Our Mother\'s Day bundle includes a 4-week programme with complimentary study materials and a personalised certificate.',
    price: 249,
    originalPrice: 299,
    tag: 'Save £50',
    color: '#EC4899',
  },
  {
    id: 'fathers-day-bundle',
    emoji: '👔',
    title: "Father's Day Special",
    subtitle: 'Invest in leadership growth',
    description: 'Celebrate with the gift of professional advancement. Includes our Administrative Excellence module with bonus strategic planning workshop access.',
    price: 279,
    originalPrice: 349,
    tag: 'Save £70',
    color: '#3B82F6',
  },
  {
    id: 'combo-bundle',
    emoji: '🎯',
    title: 'Bundle & Combo Offer',
    subtitle: 'Maximum value package',
    description: 'Combine any two programmes and receive 20% off the total. Perfect for institutions enrolling multiple staff members or individuals seeking a comprehensive skill upgrade.',
    price: 679,
    originalPrice: 848,
    tag: '20% Off',
    color: '#D4A843',
  },
];

export default function SpecialOffers() {
  const { dispatch } = useCart();

  const addOffer = (offer) => {
    dispatch({
      type: 'ADD_ITEM',
      payload: { id: offer.id, name: offer.title, price: offer.price },
    });
    dispatch({ type: 'SET_OPEN', payload: true });
  };

  return (
    <section className={`section ${styles.offers}`}>
      <div className="container">
        <div className={styles.header}>
          <span className="section-label">Special Offers</span>
          <h2 className="section-title">Celebration & <span className="text-gradient">Bundle Deals</span></h2>
          <p className="section-subtitle">
            Limited-time offers designed to maximise value for individuals and institutions alike.
          </p>
        </div>

        <div className={styles.grid}>
          {OFFERS.map((offer) => (
            <div key={offer.id} className={styles.card}>
              <div className={styles.ribbon} style={{ background: offer.color }}>{offer.tag}</div>
              <div className={styles.emoji}>{offer.emoji}</div>
              <h3 className={styles.title}>{offer.title}</h3>
              <p className={styles.subtitle}>{offer.subtitle}</p>
              <p className={styles.desc}>{offer.description}</p>
              <div className={styles.pricing}>
                <span className={styles.oldPrice}>£{offer.originalPrice}</span>
                <span className={styles.newPrice} style={{ color: offer.color }}>£{offer.price}</span>
              </div>
              <button
                className="btn btn-primary btn-sm"
                onClick={() => addOffer(offer)}
              >
                Add to Order
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
