import { glossaryPage, wireGlossary } from "./pages/glossary.js";
import { searchIndex, askAbeFaq } from "./data/curriculum.js";
import { buildShell, escapeHtml } from "./components/ui.js";
import { routes } from "./pages/routes.js";

searchIndex.push({ title: "History and Politics Key Term Glossary", type: "Student tool", text: "A–Z definitions for KS3, IGCSE, IB History, Pearson Edexcel A Level History and Politics", path: "/glossary" });
searchIndex.push({ title: "Guide to writing 30-mark Politics essays", type: "A Level Politics student guide", text: "AO1 AO2 AO3 planning answer the question examples evidence judgement UK source questions USA Paper 3A", path: "/a-level-politics/30-mark-essay-guide" });

routes["/glossary"] = glossaryPage;
const glossaryStyles = document.createElement("link");
glossaryStyles.rel = "stylesheet";
glossaryStyles.href = "/src/pages/glossary.css";
document.head.append(glossaryStyles);
const essayStyles = document.createElement("link");
essayStyles.rel = "stylesheet";
essayStyles.href = "/src/pages/politics-essay-guide.css";
document.head.append(essayStyles);

const app = document.querySelector("#app");

function getPath() {
  const path = window.location.pathname.replace(/\/$/, "") || "/";
  return routes[path] ? path : "/";
}

function render() {
  const path = getPath();
  const route = routes[path] || routes["/"];
  app.innerHTML = buildShell(route(), path);
  const literacyLink = app.querySelector('.site-nav a[href="/literacy"]');
  if (literacyLink) literacyLink.insertAdjacentHTML("afterend", `<a href="/glossary" data-link ${path === "/glossary" ? 'aria-current="page"' : ""}>Glossary</a>`);
  document.title = pageTitle(path);
  wireLinks();
  wireMenu();
  wireFinders();
  wirePlaceholders();
  wireSkillFilters();
  wireGlossary();
  wirePoliticsTicker();
  wireAskAbe();
  restorePromptFromUrl();
  if (window.location.hash) {
    requestAnimationFrame(() => document.querySelector(window.location.hash)?.scrollIntoView());
  } else {
    window.scrollTo({ top: 0, behavior: "instant" });
  }
}

function pageTitle(path) {
  const titles = {
    "/glossary": "History and Politics Key Term Glossary | Repton Dubai",
    "/literacy": "History and Politics Literacy Guide | Repton Dubai",
    "/literacy/reading-lists": "KS3–KS5 Reading Lists | Repton Dubai",
    "/": "Repton Dubai History & Politics",
    "/ks3-history": "KS3 History | Repton Dubai",
    "/year-7-history": "Year 7 History | Repton Dubai",
    "/year-8-history": "Year 8 History | Repton Dubai",
    "/year-9-history": "Year 9 History | Repton Dubai",
    "/igcse-history": "IGCSE History | Repton Dubai",
    "/igcse-history/year-10-pearson": "Year 10 Pearson Edexcel IGCSE History | Repton Dubai",
    "/igcse-history/year-11-cie": "Year 11 Cambridge CIE IGCSE History | Repton Dubai",
    "/igcse-history/year-9-into-10": "Year 9 Into Year 10 IGCSE History | Repton Dubai",
    "/gcse-history-advice": "Year 9 Into Year 10 IGCSE History | Repton Dubai",
    "/sixth-form": "Sixth Form | Repton Dubai History & Politics",
    "/a-level-history": "A Level History | Repton Dubai",
    "/a-level-history/reading-list": "A Level History Reading List | Repton Dubai",
    "/a-level-politics": "A Level Politics | Repton Dubai",
    "/a-level-politics/30-mark-essay-guide": "Guide to writing 30-mark Politics essays | Repton Dubai",
    "/ib-history": "IB History | Repton Dubai",
    "/skills-revision": "Skills & Revision | Repton Dubai",
    "/enrichment": "Enrichment | Repton Dubai",
    "/university-careers": "University & Careers | Repton Dubai",
    "/university-politics-reading-list": "Politics, PPE And Law Reading List | Repton Dubai",
    "/parents": "Parents | Repton Dubai History & Politics",
    "/ask-abe": "Ask Abe | Repton Dubai History & Politics"
  };
  return titles[path] || titles["/"];
}

