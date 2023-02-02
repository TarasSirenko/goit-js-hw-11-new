import lengArr from '../language.json';
const lenguages = {
  ru: {
    code: 'ru',
    class: 'lenguage-switch__marker--ru',
  },
  pl: {
    code: 'pl',
    class: 'lenguage-switch__marker--pl',
  },
  en: {
    code: 'en',
    class: 'lenguage-switch__marker--en',
  },
};

const Refs = {
  languageSwitch: document.querySelector('.language-switch__toggle'),
  languagesList: document.querySelector('.languages-list'),
  currentLanguage: document.querySelector('.language-switch__track'),
};
// localStorage.removeItem('currentLanguage');
// выбор языка при загрузке страницы -------------------------
let currentLanguage = {
  code: 'en',
  class: 'lenguage-switch__marker--en',
};
console.log(currentLanguage);

if (JSON.parse(localStorage.getItem('currentLanguage'))) {
  console.log('rvervrr');
  currentLanguage = JSON.parse(localStorage.getItem('currentLanguage'));
} else {
  currentLanguage = lenguages.en;
}

function changeLanguage() {
  if (JSON.parse(localStorage.getItem('currentLanguage')))
    currentLanguage = JSON.parse(localStorage.getItem('currentLanguage'));

  for (const key in lengArr) {
    if (key === 'placeholder') {
      document.querySelector(`.lang-${key}`).placeholder =
        lengArr[key][currentLanguage.code];
      continue;
    }
    document.querySelector(`.lang-${key}`).innerHTML =
      lengArr[key][currentLanguage.code];
  }
}
changeLanguage();
Refs.currentLanguage.classList.add(currentLanguage.class);
// ===================== -------------------------

Refs.languagesList.addEventListener('click', onLanguagesListItemClick);
Refs.languageSwitch.addEventListener('change', onCheckedLanguageSwitch);

// ===============================onLanguagesListItemClick
function onLanguagesListItemClick(event) {
  const selectedLanguage = event.target.querySelector(
    '.lenguage-switch__marker'
  );

  if (Refs.currentLanguage.classList.contains(selectedLanguage.classList[1])) {
    createEventForClosingLanguagesList();
    return;
  }

  clearLanguage();
  changeIconLanguage(selectedLanguage);
  changeLanguage();
  createEventForClosingLanguagesList();
}

function createEventForClosingLanguagesList() {
  Refs.languageSwitch.checked = false;
  document.body.removeEventListener('click', closesLanguagesList);
}

function clearLanguage() {
  Refs.currentLanguage.classList.remove(
    lenguages.ru.class,
    lenguages.pl.class,
    lenguages.en.class
  );
}

function changeIconLanguage(language) {
  if (language.dataset.name === 'ru') {
    currentLanguage = JSON.stringify(lenguages.ru);
    console.log(currentLanguage);
    localStorage.setItem('currentLanguage', currentLanguage);
    Refs.currentLanguage.classList.add(lenguages.ru.class);
  }

  if (language.dataset.name === 'pl') {
    currentLanguage = JSON.stringify(lenguages.pl);
    localStorage.setItem('currentLanguage', currentLanguage);
    Refs.currentLanguage.classList.add(lenguages.pl.class);
  }

  if (language.dataset.name === 'en') {
    currentLanguage = JSON.stringify(lenguages.en);
    localStorage.setItem('currentLanguage', currentLanguage);
    Refs.currentLanguage.classList.add(lenguages.en.class);
  }
}

// ===============================onCheckedLanguageSwitch
function onCheckedLanguageSwitch(event) {
  if (event.target.checked === true)
    document.body.addEventListener('click', closesLanguagesList);
}

function closesLanguagesList(e) {
  if (e.target.classList.contains('language-switch__track')) {
    Refs.languageSwitch.checked = false;
    return;
  }
  createEventForClosingLanguagesList();
}
