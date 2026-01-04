// Mobile sidebar toggle
const hamburger = document.getElementById('hamburger');
const sidebar   = document.getElementById('sidebar');

if (hamburger && sidebar) {
  hamburger.addEventListener('click', () => {
    sidebar.classList.toggle('open');
  });

  // Close sidebar when clicking outside (mobile)
  document.addEventListener('click', (e) => {
    const clickedInside = sidebar.contains(e.target) || hamburger.contains(e.target);
    if (!clickedInside && sidebar.classList.contains('open')) {
      sidebar.classList.remove('open');
    }
  });
}

// Tiny demo: buttons in cards
document.querySelectorAll('.card__actions button').forEach(btn => {
  btn.addEventListener('click', () => {
    btn.animate([{ transform: 'scale(1)' }, { transform: 'scale(1.15)' }, { transform: 'scale(1)' }],
                 { duration: 180, easing: 'ease-out' });
  });
});
