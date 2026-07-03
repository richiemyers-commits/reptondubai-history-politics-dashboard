import {
  aLevelHistoryReadingList,
  askAbeFaq,
  courses,
  enrichment,
  gcsePreparation,
  ks3YearPages,
  parentGuide,
  universityCareers,
  universityPoliticsReadingList
} from "../data/curriculum.js";
import {
  assessmentCards,
  coursePage,
  escapeHtml,
  homePage,
  sectionHeader,
  sixthFormPage,
  skillsPage
} from "../components/ui.js";

export const routes = {
  "/": homePage,
  "/ks3-history": () => coursePage(courses.ks3),
  "/year-7-history": () => ks3YearPage(ks3YearPages["year-7"]),
  "/year-8-history": () => ks3YearPage(ks3YearPages["year-8"]),
  "/year-9-history": () => ks3YearPage(ks3YearPages["year-9"]),
  "/igcse-history": () => coursePage(courses.igcse),
  "/igcse-history/year-9-into-10": gcseAdvicePage,
  "/gcse-history-advice": gcseAdvicePage,
  "/sixth-form": sixthFormPage,
  "/a-level-history": () => coursePage(courses.aLevelHistory),
  "/a-level-history/reading-list": aLevelHistoryReadingListPage,
  "/a-level-politics": () => coursePage(courses.aLevelPolitics),
  "/ib-history": () => coursePage(courses.ib),
  "/skills-revision": skillsPage,
  "/enrichment": enrichmentPage,
  "/university-careers": universityCareersPage,
  "/university-politics-reading-list": universityPoliticsReadingListPage,
  "/parents": parentsPage,
  "/ask-abe": askAbePage
};

