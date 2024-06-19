import axios from "axios";

const API_KEY = "4fb3dd9caeeb54d4da0236f5273e0e56";
const BASE_URL = "https://gnews.io/api/v4";

const fetchNews = async (category = "general", page = 1, pageSize = 10) => {
  const response = await axios.get(`${BASE_URL}/top-headlines`, {
    params: {
      country: "in",
      category,
      page,
      max: pageSize,
      apikey: API_KEY,
    },
  });
  return response.data;
};

const searchNews = async (query, page = 1, pageSize = 10) => {
  const response = await axios.get(`${BASE_URL}/search`, {
    params: {
      q: query,
      page,
      country: "in",
      apikey: API_KEY,
      max: pageSize,
    },
  });
  return response.data;
};

export { fetchNews, searchNews };
