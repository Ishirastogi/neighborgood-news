import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchNews } from "../../api/newsAPI";

const pageSize = 12; // Number of articles per page

export const getNews = createAsyncThunk(
  "news/getNews",
  async ({ category, page }) => {
    const response = await fetchNews(category,page,pageSize)
    return response;
  }
);

const newsSlice = createSlice({
  name: "news",
  initialState: {
    articles: [],
    category: "general",
    page: 1,
    totalPages: 1,
    status: "idle",
    error: null,
  },
  reducers: {
    setCategory(state, action) {
      state.category = action.payload;
      state.page = 1;
    },
    setPage(state, action) {
      state.page = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getNews.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getNews.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.articles = action.payload.articles;
        state.totalPages = Math.ceil(action.payload.totalResults / pageSize);
      })
      .addCase(getNews.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { setCategory, setPage } = newsSlice.actions;

export default newsSlice.reducer;
