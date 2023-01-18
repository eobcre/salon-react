import Floor from '../assets/salon-floor.jpg';

export const Salon = () => {
  return (
    <div>
      <p className='title-st'>Salon</p>
      <div className='flex mx-auto w-8/12 mb-10'>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta magni
          minus ipsum velit explicabo, suscipit, quis molestias quam assumenda
          dignissimos placeat soluta. Ratione itaque id unde eius illo repellat
          ipsum.
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta magni
          minus ipsum velit explicabo, suscipit, quis molestias quam assumenda
          dignissimos placeat soluta. Ratione itaque id unde eius illo repellat
          ipsum.
        </p>
        <img
          src={Floor}
          alt='Image'
          width='320'
          height='240'
          className='ml-10'
        />
      </div>
    </div>
  );
};
