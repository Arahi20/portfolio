import { FiArrowUpRight, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import styles from './IntroTab.module.css';
import { INTRO_DATA } from '../../data/intro';
import ProfilePicture from '../ProfilePicture';
import CtaButton from '../CtaButton';

export default function IntroTab() {
  return (
    <div className={styles.introWrapper}>
      <ProfilePicture />
      <div>
        <p className={styles.paragraph}>
          {INTRO_DATA.paragraph1}{' '}
          {INTRO_DATA.highlightUrl ? (
            <a
              href={INTRO_DATA.highlightUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.highlightLink}
            >
              {INTRO_DATA.highlight}
            </a>
          ) : (
            <span className={styles.highlight}>{INTRO_DATA.highlight}</span>
          )}
          .
        </p>
        <p className={styles.paragraphSmall}>{INTRO_DATA.paragraph2}</p>

        <div className={styles.actionContainer}>
          <CtaButton href="mailto:Ahmed_Rahi@icloud.com">Let's Talk</CtaButton>
          <div className={styles.linksContainer}>
            {INTRO_DATA.links.map((link) => (
              <a
                key={link.label}
                href={link.url}
                target={link.url.startsWith('http') ? '_blank' : undefined}
                rel={link.url.startsWith('http') ? 'noopener noreferrer' : undefined}
                className={styles.link}
              >
                {link.icon === 'github' && <FiGithub aria-hidden="true" />}
                {link.icon === 'linkedin' && <FiLinkedin aria-hidden="true" />}
                {link.icon === 'mail' && <FiMail aria-hidden="true" />}
                {link.icon === 'arrow-up-right' && <FiArrowUpRight aria-hidden="true" />}
                <span>{link.label}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
