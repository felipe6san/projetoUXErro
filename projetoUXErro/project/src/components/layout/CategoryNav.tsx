import React from 'react';
import { Link } from 'react-router-dom';

const categories = [
  { name: 'BATERIA E PERCUSSÃO', slug: 'bateria-percussao' },
  { name: 'SOPRO', slug: 'sopro' },
  { name: 'CORDAS', slug: 'cordas' },
  { name: 'ÁUDIO', slug: 'audio' },
  { name: 'TECLAS', slug: 'teclas' }
];

const CategoryNav: React.FC = () => {
  return (
    <nav className="bg-orange-500 text-white">
      <div className="container mx-auto">
        <ul className="flex flex-wrap justify-between items-center">
          {categories.map((category) => (
            <li key={category.slug} className="py-3 px-4 text-center flex-grow">
              <Link 
                to={`/categoria/${category.slug}`} 
                className="font-bold hover:text-yellow-300 transition-colors whitespace-nowrap"
              >
                {category.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default CategoryNav;