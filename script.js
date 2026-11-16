// =========================================================
// 0. Huecos de imagen o vídeo (<div class="media" data-media="images/piper/portada">)
//    Busca el archivo con distintas extensiones (.jpg, .png, .webp, .svg, .mp4…) y muestra el primero que exista.
//    Así solo hay que subir el archivo con el nombre correcto: no hace falta tocar el código.
// =========================================================
const EXTENSIONES = ["jpg", "png", "webp", "svg", "mp4", "gif", "jpeg", "webm"];

function cargarMedia(el, i = 0) {
  if (i >= EXTENSIONES.length) return;              // no hay archivo: se queda el hueco
  const ext = EXTENSIONES[i];
  const src = el.dataset.media + "." + ext;
  const etiqueta = el.querySelector(".media__hint b");
  const siguiente = () => cargarMedia(el, i + 1);
  const listo = (nodo) => {
    el.innerHTML = "";
    el.appendChild(nodo);
    el.style.aspectRatio = "auto";
    el.classList.add("is-loaded");
  };
  if (ext === "mp4" || ext === "webm") {
    const v = document.createElement("video");
    v.muted = true; v.loop = true; v.autoplay = true; v.playsInline = true;
    v.setAttribute("muted", ""); v.setAttribute("playsinline", "");
    v.preload = "metadata";
    v.onloadeddata = () => { listo(v); v.play().catch(() => {}); };
    v.onerror = siguiente;
    v.src = src;
  } else {
    const img = new Image();
    img.alt = etiqueta ? etiqueta.textContent : "";
    img.decoding = "async";
    img.onload = () => listo(img);
    img.onerror = siguiente;
    img.src = src;
  }
}

const medias = document.querySelectorAll(".media[data-media]");
if (medias.length) {
  const mediaObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) { cargarMedia(entry.target); mediaObserver.unobserve(entry.target); }
    });
  }, { rootMargin: "800px 0px" });
  medias.forEach((el) => mediaObserver.observe(el));
}

// =========================================================
// Portadas: vídeo que se reproduce al pasar el ratón (solo en ordenador)
// =========================================================
if (window.matchMedia("(hover: hover)").matches) {
  document.querySelectorAll(".card").forEach((card) => {
    const v = card.querySelector("video.cover__hover");
    if (!v) return;
    card.addEventListener("mouseenter", () => {
      v.play().then(() => v.classList.add("is-playing")).catch(() => {});
    });
    card.addEventListener("mouseleave", () => {
      v.classList.remove("is-playing");
      setTimeout(() => { v.pause(); v.currentTime = 0; }, 450);
    });
  });
}

// =========================================================
// 1. Aparecer suavemente al hacer scroll
// =========================================================
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll(".reveal").forEach((el) => revealObserver.observe(el));

// =========================================================
// 2. Menú lateral: marca en color la sección que estás viendo
// =========================================================
const navLinks = [...document.querySelectorAll(".sidebar__nav a")];
const sections = [...document.querySelectorAll("[data-section]")];

function updateActiveLink() {
  const line = window.innerHeight * 0.4;
  let current = sections[0];
  sections.forEach((section) => {
    if (section.getBoundingClientRect().top <= line) current = section;
  });
  // Si has llegado al final de la página, marca la última sección
  if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 4) {
    current = sections[sections.length - 1];
  }
  navLinks.forEach((link) => {
    link.classList.toggle("is-active", link.getAttribute("href") === "#" + current.id);
  });
}
if (sections.length) {
  window.addEventListener("scroll", updateActiveLink, { passive: true });
  updateActiveLink();
}

// =========================================================
// 3. Barra flotante de abajo: modo oscuro + idioma
// =========================================================
const IDIOMAS = [
  { code: "en", nombre: "English" },
  { code: "es", nombre: "Español" },
  { code: "ca", nombre: "Català" },
];

