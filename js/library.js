/* =========================================================
   Gate Prompting — Library Page Logic
   ========================================================= */

(function () {
  "use strict";

  const state = {
    category: "all",
    query: ""
  };

  const els = {};

  function cacheEls() {
    els.filters = document.getElementById("libraryFilters");
    els.grid = document.getElementById("libraryGrid");
    els.count = document.getElementById("libraryCount");
    els.empty = document.getElementById("libraryEmpty");
    els.search = document.getElementById("searchInput");
    els.searchClear = document.getElementById("searchClear");
  }

  /* ---------- Render filter pills ---------- */
  function renderFilters() {
    els.filters.innerHTML = window.LIBRARY_CATEGORIES.map((c) => {
      const count = c.id === "all"
        ? window.LIBRARY.length
        : window.LIBRARY.filter((p) => p.category === c.id).length;
      const active = state.category === c.id ? " active" : "";
      return `
        <button class="filter-pill${active}" data-cat="${c.id}" role="tab" aria-selected="${state.category === c.id}">
          <span class="filter-icon">${c.icon}</span>
          <span>${c.label}</span>
          <span class="filter-count">${count}</span>
        </button>
      `;
    }).join("");

    els.filters.querySelectorAll(".filter-pill").forEach((btn) => {
      btn.addEventListener("click", () => {
        state.category = btn.dataset.cat;
        renderFilters();
        renderGrid();
      });
    });
  }

  /* ---------- Filter logic ---------- */
  function getFiltered() {
    const q = state.query.trim().toLowerCase();
    return window.LIBRARY.filter((p) => {
      if (state.category !== "all" && p.category !== state.category) return false;
      if (!q) return true;
      const haystack = [
        p.title,
        p.desc,
        p.prompt,
        ...(p.tags || [])
      ].join(" ").toLowerCase();
      return haystack.includes(q);
    });
  }

  /* ---------- Render grid ---------- */
  function renderGrid() {
    const list = getFiltered();

    if (!list.length) {
      els.grid.innerHTML = "";
      els.empty.hidden = false;
      els.count.textContent = "";
      return;
    }
    els.empty.hidden = true;

    els.count.innerHTML = `Menampilkan <strong>${list.length}</strong> prompt${
      state.category !== "all"
        ? ` di kategori <strong>${
            window.LIBRARY_CATEGORIES.find((c) => c.id === state.category)?.label
          }</strong>`
        : ""
    }${state.query ? ` untuk "<strong>${window.GP.escapeHtml(state.query)}</strong>"` : ""}.`;

    els.grid.innerHTML = list.map((p) => {
      const cat = window.LIBRARY_CATEGORIES.find((c) => c.id === p.category);
      return `
        <article class="prompt-card" data-id="${p.id}">
          <header class="prompt-head">
            <span class="prompt-cat" title="${cat?.label || p.category}">${cat?.icon || "📄"} ${cat?.label || p.category}</span>
            <button class="copy-btn" data-copy="${p.id}" aria-label="Copy prompt" title="Copy prompt">
              <span class="copy-icon">📋</span>
              <span class="copy-text">Copy</span>
            </button>
          </header>
          <h3 class="prompt-title">${window.GP.escapeHtml(p.title)}</h3>
          <p class="prompt-desc">${window.GP.escapeHtml(p.desc)}</p>
          <div class="prompt-tags">
            ${(p.tags || []).map((t) => `<span class="prompt-tag">#${window.GP.escapeHtml(t)}</span>`).join("")}
          </div>
          <pre class="prompt-body" id="pre-${p.id}">${window.GP.escapeHtml(p.prompt)}</pre>
        </article>
      `;
    }).join("");

    els.grid.querySelectorAll(".copy-btn").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        copyPrompt(btn.dataset.copy, btn);
      });
    });

    els.grid.querySelectorAll(".prompt-card").forEach((card) => {
      card.addEventListener("click", () => {
        const id = card.dataset.id;
        const btn = card.querySelector(".copy-btn");
        copyPrompt(id, btn);
      });
    });
  }

  /* ---------- Copy to clipboard ---------- */
  async function copyPrompt(id, btn) {
    const item = window.LIBRARY.find((p) => p.id === id);
    if (!item) return;

    const text = item.prompt;

    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(text);
      } else {
        fallbackCopy(text);
      }

      if (btn) {
        const originalIcon = btn.querySelector(".copy-icon")?.textContent;
        const originalText = btn.querySelector(".copy-text")?.textContent;
        btn.classList.add("copied");
        const iconEl = btn.querySelector(".copy-icon");
        const textEl = btn.querySelector(".copy-text");
        if (iconEl) iconEl.textContent = "✓";
        if (textEl) textEl.textContent = "Tercopy!";

        setTimeout(() => {
          btn.classList.remove("copied");
          if (iconEl) iconEl.textContent = originalIcon || "📋";
          if (textEl) textEl.textContent = originalText || "Copy";
        }, 1800);
      }

      window.GP.showToast(`"${item.title}" dicopy ke clipboard ✓`, "ok");
    } catch (err) {
      console.error(err);
      window.GP.showToast("Gagal copy. Coba manual ya.", "err");
    }
  }

  function fallbackCopy(text) {
    const ta = document.createElement("textarea");
    ta.value = text;
    ta.style.position = "fixed";
    ta.style.opacity = "0";
    ta.style.left = "-9999px";
    document.body.appendChild(ta);
    ta.focus();
    ta.select();
    try {
      document.execCommand("copy");
    } finally {
      document.body.removeChild(ta);
    }
  }

  /* ---------- Search ---------- */
  function initSearch() {
    if (!els.search) return;

    let debounce = null;
    els.search.addEventListener("input", () => {
      clearTimeout(debounce);
      debounce = setTimeout(() => {
        state.query = els.search.value;
        els.searchClear.hidden = !state.query;
        renderGrid();
      }, 180);
    });

    els.searchClear?.addEventListener("click", () => {
      els.search.value = "";
      state.query = "";
      els.searchClear.hidden = true;
      renderGrid();
      els.search.focus();
    });
  }

  /* ---------- Init ---------- */
  function init() {
    if (!window.LIBRARY || !window.LIBRARY.length) {
      document.getElementById("libraryGrid").innerHTML =
        `<p class="muted">Data library belum dimuat.</p>`;
      return;
    }
    cacheEls();
    renderFilters();
    renderGrid();
    initSearch();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
