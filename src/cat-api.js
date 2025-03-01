import axios from 'axios';

axios.defaults.baseURL = 'https://api.thecatapi.com/v1';
axios.defaults.headers.common['x-api-key'] =
  'live_dQuAF2pHJj23iJ2FMfklaGTDoTtwEarWY1Oy4DhSrDVaK6BwG3daRESWIuzSfuis';
axios.defaults.headers.post['Content-Type'] = 'application/json';

export function fetchBreeds(makeMarkup) {
  axios
    .get('/breeds')
    .then(({ data }) => {
      makeMarkup(data);
    })
    .catch(error => {
      console.log(error);
    });
}
