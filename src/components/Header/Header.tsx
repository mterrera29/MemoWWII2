import casco from '../../images/sombrero-militar2.png';
import styles from './Header.module.css';

export default function Header() {
  return (
    <header
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        marginTop: '5px',
      }}
    >
      <img alt='' className={styles.imgMemoM} src={casco} />
      <h1>MEMO WWII</h1>
      <img alt='' className={styles.imgMemoM} src={casco} />
    </header>
  );
}
