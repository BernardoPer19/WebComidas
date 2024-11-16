import React from 'react'
import { useFavorites } from '../context/ContextCart';
import DeleteFavs from './DeleteFavs';

function AllFavoritesCard({removeFavorite}) {
    const { favorites, setFavorites } = useFavorites(); // Accede a los favoritos y la función para eliminarlos
  return (
    <div className="absolute top-28 right-16 bg-white p-4 shadow-lg rounded-lg w-1/3">
    <h3 className="text-xl font-bold ">Favoritos</h3>
    <ul className="flex pt-6 gap-6 justify-center items-center mb-5">
      <li className="font-bold w-32 text-center">Nombre</li>
      <li className="font-bold w-20 text-center">Precio</li>
      <li className="font-bold w-16 text-center">Imagen</li>
      <li className="font-bold w-20 text-center">Eliminar</li>
    </ul>
    <hr />
    {favorites.map((fav) => (
      <ul
        key={fav.idMeal}
        className="flex gap-16 justify-center items-center mb-4"
      >
        <li className="w-32 text-center">{fav.strMeal}</li>
        <li className="w-20 text-center">{fav.randomPrice}$</li>
        <li className="w-16 text-center">
          <img
            className="w-16 h-16 object-cover"
            src={fav.strMealThumb}
            alt={fav.strMeal}
          />
        </li>
        <li className="w-20 text-center">
          <DeleteFavs fav={fav} onDeleteProd={removeFavorite} />
        
        </li>
      </ul>
    ))}
    <button
      className="flex bg-green-500 text-white items-center justify-center w-full"
      onClick={() => setFavorites([])} 
    >
      Eliminar Todo
    </button>
  </div>
  )
}

export default AllFavoritesCard
