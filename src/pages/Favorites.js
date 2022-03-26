import React, { useContext } from "react";
import MeetupList from "../components/meetups/MeetupList";
import FavoritesContext from "../store/contexts/FavoriteContextProvider";

const FavoritesPage = () => {
  const favoriteContext = useContext(FavoritesContext);

  if (favoriteContext.totalFavorites == 0) {
    return (
      <section>
        <p>No favorites</p>
      </section>
    );
  }
  return (
    <section>
      <h1>Favorites</h1>
      <MeetupList meetups={favoriteContext.favorites} />
    </section>
  );
};

export default FavoritesPage;
