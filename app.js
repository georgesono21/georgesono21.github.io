import { layoutWithLines, prepareWithSegments } from "./vendor/pretext/layout.js";

const storyCards = [
  {
    title: "I value stable systems",
    tag: "Platform",
    copy:
      "The best platform work reduces surprises. I care about clean rollouts, clear failure modes, and systems teams can trust."
  },
  {
    title: "Infrastructure needs judgment",
    tag: "Product",
    copy:
      "Even backend systems need good product judgment. Tooling, defaults, and clarity affect how fast teams can work."
  },
  {
    title: "AI should be useful",
    tag: "Learning",
    copy:
      "I focus on AI that helps people learn or work faster, not AI that adds complexity without value."
  }
];

const matrixGlyphs = "01<>[]{}()/\\\\|=+-*^~abcdefghijklmnopqrstuvwxyz".split("");

const experiences = [
  {
    id: "nutanix-mts",
    company: "Nutanix",
    companyUrl: "https://www.nutanix.com/",
    title: "Member of Technical Staff 1",
    team: "AHV Control Plane / VM Management",
    dates: "Nov 2025 - Present",
    location: "San Jose, California",
    summary:
      "I am a member of the AHV Control Plane / VM Management team at Nutanix, focused on predictable system behavior and operator trust.",
    bullets: [
      "Build on reliability-sensitive control-plane paths where correctness and recovery directly affect operators.",
      "Work on distributed-systems problems where debugging quality matters as much as delivery speed.",
      "Improve trust in the platform through safer defaults, clearer tooling, and more understandable failure behavior."
    ],
    stack: ["Go", "Distributed Systems", "Reliability", "Control Plane"],
    logo: "assets/nutanix.svg"
  },
  {
    id: "visa",
    company: "Visa",
    companyUrl: "https://www.visa.com/",
    title: "Software Engineer",
    team: "Payment Products Development",
    dates: "Jun 2025 - Nov 2025",
    location: "Foster City, California",
    summary:
      "At Visa I worked on authorization infrastructure with high scale, strict uptime targets, and low tolerance for operational risk.",
    bullets: [
      "Worked on the VIP team supporting authorization services handling more than 50,000 transactions per second and more than 150 billion annually.",
      "Built an automation agent to identify and retire more than 100 dormant feature toggles, reducing configuration drift and cleanup work.",
      "Contributed to Real-Time Attack Mitigation with C++ and z/TPF Assembly safeguards for fraud defense.",
      "Supported incident response and on-call operations for the Visa Authorizations Platform under 99.999% uptime expectations."
    ],
    stack: ["C++", "z/TPF Assembly", "Feature Flags", "Incident Response"],
    logo: "assets/visa.svg"
  },
  {
    id: "tech4good",
    company: "Tech4Good Lab @ UCSC",
    title: "Full Stack Developer",
    team: "Causeway and Compass",
    dates: "Jul 2024 - Jun 2025",
    location: "Santa Cruz, California",
    summary:
      "At Tech4Good I worked on production product features, including onboarding flows, learner-facing experiences, and test coverage.",
    bullets: [
      "Built onboarding flows for Compass by translating Figma designs into Angular components and responsive UI.",
      "Extended Causeway's learning platform for more than 100 active learners with Firebase-backed real-time behavior.",
      "Added UI and unit tests across routes, containers, and forms with Angular Testing Library and Jest-DOM."
    ],
    stack: ["Angular", "Firebase", "Jest-DOM", "Responsive UI"],
    mark: "T4G"
  },
  {
    id: "nutanix-capstone",
    company: "Nutanix",
    companyUrl: "https://www.nutanix.com/",
    title: "Software Engineering Capstone",
    team: "Data Platform and ETL",
    dates: "Sep 2024 - Dec 2024",
    location: "San Jose, California",
    summary:
      "This capstone focused on ETL, infrastructure data, and turning messy operational data into usable analytics.",
    bullets: [
      "Built a Kubernetes-based ETL pipeline ingesting more than 20GB of logs per day with Filebeat, Logstash, and OpenSearch.",
      "Built a second ETL workflow in MageAI to normalize more than 100 hardware JSON files into PostgreSQL.",
      "Optimized psycopg2 queries to reshape more than 200,000 rows into device-level analytics.",
      "Joined log and hardware datasets in Dremio to improve observability."
    ],
    stack: ["Kubernetes", "OpenSearch", "PostgreSQL", "MageAI"],
    logo: "assets/nutanix.svg"
  },
  {
    id: "footsee",
    company: "Footsee",
    title: "Software Engineering Intern",
    team: "Mobile and Backend",
    dates: "Jun 2023 - Sep 2023",
    location: "Merced, California",
    summary:
      "At Footsee I worked across iOS product features and backend APIs for core user-facing flows.",
    bullets: [
      "Built profile browsing and editing flows in Swift with Firebase Firestore.",
      "Built reusable lookup-table utilities with Swift generics to speed up reads for posts, users, and chats.",
      "Built REST APIs with Firebase Functions and Node.js for app-to-backend communication."
    ],
    stack: ["Swift", "Firebase", "Node.js", "REST APIs"],
    mark: "FS"
  }
];

