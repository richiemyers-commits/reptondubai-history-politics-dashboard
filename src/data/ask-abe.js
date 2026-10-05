export const abeCourses = [
  { id: "general", label: "General study advice" },
  { id: "ks3", label: "KS3 History" },
  { id: "igcse10", label: "Year 10 — Pearson IGCSE History" },
  { id: "igcse11", label: "Year 11 — Cambridge IGCSE History" },
  { id: "history", label: "A Level History" },
  { id: "politics", label: "A Level Politics" },
  { id: "ib", label: "IB History" }
];

const links = {
  skills: { label: "Skills & Revision", path: "/skills-revision" },
  literacy: { label: "History & Politics Literacy Guide", path: "/literacy" },
  glossary: { label: "Key Term Glossary", path: "/glossary" },
  politics: { label: "Guide to 30-mark Politics essays", path: "/a-level-politics/30-mark-essay-guide" },
  ia: { label: "IB History IA guide", path: "/ib-history/ia-guide" },
  historyReading: { label: "A Level History Reading List", path: "/a-level-history/reading-list" },
  politicsReading: { label: "Politics Reading List", path: "/university-politics-reading-list" },
  ks3Reading: { label: "KS3 Reading List", path: "/literacy/reading-lists#ks3" }
};

const advice = (id, title, prompt, keywords, intro, steps, task, resources = [links.skills], followups = []) => ({ id, title, prompt, keywords, intro, steps, task, resources, followups });

