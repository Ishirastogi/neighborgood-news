import axios from "axios";

const API_KEY = "462d7648b2a1462d9ac6e59c4861a083";
const BASE_URL = "https://newsapi.org/v2";

const fetchNews = async (category = "general", page = 1, pageSize = 12) => {
  const response = await axios.get(`${BASE_URL}/top-headlines`, {
    params: {
      country: "in",
      category,
      page,
      pageSize,
      apiKey: API_KEY,
    },
  });
  return response.data;
};

const searchNews = async (query, page = 1) => {
  const response = await axios.get(`${BASE_URL}/everything`, {
    params: {
      q: query,
      page,
      apiKey: API_KEY,
    },
  });
  return response.data;
};

export { fetchNews, searchNews };
