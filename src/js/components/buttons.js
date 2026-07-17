export function initButtons() {
  const buttons = document.querySelectorAll('.glass-btn');
  const panels = document.querySelectorAll('.search-panel');

  //  Press physics 
  buttons.forEach(btn => {
    btn.addEventListener('mousedown', () => btn.classList.add('pressing'));
    const release = () => btn.classList.remove('pressing');
    btn.addEventListener('mouseup', release);
    btn.addEventListener('mouseleave', release);
    btn.addEventListener('touchstart', () => btn.classList.add('pressing'), { passive: true });
    btn.addEventListener('touchend', release);

    //  Panel switching 
    btn.addEventListener('click', () => {
      const type = btn.dataset.type;
      const target = document.getElementById(`panel-${type}`);
      const isAlreadyActive = btn.classList.contains('active');

      // Deactivate all
      buttons.forEach(b => b.classList.remove('active'));
      panels.forEach(p => p.classList.remove('visible'));

      // Toggle: if not already active, open it
      if (!isAlreadyActive) {
        btn.classList.add('active');
        target.classList.add('visible');
        target.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
    });
  });

  //  Continent chips 
  document.querySelectorAll('.continent-chip').forEach(chip => {
    chip.addEventListener('click', () => {
      document.querySelectorAll('.continent-chip').forEach(c => c.classList.remove('selected'));
      chip.classList.add('selected');
    });
  });

  //  Region items 
  document.querySelectorAll('.region-item').forEach(item => {
    item.addEventListener('click', () => {
      document.querySelectorAll('.region-item').forEach(r => r.classList.remove('selected'));
      item.classList.add('selected');
    });
  });

  //  Country search input 
  const input = document.getElementById('country-search');
  const clearBtn = document.getElementById('country-clear');

  input?.addEventListener('input', () => {
    clearBtn.classList.toggle('visible', input.value.length > 0);
  });

  clearBtn?.addEventListener('click', () => {
    input.value = '';
    clearBtn.classList.remove('visible');
    input.focus();
  });

  // Popular search tags
  document.querySelectorAll('.search-tag').forEach(tag => {
    tag.addEventListener('click', () => {
      input.value = tag.dataset.value;
      clearBtn.classList.add('visible');
      input.focus();
    });
  });
}
