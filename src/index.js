import { fetchBreeds } from './cat-api';

const ref = {
  select: document.querySelector('.breed-select'),
  catInfo: document.querySelector('.cat-info'),
  textLoader: document.querySelector('.loader'),
  textError: document.querySelector('.error'),
};

fetchBreeds(makeMarkup);

function makeMarkup(dataResp) {
  const markup = dataResp
    .map(dataEl => `<option value=${dataEl.id}>${dataEl.name}</option>`)
    .join('');
  ref.select.insertAdjacentHTML('beforeend', markup);
}
