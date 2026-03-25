'use client';

import { useState } from 'react';
import styles from './ScheduleCalendar.module.css';

const SCHEDULE_DATA = [
  {
    id: 'cpd-aw',
    code: 'CPD_AW',
    name: 'Academic Writing Mastery',
    start: '21st Oct 2024',
    duration: '6 Weeks',
    sessions: [
      { date: 'Oct 21', topic: 'Fundamentals of Academic Discourse', time: '10:00 - 12:00 GMT' },
      { date: 'Oct 28', topic: 'Structuring Research Papers', time: '10:00 - 12:00 GMT' },
      { date: 'Nov 04', topic: 'Advanced Citation & Ethics', time: '10:00 - 12:00 GMT' },
      { date: 'Nov 11', topic: 'Peer Review & Feedback Loops', time: '10:00 - 12:00 GMT' },
    ],
    link: '#programmes'
  },
  {
    id: 'cpd-sc',
    code: 'CPD_SC',
    name: 'Strategic Communications',
    start: '4th Nov 2024',
    duration: '4 Weeks',
    sessions: [
      { date: 'Nov 04', topic: 'Institutional Brand Alignment', time: '14:00 - 16:00 GMT' },
      { date: 'Nov 11', topic: 'Crisis Management & PR', time: '14:00 - 16:00 GMT' },
      { date: 'Nov 18', topic: 'Internal Stakeholder Engagement', time: '14:00 - 16:00 GMT' },
    ],
    link: '#programmes'
  },
  {
    id: 'cpd-he',
    code: 'CPD_HE',
    name: 'HE Administration Excellence',
    start: '18th Nov 2024',
    duration: '8 Weeks',
    sessions: [
      { date: 'Nov 18', topic: 'Governance Frameworks', time: '09:00 - 11:00 GMT' },
      { date: 'Nov 25', topic: 'Digital Transformation in HE', time: '09:00 - 11:00 GMT' },
      { date: 'Dec 02', topic: 'Student Lifecycle Management', time: '09:00 - 11:00 GMT' },
    ],
    link: '#programmes'
  }
];

export default function ScheduleCalendar() {
  const [expanded, setExpanded] = useState(null);

  const toggle = (id) => {
    setExpanded(expanded === id ? null : id);
  };

  return (
    <section className={`section ${styles.schedule}`} id="schedule">
      <div className="container">
        <div className={styles.header}>
          <span className="section-label">Interactive Schedule</span>
          <h2 className="section-title">Website <span className="text-gradient">Training Calendar</span></h2>
          <p className="section-subtitle">
            Stay ahead with our strategically timed professional development sessions. 
            Click on a course to view its detailed session timetable.
          </p>
        </div>

        <div className={styles.calendarList}>
          {SCHEDULE_DATA.map((item) => (
            <div key={item.id} className={`${styles.courseItem} ${expanded === item.id ? styles.active : ''}`}>
              <div className={styles.summary} onClick={() => toggle(item.id)}>
                <div className={styles.courseMain}>
                  <span className={styles.code}>{item.code}</span>
                  <div>
                    <h3 className={styles.courseName}>{item.name}</h3>
                    <p className={styles.meta}>Starts: {item.start} • {item.duration}</p>
                  </div>
                </div>
                <div className={styles.summaryActions}>
                  <a href={item.link} className={styles.detailsBtn} onClick={(e) => e.stopPropagation()}>
                    Details
                  </a>
                  <span className={styles.chevron}>
                    {expanded === item.id ? '−' : '+'}
                  </span>
                </div>
              </div>

              {expanded === item.id && (
                <div className={styles.timetable}>
                  <div className={styles.timetableHeader}>
                    <span>Session Date</span>
                    <span>Focus / Topic</span>
                    <span>Time</span>
                  </div>
                  {item.sessions.map((session, idx) => (
                    <div key={idx} className={styles.sessionRow}>
                      <span className={styles.date}>{session.date}</span>
                      <span className={styles.topic}>{session.topic}</span>
                      <span className={styles.time}>{session.time}</span>
                    </div>
                  ))}
                  <div className={styles.ctaRow}>
                    <p>Ready to join this cohort?</p>
                    <a href="#packages" className="btn btn-primary btn-sm">Enrol in Programme</a>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
