import React from 'react';
import { Link } from 'react-router-dom';
import { formatCurrency } from '../../utils/format';
import { useCart } from '../../context/CartContext';
import { Product } from '../../types/product';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();
  
  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg transform transition-transform hover:scale-105 flex flex-col">
      <Link to={`/produto/${product.id}`} className="block overflow-hidden h-64">
        <img 
          src={product.imageUrl} 
          alt={product.name} 
          className="w-full h-full object-cover transition-transform hover:scale-110"
        />
      </Link>
      
      <div className="p-4 flex flex-col flex-grow">
        <Link to={`/produto/${product.id}`} className="block">
          <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2 min-h-[3.5rem]">
            {product.name}
          </h3>
        </Link>
        
        <div className="mt-auto">
          <p className="text-orange-500 text-3xl font-bold mb-4">
            {formatCurrency(product.price)}
          </p>
          
          <div className="flex gap-2">
            <button
              onClick={handleAddToCart}
              className="flex-1 bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded-md text-sm font-bold transition-colors uppercase"
            >
              Adicionar ao carrinho
            </button>
            
            <Link 
              to={`/produto/${product.id}`}
              className="flex-1 bg-orange-700 hover:bg-orange-800 text-white py-5 px-4 rounded-md text-sm font-bold transition-colors text-center uppercase"
            >
              Comprar
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;