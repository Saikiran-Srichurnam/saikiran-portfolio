# 🚀 Saikiran Srichurnam — Portfolio

A premium, fully responsive personal portfolio built with **React + Vite + Tailwind CSS + Lucide React**.

> 🔗 Built for: **Saikiran Srichurnam** | Full Stack Developer | Hyderabad, India

---

## ✨ Features

- ⚡ Typing effect in hero cycling through roles
- 🎯 Scroll-triggered fade animations (up, left, right)
- 📊 Animated skill progress bars on scroll
- 🌀 Floating avatar with rotating rings
- 🧭 Fixed navbar with active section highlight + mobile hamburger
- 💼 3 project cards with live demo + GitHub links
- 🗓️ Timeline-based experience & education section
- 🌙 Dark contact section with working form
- 📱 Fully responsive — mobile, tablet, desktop
- 🎨 Lucide React icons throughout

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| React 18 | UI framework |
| Vite 5 | Build tool & dev server |
| Tailwind CSS 3 | Styling |
| Lucide React | Icons |
| Plus Jakarta Sans | Display font |
| JetBrains Mono | Monospace / typed text |

---

## 📁 Project Structure

```
saikiran-portfolio/
├── index.html                  ← Entry HTML + SEO meta tags
├── vite.config.js              ← Vite configuration
├── tailwind.config.js          ← Tailwind + custom animations
├── postcss.config.js
├── package.json                ← Dependencies (includes lucide-react)
├── .gitignore
├── README.md
└── src/
    ├── main.jsx                ← React DOM entry point
    ├── App.jsx                 ← Root component + scroll observer
    ├── index.css               ← Tailwind directives + keyframes
    ├── data.js                 ⭐ ALL your content lives here
    └── components/
        ├── Navbar.jsx          ← Fixed top nav + mobile hamburger
        ├── Hero.jsx            ← Typing effect + floating tags + stats
        ├── About.jsx           ← Bio + 4 info cards + certifications
        ├── Skills.jsx          ← Animated progress bars + tag pills
        ├── Projects.jsx        ← 3 project cards with live links
        ├── Experience.jsx      ← Timeline (internships + education)
        ├── Contact.jsx         ← Dark section + social links + form
        └── Footer.jsx
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js v18+** → Download from [nodejs.org](https://nodejs.org) (LTS version)
- **npm v9+** → Comes bundled with Node.js

Verify your installation:
```bash
node -v    # v18.x.x or higher
npm -v     # 9.x.x or higher
```

---

### Installation & Run

```bash
# 1. Unzip the project
unzip saikiran-portfolio.zip

# 2. Navigate into the folder
cd saikiran-portfolio

# 3. Install all dependencies (only needed once)
npm install

# 4. Start the development server
npm run dev
```

Open your browser at **http://localhost:5173** 🎉

---

### Build for Production

```bash
npm run build
```

This creates an optimised `dist/` folder ready to deploy.

To preview the production build locally:
```bash
npm run preview
```

---

## 🌐 Deployment

### ▲ Vercel (Recommended — Free)

**Option A: Via CLI**
```bash
npm install -g vercel
vercel
```

**Option B: Via Dashboard (easiest)**
1. Push this project to a GitHub repo
2. Go to [vercel.com](https://vercel.com) → **New Project**
3. Import your GitHub repo
4. Framework will be auto-detected as **Vite**
5. Click **Deploy** — live in ~60 seconds!

Your URL will look like: `saikiran-portfolio.vercel.app`

---

### 🟢 Netlify (Alternative — Free)

```bash
npm run build
```

Then drag and drop the `dist/` folder at [app.netlify.com/drop](https://app.netlify.com/drop).

---

## ✏️ How to Customise

All personal content is in **one file**: `src/data.js`

### Update your info
```js
export const personal = {
  name:     'Saikiran Srichurnam',
  email:    'saikiransrichurnam628@gmail.com',
  github:   'https://github.com/Saikiran-Srichurnam',
  linkedin: 'https://www.linkedin.com/in/saikiran-srichurnam/',
  resume:   'https://drive.google.com/uc?export=download&id=YOUR_FILE_ID',
  // ...
}
```

### Add a new project
```js
export const projects = [
  // Add your new project object here:
  {
    emoji:    '🛒',
    title:    'My New Project',
    type:     'Full Stack Application',
    typeCls:  'bg-blue-100 text-blue-800',
    headCls:  'from-blue-50 to-blue-100',
    desc:     'Project description here.',
    features: ['Feature 1', 'Feature 2'],
    stack:    ['React', 'Node.js'],
    github:   'https://github.com/your-repo',
    live:     'https://your-live-url.vercel.app',
  },
]
```

### Update skill percentages
```js
export const skills = [
  { name: 'JavaScript', pct: 88 },  // change pct value
  { name: 'React.js',   pct: 85 },
  // ...
]
```

### Add a new timeline entry
```js
export const timeline = [
  {
    role:   'Junior Developer',
    date:   '02/2026 – Present',
    org:    '🏢 Company Name · City',
    filled: true,
    points: ['Achievement 1', 'Achievement 2'],
  },
  // ...existing entries
]
```

---

## 🔗 Resume Download Fix

In `src/data.js`, make sure your Google Drive file is set to **"Anyone with the link can view"**, then use this format:

```
https://drive.google.com/uc?export=download&id=YOUR_FILE_ID
```

To get your File ID, copy the share link:
```
https://drive.google.com/file/d/1VlYXPpT6ygivnWc27iUAtD1zToZvOphY/view
                                  ↑ this part is your FILE_ID
```

---

## 🐛 Troubleshooting

| Problem | Solution |
|---|---|
| `npm` not found | Install Node.js from nodejs.org |
| Port 5173 in use | Vite auto-switches to 5174 — check terminal |
| Blank screen | Hard refresh: `Ctrl + Shift + R` |
| Icons not showing | Run `npm install` again to ensure lucide-react is installed |
| Build fails | Delete `node_modules/` and run `npm install` again |

---

## 📦 Dependencies

```json
{
  "dependencies": {
    "lucide-react": "^0.383.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  },
  "devDependencies": {
    "@vitejs/plugin-react": "^4.2.1",
    "autoprefixer": "^10.4.17",
    "postcss": "^8.4.35",
    "tailwindcss": "^3.4.1",
    "vite": "^5.1.0"
  }
}
```

---

## 📄 License

This project is personal and not licensed for redistribution.  
Built exclusively for **Saikiran Srichurnam**.

---

<p align="center">
  Made with ❤️ by <strong>Saikiran Srichurnam</strong> · Full Stack Developer · Hyderabad, India
</p>
#