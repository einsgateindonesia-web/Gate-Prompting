# Gate Prompting

Website belajar **prompting** dari entry level sampai master. Bahasa Indonesia, gratis, tanpa login.

🌐 **Live:** [https://einsgateindonesia-web.github.io/Gate-Prompting/](https://einsgateindonesia-web.github.io/Gate-Prompting/)

---

## ✨ Fitur

- **📚 Materi Terstruktur** — 20 modul, 4 level (Fondasi → Teknik Dasar → Lanjutan → Master)
- **📖 Contoh Nyata** — perbandingan prompt jelek vs bagus di tiap konsep
- **🎯 Kuis Interaktif** — 5 kuis (Level 1-4 + Final Test), total 30 soal
- **📦 Library Prompt** — 24 prompt siap copy untuk nulis, coding, belajar, bisnis, kreatif, analisis
- **📝 Blog** — 6 artikel pendek tentang prompting & AI
- **✅ Progress Tracking** — progress kesimpen di browser (localStorage), tanpa login
- **🌓 Dark / Light Mode** — toggle tema, preferensi kesimpen
- **📱 Responsive** — jalan di desktop, tablet, dan HP

---

## 🗂️ Struktur Project

gate-prompting/
├── index.html # Landing page
├── materi.html # Halaman baca materi (?id=l1-m1)
├── library.html # Library prompt siap pakai
├── quiz.html # Kuis interaktif
├── blog.html # Daftar artikel
├── blog-post.html # Baca artikel (?id=slug)
├── css/
│ └── style.css # Design system + semua styling
├── js/
│ ├── app.js # Shared: theme, nav, progress, toast
│ ├── data-materi.js # 20 modul (Level 1-4)
│ ├── materi.js # Logic halaman materi
│ ├── data-library.js # 24 prompt (6 kategori)
│ ├── library.js # Logic library + copy to clipboard
│ ├── data-quiz.js # 5 set soal kuis
│ ├── quiz.js # Logic kuis + score tracking
│ ├── data-blog.js # 6 artikel
│ └── blog.js # Logic blog list + single post
├── assets/
│ └── favicon.svg # Logo
├── robots.txt # SEO
├── sitemap.xml # SEO
├── .nojekyll # GitHub Pages config
├── .gitignore
├── LICENSE
└── README.md