export const abeAdvice = [
  advice("revision", "Revise actively", "How should I revise effectively?", ["revise", "revision", "study plan", "study timetable", "prepare for exams", "revising", "study advice", "study tips"],
    "Build each revision session around what you can recall and apply, rather than how many pages you reread.",
    ["Choose one topic and a clear goal, such as explaining three reasons for a policy change.", "Close your notes and retrieve the key dates, terms, evidence or arguments. Check afterwards and correct gaps.", "Apply the knowledge to an exam question: plan an answer or write one paragraph under a time limit.", "Return to the topic after a few days and again later. Mix older topics into your practice."],
    "Try 25 minutes: 5 minutes recalling, 5 checking gaps, 10 applying your knowledge and 5 deciding what to revisit.", [links.skills], ["How do I remember dates and evidence?", "How do I use teacher feedback?"]),
  advice("memory", "Remember dates and evidence", "How do I remember dates and evidence?", ["remember", "memory", "memorise", "memorize", "flashcards", "flash cards", "forget", "dates", "retrieval", "spaced practice"],
    "Learn evidence with its meaning. A date or statistic is useful when you can explain what it shows.",
    ["Make short question-and-answer cards: one fact or argument per card.", "Connect each example to a theme, such as presidential power, nationalism or change in living standards.", "Use a timeline for sequence, then explain the relationship between events without looking.", "Test yourself at increasing intervals. Spend more time on what you cannot yet recall."],
    "Choose five examples. For each, recall the fact, explain its significance and name a question it could help answer.", [links.skills], ["How should I revise effectively?", "How do I explain evidence rather than describe it?"]),
  advice("planning", "Plan an answer", "How do I plan an essay?", ["plan an essay", "essay plan", "planning", "plan my essay", "structure an essay", "structure my essay", "essay structure", "organise an essay"],
    "A plan should organise a response to the exact question and establish the judgement your evidence will support.",
    ["Underline the command word and identify the period, place and issue. Define any key terms that control the debate.", "Write a provisional one-sentence answer. Choose two or three themes or factors that test it.", "For each theme, note precise evidence, explanation and a challenge or alternative where relevant.", "Decide why one explanation or position carries more weight, and check that every paragraph answers the question."],
    "Spend five minutes on a plan using headings and brief evidence notes. Then explain your line of argument aloud.", [links.literacy, links.skills], ["How do I write a strong judgement?", "How do I explain evidence rather than describe it?"]),
  advice("essay", "Write an analytical essay", "How do I improve a History essay?", ["essay", "paragraph", "writing", "write better", "written answer", "peel", "peal"],
    "Make each paragraph prove part of your answer. The reader should understand both what happened and why it matters to the question.",
    ["Begin with a claim that answers the question, rather than a sentence announcing the topic.", "Use precise, relevant evidence. Explain how it supports your claim.", "Where the task asks for evaluation, test an alternative and weigh its importance.", "End by connecting the paragraph to your overall argument. Follow the format required for your particular task."],
    "Highlight one paragraph: claim, evidence, explanation and judgement. Rewrite the weakest part.", [links.literacy], ["How do I explain evidence rather than describe it?", "How do I write a strong judgement?"]),
  advice("analysis", "Explain rather than narrate", "How do I explain evidence rather than describe it?", ["analysis", "analytical", "analyse", "analyze", "explain evidence", "describe", "descriptive", "description", "narrative", "narrate", "explanation"],
    "Description tells the reader what happened. Analysis explains a relationship and shows how the evidence helps answer the question.",
    ["After a fact, ask: why did this happen, what did it change, or how does it support my claim?", "Explain the mechanism: who acted, what enabled or constrained them, and what followed?", "Test the extent of the effect. Consider timing, reach, durability or comparison with another factor.", "Use the wording of the question to make the relevance explicit."],
    "Take one factual sentence and add: ‘This mattered because…’. Then explain how far it supports your answer.", [links.literacy], ["How do I write a strong judgement?", "How do I plan an essay?"]),
  advice("judgement", "Reach a supported judgement", "How do I write a strong judgement?", ["judgement", "judgment", "evaluate", "evaluation", "conclusion", "conclude", "to what extent", "weigh", "balanced argument"],
    "A strong judgement explains why one answer is more convincing. It should develop throughout your response and follow from the evidence.",
    ["Choose suitable criteria: importance, effectiveness, scale, duration, or the balance between power and constraints.", "Compare the strength of the evidence, rather than counting how many points support each side.", "Recognise a qualification: an argument may hold in one period or area more than another.", "Conclude with a direct answer, the decisive reason and any necessary limitation. Avoid introducing new evidence."],
    "Complete: ‘Overall, ___ is more convincing because ___. However, this applies most clearly to ___.’ Use your own evidence.", [links.literacy], ["How do I plan an essay?", "How do I explain evidence rather than describe it?"]),
  advice("sources", "Read sources critically", "How do I analyse a historical source?", ["source analysis", "analyse sources", "analyze sources", "analyse a source", "analyze a source", "describing sources", "source", "sources", "provenance", "utility", "usefulness", "reliability", "inference", "infer", "opcv", "opvl", "cartoon"],
    "Start with the task: inference, comparison, usefulness and reliability questions require different responses. A source can be valuable even when it has a clear viewpoint.",
    ["Identify the message or claim and support your reading with a short quotation or specific visual detail.", "Consider who produced it, when, for whom and for what purpose. Explain the effect on the particular enquiry.", "Use relevant contextual knowledge to test, explain or qualify its content.", "Reach the judgement the question requires. Avoid generic claims such as ‘it is biased, so it is useless’."],
    "Choose one source. Write its main message, one supporting detail and one reason its origin or purpose affects its value for a named enquiry.", [links.skills, links.literacy], ["How do I compare historical interpretations?", "How do I avoid simply describing sources?"]),
  advice("interpretations", "Compare historical interpretations", "How do I compare historical interpretations?", ["interpretation", "interpretations", "historiography", "historians", "historian", "fischer", "historical debate"],
    "Compare the historians’ actual arguments, then test them against relevant evidence. Different interpretations can arise from different questions, evidence and emphases.",
    ["Summarise each interpretation’s central claim accurately before evaluating it.", "Identify the precise agreement or disagreement: causes, importance, responsibility, change or continuity.", "Use knowledge to support and challenge each argument, including what it explains less well.", "Reach a reasoned judgement about the interpretations in relation to the question. Do not dismiss a historian solely because of nationality or publication date."],
    "Write: ‘Both agree that ___. They differ over ___. Interpretation ___ is more convincing on ___ because ___.’", [links.skills, links.historyReading], ["How do I write a strong judgement?", "How do I read a history book effectively?"]),
  advice("politicsEssay", "Write a 30-mark Politics essay", "How do I structure a 30 mark Politics essay?", ["30 mark", "30-mark", "thirty mark", "politics essay", "politics essays", "politics paragraph"],
    "Answer the precise debate with a sustained argument, relevant knowledge and evaluation across the response.",
    ["Define the key terms and establish your overall position in the introduction.", "Organise paragraphs around themes. Compare competing arguments within each theme using specific UK or US evidence as appropriate.", "Explain how each example supports or weakens a claim, then judge which argument is stronger and why.", "For a source-based question, engage with the source’s arguments as the task requires; for USA Paper 3A, select relevant US evidence. End with a justified overall answer."],
    "Plan one theme as: argument, evidence, competing argument, evidence, comparative judgement.", [links.politics], ["What are AO1, AO2 and AO3 in Politics?", "How do I build a Politics example bank?"]),
  advice("ao", "Use AO1, AO2 and AO3", "What are AO1, AO2 and AO3 in Politics?", ["ao1", "ao2", "ao3", "assessment objectives", "judgement marks", "analysis marks", "knowledge marks"],
    "For Edexcel Politics, AO1 is knowledge and understanding, AO2 is analysis, and AO3 is evaluation. A strong paragraph connects all three.",
    ["AO1: use accurate concepts, institutions, theories and specific examples relevant to the question.", "AO2: explain relationships, causes, consequences and what your evidence shows about the argument.", "AO3: assess competing arguments and make supported judgements about their strength.", "Do not treat these as isolated sections or assume a fixed number of marks per paragraph. Apply them throughout the essay."],
    "Highlight a Politics paragraph in three colours: knowledge, analysis and evaluation. Add whichever is missing.", [links.politics], ["How do I structure a 30 mark Politics essay?", "How do I write a strong judgement?"]),
  advice("examples", "Build a Politics example bank", "How do I build a Politics example bank?", ["example bank", "political examples", "politics examples", "current examples", "current affairs", "headlines", "news", "up to date", "up-to-date", "contemporary"],
    "Turn a checked news story into evidence you can use in an argument. One headline alone does not establish a wider trend.",
    ["Record the date, institution or actor, what happened and a reliable source link. Distinguish a proposal from an enacted policy or court ruling.", "Tag the example by specification topic: Parliament, executive power, elections, rights, Congress or the presidency.", "Write two sentences: what argument it supports and what limitation or counterargument it raises.", "Review entries regularly and verify recent developments before using them. Compare reporting with the original ruling, legislation or official record where possible."],
    "Open the Politics news section and turn one story into a four-part entry: fact, topic, argument, qualification.", [{ label: "Politics news and course page", path: "/a-level-politics" }, links.politics], ["How do I structure a 30 mark Politics essay?", "How do I compare UK and US politics?"]),
  advice("comparison", "Compare UK and US politics", "How do I compare UK and US politics?", ["compare uk", "uk and us", "uk-us", "comparative politics", "comparison", "compare systems", "usa and uk"],
    "Compare the same feature in both systems, then explain why the difference or similarity matters.",
    ["Choose a shared issue, such as legislative scrutiny, executive accountability or the protection of rights.", "Use precise institutional knowledge and a relevant example from each country.", "Explain similarities and differences through structures and political circumstances, rather than simply writing two country summaries.", "Connect the comparison to the question and the relevant comparative approach where required by your course."],
    "Make a table with one issue, UK evidence, US evidence and a sentence explaining the significance of the comparison.", [links.politics], ["How do I build a Politics example bank?", "How do I write a strong judgement?"]),
  advice("ideas", "Study political ideas and thinkers", "How do I revise political ideas and thinkers?", ["political ideas", "thinkers", "liberalism", "conservatism", "socialism", "nationalism", "ideologies", "ideology"],
    "Learn what each thinker argues and where strands of an ideology agree or disagree. Names alone do not demonstrate understanding.",
    ["Organise notes around human nature, the state, society and the economy where relevant.", "Summarise a thinker’s argument in your own words and connect it to a specific debate.", "Compare thinkers and strands on the same issue. Identify both shared principles and real disagreements.", "Practise using that comparison to answer a question about the degree of unity within an ideology."],
    "Choose two thinkers and one issue. Write one agreement, one disagreement and a judgement about how important the difference is.", [{ label: "A Level Politics", path: "/a-level-politics" }, links.glossary], ["How do I write a strong judgement?", "How do I remember dates and evidence?"]),
  advice("reading", "Read with a purpose", "How do I read a history book effectively?", ["read", "reading", "book", "books", "textbook", "notes", "note taking", "note-taking", "summarise", "summarize"],
    "Read to answer an enquiry, understand an argument and collect evidence, rather than copying large sections.",
    ["Set a question before reading. Preview headings and identify the argument the author is developing.", "After a short section, close the text and summarise the main claim in your own words.", "Record a small number of useful examples and explain how they relate to your enquiry.", "Keep author, title and page details for later reference. Note unfamiliar terms and one question you would ask the author."],
    "Read five pages. Produce a three-sentence summary, two pieces of evidence and one question.", [links.historyReading, links.literacy], ["How do I compare historical interpretations?", "How do I improve my historical vocabulary?"]),
  advice("vocabulary", "Build precise vocabulary", "How do I improve my historical vocabulary?", ["vocabulary", "key terms", "terminology", "glossary", "definitions", "literacy", "spell", "spelling"],
    "Knowing a term means being able to explain it and apply it accurately to a particular example.",
    ["Choose a small set of terms from the current topic and define each in your own words.", "Add an example and, where useful, a contrasting term: sovereignty versus legitimacy, or rebellion versus revolution.", "Use the terms in spoken explanations and written answers. Ask your teacher to check uncertain meanings.", "Test yourself later without looking at the definitions."],
    "Choose three glossary terms. Write a definition, an example and one sentence connecting them to your topic.", [links.glossary, links.literacy], ["How do I read a history book effectively?", "How do I explain evidence rather than describe it?"]),
  advice("timing", "Practise under exam conditions", "How do I manage my time in an exam?", ["time management", "timing", "timed", "exam time", "time in an exam", "run out of time", "finish the paper", "exam technique"],
    "Use the timings and requirements for your own paper. Allocate time in proportion to marks, allowing for reading, planning and checking.",
    ["Check the paper’s total time, compulsory questions, choices and marks with your teacher or the specification.", "Set a target finish time for each answer and practise checking the clock at those points.", "Keep plans brief. Prioritise relevant evidence and explanation over a long introduction.", "Review a timed attempt: identify whether lost time came from recall, planning, overlong writing or uncertainty about the task."],
    "Complete one question within the agreed time. Then note one change that would make the next attempt more efficient.", [links.skills], ["How do I plan an essay?", "How do I use teacher feedback?"]),
  advice("feedback", "Turn feedback into improvement", "How do I use teacher feedback?", ["feedback", "improve my grade", "better grade", "higher grade", "a star", "a*", "top marks", "full marks", "mark my", "grade my", "weakness", "mistakes"],
    "Choose one concrete improvement from feedback and demonstrate it in your next piece of work. Ask your teacher to confirm assessment-specific expectations.",
    ["Identify whether the main issue is knowledge, relevance, explanation, evaluation or the particular source skill being tested.", "Compare your work with the criteria or a teacher-selected model. Locate what the stronger response actually does.", "Rewrite a short section to address that issue, rather than simply rewriting the whole answer.", "Apply the same improvement independently in a new question, then compare the two attempts."],
    "Create a target such as ‘After each example, explain its significance to the question’. Show your teacher one paragraph that demonstrates it.", [links.literacy, links.skills], ["How do I explain evidence rather than describe it?", "How do I write a strong judgement?"]),
  advice("causation", "Explain causes and change", "How do I compare causes in History?", ["causes", "causation", "cause", "change and continuity", "continuity", "significance", "turning point", "consequences"],
    "Explain how factors worked and interacted. To judge importance, consider what each factor enabled, when it mattered and how far its effects reached.",
    ["Distinguish long-term conditions, short-term pressures and triggers where useful.", "For each cause, explain the chain connecting it to the outcome, supported by specific evidence.", "Look for interaction: one factor may have made another effective. Avoid treating causes as isolated lists.", "For change and continuity, compare the beginning and end of the period, then assess pace, extent and differences between groups."],
    "Draw a small causal map for one event and explain which connection matters most to the question.", [links.skills], ["How do I write a strong judgement?", "How do I remember dates and evidence?"]),
  advice("ia", "Plan an IB History investigation", "How do I start my IB History IA?", ["internal assessment", "history ia", "ib ia", "my ia", "investigation", "inquiry question", "2200", "2,200"],
    "Start with a focused historical enquiry you can investigate using a manageable set of sources. Confirm your assessment year with your teacher.",
    ["Choose a topic and a question with clear historical scope and room for an evidence-based argument.", "Check that suitable sources are available and that you can compare perspectives rather than merely narrate events.", "For first assessment 2028, use the department guide on the historical inquiry question, sources and perspectives, and synthesis and evaluation. Earlier cohorts follow their teacher’s previous-course guidance.", "Keep references from the outset, evaluate sources in relation to your argument and agree milestones with your teacher."],
    "Bring your teacher one proposed question, a brief explanation of its scope and a preliminary source list.", [links.ia], ["How do I analyse a historical source?", "How do I write a strong judgement?"]),
  advice("coursework", "Start History coursework", "How do I start A Level History coursework?", ["coursework", "german imperialism", "first world war origins", "origins of the first world war"],
    "Build coursework around the approved enquiry and the debate between historians. Confirm the question and requirements with your teacher before committing to it.",
    ["Break the question into issues you need to investigate, and identify the historians’ competing explanations.", "Read with an argument log: central claim, evidence, strengths, limitations and precise references.", "Plan sections around the debate, integrating evidence and evaluation rather than writing separate book summaries.", "Write in your own words and reference quotations, paraphrases and borrowed ideas. Follow the school’s draft and feedback arrangements."],
    "Compare two historians on one issue and record the evidence that would help test their disagreement.", [{ label: "A Level History coursework guidance", path: "/a-level-history" }, links.historyReading], ["How do I compare historical interpretations?", "How do I reference my work?"]),
  advice("referencing", "Reference and work independently", "How do I reference my work?", ["reference", "referencing", "citation", "cite", "bibliography", "plagiarism", "academic integrity", "write my essay", "do my homework", "submit chatbot", "submit ai"],
    "Use help to understand and improve your thinking, then produce your own assessed work. Credit other people’s words and ideas.",
    ["Record author, title, publication details and page numbers as you read; for websites, keep the URL and any dates required by your school’s referencing style.", "Put exact quotations in quotation marks and cite them. Cite paraphrased ideas too.", "Follow your teacher’s referencing conventions and the rules for your assessment, including any permitted use of AI.", "Use Ask Abe for study guidance and planning habits. Ask your teacher for formal marking and feedback on assessed work."],
    "Check one paragraph: can you trace every quotation, statistic and borrowed interpretation to its source?", [links.literacy], ["How do I read a history book effectively?", "How do I use teacher feedback?"])
];

