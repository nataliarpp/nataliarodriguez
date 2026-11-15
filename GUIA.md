# Guía: de cero a tu portfolio publicado en internet

Antes de empezar, tres palabras que vas a ver mucho:

| Palabra | Qué es, en cristiano |
|---|---|
| **Código / archivos** | Tu web son 3 archivos de texto: `index.html` (el contenido), `styles.css` (el diseño: colores, tamaños) y `script.js` (las animaciones). |
| **GitHub** | Un "Google Drive para código". Guarda tus archivos y cada versión que hagas. |
| **Repositorio (repo)** | Una "carpeta" de GitHub donde vive un proyecto. Tu portfolio tendrá su propio repo. |
| **Vercel** | Un servicio gratuito que coge los archivos de tu repo de GitHub y los convierte en una web pública con un enlace (`tunombre.vercel.app`). |

El recorrido es: **archivos → GitHub → Vercel → enlace para compartir.**
Y lo mejor: cada vez que cambies algo en GitHub, Vercel actualiza la web solo, en un minuto.

---

## Paso 1 · Crear tu cuenta de GitHub (si no la tienes)

1. Entra en <https://github.com/signup>.
2. Pon tu email, una contraseña y un nombre de usuario.
   El usuario sale en tus enlaces, así que elige algo profesional (por ejemplo `nataliarodriguez`).
3. Confirma el email que te envían.

## Paso 2 · Crear el repositorio vacío

1. Con la sesión iniciada en GitHub, arriba a la derecha pulsa el **+** → **New repository**.
2. **Repository name**: `portfolio`.
3. Déjalo en **Public**.
4. **No marques** "Add a README", ni .gitignore, ni license. Tiene que estar **vacío**.
5. Pulsa **Create repository**.
6. Copia la dirección de la página (algo como `https://github.com/TU-USUARIO/portfolio`).

## Paso 3 · Subir los archivos

**Opción A (la más fácil):** pásame el enlace del paso 2 y yo subo los archivos por ti.

**Opción B (a mano, sin programas):**
1. Descarga los archivos `index.html`, `styles.css`, `script.js` y la carpeta `images`.
2. En la página de tu repo vacío, pulsa el enlace **uploading an existing file**.
3. Arrastra los archivos a la ventana.
4. Abajo, pulsa **Commit changes** (en GitHub, "commit" significa "guardar una versión").

## Paso 4 · Publicar con Vercel

1. Entra en <https://vercel.com/signup>.
2. Elige **Hobby** (es gratis) y pulsa **Continue with GitHub**. Así Vercel puede ver tus repos.
3. Cuando te pregunte, dale permiso para acceder a tu repo `portfolio`.
4. En el panel de Vercel: **Add New… → Project**.
5. Busca `portfolio` en la lista y pulsa **Import**.
6. No cambies nada de la configuración (es una web sencilla y Vercel la entiende sola).
   Pulsa **Deploy**.
7. En unos segundos verás confeti y tu enlace: `portfolio-xxxx.vercel.app`. ¡Ya está en internet!

### Cambiar el nombre del enlace
En Vercel: tu proyecto → **Settings → Domains**. Ahí puedes cambiarlo por algo como
`nataliarodriguez.vercel.app` (si está libre), o conectar un dominio propio
(`nataliarodriguez.com`) si lo compras.

---

## Cómo editar tu web después

Desde la propia web de GitHub, sin instalar nada:

1. Entra en tu repo y haz clic en el archivo (por ejemplo `index.html`).
2. Pulsa el **lápiz** ✏️ (arriba a la derecha del archivo).
3. Cambia el texto. Busca los comentarios `CAMBIA ESTO` (las líneas entre `<!--` y `-->`
   son notas para ti y no se ven en la web).
4. Pulsa **Commit changes**.
5. Espera un minuto y recarga tu web en Vercel: ya sale el cambio.

### Añadir imágenes
1. En tu repo, entra en la carpeta `images` → **Add file → Upload files** → arrastra tus fotos.
   Usa nombres sin espacios ni tildes: `proyecto-1.jpg`, `foto.jpg`.
2. En `index.html`, sigue las instrucciones de los comentarios para que salga la imagen.
3. Consejo: comprime las imágenes antes de subirlas (por ejemplo con <https://squoosh.app>)
   para que la web cargue rápido. Intenta que cada una pese menos de 500 KB.

### Cambiar colores o tipografías
En `styles.css`, arriba del todo, hay un bloque `:root` con los colores. Cambia el código
del color (por ejemplo `#F7F5F1`) y se actualiza toda la web.

---

## Cómo está organizada tu web

| Archivo | Qué contiene |
|---|---|
| `index.html` | La página principal: **Casos de uso**, **Sobre mí** (descripción, experiencia y fotos) y **Contacto**. |
| `proyecto-1.html` | La plantilla de un caso de estudio. Para otro proyecto, duplícala (`proyecto-2.html`) y enlázala desde la tarjeta en `index.html`. |
| `styles.css` | El diseño. Arriba del todo están **tus colores** (Neutral, Earth, Caramel, Olive, Mint, Sky, Ocean y Blueberry). |
| `textos.js` | Las **traducciones** al catalán y al inglés. |
| `script.js` | El cursor, el menú que se ilumina, la barra de abajo (modo oscuro e idioma) y las animaciones. No hace falta tocarlo. |

### Trucos rápidos
- **Color del cursor:** en `styles.css` cambia `--cursor: #8C9B6E;` (Olive) por otro color, por ejemplo `#556D96` (Blueberry).
- **Color del menú activo:** en `styles.css`, cambia `--acento`.
- **Etiqueta que sale al pasar el ratón:** en `index.html`, cambia el texto de `data-tooltip="..."`.
- **Poner una imagen en una tarjeta:** súbela a la carpeta `images` y pon `<img src="images/nombre.jpg" alt="Descripción">` dentro del `<div class="cover ...">`.

### Idiomas (español, catalán e inglés)
- Los textos en **español** se escriben directamente en los archivos `.html`.
- Las traducciones al **catalán** y al **inglés** están en `textos.js`.
- Cada texto traducible lleva una etiqueta, por ejemplo `data-i18n="hero.titulo"`.
  En `textos.js` busca esa misma etiqueta (`"hero.titulo": "..."`) para cambiar su traducción.
- Si cambias un texto en español, **acuérdate de cambiar también sus traducciones**.
  Si se te olvida alguna, en ese idioma se verá el texto en español.
- La primera vez que alguien entra, la web se muestra en el idioma de su navegador
  (y en inglés si su navegador está en otro idioma). Si elige otro idioma, se recuerda.
