/**
 * Course content for POL4772 Issues in International Security.
 * To add/edit a week, case, or reading, update the arrays below — no need to
 * touch HTML/CSS, the page renders from this data automatically.
 */

const COURSE2 = {
  code: "POL4772",
  title: "Issues in International Security",
  instructor: "Asst. Prof. Atakan Yılmaz",
  instructorEmail: "atakan.yilmaz@bau.edu.tr",
  semester: "Fall 2026–2027",
  schedule: "Fridays, 14:30–17:20 · Room D405",
  credits: "3 Credits · 6 ECTS",
  requiredBooks: [
    "Hough, Malik, Moran & Pilbeam, International Security Studies: Theory and Practice — Routledge, 2015",
    "Williams & McDonald, Security Studies: An Introduction (3rd ed.) — Routledge, 2018",
  ],
  grading: [
    { component: "Presentations", weight: 15 },
    { component: "Midterm Exam", weight: 30 },
    { component: "Weekly Security Brief", weight: 10 },
    { component: "Final Exam", weight: 45 },
  ],
};

// Thematic clusters (used for color-coding and filtering, like "eras" on the other course site).
const CATEGORIES2 = [
  { id: "foundations", label: "Foundations: What Security Means", color: "#2e7d6b" },
  { id: "conflict", label: "Conflict, War & Intervention", color: "#4a5aa8" },
  { id: "nontraditional", label: "Non-Traditional & Emerging Threats", color: "#b0413e" },
];

