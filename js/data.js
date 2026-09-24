/**
 * Course content lives here. To add or edit a week, quiz question, persona, or
 * timeline event, just update the arrays below — no need to touch the HTML/CSS,
 * the page is rendered from this data automatically.
 *
 * Course: POL3415 Diplomatic History — Peace of Westphalia (1648) through the
 * end of World War II (1945). Source: official course syllabus.
 */

const COURSE = {
  code: "POL3415",
  title: "Diplomatic History",
  instructor: "Asst. Prof. Atakan Yılmaz",
  semester: "Fall 2026–2027",
  schedule: "Fridays, 09:30–12:20 · Room B402",
  credits: "3 Credits · 5 ECTS",
  requiredBooks: [
    "Henry Kissinger, Diplomacy — Simon & Schuster, 1994",
    "Norman Lowe, Mastering Modern World History (5th ed.) — Palgrave Macmillan, 2013",
    "Eric Hobsbawm, The Age of Extremes: 1914–1991 — Abacus, 1994",
  ],
  grading: [
    { component: "Quizzes", weight: 15 },
    { component: "Midterm Exam", weight: 35 },
    { component: "Final Exam", weight: 50 },
  ],
};

// Eras: color and label definitions. The `id` field is matched against the
// `era` field on both weeks and timeline events.
const ERAS = [
  { id: "foundations", label: "Foundations of Sovereignty", color: "#2e7d6b" },
  { id: "revolutions", label: "Revolutions & the Napoleonic Order", color: "#4a5aa8" },
  { id: "nationalism", label: "Nationalism & the Alliance System", color: "#a8763e" },
  { id: "world-wars", label: "The Age of World Wars", color: "#b0413e" },
];

/**
 * The 8 diplomat personas the quiz can match a student to. `weekRef` is the
 * week number the "Continue to the course" action scrolls to and highlights.
 */
const PERSONAS = [
  {
    id: "richelieu",
    name: "Cardinal Richelieu",
    epithet: "The Sovereign Architect",
    icon: "♟️",
    weekRef: 2,
    description:
      "You put the state's own interest first — not religion, not family ties. Shared interest is what makes a deal hold. That way of thinking is exactly what set Europe on the path to the Peace of Westphalia in 1648, where this course begins.",
  },
  {
    id: "napoleon",
    name: "Napoleon Bonaparte",
    epithet: "The Revolutionary Conqueror",
    icon: "⚔️",
    weekRef: 4,
    description:
      "You're impatient with the old order and certain that decisive action redraws the map faster than any congress. That instinct built — and then broke — an empire, and forced the rest of Europe to invent a new balance-of-power system just to contain you.",
  },
  {
    id: "metternich",
    name: "Klemens von Metternich",
    epithet: "The Balancer",
    icon: "⚖️",
    weekRef: 4,
    description:
      "Order and balance matter more to you than any single win. After Napoleon's fall, that instinct built the Concert of Europe — a system that kept the great powers from all-out war for decades.",
  },
  {
    id: "bismarck",
    name: "Otto von Bismarck",
    epithet: "The Realist Strategist",
    icon: "🛠️",
    weekRef: 5,
    description:
      "Precise, patient, and allergic to sentiment — you unify what can be unified, then spend the rest of your career weaving an alliance system so intricate that no one dares move first.",
  },
  {
    id: "grey",
    name: "Sir Edward Grey",
    epithet: "The Crisis Diplomat",
    icon: "🕯️",
    weekRef: 6,
    description:
      "You watch alliances tighten into tripwires and do everything possible to hold the peace — right up until you can't. In 1914, Grey warned, \"The lamps are going out all over Europe.\" That tension defines the weeks before the First World War.",
  },
  {
    id: "wilson",
    name: "Woodrow Wilson",
    epithet: "The Idealist",
    icon: "📜",
    weekRef: 9,
    description:
      "You're convinced the world can be remade on principle, not just power. Your Fourteen Points and the League of Nations tried to build a peace that would actually hold — the fragile hope at the center of the inter-war years.",
  },
  {
    id: "churchill",
    name: "Winston Churchill",
    epithet: "The Wartime Statesman",
    icon: "🦁",
    weekRef: 11,
    description:
      "Stubborn, defiant, and certain that surrender is never actually an option — that resolve carried Britain through its darkest years of the Second World War.",
  },
  {
    id: "roosevelt",
    name: "Franklin D. Roosevelt",
    epithet: "The Coalition Builder",
    icon: "🦅",
    weekRef: 11,
    description:
      "Pragmatic and coalition-minded, willing to ally with anyone to win — then shape the peace that follows at the negotiating table, from Tehran to Yalta to Potsdam.",
  },
];

/**
 * The matching quiz. Each option carries the id of the persona it favors.
 * Scores accumulate across all 6 questions; the highest-scoring persona wins.
 */
const QUIZ = [
  {
    question: "A crisis breaks out between two rival powers. What's your first move?",
    options: [
      { text: "Convene a grand congress to redraw the balance of power.", persona: "metternich" },
      { text: "Strike first, decisively, before your rivals can organize.", persona: "napoleon" },
      { text: "Quietly build a web of alliances to contain the threat.", persona: "bismarck" },
      { text: "Propose a permanent international body so this never happens again.", persona: "wilson" },
    ],
  },
  {
    question: "What matters most to you at the negotiating table?",
    options: [
      { text: "Sovereignty — every state minds its own house, and peace follows.", persona: "richelieu" },
      { text: "Justice and principle, even if it slows things down.", persona: "wilson" },
      { text: "Cold calculation of interests — sentiment has no place here.", persona: "bismarck" },
      { text: "Holding the coalition together, whatever the compromise.", persona: "roosevelt" },
    ],
  },
  {
    question: "Your country faces overwhelming odds in a great war. What do you do?",
    options: [
      { text: "Rally the nation and refuse to yield an inch.", persona: "churchill" },
      { text: "Forge a grand alliance with even unlikely partners.", persona: "roosevelt" },
      { text: "Negotiate from strength, built on years of quiet alliance-building.", persona: "bismarck" },
      { text: "Already start planning the peace that must follow.", persona: "wilson" },
    ],
  },
  {
    question: "How do you feel about revolutionary change?",
    options: [
      { text: "It threatens the legitimate order — stability must come first.", persona: "metternich" },
      { text: "It's the future — outdated orders deserve to fall.", persona: "napoleon" },
      { text: "It's a threat that skilled, patient diplomacy must manage.", persona: "grey" },
      { text: "Channeled through the right coalition, it can build something more just.", persona: "roosevelt" },
    ],
  },
  {
    question: "Which title would you rather carry into the history books?",
    options: [
      { text: "The Cardinal who ended a continent's holy wars.", persona: "richelieu" },
      { text: "The General who redrew Europe's borders.", persona: "napoleon" },
      { text: "The Foreign Secretary who tried to keep the lamps from going out.", persona: "grey" },
      { text: "The Prime Minister who never surrendered.", persona: "churchill" },
    ],
  },
  {
    question: "The guns finally fall silent. What's your priority?",
    options: [
      { text: "Balance power among the victors so no one dominates again.", persona: "metternich" },
      { text: "Make sure your alliances outlast the peace conference.", persona: "grey" },
      { text: "Secure clear borders and sovereignty for the exhausted states.", persona: "richelieu" },
      { text: "Rally your people to stay vigilant against future threats.", persona: "churchill" },
    ],
  },
];

