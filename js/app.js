/* ==========================================================================
   Expo Revista Digital · Sección Biología
   "Evolución, diversidad y amenazas antrópicas"
   Lógica: datos de especies, fichas, modal y navegación entre páginas.
   ========================================================================== */

'use strict';

/* --------------------------------------------------------------------------
   1. DATOS · 10 especies nativas y endémicas del Ecuador
   -------------------------------------------------------------------------- */
const ESPECIES = [
  /* ------------------------------ ANIMALES ------------------------------ */
  {
    id: 'guacamayo',
    tipo: 'animal',
    nombre: 'Guacamayo verde mayor',
    cientifico: 'Ara ambiguus',
    img: 'img/guacamayo-verde-mayor.jpg',
    estado: 'En peligro crítico (CR)',
    habitat: 'Bosques húmedos del Chocó ecuatoriano: Esmeraldas, Imbabura y Pichincha.',
    datos: [
      'Es el guacamayo más grande del Ecuador: mide hasta 90 cm y pesa cerca de 1,4 kg.',
      'Depende del almendro (Dipteryx oleifera), cuyo fruto es su alimento principal.',
      'Vive en parejas o grupos pequeños y puede superar los 50 años de vida.',
      'En Ecuador quedan menos de 100 individuos en estado silvestre.'
    ],
    amenazas: 'Deforestación del bosque húmedo tropical y tráfico ilegal de pichones para mascotas.',
    refs: [
      'BirdLife International. (2023). Ara ambiguus. The IUCN Red List of Threatened Species. https://www.iucnredlist.org',
      'Freile, J. F., & Bonaccorso, E. (Eds.). (2018). Aves del Ecuador: lista oficial y estado de conservación. Aves Ecuador / USFQ.',
      'Ministerio del Ambiente del Ecuador. (2011). Libro Rojo de las Aves del Ecuador. MAE.'
    ]
  },
  {
    id: 'zamarrito',
    tipo: 'animal',
    nombre: 'Zamarrito pechinegro',
    cientifico: 'Eriocnemis nigrivestis',
    img: 'img/zamarrito-pechinegro.jpg',
    estado: 'En peligro crítico (CR)',
    habitat: 'Bosque nublado de las laderas del volcán Pichincha, al noroccidente de Quito.',
    datos: [
      'Es un colibrí endémico del Ecuador: no existe en ningún otro lugar del mundo.',
      'Se estima que quedan menos de 250 individuos adultos.',
      'Su plumaje iridiscente verde y azul lo convierte en uno de los colibríes más bellos del país.',
      'Su nombre viene de los «pompones» de plumas blancas que tiene en las patas.'
    ],
    amenazas: 'Pérdida del bosque nublado por agricultura y ganadería, y cambio climático en las zonas altas.',
    refs: [
      'BirdLife International. (2023). Eriocnemis nigrivestis. The IUCN Red List of Threatened Species. https://www.iucnredlist.org',
      'Fundación de Conservación Jocotoco. (2023). Zamarrito pechinegro: conservación de un colibrí único. https://www.jocotoco.org.ec',
      'Ministerio del Ambiente del Ecuador. (2011). Libro Rojo de las Aves del Ecuador. MAE.'
    ]
  },
  {
    id: 'tapir',
    tipo: 'animal',
    nombre: 'Tapir andino (danta de montaña)',
    cientifico: 'Tapirus pinchaque',
    img: 'img/tapir-andino.jpg',
    estado: 'En peligro (EN)',
    habitat: 'Páramos y bosques nublados de los Andes del norte: Carchi, Imbabura, Pichincha y Napo.',
    datos: [
      'Es el mamífero terrestre más grande de los Andes: pesa hasta 250 kg.',
      'Es pariente lejano de los rinocerontes y los caballos.',
      'Dispersa semillas de decenas de plantas: lo llaman el «jardinero del bosque».',
      'Es una especie clave: su desaparición altera todo el ecosistema del páramo.'
    ],
    amenazas: 'Cacería, destrucción del páramo, atropellamientos en carreteras y cambio climático.',
    refs: [
      'Tirira, D. G. (Ed.). (2011). Libro Rojo de los Mamíferos del Ecuador (2.ª ed.). Fundación Mamíferos y Conservación / PUCE.',
      'Unión Internacional para la Conservación de la Naturaleza [UICN]. (2023). Tapirus pinchaque. The IUCN Red List of Threatened Species. https://www.iucnredlist.org',
      'Fundación Cóndor Andino. (2022). La danta de montaña en el Ecuador. https://www.condorandino.org'
    ]
  },
  {
    id: 'jaguar',
    tipo: 'animal',
    nombre: 'Jaguar',
    cientifico: 'Panthera onca',
    img: 'img/jaguar.jpg',
    estado: 'Casi amenazado (NT) · En peligro en Ecuador',
    habitat: 'Amazonía, bosque del Chocó y manglares de la costa ecuatoriana.',
    datos: [
      'Es el felino más grande de América y el tercero del mundo.',
      'Tiene la mordida más potente entre todos los felinos: puede perforar caparazones de tortuga.',
      'Es un «depredador tope»: regula las poblaciones de otras especies del ecosistema.',
      'En Ecuador se estiman menos de 2 000 individuos, concentrados en la Amazonía.'
    ],
    amenazas: 'Cacería, deforestación, conflicto con ganaderos y pérdida de corredores biológicos.',
    refs: [
      'Tirira, D. G. (Ed.). (2011). Libro Rojo de los Mamíferos del Ecuador (2.ª ed.). Fundación Mamíferos y Conservación / PUCE.',
      'Unión Internacional para la Conservación de la Naturaleza [UICN]. (2023). Panthera onca. The IUCN Red List of Threatened Species. https://www.iucnredlist.org',
      'Ministerio del Ambiente, Agua y Transición Ecológica [MAATE]. (2021). Estrategia Nacional de Biodiversidad 2015–2030. MAATE.'
    ]
  },
  {
    id: 'tortuga',
    tipo: 'animal',
    nombre: 'Tortuga gigante de Galápagos',
    cientifico: 'Chelonoidis niger',
    img: 'img/tortuga-galapagos.jpg',
    estado: 'Vulnerable (VU) · varía según la especie',
    habitat: 'Islas Galápagos: zonas áridas y húmedas de Santa Cruz, Isabela, San Cristóbal y otras.',
    datos: [
      'Es endémica de Galápagos: cada isla tiene su propia forma de caparazón.',
      'Puede vivir más de 100 años y pesar hasta 400 kg.',
      'Es una «ingeniera del ecosistema»: dispersa semillas y abre senderos en la vegetación.',
      'De las 15 especies originales, varias se extinguieron; hoy se desarrollan programas de cría y reintroducción.'
    ],
    amenazas: 'Especies introducidas (cabras, ratas), caza histórica de balleneros y cambio climático.',
    refs: [
      'Charles Darwin Foundation. (2023). Galápagos species checklist. https://www.darwinfoundation.org',
      'Parque Nacional Galápagos. (2023). Tortugas gigantes: programa de cría y repoblación. Dirección del Parque Nacional Galápagos.',
      'Unión Internacional para la Conservación de la Naturaleza [UICN]. (2023). Chelonoidis niger. The IUCN Red List of Threatened Species. https://www.iucnredlist.org'
    ]
  },

  /* ------------------------------- PLANTAS ------------------------------- */
  {
    id: 'pigue',
    tipo: 'planta',
    nombre: 'Pigüe',
    cientifico: 'Cavanillesia platanifolia',
    img: 'img/pigue.jpg',
    estado: 'Vulnerable (VU)',
    habitat: 'Bosque seco tropical y Bosque Petrificado de Puyango, en El Oro y Loja.',
    datos: [
      'Es un árbol gigante que alcanza hasta 40 m de altura y 3 m de diámetro.',
      'Su tronco liso y columnar almacena agua para la estación seca.',
      'El Bosque Petrificado de Puyango alberga el bosque de pigües más grande de Sudamérica.',
      'Su madera liviana fue usada para balsas y canoas desde la época prehispánica.'
    ],
    amenazas: 'Tala selectiva, expansión agrícola y ganadera, y escasa regeneración natural.',
    refs: [
      'León-Yánez, S., Valencia, R., Pitman, N., Endara, L., Ulloa Ulloa, C., & Navarrete, H. (Eds.). (2011). Libro Rojo de las Plantas Endémicas del Ecuador (2.ª ed.). Herbario QCA, PUCE.',
      'Ministerio del Ambiente, Agua y Transición Ecológica [MAATE]. (2020). Plan de manejo del Bosque Petrificado de Puyango. MAATE.',
      'Pucha Cofrep, D. (2019). Árboles del Bosque Petrificado de Puyango. Universidad Nacional de Loja.'
    ]
  },
  {
    id: 'guayacan',
    tipo: 'planta',
    nombre: 'Guayacán',
    cientifico: 'Handroanthus chrysanthus',
    img: 'img/guayacan.jpg',
    estado: 'Vulnerable (VU)',
    habitat: 'Bosque seco de la costa ecuatoriana: Guayas, Manabí, Santa Elena y El Oro.',
    datos: [
      'En la estación seca se cubre de flores amarillas: es uno de los espectáculos más bellos del bosque seco.',
      'Su madera es una de las más duras y resistentes de América.',
      'Florece en sincronía con las lluvias, señal del inicio del invierno en la costa.',
      'Es símbolo del bosque seco ecuatoriano y atrae abejas y aves polinizadoras.'
    ],
    amenazas: 'Deforestación del bosque seco, tala para madera y expansión de cultivos y camaroneras.',
    refs: [
      'León-Yánez, S., Valencia, R., Pitman, N., Endara, L., Ulloa Ulloa, C., & Navarrete, H. (Eds.). (2011). Libro Rojo de las Plantas Endémicas del Ecuador (2.ª ed.). Herbario QCA, PUCE.',
      'Dodson, C. H., & Gentry, A. H. (1991). Biological extinction in western Ecuador. Annals of the Missouri Botanical Garden, 78(2), 273–295.',
      'Ministerio del Ambiente, Agua y Transición Ecológica [MAATE]. (2021). Estrategia Nacional de Biodiversidad 2015–2030. MAATE.'
    ]
  },
  {
    id: 'frailejon',
    tipo: 'planta',
    nombre: 'Frailejón',
    cientifico: 'Espeletia pycnophylla',
    img: 'img/frailejon.jpg',
    estado: 'Vulnerable (VU)',
    habitat: 'Páramos del norte del Ecuador: Carchi, Imbabura y Pichincha, sobre los 3 200 m.',
    datos: [
      'Sus hojas lanosas capturan la niebla y la convierten en agua que alimenta los ríos.',
      'Es la planta insignia del páramo, el ecosistema que abastece de agua a las ciudades andinas.',
      'Crece muy lento: apenas 1 cm por año; un frailejón de 2 m puede tener 200 años.',
      'En Ecuador es la única especie de Espeletia presente, en el extremo norte del país.'
    ],
    amenazas: 'Quemas, ganadería extensiva, expansión agrícola y calentamiento del páramo.',
    refs: [
      'León-Yánez, S., Valencia, R., Pitman, N., Endara, L., Ulloa Ulloa, C., & Navarrete, H. (Eds.). (2011). Libro Rojo de las Plantas Endémicas del Ecuador (2.ª ed.). Herbario QCA, PUCE.',
      'Ministerio del Ambiente, Agua y Transición Ecológica [MAATE]. (2021). Estrategia Nacional de Biodiversidad 2015–2030. MAATE.',
      'Sklenář, P., Hedberg, K. S., & Cleef, A. M. (2014). Island biogeography of tropical alpine floras. Journal of Biogeography, 41(2), 287–297.'
    ]
  },
  {
    id: 'cattleya',
    tipo: 'planta',
    nombre: 'Orquídea Cattleya maxima',
    cientifico: 'Cattleya maxima',
    img: 'img/cattleya-maxima.jpg',
    estado: 'Vulnerable (VU)',
    habitat: 'Bosques húmedos y secos de la costa y el sur de la Amazonía ecuatoriana.',
    datos: [
      'Es una de las orquídeas más grandes y vistosas del Ecuador: flores de hasta 15 cm.',
      'Crece como epífita: vive sobre los árboles sin dañarlos, tomando agua y luz.',
      'Es nativa de Ecuador y del norte del Perú.',
      'Su belleza la convierte en víctima de la recolección ilegal para coleccionistas.'
    ],
    amenazas: 'Recolección ilegal, destrucción de bosques y comercio internacional de plantas.',
    refs: [
      'León-Yánez, S., Valencia, R., Pitman, N., Endara, L., Ulloa Ulloa, C., & Navarrete, H. (Eds.). (2011). Libro Rojo de las Plantas Endémicas del Ecuador (2.ª ed.). Herbario QCA, PUCE.',
      'Dodson, C. H., & Gentry, A. H. (1991). Biological extinction in western Ecuador. Annals of the Missouri Botanical Garden, 78(2), 273–295.',
      'Ministerio del Ambiente, Agua y Transición Ecológica [MAATE]. (2021). Estrategia Nacional de Biodiversidad 2015–2030. MAATE.'
    ]
  },
  {
    id: 'mangle',
    tipo: 'planta',
    nombre: 'Mangle rojo',
    cientifico: 'Rhizophora mangle',
    img: 'img/mangle-rojo.jpg',
    estado: 'Vulnerable (VU)',
    habitat: 'Manglares de la costa ecuatoriana: Esmeraldas, Manabí, Guayas, El Oro y Galápagos.',
    datos: [
      'Sus raíces zancudas se elevan sobre el agua y protegen la costa de tormentas y tsunamis.',
      'El manglar es el «vivero del mar»: allí se reproducen peces, cangrejos y camarones.',
      'Captura hasta 4 veces más carbono que un bosque tropical: es clave contra el cambio climático.',
      'En Ecuador los manglares cubren unas 150 000 hectáreas, la mayoría en el Golfo de Guayaquil.'
    ],
    amenazas: 'Tala para camaroneras, contaminación por agroquímicos y expansión urbana costera.',
    refs: [
      'Ministerio del Ambiente, Agua y Transición Ecológica [MAATE]. (2021). Estrategia Nacional de Biodiversidad 2015–2030. MAATE.',
      'Cueva, E., & Chalén, X. (2019). Manglares del Ecuador: estado y conservación. MAATE.',
      'Unión Internacional para la Conservación de la Naturaleza [UICN]. (2023). Rhizophora mangle. The IUCN Red List of Threatened Species. https://www.iucnredlist.org'
    ]
  }
];

