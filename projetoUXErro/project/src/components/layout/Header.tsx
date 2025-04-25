import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, ShoppingCart, User, Menu, X } from 'lucide-react';
import { useCart } from '../../context/CartContext';

const Header: React.FC = () => {
  const { cartItems } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <header className="bg-black text-white py-3">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold flex items-center">
            <span className="text-white">A Loja do Som</span>
          </Link>
          
          {/* Desktop Search */}
          <div className="hidden md:flex flex-1 max-w-xl mx-4">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="O que você está procurando?"
                className="w-full px-4 py-2 pl-10 bg-white text-black rounded-md"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={20} />
            </div>
          </div>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-4">
            <Link 
              to="/promocoes" 
              className="bg-orange-500 hover:bg-orange-600 px-4 py-2 rounded-md font-semibold transition-colors"
            >
              Receba promoções
            </Link>
            <Link to="/minha-conta" className="flex items-center gap-1 hover:text-orange-500 transition-colors">
              <User size={20} />
              <span>Minha Conta</span>
            </Link>
            <Link to="/carrinho" className="flex items-center gap-1 hover:text-orange-500 transition-colors relative">
              <ShoppingCart size={20} />
              <span>Carrinho</span>
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Link>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {/* Mobile Search */}
        <div className="mt-3 md:hidden">
          <div className="relative w-full">
            <input
              type="text"
              placeholder="O que você está procurando?"
              className="w-full px-4 py-2 pl-10 bg-white text-black rounded-md"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={20} />
          </div>
        </div>
        
        {/* Mobile Nav */}
        {mobileMenuOpen && (
          <nav className="md:hidden mt-4 bg-gray-900 rounded-lg p-4">
            <ul className="space-y-3">
              <li>
                <Link 
                  to="/promocoes" 
                  className="block bg-orange-500 hover:bg-orange-600 px-4 py-2 rounded-md font-semibold text-center transition-colors"
                >
                  Receba promoções
                </Link>
              </li>
              <li>
                <Link to="/minha-conta" className="flex items-center gap-2 py-2">
                  <User size={20} />
                  <span>Minha Conta</span>
                </Link>
              </li>
              <li>
                <Link to="/carrinho" className="flex items-center gap-2 py-2">
                  <ShoppingCart size={20} />
                  <span>Carrinho ({totalItems})</span>
                </Link>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;