/* ==========================================================================
   ACADEMIC HUB — RENDERER
   Tree: Department -> Semester/DEL -> Course (up to 8 slots) -> 5 categories
   First Year: Course (up to 8 slots) -> 5 categories (no semester layer)
   ========================================================================== */

(function () {
  "use strict";

  const viewRoot   = document.getElementById("viewRoot");
  const breadcrumbEl = document.getElementById("breadcrumb");
  const statsBar   = document.getElementById("statsBar");
  const homeLink   = document.getElementById("homeLink");
  const searchTrigger = document.getElementById("searchTrigger");

  const CATEGORY_ORDER = ["PYQ", "LEC", "TUT", "QUIZ", "MISC"];
  const CATEGORY_SYNONYMS = {
    PYQ: ["pyq", "pyqs", "previous year", "past paper", "past papers", "question paper"],
    LEC: ["lecture", "lectures", "lec", "notes", "slides"],
    TUT: ["tutorial", "tutorials", "tut"],
    QUIZ: ["quiz", "quizzes", "test", "tests"],
    MISC: ["misc", "miscellaneous", "other", "others"]
  };

  // path entries: {kind:'department'|'firstYear'|'semester'|'course', ref, group}
  // group: 'ug' | 'pg' | null  (only meaningful at department level)
  let path = [];
  let activeCategoryKey = null; // for course view

  /* ---------------- helpers ---------------- */

  function el(tag, className, html) {
    const e = document.createElement(tag);
    if (className) e.className = className;
    if (html !== undefined) e.innerHTML = html;
    return e;
  }
  function escapeHtml(str) {
    const d = document.createElement("div");
    d.textContent = str == null ? "" : str;
    return d.innerHTML;
  }
  function isCourseUsed(slot) {
    if (!slot) return false;
    if (slot.name && slot.name.trim()) return true;
    return CATEGORY_ORDER.some((k) => slot.categories[k].link && slot.categories[k].link.trim());
  }
  function usedCourses(list) {
    return (list || []).filter(isCourseUsed);
  }
  function countDeptLinks(dept) {
    let n = dept.link ? 1 : 0;
    dept.semesters.forEach((sem) => {
      n += sem.link ? 1 : 0;
      usedCourses(sem.courses).forEach((c) => {
        CATEGORY_ORDER.forEach((k) => { if (c.categories[k].link) n++; });
      });
    });
    return n;
  }
  function countDeptTotal(dept) {
    let n = 1 + dept.semesters.length; // dept link slot + each semester link slot
    dept.semesters.forEach((sem) => { n += sem.courses.length * CATEGORY_ORDER.length; });
    return n;
  }
  function countFYLinks() {
    let n = SITE_DATA.firstYear.link ? 1 : 0;
    usedCourses(SITE_DATA.firstYear.courses).forEach((c) => {
      CATEGORY_ORDER.forEach((k) => { if (c.categories[k].link) n++; });
    });
    return n;
  }
  function countFYTotal() {
    return 1 + SITE_DATA.firstYear.courses.length * CATEGORY_ORDER.length;
  }

  /* ---------------- breadcrumb / routing ---------------- */

  function labelFor(entry) {
    if (entry.kind === "department") return entry.ref.code;
    if (entry.kind === "firstYear") return "First Year";
    if (entry.kind === "semester") return entry.ref.code;
    if (entry.kind === "course") return entry.ref.name || entry.ref.code || "Course";
    return "";
  }

  function renderBreadcrumb() {
    breadcrumbEl.innerHTML = "";
    if (path.length === 0) { breadcrumbEl.classList.add("hidden"); return; }
    breadcrumbEl.classList.remove("hidden");

    const homeBtn = el("button", null, "Academic Hub");
    homeBtn.addEventListener("click", () => goTo(0));
    breadcrumbEl.appendChild(homeBtn);

    path.forEach((entry, i) => {
      breadcrumbEl.appendChild(el("span", "sep", "/"));
      const isLast = i === path.length - 1;
      const btn = el("button", isLast ? "current" : "", escapeHtml(labelFor(entry)));
      if (!isLast) btn.addEventListener("click", () => goTo(i + 1));
      breadcrumbEl.appendChild(btn);
    });
  }

  function goTo(depth) {
    path = path.slice(0, depth);
    activeCategoryKey = null;
    render();
    updateHash();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function navigateInto(entry) {
    path = [...path, entry];
    activeCategoryKey = null;
    render();
    updateHash();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function findDeptByCode(group, code) {
    return SITE_DATA.departments.find((d) => d.code === code);
  }

  function updateHash() {
    if (path.length === 0) { history.replaceState(null, "", "#"); return; }
    const parts = [];
    const first = path[0];
    if (first.kind === "firstYear") parts.push("fy");
    else parts.push(first.group, encodeURIComponent(first.ref.code));
    for (let i = 1; i < path.length; i++) {
      const e = path[i];
      if (e.kind === "semester") parts.push("s", encodeURIComponent(e.ref.code));
      if (e.kind === "course") parts.push("c", String(e.index));
    }
    history.replaceState(null, "", "#/" + parts.join("/"));
  }

  function restoreFromHash() {
    const raw = location.hash.replace(/^#\/?/, "");
    if (!raw) return;
    const parts = raw.split("/").map(decodeURIComponent);
    try {
      let i = 0;
      let newPath = [];
      let deptRef, courseList;
      if (parts[0] === "fy") {
        newPath.push({ kind: "firstYear", ref: SITE_DATA.firstYear, group: null });
        courseList = SITE_DATA.firstYear.courses;
        i = 1;
      } else {
        const group = parts[0]; const code = parts[1];
        deptRef = findDeptByCode(group, code);
        if (!deptRef) return;
        newPath.push({ kind: "department", ref: deptRef, group });
        i = 2;
      }
      while (i < parts.length) {
        if (parts[i] === "s" && deptRef) {
          const sem = deptRef.semesters.find((s) => s.code === parts[i + 1]);
          if (!sem) break;
          newPath.push({ kind: "semester", ref: sem, group: null });
          courseList = sem.courses;
          i += 2;
        } else if (parts[i] === "c" && courseList) {
          const idx = parseInt(parts[i + 1], 10);
          const course = courseList[idx];
          if (!course) break;
          newPath.push({ kind: "course", ref: course, group: null, index: idx });
          i += 2;
        } else break;
      }
      path = newPath;
    } catch (e) { path = []; }
  }

  window.addEventListener("popstate", () => { restoreFromHash(); render(); });

  /* ---------------- card builder ---------------- */

  function buildCard(code, name, note, metaDotReady, metaLabel, onClick, delayIndex) {
    const card = el("button", "card");
    card.type = "button";
    card.style.animationDelay = Math.min((delayIndex || 0) * 0.03, 0.35) + "s";

    const topRow = el("span", "top-row");
    topRow.appendChild(el("span", "code", escapeHtml(code || "")));
    card.appendChild(topRow);
    card.appendChild(el("span", "name", escapeHtml(name || "")));
    if (note) card.appendChild(el("span", "note", escapeHtml(note)));

    const meta = el("span", "meta");
    meta.appendChild(el("span", "dot " + (metaDotReady ? "ready" : "pending")));
    meta.appendChild(el("span", null, metaLabel));
    card.appendChild(meta);

    card.addEventListener("click", onClick);
    return card;
  }

  /* ---------------- HOME ---------------- */

  function renderHome() {
    viewRoot.innerHTML = "";
    const wrap = el("div", "view-fade");
    let idx = 0;

    const pinnedWrap = el("div", "pinned");
    const grid0 = el("div", "card-grid");
    const fyLinks = countFYLinks();
    grid0.appendChild(buildCard(
      SITE_DATA.firstYear.code, SITE_DATA.firstYear.name, SITE_DATA.firstYear.note,
      fyLinks > 0, fyLinks > 0 ? fyLinks + " links added" : "Browse inside",
      () => navigateInto({ kind: "firstYear", ref: SITE_DATA.firstYear, group: null }), idx++
    ));
    pinnedWrap.appendChild(grid0);
    wrap.appendChild(pinnedWrap);

    wrap.appendChild(el("h2", "section-title", "Departments"));
    const grid = el("div", "card-grid");
    SITE_DATA.departments.forEach((dept) => {
      const n = countDeptLinks(dept);
      grid.appendChild(buildCard(
        dept.code, dept.name, dept.note, n > 0, n > 0 ? n + " links added" : "Browse inside",
        () => navigateInto({ kind: "department", ref: dept, group: "dept" }), idx++
      ));
    });
    wrap.appendChild(grid);

    viewRoot.appendChild(wrap);
  }

  /* ---------------- DEPARTMENT / FIRST YEAR view ---------------- */

  function renderDepartment(entry) {
    viewRoot.innerHTML = "";
    const dept = entry.ref;
    const wrap = el("div", "view-fade");

    const header = el("div", "detail-header");
    header.appendChild(el("div", "code", escapeHtml(dept.code)));
    header.appendChild(el("h2", null, escapeHtml(dept.name)));
    if (dept.note) header.appendChild(el("p", "note", escapeHtml(dept.note)));
    if (dept.link) {
      const btn = el("a", "drive-btn", "Open whole department Drive ↗");
      btn.href = dept.link; btn.target = "_blank"; btn.rel = "noopener noreferrer";
      header.appendChild(btn);
    }
    wrap.appendChild(header);

    wrap.appendChild(el("h2", "section-title", "Semesters & Electives"));
    const grid = el("div", "card-grid");
    dept.semesters.forEach((sem, i) => {
      const used = usedCourses(sem.courses).length;
      const linkCount = usedCourses(sem.courses).reduce((s, c) => s + CATEGORY_ORDER.filter((k) => c.categories[k].link).length, 0) + (sem.link ? 1 : 0);
      grid.appendChild(buildCard(
        sem.code, sem.name, "", linkCount > 0,
        used > 0 ? used + " course" + (used === 1 ? "" : "s") + " added" : "Not added yet",
        () => navigateInto({ kind: "semester", ref: sem, group: null }), i
      ));
    });
    wrap.appendChild(grid);
    viewRoot.appendChild(wrap);
  }

  function renderFirstYear(entry) {
    viewRoot.innerHTML = "";
    const fy = entry.ref;
    const wrap = el("div", "view-fade");

    const header = el("div", "detail-header");
    header.appendChild(el("div", "code", escapeHtml(fy.code)));
    header.appendChild(el("h2", null, escapeHtml(fy.name)));
    if (fy.note) header.appendChild(el("p", "note", escapeHtml(fy.note)));
    if (fy.link) {
      const btn = el("a", "drive-btn", "Open whole First Year Drive ↗");
      btn.href = fy.link; btn.target = "_blank"; btn.rel = "noopener noreferrer";
      header.appendChild(btn);
    }
    wrap.appendChild(header);
    renderCourseGrid(fy.courses, wrap, (course, idx) =>
      navigateInto({ kind: "course", ref: course, group: null, index: idx })
    );
    viewRoot.appendChild(wrap);
  }

  /* ---------------- SEMESTER view ---------------- */

  function renderSemester(entry) {
    viewRoot.innerHTML = "";
    const sem = entry.ref;
    const wrap = el("div", "view-fade");

    const header = el("div", "detail-header");
    header.appendChild(el("div", "code", escapeHtml(sem.code)));
    header.appendChild(el("h2", null, escapeHtml(sem.name)));
    if (sem.link) {
      const btn = el("a", "drive-btn", "Open whole semester Drive ↗");
      btn.href = sem.link; btn.target = "_blank"; btn.rel = "noopener noreferrer";
      header.appendChild(btn);
    }
    wrap.appendChild(header);
    renderCourseGrid(sem.courses, wrap, (course, idx) =>
      navigateInto({ kind: "course", ref: course, group: null, index: idx })
    );
    viewRoot.appendChild(wrap);
  }

  function renderCourseGrid(courses, wrap, onOpen) {
    const used = [];
    courses.forEach((c, i) => { if (isCourseUsed(c)) used.push([c, i]); });

    if (!used.length) {
      wrap.appendChild(el("div", "empty-state",
        "<strong>No courses added here yet.</strong><br/>Check back soon — courses are added a few at a time."));
      return;
    }

    wrap.appendChild(el("h2", "section-title", "Courses"));
    const grid = el("div", "card-grid");
    used.forEach(([course, idx], i) => {
      const linkCount = CATEGORY_ORDER.filter((k) => course.categories[k].link).length;
      grid.appendChild(buildCard(
        course.code, course.name || "(untitled course)", "", linkCount > 0,
        linkCount + " / 5 linked",
        () => onOpen(course, idx), i
      ));
    });
    wrap.appendChild(grid);
  }

  /* ---------------- COURSE view (category tabs) ---------------- */

  const CATEGORY_META = {
    PYQ: { label: "PYQs" }, LEC: { label: "Lectures" }, TUT: { label: "Tutorials" },
    QUIZ: { label: "Quizzes" }, MISC: { label: "Miscellaneous" }
  };

  function renderCourse(entry) {
    viewRoot.innerHTML = "";
    const course = entry.ref;
    const wrap = el("div", "view-fade");

    const header = el("div", "detail-header");
    header.appendChild(el("div", "code", escapeHtml(course.code || "")));
    header.appendChild(el("h2", null, escapeHtml(course.name || "(untitled course)")));
    wrap.appendChild(header);

    if (!activeCategoryKey) {
      activeCategoryKey = CATEGORY_ORDER.find((k) => course.categories[k].link) || "PYQ";
    }

    const tabs = el("div", "cat-tabs");
    CATEGORY_ORDER.forEach((key) => {
      const cat = course.categories[key];
      const tab = el("button", "cat-tab" + (key === activeCategoryKey ? " active" : ""));
      tab.type = "button";
      const dot = el("span", "dot " + (cat.link ? "ready" : "pending"));
      tab.appendChild(dot);
      tab.appendChild(document.createTextNode(CATEGORY_META[key].label));
      tab.addEventListener("click", () => { activeCategoryKey = key; renderCourse(entry); });
      tabs.appendChild(tab);
    });
    wrap.appendChild(tabs);

    const cat = course.categories[activeCategoryKey];
    const panel = el("div", "cat-panel");
    panel.appendChild(el("h3", null, escapeHtml(CATEGORY_META[activeCategoryKey].label)));
    if (cat.link) {
      const btn = el("a", "drive-btn", "Open in Google Drive ↗");
      btn.href = cat.link; btn.target = "_blank"; btn.rel = "noopener noreferrer";
      panel.appendChild(btn);
    } else {
      panel.appendChild(el("div", "empty-state", "<strong>Not added yet.</strong><br/>This category doesn't have a link yet — check back soon."));
    }
    wrap.appendChild(panel);
    viewRoot.appendChild(wrap);
  }

  /* ---------------- stats ---------------- */

  function renderStats() {
    let filled = countFYLinks();
    let total = countFYTotal();
    SITE_DATA.departments.forEach((d) => {
      filled += countDeptLinks(d);
      total += countDeptTotal(d);
    });
    statsBar.textContent = `${filled} of ${total} possible links added so far`;
  }

  /* ---------------- top-level render ---------------- */

  function render() {
    renderBreadcrumb();
    if (path.length === 0) { renderHome(); return; }
    const last = path[path.length - 1];
    if (last.kind === "department") renderDepartment(last);
    else if (last.kind === "firstYear") renderFirstYear(last);
    else if (last.kind === "semester") renderSemester(last);
    else if (last.kind === "course") renderCourse(last);
  }

  homeLink.addEventListener("click", (e) => { e.preventDefault(); goTo(0); });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && path.length > 0 && palette.classList.contains("hidden") && previewModal.classList.contains("hidden")) {
      goTo(path.length - 1);
    }
  });

  /* ================= SEARCH INDEX ================= */

  function buildIndex() {
    const idx = [];
    function addCourseCategories(course, deptLabel, deptGroup, deptCode, semLabel, semCode, path4hash) {
      CATEGORY_ORDER.forEach((k) => {
        const cat = course.categories[k];
        if (!cat.link) return;
        idx.push({
          link: cat.link,
          categoryKey: k,
          categoryLabel: CATEGORY_META[k].label,
          courseName: course.name, courseCode: course.code,
          deptLabel, deptGroup, deptCode, semLabel, semCode,
          pathHash: path4hash
        });
      });
    }
    // First year
    usedCourses(SITE_DATA.firstYear.courses).forEach((c, i0) => {
      const realIdx = SITE_DATA.firstYear.courses.indexOf(c);
      addCourseCategories(c, "First Year", null, null, null, null, "#/fy/c/" + realIdx);
    });
    // Departments
    SITE_DATA.departments.forEach((dept) => {
      dept.semesters.forEach((sem) => {
        usedCourses(sem.courses).forEach((c) => {
          const realIdx = sem.courses.indexOf(c);
          addCourseCategories(
            c, dept.name, "dept", dept.code, sem.name, sem.code,
            "#/dept/" + encodeURIComponent(dept.code) + "/s/" + encodeURIComponent(sem.code) + "/c/" + realIdx
          );
        });
      });
    });
    return idx;
  }

  function matchScore(entry, words) {
    const text = [
      entry.deptCode, entry.deptLabel, entry.semCode, entry.semLabel,
      entry.courseCode, entry.courseName, entry.categoryLabel
    ].filter(Boolean).join(" ").toLowerCase();

    let score = 0;
    let anyMatch = false;

    words.forEach((w) => {
      let wMatched = false;
      // category synonym match
      for (const key in CATEGORY_SYNONYMS) {
        if (CATEGORY_SYNONYMS[key].some((syn) => syn.includes(w) || w.includes(syn))) {
          if (entry.categoryKey === key) { score += 5; wMatched = true; }
        }
      }
      // department match
      if (entry.deptCode && entry.deptCode.toLowerCase().includes(w)) { score += 4; wMatched = true; }
      if (entry.deptLabel && entry.deptLabel.toLowerCase().includes(w)) { score += 3; wMatched = true; }
      // course match
      if (entry.courseName && entry.courseName.toLowerCase().includes(w)) { score += 6; wMatched = true; }
      if (entry.courseCode && entry.courseCode.toLowerCase().includes(w)) { score += 6; wMatched = true; }
      // generic
      if (text.includes(w)) { score += 1; wMatched = true; }
      if (wMatched) anyMatch = true;
    });

    return anyMatch ? score : 0;
  }

  function search(query) {
    const words = query.toLowerCase().trim().split(/\s+/).filter(Boolean);
    if (!words.length) return [];
    const idx = buildIndex();
    const scored = idx
      .map((e) => ({ e, s: matchScore(e, words) }))
      .filter((x) => x.s > 0)
      .sort((a, b) => b.s - a.s)
      .slice(0, 60)
      .map((x) => x.e);
    return scored;
  }

  /* ================= COMMAND PALETTE ================= */

  const palette = document.getElementById("palette");
  const paletteBackdrop = document.getElementById("paletteBackdrop");
  const paletteInput = document.getElementById("paletteInput");
  const paletteResults = document.getElementById("paletteResults");
  let paletteActiveIndex = -1;
  let paletteCurrentResults = [];

  function openPalette() {
    palette.classList.remove("hidden");
    paletteInput.value = "";
    paletteResults.innerHTML = "";
    paletteActiveIndex = -1;
    paletteCurrentResults = [];
    setTimeout(() => paletteInput.focus(), 10);
  }
  function closePalette() { palette.classList.add("hidden"); }

  function renderPaletteResults(results) {
    paletteCurrentResults = results;
    paletteResults.innerHTML = "";
    if (!paletteInput.value.trim()) {
      paletteResults.appendChild(el("div", "pr-empty", "Try “quiz”, “A2 quiz”, or a course name + category."));
      return;
    }
    if (!results.length) {
      paletteResults.appendChild(el("div", "pr-empty", "No matching links yet. Try a different term."));
      return;
    }
    results.forEach((r, i) => {
      const pathParts = [r.deptLabel, r.semLabel, r.courseName, r.categoryLabel].filter(Boolean);
      const item = el("div", "pr-item" + (i === paletteActiveIndex ? " active" : ""));
      item.appendChild(el("div", "pr-path", escapeHtml(pathParts.slice(0, -1).join(" › "))));
      item.appendChild(el("div", "pr-name", escapeHtml(pathParts[pathParts.length - 1])));
      item.addEventListener("click", () => selectResult(r));
      item.addEventListener("mousemove", () => { paletteActiveIndex = i; highlightActive(); });
      paletteResults.appendChild(item);
    });
  }

  function highlightActive() {
    Array.from(paletteResults.children).forEach((c, i) => c.classList.toggle("active", i === paletteActiveIndex));
  }

  function selectResult(r) {
    closePalette();
    const pathParts = [r.deptLabel, r.semLabel, r.courseName, r.categoryLabel].filter(Boolean);
    openPreview(pathParts.slice(0, -1).join(" › "), pathParts[pathParts.length - 1], r.link, r.pathHash);
  }

  paletteInput.addEventListener("input", () => {
    paletteActiveIndex = -1;
    renderPaletteResults(search(paletteInput.value));
  });

  paletteInput.addEventListener("keydown", (e) => {
    if (e.key === "ArrowDown") { e.preventDefault(); paletteActiveIndex = Math.min(paletteActiveIndex + 1, paletteCurrentResults.length - 1); highlightActive(); }
    else if (e.key === "ArrowUp") { e.preventDefault(); paletteActiveIndex = Math.max(paletteActiveIndex - 1, 0); highlightActive(); }
    else if (e.key === "Enter") { e.preventDefault(); if (paletteCurrentResults[paletteActiveIndex]) selectResult(paletteCurrentResults[paletteActiveIndex]); else if (paletteCurrentResults[0]) selectResult(paletteCurrentResults[0]); }
    else if (e.key === "Escape") { closePalette(); }
  });

  paletteBackdrop.addEventListener("click", closePalette);
  searchTrigger.addEventListener("click", openPalette);

  document.addEventListener("keydown", (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
      e.preventDefault();
      if (palette.classList.contains("hidden")) openPalette(); else closePalette();
    }
    if (e.key === "/" ) {
      const tag = document.activeElement && document.activeElement.tagName;
      const typing = tag === "INPUT" || tag === "TEXTAREA";
      if (!typing) { e.preventDefault(); openPalette(); }
    }
  });

  /* ================= PREVIEW MODAL ================= */

  const previewModal = document.getElementById("previewModal");
  const previewBackdrop = document.getElementById("previewBackdrop");
  const previewPath = document.getElementById("previewPath");
  const previewName = document.getElementById("previewName");
  const previewOpenBtn = document.getElementById("previewOpenBtn");
  const previewCopyBtn = document.getElementById("previewCopyBtn");
  const previewCloseBtn = document.getElementById("previewCloseBtn");

  function openPreview(pathStr, name, link, hashLink) {
    previewPath.textContent = pathStr;
    previewName.textContent = name;
    previewOpenBtn.href = link;
    previewCopyBtn.onclick = () => {
      const fullUrl = location.origin + location.pathname + hashLink;
      navigator.clipboard && navigator.clipboard.writeText(fullUrl).catch(() => {});
      previewCopyBtn.textContent = "Copied!";
      setTimeout(() => { previewCopyBtn.textContent = "Copy link"; }, 1500);
    };
    previewModal.classList.remove("hidden");
  }
  function closePreview() { previewModal.classList.add("hidden"); }
  previewBackdrop.addEventListener("click", closePreview);
  previewCloseBtn.addEventListener("click", closePreview);
  document.addEventListener("keydown", (e) => { if (e.key === "Escape" && !previewModal.classList.contains("hidden")) closePreview(); });

  /* ---------------- go ---------------- */

  restoreFromHash();
  renderStats();
  render();
})();