// Weekly syllabus (12 weeks) — topics and required (*) readings from the official syllabus.
const WEEKS = [
  {
    week: 1,
    hook: "Where Diplomacy Begins",
    topic: "Introduction to the Course",
    summary: "What diplomacy is, why its history matters for reading the present, and how this semester is built.",
    required: ["Kissinger, Diplomacy (Ch. 1–2)"],
    assessment: null,
    era: "foundations",
    icon: "🎓",
  },
  {
    week: 2,
    hook: "A Treaty That Invents the Modern State",
    topic: "Birth of Modern States & State Sovereignty: Peace of Westphalia",
    summary: "The Thirty Years' War ends, and sovereignty becomes the principle every state since has had to answer to.",
    required: [
      "Matteucci, \"Peace of Westphalia: How Europe's Peace Shaped Global Power Struggles,\" Diplo, 2015",
      "Patton, \"The Peace of Westphalia and Its Effects on International Relations, Diplomacy and Foreign Policy,\" The Histories, 2019",
    ],
    assessment: null,
    era: "foundations",
    icon: "📜",
  },
  {
    week: 3,
    hook: "Two Revolutions Shake the Old World",
    topic: "Revolutions: American and French Revolutions",
    summary: "Popular sovereignty enters the diplomatic vocabulary, and the legitimacy of dynastic rule is never quite the same.",
    required: ["Spielvogel, Western Civilization (7th ed., pp. 564–586)"],
    assessment: null,
    era: "revolutions",
    icon: "⚡",
  },
  {
    week: 4,
    hook: "One Man's Empire, Europe's Answer",
    topic: "Napoleonic Wars and the Concert of Europe",
    summary: "Napoleon's conquests overturn the old balance; the powers that beat him design a new system so it can't happen again.",
    required: ["Kissinger, Diplomacy (Ch. 4)"],
    assessment: "Quiz 1",
    era: "revolutions",
    icon: "⚔️",
  },
  {
    week: 5,
    hook: "Blood, Iron, and Unification",
    topic: "Age of Nationalism: German & Italian Unification — Bismarck's Diplomacy",
    summary: "Nationalism reshapes the map, and Bismarck builds an alliance system precise enough to keep the peace he engineered.",
    required: ["Kissinger, Diplomacy (Ch. 5–6)"],
    assessment: null,
    era: "nationalism",
    icon: "🛠️",
  },
  {
    week: 6,
    hook: "Alliances Tighten Into Tripwires",
    topic: "The Pre–World War I Era",
    summary: "Rigid alliance blocs, an arms race, and a diplomatic system running out of room to absorb the next crisis.",
    required: ["Kissinger, Diplomacy (Ch. 7)"],
    assessment: "Quiz 2",
    era: "nationalism",
    icon: "⏳",
  },
  {
    week: 7,
    hook: "The Lamps Go Out",
    topic: "The Pre–World War I Era (continued) & Midterm Exam",
    summary: "The last attempts to hold the peace fail, and Europe's crisis diplomacy runs out of time.",
    required: ["Kissinger, Diplomacy (Ch. 7)"],
    assessment: "Midterm Exam",
    era: "nationalism",
    icon: "🕯️",
  },
  {
    week: 8,
    hook: "Europe Tears Itself Apart",
    topic: "The First World War",
    summary: "Total war on a scale no diplomat had planned for, and the collapse of the system that was meant to prevent it.",
    required: ["Kissinger, Diplomacy (Ch. 8)"],
    assessment: null,
    era: "world-wars",
    icon: "💥",
  },
  {
    week: 9,
    hook: "A Fragile Peace, A Fraying Order",
    topic: "The Inter-War Years: 1919–1939",
    summary: "Wilson's Fourteen Points, the Treaty of Versailles, and a League of Nations built on hope it couldn't fully carry.",
    required: ["Kissinger, Diplomacy (Ch. 9–10, 12)"],
    assessment: "Quiz 3",
    era: "world-wars",
    icon: "🏛️",
  },
  {
    week: 10,
    hook: "The Peace That Couldn't Hold",
    topic: "The Inter-War Years: 1919–1939 (continued)",
    summary: "Appeasement, collapsing collective security, and the slow unraveling of the postwar settlement.",
    required: ["Kissinger, Diplomacy (Ch. 9–10, 12)"],
    assessment: null,
    era: "world-wars",
    icon: "🌪️",
  },
  {
    week: 11,
    hook: "The World at War, Again",
    topic: "The Second World War (1939–1945)",
    summary: "A war that remakes alliances entirely, forcing former rivals into the coalition that will decide the postwar order.",
    required: ["Kissinger, Diplomacy (Ch. 14)"],
    assessment: "Quiz 4",
    era: "world-wars",
    icon: "🌍",
  },
  {
    week: 12,
    hook: "Victors Draw the Next Map",
    topic: "The Second World War (1939–1945) (continued)",
    summary: "Tehran, Yalta, and Potsdam: the conferences where the victors sketch the world that follows 1945.",
    required: ["Kissinger, Diplomacy (Ch. 14)"],
    assessment: "Quiz 5",
    era: "world-wars",
    icon: "🤝",
  },
];

// Timeline / infographic events
const TIMELINE = [
  {
    year: "1648",
    title: "Peace of Westphalia",
    text: "Ended the Thirty Years' War; sovereign statehood became the foundation of modern diplomacy.",
    era: "foundations",
    icon: "📜",
  },
  {
    year: "1789",
    title: "The French Revolution",
    text: "Popular sovereignty entered diplomacy, challenging the legitimacy of dynastic statecraft.",
    era: "revolutions",
    icon: "⚡",
  },
  {
    year: "1799–1815",
    title: "Napoleon's Rise and Empire",
    text: "Napoleon's conquests overturned the old diplomatic balance across the continent.",
    era: "revolutions",
    icon: "⚔️",
  },
  {
    year: "1815",
    title: "Congress of Vienna",
    text: "Rebuilt the European order after Napoleon; launched the Concert of Europe.",
    era: "revolutions",
    icon: "🕯️",
  },
  {
    year: "1871",
    title: "German Unification",
    text: "The German Empire was founded under Bismarck's leadership, reshaping the European balance of power.",
    era: "nationalism",
    icon: "🏛️",
  },
  {
    year: "1878",
    title: "Congress of Berlin",
    text: "Redrew the status of the Balkans at the heart of the Eastern Question.",
    era: "nationalism",
    icon: "📋",
  },
  {
    year: "1882–1907",
    title: "Rival Alliance Blocs Complete",
    text: "The Triple Alliance and Triple Entente locked Europe into two opposing camps.",
    era: "nationalism",
    icon: "🤝",
  },
  {
    year: "1914",
    title: "Outbreak of World War I",
    text: "The July Crisis exposed the collapse of crisis diplomacy, igniting a global war.",
    era: "world-wars",
    icon: "💥",
  },
  {
    year: "1918",
    title: "Armistice Ends the Fighting",
    text: "The guns fall silent after four years of total war, leaving the peace still to be negotiated.",
    era: "world-wars",
    icon: "🏳️",
  },
  {
    year: "1919",
    title: "Paris Peace Conference & Treaty of Versailles",
    text: "Wilson's Fourteen Points were debated; harsh terms were imposed on Germany.",
    era: "world-wars",
    icon: "🖋️",
  },
  {
    year: "1920",
    title: "League of Nations Founded",
    text: "The first global organization built on collective security began operating — without the United States.",
    era: "world-wars",
    icon: "🕊️",
  },
  {
    year: "1933",
    title: "Hitler Comes to Power in Germany",
    text: "The inter-war settlement begins to unravel as revisionist powers reject the postwar order.",
    era: "world-wars",
    icon: "⚠️",
  },
  {
    year: "1938",
    title: "Munich Agreement",
    text: "The emblem of appeasement: Czechoslovakia's Sudetenland was ceded to Germany.",
    era: "world-wars",
    icon: "📄",
  },
  {
    year: "1939",
    title: "World War II Begins",
    text: "The Molotov–Ribbentrop Pact and the invasion of Poland trigger a second global war.",
    era: "world-wars",
    icon: "🖊️",
  },
  {
    year: "1943",
    title: "Tehran Conference",
    text: "The Allies (US, UK, USSR) meet for the first time to begin shaping the postwar order.",
    era: "world-wars",
    icon: "🕰️",
  },
  {
    year: "1945",
    title: "Yalta & Potsdam Conferences; UN Founded",
    text: "The postwar world order is designed by the victors; the United Nations is established.",
    era: "world-wars",
    icon: "🌍",
  },
];

