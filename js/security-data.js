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

/**
 * Detailed weekly primers — 3-4 paragraphs explaining that week's topic in
 * more depth than the one-line summary, grounded in the assigned readings.
 * Shown in the "Learn More" modal for each week.
 */
const PRIMERS = {
  1: [
    "This course looks at international security the way the field itself has come to be practiced: not as a single settled topic, but as an ongoing argument about which threats actually deserve to be called \"security\" issues, and who gets to decide.",
    "The first half of the semester builds your theoretical toolkit — what security means, how realists, liberals, and critical scholars each explain state behavior differently, and how great-power rivalry (like today's U.S.-China relationship) fits historical patterns. The second half applies that toolkit to specific problems: military security, regional organizations, civil wars, humanitarian intervention, terrorism, cyber threats, and human and health security.",
    "Two assessments run through nearly every week: a Weekly Security Brief, where you connect a current news story to that week's concept, and a case Presentation, where you research and present a real case in depth. Both are designed to reward staying current, not just memorizing definitions — which is exactly what this website's case library and video links are here to help with.",
  ],
  2: [
    "Before you can study \"international security,\" you have to answer a surprisingly hard question: what does \"security\" actually mean? For most of the Cold War, the field had an easy answer — security meant the survival of the state against military threats from other states. Arnold Wolfers' classic definition described security as the \"absence of threats to acquired values,\" which sounds simple until you ask: whose values, and which threats?",
    "David Baldwin's \"The Concept of Security\" (1997) broke the question down further: any serious definition of security has to specify security for whom (the state? individuals? the whole international system?), security from what threats (military only, or also economic, environmental, health?), by what means, and at what cost. Answer those questions differently, and you get a completely different research agenda.",
    "Stephen Walt's \"The Renaissance of Security Studies\" (1991) argued for keeping the field narrowly focused on the study of the threat, use, and control of military force — worried that a field that studies everything ends up studying nothing well. Others pushed back hard, arguing that focusing only on states and militaries ignores the threats that actually kill the most people: poverty, disease, environmental collapse. That argument — narrow versus broad security — is the single most important fault line running through this entire course.",
  ],
  3: [
    "If two states both want to be secure, why do they so often end up in conflict with each other? This week covers the three broad families of answers international relations theory has produced.",
    "Realism starts from anarchy: there's no world government to enforce agreements between states, so each state has to rely on itself for survival (self-help). That produces the security dilemma — one state's defensive military buildup looks threatening to its neighbors, who then arm up too, even though neither side wanted a conflict. John Mearsheimer's structural (\"offensive\") realism takes this further, arguing that under anarchy, states can never be fully sure of each other's intentions, so the safest strategy is to maximize your own relative power.",
    "Liberalism pushes back: Oneal and Russett's \"Kantian Peace\" research finds that democracies, economic interdependence, and international organizations all measurably reduce the likelihood of conflict between states — cooperation isn't naive, it's a rational response to shared interests. Critical Security Studies goes further still, questioning the whole premise that the state should be the object of security in the first place, and introducing ideas like securitization — the notion that something becomes a \"security issue\" not because it's objectively dangerous, but because political actors successfully frame it that way.",
  ],
  4: [
    "Graham Allison's \"Thucydides Trap\" is built on a 2,500-year-old observation: the Greek historian Thucydides wrote that the Peloponnesian War was caused by \"the rise of Athens and the fear this instilled in Sparta.\" Allison's research team found 16 historical cases over the last 500 years where a rising power challenged a ruling one — and 12 of those 16 ended in war.",
    "The obvious application today is U.S.-China relations. Is a rising China, like Athens, fated to clash with an established America, like Sparta? Mearsheimer's \"The Inevitable Rivalry\" argues the structural pressure is real and largely inescapable under his theory of great-power politics. Others, like John Ikenberry, ask a different question: is it really a clash between two powers, or the slow unwinding of the specific liberal international order the U.S. built after 1945 — an order that may not have been built to last forever in the first place.",
    "This isn't an abstract debate. It shapes how policymakers read events happening right now: Taiwan Strait tensions, South China Sea disputes, semiconductor export controls, and the AUKUS and Quad security arrangements are all, in part, moves being made inside this larger theoretical argument about whether rising and ruling powers can avoid a trap that history suggests is hard to escape.",
  ],
  5: [
    "Military security is the field's oldest and most traditional concern — but it has never been static. This week is about what actually makes military power a source of both security and insecurity at the same time.",
    "The security dilemma reappears here in its sharpest form: even a state that builds up its military purely for defense can't credibly signal that to a rival, because most weapons that defend can also attack. That uncertainty drives arms races, alliance formation, and crisis instability — dynamics playing out visibly today, from renewed European defense spending since 2022 to the nuclear rivalry between India and Pakistan.",
    "Nuclear weapons added a strange twist to this logic: Mutually Assured Destruction meant that, for the first time, the most powerful weapons ever built could arguably make major war less likely between the states that had them, by making it unwinnable. Buzan's \"Changing Agenda of Military Security\" traces how the field's understanding of military threats has kept evolving since — from Cold War superpower confrontation to today's mix of precision weapons, drone warfare, and hybrid tactics that blur the line between military and non-military threats.",
  ],
  6: [
    "No state handles its security entirely alone — most pool at least some of it through regional organizations. But those organizations vary enormously in what they're actually built to do.",
    "NATO is a collective defense pact: an attack on one member is treated as an attack on all (Article 5), though it's only ever been invoked once — after the September 11, 2001 attacks on the United States. The EU's Common Security and Defence Policy is looser, running everything from anti-piracy naval patrols to training missions rather than a mutual-defense guarantee. ASEAN operates on a principle of strict non-interference in members' internal affairs — a norm tested hard by the 2021 Myanmar coup. The African Union is the outlier: its founding Constitutive Act's Article 4(h) actually grants the AU the right to intervene in a member state in cases of genocide or war crimes, a power most regional bodies don't claim for themselves.",
    "Gorm Rye Olsen's reading asks a pointed question about all of this: when a regional or international body intervenes militarily, is it really \"for the good of\" the region in crisis, or does it end up serving the interests of the intervening powers more? That question — whose interest does regional security actually serve? — is exactly what you'll need to dig into for this week's case presentation.",
  ],
  7: [
    "Here's a puzzle that sits at the center of the rationalist study of war: fighting is almost always more costly than reaching a negotiated deal that gives each side roughly what they'd have won anyway, minus the cost of the war itself. So if states are rational, why does war happen at all, instead of everyone just settling on the negotiated outcome upfront?",
    "James Fearon's \"Rationalist Explanations for War\" (1995) — one of the most cited articles in the field — identifies three answers. First, private information with incentives to misrepresent: each side may have secret information about its own strength or resolve, and an incentive to bluff about it, making it hard to find the deal both sides would actually accept. Second, commitment problems: even if two states can agree on a deal today, neither can credibly promise to stick to it tomorrow, especially if power is shifting between them — so fighting now can look rational if you expect to be weaker later. Third, issue indivisibility: some things (like who controls a single holy site) are hard to split in a way that lets both sides claim victory.",
    "Robert Powell's \"War as a Commitment Problem\" develops the second explanation further, arguing it's the deepest and most persistent driver of conflict between rational actors. This is a genuinely technical, game-theoretic week — good preparation for thinking rigorously about war and peace on your midterm, which covers everything from Week 1 through this bargaining model.",
  ],
  8: [
    "Mary Kaldor's influential \"new wars\" thesis argued that after the Cold War, a genuinely new type of conflict emerged — identity-based rather than ideological, fought by loosely organized armed groups rather than disciplined armies, funded through looting and diaspora money rather than state budgets, and marked by deliberate violence against civilians as a strategy rather than a side effect.",
    "Stathis Kalyvas's \"'New' and 'Old' Civil Wars: A Valid Distinction?\" (2001) pushes back hard, arguing that most of what gets labeled \"new\" about contemporary civil wars — criminality, ethnic mobilization, civilian targeting — shows up plenty in older conflicts too, once you look closely. The distinction, he argues, often says more about how Western observers chose to interpret the Cold War (as fundamentally ideological) than about what actually changed in how wars are fought.",
    "A separate but related debate asks what drives civil wars to begin with: Collier and Hoeffler's \"greed vs. grievance\" research asks whether civil wars are better explained by economic opportunity (something to loot, a way to finance a rebellion) or genuine political and ethnic grievances. Your presentation this week asks you to actually test the Kalyvas framework yourself, by comparing a war usually filed under \"old\" against one usually filed under \"new\" — and seeing how well the distinction really holds up.",
  ],
  9: [
    "For most of the twentieth century, a state's sovereignty was treated as close to absolute: what a government did to its own population inside its own borders was, formally, nobody else's business. The 1990s broke that assumption. Rwanda in 1994 (roughly 800,000 people killed in about 100 days while the international community largely stood by) and the Srebrenica massacre in Bosnia became the two cases the field keeps returning to as proof that pure non-interference has a horrifying cost.",
    "The Responsibility to Protect (R2P), adopted unanimously at the 2005 UN World Summit, tried to resolve the tension. It rests on three pillars: a state has the primary responsibility to protect its own population from genocide, war crimes, ethnic cleansing, and crimes against humanity; the international community should assist states in meeting that responsibility; and if a state manifestly fails to protect its population, the international community has a responsibility to respond — with force, if the UN Security Council authorizes it, as a last resort.",
    "In practice, R2P has been applied wildly inconsistently. Libya in 2011 is the most-cited case of R2P being invoked to authorize military intervention — and also the most-cited cautionary tale, since NATO's campaign to protect civilians widened, in the eyes of critics, into a campaign for regime change. Syria shows the other failure mode: R2P was invoked rhetorically for years while Russia and China's Security Council vetoes blocked any authorized action. Your case presentation this week asks you to dig into one specific intervention (or non-intervention) and weigh how R2P's principles actually played out against how they're written on paper.",
  ],
  10: [
    "Terrorism is often described in the media as senseless or irrational violence. Andrew Kydd and Barbara Walter's \"The Strategies of Terrorism\" (2006) argues the opposite: terrorism is usually a calculated strategy, chosen precisely because the group using it is too weak to achieve its goals through conventional military force or ordinary politics.",
    "Kydd and Walter identify five distinct strategies terrorist groups pursue, often in combination: attrition (raising the costs of occupation or policy until the target gives up), intimidation (demonstrating the group can punish those who don't comply), provocation (goading a government into an overreaction that radicalizes the population), spoiling (sabotaging peace processes that moderates on their own side might otherwise accept), and outbidding (competing with rival groups for the loyalty of the same constituency by appearing more committed).",
    "Robert Pape's \"The Strategic Logic of Suicide Terrorism\" extends this logic to the most extreme tactic in the terrorist toolkit, arguing — controversially — that suicide attacks are overwhelmingly aimed at coercing a foreign power to withdraw military forces from territory the attackers consider their homeland, rather than being driven primarily by religious ideology. Understanding terrorism as strategic, not senseless, changes what counter-terrorism has to actually do: military force can defeat the attrition strategy but can also feed the provocation strategy, which is exactly why counter-terrorism is so much harder than simply defeating an army.",
  ],
  11: [
    "Is cyber conflict a genuinely new domain of warfare, or is it just old forms of espionage, sabotage, and subversion wearing a new digital costume? Thomas Rid's provocatively titled \"Cyber War Will Not Take Place\" argues the latter: by the classical (Clausewitzian) definition of war — violent, instrumental, and political — almost every cyber incident on record fails to qualify as \"war\" at all, and calling it that overstates the threat while understating what these operations actually are.",
    "Stuxnet, widely attributed to a joint U.S.-Israeli operation, is the case that changed the conversation: malicious code that physically destroyed nuclear centrifuges in Iran without a single weapon being fired, discovered in 2010. It proved that a cyberattack could cause real physical damage to critical infrastructure — not just steal data or take down a website — which is exactly the kind of case that makes Rid's dismissive framing harder to accept for many scholars.",
    "Michael Horowitz's reading extends the conversation to artificial intelligence, arguing that AI is becoming a new axis of great-power competition in its own right — shaping military balances of power the way nuclear weapons once did, through autonomous systems, algorithmic decision-making, and an accelerating race to weaponize machine learning before rivals do. Your case presentation this week is your chance to dig into one real cyberattack and decide for yourself whether it looks more like war, crime, sabotage, or something the field still doesn't have quite the right word for.",
  ],
  12: [
    "In 1994, the UNDP's Human Development Report introduced a concept that would eventually reshape how much of the field thinks about security: instead of asking how to keep states safe, ask how to keep people safe. The report organized human security around two broad freedoms — freedom from fear (violence, conflict, persecution) and freedom from want (poverty, hunger, disease) — and identified seven overlapping categories: economic, food, health, environmental, personal, community, and political security.",
    "Health security became impossible to treat as a side issue after COVID-19, but the argument predates the pandemic by two decades. Jeremy Youde's \"Enter the Fourth Horseman\" traces how disease outbreaks — HIV/AIDS especially — got reframed from a purely medical problem into a security threat capable of destabilizing governments, militaries, and economies, and therefore something that belonged on the same agenda as war and terrorism.",
    "Climate security is the newest and most contested addition. Halvard Buhaug's \"Climate-Conflict Research\" reading takes a deliberately skeptical, methodologically careful look at claims that climate change directly causes violent conflict — the evidence, he argues, is far messier and more conditional than the confident headlines suggest. This week closes the course by asking the same question it opened with, one more time: once you expand \"security\" to cover pandemics, poverty, and climate change, where — if anywhere — should the definition stop?",
  ],
};

