import React from "react";
import { useSelector } from "react-redux";
import ArticleList from "../components/ArticleList";

const FavoritesPage = () => {
  const articles = useSelector((state) => state.favorites.articles);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Favorites</h1>
      {articles.length === 0 ? (
        <p>No favorite articles yet.</p>
      ) : (
        <ArticleList articles={articles} />
      )}
    </div>
  );
};

export default FavoritesPage;