// Weekly syllabus (12 weeks)
const WEEKS2 = [
  {
    week: 1,
    hook: "Where This Course Begins",
    topic: "Introduction to International Security",
    summary: "What this course covers, how it's organized, and what to expect from the semester.",
    required: [],
    assessment: null,
    category: "foundations",
    icon: "🎓",
  },
  {
    week: 2,
    hook: "What Do We Even Mean by \"Security\"?",
    topic: "What is Security and Security Studies?",
    summary: "The core debate over whose security counts, and what threats belong in the field at all.",
    required: [
      "Hough et al., Ch. 1 (Framing a Discipline)",
      "Walt, \"The Renaissance of Security Studies,\" International Studies Quarterly, 1991",
      "Baldwin, \"The Concept of Security,\" Review of International Studies, 1997",
    ],
    assessment: "Weekly Security Brief",
    category: "foundations",
    icon: "❓",
  },
  {
    week: 3,
    hook: "Three Lenses on Danger",
    topic: "Traditional and Critical Perspectives: Realism, Liberalism, Critical Security Studies",
    summary: "Do states pursue security through power, through cooperation, or something else entirely? Three competing answers.",
    required: [
      "Hough et al., Ch. 2 (Realism and Liberalism)",
      "Hough et al., Ch. 3 (Challenging Orthodoxy: Critical Security Studies)",
    ],
    assessment: "Weekly Security Brief",
    category: "foundations",
    icon: "⚖️",
  },
  {
    week: 4,
    hook: "Can Rising Powers Rise Peacefully?",
    topic: "Great Power Competition and the Changing International Order",
    summary: "The \"Thucydides Trap\" and whether U.S.-China rivalry is following the same script as history's great-power transitions.",
    required: [
      "Allison, \"The Thucydides Trap,\" excerpt from Destined for War, 2017",
      "Mearsheimer, \"The Inevitable Rivalry: America, China, and the Tragedy of Great-Power Politics,\" Foreign Affairs, 2021",
    ],
    assessment: "Weekly Security Brief",
    category: "foundations",
    icon: "🌍",
  },
  {
    week: 5,
    hook: "Guns, Bombs, and Deterrence",
    topic: "Military Security",
    summary: "How military capability itself became something states need to be secured from, not just secured by.",
    required: ["Hough et al., Ch. 7 (Reflecting on War and Peace)"],
    assessment: "Weekly Security Brief",
    category: "conflict",
    icon: "🪖",
  },
  {
    week: 6,
    hook: "Security by Committee",
    topic: "Regional Security Organisations",
    summary: "NATO, the EU, ASEAN, and others: what regional bodies can and can't do when conflict breaks out nearby.",
    required: ["Hough et al., Ch. 22 (Regional Security Organisations)"],
    assessment: "Weekly Security Brief",
    category: "conflict",
    icon: "🤝",
  },
  {
    week: 7,
    hook: "Why Do Rational States Go to War?",
    topic: "Bargaining Model of War (Recap & Midterm)",
    summary: "If war is costly for everyone, why does it happen anyway? A formal theory of war as a bargaining failure.",
    required: [
      "Fearon, \"Rationalist Explanations for War,\" International Organization, 1995",
      "Powell, \"War as a Commitment Problem,\" International Organization, 2006",
    ],
    assessment: "Midterm Exam",
    category: "conflict",
    icon: "🎲",
  },
  {
    week: 8,
    hook: "Wars Inside Borders",
    topic: "Intrastate Conflict and Civil War",
    summary: "What separates a \"new\" civil war from an \"old\" one, and why that distinction matters for how they end.",
    required: [
      "Kalyvas, \"'New' and 'Old' Civil Wars: A Valid Distinction?\" World Politics, 2001",
      "Collier et al., \"Breaking the Conflict Trap,\" World Bank Policy Research Report, 2003, Ch. 3",
    ],
    assessment: "Weekly Security Brief",
    category: "conflict",
    icon: "🏚️",
  },
  {
    week: 9,
    hook: "When Does the World Step In?",
    topic: "Intervention and Responsibility to Protect",
    summary: "Sovereignty versus the duty to prevent atrocities — and why the world intervenes in some crises and not others.",
    required: ["Hough et al., Ch. 20 (The United Nations and the Responsibility to Protect)"],
    assessment: "Weekly Security Brief",
    category: "conflict",
    icon: "🕊️",
  },
  {
    week: 10,
    hook: "The Strategy Behind the Violence",
    topic: "Terrorism and Counter-terrorism",
    summary: "Terrorism as a deliberate strategy of the weak, not just senseless violence — and what actually stops it.",
    required: [
      "Hough et al., Ch. 11 (Terrorism)",
      "Kydd & Walter, \"The Strategies of Terrorism,\" International Security, 2006",
    ],
    assessment: "Weekly Security Brief",
    category: "nontraditional",
    icon: "💣",
  },
  {
    week: 11,
    hook: "The Battlefield You Can't See",
    topic: "Cyber Security and Emerging Technologies",
    summary: "Why cyberattacks are transforming conflict — without a single shot ever needing to be fired.",
    required: [
      "Williams & McDonald, Ch. 37 (Cybersecurity)",
      "Horowitz, \"Artificial Intelligence, International Competition, and the Balance of Power,\" Texas National Security Review, 2018",
    ],
    assessment: "Weekly Security Brief",
    category: "nontraditional",
    icon: "💻",
  },
  {
    week: 12,
    hook: "Security Beyond the Battlefield",
    topic: "Human Security, Health Security, and Non-Traditional Threats",
    summary: "When the threat to your life is a pandemic, a famine, or a flood, not a soldier.",
    required: [
      "Hough et al., Ch. 5 (Human Security)",
      "Hough et al., Ch. 18 (Health and Security)",
      "Buhaug, \"Climate-Conflict Research: Some Reflections on the Way Forward,\" WIREs Climate Change, 2015",
    ],
    assessment: "Weekly Security Brief",
    category: "nontraditional",
    icon: "🌡️",
  },
];

/**
 * Case libraries for the weeks that have a presentation prompt. Each case is
 * a real, documented event or organization students can choose to present on.
 * `signup: true` cases get a "Sign up to present" button (opens a pre-filled
 * email to the instructor); a couple of open-ended prompts are left as
 * discussion starters instead (signup: false).
 */
