import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Header from './components/Header';
import RegistrationForm from './components/RegistrationForm';
import LoginForm from './components/LoginForm';
import Footer from './components/Footer';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Services from './Services';
import MedicineCatalog from './components/MedicineCatalog';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import UserProfile from './components/UserProfile';
import './App.css';
import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyB-H6q6-FN1a6IZRMoWRGVb0LIt9-tZ-9U",
  authDomain: "edoctor-8b77f.firebaseapp.com",
  projectId: "edoctor-8b77f",
  storageBucket: "edoctor-8b77f.appspot.com",
  messagingSenderId: "332664231502",
  appId: "1:332664231502:web:72099f548255d122f8551f",
  measurementId: "G-R86MBC8SK4"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
      }
    });

    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  const handleAddToCart = (product) => {
    setCartItems(prevItems => [...prevItems, product]);
    alert(`${product.medicine_name} has been added to the cart.`);
  };

  const handleRemoveFromCart = (product) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== product.id));
  };

  const handlePlaceOrder = (address) => {
    // Logic to handle order placement can be added here
    alert(`Order placed successfully! Delivery Address: ${address}`);
    setCartItems([]); // Clear cart after placing order
  };

  const theme = {
    colors: {
      heading: "rgb(24 24 29)",
      text: "rgb(24 24 29)",
      white: "#fff",
      black: "#212529",
    },
  };

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header isAuthenticated={isAuthenticated} onLogout={handleLogout} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="/catalog" element={<MedicineCatalog db={db} onAddToCart={handleAddToCart} />} />
          <Route path="/cart" element={<Cart cartItems={cartItems} onRemoveFromCart={handleRemoveFromCart} />} />
          <Route path="/checkout" element={<Checkout cartItems={cartItems} onPlaceOrder={handlePlaceOrder} />} />
          <Route path="/register" element={<RegistrationForm />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/profile" element={<UserProfile />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
