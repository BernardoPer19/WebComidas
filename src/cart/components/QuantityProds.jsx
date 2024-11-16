// src/Components/QuantityProds.jsx
import React, { useState } from "react";

const QuantityProds = () => {
  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => {
    setQuantity(prev => prev + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };

  return (
    <div className="flex items-center gap-4 bg-gray-100 rounded-full">
      <button
        onClick={handleDecrement}
        className="bg-gray-400 text-black font-bold px-4 py-2 rounded-full text-2xl"
      >
        -
      </button>
      <span className="text-lg">{quantity}</span>
      <button
        onClick={handleIncrement}
        className="bg-gray-400 text-black font-bold  px-4 py-2 rounded-full text-xl"
      >
        +
      </button>
    </div>
  );
};

export default QuantityProds;
