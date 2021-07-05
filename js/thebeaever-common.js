
// const ourCarsOpen = document.getElementsByClassName('ourCars-open');
// const ourCarsWindowClose = document.getElementById('ourCars-window-close');

// function openOurcars() {
  
// }


// OurCars in menu click Event list layout

function openMenu(menuClick) {
  let i;
  let x = document.getElementsByClassName('list');

  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  document.getElementById(menuClick).style.display = "flex";
};