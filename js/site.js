window.SITE = {
  profileImage: "assets/profile.png",
  cvPath: "assets/Muhammad-Afzal-Kalwar-CV.pdf",
  cvFilename: "Muhammad-Afzal-Kalwar-CV.pdf",
  education: {
    degree: "Bachelor of Science in Computer Science",
    shortDegree: "B.S. Computer Science",
    school: "Air University, Islamabad",
    status: "Graduated",
    detail: "Completed B.S. Computer Science from Air University Islamabad — algorithms, software engineering, databases, OS, and systems programming.",
    logo: "assets/education/air-university.png",
  },
};

(function () {
  'use strict';

  const sections = ['prologue', 'about', 'tales', 'skills', 'contact'];
  const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');

  function setActiveNav(id) {
    navLinks.forEach((link) => {
      link.classList.toggle('active', link.getAttribute('href') === '#' + id);
    });
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setActiveNav(entry.target.id);
      });
    },
    { rootMargin: '-40% 0px -50% 0px', threshold: 0 }
  );

  sections.forEach((id) => {
    const el = document.getElementById(id);
    if (el) observer.observe(el);
  });

  const formNext = document.getElementById('formNextUrl');
  if (formNext) {
    formNext.value = window.location.origin + window.location.pathname + '?sent=1#contact';
  }
})();
