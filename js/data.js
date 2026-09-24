/**
 * Course content lives here. To add or edit a week or a timeline event, just
 * update the arrays below — no need to touch the HTML/CSS, the page is
 * rendered from this data automatically.
 *
 * Scope: 1648 Peace of Westphalia — 1945 End of World War II (12 weeks)
 */

// Eras: color and label definitions. The `id` field is matched against the
// `era` field on both weeks and timeline events.
const ERAS = [
  { id: "early-modern", label: "Westphalian Order (1648–1789)", color: "#2e7d6b" },
  { id: "19th-century", label: "19th-Century Diplomacy (1789–1878)", color: "#4a5aa8" },
  { id: "imperialism", label: "Imperialism & Crisis (1878–1914)", color: "#a8763e" },
  { id: "world-wars", label: "Age of World Wars (1914–1945)", color: "#b0413e" },
];

// Weekly syllabus (12 weeks)
const WEEKS = [
  {
    week: 1,
    title: "The Peace of Westphalia (1648)",
    summary: "The end of the Thirty Years' War, the principle of sovereignty, and the birth of the modern state system.",
    era: "early-modern",
    icon: "📜",
  },
  {
    week: 2,
    title: "Cabinet Diplomacy and the Balance of Power",
    summary: "Dynastic diplomacy, permanent embassies in the 17th–18th centuries, and the Peace of Utrecht (1713).",
    era: "early-modern",
    icon: "⚖️",
  },
  {
    week: 3,
    title: "The French Revolution and Napoleonic Diplomacy",
    summary: "Revolutionary diplomacy, Napoleon's continental order, and the collapse of the old system.",
    era: "early-modern",
    icon: "⚜️",
  },
  {
    week: 4,
    title: "The Congress of Vienna and the Concert of Europe (1815)",
    summary: "The construction of the post-Napoleonic order, the Metternich system, and congress diplomacy.",
    era: "19th-century",
    icon: "🕯️",
  },
  {
    week: 5,
    title: "Mid-19th-Century Diplomacy",
    summary: "The Crimean War, the Congress of Paris (1856), and the Ottoman Empire's entry into the Concert of Europe.",
    era: "19th-century",
    icon: "🕊️",
  },
  {
    week: 6,
    title: "Bismarckian Diplomacy and the Alliance System",
    summary: "German unification, Bismarck's web of alliances, and the Congress of Berlin (1878).",
    era: "19th-century",
    icon: "🤝",
  },
  {
    week: 7,
    title: "Imperialism and Colonial Diplomacy",
    summary: "The Berlin Conference (1884–85), the Scramble for Africa, and the diplomacy of imperial rivalry.",
    era: "imperialism",
    icon: "🗺️",
  },
  {
    week: 8,
    title: "The Road to World War I",
    summary: "Bloc formation, the arms race, the July Crisis (1914), and the breakdown of crisis diplomacy.",
    era: "imperialism",
    icon: "⚔️",
  },
  {
    week: 9,
    title: "The Paris Peace Conference and Versailles (1919)",
    summary: "Wilson's Fourteen Points, the Treaty of Versailles, and the founding of the League of Nations.",
    era: "world-wars",
    icon: "🖋️",
  },
  {
    week: 10,
    title: "Interwar Diplomacy",
    summary: "The Locarno order, appeasement, and the Munich Agreement (1938): the failure of collective security.",
    era: "world-wars",
    icon: "🌪️",
  },
  {
    week: 11,
    title: "The Road to World War II",
    summary: "The Molotov–Ribbentrop Pact, the invasion of Poland, and the start of wartime alliance diplomacy.",
    era: "world-wars",
    icon: "🖊️",
  },
  {
    week: 12,
    title: "The End of World War II",
    summary: "The Tehran, Yalta, and Potsdam conferences; the founding of the United Nations and the postwar order.",
    era: "world-wars",
    icon: "🌍",
  },
];

// Timeline / infographic events
const TIMELINE = [
  {
    year: "1648",
    title: "Peace of Westphalia",
    text: "Ended the Thirty Years' War; the principle of sovereign statehood became the foundation of modern diplomacy.",
    era: "early-modern",
    icon: "📜",
  },
  {
    year: "1713",
    title: "Treaty of Utrecht",
    text: "Ended the War of the Spanish Succession; the balance of power became a codified diplomatic norm.",
    era: "early-modern",
    icon: "⚖️",
  },
  {
    year: "1789",
    title: "The French Revolution",
    text: "Popular sovereignty entered diplomacy, challenging the legitimacy of dynastic statecraft.",
    era: "early-modern",
    icon: "⚜️",
  },
  {
    year: "1806–1815",
    title: "The Napoleonic Order in Europe",
    text: "Napoleon's conquests overturned the old diplomatic balance and forced new continent-wide alliances.",
    era: "early-modern",
    icon: "🗡️",
  },
  {
    year: "1815",
    title: "Congress of Vienna",
    text: "Rebuilt the European order after Napoleon; launched the Concert of Europe.",
    era: "19th-century",
    icon: "🕯️",
  },
  {
    year: "1856",
    title: "Congress of Paris",
    text: "Ended the Crimean War; the Ottoman Empire was formally admitted into the Concert of Europe.",
    era: "19th-century",
    icon: "🕊️",
  },
  {
    year: "1871",
    title: "German Unification",
    text: "The German Empire was founded under Bismarck's leadership, reshaping the European balance of power.",
    era: "19th-century",
    icon: "🏛️",
  },
  {
    year: "1878",
    title: "Congress of Berlin",
    text: "Redrew the status of the Balkans at the heart of the Eastern Question.",
    era: "19th-century",
    icon: "📋",
  },
  {
    year: "1884–85",
    title: "Berlin Conference",
    text: "European powers set the rules for the colonization of Africa around the negotiating table.",
    era: "imperialism",
    icon: "🗺️",
  },
  {
    year: "1907",
    title: "Completion of the Triple Entente",
    text: "Britain, France, and Russia finalized their bloc, dividing Europe into two rival camps.",
    era: "imperialism",
    icon: "🤝",
  },
  {
    year: "1914",
    title: "Outbreak of World War I",
    text: "After the Sarajevo assassination, the July Crisis exposed the collapse of crisis diplomacy, igniting a global war.",
    era: "imperialism",
    icon: "⚔️",
  },
  {
    year: "1919",
    title: "Paris Peace Conference and Treaty of Versailles",
    text: "Wilson's Fourteen Points were debated; harsh terms were imposed on Germany.",
    era: "world-wars",
    icon: "🖋️",
  },
  {
    year: "1920",
    title: "Founding of the League of Nations",
    text: "The first global international organization built on the idea of collective security began operating.",
    era: "world-wars",
    icon: "🕊️",
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
    title: "Molotov–Ribbentrop Pact and Outbreak of War",
    text: "The German-Soviet non-aggression pact and the invasion of Poland triggered World War II.",
    era: "world-wars",
    icon: "🖊️",
  },
  {
    year: "1943",
    title: "Tehran Conference",
    text: "The Allies (US, UK, USSR) met for the first time to begin shaping the postwar order.",
    era: "world-wars",
    icon: "🕰️",
  },
  {
    year: "1945",
    title: "Yalta and Potsdam Conferences, Founding of the UN",
    text: "The postwar world order was designed; the United Nations was established.",
    era: "world-wars",
    icon: "🌍",
  },
];
