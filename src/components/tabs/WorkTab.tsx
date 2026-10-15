import { FiArrowUpRight } from 'react-icons/fi';
import styles from './WorkTab.module.css';
import { WORK_DATA } from '../../data/work';

export default function WorkTab() {
  return (
    <div className={styles.container}>
      {WORK_DATA.map((work) => (
        <article key={work.id} className={styles.item}>
          <div className={styles.header}>
            <h3 className={styles.title}>
              {work.link ? (
                <a
                  href={work.link}
                  target={work.link.startsWith('http') ? '_blank' : undefined}
                  rel={work.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className={styles.titleLink}
                >
                  {work.title} <FiArrowUpRight className={styles.icon} aria-hidden="true" />
                </a>
              ) : (
                <span className={styles.titleStatic}>{work.title}</span>
              )}
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
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          )}
          {work.image && (
            <div className={styles.imageWrapper}>
              <img
                src={work.image}
                alt={`Screenshot of ${work.title}`}
                className={styles.projectImage}
                loading="lazy"
                decoding="async"
                width={800}
                height={468}
              />
            </div>
          )}
          <p className={styles.tech}>{work.tech}</p>
        </article>
      ))}
    </div>
  );
}
