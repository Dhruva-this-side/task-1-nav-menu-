window.addEventListener('scroll', function() {
  const nav = document.getElementById('nav');
  if (window.scrollY > 0) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
});

const links = document.querySelectorAll('nav a');
links.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault(); // Prevent default link behavior
    links.forEach(l => l.classList.remove('active'));
    e.target.classList.add('active');
  });
});