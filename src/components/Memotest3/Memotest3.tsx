import { useState, useEffect } from 'react';
import './Memotest3.css';

import { Link } from 'react-router-dom';

import img from '../data1.ts';
import { Image } from '../../types/index.ts';
import Images from './Images.tsx';
import { usePointsStore } from '../../store.ts';
import ModalCorrect from './ModalCorrect.tsx';
import Button from '../Button/Button.tsx';

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
      <main className='memoMain'>
        <div className='center'>
          <h2>Nivel 1</h2>
          <Images
            images={images}
            selected={selected}
            guessed={guessed}
            setSelected={setSelected}
          />
          <div className='puntosContainer'>
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
          <div className='modalContainer'>
            <div className='modalOscuro' />
            <div className='modalWin'>
              <div>
                <h1 className='modalWinH1'>¡Ganaste!</h1>
                <div className='modalInfo'>
                  <h2>{`Nivel 1: ${puntosCounter} pts`}</h2>
                </div>
                <h1>{`Total: ${puntosTotal} pts`}</h1>
                <Link to='/nivel2' style={{ textDecoration: 'none' }}>
                  <div
                    style={{ fontSize: '20px', margin: '10px' }}
                    onClick={() => {
                      setWin(false);
                    }}
                  >
                    <Button>{'Continuar al Nivel 2'}</Button>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default Memotest3;
