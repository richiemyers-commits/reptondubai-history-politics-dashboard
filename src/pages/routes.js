import { politicsEssayGuidePage } from "./politics-essay-guide.js";
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
  "/igcse-history": igcseYearGroupsPage,
  "/igcse-history/year-10-pearson": () => coursePage(courses.igcsePearson),
  "/igcse-history/year-11-cie": () => coursePage(courses.igcse),
  "/igcse-history/year-9-into-10": gcseAdvicePage,
  "/gcse-history-advice": gcseAdvicePage,
  "/sixth-form": sixthFormPage,
  "/a-level-history": () => coursePage(courses.aLevelHistory),
  "/a-level-history/reading-list": aLevelHistoryReadingListPage,
  "/a-level-politics": () => coursePage(courses.aLevelPolitics),
  "/a-level-politics/30-mark-essay-guide": politicsEssayGuidePage,
  "/ib-history": () => coursePage(courses.ib),
  "/skills-revision": skillsPage,
  "/enrichment": enrichmentPage,
  "/university-careers": universityCareersPage,
  "/university-politics-reading-list": universityPoliticsReadingListPage,
  "/parents": parentsPage,
  "/literacy": literacyPolicyPage,
  "/literacy/reading-lists": literacyReadingListsPage,
  "/ask-abe": askAbePage
};

