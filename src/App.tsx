import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Memotest3 from './components/Memotest3/Memotest3';
import Memotest4 from './components/Memotest4/Memotest4';
import Memotest5 from './components/Memotest5/Memotest5';
import MemoMain from './components/MemoMain';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route element={<MemoMain />} path='/' />
          <Route element={<Memotest3 />} path='/nivel1' />
          <Route element={<Memotest4 />} path='/nivel2' />
          <Route element={<Memotest5 />} path='/nivel3' />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