// Rubric criteria for the two recurring, current-events-driven assessments.
const RUBRICS = {
  brief: {
    title: "Weekly Security Brief",
    weight: 10,
    description:
      "A one-page brief, due most weeks, connecting a current, real-world security story to that week's concept. This is the assessment that rewards actually keeping up with the news.",
    criteria: [
      { name: "Relevance & Timeliness", weight: 25, tip: "Pick something genuinely current — a story from the last week or two, not last year." },
      { name: "Analytical Application", weight: 35, tip: "Use the week's concept to explain the story — don't just summarize the news." },
      { name: "Use of Sources", weight: 20, tip: "Cite credible sources: reputable news outlets, think tanks, or academic material." },
      { name: "Clarity & Conciseness", weight: 20, tip: "Stay on one page. A tight, well-organized brief beats a sprawling one." },
    ],
  },
  presentation: {
    title: "Case Presentation",
    weight: 15,
    description:
      "A short presentation on a real case, most weeks from Week 5 onward — pick one from that week's case library below, or propose your own.",
    criteria: [
      { name: "Content & Analysis", weight: 40, tip: "Go beyond describing the case — build a clear argument about it." },
      { name: "Use of Sources", weight: 20, tip: "Use and properly cite credible academic or case-specific sources." },
      { name: "Organization & Clarity", weight: 20, tip: "Structure your talk around a few key points, and stay on time." },
      { name: "Delivery & Engagement", weight: 20, tip: "Don't read from your slides — be ready to field questions." },
    ],
  },
};

