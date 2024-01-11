document.addEventListener('DOMContentLoaded', function () {
  // Smooth scrolling using scrollIntoView
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

  // Highlighting active section in the navigation menu
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.navbar-link');

  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (pageYOffset >= sectionTop - sectionHeight / 3) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href').includes(current)) {
        link.classList.add('active');
      }
    });
  });

  // Mobile menu toggle
  const mobileNavBtn = document.querySelector('.nav-open-btn');
  const navList = document.querySelector('.navbar-list');

  mobileNavBtn.addEventListener('click', () => {
    navList.classList.toggle('nav-open');
  });

  // Close mobile menu on link click
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navList.classList.remove('nav-open');
    });
  });

  // Go to top button
  const goTopBtn = document.querySelector('.go-top');

  window.addEventListener('scroll', () => {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      goTopBtn.style.display = 'block';
    } else {
      goTopBtn.style.display = 'none';
    }
  });

  goTopBtn.addEventListener('click', () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  });
});
