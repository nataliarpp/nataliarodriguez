// =========================================================
// TRADUCCIONES
// Los textos en español están directamente en los archivos .html.
// Aquí están las traducciones al catalán (ca) y al inglés (en).
//
// Cada línea es:   "etiqueta": "texto traducido",
// La etiqueta es la misma que pone data-i18n="..." en el .html.
// Puedes usar <br> para saltar de línea, igual que en el .html.
// Ojo: no borres las comillas ni la coma del final de cada línea.
// Si a un texto le falta su traducción, se mostrará en español.
// =========================================================
const TEXTOS = {

  // ---------------------------------------------------------
  // CATALÀ
  // ---------------------------------------------------------
  ca: {
    // Página principal
    "meta.desc": "Portfoli de Natalia Rodríguez, Product Designer (UX/UI).",
    "nav.usecases": "Use cases",
    "nav.experiencia": "Experiència",
    "nav.contacto": "Contacte",

    "hero.titulo": "Natalia Rodríguez és una product designer que dissenya experiències clares i humanes.",
    "hero.ahora.label": "Actualment",
    "hero.ahora": "Dissenyant @ Empresa<br>a Ciutat",
    "hero.antes.label": "Abans",
    "hero.antes": "Vaig dissenyar @ Empresa, @ Empresa,<br>@ Empresa, i més.",

    "card.ver": "Veure cas d'estudi",
    "card.pronto": "Properament",
    "p1.titulo": "Projecte 1",
    "p1.tipo": "App mòbil 2026",
    "p2.titulo": "Projecte 2",
    "p2.tipo": "Dashboard 2025",
    "p3.titulo": "Projecte 3",
    "p3.tipo": "Web 2025",
    "p4.titulo": "Projecte 4",
    "p4.tipo": "Properament 2026",

    "exp.label": "Experiència",
    "exp.titulo": "M'encanta entendre les persones i convertir problemes complexos en productes senzills.",
    "exp.1.fecha": "2024 — Avui",
    "exp.empresa": "Empresa",
    "exp.3.rol": "Pràctiques de disseny",
    "exp.4.lugar": "Universitat / Escola",
    "exp.4.rol": "Grau en Disseny",

    "gal.1": "Jo",
    "gal.2": "Workshops",
    "gal.3": "Equip",
    "gal.4": "Fora de la feina",
    "gal.yo.tip": "Aquesta soc jo! :)",
    "gal.tufoto": "La teva foto",
    "gal.foto": "Foto",

    "contact.label": "Contacte",
    "contact.titulo": "Creem alguna cosa junts?",

    // Casos de estudio (comunes a todos)
    "caso.desc": "Cas d'estudi de Natalia Rodríguez.",
    "caso.resumen": "Resum",
    "caso.problema": "Problema",
    "caso.investigacion": "Recerca",
    "caso.solucion": "Solució",
    "caso.resultados": "Resultats",
    "caso.reflexion": "Reflexió",
    "caso.equipo": "Equip",
    "caso.duracion": "Durada",
    "caso.rol": "El meu rol",
    "caso.imagen": "Imatge",
    "caso.imagengrande": "Imatge gran",
    "caso.volver": "← Tornar a Use cases",

    // Proyecto 1
    "caso1.pagina": "Projecte 1 — Natalia Rodríguez",
    "caso1.titulo": "Un títol que resumeixi el projecte en una frase",
    "caso1.equipo": "Nom Cognom<br>Nom Cognom",
    "caso1.duracion": "Gener — Març 2026",
    "caso1.resumen": "Resum del projecte en dues o tres frases: què era, per a qui i què vas aconseguir.",
    "caso1.h.problema": "El problema",
    "caso1.problema": "Explica el context i el problema que calia resoldre. Per què era important?",
    "caso1.h.investigacion": "Recerca",
    "caso1.investigacion": "Què vas fer per entendre les persones usuàries: entrevistes, enquestes, benchmark…",
    "caso1.h.solucion": "La solució",
    "caso1.solucion": "Descriu la solució final i les decisions de disseny més importants.",
    "caso1.imgsol": "Imatge o vídeo de la solució",
    "caso1.h.resultados": "Resultats",
    "caso1.resultados": "Quin impacte va tenir: mètriques, feedback d'usuaris, què es va llançar…",
    "caso1.h.reflexion": "Reflexió",
    "caso1.reflexion": "Què vas aprendre i què faries diferent la propera vegada.",
  },

  // ---------------------------------------------------------
  // ENGLISH
  // ---------------------------------------------------------
  en: {
    // Página principal
    "meta.desc": "Portfolio of Natalia Rodríguez, Product Designer (UX/UI).",
    "nav.usecases": "Use cases",
    "nav.experiencia": "Experience",
    "nav.contacto": "Contact",

    "hero.titulo": "Natalia Rodríguez is a product designer who creates clear, human experiences.",
    "hero.ahora.label": "Currently",
    "hero.ahora": "Designing @ Company<br>in City",
    "hero.antes.label": "Previously",
    "hero.antes": "Designed @ Company, @ Company,<br>@ Company, and more.",

    "card.ver": "View case study",
    "card.pronto": "Coming soon",
    "p1.titulo": "Project 1",
    "p1.tipo": "Mobile app 2026",
    "p2.titulo": "Project 2",
    "p2.tipo": "Dashboard 2025",
    "p3.titulo": "Project 3",
    "p3.tipo": "Web 2025",
    "p4.titulo": "Project 4",
    "p4.tipo": "Coming soon 2026",

    "exp.label": "Experience",
    "exp.titulo": "I love understanding people and turning complex problems into simple products.",
    "exp.1.fecha": "2024 — Now",
    "exp.empresa": "Company",
    "exp.3.rol": "Design internship",
    "exp.4.lugar": "University / School",
    "exp.4.rol": "BA in Design",

    "gal.1": "Me",
    "gal.2": "Workshops",
    "gal.3": "Team",
    "gal.4": "Outside work",
    "gal.yo.tip": "That's me :)",
    "gal.tufoto": "Your photo",
    "gal.foto": "Photo",

    "contact.label": "Contact",
    "contact.titulo": "Shall we create something together?",

    // Casos de estudio (comunes a todos)
    "caso.desc": "Case study by Natalia Rodríguez.",
    "caso.resumen": "Overview",
    "caso.problema": "Problem",
    "caso.investigacion": "Research",
    "caso.solucion": "Solution",
    "caso.resultados": "Results",
    "caso.reflexion": "Reflection",
    "caso.equipo": "Team",
    "caso.duracion": "Timeline",
    "caso.rol": "My role",
    "caso.imagen": "Image",
    "caso.imagengrande": "Large image",
    "caso.volver": "← Back to Use cases",

    // Proyecto 1
    "caso1.pagina": "Project 1 — Natalia Rodríguez",
    "caso1.titulo": "A title that sums up the project in one sentence",
    "caso1.equipo": "Name Surname<br>Name Surname",
    "caso1.duracion": "January — March 2026",
    "caso1.resumen": "A summary of the project in two or three sentences: what it was, who it was for and what you achieved.",
    "caso1.h.problema": "The problem",
    "caso1.problema": "Explain the context and the problem that needed solving. Why did it matter?",
    "caso1.h.investigacion": "Research",
    "caso1.investigacion": "What you did to understand your users: interviews, surveys, benchmarking…",
    "caso1.h.solucion": "The solution",
    "caso1.solucion": "Describe the final solution and the most important design decisions.",
    "caso1.imgsol": "Image or video of the solution",
    "caso1.h.resultados": "Results",
    "caso1.resultados": "What impact it had: metrics, user feedback, what shipped…",
    "caso1.h.reflexion": "Reflection",
    "caso1.reflexion": "What you learned and what you would do differently next time.",
  },
};
