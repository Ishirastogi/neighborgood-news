import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite, removeFavorite } from "../features/news/favoritesSlice";

const FavoriteButton = ({ article }) => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites.articles);
  const isFavorite = favorites.some((fav) => fav.url === article.url);

  const handleFavorite = () => {
    if (isFavorite) {
      dispatch(removeFavorite(article));
    } else {
      dispatch(addFavorite(article));
    }
  };

  return (
    <button
      onClick={handleFavorite}
      className={`px-4 py-2 rounded ${
        isFavorite ? "bg-red-500 text-white" : "bg-gray-200"
      }`}
    >
      {isFavorite ? "Unfavorite" : "Favorite"}
    </button>
  );
};

export default FavoriteButton;
