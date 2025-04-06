import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import styles from './Memotest4.module.css';

import { lider } from '../data2';
import { usePointsStore } from '../../store';
import { Image2 } from '../../types';
import Images from './Images';
import ModalCorrect from './ModalCorrect';
import Header from '../Header/Header';
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
      <h2>Nivel 2</h2>
      <main>
        <div className={styles.containerTitle}>
          <h1>Lider</h1>
          <h1>País</h1>
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {lider.map((images, index) => (
            <ul key={`group-${index}`} className={styles.container2}>
              <Images
                images={images}
                selected={selected}
                guessed={guessed}
                setSelected={setSelected}
              />
            </ul>
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
          <div className='modalContainer2'>
            <div className='modalOscuro2' />
            <div className='modalWin2'>
              <div>
                <h1 style={{ color: 'rgb(72, 187, 72)', fontSize: '60px' }}>
                  ¡Ganaste!
                </h1>
                <div className='modalInfo2'>
                  <h2>{`Total: ${puntosCounter} pts`}</h2>
                </div>
                <h1>{`Total: ${puntosTotal} pts`}</h1>
                <Link to='/nivel3'>
                  <button
                    style={{ fontSize: '20px', padding: '5px', margin: '10px' }}
                    onClick={() => {
                      setWin(false);
                    }}
                  >
                    Continuar al Nivel 3
                  </button>
                </Link>
              </div>
            </div>
          </div>
        )}
        <div>
          <h1>{`Puntos: ${puntosCounter} pts`}</h1>
        </div>
      </main>
    </div>
  );
};

export default Memotest4;
