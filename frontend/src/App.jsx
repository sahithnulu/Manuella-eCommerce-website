// App.js
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPg from './pages/LandingPg';
import ProductSearch from './pages/ProductSearch';
import CheckoutPg  from './pages/CheckoutPg';
import { Nav } from './component/Nav';
import { Cart } from './component/Cart';
import CheckoutSuccess from './pages/CheckoutSuccess';
import { useState } from 'react';


function App() {
  const initialCart = JSON.parse(localStorage.getItem('cart')) || [];
  const [cart, setCart] = useState(initialCart);
  console.log(cart);

  // Save the cart data to local storage whenever it changes
  const saveCartToLocalStorage = (cart) => {
    localStorage.setItem('cart', JSON.stringify(cart));
  };

  const addToCart = (item) => {
    // Check if the item is already in the cart
    const existingItem = cart.find((cartItem) => cartItem._id === item._id);
  
    if (existingItem) {
      // If the item already exists, increment its quantity
      setCart((prevCart) => {
        const updatedCart = prevCart.map((cartItem) =>
          cartItem._id === item._id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
  
        // Save the updated cart to local storage
        saveCartToLocalStorage(updatedCart);
  
        return updatedCart;
      });
    } else {
      // If the item doesn't exist, add it to the cart with quantity 1
      setCart((prevCart) => {
        const updatedCart = [...prevCart, { ...item, quantity: 1 }];
  
        // Save the updated cart to local storage
        saveCartToLocalStorage(updatedCart);
  
        return updatedCart;
      });
    }
  };
  
  const removeFromCart = (_id) => {
    // Check if the item is already in the cart
    const existingItem = cart.find((cartItem) => cartItem._id === _id);
  
    if (existingItem) {
      if (existingItem.quantity > 1) {
        // If the item has a quantity greater than 1, decrement its quantity by 1
        setCart((prevCart) => {
          const updatedCart = prevCart.map((cartItem) =>
            cartItem._id === _id
              ? { ...cartItem, quantity: cartItem.quantity - 1 }
              : cartItem
          );
  
          // Save the updated cart to local storage
          saveCartToLocalStorage(updatedCart);
  
          return updatedCart;
        });
      } else {
        // If the item has a quantity of 1, remove it from the cart
        const newCart = cart.filter((item) => item._id !== _id);
  
        // Save the updated cart to local storage
        saveCartToLocalStorage(newCart);
  
        setCart(newCart);
      }
    }
  };
  

const clearCart = () => {
  setCart([]);
  saveCartToLocalStorage([]);
}

  return (
      <div>
        <Router>
          <Nav />
          <Cart cart={cart} removeFromCart={removeFromCart} clearCart={clearCart}/>
          <Routes>
            <Route path="/" element={<LandingPg />} />
            <Route path="/productSearch" element={<ProductSearch Category={'All'} addToCart={addToCart} cart={cart} removeFromCart={removeFromCart} clearCart={clearCart}/>} />
            <Route path="/ringSearch" element={<ProductSearch Category={'Ring'} addToCart={addToCart} cart={cart} removeFromCart={removeFromCart} clearCart={clearCart}/>} />
            <Route path="/earringSearch" element={<ProductSearch Category={'Earring'} addToCart={addToCart} cart={cart} removeFromCart={removeFromCart} clearCart={clearCart}/>} />
            <Route path="/braceletSearch" element={<ProductSearch Category={'Bracelet'} addToCart={addToCart} cart={cart} removeFromCart={removeFromCart} clearCart={clearCart}/>} />
            <Route path="/necklaceSearch" element={<ProductSearch Category={'Necklace'} addToCart={addToCart} cart={cart} removeFromCart={removeFromCart} clearCart={clearCart}/>} />
            <Route path="/silverSearch" element={<ProductSearch Category={'Silver'} addToCart={addToCart} cart={cart} removeFromCart={removeFromCart} clearCart={clearCart}/>} />
            <Route path="/pearlSearch" element={<ProductSearch Category={'Pearl'} addToCart={addToCart} cart={cart} removeFromCart={removeFromCart} clearCart={clearCart}/>} />
            <Route path="/diamondSearch" element={<ProductSearch Category={'Diamond'} addToCart={addToCart} cart={cart} removeFromCart={removeFromCart} clearCart={clearCart}/>} />
            <Route path="/beadSearch" element={<ProductSearch Category={'Beaded'} addToCart={addToCart} cart={cart} removeFromCart={removeFromCart} clearCart={clearCart}/>} />
            <Route path="/checkout" element={<CheckoutPg cart={cart} removeFromCart={removeFromCart} clearCart={clearCart}/>} />
            <Route path='/checkout-success' element={<CheckoutSuccess/>}/>
          </Routes>
        </Router>
      </div>
  );
}


export default App;
