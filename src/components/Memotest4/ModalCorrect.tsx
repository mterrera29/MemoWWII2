import { Image2 } from '../../types';
import Button from '../Button/Button';
import styles from './ModalCorrect.module.css';

type ModalCorrect = {
  puntos: number;
  lastGuessed: Image2[];
  setCorrect: (value: React.SetStateAction<boolean>) => void;
  setPuntos: (value: React.SetStateAction<number>) => void;
  setWin: (value: React.SetStateAction<boolean>) => void;
  guessed: Image2[];
};

export default function ModalCorrect({
  puntos,
  lastGuessed,
  setCorrect,
  setPuntos,
  setWin,
  guessed,
}: ModalCorrect) {
  return (
    <div className={styles.modalContainer2}>
      <div className={styles.modalOscuro2} />
      <div className={styles.modal2}>
        <h1 className={styles.modalPts2}>{`+ ${puntos} pts`}</h1>
        <div>
          <h2>¡Correcto!</h2>
          <h1 className={styles.modalNombre2}>{lastGuessed[0].name2}</h1>
          <div className={styles.modalInfo2}>
            <div>
              <img alt='' className={styles.cara} src={lastGuessed[0].cara} />
            </div>
            <div>
              <img
                alt=''
                className={styles.modalBandera2}
                src={lastGuessed[0].bandera}
              />
            </div>
            <div>
              <p>{lastGuessed[0].info}</p>
              {/*  <button
                  style={{ fontSize: '20px', margin: '10px' }}
                  onClick={() => {
                    setCorrect(false);
                    setPuntos(6);
                    if (guessed.length === 12) {
                      setWin(true);
                      setPuntosTotal(puntosTotal + puntosCounter);
                    }
                  }}
                >
                  Continuar
                </button> */}
              <div
                onClick={() => {
                  setCorrect(false);
                  setPuntos(6);
                  setWin(guessed.length === 12 && true);
                }}
              >
                <Button>Continuar</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