function ks3YearPage(year) {
  return `
    <section class="page-hero">
      <div class="hero-image" aria-hidden="true"></div>
      <div class="container hero-content">
        <p class="kicker">${escapeHtml(year.eyebrow)}</p>
        <h1>${escapeHtml(year.title)}</h1>
        <p>${escapeHtml(year.overview)}</p>
        <div class="hero-actions">
          <a class="button primary-button" href="${year.downloadHref}" download>Download Booklet</a>
          ${year.path === "/year-9-history" ? `<a class="button secondary-button" href="${gcsePreparation.path}" data-link>GCSE Advice</a>` : `<a class="button secondary-button" href="/ks3-history" data-link>Back to KS3</a>`}
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container split-section">
        <div>
          ${sectionHeader("Course Overview", "What Students Study", year.overview)}
        </div>
        <aside class="note-panel">
          <p class="card-label">Assessment</p>
          <h2>How Progress Is Checked</h2>
          <p>${escapeHtml(year.assessment)}</p>
        </aside>
      </div>
    </section>

    <section class="section paper-band">
      <div class="container">
        ${sectionHeader("Enquiry Map", "Half-term Questions And Assessment")}
        <div class="card-grid topic-grid">
          ${year.enquiries
            .map(
              (item) => `
                <article class="card">
                  <p class="card-label">${escapeHtml(item.title)}</p>
                  <h3>${escapeHtml(item.question)}</h3>
                  <p>${escapeHtml(item.assessment)}</p>
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
          ${sectionHeader("Home Learning", "What To Expect")}
          <p class="lead-copy">${escapeHtml(year.homeLearning)}</p>
          <div class="support-list">${year.skills.map((skill) => `<span>${escapeHtml(skill)}</span>`).join("")}</div>
        </article>
        <article class="feature-panel">
          ${sectionHeader("Cross-curricular Links", "Where The Learning Connects")}
          <ul class="plain-list">${year.crossCurricular.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>
        </article>
      </div>
    </section>

    <section class="section parent-strip">
      <div class="container split-section">
        <div>
          ${sectionHeader("Parent Support", `Helping With ${year.title}`)}
          <ul class="plain-list">${year.parentSupport.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>
        </div>
        <aside class="note-panel">
          <p class="card-label">Curriculum Booklet</p>
          <h3>${escapeHtml(year.bookletTitle)}</h3>
          <p>The original booklet is included as a local download for students and parents.</p>
          <a class="button primary-button" href="${year.downloadHref}" download>Download booklet</a>
        </aside>
      </div>
    </section>
  `;
}

function gcseAdvicePage() {
  return `
    <section class="page-hero">
      <div class="hero-image" aria-hidden="true"></div>
      <div class="container hero-content">
        <p class="kicker">${escapeHtml(gcsePreparation.eyebrow)}</p>
        <h1>${escapeHtml(gcsePreparation.title)}</h1>
        <p>${escapeHtml(gcsePreparation.overview)}</p>
        <div class="hero-actions">
          <a class="button primary-button" href="${gcsePreparation.downloadHref}" download>Download Pre-reading</a>
          <a class="button secondary-button" href="/igcse-history" data-link>Open IGCSE History</a>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container split-section">
        <div>
          ${sectionHeader("Course Information", "What Students Are Preparing For")}
          <div class="support-list">
            <span>${escapeHtml(gcsePreparation.examBoard)}</span>
            <span>${escapeHtml(gcsePreparation.textbook)}</span>
          </div>
        </div>
        <aside class="note-panel">
          <p class="card-label">Download</p>
          <h3>${escapeHtml(gcsePreparation.downloadTitle)}</h3>
          <p>The full Year 9 into Year 10 support deck is available for students and parents.</p>
          <a class="button primary-button" href="${gcsePreparation.downloadHref}" download>Download PowerPoint</a>
        </aside>
      </div>
    </section>

    <section class="section paper-band">
      <div class="container">
        ${sectionHeader("Summer Reading", "Books And Online Starting Points")}
        <div class="two-column-cards">
          <article class="card">
            <h3>Suggested Reading</h3>
            <ul class="plain-list">${gcsePreparation.reading.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>
          </article>
          <article class="card">
            <h3>Useful Websites</h3>
            <ul class="plain-list">${gcsePreparation.websites.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>
          </article>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container two-column-cards">
        <article class="feature-panel">
          ${sectionHeader("Student Advice", "How To Get Ready")}
          <ul class="plain-list">${gcsePreparation.studentAdvice.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>
        </article>
        <article class="feature-panel">
          ${sectionHeader("Parent Advice", "How To Support The Transition")}
          <ul class="plain-list">${gcsePreparation.parentAdvice.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>
        </article>
      </div>
    </section>
  `;
}

function enrichmentPage() {
  return `
    <section class="page-hero">
      <div class="hero-image" aria-hidden="true"></div>
      <div class="container hero-content">
        <p class="kicker">Enrichment</p>
        <h1>History And Politics Beyond The Lesson</h1>
        <p>Clubs, debate, competitions, trips and careers that help students use the subject in the wider world.</p>
      </div>
    </section>
    <section class="section">
      <div class="container">
        ${sectionHeader("Opportunities", "What Students Can Join")}
        <div class="card-grid topic-grid">
          ${enrichment
            .map(
              (item) => `
                <article class="card">
                  <h3>${escapeHtml(item.title)}</h3>
                  <p>${escapeHtml(item.text)}</p>
                </article>
              `
            )
            .join("")}
        </div>
      </div>
    </section>
    <section class="section paper-band">
      <div class="container">
        <div>
          ${sectionHeader("Careers", "Where History And Politics Can Lead")}
          <p class="lead-copy">Students develop evidence handling, argument, judgement and communication. Those habits are valuable in law, diplomacy, journalism, public policy, business, heritage, education and international relations.</p>
          <div class="hero-actions">
            <a class="button secondary-button" href="/university-careers" data-link>University and careers</a>
          </div>
        </div>
      </div>
    </section>
  `;
}

function universityCareersPage() {
  return `
    <section class="page-hero">
      <div class="hero-image" aria-hidden="true"></div>
      <div class="container hero-content">
        <p class="kicker">${escapeHtml(universityCareers.eyebrow)}</p>
        <h1>${escapeHtml(universityCareers.title)}</h1>
        <p>${escapeHtml(universityCareers.overview)}</p>
      </div>
    </section>

    <section class="section alumni-spotlight">
      <div class="container">
        ${sectionHeader("Former Pupil Voices", "Where The Subjects Took Them", "Sample testimonial wording for alumni now studying History and Politics-related degrees at university.")}
        <div class="testimonial-grid">
          ${universityCareers.testimonials
            .map(
              (item) => `
                <article class="testimonial-card">
                  <div class="testimonial-avatar" aria-hidden="true">${escapeHtml(item.name.charAt(0))}</div>
                  <div>
                    <p class="card-label">${escapeHtml(item.label)}</p>
                    <h3>${escapeHtml(item.name)} - ${escapeHtml(item.subject)}</h3>
                    <blockquote>${escapeHtml(item.quote)}</blockquote>
                    <p>${escapeHtml(item.detail)}</p>
                  </div>
                </article>
              `
            )
            .join("")}
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        ${sectionHeader("University Study", "Possible Degree Routes")}
        <div class="card-grid compact-grid">
          ${universityCareers.universityRoutes
            .map(
              (route) => `
                <article class="card small-card">
                  <h3>${escapeHtml(route.title)}</h3>
                  <p>${escapeHtml(route.text)}</p>
                </article>
              `
            )
            .join("")}
        </div>
      </div>
    </section>

    <section class="section paper-band">
      <div class="container split-section">
        <div>
          ${sectionHeader("Super-curricular Preparation", "Building A Strong University Profile")}
          <ul class="plain-list">${universityCareers.preparation.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>
        </div>
        <aside class="note-panel">
          <p class="card-label">Transferable Skills</p>
          <h3>What Students Can Evidence</h3>
          <div class="support-list">${universityCareers.skills.map((skill) => `<span>${escapeHtml(skill)}</span>`).join("")}</div>
        </aside>
      </div>
    </section>

    <section class="section">
      <div class="container">
        ${sectionHeader("Reading", "University Preparation Reading Lists", "Use these resources to start a wider-reading log and prepare for personal statements, interviews and super-curricular discussion.")}
        <div class="card-grid compact-grid">
          ${universityCareers.featuredResources
            .map(
              (item) => `
                <article class="card small-card">
                  <p class="card-label">Reading list</p>
                  <h3>${escapeHtml(item.title)}</h3>
                  <p>${escapeHtml(item.text)}</p>
                  <a class="text-link" href="${escapeHtml(item.path)}" data-link>Open reading list</a>
                </article>
              `
            )
            .join("")}
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        ${sectionHeader("Careers", "Where The Subjects Can Lead")}
        <div class="support-list career-list">
          ${universityCareers.careers.map((career) => `<span>${escapeHtml(career)}</span>`).join("")}
        </div>
      </div>
    </section>
  `;
}

function universityPoliticsReadingListPage() {
  return `
    <section class="page-hero">
      <div class="hero-image" aria-hidden="true"></div>
      <div class="container hero-content">
        <p class="kicker">${escapeHtml(universityPoliticsReadingList.eyebrow)}</p>
        <h1>${escapeHtml(universityPoliticsReadingList.title)}</h1>
        <p>${escapeHtml(universityPoliticsReadingList.overview)}</p>
        <div class="hero-actions">
          <a class="button primary-button" href="/university-careers" data-link>Back to University & Careers</a>
          <a class="button secondary-button" href="/a-level-politics" data-link>A Level Politics</a>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container reading-feature">
        <img src="${escapeHtml(universityPoliticsReadingList.image)}" alt="University reading table with books, notes and law scales" />
        <div>
          ${sectionHeader("How To Use This List", "Read Actively, Not Exhaustively", universityPoliticsReadingList.intro)}
          <ul class="plain-list">${universityPoliticsReadingList.habits.map((habit) => `<li>${escapeHtml(habit)}</li>`).join("")}</ul>
        </div>
      </div>
    </section>

    <section class="section paper-band">
      <div class="container">
        ${sectionHeader("Reading List", "Politics, PPE, Law And International Relations")}
        <div class="reading-list-grid">
          ${universityPoliticsReadingList.sections.map(readingListCard).join("")}
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        ${sectionHeader("Further Starting Points", "Financial Times Book Lists", "The attached reading list also points students towards FT annual and summer reading lists for politics and economics.")}
        <div class="card-grid compact-grid">
          ${universityPoliticsReadingList.links
            .map(
              (item) => `
                <article class="card small-card">
                  <p class="card-label">External source</p>
                  <h3>${escapeHtml(item.title)}</h3>
                  <a class="text-link" href="${escapeHtml(item.href)}" target="_blank" rel="noopener noreferrer">Open source</a>
                </article>
              `
            )
            .join("")}
        </div>
      </div>
    </section>
  `;
}

function aLevelHistoryReadingListPage() {
  return `
    <section class="page-hero">
      <div class="hero-image" aria-hidden="true"></div>
      <div class="container hero-content">
        <p class="kicker">${escapeHtml(aLevelHistoryReadingList.eyebrow)}</p>
        <h1>${escapeHtml(aLevelHistoryReadingList.title)}</h1>
        <p>${escapeHtml(aLevelHistoryReadingList.overview)}</p>
        <div class="hero-actions">
          <a class="button primary-button" href="/a-level-history" data-link>Back to A Level History</a>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        ${sectionHeader("Reading List", "Textbooks, Wider Reading And Films", "Use the list to support independent reading, coursework thinking and stronger contextual examples.")}
        <div class="reading-list-grid">
          ${aLevelHistoryReadingList.sections.map(readingListCard).join("")}
        </div>
      </div>
    </section>
  `;
}

function readingListCard(section) {
  return `
    <article class="card reading-list-card ${section.items.length > 10 ? "wide" : ""}">
      <p class="card-label">Reading list</p>
      <h3>${escapeHtml(section.title)}</h3>
      <p>${escapeHtml(section.description)}</p>
      <ul class="plain-list reading-list">
        ${section.items.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
      </ul>
    </article>
  `;
}

function parentsPage() {
  return `
    <section class="page-hero">
      <div class="hero-image" aria-hidden="true"></div>
      <div class="container hero-content">
        <p class="kicker">Parents</p>
        <h1>A Clear Guide To The Curriculum</h1>
        <p>Understand what students study, how assessment works and how home routines can support confident learning.</p>
      </div>
    </section>
    <section class="section">
      <div class="container">
        ${sectionHeader("Parent Guide", "How To Support History And Politics")}
        ${assessmentCards(parentGuide)}
      </div>
    </section>
    <section class="section paper-band">
      <div class="container split-section">
        <div>
          ${sectionHeader("Course Pathways", "From KS3 To Sixth Form")}
          <p class="lead-copy">Students build disciplinary foundations in KS3, can continue with Cambridge IGCSE History at KS4, then choose from Edexcel A Level History, Edexcel A Level Politics or IB History in the Sixth Form.</p>
        </div>
        <aside class="note-panel">
          <p class="card-label">Contact</p>
          <h3>History & Politics Department</h3>
          <div class="contact-list">
            <article class="contact-person">
              <strong>Richard Myers</strong>
              <span>Head of History/Politics</span>
              <a class="text-link" href="mailto:richard.myers@reptondubai.org">richard.myers@reptondubai.org</a>
            </article>
            <article class="contact-person">
              <strong>Ellie Cook</strong>
              <span>Teacher of History/Head of EPQ/EE</span>
              <a class="text-link" href="mailto:ellie.cook@reptondubai.org">ellie.cook@reptondubai.org</a>
            </article>
            <article class="contact-person">
              <strong>Ben Manley</strong>
              <span>Teacher of History/Politics</span>
              <a class="text-link" href="mailto:benjamin.manley@reptondubai.org">benjamin.manley@reptondubai.org</a>
            </article>
            <article class="contact-person">
              <strong>Anand Shah</strong>
              <span>Teacher of History</span>
              <a class="text-link" href="mailto:anand.shah@reptondubai.org">anand.shah@reptondubai.org</a>
            </article>
            <article class="contact-person">
              <strong>Paul McManus</strong>
              <span>Teacher of History</span>
              <a class="text-link" href="mailto:paul.mcmanus@reptondubai.org">paul.mcmanus@reptondubai.org</a>
            </article>
          </div>
        </aside>
      </div>
    </section>
  `;
}

function askAbePage() {
  return `
    <section class="ask-hero">
      <div class="container ask-layout">
        <div class="ask-intro">
          <p class="kicker">Ask Abe</p>
          <h1>Repton History & Politics Assistant</h1>
          <p>Ask course and revision questions grounded in the local department FAQ dataset.</p>
          <div class="integrity-note">
            <strong>Academic integrity</strong>
            <span>Ask Abe can help you understand, revise and plan. Do not submit generated work as your own.</span>
          </div>
        </div>
        <div class="abe-portrait">
          <img src="/public/assets/abraham-lincoln.jpg" alt="Public domain portrait of Abraham Lincoln" />
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container chat-layout">
        <aside class="prompt-panel">
          <h2>Suggested Prompts</h2>
          <div class="prompt-groups">
            ${askAbeFaq
              .map(
                (group) => `
                  <section>
                    <p class="card-label">${escapeHtml(group.course)}</p>
                    ${group.prompts
                      .map((prompt) => `<button type="button" class="prompt-button" data-prompt="${escapeHtml(prompt)}">${escapeHtml(prompt)}</button>`)
                      .join("")}
                  </section>
                `
              )
              .join("")}
          </div>
        </aside>

        <section class="chat-panel" aria-label="Ask Abe chat">
          <div class="chat-messages" data-chat-messages aria-live="polite">
            <article class="message abe">
              <p class="speaker">Ask Abe</p>
              <p>Hello. I can help with Repton History and Politics course information, revision planning and assessment guidance. What would you like to ask?</p>
            </article>
          </div>
          <form class="chat-form" data-chat-form>
            <label for="abe-question" class="sr-only">Ask Abe a question</label>
            <input id="abe-question" name="question" type="text" placeholder="Ask about a course, topic or revision skill" autocomplete="off" />
            <button class="button primary-button" type="submit">Ask</button>
          </form>
          <p class="chat-disclaimer">Version 1 uses local approved FAQ content only. No external AI service is connected.</p>
        </section>
      </div>
    </section>
  `;
}