/**
 * The four recurring analytical angles used to break down every week's story.
 * ANGLES[weekNum][angle.id] holds that week's paragraph for this angle.
 */
const ANGLE_DEFS = [
  { id: "diplomatic", label: "The Diplomatic Angle", icon: "🕴️" },
  { id: "human", label: "The Human Cost", icon: "👤" },
  { id: "perception", label: "How It Was Seen at the Time", icon: "🗞️" },
  { id: "legacy", label: "The Long View", icon: "🕰️" },
];

/**
 * Optional video per week: a real, verified YouTube video students can watch
 * to see the week's events explained. `id` is the YouTube video id (used to
 * build both the embed and the watch-on-YouTube link). Week 1 has none — it's
 * a course overview, not a single historical event.
 */
const VIDEOS = {
  2: { id: "miWYdz28kw4", title: "The Peace of Westphalia: How a 1648 Treaty Created the Modern State", channel: null },
  3: { id: "lTTvKwCylFY", title: "The French Revolution", channel: "CrashCourse World History #29" },
  4: { id: "DuVw9sGpWUc", title: "The Congress of Vienna", channel: "CrashCourse European History #23" },
  5: { id: "KSjDe9_jZk8", title: "Italian and German Unification", channel: "CrashCourse European History #27" },
  6: { id: "KGlmlSTn-eM", title: "The Roads to World War I", channel: "CrashCourse European History #32" },
  7: { id: "_XPZQ0LAlR4", title: "Archdukes, Cynicism, and World War I", channel: "CrashCourse World History #36" },
  8: { id: "IIiDULrXaqQ", title: "World War I Battlefields", channel: "CrashCourse European History #33" },
  9: { id: "ajX0wsneBlg", title: "President Wilson, The League of Nations, and Treaty of Versailles", channel: "History For Humans" },
  10: { id: "Ojo8-GhhQcA", title: "Economic Depression and Dictators", channel: "CrashCourse European History #37" },
  11: { id: "Q78COTwT7nE", title: "World War II", channel: "CrashCourse World History #38" },
  12: { id: "q3mRScGa0f0", title: "The Big Three Conferences: Tehran, Yalta, Potsdam", channel: null },
};

/**
 * Per-week metadata: a one-line "why this matters" hook, and a Britannica
 * search query used to build a "Learn more" link for further reading.
 */
const WEEK_META = {
  1: {
    whyItMatters: "This week is your map for the whole course. It shows the four big eras and the big questions — and why old diplomacy still shapes how countries deal with each other today.",
    britannicaQuery: "history of diplomacy",
  },
  2: {
    whyItMatters: "The Peace of Westphalia is the most famous starting point in the study of international relations. It's where the \"sovereign state\" became the basic building block of world politics — a rule still used today, over 375 years later.",
    britannicaQuery: "Peace of Westphalia",
  },
  3: {
    whyItMatters: "Two revolutions brought a new idea into diplomacy: power could come from the people, not just from a king. Diplomats have had to deal with public opinion and nationalism ever since.",
    britannicaQuery: "French Revolution",
  },
  4: {
    whyItMatters: "Napoleon's wars broke the old balance of power in Europe. The peace that followed — the Concert of Europe — is one of history's best examples of great powers working together to avoid a big war, for almost 100 years.",
    britannicaQuery: "Congress of Vienna",
  },
  5: {
    whyItMatters: "Bismarck's alliance system is a classic example of realist diplomacy: three wars planned on purpose, one united Germany, and a web of treaties so complex that almost no one after him could manage it.",
    britannicaQuery: "unification of Germany",
  },
  6: {
    whyItMatters: "By 1914, Europe had built a system — strict alliances, tight timetables, an arms race — that was almost perfectly designed to turn one small crisis into a huge war.",
    britannicaQuery: "causes of World War I",
  },
  7: {
    whyItMatters: "The July Crisis is still the most studied example of diplomacy failing in real time. In just five weeks, small decisions that each made sense on their own added up to a war almost no one actually wanted.",
    britannicaQuery: "July crisis 1914",
  },
  8: {
    whyItMatters: "World War I didn't just kill people on a scale no one had seen before. It also created secret wartime deals and broken promises that made peace — and the Middle East — much harder to sort out later.",
    britannicaQuery: "World War I",
  },
  9: {
    whyItMatters: "Versailles is the classic example of the difference between a harsh peace and a lasting one. And the League of Nations was the first real attempt at collective security — even though it was weakened from the start.",
    britannicaQuery: "Treaty of Versailles",
  },
  10: {
    whyItMatters: "Appeasement is the policy every later debate about diplomacy versus toughness still points back to. It came from real, understandable exhaustion after one world war — but it still failed to stop the next one.",
    britannicaQuery: "appeasement policy",
  },
  11: {
    whyItMatters: "The alliances that fought World War II were built out of need, not trust. Watching them form shows how fast diplomacy can turn an enemy into a friend — or the other way around.",
    britannicaQuery: "World War II",
  },
  12: {
    whyItMatters: "The meetings that ended this war — Tehran, Yalta, Potsdam — did more than stop the fighting. They drew the lines that the next 50 years of world politics, including the Cold War, would follow.",
    britannicaQuery: "Yalta Conference",
  },
};

/**
 * Four analytical-angle paragraphs per week, keyed by ANGLE_DEFS id.
 */