// Textos de la propia barra (para lectores de pantalla)
const TEXTOS_BARRA = {
  es: { tema: "Cambiar entre modo claro y oscuro", idioma: "Cambiar idioma" },
  ca: { tema: "Canvia entre mode clar i fosc", idioma: "Canvia d'idioma" },
  en: { tema: "Switch between light and dark mode", idioma: "Change language" },
};

const ICONO_LUNA = '<svg class="icon-moon" viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M20 14.5A8 8 0 1 1 9.5 4a6.5 6.5 0 0 0 10.5 10.5z"/></svg>';
const ICONO_SOL = '<svg class="icon-sun" viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"><circle cx="12" cy="12" r="4"/><path d="M12 2.5v2M12 19.5v2M2.5 12h2M19.5 12h2M5.3 5.3l1.4 1.4M17.3 17.3l1.4 1.4M18.7 5.3l-1.4 1.4M6.7 17.3l-1.4 1.4"/></svg>';
const ICONO_FLECHA = '<svg class="lang__chev" viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M4 10l4-4 4 4"/></svg>';
const ICONO_CHECK = '<svg class="lang__check" viewBox="0 0 16 16" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M3 8.5l3.2 3L13 4.5"/></svg>';

const barra = document.createElement("div");
barra.className = "controls";
barra.innerHTML = `
  <button class="controls__btn theme-btn" type="button">${ICONO_LUNA}${ICONO_SOL}</button>
  <span class="controls__sep" aria-hidden="true"></span>
  <div class="lang">
    <button class="controls__btn lang__btn" type="button" aria-haspopup="true" aria-expanded="false">
      <span class="flag"></span><span class="lang__code"></span>${ICONO_FLECHA}
    </button>
    <ul class="lang__menu">
      ${IDIOMAS.map((i) => `
        <li><button class="lang__option" type="button" data-lang="${i.code}" lang="${i.code}">
          <span class="flag flag--${i.code}"></span>${i.nombre}${ICONO_CHECK}
        </button></li>`).join("")}
    </ul>
  </div>`;
document.body.appendChild(barra);

// --- Modo oscuro ---
barra.querySelector(".theme-btn").addEventListener("click", () => {
  const root = document.documentElement;
  const dark = root.dataset.theme === "dark";
  if (dark) delete root.dataset.theme; else root.dataset.theme = "dark";
  try { localStorage.setItem("tema", dark ? "claro" : "oscuro"); } catch (e) {}
});

// --- Menú de idiomas: abrir y cerrar ---
const lang = barra.querySelector(".lang");
const langBtn = barra.querySelector(".lang__btn");
function abrirMenu(abrir) {
  lang.classList.toggle("is-open", abrir);
  langBtn.setAttribute("aria-expanded", abrir);
}
langBtn.addEventListener("click", () => abrirMenu(!lang.classList.contains("is-open")));
document.addEventListener("click", (e) => { if (!lang.contains(e.target)) abrirMenu(false); });
document.addEventListener("keydown", (e) => { if (e.key === "Escape") abrirMenu(false); });

// =========================================================
// 4. Traducción
//    El español se lee del propio .html; el catalán y el inglés, de textos.js
// =========================================================
const TRADUCIBLES = [
  ["data-i18n", (el, v) => { el.innerHTML = v; }, (el) => el.innerHTML],
  ["data-i18n-tooltip", (el, v) => { el.dataset.tooltip = v; }, (el) => el.dataset.tooltip],
  ["data-i18n-content", (el, v) => { el.setAttribute("content", v); }, (el) => el.getAttribute("content")],
  ["data-i18n-alt", (el, v) => { el.setAttribute("alt", v); }, (el) => el.getAttribute("alt")],
];

// Guarda el texto original en español de cada elemento
const originales = new Map();
TRADUCIBLES.forEach(([attr, , leer]) => {
  document.querySelectorAll(`[${attr}]`).forEach((el) => {
    if (!originales.has(el)) originales.set(el, {});
    originales.get(el)[attr] = leer(el);
  });
});

