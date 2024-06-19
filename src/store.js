import { configureStore } from "@reduxjs/toolkit";
import newsReducer from "./features/news/newsSlice";
import searchReducer from "./features/news/searchSlice";
import favoritesReducer from "./features/news/favoritesSlice";

export const store = configureStore({
  reducer: {
    news: newsReducer,
    search: searchReducer,
    favorites: favoritesReducer,
  },
});
