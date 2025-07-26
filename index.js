const exploreBtn = document.getElementById('exploreBtn');
const exploreMenu = document.getElementById('exploreMenu');

exploreBtn.addEventListener('click', () => {
  exploreBtn.classList.toggle('open');
  exploreMenu.classList.toggle('show');
});

document.addEventListener('click', e => {
  if (!exploreBtn.contains(e.target) && !exploreMenu.contains(e.target)) {
    exploreBtn.classList.remove('open');
    exploreMenu.classList.remove('show');
   }
});

  
