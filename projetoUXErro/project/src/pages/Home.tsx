import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import CategoryNav from '../components/layout/CategoryNav';
import Hero from '../components/home/Hero';
import FeaturedProducts from '../components/home/FeaturedProducts';
import USPs from '../components/home/USPs';

const Home: React.FC = () => {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col">
      <Header />
      <CategoryNav />
      <main className="flex-grow">
        <Hero />
        <USPs />
        <div className="container mx-auto px-4 py-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
            DESTAQUE DA SEMANA - OS MAIS VENDIDOS
          </h2>
          <FeaturedProducts />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;