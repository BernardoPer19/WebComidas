function BtnFilters({ setCategory }) {
  return (
    <div className="flex p-8 gap-7 justify-center items-center">
      <button
        className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
        onClick={() => setCategory("comida")}
      >
        Comida
      </button>
      <button
        className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
        onClick={() => setCategory("bebidas")}
      >
        Bebidas
      </button>
      <button
        className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
        onClick={() => setCategory("postres")}
      >
        Postres
      </button>
    </div>
  );
}

export default BtnFilters;
