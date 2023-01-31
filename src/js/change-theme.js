const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
const refs = {
  body: document.querySelector('body'),
  checkbox: document.querySelector('#theme-switch-toggle'),
};

let currentTheme;

try {
  if (localStorage.getItem('currentTheme') === Theme.DARK) {
    refs.body.classList.toggle(Theme.DARK);
    refs.body.classList.toggle(Theme.LIGHT);
    refs.checkbox.checked = true;
  }
} catch {}

refs.checkbox.addEventListener('change', onCheckboxChange);

function onCheckboxChange() {
  refs.body.classList.toggle(Theme.DARK);
  refs.body.classList.toggle(Theme.LIGHT);
  refs.checkbox.checked
    ? (currentTheme = Theme.DARK)
    : (currentTheme = Theme.LIGHT);
  localStorage.setItem('currentTheme', currentTheme);
}

console.log('vsdv');