const projects = [
  {
    id: "stimstudy",
    name: "StimStudy",
    type: "AI Study Platform",
    date: "April 2025",
    award: "2025 CruzHacks Education Hacks Winner",
    summary:
      "An AI study tool that turns difficult topics into short lessons with generated slides and audio.",
    details: [
      "Built lesson generation flows with slides, narration, and short-form study content.",
      "Focused on a structured product experience instead of a generic chatbot interface.",
      "Won the 2025 CruzHacks Education Hacks track."
    ],
    stack: ["HTML/CSS", "React", "Google Gemini", "Voice AI"],
    links: [
      { label: "Frontend", url: "https://github.com/hgupta1703/stimstudy_frontend" },
      { label: "Backend", url: "https://github.com/georgesono21/stimstudy_backend" },
      { label: "Devpost", url: "https://devpost.com/software/stimstudy?_gl=1*xhg7gl*_gcl_au*MTUyOTcxNzg3Mi4xNzY3NjgxODI3*_ga*MjExNDQyNzI1My4xNzY3NjgxODI3*_ga_0YHJK3Y10M*czE3Njc2ODE4MjckbzEkZzAkdDE3Njc2ODE4MjckajYwJGwwJGgw" }
    ]
  },
  {
    id: "pdfpal",
    name: "PDFPal",
    type: "PDF Chatbot",
    date: "October 2023",
    summary:
      "A PDF assistant that supports document upload, indexing, retrieval, and question answering.",
    details: [
      "Handled document ingestion, embeddings, storage, and retrieval end to end.",
      "Connected the retrieval pipeline to a React chat interface.",
      "Focused on building a complete working pipeline rather than a demo-only concept."
    ],
    stack: ["JavaScript", "Python", "Flask", "React", "LangChain"],
    links: [{ label: "GitHub", url: "https://github.com/georgesono21/PDFPal" }]
  },
  {
    id: "cratetime",
    name: "CrateTime",
    type: "Pet Care Platform",
    date: "June 2024",
    summary:
      "A pet care platform with profiles, scheduling, file storage, and core application workflows.",
    details: [
      "Built around a practical consumer use case with multiple connected product flows.",
      "Implemented storage, user content, and supporting application logic.",
      "Focused on keeping a broader product surface area coherent."
    ],
    stack: ["Next.js", "React", "MongoDB", "AWS S3"],
    links: [{ label: "GitHub", url: "https://github.com/georgesono21/CrateTime" }]
  },
  {
    id: "taskmanager",
    name: "TaskManager",
    type: "Productivity App",
    date: "May 2024",
    summary:
      "A task management app focused on making workload and ownership easier to understand.",
    details: [
      "Used graph-based views to make team workload and ownership easier to read.",
      "Built with a lightweight stack to move quickly while keeping the app maintainable.",
      "Focused on turning collaboration data into something more readable."
    ],
    stack: ["Py4Web", "Vue.js", "Python", "Data Visualization"],
    links: [{ label: "GitHub", url: "https://github.com/georgesono21/taskmanager" }]
  },
  {
    id: "pacman",
    name: "AI Pacman Agents",
    type: "AI Search and Games",
    date: "2023",
    summary:
      "A search and game AI project built in the Berkeley Pacman framework.",
    details: [
      "Implemented minimax, expectimax, and related search strategies in the Berkeley Pacman framework.",
      "Practiced heuristics, evaluation functions, and performance tradeoffs.",
      "Used visual feedback to compare algorithm behavior quickly."
    ],
    stack: ["Python", "AI", "Adversarial Search", "Heuristics"],
    links: [{ label: "GitHub", url: "https://github.com/georgesono21/ai-pacman" }]
  }
];

