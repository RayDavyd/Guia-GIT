(function () {
  // ---------- Menu mobile ----------
  function toggleNav() {
    const links = document.querySelector('.nav-links');
    if (links) links.classList.toggle('open');
  }

  document.addEventListener('DOMContentLoaded', () => {
    const navBtn = document.querySelector('.nav-toggle');
    if (navBtn) navBtn.addEventListener('click', toggleNav);
  });
})();

document.addEventListener('DOMContentLoaded', () => {

// Tabs de instalação por sistema operativo
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
      document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
      btn.classList.add('active');
      document.getElementById(btn.dataset.tab).classList.add('active');
    });
  });


/* Script específico: Comandos (comandos.html) */

  const filterBtns = document.querySelectorAll('.filter-btn');
  const groups = document.querySelectorAll('.cmd-group');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const target = btn.dataset.group;

      groups.forEach(g => {
        if (target === 'all' || g.dataset.group === target) {
          g.classList.add('active');
        } else {
          g.classList.remove('active');
        }
      });
    });
  });

  // Copiar comando ao clicar no botão
  document.querySelectorAll('.copy-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const code = btn.parentElement.querySelector('pre code').innerText;
      navigator.clipboard.writeText(code).then(() => {
        btn.textContent = 'copiado ✓';
        btn.classList.add('copied');
        setTimeout(() => {
          btn.textContent = 'copiar';
          btn.classList.remove('copied');
        }, 1500);
      });
    });
  });

});