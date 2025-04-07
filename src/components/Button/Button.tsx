import styles from './Button.module.css';
type ButtonProps = {
  children: string;
};
export default function Button({ children }: ButtonProps) {
  return (
    <div className={styles.button}>
      <div className={styles.buttonText}>{children}</div>
    </div>
  );
}