const skillGroups = [
  {
    title: "Languages",
    items: ["Python", "Go", "TypeScript / JavaScript", "C / C++", "Bash", "Swift"]
  },
  {
    title: "Backend and Data",
    items: ["Node.js", "Express", "Flask", "gRPC", "PostgreSQL", "MySQL", "MongoDB", "Firebase", "OpenSearch"]
  },
  {
    title: "Frontend and Product",
    items: ["React", "Next.js", "Angular", "Vue.js", "Responsive Design", "Testing UI Flows"]
  },
  {
    title: "Cloud and Ops",
    items: ["Kubernetes", "Docker", "AWS", "Google Cloud", "Linux", "Dremio", "Filebeat / Logstash"]
  }
];

const interests = [
  {
    title: "Snowboarding",
    copy: "I spend a lot of winter weekends in Tahoe. It is a reliable reset outside work."
  },
  {
    title: "Weightlifting",
    copy: "Weightlifting keeps me consistent. I like work that rewards steady progress over time."
  },
  {
    title: "Cooking",
    copy: "Cooking gives me a practical outlet that still leaves room for creativity."
  },
  {
    title: "Creative Build Nights",
    copy: "I like short side projects that combine tools, storytelling, and fast execution."
  }
];

const header = document.querySelector(".site-header");
const menuToggle = document.querySelector(".menu-toggle");
const siteNav = document.getElementById("site-nav");
const year = document.getElementById("year");
const matrixField = document.getElementById("matrix-field");
const siteFooter = document.querySelector(".site-footer");
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

const experienceList = document.getElementById("experience-list");
const experiencePanel = document.getElementById("experience-panel");
const experienceMobile = document.getElementById("experience-mobile");
const projectGrid = document.getElementById("project-grid");
const projectFocus = document.getElementById("project-focus");
const projectMobile = document.getElementById("project-mobile");
const skillGroupsRoot = document.getElementById("skill-groups");
const interestGrid = document.getElementById("interest-grid");
const storyGrid = document.getElementById("story-grid");

let activeExperienceId = experiences[0].id;
let activeProjectId = projects[0].id;
let storyPretextEntries = [];
const matrixState = {
  rows: [],
  charWidth: 0,
  lineHeight: 0,
  width: 0,
  height: 0,
  prepared: null,
  preparedFont: "",
  sourceLength: 0,
  glyphPrepared: null,
  glyphPreparedFont: "",
  pointerActive: false,
  pointerClientX: -10000,
  pointerClientY: -10000,
  pointerX: -10000,
  pointerY: -10000,
  radius: 96,
  frame: 0,
  resizeTimer: 0
};

year.textContent = String(new Date().getFullYear());

function companyMarkHtml(item) {
  if (item.logo) {
    const logoClass = item.id === "visa" ? " company-mark--visa" : "";
    if (item.companyUrl) {
      return `<a class="company-mark company-mark--link${logoClass}" href="${item.companyUrl}" target="_blank" rel="noreferrer" aria-label="${item.company}"><img src="${item.logo}" alt="${item.company}"></a>`;
    }

    return `<div class="company-mark${logoClass}"><img src="${item.logo}" alt="${item.company}"></div>`;
  }

  return `<div class="company-mark"><span>${item.mark}</span></div>`;
}

function companyNameHtml(item) {
  if (!item.companyUrl) return item.company;
  return `<a class="company-link" href="${item.companyUrl}" target="_blank" rel="noreferrer">${item.company}</a>`;
}

function experienceContentHtml(item) {
  return `
    <div class="experience-panel__header">
      <div class="experience-panel__identity">
        ${companyMarkHtml(item)}
        <div>
          <p class="eyebrow eyebrow-tight">${companyNameHtml(item)}</p>
          <h3>${item.title}</h3>
          <p class="role-line">${item.team}</p>
        </div>
      </div>
      <div class="panel-meta">
        <div>${item.dates}</div>
        <div>${item.location}</div>
      </div>
    </div>
    <p class="panel-summary">${item.summary}</p>
    <ul class="panel-list">
      ${item.bullets.map((bullet) => `<li>${bullet}</li>`).join("")}
    </ul>
    <div class="stack-row">
      ${item.stack.map((tech) => `<span class="stack-pill">${tech}</span>`).join("")}
    </div>
  `;
}

