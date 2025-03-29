import casco from '../../images/sombrero-militar2.png';
import { Image } from '../../types/index.ts';

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
      <ul className='container3'>
        {images.map((image, index) => (
          <li
            key={image.id}
            className={`card ${
              (selected.includes(image) && `card2`) ||
              (guessed.includes(image) && `card2`)
            }`}
            onClick={() =>
              !guessed.includes(image) &&
              selected.length < 2 &&
              setSelected((selected) => selected.concat(image))
            }
          >
            <div
              className='face front'
              style={
                guessed.includes(image)
                  ? { border: 'solid 1px green', borderRadius: '12px' }
                  : {
                      border: 'solid 1px var(--bordercolor)',
                      borderRadius: '12px',
                    }
              }
            >
              <img alt='' className='imgMemo' src={image.img} />
              <h3 style={{ margin: 0 }}>{image.name}</h3>
            </div>
            <div
              className='face back'
              style={
                guessed.includes(image)
                  ? { border: 'solid 1px green', borderRadius: '12px' }
                  : {
                      border: 'solid 1px var(--bordercolor)',
                      borderRadius: '12px',
                    }
              }
            >
              <img key={index} alt='' className='imgMemo' src={casco} />
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
