import {
  searchParams,
  BASE_URL,
  BASE_URL_VIDEO_PREVIEW,
  previewSize,
} from './fetch-params.js';
import Notiflix from 'notiflix';
import { lightboxGallery } from './utils/light-box.js';

import { Refs } from './refs.js';

import videoCardMarcup from '../hbs/videoCardMarcup.hbs';
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

let scroll = true;

let currentLanguage = getCurrentLanguage();
let currentSearchType = 'img';
// ----------------------------

Refs.requestForm.addEventListener('submit', event => event.preventDefault());
Refs.userInput.addEventListener('input', debounce(onUserInput, DEBOUNCE_DELAY));
Refs.submitButton.addEventListener('click', onSubmitBtnClick);
Refs.loadMoreButton.addEventListener('click', onLoadMoreBtnClick);
Refs.picturesBtn.addEventListener('click', onPicturesBtnClick);
Refs.videoBtn.addEventListener('click', onVideoBtnClick);
Refs.homeBtn.addEventListener('click', onHomeBtnClick);

cardRequest(currentSearchType);
// onUserInput ------------------------------------------------------------------------------
function onUserInput(event) {
  requestUser = event.target.value;
}
// onSubmitBtnClick ------------------------------------------------------------------------------
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
  cardRequest(currentSearchType);
}
function clearPage() {
  Refs.gallery.innerHTML = '';
  Refs.loadMoreButton.classList.add('visually-hidden');
}
async function cardRequest(type) {
  const responseObj = await fetchCard(type);
  const isValidRequest = await responseCheck(responseObj);
  if (!isValidRequest) return;
  const cardsArr = await preparingObjForMarkup(responseObj, type);
  await showLoadMoreBtn();
  await renderCards(cardsArr, type);
  await scrollPage(currentPage, scroll);
  await whenQueryResultsEnd(currentPage, responseObj);
}
async function fetchCard(type) {
  currentLanguage = updateCurrentLanguage();
  currentRequest = requestUser;
  const response = await requestFetch(type);
  const objImgCards = await response.json();
  return objImgCards;
}
function requestFetch(type) {
  if (type === 'img')
    return fetch(
      `${BASE_URL}?q=${requestUser}&lang=${currentLanguage.code}&page=${currentPage}&${searchParams}`
    );
  if (type === 'video')
    return fetch(
      `${BASE_URL}videos?q=${requestUser}&lang=${currentLanguage.code}&page=${currentPage}&${searchParams}`
    );
}
function responseCheck(response) {
  if (response.totalHits === 0) {
    clearPage();
    Notiflix.Notify.warning(
      'Sorry, there are no images matching your search query. Please try again.'
    );
    return false;
  }
  if (currentPage === 1)
    Notiflix.Notify.info(`Hooray! We found ${response.totalHits} images.`);
  return true;
}
function preparingObjForMarkup(objImgCards, type) {
  let cardArr = objImgCards.hits;
  cardArr = markFavorites(cardArr, favoritesCardArr);
  if (type === 'video') {
    cardArr = cardArr.map(vobj => {
      vobj.picture_id = `${BASE_URL_VIDEO_PREVIEW}${vobj.picture_id}_${previewSize}.jpg`;
      return vobj;
    });

    return cardArr;
  }
  return cardArr;
}
function markFavorites(arr, favorites) {
  const idFavoritesArr = favorites.map(card => card.id);
  const cardsArr = arr.map(card => {
    if (idFavoritesArr.includes(String(card.id))) card.check = 'checked';
    return card;
  });
  return cardsArr;
}
function renderCards(cards, type) {
  if (type === 'video') {
    Refs.gallery.insertAdjacentHTML('beforeend', videoCardMarcup(cards));
  }
  if (type === 'img') {
    Refs.gallery.insertAdjacentHTML('beforeend', imgCardMarcup(cards));
  }
  lightboxGallery.refresh();
}
function showLoadMoreBtn() {
  Refs.loadMoreButton.classList.remove('visually-hidden');
}
function scrollPage(currentPage, scroll) {
  if (currentPage > 1 && scroll) {
    setTimeout(() => {
      window.scrollBy({
        top: window.innerHeight - 140,
        behavior: 'smooth',
      });
    }, 250);
  }
}
function whenQueryResultsEnd(currentPage, obj) {
  if (30 * currentPage > obj.totalHits) {
    Refs.loadMoreButton.classList.add('visually-hidden');
    Notiflix.Notify.info(
      'We`re sorry, but you`ve reached the end of search results.'
    );
  }
}

// onLoadMoreBtnClick---------------------------------------------------------------------------------------------
async function onLoadMoreBtnClick() {
  scroll = true;
  currentPage += 1;
  cardRequest(currentSearchType);
}

// search filter-----------------------------------------------------------------------

function onPicturesBtnClick(event) {
  if (event.target.classList.contains('activ')) return;
  event.target.classList.add('activ');
  Refs.videoBtn.classList.remove('activ');
  if (Refs.favoritesBtn.classList.contains('activ')) return;
  currentSearchType = 'img';
  currentRequest = '';
}
function onVideoBtnClick(event) {
  if (event.target.classList.contains('activ')) return;
  event.target.classList.add('activ');
  Refs.picturesBtn.classList.remove('activ');
  if (Refs.favoritesBtn.classList.contains('activ')) return;
  currentSearchType = 'video';
  currentRequest = '';
}
//  hom btn click ---------------------------------------------------------------------------------------------

function onHomeBtnClick(event) {
  event.preventDefault();
  changeActivePage(event);
}

function changeActivePage(event) {
  scroll = false;
  clearPage();
  cardRequest(currentSearchType);
  Refs.favoritesBtn.classList.remove('activ');
  event.target.classList.add('activ');
}
