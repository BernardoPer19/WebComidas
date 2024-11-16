import { useFavorites } from "../context/ContextCart";
import DeleteProds from "./DeleteProds";

function AllCartProds({ removeCart }) {
  const { inCart, setInCart } = useFavorites();

  return (
    <div className="absolute top-28 right-16 bg-white p-4 shadow-lg rounded-lg w-1/3">
      <h3 className="text-xl font-bold">Carrito</h3>
      <ul className="flex pt-6 gap-6 justify-center items-center mb-5">
        <li className="font-bold w-32 text-center">Nombre</li>
        <li className="font-bold w-20 text-center">Precio</li>
        <li className="font-bold w-16 text-center">Imagen</li>
        <li className="font-bold w-20 text-center">Eliminar</li>
      </ul>
      <hr />
      {inCart.map((prod) => (
        <ul key={prod.idMeal} className="flex gap-16 justify-center items-center mb-4">
          <li className="w-32 text-center">{prod.strMeal}</li>
          <li className="w-20 text-center">${prod.randomPrice}</li>

          <li className="w-16 text-center">
            <img
              className="w-16 h-16 object-cover rounded-md"
              src={prod.strMealThumb}
              alt={prod.strMeal}
            />
          </li>
          <li className="w-20 text-center">
            <DeleteProds prod={prod} onDeleteProd={removeCart} />
          </li>
        </ul>
      ))}
      <button
        className="flex bg-green-500 text-white items-center justify-center w-full"
        onClick={() => setInCart([])} 
      >
        Eliminar Todo
      </button>
    </div>
  );
}

export default AllCartProds;