function wireLinks() {
  document.querySelectorAll("a[data-link]").forEach((anchor) => {
    anchor.addEventListener("click", (event) => {
      const url = new URL(anchor.href);
      if (url.origin !== window.location.origin) return;
      event.preventDefault();
      window.history.pushState({}, "", `${url.pathname}${url.search}${url.hash}`);
      render();
      if (url.hash) {
        requestAnimationFrame(() => document.querySelector(url.hash)?.scrollIntoView());
      }
    });
  });
}

function wireMenu() {
  const button = document.querySelector(".menu-button");
  const nav = document.querySelector("#site-nav");
  if (!button || !nav) return;

  button.addEventListener("click", () => {
    const expanded = button.getAttribute("aria-expanded") === "true";
    button.setAttribute("aria-expanded", String(!expanded));
    nav.classList.toggle("open", !expanded);
  });
}

function wireFinders() {
  document.querySelectorAll("[data-finder]").forEach((form) => {
    const input = form.querySelector("input");
    const results = form.querySelector("[data-finder-results]");
    if (!input || !results) return;

    const update = () => {
      const query = input.value.trim().toLowerCase();
      form.classList.toggle("has-query", Boolean(query));
      const matches = query
        ? searchIndex
            .filter((item) => `${item.title} ${item.type} ${item.text}`.toLowerCase().includes(query))
            .slice(0, 7)
        : searchIndex.slice(0, form.classList.contains("header-search") ? 4 : 3);
      results.innerHTML = matches.length ? matches.map(resultItem).join("") : `<p class="empty-state">No matches yet. Try a course, paper or topic.</p>`;
      wireLinks();
    };

    input.addEventListener("input", update);
    input.addEventListener("focus", update);
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const first = results.querySelector("a");
      if (first) first.click();
    });
    update();
  });
}

function resultItem(item) {
  return `
    <a href="${item.path}" data-link>
      <span>${escapeHtml(item.type)}</span>
      <strong>${escapeHtml(item.title)}</strong>
      <small>${escapeHtml(item.text)}</small>
    </a>
  `;
}

function wirePlaceholders() {
  document.querySelectorAll("[data-placeholder]").forEach((button) => {
    button.addEventListener("click", () => {
      button.textContent = "Approved link to be added";
      button.classList.add("acknowledged");
    });
  });
}

function wireSkillFilters() {
  const filterBar = document.querySelector("[data-skill-filters]");
  const cards = [...document.querySelectorAll("[data-skill-grid] .skill-card")];
  if (!filterBar || !cards.length) return;

  filterBar.addEventListener("click", (event) => {
    const button = event.target.closest("[data-filter]");
    if (!button) return;
    const filter = button.dataset.filter;
    filterBar.querySelectorAll("[data-filter]").forEach((item) => item.classList.remove("active"));
    button.classList.add("active");

    cards.forEach((card) => {
      const visible = filter === "All" || card.dataset.tags.includes(filter);
      card.hidden = !visible;
    });
  });
}

