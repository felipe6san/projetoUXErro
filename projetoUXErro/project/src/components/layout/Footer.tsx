import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Package, Award } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-orange-500 text-black pt-8 pb-4">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Institutional Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">INSTITUCIONAL</h3>
            <ul className="space-y-2">
              <li><Link to="/quem-somos" className="hover:underline">Quem somos</Link></li>
              <li><Link to="/trocas-devolucoes" className="hover:underline">Trocas e Devoluções</Link></li>
              <li><Link to="/garantia" className="hover:underline">Compra Garantida</Link></li>
              <li><Link to="/privacidade" className="hover:underline">Políticas de Privacidade</Link></li>
              <li><Link to="/promocoes" className="hover:underline">Cadastre-se para promoções</Link></li>
            </ul>
          </div>
          
          {/* Contact Channels */}
          <div>
            <h3 className="text-xl font-bold mb-4">CANAIS DE ATENDIMENTO</h3>
            <ul className="space-y-2">
              <li><strong>(15) 3215-5498</strong> | VENDAS</li>
              <li><strong>(15) 3215-4895</strong> | SAC</li>
              <li className="mt-4">alojadosom@vendas.com</li>
              <li>alojadosom@sac.com</li>
            </ul>
          </div>
          
          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center md:justify-end gap-4">
            <div className="flex flex-col items-center">
              <div className="bg-white rounded-full p-3 mb-2">
                <Package className="h-10 w-10 text-orange-500" />
              </div>
              <span className="text-sm text-center">Entrega Garantida</span>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="bg-white rounded-full p-3 mb-2">
                <ShieldCheck className="h-10 w-10 text-orange-500" />
              </div>
              <span className="text-sm text-center">Compra Segura</span>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="bg-white rounded-full p-3 mb-2">
                <Award className="h-10 w-10 text-orange-500" />
              </div>
              <span className="text-sm text-center">Melhor Atendimento</span>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-4 border-t border-black/20 text-center">
          <p>© 2025 A Loja do Som - Todos os direitos reservados</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;