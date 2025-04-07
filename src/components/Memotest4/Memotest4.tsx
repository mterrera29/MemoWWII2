import { useState, useEffect } from 'react';

import styles from './Memotest4.module.css';

import { lider } from '../data2';
import { usePointsStore } from '../../store';
import { Image2 } from '../../types';
import Images from './Images';
import ModalCorrect from './ModalCorrect';
import Header from '../Header/Header';
import Modal from '../Modal/Modal';
import ModalWIn from '../ModalWin/ModalWin';
const Memotest4 = () => {
  const { puntosTotal, setPuntosTotal } = usePointsStore();
  const [guessed, setGuessed] = useState<Image2[]>([]);
  const [selected, setSelected] = useState<Image2[]>([]);
  const [lastGuessed, setLastGuessed] = useState<Image2[]>([]);

  const [correct, setCorrect] = useState(false);
  const [win, setWin] = useState(false);

  const [puntos, setPuntos] = useState<number>(6);
  const [puntosCounter, setPuntosCounter] = useState(0);

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
    <div style={{ textAlign: 'center' }}>
      <Header />
      <div>
        <h2>Nivel 2</h2>
      </div>
      <main>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {lider.map((images, index) => (
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <div className={styles.containerTitle}>
                <h1>{index === 0 ? 'Lider' : 'País'}</h1>
              </div>
              <ul key={`group-${index}`} className={styles.container2}>
                <Images
                  images={images}
                  selected={selected}
                  guessed={guessed}
                  setSelected={setSelected}
                />
              </ul>
            </div>
          ))}
        </div>
        {correct === true && (
          <ModalCorrect
            puntos={puntos}
            lastGuessed={lastGuessed}
            setCorrect={setCorrect}
            setPuntos={setPuntos}
            setWin={setWin}
            guessed={guessed}
          />
        )}
        {win === true && (
          <Modal>
            <ModalWIn
              level={2}
              puntosTotal={puntosTotal}
              puntosCounter={puntosCounter}
              setWin={setWin}
            />
          </Modal>
        )}
        <div>
          <h2>{`Puntos: ${puntosCounter} pts`}</h2>
        </div>
      </main>
    </div>
  );
};

export default Memotest4;
