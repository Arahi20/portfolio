import styles from './ExperienceTab.module.css';
import { EXPERIENCE_DATA } from '../../data/experience';

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
    </div>
  );
}
