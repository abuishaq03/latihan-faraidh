const LIST_PER_PAGE = 15;

const FARD_OPTIONS = [
  { value: "1/2", cls: "fraction" },
  { value: "1/4", cls: "fraction" },
  { value: "1/8", cls: "fraction" },
  { value: "1/3", cls: "fraction" },
  { value: "1/6", cls: "fraction" },
  { value: "2/3", cls: "fraction" },
  { value: "1/3 الباقي", cls: "special" },
  { value: "عصبة", cls: "state" },
  { value: "محجوب", cls: "state" },
];

const App = {
  currentView: "home",
  currentIndex: 0,
  session: [],
  fardSelections: [],
  fardActiveBtn: [],
  mode: "single",
  listState: { query: "", page: 1 },

  el(id) {
    return document.getElementById(id);
  },

  cleanHash() {
    return (location.hash || "")
      .replace(/^#\/?/, "")
      .replace(/\/+$/, "")
      .trim();
  },

  navigate(hash) {
    const target = "#/" + (hash || "");
    if (location.hash === target) {
      this.route();
    } else {
      location.hash = target;
    }
  },

  route() {
    const h = this.cleanHash();

    if (h === "" || h === "home") {
      this.currentView = "home";
    } else if (h === "list" || h.startsWith("list")) {
      this.currentView = "list";
      this.applyListHash(h);
    } else if (h.startsWith("latihan/")) {
      this.applyExerciseHash(h);
    } else {
      this.currentView = "home";
    }

    this.render();
  },

  applyListHash(h) {
    const page = parseInt(h.replace("list", "").replace("p", "").replace(/\//g, ""), 10);
    this.listState.page = Number.isInteger(page) && page >= 1 ? page : 1;
  },

  applyExerciseHash(h) {
    const arg = h.slice("latihan/".length);

    const id = parseInt(arg, 10);
    const q = FaraidhStore.getQuestionById(id);
    this.mode = "single";
    if (q) {
      this.session = [q];
    } else {
      this.session = [];
    }
    this.currentIndex = 0;
    this.currentView = q ? "exercise" : "list";
  },

  render() {
    const app = this.el("app");
    switch (this.currentView) {
      case "home":
        app.innerHTML = this.renderHome();
        this.bindHome();
        break;
      case "list":
        this.renderList();
        break;
      case "exercise":
        app.innerHTML = this.renderExercise();
        this.bindExercise();
        break;
    }
  },

  /* ═══ Home ═══ */
  renderHome() {
    return `
      <h1 class="home-title">تدريبات الفرائض</h1>
      <div class="home-menu">
        <button id="btn-list" class="home-btn primary">قائمة المسائل</button>
        <button id="btn-lessons" class="home-btn">الدروس</button>
      </div>
    `;
  },

  bindHome() {
    this.el("btn-list").onclick = () => {
      this.navigate("list");
    };
    this.el("btn-lessons").onclick = () => {
      alert("الدروس - قريباً إن شاء الله");
    };
  },

  /* ═══ Question List ═══ */
  renderList() {
    const app = this.el("app");

    app.innerHTML = `
      <div class="exercise-header">قائمة المسائل</div>
      <button id="btn-home" class="top-link">العودة للرئيسية</button>
      <input type="search" id="list-search" class="list-search"
             placeholder="ابحث برقم المسألة أو اسم الوارث..." value="${this.escHtml(this.listState.query)}">
      <div id="list-items" class="list-items"></div>
      <div id="list-pagination" class="list-pagination"></div>
    `;

    this.el("btn-home").onclick = () => this.navigate("");
    this.el("list-search").oninput = (e) => {
      this.listState.query = e.target.value;
      this.listState.page = 1;
      this.updateListResults();
    };

    this.updateListResults();
  },

  updateListResults() {
    const query = (this.listState.query || "").trim();
    const all = FaraidhStore.allQuestions();
    const filtered = all.filter((q) => this.matchesQuery(q, query));

    const totalPages = Math.max(1, Math.ceil(filtered.length / LIST_PER_PAGE));
    if (this.listState.page > totalPages) this.listState.page = totalPages;

    const start = (this.listState.page - 1) * LIST_PER_PAGE;
    const pageItems = filtered.slice(start, start + LIST_PER_PAGE);

    if (pageItems.length === 0) {
      this.el("list-items").innerHTML =
        '<div class="list-empty">لا توجد مسائل مطابقة لبحثك.</div>';
      this.el("list-pagination").innerHTML = "";
      return;
    }

    this.el("list-items").innerHTML = pageItems
      .map((q) => this.renderListItem(q))
      .join("");

    this.el("list-items").querySelectorAll("[data-id]").forEach((btn) => {
      btn.onclick = () => this.navigate("latihan/" + btn.dataset.id);
    });

    this.el("list-pagination").innerHTML = this.renderPagination(
      this.listState.page,
      totalPages
    );
  },

  matchesQuery(q, query) {
    if (!query) return true;
    const t = query.toLowerCase();
    const id = String(q.id);
    const text = (q.question || "").toLowerCase();
    const heirs = (q.heirs || []).join(" ").toLowerCase();
    return id.includes(t) || text.includes(t) || heirs.includes(t);
  },

  renderListItem(q) {
    const status = ProgressStore.getStatus(q.id);
    const isReview = FaraidhStore.isSkippable(q);
    const badge = isReview
      ? '<span class="badge badge-review">مراجعة</span>'
      : status === "correct"
        ? '<span class="badge badge-correct">صحيح</span>'
        : status === "attempted"
          ? '<span class="badge badge-attempted">تمت المحاولة</span>'
          : '<span class="badge badge-unstarted">لم يبدأ</span>';

    return `
      <button class="list-item" data-id="${q.id}">
        <span class="list-num">${q.id}</span>
        <span class="list-body">
          <span class="list-heirs">${this.escHtml((q.heirs || []).join(" ، "))}</span>
          <span class="list-question">${this.escHtml(q.question || "")}</span>
        </span>
        ${badge}
      </button>
    `;
  },

  renderPagination(current, total) {
    const links = [];
    const push = (v) => links.push(v);

    if (total <= 7) {
      for (let i = 1; i <= total; i++) push(i);
    } else {
      const start = Math.max(1, current - 2);
      const end = Math.min(total, current + 2);
      if (start > 1) {
        push(1);
        if (start > 2) push("…");
      }
      for (let i = start; i <= end; i++) push(i);
      if (end < total) {
        if (end < total - 1) push("…");
        push(total);
      }
    }

    return links
      .map((p) =>
        p === "…"
          ? '<span class="page-dots">…</span>'
          : `<a href="#/list/p/${p}" class="page-link ${p === current ? "active" : ""}">${p}</a>`
      )
      .join("");
  },

  /* ═══ Exercise ═══ */
  renderExercise() {
    const ex = this.session[this.currentIndex];
    const backBtn = `<button id="btn-back-list" class="top-link">العودة إلى قائمة المسائل</button>`;

    if (!ex) {
      return `
        ${backBtn}
        <div class="feedback">
          <div class="feedback-label">المسألة غير موجودة أو لا توجد مسائل متاحة.</div>
        </div>
      `;
    }

    if (FaraidhStore.isSkippable(ex)) {
      return `
        <div class="feedback">
          <div class="feedback-label">هذه المسألة بحاجة إلى مراجعة.</div>
          <div class="feedback-correct-answer">المسألة رقم ${ex.id} لم يتم تحديد مفتاح إجابتها بشكل آمن.</div>
        </div>
        <button id="btn-back-list" class="nav-btn">العودة إلى قائمة المسائل</button>
      `;
    }

    this.fardSelections = new Array(ex.answers.length).fill("");
    this.fardActiveBtn = new Array(ex.answers.length).fill(null);

    const nav = this.getNav();

    return `
      ${backBtn}
      <div class="progress">المسألة رقم ${ex.id}</div>

      <div class="heirs-list">${ex.heirs.join(" ، ")}</div>

      <div class="section-title">أصل المسألة</div>
      <input type="text" id="inp-asal" class="asal-masalah-input"
             placeholder="..." inputmode="numeric">

      <table class="faraidh-table">
        <thead>
          <tr>
            <th>وارث</th>
            <th>فرض</th>
            <th>سهم</th>
          </tr>
        </thead>
        <tbody>
          ${ex.answers
            .map((a, i) => `
            <tr>
              <td class="heir-name">${a.heir}</td>
              <td>
                ${this.renderFardOptions(i)}
              </td>
              <td><input type="text" id="sahm-${i}" placeholder="..." inputmode="numeric"></td>
            </tr>`)
            .join("")}
        </tbody>
      </table>

      <div class="action-row">
        <button id="btn-prev" class="action-btn ${nav.prev ? "" : "disabled"}">السابق</button>
        <button id="btn-check" class="check-btn">تحقق من الإجابة</button>
        <button id="btn-next" class="action-btn ${nav.next ? "" : "disabled"}">التالي</button>
      </div>
      <div id="feedback-area"></div>
      <div id="nav-area"></div>
    `;
  },

  getNav() {
    const ex = this.session[this.currentIndex];
    if (!ex) return { prev: null, next: null };
    const list = FaraidhStore.availableQuestions();
    const idx = list.findIndex((q) => q.id === ex.id);
    if (idx < 0) return { prev: null, next: null };
    return {
      prev: idx > 0 ? list[idx - 1].id : null,
      next: idx >= 0 && idx < list.length - 1 ? list[idx + 1].id : null,
    };
  },

  renderFardOptions(heirIndex) {
    const btns = FARD_OPTIONS.map(
      (opt, j) => `<button type="button" class="fard-option ${opt.cls}"
        id="fard-opt-${heirIndex}-${j}"
        data-heir="${heirIndex}" data-value="${opt.value}">${opt.value}</button>`
    ).join("");

    return `
      <div class="fard-grid" id="fard-cell-${heirIndex}">
        ${btns}
      </div>
    `;
  },

  bindExercise() {
    const ex = this.session[this.currentIndex];
    const btnCheck = this.el("btn-check");

    const backListBtn = this.el("btn-back-list");
    if (backListBtn) {
      backListBtn.onclick = () => this.navigate("list");
    }

    if (!ex) {
      return;
    }

    if (FaraidhStore.isSkippable(ex)) {
      return;
    }

    btnCheck.onclick = () => this.checkAnswers();

    const nav = this.getNav();
    this.el("btn-prev").onclick = nav.prev
      ? () => this.navigate("latihan/" + nav.prev)
      : null;
    this.el("btn-next").onclick = nav.next
      ? () => this.navigate("latihan/" + nav.next)
      : null;

    this.el("inp-asal").oninput = () => this.clearFieldError("inp-asal");

    ex.answers.forEach((_, heirIndex) => {
      this.el(`sahm-${heirIndex}`).oninput = () =>
        this.clearFieldError(`sahm-${heirIndex}`);

      FARD_OPTIONS.forEach((opt, optIndex) => {
        this.el(`fard-opt-${heirIndex}-${optIndex}`).onclick = () => {
          const prev = this.fardActiveBtn[heirIndex];
          if (prev) prev.classList.remove("active");
          const btn = this.el(`fard-opt-${heirIndex}-${optIndex}`);
          btn.classList.add("active");
          this.fardActiveBtn[heirIndex] = btn;
          this.fardSelections[heirIndex] = opt.value;
          this.clearFieldError(`fard-cell-${heirIndex}`);
        };
      });
    });
  },

  checkAnswers() {
    const ex = this.session[this.currentIndex];

    const missing = this.findMissingAnswers(ex);
    if (missing.length > 0) {
      this.showRequiredWarning(missing.length);
      return;
    }

    const userAnswers = {
      asalMasalah: this.el("inp-asal").value,
      heirs: ex.answers.map((_, i) => ({
        fard: this.fardSelections[i] || "",
        sahm: this.el(`sahm-${i}`).value,
      })),
    };

    const result = AnswerChecker.validateAnswer(userAnswers, ex);
    if (result.allCorrect) {
      ProgressStore.setCorrect(ex.id);
    } else {
      ProgressStore.setAttempted(ex.id);
    }

    this.showFeedback(result, ex, userAnswers);
    this.el("btn-check").style.display = "none";

    this.el("nav-area").innerHTML = `
      <button id="btn-back-list" class="nav-btn">العودة إلى قائمة المسائل</button>
    `;
    this.el("btn-back-list").onclick = () => this.navigate("list");
  },

  findMissingAnswers(ex) {
    const missing = [];
    const asalEl = this.el("inp-asal");
    if (!String(asalEl.value).trim()) {
      missing.push("inp-asal");
      asalEl.classList.add("input-error");
    }
    ex.answers.forEach((_, i) => {
      const sahmEl = this.el(`sahm-${i}`);
      if (!String(sahmEl.value).trim()) {
        missing.push(`sahm-${i}`);
        sahmEl.classList.add("input-error");
      }
      if (!this.fardSelections[i]) {
        missing.push(`fard-${i}`);
        const cell = this.el(`fard-cell-${i}`);
        if (cell && cell.classList) cell.classList.add("input-error");
      }
    });
    return missing;
  },

  showRequiredWarning(count) {
    const fb = this.el("feedback-area");
    fb.innerHTML = `
      <div class="feedback warning">
        <div class="feedback-label">يرجى إكمال جميع الحقول المطلوبة قبل التحقق</div>
        <div class="feedback-correct-answer">أصل المسألة، فرض وسهم كل وارث إلزامية. (${count} حقل فارغ)</div>
      </div>
    `;
  },

  clearFieldError(id) {
    const el = this.el(id);
    if (el && el.classList) el.classList.remove("input-error");
  },

  showFeedback(result, ex, userAnswers) {
    const fb = this.el("feedback-area");

    let html = '<div class="feedback">';

    html += `<div class="feedback-item">
      <div class="feedback-label">أصل المسألة</div>
      <div class="feedback-line ${result.asalMasalah ? 'correct' : 'wrong'}">
        ${result.asalMasalah ? '✓ صحيح' : '✗ غير صحيح'}
      </div>
      ${!result.asalMasalah ? `<div class="feedback-correct-answer">إجابتك: ${userAnswers.asalMasalah || '—'} — الإجابة الصحيحة: ${ex.asalMasalah}</div>` : ''}
    </div>`;

    result.heirs.forEach((h, i) => {
      const correctAns = ex.answers[i];
      const userHeir = userAnswers.heirs[i];
      html += `<div class="feedback-item">
        <div class="feedback-label">${h.heir}</div>
        <div class="feedback-line ${h.fard ? 'correct' : 'wrong'}">
          فرض: ${h.fard ? '✓ صحيح' : '✗ غير صحيح'}
        </div>
        ${!h.fard ? `<div class="feedback-correct-answer">إجابتك: ${userHeir.fard || '—'} — الإجابة الصحيحة: ${correctAns.fardh}</div>` : ''}
        <div class="feedback-line ${h.sahm ? 'correct' : 'wrong'}">
          سهم: ${h.sahm ? '✓ صحيح' : '✗ غير صحيح'}
        </div>
        ${!h.sahm ? `<div class="feedback-correct-answer">إجابتك: ${userHeir.sahm || '—'} — الإجابة الصحيحة: ${correctAns.sahm}</div>` : ''}
      </div>`;
    });

    html += '</div>';

    html += `<div class="explanation">
      <h3>الحل</h3>
      <div class="solution-line">أصل المسألة: ${ex.asalMasalah}</div>
      <ul class="solution-list">
        ${ex.answers
          .map((a) => `<li><b>${a.heir}</b>: فرض ${a.fardh} — سهم ${a.sahm}</li>`)
          .join("")}
      </ul>
      ${
        ex.notes && ex.notes.length
          ? `<div class="solution-notes">${ex.notes.map((n) => `<div>${n}</div>`).join("")}</div>`
          : ""
      }
    </div>`;

    fb.innerHTML = html;
  },

  /* ═══ Helpers ═══ */
  escHtml(str) {
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  },
};

ProgressStore.load();

document.addEventListener("DOMContentLoaded", () => App.route());

window.addEventListener("hashchange", () => App.route());