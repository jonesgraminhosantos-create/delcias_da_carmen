import React from 'react';
import { ChefHat, Instagram, Facebook, Phone } from 'lucide-react';

export function Footer() {
  return (
    <footer id="contato" className="bg-secondary text-gray-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <a href="/" className="flex items-center gap-2 mb-4">
              <ChefHat className="h-8 w-8 text-primary" />
              <span className="text-2xl font-bold text-white">Delícias da Carmen</span>
            </a>
            <p className="text-sm text-gray-400">Sabor de casa, na sua porta.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Navegação</h3>
            <ul className="space-y-2">
              <li><a href="#inicio" className="hover:text-primary transition-colors">Início</a></li>
              <li><a href="#cardapio" className="hover:text-primary transition-colors">Cardápio</a></li>
              <li><a href="#contato" className="hover:text-primary transition-colors">Contato</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contato</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <Phone size={16} />
                <span>(54) 99999-8888</span>
              </li>
              <li>
                <p>Rua das Flores, 123</p>
                <p>Caxias do Sul, RS</p>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Siga-nos</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary transition-colors"><Instagram size={24} /></a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors"><Facebook size={24} /></a>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-700 pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2025 Delícias da Carmen. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
