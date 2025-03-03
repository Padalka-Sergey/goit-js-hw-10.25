import axios from 'axios';

axios.defaults.baseURL = 'https://api.thecatapi.com/v1';
axios.defaults.headers.common['x-api-key'] =
  'live_dQuAF2pHJj23iJ2FMfklaGTDoTtwEarWY1Oy4DhSrDVaK6BwG3daRESWIuzSfuis';
axios.defaults.headers.post['Content-Type'] = 'application/json';

function fetchBreeds(funcs) {
  const { makeMarkupSelect, showSelect, removeLoader, showError } = funcs;
  axios
    .get('/breeds')
    .then(({ data }) => {
      makeMarkupSelect(data);
      showSelect();
      removeLoader();
    })
    .catch(error => {
      showError();
      removeLoader();
      console.log(error);
    });
}

function fetchCatByBreed(funcs) {
  const {
    selectedValue: breedId,
    makeMarkupCat,
    removeLoader,
    showError,
  } = funcs;
  axios
    .get(`images/search?breed_ids=${breedId}`)
    .then(({ data }) => {
      makeMarkupCat(data);
      removeLoader();
    })
    .catch(error => {
      showError();
      removeLoader();
      console.log(error);
    });
}

export { fetchBreeds, fetchCatByBreed };
