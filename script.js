// ── Navbar scroll effect ──
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 20);
});

// ── Mobile hamburger ──
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

// ── Plan tabs filter ──
const tabs = document.querySelectorAll('.tab');
const planCards = document.querySelectorAll('.plan-card');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    tabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');

    const filter = tab.dataset.filter;

    planCards.forEach(card => {
      const match = filter === 'all' || card.dataset.type === filter;
      card.classList.toggle('hidden', !match);
    });
  });
});

// ── Intersection Observer fade-in ──
const fadeEls = document.querySelectorAll(
  '.feature-card, .plan-card, .testimonial-card, .contact-card, .section-header'
);

fadeEls.forEach(el => el.classList.add('fade-up'));

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

fadeEls.forEach(el => observer.observe(el));
