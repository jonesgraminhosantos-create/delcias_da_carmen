import React from 'react';

export function Hero() {
  return (
    <section id="inicio" className="relative h-[calc(100vh-80px)] min-h-[500px] flex items-center justify-center text-white">
      <div className="absolute inset-0 bg-black/60 z-10"></div>
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
          alt="Mesa com vários pratos de comida caseira" 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="relative z-20 text-center px-4">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight drop-shadow-lg">
          Sabor de casa, <span className="text-primary">na sua porta.</span>
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-gray-200 drop-shadow-md">
          Marmitas e porções caseiras feitas com amor, entregues com a agilidade que você precisa.
        </p>
        <div className="mt-10">
          <a
            href="#cardapio"
            className="inline-block bg-primary text-white font-bold text-lg px-10 py-4 rounded-lg shadow-xl hover:bg-primary-600 transform hover:-translate-y-1 transition-all duration-300"
          >
            Ver Cardápio do Dia
          </a>
        </div>
      </div>
    </section>
  );
}
