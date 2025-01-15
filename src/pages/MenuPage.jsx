// src/pages/MenuPage.jsx
import React from 'react';
import ContainerShop from '../cart/Components/ContainerShop';  
import { useFood } from '../cart/hooks/useFood';  

const MenuPage = () => {
  const {  loading, error } = useFood(); 

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
      <div className="menu-page">
        <ContainerShop /> 
      </div>
  );
};

export default MenuPage;
