import { useState } from 'react';
import { Link } from 'react-router-dom';

import styles from './MemoMain.module.css';
import ModalMemoMain from './MemoMain/ModalMemoMain';
import Button from './Button/Button';
import Header from './Header/Header';
import { usePointsStore } from '../store';
import img from '../images/nivel1.png';
import img2 from '../images/nivel2.png';
import img3 from '../images/nivel3.png';
import ButtonImg from './ButtonImg/ButtonImg';
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
              style={{ marginTop: '10px', marginBottom: '10px' }}
              onClick={() => {
                setCorrect(true);
                setPuntosTotal(0);
              }}
            >
              <Button>Comenzar</Button>
            </div>
            <div className={styles.buttonsLevels}>
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
                  <ButtonImg>
                    Nivel 1
                    <img
                      style={{ height: '80px', borderRadius: '10px' }}
                      src={img}
                      alt=''
                    />
                  </ButtonImg>
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
                  <ButtonImg>
                    Nivel 2
                    <img
                      style={{ height: '80px', borderRadius: '10px' }}
                      src={img2}
                      alt=''
                    />
                  </ButtonImg>
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
                  <ButtonImg>
                    Nivel 3
                    <img
                      style={{ height: '80px', borderRadius: '10px' }}
                      src={img3}
                      alt=''
                    />
                  </ButtonImg>
                </div>
              </Link>
              {puntosRaw && <h2>Última partida: {puntosRaw} Pts. </h2>}
            </div>
          </div>
        </div>
        {correct === true && <ModalMemoMain />}
      </main>
    </div>
  );
};

export default Main;