/* --------------------------------------------------------------------------
   2. UTILIDADES
   -------------------------------------------------------------------------- */
const $  = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));

const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* --------------------------------------------------------------------------
   3. RENDERIZADO DE FICHAS DE ESPECIES
   -------------------------------------------------------------------------- */
function renderSpecies() {
  const contAnimales = $('#speciesAnimales');
  const contPlantas = $('#speciesPlantas');

  ESPECIES.forEach((e, i) => {
    const ficha = document.createElement('article');
    ficha.className = 'ficha';
    ficha.innerHTML = `
      <div class="ficha__media">
        <span class="ficha__badge ${e.tipo === 'planta' ? 'ficha__badge--planta' : ''}">${e.tipo === 'animal' ? '🦜 Animal' : '🌿 Planta'}</span>
        <img src="${e.img}" alt="${e.nombre} (${e.cientifico})" loading="lazy" />
        <span class="ficha__estado">${e.estado}</span>
      </div>
      <div class="ficha__body">
        <h3 class="ficha__nombre">${e.nombre}</h3>
        <p class="ficha__sci">${e.cientifico}</p>
        <p class="ficha__habitat"><span aria-hidden="true">📍</span> ${e.habitat}</p>
        <ul class="ficha__datos">
          ${e.datos.slice(0, 3).map(d => `<li>${d}</li>`).join('')}
        </ul>
        <details class="ficha__refs">
          <summary>Bibliografía de la especie</summary>
          <ol>${e.refs.map(r => `<li>${r}</li>`).join('')}</ol>
        </details>
        <button class="ficha__btn" type="button" data-ficha="${e.id}">Ver ficha completa</button>
      </div>`;

    (e.tipo === 'animal' ? contAnimales : contPlantas).appendChild(ficha);
  });

  // Abrir modal desde el botón de cada ficha
  $$('[data-ficha]').forEach(btn => {
    btn.addEventListener('click', () => {
      const sp = ESPECIES.find(x => x.id === btn.dataset.ficha);
      if (sp) openModal(sp);
    });
  });
}

