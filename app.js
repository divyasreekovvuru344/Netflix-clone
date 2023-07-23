
// initilize swiper  (for home section)
var swiper = new Swiper(".home", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay:4500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    
}); 



// pre-nxt-btns
let cardContainers = document.querySelectorAll('.card-container');
let preBtns = document.querySelectorAll('.pre-btn');
let nxtBtns = document.querySelectorAll('.nxt-btn');

cardContainers.forEach((item, i) => {
  let containerDimensions = item.getBoundingClientRect();
  let containerWidth = containerDimensions.width;
  
  nxtBtns[i].addEventListener('click',() => {
    item.scrollLeft += containerWidth - 200;

  })

  preBtns[i].addEventListener('click',() => {
    item.scrollLeft -= containerWidth + 200;

  })
  
})




// for menu-icon
let container = document.querySelector('container'); 

let menu = document.querySelector('#menu-icon');            
let navmenu = document.querySelector('.nav-menu');            


menu.onclick = () => {
    menu.classList.toggle('bx-x');                        /* to change menu-icon into wrong symbol*/
    navmenu.classList.toggle('active');                    /* to get menu funcationality downwards*/
    
}

window.onscroll = () => {
    menu.classList.remove('bx-x');              
    navmenu.classList.remove('active');
}