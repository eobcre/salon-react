// hooks
import { useState } from 'react';
// libraries
import { Link } from 'react-router-dom';
import { GrClose, GrMenu } from 'react-icons/gr';
// img
import Logo from '../assets/logo.png';

import { menuData } from '../utils/menuData';

export const Header = () => {
  const [navOpen, setNavOpen] = useState(false);

  const handleToggle = () => {
    setNavOpen(!navOpen);
  };

  return (
    <nav>
      <div className='m-auto border-b border-gray-200 p-10 md:w-10/12 md:flex justify-between items-center'>
        <div className='flex justify-between'>
          <Link to='/'>
            <img src={Logo} alt='Logo' width='180' height='29' />
          </Link>
          {/* mobile menu toggle button */}
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
            {menuData.map((menu) => (
              <li key={menu.id}>
                <Link
                  to={menu.link}
                  onClick={handleToggle}
                  className='hover:opacity-50 md:p-4'
                >
                  {menu.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};
