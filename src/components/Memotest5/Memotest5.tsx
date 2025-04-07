import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './Memotest5.module.css';

import { lider } from '../data3';
import { usePointsStore } from '../../store';
import Button from '../Button/Button';

const Memotest5 = () => {
  const { puntosTotal, setPuntosTotal } = usePointsStore();
  const [correct, setCorrect] = useState(false);
  const [name, setName] = useState('');
  const [index, setIndex] = useState(0);
  const [nombre, setNombre] = useState('');
  const [win, setWin] = useState(false);
  const [pistas, setPistas] = useState(0);
  const [puntos, setPuntos] = useState(6);
  const [puntosCounter, setPuntosCounter] = useState(0);

  const saveLocal = () => {
    localStorage.setItem('puntos', JSON.stringify(puntosTotal));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const nombre1 = name.toLowerCase().split(' ').join('');
    const nombre2 = lider[index].name2.toLowerCase().split(' ').join('');

    if (
      nombre1 === lider[index].name.split(' ').join('') ||
      nombre1 === nombre2
    ) {
      setCorrect(true);
      setPistas(0);
      setPuntosCounter(puntosCounter + puntos);
      setPuntosTotal(puntosTotal + puntos);
    } else {
      setPuntos((prev) => (prev > 1 ? prev - 1 : 1));
      setNombre('Incorrecto');
    }
  };

  const handlePistas = () => {
    if (pistas < 4) {
      setPistas(pistas + 1);
      setPuntos((prev) => (prev > 1 ? prev - 1 : 1));
    }
  };

  useEffect(() => {
    setNombre(
      name.replace(/(^\w{1})|(\s+\w{1})/g, (letra) => letra.toUpperCase())
    );
  }, [name, setName]);

  return (
    <div>
      <main className={styles.main3}>
        <h2>Nivel 3</h2>
        <div className={styles.imagenContainer}>
          <h1
            className={styles.titulo}
            style={{ color: correct ? 'rgb(72, 187, 72)' : 'black' }}
          >
            {correct ? '¡Correcto!' : '¿Quien es?'}
          </h1>
          <img
            alt=''
            className={styles.imgLider}
            src={lider[index].img}
            style={{ filter: correct ? '' : 'brightness(0)' }}
          />
          <h1
            className={styles.nombreLider}
            style={{
              fontSize: '45px',
              color:
                nombre === 'Incorrecto' ? 'red' : correct ? 'green' : 'white',
            }}
          >
            {nombre}
          </h1>
          {pistas > 0 && (
            <div className={styles.pistaLider}>
              <h3>{pistas === 1 && lider[index].pista1}</h3>
              <h3>{pistas === 2 && lider[index].pista2}</h3>
              <h3>{pistas === 3 && lider[index].pista3}</h3>
              <h3>{pistas === 4 && lider[index].pista4}</h3>
            </div>
          )}
        </div>
        <div>
          {correct ? (
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}
            >
              <button
                style={{ fontSize: '16px', margin: '10px', padding: '5px' }}
                onClick={() => {
                  if (index === 5) {
                    setWin(true);
                  } else {
                    setIndex(index + 1);
                  }
                  setCorrect(false);
                  setName('');
                  setNombre('');
                  setPistas(0);
                  setPuntos(6);
                }}
              >
                Continuar
              </button>
              <h2 className={styles.modalPts3}>
                {correct && `+ ${puntos} pts`}
              </h2>
            </div>
          ) : (
            <div style={{ display: 'flex' }}>
              <button
                style={{
                  all: 'unset',
                  cursor: 'pointer',
                  marginRight: '10px',
                }}
                onClick={() => handlePistas()}
              >
                <Button>Pistas</Button>
              </button>
              <form onSubmit={handleSubmit}>
                <input
                  style={{
                    width: '150px',
                    height: '40px',
                    borderRadius: '15px',
                    padding: '5px',
                  }}
                  type='text'
                  onChange={(e) => setName(e.target.value)}
                />
                <button
                  style={{
                    all: 'unset',
                    cursor: 'pointer',
                    marginLeft: '10px',
                  }}
                  type='submit'
                >
                  <Button>Siguiente</Button>
                </button>
              </form>
            </div>
          )}
        </div>
        <div className='puntosContainer3'>
          <h1>{`Puntos: ${puntosCounter} pts`}</h1>
        </div>
        {win === true && (
          <div className='modalContainer2'>
            <div className='modalOscuro2' />
            <div className='modalWin3'>
              <div>
                <h1 style={{ color: 'rgb(72, 187, 72)', fontSize: '60px' }}>
                  ¡Ganaste el Juego!
                </h1>
                <div className='modalInfo2'>
                  <h2>{`Nivel 3: ${puntosCounter} pts`}</h2>
                </div>
                <h1>{`Total: ${puntosTotal} pts`}</h1>
                <Link to='/'>
                  <button
                    style={{
                      fontSize: '20px',
                      margin: '10px',
                      padding: '5px',
                    }}
                    onClick={() => {
                      saveLocal();
                      setWin(false);
                      setPuntosTotal(0);
                    }}
                  >
                    Finalizar
                  </button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default Memotest5;
