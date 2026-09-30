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
  "/literacy": literacyPolicyPage,
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

function literacyPolicyPage() {
  return `<section class="section paper-band"><div class="container literacy-policy">
  <p class="kicker">History and Politics department</p><h1>Literacy Department Policy</h1>
  <p class="lead-copy">Our approach to historical vocabulary, critical reading and evidence-based argument, with practical support for SEND and ELL pupils.</p>
  <div class="literacy-policy-body"><h2>What a literate History pupil can do</h2>
<p>Explain historical vocabulary accurately; establish chronology and context; distinguish a source from a later interpretation; infer from evidence; and build an argument that explains causes, change or significance. Fluent reading alone does not show that a pupil can do these things.</p>
<h2>1 Teach the language pupils need</h2>
<p>Select three to five essential words for a lesson or sequence. Give a clear definition, use each in historical context and ask pupils to apply it. Revisit the words in later lessons.</p>
<p>Example For medieval History: monarchy, authority and legitimacy. For industrial Britain: industrialisation, urbanisation and reform. Highlight everyday words with specialist meanings, such as source, state and revolution.</p>
<p>Quick check Ask: “How is a rebellion different from a revolution?” Check the explanation as well as the vocabulary.</p>
<h2>2 Model how historians read</h2>
<p>Read a short passage aloud and explain your thinking. Clarify difficult language, establish the main claim and identify the evidence. With a primary source, ask who produced it, when, for whom and for what purpose. Then connect those details to what it can tell us about the enquiry.</p>
<p>Example With an industrial worker’s account, pupils underline working conditions, explain what these suggest and consider how the writer’s experience shapes the account. Compare it with another source before making a broader claim.</p>
<p>Avoid A checklist that labels a source “biased” and dismisses it. Ask what it is useful for, and what other evidence is needed.</p>
<h2>3 Rehearse explanations before writing</h2>
<p>Give pupils brief thinking time, then ask them to explain an answer to a partner using a key term and specific evidence. Invite a partner to question the explanation before pupils write independently.</p>
<p>Useful prompts “This contributed to… because…”; “The evidence suggests… although…”; “This was more significant than… because…”</p>
<p>Teacher check Listen for a causal explanation or supported inference, rather than a retelling of events.</p>
<h2>4 Make analytical writing visible</h2>
<p>Model one short paragraph and explain each decision: answer the question, select precise evidence, explain how it supports the argument and reach a judgement where required. Let pupils improve a weak example before writing their own. Match the structure to the task and qualification; a source inference and an evaluative essay need different responses.</p>
<p>Example Move from “Factories were dangerous” to “Factory work could endanger workers because unguarded machinery exposed them to injury. A dated inspection report describing such injuries would support this claim; its scope would determine how far we could generalise.”</p>
<p>Feedback focus Choose one priority, such as explaining how evidence supports a claim. Ask pupils to revise a sentence or paragraph and check that the revision improves the reasoning.</p>
<h2>Support SEND and ELL pupils while preserving challenge</h2>
<p>Keep the same historical enquiry and intended thinking. Diagnose the barrier first: vocabulary, decoding, background knowledge, organising ideas or expressing understanding may require different support.</p>
<p>Use manageable text sections, glossaries, oral rehearsal, accessible presentation and temporary sentence starters as needed. Allow first-language discussion or bilingual vocabulary work where useful, then support pupils to express their understanding in academic English. Remove scaffolds as pupils become more independent. ELL status does not imply low attainment.</p>
<h2>A short departmental discussion</h2>
<p>Suggested length: 20–25 minutes. Bring one challenging History text or question and two anonymised pupil responses. Use these to discuss where language is limiting access or hiding understanding.</p>
<p>KEEP Which existing practice helps pupils read, explain or write successfully? Identify one example to retain or share.</p>
<p>STRENGTHEN Which practice needs greater consistency or precision? For example, modelling how to explain evidence rather than simply include it.</p>
<p>EXPLORE Which specific barrier warrants a small trial? For example, oral rehearsal before a causal paragraph with one selected class.</p>
<h2>Agree one next step and review its impact</h2>
<p>Record the class or pupils, the identified barrier, the chosen response, the teacher responsible and a review date. A four- to six-week trial is a suggested starting point, not a requirement of the pack.</p>
<p>Compare an initial and later task with similar reading and thinking demands. Look for more accurate vocabulary, stronger comprehension or clearer independent explanations. Include pupil feedback and subject assessment; reading data is one additional lens. Judge progress against pupils’ personalised targets, not a single common threshold.</p>
<p>Complete one departmental Microsoft Form submission from the original pack, capturing the agreed direction, evidence and support needed. The school destination remains at least 85% of SEND and ELL pupils meeting or exceeding personalised targets, alongside measurable improvement in reading literacy.</p>
<p>Adapted from Departmental CPD Facilitation Pack – Leading Literacy, Repton School Dubai. Classroom examples and trial timings are proposed History adaptations.</p>
  <h2>Applying the approach in Politics</h2><p>Teach terms such as sovereignty, legitimacy and accountability in context. Model how to distinguish a political claim from evidence, identify the author and purpose of a speech or manifesto, and corroborate claims. Rehearse explanations orally before writing a supported argument.</p><p>For comparative writing, compare the same feature in both systems and explain the significance of the similarity or difference. For evaluative essays, model how evidence supports a judgement and how a counterargument affects it. Identify barriers, provide appropriate support and review independent work.</p>
  </div></div></section>`;
}
