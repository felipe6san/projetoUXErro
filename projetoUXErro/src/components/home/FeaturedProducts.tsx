import React from 'react';
import ProductCard from './ProductCard';
import { Product } from '../../types/product';

const FeaturedProducts: React.FC = () => {
  const products: Product[] = [
    {
      id: 1,
      name: 'Violão Clássico de Nylon Verniz Brilhante CG 100 Preto',
      price: 258.00,
      imageUrl: 'https://d1z9meo96z0rqn.cloudfront.net/Custom/Content/Products/14/12/14129_sa-20-classico-aco-eletroacustico-ps-4751-135497_m1_637722346580603993.webp',
      category: 'cordas'
    },
    {
      id: 2,
      name: 'Guitarra Elétrica Giannini G-101 Standard Stratocaster 1H2s Preto',
      price: 811.31,
      imageUrl: 'https://m.media-amazon.com/images/I/41pFnxsY2uL._AC_UF894,1000_QL80_.jpg',
      category: 'cordas'
    },
    {
      id: 3,
      name: 'Bateria Musical Sonotec Premium DX720',
      price: 3210.00,
      imageUrl: 'https://images.tcdn.com.br/img/img_prod/789576/bateria_musical_sonotec_d_one_street_ds22bk_preto_1032260_1_19c1bf52a9b4498f09686b274f0666f1.png',
      category: 'bateria-percussao'
    },
    {
      id: 4,
      name: 'Microfones Lelong Profissional MT-1028 Dinâmico P10 Preto/Cinza',
      price: 95.00,
      imageUrl: 'https://http2.mlstatic.com/D_NQ_NP_2X_638365-MLA73321141560_122023-F.webp',
      category: 'audio'
    },
    {
      id: 5,
      name: 'Ukulele Concerto Winner 11023 Cor Natural',
      price: 281.00,
      imageUrl: 'https://http2.mlstatic.com/D_NQ_NP_941221-MLA79343381552_092024-O.webp',
      category: 'cordas'
    },
    {
      id: 6,
      name: 'Guitarra Gibson Les Paul Standard 70S Deluxe - Gold Top',
      price: 37611.00,
      imageUrl: 'https://cdn.awsli.com.br/1920/1920376/produto/13922014552f75add74.jpg',
      category: 'cordas'
    }
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default FeaturedProducts;