import React, { useState } from "react";
import { useParams } from "react-router-dom";
import QuantityProds from "../cart/components/QuantityProds";
import { useFavorites } from "../context/ContextCart";

const ProductDetailPage = () => {
  const { id } = useParams();
  const { addToCart, addFavorite, removeFavorite, favorites } = useFavorites(); // Usamos addToCart y addFavorite desde el contexto
  const [liked, setLiked] = useState(false);

  // Simulación de datos; deberás reemplazar esto con una consulta o contexto global
  const product = JSON.parse(localStorage.getItem("selectedProduct"));

  if (!product) {
    return <p>Producto no encontrado.</p>;
  }

  const handleAddToCart = () => {
    addToCart(product); // Agregamos el producto al carrito
  };

  const handleAddToFav = () => {
    if (liked) {
      removeFavorite(product.idMeal); // Si ya está en favoritos, lo eliminamos
    } else {
      addFavorite(product); // Agregamos el producto a favoritos
    }
    setLiked(!liked); // Cambiamos el estado de "me gusta"
  };

  return (
    <div className="p-44 flex items-center justify-center max-w-7xl m-auto gap-12">
      <div>
        <img
          className="w-64 h-64 object-cover rounded-md my-4"
          src={product.strMealThumb || product.strDrinkThumb}
          alt={product.strMeal || product.strDrink}
        />
      </div>
      <div className="w-2/3">
        <h1 className="text-2xl font-bold">
          {product.strMeal || product.strDrink}
        </h1>
        <p className="text-lg">
          {product.strInstructions ||
            `Instrucciones: Lorem ipsum dolor sit amet consectetur.`}
        </p>
        <p className="text-lg text-gray-600">Precio: ${product.randomPrice}</p>
        <div className="flex gap-4 items-center">
          <button
            onClick={handleAddToCart}
            className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
          >
            Añadir al carrito
          </button>
          <svg
            onClick={handleAddToFav}
            className={`w-6 h-6 transition-colors ${
              liked ? "text-red-500" : "text-gray-400"
            }`}
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M3.172 5.172a4 4 0 015.656 0L10 6.344l1.172-1.172a4 4 0 115.656 5.656l-6 6-6-6a4 4 0 010-5.656z" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
