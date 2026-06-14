# Portfolio

Personal academic portfolio, deployed via GitHub Pages.

## Structure
- `index.html` — page content and section structure
- `styles.css` — all styling (palette + type defined in `:root`)
- `main.js` — project filtering, footer year
- `assets/img/` — project thumbnails, logos
- `assets/docs/` — CV.pdf
- `assets/video/` — optional hero background video

## Editing
Search the HTML for `PLACEHOLDER` and replace each with real content.
Add projects by duplicating a `<article class="card">` block; set `data-cat`
to match a filter button (`computational`, `web`, `other`).

## Local preview
Open `index.html` directly, or run a local server:
```
python3 -m http.server 8000
```
then visit http://localhost:8000
