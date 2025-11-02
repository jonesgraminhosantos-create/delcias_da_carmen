import React from 'react';
import { UtensilsCrossed, Smartphone, MapPin } from 'lucide-react';

const steps = [
  {
    icon: <UtensilsCrossed className="h-12 w-12 text-primary" />,
    title: "Escolha seu Prato",
    description: "Navegue pelo nosso cardápio do dia e adicione suas delícias preferidas ao carrinho.",
  },
  {
    icon: <Smartphone className="h-12 w-12 text-primary" />,
    title: "Faça o Pedido",
    description: "Preencha seus dados de entrega e finalize a compra em poucos cliques, de forma rápida e segura.",
  },
  {
    icon: <MapPin className="h-12 w-12 text-primary" />,
    title: "Acompanhe e Receba",
    description: "Acompanhe seu motoboy em tempo real e receba sua comida quentinha, no conforto da sua casa.",
  },
];

export function HowItWorks() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Como Funciona
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Pedir sua comida favorita nunca foi tão fácil.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {steps.map((step, index) => (
            <div key={index} className="text-center p-6 bg-gray-50 rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center justify-center h-20 w-20 mx-auto bg-primary/10 rounded-full mb-6">
                {step.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
