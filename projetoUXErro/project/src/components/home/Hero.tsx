import React from 'react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <div className="w-full bg-[url('https://images.pexels.com/photos/164743/pexels-photo-164743.jpeg?auto=compress')] bg-cover bg-center">
      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="max-w-3xl bg-black/70 p-8 rounded-lg backdrop-blur-sm">
          <div className="relative mb-4">
            <div className="inline-block bg-orange-500 text-white px-3 py-1 rotate-[-5deg] absolute -top-5 -left-2 z-10">
              <span className="font-bold">EXCLUSIVO NA</span>
            </div>
            <h2 className="text-2xl md:text-3xl text-orange-500 font-bold underline underline-offset-4 mt-2">
              A LOJA DO SOM
            </h2>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4">
            BATERIA ELETRÔNICA DONNER DED-200
          </h1>
          
          <h3 className="text-3xl md:text-4xl font-bold text-orange-500 mb-6">
            PARA TODOS OS NÍVEIS
          </h3>
          
          <p className="text-white text-lg mb-8 max-w-2xl">
            Experimente a Donner DED-200 e leve seu som a outro nível! Perfeita para iniciantes
            e músicos experientes com qualidade de som premium.
          </p>
          
          <Link 
            to="/produto/bateria-donner-ded-200"
            className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-md font-bold text-lg transition-colors"
          >
            SAIBA MAIS
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;