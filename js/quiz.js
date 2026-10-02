/* =========================================================
   Gate Prompting — Quiz Page Logic
   ========================================================= */

(function () {
  "use strict";

  const STORAGE_KEY = "gp:quiz-scores";

  const state = {
    levelId: null,
    questions: [],
    current: 0,
    answers: [],  // index jawaban user per soal
    answered: false
  };

  const els = {};

  function cacheEls() {
    els.pickerSection = document.getElementById("quizPickerSection");
    els.pickerGrid = document.getElementById("quizPickerGrid");
    els.runnerSection = document.getElementById("quizRunnerSection");
    els.runner = document.getElementById("quizRunner");
    els.runnerLabel = document.getElementById("quizRunnerLabel");
    els.runnerProgress = document.getElementById("quizRunnerProgress");
    els.progressFill = document.getElementById("quizProgressFill");
    els.question = document.getElementById("quizQuestion");
    els.options = document.getElementById("quizOptions");
    els.feedback = document.getElementById("quizFeedback");
    els.nextBtn = document.getElementById("quizNextBtn");
    els.quitBtn = document.getElementById("quizQuitBtn");
    els.result = document.getElementById("quizResult");
    els.resultEmoji = document.getElementById("quizResultEmoji");
    els.resultTitle = document.getElementById("quizResultTitle");
    els.resultScore = document.getElementById("quizResultScore");
    els.resultMsg = document.getElementById("quizResultMsg");
    els.resultReview = document.getElementById("quizResultReview");
    els.retryBtn = document.getElementById("quizRetryBtn");
    els.backBtn = document.getElementById("quizBackBtn");
  }

  /* ---------- Score storage ---------- */
  function getScores() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : {};
    } catch {
      return {};
    }
  }

  function saveScore(levelId, score, total) {
    const scores = getScores();
    const prev = scores[levelId];
    if (!prev || score > prev.best) {
      scores[levelId] = {
        best: score,
        total: total,
        lastAttempt: new Date().toISOString()
      };
    } else {
      scores[levelId].lastAttempt = new Date().toISOString();
    }
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(scores));
    } catch {}
  }

  /* ---------- Render picker ---------- */
  function renderPicker() {
    const scores = getScores();

    els.pickerGrid.innerHTML = window.QUIZ_LEVELS.map((lv) => {
      const score = scores[lv.id];
      const best = score ? `${score.best}/${score.total}` : null;
      return `
        <button class="quiz-pick-card" data-level="${lv.id}">
          <span class="quiz-pick-icon">${lv.icon}</span>
          <h3 class="quiz-pick-title">${window.GP.escapeHtml(lv.label)}</h3>
          <p class="quiz-pick-desc">${window.GP.escapeHtml(lv.desc)}</p>
          <div class="quiz-pick-foot">
            <span class="quiz-pick-count">${window.QUIZ_DATA[lv.id].length} soal</span>
            ${best ? `<span class="quiz-pick-best">Best: ${best}</span>` : ""}
          </div>
        </button>
      `;
    }).join("");

    els.pickerGrid.querySelectorAll(".quiz-pick-card").forEach((card) => {
      card.addEventListener("click", () => startQuiz(card.dataset.level));
    });
  }

  /* ---------- Start quiz ---------- */
  function startQuiz(levelId) {
    const data = window.QUIZ_DATA[levelId];
    if (!data || !data.length) return;

    state.levelId = levelId;
    state.questions = data;
    state.current = 0;
    state.answers = [];
    state.answered = false;

    const meta = window.QUIZ_LEVELS.find((l) => l.id === levelId);
    els.runnerLabel.textContent = meta?.label || levelId;

    els.pickerSection.hidden = true;
    els.runnerSection.hidden = false;
    els.result.hidden = true;
    els.runner.hidden = false;

    window.scrollTo({ top: 0, behavior: "smooth" });
    renderQuestion();
  }

  /* ---------- Render question ---------- */
  function renderQuestion() {
    const q = state.questions[state.current];
    if (!q) return;

    state.answered = false;

    els.runnerProgress.textContent = `Soal ${state.current + 1} / ${state.questions.length}`;
    els.progressFill.style.width = `${(state.current / state.questions.length) * 100}%`;
    els.question.textContent = q.q;

    els.options.innerHTML = q.options.map((opt, i) =>
      `<button class="quiz-option" data-i="${i}">${window.GP.escapeHtml(opt)}</button>`
    ).join("");

    els.options.querySelectorAll(".quiz-option").forEach((btn) => {
      btn.addEventListener("click", () => pickAnswer(+btn.dataset.i, btn));
    });

    els.feedback.hidden = true;
    els.feedback.textContent = "";
    els.feedback.className = "quiz-feedback";
    els.nextBtn.disabled = true;
    els.nextBtn.textContent =
      state.current === state.questions.length - 1 ? "Lihat Hasil →" : "Lanjut →";
  }

  /* ---------- Pick answer ---------- */
  function pickAnswer(i, btn) {
    if (state.answered) return;
    state.answered = true;

    const q = state.questions[state.current];
    state.answers.push(i);

    const allBtns = els.options.querySelectorAll(".quiz-option");
    allBtns.forEach((b) => (b.disabled = true));

    // Highlight correct
    allBtns[q.answer].classList.add("correct");

    if (i === q.answer) {
      btn.classList.add("correct");
      els.feedback.textContent = "✅ Bener! " + q.explain;
      els.feedback.className = "quiz-feedback ok";
    } else {
      btn.classList.add("wrong");
      els.feedback.textContent = "❌ Kurang tepat. " + q.explain;
      els.feedback.className = "quiz-feedback no";
    }

    els.feedback.hidden = false;
    els.nextBtn.disabled = false;
  }

  /* ---------- Next ---------- */
  function next() {
    if (state.current < state.questions.length - 1) {
      state.current++;
      renderQuestion();
      els.runner.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      finish();
    }
  }

  /* ---------- Finish ---------- */
  function finish() {
    els.progressFill.style.width = "100%";

    let score = 0;
    state.questions.forEach((q, i) => {
      if (state.answers[i] === q.answer) score++;
    });

    const total = state.questions.length;
    const pct = score / total;

    saveScore(state.levelId, score, total);

    els.runner.hidden = true;
    els.result.hidden = false;

    let emoji, title, msg;
    if (pct === 1) {
      emoji = "🏆";
      title = "Sempurna!";
      msg = "Lu nguasain level ini. Lanjut ke level berikutnya!";
    } else if (pct >= 0.8) {
      emoji = "🎉";
      title = "Keren!";
      msg = "Pemahaman lu udah solid. Cek review di bawah buat soal yang kelewat.";
    } else if (pct >= 0.6) {
      emoji = "👍";
      title = "Lumayan!";
      msg = "Bagus, tapi masih ada yang perlu di-refresh. Baca ulang materinya, terus coba lagi.";
    } else if (pct >= 0.4) {
      emoji = "📚";
      title = "Perlu Belajar Lagi";
      msg = "Baca ulang materi level ini, terus ulangi kuisnya.";
    } else {
      emoji = "🔁";
      title = "Masih Jauh";
      msg = "Santai, ini bagian dari proses. Baca materi dari awal, jangan skip.";
    }

    els.resultEmoji.textContent = emoji;
    els.resultTitle.textContent = title;
    els.resultScore.textContent = `${score} / ${total}`;
    els.resultMsg.textContent = msg;

    // Review
    els.resultReview.innerHTML = `
      <h3 class="quiz-review-title">Review Jawaban</h3>
      ${state.questions.map((q, i) => {
        const userAns = state.answers[i];
        const correct = userAns === q.answer;
        return `
          <div class="quiz-review-item ${correct ? "ok" : "no"}">
            <div class="quiz-review-head">
              <span class="quiz-review-num">${i + 1}</span>
              <span class="quiz-review-status">${correct ? "✓ Bener" : "✗ Salah"}</span>
            </div>
            <p class="quiz-review-q">${window.GP.escapeHtml(q.q)}</p>
            <p class="quiz-review-ans">
              <strong>Jawaban lu:</strong> ${window.GP.escapeHtml(q.options[userAns] || "-")}
            </p>
            ${!correct ? `<p class="quiz-review-ans"><strong>Jawaban benar:</strong> ${window.GP.escapeHtml(q.options[q.answer])}</p>` : ""}
            <p class="quiz-review-explain">${window.GP.escapeHtml(q.explain)}</p>
          </div>
        `;
      }).join("")}
    `;

    window.scrollTo({ top: 0, behavior: "smooth" });
    window.GP.showToast(`Skor: ${score}/${total}`, score / total >= 0.6 ? "ok" : "");
  }

  /* ---------- Quit / back ---------- */
  function backToPicker() {
    state.levelId = null;
    els.runnerSection.hidden = true;
    els.pickerSection.hidden = false;
    renderPicker(); // refresh best score
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  /* ---------- Init ---------- */
  function init() {
    if (!window.QUIZ_DATA || !window.QUIZ_LEVELS) {
      els.pickerGrid.innerHTML = `<p class="muted">Data kuis belum dimuat.</p>`;
      return;
    }
    cacheEls();
    renderPicker();

    els.nextBtn.addEventListener("click", next);
    els.quitBtn.addEventListener("click", () => {
      if (confirm("Yakin mau keluar? Progress kuis ini bakal hilang.")) backToPicker();
    });
    els.retryBtn.addEventListener("click", () => startQuiz(state.levelId));
    els.backBtn.addEventListener("click", backToPicker);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
