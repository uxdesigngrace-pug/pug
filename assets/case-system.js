(() => {
  const root = document.querySelector('.case-unified');
  if (!root) return;
  const panels = [...root.querySelectorAll('.case-stage-panel')];
  const sections = [...root.querySelectorAll('.doc section[id]')];
  let selected = 'intro';
  let imageIndex = 0;
  function render(id) {
    if (selected === id) return;
    selected = id;
    imageIndex = 0;
    for (const p of panels) p.hidden = p.dataset.for !== id;
    refreshImages();
  }
  function refreshImages() {
    const panel = panels.find(p => p.dataset.for === selected);
    if (!panel) return;
    const frames = [...panel.querySelectorAll('.case-media-frame')];
    for (let i=0; i<frames.length; i++) frames[i].hidden = i !== imageIndex;
    const count = panel.querySelector('.case-gallery-count');
    if (count) count.textContent = `${imageIndex + 1} / ${frames.length}`;
  }
  function update() {
    // Keep the visual paired with the section nearest the current reading line.
    const readingLine = Math.max(130, window.innerHeight * .36);
    let id = 'intro';
    for (const sec of sections) {
      if (sec.getBoundingClientRect().top <= readingLine) id = sec.id;
      else break;
    }
    render(id);
  }
  let requested = false;
  window.addEventListener('scroll', () => {
    if (requested) return;
    requested = true;
    requestAnimationFrame(() => { requested = false; update(); });
  }, {passive:true});
  addEventListener('resize', update, {passive:true});
  addEventListener('pageshow', update);
  root.querySelectorAll('.case-stage-gallery button').forEach(btn => {
    btn.addEventListener('click', () => {
      const panel = btn.closest('.case-stage-panel');
      const frames = panel.querySelectorAll('.case-media-frame');
      if (!frames.length) return;
      imageIndex = (imageIndex + (btn.classList.contains('case-next') ? 1 : -1) + frames.length) % frames.length;
      refreshImages();
    });
  });
  update();
})();