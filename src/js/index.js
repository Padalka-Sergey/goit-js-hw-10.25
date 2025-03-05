import { fetchBreeds, fetchCatByBreed } from './cat-api';
import SlimSelect from 'slim-select';

Notiflix.Notify.init({
  width: '400px',
  position: 'right-top',
});

const DELAYNOTIF = 10000;

const ref = {
  select: document.querySelector('.breed-select'),
  catInfo: document.querySelector('.cat-info'),
  loader: document.querySelector('.loader'),
  loaderContainer: document.querySelector('.loader-container'),
  // textError: document.querySelector('.error'),
};

fetchBreeds()
  .then(data => {
    makeMarkupSelect(data);
    showSelect();
    makeSlimSelect();
    removeLoader();
  })

  .catch(() => {
    showError(), removeLoader();
  });

ref.select.addEventListener('change', selectedCat);

function makeMarkupSelect(dataResp) {
  const markup = dataResp
    .map(dataEl => `<option value=${dataEl.id}>${dataEl.name}</option>`)
    .join('');
  ref.select.insertAdjacentHTML('beforeend', markup);
}

function selectedCat(evt) {
  const selectedValue = evt.currentTarget.value;

  fetchCatByBreed(selectedValue)
    .then(data => {
      makeMarkupCat(data);
      removeLoader();
    })
    .catch(() => {
      showError(), removeLoader();
    });
  ref.catInfo.innerHTML = '';
  showLoader();
}

function makeMarkupCat(dataResp) {
  const markup = `<img src=${dataResp[0].url} alt=${dataResp[0].breeds[0].name}
width="350"/><div class="text-info"><h1>${dataResp[0].breeds[0].name}</h1><p>${dataResp[0].breeds[0].description}</p><p><b>Temperament:</b> ${dataResp[0].breeds[0].temperament}</p></div>`;

  ref.catInfo.insertAdjacentHTML('beforeend', markup);
}

function showSelect() {
  ref.select.classList.remove('is-notActive-select');
}

function removeLoader() {
  ref.loader.classList.add('is-notActive-loader');
  ref.loaderContainer.classList.add('is-notActive-loader');
}
function showLoader() {
  ref.loader.classList.remove('is-notActive-loader');
  ref.loaderContainer.classList.remove('is-notActive-loader');
}

function showError() {
  // ref.textError.classList.remove('is-notActive-error');
  Notiflix.Notify.failure(
    `Oops! Something went wrong! Try reloading the page!`,
    {
      timeout: DELAYNOTIF,
    }
  );
}

function makeSlimSelect() {
  new SlimSelect({
    select: ref.select,
  });
}
