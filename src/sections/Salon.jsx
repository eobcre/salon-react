// img
import Floor from '../assets/salon-floor.jpg';
import Pink from '../assets/pink-hair.jpg';

export const Salon = () => {
  return (
    <div className='w-10/12 mx-auto'>
      <p className='title-st'>Salon</p>
      <div className='md:flex items-start mx-auto mb-10'>
        <p>
          Cait Salon is a luxurious and stylish hair and beauty salon that
          offers a range of services to help clients look and feel their best.
          From haircuts and styling to coloring and treatments, their team of
          skilled professionals is dedicated to providing personalized services
          that cater to each client's individual needs.
          <br />
          With a relaxing and welcoming atmosphere, clients can sit back and
          enjoy a pampering experience that leaves them feeling refreshed and
          rejuvenated. Whether you're in need of a quick trim or a full glam
          transformation, Cait Salon has everything you need to enhance your
          natural beauty and leave you feeling confident and beautiful.
        </p>
        <img
          src={Floor}
          alt='Image'
          width='320'
          height='240'
          className='flex justify-between mt-10 ml-0 md:mt-0 md:ml-28'
        />
      </div>
      <div className='mt-24 md:flex items-start flex-row-reverse'>
        <p>
          Hair color is a popular way to change up your look and express your
          personal style. There are countless shades and tones to choose from,
          ranging from bold and vibrant to subtle and natural-looking. Whether
          you want to enhance your natural hair color or try something
          completely new, there's a shade that's perfect for you. Coloring your
          hair can be a fun and exciting way to experiment with different looks
          and boost your confidence. However, it's important to take proper care
          of your colored hair to maintain its health and vibrancy. Regular
          touch-ups, deep conditioning treatments, and using color-safe products
          are all important steps to ensure your colored hair looks its best for
          as long as possible. With the right care and attention, your colored
          hair can be a beautiful and eye-catching accessory that complements
          your unique style.
        </p>
        <img
          src={Pink}
          alt='Image'
          width='320'
          height='240'
          className='mt-10 md:flex justify-between md:mt-0 mr-28'
        />
      </div>
    </div>
  );
};
