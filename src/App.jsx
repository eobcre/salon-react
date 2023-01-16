import { Route, Routes } from 'react-router-dom';
import { Header } from './components/Header';
import { Home } from './components/Home';
import { Salon } from './components/Salon';
import { Gallery } from './components/Gallery';
import { Book } from './components/Book';

const App = () => {
  // JSX
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/salon' element={<Salon />} />
        <Route path='/gallery' element={<Gallery />} />
        <Route path='/book' element={<Book />} />
      </Routes>
    </>
  );
};

export default App;
