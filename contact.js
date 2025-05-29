const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', e => {
  e.preventDefault();
  alert('Thank you! Your message has been sent.');
  contactForm.reset();
});
