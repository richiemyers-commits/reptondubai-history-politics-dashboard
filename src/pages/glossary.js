import { glossaryCourses, filterGlossary } from '../data/glossary.js';
import { escapeHtml } from '../components/ui.js';

const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

export function glossaryPage() {
  return `<section class="section glossary-page"><div class="container">
    <p class="kicker">Reading, working and writing</p>
    <h1>History and Politics Key Term Glossary</h1>
    <p class="glossary-intro">Check a meaning, then use the term precisely in your own explanation. Search terms, definitions and examples, or browse by topic and letter.</p>
    <div class="glossary-tabs" role="tablist" aria-label="Choose your course">
      ${glossaryCourses.map((course, i) => `<button type="button" role="tab" id="tab-${course.id}" aria-controls="glossary-panel" aria-selected="${i === 0}" tabindex="${i === 0 ? 0 : -1}" data-glossary-course="${course.id}">${escapeHtml(course.label)}</button>`).join('')}
    </div>
    <div id="glossary-panel" role="tabpanel" aria-labelledby="tab-ks3">
      <p class="glossary-scope" data-glossary-scope></p>
      <div class="glossary-controls">
        <div><label for="glossary-search">Search this course</label><input id="glossary-search" type="search" placeholder="Try sovereignty, rebellion or source value" autocomplete="off" /></div>
        <div><label for="glossary-topic">Topic</label><select id="glossary-topic"><option value="">All topics</option></select></div>
        <button class="button secondary-button" type="button" data-glossary-clear>Clear filters</button>
      </div>
      <nav class="glossary-alphabet" aria-label="Filter glossary by initial letter" data-glossary-alphabet></nav>
      <p class="glossary-count" role="status" aria-live="polite" data-glossary-count></p>
      <div data-glossary-results></div>
    </div>
    <details class="glossary-sources"><summary>Course guides and using this glossary</summary>
      <p>Definitions are written for pupils and describe terms in their historical or political context. Examples illustrate usage; they are not model exam answers. Select precise evidence and explain how it supports your argument.</p>
      <p>KS3 topics follow the department's Year 7, Year 8 and Year 9 booklets. Examination topics follow the course areas on this site; use your teacher's guidance and your cohort's specification for assessment requirements.</p>
      <ul>
        <li>KS3 booklets: <a href="/public/resources/year-7-curriculum-booklet.docx">Year 7</a>, <a href="/public/resources/year-8-curriculum-booklet.docx">Year 8</a>, <a href="/public/resources/year-9-curriculum-booklet.docx">Year 9</a>.</li>
        <li><a href="https://www.cambridgeinternational.org/programmes-and-qualifications/cambridge-igcse-history-0470/" target="_blank" rel="noopener noreferrer">Cambridge IGCSE History syllabuses</a>.</li>
        <li><a href="https://qualifications.pearson.com/en/qualifications/edexcel-a-levels/history-2015.html" target="_blank" rel="noopener noreferrer">Pearson Edexcel A Level History</a> and <a href="https://qualifications.pearson.com/en/qualifications/edexcel-a-levels/politics-2017.html" target="_blank" rel="noopener noreferrer">A Level Politics</a>.</li>
        <li><a href="https://ibo.org/university-admission/latest-curriculum-updates/history-updates/" target="_blank" rel="noopener noreferrer">IB History curriculum update</a>: the four specified concepts for first assessment in 2028 are included.</li>
      </ul>
      <a href="/literacy" data-link>History and Politics Literacy Guide</a>
    </details>
  </div></section>`;
}

