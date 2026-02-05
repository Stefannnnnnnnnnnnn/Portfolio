# 🚀 Portfolio Website

> A modern, responsive portfolio built with **React** + **JavaScript** + **CSS**

---

## 📦 Quick Start

```bash
npm install
npm start
```

---

## 🏗️ Components

| Component | Description |
|-----------|-------------|
| 🎯 **Hero** | Landing section with animated CTA button |
| 👤 **About** | Bio + skills grid (9 skills) + interests (8 tags) |
| 💼 **Projects** | Project cards with tech tags & links |
| 📧 **Contact** | Form + social links + Formspree backend |
| 🧭 **Navbar** | Fixed nav with smooth scroll & mobile menu |

---

## 🎨 Tech Stack

```
⚛️  React 18
🟨 JavaScript ES6+
🎨 CSS3 (Flexbox + Grid)
🔤 Font Awesome 6
```

---

## 📁 Project Structure

```
portfolio/
├── public/
│   └── index.html              # HTML template
├── src/
│   ├── components/             # React components
│   │   ├── Hero/
│   │   │   ├── Hero.js         # Hero section component
│   │   │   └── Hero.css        # Hero specific styles
│   │   ├── About/
│   │   │   ├── About.js        # About section
│   │   │   └── About.css       # About specific styles
│   │   ├── Projects/
│   │   │   ├── Projects.js     # Projects section
│   │   │   └── Projects.css    # Projects specific styles
│   │   ├── Contact/
│   │   │   ├── Contact.js      # Contact section
│   │   │   └── Contact.css     # Contact specific styles
│   │   └── Navbar/
│   │       ├── Navbar.js       # Navigation component
│   │       └── Navbar.css      # Navbar specific styles
│   │
│   ├── styles/                 # Shared styles
│   │   ├── variables.css       # CSS variables (colors, fonts)
│   │   ├── animations.css      # Shared keyframe animations
│   │   └── global.css          # Global reset & base styles
│   │
│   ├── App.js                  # Main app component
│   ├── App.css                 # App-specific styles
│   └── index.js                # React entry point
│
├── package.json                # Dependencies
└── README.md                   # This file
```

**CSS Architecture:**
- `styles/` → Shared variables, animations, global reset
- `components/Component/Component.css` → Component-specific styles
- Each CSS file imports from `styles/` as needed

---

## ✏️ Customize

| File | Edit This |
|------|-----------|
| `Hero.js` | `YOUR_NAME`, `YOUR_TITLE`, `SHORT_INTRO` |
| `About.js` | `BACKGROUND_TEXT`, `SKILLS`, `INTERESTS` |
| `Projects.js` | `PROJECTS` array (add your work) |
| `Contact.js` | `YOUR_EMAIL`, `SOCIAL_LINKS` |
| `styles/variables.css` | Change colors globally |

---

## 🔧 Formspree Setup (Optional)

1. Go to [formspree.io](https://formspree.io/) → Create account
2. Copy your endpoint: `https://formspree.io/f/YOUR_ID`
3. Paste in `Contact.js`:
```javascript
const FORMSPREE_ENDPOINT = "https://formspree.io/f/YOUR_ID";
```

---

## 🌈 Colors Used

| Purpose | Color |
|---------|-------|
| Primary | `#667eea` |
| Secondary | `#764ba2` |
| Dark Text | `#2d3748` |
| Light Text | `#718096` |
| Backgrounds | `#ffffff` `#f7fafc` `#1a202c` |

**To change colors:** Edit `src/styles/variables.css`

---

## 📱 Responsive

```
Desktop: 1200px+  → Full layout
Tablet:  768px    → Adjusted grids
Mobile:  <768px   → Single column + hamburger menu
```

---