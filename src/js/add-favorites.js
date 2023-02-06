import imgCardMarcup from '../hbs/imgCardMarcup.hbs';
export { favoritesCardArr };
import { Refs } from './refs.js';
import { lightboxGallery } from './utils/light-box.js';
import { searchParams, BASE_URL } from './fetch-params.js';
import {
  getCurrentLanguage,
  updateCurrentLanguage,
} from './utils/for-language.js';

// ================================================
let currentLanguage = getCurrentLanguage();

// проверка localStorage на информацию о избранных обектих

let favoritesCardArr = [];

if (localStorage.getItem('favoritesCard')) {
  favoritesCardArr = JSON.parse(localStorage.getItem('favoritesCard'));
}
// ===============================

// Переход на страницу с избранным ===============================

Refs.favoritesBtn.addEventListener('click', onFavoritesBtnClick);

async function onFavoritesBtnClick(event) {
  event.preventDefault();
  currentLanguage = updateCurrentLanguage(currentLanguage);
  const response = await fetchFavoritesCards(favoritesCardArr);
  const cards = await parseResponse(response);
  const cardsMarkup = createMarcup(cards);
  renderCard(cardsMarkup);
  lightboxGallery.refresh();
  hideElem(Refs.loadMoreButton);
  changeActivePage(event);

  console.log();
}

function fetchFavoritesCards(favoritesIdArr) {
  return favoritesIdArr.map(async ({ id }) => {
    const response = await fetch(
      `${BASE_URL}?id=${id}&lang=${currentLanguage.code}&${searchParams}`
    );
    return response.json();
  });
}

async function parseResponse(response) {
  const fetchInfo = await Promise.all(response);
  const cards = await fetchInfo.map(e => {
    e.hits[0].check = 'checked';
    return e.hits[0];
  });
  return cards;
}

function createMarcup(cards) {
  return imgCardMarcup(cards);
}
function renderCard(marcup) {
  Refs.gallery.innerHTML = marcup;
}
function hideElem(elem) {
  elem.classList.add('visually-hidden');
}
function changeActivePage(event) {
  event.target.classList.add('activ');
  Refs.homeBtn.classList.remove('activ');
}
// ===============================

// Добавление, удаление и хранение избранных обектов

document.body.addEventListener('click', onAddFavoritesBtnClick);

function onAddFavoritesBtnClick(event) {
  if (!event.target.classList.contains('add-favorites')) return;
  if (!event.target.checked) {
    const id = event.target.closest('.photo-card').dataset.id;
    const cardToBeRemoved = getCardById(favoritesCardArr, id);
    const updatedArr = removeCard(favoritesCardArr, cardToBeRemoved);
    updateLocalStorage(updatedArr);
    return;
  }
  const newCard = createObjCard(event);
  const updatedArr = addCardInFavorites(favoritesCardArr, newCard);
  updateLocalStorage(updatedArr);
}

function createObjCard(event) {
  const currentCard = event.target.closest('.photo-card');
  const id = currentCard.dataset.id;
  return {
    id,
    check: 'checked',
  };
}

function getCardById(arr, id) {
  return arr.find(card => card.id === id);
}

function addCardInFavorites(arr, newCard) {
  arr.push(newCard);
  return arr;
}

function removeCard(arr, card) {
  arr.splice(arr.indexOf(card), 1);
  return arr;
}
function updateLocalStorage(arr) {
  localStorage.setItem('favoritesCard', JSON.stringify(arr));
}
// ====================================================

// кастомные айди
// function idGenerator(arr, newElement) {
//   const newId = parseInt(Math.random() * (10 - 1));
//   for (card of arr) {
//     if (card.id === newId) {
//       return idGenerator(arr, newElement);
//     }
//   }
//   newElement.id = newId;
//   return newElement;
// }
