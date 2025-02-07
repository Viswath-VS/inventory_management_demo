import React from 'react';
import styles from './ToggleSwitch.module.scss';
import { ToggleSwitchProps } from './types';

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({ label, id, ...inputProps }) => {
  // Generate a fallback id if none is provided
  const toggleId = id || `toggle-${Math.random().toString(36).substr(2, 9)}`;

  return (
    <div className={styles['toggle-switch']}>
      <input
        type="checkbox"
        id={toggleId}
        className={styles['toggle-switch__checkbox']}
        {...inputProps}
      />
      <label htmlFor={toggleId} className={styles['toggle-switch__label']}>
        <span className={styles['toggle-switch__inner']} />
        <span className={styles['toggle-switch__switch']} />
      </label>
      {label && <span className={styles['toggle-switch__text']}>{label}</span>}
    </div>
  );
};

export default ToggleSwitch;
