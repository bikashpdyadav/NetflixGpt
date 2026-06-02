export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${process.env.REACT_APP_TMDB_API_KEY}`,
  },
};

export const RAPID_API = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_RAPIDAPI_KEY,
    "X-RapidAPI-Host": "netflix54.p.rapidapi.com",
  },
};

export const GPT_API_KEY = process.env.REACT_APP_OPENAI_API_KEY;

export const IMAGES_URL = "https://image.tmdb.org/t/p/w500/";
export const BACKDROP_IMAGE_URL = "https://image.tmdb.org/t/p/original";
export const API_URL = "https://api.themoviedb.org/3/movie/";
export const API_URL_MOVIE = "https://api.themoviedb.org/3/tv/";

export const SUPPORTED_LANGUAGE = [
  { identifier: "en", name: "English" },
  { identifier: "hindi", name: "Hindi" },
  { identifier: "spanish", name: "Spanish" },
];
