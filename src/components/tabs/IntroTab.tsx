import { FiArrowUpRight, FiLinkedin, FiMail } from 'react-icons/fi';
import styles from './IntroTab.module.css';
import { INTRO_DATA } from '../../data/intro';
import ProfilePicture from '../ProfilePicture';

export default function IntroTab() {
  return (
    <div className={styles.introWrapper}>
      <ProfilePicture />
      <div>
        <p className={styles.paragraph}>
          {INTRO_DATA.paragraph1} <span className={styles.highlight}>{INTRO_DATA.highlight}</span>.
        </p>
        <p className={styles.paragraphSmall}>{INTRO_DATA.paragraph2}</p>

        <div className={styles.linksContainer}>
          {INTRO_DATA.links.map((link) => (
            <a
              key={link.label}
              href={link.url}
              target={link.url.startsWith('http') ? '_blank' : undefined}
              rel={link.url.startsWith('http') ? 'noopener noreferrer' : undefined}
              className={styles.link}
            >
              {link.icon === 'linkedin' && <FiLinkedin />}
              {link.icon === 'mail' && <FiMail />}
              {link.icon === 'arrow-up-right' && <FiArrowUpRight />}
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
