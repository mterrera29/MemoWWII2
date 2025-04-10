import { useState } from 'react';
import { Link } from 'react-router-dom';

import styles from './MemoMain.module.css';
import ModalMemoMain from './MemoMain/ModalMemoMain';
import Button from './Button/Button';
import Header from './Header/Header';
import { usePointsStore } from '../store';
const Main = () => {
  const [correct, setCorrect] = useState(false);
  const setPuntosTotal = usePointsStore((state) => state.setPuntosTotal);
  const puntosRaw = localStorage.getItem('puntos');

  return (
    <div>
      <main className={styles.memoMain}>
        <Header />
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            height: '100%',
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
            <h2
              style={{ fontSize: '28px', textAlign: 'center' }}
              className={styles.mainTitle}
            >
              Líderes de la Segunda Guerra Mundial
            </h2>
            <div
              style={{ marginTop: '10px' }}
              onClick={() => {
                setCorrect(true);
                setPuntosTotal(0);
              }}
            >
              <Button>Comenzar</Button>
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
              }}
            >
              <h2>Última partida: {puntosRaw} Pts. </h2>
              <Link style={{ textDecoration: 'none' }} to='/nivel1'>
                <div
                  style={{
                    fontSize: '16px',
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
          </div>
        </div>
        {correct === true && <ModalMemoMain />}
      </main>
    </div>
  );
};

export default Main;
