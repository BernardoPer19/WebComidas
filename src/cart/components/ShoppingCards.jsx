import { useFavorites } from "../../context/ContextCart";
import HeartButton from "./HeartButton";
import SearchBtn from './SearchBtn'


export function ShoppingCards({ filteredItems }) {
  const { addFavorite, addToCart } = useFavorites();  

  function getRandomPrice() {
    return (Math.floor(Math.random() * 21) + 10).toFixed(2);
  }


  const updatedItems = filteredItems.slice(0, 24).map((item) => ({
    ...item,
    randomPrice: getRandomPrice()
  }));

  return (
    <div className="flex flex-wrap items-center justify-center gap-6">
      {updatedItems.map((item) => (
        <div className="w-96 h-96 flex flex-col justify-center items-center gap-2 p-4 bg-white rounded-lg shadow-lg" key={item.idMeal || item.idDrink}>
          <img
            className="w-full h-48 object-cover rounded-md"
            src={item.strMealThumb || item.strDrinkThumb}
            alt={item.strMeal || item.strDrink}
          />
          <h1 className="text-xl">{item.strMeal || item.strDrink}</h1>
          <p className="text-gray-700">
            Precio:
            <span className="text-green-500 font-bold">${item.randomPrice}</span> 
          </p>

          <div className="flex items-center gap-2">
            <button
              onClick={() => addToCart(item)} 
              className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
            >
              Añadir al carrito
            </button>
            <HeartButton item={item} addFavorite={addFavorite} />  
            <SearchBtn product={item} />
          </div>
        </div>
      ))}
    </div>
  );
}
