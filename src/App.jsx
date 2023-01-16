import { Route, Routes } from 'react-router-dom';
import { Home } from './components/Home';

const App = () => {
  // JSX
  return (
    <Routes>
      <Route path='/' element={<Home />} />
    </Routes>
  );
};

export default App;
