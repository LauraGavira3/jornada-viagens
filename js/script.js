const menuIcon = document.querySelector('.navegation-menu img');
const nav = document.querySelector('.navegation-menu nav');

menuIcon.addEventListener('click', () => {
  nav.classList.toggle('active');
});

const links = document.querySelectorAll('.navegation-menu nav a');

links.forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('active');
  });
});
