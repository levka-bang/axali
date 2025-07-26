const burgerBtn = document.getElementById('burgerBtn');
const navMenu   = document.querySelector('.header-right');

burgerBtn.addEventListener('click', () => {
  navMenu.classList.toggle('open');
  burgerBtn.classList.toggle('open'); // you can animate the icon if you like
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

