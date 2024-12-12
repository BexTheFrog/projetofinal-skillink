document.addEventListener('DOMContentLoaded', () => {
  let buttonMenu = document.querySelector('.button-menu');
  let headerRight = document.querySelector('.header-right');

  buttonMenu.addEventListener('click', () => {
    headerRight.classList.toggle('hidden');
  });


});