export function wireGlossary() {
  const panel = document.querySelector('#glossary-panel');
  if (!panel) return;
  const tabs = [...document.querySelectorAll('[data-glossary-course]')];
  const search = document.querySelector('#glossary-search');
  const topics = document.querySelector('#glossary-topic');
  const letters = document.querySelector('[data-glossary-alphabet]');
  const count = document.querySelector('[data-glossary-count]');
  const results = document.querySelector('[data-glossary-results]');
  const params = new URLSearchParams(window.location.search);
  let selected = glossaryCourses.find(course => course.id === params.get('course')) || glossaryCourses[0];
  let letter = '';
  search.value = params.get('q') || '';

  function update() {
    const available = new Set(filterGlossary(selected.id, search.value, topics.value).map(entry => entry.term[0].toUpperCase()));
    letters.innerHTML = `<button type="button" data-letter="" aria-pressed="${!letter}">All</button>` + alphabet.map(initial => `<button type="button" data-letter="${initial}" aria-pressed="${initial === letter}" ${available.has(initial) ? '' : 'disabled'}>${initial}</button>`).join('');
    const matches = filterGlossary(selected.id, search.value, topics.value, letter);
    count.textContent = `${matches.length} of ${selected.entries.length} terms · ${selected.label}${letter ? ` · ${letter}` : ''}`;
    results.innerHTML = matches.length ? alphabet.map(initial => {
      const group = matches.filter(entry => entry.term[0].toUpperCase() === initial);
      if (!group.length) return '';
      return `<section class="glossary-letter-group" aria-labelledby="glossary-letter-${initial}"><h2 id="glossary-letter-${initial}">${initial}</h2><dl class="glossary-entries">${group.map(entry => `<div class="glossary-entry"><dt>${escapeHtml(entry.term)}<span>${escapeHtml(entry.topic)}</span></dt><dd><p>${escapeHtml(entry.definition)}</p>${entry.example ? `<p class="glossary-example"><strong>In practice:</strong> ${escapeHtml(entry.example)}</p>` : ''}</dd></div>`).join('')}</dl></section>`;
    }).join('') : '<p class="glossary-empty">No terms match these filters. Try a shorter search, another topic or Clear filters.</p>';
    const url = new URL(window.location.href);
    url.searchParams.set('course', selected.id);
    if (search.value.trim()) url.searchParams.set('q', search.value.trim()); else url.searchParams.delete('q');
    window.history.replaceState({}, '', `${url.pathname}${url.search}`);
  }

  function select(courseId) {
    selected = glossaryCourses.find(course => course.id === courseId) || glossaryCourses[0];
    tabs.forEach(tab => {
      const active = tab.dataset.glossaryCourse === selected.id;
      tab.setAttribute('aria-selected', String(active));
      tab.tabIndex = active ? 0 : -1;
    });
    panel.setAttribute('aria-labelledby', `tab-${selected.id}`);
    document.querySelector('[data-glossary-scope]').textContent = selected.scope;
    topics.innerHTML = '<option value="">All topics</option>' + [...new Set(selected.entries.map(entry => entry.topic))].sort().map(topic => `<option value="${escapeHtml(topic)}">${escapeHtml(topic)}</option>`).join('');
    letter = '';
    update();
  }

  tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => select(tab.dataset.glossaryCourse));
    tab.addEventListener('keydown', event => {
      let target;
      if (event.key === 'ArrowRight') target = (index + 1) % tabs.length;
      if (event.key === 'ArrowLeft') target = (index + tabs.length - 1) % tabs.length;
      if (event.key === 'Home') target = 0;
      if (event.key === 'End') target = tabs.length - 1;
      if (target === undefined) return;
      event.preventDefault();
      tabs[target].focus();
      select(tabs[target].dataset.glossaryCourse);
    });
  });
  search.addEventListener('input', () => { letter = ''; update(); });
  topics.addEventListener('change', () => { letter = ''; update(); });
  letters.addEventListener('click', event => {
    const button = event.target.closest('[data-letter]');
    if (!button || button.disabled) return;
    letter = button.dataset.letter;
    update();
    letters.querySelector(`[data-letter="${letter}"]`)?.focus();
  });
  document.querySelector('[data-glossary-clear]').addEventListener('click', () => {
    search.value = ''; topics.value = ''; letter = ''; update(); search.focus();
  });
  select(selected.id);
}
