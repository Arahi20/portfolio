import styles from './CtaButton.module.css';

interface CtaButtonProps {
  href: string;
  children: React.ReactNode;
}

export default function CtaButton({ href, children }: CtaButtonProps) {
  return (
    <a href={href} className={styles.ctaButton}>
      {children}
    </a>
  );
}
