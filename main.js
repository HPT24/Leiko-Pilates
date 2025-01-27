const collapsibles = document.querySelectorAll(".collapsible");
collapsibles.forEach((item) =>
  item.addEventListener("click", function () {
    this.classList.toggle("collapsible--expanded");
  })
 );

 function showSidebar(){
  const sidebar = document.querySelector('.sidebar')
  sidebar.style.display = 'flex'
}

function hideSidebar(){
  const sidebar = document.querySelector('.sidebar')
  sidebar.style.display = 'none'
}

document.addEventListener('DOMContentLoaded', function () {
  const navItems = document.querySelectorAll('.nav__item');

  navItems.forEach(item => {
      item.addEventListener('click', function (e) {
          // Prevent the default anchor click behavior
          e.preventDefault();
          
          // Close any opened submenus
          navItems.forEach(i => {
              if (i !== item) {
                  i.querySelector('.submenu').classList.remove('active');
              }
          });

          // Toggle the clicked submenu
          const submenu = this.querySelector('.submenu');
          if (submenu) {
              submenu.classList.toggle('active');
          }
      });
  });
});