const ANGLES = {
  1: {
    diplomatic: "Diplomacy's main job is managing power without constant war — through treaties, alliances, and talking instead of fighting. But its tools have never stayed the same. A cardinal in the 1600s could use secret royal marriages and religious authority. A president in the 1900s has to answer to newspapers and voters instead. This course is really a history of diplomats having to invent new tools every time the old ones stopped working.",
    human: "Every treaty in this course was signed over the lives of people who never got a say in it — soldiers, farmers, refugees, and civilians whose lives were changed by decisions made in rooms they never entered. Keeping that human cost in mind, next to the maps and treaties, is part of what this course asks of you.",
    perception: "How people understood diplomacy changed a lot across these three centuries — from a private conversation among nobles that most people never heard about, to front-page news shaping elections and public mood by the 1900s. Watching that shift is one of the main threads running through this course.",
    legacy: "Historians still argue about almost everything in this story — whether Westphalia really changed as much as people say, whether appeasement was a mistake or simply the least bad option at the time, whether the Cold War that came after 1945 was unavoidable. This course won't settle those arguments. But it will give you the background to make your own case.",
  },
  2: {
    diplomatic: "Ending a war with this many sides needed real new ideas. Diplomats set up permanent embassies. They treated small states as formal equals to big ones, at least on paper. And they held two separate meetings at the same time so rival religious groups could each negotiate somewhere they trusted. A lot of what looks like ordinary diplomatic manners today was invented here first.",
    human: "The Thirty Years' War hit ordinary people in the German lands the hardest — unpaid armies that lived off whatever land they marched through, famine and disease following behind them, and in some places, over a third of the population gone. When peace finally came, people felt relief more than victory.",
    perception: "The Pope condemned the peace treaties in the strongest words he had — and every Catholic power that signed them simply ignored him. That, more than any single clause in the treaty, is what people at the time understood it to mean: religious authority no longer had a veto over how European states ran themselves.",
    legacy: "The field of international relations still uses the phrase \"Westphalian sovereignty\" as shorthand for the whole modern state system — no outside interference, control over your own territory, formal equality between states. Historians argue about how much really changed overnight in 1648 versus how much of this is a story told backward to explain a slower process. But the label has stuck for a reason.",
  },
  3: {
    diplomatic: "France's choice to back the American rebels in 1778 is a classic example of old-fashioned power politics serving a brand-new cause: the French court cared little about American ideals and a lot about weakening Britain. A decade later, European courts faced the mirror image of that problem — a revolutionary French government that their old tools of royal diplomacy had no good way to deal with.",
    human: "The storming of the Bastille freed only seven prisoners — its meaning was almost entirely symbolic, a crowd tearing down what a hated system stood for, rather than rescuing large numbers of people. That gap between the small event and its huge symbolic weight is worth watching for throughout this course. Revolutions are won as much through story as through tactics.",
    perception: "European courts didn't first treat the French Revolution as a foreign-policy problem so much as a dangerous idea spreading — the fear was less that France would invade than that the idea of executing a king might catch on elsewhere. That fear led to the disastrous decision to invade France and try to restore the monarchy, which backfired by making the revolution more extreme instead of ending it.",
    legacy: "Both revolutions are usually credited with bringing in \"the nation\" as a new source of political power, alongside — and later instead of — royal bloodlines. After 1789, diplomats could no longer assume that a treaty signed by a king settled anything for good. A public, or a nation claiming to speak for one, might reject the deal. That problem doesn't go away for the rest of this course.",
  },
  4: {
    diplomatic: "Napoleon's skill was as much diplomatic as military — he broke one coalition after another not just by winning battles, but by offering each enemy, one at a time, a deal good enough to pull it away from the alliance against him. The powers who finally beat him understood this. That's why the Congress of Vienna deliberately avoided crushing France, and instead brought it back into the club of great powers — a calculated bet that including France would be more stable than humiliating it.",
    human: "Napoleonic warfare was new not just in size but in kind — mass conscription (the levée en masse) turned entire national populations into armies. Campaigns like the 1812 invasion of Russia killed soldiers by the hundreds of thousands, mostly from cold and hunger rather than combat. The army that marched into Russia 600,000 strong came home as a small fraction of that.",
    perception: "Napoleon was, and still is, one of history's most argued-about figures — to some, a liberator who spread modern legal reforms (the Napoleonic Code); to others, a conqueror who cost Europe millions of lives to satisfy his own ambition. Both views existed at the same time among people who lived through it, and both still show up in how he's taught today.",
    legacy: "The Concert of Europe that came out of Vienna is one of the most often-cited examples in international relations theory — proof, to some scholars, that great powers really can keep a stable balance of power through regular talks instead of war. Its near-century of relative peace is the standard that every later attempt at collective security, including the League of Nations and the UN, gets compared to.",
  },
  5: {
    diplomatic: "Bismarck's most famous line — that big questions get settled \"by iron and blood,\" not speeches and votes — was a direct rejection of the peaceful, parliamentary path to unification that others in Prussia wanted. He then proved it by engineering three wars in under ten years, each one planned carefully enough to get exactly the result he wanted, and no more.",
    human: "Bismarck deliberately kept the 1866 war against Austria short — just seven weeks — not out of kindness, but calculation. He wanted Austria beaten enough to give in, but not so badly hurt that it couldn't later be a useful, friendly neighbor. It's a reminder that even wars planned on purpose still involve real human costs their architects are actively managing, not just accepting.",
    perception: "Choosing to declare the new German Empire in the Hall of Mirrors at the Palace of Versailles — the home of the French kings Prussia had just defeated — was read across Europe exactly as intended: a deliberate, public insult to France. That French resentment is often pointed to as one thread connecting 1871 to the much harsher terms France would demand at Versailles in 1919.",
    legacy: "Bismarck's alliance system is often taught as the high point of pure realist diplomacy — and also as a warning, because it depended entirely on his personal skill at balancing several half-contradictory promises at once. Most historians agree that almost no one after him could have run it the same way. That's exactly what the next two weeks of this course go on to show.",
  },
  6: {
    diplomatic: "Kaiser Wilhelm II letting the Reinsurance Treaty with Russia lapse, right after firing Bismarck, is one of history's most costly acts of diplomatic carelessness. It opened the door to exactly the Franco-Russian alliance Bismarck had spent twenty years trying to prevent — and it happened less through careful planning than through a new ruler wanting to run things his own way.",
    human: "The Anglo-German naval race wasn't a quiet matter handled only by admirals — it was front-page news and a point of national pride in both countries, with newspapers tracking new warships the way today's outlets track election polls. Ordinary people on both sides of the North Sea grew up genuinely expecting a war, years before it came.",
    perception: "Each crisis in this period — the Morocco standoffs of 1905 and 1911, the Balkan Wars of 1912–13 — was treated at the time as a test of nerve as much as a specific dispute. Each power was calculating not just the issue itself, but what backing down might signal about its willingness to fight later. That kind of thinking is a big reason the system had so little room left to calm down by 1914.",
    legacy: "Historians describe the pre-1914 alliance system as a machine almost perfectly built for fast escalation: strict mobilization schedules that couldn't be paused once started, alliance promises that turned local arguments into great-power obligations, and military plans that all assumed attacking first would win, not defending. It's one of the most common case studies in political science for how a system's structure — not just individual choices — can cause a war nobody fully wanted.",
  },
  7: {
    diplomatic: "Germany's \"blank check\" to Austria-Hungary — an unconditional promise of support sent within days of the assassination — removed the one thing that might have kept the crisis small. Historians still argue about whether German leaders understood they were risking a full European war, or genuinely believed, like in earlier crises, that Russia would back down instead of fight.",
    human: "Serbia's reply to the July ultimatum was surprisingly cooperative — it agreed to nearly every demand Austria-Hungary made. Austria-Hungary declared war anyway, saying the response wasn't good enough. That detail often gets left out of popular memory of 1914, but it's central to why historians treat this crisis as a lesson in how leaders can talk themselves into a war that was, on paper, still avoidable even very late in the process.",
    perception: "The phrase \"it will be over by Christmas\" says something real about 1914: almost every general staff in Europe had planned for a short, fast war, and troop movement schedules were built around that idea. The shock of the four-year stalemate that followed is part of why the war left such a deep mark on the political culture of every country involved.",
    legacy: "Sir Edward Grey's line — \"the lamps are going out all over Europe\" — is one of the most quoted sentences in diplomatic history, and it deserves to be taken seriously as more than just a memorable phrase. Grey meant that an entire style of diplomacy — built on personal relationships between aristocratic foreign ministers with wide freedom to act — was ending along with the peace. He was right.",
  },
  8: {
    diplomatic: "Wartime diplomacy ran on two tracks that often contradicted each other: public talk about self-determination and a better postwar world, and secret deals like the Sykes-Picot agreement, which divided Ottoman land between Britain and France years before the war even ended. Those contradictions — including overlapping promises to Arab leaders and, separately, the Balfour Declaration — would shape the peace talks and the wider Middle East for generations after the fighting stopped.",
    human: "The first day of the Battle of the Somme alone caused around 60,000 British casualties, for land gains measured in a few hundred yards. That ratio of huge cost to tiny gain became how this war is remembered. New technology — machine guns, poison gas, and eventually tanks — made killing much more efficient without making the war meaningfully faster to win, for years at a time.",
    perception: "The United States joining the war in 1917 — pushed by unrestricted German submarine attacks and the leaked Zimmermann Telegram proposing a German-Mexican alliance — visibly changed how the world saw the conflict, from a European argument to a truly global war. It also brought a new voice, Woodrow Wilson's, into the eventual peace talks, with very different priorities than the worn-out European powers.",
    legacy: "The Armistice of November 11, 1918 is often misunderstood as the end of the war, when really it was just a ceasefire. The actual peace terms — and everything that would go right, and badly wrong, with them — were still a full year of negotiation away. That's exactly where next week's story picks up.",
  },
  9: {
    diplomatic: "Leaving Germany out of the actual talks in Paris — handing it terms to sign rather than debate — was a deliberate choice by the winning powers, and one of the most important in the whole settlement. It let the Big Four sort out their own competing goals (Wilson's ideals, Clemenceau's security needs, British and Italian territorial interests) without German input getting in the way — at the direct cost of Germany ever accepting the result.",
    human: "Reparations and the \"war guilt\" clause weren't just abstract treaty language to people in Germany — they were a real, ongoing squeeze on everyday economic life for over a decade. It was a grievance that stayed personal and painful for millions of people long after the treaty was signed, and one that extreme politicians proved very good at using.",
    perception: "Wilson's Fourteen Points were heard, across occupied and colonized populations around the world — not just in Europe — as a real promise of self-rule. The actual settlement mostly didn't deliver on that promise outside of Europe, and that gap between the promise and the result shaped anti-colonial movements for decades to come, far beyond what the treaty's authors were thinking about.",
    legacy: "The League of Nations is usually taught as a noble failure — a genuinely new idea, collective security, undercut from the start by the U.S. Senate refusing to let its own designer's country join. Historians disagree about how much the missing American membership actually mattered, versus how much a harsh settlement toward Germany was always going to cause a crisis the League couldn't have stopped anyway.",
  },
  10: {
    diplomatic: "The Locarno Treaties of 1925 and the Kellogg-Briand Pact of 1928 were real diplomatic achievements — Germany willingly accepting its western borders, dozens of countries formally giving up war. People at the time treated both as genuine, lasting progress. Their near-total collapse within a decade is a sharp lesson in how much international deals depend on the political and economic conditions underneath them, not just the words on the page.",
    human: "The Great Depression, starting in 1929, meant mass unemployment — and in Germany especially, it revived the still-fresh memory of the early-1920s hyperinflation that had wiped out ordinary people's savings. That mix of economic desperation and lingering anger over Versailles created exactly the conditions where a movement promising simple, forceful answers could win mass support fast.",
    perception: "Chamberlain's promise of \"peace for our time\" after Munich was met, in the moment, with real relief and even celebration in Britain and France — a war-exhausted public badly wanted to believe it. That belief collapsing within a year, as Germany took over the rest of Czechoslovakia, left a lasting mark on how democracies think about negotiating with countries determined to break the rules.",
    legacy: "Appeasement is still one of the most argued-over policies in diplomatic history. Was it a moral failure, or a reasonable — if ultimately failed — attempt by exhausted democracies to avoid repeating 1914–18 while they rearmed? Every later debate about toughness versus talking, from the Cold War to today, points back to Munich as the example, for better or worse.",
  },
  11: {
    diplomatic: "The Molotov-Ribbentrop Pact is one of history's starkest examples of enemies making a purely practical deal. Nazi Germany and the Soviet Union had spent years attacking each other in speeches — then signed a non-aggression pact, with secret terms dividing Eastern Europe between them, within days. It gave Hitler a two-front war avoided, at least for a while, and gave Stalin the time and territory he badly wanted.",
    human: "For the people of Poland, the war didn't arrive as a radio announcement — it arrived as planes overhead before war was even formally declared, followed weeks later by a second invasion from the east once the Soviet Union moved in under the pact's secret terms. Poland was effectively split between two invading powers in the opening weeks of the war.",
    perception: "Operation Barbarossa's launch in June 1941 shocked even many of Germany's own military leaders, and it instantly changed how the Soviet Union was seen by the Allies and the public — from an awkward, distrusted non-aggression partner of Germany to an essential wartime ally of Britain, and soon the United States, almost overnight.",
    legacy: "The alliance that eventually won the war — Britain, the Soviet Union, and the United States working together — was built entirely on shared necessity, not trust or shared values. That underlying distrust never fully went away, even at the height of wartime cooperation. It's the seed of the Cold War tension that shows up again at the very end of this course.",
  },
  12: {
    diplomatic: "The Tehran Conference of 1943 marked something genuinely new: the first time the future Big Three winners sat in the same room to talk not just about winning the war, but about what the postwar world should look like — while the outcome was still genuinely uncertain. Every conference that followed, Yalta and Potsdam, was built directly on the relationships and expectations set there.",
    human: "World War II's total death toll — usually estimated at 70 to 85 million people — makes it the deadliest conflict in human history. That scale of loss is the backdrop against which every decision at Yalta and Potsdam has to be understood. The diplomats drawing new borders and zones of influence were doing it over a continent, and a world, in real ruins.",
    perception: "Yalta's agreements were presented to the public at the time as a triumph of Allied unity, even as private distrust between the Western powers and the Soviet Union was already visible underneath — especially over the political future of Poland. News coverage at the time mostly reflected the public optimism. The tensions became impossible to ignore only in the months that followed.",
    legacy: "The United Nations, founded in San Francisco in June 1945, was a deliberate attempt to avoid repeating the League of Nations' biggest flaw. But it was built by the same wartime alliance that was already coming apart by the time the UN Charter was signed. Whether that makes the UN a success story, or just a sturdier version of the same unresolved tension, is a question historians — and this course — leave open.",
  },
};

