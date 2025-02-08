import React from 'react';
import styles from './Error.module.scss';

export interface ErrorProps {
  message?: string;
}

const Error: React.FC<ErrorProps> = ({
  message = 'Something went wrong. Please try again later.',
}) => {
  return (
    <div className={styles.errorContainer}>
      <h2 className={styles.errorTitle}>Error</h2>
      <p className={styles.errorMessage}>{message}</p>
    </div>
  );
};

export default React.memo(Error);
