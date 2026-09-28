import { FiArrowUpRight } from 'react-icons/fi';
import styles from './WorkTab.module.css';
import { WORK_DATA } from '../../data/work';

export default function WorkTab() {
  return (
    <div className={styles.container}>
      {WORK_DATA.map((work) => (
        <a
          key={work.id}
          href={work.link}
          target={work.link.startsWith('http') ? '_blank' : undefined}
          rel={work.link.startsWith('http') ? 'noopener noreferrer' : undefined}
          className={styles.item}
        >
          <div className={styles.header}>
            <h3 className={styles.title}>
              {work.title} <FiArrowUpRight className={styles.icon} />
            </h3>
            <span className={styles.date}>{work.date}</span>
          </div>
          <p className={styles.description}>{work.description}</p>
          {work.video && (
            <div className={styles.videoWrapper}>
              <iframe
                src={work.video}
                title={work.title}
                className={styles.projectVideo}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          )}
          {work.image && (
            <div className={styles.imageWrapper}>
              <img src={work.image} alt={work.title} className={styles.projectImage} />
            </div>
          )}
          <p className={styles.tech}>{work.tech}</p>
        </a>
      ))}
    </div>
  );
}