function ponerIdioma(code) {
  const dicc = (typeof TEXTOS !== "undefined" && TEXTOS[code]) || {};
  TRADUCIBLES.forEach(([attr, escribir]) => {
    document.querySelectorAll(`[${attr}]`).forEach((el) => {
      const clave = el.getAttribute(attr);
      const espanol = originales.get(el)[attr];
      let texto = espanol;
      if (code !== "es") {
        if (clave in dicc) texto = dicc[clave];
        else console.warn(`Falta la traducción "${clave}" en el idioma "${code}" (textos.js)`);
      }
      escribir(el, texto);
    });
  });

  document.documentElement.lang = code;
  langBtn.querySelector(".flag").className = `flag flag--${code}`;
  langBtn.querySelector(".lang__code").textContent = code.toUpperCase();
  barra.querySelectorAll(".lang__option").forEach((b) => {
    b.setAttribute("aria-current", b.dataset.lang === code);
  });
  const t = TEXTOS_BARRA[code];
  barra.querySelector(".theme-btn").setAttribute("aria-label", t.tema);
  langBtn.setAttribute("aria-label", t.idioma);
}

barra.querySelectorAll(".lang__option").forEach((b) => {
  b.addEventListener("click", () => {
    ponerIdioma(b.dataset.lang);
    try { localStorage.setItem("idioma", b.dataset.lang); } catch (e) {}
    abrirMenu(false);
  });
});

// Idioma inicial: el que eligió antes la visitante o, si no, el de su navegador
function idiomaInicial() {
  const validos = IDIOMAS.map((i) => i.code);
  try {
    const guardado = localStorage.getItem("idioma");
    if (validos.includes(guardado)) return guardado;
  } catch (e) {}
  const delNavegador = navigator.languages || [navigator.language || ""];
  for (const l of delNavegador) {
    const code = l.toLowerCase().slice(0, 2);
    if (validos.includes(code)) return code;
  }
  return "en";
}
ponerIdioma(idiomaInicial());

// =========================================================
// 5. Vista previa de las webs al pasar el ratón por un enlace de empresa
//    La captura de cada web la genera automáticamente el servicio gratuito
//    de capturas de WordPress (mshots), desde el navegador de quien visita.
//    Si prefieres una captura propia, guárdala en images/previews/ con el
//    nombre indicado abajo (por ejemplo images/previews/piperai.jpg):
//    tendrá prioridad sobre la automática.
// =========================================================
const PREVIEWS = {
  "piperai.com": "piperai.jpg",
  "aircall.io": "aircall.jpg",
  "antaiventures.com": "antaiventures.jpg",
  "jardinynatura.com": "jardinynatura.jpg",
  "nuclio.school": "nuclio.jpg",
};

