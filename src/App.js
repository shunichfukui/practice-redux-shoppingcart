import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import DeleteCartItemModal from './components/modal/DeleteCartItemModal';
import CartContainer from './components/molecules/CartContainer';
import Navbar from './components/organisms/Navbar';
import { calculateTotalPriceWithAmount } from './features/cart/CartSlice';

function App() {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart);
  const { isOpen } = useSelector((state) => state.modal);

  useEffect(() => {
    dispatch(calculateTotalPriceWithAmount())
  }, [cartItems]);

  return (
    <main>
      {isOpen && <DeleteCartItemModal/>}
      <Navbar />
      <CartContainer />
    </main>
     
  );
}

export default App;
