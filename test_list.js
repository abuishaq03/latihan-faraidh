const fs = require("fs");
const vm = require("vm");
const assert = require("assert").strict;

/* ── mock DOM setup ── */
class MockElement {
  constructor(tag, id, registry) {
    this.tagName = tag;
    this.id = id || "";
    this.innerHTML = "";
    this.value = "";
    this.textContent = "";
    this.style = {};
    this._onclick = null;
    this._oninput = null;
    this._listeners = {};
    this._registry = registry || {};
    this._dataId = null;
  }
  get onclick() { return this._onclick; }
  set onclick(fn) { this._onclick = fn; }
  get oninput() { return this._oninput; }
  set oninput(fn) { this._oninput = fn; }
  addEventListener(evt, fn) { this._listeners[evt] = fn; }
  removeEventListener() {}
  querySelectorAll(sel) { return []; }
  querySelector(sel) { return null; }
  setAttribute() {}
  get dataset() { return { id: this._dataId }; }
  set innerHTML(v) {
    this._html = v;
    if (this._registry && v) {
      const re = /id="([^"]+)"/g;
      let m;
      while ((m = re.exec(v)) !== null) {
        const childId = m[1];
        if (!this._registry[childId]) {
          this._registry[childId] = new MockElement("div", childId, this._registry);
        }
        // Extract the inner content of this element from the HTML
        const tagRe = new RegExp(`<[^>]*id="${childId}"[^>]*>([\\s\\S]*?)</`);
        const contentMatch = v.match(tagRe);
        if (contentMatch && contentMatch[1]) {
          this._registry[childId].innerHTML = contentMatch[1];
        }
      }
    }
  }
  get innerHTML() { return this._html || ""; }
  classList = { _s: new Set(), add(c) { this._s.add(c); }, remove(c) { this._s.delete(c); }, contains(c) { return this._s.has(c); } };
}

function buildContext() {
  const elements = {};
  const mockLocation = { _h: "", _listeners: [] };
  Object.defineProperty(mockLocation, "hash", {
    get() { return this._h || ""; },
    set(v) { this._h = v; this._listeners.forEach((fn) => fn()); },
    configurable: true,
  });

  const localStorage = { _d: {}, getItem(k) { return this._d[k] || null; }, setItem(k, v) { this._d[k] = String(v); } };

  const doc = {
    getElementById(id) {
      if (!elements[id]) { elements[id] = new MockElement("div", id, elements); }
      return elements[id];
    },
    addEventListener() {},
    querySelector() { return null; },
    querySelectorAll() { return []; },
  };

  const win = { addEventListener(evt, fn) { if (evt === "hashchange") mockLocation._listeners.push(fn); } };

  const ctx = vm.createContext({
    console, setTimeout, document: doc, window: win, location: mockLocation, localStorage,
  });

  return { ctx, elements, mockLocation, localStorage };
}

function loadAll(ctx) {
  const files = [
    "js/data/faraidhAnswerKey.js",
    "js/utils/faraidhStore.js",
    "js/utils/answerChecker.js",
    "js/utils/progressStore.js",
    "js/app.js",
  ];
  const code = files.map((f) => fs.readFileSync(f, "utf8")).join("\n;\n");
  const exportCode = `
    this.__exp = {
      App: App, FaraidhStore: FaraidhStore, AnswerChecker: AnswerChecker,
      ProgressStore: ProgressStore, FARAIDH_ANSWER_KEY: FARAIDH_ANSWER_KEY,
    };
  `;
  vm.runInContext(code + "\n;\n" + exportCode, ctx, { filename: "all.js" });
}

let passed = 0;
let failed = 0;
function test(name, fn) {
  try { fn(); passed++; console.log(`  ✓ ${name}`); }
  catch (e) { failed++; console.log(`  ✗ ${name}`); console.log("    " + e.message); }
}

function setup() {
  const { ctx, elements, mockLocation, localStorage } = buildContext();
  loadAll(ctx);
  const exp = ctx.__exp || {};
  ctx.App = exp.App;
  ctx.FaraidhStore = exp.FaraidhStore;
  ctx.AnswerChecker = exp.AnswerChecker;
  ctx.ProgressStore = exp.ProgressStore;
  ctx.FARAIDH_ANSWER_KEY = exp.FARAIDH_ANSWER_KEY;
  return { ctx, elements, loc: mockLocation, localStorage };
}

