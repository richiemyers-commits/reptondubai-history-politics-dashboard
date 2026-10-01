// Original pupil-facing definitions. Topic selection follows the department course guides.
// Each row is term | meaning | optional example / writing guidance.
const entries = (topic, rows) => rows.trim().split('\n').map(row => {
  const [term, definition, example = ''] = row.split('|').map(value => value.trim());
  return { term, definition, example, topic };
});
const skills = entries('Historical reading and writing', `
Analysis|Explaining how or why evidence supports an argument, rather than simply describing events.|After giving evidence, explain what it shows about the question.
Argument|A reasoned answer to a question, supported by evidence.
Bias|A preference or viewpoint that influences what a source includes or emphasises.|A biased source can still reveal attitudes, aims or beliefs.
Cause|Something that helps explain why an event happened.
Causation|The study of why events happen and how different causes interact.
Change|A development that makes a situation different over time.
Chronology|The order in which events happened.
Comparison|Examining similarities and differences using the same criteria.
Consequence|An outcome or effect of an event or action.
Context|The circumstances surrounding an event, source or interpretation.
Continuity|Features that remain broadly the same over time.
Corroboration|Checking whether independent evidence supports a claim or another source.
Counterargument|A reasoned challenge to an argument that must be considered before reaching a judgement.
Criterion|A standard used to make a judgement; criteria is the plural.|Judge significance using reach, depth and duration of impact.
Cross-reference|Compare sources directly to test agreement, disagreement or support.
Evaluation|Making a supported judgement about importance, value or strength.
Evidence|Information used to support or challenge a claim.
Historical significance|The importance of an event, person or development, judged using explicit criteria.
Inference|A conclusion drawn from clues in a source rather than stated directly.
Interpretation|An explanation or judgement about the past, constructed from evidence.
Judgement|A supported decision that answers the question and weighs competing arguments.
Limitation|Something that restricts what a source can tell us about a particular enquiry.
Long-term cause|A background development that contributes to an event over an extended period.
Perspective|A viewpoint shaped by a person's position, experiences and context.
Primary source|Evidence produced in the period being studied or by someone directly involved.|A later memoir is first-hand testimony, but memory and hindsight need evaluation.
Provenance|The origin of a source, including its creator, date, place and circumstances.
Purpose|What a source's creator intended to achieve.
Reliability|How far a source's claims can be trusted for a particular question.
Secondary source|An account created after the events, usually by someone analysing other evidence.
Short-term cause|A development close in time to an event that helps explain its occurrence.
Source|A trace or account of the past that historians investigate.
Substantiated|Supported with relevant, accurate evidence.
Thesis|The central argument that answers the enquiry question.
Turning point|A development that substantially changes the direction or pace of events.
Utility|How useful a source is for answering a specific historical question.|Explain both what the source reveals and what it cannot establish.
`);
const medieval = entries('Year 7: Normans and medieval England', `
Anglo-Saxon|Relating to peoples and kingdoms in England before the Norman conquest.
Archbishop|A senior bishop responsible for an important church province.
Baron|A powerful noble who held land and owed duties to the monarch.
Bayeux Tapestry|An embroidered account of events surrounding the Norman conquest.|Evaluate its viewpoint and purpose as well as its visual evidence.
Black Death|The devastating plague pandemic that reached England in 1348.
Castle|A fortified residence used for defence and to demonstrate power.
Catholic Church|The Christian Church recognising the Pope's authority.
Chancellor|A senior official responsible for royal administration and documents.
Charter|A written document granting or confirming rights and privileges.
Chivalry|An ideal code of conduct associated with medieval knights.
Clergy|People formally appointed to religious roles, such as priests and bishops.
Conquest|Taking control of a territory by military force.
Crusade|A religiously sanctioned military expedition, especially to the eastern Mediterranean in the medieval period.
Domesday Book|The survey of landholding and resources ordered by William I in 1086.
Excommunication|Exclusion from the Church's sacraments and community.
Feudalism|A term for relationships linking landholding with obligations of service and loyalty.|Use specific relationships; medieval society was more complex than a simple pyramid.
Freeman|A person legally free rather than bound to a lord as a serf.
Guild|An association controlling standards and membership in a particular trade or craft.
Harrying of the North|William I's destructive campaign against resistance in northern England in 1069–70.
Heir|A person entitled or expected to inherit land, a title or the throne.
Homage|A ceremony in which a person formally acknowledged loyalty to a lord.
Interdict|A Church penalty restricting religious services in a territory.
Keep|The main fortified tower of a castle.
Knight|A mounted warrior who often held land in return for military service.
Labour service|Work that peasants owed to their lord.
Magna Carta|The 1215 charter limiting some royal actions and asserting particular rights.|Its immediate protections mainly served elites; its later symbolism became much broader.
Manor|An estate organised around a lord's land and the surrounding community.
Medieval|Relating to the Middle Ages, between ancient and early modern history.
Monastery|A religious community where monks lived under shared rules.
Monk|A man living in a religious community devoted to prayer and other duties.
Motte and bailey|A castle with a raised mound and an enclosed courtyard.
Nobility|People holding hereditary titles and high social status.
Norman|Relating to Normandy and the conquerors of England in 1066.
Pandemic|An outbreak of disease spreading across countries or continents.
Peasant|A person whose livelihood depended largely on agricultural work.
Peasants' Revolt|The uprising of 1381 against taxation, labour restrictions and other grievances.
Pilgrimage|A journey to a place considered religiously significant.
Plague|A disease caused by the bacterium Yersinia pestis, associated with the Black Death.
Poll tax|A tax charged per person rather than according to income or property.
Pope|The head of the Roman Catholic Church.
Portcullis|A heavy gate lowered to close a castle entrance.
Serf|A peasant legally tied to a lord's estate and subject to obligations.
Shield wall|A defensive formation in which soldiers held shields together.
Statute of Labourers|The 1351 law attempting to control wages and labour movement after the Black Death.
Tenant-in-chief|Someone who held land directly from the king.
Tithe|A contribution traditionally equal to one-tenth of produce or income, paid to the Church.
Vassal|A person owing loyalty and service to a lord.
Villein|An unfree peasant with land and obligations to a lord.
Witan|An Anglo-Saxon council of leading nobles and churchmen advising the king.
`);
const tudors = entries('Tudor England and rebellion', `
Act of Supremacy|Legislation establishing royal supremacy over the English Church, first under Henry VIII in 1534.
Annulment|A declaration that a marriage was legally invalid.
Attainder|A legal condemnation that could remove a person's property, titles and inheritance rights.
Chantry|An endowment paying priests to say prayers for the dead.
Court|The monarch's household and the people surrounding the ruler.
Dissolution of the Monasteries|The closure of religious houses and seizure of their property under Henry VIII.
Divine right|The belief that monarchs derive their authority from God.
Dynasty|A sequence of rulers from the same family.
Enclosure|Combining or fencing land, often restricting common rights and access.
Faction|A group competing for influence within a larger political body.
Gentry|Landowners below the nobility who often exercised local power.
Heresy|A belief judged to contradict an established Church's teachings.
Humanism|An intellectual movement valuing classical learning and human capacities.
Indulgence|In Catholic practice, a remission of temporal punishment associated with sin.
Justice of the Peace (JP)|A local magistrate responsible for keeping order and administering aspects of government.
Lord lieutenant|A royal representative in a county with responsibilities including military organisation.
Monarchy|A system with a king or queen as head of state.
Parliament|The institution through which legislation and taxation were authorised alongside the monarch.
Patronage|Using appointments, rewards or protection to gain support and loyalty.
Pilgrimage of Grace|The northern uprising of 1536 against religious changes and other grievances.
Privy Council|A body of advisers helping the monarch govern.
Protestant|Relating to Christian traditions that emerged from the Reformation outside Roman Catholic authority.
Rebellion|Organised resistance against an established ruler or government.
Recusant|A person who refused to attend the established Church's services, especially a Catholic in Elizabethan England.
Reformation|The sixteenth-century movements that challenged Catholic authority and transformed European Christianity.
Regency|Government exercised on behalf of a monarch unable to rule personally.
Religious settlement|An arrangement establishing the official religion and practices of a state.
Royal authority|The monarch's ability and recognised right to command and govern.
Succession|The process by which someone inherits or takes over a position, especially the throne.
Treason|An offence against the ruler or state, as defined by the law of the time.
`);
const industry = entries('Year 8: Industry, slavery and rights', `
Abolition|Ending a legal institution or practice, especially slavery or the slave trade.|Britain abolished its slave trade in 1807; slavery in much of its empire was abolished later.
Abolitionist|Someone campaigning to end slavery or the slave trade.
Agricultural revolution|Changes in farming methods and organisation that increased production.
Atlantic slave trade|The forced transportation and sale of enslaved Africans across the Atlantic.
Boycott|Refusing to buy goods or use services as a form of protest.
Capital|Money or assets invested in production or enterprise.
Capitalism|An economic system based mainly on private ownership and production for profit.
Child labour|Work performed by children, often in harmful or exploitative conditions.
Civil rights|Rights protecting equal citizenship and participation in public life.
Colonialism|Establishing control over another territory and its people.
Colony|A territory governed or controlled by another power.
Consumer|Someone who buys or uses goods and services.
Cotton gin|A machine separating cotton fibres from seeds; its spread increased demand for enslaved labour in the USA.
Discrimination|Unequal treatment based on characteristics such as race, sex or religion.
Domestic system|Production carried out in homes rather than centralised factories.
Emancipation|Release from legal bondage or severe restrictions.
Empire|Territories and peoples ruled by a dominant state or ruler.
Enslaved person|A person forced into a system treating them as property and denying their freedom.
Exploitation|Using another person's labour or vulnerability unfairly for advantage.
Factory|A workplace concentrating machinery and workers for production.
Factory Acts|Laws regulating factory employment and working conditions.
Freedom Ride|A civil rights protest challenging segregation on interstate transport in the USA.
Industrialisation|The growth of machine-based production and industrial employment.
Industrial Revolution|The major transformation in production, work and society driven by industry.
Infrastructure|Basic systems such as roads, railways, water supplies and communication networks.
Jim Crow|Laws and practices enforcing racial segregation and inequality in the USA.
Laissez-faire|The view that economic activity should face limited government interference.
Luddite|A participant in early nineteenth-century machine-breaking protests against threats to livelihoods.
Mechanisation|Replacing or supplementing manual work with machines.
Middle Passage|The Atlantic crossing during which enslaved Africans were transported to the Americas.
Non-violent protest|Action seeking change without physical violence.
Plantation|A large agricultural estate, historically often relying on enslaved labour.
Prejudice|A judgement about people formed without adequate evidence, often based on stereotypes.
Public health|Organised efforts to prevent disease and improve a population's health.
Racism|Ideas, practices or institutions producing racial hierarchy, exclusion or unequal treatment.
Reform|A change intended to improve an existing system.
Segregation|The enforced separation of groups, especially by race.
Sit-in|A protest in which people occupy a place and refuse to leave.
Slavery|A system of extreme coercion in which people are treated as property and deprived of freedom.
Steam engine|A machine converting energy from steam into mechanical power.
Trade union|An organisation representing workers' interests.
Triangular trade|A model linking Atlantic exchanges among Europe, Africa and the Americas.|Actual trading routes were varied; the model does not describe every voyage.
Urbanisation|Growth in the proportion of people living in towns and cities.
Workhouse|An institution providing relief to poor people under restrictive conditions involving work.
Working class|People whose livelihoods depend mainly on wage labour rather than owning substantial capital.
`);
const war = entries('Year 9: War, suffrage and dictatorship', `
Alliance|An agreement between states to cooperate, often for defence.
Allies|States cooperating in a war or diplomatic partnership.
Armistice|An agreement to stop fighting; it is not necessarily a final peace treaty.
Arms race|Competition to build larger or more advanced armed forces.
Artillery|Large guns used to attack targets at distance.
Assassination|The deliberate killing of a prominent person, often for political reasons.
Attrition|A strategy seeking to wear down an opponent's manpower and resources.
Conscription|Compulsory service in the armed forces.
Dictatorship|Government in which power is concentrated and effective democratic controls are absent.
Eastern Front|The area of fighting in eastern Europe during a major European war.
Entente|An understanding or agreement between states, less formal than some alliances.
Franchise|The legal right to vote.
Home front|Civilian life and activities within a country at war.
Imperialism|Extending a state's power over other territories or peoples.
Militarism|Giving military power and values a prominent role in politics and society.
Mobilisation|Preparing and deploying forces and resources for war.
Nationalism|The belief that a nation should have political recognition or self-government.
No man's land|The exposed territory between opposing trench lines.
Pacifism|Opposition to war and violence as ways of resolving disputes.
Propaganda|Communication designed to influence attitudes or actions for a cause.
Rationing|Controlling the distribution of scarce goods.
Shell shock|A historical term for psychological trauma associated with combat.
Stalemate|A situation in which neither side can achieve decisive progress.
Suffrage|The right to vote in elections.
Suffragette|A member of the militant movement campaigning for women's voting rights in Britain.
Suffragist|A campaigner for voting rights, commonly used for constitutional women's suffrage activists in Britain.
Total war|War requiring extensive mobilisation of a society's people and resources.
Trench warfare|Fighting from networks of defensive trenches.
Ultimatum|A final demand backed by a threat of action.
Western Front|The main area of fighting in France and Belgium during the First World War.
`);
const germany = entries('Germany, 1918–45', `
Antisemitism|Hostility, prejudice or discrimination directed at Jewish people.
Article 48|The Weimar constitutional provision allowing presidential emergency measures.
Autarky|A policy aiming at national economic self-sufficiency.
Chancellor of Germany|The head of the German government.
Coalition|An arrangement in which several parties share government.
Concentration camp|A detention camp holding people without normal legal protections.|Distinguish concentration camps from extermination camps built for mass killing.
Dawes Plan|The 1924 arrangement restructuring German reparations and facilitating foreign loans.
Depression|A severe and prolonged decline in economic activity.
Enabling Act|The 1933 law allowing Hitler's government to legislate without normal parliamentary approval.
Eugenics|Attempts to control reproduction based on discriminatory ideas about inherited characteristics.
Extermination camp|A camp established primarily for systematic mass murder.
Fascism|An authoritarian, ultranationalist politics rejecting liberal democracy and glorifying national unity and power.
Four Year Plan|The Nazi economic programme launched in 1936 to prepare Germany for war.
Führer|The title meaning leader used by Hitler.
Gestapo|The Nazi secret state police.
Gleichschaltung|Nazi coordination of institutions and society under the regime's control.
Hitler Youth|The Nazi organisation for boys intended to shape loyalty, beliefs and preparation for service.
Holocaust|The Nazi genocide of approximately six million Jews.|The regime also persecuted and murdered other groups; identify the groups and policies precisely.
Hyperinflation|Extremely rapid price increases that destroy the purchasing power of money.
Indoctrination|Teaching beliefs in a way that discourages questioning or alternative views.
Kapp Putsch|The failed right-wing attempt to overthrow the Weimar government in 1920.
Kristallnacht|The coordinated anti-Jewish violence of 9–10 November 1938.
Lebensraum|The Nazi demand for territorial expansion, especially in eastern Europe, justified through racist ideology.
Locarno Treaties|The 1925 agreements including guarantees of Germany's western borders.
Munich Putsch|Hitler's failed attempt to seize power in Bavaria in 1923.
Night of the Long Knives|The Nazi purge of the SA leadership and other opponents in 1934.
Nuremberg Laws|The 1935 Nazi racial laws restricting Jewish citizenship and relationships.
Persecution|Persistent targeting or mistreatment of a group or individual.
Police state|A state using extensive policing, surveillance and coercion to control people.
Putsch|An attempt to seize government by force.
Reichstag|The German national parliament.
Reichstag Fire Decree|The 1933 emergency measure suspending key civil liberties after the Reichstag fire.
SA (Sturmabteilung)|The Nazi paramilitary organisation known as the Storm Troopers.
Schutzstaffel (SS)|The Nazi organisation central to repression, racial policy and genocide.
Spartacist uprising|The left-wing revolt in Berlin in January 1919.
Stab-in-the-back myth|The false claim that Germany's army lost WWI because civilians betrayed it.
Totalitarianism|An ambition to control political life and reshape society through an all-embracing ideology.|Test claims of total control against evidence of limits and resistance.
Volksgemeinschaft|The Nazi ideal of a national community defined through exclusionary racial and political criteria.
Weimar Republic|Germany's democratic republic from 1919 to 1933.
Young Plan|The 1929 agreement revising Germany's reparations obligations.
`);
const international = entries('International relations, 1919–39', `
Aggression|Hostile action against another state, especially the use of armed force.
Anschluss|The annexation of Austria by Nazi Germany in March 1938.
Appeasement|Making concessions to an aggressive power in an attempt to preserve peace.
Collective security|The principle that states should act together against aggression.
Demilitarisation|Removing or prohibiting armed forces and military installations in an area.
Diktat|A settlement imposed without meaningful negotiation by the affected party.
Disarmament|Reducing or removing weapons and armed forces.
Fourteen Points|Wilson's 1918 proposals for a post-war settlement.
Isolationism|Avoiding extensive international commitments, especially military or political alliances.
League of Nations|The international organisation founded after WWI to promote cooperation and peace.
Mandate territory|A former imperial territory administered by another power under League of Nations supervision.
Manchurian crisis|Japan's seizure of Manchuria from 1931 and the international response.
Munich Agreement|The 1938 agreement permitting Germany to take the Sudetenland from Czechoslovakia.
Nazi–Soviet Pact|The August 1939 non-aggression agreement with secret arrangements concerning eastern Europe.
Non-aggression pact|An agreement between states not to attack each other.
Reparations|Payments required to compensate for damage caused by war.
Rhineland|The western German region whose demilitarised status was challenged by Hitler in 1936.
Sanctions|Restrictions imposed to pressure a state or other actor to change its behaviour.
Self-determination|The principle that a people should decide its own political status.
Sudetenland|The border region of Czechoslovakia with a large German-speaking population.
Treaty of Versailles|The 1919 peace settlement between the Allied powers and Germany.
Unanimity|Agreement by every participant in a decision.
War guilt clause|The description commonly given to Article 231 of the Treaty of Versailles.|Explain its role in establishing responsibility for damage and reparations.
`);
const coldwar = entries('Cold War and conflict in Asia', `
Berlin Airlift|The supply of West Berlin by air during the Soviet blockade of 1948–49.
Berlin Blockade|The Soviet closure of western land access to West Berlin in 1948–49.
Berlin Wall|The barrier built in 1961 to prevent movement from East Berlin to West Berlin.
Brezhnev Doctrine|The Soviet claim that it could intervene where socialist rule was threatened within its bloc.
Brinkmanship|Taking a crisis close to conflict to pressure an opponent.
Capitalist bloc|States aligned broadly with the USA and capitalist economic systems during the Cold War.
Cold War|Sustained rivalry between the US-led and Soviet-led blocs involving political, economic and military competition.
Cominform|The Soviet-led organisation established in 1947 to coordinate communist parties.
Comecon|The Soviet-led economic cooperation organisation established in 1949.
Communism|An ideology seeking common ownership and a classless society.|Distinguish the ideal from the structures of historical communist states.
Containment|A policy seeking to prevent the further spread of communist power.
Cuban Missile Crisis|The 1962 confrontation over Soviet nuclear missiles in Cuba.
Détente (detente)|A period or policy of easing tension between rival powers.
Domino theory|The belief that communist victory in one country would encourage nearby countries to follow.
Guerrilla warfare|Fighting by irregular forces using ambushes, raids and mobility.
Hotline|A direct communication link intended to reduce misunderstanding between rival leaders.
Iron Curtain|A metaphor for the division between Soviet-controlled eastern Europe and the West.
Korean War|The 1950–53 war involving North and South Korea and major foreign powers.
Marshall Plan|US economic assistance for European recovery launched after WWII.
Mutually assured destruction (MAD)|The idea that nuclear attack would bring devastating retaliation against both sides.
NATO|The North Atlantic Treaty Organization, a collective defence alliance founded in 1949.
Non-alignment|Avoiding formal alignment with either major Cold War bloc.
Nuclear deterrence|Discouraging attack by threatening nuclear retaliation.
Perestroika|Gorbachev's policy of restructuring the Soviet economy and institutions.
Glasnost|Gorbachev's policy of greater openness in Soviet public life.
Prague Spring|The 1968 attempt to reform socialism in Czechoslovakia before Warsaw Pact intervention.
Proxy war|A conflict in which outside powers support opposing sides rather than fight each other directly.
Satellite state|A formally independent state heavily controlled or influenced by another power.
Solidarity|The Polish independent trade union and opposition movement established in 1980.
Soviet bloc|States aligned with and often dominated by the Soviet Union.
Sphere of influence|An area in which a powerful state exercises substantial influence.
Superpower|A state with exceptional global military, economic and political influence.
Tet Offensive|The major communist offensive in South Vietnam in 1968.
Truman Doctrine|The 1947 US commitment to support states resisting communist pressure.
Viet Cong|The communist-led insurgent movement operating in South Vietnam.
Viet Minh|The Vietnamese independence movement led by communists, formed in 1941.
Vietnamisation|The US policy of transferring more combat responsibility to South Vietnamese forces.
Warsaw Pact|The Soviet-led military alliance established in 1955.
`);
const india = entries('India: Empire, independence and partition', `
All-India Muslim League|The political organisation that increasingly argued for a separate Muslim state.
Amritsar massacre|The killing of civilians by British-led troops at Jallianwala Bagh in 1919.
British Raj|British Crown rule in India from 1858 to 1947.
Civil disobedience|Deliberate refusal to obey laws considered unjust, usually through non-violent action.
Communalism|Politics emphasising separate religious communities and their perceived interests in South Asia.
Decolonisation|The ending of colonial rule and emergence of independent states.
Dominion status|Self-governing status within the British imperial or Commonwealth framework.
Dyarchy|The division of provincial responsibilities between elected Indian ministers and British-controlled officials.
Government of India Act|Legislation shaping India's governance; specify the relevant act and year.|The 1935 Act expanded provincial autonomy but did not grant independence.
Home Rule|A demand for self-government within a wider imperial framework.
Indian National Army (INA)|An armed force seeking Indian independence with Japanese support during WWII.
Indian National Congress (INC)|The major political organisation campaigning for Indian self-government and independence.
Khilafat movement|The movement defending the Ottoman caliphate that cooperated with Gandhi's non-cooperation campaign.
Non-cooperation|Withdrawing participation from institutions and practices supporting a government.
Partition|The division of British India into India and Pakistan in 1947.|Explain political decisions alongside mass displacement and violence.
Princely state|An Indian territory ruled by a local monarch under British paramountcy.
Quit India|The Congress-led campaign launched in 1942 demanding an end to British rule.
Round Table Conferences|Meetings in London in 1930–32 discussing India's constitutional future.
Rowlatt Acts|The 1919 measures extending emergency powers, including detention without normal trial.
Salt March|Gandhi's 1930 march challenging the British salt monopoly.
Satyagraha|Gandhi's principle of resisting injustice through truth and non-violent action.
Separate electorates|Electoral arrangements in which designated communities elected their own representatives.
Swadeshi|The promotion of locally produced goods as part of resistance to colonial dependence.
Swaraj|Self-rule; a central demand of Indian nationalism.
Two-nation theory|The argument that Muslims and Hindus constituted distinct nations requiring separate political arrangements.
Viceroy|The British monarch's representative heading colonial government in India.
`);
const rights = entries('Civil rights and social movements', `
Affirmative action|Measures intended to address disadvantage and improve opportunities for underrepresented groups.
American Indian Movement (AIM)|The Indigenous rights organisation founded in 1968.
Black nationalism|Politics emphasising Black collective identity, autonomy and self-determination.
Black Power|A movement stressing Black pride, autonomy and power, with varied approaches and organisations.
Brown v. Board of Education|The 1954 Supreme Court decision rejecting racial segregation in public schools.
Civil Rights Act|US legislation protecting civil rights; identify the year and provisions.|The 1964 Act prohibited major forms of discrimination, including in public accommodations and employment.
De facto segregation|Separation occurring in practice through social and economic conditions rather than explicit legal requirements.
De jure segregation|Separation required or authorised by law.
Direct action|Protest acting immediately on an issue, such as sit-ins, strikes or occupations.
Disenfranchisement|Removing or obstructing the ability to vote.
Equal Rights Amendment (ERA)|The proposed US constitutional amendment guaranteeing equality of rights regardless of sex.
Feminism|Ideas and movements seeking equality and challenging the subordination of women.
Grassroots|Activity organised by ordinary participants at local or community level.
Intersectionality|An approach examining how overlapping forms of inequality shape experiences.
Literacy test|A voting qualification historically used in the USA to exclude voters, especially Black citizens.
Montgomery Bus Boycott|The 1955–56 campaign challenging segregation on buses in Montgomery, Alabama.
NAACP|The National Association for the Advancement of Colored People, founded in 1909.
Patriarchy|A system in which men hold disproportionate authority and women face structural subordination.
Reservation|Land designated for an Indigenous community within a wider state.
Second-wave feminism|The feminist movements from the 1960s focusing on wider social, economic and personal inequalities.
Self-determination of Indigenous peoples|The right of Indigenous peoples to pursue their political, social and cultural development.
SNCC|The Student Nonviolent Coordinating Committee, an important organisation in US civil rights activism.
Sovereignty of Indigenous nations|The authority of Indigenous political communities to govern themselves, within contested legal relationships.
Termination policy|US policy seeking to end federal recognition and associated relationships with particular Indigenous nations.
Treaty rights|Rights established through agreements between Indigenous nations and governments.
Voting Rights Act|The 1965 US law targeting racial discrimination in voting.
Women's liberation|Movements seeking to transform structures and attitudes restricting women's lives.
`);
const ibspecific = entries('IB: Apartheid, Tunisia and historical inquiry', `
African National Congress (ANC)|The South African liberation movement founded in 1912.
Apartheid|South Africa's system of legally enforced racial hierarchy and separation under National Party rule.
Arab Spring|The wave of protests and uprisings across parts of the Middle East and North Africa from 2010–11.
Authoritarianism|A system concentrating power and restricting opposition and political freedoms.
Bantustan|A territory designated as a Black homeland under apartheid, used to deny equal citizenship.
Bantu Education|The apartheid education system designed to maintain racial hierarchy and restrict opportunities.
Black Consciousness|A South African movement promoting Black pride, solidarity and psychological liberation.
Civil society|Organisations and associations outside government through which people pursue shared interests.
Consciousness-raising|Group discussion intended to connect personal experiences with wider structures of inequality.
Democratisation|The development or strengthening of democratic institutions and participation.
Ennahda|The Tunisian political movement rooted in political Islam that became a major party after 2011.
Group Areas Act|The apartheid law dividing residential and business areas by racial classification.
Internal Assessment (IA)|An internally assessed component completed within an IB course.|Use the guide for your cohort when checking structure and assessment requirements.
Methodology|The methods and principles used to conduct an investigation.
National Party|The South African party that introduced apartheid after its 1948 election victory.
OPVL|A source-evaluation reminder: origin, purpose, value and limitations.|Explain value and limitations for the specific enquiry, including source content.
Oral history|Historical evidence gathered through recorded interviews about people's experiences.
Pan-Africanist Congress (PAC)|A South African liberation organisation formed in 1959 after a split from the ANC.
Pass laws|Apartheid controls requiring Black South Africans to carry documents and restricting movement.
Population Registration Act|The 1950 apartheid law imposing racial classification.
Presentism|Interpreting the past mainly through present-day assumptions without sufficient historical context.
Research question|A focused question that defines what an investigation aims to establish.
Sharpeville massacre|The 1960 police killing of protesters opposing pass laws in South Africa.
Soweto uprising|The protests beginning in 1976 against apartheid education and wider oppression.
State of emergency|A legal arrangement giving a government exceptional powers during a declared crisis.
Structural cause|A cause rooted in long-standing institutions or social and economic conditions.
Theory of Knowledge (TOK)|The IB component exploring how knowledge claims are formed, justified and challenged.
Triangulation|Testing a conclusion against different types of evidence or methods.
Truth and Reconciliation Commission|The South African body investigating apartheid-era abuses and considering conditional amnesty.
UGTT|The Tunisian General Labour Union, an influential trade union federation.
Umkhonto we Sizwe|The armed organisation formed by the ANC and allies in 1961.
`);
const america = entries('USA: American Dream, 1917–96', `
American Dream|The ideal that opportunity and effort can bring prosperity and personal fulfilment in the USA.
Anti-communism|Opposition to communist ideas, movements or states.
Baby boom|A substantial increase in births, particularly after WWII.
Beat movement|A cultural movement challenging conformity in post-war America.
Boom|A period of rapid economic expansion.
Buying on margin|Purchasing investments with borrowed money, increasing both potential gains and losses.
Consumerism|A culture placing strong emphasis on buying goods and services.
Counterculture|Values and practices challenging a society's dominant norms.
Deregulation|Reducing government rules controlling economic activity.
Dust Bowl|The environmental and farming crisis affecting the US Great Plains during the 1930s.
Fair Deal|Truman's programme proposing expanded economic and social reforms.
Federal government|The national level of government in a federation.
Flapper|A term associated with young women challenging conventional dress and behaviour in the 1920s.
Great Depression|The prolonged economic crisis beginning around 1929.
Great Migration|The movement of large numbers of African Americans from the South to other US regions.
Great Society|Lyndon Johnson's domestic reform programme targeting poverty, inequality and social provision.
Harlem Renaissance|The flourishing of African American cultural expression centred on Harlem in the 1920s.
HUAC|The House Un-American Activities Committee, associated with investigations into alleged subversion.
Immigration quota|A numerical limit on immigration, often applied to particular nationalities.
Keynesianism|The view that government spending and demand management can help stabilise an economy.
McCarthyism|Accusations and investigations of alleged communist influence associated with Senator Joseph McCarthy.
New Deal|Roosevelt's programmes addressing the Great Depression through relief, recovery and reform.
New Right|A movement promoting market economics and socially conservative values.
New frontier|Kennedy's programme of domestic reform and national ambition.
Prohibition|The US ban on manufacturing, selling and transporting alcoholic drinks under the Eighteenth Amendment.
Reaganomics|The economic policies associated with Reagan, including tax reductions, deregulation and spending changes.
Red Scare|A period of intense fear of communist or radical influence in the USA.
Relief|Immediate assistance to people facing hardship.
Rugged individualism|The belief that self-reliance and private initiative should take precedence over extensive state support.
Social Security|The US federal system established in 1935 providing pensions and other forms of social insurance.
Speculation|Buying assets in expectation of rising prices rather than their immediate productive value.
Stagflation|The combination of high inflation with stagnant growth and unemployment.
Suburbanisation|The growth of residential communities outside city centres.
Supply-side economics|Policies intended to increase production through incentives such as lower taxes and reduced regulation.
Watergate|The scandal involving political misconduct and obstruction that led to Nixon's resignation in 1974.
Welfare state|A system in which government provides substantial social protection and services.
`);
const advanced = entries('A Level: Tudors, WWI origins and historiography', `
Amicable Grant|Wolsey's attempted non-parliamentary levy of 1525, abandoned after resistance.
Anglo-German naval race|Competition between Britain and Germany to expand their fleets before WWI.
Blank cheque|Germany's assurance of support to Austria-Hungary in July 1914.
Bond|A financial obligation used by Tudor rulers to encourage compliance.
Chamber finance|The management of royal revenue through the household chamber, associated with Henry VII.
Council Learned in the Law|Henry VII's body enforcing financial and legal obligations, associated with Empson and Dudley.
Council of the North|A regional institution used to strengthen royal government in northern England.
Engrossing|Combining farms or holdings into larger units, often causing local grievances.
Entente Cordiale|The 1904 Anglo-French agreement settling colonial disputes and improving relations.
Factional politics|Competition among groups for access to rulers, office and influence.
Fischer thesis|The interpretation associating German expansionist aims with major responsibility for the outbreak of WWI.
Historiography|The study of how historians have written and interpreted history.
July Crisis|The diplomatic and military escalation leading to war in July–August 1914.
Kett's Rebellion|The 1549 Norfolk uprising associated with enclosure and other local grievances.
Locality|A particular place or region whose conditions may differ from national patterns.
Mercantilism|Economic ideas linking national power to managed trade and the accumulation of wealth.
Moroccan crises|The confrontations involving German challenges to French influence in Morocco in 1905–06 and 1911.
Northern Rebellion|The 1569 rising of northern earls against Elizabeth I's government.
Orthodox interpretation|A conventional or established interpretation within a particular historical debate.
Periodisation|Dividing the past into periods to help explain patterns of development.
Pretender|A claimant to a throne whose claim is disputed by the ruler in power.
Progress|A royal journey through parts of the kingdom, displaying authority and meeting local elites.
Recognisance|A formal acknowledgement of an obligation, often carrying a financial penalty for breach.
Retaining|Maintaining followers who provided service and support to a noble.
Revisionism|Challenging an established interpretation using different evidence, questions or emphasis.
Schlieffen Plan|The German planning concept for defeating France rapidly before concentrating against Russia.|Distinguish the original memorandum from the operational plans used in 1914.
Subsidy|A grant or tax providing revenue to a ruler or government.
Tudor state|The institutions and relationships through which Tudor monarchs governed England and their other territories.
Weltpolitik|Germany's policy of seeking greater global influence under Wilhelm II.
Western Rebellion|The 1549 uprising in Devon and Cornwall associated with religious and other grievances.
Wyatt's Rebellion|The 1554 rising against Mary I, associated particularly with opposition to her Spanish marriage.
`);
const politicsDemocracy = entries('UK politics: Democracy, parties and elections', `
Additional Member System (AMS)|An electoral system combining constituency representatives with additional party-list seats to improve proportionality.
Agenda setting|Influencing which issues receive public attention and political discussion.
Apathy|A lack of interest in or engagement with politics.
By-election|An election to fill a parliamentary seat between general elections.
Class dealignment|The weakening relationship between social class and party support.
Closed proportional list system|A system allocating seats proportionally to parties, with candidates elected in the party's fixed order.|Included in Pearson's specification for teaching from September 2026.
Coalition government|Government formed by two or more parties sharing executive power.
Constituency|An electoral area whose voters choose a representative or representatives.
Delegate representation|Representation in which the elected member follows constituents' expressed wishes closely.
Democratic deficit|A shortfall in democratic participation, representation or accountability.
Democratic legitimacy|Public acceptance of a government's authority based on democratic procedures and principles.
Descriptive representation|Representatives reflecting characteristics of the people they represent.
Direct democracy|Citizens deciding policy questions themselves rather than solely through representatives.
Electoral system|The rules translating votes into elected offices or seats.
Electorate|The people entitled to vote in a particular election.
First Past the Post (FPTP)|A system in which the candidate with the most votes in a constituency wins.|A winner needs a plurality, not necessarily more than half the votes.
Functional representation|Representation of particular interests or occupational groups.
Governing party|The party holding executive office or leading the government.
Hung parliament|A parliament in which no single party has an overall majority of seats.
Insider pressure group|A group with established access to decision-makers.
Legitimacy|The accepted right of an institution or leader to exercise authority.
Lobbying|Trying to influence decision-makers through communication and advocacy.
Majoritarian system|An electoral system designed to produce winners with majority support or a governing majority.
Mandate|A claimed authority to implement policies on the basis of electoral support.
Manifesto|A party's published programme of policies and commitments.
Media bias|A systematic tendency in reporting that favours particular views, actors or issues.
Minority government|A government lacking an overall majority in the legislature.
Multiparty system|A system in which several parties have meaningful electoral influence.
Opinion poll|A survey estimating attitudes or voting intentions from a sample.
Outsider pressure group|A group lacking regular privileged access to government, often using public campaigns.
Partisan dealignment|A weakening of voters' long-term attachment to a political party.
Participation|Taking part in politics through voting, campaigning, discussion or other activity.
Pluralism|The view that power is dispersed among competing groups and interests.
Plurality|More votes than any other candidate or option, without necessarily a majority.
Pressure group|An organisation seeking to influence policy without primarily trying to form the government.
Proportional representation (PR)|Electoral arrangements seeking a closer match between parties' vote shares and seat shares.
Referendum|A public vote on a particular question or proposal.
Representative democracy|A system in which citizens elect people to make political decisions on their behalf.
Safe seat|A constituency where one party is expected to win by a comfortable margin.
Salience|How important an issue is to voters or political actors.
Single Transferable Vote (STV)|A preferential system using quotas and transfers in constituencies electing multiple representatives.
Social movement|A broad network pursuing social or political change, often beyond formal party structures.
Supplementary Vote (SV)|A preferential system using first and second choices and, if needed, a final round between two candidates.|Useful for earlier course materials; check which electoral systems your cohort studies.
Swing|A change in relative electoral support between parties across elections.
Tactical voting|Voting for a less-preferred option to prevent another candidate or party winning.
Think tank|An organisation researching and promoting policy ideas.
Trustee representation|Representation in which elected members exercise their own judgement on constituents' behalf.
Turnout|The proportion of eligible voters who cast a vote.
Two-party system|A system in which two parties dominate competition for government.
Valence issue|An issue on which voters broadly agree on the goal but judge parties' competence differently.
Voting behaviour|Patterns in how and why people vote.
Wasted vote|A vote that does not contribute to electing a representative under the system used.
`);
const politicsGovernment = entries('UK government: Constitution and institutions', `
Accountability|The requirement to explain and justify decisions and face consequences for them.
Backbencher|An MP who is neither a government minister nor a frontbench opposition spokesperson.
Bicameralism|A legislature composed of two chambers.
Bill|A proposal for legislation before it becomes law.
Cabinet|Senior ministers collectively responsible for major government decisions.
Cabinet government|A model in which major executive decisions are made collectively by the cabinet.
Codified constitution|A constitution set out in a single authoritative constitutional document or closely integrated text.
Collective ministerial responsibility|The convention that ministers support agreed government policy publicly or resign.
Common law|Law developed through judicial decisions and precedent.
Confidence and supply|An agreement to support a government on confidence votes and essential financial measures.
Constitution|The rules and principles organising political authority and its limits.
Constitutional convention|An established political practice regarded as binding without normally being legally enforceable.
Constitutional monarchy|A monarchy operating within constitutional limits.
Core executive|The network of institutions and actors coordinating central government.
Delegated legislation|Law made using authority granted by an Act of Parliament.
Devolution|Transferring powers from central government to institutions governing particular parts of the state.
Elective dictatorship|The argument that an executive with a parliamentary majority can dominate political decision-making.
Entrenchment|Making a rule harder to change than ordinary law.
Executive|The branch of government responsible for implementing law and directing policy.
Fused powers|The overlap between legislative and executive personnel and authority, especially in parliamentary systems.
House of Commons|The elected chamber of the UK Parliament.
House of Lords|The second chamber of the UK Parliament, with mainly appointed members.
Human Rights Act|The 1998 UK Act giving domestic legal effect to specified European Convention rights.|Distinguish the European Convention on Human Rights from the European Union.
Individual ministerial responsibility|The convention that ministers answer to Parliament for their conduct and departments.
Judicial independence|Protection of judges from improper political or other pressure.
Judicial neutrality|The expectation that judges decide cases impartially rather than according to party preferences.
Judicial review (UK)|Courts examining the lawfulness of public bodies' decisions and actions.|UK courts do not generally strike down Acts of the sovereign Westminster Parliament.
Judiciary|The courts and judges interpreting and applying law.
Legislature|The branch of government responsible for making law.
Parliamentary sovereignty|The principle that Westminster Parliament can make or repeal any law and no Parliament binds its successors.
PMQs|Prime Minister's Questions, a regular parliamentary opportunity to question the Prime Minister.
Prime ministerial government|A model emphasising the Prime Minister's dominance over executive decision-making.
Prerogative powers|Powers historically belonging to the Crown, many exercised by ministers.
Royal assent|The monarch's formal approval of legislation passed by Parliament.
Rule of law|The principle that public power is governed by law and applied through fair legal processes.
Salisbury convention|The convention that the Lords should not block government bills implementing clear manifesto commitments.
Scrutiny|Examining policies, decisions and actions to test their justification and effectiveness.
Select committee|A parliamentary committee investigating a department, policy area or issue.
Separation of powers|Dividing authority among legislative, executive and judicial institutions.
Sovereignty|Supreme authority within a political or legal system.
Statute law|Law enacted by a legislature.
Supreme Court (UK)|The UK's highest court for most final appeals and certain constitutional matters.
Uncodified constitution|A constitution drawn from several sources rather than one authoritative constitutional document.
Unitary state|A state in which ultimate authority rests at the centre, even where powers are devolved.
Vote of no confidence|A parliamentary vote indicating that a government no longer has the chamber's support.
Whip|A party official enforcing discipline, or an instruction directing members how to vote.
`);
const ideologies = entries('Political ideas: Liberalism, conservatism, socialism and nationalism', `
Atomism|Viewing society mainly as a collection of separate individuals rather than an organic whole.
Authority|The recognised right to give instructions or make decisions.
Civic nationalism|Nationalism defining membership primarily through citizenship and shared political values.
Class consciousness|Awareness of belonging to a social class and sharing its interests.
Classical liberalism|Liberalism emphasising individual liberty, limited government and free markets.
Collectivism|Giving priority to collective action and shared interests rather than isolated individual effort.
Communist society|The ideal of a classless, stateless society with common ownership.
Conservatism|An ideology valuing continuity, established institutions and cautious approaches to change.
Cultural nationalism|Nationalism prioritising the preservation or revival of a shared culture.
Democratic socialism|Socialism seeking a more equal society through democratic political processes.
Dialectical materialism|A Marxist approach explaining development through material conditions and contradictions.
Egalitarianism|The belief that greater equality is desirable or morally justified.
Empiricism|Giving weight to experience and observation when judging ideas and institutions.
Equality of opportunity|An equal chance to pursue goals without unfair barriers.
Equality of outcome|Reducing or removing differences in people's final social or economic conditions.
Essentialism|The belief that a group has fixed characteristics defining its members.
Ethnic nationalism|Nationalism defining membership mainly through ancestry, ethnicity or inherited identity.
Expansionist nationalism|Nationalism seeking increased territory or dominance over other peoples.
Fraternity|Solidarity and mutual support among members of a community.
Free market|An economy in which prices and allocation are mainly shaped by private exchange and competition.
Human nature|An account of fundamental human characteristics and motivations.
Inclusive nationalism|Nationalism allowing membership through shared civic commitment rather than ancestry alone.
Exclusive nationalism|Nationalism restricting membership through inherited or tightly defined cultural criteria.
Individualism|The view that the individual has central moral or political importance.
Internationalism|Cooperation across national boundaries and concern for interests beyond one nation.
Liberal democracy|Democratic government combined with rights, legal limits and protections for minorities.
Liberal nationalism|Nationalism combining national self-determination with liberal rights and consent.
Liberalism|An ideology placing individual freedom and rights at the centre of politics.
Limited government|Government whose power is restricted by rules, rights and institutions.
Marxism|Ideas associated with Marx explaining class conflict and advocating the overcoming of capitalism.
Modern liberalism|Liberalism supporting state action to remove obstacles preventing meaningful individual freedom.
Multiculturalism|Recognition of cultural diversity and, in some forms, policies protecting different cultural identities.
Nation|A community understood to share a collective identity, history, culture or political aspiration.
Nation-state|A state whose political boundaries broadly correspond to a claimed national community.
Negative freedom|Freedom from interference by others, especially the state.
Neoconservatism|A strand of the New Right emphasising social order, authority and traditional values.
Neoliberalism|A political-economic approach favouring markets, privatisation and reduced state economic intervention.
One-nation conservatism|Conservatism supporting social obligations and reform to maintain cohesion and avoid class division.
Organic society|The view that society is an interconnected whole developing through shared institutions and traditions.
Paternalism|Acting to protect people's interests while limiting some of their choices.
Patriotism|Attachment or loyalty to one's country.
Pluralist democracy|Democracy understood through competition among many organised interests.
Positive freedom|The capacity to act and develop, sometimes requiring resources or removal of structural barriers.
Pragmatism|Choosing policies by practical outcomes rather than rigid adherence to theory.
Privatisation|Transferring ownership or provision from the public sector to private actors.
Proletariat|In Marxist theory, the class dependent on selling its labour power.
Rationalism|Confidence in reason as a means of understanding and organising political life.
Redistribution|Changing how resources or income are shared, often through taxation and public spending.
Revolutionary socialism|Socialism seeking fundamental transformation through revolution rather than gradual reform.
Social contract|The idea that political authority rests on an agreement among individuals establishing government.
Social democracy|A tradition pursuing greater equality and welfare through democracy within a regulated market economy.
Social justice|Fairness in the distribution of opportunities, resources, rights and social treatment.
Socialism|An ideology emphasising equality, cooperation and collective approaches to economic and social life.
State|The institutions claiming authority over a population within a territory.
Traditional conservatism|Conservatism emphasising inherited institutions, hierarchy, tradition and social obligation.
`);
const usaPolitics = entries('USA and comparative politics', `
Amendment|A formal alteration to a constitutional or legislative text.
Amending the US Constitution|The formal process requiring exceptional majorities at federal and state levels.|The usual route is two-thirds of both congressional chambers and ratification by three-quarters of states.
Bill of Rights (USA)|The first ten amendments to the US Constitution.
Bill of Rights (UK)|The 1689 statute limiting royal authority and affirming parliamentary rights.
Checks and balances|Powers allowing institutions to limit or scrutinise one another.
Civil liberties|Freedoms protecting individuals from unjustified interference, particularly by government.
Cloture|The US Senate procedure for ending debate; most legislation requires three-fifths of senators to agree.
Commerce clause|The constitutional provision authorising Congress to regulate specified categories of commerce.
Concurrent powers|Powers exercised by both federal and state governments.
Congress|The US federal legislature, composed of the House of Representatives and Senate.
Constitutional rights|Rights protected by a constitution.
Constitutional sovereignty|The supremacy of constitutional rules over ordinary institutions and laws.
Cooperative federalism|Federalism involving joint action by national and state governments.
Cultural approach|A comparative approach explaining politics through shared values, beliefs and traditions.
Divided government|A situation in which the presidency and at least one congressional chamber are controlled by different parties.
Electoral College|The system of electors through which the US president and vice-president are formally elected.
Enumerated powers|Powers expressly listed in a constitutional document.
Executive agreement|An international agreement made through executive authority rather than the Senate treaty-ratification process.
Executive order|A presidential directive to the executive branch based on constitutional or statutory authority.|An executive order is not itself an Act of Congress and remains subject to legal limits.
Executive privilege|A claimed right to withhold certain executive communications, subject to legal limits.
Federalism|A constitutional division of authority between national and subnational governments.
Filibuster|An attempt to delay or block Senate action by prolonging debate or withholding agreement to end it.
Gerrymandering|Drawing electoral boundaries to advantage a party or group.
Gridlock|A situation in which political disagreement prevents institutions from taking action.
House of Representatives|The US congressional chamber whose seats are allocated among states mainly by population.
Impeachment|A formal accusation of misconduct against a federal official by the House of Representatives.|Removal requires conviction in a Senate trial; impeachment alone does not remove an official.
Imperial presidency|The argument that presidential power has expanded beyond appropriate constitutional or democratic limits.
Implied powers|Powers inferred from express constitutional powers rather than stated separately.
Incumbency|Holding an elected office at the time of an election.
Iron triangle|A close policy relationship among a congressional committee, executive agency and interest group.
Judicial activism|An approach in which judges are willing to use judicial power broadly to address constitutional questions.
Judicial restraint|An approach stressing caution and deference to elected institutions when interpreting law.
Judicial review (USA)|The power of courts to judge laws or government actions unconstitutional.
Lame duck|An office-holder approaching the end of a term with a successor chosen or influence reduced.
Midterm elections|US congressional elections held halfway through a presidential term.
Necessary and proper clause|The provision permitting Congress to make laws needed to execute its constitutional powers.
Originalism|Constitutional interpretation giving central weight to a provision's meaning when adopted.
Oversight|Legislative scrutiny of executive actions, administration and implementation.
Pardon|Executive forgiveness of an offence or its punishment within the relevant legal authority.
Partisanship|Strong identification with or support for a political party.
Pluralist theory|The view that competing groups can influence policy and prevent a single group monopolising power.
Political Action Committee (PAC)|A US organisation raising and spending money to support political activity within applicable rules.
Popular sovereignty|The principle that ultimate political authority comes from the people.
Pork barrel politics|Seeking public spending projects that benefit particular districts or constituencies.
Presidential government|A system in which the executive has a separate electoral mandate from the legislature.
Primary election|An election selecting a party's candidate for a later contest.
Rational approach|A comparative approach explaining political behaviour through actors' calculations of interests and incentives.
Reserved powers|Powers retained by states or the people rather than delegated to the US federal government.
Senate|The US congressional chamber in which each state has two senators.
Stare decisis|The principle of following legal precedent, while allowing courts to distinguish or overturn it.
Strict constructionism|A relatively narrow reading of constitutional or statutory wording.
Structural approach|A comparative approach explaining politics through institutional arrangements and rules.
Super PAC|A US committee able to raise unlimited funds for independent spending, subject to non-coordination rules.
Supremacy clause|The constitutional provision making the Constitution and valid federal law supreme over conflicting state law.
Supreme Court (USA)|The highest court in the US federal judiciary.
Veto|The president's power to reject a bill, subject to congressional override.
Veto override|Enacting a bill despite a presidential veto through two-thirds votes in both congressional chambers.
`);