/* --------------------------------------------------------------------------
   4. MODAL DE DETALLE
   -------------------------------------------------------------------------- */
let lastFocus = null;

function openModal(e) {
  const modal = $('#modal');
  if (!modal) return;

  lastFocus = document.activeElement;
  $('#modalTipo').textContent = e.tipo === 'animal' ? '🦜 Fauna nativa del Ecuador' : '🌿 Flora nativa del Ecuador';
  $('#modalTitle').textContent = e.nombre;
  $('#modalSci').textContent = e.cientifico;

  $('#modalBody').innerHTML = `
    <dl>
      <dt>Estado de conservación</dt><dd>${e.estado}</dd>
      <dt>Hábitat</dt><dd>${e.habitat}</dd>
      <dt>Principales amenazas</dt><dd>${e.amenazas}</dd>
    </dl>
    <h4>Datos de interés</h4>
    <ul>${e.datos.map(d => `<li>${d}</li>`).join('')}</ul>
    <h4>Bibliografía (APA)</h4>
    <ol>${e.refs.map(r => `<li>${r}</li>`).join('')}</ol>`;

  modal.hidden = false;
  document.body.style.overflow = 'hidden';
  $('.modal__close', modal).focus();
}

function closeModal() {
  const modal = $('#modal');
  if (!modal || modal.hidden) return;
  modal.hidden = true;
  document.body.style.overflow = '';
  if (lastFocus && typeof lastFocus.focus === 'function') lastFocus.focus();
}

