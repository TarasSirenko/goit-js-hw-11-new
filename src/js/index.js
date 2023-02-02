import '../css/styles.css';
import 'simplelightbox/dist/simple-lightbox.min.css';
import Notiflix from 'notiflix';
import SimpleLightbox from 'simplelightbox';
import './change-theme.js';
import './change-language.js';
import './go-up-btn.js';
import './add-favorites.js';
import './home.js';
import imgCardMarcup from '../hbs/imgCardMarcup.hbs';
import { favoritesCardArr } from './add-favorites';

import { Refs } from './refs.js';

const lightboxGallery = new SimpleLightbox('.gallery a');

Notiflix.Notify.init({
  warning: {
    background: '#B3B3B3',
  },
  info: {
    background: '#B3B3B3',
  },
});

const debounce = require('lodash.debounce');
const BASE_URL = 'https://pixabay.com/api/';
const DEBOUNCE_DELAY = 50;

// auxiliary variables--------------
let requestUser = 'nature';
let currentRequest = '';

let currentPage = 1;
let perPage = 30;

let currentLanguage = {
  code: 'en',
  class: 'lenguage-switch__marker--en',
};

if (JSON.parse(localStorage.getItem('currentLanguage')))
  currentLanguage = JSON.parse(localStorage.getItem('currentLanguage'));

// ----------------------------

const searchParams = new URLSearchParams({
  key: '33110097-e31e2273406f912ac77c7c325',
  image_type: 'photo',
  orientation: 'horizontal',
  safesearch: 'true',
  per_page: 30,
});

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
  if (JSON.parse(localStorage.getItem('currentLanguage')))
    currentLanguage = JSON.parse(localStorage.getItem('currentLanguage'));
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

  if (currentPage > 1 && Refs.homeBtn.classList.contains('activ')) {
    // console.log(Refs.favoritesBtn.classList.contains('activ'));
    console.log('sdvsdsv');
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
  console.log(!Refs.favoritesBtn.classList.contains('activ'));
  fechImages();
  Refs.favoritesBtn.classList.remove('activ');
  event.target.classList.add('activ');
}
