// src/Components/CardFood.jsx
import React from 'react';

const CardFood = ({ img, title }) => {
  return (
    <div className="flex flex-col items-center">
      <img src={img} alt={title} className="w-32 h-32 object-cover" />
      <h4 className="text-xl font-semibold">{title}</h4>
    </div>
  );
};

export default CardFood;
