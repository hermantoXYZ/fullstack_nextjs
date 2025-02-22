import Link from 'next/link';
import styles from '@/styles/Error.module.css';

export default function Custom404() {
  return (
    <div className={styles.errorContainer}>
      <h1 className={styles.errorTitle}>404</h1>
      <h2 className={styles.errorSubtitle}>Page Not Found</h2>
      <p className={styles.errorText}>
        The page you are looking for might have been removed or is temporarily unavailable.
      </p>
      <Link href="/" className={styles.errorButton}>
        Back to Home
      </Link>
    </div>
  );
}