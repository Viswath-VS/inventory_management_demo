import React from 'react';
import styles from './TextField.module.scss';
import { TextFieldProps } from './types';

const TextField: React.FC<TextFieldProps> = ({ label, ...inputProps }) => {
  return (
    <div className={styles.textField}>
      {label && <label className={styles.label}>{label}</label>}
      <input className={styles.input} {...inputProps} />
    </div>
  );
};

export default TextField;
