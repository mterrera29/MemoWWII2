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
          <div
            style={{
              backgroundColor: '#21404ac4',
              borderRadius: '30px',
              marginLeft: '5px',
              marginRight: '5px',
              padding: '10px',
              border: '2px solid var(--bordercolor)',
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
            <h2
              style={{ fontSize: '28px', margin: '10px', textAlign: 'center' }}
            >
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
                <Link style={{ textDecoration: 'none' }} to='/nivel1'>
                  <div
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
                    <Button>Jugar Nivel 1</Button>
                  </div>
                </Link>
                <Link to='/nivel2' style={{ textDecoration: 'none' }}>
                  <div
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
                    <Button>Jugar Nivel 2</Button>
                  </div>
                </Link>
                <Link to='/nivel3' style={{ textDecoration: 'none' }}>
                  <div
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
                    <Button>Jugar Nivel 3</Button>
                  </div>
                </Link>
              </div>
            ) : (
              <div />
            )}
          </div>
        </div>
        {correct === true && <ModalMemoMain />}
      </main>
    </div>
  );
};

export default Main;
