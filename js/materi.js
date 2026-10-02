/* =========================================================
   Gate Prompting — Materi Page Logic
   ========================================================= */

(function () {
  "use strict";

  const LEVELS = {
    1: { name: "Fondasi", tag: "Entry" },
    2: { name: "Teknik Dasar", tag: "Intermediate" },
    3: { name: "Lanjutan", tag: "Advanced" },
    4: { name: "Master", tag: "Pro" }
  };

  const els = {};

  function cacheEls() {
    els.main = document.getElementById("materiMain");
    els.sidebar = document.getElementById("materiSidebar");
    els.sidebarNav = document.getElementById("sidebarNav");
    els.sidebarProgressFill = document.getElementById("sidebarProgressFill");
    els.sidebarProgressText = document.getElementById("sidebarProgressText");
    els.sidebarToggle = document.getElementById("sidebarToggle");
    els.resetBtn = document.getElementById("resetProgressBtn");
  }

  /* ---------- Get current modul id from URL ---------- */
  function getCurrentId() {
    const params = new URLSearchParams(location.search);
    const id = params.get("id");
    if (id && window.MATERI.some((m) => m.id === id)) return id;
    return window.MATERI[0]?.id;
  }

  /* ---------- Get current level filter from URL ---------- */
  function getLevelFilter() {
    const params = new URLSearchParams(location.search);
    const level = parseInt(params.get("level"), 10);
    return [1, 2, 3, 4].includes(level) ? level : null;
  }

  /* ---------- Sidebar ---------- */
  function renderSidebar() {
    const filter = getLevelFilter();
    const currentId = getCurrentId();
    const moduls = window.MATERI;

    // Group by level
    const groups = {};
    moduls.forEach((m) => {
      if (filter && m.level !== filter) return;
      if (!groups[m.level]) groups[m.level] = [];
      groups[m.level].push(m);
    });

    let html = "";
    Object.keys(groups).sort().forEach((lvl) => {
      const level = parseInt(lvl, 10);
      const meta = LEVELS[level] || { name: `Level ${level}`, tag: "" };
      const list = groups[level];
      const doneCount = list.filter((m) => window.GP.isModulDone(m.id)).length;

      html += `
        <div class="sidebar-group">
          <div class="sidebar-group-head">
            <span class="sidebar-group-title">
              <span class="sidebar-group-num">0${level}</span>
              ${window.GP.escapeHtml(meta.name)}
            </span>
            <span class="sidebar-group-count">${doneCount}/${list.length}</span>
          </div>
          <ul class="sidebar-list">
            ${list.map((m) => {
              const done = window.GP.isModulDone(m.id);
              const active = m.id === currentId;
              return `
                <li>
                  <a href="materi.html?id=${m.id}"
                     class="sidebar-link${active ? " active" : ""}${done ? " done" : ""}">
                    <span class="sidebar-check">${done ? "✓" : ""}</span>
                    <span class="sidebar-link-text">${window.GP.escapeHtml(m.title)}</span>
                  </a>
                </li>
              `;
            }).join("")}
          </ul>
        </div>
      `;
    });

    els.sidebarNav.innerHTML = html || `<p class="muted" style="padding:12px 4px">Belum ada modul.</p>`;
  }

  /* ---------- Sidebar progress ---------- */
  function renderSidebarProgress() {
    const count = window.GP.getProgressCount();
    const total = window.GP.TOTAL_MODUL;
    const pct = total ? (count / total) * 100 : 0;
    if (els.sidebarProgressFill) els.sidebarProgressFill.style.width = pct + "%";
    if (els.sidebarProgressText) els.sidebarProgressText.textContent = `${count} / ${total}`;
  }

  /* ---------- Main content ---------- */
  function renderMain() {
    const id = getCurrentId();
    const modul = window.MATERI.find((m) => m.id === id);
    if (!modul) {
      els.main.innerHTML = `<p>Modul tidak ditemukan.</p>`;
      return;
    }

    const meta = LEVELS[modul.level] || { name: modul.levelName };
    const done = window.GP.isModulDone(modul.id);
    const idx = window.MATERI.findIndex((m) => m.id === modul.id);
    const prev = window.MATERI[idx - 1];
    const next = window.MATERI[idx + 1];

    els.main.innerHTML = `
      <nav class="breadcrumb" aria-label="Breadcrumb">
        <a href="materi.html">Materi</a>
        <span>/</span>
        <span>Level ${modul.level} — ${window.GP.escapeHtml(meta.name)}</span>
      </nav>

      <header class="modul-header">
        <div class="modul-meta">
          <span class="modul-badge">Level ${modul.level}</span>
          <span class="modul-tag">${window.GP.escapeHtml(modul.tag)}</span>
          <span class="modul-duration">${window.GP.escapeHtml(modul.duration)}</span>
        </div>
        <h1 class="modul-title">${window.GP.escapeHtml(modul.title)}</h1>
        <p class="modul-summary">${window.GP.escapeHtml(modul.summary)}</p>
      </header>

      <article class="modul-content" id="modulContent">
        ${modul.content}
      </article>

      <div class="modul-actions">
        <button class="btn ${done ? "btn-ghost" : "btn-primary"}" id="markDoneBtn">
          ${done ? "✓ Sudah Selesai (klik buat batal)" : "Tandai Selesai"}
        </button>
      </div>

      <nav class="modul-pagination" aria-label="Navigasi modul">
        ${prev
          ? `<a href="materi.html?id=${prev.id}" class="pagination-link prev">
               <span class="pagination-dir">← Sebelumnya</span>
               <span class="pagination-title">${window.GP.escapeHtml(prev.title)}</span>
             </a>`
          : `<span></span>`}
        ${next
          ? `<a href="materi.html?id=${next.id}" class="pagination-link next">
               <span class="pagination-dir">Selanjutnya →</span>
               <span class="pagination-title">${window.GP.escapeHtml(next.title)}</span>
             </a>`
          : `<a href="quiz.html" class="pagination-link next">
               <span class="pagination-dir">Selesai →</span>
               <span class="pagination-title">Coba Kuis Level</span>
             </a>`}
      </nav>
    `;

    // Attach mark-done
    const btn = document.getElementById("markDoneBtn");
    if (btn) {
      btn.addEventListener("click", () => {
        const isDone = window.GP.isModulDone(modul.id);
        window.GP.markModulDone(modul.id, !isDone);
        window.GP.showToast(
          !isDone ? "Modul ditandai selesai ✓" : "Modul dibatalkan",
          !isDone ? "ok" : ""
        );
        renderMain();
        renderSidebar();
        renderSidebarProgress();
      });
    }

    // Scroll to top on modul change
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  /* ---------- Mobile sidebar ---------- */
  function initSidebarToggle() {
    if (!els.sidebarToggle || !els.sidebar) return;
    els.sidebarToggle.addEventListener("click", () => {
      els.sidebar.classList.toggle("open");
    });
    // Close sidebar kalau klik link
    els.sidebar.addEventListener("click", (e) => {
      if (e.target.closest(".sidebar-link")) {
        els.sidebar.classList.remove("open");
      }
    });
  }

  /* ---------- Reset progress ---------- */
  function initReset() {
    if (!els.resetBtn) return;
    els.resetBtn.addEventListener("click", () => {
      if (confirm("Yakin mau reset semua progress belajar lu?")) {
        window.GP.resetProgress();
        renderSidebar();
        renderSidebarProgress();
        renderMain();
        window.GP.showToast("Progress direset", "ok");
      }
    });
  }

  /* ---------- Init ---------- */
  function init() {
    if (!window.MATERI || !window.MATERI.length) {
      document.getElementById("materiMain").innerHTML =
        `<p class="muted">Data materi belum dimuat.</p>`;
      return;
    }
    cacheEls();
    renderSidebar();
    renderSidebarProgress();
    renderMain();
    initSidebarToggle();
    initReset();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
