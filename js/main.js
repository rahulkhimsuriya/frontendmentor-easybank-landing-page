const btnBars = document.querySelector('#mobile-menu i.fa-bars');
const btnTimes = document.querySelector('#mobile-menu i.fa-times');

const navLinks = document.querySelector('#nav-links');

btnBars.addEventListener('click', e => {
  btnBars.classList.add('hide');
  btnTimes.classList.remove('hide');

  navLinks.style.display = 'flex';
});

btnTimes.addEventListener('click', e => {
  btnTimes.classList.add('hide');
  btnBars.classList.remove('hide');

  navLinks.style.display = 'none';
});