function projectContentHtml(project, options = {}) {
  const { showAwardPill = true } = options;

  return `
    <div class="project-focus__header">
      <div class="project-focus__identity">
        <div class="company-mark"><span>${project.name.slice(0, 2).toUpperCase()}</span></div>
        <div>
          <p class="eyebrow eyebrow-tight">${project.type}</p>
          <h3>${project.name}</h3>
          <p class="role-line">${project.date}</p>
        </div>
      </div>
      ${showAwardPill && project.award ? `<span class="pill">${project.award}</span>` : ""}
    </div>
    <p class="project-focus__summary">${project.summary}</p>
    <ul class="panel-list">
      ${project.details.map((detail) => `<li>${detail}</li>`).join("")}
    </ul>
    <div class="pill-row">
      ${project.stack.map((tech) => `<span class="pill">${tech}</span>`).join("")}
    </div>
    <div class="project-links">
      ${project.links
        .map(
          (link) =>
            `<a class="project-link" href="${link.url}" target="_blank" rel="noreferrer">${link.label}</a>`
        )
        .join("")}
    </div>
  `;
}

function renderStoryGrid() {
  storyGrid.innerHTML = storyCards
    .map(
      (card, index) => `
        <article class="story-card card reveal" data-story-index="${index}">
          <div class="story-meta">
            <span class="story-tag">${card.tag}</span>
          </div>
          <h3>${card.title}</h3>
          <p class="story-copy" data-story-copy>${card.copy}</p>
        </article>
      `
    )
    .join("");
}

function renderExperienceList() {
  experienceList.innerHTML = experiences
    .map(
      (item, index) => `
        <button
          class="experience-trigger ${item.id === activeExperienceId ? "is-active" : ""}"
          type="button"
          role="tab"
          id="tab-${item.id}"
          aria-controls="panel-${item.id}"
          aria-selected="${String(item.id === activeExperienceId)}"
          tabindex="${item.id === activeExperienceId ? "0" : "-1"}"
          data-experience-id="${item.id}"
        >
          <p class="trigger-eyebrow">${item.dates}</p>
          <strong>${item.company}</strong>
          <span>${item.title}</span>
        </button>
      `
    )
    .join("");

  experienceList.querySelectorAll("[data-experience-id]").forEach((button) => {
    button.addEventListener("click", () => {
      activeExperienceId = button.dataset.experienceId;
      syncExperienceUI();
    });

    button.addEventListener("keydown", (event) => {
      const triggers = [...experienceList.querySelectorAll("[data-experience-id]")];
      const currentIndex = triggers.indexOf(button);
      if (event.key !== "ArrowDown" && event.key !== "ArrowUp") return;
      event.preventDefault();
      const nextIndex =
        event.key === "ArrowDown"
          ? (currentIndex + 1) % triggers.length
          : (currentIndex - 1 + triggers.length) % triggers.length;
      activeExperienceId = triggers[nextIndex].dataset.experienceId;
      syncExperienceUI();
      triggers[nextIndex].focus();
    });
  });
}

function renderExperiencePanel() {
  const item = experiences.find((entry) => entry.id === activeExperienceId) ?? experiences[0];
  experiencePanel.id = `panel-${item.id}`;
  experiencePanel.setAttribute("role", "tabpanel");
  experiencePanel.setAttribute("aria-labelledby", `tab-${item.id}`);
  experiencePanel.innerHTML = experienceContentHtml(item);
}

function renderExperienceMobile() {
  experienceMobile.innerHTML = experiences
    .map(
      (item) => `
        <details class="mobile-card card">
          <summary class="mobile-card__summary">
            <strong>${item.company}</strong>
            <span>${item.title}</span>
            <p class="trigger-eyebrow">${item.dates}</p>
            <p class="mobile-card__meta">${item.location}</p>
          </summary>
          <div class="mobile-card__body">
            ${experienceContentHtml(item)}
          </div>
        </details>
      `
    )
    .join("");
}

function syncExperienceUI() {
  renderExperienceList();
  renderExperiencePanel();
  renderExperienceMobile();
}

