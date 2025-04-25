import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import PromotionSignup from './pages/PromotionSignup';
import { CartProvider } from './context/CartContext';

function App() {
  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/promocoes" element={<PromotionSignup />} />
          {/* Other routes would be added here */}
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;