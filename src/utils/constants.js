export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4YzQ3ZmQ1NWZhZTQ5MzhiNzBlOWNmYWM1ZDNlMGNhOCIsInN1YiI6IjY1NGQ0YzQ3YjE4ZjMyMDBhYzNmMDQxMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.mxP1Lq7JkXdnIxKJHMK1YD96S8Z7mHNVjDCRIZ3qeBM",
  },
};

export const RAPID_API = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "eaab9cd952msh5b38547f03b5924p1417edjsncf5bf10d246b",
    "X-RapidAPI-Host": "netflix54.p.rapidapi.com",
  },
};

export const IMAGES_URL = "https://image.tmdb.org/t/p/w500/";
export const API_URL = "https://api.themoviedb.org/3/movie/";
export const API_URL_MOVIE = "https://api.themoviedb.org/3/tv/";

export const SUPPORTED_LANGUAGE = [
  { identifier: "en", name: "English" },
  { identifier: "hindi", name: "Hindi" },
  { identifier: "spanish", name: "Spanish" },
];