/* --------------------------------------------------------------------------
   5. NAVEGACIÓN ENTRE PÁGINAS
   -------------------------------------------------------------------------- */
const slides = $$('.slide');
let current = 0;

function buildDots() {
  const dots = $('#dots');
  if (!dots) return;

  slides.forEach((s, i) => {
    const b = document.createElement('button');
    b.type = 'button';
    b.className = 'dotbtn';
    b.setAttribute('role', 'tab');
    b.setAttribute('aria-label', `Ir a: ${s.dataset.title || 'página ' + (i + 1)}`);
    b.setAttribute('aria-selected', i === 0 ? 'true' : 'false');
    b.addEventListener('click', () => goTo(i));
    dots.appendChild(b);
  });
  $('#totPage').textContent = slides.length;
}

function goTo(index, dir) {
  if (index < 0 || index >= slides.length || index === current) return;

  const from = slides[current];
  const to = slides[index];
  const forward = dir !== undefined ? dir > 0 : index > current;

  from.classList.remove('slide--active', 'slide--back');
  to.classList.remove('slide--back');
  if (!forward) to.classList.add('slide--back');
  void to.offsetWidth;
  to.classList.add('slide--active');

  current = index;
  updateUI();
  onSlideShown(to, index);
}

function updateUI() {
  const dots = $$('.dotbtn');
  dots.forEach((d, i) => d.setAttribute('aria-selected', i === current ? 'true' : 'false'));

  const pct = ((current + 1) / slides.length) * 100;
  const fill = $('#progressFill');
  if (fill) fill.style.width = `${pct}%`;

  const bar = $('.progress');
  if (bar) {
    bar.setAttribute('aria-valuenow', current + 1);
    bar.setAttribute('aria-valuemax', slides.length);
  }

  const cur = $('#curPage');
  if (cur) cur.textContent = current + 1;

  const prev = $('#btnPrev');
  const next = $('#btnNext');
  if (prev) prev.disabled = current === 0;
  if (next) next.disabled = current === slides.length - 1;

  // Historial con hash para poder compartir el enlace de cada página
  const slug = (slides[current].dataset.title || 'pagina').toLowerCase()
    .normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/\s+/g, '-');

  try { history.replaceState(null, '', `#${slug}`); } catch (err) { /* file:// en algunos navegadores */ }

  window.scrollTo({ top: 0, behavior: prefersReduced ? 'auto' : 'smooth' });
}

