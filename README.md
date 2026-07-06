<div align="center">
  <br/>
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5"/>
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3"/>
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript"/>
  <img src="https://img.shields.io/badge/Status-Complete-success?style=for-the-badge" alt="Status"/>
  <br/>
  <br/>
  <h1>🧠 BrainBlitz</h1>
  <h3>Timed Quiz Challenge App</h3>
  <p>An interactive quiz application with 6 categories, 3 difficulty levels, a circular countdown timer, animated feedback, scoring system with time bonuses, and a persistent leaderboard — all in vanilla HTML, CSS & JavaScript.</p>
  <br/>
  <a href="#features">Features</a> •
  <a href="#tech-stack">Tech Stack</a> •
  <a href="#getting-started">Getting Started</a> •
  <a href="#question-bank">Question Bank</a> •
  <a href="#scoring">Scoring</a> •
  <a href="#deployment">Deployment</a>
  <br/>
  <br/>
</div>

---

## ✨ Features

### 🏠 Home Page
- Animated hero section with pulsing brain icon (glow animation)
- Feature cards highlighting key capabilities
- Category preview grid with question counts per category
- Quick-start "Begin Quiz" button

### ⚙️ Quiz Setup
- **6 categories:** Science, History, Geography, Technology, Sports, Entertainment
- **3 difficulty levels:** Easy, Medium, Hard
- **Flexible question count:** 5, 10, 15, or 20 questions
- Player name input with `localStorage` persistence

### ❓ Quiz Engine
- Timed questions with **circular SVG countdown timer** (15 seconds)
- Timer color transitions: green → amber → red with pulse animation
- Animated correct (pop) and incorrect (shake) feedback
- Letter-labeled answer buttons (A, B, C, D)
- Disabled state prevents double-answering
- Progress bar with question counter
- Live score display (correct, incorrect, current score)

### 📊 Results Page
- Animated score display with gradient text
- Performance stats: correct, incorrect, accuracy %, average time
- Categorized feedback (perfect, great, good, keep practicing)
- Full question-by-question breakdown
- Auto-saves score to leaderboard

### 🏆 Leaderboard
- Top 20 scores ranked
- Medal icons for top 3 (🥇🥈🥉)
- Displays player name, score, accuracy, category, difficulty
- Clear all scores option (with confirmation modal)
- Persistent via `localStorage`

### 🎯 Scoring System
| Component | Value |
|-----------|-------|
| Base points per correct answer | 10 |
| Time bonus (max) | 15 (faster = more) |
| Max points per question | 25 |
| Timeout penalty | None (0 points) |
| Incorrect penalty | None (0 points) |

### ♿ Accessibility
- Skip-to-content navigation
- `aria-current` on active nav links
- `:focus-visible` keyboard focus indicators
- `prefers-reduced-motion` disables all animations
- `aria-live` toast announcements

---

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| **HTML5** | Semantic structure with SPA pages |
| **CSS3** | Custom properties, SVG timer, keyframe animations |
| **JavaScript (Vanilla ES6)** | Quiz engine, timer, scoring, localStorage |
| **Google Fonts** | Fredoka (headings) + Inter (body) |
| **Font Awesome 6** | Icons |

### Design System
- **Colors:** Purple (#5B2D8E), Blue (#2D7DD2), Teal (#00C9A7), Light Purple (#F5F0FF)
- **Animations:** Pop (correct), shake (incorrect), pulse (timer danger), page transitions
- **Layout:** Centered card layout, responsive grids

---

## 📁 Project Structure

```
brainblitz/
├── README.md           # You are here
├── index.html          # 6 SPA pages
├── style.css           # Full design system
└── app.js              # Quiz engine, timer, leaderboard
```

---

## 🚀 Getting Started

```bash
git clone https://github.com/phyoheinkyaw/brainblitz.git
cd brainblitz

# Open in browser or use server:
python -m http.server 8000
```

### Deploy to GitHub Pages
```bash
cd brainblitz
git init && git add . && git commit -m "Initial commit: BrainBlitz"
git branch -M main
git remote add origin https://github.com/your-username/brainblitz.git
git push -u origin main
```

---

## 📊 Question Bank

| Category | Easy | Medium | Hard | Total |
|----------|------|--------|------|-------|
| 🔬 Science | 25 | 20 | 15 | **60** |
| 📜 History | 15 | 15 | 5 | **35** |
| 🌍 Geography | 15 | 15 | 5 | **35** |
| 💻 Technology | 15 | 15 | 5 | **35** |
| ⚽ Sports | 15 | 15 | 5 | **35** |
| 🎬 Entertainment | 15 | 15 | 5 | **35** |
| **Total** | **100** | **95** | **40** | **235** |

---

## ⌨️ Keyboard Shortcuts

| Key | Action |
|-----|--------|
| 1, 2, 3, 4 | Select answer A, B, C, D |
| Enter | Submit / Continue |
| Escape | Close modals |

---

<div align="center">
  <br/>
  <p>Built with ❤️ using pure HTML, CSS & JavaScript</p>
  <p>
    <small>
      <a href="https://github.com/phyoheinkyaw">GitHub</a> •
      <a href="https://phyoheinkyaw.github.io/brainblitz/">Live Demo</a>
    </small>
  </p>
  <br/>
</div>
