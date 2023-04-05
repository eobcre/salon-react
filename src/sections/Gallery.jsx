import { data } from '../utils/data';

export const Gallery = () => {
  return (
    <>
      <p className='title-st'>Gallery</p>
      <div className='flex flex-wrap justify-center gap-6'>
        {data.map(({ name, src }, index) => (
          <figure key={index}>
            <img src={src} alt={`Image ${index}`} width='340' height='420' />
            <figcaption className='text-center p-4'>{name}</figcaption>
          </figure>
        ))}
      </div>
    </>
  );
};
