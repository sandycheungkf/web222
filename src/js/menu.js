// Name: Kwai Fong Cheung 
// Student ID: 111951224
// Web222 Final Accessment

document.querySelector('.menu-icon').addEventListener('click', function () {
    this.classList.toggle('active');
    var menuList = document.querySelector('.menu-list');
    menuList.style.display = menuList.style.display === 'block' ? 'none' : 'block';
  });
  
  