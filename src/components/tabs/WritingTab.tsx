import { FiArrowUpRight } from 'react-icons/fi';
import styles from './WritingTab.module.css';
import { WRITING_DATA } from '../../data/writing';

export default function WritingTab() {
  return (
    <div className={styles.container}>
      {WRITING_DATA.map((article) => (
        <a
          key={article.id}
          href={article.link}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.item}
        >
          {article.date && (
            <div className={styles.meta}>
              <span>{article.date}</span>
              <span className={styles.dot}>·</span>
              <span>{article.readTime}</span>
            </div>
          )}
          <div className={styles.titleLink}>
            <h3 className={styles.title}>
              {article.title} <FiArrowUpRight className={styles.icon} />
            </h3>
          </div>
          <p className={styles.description}>{article.description}</p>
        </a>
      ))}
    </div>
  );
}