const CASES = {
  5: {
    prompt: "No fixed case list this week — pick any military security topic that interests you and check with the instructor.",
    cases: [
      { title: "Nuclear Deterrence: India–Pakistan", text: "Two nuclear-armed neighbors with a history of open conflict — a live test of deterrence theory outside the Cold War context it was built for." },
      { title: "NATO's Post-2022 Force Posture", text: "How the war in Ukraine pushed NATO to reverse decades of drawing down forces in Eastern Europe." },
      { title: "North Korea's Missile Program", text: "A small, isolated state using nuclear and missile development as its central security strategy." },
      { title: "The South China Sea Military Buildup", text: "Overlapping territorial claims, artificial islands, and a growing risk of great-power confrontation at sea." },
    ],
  },
  6: {
    prompt: "Presentation: a case related to a regional organization of your choosing.",
    cases: [
      { title: "NATO — Article 5 After 9/11", text: "The only time in NATO's history its mutual-defense clause has ever been invoked — and what it did and didn't commit members to." },
      { title: "OSCE — Special Monitoring Mission to Ukraine (2014–2022)", text: "Unarmed civilian monitors trying to track a war zone's ceasefire violations in real time." },
      { title: "EU — Common Security and Defence Policy Missions", text: "From anti-piracy patrols off Somalia to training missions in Africa: what the EU does militarily beyond its own borders." },
      { title: "ASEAN — Responses to the Myanmar Crisis", text: "A regional bloc built on non-interference, tested by a military coup in one of its own member states." },
      { title: "Shanghai Cooperation Organisation — Counter-Terrorism Cooperation", text: "How China, Russia, and Central Asian states coordinate security through a body the West rarely discusses." },
      { title: "African Union — AMISOM/ATMIS in Somalia", text: "A regional peacekeeping force fighting an active insurgency (al-Shabaab) with a mandate the UN itself avoided taking on directly." },
    ],
  },
  8: {
    prompt: "Presentation: compare a \"new\" and an \"old\" civil war using Kalyvas' framework (can be the same conflict across two periods).",
    cases: [
      { title: "Spanish Civil War (1936–39) vs. Syrian Civil War (2011–present)", text: "An ideologically clear, front-line war of the 1930s against a fragmented, multi-actor conflict with no clean front lines." },
      { title: "Sri Lankan Civil War (1983–2009) vs. South Sudan Civil War (2013–2020)", text: "A long ethnic-separatist insurgency against a fresh state collapsing into intra-elite, identity-fueled violence." },
      { title: "The Colombian Conflict (1964–2016)", text: "One conflict that runs so long it arguably shifts from an 'old' ideological war to a 'new' war fueled by drug trafficking — within itself." },
      { title: "Sudan's Civil War (2023–present)", text: "A very current case: a power struggle between two military factions (SAF and RSF) collapsing into one of the world's largest displacement crises." },
    ],
  },
  9: {
    prompt: "Presentation: a case on intervention.",
    cases: [
      { title: "Rwanda (1994) — The Intervention That Didn't Happen", text: "The case that arguably created R2P: a genocide the world watched and largely failed to stop." },
      { title: "Kosovo (1999) — Intervention Without UN Authorization", text: "NATO bombed Serbia without a UN Security Council resolution, forcing a hard question: is an intervention ever legitimate without being legal?" },
      { title: "Libya (2011) — R2P's Most-Cited Invocation", text: "A UN-authorized, NATO-led intervention that stopped an advancing army — and then became a case study in how quickly 'protect civilians' can slide into 'regime change.'" },
      { title: "Syria — The Intervention That Was Blocked", text: "Where R2P was invoked rhetorically but never authorized, because Russia and China vetoed Security Council action for years." },
      { title: "Côte d'Ivoire (2011) — A Quieter R2P Success", text: "A joint UN–French intervention to stop a contested election from becoming a civil war, with far less controversy than Libya." },
    ],
  },
  10: {
    prompt: "Presentation: a case of terrorism and counter-terrorism.",
    cases: [
      { title: "9/11 and the War on Terror (2001–)", text: "The attack that redefined U.S. and global counter-terrorism policy for two decades — and arguably still does." },
      { title: "ISIS and the Rise and Fall of the \"Caliphate\" (2014–2019)", text: "A terrorist group that briefly held and governed territory the size of a small country, and the international coalition built to dismantle it." },
      { title: "Hamas's October 7, 2023 Attack and Its Aftermath", text: "A single attack whose strategic and humanitarian consequences are still actively unfolding — a genuinely live case study." },
      { title: "Boko Haram in the Lake Chad Basin", text: "An insurgency that treats state borders (Nigeria, Chad, Niger, Cameroon) as irrelevant, complicating any single country's response." },
      { title: "Sri Lanka Easter Bombings (2019)", text: "A coordinated, ISIS-linked attack on a country with little recent history of jihadist terrorism — a case about intelligence failure as much as the attack itself." },
    ],
  },
  11: {
    prompt: "Presentation: a case of cyberattack.",
    cases: [
      { title: "Stuxnet (2010)", text: "Widely attributed to the U.S. and Israel: the first cyberweapon known to cause physical damage, targeting Iran's nuclear centrifuges." },
      { title: "WannaCry Ransomware (2017)", text: "A North Korea-linked worm that crippled hospitals, companies, and government systems in over 150 countries in a single weekend." },
      { title: "SolarWinds Supply Chain Attack (2020)", text: "Russian state hackers compromised software used by thousands of organizations, including multiple U.S. federal agencies, for months before detection." },
      { title: "Colonial Pipeline Ransomware Attack (2021)", text: "A single ransomware attack on one U.S. pipeline operator triggered fuel shortages and panic-buying across the East Coast." },
      { title: "Salt Typhoon (2024)", text: "A Chinese state-linked group that penetrated major U.S. telecom providers, reportedly accessing call records and communications of government officials." },
    ],
  },
  12: {
    prompt: "Presentation: a case on human security or health security.",
    cases: [
      { title: "COVID-19 as a Health Security Crisis (2020–2023)", text: "The pandemic that made \"health security\" impossible for any security studies course to skip — and exposed how unprepared even wealthy states were." },
      { title: "The Rohingya Crisis", text: "A stateless minority in Myanmar facing what the UN has called ethnic cleansing — a human security crisis with no clean sovereignty answer." },
      { title: "Global Food Security After the Russia–Ukraine War", text: "How one interstate war disrupted grain exports enough to threaten food security on other continents entirely." },
      { title: "The Sahel Climate-Conflict Nexus", text: "Where shrinking farmland and water scarcity feed directly into recruitment for armed groups — the clearest real-world test of the 'climate causes conflict' thesis." },
      { title: "Sudan's Humanitarian Crisis (2023–present)", text: "Described by the UN as the world's largest displacement crisis — a single conflict producing a human security emergency on a massive scale." },
    ],
  },
};
