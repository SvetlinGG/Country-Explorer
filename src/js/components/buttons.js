export function initButtons() {
  const buttons = document.querySelectorAll('.glass-btn');

  buttons.forEach(btn => {
    // Mousedown — start press
    btn.addEventListener('mousedown', () => btn.classList.add('pressing'));

    // Release anywhere — end press
    const release = () => btn.classList.remove('pressing');
    btn.addEventListener('mouseup', release);
    btn.addEventListener('mouseleave', release);

    // Touch support
    btn.addEventListener('touchstart', () => btn.classList.add('pressing'), { passive: true });
    btn.addEventListener('touchend', release);

    // Toggle active state on click
    btn.addEventListener('click', () => {
      buttons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    });
  });
}
