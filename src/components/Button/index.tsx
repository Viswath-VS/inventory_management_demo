import { ButtonProps } from './types';
import styles from './Button.module.scss';
import { memo } from 'react';
const Button = ({ children, onClick, disabled = false, size, variant }: ButtonProps) => {
  return (
    <button
      disabled={disabled}
      className={`${styles.button}  ${styles[size]} ${disabled ? styles.disabled : styles[variant]}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default memo(Button);
