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
// 3. Botón de modo claro / oscuro
// =========================================================
const toggle = document.querySelector(".theme-toggle");
if (toggle) {
  toggle.addEventListener("click", () => {
    const root = document.documentElement;
    const dark = root.dataset.theme === "dark";
    if (dark) delete root.dataset.theme; else root.dataset.theme = "dark";
    try { localStorage.setItem("tema", dark ? "claro" : "oscuro"); } catch (e) {}
  });
}

// =========================================================
// 4. Cursor personalizado (solo en ordenador, con ratón)
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
    cursor.style.transform = `translate(${cx + offsetX}px, ${cy}px) translateY(-50%)`;
    requestAnimationFrame(follow);
  })();
}