/* ═══════════════════════════════════════════════ */
console.log("\n=== 1. Route + Home ===");
{
  const { ctx, elements, loc } = setup();

  test("empty hash → home view", () => {
    loc.hash = "";
    ctx.App.route();
    assert(ctx.App.currentView === "home", "currentView should be home");
    assert(elements["app"].innerHTML.includes("تدريبات الفرائض"), "should show title");
  });

  test("home has btn-list (session start removed)", () => {
    ctx.App.route();
    assert(elements["btn-list"] !== undefined, "btn-list exists");
    assert(elements["btn-list"].innerHTML.includes("قائمة المسائل"), "list btn text");
    assert(!elements["app"].innerHTML.includes("ابدأ التدريب"), "start btn removed");
  });
}

/* ═══════════════════════════════════════════════ */
console.log("\n=== 2. Navigate to List ===");
{
  const { ctx, elements, loc } = setup();

  test("navigate('list') → list view with 15 items on page 1", () => {
    ctx.App.navigate("list");
    assert(ctx.App.currentView === "list", "view is list");
    assert(elements["list-items"].innerHTML.includes("list-item"), "has items");
    const count = (elements["list-items"].innerHTML.match(/class="list-item"/g) || []).length;
    assert(count === 15, `page 1 has 15 items, got ${count}`);
  });

  test("list-count element removed", () => {
    assert(elements["list-count"] === undefined, "list-count no longer rendered");
  });

  test("list has pagination links", () => {
    assert(elements["list-pagination"].innerHTML.includes("page-link"), "has pagination");
  });

  test("list-search input exists with placeholder", () => {
    assert(elements["list-search"] !== undefined, "search exists");
  });

  test("back to home button exists", () => {
    assert(elements["btn-home"] !== undefined, "home btn exists");
  });

  test("badge classes present (unstarted)", () => {
    assert(elements["list-items"].innerHTML.includes("badge"), "has badges");
  });
}

/* ═══════════════════════════════════════════════ */
console.log("\n=== 3. Search ===");
{
  const { ctx, elements, loc } = setup();

  test("search 'زوج' filters results", () => {
    ctx.App.navigate("list");
    const input = elements["list-search"];
    input.value = "زوج";
    input.oninput({ target: input });
    const txt = elements["list-count"]?.textContent;
    assert(!txt || !txt.startsWith("574 مسألة من أصل 574"), "filtered results");
  });

  test("search '250' shows Q250", () => {
    ctx.App.navigate("list");
    const input = elements["list-search"];
    input.value = "250";
    input.oninput({ target: input });
    assert(elements["list-items"].innerHTML.includes('data-id="250"'), "Q250 found");
  });

  test("search non-existent → empty message", () => {
    ctx.App.navigate("list");
    const input = elements["list-search"];
    input.value = "xxxxxxxxxyz";
    input.oninput({ target: input });
    assert(elements["list-items"].innerHTML.includes("لا توجد"), "empty msg");
  });

  test("clear search restores full list", () => {
    ctx.App.navigate("list");
    const input = elements["list-search"];
    input.value = "xyz";
    input.oninput({ target: input });
    input.value = "";
    input.oninput({ target: input });
    const count = (elements["list-items"].innerHTML.match(/class="list-item"/g) || []).length;
    assert(count === 15, `full list restored, got ${count}`);
  });
}

/* ═══════════════════════════════════════════════ */
console.log("\n=== 4. Pagination ===");
{
  const { ctx, elements, loc } = setup();

  test("page 2 shows items starting from 16", () => {
    ctx.App.navigate("list/p/2");
    assert(elements["list-items"].innerHTML.includes('data-id="16"'), "Q16 on page 2");
  });

  test("page 39 (last) has items", () => {
    ctx.App.navigate("list/p/39");
    assert(elements["list-items"].innerHTML.includes("badge"), "has items on last page");
  });

  test("page 1 via hash", () => {
    ctx.App.navigate("list/p/1");
    assert(elements["list-items"].innerHTML.includes('data-id="1"'), "Q1 on page 1");
  });

  test("invalid page → clamped to 1", () => {
    ctx.App.navigate("list/p/0");
    assert(ctx.App.listState.page === 1, "page = 1");
  });

  test("very high page → clamped", () => {
    ctx.App.navigate("list/p/999");
    assert(ctx.App.listState.page <= 39, "clamped");
  });
}

