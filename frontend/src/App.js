import { Start } from './pages/Start';
import { Order } from './pages/Order';
import { Submitted } from './pages/Submitted';
import { CartProvider } from './context/CartContext';
import { Routes, Route } from 'react-router-dom'; 

const App = () => {
  return (
    <>
      <CartProvider>
        <Routes>
          <Route path="/" element={ <Start /> }></Route>
          <Route path="/order" element={ <Order /> }></Route>
          <Route path="/submitted" element={ <Submitted /> }></Route>
        </Routes>
      </CartProvider>
    </>
  );
}

export default App;
