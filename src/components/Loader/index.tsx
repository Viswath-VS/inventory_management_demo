import React from 'react';
import styles from './Loading.module.scss';

/**
 * A loading component with a spinner and text.
 */
const Loading: React.FC = () => {
  return (
    <div className={styles.loadingContainer}>
      <div className={styles.spinner}></div>
      <p className={styles.loadingText}>Loading...</p>
    </div>
  );
};

export default React.memo(Loading);
