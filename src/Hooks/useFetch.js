import { useEffect, useState } from "react";

export const useFood = () => {
  const [food, setFood] = useState([]);
  const [drinks, setDrinks] = useState([]);
  const [desserts, setDesserts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchFood = async () => {
    try {
      setLoading(true);
      const url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood`;
      const responseFetch = await fetch(url);
      const responseData = await responseFetch.json();
      setFood(responseData.meals || []);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const fetchDrinks = async (letter = "") => {
    try {
      setLoading(true);
      const url = letter
        ? `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${letter}`
        : "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a";
      const cocktailResponse = await fetch(url);
      const cocktailData = await cocktailResponse.json();
      setDrinks(cocktailData.drinks || []);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const fetchDesserts = async () => {
    try {
      setLoading(true);
      const url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=Dessert`;
      const responseFetch = await fetch(url);
      const responseData = await responseFetch.json();
      setDesserts(responseData.meals || []);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFood();
    fetchDrinks();
    fetchDesserts();
  }, []);

  return { food, drinks, desserts, loading, error };
};
