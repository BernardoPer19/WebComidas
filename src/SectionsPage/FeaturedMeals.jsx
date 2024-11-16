// src/SectionsPage/FeaturedMeals.jsx
import React, { useEffect, useState } from 'react';
import HeartIcon from '../Components/HeartIcon'


const api = "https://www.themealdb.com/api/json/v1/1/filter.php?i=";

export const FeaturedMeals = () => {
  const [meals, setMeals] = useState([]);

  function getRandomPrice() {
    return (Math.floor(Math.random() * 21) + 10).toFixed(2);
  }

  useEffect(() => {
    const fetchMeals = async () => {
      try {
        const response = await fetch(api);
        const data = await response.json();
        setMeals(data.meals);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchMeals();
  }, []);

  return (
    <main className="mt-56 pb-6 bg-slate-100">
      <h2 className="text-3xl font-bold text-center p-10 mb-5">
        Nuestros Platillos <span className="text-green-500"> Más Destacados</span>:
      </h2>
      <div className="flex flex-wrap gap-4 justify-center w-2/3 m-auto">
        {meals.slice(0, 8).map((meal) => (
          <div
            key={meal.idMeal}
            className="w-96 h-96 flex flex-col justify-center items-center gap-2 p-4 bg-white rounded-lg shadow-lg"
          >
            <img src={meal.strMealThumb} alt={meal.strMeal} className="w-full h-48 object-cover rounded-md" />
            <h2 className="text-lg font-semibold text-gray-800">{meal.strMeal}</h2>
            <p className="text-gray-700">
              Precio: <span className="text-green-500 font-bold">${getRandomPrice()}</span>
            </p>

            <div className="flex items-center gap-2">
              <button className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600">
                Añadir al carrito
              </button>

              {/* Ícono de corazón interactivo */}
              <HeartIcon />
            </div>
          </div>
        ))}
      </div>

      <a href="/Menu">
        <button className="mt-16 mb-16 px-12 py-3 bg-green-500 text-white rounded-md font-bold text-xl hover:bg-green-600 mx-auto block">
          Ver Más
        </button>
      </a>
    </main>
  );
};

