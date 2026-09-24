(function () {
  "use strict";

  const eraById = Object.fromEntries(ERAS.map((e) => [e.id, e]));
  const personaById = Object.fromEntries(PERSONAS.map((p) => [p.id, p]));

  function el(tag, className, html) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (html !== undefined) node.innerHTML = html;
    return node;
  }

  /* ---------- Quiz ---------- */

  const quizState = {
    index: 0,
    scores: {},
  };

  function resetQuiz() {
    quizState.index = 0;
    quizState.scores = {};
    PERSONAS.forEach((p) => (quizState.scores[p.id] = 0));
  }

  function renderQuizProgress() {
    const bar = document.getElementById("quiz-progress-bar");
    const label = document.getElementById("quiz-progress-label");
    const pct = (quizState.index / QUIZ.length) * 100;
    bar.style.width = pct + "%";
    label.textContent = `Question ${Math.min(quizState.index + 1, QUIZ.length)} of ${QUIZ.length}`;
  }

  function renderQuizQuestion() {
    const q = QUIZ[quizState.index];
    const stage = document.getElementById("quiz-stage");
    renderQuizProgress();

    const card = el("div", "quiz-question");
    card.innerHTML = `<h3 class="quiz-question__text">${q.question}</h3>`;
    const optWrap = el("div", "quiz-options");
    q.options.forEach((opt) => {
      const btn = el("button", "quiz-option", opt.text);
      btn.type = "button";
      btn.addEventListener("click", () => selectOption(opt.persona));
      optWrap.appendChild(btn);
    });
    card.appendChild(optWrap);

    stage.innerHTML = "";
    stage.appendChild(card);
    requestAnimationFrame(() => card.classList.add("is-visible"));
  }

  function selectOption(personaId) {
    quizState.scores[personaId] = (quizState.scores[personaId] || 0) + 1;
    quizState.index += 1;
    if (quizState.index < QUIZ.length) {
      renderQuizQuestion();
    } else {
      renderQuizResult();
    }
  }

  function topPersona() {
    let best = PERSONAS[0].id;
    let bestScore = -1;
    PERSONAS.forEach((p) => {
      const s = quizState.scores[p.id] || 0;
      if (s > bestScore) {
        bestScore = s;
        best = p.id;
      }
    });
    return personaById[best];
  }

  function renderQuizResult() {
    const bar = document.getElementById("quiz-progress-bar");
    const label = document.getElementById("quiz-progress-label");
    bar.style.width = "100%";
    label.textContent = "Result";

    const persona = topPersona();
    const era = eraById[WEEKS.find((w) => w.week === persona.weekRef).era];
    const stage = document.getElementById("quiz-stage");

    const card = el("div", "quiz-result");
    card.style.setProperty("--era-color", era.color);
    card.innerHTML = `
      <p class="quiz-result__eyebrow">If you lived through history, you'd be</p>
      <span class="quiz-result__icon" aria-hidden="true">${persona.icon}</span>
      <h3 class="quiz-result__name">${persona.name}</h3>
      <p class="quiz-result__epithet">${persona.epithet}</p>
      <p class="quiz-result__desc">${persona.description}</p>
      <div class="quiz-result__actions">
        <button type="button" class="btn btn--primary" id="quiz-continue">Continue to Week ${persona.weekRef} →</button>
        <button type="button" class="btn btn--ghost" id="quiz-retake">Retake the Quiz</button>
      </div>
    `;
    stage.innerHTML = "";
    stage.appendChild(card);
    requestAnimationFrame(() => card.classList.add("is-visible"));

    document.getElementById("quiz-continue").addEventListener("click", () => {
      goToWeek(persona.weekRef);
    });
    document.getElementById("quiz-retake").addEventListener("click", () => {
      resetQuiz();
      renderQuizQuestion();
    });
  }

  function goToWeek(weekNum) {
    const target = document.querySelector(`.week-card[data-week="${weekNum}"]`);
    const syllabus = document.getElementById("syllabus");
    if (syllabus) syllabus.scrollIntoView({ behavior: "smooth", block: "start" });
    if (target) {
      setTimeout(() => {
        target.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
        target.classList.add("is-highlighted");
        setTimeout(() => target.classList.remove("is-highlighted"), 2600);
      }, 500);
    }
  }

  function initQuiz() {
    resetQuiz();
    renderQuizQuestion();
    const skip = document.getElementById("quiz-skip");
    if (skip) {
      skip.addEventListener("click", (e) => {
        e.preventDefault();
        document.getElementById("syllabus").scrollIntoView({ behavior: "smooth", block: "start" });
      });
    }
  }

  /* ---------- Course-at-a-glance ---------- */

  function renderCourseInfo() {
    const metaWrap = document.getElementById("course-meta");
    metaWrap.innerHTML = `
      <span>${COURSE.semester}</span>
      <span>${COURSE.schedule}</span>
      <span>${COURSE.credits}</span>
    `;

    const booksWrap = document.getElementById("course-books");
    COURSE.requiredBooks.forEach((b) => {
      booksWrap.appendChild(el("li", null, b));
    });

    const gradeWrap = document.getElementById("course-grading");
    COURSE.grading.forEach((g) => {
      const row = el("div", "grade-row");
      row.innerHTML = `
        <span class="grade-row__label">${g.component}</span>
        <div class="grade-row__bar"><div class="grade-row__fill" style="width:${g.weight}%"></div></div>
        <span class="grade-row__value">${g.weight}%</span>
      `;
      gradeWrap.appendChild(row);
    });

    document.getElementById("course-instructor").textContent = COURSE.instructor;
  }

  /* ---------- Weekly syllabus (scrollable carousel) ---------- */

  function renderWeeks() {
    const track = document.getElementById("weeks-track");
    WEEKS.forEach((w) => {
      const era = eraById[w.era];
      const card = el("article", "week-card");
      card.style.setProperty("--era-color", era.color);
      card.dataset.era = w.era;
      card.dataset.week = w.week;

      const requiredHtml = w.required
        .map((r) => `<li>${r}</li>`)
        .join("");
      const assessmentHtml = w.assessment
        ? `<span class="week-card__assessment">${w.assessment}</span>`
        : "";

      card.innerHTML = `
        <div class="week-card__top">
          <span class="week-card__num">Week ${w.week}</span>
          <span class="week-card__icon" aria-hidden="true">${w.icon}</span>
        </div>
        <h3 class="week-card__hook">${w.hook}</h3>
        <p class="week-card__topic">${w.topic}</p>
        <p class="week-card__summary">${w.summary}</p>
        <ul class="week-card__required">${requiredHtml}</ul>
        <div class="week-card__foot">
          <span class="week-card__era">${era.label}</span>
          ${assessmentHtml}
        </div>
      `;
      track.appendChild(card);
    });
  }

  function initCarousel() {
    const track = document.getElementById("weeks-track");
    const prevBtn = document.getElementById("weeks-prev");
    const nextBtn = document.getElementById("weeks-next");
    const dotsWrap = document.getElementById("weeks-dots");

    WEEKS.forEach((w, i) => {
      const dot = el("button", "dot");
      dot.type = "button";
      dot.setAttribute("aria-label", `Go to week ${w.week}`);
      dot.addEventListener("click", () => scrollToCard(i));
      dotsWrap.appendChild(dot);
    });
    const dots = Array.from(dotsWrap.children);

    function scrollToCard(index) {
      const card = track.children[index];
      if (!card) return;
      track.scrollTo({ left: card.offsetLeft - track.offsetLeft, behavior: "smooth" });
    }

    function updateActive() {
      const trackRect = track.getBoundingClientRect();
      let closest = 0;
      let closestDist = Infinity;
      Array.from(track.children).forEach((card, i) => {
        const rect = card.getBoundingClientRect();
        const dist = Math.abs(rect.left - trackRect.left);
        if (dist < closestDist) {
          closestDist = dist;
          closest = i;
        }
      });
      dots.forEach((d, i) => d.classList.toggle("is-active", i === closest));
    }

    prevBtn.addEventListener("click", () => {
      track.scrollBy({ left: -track.clientWidth * 0.8, behavior: "smooth" });
    });
    nextBtn.addEventListener("click", () => {
      track.scrollBy({ left: track.clientWidth * 0.8, behavior: "smooth" });
    });
    track.addEventListener("scroll", () => {
      window.requestAnimationFrame(updateActive);
    });
    updateActive();
  }

  /* ---------- Timeline / infographic ---------- */

  function renderEraFilters() {
    const wrap = document.getElementById("era-filters");
    const allBtn = el("button", "filter-chip is-active", "All eras");
    allBtn.type = "button";
    allBtn.dataset.era = "all";
    wrap.appendChild(allBtn);

    ERAS.forEach((era) => {
      const btn = el("button", "filter-chip", era.label);
      btn.type = "button";
      btn.dataset.era = era.id;
      btn.style.setProperty("--era-color", era.color);
      wrap.appendChild(btn);
    });

    wrap.addEventListener("click", (e) => {
      const btn = e.target.closest(".filter-chip");
      if (!btn) return;
      Array.from(wrap.children).forEach((c) => c.classList.remove("is-active"));
      btn.classList.add("is-active");
      applyFilter(btn.dataset.era);
    });
  }

  function applyFilter(eraId) {
    document.querySelectorAll(".tl-event").forEach((item) => {
      const match = eraId === "all" || item.dataset.era === eraId;
      item.classList.toggle("is-hidden", !match);
    });
  }

  function renderTimeline() {
    const wrap = document.getElementById("timeline-list");
    TIMELINE.forEach((event, i) => {
      const era = eraById[event.era];
      const item = el("div", "tl-event");
      item.dataset.era = event.era;
      item.style.setProperty("--era-color", era.color);
      item.style.setProperty("--delay", `${(i % 6) * 60}ms`);
      item.innerHTML = `
        <div class="tl-event__dot" aria-hidden="true"></div>
        <div class="tl-event__card">
          <span class="tl-event__year">${event.year}</span>
          <div class="tl-event__head">
            <span class="tl-event__icon" aria-hidden="true">${event.icon}</span>
            <h3 class="tl-event__title">${event.title}</h3>
          </div>
          <p class="tl-event__text">${event.text}</p>
          <span class="tl-event__era">${era.label}</span>
        </div>
      `;
      wrap.appendChild(item);
    });
  }

  function initReveal() {
    const targets = document.querySelectorAll(".tl-event, .week-card");
    if (!("IntersectionObserver" in window)) {
      targets.forEach((t) => t.classList.add("is-visible"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );
    targets.forEach((t) => io.observe(t));
  }

  /* ---------- Nav + progress ---------- */

  function initNav() {
    document.querySelectorAll('a[href^="#"]').forEach((link) => {
      link.addEventListener("click", (e) => {
        const target = document.querySelector(link.getAttribute("href"));
        if (!target) return;
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    });
  }

  function initScrollProgress() {
    const bar = document.getElementById("scroll-progress");
    if (!bar) return;
    window.addEventListener(
      "scroll",
      () => {
        const h = document.documentElement;
        const scrolled = h.scrollTop;
        const max = h.scrollHeight - h.clientHeight;
        const pct = max > 0 ? (scrolled / max) * 100 : 0;
        bar.style.width = pct + "%";
      },
      { passive: true }
    );
  }

  function setYear() {
    const yearEl = document.getElementById("year");
    if (yearEl) yearEl.textContent = new Date().getFullYear();
  }

  document.addEventListener("DOMContentLoaded", () => {
    renderCourseInfo();
    initQuiz();
    renderWeeks();
    initCarousel();
    renderEraFilters();
    renderTimeline();
    initReveal();
    initNav();
    initScrollProgress();
    setYear();
  });
})();
