import { fetchBreeds, fetchCatByBreed } from './cat-api';
import SlimSelect from 'slim-select';

const ref = {
  select: document.querySelector('.breed-select'),
  catInfo: document.querySelector('.cat-info'),
  textLoader: document.querySelector('.loader'),
  textError: document.querySelector('.error'),
};

fetchBreeds()
  .then(data => {
    makeMarkupSelect(data);
    showSelect();
    new SlimSelect({
      select: ref.select,
    });
    removeLoader();
  })

  .catch(() => {
    showError(), removeLoader();
  });

ref.select.addEventListener('change', selectedCat);

function makeMarkupSelect(dataResp) {
  console.log('Make Markup Select');
  const markup = dataResp
    .map(dataEl => `<option value=${dataEl.id}>${dataEl.name}</option>`)
    .join('');
  ref.select.insertAdjacentHTML('beforeend', markup);
  // const markup = dataResp.map(dataEl => {
  //   return { text: dataEl.name, value: dataEl.id };
  // });
  // console.log(markup);
  // new SlimSelect({
  //   select: ref.select,
  //   data: markup,
  // });
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
  ref.textLoader.classList.add('is-notActive-loader');
}
function showLoader() {
  ref.textLoader.classList.remove('is-notActive-loader');
}

function showError() {
  ref.textError.classList.remove('is-notActive-error');
}

// function makeSlim() {
//   console.log('Make Slim Select');
//   new SlimSelect({
//     select: ref.select,
//   });
// }
