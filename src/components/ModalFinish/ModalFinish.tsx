import { Link } from 'react-router-dom';

import styles from './ModalFinish.module.css';
import Button from '../Button/Button';

type ModalFinishProps = {
  puntosCounter: number;
  puntosTotal: number;
  setWin: React.Dispatch<React.SetStateAction<boolean>>;
  setPuntosTotal: (puntos: number) => void;
};

export default function ModalFinish({
  puntosCounter,
  puntosTotal,
  setWin,
  setPuntosTotal,
}: ModalFinishProps) {
  const saveLocal = () => {
    localStorage.setItem('puntos', JSON.stringify(puntosTotal));
  };
  return (
    <div className={styles.modalContainer2}>
      <div className={styles.modalOscuro2} />
      <div className={styles.modalWin3}>
        <div>
          <h2
            style={{
              color: 'var(--titlecolor)',
              fontSize: '50px',
              lineHeight: '50px',
            }}
          >
            ¡Ganaste el Juego!
          </h2>
          <div className={styles.modalInfo2}>
            <h2>{`Nivel 3: ${puntosCounter} pts`}</h2>
          </div>
          <h1>{`Total: ${puntosTotal} pts`}</h1>
          <Link to='/' style={{ textDecoration: 'none' }}>
            <div
              style={{
                fontSize: '20px',
                margin: '10px',
                padding: '5px',
              }}
              onClick={() => {
                saveLocal();
                setWin(false);
                setPuntosTotal(0);
              }}
            >
              <Button>Finalizar</Button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
