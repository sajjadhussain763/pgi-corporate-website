'use client';

import { useState } from 'react';
import styles from './LeadGenForm.module.css';

export default function LeadGenForm() {
  const [status, setStatus] = useState('idle'); // idle, submitting, success, error

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('submitting');
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      e.target.reset();
    }, 1500);
  };

  return (
    <section className={`section ${styles.contact}`} id="contact">
      <div className="container">
        <div className={styles.wrapper}>
          <div className={styles.info}>
            <span className="section-label">Contact Us</span>
            <h2 className="section-title">Ready to <span className="text-gradient">Take the Lead?</span></h2>
            <p className={styles.desc}>
              Join a community of forward-thinking academics and administrators. 
              Fill out the form to request a consultation or detailed programme syllabus.
            </p>
            
            <div className={styles.contactDetails}>
              <div className={styles.detailItem}>
                <span className={styles.icon}>📍</span>
                <div>
                  <strong>Headquarters</strong>
                  <p>Global Education Hub, London / Malta</p>
                </div>
              </div>
              <div className={styles.detailItem}>
                <span className={styles.icon}>📧</span>
                <div>
                  <strong>Email Us</strong>
                  <p>info@pgtraining.example</p>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.formCard}>
            {status === 'success' ? (
              <div className={styles.successMsg}>
                <div className={styles.successIcon}>✓</div>
                <h3>Message Sent!</h3>
                <p>Thank you for reaching out. Our academic advisor will contact you within 24 hours.</p>
                <button className="btn btn-primary" onClick={() => setStatus('idle')}>Send Another</button>
              </div>
            ) : (
              <form className={styles.form} onSubmit={handleSubmit}>
                <div className={styles.row}>
                  <div className={styles.group}>
                    <label>Full Name</label>
                    <input type="text" placeholder="John Doe" required />
                  </div>
                  <div className={styles.group}>
                    <label>Work Email</label>
                    <input type="email" placeholder="john@university.edu" required />
                  </div>
                </div>
                <div className={styles.group}>
                  <label>Programme of Interest</label>
                  <select required>
                    <option value="">Select a Programme</option>
                    <option value="academic">Academic Excellence</option>
                    <option value="admin">Administrative Excellence</option>
                    <option value="english">English Language Programmes</option>
                    <option value="malta">Premium Malta Experience</option>
                  </select>
                </div>
                <div className={styles.group}>
                  <label>Your Message</label>
                  <textarea rows="4" placeholder="How can we help you achieve your goals?"></textarea>
                </div>
                <button type="submit" className={`btn btn-primary ${styles.submitBtn}`} disabled={status === 'submitting'}>
                  {status === 'submitting' ? 'Processing...' : 'Request Consultation'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
