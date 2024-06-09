//document, se refere ao documento html.
const mobileMenu = document.querySelector('.mobile-menu');//Pega o menu mobile
function openMenu(){
  document.body.classList.add('blockScroll');//Adiciona a classe à lista de classes. Esta classe bloqueia a rolagem vertical da página.
  document.querySelector('.overlay').classList.add('show-overlay');
  mobileMenu.classList.add('open-menu');
}
function closeMenu(event){
  //(event) identifica as ações que o usuário tem com o mouse, teclado ou outro de acordo com o tipo de event listener(veja a linha 18 - 19).
  //Vamos verificar se o mouse está clicando no elemento. Irá retornar true ou false;
  let isClickMenu = mobileMenu.contains(event.target);
  let isClickOpen = document.querySelector('.open-menu-icon').contains(event.target);
  let isClickClose = document.querySelector('.close-menu-icon').contains(event.target);
  //!(é o mesmo que não). Condição: Se não estiver clicando no menu e não estiver clicando no icone de abrir ou estiver clicando no icone de fechar, execute a ação.
  if(!isClickMenu && !isClickOpen || isClickClose){
    document.body.classList.remove('blockScroll');
    document.querySelector('.overlay').classList.remove('show-overlay');
    mobileMenu.classList.remove('open-menu');
  }
}
document.querySelector('.open-menu-icon').addEventListener('click', openMenu);//Adiciona um evento de clique
document.addEventListener('click', closeMenu);