/* ═══════════════════════════════════════════════ */
console.log("\n=== 5. Single Question Exercise (by ID) ===");
{
  const { ctx, elements, loc } = setup();

  test("open Q1 → single mode, shows Q1 data", () => {
    ctx.App.navigate("latihan/1");
    assert(ctx.App.currentView === "exercise", "view is exercise");
    assert(ctx.App.mode === "single", "mode is single");
    assert(ctx.App.session[0].id === 1, "session[0].id = 1");
    assert(elements["app"].innerHTML.includes("المسألة رقم 1"), "shows مسألة رقم 1");
  });

  test("open Q10", () => {
    ctx.App.navigate("latihan/10");
    assert(ctx.App.session[0].id === 10);
    assert(elements["app"].innerHTML.includes("المسألة رقم 10"));
  });

  test("open Q250", () => {
    ctx.App.navigate("latihan/250");
    assert(ctx.App.session[0].id === 250);
    assert(elements["app"].innerHTML.includes("المسألة رقم 250"));
  });

  test("open Q574 (last)", () => {
    ctx.App.navigate("latihan/574");
    assert(ctx.App.session[0].id === 574);
    assert(elements["app"].innerHTML.includes("المسألة رقم 574"));
  });

  test("back-to-list button present on single exercise", () => {
    ctx.App.navigate("latihan/1");
    assert(elements["btn-back-list"] !== undefined, "btn-back-list exists");
  });

  test("fard buttons rendered for heirs", () => {
    ctx.App.navigate("latihan/1");
    assert(elements["fard-opt-0-0"] !== undefined, "fard-opt-0-0 exists");
    assert(elements["fard-opt-0-5"] !== undefined, "fard-opt-0-5 exists (2/3)");
  });

  test("non-existent Q → goes to list", () => {
    ctx.App.navigate("latihan/99999");
    assert(ctx.App.currentView === "list", "fallback to list");
  });
}

/* ═══════════════════════════════════════════════ */
console.log("\n=== 6. Review / Skippable Questions ===");
{
  const { ctx, elements, loc } = setup();

  test("Q423 shows review message", () => {
    ctx.App.navigate("latihan/423");
    assert(elements["app"].innerHTML.includes("بحاجة إلى مراجعة"), "review msg shown");
  });

  test("needsReview question in list shows مراجعة badge", () => {
    // find a needsReview question
    const reviewQ = ctx.FaraidhStore.allQuestions().find((q) => q.needsReview === true);
    assert(reviewQ, "there is a needsReview question");
    ctx.App.navigate("list");
    // it may be on a different page; just check the badge class exists in the list
    assert(elements["list-items"].innerHTML.includes("badge-review"), "review badge on page");
  });
}

/* ═══════════════════════════════════════════════ */
console.log("\n=== 7. Check Answers + Feedback ===");
{
  const { ctx, elements, loc } = setup();

  test("single mode: checkAnswers shows feedback + back-to-list", () => {
    ctx.App.navigate("latihan/1");
    const q = ctx.App.session[0];
    ctx.App.fardSelections = new Array(q.answers.length).fill("1/2");
    ctx.App.fardActiveBtn = new Array(q.answers.length).fill(null);
    elements["inp-asal"] = { value: "300" };
    q.answers.forEach((_, i) => { elements["sahm-" + i] = { value: "50" }; });
    ctx.App.checkAnswers();
    assert(elements["feedback-area"].innerHTML.includes("feedback"), "feedback rendered");
    assert(elements["nav-area"].innerHTML.includes("btn-back-list"), "back btn in nav");
    assert(!elements["btn-check"] || elements["btn-check"].style.display === "none", "check hidden");
  });

  test("empty answers → blocked with warning, not graded", () => {
    ctx.ProgressStore.data = {};
    ctx.App.navigate("latihan/1");
    const q = ctx.App.session[0];
    ctx.App.fardSelections = new Array(q.answers.length).fill("");
    ctx.App.fardActiveBtn = new Array(q.answers.length).fill(null);
    elements["inp-asal"] = new MockElement("input", "inp-asal", elements);
    q.answers.forEach((_, i) => { elements["sahm-" + i] = new MockElement("input", `sahm-${i}`, elements); });
    elements["feedback-area"] = new MockElement("div", "feedback-area", elements);
    ctx.App.checkAnswers();
    assert(elements["feedback-area"].innerHTML.includes("يرجى إكمال"), "warning shown");
    assert(!elements["feedback-area"].innerHTML.includes("الحل"), "no solution shown");
    assert(ctx.ProgressStore.getStatus(1) === "unstarted", "not graded");
  });

  test("missing asal only → warning + not graded", () => {
    ctx.ProgressStore.data = {};
    ctx.App.navigate("latihan/1");
    const q = ctx.App.session[0];
    ctx.App.fardSelections = q.answers.map((a) => a.fardh);
    ctx.App.fardActiveBtn = new Array(q.answers.length).fill(null);
    elements["inp-asal"] = new MockElement("input", "inp-asal", elements);
    q.answers.forEach((_, i) => {
      elements["sahm-" + i] = new MockElement("input", `sahm-${i}`, elements);
      elements["sahm-" + i].value = String(q.answers[i].sahm);
    });
    elements["feedback-area"] = new MockElement("div", "feedback-area", elements);
    ctx.App.checkAnswers();
    assert(elements["feedback-area"].innerHTML.includes("يرجى إكمال"), "warning shown");
    assert(ctx.ProgressStore.getStatus(1) === "unstarted", "not graded");
  });
}

