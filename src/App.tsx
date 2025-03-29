import styles from './App.module.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Memotest3 from './components/Memotest3/Memotest3';
import Memotest4 from './components/Memotest4';
import Memotest5 from './components/Memotest5';
import { PuntosProvider } from './context/PuntosContext';
import MemoMain from './components/MemoMain';

function App() {
  return (
    <PuntosProvider>
      <BrowserRouter>
        <div>
          <Routes>
            <Route exact element={<MemoMain />} path='/' />
            <Route exact element={<Memotest3 />} path='/nivel1' />
            <Route exact element={<Memotest4 />} path='/nivel2' />
            <Route exact element={<Memotest5 />} path='/nivel3' />
          </Routes>
        </div>
      </BrowserRouter>
    </PuntosProvider>
  );
}

export default App;
