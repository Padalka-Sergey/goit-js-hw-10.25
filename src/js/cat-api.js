import axios from 'axios';

axios.defaults.baseURL = 'https://api.thecatapi.com/v1';
axios.defaults.headers.common['x-api-key'] =
  'live_dQuAF2pHJj23iJ2FMfklaGTDoTtwEarWY1Oy4DhSrDVaK6BwG3daRESWIuzSfuis';
axios.defaults.headers.post['Content-Type'] = 'application/json';

function fetchBreeds() {
  return axios
    .get('/breeds')
    .then(({ data }) => {
      return data;
    })
    .catch(error => {
      console.log(error);
    });
}

function fetchCatByBreed(breedId) {
  return axios
    .get(`images/search?breed_ids=${breedId}`)
    .then(({ data }) => {
      return data;
    })
    .catch(error => {
      console.log(error);
    });
}

export { fetchBreeds, fetchCatByBreed };
