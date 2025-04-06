import casco from '../../images/sombrero-militar2.png';
import { Image } from '../../types/index.ts';
import styles from './Images.module.css';

type ImagesProps = {
  images: Image[];
  selected: Image[];
  guessed: Image[];
  setSelected: (value: React.SetStateAction<Image[]>) => void;
};

export default function Images({
  images,
  selected,
  guessed,
  setSelected,
}: ImagesProps) {
  return (
    <section
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <ul className={styles.container3}>
        {images.map((image, index) => (
          <li
            key={image.id}
            className={`${styles.card} ${
              (selected.includes(image) && `${styles.card2}`) ||
              (guessed.includes(image) && `${styles.card2}`)
            }`}
            onClick={() =>
              !guessed.includes(image) &&
              selected.length < 2 &&
              setSelected((selected) => selected.concat(image))
            }
          >
            <div
              className={`${styles.face} ${styles.front}`}
              style={
                guessed.includes(image)
                  ? { border: 'solid 3px green', borderRadius: '12px' }
                  : {
                      border: 'solid 3px var(--bordercolor)',
                      borderRadius: '12px',
                    }
              }
            >
              <img alt='' className={styles.imgMemo} src={image.img} />
              <h3 style={{ margin: 0 }}>{image.name}</h3>
            </div>
            <div
              className={`${styles.face} ${styles.back}`}
              style={
                guessed.includes(image)
                  ? { border: 'solid 3px green', borderRadius: '12px' }
                  : {
                      border: 'solid 3px var(--bordercolor)',
                      borderRadius: '12px',
                    }
              }
            >
              <img key={index} alt='' className={styles.imgMemo} src={casco} />
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
