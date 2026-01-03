document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.getElementById('menub');
  const navbarNav = document.getElementById('n'); // Kept ID 'n' for the ul in HTML

  if (menuToggle && navbarNav) {
    menuToggle.addEventListener('click', () => {
      navbarNav.classList.toggle('active');

      // Animate the hamburger icon if needed
      // Currently it relies on CSS for the spinner rotation look but we can add a class
      const checkbox = document.getElementById('openSidebarMenu');
      if (checkbox) checkbox.checked = !checkbox.checked;
    });
  }
});