function renderProjectGrid() {
  projectGrid.innerHTML = projects
    .map(
      (project) => `
        <button
          class="project-select ${project.id === activeProjectId ? "is-active" : ""}"
          type="button"
          data-project-id="${project.id}"
        >
          <p class="trigger-eyebrow">${project.type} · ${project.date}</p>
          <strong>${project.name}</strong>
          <span>${project.summary}</span>
          ${project.award ? `<div class="project-award">${project.award}</div>` : ""}
        </button>
      `
    )
    .join("");

  projectGrid.querySelectorAll("[data-project-id]").forEach((button) => {
    button.addEventListener("click", () => {
      activeProjectId = button.dataset.projectId;
      syncProjectUI();
    });
  });
}

function renderProjectFocus() {
  const project = projects.find((entry) => entry.id === activeProjectId) ?? projects[0];
  projectFocus.innerHTML = projectContentHtml(project);
}

function renderProjectMobile() {
  projectMobile.innerHTML = projects
    .map(
      (project) => `
        <details class="mobile-card card">
          <summary class="mobile-card__summary">
            <strong>${project.name}</strong>
            <span>${project.type}</span>
            <p class="trigger-eyebrow">${project.date}</p>
            ${project.award ? `<div class="project-award">${project.award}</div>` : ""}
          </summary>
          <div class="mobile-card__body">
            ${projectContentHtml(project, { showAwardPill: false })}
          </div>
        </details>
      `
    )
    .join("");
}

function syncProjectUI() {
  renderProjectGrid();
  renderProjectFocus();
  renderProjectMobile();
}

function renderSkillGroups() {
  skillGroupsRoot.innerHTML = skillGroups
    .map(
      (group) => `
        <article class="skill-card card reveal">
          <h3>${group.title}</h3>
          <ul>
            ${group.items.map((item) => `<li>${item}</li>`).join("")}
          </ul>
        </article>
      `
    )
    .join("");
}

function renderInterests() {
  interestGrid.innerHTML = interests
    .map(
      (interest) => `
        <article class="interest-card card reveal">
          <h3>${interest.title}</h3>
          <p>${interest.copy}</p>
        </article>
      `
    )
    .join("");
}

function buildMatrixTextSource(length, seedOffset = 1) {
  let seed = seedOffset * 214013;
  let output = "";

  for (let count = 0; count < length; count += 1) {
    seed = (seed * 48271 + 1) % 2147483647;
    output += matrixGlyphs[seed % matrixGlyphs.length];
  }

  return output;
}

function renderMatrixRow(entry, leftText, rightText, gapWidth) {
  entry.left.textContent = leftText || " ";
  entry.right.textContent = rightText;
  entry.row.style.setProperty("--gap-width", `${gapWidth}px`);
}

function getMatrixContentHeight() {
  const footerBottom = siteFooter
    ? siteFooter.getBoundingClientRect().bottom + window.scrollY
    : document.body.getBoundingClientRect().bottom + window.scrollY;

  return Math.max(window.innerHeight, Math.ceil(footerBottom));
}

function ensureMatrixPrepared(length, font) {
  if (!matrixState.prepared || matrixState.preparedFont !== font || matrixState.sourceLength < length) {
    const nextLength = Math.max(length, matrixState.sourceLength * 2 || length);
    const source = buildMatrixTextSource(nextLength, 1);
    matrixState.prepared = prepareWithSegments(source, font);
    matrixState.preparedFont = font;
    matrixState.sourceLength = nextLength;
  }

  return matrixState.prepared;
}

function ensureMatrixGlyphPrepared(font) {
  if (!matrixState.glyphPrepared || matrixState.glyphPreparedFont !== font) {
    matrixState.glyphPrepared = prepareWithSegments("0", font);
    matrixState.glyphPreparedFont = font;
  }

  return matrixState.glyphPrepared;
}

