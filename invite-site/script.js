// Mobile-first scroll-driven astronaut
(function(){
  // Simple page utilities: year and gift toggles
  const yearEl = document.getElementById('year');
  if(yearEl) yearEl.textContent = new Date().getFullYear();

  // Gift status toggles with localStorage persistence
  document.querySelectorAll('.gift').forEach(gift => {
    const btn = gift.querySelector('.gift-actions .status');
    if (!btn) return;
    const giftId = gift.getAttribute('data-id');
    // Load state from localStorage
    const saved = localStorage.getItem('gift-status-' + giftId);
    if (saved === 'no-disponible') {
      btn.setAttribute('aria-pressed', 'true');
    } else {
      btn.setAttribute('aria-pressed', 'false');
    }
    btn.addEventListener('click', () => {
      const is = btn.getAttribute('aria-pressed') === 'true';
      const newState = !is;
      btn.setAttribute('aria-pressed', newState.toString());
      localStorage.setItem('gift-status-' + giftId, newState ? 'no-disponible' : 'disponible');
      btn.animate([
        { transform: 'scale(1)' },
        { transform: 'scale(1.06)' },
        { transform: 'scale(1)' }
      ], { duration: 200, easing: 'ease-out' });
    });
  });

  // Reveal on scroll using IntersectionObserver
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if(!prefersReduced){
    const observer = new IntersectionObserver((entries)=>{
      entries.forEach(e=>{
        if(e.isIntersecting){
          e.target.classList.add('visible');
          observer.unobserve(e.target);
        }
      });
    },{root:null,rootMargin:'0px 0px -10% 0px',threshold:0.08});

    document.querySelectorAll('.card.reveal').forEach(el=>observer.observe(el));
  } else {
    // if reduced motion, just show everything
    document.querySelectorAll('.card.reveal').forEach(el=>el.classList.add('visible'));
  }

})();