/**
 * The long-form narrative essay for each week — 5-6 paragraphs, meant to read
 * like a short lecture. Shown as the main content of a week's story modal.
 */
const CHRONICLES = {
  1: [
    "Diplomacy is often described as the peaceful way states deal with each other. But that's not the whole story. Diplomacy also manages rivalry. It manages threats. It looks for a deal that lets two sides avoid a war that neither one can fully win. Diplomacy happens in treaty rooms and telegrams — but also in silence, in who is invited to the table, and in what is left unsaid. This course studies its history because diplomacy has never stayed the same. It is a set of tools, and every time the old tools stopped working, states had to invent new ones.",
    "This course covers the years 1648 to 1945. It starts with the Peace of Westphalia, which created the idea of the sovereign state — the basic building block of world politics. It ends with World War II, a war so destructive it forced the world to invent something new again. Along the way, the rules of the game keep changing. Kings give way to nations. Secret deals give way to public opinion. And a system built for a few European courts gets stretched to cover the whole world.",
    "To make this three-hundred-year story easier to follow, the course is split into four parts. The first part, Foundations of Sovereignty, is about the birth of the state system. The second, Revolutions and the Napoleonic Order, is about what happens when the people — and one brilliant general — turn that system upside down, and how Europe rebuilt a balance of power afterward. The third, Nationalism and the Alliance System, shows how united nations and rigid alliances quietly built a machine for a general war. The fourth, the Age of World Wars, is that machine finally going off — twice — and the urgent attempt to build something better out of the ruins.",
    "Studying this history is not just about old facts. Every part of this course left behind an idea we still use without thinking twice: sovereignty, balance of power, collective security, self-determination, total war, containment. Knowing where these ideas came from — what problem they were built to solve, and what happened when the solution failed — helps you read the news today with more than just an opinion. It gives you a way to think.",
    "This course is also about people making hard choices without knowing how things will turn out. Cardinals, leaders, soldiers, reporters, and ordinary people all show up in these stories — because diplomatic history isn't only written by the people who sign the treaties. The quiz you may have taken, and the story attached to every week, are there to put you in that same position: to make you choose, like the people in these stories had to, before you already know the ending.",
  ],
  2: [
    "The Peace of Westphalia is often taught as one big, dramatic moment. But it was really the tired final step of one of the most destructive wars in European history. The Thirty Years' War began in 1618, when Protestant nobles in Bohemia threw two Catholic officials out of a window in Prague. This event is now called the \"Defenestration of Prague.\" It was meant as a protest against the Catholic emperor's religious policies. What started as a local revolt inside the Holy Roman Empire grew, over thirty years, into a war across the whole continent. Sweden, France, Spain, Denmark, and dozens of German states all got pulled in, each fighting for its own mix of religious belief and land.",
    "By the 1640s, the war was barely about religion anymore. Catholic France feared a too-powerful Habsburg family more than it feared Protestant beliefs — so it fought on the Protestant side for years. Armies that often went unpaid lived off whatever land they marched through. German lands suffered the worst of it. Historians estimate that 4.5 to 8 million people died from fighting, hunger, and disease that followed the armies. In some regions, more than a third of the population was gone. Farms were left empty. Trade stopped. Some towns simply disappeared.",
    "Ending a war with this many sides needed an unusual solution. Two separate meetings happened at the same time, in the nearby cities of Münster and Osnabrück, so Catholic and Protestant groups could each negotiate in a place they trusted. The talks went on for years. Some diplomats arrived as young men, full of ambition, and left middle-aged. But the process itself set new habits that would last much longer than any single clause in the treaty: permanent embassies became normal, and small states negotiated as formal equals next to great powers — at least on paper.",
    "The final agreement, signed in October 1648, did several things at once. It confirmed that the Dutch Republic and Switzerland were independent. It redrew German borders and adjusted an older religious agreement from a century before. But its biggest change was not about land — it was about power. It said, clearly, that the princes inside the Holy Roman Empire had real control over their own lands. Neither the Emperor nor the Pope could force their way into most of those decisions, including religion.",
    "This is why scholars of international relations point to 1648 as a turning point. It didn't create the sovereign state overnight — plenty of the old system stuck around for generations. But it made official, in a treaty every major power signed, the idea that legitimate power comes from controlling a territory, not from royal blood or religious approval alone. Every week that follows in this course — from Napoleon's empire to the League of Nations — is played out on a diplomatic chessboard whose basic pieces were set here first: sovereign states, dealing with each other as formal equals.",
  ],
  3: [
    "Before 1776, diplomacy was mostly a conversation between kings and the nobles who served them. Alliances were made through royal marriages. Wars were fought over who should inherit what land. Treaties were arranged in secret by ministers who answered to a crown, not to the public. Ordinary people paid for this system with taxes and soldiers, but they were rarely seen as a group whose opinion mattered. Two revolutions — happening only thirteen years apart — broke that system for good.",
    "The American Revolution began as an argument over taxes inside the British Empire. But its real importance for diplomacy is what happened next: a weak group of colonies, with no army, navy, or treasury to match Britain's, had to build support from other countries out of nothing. Benjamin Franklin's mission to the French court is a great example of old-fashioned power politics helping a genuinely new cause. France backed the American rebels not because it loved republics, but because it wanted to weaken its old rival, Britain. The alliance signed in 1778 was key to America's victory — and a reminder that a \"noble cause\" and cold, calculated self-interest can work well together.",
    "The French Revolution, starting in 1789, hit the old order from the inside. What began with a meeting of the Estates-General and the storming of the Bastille moved fast: the end of feudal privileges, a new Declaration of the Rights of Man, the change from an absolute monarchy to a constitutional one, and finally, in 1793, the execution of King Louis XVI. Each step felt to the other royal courts of Europe like more than a French problem — it felt like a direct threat to every crown. If a king's head could be legally removed by his own people, what was protecting anyone else's?",
    "Austria and Prussia responded by forming the First Coalition, with the clear goal of putting the French king back on his throne by force. It backfired badly. Instead of crushing the revolution, the foreign invasion made it more extreme. It led to the levée en masse — the world's first attempt at drafting an entire nation into an army — and turned a defensive war into something closer to a crusade. Within a few years, French armies were marching deep into the rest of Europe, led by a young general named Napoleon Bonaparte.",
    "What both revolutions share, in diplomatic terms, is a new problem that eighteenth-century statecraft had no good tools for: legitimacy claimed by ordinary people, not just by kings. A treaty signed between two kings settles a dispute between two kings. It does not automatically settle anything with \"the nation\" that a revolutionary government claims to speak for — a nation that might reject the deal completely, or that might not even be a stable, unified partner to negotiate with. For the rest of this course, and really for the rest of modern history, diplomats have to learn to deal with exactly that kind of uncertainty.",
  ],
  4: [
    "Napoleon Bonaparte didn't create the chaos that made his rise possible — the wars of the French Revolution were already tearing Europe apart. But he was the perfect person to take advantage of it. A brilliant young officer, Bonaparte rose fast through the ranks of the shaken-up French army. A string of stunning wins in Italy and Egypt gave him a big enough reputation to seize power in a coup in 1799. He became First Consul, and by 1804, Emperor of the French.",
    "What came next was less a series of separate wars and more one long campaign to remake Europe around French power. Napoleon crushed one coalition after another. His victory over Austrian and Russian forces at Austerlitz in 1805 is still studied as one of the greatest tactical wins in military history. Where he couldn't conquer a country outright, he installed his own family members and loyal generals as rulers, from Spain to the Netherlands to Italy. Where he couldn't win with weapons, he tried to win with trade: the Continental System aimed to cut Britain — the one power he could never beat at sea — off from trading with the rest of Europe.",
    "The empire fell apart in stages. Resistance in Spain tied down hundreds of thousands of French troops in a brutal years-long guerrilla war. Then, in 1812, Napoleon invaded Russia with about 600,000 soldiers — and ended up in a burned-earth retreat, through a Russian winter that destroyed his army almost as badly as any battle could have. The powers he had beaten and humiliated for over a decade saw their chance. At Leipzig in 1813, in the largest battle Europe had seen before World War I, a united coalition finally defeated him. He gave up his throne in 1814, made a bold comeback for the famous Hundred Days in 1815, and was finally defeated for good at Waterloo.",
    "The diplomatic problem that came next was, in some ways, harder than winning the war: how do you build a peace strong enough to stop this from ever happening again? The Congress of Vienna, held in 1814–15, brought together the best diplomats of the era — Austria's Metternich, Britain's Castlereagh, and, remarkably, Talleyrand, representing a defeated France even though he had once served Napoleon himself. Instead of punishing France into permanent weakness, which risked repeating the anger that had fueled the original revolution, the Congress chose to restore France to great-power status inside a rebalanced Europe. It was a deliberate bet that including France would be more stable than humiliating it.",
    "The system they built — regular talks between the great powers to solve problems before they turned into wars — became known as the Concert of Europe. It wasn't perfect, and it did nothing for the ordinary people living under the empires it protected. But as a piece of diplomatic engineering, it worked remarkably well. Europe avoided a general war for almost a century, until the very different, much more rigid alliance system you'll study later in this course finally broke down in 1914.",
  ],
  5: [
    "The Concert of Europe managed the great powers well, but it couldn't hold back a force the Napoleonic wars had accidentally set loose: nationalism. The idea that people who share a language, a culture, or a history deserve their own united country was still a radical idea in the early 1800s. But it spread fast — through the failed revolutions of 1848, through newspapers, through the memory of resisting French occupation. By the middle of the century, it was reshaping the map in ways the Vienna settlement had never expected.",
    "Italy united first, through a mix of diplomacy and force led by the Kingdom of Piedmont-Sardinia. Its prime minister, Camillo di Cavour, won French support against Austria through careful diplomacy. Meanwhile, the bold revolutionary Giuseppe Garibaldi conquered southern Italy and Sicily with an army of volunteers. By 1870, with French troops pulled away to fight their own war against Prussia, Italian forces took Rome itself — completing a unification that would have seemed impossible fifty years earlier.",
    "German unification followed a very different, much more deliberate path, led almost single-handedly by Prussia's chancellor, Otto von Bismarck. Bismarck didn't believe unification would come from speeches or votes in parliament. He famously told the Prussian legislature in 1862 that the big questions of the age would be settled \"by iron and blood\" — and within a decade, he proved it. He engineered three wars in less than ten years to make it happen: against Denmark in 1864, against Austria in 1866 (won in a stunning seven weeks), and against France in 1870–71. The last of these, sparked partly by Bismarck editing a diplomatic telegram to make it sound more insulting, ended with a new German Empire being declared in the Hall of Mirrors at Versailles — a location chosen specifically to humiliate France.",
    "A newly united, industrially strong Germany sitting in the middle of the continent changed the balance of power that had kept the Concert of Europe stable since 1815. Bismarck understood this better than anyone. He spent the next twenty years building a complicated web of alliances — with Austria-Hungary, Russia, and Italy — designed to keep France diplomatically alone and to make sure Germany would never again have to fight a war on two fronts at once.",
    "By most accounts, this was a system that only Bismarck himself could really run. It needed him to hold several half-contradictory promises in careful balance at the same time, and to read every crisis with unusual precision. That fact was about to matter a great deal, once Bismarck was no longer the one holding it all together.",
  ],
  6: [
    "In 1890, Kaiser Wilhelm II — young, ambitious, and eager to rule in fact, not just in name — fired Otto von Bismarck as chancellor. It's hard to overstate how much this one decision would matter. Bismarck's whole alliance system needed constant, careful upkeep, and his successors let it fall apart within a few years, almost by accident. The most important mistake: they let the Reinsurance Treaty with Russia quietly expire instead of renewing it.",
    "Russia, no longer tied to Germany, found a natural partner in France — a country that had spent twenty years diplomatically alone and was eager for exactly this kind of deal. The Franco-Russian Alliance was signed in 1894. Britain, usually cautious about getting tangled up in continental Europe, slowly moved closer to France through the 1904 Entente Cordiale, and then to Russia through a 1907 agreement settling colonial disputes in Asia. The result — reached almost by accident rather than careful design — was the Triple Entente, standing opposite the German-led Triple Alliance with Austria-Hungary and Italy. Europe had split into two armed camps.",
    "This rivalry played out in very public, popular ways that made war feel more and more normal to ordinary people, even years before it arrived. The Anglo-German naval race — Germany's push to build a fleet strong enough to challenge British power at sea — became front-page news and a matter of national pride on both sides. Colonial arguments, especially two crises over Morocco in 1905 and 1911, kept pushing the great powers close to war over land that neither France's nor Germany's own citizens had much personal stake in.",
    "Meanwhile, the Balkans earned their reputation as Europe's \"powder keg.\" As Ottoman power in the region faded, it left behind a patchwork of new and contested states — Serbia, Bulgaria, Greece, and others — fighting each other and the weakening Ottoman Empire in a series of wars in 1912 and 1913. These wars redrew borders and left deep resentments behind, while both Austria-Hungary and Russia treated the region as an area of vital national interest.",
    "By 1914, everything was in place for a crisis to spiral out of control: two rigid alliance blocs, military mobilization plans (like Germany's Schlieffen Plan) built around speed rather than caution, a public in every major country primed by years of naval races and colonial standoffs to see the other side as the enemy, and a regional flashpoint — the Balkans — that had already shown it could drag great powers into local fights. All that was missing was the spark.",
  ],
  7: [
    "The spark came on June 28, 1914, in Sarajevo, when a Bosnian Serb nationalist named Gavrilo Princip assassinated Archduke Franz Ferdinand, heir to the Austro-Hungarian throne, along with his wife Sophie. Austria-Hungary had wanted an excuse to deal firmly with Serbian nationalism for years, and it decided to use the killing as a reason to crush Serbia once and for all — but first it needed to be sure Germany, its key ally, would back it up.",
    "Germany's answer, sent in early July, became known as the \"blank check\": an unconditional promise of support for whatever Austria-Hungary chose to do, with no real limits attached. Backed by that promise, Austria-Hungary sent Serbia an ultimatum on July 23 with demands designed to be hard to fully accept. Serbia's reply was surprisingly cooperative — it agreed to nearly every demand — but Austria-Hungary declared war anyway on July 28, saying the response wasn't good enough.",
    "From there, the alliance system that had been built for exactly this kind of situation did what it was built to do, with terrible results. Russia began preparing its army to support fellow Slavic Serbia. Germany, tied to Austria-Hungary and alarmed by Russia's preparations, declared war on Russia, then on France, and — to keep to the strict schedule of the Schlieffen Plan for a quick defeat of France — invaded neutral Belgium. That invasion, in turn, brought Britain into the war, under its treaty promise to protect Belgian neutrality.",
    "Sir Edward Grey, Britain's Foreign Secretary, had spent the final weeks of the crisis trying to broker a solution, proposing meetings and appealing for calm from every capital. On the night of August 3, as it became clear Britain would join the war, he said one of the most famous lines in diplomatic history: \"The lamps are going out all over Europe; we shall not see them lit again in our lifetime.\" He was talking about the immediate crisis — but the sentence has outlived it as a description of an entire era of diplomacy coming to an end.",
    "The July Crisis is still one of the most closely studied events in the history of international relations, exactly because it shows a whole system failing in real time. Each government made choices that seemed reasonable on their own, but together they added up to a disaster almost nobody wanted. It's also the last moment in this course where the old style of diplomacy — cabinets, telegrams, and personal relationships between aristocratic foreign ministers — still had a real chance to stop a war, and didn't.",
  ],
  8: [
    "The war that started in August 1914 was expected, by almost every general in Europe, to be short and fast — a war of quick movement, settled within months. Instead, by the end of that first year, the Western Front had frozen into a line of trenches stretching from Switzerland to the North Sea. That line barely moved more than a few miles in either direction for the next three years, at a shocking cost in human life.",
    "This war was genuinely global almost from the start, not just a European fight. Battles raged on the Eastern Front between Germany, Austria-Hungary, and Russia. The Ottoman Empire's entry into the war pulled in campaigns across the Middle East, including the Arab Revolt, which Britain encouraged with promises of future independence. Soldiers and resources from across the British, French, and other empires were pulled into a war their home populations had never chosen.",
    "New technology made the killing far worse without making it decisive. Machine guns turned advancing on foot into slaughter. Poison gas was used on a large scale for the first time. Battles like the Somme in 1916 — with almost 60,000 British soldiers killed or wounded on the very first day — and Verdun, fought almost entirely to prove that neither side would retreat, produced death tolls that are still hard to understand today, for land gains measured in only a few hundred yards.",
    "Behind the front lines, wartime diplomacy often quietly contradicted itself. The secret Sykes-Picot Agreement of 1916 split Ottoman land in the Middle East between Britain and France — a deal that clashed with promises of Arab independence made around the same time, and with the 1917 Balfour Declaration's support for a Jewish homeland in Palestine. These overlapping promises would shape the politics of the region for the rest of the century and beyond.",
    "The war's final turn came in 1917 and 1918. Germany's decision to sink ships without warning, plus the leaked \"Zimmermann Telegram\" proposing a secret German-Mexican alliance against the U.S., pushed a reluctant America into the war on the Allied side. Russia, consumed by its own revolution, left the war in 1918 through the Treaty of Brest-Litovsk. Germany's last big offensive that spring ultimately failed, and with its allies collapsing and its own army worn out, Germany agreed to a ceasefire that began at the eleventh hour of the eleventh day of the eleventh month, 1918. Around 20 million people, soldiers and civilians together, were dead. The fighting was over. The peace still had to be worked out.",
  ],
  9: [
    "The Paris Peace Conference opened in January 1919 carrying huge, almost impossible expectations: not just to end one war, but to design a peace that would stop the next one before it started. It was led by the \"Big Four\" — the United States' Woodrow Wilson, Britain's David Lloyd George, France's Georges Clemenceau, and Italy's Vittorio Orlando — who negotiated among the twenty-seven winning Allied nations present. The defeated powers, including Germany, were left out of the actual talks entirely. They could only accept or reject the terms, not help shape them.",
    "The Big Four came to Paris with goals that often clashed. Wilson arrived with his Fourteen Points, a strikingly hopeful plan built around self-determination for nations, open diplomacy instead of secret deals, and — above all — a League of Nations that could settle future disputes before they became wars. Clemenceau, representing a France invaded by Germany twice in living memory and battered by terrible losses on its own soil, wanted a settlement above all that would permanently stop Germany from threatening France again. Security came first for him. Idealism was a distant second.",
    "The terms eventually forced on Germany in the Treaty of Versailles showed that tension without ever fully solving it. Germany lost major territory, had its military sharply limited, was given enormous payments to make (reparations), and — in Article 231, the so-called \"war guilt clause\" — was forced to formally accept full blame for causing the war. Because Germany had no seat at the table, the treaty wasn't experienced there as a negotiated peace. It felt like a diktat — a settlement forced on them by the winners — a grievance that extreme politicians would use to their advantage for the next twenty years.",
    "Wilson's biggest achievement, the League of Nations, was written into the treaty and did come into being in 1920 as the first serious global attempt at collective security — the idea that an attack on any member country would be treated as everyone's concern. But the institution was weakened almost right away. The U.S. Senate, nervous about being tied down by international promises, refused to approve the treaty or let the United States join the very organization its own president had designed.",
    "The peace of 1919, in other words, was a real and creative new idea, built on a foundation that was almost guaranteed to wear it down: a harsh settlement toward Germany, paired with a collective-security system missing one of the world's rising powers from day one. It bought Europe about twenty years. Whether that should count as a success or a failure depends a lot on what happens in the weeks of this course that follow.",
  ],
  10: [
    "For a few years in the mid-1920s, it looked like the postwar order might actually settle down. The Locarno Treaties of 1925 saw Germany willingly accept its western borders and improve relations with France and Belgium. Germany joined the League of Nations in 1926. And in 1928, the Kellogg-Briand Pact saw dozens of nations formally promise to give up war as a tool of national policy. It was an imperfect peace, but a real one — and people at the time genuinely believed the worst was over.",
    "The 1929 Wall Street Crash shattered that fragile hope within months. The Great Depression that followed hit the whole world, and it hit the young, still-fragile democracies of Central Europe especially hard. Mass unemployment, collapsing money, and a widespread feeling that the whole system had failed created exactly the conditions where extreme movements — promising simple, forceful answers to complicated problems — could win mass support.",
    "Countries wanting to overturn the postwar settlement moved to test its limits, and found surprisingly little resistance. Mussolini's Italy invaded Ethiopia in 1935, openly defying the League of Nations, which responded with weak sanctions that changed nothing. Hitler's Germany, already rearming in violation of Versailles, sent troops back into the Rhineland in 1936 — a direct challenge that France and Britain, each hoping the other would act first, chose not to fight over.",
    "Each unanswered challenge made the next one more likely. Germany took over Austria in the 1938 \"Anschluss,\" then turned to Czechoslovakia's German-speaking Sudetenland region. At the Munich Conference in September 1938, Britain and France agreed to let Germany take the Sudetenland without even inviting Czechoslovakia — the country whose land was being handed over — to the talks. British Prime Minister Neville Chamberlain went home claiming he had secured \"peace for our time.\"",
    "He had bought less than a year. By March 1939, Germany had taken over the rest of Czechoslovakia, breaking the Munich agreement's own terms and proving, clearly, that appeasement — however understandable as a policy from exhausted democracies desperate not to repeat 1914–18 — had not satisfied Hitler's ambitions. It had only delayed the reckoning. The next crisis would be Poland, and this time, Britain and France would not step back.",
  ],
  11: [
    "In August 1939, the world watched two governments that had spent years calling each other mortal enemies sign a non-aggression pact instead. The Molotov-Ribbentrop Pact between Nazi Germany and the Soviet Union shocked observers on both the political left and right. But it made brutal strategic sense for both sides, and it included secret terms dividing Poland and the rest of Eastern Europe between German and Soviet control, clearing the way for each side to act without fearing the other.",
    "Germany invaded Poland on September 1, 1939. Britain and France, honoring their promises to Poland, declared war two days later — but fighting on the Western Front barely happened for months, a period so quiet it became known as the \"Phoney War.\" That changed suddenly in spring 1940, when German forces launched a series of lightning-fast campaigns — called Blitzkrieg — through Denmark, Norway, the Low Countries, and finally France itself, which fell within weeks.",
    "With France defeated and Britain standing alone, the war entered a new phase. The Battle of Britain, fought in the skies over southern England in the summer and autumn of 1940, was the first major campaign Germany failed to win outright. The war also spread geographically, as Italy joined Germany's side and fighting broke out across North Africa and the Mediterranean.",
    "The war's character changed most sharply in June 1941, when Germany launched Operation Barbarossa — a massive surprise invasion of the Soviet Union, the same country it had signed a non-aggression pact with less than two years earlier. Almost overnight, the sides of the war shifted: the Soviet Union, until days before an awkward diplomatic partner of Germany, became an essential ally of Britain against it.",
    "The final piece fell into place in December 1941. Japan's attack on the American naval base at Pearl Harbor brought the United States fully into the war, and within days, Germany and Italy declared war on the U.S. too. This completed the alignment that would shape the rest of the conflict: the Allied powers — Britain, the Soviet Union, the United States, and others — against the Axis. What began as a German invasion of Poland had become, for the second time in a generation, a truly global war.",
  ],
  12: [
    "With the Allied powers now united against a common enemy, wartime diplomacy turned to a new question: not just how to win the war, but how to shape what came after it. At the Casablanca Conference in January 1943, Roosevelt and Churchill announced they would demand Germany's unconditional surrender — a decision meant to reassure the Soviet Union that its Western allies wouldn't make a separate peace deal, but one that also removed any reason for Germany to negotiate before total defeat.",
    "In November 1943, the leaders of the three main Allied powers — Roosevelt, Churchill, and Stalin — met in person for the first time, at Tehran. The conference coordinated military plans, including firm promises to open a \"Second Front\" in Western Europe. But it was also the first real conversation among the future winners about what the postwar world would look like, held while the outcome of the war was still genuinely uncertain.",
    "The military tide turned decisively over the next eighteen months. The Soviet win at Stalingrad had already broken the momentum of the German invasion in the east. The D-Day landings in Normandy in June 1944 opened the long-promised Western Front. By early 1945, Allied and Soviet forces were closing in on Germany from opposite directions. It was against this backdrop — victory now expected, but the postwar map still completely undecided — that the Big Three met again at Yalta in February 1945.",
    "The Yalta Conference tackled some of the biggest, most argued-over questions of the century: the borders and future government of Poland, Soviet help in the war against Japan, how to divide Germany into occupation zones, and the founding ideas of a brand-new international organization. The deals made there would shape European politics for the next forty-five years, and the growing distrust hiding just below the conference's friendly surface was an early sign of the Cold War to come.",
    "Germany surrendered in May 1945. At the Potsdam Conference that followed, in July and August — with Harry Truman now representing the United States after Roosevelt's death, and a noticeably tougher tone from Washington toward Moscow — the Allies finalized plans for occupied Germany, even as the atomic bombings of Hiroshima and Nagasaki in August brought the war with Japan to a sudden end.",
    "In June 1945, delegates from fifty-one nations had already met in San Francisco to sign the Charter of the United Nations — a deliberate attempt to build something more lasting than the League of Nations had managed. It's a fitting, unfinished place to end this course: a new international order, genuinely built from the hard lessons of everything covered in these twelve weeks, launched into a world where the wartime alliance that created it was already quietly falling apart. That next story — the Cold War — belongs to another course.",
  ],
};
