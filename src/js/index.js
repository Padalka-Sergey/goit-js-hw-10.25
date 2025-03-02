import { fetchBreeds, fetchCatByBreed } from './cat-api';

const ref = {
  select: document.querySelector('.breed-select'),
  catInfo: document.querySelector('.cat-info'),
  textLoader: document.querySelector('.loader'),
  textError: document.querySelector('.error'),
};

fetchBreeds(makeMarkupSelect, showLoaderSelect);
ref.select.addEventListener('change', selectedCat);

function makeMarkupSelect(dataResp) {
  const markup = dataResp
    .map(dataEl => `<option value=${dataEl.id}>${dataEl.name}</option>`)
    .join('');
  ref.select.insertAdjacentHTML('beforeend', markup);
}

function selectedCat(evt) {
  const selectedValue = evt.currentTarget.value;
  fetchCatByBreed(selectedValue, makeMarkupCat, showLoaderCat);
  ref.catInfo.innerHTML = '';
  ref.textLoader.classList.remove('is-notActive-loader');
}

function makeMarkupCat(dataResp) {
  const markup = `<img src=${dataResp[0].url} alt=${dataResp[0].breeds[0].name}
width="350"/><div class="text-info"><h1>${dataResp[0].breeds[0].name}</h1><p>${dataResp[0].breeds[0].description}</p><p><b>Temperament:</b> ${dataResp[0].breeds[0].temperament}</p></div>`;

  ref.catInfo.insertAdjacentHTML('beforeend', markup);
}

function showLoaderSelect() {
  ref.select.classList.remove('is-notActive-select');
  ref.textLoader.classList.add('is-notActive-loader');
}

function showLoaderCat() {
  ref.textLoader.classList.add('is-notActive-loader');
}
