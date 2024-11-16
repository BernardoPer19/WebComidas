import { useState } from "react";
import { useFood } from "../hooks/useFood";
import BtnFilters from "./BtnFilters";
import {ShoppingCards} from "./ShoppingCards";

function ContainerShop() {
  const [category, setCategory] = useState("comida"); // Establece un valor inicial
  const { food, drinks, desserts, loading, error } = useFood();
  
  const filteredItems = category === "comida" ? food : category === "bebidas" ? drinks : desserts;

  return (
    <main>
      <BtnFilters setCategory={setCategory} />

      {loading ? (
        <p className="text-center text-4xl font-bold text-green-500">Cargando...</p>
      ) : error ? (
        <p>Error al cargar los datos: {error}</p>
      ) : (
        <ShoppingCards filteredItems={filteredItems} />
      )}
    </main>
  );
}

export default ContainerShop;
