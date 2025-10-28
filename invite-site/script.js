// Mobile-first scroll-driven astronaut
(function(){
  // Simple page utilities: year and gift toggles
  const yearEl = document.getElementById('year');
  if(yearEl) yearEl.textContent = new Date().getFullYear();

  // Gift status toggles (works if .gift elements exist on the page)
  document.querySelectorAll('.gift-actions .status').forEach(btn => {
    btn.addEventListener('click', () => {
      const is = btn.getAttribute('aria-pressed') === 'true';
      btn.setAttribute('aria-pressed', (!is).toString());
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