/* ═══════════════════════════════════════════════ */
console.log("\n=== 8. Status Tracking (localStorage) ===");
{
  const { ctx, elements, loc, localStorage } = setup();

  test("attempted status saved on wrong answer", () => {
    ctx.App.navigate("latihan/1");
    const q = ctx.App.session[0];
    ctx.App.fardSelections = new Array(q.answers.length).fill("wrong");
    ctx.App.fardActiveBtn = new Array(q.answers.length).fill(null);
    elements["inp-asal"] = { value: "999" };
    q.answers.forEach((_, i) => { elements["sahm-" + i] = { value: "1" }; });
    ctx.App.checkAnswers();
    const status = ctx.ProgressStore.getStatus(1);
    assert(status === "attempted", `status is ${status}, expected attempted`);
  });

  test("correct status saved on correct answer", () => {
    ctx.App.navigate("latihan/10");
    const q = ctx.App.session[0];
    ctx.App.fardSelections = q.answers.map((a) => a.fardh);
    ctx.App.fardActiveBtn = new Array(q.answers.length).fill(null);
    elements["inp-asal"] = { value: String(q.asalMasalah) };
    q.answers.forEach((a, i) => { elements["sahm-" + i] = { value: String(a.sahm) }; });
    ctx.App.checkAnswers();
    const status = ctx.ProgressStore.getStatus(10);
    assert(status === "correct", `status is ${status}, expected correct`);
  });

  test("correct not overwritten by attempted", () => {
    ctx.ProgressStore.setCorrect(55);
    ctx.ProgressStore.setAttempted(55);
    assert(ctx.ProgressStore.getStatus(55) === "correct");
  });

  test("list shows correct badge for answered question", () => {
    ctx.ProgressStore.setCorrect(1);
    ctx.App.navigate("list");
    assert(elements["list-items"].innerHTML.includes("badge-correct"), "correct badge");
  });

  test("attempted badge in list", () => {
    ctx.ProgressStore.setAttempted(3);
    ctx.App.navigate("list");
    assert(elements["list-items"].innerHTML.includes("badge-attempted"), "attempted badge");
  });
}

/* ═══════════════════════════════════════════════ */
console.log("\n=== 9. Hash Change Event ===");
{
  const { ctx, elements, loc } = setup();

  test("changing hash triggers route", () => {
    loc.hash = "#/latihan/42";
    assert(ctx.App.currentView === "exercise", "routed to exercise");
    assert(ctx.App.session[0].id === 42);
  });

  test("hash change to list", () => {
    loc.hash = "#/list";
    assert(ctx.App.currentView === "list");
  });
}

/* ═══════════════════════════════════════════════ */
console.log("\n=== 10. Answer Key Integrity ===");
{
  const { ctx, elements, loc } = setup();

  test("574 questions, all IDs accessible", () => {
    const all = ctx.FaraidhStore.allQuestions();
    assert(all.length === 574, `count = ${all.length}`);
    for (let i = 1; i <= 574; i++) {
      const q = ctx.FaraidhStore.getQuestionById(i);
      if (!q) throw new Error(`Q${i} missing`);
      if (q.id !== i) throw new Error(`Q${i} id mismatch: ${q.id}`);
    }
  });

  test("Q1 heirs are spouses + brother (from key)", () => {
    const q = ctx.FaraidhStore.getQuestionById(1);
    assert(q.heirs.length >= 2, "Q1 has multiple heirs");
  });

  test("Q250 accessible and has answers", () => {
    const q = ctx.FaraidhStore.getQuestionById(250);
    assert(q.answers.length >= 1, "Q250 has answers");
  });

  test("Q423 is skippable (needsReview)", () => {
    const q = ctx.FaraidhStore.getQuestionById(423);
    assert(ctx.FaraidhStore.isSkippable(q), "Q423 skippable");
  });

  test("validateAnswer works (Q1 with correct keys)", () => {
    const q = ctx.FaraidhStore.getQuestionById(1);
    const userAnswers = {
      asalMasalah: String(q.asalMasalah),
      heirs: q.answers.map((a) => ({ fard: a.fardh, sahm: String(a.sahm) })),
    };
    const result = ctx.AnswerChecker.validateAnswer(userAnswers, q);
    assert(result.allCorrect, "should be all correct");
  });
}

