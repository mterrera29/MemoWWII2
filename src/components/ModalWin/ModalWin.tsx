import { Link } from 'react-router-dom';
import Button from '../Button/Button';
import styles from './ModalWin.module.css';
type ModalProps = {
  level: number;
  puntosCounter: number;
  puntosTotal: number;
  setWin: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function ModalWIn({
  level,
  puntosCounter,
  puntosTotal,
  setWin,
}: ModalProps) {
  const nextLevel = level + 1;
  return (
    <div className={styles.modalWin}>
      <div>
        <h1 className={styles.modalWinH1}>¡Ganaste!</h1>
        <div className={styles.modalInfo}>
          <h2>{`Nivel ${level}: ${puntosCounter} pts`}</h2>
        </div>
        <h1
          style={{ color: 'var(--backbuttonhover)' }}
        >{`Total: ${puntosTotal} pts`}</h1>
        <Link to={`/nivel${nextLevel}`} style={{ textDecoration: 'none' }}>
          <div
            style={{ fontSize: '20px', margin: '10px' }}
            onClick={() => {
              setWin(false);
            }}
          >
            <Button>{`Continuar al Nivel ${nextLevel}`}</Button>
          </div>
        </Link>
      </div>
    </div>
  );
}
