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
      "You think in raison d'état: shared interest, not shared religion or dynasty, is what makes a deal hold. That instinct — put a sovereign state's interest above all else — is exactly what set Europe on the path to the Peace of Westphalia in 1648, where this course begins.",
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
      "Legitimacy and equilibrium matter more to you than any single victory. After Napoleon's fall, that instinct built the Concert of Europe — a system that kept the great powers from all-out war for decades.",
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
