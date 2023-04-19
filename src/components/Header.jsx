import { useState } from 'react';
import { Link } from 'react-router-dom';
// react-icons
import { GrClose, GrMenu } from 'react-icons/gr';
// img
import Logo from '../assets/logo.png';

export const Header = () => {
  const [navOpen, setNavOpen] = useState(false);

  const handleToggle = () => {
    setNavOpen(!navOpen);
  };

  // JSX
  return (
    <nav>
      <div className='m-auto border-b border-gray-200 p-10 md:w-10/12 md:flex justify-between items-center'>
        <div className='flex justify-between'>
          <Link to='/'>
            <img src={Logo} alt='Logo' width='180' height='29' />
          </Link>
          {/* Toggle button */}
          <button onClick={handleToggle} className='md:hidden'>
            {navOpen ? (
              <GrClose className='text-2xl' />
            ) : (
              <GrMenu className='text-3xl' />
            )}
          </button>
        </div>
        <div
          className={`mt-10 md:block md:mt-0 md:p-0 ${
            navOpen ? 'block' : 'hidden'
          }`}
        >
          <ul className='grid grid-cols-2 place-items-center gap-4 md:flex'>
            <li>
              <Link
                to='/'
                onClick={handleToggle}
                className='hover:opacity-50 md:p-4'
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to='/salon'
                onClick={handleToggle}
                className='hover:opacity-50'
              >
                Salon
              </Link>
            </li>
            <li>
              <Link
                to='/service'
                onClick={handleToggle}
                className='hover:opacity-50 md:p-4'
              >
                Service
              </Link>
            </li>
            <li>
              <Link
                to='/gallery'
                onClick={handleToggle}
                className='hover:opacity-50 md:pr-4'
              >
                Gallery
              </Link>
            </li>
            <li className='mt-2 md:mt-0'>
              <Link
                to='/book'
                onClick={handleToggle}
                className='border border-black rounded p-3 hover:text-white hover:bg-black'
              >
                Booking
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
