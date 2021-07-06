// Menu UI
window.onload = function () {
  let sideToggle = document.getElementById('side-toggle-btn');
  let wrapper = document.getElementById('wrapper');
  let sideToggleCloseBtn = document.getElementById('side-toggle-close-btn');
  let ourCars = document.getElementById('ourCars');
  let ourCarsOpenBtn = document.getElementById('ourCars-openBtn');

  sideToggle.onclick = () => {
    wrapper.classList.toggle('open');
  };
  sideToggleCloseBtn.onclick = () => {
      wrapper.classList.toggle('open');
    };

    //  ourCars Menu
    //  ourCars Menu Open
  ourCarsOpenBtn.onclick = () => {
    wrapper.classList.toggle('dropDown');
    ourCars.classList.toggle('show-drop');

    let menu1 = document.getElementsByClassName('menu1');
    let menu2 = document.getElementsByClassName('menu2');
    let ourCarsToggleBox = document.getElementById('ourCarsToggleBox');
    let ourCarsWindowClose = document.getElementById('ourCars-window-close');
    
    // ourCars Close Button
    ourCarsToggleBox.onclick = () => {
      wrapper.classList.remove('dropDown');
      ourCars.classList.remove('show-drop');   
    };

    // ourCars Window Close Button
    ourCarsWindowClose.onclick = () => {
      wrapper.classList.remove('dropDown');
      ourCars.classList.remove('show-drop');
    };
  };
};


// OurCars in menu click Event list layout
function openMenu(menuClick) {
  let i;
  let x = document.getElementsByClassName('list');

  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  };
  document.getElementById(menuClick).style.display = "flex";
};