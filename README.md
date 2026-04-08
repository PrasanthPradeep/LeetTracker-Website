<div align="center">

# 🌐 LeetTRACKER: WEBSITE

**// IDENTITY: OPEN SOURCE EXTENSION LANDING PAGE**<br>
**A brutally simple, high-contrast promotional website for the LC Tracker Browser Extension.**

<br>

![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)

</div>

<br>

<h2 align="center">HARD EDGES. RAW AESTHETICS.</h2>

This is the landing page repository for the LC Tracker extension. The website was designed with a **Neo-Brutalist** (Hard Pop) aesthetic—featuring thick black borders, stark contrast, vibrant accent colors, and a dot-grid background. 

It rejects standard corporate gradients in favor of an aggressively bold, student-developer-focused UI (heavily inspired by klaz.app).

---

## ⚡ TECH STACK
We embrace zero-build-step simplicity here:
*   **HTML5:** Semantic, raw structure.
*   **Vanilla CSS3:** Heavy usage of custom properties (CSS variables), `flex`, `grid`, and CSS animations (`@keyframes`). No Tailwind or pre-processors required.
*   **Vanilla JS:** Handles intersection observers for scroll animations, and modal state toggling. No frameworks.

## 🎯 DESIGN SYSTEM (NEO-BRUTALISM)
*   **Typography:** `Archivo Black` (Heavy/Caps) for headers, `Space Mono` for technical readouts, `Inter` for body copy.
*   **Shadows:** Zero-blur, hard offset shadows (`6px 6px 0px 0px var(--black)`).
*   **Borders:** Unapologetically thick (`4px solid black`).
*   **Background:** Off-white container over an infinite CSS-generated `radial-gradient` dot grid.

---

## 💻 RUNNING LOCALLY

Because there holds no build step, starting the website locally takes single-digit seconds:

1. **Clone or Download** this directory.
2. **Start a local development server** within the `/website` directory.
   
Using Python:
```bash
python -m http.server 8000
```

Using Node (http-server):
```bash
npx http-server .
```
3. **Open** `http://localhost:8000` (or your respective port) in your browser.

---

## 📁 DIRECTORY STRUCTURE

```text
website/
├── assets/                # Screenshots, QR Codes, and SVGs
├── index.html             # Main markup and content
├── style.css              # Neo-Brutalist design tokens and layout
└── script.js              # Intersection observer & Modal logic
```

---

<div align="center">

**[ 🧑‍💻 DEVELOPER GITHUB ](https://github.com/PrasanthPradeep)** | **© 2026 LC TRACKER OPEN SOURCE**

</div>