const sorted = groups => groups.flat().sort((a,b) => a.term.localeCompare(b.term, 'en-GB'));
export const glossaryCourses = [
  { id: 'ks3', label: 'History KS3', scope: 'Years 7–9: Normans, medieval and Tudor England; industry, slavery and civil rights; WWI, suffrage and dictatorship.', entries: sorted([skills, medieval, tudors, industry, war, germany, international]) },
  { id: 'igcse', label: 'IGCSE History', scope: 'Cambridge: international relations since 1919, Weimar and Nazi Germany, and historical source skills.', entries: sorted([skills, germany, international, coldwar, entries('International relations and source skills', `
Anachronism|Placing an idea, object or practice in a period where it does not belong.
Audience|The people a source was intended to reach.
Balance of power|A distribution of strength intended to prevent one state dominating others.
Blockade|Preventing supplies or movement into or out of a place.
Diplomacy|Managing relations between states through negotiation and communication.
Embargo|A ban on trade or on particular goods with a country.
Ideology|A connected set of ideas about society, power and how things should be organised.
Intervention|Action by an outside power to influence events within another state.
Kellogg–Briand Pact|The 1928 agreement renouncing war as an instrument of national policy.
Lytton Report|The League investigation into the Manchurian crisis, published in 1932.
Hoare–Laval Pact|The proposed 1935 settlement offering much of Abyssinia to Italy.
Remilitarisation|Restoring armed forces or military installations to a previously demilitarised area.
Suez Crisis|The 1956 conflict following Egypt's nationalisation of the Suez Canal.
Summit|A meeting between leading political figures, usually heads of government.
Unilateral|Undertaken by one state or actor without joint agreement.
United Nations (UN)|The international organisation founded in 1945 to promote peace and cooperation.
`)] ) },
  { id: 'ib', label: 'IB History', scope: 'Historical concepts and inquiry; feminism, Tunisia, civil rights, apartheid, Indian independence and the Cold War in Asia. Includes Indigenous rights for the Americas course.', entries: sorted([skills, india, rights, ibspecific, coldwar, entries('IB historical concepts', `
Agency|The capacity of people or groups to act and influence events within particular constraints.
Cause and consequence|An IB concept examining why developments occur and the effects that follow.
Continuity and change|An IB concept examining what persists and what alters, including pace and extent.
Historical empathy|Understanding people's choices within their own circumstances without requiring agreement with them.
Historical inquiry|Investigating a question through evidence, critical analysis and supported conclusions.
Perspectives|An IB concept examining how different positions and contexts shape understandings of the past.
Significance|An IB concept judging importance, including impact, reach, duration and meaning to different groups.
Contingency|The idea that outcomes depend on particular circumstances and were not inevitable.
Determinism|Explaining events as outcomes fixed by underlying forces, with limited room for individual choice.
Memory|How individuals and communities recall and represent the past.
Revisionist historian|A historian challenging an established account through new evidence or a different analytical approach.
`)] ) },
  { id: 'alevel-history', label: 'A Level History', scope: 'Pearson Edexcel: USA 1917–96; India 1914–48; rebellion and disorder under the Tudors 1485–1603; German imperialism and WWI origins coursework.', entries: sorted([skills, tudors, india, rights, america, advanced, war, entries('Advanced historical argument', `
AO1 (History)|Knowledge and understanding used to analyse historical developments and reach substantiated judgements.
AO2 (History)|Analysis and evaluation of primary or contemporary sources in their historical context.
AO3 (History)|Analysis and evaluation of different interpretations of the past.
Breadth study|An examination of developments across a substantial period, often organised thematically.
Depth study|A detailed investigation of a more tightly defined period or issue.
Disparity|A significant difference or inequality between groups or conditions.
Economic factor|A cause or influence involving production, employment, income, trade or resources.
Political factor|A cause or influence involving government, institutions, leadership or power.
Social factor|A cause or influence involving relationships, class, communities or everyday life.
Synthesis|Bringing evidence and arguments together to form a coherent overall explanation.
Thematic argument|An argument organised around factors or themes rather than a sequence of events.
Weight of evidence|The combined strength and relevance of evidence supporting a conclusion.
`)] ) },
  { id: 'alevel-politics', label: 'A Level Politics', scope: 'Pearson Edexcel: UK politics and government; liberalism, conservatism, socialism and nationalism; USA and comparative politics. Definitions support both existing and September 2026 course materials.', entries: sorted([politicsDemocracy, politicsGovernment, ideologies, usaPolitics, entries('Political analysis and rights', `
AO1 (Politics)|Knowledge and understanding of political institutions, processes, concepts, theories and issues.
AO2 (Politics)|Analysis of political information, including connections and comparisons.
AO3 (Politics)|Evaluation of political information and construction of reasoned judgements and arguments.
Analysis (Politics)|Explaining political relationships, causes, implications and comparisons using evidence.
Anarchy|The absence of an overarching political authority.
Civil rights|Rights securing equal citizenship and protection against discrimination.
Consensus|Broad agreement among political actors or within society.
Counterargument|A reasoned challenge to a claim that should be weighed in the final judgement.
Democracy|Government based on popular participation and political accountability, through direct or representative arrangements.
Elite theory|The view that power is concentrated among a relatively small dominant group.
Equality|Equal status or treatment; specify whether discussing rights, opportunity or outcomes.
Evaluation (Politics)|Weighing evidence and competing arguments to reach a supported judgement.
Freedom|The ability to act without unjustified constraint; different ideologies define its requirements differently.
Globalisation|Increasing cross-border connections in economic, political, cultural and social life.
Human rights|Rights held by people by virtue of being human.
Ideology|A connected set of ideas explaining society and proposing how political life should be organised.
Liberal rights|Protections for individual freedom, legal equality and limits on government power.
Majority|More than half of a defined total.|Specify whether the total is votes cast, seats or the whole membership.
Minority rights|Protections ensuring smaller groups are not deprived of basic rights by majority rule.
Political power|The capacity to shape decisions, behaviour or political outcomes.
Race|A socially constructed classification with significant historical and political consequences.
Rational choice|An approach explaining behaviour through choices made in pursuit of perceived interests.
Rights|Entitlements recognised through moral principles, political claims or law.
Secularism|The principle of separating religious authority from government or maintaining state neutrality on religion.
`)] ) }
];

export function filterGlossary(courseId, query = '', topic = '', letter = '') {
  const course = glossaryCourses.find(item => item.id === courseId) || glossaryCourses[0];
  const normalise = text => text.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
  const words = normalise(query.trim()).split(/\s+/).filter(Boolean);
  return course.entries.filter(entry => (!topic || entry.topic === topic) && (!letter || entry.term[0].toUpperCase() === letter) && words.every(word => normalise(`${entry.term} ${entry.definition} ${entry.example} ${entry.topic}`).includes(word)));
}
