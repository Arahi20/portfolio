import { FiArrowUpRight } from 'react-icons/fi';
import styles from './ExperienceTab.module.css';
import { EXPERIENCE_DATA } from '../../data/experience';
import { INTRO_DATA } from '../../data/intro';

export default function ExperienceTab() {
  return (
    <div className={styles.container}>
      {EXPERIENCE_DATA.map((job) => (
        <div key={job.id} className={styles.item}>
          <div className={styles.header}>
            <h3 className={styles.title}>
              {job.role}, {job.company}
            </h3>
            <span className={styles.date}>{job.date}</span>
          </div>
          <ul className={styles.list}>
            {job.bullets.map((bullet, index) => (
              <li key={index}>{bullet}</li>
            ))}
          </ul>
        </div>
      ))}

      <div className={styles.cvFooter}>
        <a
          href={INTRO_DATA.cvUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.cvLink}
        >
          <span>View Full CV</span>
          <FiArrowUpRight className={styles.cvIcon} aria-hidden="true" />
        </a>
      </div>
    </div>
  );
}
