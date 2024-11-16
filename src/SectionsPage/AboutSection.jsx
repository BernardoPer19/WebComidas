// src/SectionsPage/AboutSection.jsx
import React from 'react';

const AboutSection = () => {
  return (
    <main className="mt-28">
      <h1 className="text-center text-3xl font-bold">Por Qué Nosotros</h1>
      <h2 className="text-center mb-11 text-2xl text-green-500">About</h2>
      <div className="flex w-2/3 m-auto gap-6 h-4/5 flex-row-reverse">
        <div className="max-w-3xl flex flex-col gap-5 justify-center">
          <h1 className="text-5xl font-bold">
            El <span className="text-green-500">Mejor Restaurante</span> del{' '}
            <span className="text-green-500">PAÍS</span>
          </h1>

          <h1 className="text-xl font-bold">
            Con la <span className="text-green-500">Experiencia</span> y la{' '}
            <span className="text-green-500">Eficiencia</span> somos actualmente el restaurante más{' '}
            <span className="text-green-500">Rápido</span>, contamos con{' '}
            <span className="underline md:underline-offset-4 decoration-green-500 text-green-800">+50 empleados</span>{' '}
            y{' '}
            <span className="underline md:underline-offset-4 decoration-green-500 text-green-800">+20 Chefs</span> cada
            uno con{' '}
            <span className="underline md:underline-offset-4 decoration-green-500 text-green-800">
              +5 Experiencia
            </span>{' '}
            pueden confiar en nuestra eficiencia.
          </h1>

          <div className="flex gap-5">
            <button className="px-5 py-2 bg-green-600 rounded-lg text-white hover:bg-green-500 transition-colors ease-in duration-180">
              Velocidad
            </button>
            <button className="px-5 py-2 bg-green-600 rounded-lg text-white hover:bg-green-500 transition-colors ease-in duration-180">
              Delecia
            </button>
            <button className="px-5 py-2 bg-green-600 rounded-lg text-white hover:bg-green-500 transition-colors ease-in duration-180">
              Experiencia
            </button>
          </div>
        </div>
        <div className="w-2/3 flex flex-col gap-5 justify-center">
          <img src="src/assets/delicious-fried-chicken-plate.jpg" alt="Delicious Fried Chicken Plate" />
        </div>
      </div>
    </main>
  );
};

export default AboutSection;
