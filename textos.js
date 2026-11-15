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
    "nav.usecases": "Casos d'ús",
    "nav.about": "Sobre mi",
    "nav.contacto": "Contacte",

    "hero.ahora.label": "Actualment",
    "hero.ahora": "Dissenyant <a class=\"inline-link\" href=\"https://www.piperai.com/es\" target=\"_blank\" rel=\"noopener\">Piper AI</a> <br>des d'<a class=\"inline-link\" href=\"https://aircall.io/es/\" target=\"_blank\" rel=\"noopener\">Aircall</a>",
    "hero.antes.label": "Abans",
    "hero.antes": "Dissenyant noves startups a <a class=\"inline-link\" href=\"https://antaiventures.com/\" target=\"_blank\" rel=\"noopener\">Antai Ventures</a>, <br>creant packagings a <a class=\"inline-link\" href=\"https://jardinynatura.com/\" target=\"_blank\" rel=\"noopener\">Jardín y Natura</a> <br>i mentoritzant a <a class=\"inline-link\" href=\"https://nuclio.school/\" target=\"_blank\" rel=\"noopener\">Nuclio</a>.",

    "card.ver": "Veure cas d'estudi",
    "card.pronto": "Properament",
    "p1.tipo": "En construcció",
    "p2.tipo": "Disseny de producte",
    "p3.tipo": "Research, disseny, prova A/B i prova d'adquisició d'usuaris",
    "p4.titulo": "The Garden People i Kerama",
    "p4.tipo": "Experiència d'usuari i redisseny web",
    "p5.titulo": "Packaging i Il·lustració",
    "p5.tipo": "Disseny gràfic i il·lustració",

    "bio.1": "Tots ens hem frustrat amb un botó que no funciona o hem abandonat una app perquè no enteníem com fer-la servir. Per això vaig fer el pas del disseny gràfic al disseny de producte: dissenyar bonic crida l'atenció, però dissenyar amb fonament és el que fa que una cosa funcioni.",
    "bio.2": "Avui faig servir la IA per accelerar el procés de principi a fi: des de la recerca i la definició fins al prototipatge i la validació de cada part del producte.",
    "caso1.nombre": "Projecte 1",

    "exp.label": "Experiència",

    "exp.1.fecha": "Gen. 2024 — Avui",

    "exp.2.fecha": "Gen. 2023 — Gen. 2024",

    "exp.3.fecha": "Febr. 2023 — Març 2024",
    "exp.3.rol": "Mentora UX/UI",

    "exp.4.fecha": "Març 2020 — Des. 2022",
    "exp.4.rol": "Dissenyadora gràfica i il·lustradora",

    "edu.label": "Formació",
    "edu.1.titulo": "Màster en UX/UI Design",
    "edu.2.titulo": "Postgrau en Disseny Gràfic i Packaging",
    "edu.3.titulo": "Grau Superior en Disseny i Gràfica Publicitària",

    "extra.herramientas": "Eines",
    "extra.idiomas": "Idiomes",
    "extra.idiomas.valor": "Català i castellà (nadius)<br>Anglès (B2)",

    "about.titulo": "Quan no estic dissenyant…",
    "about.foto": "Foto",
    "about.1.alt": "Foto de Natalia",
    "about.1.nota": "Encantada, soc la Nat :)",
    "about.2.alt": "Un llibre obert ple de punts de llibre",
    "about.3.alt": "Els meus gats Batman i Robbin dormint arrupits",
    "about.4.alt": "Els meus patins de patinatge artístic",
    "about.2.nota": "Llegeixo molt i publico ressenyes a @natbookish ↗",
    "about.3.nota": "Els meus fills gatuns.",
    "about.4": "Patinatge artístic",
    "about.4.nota": "El 2025 vaig penjar els patins, però el meu hobby era el patinatge artístic.",
    "about.5": "Mentories a Nuclio",
    "about.5.nota": "Acompanyant els meus alumnes en la presentació dels seus projectes.",

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
    "caso.volver": "← Tornar a Casos d'ús",

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
    "nav.about": "About me",
    "nav.contacto": "Contact",

    "hero.ahora.label": "Currently",
    "hero.ahora": "Designing <a class=\"inline-link\" href=\"https://www.piperai.com/\" target=\"_blank\" rel=\"noopener\">Piper AI</a> <br>at <a class=\"inline-link\" href=\"https://aircall.io/\" target=\"_blank\" rel=\"noopener\">Aircall</a>",
    "hero.antes.label": "Previously",
    "hero.antes": "Designing new startups at <a class=\"inline-link\" href=\"https://antaiventures.com/\" target=\"_blank\" rel=\"noopener\">Antai Ventures</a>, <br>creating packaging at <a class=\"inline-link\" href=\"https://jardinynatura.com/\" target=\"_blank\" rel=\"noopener\">Jardín y Natura</a> <br>and mentoring at <a class=\"inline-link\" href=\"https://nuclio.school/\" target=\"_blank\" rel=\"noopener\">Nuclio</a>.",

    "card.ver": "View case study",
    "card.pronto": "Coming soon",
    "p1.tipo": "Under construction",
    "p2.tipo": "Product design",
    "p3.tipo": "Research, design, A/B testing and user acquisition testing",
    "p4.titulo": "The Garden People & Kerama",
    "p4.tipo": "User experience and website redesign",
    "p5.titulo": "Packaging & Illustration",
    "p5.tipo": "Graphic design & illustration",

    "bio.1": "We've all been frustrated by a button that doesn't work, or given up on an app because we couldn't figure out how to use it. That's why I moved from graphic design to product design: pretty design gets attention, but well-grounded design is what makes things work.",
    "bio.2": "Today I use AI to speed up the process end to end, from research and definition to prototyping and validating every part of the product.",
    "caso1.nombre": "Project 1",

    "exp.label": "Experience",

    "exp.1.fecha": "Jan 2024 — Now",

    "exp.2.fecha": "Jan 2023 — Jan 2024",

    "exp.3.fecha": "Feb 2023 — Mar 2024",
    "exp.3.rol": "UX/UI Mentor",

    "exp.4.fecha": "Mar 2020 — Dec 2022",
    "exp.4.rol": "Graphic Designer & Illustrator",

    "edu.label": "Education",
    "edu.1.titulo": "Master's in UX/UI Design",
    "edu.2.titulo": "Postgraduate Degree in Graphic Design & Packaging",
    "edu.3.titulo": "Higher National Diploma in Design & Advertising Graphics",

    "extra.herramientas": "Tools",
    "extra.idiomas": "Languages",
    "extra.idiomas.valor": "Catalan & Spanish (native)<br>English (B2)",

    "about.titulo": "When I'm not designing…",
    "about.foto": "Photo",
    "about.1.alt": "Photo of Natalia",
    "about.1.nota": "Nice to meet you, I'm Nat :)",
    "about.2.alt": "An open book full of page markers",
    "about.3.alt": "My cats Batman and Robbin sleeping curled up together",
    "about.4.alt": "My figure skates",
    "about.2.nota": "I read a lot and post reviews on @natbookish ↗",
    "about.3.nota": "My cat kids.",
    "about.4": "Figure skating",
    "about.4.nota": "I hung up my skates in 2025, but figure skating was my hobby.",
    "about.5": "Mentoring at Nuclio",
    "about.5.nota": "Supporting my students as they present their projects.",

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