/**
 * Optional video per week: a real, verified YouTube video. Weeks 1, 2, and 7
 * have no video — no strong topical match was found rather than forcing one.
 */
const VIDEOS2 = {
  3: { id: "Hl43BizGd5c", title: "Realism vs. Liberalism: Global Politics Theories Compared", channel: null },
  4: { id: "BK9l_HGuC8Y", title: "Destined for War: Can America and China Escape Thucydides's Trap?", channel: "Carnegie Council on Ethics in International Affairs" },
  5: { id: "5cTL-q0agpQ", title: "The Security Dilemma and Arms Races", channel: null },
  6: { id: "JGc3v56_ZZY", title: "What is NATO?", channel: "CNBC" },
  8: { id: "940mFsJPKkE", title: "The (Changing?) Logic of Civil Wars", channel: "Prof. Stathis Kalyvas — Civil Wars in History" },
  9: { id: "kAdSotl2OhA", title: "Jennifer Welsh on the Responsibility to Protect — 20th Anniversary of the Rwandan Genocide", channel: null },
  10: { id: "ELq9g0PRtFg", title: "Why Terrorism Works — 7 Minute Summary", channel: null },
  11: { id: "mYsvFWURXmY", title: "Stuxnet: The Cyber Weapon That Sabotaged Iran's Nuclear Program", channel: null },
  12: { id: "OxHH_WiFxzA", title: "An Introduction to Human Security", channel: null },
};

/**
 * Optional "further listening" pointer to a real, established security
 * podcast's show page (not a single episode — those change too fast to
 * verify reliably). Only added where it's a genuinely good topical fit.
 */
const PODCASTS2 = {
  4: { name: "War on the Rocks", url: "https://warontherocks.com" },
  6: { name: "War on the Rocks", url: "https://warontherocks.com" },
  10: { name: "Lawfare Podcast", url: "https://www.lawfaremedia.org/podcasts-multimedia/podcast/the-lawfare-podcast" },
  11: { name: "Lawfare Podcast", url: "https://www.lawfaremedia.org/podcasts-multimedia/podcast/the-lawfare-podcast" },
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