function onSlideShown(slide, index) {
  if (slide.classList.contains('slide--cover')) runCounters();
  const dotActive = $$('.dotbtn')[index];
  if (dotActive && dotActive.scrollIntoView) {
    dotActive.scrollIntoView({ block: 'nearest', inline: 'center', behavior: prefersReduced ? 'auto' : 'smooth' });
  }
}

/* --------- Contador animado de la portada --------- */
function runCounters() {
  $$('.stat__num').forEach(el => {
    const target = parseInt(el.dataset.count, 10);
    const suffix = el.dataset.suffix || '';
    if (prefersReduced) { el.textContent = target + suffix; return; }

    const dur = 1200;
    const t0 = performance.now();
    const step = now => {
      const p = Math.min((now - t0) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(target * eased) + suffix;
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  });
}

/* --------------------------------------------------------------------------
   6. EVENTOS GLOBALES
   -------------------------------------------------------------------------- */
function bindEvents() {
  const prev = $('#btnPrev');
  const next = $('#btnNext');
  if (prev) prev.addEventListener('click', () => goTo(current - 1, -1));
  if (next) next.addEventListener('click', () => goTo(current + 1, 1));

  // Botones internos con data-go
  $$('[data-go]').forEach(b => {
    b.addEventListener('click', () => {
      const dir = b.dataset.go;
      if (dir === 'next') goTo(current + 1, 1);
      else if (dir === 'prev') goTo(current - 1, -1);
      else if (dir === 'first') goTo(0, -1);
      else if (dir === 'last') goTo(slides.length - 1, 1);
    });
  });

  // Teclado
  document.addEventListener('keydown', ev => {
    if (!$('#modal').hidden) {
      if (ev.key === 'Escape') closeModal();
      return;
    }
    if (ev.target.matches('input, textarea, select')) return;
    if (ev.key === 'ArrowRight' || ev.key === 'PageDown') { ev.preventDefault(); goTo(current + 1, 1); }
    else if (ev.key === 'ArrowLeft' || ev.key === 'PageUp') { ev.preventDefault(); goTo(current - 1, -1); }
    else if (ev.key === 'Home') { ev.preventDefault(); goTo(0, -1); }
    else if (ev.key === 'End') { ev.preventDefault(); goTo(slides.length - 1, 1); }
  });

  // Modal
  const modal = $('#modal');
  if (modal) {
    $$('[data-close]', modal).forEach(el => el.addEventListener('click', closeModal));
  }

  // Deslizar (swipe) en pantallas táctiles
  let x0 = null, y0 = null;
  document.addEventListener('touchstart', ev => {
    if (ev.touches.length !== 1) return;
    x0 = ev.touches[0].clientX;
    y0 = ev.touches[0].clientY;
  }, { passive: true });

  document.addEventListener('touchend', ev => {
    if (x0 === null || !$('#modal').hidden) return;
    const dx = ev.changedTouches[0].clientX - x0;
    const dy = ev.changedTouches[0].clientY - y0;
    if (Math.abs(dx) > 70 && Math.abs(dx) > Math.abs(dy) * 1.6) {
      goTo(dx < 0 ? current + 1 : current - 1, dx < 0 ? 1 : -1);
    }
    x0 = y0 = null;
  }, { passive: true });

  // Flechas del teclado visibles solo en escritorio
  if (window.matchMedia('(hover: none)').matches) {
    document.documentElement.classList.add('is-touch');
  }
}

/* --------- Impresión: abrir las bibliografías desplegables --------- */
function bindPrint() {
  const openRefs = () => $$('details.ficha__refs').forEach(d => { d.open = true; });
  // Al generar el PDF con ?print=1 se abren las bibliografías automáticamente
  if (new URLSearchParams(location.search).has('print')) openRefs();
  if (window.matchMedia) {
    const mq = window.matchMedia('print');
    const onChange = ev => { if (ev.matches) openRefs(); };
    if (mq.addEventListener) mq.addEventListener('change', onChange);
    else if (mq.addListener) mq.addListener(onChange);
  }
  window.addEventListener('beforeprint', openRefs);
}

/* --------------------------------------------------------------------------
   7. INICIALIZACIÓN
   -------------------------------------------------------------------------- */
function init() {
  const y = $('#year');
  if (y) y.textContent = new Date().getFullYear();

  renderSpecies();
  buildDots();
  bindEvents();
  bindPrint();

  // Abrir en la página indicada por el hash (enlace compartible)
  const hash = decodeURIComponent(location.hash.replace('#', '') || '');
  if (hash) {
    const idx = slides.findIndex(s => {
      const slug = (s.dataset.title || '').toLowerCase()
        .normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/\s+/g, '-');
      return slug === hash;
    });
    if (idx > 0) {
      slides[0].classList.remove('slide--active');
      slides[idx].classList.add('slide--active');
      current = idx;
    }
  }

  updateUI();
  onSlideShown(slides[current], current);
}

document.addEventListener('DOMContentLoaded', init);
