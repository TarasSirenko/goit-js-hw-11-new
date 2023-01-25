import '../css/styles.css';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Report } from 'notiflix/build/notiflix-report-aio';
import SimpleLightbox from 'simplelightbox';

import imgCardMarcup from '../hbs/imgCardMarcup.hbs';

const debounce = require('lodash.debounce');

const Refs = {
  userInput: document.querySelector('[name="searchQuery"]'),
  gallery: document.querySelector('.gallery'),
  submitButton: document.querySelector('[type="submit"]'),
  requestForm: document.querySelector('#search-form'),
  loadMoreButton: document.querySelector('.load-more'),
};

const BASE_URL = 'https://pixabay.com/api/';
const DEBOUNCE_DELAY = 50;

let requestUser = '';
let currentPage = 1;
let currentRequest = '';
let perPage = 30;
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
  if (requestUser === currentRequest) return;
  if (requestUser === '') {
    clearPage();
    currentRequest = requestUser;
    return;
  }
  currentPage = 1;
  clearPage();
  fechImages();
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
      obj.hits.length === 0 ? onIncorectRequest() : onCorectRequest(obj);
      return obj.total;
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
  console.log(obj);
  Refs.loadMoreButton.classList.remove('visually-hidden');
  if (perPage * currentPage > obj.totalHits) {
    Refs.loadMoreButton.classList.add('visually-hidden');
    Notify.info('We`re sorry, but you`ve reached the end of search results.');
  }

  currentRequest = requestUser;
  var lightbox = new SimpleLightbox('.gallery a');
}
function renderCards(obj) {
  Refs.gallery.insertAdjacentHTML('beforeend', imgCardMarcup(obj.hits));
}
