import Floor from '../assets/salon-floor.jpg';
import Pink from '../assets/pink-hair.jpg';

export const Salon = () => {
  return (
    <div className='w-10/12 mx-auto'>
      <p className='title-st'>Salon</p>
      <div className='md:flex mx-auto mb-10'>
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
          className='flex justify-between mt-10 ml-0 md:mt-0 md:ml-28'
        />
      </div>
      <div className='md:flex mx-auto mt-24'>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut cum
          aperiam exercitationem accusamus voluptate ratione, numquam corporis
          assumenda laudantium soluta minus quo iusto error rerum a itaque ipsam
          vero impedit.
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi,
          quidem. Nulla earum voluptates repellat porro veritatis. Assumenda
          ipsam quisquam vitae harum officiis aperiam reprehenderit dolore
          recusandae itaque. Dolore, molestiae autem.
        </p>
        <img
          src={Pink}
          alt='Image'
          width='320'
          height='240'
          className='mt-10 ml-0 md:flex justify-between md:mt-0 md:ml-28'
        />
      </div>
    </div>
  );
};
