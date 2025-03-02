import axios from 'axios';

axios.defaults.baseURL = 'https://api.thecatapi.com/v1';
axios.defaults.headers.common['x-api-key'] =
  'live_dQuAF2pHJj23iJ2FMfklaGTDoTtwEarWY1Oy4DhSrDVaK6BwG3daRESWIuzSfuis';
axios.defaults.headers.post['Content-Type'] = 'application/json';

function fetchBreeds(makeMarkupSelect, showLoaderSelect) {
  axios
    .get('/breeds')
    .then(({ data }) => {
      makeMarkupSelect(data);
      showLoaderSelect();
    })
    .catch(error => {
      console.log(error);
    });
}

function fetchCatByBreed(breedId, makeMarkupCat, showLoaderCat) {
  axios
    .get(`images/search?breed_ids=${breedId}`)
    .then(({ data }) => {
      makeMarkupCat(data);
      showLoaderCat();
    })
    .catch(error => {
      console.log(error);
    });
}

export { fetchBreeds, fetchCatByBreed };
