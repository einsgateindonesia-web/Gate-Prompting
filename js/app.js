/* =========================================================
   Gate Prompting — Shared App Logic
   Handles: theme, nav, progress, toast, search helper
   ========================================================= */

(function () {
  "use strict";

  /* ---------- Constants ---------- */
  const STORAGE_KEY_THEME = "gp:theme";
  const STORAGE_KEY_PROGRESS = "gp:progress";
  const TOTAL_MODUL = 20;

  /* ---------- Theme ---------- */
  function getStoredTheme() {
    try {
      return localStorage.getItem(STORAGE_KEY_THEME);
    } catch {
      return null;
    }
  }

  function getPreferredTheme() {
    const stored = getStoredTheme();
    if (stored === "dark" || stored === "light") return stored;
    const prefersDark = window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;
    return prefersDark ? "dark" : "light";
  }

  function applyTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    const icon = document.querySelector("#themeToggle .theme-icon");
    if (icon) icon.textContent = theme === "dark" ? "🌙" : "☀️";
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute("content", theme === "dark" ? "#0b0f19" : "#ffffff");
  }

  function setTheme(theme) {
    try { localStorage.setItem(STORAGE_KEY_THEME, theme); } catch {}
    applyTheme(theme);
  }

  function toggleTheme() {
    const current = document.documentElement.getAttribute("data-theme") || "dark";
    setTheme(current === "dark" ? "light" : "dark");
  }

  /* ---------- Progress ---------- */
  function getProgress() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY_PROGRESS);
      if (!raw) return [];
      const arr = JSON.parse(raw);
      return Array.isArray(arr) ? arr : [];
    } catch {
      return [];
    }
  }

  function setProgress(list) {
    try {
      localStorage.setItem(STORAGE_KEY_PROGRESS, JSON.stringify(list));
    } catch {}
  }

  function isModulDone(id) {
    return getProgress().includes(id);
  }

  function toggleModul(id) {
    const list = getProgress();
    const idx = list.indexOf(id);
    if (idx === -1) list.push(id);
    else list.splice(idx, 1);
    setProgress(list);
    return isModulDone(id);
  }

  function markModulDone(id, done = true) {
    const list = getProgress();
    const idx = list.indexOf(id);
    if (done && idx === -1) list.push(id);
    if (!done && idx !== -1) list.splice(idx, 1);
    setProgress(list);
  }

  function resetProgress() {
    try { localStorage.removeItem(STORAGE_KEY_PROGRESS); } catch {}
  }

  function getProgressCount() {
    return getProgress().length;
  }

  /* ---------- Toast ---------- */
  let toastTimer = null;
  function showToast(msg, type = "") {
    const el = document.getElementById("toast");
    if (!el) return;
    el.textContent = msg;
    el.className = "toast show " + type;
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      el.className = "toast " + type;
    }, 2200);
  }

  /* ---------- Navbar ---------- */
  function initNav() {
    const toggle = document.getElementById("navToggle");
    const links = document.getElementById("navLinks");
    if (toggle && links) {
      toggle.addEventListener("click", () => {
        links.classList.toggle("open");
      });
      links.querySelectorAll("a").forEach((a) => {
        a.addEventListener("click", () => links.classList.remove("open"));
      });
    }

    // Active link highlight
    const path = location.pathname.split("/").pop() || "index.html";
    document.querySelectorAll(".nav-links a").forEach((a) => {
      const href = a.getAttribute("href");
      if (!href) return;
      if (href === path || (path === "" && href === "index.html")) {
        a.classList.add("active");
      }
    });
  }

  /* ---------- Theme toggle button ---------- */
  function initThemeToggle() {
    const btn = document.getElementById("themeToggle");
    if (btn) btn.addEventListener("click", toggleTheme);
  }

  /* ---------- Year ---------- */
  function initYear() {
    const el = document.getElementById("year");
    if (el) el.textContent = new Date().getFullYear();
  }

  /* ---------- Home progress card ---------- */
  function initHomeProgress() {
    const section = document.getElementById("progressSection");
    if (!section) return;
    const count = getProgressCount();
    if (count === 0) {
      section.hidden = true;
      return;
    }
    section.hidden = false;
    const text = document.getElementById("progressText");
    const fill = document.getElementById("progressFill");
    if (text) text.textContent = `${count} dari ${TOTAL_MODUL} modul selesai`;
    if (fill) fill.style.width = `${(count / TOTAL_MODUL) * 100}%`;
  }

  /* ---------- Expose API ---------- */
  window.GP = {
    // theme
    getPreferredTheme,
    setTheme,
    toggleTheme,
    applyTheme,
    // progress
    getProgress,
    setProgress,
    isModulDone,
    toggleModul,
    markModulDone,
    resetProgress,
    getProgressCount,
    TOTAL_MODUL,
    // ui
    showToast,
    // utils
    escapeHtml(str) {
      return String(str)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
    },
    formatDate(iso) {
      try {
        const d = new Date(iso);
        return d.toLocaleDateString("id-ID", {
          year: "numeric", month: "long", day: "numeric"
        });
      } catch {
        return iso;
      }
    }
  };

  /* ---------- Init on DOM ready ---------- */
  function init() {
    // Apply theme ASAP (avoid flash) — but DOM ready
    applyTheme(getPreferredTheme());
    initThemeToggle();
    initNav();
    initYear();
    initHomeProgress();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }

  // Apply theme immediately to avoid flash before DOMContentLoaded
  applyTheme(getPreferredTheme());
})();
