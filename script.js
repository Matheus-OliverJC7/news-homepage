function openMenu(){
    document.body.classList.toggle('blockScroll');
    let menu = document.querySelector('.mobile-menu');
    menu.classList.toggle('open-menu');
    let overlay = document.querySelector('.overlay');
    overlay.classList.toggle('show-overlay');
    window.addEventListener('click', function(event){
      let isClickMenu = menu.contains(event.target);
      let isClickIcon = document.querySelector('.open-menu-icon').contains(event.target);
      if(!isClickMenu && !isClickIcon){
        document.body.classList.remove('blockScroll');
        menu.classList.remove('open-menu');
        overlay.classList.remove('show-overlay');
      }
    });
  }
  document.querySelector('.open-menu-icon').addEventListener('click', openMenu);
  document.querySelector('.close-menu-icon').addEventListener('click', openMenu);