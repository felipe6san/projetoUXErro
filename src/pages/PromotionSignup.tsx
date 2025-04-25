import React, { useState } from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import CategoryNav from '../components/layout/CategoryNav';
import { useNavigate } from 'react-router-dom';

const PromotionSignup: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    acceptTerms: false
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would send this data to a server
    alert('Obrigado por se cadastrar! Em breve você receberá nossas promoções por e-mail.');
    navigate('/');
  };
  
  const handleCancel = () => {
    navigate('/');
  };

  return (
    <div className="bg-black text-white min-h-screen flex flex-col">
      <Header />
      <CategoryNav />
      <main className="flex-grow">
        <div className="w-full bg-[url('https://images.pexels.com/photos/164693/pexels-photo-164693.jpeg?auto=compress')] bg-cover bg-center py-16">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-4xl mx-auto bg-black/75 p-10 rounded-lg backdrop-blur-sm">
              <h1 className="text-5xl md:text-6xl font-bold mb-8 text-yellow-300">
                RECEBA NOSSAS PROMOÇÕES EM PRIMEIRA MÃO!
              </h1>
              <h2 className="text-3xl md:text-4xl font-bold mb-12 text-orange-500">
                CADASTRE-SE ABAIXO
              </h2>
              
              <form onSubmit={handleSubmit} className="max-w-xl mx-auto">
                <div className="mb-6">
                  <label htmlFor="name" className="block text-left text-xl mb-2">NOME COMPLETO</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-200 text-black rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="email" className="block text-left text-xl mb-2">E-MAIL</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-200 text-black rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                </div>
                
                <div className="mb-8 text-left flex items-start gap-2">
                  <input
                    type="checkbox"
                    id="acceptTerms"
                    name="acceptTerms"
                    checked={formData.acceptTerms}
                    onChange={handleChange}
                    required
                    className="mt-1"
                  />
                  <label htmlFor="acceptTerms" className="text-lg">
                    Aceito receber e-mails com promoções, cupons de desconto e novidades.
                  </label>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-[180px] justify-center">
                  <button
                    type="submit"
                    className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-md text-xl font-bold transition-colors duration-300"
                  >
                    Cadastrar
                  </button>
                  <button
                    type="button"
                    onClick={handleCancel}
                    className="bg-blue-900 hover:bg-blue-800 text-white px-8 py-3 rounded-md text-xl font-bold transition-colors duration-300"
                  >
                    Cancelar
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PromotionSignup;