 // Theme Toggle
 const themeToggle = document.querySelector('.theme-toggle');
 themeToggle.addEventListener('click', () => {
     document.documentElement.setAttribute('data-theme',
         document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark'
     );
     themeToggle.textContent = document.documentElement.getAttribute('data-theme') === 'dark' ? '☀' : '🌙';
 });

 // Mobile Menu
 const hamburger = document.querySelector('.hamburger');
 const navLinks = document.querySelector('.nav-links');
 
 hamburger.addEventListener('click', () => {
     navLinks.classList.toggle('active');
     hamburger.textContent = navLinks.classList.contains('active') ? '✕' : '☰';
 });

 document.addEventListener('click', (e) => {
     if (!navLinks.contains(e.target) && !hamburger.contains(e.target)) {
         navLinks.classList.remove('active');
         hamburger.textContent = '☰';
     }
 });

 // Smooth Scroll
 document.querySelectorAll('a[href^="#"]').forEach(anchor => {
     anchor.addEventListener('click', (e) => {
         e.preventDefault();
         document.querySelector(anchor.getAttribute('href')).scrollIntoView({
             behavior: 'smooth'
         });
         navLinks.classList.remove('active');
         hamburger.textContent = '☰';
     });
 });

 // Intersection Observer for scroll animations
 const observer = new IntersectionObserver((entries) => {
     entries.forEach(entry => {
         if (entry.isIntersecting) {
             entry.target.classList.add('visible');
         }
     });
 }, {
     threshold: 0.1
 });

 document.querySelectorAll('.project-card').forEach(card => {
     observer.observe(card);
 });

 window.addEventListener('scroll', function() {
const sections = document.querySelectorAll('.section');

sections.forEach(function(section) {
const rect = section.getBoundingClientRect();

if (rect.top <= window.innerHeight && rect.bottom >= 0) {
 section.classList.add('inview');
} else {
 section.classList.remove('inview');
}
});
});