export const abePromptGroups = [
  { title: "Revision and confidence", ids: ["revision", "memory", "timing", "feedback"] },
  { title: "History skills", ids: ["planning", "essay", "sources", "interpretations", "causation"] },
  { title: "Politics skills", ids: ["politicsEssay", "ao", "examples", "comparison", "ideas"] },
  { title: "Reading and independent study", ids: ["reading", "vocabulary", "ia", "coursework", "referencing"] }
];

const normalise = value => value.toLowerCase().replace(/[’‘]/g, "'").replace(/[–—-]/g, " ").replace(/[^a-z0-9*' ]/g, " ").replace(/\s+/g, " ").trim();
const contains = (text, phrase) => (` ${text} `).includes(` ${normalise(phrase)} `);

export function inferAbeCourse(question, selected = "general") {
  const q = normalise(question);
  if (/\b(politics|ao1|ao2|ao3)\b|30 mark|uk and us|uk us/.test(q)) return "politics";
  if (/\bib\b|internal assessment/.test(q)) return "ib";
  if (/year 10|pearson igcse|edexcel igcse/.test(q)) return "igcse10";
  if (/year 11|cambridge|\bcie\b/.test(q)) return "igcse11";
  if (/\bks3\b|year [789]\b/.test(q)) return "ks3";
  if (/a level history|\btudors?\b|\bcoursework\b/.test(q)) return "history";
  return abeCourses.some(c => c.id === selected) ? selected : "general";
}

function tailor(item, course) {
  const response = { ...item, course, steps: [...item.steps], resources: [...item.resources] };
  if (course === "politics" && ["essay", "planning"].includes(item.id)) {
    response.steps.push("For Politics, make AO1 knowledge, AO2 analysis and AO3 evaluation work together. In a 30-mark essay, compare the competing arguments and sustain a judgement.");
    response.resources.unshift(links.politics);
  }
  if (item.id === "sources" && course === "politics") {
    response.intro = "For a Politics source question, identify and evaluate the competing arguments in the source, using relevant knowledge to develop them. Do not substitute a History-style provenance exercise for the Politics task.";
    response.steps = ["Identify the debate and the source’s main arguments on each side.", "Select specific parts of the source and explain the reasoning behind them.", "Use accurate political knowledge and relevant examples to test those arguments.", "Weigh the competing arguments and reach a supported answer to the question."];
    response.resources = [links.politics];
  }
  if (item.id === "ao" && ["history", "igcse10", "igcse11", "ks3", "ib"].includes(course)) {
    response.intro = "AO1, AO2 and AO3 do not have identical meanings across subjects and qualifications. The explanation below is for Edexcel Politics; use your History paper’s own criteria and your teacher’s guidance.";
  }
  if (item.id === "reading") response.resources = [course === "politics" ? links.politicsReading : course === "ks3" ? links.ks3Reading : course === "ib" ? { label: "IB History Reading List", path: "/ib-history" } : course.startsWith("igcse") ? { label: "IGCSE course resources", path: coursePath(course) } : links.historyReading, links.literacy];
  if (["igcse10", "igcse11"].includes(course)) response.steps.push(course === "igcse10" ? "Year 10 follows Pearson Edexcel. Practise the question types for your Pearson paper and use its assessment guidance." : "Year 11 follows Cambridge. Practise the question types for your Cambridge paper and use its assessment guidance.");
  if (course === "ks3" && ["essay", "planning", "judgement"].includes(item.id)) response.task = "Start with one paragraph: answer the enquiry, add one precise example and explain why it supports your point. Use your teacher’s task instructions.";
  return response;
}

export function getAbeResponse(question, selected = "general", faq = []) {
  const q = normalise(question);
  const course = inferAbeCourse(question, selected);
  const exact = abeAdvice.find(item => normalise(item.prompt) === q);
  if (exact) return tailor(exact, course);
  // Longer phrases are stronger intent signals than a single generic word.
  const ranked = abeAdvice.map((item, index) => ({ item, index, score: item.keywords.reduce((total, phrase) => total + (contains(q, phrase) ? (normalise(phrase).includes(" ") ? 7 : 2) : 0), 0) })).sort((a, b) => b.score - a.score || a.index - b.index);
  const faqRanked = faq.map(item => ({ item, score: item.keywords.reduce((n, key) => n + (contains(q, key) ? 1 : 0), 0), exact: item.prompts.some(prompt => normalise(prompt) === q) })).sort((a, b) => Number(b.exact) - Number(a.exact) || b.score - a.score);
  if (faqRanked[0]?.exact && (!ranked[0]?.score || /^(what does|what is|where|what can i study|what careers)/.test(q))) {
    const item = faqRanked[0].item;
    return { title: item.course + " guidance", intro: item.answer, steps: [], task: "", course, resources: [{ label: "Course information and guides", path: course === "general" ? ({"KS3": "/ks3-history", "IGCSE": "/igcse-history", "A Level History": "/a-level-history", "A Level Politics": "/a-level-politics", "IB History": "/ib-history", "University and Careers": "/university-careers"}[item.course] || "/skills-revision") : coursePath(course) }], followups: ["How should I revise effectively?", "How do I plan an essay?"] };
  }
  if (ranked[0]?.score) return tailor(ranked[0].item, course);
  return { title: "Choose a study skill", intro: "I can help with study methods and the department’s course guidance. I don’t have a prepared answer to that question. Choose a course and ask about the skill you want to improve, such as planning, sources, revision or evaluation. For a factual topic question or marking your work, check your course materials or ask your teacher.", steps: [], task: "Try ‘How do I plan an essay?’ or ‘How do I analyse a historical source?’", course, resources: [links.skills, links.glossary], followups: ["How should I revise effectively?", "How do I plan an essay?", "How do I analyse a historical source?"] };
}

function coursePath(course) {
  return { ks3: "/ks3-history", igcse10: "/igcse-history/year-10-pearson", igcse11: "/igcse-history/year-11-cie", history: "/a-level-history", politics: "/a-level-politics", ib: "/ib-history" }[course] || "/sixth-form";
}
