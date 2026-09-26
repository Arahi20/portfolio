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
          <h3 className={styles.title}>
            {article.title} <FiArrowUpRight className={styles.icon} />
          </h3>
          <p className={styles.description}>{article.description}</p>
        </a>
      ))}
    </div>
  );
}
