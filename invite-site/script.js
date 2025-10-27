// Mobile-first scroll-driven astronaut
(function(){
  const astronaut = document.getElementById('astronaut');
  const stages = Array.from(document.querySelectorAll('.stage'));
  const yearEl = document.getElementById('year');
  if(yearEl) yearEl.textContent = new Date().getFullYear();

  // Throttle with requestAnimationFrame for smoothness
  let latestKnownScrollY = 0, ticking = false;
  function onScroll(){
    latestKnownScrollY = window.scrollY || window.pageYOffset;
    requestTick();
  }
  function requestTick(){
    if(!ticking){
      requestAnimationFrame(update);
    }
    ticking = true;
  }
  function clamp(v,min,max){return Math.max(min,Math.min(max,v))}

  function update(){
    ticking = false;
    const totalHeight = document.body.scrollHeight - window.innerHeight;
    const progress = totalHeight > 0 ? (latestKnownScrollY / totalHeight) : 0;

    // Map progress to astronaut vertical position between top and bottom of viewport
    const start = 0.06; // initial offset (6% down)
    const end = 0.80; // near bottom when finished
    const mapped = start + (end - start) * progress;
    const translateY = mapped * window.innerHeight;
    astronaut.style.transform = `translateX(-50%) translateY(${translateY}px)`;

    // Small parallax on each stage background (optional subtle)
    stages.forEach((s, i)=>{
      const rect = s.getBoundingClientRect();
      const center = rect.top + rect.height/2 - window.innerHeight/2;
      const depth = 8 + i*2;
      s.style.backgroundPosition = `center ${-center/depth}px`;
    });
  }

  window.addEventListener('scroll', onScroll, {passive:true});
  window.addEventListener('resize', onScroll);
  // initial
  onScroll();

  // Gift status toggles
  document.querySelectorAll('.gift').forEach(gift =>{
    const btn = gift.querySelector('.status');
    btn.addEventListener('click', ()=>{
      const is = btn.getAttribute('aria-pressed') === 'true';
      btn.setAttribute('aria-pressed', !is);
      btn.textContent = !is ? 'Elegido' : 'Disponible';
    });
  });

})();
