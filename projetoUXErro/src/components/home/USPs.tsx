import React from 'react';
import { CreditCard, CheckCircle, Percent } from 'lucide-react';

const USPs: React.FC = () => {
  const usps = [
    {
      icon: <CreditCard className="h-12 w-12" />,
      title: 'PARCELAMENTO',
      description: 'em até 6x sem juros'
    },
    {
      icon: <CheckCircle className="h-12 w-12" />,
      title: 'PRODUTOS ORIGINAIS',
      description: 'com garantia e nota fiscal'
    },
    {
      icon: <Percent className="h-12 w-12" />,
      title: 'MELHORES PREÇOS',
      description: 'promoções exclusivas'
    }
  ];

  return (
    <div className="bg-white text-black py-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {usps.map((usp, index) => (
            <div 
              key={index} 
              className="flex items-center justify-center gap-4 p-4 transition-transform hover:scale-105"
            >
              <div className="text-orange-500">
                {usp.icon}
              </div>
              <div>
                <h3 className="font-bold text-lg">{usp.title}</h3>
                <p className="text-gray-600">{usp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default USPs;