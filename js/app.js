(function () {
  "use strict";

  const eraById = Object.fromEntries(ERAS.map((e) => [e.id, e]));

  function el(tag, className, html) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (html !== undefined) node.innerHTML = html;
    return node;
  }

  /* ---------- Weekly syllabus (scrollable carousel) ---------- */

  function renderWeeks() {
    const track = document.getElementById("weeks-track");
    WEEKS.forEach((w) => {
      const era = eraById[w.era];
      const card = el("article", "week-card");
      card.style.setProperty("--era-color", era.color);
      card.dataset.era = w.era;
      card.innerHTML = `
        <div class="week-card__top">
          <span class="week-card__num">Week ${w.week}</span>
          <span class="week-card__icon" aria-hidden="true">${w.icon}</span>
        </div>
        <h3 class="week-card__title">${w.title}</h3>
        <p class="week-card__summary">${w.summary}</p>
        <span class="week-card__era">${era.label}</span>
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
