const Refs = {
  languageSwitch: document.querySelector('.language-switch__toggle'),
  languagesList: document.querySelector('.languages-list'),
  currentLanguage: document.querySelector('.language-switch__track'),
};

Refs.languagesList.addEventListener('click', onLanguagesListItemClick);
Refs.languageSwitch.addEventListener('change', e => {
  console.log(e.target.checked);
  if (e.target.checked === true) {
    document.body.addEventListener('click', clos);
  }
});

function clos(e) {
  if (!e.target.classList.contains('.lenguage-switch__marker'))
    createEventForClosingLanguagesList();
}

function onLanguagesListItemClick(e) {
  const selectedLanguage = e.target.querySelector('.lenguage-switch__marker');

  if (Refs.currentLanguage.classList.contains(selectedLanguage.classList[1])) {
    createEventForClosingLanguagesList();
    return;
  }
  console.log(Refs.languageSwitch.checked === 'true');

  clearLanguage();
  changeLanguage(selectedLanguage);
  createEventForClosingLanguagesList();
}

function createEventForClosingLanguagesList() {
  Refs.languageSwitch.checked = false;
  document.body.removeEventListener('click', clos);
}

function clearLanguage() {
  Refs.currentLanguage.classList.remove(
    'lenguage-switch__marker--pl',
    'lenguage-switch__marker--ru',
    'lenguage-switch__marker--en'
  );
}

function changeLanguage(language) {
  if (language.dataset.name === 'ru')
    Refs.currentLanguage.classList.add('lenguage-switch__marker--ru');
  if (language.dataset.name === 'pl')
    Refs.currentLanguage.classList.add('lenguage-switch__marker--pl');
  if (language.dataset.name === 'en')
    Refs.currentLanguage.classList.add('lenguage-switch__marker--en');
}
