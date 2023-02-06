import { useState } from 'react';
import { Link } from 'react-router-dom';
import { GrClose, GrMenu } from 'react-icons/gr';
import Logo from '../assets/logo.png';

export const Header = () => {
  const [navOpen, setNavOpen] = useState(false);

  const handleToggle = () => {
    setNavOpen(!navOpen);
  };

  // JSX
  return (
    <nav>
      <div className='w-10/12 m-auto flex justify-between items-center p-10'>
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
        <ul className={`md:flex ${navOpen ? 'showMenu' : ''}`}>
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
