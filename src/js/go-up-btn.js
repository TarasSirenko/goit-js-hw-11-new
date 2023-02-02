const Refs = {
  goUpBtn: document.querySelector('.go-up-btn'),
  heder: document.querySelector('.heder'),
};

Refs.goUpBtn.addEventListener('click', onGoUpBtnClick);

function onGoUpBtnClick(e) {
  e.preventDefault();
  Refs.heder.scrollIntoView({ block: 'center', behavior: 'smooth' });
}
