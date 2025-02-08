import React, { memo } from 'react';
import styles from './StatCard.module.scss';
import { StatCardProps } from './types';

const StatCard: React.FC<StatCardProps> = ({ icon, label, value }) => {
  return (
    <div className={styles.statCard}>
      {icon}
      <div className={styles.content}>
        <span className={styles.label}>{label}</span>
        <span className={styles.value}>{value}</span>
      </div>
    </div>
  );
};

export default memo(StatCard);