if (window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
  const preview = document.createElement("div");
  preview.className = "preview";
  preview.setAttribute("aria-hidden", "true");
  document.body.appendChild(preview);

  const capturas = {};   // url de la web -> imagen ya cargada
  let actual = null;

  const urlAutomatica = (url, intento) =>
    "https://s.wordpress.com/mshots/v1/" + encodeURIComponent(url) + "?w=1280&h=800" + (intento ? "&r=" + intento : "");

  // Carga la captura: primero la propia (si existe) y si no, la automática.
  // El servicio automático devuelve una imagen pequeña de "cargando" la primera vez;
  // en ese caso se vuelve a intentar unos segundos después.
  function cargarCaptura(link) {
    const url = link.href;
    if (capturas[url]) return;
    capturas[url] = "cargando";
    const archivo = PREVIEWS[link.hostname.replace(/^www\./, "")];
    const propia = new Image();
    propia.onload = () => listo(url, propia);
    propia.onerror = () => automatica(url, 0);
    propia.src = "images/previews/" + archivo;
  }
  function automatica(url, intento) {
    const img = new Image();
    img.onload = () => {
      if (img.naturalWidth >= 1000) listo(url, img);
      else if (intento < 6) setTimeout(() => automatica(url, intento + 1), 3000);
    };
    img.src = urlAutomatica(url, intento);
  }
  function listo(url, img) {
    capturas[url] = img;
    if (actual && actual.href === url) pintar(img);
  }
  function pintar(img) {
    const copia = img.cloneNode();
    copia.alt = "";
    preview.innerHTML = "";
    preview.appendChild(copia);
    preview.classList.remove("is-loading");
  }

  function mostrarPreview(link) {
    if (!PREVIEWS[link.hostname.replace(/^www\./, "")]) return;
    actual = link;
    cargarCaptura(link);
    const img = capturas[link.href];
    if (img instanceof Image) pintar(img);
    else { preview.innerHTML = ""; preview.classList.add("is-loading"); }
    colocarPreview(link);
    preview.classList.add("is-visible");
  }

  function colocarPreview(link) {
    const r = link.getBoundingClientRect();
    const w = preview.offsetWidth, h = preview.offsetHeight;
    let x = Math.min(r.left, window.innerWidth - w - 16);
    let y = r.bottom + 12;
    if (y + h > window.innerHeight - 16) y = r.top - h - 12;
    preview.style.left = Math.max(16, x) + "px";
    preview.style.top = y + "px";
  }

  document.addEventListener("mouseover", (e) => {
    const link = e.target.closest("a.inline-link");
    if (link && link !== actual) mostrarPreview(link);
  });
  document.addEventListener("mouseout", (e) => {
    const link = e.target.closest("a.inline-link");
    if (link && !link.contains(e.relatedTarget)) { actual = null; preview.classList.remove("is-visible"); }
  });
  window.addEventListener("scroll", () => { actual = null; preview.classList.remove("is-visible"); }, { passive: true });

  // Pide las capturas por adelantado, para que estén listas al pasar el ratón
  window.addEventListener("load", () => {
    setTimeout(() => document.querySelectorAll("a.inline-link").forEach(cargarCaptura), 800);
  });
}

// =========================================================
// 6. Cursor personalizado (solo en ordenador, con ratón)
//    - Cuadrado de color por defecto
//    - Barra de texto encima de los textos
//    - Etiqueta de color encima de elementos con data-tooltip="..."
// =========================================================
const cursor = document.querySelector(".cursor");
const hasMouse = window.matchMedia("(hover: hover) and (pointer: fine)").matches;

if (cursor && hasMouse) {
  const label = cursor.querySelector(".cursor__label");
  const TEXT = "h1, h2, h3, p, li, figcaption";
  let x = -100, y = -100, cx = x, cy = y, offsetX = -6;

  document.documentElement.classList.add("has-cursor");

  window.addEventListener("mousemove", (e) => {
    x = e.clientX;
    y = e.clientY;
    cursor.classList.add("is-visible");
  });

  document.addEventListener("mouseout", (e) => {
    if (!e.relatedTarget) cursor.classList.remove("is-visible");
  });

  document.addEventListener("mouseover", (e) => {
    const target = e.target;
    const tip = target.closest("[data-tooltip]");
    const text = !tip && !target.closest("a, button") && target.closest(TEXT);

    if (tip) {
      label.textContent = tip.dataset.tooltip;
      cursor.classList.add("has-label");
    } else {
      cursor.classList.remove("has-label");
    }

    if (text) {
      const size = parseFloat(getComputedStyle(text).fontSize);
      cursor.style.setProperty("--caret", Math.round(size * 1.15) + "px");
      cursor.classList.add("is-text");
      offsetX = -1;
    } else {
      cursor.classList.remove("is-text");
      offsetX = -6;
    }
  });

  (function follow() {
    cx += (x - cx) * 0.35;
    cy += (y - cy) * 0.35;
    // Si la etiqueta no cabe a la derecha, se abre hacia la izquierda
    const flip = cursor.classList.contains("has-label") && x + cursor.offsetWidth + 24 > window.innerWidth;
    cursor.classList.toggle("is-flipped", flip);
    const dx = flip ? -cursor.offsetWidth + 6 : offsetX;
    cursor.style.transform = `translate(${cx + dx}px, ${cy}px) translateY(-50%)`;
    requestAnimationFrame(follow);
  })();
}
