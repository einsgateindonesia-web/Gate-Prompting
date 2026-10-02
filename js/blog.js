/* =========================================================
   Gate Prompting — Blog Page Logic
   Handles both blog.html (list) and blog-post.html (single)
   ========================================================= */

(function () {
  "use strict";

  /* =========================================================
     BLOG LIST (blog.html)
     ========================================================= */
  function initList() {
    const grid = document.getElementById("blogGrid");
    if (!grid) return;

    if (!window.BLOG || !window.BLOG.length) {
      grid.innerHTML = `<p class="muted">Data blog belum dimuat.</p>`;
      return;
    }

    // Sort by date desc
    const sorted = [...window.BLOG].sort((a, b) =>
      new Date(b.date) - new Date(a.date)
    );

    grid.innerHTML = sorted.map((post) => `
      <a class="blog-card" href="blog-post.html?id=${encodeURIComponent(post.id)}">
        <div class="blog-card-head">
          <span class="blog-card-icon">${post.icon}</span>
          <span class="blog-card-cat">${window.GP.escapeHtml(post.category)}</span>
        </div>
        <h2 class="blog-card-title">${window.GP.escapeHtml(post.title)}</h2>
        <p class="blog-card-excerpt">${window.GP.escapeHtml(post.excerpt)}</p>
        <div class="blog-card-foot">
          <span>${window.GP.formatDate(post.date)}</span>
          <span>·</span>
          <span>${window.GP.escapeHtml(post.readTime)}</span>
        </div>
      </a>
    `).join("");
  }

  /* =========================================================
     BLOG POST (blog-post.html)
     ========================================================= */
  function initPost() {
    const container = document.getElementById("postContainer");
    if (!container) return;

    if (!window.BLOG || !window.BLOG.length) {
      container.innerHTML = `<p class="muted">Data blog belum dimuat.</p>`;
      return;
    }

    const params = new URLSearchParams(location.search);
    const id = params.get("id");
    const post = window.BLOG.find((p) => p.id === id);

    if (!post) {
      container.innerHTML = `
        <div class="post-notfound">
          <h1>Artikel nggak ketemu</h1>
          <p>Mungkin link-nya salah atau artikelnya udah dihapus.</p>
          <a href="blog.html" class="btn btn-primary">← Balik ke Blog</a>
        </div>
      `;
      return;
    }

    document.title = `${post.title} — Gate Prompting`;

    // Related posts (same category, exclude current)
    const related = window.BLOG
      .filter((p) => p.id !== post.id)
      .slice(0, 2);

    container.innerHTML = `
      <nav class="breadcrumb" aria-label="Breadcrumb">
        <a href="index.html">Beranda</a>
        <span>/</span>
        <a href="blog.html">Blog</a>
        <span>/</span>
        <span>${window.GP.escapeHtml(post.category)}</span>
      </nav>

      <header class="post-header">
        <span class="post-icon">${post.icon}</span>
        <span class="post-cat">${window.GP.escapeHtml(post.category)}</span>
        <h1 class="post-title">${window.GP.escapeHtml(post.title)}</h1>
        <div class="post-meta">
          <span>${window.GP.formatDate(post.date)}</span>
          <span>·</span>
          <span>${window.GP.escapeHtml(post.readTime)}</span>
        </div>
      </header>

      <div class="post-content">
        ${post.content}
      </div>

      <div class="post-share">
        <span>Bagikan:</span>
        <button class="btn btn-ghost btn-sm" id="copyLinkBtn">📋 Copy Link</button>
      </div>

      ${related.length ? `
        <section class="post-related">
          <h3>Baca Juga</h3>
          <div class="post-related-grid">
            ${related.map((r) => `
              <a class="blog-card" href="blog-post.html?id=${encodeURIComponent(r.id)}">
                <div class="blog-card-head">
                  <span class="blog-card-icon">${r.icon}</span>
                  <span class="blog-card-cat">${window.GP.escapeHtml(r.category)}</span>
                </div>
                <h2 class="blog-card-title">${window.GP.escapeHtml(r.title)}</h2>
                <p class="blog-card-excerpt">${window.GP.escapeHtml(r.excerpt)}</p>
              </a>
            `).join("")}
          </div>
        </section>
      ` : ""}

      <div class="post-back">
        <a href="blog.html" class="btn btn-ghost">← Balik ke Blog</a>
      </div>
    `;

    // Copy link
    document.getElementById("copyLinkBtn")?.addEventListener("click", async () => {
      try {
        await navigator.clipboard.writeText(location.href);
        window.GP.showToast("Link dicopy ✓", "ok");
      } catch {
        window.GP.showToast("Gagal copy link", "err");
      }
    });

    window.scrollTo({ top: 0 });
  }

  /* ---------- Init ---------- */
  function init() {
    initList();
    initPost();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
