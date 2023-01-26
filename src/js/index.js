import '../css/styles.css';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Report } from 'notiflix/build/notiflix-report-aio';
import SimpleLightbox from 'simplelightbox';

import imgCardMarcup from '../hbs/imgCardMarcup.hbs';
const lightboxGallery = new SimpleLightbox('.gallery a');

const debounce = require('lodash.debounce');
const BASE_URL = 'https://pixabay.com/api/';
const DEBOUNCE_DELAY = 50;

const Refs = {
  userInput: document.querySelector('[name="searchQuery"]'),
  gallery: document.querySelector('.gallery'),
  submitButton: document.querySelector('[type="submit"]'),
  requestForm: document.querySelector('#search-form'),
  loadMoreButton: document.querySelector('.load-more'),
};

// auxiliary variables--------------
let requestUser = '';
let currentRequest = '';

let currentPage = 1;
let perPage = 30;
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

function onSubmitBtnClick() {
  if (requestUser === currentRequest && !(requestUser === '')) return;
  if (requestUser === '') {
    clearPage();
    Notify.warning('Enter a search term please.');
    currentRequest = requestUser;
    return;
  }
  currentPage = 1;
  clearPage();
  fechImages().then(searchResultMessage);
}

function searchResultMessage(obj) {
  Notify.info(`Hooray! We found ${obj.totalHits} images.`);
}

function clearPage() {
  Refs.gallery.innerHTML = '';
  Refs.loadMoreButton.classList.add('visually-hidden');
}

function fechImages() {
  return fetch(
    `${BASE_URL}?q=${requestUser}&page=${currentPage}&${searchParams}`
  )
    .then(response => response.json())
    .then(obj => {
      obj.hits.length === 0 ? onIncorectRequest().then() : onCorectRequest(obj);
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
  Report.failure(
    '',
    '"Sorry, there are no images matching your search query. Please try again."',
    'Okay'
  );
}

function onCorectRequest(obj) {
  renderCards(obj);
  Refs.loadMoreButton.classList.remove('visually-hidden');
  if (perPage * currentPage > obj.totalHits) whenQueryResultsEnd();
  lightboxGallery.refresh();
  currentRequest = requestUser;

  if (currentPage > 1) {
    setTimeout(() => {
      window.scrollBy({
        top: window.innerHeight - 80,
        behavior: 'smooth',
      });
    }, 250);
  }
}

function whenQueryResultsEnd() {
  Refs.loadMoreButton.classList.add('visually-hidden');
  Notify.info('We`re sorry, but you`ve reached the end of search results.');
}

function renderCards(obj) {
  Refs.gallery.insertAdjacentHTML('beforeend', imgCardMarcup(obj.hits));
}

//
//   Refs.gallery.firstElementChild.getBoundingClientRect();
