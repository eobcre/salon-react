import { Route, Routes } from 'react-router-dom';
import { Header } from './components/Header';
import { Home } from './sections/Home';
import { Salon } from './sections/Salon';
import { Service } from './sections/Service';
import { Gallery } from './sections/Gallery';
import { Book } from './sections/Book';
import { Footer } from './components/Footer';

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/salon' element={<Salon />} />
        <Route path='/service' element={<Service />} />
        <Route path='/gallery' element={<Gallery />} />
        <Route path='/book' element={<Book />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
