import './App.css';
import Navbar from './component/Navbar';
import Home from './component/Home';
import { Routes, Route } from 'react-router-dom';
import Products from './component/Products';
import Product from './component/Product';
import Login from './component/Login';
import Register from './component/Signup';
import Cart from './component/cart';
import About from './component/About';
import Contact from './component/Contact';


const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/"  element={<Home />} />
        <Route exact path="/about"  element={<About />} />
        <Route exact path="/contact"  element={<Contact />} />
        <Route exact path="/products" element={<Products />} />
        <Route exact path="/products/:id" element={<Product />} /> 
        <Route exact path="/cart" element={<Cart />} /> 
        <Route exact path="/login"  element={<Login />} />
        <Route exact path="/register"  element={<Register />} />

      </Routes>
      
    </>

  );
}

export default App;
