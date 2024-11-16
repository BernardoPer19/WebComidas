import { createContext, useContext, useState } from 'react';

const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);
  const [inCart, setInCart] = useState([])

  const addFavorite = (item) => {
    setFavorites((prevFavorites) => {
      const updatedFavorites = [...prevFavorites, item];
      console.log("Favoritos actualizados: ", updatedFavorites);
      return updatedFavorites;
    });
  };

  const removeFavorite = (favoriteId) => {
    setFavorites((prevFavorites) =>
      prevFavorites.filter(fav => fav.idMeal !== favoriteId)
    );
  };

  const addToCart  = (item) => {
    setInCart((prevCart) => {
      const updatedCart = [...prevCart, item];
      console.log("Cart actualizados: ", updatedCart);
      return updatedCart;
    });
  }

  const removeCart = (cartId) => {
    setInCart((prevCart) =>
      prevCart.filter(cart => cart.idMeal !== cartId)
    );
  };
 

  return (
    <FavoritesContext.Provider value={{ setFavorites, favorites, addFavorite, removeFavorite, addToCart, inCart,removeCart }}>
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = () => {
  return useContext(FavoritesContext);
};