function buildMatrixField() {
  if (!matrixField) return;

  const width = matrixField.clientWidth;
  const height = getMatrixContentHeight();
  if (!width || !height) return;

  const widthDelta = Math.abs(matrixState.width - width);
  const heightDelta = Math.abs(matrixState.height - height);
  if (matrixState.rows.length > 0 && widthDelta < 1 && heightDelta < 1) return;

  const style = window.getComputedStyle(matrixField);
  const font = `${style.fontWeight} ${style.fontSize} ${style.fontFamily}`;
  const lineHeight = Number.parseFloat(style.lineHeight) || Number.parseFloat(style.fontSize) * 1.12;
  const charMeasure = layoutWithLines(ensureMatrixGlyphPrepared(font), width, lineHeight);
  const charWidth = charMeasure.lines[0]?.width || Number.parseFloat(style.fontSize) * 0.62;
  const lineCountTarget = Math.ceil(height / lineHeight) + 4;
  const charsPerLineTarget = Math.ceil(width / charWidth) + 12;
  const requiredLength = lineCountTarget * charsPerLineTarget;
  const prepared = ensureMatrixPrepared(requiredLength, font);
  let layoutResult = layoutWithLines(prepared, width, lineHeight);
  const fragment = document.createDocumentFragment();

  matrixState.rows = layoutResult.lines.slice(0, lineCountTarget).map((line, index) => {
    const row = document.createElement("div");
    const left = document.createElement("span");
    const right = document.createElement("span");
    const opacity = 0.11 + (index % 6) * 0.02;

    row.className = "matrix-row";
    row.style.setProperty("--line-opacity", `${Math.min(opacity, 0.22)}`);
    left.className = "matrix-segment";
    right.className = "matrix-segment";
    row.append(left, right);
    fragment.append(row);

    const entry = { row, left, right, text: line.text || " " };
    renderMatrixRow(entry, entry.text, "", 0);
    return entry;
  });

  matrixState.charWidth = charWidth;
  matrixState.lineHeight = lineHeight;
  matrixState.width = width;
  matrixState.height = height;
  matrixState.radius = window.innerWidth <= 640 ? 72 : 96;
  matrixField.style.height = `${height}px`;
  matrixField.style.setProperty("--matrix-line-height-px", `${lineHeight}px`);
  matrixField.replaceChildren(fragment);
  updateMatrixWrap();
}

function updateMatrixWrap() {
  matrixState.frame = 0;

  if (matrixState.rows.length === 0) return;

  const { rows, pointerX, pointerY, radius, lineHeight, charWidth, width } = matrixState;

  rows.forEach((entry, index) => {
    const centerY = index * lineHeight + lineHeight * 0.5;
    const dy = Math.abs(pointerY - centerY);

    if (dy >= radius || pointerX < 0 || pointerX > width) {
      renderMatrixRow(entry, entry.text, "", 0);
      return;
    }

    const gapHalfWidth = Math.sqrt(radius * radius - dy * dy);
    const gapStart = Math.max(0, pointerX - gapHalfWidth);
    const gapEnd = Math.min(width, pointerX + gapHalfWidth);
    const leftCount = Math.max(0, Math.min(entry.text.length, Math.floor(gapStart / charWidth)));
    const rightStart = Math.max(leftCount, Math.min(entry.text.length, Math.ceil(gapEnd / charWidth)));
    const snappedGap = Math.max(0, (rightStart - leftCount) * charWidth);

    renderMatrixRow(
      entry,
      entry.text.slice(0, leftCount),
      entry.text.slice(rightStart),
      snappedGap
    );
  });
}

function queueMatrixWrap(clientX, clientY) {
  matrixState.pointerX = clientX;
  matrixState.pointerY = clientY;

  if (matrixState.frame) return;
  matrixState.frame = window.requestAnimationFrame(updateMatrixWrap);
}

function initNav() {
  menuToggle?.addEventListener("click", () => {
    const isOpen = header.classList.toggle("is-open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });

  siteNav?.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      header.classList.remove("is-open");
      menuToggle?.setAttribute("aria-expanded", "false");
    });
  });

  const sections = [...document.querySelectorAll("main section[id]")];
  const navLinks = [...siteNav.querySelectorAll("a")];
  const observer = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

      if (!visible) return;
      navLinks.forEach((link) => {
        const isMatch = link.getAttribute("href") === `#${visible.target.id}`;
        link.classList.toggle("is-active", isMatch);
      });
    },
    { threshold: [0.2, 0.5, 0.75], rootMargin: "-20% 0px -55% 0px" }
  );

  sections.forEach((section) => observer.observe(section));
}

function initRevealObserver() {
  const revealItems = [...document.querySelectorAll(".reveal")];
  if (reducedMotion.matches) {
    revealItems.forEach((item) => item.classList.add("is-visible"));
    return;
  }

  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      });
    },
    { threshold: 0.16, rootMargin: "0px 0px -8% 0px" }
  );

  revealItems.forEach((item) => revealObserver.observe(item));
}

