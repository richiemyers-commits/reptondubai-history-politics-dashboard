// A schematic campaign map: locations and routes are simplified for revision.
const CAMPAIGN_EVENTS = [
  ['5 January 1066', 'Edward the Confessor dies', 'Edward leaves no child to inherit his crown. Rival claims create a succession crisis.', 'London / Westminster', 'london', null, 'Why did the lack of an heir matter?'],
  ['6 January 1066', 'Harold Godwinson is crowned', 'The Witan supports Harold. William of Normandy and Harald Hardrada also claim the throne.', 'London / Westminster', 'london', null, 'Distinguish Harold Godwinson from Harald Hardrada.'],
  ['Spring–summer 1066', 'Rivals prepare for invasion', 'William assembles ships and soldiers in Normandy. Harold prepares to defend England.', 'Normandy and England', 'normandy', null, 'Why would an invasion need months of preparation?'],
  ['20 September 1066', 'Battle of Fulford', 'Near York, Hardrada and Tostig defeat the northern English earls Edwin and Morcar.', 'Fulford, near York', 'fulford', 'viking', 'Why must Harold move north?'],
  ['25 September 1066', 'Battle of Stamford Bridge', 'Harold defeats the invaders. Hardrada and Tostig are killed, ending their challenge.', 'Stamford Bridge, near York', 'stamford', 'north', 'A victory for Harold — but what problem remains?'],
  ['28 September 1066', 'William lands at Pevensey', 'William crosses the Channel and lands in Sussex while Harold is in the north.', 'Pevensey, Sussex', 'pevensey', 'norman', 'How does the timing help William?'],
  ['Early–mid October 1066', 'Harold returns south', 'Harold travels south, gathers forces in London and approaches William’s army.', 'Yorkshire → London → Sussex', 'london', 'south', 'How might marching and gathering troops affect an army?'],
  ['14 October 1066', 'Battle of Hastings', 'William defeats Harold, who is killed. The battle takes place near modern-day Battle, inland from Hastings.', 'Battle, near Hastings', 'battle', 'battle', 'Why is a battlefield victory different from controlling a kingdom?'],
  ['25 December 1066', 'William is crowned king', 'William is crowned at Westminster Abbey. Resistance continues: securing England will take years.', 'London / Westminster', 'london', null, 'Which later chapters explain how William kept control?']
];
let campaignStep = 0;
const CAMPAIGN_POINTS = {london:[330,310],normandy:[315,465],fulford:[295,182],stamford:[315,163],pevensey:[354,357],battle:[373,342]};
function campaignMap(step) {
  const event = CAMPAIGN_EVENTS[step];
  const routes = {
    viking: ['M500 38 Q470 100 320 170', '#6f4b91', 'Hardrada and Tostig: invasion from Norway'],
    north: ['M326 298 Q270 245 306 175', '#246b50', 'Harold: march north'],
    norman: ['M321 450 Q385 408 357 365', '#a43940', 'William: Channel crossing'],
    south: ['M312 180 Q360 245 337 300 L370 333', '#246b50', 'Harold: return south via London'],
    battle: ['M357 353 L370 345', '#a43940', 'William: advance towards the battlefield']
  };
  const route = routes[event[5]];
  const [x,y] = CAMPAIGN_POINTS[event[4]];
  return `<svg viewBox="0 0 560 510" role="img" aria-labelledby="campaign-map-title campaign-map-desc">
    <title id="campaign-map-title">The 1066 campaign: ${esc(event[1])}</title>
    <desc id="campaign-map-desc">Schematic map of England and Normandy. ${esc(event[3])}. ${route ? esc(route[2]) + '. ' : ''}Positions and routes are simplified; this is not a navigation map.</desc>
    <defs><marker id="campaign-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0L10 5L0 10Z" fill="${route ? route[1] : '#253041'}"/></marker></defs>
    <rect width="560" height="510" rx="12" fill="#e4eef0"/>
    <path d="M160 20L240 20 248 62 269 91 267 120 315 145 325 171 328 194 331 219 350 236 391 242 407 266 390 283 399 302 385 326 392 347 360 366 319 365 295 354 271 364 239 355 211 371 176 366 142 386 107 389 132 370 171 352 199 330 201 308 179 302 158 312 148 291 165 267 146 258 138 240 158 223 159 200 182 194 188 172 173 150 190 136 179 112 164 98 179 73 158 58Z" fill="#e6ddc6" stroke="#9f916f" stroke-width="2"/>
    <path d="M160 20L240 20 248 62 269 91 267 120 240 113 216 120 191 109 164 98" fill="#d9d0b8"/>
    <path d="M90 510L90 460 133 450 161 430 173 448 216 455 224 435 250 442 265 458 304 459 328 453 361 435 400 437 427 424 470 420 500 433 560 427 560 510Z" fill="#e6ddc6" stroke="#9f916f" stroke-width="2"/>
    <g fill="#52616a" font-family="system-ui,sans-serif" font-size="15"><text x="199" y="70">SCOTLAND</text><text x="210" y="232">ENGLAND</text><text x="145" y="275">WALES</text><text x="375" y="115">North Sea</text><text x="228" y="407">English Channel</text><text x="225" y="494">NORTHERN FRANCE</text><text x="450" y="23">N ↑</text></g>
    ${route ? `<path d="${route[0]}" fill="none" stroke="${route[1]}" stroke-width="4" stroke-dasharray="8 5" marker-end="url(#campaign-arrow)"/>` : ''}
    ${event[5] === 'viking' ? '<text x="355" y="48" fill="#6f4b91" font-size="13">From Norway (off map)</text>' : ''}
    <g fill="#253041" stroke="#fffdf8" stroke-width="2">${Object.values(CAMPAIGN_POINTS).map(p=>`<circle cx="${p[0]}" cy="${p[1]}" r="4"/>`).join('')}</g>
    <circle cx="${x}" cy="${y}" r="11" fill="none" stroke="#922f39" stroke-width="3"/>
    <g fill="#253041" font-family="system-ui,sans-serif" font-size="13" font-weight="600">
      <path d="M291 182L246 182" stroke="#52616a"/><text x="193" y="186">Fulford</text>
      <path d="M319 163L339 153" stroke="#52616a"/><text x="341" y="153">Stamford Bridge</text>
      <text x="337" y="307">London / Westminster</text>
      <path d="M350 357L299 380" stroke="#52616a"/><text x="244" y="393">Pevensey</text>
      <path d="M377 342L404 330" stroke="#52616a"/><text x="407" y="332">Battle (Hastings)</text>
      <text x="294" y="449">Normandy</text>
    </g></svg>`;
}
function campaignDetail(step) {
  const e = CAMPAIGN_EVENTS[step];
  return `<p class="small">EVENT ${step+1} OF ${CAMPAIGN_EVENTS.length} · ${esc(e[0])}</p><h3>${esc(e[1])}</h3><p><strong>Where:</strong> ${esc(e[3])}</p><p>${esc(e[2])}</p><p class="note"><strong>Think:</strong> ${esc(e[6])}</p>`;
}
function campaignExplorer() {
  return `<section class="panel campaign-explorer" aria-labelledby="campaign-heading"><div class="eyebrow">Start here · The road to conquest</div><h2 id="campaign-heading">1066: a kingdom changes hands</h2><p>Select an event to follow the story on the map, from Edward’s death to William’s coronation. Every date below is in 1066.</p>
    <div class="campaign-layout"><ol class="campaign-timeline" aria-label="Timeline of 1066">${CAMPAIGN_EVENTS.map((e,i)=>`<li><button type="button" data-campaign-step="${i}" aria-pressed="${i===campaignStep}" aria-controls="campaign-detail"><span>${esc(e[0])}</span><strong>${esc(e[1])}</strong></button></li>`).join('')}</ol>
    <div class="campaign-geography"><div id="campaign-map">${campaignMap(campaignStep)}</div><p class="small">Schematic map: locations and routes are approximate. Red = William; green = Harold; purple = Hardrada and Tostig. The ring marks the selected location. Fulford and Stamford Bridge are both near York.</p><div id="campaign-detail" aria-live="polite" aria-atomic="true">${campaignDetail(campaignStep)}</div></div></div>
    <div class="note"><strong>📓 Exercise book mission</strong><ol><li>Draw a timeline from 5 January to 25 December 1066. Include the three battles and both coronations.</li><li>Sketch England and Normandy. Mark London, the York area, Pevensey and the Hastings battlefield.</li><li>Use arrows to show the invasions and Harold’s movements. Explain how geography and timing shaped the campaign.</li></ol><p><strong>Recall challenge:</strong> hide the timeline and explain why winning at Stamford Bridge did not make Harold safe.</p></div><p class="small">Explore further: <a href="https://www.english-heritage.org.uk/learn/teaching-resources/story-of-1066/" target="_blank" rel="noopener">English Heritage: the story of 1066</a>. Then use the six chapters below to investigate how William ruled England.</p></section>`;
}
document.addEventListener('click', e => {
  const button = e.target.closest('button[data-campaign-step]');
  if (!button) return;
  const step = Number(button.dataset.campaignStep);
  if (!Number.isInteger(step) || !CAMPAIGN_EVENTS[step]) return;
  campaignStep = step;
  document.querySelectorAll('[data-campaign-step]').forEach(b=>b.setAttribute('aria-pressed', String(Number(b.dataset.campaignStep)===step)));
  document.getElementById('campaign-map').innerHTML = campaignMap(step);
  document.getElementById('campaign-detail').innerHTML = campaignDetail(step);
});
