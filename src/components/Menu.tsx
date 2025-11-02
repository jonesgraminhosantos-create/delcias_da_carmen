import React from 'react';
import { ShoppingCart } from 'lucide-react';
import type { MenuItem } from '../types';

const menuItems: MenuItem[] = [
  {
    id: 1,
    name: 'Feijoada Completa',
    description: 'Acompanha arroz, couve, farofa e laranja. Serve 1 pessoa.',
    price: '29,90',
    imageUrl: 'https://images.unsplash.com/photo-1598214886806-2c88b8183493?q=80&w=2070&auto=format&fit=crop',
  },
  {
    id: 2,
    name: 'Bife à Parmegiana',
    description: 'Bife empanado com molho de tomate e queijo. Acompanha arroz e fritas.',
    price: '32,50',
    imageUrl: 'https://images.unsplash.com/photo-1629552182113-f642415c89b5?q=80&w=1932&auto=format&fit=crop',
  },
  {
    id: 3,
    name: 'Frango Grelhado Fit',
    description: 'Filé de frango grelhado com legumes no vapor e arroz integral.',
    price: '27,00',
    imageUrl: 'https://images.unsplash.com/photo-1432139555190-58524dae6a55?q=80&w=1974&auto=format&fit=crop',
  },
  {
    id: 4,
    name: 'Lasanha à Bolonhesa',
    description: 'Massa fresca, molho bolonhesa caseiro e muito queijo. Pedaço generoso.',
    price: '28,90',
    imageUrl: 'https://images.unsplash.com/photo-1633436374961-697b1d8343c9?q=80&w=1964&auto=format&fit=crop',
  },
   {
    id: 5,
    name: 'Strogonoff de Carne',
    description: 'Cubos de filé mignon ao molho cremoso com champignon. Acompanha arroz e batata palha.',
    price: '34,00',
    imageUrl: 'https://images.unsplash.com/photo-1618452294622-db0b3f204543?q=80&w=1964&auto=format&fit=crop',
  },
  {
    id: 6,
    name: 'Salada Caesar com Frango',
    description: 'Alface romana, croutons, queijo parmesão, tiras de frango grelhado e molho caesar.',
    price: '25,00',
    imageUrl: 'https://images.unsplash.com/photo-1550304943-4f24f54ddde9?q=80&w=2070&auto=format&fit=crop',
  },
];

export function Menu() {
  return (
    <section id="cardapio" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Cardápio do Dia
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Pratos preparados com ingredientes frescos e muito carinho.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuItems.map((item) => (
            <div key={item.id} className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col group">
              <div className="relative">
                <img src={item.imageUrl} alt={item.name} className="h-56 w-full object-cover group-hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{item.name}</h3>
                <p className="text-gray-600 flex-grow">{item.description}</p>
                <div className="mt-4 flex justify-between items-center">
                  <p className="text-2xl font-bold text-primary">
                    R$ {item.price}
                  </p>
                  <button className="flex items-center gap-2 bg-secondary text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors">
                    <ShoppingCart size={18} />
                    <span>Pedir</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
