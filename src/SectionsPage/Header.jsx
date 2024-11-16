// src/SectionsPage/Header.jsx
import React from 'react';
import CardFood from '../Components/CardFood';

const Header = () => {
  return (
    <header className="h-screen">
      <div className="flex w-2/3 m-auto gap-6 h-4/5">
        <div className="max-w-3xl flex flex-col gap-5 justify-center">
          <h1 className="text-5xl font-bold">
            <span className="text-green-500">Disfruta</span> diferentes platillos con recetas{' '}
            <span className="text-green-500">exquisitas</span>
          </h1>
          <p className="text-2xl">Con chefs profesionales con más de 5 años de experiencia</p>
          <div className="flex gap-5">
            <button className="px-5 py-2 bg-green-500 rounded-lg text-white hover:bg-green-600 transition-colors ease-in duration-180">
              Comprar ahora
            </button>
            <button className="px-5 py-2 bg-green-500 rounded-lg text-white hover:bg-green-600 transition-colors ease-in duration-180">
              Redes
            </button>
          </div>
        </div>
        <div className="w-2/3 flex flex-col gap-5 justify-center">
          <img src={"src/assets/farfalle-pasta-with-seafood-cherry-tomatoes-green-peas (1).jpg"} alt="Delicious Farfalle Pasta" />
        </div>
      </div>

      <div className="flex gap-8 items-center justify-center flex-col">
        <h3 className="text-3xl font-bold">Prueba deliciosas:</h3>
        <div className="flex gap-8 items-center justify-center">
          <CardFood img="src/assets/farfalle-pasta-with-seafood-cherry-tomatoes-green-peas-removebg-preview.png" title="Comidas" />
          <CardFood img={"src/assets/high-angle-long-drink-with-mint-removebg-preview.png"} title="Bebidas" />
          <CardFood img={"src/assets/cupcakes-removebg-preview.png"} title="Postres" />
        </div>
      </div>
    </header>
  );
};

export default Header;