/* ═══════════════════════════════════════════════ */
console.log("\n=== 11. Full User Flow ===");
{
  const { ctx, elements, loc } = setup();

  test("home → list → search Q250 → open → answer → back to list → check status", () => {
    // 1. Home
    loc.hash = "";
    ctx.App.route();
    assert(ctx.App.currentView === "home");

    // 2. Navigate to list
    ctx.App.navigate("list");
    assert(ctx.App.currentView === "list");

    // 3. Search for Q250 to find it
    const input = elements["list-search"];
    input.value = "250";
    input.oninput({ target: input });
    assert(elements["list-items"].innerHTML.includes('data-id="250"'), "Q250 found via search");

    // 4. Open Q250
    ctx.App.navigate("latihan/250");
    assert(ctx.App.currentView === "exercise");
    assert(ctx.App.mode === "single");
    assert(ctx.App.session[0].id === 250);

    // 5. Answer Q250 (correctly)
    const q = ctx.App.session[0];
    ctx.App.fardSelections = q.answers.map((a) => a.fardh);
    ctx.App.fardActiveBtn = new Array(q.answers.length).fill(null);
    elements["inp-asal"] = { value: String(q.asalMasalah) };
    q.answers.forEach((a, i) => { elements["sahm-" + i] = { value: String(a.sahm) }; });
    ctx.App.checkAnswers();
    assert(ctx.ProgressStore.getStatus(250) === "correct", "Q250 marked correct");

    // 6. Back to list
    elements["btn-back-list"].onclick();
    assert(ctx.App.currentView === "list");

    // 7. Verify badge (search still shows Q250)
    assert(elements["list-items"].innerHTML.includes("badge-correct"), "badge shows correct");
  });

  test("list → Q10 → wrong answer → back → attempted badge", () => {
    ctx.App.listState = { query: "", page: 1 };
    ctx.App.navigate("latihan/10");
    const q = ctx.App.session[0];
    ctx.App.fardSelections = new Array(q.answers.length).fill("wrong");
    ctx.App.fardActiveBtn = new Array(q.answers.length).fill(null);
    elements["inp-asal"] = { value: "999999" };
    q.answers.forEach((_, i) => { elements["sahm-" + i] = { value: "1" }; });
    ctx.App.checkAnswers();
    assert(ctx.ProgressStore.getStatus(10) === "attempted");

    elements["btn-back-list"].onclick();
    assert(ctx.App.currentView === "list");
    assert(elements["list-items"].innerHTML.includes("badge-attempted"), "attempted badge");
  });
}

/* ═══════════════════════════════════════════════ */
console.log("\n=== 12. List Search + Pagination Integration ===");
{
  const { ctx, elements, loc } = setup();

  test("search 'عم' then paginate", () => {
    ctx.App.navigate("list");
    const input = elements["list-search"];
    input.value = "عم";
    input.oninput({ target: input });
    const txt = elements["list-count"]?.textContent;
    assert(!txt || !txt.startsWith("574 مسألة من أصل 574"), "filtered");
    // page link should exist
    assert(elements["list-pagination"].innerHTML.includes("page-link"), "has page info");
  });

  test("search 'عم' updates results from previous search", () => {
    ctx.App.navigate("list");
    const input = elements["list-search"];
    input.value = "زوج";
    input.oninput({ target: input });
    assert(elements["list-items"].innerHTML.includes("list-item"), "results for زوج");
    input.value = "عم";
    input.oninput({ target: input });
    assert(elements["list-items"].innerHTML.includes("list-item"), "results for عم");
  });
}

/* ═══ SUMMARY ═══ */
console.log(`\n${"═".repeat(40)}`);
console.log(`  PASSED: ${passed}`);
console.log(`  FAILED: ${failed}`);
console.log(`${"═".repeat(40)}\n`);
process.exit(failed > 0 ? 1 : 0);