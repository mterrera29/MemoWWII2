import { useState, useEffect } from 'react';

import img from '../data1.ts';
import { Image } from '../../types/index.ts';
import Images from './Images.tsx';
import { usePointsStore } from '../../store.ts';
import ModalCorrect from './ModalCorrect.tsx';
import Modal from '../Modal/Modal.tsx';
import styles from './Memotest3.module.css';
import ModalWin from '../ModalWin/ModalWin.tsx';
import Header from '../Header/Header.tsx';

const Memotest3 = () => {
  const { puntosTotal, setPuntosTotal } = usePointsStore();
  const [guessed, setGuessed] = useState<Image[]>([]);
  const [lastGuessed, setLastGuessed] = useState<Image[]>([]);
  const [selected, setSelected] = useState<Image[]>([]);
  const [correct, setCorrect] = useState(false);
  const [win, setWin] = useState<boolean>(false);
  const [puntos, setPuntos] = useState<number>(6);
  const [puntosCounter, setPuntosCounter] = useState(0);

  const images: Image[] = img;

  const saveLocal = () => {
    localStorage.setItem('puntos', JSON.stringify(puntosTotal + puntosCounter));
  };

  useEffect(() => {
    if (selected.length === 2) {
      if (
        selected[0].check === selected[1].check &&
        selected[0].id !== selected[1].id
      ) {
        setGuessed((guessed) => guessed.concat(selected));
        setLastGuessed([selected[1]]);
        setTimeout(() => {
          setCorrect(true);
        }, 800);
      }
      setTimeout(() => {
        setSelected([]);
      }, 1000);
    }
  }, [selected]);

  useEffect(() => {
    if (selected.length === 2) {
      if (selected[0].check !== selected[1].check) {
        setPuntos((prev) => (prev > 1 ? prev - 1 : 1));
      } else if (
        selected[0].check === selected[1].check &&
        selected[0].id !== selected[1].id
      ) {
        setPuntosCounter(puntosCounter + puntos);
      }
    }
  }, [selected]);

  useEffect(() => {
    if (guessed.length === 12) {
      setPuntosTotal(puntosTotal + puntosCounter);
      saveLocal();
    }
  }, [guessed]);

  return (
    <div>
      <main>
        <Header />
        <div className={styles.center}>
          <h2>Nivel 1</h2>
          <Images
            images={images}
            selected={selected}
            guessed={guessed}
            setSelected={setSelected}
          />
          <div className={styles.puntosContainer}>
            <h2>{`Puntos: ${puntosCounter} Pts`}</h2>
          </div>
        </div>
        {correct === true && (
          <ModalCorrect
            puntos={puntos}
            lastGuessed={lastGuessed}
            setCorrect={setCorrect}
            setPuntos={setPuntos}
            setWin={setWin}
            guessed={guessed}
            images={images}
          />
        )}
        {win === true && (
          <Modal>
            <ModalWin
              puntosTotal={puntosTotal}
              puntosCounter={puntosCounter}
              setWin={setWin}
            />
          </Modal>
        )}
      </main>
    </div>
  );
};

export default Memotest3;
