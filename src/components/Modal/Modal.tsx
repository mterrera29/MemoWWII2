import React from 'react';
import styles from './Modal.module.css';

export default function Modal({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.modalContainer}>
      <div className={styles.modalOscuro} />
      {children}
    </div>
  );
}
