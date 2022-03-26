import React from "react";
import { createContext, useState } from "react";

const FavoritesContext = createContext({
  favorites: [],
  totalFavorites: 0,
  addFavorite: (favoriteMeetup) => {},
  removeFavorite: (meetupId) => {},
  itemIsFavorite: (meetupId) => {},
});
export const FavoriteContextProvider = (props) => {
  const [userFavorites, setUserFavorites] = useState([]);

  function addFavoriteHandler(favoriteMeetup) {
    setUserFavorites((prevUserFavorites) =>
      prevUserFavorites.concat(favoriteMeetup)
    );
  }

  function removeFavoriteHandler(meetupid) {
    setUserFavorites((prevUserFavorites) =>
      prevUserFavorites.filter((fav) => fav.id !== meetupid)
    );
  }

  function itemInFavoriteHandler(meetupId) {
    return userFavorites.some((fav) => fav.id === meetupId);
  }
  const context = {
    favorites: userFavorites,
    totalFavorites: userFavorites.length,
    addFavorite: addFavoriteHandler,
    removeFavorite: removeFavoriteHandler,
    itemIsFavorite: itemInFavoriteHandler,
  };
  return (
    <FavoritesContext.Provider value={context}>
      {props.children}
    </FavoritesContext.Provider>
  );
};

export default FavoritesContext;
