import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';

import { PuntosContext } from '../context/PuntosContext';
import casco from '../images/sombrero-militar2.png';

import styles from './MemoMain.module.css';
import ModalMemoMain from './MemoMain/ModalMemoMain';
import Button from './Button/Button';
const Main = () => {
  const [correct, setCorrect] = useState(false);
  const [puntosTotal, setPuntosTotal] = useContext(PuntosContext);
  const puntosPartida = JSON.parse(localStorage.getItem('puntos'));

  return (
    <div>
      <main className={styles.memoMain}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
          }}
        >
          <header
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              textAlign: 'center',
            }}
          >
            <img alt='' className={styles.imgMemoM} src={casco} />
            <h1>MEMO WWII</h1>
            <img alt='' className={styles.imgMemoM} src={casco} />
          </header>
          <h2 style={{ fontSize: '28px', margin: '10px', textAlign: 'center' }}>
            Lideres de la Segunda Guerra Mundial
          </h2>
          <div
            onClick={() => {
              setCorrect(true);
              setPuntosTotal(0);
            }}
          >
            <Button>Comenzar</Button>
          </div>
          {puntosPartida ? (
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
              }}
            >
              <h2>Ultima partida: {puntosPartida} Pts. </h2>
              <Link to='/nivel1'>
                <button
                  style={{
                    fontSize: '16px',
                    margin: '10px',
                    padding: '5px',
                    cursor: 'pointer',
                  }}
                  onClick={() => {
                    setPuntosTotal(0);
                  }}
                >
                  Jugar Nivel 1
                </button>
              </Link>
              <Link to='/nivel2'>
                <button
                  style={{
                    fontSize: '16px',
                    margin: '10px',
                    padding: '5px',
                    cursor: 'pointer',
                  }}
                  onClick={() => {
                    setPuntosTotal(0);
                  }}
                >
                  Jugar Nivel 2
                </button>
              </Link>
              <Link to='/nivel3'>
                <button
                  style={{
                    fontSize: '16px',
                    margin: '10px',
                    padding: '5px',
                    cursor: 'pointer',
                  }}
                  onClick={() => {
                    setPuntosTotal(0);
                  }}
                >
                  Jugar Nivel 3
                </button>
              </Link>
            </div>
          ) : (
            <div />
          )}
        </div>
        {correct === true && <ModalMemoMain />}
      </main>
    </div>
  );
};

export default Main;
