import Link from 'next/link';
import styles from '@/styles/Error.module.css';

export default function Custom500() {
  return (
    <div className={styles.errorContainer}>
      <h1 className={styles.errorTitle}>500</h1>
      <h2 className={styles.errorSubtitle}>Server Error</h2>
      <p className={styles.errorText}>
        Oops! Something went wrong on our server. Please try again later.
      </p>
      <Link href="/" className={styles.errorButton}>
        Back to Home
      </Link>
    </div>
  );
}