import imgCardMarcup from '../hbs/imgCardMarcup.hbs';
export { favoritesCardArr };
import { Refs } from './refs.js';

let favoritesCardArr = [];

// Переход на страницу с избранным ===============================

Refs.favoritesBtn.addEventListener('click', onFavoritesBtnClick);

function onFavoritesBtnClick(event) {
  event.preventDefault();
  const cardsMarkup = createMarcup();
  renderCard(cardsMarkup);
  hideElem(Refs.loadMoreButton);
  changeActivePage(event);
}

function createMarcup() {
  return imgCardMarcup(favoritesCardArr);
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

// проверка localStorage на информацию о избранных обектих

if (localStorage.getItem('favoritesCard')) {
  favoritesCardArr = JSON.parse(localStorage.getItem('favoritesCard'));
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
  const largeImageURL = currentCard.querySelector('.card-link').href;
  const webformatURL = currentCard.querySelector('.card-img').src;
  const tags = currentCard.querySelector('.card-img').alt;
  const likes = currentCard.querySelector('.likes').outerText;
  const views = currentCard.querySelector('.views').outerText;
  const comments = currentCard.querySelector('.comments').outerText;
  const downloads = currentCard.querySelector('.downloads').outerText;
  return {
    id,
    largeImageURL,
    webformatURL,
    tags,
    likes,
    views,
    comments,
    downloads,
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