function igcseYearGroupsPage() {
  const groups = [courses.igcsePearson, courses.igcse];
  return `
    <section class="page-hero"><div class="hero-image" aria-hidden="true"></div><div class="container hero-content">
      <p class="kicker">Years 10 and 11</p><h1>IGCSE History</h1>
      <p>Choose your year group for the correct exam board, topics, assessment and resources.</p>
      <div class="hero-actions">${groups.map(course => `<a class="button secondary-button" href="${course.path}" data-link>${course === courses.igcsePearson ? "Year 10 Pearson Edexcel" : "Year 11 Cambridge CIE"}</a>`).join("")}</div>
    </div></section>
    <section class="section"><div class="container"><div class="two-column-cards">
      ${groups.map(course => `<article class="note-panel"><p class="card-label">${escapeHtml(course.eyebrow)}</p><h2>${escapeHtml(course.title)}</h2><p>${escapeHtml(course.overview)}</p><a class="button primary-button" href="${course.path}" data-link>Open ${course === courses.igcsePearson ? "Year 10 Pearson" : "Year 11 CIE"} page</a></article>`).join("")}
    </div></div></section>
    <section class="section paper-band"><div class="container"><h2>Year 9 into Year 10</h2><p>Explore the Pearson Edexcel pathway and build your historical reading, writing and source skills.</p><a class="button secondary-button" href="/igcse-history/year-9-into-10" data-link>Preparation and advice</a></div></section>`;
}

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
          <a class="button primary-button" href="/igcse-history/year-10-pearson" data-link>Open Year 10 Pearson</a>
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
          <p>This earlier deck describes Cambridge. Year 10 students should use the Pearson page for current topics and assessment.</p>
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
          <p class="lead-copy">Students build disciplinary foundations in KS3, can continue with Pearson Edexcel IGCSE History in Year 10 or Cambridge CIE in Year 11 at KS4, then choose from Edexcel A Level History, Edexcel A Level Politics or IB History in the Sixth Form.</p>
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
  <p class="kicker">History and Politics department • Pupil guide</p><h1>History and Politics Literacy Guide</h1>
  <p class="lead-copy">Our departmental expectations and your practical guide to becoming a stronger historian. Use your teacher’s feedback to choose one skill, practise it and show how your work improves.</p>
  <div class="literacy-policy-body">
  <h2>What we expect of historians</h2>
  <p><strong>Answer the question.</strong> All strong debates begin and end with a question. Define key terms and use them in your thesis and overall judgement.</p>
  <p><strong>Build your vocabulary.</strong> Speak to your teacher for historical books to read and develop your vocabulary.</p>
  <p>Read carefully, use historical vocabulary accurately and support your ideas with precise evidence. Explain why events happened, how things changed and why they mattered. Question sources and interpretations, listen to other arguments and reach a judgement when the task asks for one.</p>
  <p>These habits apply from KS3 to IGCSE, A Level and IB. Follow the instructions and assessment guidance for your particular task: a source inference, an explanation and an evaluative essay need different responses.</p>
  <h2>1. Build your historical vocabulary</h2>
  <ul><li>Choose three to five key words from your current topic. Write a definition in your own words and an accurate example.</li><li>Use the words in your spoken answers and writing. Revisit them without looking at your notes.</li><li>Check specialist meanings: a historical “source”, a political “state” or a “revolution” may mean something different from everyday usage.</li></ul>
  <p><strong>Try it:</strong> Explain the difference between rebellion and revolution. For medieval History, practise monarchy, authority and legitimacy; for industrial Britain, industrialisation, urbanisation and reform.</p>
  <p><strong>Success looks like:</strong> You can explain a term and apply it accurately to a historical example.</p>
  <h2>2. Read to understand, then question</h2>
  <ul><li>Before reading, identify the enquiry question and establish the period, place and relevant background.</li><li>Read a manageable section. Clarify unfamiliar words, identify the main claim and select the evidence that supports it.</li><li>Summarise the main idea in one or two sentences using your own words. Keep the meaning accurate.</li><li>Ask what the text helps you understand and what remains uncertain. Compare it with another account where useful.</li></ul>
  <p><strong>Focus on the question:</strong> Highlight key terms and what is being asked in the question.</p>
  <p><strong>Success looks like:</strong> Your notes separate the main argument from supporting detail and help you answer the enquiry.</p>
  <h2>3. Use sources and interpretations critically</h2>
  <ul><li>Identify who produced a source, when, for whom and for what purpose. Connect these details to the question you are answering.</li><li>Make an inference and support it with a specific detail or short quotation. Explain how that detail supports your inference.</li><li>Consider what the source can reveal and what it cannot establish on its own. Check it against relevant knowledge and other evidence.</li><li>Distinguish a source from a later interpretation. When historians disagree, compare their arguments and the evidence they use.</li></ul>
  <p><strong>Improve this:</strong> “The source is biased, so it is useless.”</p>
  <p><strong>Develop it:</strong> “The writer’s purpose may shape which conditions are emphasised. The account can still reveal the writer’s experience and concerns, but another source is needed to judge how typical these conditions were.”</p>
  <p><strong>Success looks like:</strong> You explain usefulness and limitations in relation to the enquiry, using the source and its context.</p>
  <h2>4. Explain your thinking before you write</h2>
  <p>Take a short thinking pause, then explain your answer to a partner or aloud to yourself. Include a key term, precise evidence and a reason. Ask your partner to challenge a claim or request more explanation.</p>
  <p><strong>Useful starters:</strong> “This contributed to… because…”; “The evidence suggests… although…”; “This was more significant than… because…”</p>
  <p><strong>Success looks like:</strong> You explain a connection or support an inference, instead of simply retelling events.</p>
  <h2>5. Write an argument supported by evidence</h2>
  <ul><li>Read the question carefully. Identify its focus, dates and command word before planning.</li><li>Start each paragraph with a point that answers the question. Select accurate, relevant evidence rather than everything you know.</li><li>Explain how the evidence supports your point. Make the causal connection, comparison or significance clear.</li><li>Consider an alternative argument where the task requires evaluation. Weigh its strength before reaching your judgement.</li><li>Write a conclusion that answers the question and explains why your judgement is convincing. Do not simply repeat your paragraphs.</li></ul>
  <p><strong>Move beyond description:</strong> “Factories were dangerous.”</p>
  <p><strong>Add explanation:</strong> “Unguarded machinery could make factory work dangerous because workers could come into contact with moving parts and suffer injury.” Add precise evidence from your lesson or reading, then explain how far it supports your claim.</p>
  <p><strong>Success looks like:</strong> Each paragraph helps answer the question, and your reasoning explains why the evidence matters.</p>
  <h2>6. Edit for clarity and accuracy</h2>
  <ul><li>Check names, dates, chronology and the spelling of key terms.</li><li>Use complete sentences, clear punctuation and paragraphs that develop one main point.</li><li>Replace vague phrases such as “things got worse” with a precise explanation of what changed, for whom and why.</li><li>Check that quotations are accurate and brief, and acknowledge sources as your teacher requires.</li><li>Read your work aloud. Rewrite any sentence whose meaning is difficult to follow.</li></ul>
  <p><strong>Success looks like:</strong> Your reader can follow your argument without having to guess what you mean.</p>
  <h2>Turn feedback into an improvement</h2>
  <p>Choose one priority from your latest feedback. Improve a sentence or paragraph, then practise the same skill in your next piece of independent work.</p>
  <div class="literacy-table-wrap"><table class="literacy-targets"><thead><tr><th>If your feedback says…</th><th>Your next action</th><th>Check your improvement</th></tr></thead><tbody>
  <tr><td>Use key vocabulary accurately</td><td>Define three terms and use them in topic sentences.</td><td>Can you explain each term without your notes?</td></tr>
  <tr><td>Read more carefully</td><td>Summarise each section and separate the claim from its evidence.</td><td>Does your summary preserve the author’s meaning?</td></tr>
  <tr><td>Use more precise evidence</td><td>Replace a general statement with a relevant event, date, example or source detail.</td><td>Is it accurate and directly relevant to the question?</td></tr>
  <tr><td>Explain rather than describe</td><td>Add how or why your evidence supports the point.</td><td>Have you explained the connection, rather than added more facts?</td></tr>
  <tr><td>Evaluate more fully</td><td>Consider a counterargument and explain why one argument carries more weight.</td><td>Is your judgement supported by a clear reason?</td></tr>
  <tr><td>Improve written clarity</td><td>Read aloud, split unclear sentences and correct key terms.</td><td>Can someone else follow your meaning?</td></tr>
  </tbody></table></div>
  <h2>Your next step: keep, strengthen, explore</h2>
  <p><strong>KEEP:</strong> Identify one skill you already use successfully and a piece of work that shows it.</p>
  <p><strong>STRENGTHEN:</strong> Choose one target from your feedback. Record the action you will take in your next task.</p>
  <p><strong>EXPLORE:</strong> Try a useful strategy, such as oral rehearsal, a glossary or summarising a reading passage.</p>
  <p>After your next suitable task, compare the two pieces of work. Highlight where the skill has improved and agree your next step with your teacher.</p>
  <h2>Get the support you need</h2>
  <p>If vocabulary, reading a long passage or organising your ideas is difficult, tell your teacher which part is causing the problem. Ask about shorter text sections, a glossary, accessible text, oral rehearsal or temporary sentence starters. Bilingual vocabulary notes or first-language discussion may help you prepare an answer in academic English. Use support to develop your understanding and gradually work more independently.</p>
  <h2>Using these skills in Politics</h2>
  <p>Apply the same habits to terms such as sovereignty, legitimacy and accountability. Distinguish a political claim from supporting evidence, consider the author and purpose of a speech or manifesto, and check claims against other evidence. In comparative writing, compare the same feature in both systems and explain why the similarity or difference matters. In evaluative essays, weigh arguments and explain your judgement.</p>
  <h2>Reading lists</h2>
  <a class="button primary-button" href="/literacy/reading-lists" data-link>KS3–KS5 Reading Lists</a>
  </div></div></section>`;
}

function literacyReadingListsPage() {
  return `
    <section class="section paper-band">
      <div class="container literacy-policy">
        <h1>KS3–KS5 Reading Lists</h1>
        <section id="ks3" aria-labelledby="ks3-reading-title">
          <h2 id="ks3-reading-title">KS3 History</h2>
          <ul class="plain-list reading-list">
            <li>Terry Deary, Horrible Histories series</li>
            <li>Judith Flanders, The Victorian City</li>
            <li>Michael Morpurgo, Private Peaceful</li>
            <li>Michael Morpurgo, War Horse</li>
          </ul>
        </section>
        <a class="text-link" href="/literacy" data-link>Back to the Literacy Guide</a>
      </div>
    </section>
  `;
}
