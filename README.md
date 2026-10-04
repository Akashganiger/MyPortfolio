# 🚀 Akash Basavaraj Ganiger — Developer Portfolio

[![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-6.0-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev/)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=flat-square&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![CSS3](https://img.shields.io/badge/CSS3-Modern%20Design-1572B6?style=flat-square&logo=css3&logoColor=white)](https://www.w3.org/Style/CSS/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](https://opensource.org/licenses/MIT)

> A modern, responsive, and performance-optimized personal portfolio showcasing full-stack engineering expertise, Java & Spring Boot backend projects, Applied AI/ML workflows, LeetCode problem-solving, and verified credentials.

---

## 🌟 Key Features

* 🌓 **Dark & Light Mode Support**: Seamless theme switching with automatic system preference detection (`prefers-color-scheme`) and `localStorage` persistence.
* 📬 **Integrated Email & Messaging**:
  * Direct form submissions delivered instantly to inbox via **FormSubmit**.
  * 1-Click **Gmail Web Compose** & **Default Mail App** integrations with pre-populated recruiter inquiry templates.
* 📜 **Verified Certificate Lightbox**: Interactive modal viewer and official credential verification links for Coursera, Google, and University specializations.
* 📄 **Dual Resume Access**: Instant in-browser PDF preview and direct download capabilities.
* 📱 **Fully Responsive UI**: Mobile-first glassmorphism design with fluid navigation and micro-animations.
* ⚡ **Ultra-Fast Performance**: Built on Vite with sub-second reload times and zero layout shifts.

---

## 🛠️ Tech Stack

| Domain | Technologies |
| :--- | :--- |
| **Frontend Framework** | React.js (v19), Vite |
| **Styling & Design System** | Vanilla CSS (CSS Variables, Flexbox, CSS Grid, Glassmorphism) |
| **Icons & Visuals** | Lucide React, Custom SVG Icons |
| **Forms & Communication** | FormSubmit REST API, Google Mail Compose Integration |
| **Fonts** | Inter, Plus Jakarta Sans |

---

## 📂 Project Structure


AbPortfolio/
├── public/
│   ├── favicon.svg
│   └── resume.pdf
├── src/
│   ├── assets/
│   │   ├── akash_portrait.jpg
│   │   ├── AI_Fundamentals.png
│   │   ├── java_full_stack.png
│   │   ├── ML.png
│   │   └── resume.pdf
│   ├── components/
│   │   ├── Navbar.jsx / Navbar.css          # Navigation & Theme Toggle
│   │   ├── Hero.jsx / Hero.css              # Hero Section with CTA & Metrics
│   │   ├── About.jsx / About.css            # Education & Core Pillars
│   │   ├── Skills.jsx / Skills.css          # Categorized Tech Stacks
│   │   ├── Projects.jsx / Projects.css      # Highlighted Project Cards
│   │   ├── Achievements.jsx / Achievements.css # DSA, Hackathon & LeetCode Timeline
│   │   ├── Certificates.jsx / Certificates.css # Verified Credentials Lightbox
│   │   ├── Contact.jsx / Contact.css        # Direct Email Form & Channels
│   │   └── Footer.jsx / Footer.css          # Footer & Social Links
│   ├── context/
│   │   └── ThemeContext.jsx                 # Dark/Light Mode Provider
│   ├── data/
│   │   └── portfolioData.js                 # Central Data Store
│   ├── utils/
│   │   └── emailHelper.js                   # Gmail & Mailto Link Generators
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
└── vite.config.js
