import axios from 'axios';

const sample = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

export default sample;
