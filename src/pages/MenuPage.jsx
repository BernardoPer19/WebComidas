// src/pages/MenuPage.jsx
import React from 'react';
import ContainerShop from '../cart/Components/ContainerShop';  // Contenedor de productos (ajustado a la carpeta 'cart')
import { useFood } from '../cart/hooks/useFood';  // Hook para traer los datos (ajustado a la carpeta 'cart/hooks')

const MenuPage = () => {
  const {  loading, error } = useFood();  // Usar el hook aquí

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
      <div className="menu-page">
        <ContainerShop />  {/* Pasamos las comidas, bebidas y postres */}
      </div>
  );
};

export default MenuPage;
