import axios from 'axios';
import QueryString from 'qs';

const API_KEY = 'nUD5oESj7jzTLKSkFg0DERwyWhqK4sLTaeKS0p9a';

export async function fetchCuriosityPhotos(sol: number) {
  return axios.get(
    'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?' +
      QueryString.stringify({sol, api_key: API_KEY}),
  );
}
