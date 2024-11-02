const sidemenu = document.querySelector("#sidemenu");

function openMenu(){
  sidemenu.style.transform = 'translateX(-16rem)';
}
function closeMenu(){
  sidemenu.style.transform = 'translateX(16rem)';
}
