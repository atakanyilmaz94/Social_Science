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

/**
 * The long-form "Full Story" essay for each week — 4-6 paragraphs, meant to read
 * like a short lecture. Reachable from the "Full Story" tab inside a week's story
 * modal, alongside the tweet-style feed.
 */
const CHRONICLES = {
  1: [
    "Diplomacy is usually described as the peaceful management of relations between states — but that definition undersells it. Diplomacy is just as often the management of rivalry, the choreography of threats, and the search for a deal that lets two sides avoid a war neither can fully win. It is conducted in treaty rooms and telegrams, but also in silences, in who is or isn't invited to the table, and in what is left deliberately vague. This course studies its history because diplomacy is not a timeless skill practiced the same way in every era — it is a set of tools that states have had to reinvent every time the old ones stopped working.",
    "The story this course tells runs from 1648 to 1945 — from the Peace of Westphalia, which invented the sovereign state as the basic unit of world politics, to the end of the Second World War, which forced the world to invent something new again. Along the way, the rules of the game change more than once: dynasties give way to nations, secret cabinet deals give way to public opinion and mass ideology, and a system built to manage a handful of European courts is stretched to cover the entire globe.",
    "To make that three-century arc legible, the course is organized into four eras. The first, Foundations of Sovereignty, covers the invention of the state system itself. The second, Revolutions and the Napoleonic Order, follows what happens when popular sovereignty and a single military genius overturn that system, and how Europe rebuilt a balance of power afterward. The third, Nationalism and the Alliance System, tracks how unified nation-states and rigid alliance blocs quietly built a machine for general war. The fourth, the Age of World Wars, is that machine going off — twice — and the exhausted, urgent attempts to build something more durable out of the wreckage.",
    "Studying this history is not an antiquarian exercise. Every era in this course left behind a concept diplomats and scholars still use without a second thought: sovereignty, balance of power, collective security, self-determination, total war, containment. Understanding where those ideas came from — what problem each one was actually invented to solve, and what it cost when the solution failed — is what lets you read today's headlines with more than just an opinion. It gives you a framework.",
    "This is also, deliberately, a course about people making decisions under uncertainty, not just about treaties and dates. Cardinals, chancellors, soldiers, journalists, and ordinary people living through the consequences all appear in these pages, because diplomatic history is not written only by the people who sign the documents. The quiz you may have just taken, and the \"story mode\" attached to every week from here on, exist to put you inside that uncertainty — to make you choose, as the historical actors had to, before you already know how it turns out.",
  ],
  2: [
    "The Peace of Westphalia is usually taught as a single dramatic event, but it was really the exhausted final act of one of the most destructive wars in European history. The Thirty Years' War began in 1618, when Protestant nobles in Bohemia threw two Catholic officials out of a window in Prague — the famous \"Defenestration of Prague\" — in protest at the Habsburg emperor's religious policies. What started as a local revolt over religious rights inside the Holy Roman Empire spiraled, over three decades, into a continent-wide war drawing in Sweden, France, Spain, Denmark, and dozens of German principalities, each pursuing its own mix of religious conviction and territorial ambition.",
    "By the 1640s, the war had stopped being primarily about religion at all. Catholic France, fearing Habsburg dominance more than it feared Protestant heresy, fought on the Protestant side for years. Mercenary armies, often unpaid, lived off the countryside they marched through, and the German lands bore the overwhelming brunt of the devastation. Estimates of the death toll from combat, famine, and the plagues that followed armies range from 4.5 to 8 million people — in some regions, over a third of the population. Farms were abandoned, trade routes collapsed, and entire towns simply ceased to exist as functioning communities.",
    "Negotiating an end to a war with this many parties required an unusual solution: two separate but linked congresses, running simultaneously in the neighboring cities of Münster and Osnabrück, so Catholic and Protestant delegations could each negotiate in a hall they considered religiously acceptable. The talks dragged on for years — some delegates who arrived as ambitious young diplomats left as veterans of a negotiation that had outlasted entire military campaigns. Crucially, the process itself set precedents that would outlast any single clause: permanent, resident diplomatic missions became standard practice, and small states negotiated as formal equals alongside great powers, at least on paper.",
    "The settlement itself, signed in October 1648, did several things at once. It confirmed the independence of the Dutch Republic and the Swiss Confederation. It redrew German territorial boundaries and adjusted the religious settlement first reached at Augsburg a century earlier. But its most consequential move was procedural rather than territorial: it affirmed that the princes and rulers within the Holy Roman Empire held real sovereign authority over their own territories, free from binding interference by the Emperor or the Pope in most matters, including religion.",
    "That is why international relations scholars treat 1648 as a hinge point. It didn't invent the idea of a sovereign state overnight, and plenty of the old order lingered on for generations. But it formalized, in a treaty every major power signed, the principle that legitimate political authority flows from control over a territory — not from religious sanction or dynastic bloodline alone. Every week that follows in this course, from Napoleon's empire to the League of Nations, plays out on a diplomatic chessboard whose basic pieces — sovereign, territorial states, dealing with each other as formal equals — were set on this board first.",
  ],
  3: [
    "Diplomacy before 1776 was, for the most part, a conversation among monarchs and the aristocrats who served them. Alliances were sealed through dynastic marriages, wars were fought over succession claims and territorial inheritance, and treaties were negotiated in secret by ministers who answered to a crown, not to a public. Ordinary subjects were the currency this system spent — soldiers, taxpayers — but rarely a party whose opinion needed managing. Two revolutions, an ocean apart but only thirteen years apart in time, broke that arrangement for good.",
    "The American Revolution began as a dispute over taxation and representation within the British Empire, but its diplomatic significance lies in what came next: a fragile coalition of colonies, lacking an army, a navy, or a treasury to match Britain's, had to build international support from nothing. Benjamin Franklin's mission to the French court is a case study in old-fashioned power politics serving a genuinely new cause — France backed the American rebels not out of sympathy for republicanism, but to weaken its old rival Britain. The 1778 Franco-American alliance that resulted was decisive to American victory, and it is also a reminder that revolutionary causes and cynical balance-of-power calculations can serve each other perfectly well.",
    "The French Revolution, beginning in 1789, was a different kind of rupture — one that hit the old diplomatic order from the inside. What began with the calling of the Estates-General and the storming of the Bastille escalated rapidly: the abolition of feudal privilege, the Declaration of the Rights of Man, the transformation of an absolute monarchy into a constitutional one, and finally, in 1793, the execution of Louis XVI himself. Each stage was, to the other courts of Europe, not just a domestic French affair but a direct ideological threat — if the French king's head could be legally removed by his own people, what protected any other crown?",
    "Austria and Prussia responded by forming the First Coalition, explicitly intending to restore the French monarchy by force. It was a catastrophic miscalculation. Rather than crushing the revolution, foreign invasion radicalized it further, fueling the levée en masse — the world's first attempt at mass national conscription — and turning defensive war into a crusade that would, within a few years, carry French armies deep into the rest of Europe under a young general named Napoleon Bonaparte.",
    "What both revolutions share, diplomatically, is the introduction of a variable that eighteenth-century statecraft had no good tools for: legitimacy claimed from below. A treaty signed between two kings settles a dispute between two kings. It does not necessarily settle anything with \"the nation\" a revolutionary government claims to represent — a nation that might reject the deal, or that might not exist as a stable negotiating partner at all. Diplomats spend the rest of the period covered in this course, arguably the rest of modern history, learning to negotiate with exactly that kind of uncertainty.",
  ],
  4: [
    "Napoleon Bonaparte did not create the chaos that made his rise possible — the Revolutionary Wars had already been consuming Europe for years — but he was uniquely equipped to exploit it. A brilliant artillery officer who rose fast through revolutionary France's reshuffled military hierarchy, Bonaparte used a string of stunning victories in Italy and Egypt to build a public reputation strong enough to seize power in a coup in 1799, becoming First Consul and, by 1804, Emperor of the French.",
    "What followed was less a series of wars than a single continuous campaign to remake the map of Europe around French power. Napoleon crushed one anti-French coalition after another — Austrian and Russian forces at Austerlitz in 1805 remains one of the most studied tactical victories in military history — and installed relatives and loyal generals as rulers of client kingdoms from Spain to the Netherlands to Italy. Where he couldn't conquer outright, he tried to strangle economically: the Continental System aimed to cut Britain, the one power he couldn't defeat at sea, off from European trade entirely.",
    "The empire's undoing came in stages. Resistance in Spain tied down hundreds of thousands of French troops in a brutal guerrilla war for years. Then, in 1812, Napoleon invaded Russia with roughly 600,000 men — and marched into a scorched-earth retreat, a burned Moscow, and a Russian winter that destroyed the Grand Army almost as completely as any battle could have. The powers he had beaten and humiliated for a decade sensed their opening. At Leipzig in 1813, the largest battle Europe had seen before the First World War, a coalition finally defeated him decisively. He abdicated in 1814, returned for the audacious Hundred Days in 1815, and was defeated for good at Waterloo.",
    "The diplomatic challenge that followed was arguably harder than winning the war: how do you build a peace durable enough to prevent this from ever happening again? The Congress of Vienna, convened in 1814–15, brought together the era's most formidable diplomats — Austria's Metternich, Britain's Castlereagh, and, remarkably, Talleyrand representing a defeated France he had once served under Napoleon himself. Rather than punishing France into permanent weakness, which risked repeating the resentment that had fueled the Revolution, the Congress deliberately restored France to great-power status inside a rebalanced Europe, guided by the principles of legitimacy and equilibrium.",
    "The system they built — regular consultation among the great powers to manage crises before they became wars — became known as the Concert of Europe. It was imperfect and Eurocentric, and it did nothing for the peoples living under the empires it stabilized. But as a piece of diplomatic engineering, it worked remarkably well: no general European war would occur again for nearly a century, until the very different, far more rigid alliance system studied later in this course finally broke down in 1914.",
  ],
  5: [
    "The Concert of Europe managed the great powers, but it could not contain a force that the Napoleonic wars had unintentionally unleashed across the continent: nationalism. The idea that people sharing a language, culture, or history constituted a \"nation\" entitled to its own unified state was still radical in the early nineteenth century, but it spread fast — through the failed revolutions of 1848, through newspapers, through popular memory of resisting French occupation. By mid-century, it was reshaping the map in ways the Vienna settlement had never anticipated.",
    "Italy unified first, through a mix of diplomacy and force led by the Kingdom of Piedmont-Sardinia. Its prime minister, Camillo di Cavour, secured French support against Austria through careful diplomacy, while the charismatic revolutionary Giuseppe Garibaldi conquered southern Italy and Sicily with a volunteer army. By 1870, with French troops withdrawn to fight their own war against Prussia, Italian forces took Rome itself, completing a unification that would have seemed impossible fifty years earlier.",
    "German unification followed a very different, far more deliberate path, driven almost single-handedly by Prussia's chancellor, Otto von Bismarck. Bismarck did not believe unification would come from parliamentary speeches or popular votes — famously telling the Prussian legislature in 1862 that the great questions of the age would be decided \"by iron and blood\" — and he engineered three wars in less than a decade to prove it: against Denmark in 1864, against Austria in 1866 (won in a stunning seven weeks), and against France in 1870–71. The last of these, sparked in part by Bismarck's own editing of a diplomatic telegram to provoke French anger, ended with a German Empire proclaimed in the Hall of Mirrors at Versailles — a deliberately humiliating location chosen at France's expense.",
    "A newly unified, industrially powerful Germany sitting at the center of the continent changed the balance of power that the Concert of Europe had maintained since 1815. Bismarck understood this better than anyone, and spent the next two decades building an intricate alliance system — treaties with Austria-Hungary, Russia, and Italy — designed to keep France diplomatically isolated and to ensure Germany would never again have to fight a war on two fronts at once.",
    "It was, by most accounts, a system that only Bismarck himself could actually operate — it required holding several partially contradictory promises in careful balance simultaneously, and reading each crisis with exceptional precision. That fact would matter enormously once Bismarck was no longer the one holding it together.",
  ],
  6: [
    "In 1890, Kaiser Wilhelm II — young, ambitious, and eager to rule in fact as well as in name — dismissed Otto von Bismarck as chancellor. It is hard to overstate how much this single personnel decision would matter. Bismarck's entire alliance architecture depended on constant, careful maintenance, and his successors dismantled it within a few years almost by accident, most consequentially by letting the Reinsurance Treaty with Russia quietly lapse rather than renew it.",
    "Russia, no longer bound to Germany, found a natural partner in France, which had spent two decades diplomatically isolated and eager for exactly this kind of arrangement. The Franco-Russian Alliance was formalized in 1894. Britain, traditionally wary of continental entanglements, gradually moved closer to France through the 1904 Entente Cordiale, and then to Russia through an agreement in 1907 settling colonial disputes in Asia. The result, achieved almost by drift rather than design, was the Triple Entente — standing opposite the German-led Triple Alliance with Austria-Hungary and Italy. Europe had organized itself into two armed camps.",
    "The rivalry played out in highly visible, popular ways that made war feel increasingly normal to ordinary citizens well before it arrived. The Anglo-German naval race, driven by Germany's ambition to build a fleet capable of challenging British supremacy, became a matter of newspaper headlines and public pride on both sides. Colonial disputes, particularly two crises over Morocco in 1905 and 1911, repeatedly brought the great powers to the edge of war over territory neither France nor Germany's own publics had much direct stake in.",
    "Meanwhile, the Balkans earned their reputation as Europe's \"powder keg.\" The decline of Ottoman power in the region left a patchwork of new and contested states — Serbia, Bulgaria, Greece, and others — fighting each other and against the fading Ottoman Empire in a series of wars in 1912 and 1913 that redrew borders and left deep resentments, while both Austria-Hungary and Russia treated the region as a zone of vital strategic interest.",
    "By 1914, the pieces were all in place for a crisis to escalate uncontrollably: two rigid alliance blocs, military mobilization plans (like Germany's Schlieffen Plan) that assumed speed was more important than restraint, a public in every major country primed by years of naval races and colonial standoffs to see the other side as the aggressor, and a regional flashpoint — the Balkans — that had already proven capable of dragging great powers into local quarrels. All that was missing was the spark.",
  ],
  7: [
    "The spark came on June 28, 1914, in Sarajevo, when a Bosnian Serb nationalist named Gavrilo Princip assassinated Archduke Franz Ferdinand, heir to the Austro-Hungarian throne, and his wife Sophie. Austria-Hungary, which had wanted a pretext to deal decisively with Serbian nationalism for years, decided to use the killing as justification for a war intended to crush Serbia once and for all — but first it needed to be sure Germany, its essential ally, would back it.",
    "Germany's response, delivered in early July, became known as the \"blank check\": an unconditional promise of support for whatever Austria-Hungary decided to do, without meaningfully restraining Vienna's next move. Armed with that guarantee, Austria-Hungary issued Serbia an ultimatum on July 23 with terms deliberately designed to be difficult to accept in full. Serbia's reply was strikingly conciliatory — it accepted nearly every demand — but Austria-Hungary declared war anyway on July 28, judging the response insufficient.",
    "From there, the alliance system that had been built for exactly this kind of contingency did what it was built to do, with catastrophic results. Russia began mobilizing in support of fellow Slavic Serbia. Germany, bound to Austria-Hungary and alarmed by Russian mobilization, declared war on Russia, then on France, and — in order to execute the Schlieffen Plan's timetable for defeating France quickly — invaded neutral Belgium. That invasion, in turn, brought Britain into the war under its treaty obligations to Belgian neutrality.",
    "Sir Edward Grey, Britain's Foreign Secretary, had spent the crisis's final weeks trying to broker a mediated solution, proposing conferences and appealing for restraint from every capital. On the night of August 3, as it became clear Britain would enter the war, he is remembered for a single, haunting line: \"The lamps are going out all over Europe; we shall not see them lit again in our lifetime.\" He was speaking about the immediate crisis, but the sentence has outlived it as a description of an entire diplomatic era ending.",
    "The July Crisis remains one of the most closely studied episodes in the history of international relations, precisely because it shows a system failing in real time, with individually rational decisions by each government combining into a collectively catastrophic outcome that almost none of them actually wanted. It is also the last moment in this course where the old diplomacy — cabinets, telegrams, and personal relationships between aristocratic foreign ministers — still had a chance to prevent a war, and didn't.",
  ],
  8: [
    "The war that began in August 1914 was expected, by nearly every general staff in Europe, to be short and decisive — a war of rapid maneuver settled within months. Instead, by the end of that first year, the Western Front had frozen into a line of trenches stretching from the Swiss border to the North Sea, and would barely move more than a few miles in either direction for the next three years, at a staggering cost in human life.",
    "The war's scale was genuinely global from early on, not just a European affair. Fighting raged on the Eastern Front between Germany, Austria-Hungary, and Russia; the Ottoman Empire's entry drew in campaigns across the Middle East, including the Arab Revolt that Britain encouraged with promises of postwar independence; and colonial troops and resources from across the British, French, and other empires were drawn into a conflict none of their home populations had chosen.",
    "New technology made the killing worse without making it decisive. Machine guns turned infantry advances into slaughter. Poison gas was used for the first time on a mass scale. Battles like the Somme in 1916 — nearly 60,000 British casualties on the first day alone — and Verdun, fought almost entirely for the symbolic value of not retreating, produced casualty counts that are still difficult to comprehend, for territorial gains measured in yards.",
    "Behind the front lines, the diplomacy of the war was often quietly contradicting itself. The secret Sykes-Picot Agreement of 1916 divided Ottoman territory in the Middle East between Britain and France, in tension with promises of Arab independence made during the same period, and with the 1917 Balfour Declaration's support for a Jewish homeland in Palestine — overlapping commitments that would shape the region's politics for the rest of the twentieth century and beyond.",
    "The war's final turn came in 1917 and 1918. Germany's unrestricted submarine warfare and the intercepted \"Zimmermann Telegram,\" proposing a German-Mexican alliance against the United States, pushed a reluctant America into the war on the Allied side. Russia, consumed by revolution, exited the war through the Treaty of Brest-Litovsk in 1918. Germany's last major offensive that spring ultimately failed, and with its allies collapsing and its army exhausted, Germany agreed to an armistice that took effect at the eleventh hour of the eleventh day of the eleventh month of 1918. Roughly 20 million people, soldiers and civilians combined, were dead. The fighting was over. The peace still had to be negotiated.",
  ],
  9: [
    "The Paris Peace Conference opened in January 1919 with enormous, almost impossible expectations riding on it: not just to end one war, but to design a peace that would prevent the next one. It was dominated by the \"Big Four\" — the United States' Woodrow Wilson, Britain's David Lloyd George, France's Georges Clemenceau, and Italy's Vittorio Orlando — negotiating among the twenty-seven victorious Allied nations present, while the defeated powers, including Germany, were excluded from the negotiations entirely and presented with terms they could only accept or reject, not shape.",
    "The Big Four came to Paris with goals that were often in direct tension. Wilson arrived with his Fourteen Points, a strikingly idealistic program built around self-determination for nations, open diplomacy in place of secret treaties, and above all a League of Nations that could resolve future disputes before they became wars. Clemenceau, representing a France that had been invaded by Germany twice in living memory and had suffered catastrophic losses on its own soil, wanted above all a settlement that would permanently prevent Germany from threatening France again — security first, idealism a distant second.",
    "The terms eventually imposed on Germany in the Treaty of Versailles reflected that tension without fully resolving it. Germany lost significant territory, had its military sharply restricted, was assigned enormous reparations payments, and — in Article 231, the so-called \"war guilt clause\" — was forced to formally accept sole responsibility for causing the war. Because Germany had no seat at the negotiating table, the treaty was widely experienced there not as a negotiated peace but as a diktat, a settlement dictated by the victors — a grievance that revisionist politicians would exploit for the next two decades.",
    "Wilson's signature achievement, the League of Nations, was written into the treaty and did come into existence in 1920 as the first serious global attempt at collective security — the idea that an attack on any member state would be treated as a concern for all. But the institution was crippled almost immediately: the U.S. Senate, wary of binding international commitments, refused to ratify the treaty or allow the United States to join the very organization its own president had designed.",
    "The peace of 1919, in other words, was a genuine institutional innovation built on a foundation almost guaranteed to erode it — a punitive settlement toward Germany, combined with a collective security system missing one of the world's rising powers from the start. It bought Europe roughly two decades. Whether that should be judged a success or a failure depends heavily on what happens in the weeks of this course that follow.",
  ],
  10: [
    "For a few years in the mid-1920s, it looked as though the postwar order might actually stabilize. The Locarno Treaties of 1925 saw Germany voluntarily accept its western borders and improve relations with France and Belgium; Germany joined the League of Nations in 1926; and in 1928 the Kellogg-Briand Pact saw dozens of nations formally renounce war as an instrument of national policy. It was an imperfect peace, but a real one, and contemporaries genuinely believed the worst might be behind them.",
    "The 1929 Wall Street Crash shattered that fragile optimism within months. The Great Depression that followed was global, and it hit the young, still-fragile democracies of Central Europe especially hard. Mass unemployment, collapsing currencies, and a widespread sense that the existing political order had failed created exactly the conditions in which extremist movements — promising simple, forceful answers to complicated problems — could gain mass support.",
    "Revisionist and fascist regimes moved to test the limits of the postwar settlement, and found remarkably little resistance. Mussolini's Italy invaded Ethiopia in 1935 in open defiance of the League of Nations, which imposed only weak, ultimately ineffective sanctions. Hitler's Germany, having already begun rearming in violation of Versailles, remilitarized the Rhineland in 1936 — a direct challenge that France and Britain, each hoping the other would act first, chose not to contest.",
    "Each unanswered challenge made the next one more likely. Germany annexed Austria in the 1938 Anschluss, then turned to Czechoslovakia's German-speaking Sudetenland. At the Munich Conference in September 1938, Britain and France agreed to let Germany annex the Sudetenland without even inviting Czechoslovakia, whose territory was being handed over, to the negotiations. British Prime Minister Neville Chamberlain returned home declaring he had secured \"peace for our time.\"",
    "He had secured less than a year. By March 1939, Germany had occupied the rest of Czechoslovakia in violation of the Munich agreement's own terms, proving decisively that appeasement — however understandable as a policy pursued by exhausted democracies desperate to avoid repeating 1914–18 — had not satisfied Hitler's ambitions, only postponed the reckoning with them. The next crisis would be Poland, and this time, Britain and France would not step back.",
  ],
  11: [
    "In August 1939, the world watched two governments that had spent years denouncing each other as existential ideological enemies sign a non-aggression pact instead. The Molotov–Ribbentrop Pact between Nazi Germany and the Soviet Union stunned observers on both the left and the right — but it made brutal strategic sense to both signatories, and it included secret protocols dividing Poland and the rest of Eastern Europe into German and Soviet spheres of influence, clearing the way for each to act without fear of the other.",
    "Germany invaded Poland on September 1, 1939. Britain and France, honoring their commitments to Poland, declared war two days later — but the fighting on the Western Front barely materialized for months, a period so quiet it became known as the \"Phoney War.\" That changed abruptly in the spring of 1940, when German forces launched a series of lightning campaigns — Blitzkrieg — through Denmark, Norway, the Low Countries, and finally France itself, which fell in a matter of weeks.",
    "With France defeated and Britain standing alone, the war entered a new phase. The Battle of Britain, fought in the skies over southern England in the summer and autumn of 1940, was the first major campaign Germany failed to win outright. The conflict also widened geographically, as Italy joined the war on Germany's side and fighting spread to North Africa and the Mediterranean.",
    "The war's character changed most dramatically in June 1941, when Germany launched Operation Barbarossa, a massive surprise invasion of the Soviet Union — the same power it had signed a non-aggression pact with less than two years earlier. Almost overnight, the ideological alignment of the war shifted: the Soviet Union, until days before an awkward diplomatic partner of Berlin, became an essential ally of Britain in the fight against Germany.",
    "The final piece fell into place in December 1941. Japan's attack on the American naval base at Pearl Harbor brought the United States fully into the war, and within days Germany and Italy declared war on the U.S. as well, completing the alignment that would define the rest of the conflict: the Allied powers — Britain, the Soviet Union, the United States, and others — against the Axis. What had begun as a German invasion of Poland was now, unmistakably and for the second time in a generation, a genuinely global war.",
  ],
  12: [
    "With the Allied powers now aligned against a common enemy, wartime diplomacy shifted toward a new question: not just how to win the war, but how to shape what came after it. At the Casablanca Conference in January 1943, Roosevelt and Churchill announced a policy of demanding Germany's unconditional surrender — a decision meant to reassure the Soviet Union that its Western allies would not seek a separate peace, but one that also removed any incentive for a negotiated settlement short of total defeat.",
    "In November 1943, the leaders of the three major Allied powers — Roosevelt, Churchill, and Stalin — met in person for the first time, at Tehran. The conference coordinated military strategy, including firm commitments toward opening a \"Second Front\" in Western Europe, but it was also the first real conversation among the eventual victors about the shape of the postwar world, conducted while the outcome of the war itself was still very much in doubt.",
    "The military tide turned decisively over the following eighteen months. The Soviet victory at Stalingrad had already broken the momentum of the German invasion in the east; the D-Day landings in Normandy in June 1944 opened the long-promised Western Front; and by early 1945, Allied and Soviet forces were converging on Germany from opposite directions. It was against this backdrop — victory increasingly assured, but the postwar map still entirely undecided — that the Big Three met again at Yalta in February 1945.",
    "The Yalta Conference addressed some of the most consequential and contested questions of the century: the borders and future government of Poland, Soviet participation in the war against Japan, the division of Germany into occupation zones, and the founding principles of a new international organization. The agreements reached there would shape the geopolitics of Europe for the following four and a half decades, and the growing distrust visible beneath the conference's cooperative surface was an early sign of the Cold War to come.",
    "Germany surrendered in May 1945. At the Potsdam Conference that followed in July and August — with Harry Truman now representing the United States after Roosevelt's death, and a noticeably tougher tone from Washington toward Moscow — the Allies finalized plans for occupied Germany, even as the atomic bombings of Hiroshima and Nagasaki in August brought the war with Japan to its abrupt end.",
    "In June 1945, delegates from fifty-one nations had already gathered in San Francisco to sign the Charter of the United Nations — a deliberate attempt to build, on the ashes of the League of Nations' failure, an institution durable enough to prevent a third global war. It is a fitting, unresolved place for this course to end: a new international order, genuinely built from the hard lessons of everything covered in these twelve weeks, launched into a world where the wartime alliance that created it was already quietly coming apart. That next story — the Cold War — belongs to another course.",
  ],
};
