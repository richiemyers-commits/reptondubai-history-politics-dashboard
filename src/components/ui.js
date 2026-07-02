import {
  aLevelHistoryReadingList,
  courses,
  destinations,
  home,
  searchIndex,
  skills,
  sixthFormLinks,
  universityPoliticsReadingList
} from "../data/curriculum.js";

export function escapeHtml(value = "") {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export function link(path, label, className = "") {
  return `<a class="${className}" href="${path}" data-link>${escapeHtml(label)}</a>`;
}

export function sectionHeader(kicker, title, copy = "") {
  return `
    <div class="section-heading">
      <p class="kicker">${escapeHtml(kicker)}</p>
      <h2>${escapeHtml(title)}</h2>
      ${copy ? `<p>${escapeHtml(copy)}</p>` : ""}
    </div>
  `;
}

export function destinationCards(items = destinations) {
  return `
    <div class="card-grid destination-grid">
      ${items
        .map(
          (item) => `
            <article class="card destination-card">
              <p class="card-label">${escapeHtml(item.stage)}</p>
              <h3>${escapeHtml(item.title)}</h3>
              <p>${escapeHtml(item.summary)}</p>
              ${link(item.path, `Explore ${item.title}`, "text-link")}
            </article>
          `
        )
        .join("")}
    </div>
  `;
}

export function assessmentCards(items = []) {
  return `
    <div class="card-grid compact-grid">
      ${items
        .map(
          (item) => `
            <article class="card small-card">
              <h3>${escapeHtml(item.title)}</h3>
              <p>${escapeHtml(item.text)}</p>
            </article>
          `
        )
        .join("")}
    </div>
  `;
}

export function timeline(items = []) {
  return `
    <ol class="timeline">
      ${items
        .map(
          (item) => `
            <li>
              <div class="timeline-marker" aria-hidden="true"></div>
              <div>
                <p class="card-label">${escapeHtml(item.title)}</p>
                <h3>${escapeHtml(item.subtitle)}</h3>
                <p>${escapeHtml(item.text)}</p>
              </div>
            </li>
          `
        )
        .join("")}
    </ol>
  `;
}

export function topicCards(items = []) {
  return `
    <div class="card-grid topic-grid">
      ${items
        .map(
          (topic) => `
            <article class="card topic-card">
              <p class="card-label">${escapeHtml(topic.timeline)}</p>
              <h3>${escapeHtml(topic.title)}</h3>
              <p class="question">${escapeHtml(topic.question)}</p>
              <div class="tag-row" aria-label="Vocabulary">
                ${topic.vocabulary.map((word) => `<span>${escapeHtml(word)}</span>`).join("")}
              </div>
            </article>
          `
        )
        .join("")}
    </div>
  `;
}

export function resourceList(resources = {}) {
  const groups = [
    ["Read", resources.read || []],
    ["Watch", resources.watch || []],
    ["Listen", resources.listen || []]
  ];

  return `
    <div class="resource-columns">
      ${groups
        .map(
          ([title, items]) => `
            <section class="resource-column">
              <h3>${title}</h3>
              <ul class="plain-list">
                ${items.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
              </ul>
            </section>
          `
        )
        .join("")}
    </div>
  `;
}

export function downloadCards(items = []) {
  if (!items.length) return "";

  return `
    <div class="card-grid compact-grid">
      ${items
        .map(
          (item) => `
            <article class="card small-card download-card">
              <p class="card-label">Download</p>
              <h3>${escapeHtml(item.title)}</h3>
              <p>${escapeHtml(item.text)}</p>
              <a class="text-link" href="${item.href}" download>Download resource</a>
            </article>
          `
        )
        .join("")}
    </div>
  `;
}

function specificationButton(button) {
  if (typeof button === "string") {
    return `<button class="placeholder-button" type="button" data-placeholder>${escapeHtml(button)}</button>`;
  }

  const downloadAttribute = button.download ? " download" : "";
  const internalAttribute = !button.download && button.href?.startsWith("/") ? " data-link" : "";
  return `<a class="placeholder-button resource-button" href="${button.href}"${downloadAttribute}${internalAttribute}>${escapeHtml(button.title)}</a>`;
}

export function restrictedResourceCards(items = []) {
  if (!items.length) return "";

  return `
    <div class="card-grid compact-grid">
      ${items
        .map(
          (item) => `
            <article class="card small-card restricted-card">
              <p class="card-label">${escapeHtml(item.type)}</p>
              <h3>${escapeHtml(item.title)}</h3>
              <p>${escapeHtml(item.detail)}</p>
              <p class="resource-access">${escapeHtml(item.access)}</p>
            </article>
          `
        )
        .join("")}
    </div>
  `;
}

function currentAffairsTracker(tracker) {
  const fallbackItems = tracker.fallbackHeadlines || [];

  return `
    <section class="section politics-tracker-section">
      <div class="container">
        ${sectionHeader("Live Source Tracker", tracker.title, tracker.note)}
        <div
          class="politics-ticker"
          data-politics-tracker
          data-api-path="${escapeHtml(tracker.apiPath)}"
          data-source-url="${escapeHtml(tracker.sourceUrl)}"
        >
          <div class="ticker-header">
            <div>
              <p class="card-label">Live source</p>
              <h3>${escapeHtml(tracker.sourceName)}</h3>
            </div>
            <a class="text-link" href="${escapeHtml(tracker.sourceUrl)}" target="_blank" rel="noopener noreferrer">Open BBC Politics</a>
          </div>
          <div class="ticker-window" aria-label="Latest BBC Politics headlines" aria-live="polite">
            <div class="ticker-track" data-ticker-track>
              ${fallbackItems.map((item) => tickerFallbackItem(item)).join("")}
            </div>
          </div>
          <p class="ticker-status" data-ticker-status>Loading latest headlines...</p>
        </div>
      </div>
    </section>
  `;
}

function tickerFallbackItem(item) {
  const linkTarget = item.link || "#";
  return `
    <a class="ticker-item" href="${escapeHtml(linkTarget)}" target="_blank" rel="noopener noreferrer">
      <span>${escapeHtml(item.title)}</span>
    </a>
  `;
}

export function coursePage(course) {
  return `
    <section class="page-hero course-hero">
      <div class="hero-image" aria-hidden="true"></div>
      <div class="container hero-content">
        <p class="kicker">${escapeHtml(course.eyebrow)}</p>
        <h1>${escapeHtml(course.title)}</h1>
        <p>${escapeHtml(course.overview)}</p>
        <div class="hero-actions">
          <a class="button primary-button" href="#assessment">Assessment</a>
          <a class="button secondary-button" href="/ask-abe?prompt=${encodeURIComponent(course.askPrompt)}" data-link>Ask Abe</a>
        </div>
      </div>
    </section>

    ${course.currentAffairsTracker ? currentAffairsTracker(course.currentAffairsTracker) : ""}

    <section class="band">
      <div class="container split-section">
        <div>
          ${sectionHeader("Course Overview", "What Students Study", course.why)}
        </div>
        <aside class="note-panel" id="specification">
          <p class="card-label">Specification and Assessment</p>
          <h2>${escapeHtml(course.qualification)}</h2>
          <p>${escapeHtml(course.spec)}</p>
          <div class="button-stack">
            ${course.specificationButtons
              .map((button) => specificationButton(button))
              .join("")}
          </div>
        </aside>
      </div>
    </section>

    <section class="section" id="assessment">
      <div class="container">
        ${sectionHeader("Assessment", "How The Course Is Assessed")}
        ${assessmentCards(course.assessment)}
      </div>
    </section>

    <section class="section paper-band">
      <div class="container">
        ${sectionHeader("Curriculum Journey", "From First Enquiry To Exam Confidence")}
        ${timeline(course.journey)}
      </div>
    </section>

    <section class="section">
      <div class="container">
        ${sectionHeader("Current Topics", "Enquiries, Vocabulary And Timeline Anchors")}
        ${topicCards(course.topics)}
      </div>
    </section>

    ${
      course.yearRoutes
        ? `<section class="section paper-band">
            <div class="container">
              ${sectionHeader("Year Pages", "Detailed KS3 History Pages", "Open the year page for enquiry questions, assessment, parent support and the full curriculum booklet.")}
              ${destinationCards(course.yearRoutes)}
            </div>
          </section>`
        : ""
    }

    ${
      course.downloads
        ? `<section class="section">
            <div class="container">
              ${sectionHeader("Curriculum Booklets", "Downloadable KS3 Resources")}
              ${downloadCards(course.downloads)}
            </div>
          </section>`
        : ""
    }

    ${
      course.folderRoutes
        ? `<section class="section paper-band">
            <div class="container">
              ${sectionHeader("Inside This Area", `${course.title} Folders`, "Use these folders for transition guidance, course resources and supporting material linked to this qualification.")}
              ${destinationCards(course.folderRoutes)}
            </div>
          </section>`
        : ""
    }

    ${
      course.restrictedResources
        ? `<section class="section">
            <div class="container">
              ${sectionHeader("KS4 Resources", "IGCSE Guide And Textbook", "Core course materials are listed here for clarity. Copyrighted or licensed resources should be shared only through approved school access.")}
              ${restrictedResourceCards(course.restrictedResources)}
            </div>
          </section>`
        : ""
    }

    ${course.ideaFocus ? ideaFocus(course.ideaFocus) : ""}
    ${course.ibReadingList ? ibReadingList(course.ibReadingList) : ""}
    ${course.iaGuide ? internalAssessmentGuide(course.iaGuide) : ""}

    <section class="section paper-band">
      <div class="container">
        ${sectionHeader("Revision Support", "What To Practise Next")}
        <div class="support-list">
          ${course.support.map((item) => `<span>${escapeHtml(item)}</span>`).join("")}
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        ${sectionHeader("Read, Watch And Listen", "Wider Learning")}
        ${resourceList(course.resources)}
      </div>
    </section>

    <section class="section parent-strip">
      <div class="container split-section">
        <div>
          ${sectionHeader("Parent Guide", `Supporting ${course.title}`)}
          <ul class="plain-list">
            ${course.parentGuide.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
          </ul>
        </div>
        <aside class="ask-card">
          <img src="/public/assets/abraham-lincoln.jpg" alt="Public domain portrait of Abraham Lincoln" />
          <div>
            <p class="card-label">Ask Abe</p>
            <h3>Course-specific help</h3>
            <p>Start with a question grounded in the department guide.</p>
            ${link(`/ask-abe?prompt=${encodeURIComponent(course.askPrompt)}`, "Ask about this course", "button primary-button")}
          </div>
        </aside>
      </div>
    </section>
  `;
}

function ibReadingList(sections) {
  return `
    <section class="section paper-band">
      <div class="container">
        ${sectionHeader("IB Reading List", "Focused Reading For The Three Exam Areas", "Choose one or two accessible texts first, then build a wider-reading log with arguments, evidence and questions.")}
        <div class="reading-list-grid">
          ${sections.map((section) => ibReadingListCard(section)).join("")}
        </div>
      </div>
    </section>
  `;
}

function ibReadingListCard(section) {
  return `
    <article class="card reading-list-card ${section.items.length > 9 ? "wide" : ""}">
      <p class="card-label">Reading</p>
      <h3>${escapeHtml(section.title)}</h3>
      <p>${escapeHtml(section.description)}</p>
      <ul class="plain-list reading-list">
        ${section.items.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
      </ul>
    </article>
  `;
}

function internalAssessmentGuide(guide) {
  return `
    <section class="section">
      <div class="container">
        ${sectionHeader("Internal Assessment", guide.title, guide.overview)}
        <div class="two-column-cards">
          <div class="ia-detail-grid">
            ${guide.details
              .map(
                (item) => `
                  <article class="card small-card">
                    <h3>${escapeHtml(item.title)}</h3>
                    <p>${escapeHtml(item.text)}</p>
                  </article>
                `
              )
              .join("")}
          </div>
          <aside class="note-panel">
            <p class="card-label">IA Milestones</p>
            <h3>From Question To Reflection</h3>
            <ul class="plain-list">
              ${guide.milestones.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
            </ul>
          </aside>
        </div>
      </div>
    </section>
  `;
}

function ideaFocus(focus) {
  return `
    <section class="section paper-band">
      <div class="container">
        ${sectionHeader("Political Ideas", focus.title)}
        <div class="two-column-cards">
          <article class="card">
            <h3>Key Thinkers</h3>
            <div class="tag-row">${focus.thinkers.map((item) => `<span>${escapeHtml(item)}</span>`).join("")}</div>
          </article>
          <article class="card">
            <h3>Key Debates</h3>
            <ul class="plain-list">${focus.debates.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>
          </article>
        </div>
      </div>
    </section>
  `;
}

export function finder(id = "course-finder") {
  return `
    <form class="finder" data-finder="${id}" role="search">
      <label for="${id}">What are you studying?</label>
      <div class="finder-row">
        <input id="${id}" type="search" placeholder="Search courses, topics or skills" autocomplete="off" />
        <button class="button primary-button" type="submit">Search</button>
      </div>
      <div class="finder-results" data-finder-results aria-live="polite">
        ${searchIndex
          .slice(0, 3)
          .map(
            (item) => `
              <a href="${item.path}" data-link>
                <span>${escapeHtml(item.type)}</span>
                <strong>${escapeHtml(item.title)}</strong>
                <small>${escapeHtml(item.text)}</small>
              </a>
            `
          )
          .join("")}
      </div>
    </form>
  `;
}

function departmentPickPool() {
  const historyPicks = aLevelHistoryReadingList.sections.flatMap((section) =>
    section.items.map((item) => ({
      title: item,
      label: section.title === "Movies to Watch" ? "Watch" : "Read",
      source: "A Level History Reading List",
      category: section.title,
      path: aLevelHistoryReadingList.path,
      image: "/public/assets/magna-carta.jpg",
      imageAlt: "Public domain image of Magna Carta manuscript"
    }))
  );

  const politicsPicks = universityPoliticsReadingList.sections.flatMap((section) =>
    section.items.map((item) => ({
      title: item,
      label: "Read",
      source: "A Level Politics University Reading List",
      category: section.title,
      path: universityPoliticsReadingList.path,
      image: universityPoliticsReadingList.image,
      imageAlt: "University reading table with books, notes and law scales"
    }))
  );

  return [...historyPicks, ...politicsPicks];
}

function weeklyDepartmentPick(date = new Date()) {
  const picks = departmentPickPool();
  const weekStart = startOfWeek(date);
  const weekIndex = Math.floor(weekStart.getTime() / (7 * 24 * 60 * 60 * 1000));
  return picks[weekIndex % picks.length];
}

function startOfWeek(date) {
  const copy = new Date(date.getFullYear(), date.getMonth(), date.getDate());
  const day = copy.getDay() || 7;
  copy.setDate(copy.getDate() - day + 1);
  copy.setHours(0, 0, 0, 0);
  return copy;
}

function upcomingAssessments(items = [], date = new Date()) {
  const today = new Date(date.getFullYear(), date.getMonth(), date.getDate());
  const upcoming = items
    .map((item) => ({
      ...item,
      start: parseLocalDate(item.date),
      end: parseLocalDate(item.endDate || item.date)
    }))
    .filter((item) => item.end >= today)
    .sort((a, b) => a.start - b.start);

  return (upcoming.length ? upcoming : items.map((item) => ({ ...item, start: parseLocalDate(item.date), end: parseLocalDate(item.endDate || item.date) }))).slice(0, 4);
}

function parseLocalDate(value) {
  const [year, month, day] = value.split("-").map(Number);
  return new Date(year, month - 1, day);
}

function formatDateRange(item) {
  const formatter = new Intl.DateTimeFormat("en-GB", { day: "numeric", month: "short" });
  if (item.endDate && item.endDate !== item.date) {
    return `${formatter.format(item.start)} - ${formatter.format(item.end)}`;
  }
  return formatter.format(item.start);
}

function assessmentRows(items) {
  return `
    <div class="assessment-list">
      ${items
        .map(
          (item) => `
            <article class="assessment-row">
              <div class="assessment-date">
                <span>${escapeHtml(formatDateRange(item))}</span>
                <small>${escapeHtml(item.label)}</small>
              </div>
              <div>
                <h3>${escapeHtml(item.title)}</h3>
                <p>${escapeHtml(item.text)}</p>
              </div>
            </article>
          `
        )
        .join("")}
    </div>
  `;
}

function pathwayGraphic(pathway) {
  return `
    <div class="pathway-graphic" aria-label="History pathway from KS3 to sixth form">
      ${pathway.steps
        .map(
          (step) => `
            <a class="path-node" href="${escapeHtml(step.path)}" data-link>
              <span>${escapeHtml(step.title)}</span>
              <small>${escapeHtml(step.stage)}</small>
            </a>
            <span class="path-arrow" aria-hidden="true">→</span>
          `
        )
        .join("")}
      <div class="path-branches">
        ${pathway.branches
          .map(
            (branch) => `
              <a class="path-node branch-node" href="${escapeHtml(branch.path)}" data-link>
                <span>${escapeHtml(branch.title)}</span>
                <small>${escapeHtml(branch.stage)}</small>
              </a>
            `
          )
          .join("")}
      </div>
    </div>
  `;
}

function careerPanels(items = []) {
  return `
    <div class="career-panel-grid" aria-label="Where History and Politics can take students">
      ${items
        .map(
          (item) => `
            <article class="career-panel">
              <h3>${escapeHtml(item.title)}</h3>
              <p>${escapeHtml(item.text)}</p>
            </article>
          `
        )
        .join("")}
    </div>
  `;
}

export function homePage() {
  const weeklyPick = weeklyDepartmentPick();
  const assessmentItems = upcomingAssessments(home.assessmentSchedule);

  return `
    <section class="home-hero">
      <div class="container home-hero-inner">
        <div class="home-copy">
          <p class="kicker">Repton Dubai</p>
          <h1>${escapeHtml(home.heroTitle)}</h1>
          <p class="hero-subtitle">${escapeHtml(home.heroSubtitle)}</p>
          <p>${escapeHtml(home.intro)}</p>
          <div class="hero-actions">
            <a class="button primary-button" href="/#academic-destinations" data-link>Explore Courses</a>
            <a class="button secondary-button" href="/ask-abe" data-link>Ask Abe</a>
          </div>
        </div>
        <aside class="hero-finder">
          ${finder("home-finder")}
        </aside>
      </div>
    </section>

    <section class="section" id="academic-destinations">
      <div class="container">
        ${sectionHeader("Start Here", "Academic Destinations", "Choose the course area that matches your current pathway.")}
        ${destinationCards()}
      </div>
    </section>

    <section class="section pathway-band" id="pathways">
      <div class="container">
        ${sectionHeader("Pathways", "Where Does History Take You?", home.pathway.intro)}
        <div class="pathway-spotlight">
          <div class="pathway-map-panel">
          ${pathwayGraphic(home.pathway)}
          <a class="text-link" href="/university-careers" data-link>Explore university and careers</a>
          </div>
          <aside class="career-outcomes">
            <p class="card-label">Where can this take you?</p>
            ${careerPanels(home.pathway.careers)}
          </aside>
        </div>
      </div>
    </section>

    <section class="section paper-band">
      <div class="container">
        ${sectionHeader("Current Topics", "Featured Enquiries This Term")}
        <div class="card-grid compact-grid">
          ${home.currentTopics
            .map(
              (topic) => `
                <article class="card">
                  <p class="card-label">${escapeHtml(topic.label)}</p>
                  <h3>${escapeHtml(topic.title)}</h3>
                  <p>${escapeHtml(topic.text)}</p>
                  ${link(topic.path, "Open topic area", "text-link")}
                </article>
              `
            )
            .join("")}
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container two-column-cards">
        <article class="feature-panel">
          ${sectionHeader("Assessment Calendar", "Upcoming Assessment Schedule", "Auto-updates from the 2026-27 curriculum and assessment plan.")}
          ${assessmentRows(assessmentItems)}
        </article>
        <article class="feature-panel image-panel">
          <img src="${escapeHtml(weeklyPick.image)}" alt="${escapeHtml(weeklyPick.imageAlt)}" />
          <div>
            <p class="card-label">${escapeHtml(home.monthlyPick.tag)}</p>
            <h3>${escapeHtml(home.monthlyPick.title)}</h3>
            <p class="pick-title">${escapeHtml(weeklyPick.title)}</p>
            <p>${escapeHtml(weeklyPick.source)}: ${escapeHtml(weeklyPick.category)}. ${escapeHtml(home.monthlyPick.text)}</p>
            <a class="text-link" href="${escapeHtml(weeklyPick.path)}" data-link>Open reading list</a>
          </div>
        </article>
      </div>
    </section>

    <section class="section parent-strip">
      <div class="container split-section">
        <div>
          ${sectionHeader("Parents", "Quick Links For Home Support")}
          <div class="quick-links">
            ${home.parentLinks.map((item) => link(item.path, item.label, "button secondary-button")).join("")}
          </div>
        </div>
        <aside class="note-panel">
          <p class="card-label">Academic Integrity</p>
          <h3>Use support wisely</h3>
          <p>Ask Abe can help students understand, revise and plan. It must not replace independent thinking or teacher feedback.</p>
        </aside>
      </div>
    </section>
  `;
}

export function sixthFormPage() {
  const sixthFormCourses = [courses.aLevelHistory, courses.aLevelPolitics, courses.ib].map((course) => ({
    title: course.title,
    path: course.path,
    stage: course.qualification,
    summary: course.overview
  }));

  return `
    <section class="page-hero">
      <div class="hero-image" aria-hidden="true"></div>
      <div class="container hero-content">
        <p class="kicker">Sixth Form</p>
        <h1>History And Politics Pathways</h1>
        <p>Compare A Level History, A Level Politics and IB History, then move into the page that matches your pathway.</p>
      </div>
    </section>
    <section class="section">
      <div class="container">
        ${sectionHeader("Choose A Pathway", "Sixth Form Courses")}
        ${destinationCards(sixthFormCourses)}
      </div>
    </section>
    <section class="section paper-band">
      <div class="container">
        ${sectionHeader("Shared Habits", "What Successful Sixth Form Students Do")}
        <div class="support-list">
          <span>Read beyond the lesson</span>
          <span>Track examples and evidence</span>
          <span>Plan before writing</span>
          <span>Respond to feedback</span>
          <span>Revise with timed practice</span>
        </div>
      </div>
    </section>
  `;
}

export function skillsPage() {
  return `
    <section class="page-hero">
      <div class="hero-image" aria-hidden="true"></div>
      <div class="container hero-content">
        <p class="kicker">Skills & Revision</p>
        <h1>Practise The Work Historians And Political Thinkers Actually Do</h1>
        <p>Filter by qualification, then use the guidance to choose a targeted revision task.</p>
      </div>
    </section>
    <section class="section">
      <div class="container">
        <div class="filter-bar" data-skill-filters>
          <button type="button" class="filter-button active" data-filter="All">All</button>
          <button type="button" class="filter-button" data-filter="KS3">KS3</button>
          <button type="button" class="filter-button" data-filter="IGCSE">IGCSE</button>
          <button type="button" class="filter-button" data-filter="A Level">A Level</button>
          <button type="button" class="filter-button" data-filter="IB">IB</button>
        </div>
        <div class="card-grid topic-grid" data-skill-grid>
          ${skills
            .map(
              (skill) => `
                <article class="card skill-card" data-tags="${escapeHtml(skill.tags.join(","))}">
                  <div class="tag-row">${skill.tags.map((tag) => `<span>${escapeHtml(tag)}</span>`).join("")}</div>
                  <h3>${escapeHtml(skill.title)}</h3>
                  <p>${escapeHtml(skill.text)}</p>
                </article>
              `
            )
            .join("")}
        </div>
      </div>
    </section>
  `;
}

export function buildShell(content, currentPath) {
  const navLinks = navigationMarkup(currentPath);
  return `
    <header class="site-header">
      <div class="topbar">
        <a class="brand" href="/" data-link aria-label="Repton Dubai History and Politics home">
          <img src="/public/assets/repton-dubai-logo.jpg" alt="Repton Dubai logo" />
          <span>
            <strong>History & Politics</strong>
            <small>Repton Dubai</small>
          </span>
        </a>
        <button class="menu-button" type="button" aria-expanded="false" aria-controls="site-nav">Menu</button>
        <nav class="site-nav" id="site-nav" aria-label="Main navigation">
          ${navLinks}
        </nav>
        <form class="header-search" data-finder="global-finder" role="search">
          <label class="sr-only" for="global-finder">Search the site</label>
          <input id="global-finder" type="search" placeholder="Search" autocomplete="off" />
          <div class="header-results" data-finder-results aria-live="polite"></div>
        </form>
      </div>
    </header>
    <main id="main">
      ${content}
    </main>
    <footer class="site-footer">
      <div class="container footer-grid">
        <div>
          <img src="/public/assets/repton-dubai-logo.jpg" alt="Repton Dubai logo" />
          <p>Repton Dubai History & Politics curriculum hub.</p>
        </div>
        <div>
          <h2>Sixth Form</h2>
          ${sixthFormLinks.map((item) => link(item.path, item.label, "footer-link")).join("")}
        </div>
        <div>
          <h2>Support</h2>
          ${link("/skills-revision", "Skills & Revision", "footer-link")}
          ${link("/igcse-history/year-9-into-10", "GCSE Preparation", "footer-link")}
          ${link("/university-careers", "University & Careers", "footer-link")}
          ${link("/parents", "Parents", "footer-link")}
          ${link("/ask-abe", "Ask Abe", "footer-link")}
        </div>
      </div>
    </footer>
  `;
}

function navigationMarkup(currentPath) {
  const ks3Active = ["/ks3-history", "/year-7-history", "/year-8-history", "/year-9-history"].includes(currentPath);
  const igcseActive = ["/igcse-history", "/igcse-history/year-9-into-10", "/gcse-history-advice"].includes(currentPath);
  const enrichmentActive = ["/enrichment", "/university-careers"].includes(currentPath);

  return `
    <a href="/" data-link ${currentPath === "/" ? 'aria-current="page"' : ""}>Home</a>
    <div class="nav-group">
      <a href="/ks3-history" data-link ${ks3Active ? 'aria-current="page"' : ""}>KS3 History</a>
      <div class="nav-menu">
        ${link("/year-7-history", "Year 7 History")}
        ${link("/year-8-history", "Year 8 History")}
        ${link("/year-9-history", "Year 9 History")}
      </div>
    </div>
    <div class="nav-group">
      <a href="/igcse-history" data-link ${igcseActive ? 'aria-current="page"' : ""}>IGCSE History</a>
      <div class="nav-menu">
        ${link("/igcse-history/year-9-into-10", "Year 9 Into Year 10")}
      </div>
    </div>
    <div class="nav-group">
      <a href="/sixth-form" data-link ${currentPath === "/sixth-form" ? 'aria-current="page"' : ""}>Sixth Form</a>
      <div class="nav-menu">
        ${sixthFormLinks.map((item) => link(item.path, item.label)).join("")}
      </div>
    </div>
    <a href="/skills-revision" data-link ${currentPath === "/skills-revision" ? 'aria-current="page"' : ""}>Skills & Revision</a>
    <div class="nav-group">
      <a href="/enrichment" data-link ${enrichmentActive ? 'aria-current="page"' : ""}>Enrichment</a>
      <div class="nav-menu">
        ${link("/university-careers", "University & Careers")}
      </div>
    </div>
    <a href="/parents" data-link ${currentPath === "/parents" ? 'aria-current="page"' : ""}>Parents</a>
    <a href="/ask-abe" data-link ${currentPath === "/ask-abe" ? 'aria-current="page"' : ""}>Ask Abe</a>
  `;
}
