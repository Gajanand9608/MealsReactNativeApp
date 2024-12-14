import { createContext, useState } from "react";

export const FavoritesContext = createContext({
  ids: [],
  addFavorites: (id) => {},
  removeFavorites: (id) => {},
});

function FavoritesContextProvider({ children }) {
  const [favoritesMeals, setFavoritesMeals] = useState([]);

  function addFavoritesMeals(id){
    setFavoritesMeals((currIds) => [...currIds,id]);
  }

  function removeFavoritesMeals(id){
    setFavoritesMeals((currIds) => currIds.filter((currId) => currId !== id ));
  }

  const value = {
    ids: favoritesMeals,
    addFavorites: addFavoritesMeals,
    removeFavorites: removeFavoritesMeals,
  };

  return <FavoritesContext.Provider value = {value}>{children}</FavoritesContext.Provider>;
}

export default FavoritesContextProvider;
