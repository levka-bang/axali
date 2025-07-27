const burgerBtn = document.getElementById('burgerBtn');
const navMenu   = document.querySelector('.header-right');

burgerBtn.addEventListener('click', () => {
  navMenu.classList.toggle('open');
  burgerBtn.classList.toggle('open');
});


document.addEventListener('click', (e) => {
  if (
    !navMenu.contains(e.target)
    && !burgerBtn.contains(e.target)
    && navMenu.classList.contains('open')
  ) {
    navMenu.classList.remove('open');
    burgerBtn.classList.remove('open');
  }
});

