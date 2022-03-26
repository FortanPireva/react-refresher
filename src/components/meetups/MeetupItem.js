import React, { useContext } from "react";
import classes from "./MeetupItem.module.css";
import Card from "../ui/Card";
import FavoritesContext from "../../store/contexts/FavoriteContextProvider";
import { useCallback } from "react";
const MeetupItem = (props) => {
  const favoriteContext = useContext(FavoritesContext);

  const isFavorite = favoriteContext.itemIsFavorite(props.id);

  const toggleFavorite = () => {
    debugger;
    if (isFavorite) {
      favoriteContext.removeFavorite(props.id);
    } else {
      favoriteContext.addFavorite({
        title: props.title,
        description: props.description,
        id: props.id,
        address: props.address,
        image: props.image,
      });
    }
  };
  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt="" />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
          <p>{props.description}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={toggleFavorite}>
            {isFavorite ? "Remove from Favorites" : "To Favorites"}
          </button>
        </div>
      </Card>
    </li>
  );
};

export default MeetupItem;
