import { searchParams, BASE_URL } from './fetch-params.js';
import Notiflix from 'notiflix';
import { lightboxGallery } from './utils/light-box.js';

import { Refs } from './refs.js';
import imgCardMarcup from '../hbs/imgCardMarcup.hbs';
import { favoritesCardArr } from './add-favorites';
import {
  getCurrentLanguage,
  updateCurrentLanguage,
} from './utils/for-language.js';

Notiflix.Notify.init({
  warning: {
    background: '#B3B3B3',
  },
  info: {
    background: '#B3B3B3',
  },
});

const debounce = require('lodash.debounce');
const DEBOUNCE_DELAY = 50;

// auxiliary variables--------------
let requestUser = 'nature';
let currentRequest = '';

let currentPage = 1;
let perPage = 30;

let scroll = true;

let currentLanguage = getCurrentLanguage();

// ----------------------------

Refs.requestForm.addEventListener('submit', event => event.preventDefault());
Refs.userInput.addEventListener('input', debounce(onUserInput, DEBOUNCE_DELAY));
Refs.submitButton.addEventListener('click', onSubmitBtnClick);
Refs.loadMoreButton.addEventListener('click', onLoadMoreBtnClick);
fechImages();
function onSubmitBtnClick() {
  if (
    requestUser === currentRequest &&
    !(requestUser === '') &&
    JSON.stringify(currentLanguage) === localStorage.getItem('currentLanguage')
  )
    return;
  if (requestUser === '') {
    clearPage();
    Notiflix.Notify.warning('Enter a search term please.');
    currentRequest = requestUser;
    return;
  }
  currentPage = 1;
  clearPage();
  fechImages().then(searchResultMessage);
}

function searchResultMessage(obj) {
  Notiflix.Notify.info(`Hooray! We found ${obj.totalHits} images.`, {
    background: '#808080',
  });
}

function clearPage() {
  Refs.gallery.innerHTML = '';
  Refs.loadMoreButton.classList.add('visually-hidden');
}

function fechImages() {
  currentLanguage = updateCurrentLanguage();
  return fetch(
    `${BASE_URL}?q=${requestUser}&lang=${currentLanguage.code}&page=${currentPage}&${searchParams}`
  )
    .then(response => response.json())
    .then(obj => {
      obj.hits.length === 0 ? onIncorectRequest() : onCorectRequest(obj);
      // console.log(obj);
      return obj;
    });
}

function onUserInput(event) {
  requestUser = event.target.value;
}

function onLoadMoreBtnClick() {
  scroll = true;
  currentPage += 1;
  fechImages();
}

function onIncorectRequest() {
  clearPage();
  Notiflix.Notify.warning(
    'Sorry, there are no images matching your search query. Please try again.'
  );
  return {};
}

function onCorectRequest(obj) {
  const cards = militaryFavorites(obj, favoritesCardArr);
  renderCards(cards);
  Refs.loadMoreButton.classList.remove('visually-hidden');
  if (perPage * currentPage > obj.totalHits) whenQueryResultsEnd();
  lightboxGallery.refresh();
  currentRequest = requestUser;
  console.log(scroll);
  if (currentPage > 1 && scroll) {
    setTimeout(() => {
      window.scrollBy({
        top: window.innerHeight - 160,
        behavior: 'smooth',
      });
    }, 250);
  }
}

function whenQueryResultsEnd() {
  Refs.loadMoreButton.classList.add('visually-hidden');
  Notiflix.Notify.info(
    'We`re sorry, but you`ve reached the end of search results.'
  );
}

function renderCards(cards) {
  Refs.gallery.insertAdjacentHTML('beforeend', imgCardMarcup(cards));
}

function militaryFavorites(obj, favorites) {
  const idFavoritesArr = favorites.map(card => card.id);

  const favoritesCards = obj.hits.map(el => {
    if (idFavoritesArr.includes(String(el.id))) {
      el.check = 'checked';
    }
    return el;
  });
  return favoritesCards;
}

// hom btn click
Refs.homeBtn.addEventListener('click', onHomeBtnClick);

function onHomeBtnClick(event) {
  event.preventDefault();
  changeActivePage(event);
}

function changeActivePage(event) {
  scroll = false;
  clearPage();
  fechImages();
  Refs.favoritesBtn.classList.remove('activ');
  event.target.classList.add('activ');
}
