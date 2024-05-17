const mobileMenu = document.querySelector('.mobile-menu');
function openMenu(){
  document.body.classList.add('blockScroll');
  document.querySelector('.overlay').classList.add('show-overlay');
  mobileMenu.classList.add('open-menu');
}
function closeMenu(event){
  let isClickMenu = mobileMenu.contains(event.target);
  let isClickOpen = document.querySelector('.open-menu-icon').contains(event.target);
  let isClickClose = document.querySelector('.close-menu-icon').contains(event.target);
  if(!isClickMenu && !isClickOpen || isClickClose){
    document.body.classList.remove('blockScroll');
    document.querySelector('.overlay').classList.remove('show-overlay');
    mobileMenu.classList.remove('open-menu');
  }
}
document.querySelector('.open-menu-icon').addEventListener('click', openMenu);
document.addEventListener('click', closeMenu);