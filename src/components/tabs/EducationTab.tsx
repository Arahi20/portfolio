import styles from './EducationTab.module.css';
import { DEGREES, CERTIFICATIONS } from '../../data/education';

export default function EducationTab() {
  return (
    <div>
      <h2 className={styles.sectionTitle}>Degrees</h2>
      <div className={styles.timelineContainer}>
        {DEGREES.map((degree, index) => (
          <div
            key={degree.id}
            className={index === DEGREES.length - 1 ? styles.timelineItemLast : styles.timelineItem}
          >
            <div className={styles.timelineDot}></div>
            <div className={styles.degreeHeader}>
              <span className={styles.degreeTitle}>{degree.title}</span>
              <span className={styles.degreeYear}>{degree.year}</span>
            </div>
            <p className={styles.university}>{degree.university}</p>
          </div>
        ))}
      </div>

      <h2 className={styles.sectionTitle}>Certifications</h2>
      <ul className={styles.certList}>
        {CERTIFICATIONS.map((cert) => (
          <li key={cert.id} className={styles.certItem}>
            <span className={styles.certDash}>—</span>
            <span className={styles.certTitle}>{cert.title}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
