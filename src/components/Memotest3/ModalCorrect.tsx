import { Image } from '../../types';
import Button from '../Button/Button';
import Modal from '../Modal/Modal';
import styles from './ModalCorrect.module.css';

type ModalCorrect = {
  puntos: number;
  lastGuessed: Image[];
  setCorrect: (value: React.SetStateAction<boolean>) => void;
  setPuntos: (value: React.SetStateAction<number>) => void;
  setWin: (value: React.SetStateAction<boolean>) => void;
  guessed: Image[];
  images: Image[];
};

export default function ModalCorrect({
  puntos,
  lastGuessed,
  setCorrect,
  setPuntos,
  setWin,
  guessed,
  images,
}: ModalCorrect) {
  return (
    <Modal>
      <div className={styles.modal}>
        <h1 className={styles.modalPts}>{`+ ${puntos} pts`}</h1>
        <img
          alt=''
          className={styles.modalBandera}
          src={lastGuessed[0].bandera}
        />
        <div>
          <h2>¡Correcto!</h2>
          <h1 className={styles.modalNombre}>{lastGuessed[0].name2}</h1>
          <div className={styles.modalInfo}>
            <img alt='' src={lastGuessed[0].img} />
            <div>
              <p>{lastGuessed[0].info}</p>
              <div
                onClick={() => {
                  setCorrect(false);
                  setPuntos(6);
                  setWin(guessed.length === images.length && true);
                }}
              >
                <Button>Continuar</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
}
