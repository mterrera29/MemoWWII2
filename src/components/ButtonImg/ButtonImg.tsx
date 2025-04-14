import { ReactNode } from 'react';
import styles from './ButtonImg.module.css';
type ButtonProps = {
  children: ReactNode;
};
export default function ButtonImg({ children }: ButtonProps) {
  return (
    <div className={styles.button}>
      <div className={styles.buttonText}>{children}</div>
    </div>
  );
}
