import styles from './ProfilePicture.module.css';

export default function ProfilePicture() {
  return (
    <div className={styles.imageContainer}>
      <img src="/assets/profile.jpg" alt="Ahmed Rahi" className={styles.image} />
    </div>
  );
}
