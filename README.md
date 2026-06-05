<div align="center">

<img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" />
<img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" />
<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" />

# 🧮 Calculator

**A sleek, minimal calculator built with pure HTML, CSS, and JavaScript.**  
No frameworks, no installs — just open and start calculating.

[Features](#-features) · [Getting Started](#-getting-started) · [File Structure](#-file-structure) · [Customization](#-customization)

</div>

---

## ✨ Features

- 🔢 **Basic Operations** — Addition, subtraction, multiplication, and division
- 🧮 **Parentheses Support** — Group expressions with `(` and `)` for complex calculations
- 📜 **History Display** — Shows the previous expression above the current result
- ⌨️ **Keyboard Support** — Press `Enter` to evaluate without touching the mouse
- 🔍 **Input Filtering** — Only valid characters are accepted, invalid input is stripped automatically
- ♾️ **Edge Case Handling** — Displays `∞` for division by zero and `Error` for invalid expressions
- 🎯 **Decimal Precision** — Results are rounded to 5 decimal places to avoid floating point noise
- 📱 **Responsive** — Adapts cleanly to mobile and small screens

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/Zeddy-Forreal/calculator.git
cd calculator
```

### 2. Open in browser

No build step, no installs. Just open `index.html` directly:

```bash
# macOS
open index.html

# Windows
start index.html

# Linux
xdg-open index.html
```

### 3. Start calculating

Click the buttons or type directly — only valid characters are accepted. Hit `=` or press **Enter** to evaluate.

---

## 📁 File Structure

```
calculator/
├── index.html          App markup and structure
├── style/
│   └── main.css        All styles — layout, colors, responsive
└── script/
    └── main.js         All logic — input handling, evaluation, keyboard support
```

---

## 🎨 Customization

All colors are CSS custom properties at the top of `main.css`. Switch up the whole look by editing just these:

```css
:root {
  --bg:          #0c0d11;   /* Page background              */
  --bg2:         #13151c;   /* Calculator body background   */
  --bg3:         #1e2130;   /* Button background            */
  --bg4:         #2a2e45;   /* Button hover / borders       */
  --main_color:  #6366f1;   /* Primary accent (indigo)      */
  --sec:         #818cf8;   /* Secondary accent             */
  --red:         #f87171;   /* Clear button color           */
}
```

---

<div align="center">

Made with 🖤 by [Zeddy-Forreal](https://github.com/Zeddy-Forreal)

</div>
