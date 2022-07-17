import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import CartContainer from './components/molecules/CartContainer';
import Navbar from './components/organisms/Navbar';
import { calculateTotalPriceWithAmount } from './features/cart/CartSlice';

function App() {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart);

  useEffect(() => {
    dispatch(calculateTotalPriceWithAmount())
  }, [cartItems]);

  return (
    <main>
      <Navbar />
      <CartContainer />
    </main>
     
  );
}

export default App;
