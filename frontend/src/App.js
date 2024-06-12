import Start from './pages/Start';
import Order from './pages/Order';

import { Routes, Route } from 'react-router-dom'; 

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={ <Start /> }></Route>
        <Route path="/order" element={ <Order /> }></Route>
      </Routes>
    </>
  );
}

export default App;
