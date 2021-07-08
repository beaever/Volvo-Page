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
  ourCarsOpenBtn.onclick = (e) => {
    e.preventDefault
    wrapper.classList.toggle('dropDown');
    ourCars.classList.toggle('show-drop');


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
const ourCarsMenuItems = document.getElementsByClassName('item');

for (let y = 0; y < ourCarsMenuItems.length; y++) {
  ourCarsMenuItems[y].onclick = () => {
    if(ourCarsMenuItems[y].id == ('menu1')) {
      ourCarsMenuItems[y].style.color('#171717')
    }else {
      ourCarsMenuItems[y]
    }
  }
};


// MenuClick Event / Color Change
  function openMenu(menuClick,menuContents) {
    const list = document.getElementsByClassName('list');
    const items = document.getElementsByClassName('items');
    var i;

    for (i = 0; i < list.length; i++) {
      list[i].style.display = "none";
    }

    for (i = 0; i < items.length; i++) {
      items[i].className = items[i].className.replace(" clicked", "");
    }

    document.getElementById(menuContents).style.display = "flex";
    menuClick.currentTarget.className += " clicked";
  };