function wirePoliticsTicker() {
  document.querySelectorAll("[data-politics-tracker]").forEach(tracker => {
    const track = tracker.querySelector("[data-ticker-track]");
    const status = tracker.querySelector("[data-ticker-status]");
    const refresh = tracker.querySelector("[data-news-refresh]");
    const { apiPath, sourceUrl, sourceName } = tracker.dataset;
    if (!track || !status || !apiPath || !refresh) return;
    const load = async () => {
      refresh.disabled = true;
      status.textContent = "Loading headlines…";
      tracker.setAttribute("aria-busy", "true");
      try {
        const response = await fetch(apiPath, { headers: { Accept: "application/json" }, signal: AbortSignal.timeout(20000) });
        if (!response.ok) throw Error("Headlines unavailable");
        const data = await response.json();
        const host = new URL(sourceUrl).hostname.replace(/^www\./, "");
        const headlines = (Array.isArray(data.headlines) ? data.headlines : []).filter(item => {
          try { const url = new URL(item.link); return item.title && url.protocol === "https:" && (url.hostname === host || url.hostname.endsWith("." + host) || (sourceName === "BBC Politics" && ["www.bbc.co.uk", "bbc.co.uk"].includes(url.hostname))); } catch { return false; }
        }).slice(0, 10);
        if (!headlines.length) throw Error("No headlines");
        if (!tracker.isConnected) return;
        track.innerHTML = headlines.map(item => `<li><a href="${escapeHtml(item.link)}" target="_blank" rel="noopener noreferrer">${escapeHtml(item.title)}</a>${item.pubDate ? `<time datetime="${escapeHtml(item.pubDate)}">${escapeHtml(item.dateOnly ? new Intl.DateTimeFormat("en-GB", {dateStyle: "medium", timeZone: "UTC"}).format(new Date(item.pubDate)) : formatFeedDate(item.pubDate))}</time>` : ""}</li>`).join("");
        status.textContent = `Headlines checked ${formatFeedDate(data.updated)} · refreshed on opening; cached for up to 5 minutes.`;
      } catch {
        if (!tracker.isConnected) return;
        status.textContent = track.children.length ? `Could not refresh ${sourceName}. Previously loaded headlines remain below; open the publisher to check its latest coverage.` : `${sourceName} headlines are temporarily unavailable. Use the publisher link below for the latest stories.`;
      } finally {
        refresh.disabled = false;
        tracker.removeAttribute("aria-busy");
      }
    };
    refresh.addEventListener("click", load);
    load();
  });
}

function formatFeedDate(value) {
  const date = new Date(value);
  if (!value || Number.isNaN(date.getTime())) return "recently";

  return new Intl.DateTimeFormat("en-GB", {
    dateStyle: "medium",
    timeStyle: "short"
  }).format(date);
}

function wireAskAbe() {
  const form = document.querySelector("[data-chat-form]");
  const messages = document.querySelector("[data-chat-messages]");
  if (!form || !messages) return;

  document.querySelectorAll("[data-prompt]").forEach((button) => {
    button.addEventListener("click", () => {
      form.question.value = button.dataset.prompt;
      form.requestSubmit();
    });
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const question = form.question.value.trim();
    if (!question) return;
    appendMessage(messages, "you", "You", question);
    appendMessage(messages, "abe", "Ask Abe", answerQuestion(question));
    form.reset();
    messages.scrollTop = messages.scrollHeight;
  });
}

function appendMessage(container, role, speaker, text) {
  const message = document.createElement("article");
  message.className = `message ${role}`;
  message.innerHTML = `<p class="speaker">${escapeHtml(speaker)}</p><p>${escapeHtml(text)}</p>`;
  container.append(message);
}

function answerQuestion(question) {
  const cleanQuestion = question.toLowerCase();
  const scored = askAbeFaq
    .map((item) => ({
      item,
      score: item.keywords.reduce((total, keyword) => total + (cleanQuestion.includes(keyword) ? 1 : 0), 0)
    }))
    .sort((a, b) => b.score - a.score);

  if (scored[0]?.score > 0) {
    return scored[0].item.answer;
  }

  return "I can answer from the local Repton History and Politics FAQ dataset. Try asking about KS3, IGCSE, A Level History, A Level Politics, IB History, source skills, essays or revision planning.";
}

function restorePromptFromUrl() {
  const params = new URLSearchParams(window.location.search);
  const prompt = params.get("prompt");
  const form = document.querySelector("[data-chat-form]");
  if (!prompt || !form) return;
  form.question.value = prompt;
}

window.addEventListener("popstate", render);
render();
