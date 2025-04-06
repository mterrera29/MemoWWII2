import { Link } from 'react-router-dom';
import styles from './ModalMemoMain.module.css';
import Button from '../Button/Button';

export default function ModalMemoMain() {
  return (
    <div className={styles.modalContainer}>
      <div className={styles.modalOscuro} />
      <div className={styles.modal}>
        <div>
          <p className={styles.modalTitle}>¡Atención!</p>
          <div className={styles.modalInfo}>
            <div>
              <p>
                Recuerda los rostros , nombres y apellidos de los lideres más
                importantes de la Segunda Guerra Mundial.
              </p>
              <p>
                Lee con atención la información de cada lider a lo largo del
                juego, te será muy útil en los proximos niveles!
              </p>
              <Link to='/nivel1' style={{ textDecoration: 'none' }}>
                <Button>{'Entendido'}</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
