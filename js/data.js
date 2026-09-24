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

/**
 * The four recurring "voices" that narrate each week's story as a social feed.
 * Every week's STORIES entry draws its posts from these same four lenses, so
 * picking one (e.g. "The Diplomat") gives a consistent tone across all 12 weeks.
 */
const LENSES = [
  {
    id: "diplomat",
    label: "The Diplomat",
    icon: "🕴️",
    handle: "@thecongresstable",
    blurb: "Treaties, alliances, and the view from the negotiating table.",
  },
  {
    id: "witness",
    label: "The Witness",
    icon: "👤",
    handle: "@onthegroundvoice",
    blurb: "Ordinary life, caught in the middle of history.",
  },
  {
    id: "correspondent",
    label: "The Correspondent",
    icon: "🗞️",
    handle: "@thedispatch",
    blurb: "The news, as it broke.",
  },
  {
    id: "historian",
    label: "The Historian",
    icon: "🕰️",
    handle: "@withhindsight",
    blurb: "Looking back, connecting the dots.",
  },
];

/**
 * Each week's story feed: an array of posts, each tagged with a `voice` matching
 * a LENSES id. `text` is the short post; `detail` is the longer paragraph shown
 * when a post is expanded.
 */
const STORIES = {
  1: [
    {
      voice: "historian",
      date: "1648",
      text: "A war that killed a third of Central Europe's population finally ends — not with a victor, but with a new idea: the sovereign state. Week 2.",
      detail: "The Peace of Westphalia didn't just end the Thirty Years' War. It replaced \"who rules by divine right\" with \"who controls this territory\" — the rule almost every state on Earth still lives by.",
    },
    {
      voice: "correspondent",
      date: "1789",
      text: "PARIS: A mob storms a fortress. Within a decade, an entire diplomatic order built on royal bloodlines needs a new rulebook. Week 3.",
      detail: "The storming of the Bastille held only seven prisoners — its fall mattered as a symbol, not a rescue. It's the moment popular sovereignty forces its way into a conversation diplomats had only ever had about and between monarchs.",
    },
    {
      voice: "witness",
      date: "1914",
      text: "They told us it would be over by Christmas.",
      detail: "Nearly every army in Europe genuinely believed 1914 would bring a short, decisive war. Four years and roughly 20 million deaths later, that belief is one of the great diplomatic miscalculations this course studies. Week 8.",
    },
    {
      voice: "diplomat",
      date: "1919",
      text: "Twenty-seven nations. One table. And a peace so punishing it plants the seed of the next war. Week 9.",
      detail: "The Paris Peace Conference produced the Treaty of Versailles — and a League of Nations meant to prevent this from ever happening again. It bought twenty years, not forever.",
    },
    {
      voice: "historian",
      date: "1945",
      text: "Three men draw lines on a map that will define the next half-century. Week 12.",
      detail: "At Yalta and Potsdam, Roosevelt, Churchill, and Stalin sketched the postwar order before the guns had even fully stopped. This course ends where a whole new one — the Cold War — begins.",
    },
  ],
  2: [
    {
      voice: "diplomat",
      date: "Oct 1648, Münster",
      text: "After years of talks, the seals are finally set. Two treaties, dozens of parties, one exhausted continent.",
      detail: "Negotiations at Münster and Osnabrück ran so long that some delegates arrived as young men and left middle-aged. For the first time, Catholic and Protestant powers negotiated as formal equals — not as heretics and the faithful.",
    },
    {
      voice: "witness",
      date: "1648, a German village",
      text: "The soldiers finally stopped coming through. We buried more neighbors to plague and famine than to muskets.",
      detail: "The Thirty Years' War killed an estimated 4.5–8 million people; some German states lost over a third of their population. Peace, when it came, was less a triumph than sheer exhaustion.",
    },
    {
      voice: "correspondent",
      date: "Oct 1648",
      text: "The Holy Roman Empire fractures into hundreds of sovereign entities. Rome's authority over European politics — visibly, formally broken.",
      detail: "Pope Innocent X condemned the treaties in the strongest terms available to him. No one listened. That, more than any single clause, marked the real shift in power away from religious authority.",
    },
    {
      voice: "historian",
      date: "",
      text: "This is the moment scholars point to and say: here, states became the only actors that mattered.",
      detail: "The \"Westphalian system\" — sovereignty, non-interference, formal equality between states — became the working assumption of world politics for the next 375 years, and counting.",
    },
  ],
  3: [
    {
      voice: "correspondent",
      date: "July 1776, Philadelphia",
      text: "Thirteen colonies declare they no longer answer to a king. European courts call it treason. History will call it a preview.",
      detail: "The Declaration of Independence claimed a right no diplomat of the era took for granted: that a people, not a crown, could be the source of legitimate authority.",
    },
    {
      voice: "witness",
      date: "July 1789, Paris",
      text: "We tore the Bastille apart stone by stone. It held seven prisoners. It's what it stood for that mattered.",
      detail: "Within months, the revolutionary government abolished feudal privileges and issued the Declaration of the Rights of Man — language no chancellery in Europe knew how to negotiate with.",
    },
    {
      voice: "diplomat",
      date: "1792",
      text: "The old courts of Europe watch revolutionary France with horror — and start forming coalitions against an idea, not just an army.",
      detail: "Austria and Prussia's early wars against France were fought explicitly to restore the monarchy. It didn't work, and it radicalized the revolution further.",
    },
    {
      voice: "historian",
      date: "",
      text: "For the first time, a state claimed to speak for \"the nation,\" not a bloodline. Diplomacy would never again get to ignore public opinion.",
      detail: "Both revolutions injected a new variable into statecraft: legitimacy could now be contested from below, not just negotiated between crowns.",
    },
  ],
  4: [
    {
      voice: "witness",
      date: "Dec 1805, Austerlitz",
      text: "The fog lifted, and so did any doubt about who commanded this battlefield.",
      detail: "Napoleon's victory at Austerlitz over the combined Austrian and Russian armies is still studied as one of the most complete tactical victories in military history.",
    },
    {
      voice: "diplomat",
      date: "1806–1812",
      text: "One coalition after another forms against him. One after another, Napoleon breaks them.",
      detail: "By 1810, Napoleon's empire and satellite states covered most of continental Europe — a diplomatic order held together almost entirely by force and his own person.",
    },
    {
      voice: "correspondent",
      date: "1812, Moscow",
      text: "Moscow burns. The Grand Army that marched in 600,000 strong will stagger home a fraction of that.",
      detail: "The Russian campaign was the turning point: a war of attrition, scorched earth, and a Russian winter that no negotiation could out-maneuver.",
    },
    {
      voice: "diplomat",
      date: "1814–15, Vienna",
      text: "The powers that beat him now face a harder problem: how do you build a peace that outlives the war?",
      detail: "The Congress of Vienna deliberately restored a balance of power rather than simply punishing France — a choice that bought Europe decades of relative peace.",
    },
    {
      voice: "historian",
      date: "",
      text: "Their answer — a balance of power, managed by regular consultation among the great powers — kept Europe largely free of general war for nearly a century.",
      detail: "This \"Concert of Europe\" is one of history's most-cited examples of diplomacy successfully engineering stability after total war.",
    },
  ],
  5: [
    {
      voice: "diplomat",
      date: "1862",
      text: "\"Not by speeches and majority votes will the great questions of the day be decided — but by iron and blood.\"",
      detail: "Bismarck said this to the Prussian parliament's budget committee in 1862. Within a decade he'd proven it: three deliberately engineered wars, one unified Germany.",
    },
    {
      voice: "witness",
      date: "1866",
      text: "Prussia beat Austria in seven weeks. Seven weeks to redraw who leads the German-speaking world.",
      detail: "The Austro-Prussian War was swift and decisive by design — Bismarck wanted Austria humbled, not humiliated, to keep the door open for future cooperation.",
    },
    {
      voice: "correspondent",
      date: "Jan 1871, Versailles",
      text: "In the hall of mirrors at the palace of the kings he just defeated, a new German Empire is proclaimed.",
      detail: "The choice of venue — the palace of Louis XIV — was a deliberate humiliation of France, one that France would not forget by 1919.",
    },
    {
      voice: "diplomat",
      date: "1873–1887",
      text: "Alliance after alliance, each one quietly canceling out a threat. Keep France isolated. Keep everyone else talking to Berlin.",
      detail: "Bismarck's alliance system depended entirely on his own skill at holding contradictory promises in balance — a high-wire act almost no successor could manage.",
    },
  ],
  6: [
    {
      voice: "correspondent",
      date: "1890",
      text: "Bismarck is out. The new Kaiser wants to steer his own course. Berlin's carefully balanced alliances start coming apart within the decade.",
      detail: "Kaiser Wilhelm II dismissed Bismarck and let Germany's treaty with Russia lapse — opening the door to exactly the Franco-Russian alliance Bismarck had spent years preventing.",
    },
    {
      voice: "diplomat",
      date: "1907",
      text: "Britain, France, and Russia — old rivals — now stand together. Two blocs. Two capitals each convinced the other means them harm.",
      detail: "The Triple Entente completed a division of Europe into two armed camps: the Entente powers and the German-led Triple Alliance.",
    },
    {
      voice: "witness",
      date: "1912",
      text: "Every year, the newspapers report bigger navies, bigger armies. Every year, we're told it's for peace.",
      detail: "The Anglo-German naval race became a public obsession on both sides — a visible, popular arms race that made war feel almost inevitable well before it began.",
    },
    {
      voice: "historian",
      date: "",
      text: "By 1914, Europe had built a machine where one spark, in the wrong place, could pull every major power into war within days.",
      detail: "Rigid mobilization timetables, interlocking alliances, and a shared assumption that offense wins wars fast — a system optimized for speed, not restraint.",
    },
  ],
  7: [
    {
      voice: "correspondent",
      date: "June 28, 1914, Sarajevo",
      text: "A shot fired at an Archduke's motorcade. Almost no one yet understands what it will trigger.",
      detail: "The assassination of Archduke Franz Ferdinand by Gavrilo Princip was the spark — but it needed five weeks of diplomatic failure to become a world war.",
    },
    {
      voice: "diplomat",
      date: "July 1914",
      text: "Five weeks of ultimatums, mobilizations, and telegrams. Every step called \"defensive.\" Every step drags the continent closer to war.",
      detail: "Historians still debate the July Crisis chapter by chapter — it remains the single most studied case of crisis diplomacy failing in real time.",
    },
    {
      voice: "historian",
      date: "Aug 3, 1914",
      text: "\"The lamps are going out all over Europe; we shall not see them lit again in our lifetime.\"",
      detail: "Sir Edward Grey, Britain's Foreign Secretary, said this the night before Britain entered the war. He was right about more than he knew.",
    },
    {
      voice: "witness",
      date: "Aug 1914",
      text: "They said it would be over by Christmas.",
      detail: "Every major army in 1914 planned for a short, decisive war. The trenches that followed would last four years.",
    },
  ],
  8: [
    {
      voice: "witness",
      date: "1916, the Somme",
      text: "We gained a few hundred yards. It cost thousands of lives. That was considered a good week.",
      detail: "The Battle of the Somme saw roughly 60,000 British casualties on its first day alone — one of the deadliest single days in military history.",
    },
    {
      voice: "diplomat",
      date: "1916–17",
      text: "Behind closed doors, secret treaties carve up empires that haven't even lost yet.",
      detail: "Agreements like Sykes-Picot quietly divided Ottoman territory among the Allies years before the war ended — commitments that would complicate the peace to come.",
    },
    {
      voice: "correspondent",
      date: "1917",
      text: "The United States enters the war. What began as a European quarrel is now, unmistakably, a world war.",
      detail: "Unrestricted German submarine warfare and the intercepted Zimmermann Telegram pushed a reluctant United States off the sidelines.",
    },
    {
      voice: "historian",
      date: "Nov 11, 1918",
      text: "The guns fall silent at the eleventh hour of the eleventh day of the eleventh month. Roughly 20 million dead. The peace is still to be written.",
      detail: "The Armistice ended the fighting, not the war — the actual peace terms would take another year of negotiation at Paris.",
    },
  ],
  9: [
    {
      voice: "diplomat",
      date: "Jan 1919, Paris",
      text: "Twenty-seven victorious nations at the table. Germany isn't invited to negotiate — only to sign.",
      detail: "The Paris Peace Conference excluded the defeated powers from negotiations entirely, a choice that shaped how the resulting treaty was received in Germany.",
    },
    {
      voice: "historian",
      date: "",
      text: "\"A general association of nations must be formed... affording mutual guarantees of political independence.\"",
      detail: "Wilson's Fourteen Points proposed the League of Nations — the first serious attempt at collective security. The U.S. Senate would go on to reject American membership in it.",
    },
    {
      voice: "correspondent",
      date: "June 1919",
      text: "The Treaty of Versailles is signed in the same Hall of Mirrors where the German Empire was proclaimed in 1871. The symbolism isn't accidental.",
      detail: "France, in particular, wanted the venue to close a symbolic loop — and to make sure Germany felt exactly how the tables had turned.",
    },
    {
      voice: "witness",
      date: "Germany, 1919",
      text: "They call it a diktat. We weren't at the table. We were only handed the bill.",
      detail: "War guilt clauses and reparations became a lasting grievance in German politics — one that revisionist movements would exploit for the next two decades.",
    },
  ],
  10: [
    {
      voice: "correspondent",
      date: "1929",
      text: "A stock market crash in New York. Within two years, it's a crisis on every continent — and a gift to every demagogue with a simple answer.",
      detail: "The Great Depression shattered the fragile economic assumptions the 1920s peace had been quietly built on, radicalizing politics across Europe.",
    },
    {
      voice: "witness",
      date: "Germany, early 1930s",
      text: "Every week, the money in your pocket buys less. People start listening to whoever promises it will stop.",
      detail: "Mass unemployment and hyperinflation's lingering scars created fertile ground for parties promising to tear up the Versailles settlement entirely.",
    },
    {
      voice: "diplomat",
      date: "Sept 1938, Munich",
      text: "\"Peace for our time,\" they call it. Czechoslovakia isn't at the table either.",
      detail: "Britain and France ceded the Sudetenland to Germany without Czechoslovak consent, hoping to satisfy Hitler's territorial demands once and for all.",
    },
    {
      voice: "historian",
      date: "",
      text: "Appeasement wasn't cowardice so much as exhaustion — a continent that had buried a generation twenty years earlier, desperate not to repeat it. It didn't work.",
      detail: "Within a year of Munich, Germany had annexed the rest of Czechoslovakia and invaded Poland — the policy's clearest verdict.",
    },
  ],
  11: [
    {
      voice: "correspondent",
      date: "Aug 1939",
      text: "Berlin and Moscow — ideological enemies — sign a pact promising not to fight each other. Europe reads it as a green light.",
      detail: "The Molotov–Ribbentrop Pact included secret protocols dividing Eastern Europe into Soviet and German spheres of influence.",
    },
    {
      voice: "witness",
      date: "Sept 1, 1939, Poland",
      text: "The planes came before the declarations of war did.",
      detail: "Germany's invasion of Poland, followed by the Soviet invasion from the east weeks later, triggered British and French declarations of war within days.",
    },
    {
      voice: "diplomat",
      date: "1940–41",
      text: "Former rivals become allies out of necessity. The war is redrawing the map of who trusts whom.",
      detail: "Germany's invasion of the Soviet Union in 1941 turned a former non-aggression partner into Britain's — and soon America's — essential ally.",
    },
    {
      voice: "historian",
      date: "Dec 1941",
      text: "Pearl Harbor pulls the United States in. What was a European war is now, unmistakably, global — again.",
      detail: "Within days of the attack, Germany and Italy declared war on the United States too, completing the alignment of the war's major powers.",
    },
  ],
  12: [
    {
      voice: "diplomat",
      date: "Nov 1943, Tehran",
      text: "Roosevelt, Churchill, Stalin — in the same room for the first time. The postwar world starts getting sketched out before the war is even won.",
      detail: "The Tehran Conference coordinated the coming invasion of France and opened the first real conversations about how postwar Europe would be organized.",
    },
    {
      voice: "correspondent",
      date: "Feb 1945, Yalta",
      text: "Three men divide a continent into spheres of influence over the course of a week.",
      detail: "Yalta's agreements on Poland's borders and Soviet influence in Eastern Europe would shape the geopolitics of the next four and a half decades.",
    },
    {
      voice: "witness",
      date: "1945",
      text: "The war is over. Half of Europe is rubble. All of us are figuring out what \"peace\" even means now.",
      detail: "Estimates of World War II's total deaths range from 70 to 85 million — the deadliest conflict in human history, and the backdrop against which the postwar order was built.",
    },
    {
      voice: "historian",
      date: "",
      text: "The United Nations is founded on the ashes of the League's failure — another attempt to build a peace that holds. This course ends here. The next 80 years pick up the story.",
      detail: "Fifty-one founding members signed the UN Charter in San Francisco in 1945 — an institution still standing, however imperfectly, on the ground this course covers.",
    },
  ],
};
