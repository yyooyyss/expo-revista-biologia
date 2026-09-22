/* ==========================================================================
   Expo Revista Digital · Sección de BIOLOGÍA
   Interactividad: año del pie y aparición progresiva de los bloques.
   ========================================================================== */

'use strict';

const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));
const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ---------- Año ---------- */
function setYear() {
  const y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();
}

/* ---------- Aparición progresiva ---------- */
function bindReveal() {
  const items = $$('.card, .lista, .estado__box');
  if (!items.length) return;

  if (reduced || !('IntersectionObserver' in window)) {
    items.forEach(i => i.classList.add('reveal--in'));
    return;
  }

  items.forEach((el, i) => {
    el.classList.add('reveal');
    el.style.transitionDelay = `${Math.min(i * 90, 300)}ms`;
  });

  const obs = new IntersectionObserver((entries, o) => {
    entries.forEach(en => {
      if (!en.isIntersecting) return;
      en.target.classList.add('reveal--in');
      en.target.style.transitionDelay = '0ms';
      o.unobserve(en.target);
    });
  }, { threshold: .12, rootMargin: '0px 0px -8% 0px' });

  items.forEach(el => obs.observe(el));
}

document.addEventListener('DOMContentLoaded', () => {
  setYear();
  bindReveal();
});
