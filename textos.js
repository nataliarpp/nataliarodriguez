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
    "exp.titulo": "Dissenyo producte de principi a fi, des de la recerca fins a la implementació.",
    "exp.intro": "Treballo de prop amb clients, fundadors, customer success i equips de desenvolupament per transformar necessitats reals en experiències digitals clares i útils.",

    "exp.1.fecha": "Gen. 2024 — Avui",
    "exp.1.desc": "Primera i única Product Designer de l'equip: disseny de producte de principi a fi, amb la recerca com a base de cada decisió. Research de mercat i competència, validació amb clients i usuaris, i col·laboració diària amb frontend i backend.",
    "exp.1.logro1": "Piper AI (Autopilot Tech) és adquirida per <strong>Aircall</strong> el març de 2026.",
    "exp.1.logro2": "<strong>+3M€</strong> en la primera ronda d'inversió com a startup.",

    "exp.2.fecha": "Gen. 2023 — Gen. 2024",
    "exp.2.desc": "Disseny de nous negocis des de zero: research de models de negoci i competència, definició d'hipòtesis, arquitectura d'informació, fluxos i prototips validats amb user tests, al costat de fundadors i desenvolupament.",
    "exp.2.logro1": "Responsable del disseny en <strong>més de 15 projectes</strong> del venture studio.",
    "exp.2.logro2": "Llançament de <strong>2 companyies noves</strong> el 2023.",

    "exp.3.fecha": "Febr. 2023 — Març 2024",
    "exp.3.rol": "Mentora UX/UI",
    "exp.3.desc": "Acompanyament a estudiants en el research, el plantejament d'hipòtesis i la seva traducció a interfícies i prototips, amb revisions i feedback per preparar-los per a l'entorn professional.",

    "exp.4.fecha": "Març 2020 — Des. 2022",
    "exp.4.rol": "Dissenyadora gràfica i il·lustradora",
    "exp.4.desc": "Identitat visual, packaging, il·lustracions i materials gràfics per a diferents marques, i disseny de webs i sistemes visuals amb focus en la coherència de marca i l'experiència d'usuari.",
    "exp.4.logro1": "El redisseny web va contribuir a augmentar el trànsit un <strong>40%</strong>, les pàgines vistes un <strong>60%</strong> i la durada mitjana de sessió un <strong>70%</strong>.",

    "edu.label": "Formació",
    "edu.1.titulo": "Màster en UX/UI Design",
    "edu.1.extra": "Amb minor en Full Stack for no-coders",
    "edu.2.titulo": "Postgrau en Disseny Gràfic i Packaging",
    "edu.3.titulo": "Grau Superior en Disseny i Gràfica Publicitària",

    "extra.herramientas": "Eines",
    "extra.idiomas": "Idiomes",
    "extra.idiomas.valor": "Català i castellà (nadius)<br>Anglès (B2)",
    "extra.intereses": "Interessos",
    "extra.intereses.valor": "Llegeixo uns 50 llibres l'any, gaudeixo d'una bona copa de vi i soc molt familiar.",

    "about.titulo": "Quan no estic dissenyant…",
    "about.foto": "Foto",
    "about.1": "Jo",
    "about.1.tip": "Aquesta soc jo! :)",
    "about.2.tip": "Veure les meves ressenyes ↗",
    "about.2.nota": "Llegeixo uns 50 llibres l'any i publico ressenyes de les meves lectures.",
    "about.3.tip": "Els meus fills gatuns",
    "about.3.nota": "Els meus fills gatuns.",
    "about.4": "Patinatge artístic",
    "about.4.tip": "Els meus patins",
    "about.4.nota": "Abans de dissenyar, vaig ser patinadora de patinatge artístic.",
    "about.5": "Mentories a Nuclio",
    "about.5.tip": "Els meus alumnes presentant",
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
    "exp.titulo": "I design products end to end, from research to implementation.",
    "exp.intro": "I work closely with clients, founders, customer success and development teams to turn real needs into clear, useful digital experiences.",

    "exp.1.fecha": "Jan 2024 — Now",
    "exp.1.desc": "First and only Product Designer on the team: end-to-end product design, with research as the foundation for every decision. Market and competitor research, validation with customers and users, and daily collaboration with frontend and backend.",
    "exp.1.logro1": "Piper AI (Autopilot Tech) was acquired by <strong>Aircall</strong> in March 2026.",
    "exp.1.logro2": "<strong>€3M+</strong> raised in its first funding round as a startup.",

    "exp.2.fecha": "Jan 2023 — Jan 2024",
    "exp.2.desc": "Designing new businesses from scratch: business model and competitor research, hypothesis definition, information architecture, flows and prototypes validated through user tests, alongside founders and developers.",
    "exp.2.logro1": "Led design on <strong>15+ projects</strong> at the venture studio.",
    "exp.2.logro2": "Launched <strong>2 new companies</strong> in 2023.",

    "exp.3.fecha": "Feb 2023 — Mar 2024",
    "exp.3.rol": "UX/UI Mentor",
    "exp.3.desc": "Guided students through research, hypothesis framing and turning them into interfaces and prototypes, with project reviews and feedback to prepare them for professional work.",

    "exp.4.fecha": "Mar 2020 — Dec 2022",
    "exp.4.rol": "Graphic Designer & Illustrator",
    "exp.4.desc": "Visual identity, packaging, illustration and graphic materials for different brands, plus websites and visual systems focused on brand consistency and user experience.",
    "exp.4.logro1": "The website redesign helped increase traffic by <strong>40%</strong>, page views by <strong>60%</strong> and average session duration by <strong>70%</strong>.",

    "edu.label": "Education",
    "edu.1.titulo": "Master's in UX/UI Design",
    "edu.1.extra": "With a minor in Full Stack for no-coders",
    "edu.2.titulo": "Postgraduate Degree in Graphic Design & Packaging",
    "edu.3.titulo": "Higher National Diploma in Design & Advertising Graphics",

    "extra.herramientas": "Tools",
    "extra.idiomas": "Languages",
    "extra.idiomas.valor": "Catalan & Spanish (native)<br>English (B2)",
    "extra.intereses": "Interests",
    "extra.intereses.valor": "I read around 50 books a year, enjoy a good glass of wine and I'm very family-oriented.",

    "about.titulo": "When I'm not designing…",
    "about.foto": "Photo",
    "about.1": "Me",
    "about.1.tip": "That's me :)",
    "about.2.tip": "See my reviews ↗",
    "about.2.nota": "I read around 50 books a year and post reviews of what I read.",
    "about.3.tip": "My cat kids",
    "about.3.nota": "My cat kids.",
    "about.4": "Figure skating",
    "about.4.tip": "My skates",
    "about.4.nota": "Before design, I was a figure skater.",
    "about.5": "Mentoring at Nuclio",
    "about.5.tip": "My students presenting",
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
