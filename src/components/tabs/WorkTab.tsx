import { FiArrowUpRight } from 'react-icons/fi';
import styles from './WorkTab.module.css';
import { WORK_DATA } from '../../data/work';

export default function WorkTab() {
  return (
    <div className={styles.container}>
      {WORK_DATA.map((work) => (
        <a key={work.id} href={work.link} className={styles.item}>
          <div className={styles.header}>
            <h3 className={styles.title}>
              {work.title} <FiArrowUpRight className={styles.icon} />
            </h3>
            <span className={styles.date}>{work.date}</span>
          </div>
          <p className={styles.description}>{work.description}</p>
          <p className={styles.tech}>{work.tech}</p>
        </a>
      ))}
    </div>
  );
}
