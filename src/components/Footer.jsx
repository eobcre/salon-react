// icon
import Instagram from '../assets/ig.png';

export const Footer = () => {
  return (
    <div className='bg-gray-300 w-full mt-20 pt-10'>
      <div className='md:flex justify-between w-2/3 m-auto'>
        <div>
          <p className='text-xl mb-6'>Connect with us!</p>
          <a
            href='https://www.instagram.com'
            target='_blank'
            rel='noopener noreferrer'
          >
            <img src={Instagram} alt='Logo' width='40' height='40' />
          </a>
        </div>
        <div>
          <p className='text-xl mt-12 mb-6 md:-mt-0'>Contact</p>
          <p className='mt-2 mb-2'>Call : 000-000-000</p>
          <hr className='w-80' />
          <p className='mt-2 mb-2'>Email : abc@abc.com</p>
          <hr />
        </div>
      </div>
      <div className='sticky p-10'>
        <small>&copy; 2023 Emmy Manning</small>
      </div>
    </div>
  );
};
