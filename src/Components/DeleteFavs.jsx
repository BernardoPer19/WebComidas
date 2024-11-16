import React from "react";

function DeleteProds({ fav, onDeleteProd }) {
  return (
    <svg
      onClick={() => onDeleteProd(fav.idMeal)} // Pasamos solo el idMeal
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="w-6 cursor-pointer"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  );
}

export default DeleteProds;
