import React, { memo } from 'react';
import styles from './Modal.module.scss';
import { ModalProps } from './types';
import { IconButton } from '@mui/material';
import { Close } from '@mui/icons-material';
import Button from '../Button';

const Modal: React.FC<ModalProps> = ({ title, subtitle, children, onClose, onCancel, onSave }) => {
  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={`${styles.modalContainer}`} onClick={(e) => e.stopPropagation()}>
        <header className={styles.modalHeader}>
          <div className={styles.headerContent}>
            <h2 className={styles.title}>{title}</h2>
            {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
          </div>
          <IconButton
            sx={{
              position: 'absolute',
              top: 6,
              right: 6,
            }}
            aria-label="close"
            onClick={onClose}
          >
            <Close />
          </IconButton>
        </header>
        <div className={styles.modalBody}>{children}</div>
        <footer className={styles.modalFooter}>
          <Button variant={'text'} size="md" onClick={onCancel}>
            Cancel
          </Button>
          <Button variant={'filled'} size="md" onClick={onSave}>
            Save
          </Button>
        </footer>
      </div>
    </div>
  );
};

export default memo(Modal);
