(function () {
  "use strict";

  const categoryById = Object.fromEntries(CATEGORIES2.map((c) => [c.id, c]));

  function el(tag, className, html) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (html !== undefined) node.innerHTML = html;
    return node;
  }

  /* ---------- Course-at-a-glance ---------- */

  function renderCourseInfo() {
    document.getElementById("course-instructor").textContent = COURSE2.instructor;
    const metaWrap = document.getElementById("course-meta");
    metaWrap.innerHTML = `
      <span>${COURSE2.semester}</span>
      <span>${COURSE2.schedule}</span>
      <span>${COURSE2.credits}</span>
    `;

    const booksWrap = document.getElementById("course-books");
    COURSE2.requiredBooks.forEach((b) => booksWrap.appendChild(el("li", null, b)));

    const gradeWrap = document.getElementById("course-grading");
    COURSE2.grading.forEach((g) => {
      const row = el("div", "grade-row");
      row.innerHTML = `
        <span class="grade-row__label">${g.component}</span>
        <div class="grade-row__bar"><div class="grade-row__fill" style="width:${g.weight}%"></div></div>
        <span class="grade-row__value">${g.weight}%</span>
      `;
      gradeWrap.appendChild(row);
    });
  }

  /* ---------- Weekly syllabus carousel ---------- */

  function renderWeeks() {
    const track = document.getElementById("weeks-track");
    WEEKS2.forEach((w) => {
      const cat = categoryById[w.category];
      const card = el("article", "week-card");
      card.style.setProperty("--era-color", cat.color);
      card.dataset.category = w.category;
      card.dataset.week = w.week;

      const requiredHtml = w.required.map((r) => `<li>${r}</li>`).join("");
      const assessmentHtml = w.assessment
        ? `<span class="week-card__assessment">${w.assessment}</span>`
        : "";
      const hasCases = !!CASES[w.week];
      const caseBtnHtml = hasCases
        ? `<button type="button" class="week-card__story-btn" data-case-week="${w.week}">
             <span class="week-card__story-btn-icon" aria-hidden="true">🗂️</span>
             <span>
               <span class="week-card__story-btn-label">View cases &amp; sign up</span>
               <span class="week-card__story-btn-teaser">${CASES[w.week].cases.length} real cases to choose from for this week's presentation.</span>
             </span>
           </button>`
        : "";

      card.innerHTML = `
        <div class="week-card__top">
          <span class="week-card__num">Week ${w.week}</span>
          <span class="week-card__icon" aria-hidden="true">${w.icon}</span>
        </div>
        <h3 class="week-card__hook">${w.hook}</h3>
        <p class="week-card__topic">${w.topic}</p>
        <p class="week-card__summary">${w.summary}</p>
        ${requiredHtml ? `<ul class="week-card__required">${requiredHtml}</ul>` : ""}
        <div class="week-card__foot">
          <span class="week-card__era">${cat.label}</span>
          ${assessmentHtml}
        </div>
        ${caseBtnHtml}
      `;
      track.appendChild(card);
    });

    track.addEventListener("click", (e) => {
      const btn = e.target.closest("[data-case-week]");
      if (!btn) return;
      const target = document.getElementById(`case-group-${btn.dataset.caseWeek}`);
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
        target.classList.add("is-highlighted");
        setTimeout(() => target.classList.remove("is-highlighted"), 2600);
      }
    });
  }

  function initCarousel() {
    const track = document.getElementById("weeks-track");
    const prevBtn = document.getElementById("weeks-prev");
    const nextBtn = document.getElementById("weeks-next");
    const dotsWrap = document.getElementById("weeks-dots");

    WEEKS2.forEach((w, i) => {
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

    prevBtn.addEventListener("click", () => track.scrollBy({ left: -track.clientWidth * 0.8, behavior: "smooth" }));
    nextBtn.addEventListener("click", () => track.scrollBy({ left: track.clientWidth * 0.8, behavior: "smooth" }));
    track.addEventListener("scroll", () => window.requestAnimationFrame(updateActive));
    updateActive();
  }

  /* ---------- Rubric / toolkit ---------- */

  function renderRubric(key, containerId) {
    const r = RUBRICS[key];
    const wrap = document.getElementById(containerId);
    wrap.innerHTML = `
      <div class="rubric-card">
        <div class="rubric-card__head">
          <h3>${r.title}</h3>
          <span class="rubric-card__weight">${r.weight}% of grade</span>
        </div>
        <p class="rubric-card__desc">${r.description}</p>
        <div class="rubric-card__criteria">
          ${r.criteria
            .map(
              (c) => `
            <div class="rubric-criterion">
              <div class="rubric-criterion__head">
                <span>${c.name}</span>
                <span class="rubric-criterion__weight">${c.weight}%</span>
              </div>
              <div class="grade-row__bar"><div class="grade-row__fill" style="width:${c.weight * 2.5}%"></div></div>
              <p class="rubric-criterion__tip">💡 ${c.tip}</p>
            </div>
          `
            )
            .join("")}
        </div>
      </div>
    `;
  }

  /* ---------- Case library ---------- */

  function mailtoLink(caseItem, week, topic) {
    const subject = `Presentation Sign-up: ${caseItem.title} (Week ${week})`;
    const body = `Hi Professor Yılmaz,\n\nI'd like to sign up to present on "${caseItem.title}" for Week ${week} (${topic}).\n\nName:\nStudent ID:\n\nThanks!`;
    return `mailto:${COURSE2.instructorEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  function renderCaseLibrary() {
    const wrap = document.getElementById("case-library");
    wrap.innerHTML = "";

    WEEKS2.filter((w) => CASES[w.week]).forEach((w) => {
      const cat = categoryById[w.category];
      const group = CASES[w.week];
      const groupEl = el("div", "case-group");
      groupEl.id = `case-group-${w.week}`;
      groupEl.dataset.category = w.category;
      groupEl.style.setProperty("--era-color", cat.color);

      const cardsHtml = group.cases
        .map(
          (c) => `
        <article class="case-card">
          <h4 class="case-card__title">${c.title}</h4>
          <p class="case-card__text">${c.text}</p>
          <a class="case-card__signup" href="${mailtoLink(c, w.week, w.topic)}">✉️ Sign up to present</a>
        </article>
      `
        )
        .join("");

      groupEl.innerHTML = `
        <div class="case-group__head">
          <span class="case-group__week">Week ${w.week}</span>
          <h3>${w.topic}</h3>
          <p class="case-group__prompt">${group.prompt}</p>
        </div>
        <div class="case-group__grid">${cardsHtml}</div>
      `;
      wrap.appendChild(groupEl);
    });
  }

  function renderCategoryFilters() {
    const wrap = document.getElementById("category-filters");
    const allBtn = el("button", "filter-chip is-active", "All Topics");
    allBtn.type = "button";
    allBtn.dataset.category = "all";
    wrap.appendChild(allBtn);

    CATEGORIES2.forEach((cat) => {
      const btn = el("button", "filter-chip", cat.label);
      btn.type = "button";
      btn.dataset.category = cat.id;
      btn.style.setProperty("--era-color", cat.color);
      wrap.appendChild(btn);
    });

    wrap.addEventListener("click", (e) => {
      const btn = e.target.closest(".filter-chip");
      if (!btn) return;
      Array.from(wrap.children).forEach((c) => c.classList.remove("is-active"));
      btn.classList.add("is-active");
      const catId = btn.dataset.category;
      document.querySelectorAll(".case-group").forEach((group) => {
        group.classList.toggle("is-hidden", !(catId === "all" || group.dataset.category === catId));
      });
    });
  }

  /* ---------- Reveal on scroll ---------- */

  function initReveal() {
    const targets = document.querySelectorAll(".week-card, .case-group");
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
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );
    targets.forEach((t) => io.observe(t));
  }

  /* ---------- Nav + progress (shared behavior) ---------- */

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
        bar.style.width = (max > 0 ? (scrolled / max) * 100 : 0) + "%";
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
    renderWeeks();
    initCarousel();
    renderRubric("brief", "rubric-brief");
    renderRubric("presentation", "rubric-presentation");
    renderCategoryFilters();
    renderCaseLibrary();
    initReveal();
    initNav();
    initScrollProgress();
    setYear();
  });
})();
