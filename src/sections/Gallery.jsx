import Bombshell from '../assets/gallery/bombshell.jpg';
import Ice from '../assets/gallery/ice.jpg';
import Precision from '../assets/gallery/precision.jpg';
import RedBerry from '../assets/gallery/red-berry.jpg';
import SummerBreeze from '../assets/gallery/summer-breeze.jpg';
import SoftBrownie from '../assets/gallery/soft-brownie.jpg';
import TheBlonde from '../assets/gallery/the-blonde.jpg';

export const Gallery = () => {
  return (
    <div>
      <p className='title-st'>Gallery</p>
      <div className='flex flex-wrap justify-center gap-6'>
        <figure>
          <img src={Bombshell} alt='Image' width='340' height='420' />
          <figcaption className='text-center p-4'>Bombshell</figcaption>
        </figure>
        <figure>
          <img src={Ice} alt='Image' width='340' height='420' />
          <figcaption className='text-center p-4'>Ice</figcaption>
        </figure>
        <figure>
          <img src={Precision} alt='Image' width='340' height='420' />
          <figcaption className='text-center p-4'>Precision</figcaption>
        </figure>
        <figure>
          <img src={RedBerry} alt='Image' width='340' height='420' />
          <figcaption className='text-center p-4'>Red Berry</figcaption>
        </figure>
        <figure>
          <img src={SummerBreeze} alt='Image' width='340' height='420' />
          <figcaption className='text-center p-4'>Summer Breeze</figcaption>
        </figure>
        <figure>
          <img src={SoftBrownie} alt='Image' width='340' height='420' />
          <figcaption className='text-center p-4'>Soft Brownie</figcaption>
        </figure>
        <figure>
          <img src={TheBlonde} alt='Image' width='340' height='420' />
          <figcaption className='text-center p-4'>The Blonde</figcaption>
        </figure>
      </div>
    </div>
  );
};
