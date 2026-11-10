import styles from './CtaButton.module.css';

interface CtaButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  target?: string;
  rel?: string;
}

export default function CtaButton({
  href,
  children,
  variant = 'primary',
  target,
  rel,
}: CtaButtonProps) {
  const variantClass = variant === 'secondary' ? styles.secondary : styles.primary;

  return (
    <a href={href} target={target} rel={rel} className={`${styles.ctaButton} ${variantClass}`}>
      {children}
    </a>
  );
}
