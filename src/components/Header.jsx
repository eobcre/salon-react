import { Link } from 'react-router-dom';
import Logo from '../assets/logo.png';

export const Header = () => {
  return (
    <nav>
      <div className='w-10/12 m-auto flex justify-between items-center p-10'>
        <Link to='/'>
          <img src={Logo} alt='Logo' width='180' height='29' />
        </Link>

        <ul className='flex'>
          <li>
            <Link to='/' className='p-4 hover:opacity-50'>
              Home
            </Link>
          </li>
          <li>
            <Link to='/salon' className='hover:opacity-50'>
              Salon
            </Link>
          </li>
          <li>
            <Link to='/service' className='p-4 hover:opacity-50'>
              Service
            </Link>
          </li>
          <li>
            <Link to='/gallery' className='pr-4 hover:opacity-50'>
              Gallery
            </Link>
          </li>
          <li>
            <Link
              to='/book'
              className='border border-gray-300 rounded p-3 hover:bg-gray-100'
            >
              Book now
            </Link>
          </li>
        </ul>
      </div>
      <hr className='w-10/12 m-auto' />
    </nav>
  );
};
