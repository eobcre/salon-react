import Instagram from '../assets/ig.png';

export const Footer = () => {
  return (
    <div className='bg-gray-300 w-full h-80 p-10'>
      <div className='flex justify-between w-2/3 m-auto'>
        <div>
          <p>Connect with us!</p>
          <img src={Instagram} alt='Logo' width='40' height='40' />
        </div>
        <div>
          <p>Contact</p>
          <p>Call : xxx-xxx-xxx</p>
          <p>Email : xxx@xxx.com</p>
        </div>
      </div>
      <div className='fixed bottom-0 p-10'>
        <small>&copy; 2023 Emmy Manning</small>
      </div>
    </div>
  );
};
