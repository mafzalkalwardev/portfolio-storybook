(function () {
  'use strict';

  const form = document.getElementById('contactForm');
  const successEl = document.getElementById('formSuccess');
  const submitBtn = document.getElementById('submitBtn');

  if (new URLSearchParams(window.location.search).get('sent') === '1' && successEl) {
    successEl.classList.remove('hidden');
    if (form) {
      form.querySelector('h2')?.classList.add('hidden');
      form.querySelectorAll('label, button').forEach((el) => el.classList.add('hidden'));
    }
    const contact = document.getElementById('contact');
    if (contact) contact.scrollIntoView({ behavior: 'smooth' });
  }

  if (!form) return;

  form.addEventListener('submit', () => {
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.textContent = 'Sending…';
    }
  });
})();
