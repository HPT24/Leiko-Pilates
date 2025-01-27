const collapsibles = document.querySelectorAll(".collapsible");
collapsibles.forEach((item) =>
  item.addEventListener("click", function () {
    this.classList.toggle("collapsible--expanded");
  })
 );



 document.addEventListener('DOMContentLoaded', function () {
  const navItems = document.querySelectorAll('.nav-item');

  navItems.forEach(item => {
      item.addEventListener('click', function (e) {
          // Prevent the default anchor click behavior
          e.preventDefault();

          // Close any opened submenus, excluding the current item
          navItems.forEach(i => {
              if (i !== item) {
                  i.querySelectorAll('.submenu').forEach(submenu => {
                      submenu.classList.remove('active');
                  });
              }
          });

          // Toggle the clicked item's submenus
          const submenus = this.querySelectorAll('.submenu');
          submenus.forEach(submenu => {
              submenu.classList.toggle('active');
          });
      });
  });

  // Optional: Close submenus when clicking outside
  document.addEventListener('click', function(event) {
      const isClickInsideNav = document.querySelector('nav').contains(event.target);
      if (!isClickInsideNav) {
          navItems.forEach(i => {
              i.querySelectorAll('.submenu').forEach(submenu => {
                  submenu.classList.remove('active');
              });
          });
      }
  });
});