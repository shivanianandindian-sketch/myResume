// Typing effect
  const lines = [
    "> compiling experience...",
    "> loading projects: drive-sentinel, rider-saathi, shop-metrix, jarvis",
    "> status: open to opportunities ✓"
  ];
  const el = document.getElementById('typeLine');
  const cursor = el.querySelector('.cursor');
  let li = 0, ci = 0;

  function typeStep(){
    if(li >= lines.length){ return; }
    const current = lines[li];
    if(ci <= current.length){
      el.textContent = current.slice(0, ci);
      el.appendChild(cursor);
      ci++;
      setTimeout(typeStep, 28);
    } else {
      li++;
      ci = 0;
      setTimeout(() => {
        el.textContent = '';
        el.appendChild(cursor);
        typeStep();
      }, 900);
    }
  }
  typeStep();

  // Skill bar reveal on scroll
  const skillRows = document.querySelectorAll('.skill-row');
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => { if(e.isIntersecting) e.target.classList.add('in-view'); });
  }, { threshold: 0.3 });
  skillRows.forEach(r => io.observe(r));

  // Active nav link highlighting
  const navLinks = document.querySelectorAll('.filetree a');
  const sections = Array.from(navLinks).map(a => document.getElementById(a.dataset.target)).filter(Boolean);
  const navIo = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const link = document.querySelector(`.filetree a[data-target="${entry.target.id}"]`);
      if(entry.isIntersecting){
        navLinks.forEach(l => l.classList.remove('active'));
        if(link) link.classList.add('active');
      }
    });
  }, { rootMargin: '-20% 0px -70% 0px' });
  sections.forEach(s => navIo.observe(s));