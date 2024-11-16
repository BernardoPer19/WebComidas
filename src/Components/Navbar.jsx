import React, { useState } from "react";
import { Link } from "react-router-dom";
import cartIcon from "../assets/shopping-cart.svg";
import heartIcon from "../assets/heart-svgrepo-com.svg";
import { useFavorites } from "../context/ContextCart";
import DeleteProds from "./DeleteProds";
import AllFavoritesCard from "./AllFavoritesCard";
import AllCartProds from "./AllCartProds";

const Navbar = () => {
  const [toggleCart, setToggleCart] = useState(false);
  const [toggleFavorites, setToggleFavorites] = useState(false);
  const {
    favorites,
    removeFavorite,
    setFavorites,
    inCart,
    setInCart,
    removeCart,
  } = useFavorites(); // Accede a los favoritos y la función para eliminarlos

  const handleToggleCart = () => {
    setToggleCart(!toggleCart);
    setToggleFavorites(false); // Ocultar el div de favoritos cuando se abre el carrito
  };

  const handleToggleFavorites = () => {
    setToggleFavorites(!toggleFavorites);
    setToggleCart(false); // Ocultar el div del carrito cuando se abre favoritos
  };

  return (
    <nav className="p-6 flex justify-center gap-9 bg-green-500 items-center w-full m-auto">
      <ul className="flex gap-11 text-white font-bold text-xl">
        <li>
          <Link to="/">Inicio</Link>
        </li>
        <li>
          <Link to="/Menu">Menu</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/Order">Order</Link>
        </li>
        <li>
          <Link to="/FavPageAstro">Contact</Link>
        </li>
      </ul>
      <div className="flex gap-5 text-white font-bold">
        <img
          onClick={handleToggleCart}
          className="w-8 cursor-pointer"
          src={cartIcon}
          alt="Carrito de compras"
        />
        <img
          onClick={handleToggleFavorites}
          className="w-6 cursor-pointer"
          src={heartIcon}
          alt="Favoritos"
        />
      </div>

      {/* Div que muestra la lista del carrito */}
      {toggleCart &&
        (inCart.length ? (
          <AllCartProds removeCart={removeCart} setInCart={setInCart} />
        ) : (
          <div className="absolute top-28 right-16 bg-white p-4 shadow-lg rounded-lg w-1/3">
            <h3 className="text-xl font-bold">No Hay Productos Añadidos</h3>
          </div>
        ))}

      {/* Div que muestra la lista de favoritos */}
      {toggleFavorites &&
        (favorites.length ? (
          <AllFavoritesCard
            removeFavorite={removeFavorite}
            setFavorites={setFavorites}
          />
        ) : (
          <div className="absolute top-28 right-16 bg-white p-4 shadow-lg rounded-lg w-1/3">
            <h3 className="text-xl font-bold">No Hay Favoritos</h3>
          </div>
        ))}
    </nav>
  );
};

export default Navbar;