function initPointerGlow() {
  const syncPointerGlow = (clientX, clientY) => {
    const x = (clientX / window.innerWidth) * 100;
    const y = (clientY / window.innerHeight) * 100;

    matrixState.pointerActive = true;
    matrixState.pointerClientX = clientX;
    matrixState.pointerClientY = clientY;
    document.documentElement.style.setProperty("--pointer-x", `${x}%`);
    document.documentElement.style.setProperty("--pointer-y", `${y}%`);
    document.documentElement.style.setProperty("--pointer-x-px", `${clientX}px`);
    document.documentElement.style.setProperty("--pointer-y-px", `${clientY}px`);
    queueMatrixWrap(clientX, clientY + window.scrollY);
  };

  const clearPointerGlow = () => {
    matrixState.pointerActive = false;
    matrixState.pointerClientX = -10000;
    matrixState.pointerClientY = -10000;
    document.documentElement.style.setProperty("--pointer-x-px", "-20rem");
    document.documentElement.style.setProperty("--pointer-y-px", "-20rem");
    queueMatrixWrap(-10000, -10000);
  };

  window.addEventListener(
    "pointermove",
    (event) => {
      if (event.pointerType !== "mouse") return;
      syncPointerGlow(event.clientX, event.clientY);
    },
    { passive: true }
  );

  document.documentElement.addEventListener(
    "mouseleave",
    clearPointerGlow,
    { passive: true }
  );

  window.addEventListener(
    "scroll",
    () => {
      if (!matrixState.pointerActive) return;
      queueMatrixWrap(matrixState.pointerClientX, matrixState.pointerClientY + window.scrollY);
    },
    { passive: true }
  );
}

function buildStoryMeasurements() {
  const cards = [...storyGrid.querySelectorAll(".story-card")];
  storyPretextEntries = cards.map((card) => {
    const copyEl = card.querySelector("[data-story-copy]");
    const style = window.getComputedStyle(copyEl);
    const font = `${style.fontWeight} ${style.fontSize} ${style.fontFamily}`;

    return {
      card,
      copyEl,
      handle: prepareWithSegments(copyEl.textContent.trim(), font)
    };
  });

  measureStoryCards();
}

function measureStoryCards() {
  storyPretextEntries.forEach((entry) => {
    const style = window.getComputedStyle(entry.copyEl);
    const width = entry.copyEl.clientWidth;
    const lineHeight = Number.parseFloat(style.lineHeight) || Number.parseFloat(style.fontSize) * 1.65;
    const result = layoutWithLines(entry.handle, width, lineHeight);
    const density = result.lineCount >= 6 ? "dense" : "open";
    entry.card.dataset.density = density;
    entry.copyEl.style.minHeight = `${Math.ceil(result.height)}px`;
  });
}

function initStoryMeasurements() {
  const readyFonts = document.fonts?.ready ?? Promise.resolve();

  readyFonts
    .then(() => {
      buildStoryMeasurements();
      let frame = 0;
      window.addEventListener(
        "resize",
        () => {
          cancelAnimationFrame(frame);
          frame = window.requestAnimationFrame(measureStoryCards);
        },
        { passive: true }
      );
    })
    .catch(() => {});
}

function initMatrixField() {
  if (!matrixField) return;

  const readyFonts = document.fonts?.ready ?? Promise.resolve();
  const queueMatrixBuild = () => {
    window.clearTimeout(matrixState.resizeTimer);
    matrixState.resizeTimer = window.setTimeout(() => {
      buildMatrixField();
    }, 140);
  };

  readyFonts
    .then(() => {
      buildMatrixField();
      window.addEventListener(
        "resize",
        queueMatrixBuild,
        { passive: true }
      );
      window.addEventListener(
        "load",
        () => {
          buildMatrixField();
        },
        { passive: true, once: true }
      );
    })
    .catch(() => {
      buildMatrixField();
    });
}

function init() {
  initMatrixField();
  renderStoryGrid();
  syncExperienceUI();
  syncProjectUI();
  renderSkillGroups();
  renderInterests();
  initNav();
  initRevealObserver();
  initPointerGlow();
  initStoryMeasurements();
}

init();
