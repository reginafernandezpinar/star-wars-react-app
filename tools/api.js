import axios from "axios";

const API_BASE_URL = "https://swapi.dev/api/";
const API_PEOPLE = "people/";

export const fetchCharacterList = () =>
  axios({
    method: "get",
    url: `${API_BASE_URL}${API_PEOPLE}`,
  });

export const fetchMoreCharacters = (nextPageUrl) => 
  axios({
    method: "get",
    url: nextPageUrl,
  });

export const fetchCharacterDetail = (id) => 
  axios({
    method: "get",
    url: `${API_BASE_URL}${API_PEOPLE}${id}/`,
  });

export const fetchCharacterFilms = (url) => 
  axios({
    method: "get",
    url,
  });
