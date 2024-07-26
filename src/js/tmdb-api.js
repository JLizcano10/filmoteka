import axios from "axios";
const ACCESS_KEY = "be090147a92df683102f0a5ce90c5d48";
const ACCESS_TOKEN =
  "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiZTA5MDE0N2E5MmRmNjgzMTAyZjBhNWNlOTBjNWQ0OCIsIm5iZiI6MTcyMTM0NTI1MC4yMzE1MzQsInN1YiI6IjY1MzljMGU3Njc4MjU5MDBjN2U4MzA1ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vd11rqMcaSabyvvXO3ds3rJiFVzfpprCh5FH6EU2LzQ";
const BASE_URL = "https://api.themoviedb.org/3/";

//api.themoviedb.org/3/movie/popular?language=en-US&page=1
//api.themoviedb.org/3/search/movie?query=batman&include_adult=false&language=en-US&page=1
https: axios.defaults.headers.common["Authorization"] = ACCESS_TOKEN;

export const fetchMovies = async (route, searchParams) => {
  const response = await axios.get(
    `${BASE_URL}${route}${searchParams}&include_adult=false&language=en-US`
  );
  // return response.data.results;
  return response.data;
};
// https://api.themoviedb.org/3/movie/1022789?language=en-US
export const fetchMovieByID = async (id) => {
  const response = await axios.get(`${BASE_URL}movie/${id}?language=en-US`);
  return response.data;
};
