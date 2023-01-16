import { Link } from 'react-router-dom';
import Logo from '../assets/logo.png';

export const Header = () => {
  return (
    <div className='w-screen flex justify-between items-center'>
      <Link to='/'>
        <img src={Logo} alt='Logo' width='180' height='29' />
      </Link>
      <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/salon'>Salon</Link>
          </li>
          <li>
            <Link to='/gallery'>Gallery</Link>
          </li>
          <li>
            <Link to='/book'>Book</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
