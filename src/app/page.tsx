const skills = {
  core: [
    "Test Planning & Strategy",
    "Test Case Design",
    "Exploratory Testing",
    "Regression Testing",
    "Defect Management",
    "Risk-based Testing"
  ],
  tools: [
    "Jira / AWS / Azure DevOps",
    "Zephyr",
    "Postman / REST API Testing",
    "Playwright",
    "Cypress",
    "Git / GitHub / GitLab",
    "Appium",
    "Burp Suite"
  ],
  practices: [
    "Agile / Scrum",
    "CI/CD Awareness",
    "Requirements Analysis",
    "Root Cause Analysis",
    "Cross-browser Testing",
    "Mobile / Responsive Testing"
  ]
};

const certifications = [
  {
    name: "ISTQB Certified Tester – Foundation Level (CTFL)",
    issuer: "ISTQB / ASTQB",
    year: "2025",
    notes:
      "Covers fundamental testing principles, test design techniques, test management, and tool support."
  },
  {
    name: "ISTQB Certified Tester – Agile Tester (CT-Agile)",
    issuer: "ISTQB / ASTQB",
    year: "2025",
    notes:
      "Testing in Agile contexts: Agile principles, test approaches, and collaboration within Agile teams."
  },
  {
    name: "Tricentis Tosca – Automation Specialist Level 1 (AS1)",
    issuer: "Tricentis",
    year: "2026",
    notes:
      "Core Tosca automation: test case design, execution, and essential product features for model-based test automation."
  },
  {
    name: "LambdaTest Playwright 101",
    issuer: "TestMu AI formerly LambdaTest",
    year: "2024",
    notes:
      "Playwright automation fundamentals and best practices for cross-browser testing."
  },
  {
    name: "Appium Mobile Automation – Android & iOS + CI/CD",
    issuer: "Udemy",
    year: "2024",
    notes:
      "Mobile test automation with Appium and CI/CD integration."
  },
  {
    name: "Cypress UI & API Automation",
    issuer: "Udemy",
    year: "2021",
    notes:
      "Cypress for UI and API test automation."
  }
];

const experiences = [
  {
    role: "Automation Test Analyst",
    company: "Freight Cyber Pty. Ltd.",
    period: "Feb 2025 – Apr 2025",
    summary:
      "Implemented automation solutions using Playwright, improving test coverage and reducing manual effort. Southbank, Melbourne, VIC, AU.",
    highlights: [
      "Built and executed automated UI and API test suites to accelerate regression testing.",
      "Designed CI/CD pipelines with GitHub Actions for daily automated test runs.",
      "Performed manual functional testing for the web and mobile application.",
      "Created test cases, managed defects, and collaborated with developers for issue resolution.",
      "Conducted Playwright training to upskill QA team members."
    ]
  },
  {
    role: "Agile Test Engineer",
    company: "TwistResources, Inc.",
    period: "Oct 2021 – Oct 2024",
    summary:
      "Served as sub-test lead, coordinating test activities for multiple QA team members. Pampanga, PH.",
    highlights: [
      "Collaborated closely with cross-functional teams and Product Owners to maintain release quality.",
      "Participated in Agile Scrum ceremonies and refinement sessions.",
      "Performed API testing, security testing using Burp Suite, performance testing, and functional testing.",
      "Automated test scripts using Cypress and Playwright.",
      "Identified requirement gaps and proposed improvements during refinement sessions."
    ]
  },
  {
    role: "Quality Assurance Analyst",
    company: "Habitap Pte. Ltd.",
    period: "Mar 2021 – Sep 2021",
    summary:
      "Created and maintained automated web and mobile test scripts. Ortigas Center, Pasig City, PH.",
    highlights: [
      "Created and maintained automated web and mobile test scripts using TestProject.",
      "Executed manual and automated regression testing.",
      "Coordinated with offshore developers to ensure smooth release cycles.",
      "Authored detailed test cases and scenarios."
    ]
  },
  {
    role: "Quality Assurance Analyst",
    company: "GoDigital Corporation",
    period: "Jan 2020 – Dec 2020",
    summary:
      "Developed test plans and maintained test cases for functional and regression testing. Quezon City, PH.",
    highlights: [
      "Developed test plans, functional, regression, and end-to-end test cases.",
      "Provided daily testing reports and maintained test cases.",
      "Logged defects in Jira and worked with Test Leads to maintain test environments."
    ]
  }
];

const projects = [
  {
    name: "Easy Employer",
    role: "Agile Test Engineer",
    url: "https://easyemployer.com.au/",
    description:
      "Cloud-based workforce management platform for staff, rostering, time & attendance, and payroll across aged care, retail, hospitality, and more.",
    focus: [
      "Staff Management: user management, onboarding flows, and role-based permissions.",
      "Rostering: shift creation, assignments, conflict detection, and roster publishing.",
      "Time & Attendance: clock-in/out, break tracking, and timesheet capture.",
      "Timesheet Management: submission workflows, approval flows, and edits.",
      "Award Interpretation: award rate application, wage forecasting, and compliance checks.",
      "Payroll: tested and validated payroll calculation scenarios against Fair Work requirements.",
      "Regression testing between releases to ensure stability and consistency."
    ],
    stack: ["Web", "Cypress", "Playwright", "Jira", "REST APIs"]
  },
  {
    name: "Freight Cyber",
    role: "Automation Test Analyst",
    url: "https://freightcyber.com/",
    description:
      "Freight and logistics management platform with FCX (CRM, asset management, operations), FCX Drive (driver app), and ITAP for transport and supply chain.",
    focus: [
      "Led test automation using Playwright for UI and API regression suites.",
      "Built CI/CD pipelines with GitHub Actions for daily automated test runs.",
      "Tested FCX mobile application covering driver workflows and compliance features.",
      "Mentored QA team members on Playwright and test automation best practices."
    ],
    stack: ["Web", "Mobile", "Playwright", "GitHub Actions", "Jira"]
  },
  {
    name: "Habitap",
    role: "Quality Assurance Analyst",
    url: "https://myhabitap.com/",
    description:
      "Smart living management platform combining smart controls, community management, and lifestyle offerings. Includes Habitap ONE, a cloud-driven access management solution.",
    focus: [
      "Tested mobile app integration with IoT devices for smart controls and access management.",
      "Validated Habitap ONE features: cloud-driven access, NFC/Bluetooth unlock, and gantry integration.",
      "Executed manual and automated regression testing for web and mobile.",
      "Created and maintained automated test scripts for web and mobile using TestProject."
    ],
    stack: ["Web", "Mobile", "IoT", "TestProject", "Jira"]
  }
];

const photos = [
  {
    src: "/photos/photo1.jpg",
    label: "Urban",
    accent: "City at day or night"
  },
  {
    src: "/photos/photo2.jpg",
    label: "Portrait",
    accent: "Candid moments"
  },
  {
    src: "/photos/photo3.jpg",
    label: "Nature",
    accent: "Landscape & details"
  },
  {
    src: "/photos/photo4.jpg",
    label: "Travel",
    accent: "Places & stories"
  },
  {
    src: "/photos/photo5.jpg",
    label: "Street",
    accent: "Everyday life"
  }
];

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#certifications", label: "Certifications" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#photography", label: "Photography" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" }
] as const;

export default function Home() {
  const heroStats = [
    { value: "5+", label: "Years in QA" },
    { value: String(certifications.length), label: "Certifications" },
    { value: String(projects.length), label: "QA engagements" }
  ];

  return (
    <main className="page-shell">
      <header className="page-shell-header">
        <a
          href="#about"
          className="group flex min-w-0 items-center gap-2.5 rounded-xl pr-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-700"
        >
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-tr from-brand-700 to-brand-600 text-xs font-bold tracking-tight text-white shadow-[0_8px_24px_rgba(157,91,58,0.38)]">
            QA
          </div>
          <div className="hidden min-w-0 flex-col sm:flex">
            <span className="truncate text-sm font-semibold text-stone-900">
              Mark Cordero
            </span>
            <span className="truncate text-[10px] font-medium text-stone-500">
              QA Engineer portfolio
            </span>
          </div>
        </a>

        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full px-2.5 py-1.5 text-xs text-stone-600 transition hover:bg-stone-200/85 hover:text-brand-900"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          <a
            href="#contact"
            className="hidden rounded-full bg-gradient-to-r from-brand-700 to-brand-600 px-4 py-2 text-xs font-semibold text-white shadow-[0_10px_30px_rgba(157,91,58,0.38)] transition hover:brightness-110 sm:inline-flex"
          >
            Let&apos;s talk
          </a>

          <details className="mobile-nav relative lg:hidden">
            <summary
              aria-label="Open navigation menu"
              className="flex h-10 w-10 cursor-pointer list-none items-center justify-center rounded-xl border border-stone-300 bg-[#f3f0ea]/95 text-stone-800 transition hover:border-stone-400 hover:bg-stone-200"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                aria-hidden
              >
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </summary>
            <div className="absolute right-0 top-full z-50 mt-2 w-[min(100vw-2rem,16rem)] rounded-2xl border border-stone-300/90 bg-[#faf8f4] p-2 shadow-[0_24px_45px_rgba(60,55,48,0.12)]">
              <nav className="flex flex-col gap-0.5">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="rounded-xl px-3 py-2.5 text-sm text-stone-700 transition hover:bg-stone-200 hover:text-brand-900"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>
          </details>
        </div>
      </header>

      <section id="about" className="section relative pb-8 pt-2 md:pb-12 md:pt-0">
        <div
          className="hero-grid-bg pointer-events-none absolute inset-0 -z-10 opacity-70"
          aria-hidden
        />

        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-14">
          <div>
            <p className="mb-2 text-sm font-semibold text-brand-800">
              Hello, I&apos;m
            </p>
            <h1 className="mb-3 text-[clamp(2rem,5vw,3.25rem)] font-bold leading-[1.08] tracking-tight text-stone-900">
              Mark Joseph Cordero
            </h1>
            <p className="mb-5 max-w-xl bg-gradient-to-r from-stone-900 via-stone-700 to-brand-700 bg-clip-text text-2xl font-semibold tracking-tight text-transparent md:text-3xl">
              QA Engineer / Test Analyst
            </p>
            <p className="mb-3 max-w-xl text-sm leading-relaxed text-stone-700 md:text-base">
              Results-driven{" "}
              <span className="font-semibold text-brand-800">QA Engineer</span>{" "}
              with a passion for building confidence in software quality. I
              enjoy designing test strategies, uncovering edge cases, and
              partnering with teams to deliver reliable, user-centered products.
            </p>
            <p className="mb-6 max-w-xl text-sm leading-relaxed text-stone-600 md:text-sm">
              My focus is on clear communication, thoughtful test coverage, and
              making sure we understand both the{" "}
              <span className="font-medium text-stone-800">business goals</span>{" "}
              and the{" "}
              <span className="font-medium text-stone-800">
                real user experience
              </span>{" "}
              behind every feature.
            </p>

            <div className="mb-6 flex flex-wrap gap-2">
              <span className="badge border-brand-700/30 bg-brand-600/12 text-brand-950">
                Playwright
              </span>
              <span className="badge">Web, API &amp; mobile testing</span>
              <span className="badge">Agile / Scrum</span>
            </div>

            <div className="mb-8 flex flex-wrap gap-3">
              {heroStats.map((s) => (
                <div key={s.label} className="stat-pill">
                  <span className="stat-pill-value">{s.value}</span>
                  <span className="stat-pill-label">{s.label}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <div className="flex items-center gap-2 rounded-full border border-emerald-700/25 bg-emerald-600/10 px-3 py-1.5 text-xs text-emerald-900">
                <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-600" />
                Open to QA / Test Engineer roles
              </div>
              <a
                href="/resume.pdf"
                download="Mark-Cordero-Resume.pdf"
                className="inline-flex items-center justify-center rounded-full border border-stone-400 bg-white/85 px-4 py-2 text-xs font-semibold text-stone-800 transition hover:border-brand-600/50 hover:text-brand-700"
              >
                Download resume
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-brand-700 to-brand-600 px-5 py-2 text-xs font-semibold text-white shadow-[0_12px_32px_rgba(157,91,58,0.38)] transition hover:brightness-110"
              >
                Get in touch
              </a>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-sm lg:mx-0 lg:max-w-none">
            <div
              className="pointer-events-none absolute -inset-6 -z-10 rounded-[2rem] bg-[radial-gradient(circle_at_30%_20%,rgba(120,113,108,0.14),transparent_55%),radial-gradient(circle_at_80%_60%,rgba(157,91,58,0.12),transparent_50%)] blur-2xl"
              aria-hidden
            />
            <div className="hero-profile">
              <img
                src="/profile.jpg"
                alt="Mark Joseph Cordero"
                className="hero-profile-image"
              />
              <div className="hero-profile-text">
                <p className="hero-profile-tag">Profile</p>
                <p className="hero-profile-title">Mark Joseph Cordero</p>
                <p className="hero-profile-subtitle">
                  Melbourne, VIC • 5+ years in QA • Automation &amp; Manual
                  Testing
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="section">
        <div className="rounded-3xl border border-stone-300/80 bg-[#f3f0ea]/65 p-6 md:p-10">
          <p className="section-heading">Skills</p>
          <h2 className="section-title">How I approach quality</h2>
          <p className="mb-10 max-w-2xl text-sm leading-relaxed text-stone-600">
            I combine structured test design with curiosity, shift-left testing
            (quality checks and collaboration earlier in the lifecycle), and a
            strong focus on communication. Here are the areas where I bring the
            most value as a software tester.
          </p>

          <div className="grid gap-5 md:grid-cols-3">
            <div className="card p-6 transition hover:border-brand-600/35">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-brand-500/15 text-lg">
                🧪
              </div>
              <h3 className="mb-3 text-sm font-semibold text-stone-900">
                Core QA skills
              </h3>
              <ul className="space-y-2 text-xs leading-relaxed text-stone-700">
                {skills.core.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-[5px] h-1.5 w-1.5 shrink-0 rounded-full bg-brand-400" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="card p-6 transition hover:border-stone-400/40">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-stone-400/18 text-lg">
                🛠️
              </div>
              <h3 className="mb-3 text-sm font-semibold text-stone-900">
                Tools &amp; technologies
              </h3>
              <ul className="space-y-2 text-xs leading-relaxed text-stone-700">
                {skills.tools.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-[5px] h-1.5 w-1.5 shrink-0 rounded-full bg-stone-500" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="card p-6 transition hover:border-stone-500/35">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-stone-500/14 text-lg">
                🤝
              </div>
              <h3 className="mb-3 text-sm font-semibold text-stone-900">
                Ways of working
              </h3>
              <ul className="space-y-2 text-xs leading-relaxed text-stone-700">
                {skills.practices.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-[5px] h-1.5 w-1.5 shrink-0 rounded-full bg-stone-500" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="certifications" className="section">
        <p className="section-heading">Certifications</p>
        <h2 className="section-title">Certifications &amp; training</h2>
        <p className="mb-6 max-w-2xl text-sm leading-relaxed text-stone-600">
          Formal training that underpins my hands-on testing experience.
        </p>

        <div className="card p-6 md:p-8">
          <ul className="divide-y divide-stone-300/80">
            {certifications.map((cert) => (
              <li key={cert.name} className="py-4 first:pt-0 last:pb-0">
                <p className="font-semibold text-stone-900">{cert.name}</p>
                <p className="mt-1 text-xs text-stone-500">
                  {cert.issuer} • {cert.year}
                </p>
                <p className="mt-2 text-xs leading-relaxed text-stone-600">
                  {cert.notes}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="experience" className="section">
        <p className="section-heading">Experience</p>
        <h2 className="section-title">Where I&apos;ve added value</h2>

        <div className="relative mt-2 space-y-8 before:absolute before:left-4 before:top-2 before:h-[calc(100%-1rem)] before:w-px before:bg-gradient-to-b before:from-brand-500/50 before:via-stone-300 before:to-stone-300 md:before:left-1/2 md:before:-translate-x-px">
          {experiences.map((exp, index) => (
            <article
              key={exp.role + exp.company}
              className={`relative grid gap-6 md:grid-cols-2 md:items-start md:gap-10 ${
                index % 2 === 0 ? "" : "md:[&>*:first-child]:order-2"
              }`}
            >
              <div className="relative flex items-center gap-3 pl-10 md:mb-0 md:justify-end md:pl-0">
                <div className="timeline-node absolute left-4 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 md:left-1/2" />
                <div className="inline-flex max-w-md flex-col rounded-2xl border border-stone-300 bg-white/92 px-4 py-3 text-xs text-stone-800 shadow-soft">
                  <span className="text-sm font-semibold text-stone-900">
                    {exp.role}
                  </span>
                  <span className="text-stone-500">{exp.company}</span>
                  <span className="mt-1 text-[11px] font-medium text-brand-800/90">
                    {exp.period}
                  </span>
                </div>
              </div>

              <div className="card p-6 text-xs leading-relaxed text-stone-800 md:ml-0">
                <p className="mb-3 text-sm text-stone-600">{exp.summary}</p>
                <ul className="space-y-2 text-stone-700">
                  {exp.highlights.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-[6px] h-1.5 w-1.5 shrink-0 rounded-full bg-brand-400" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="projects" className="section">
        <p className="section-heading">Portfolio</p>
        <h2 className="section-title">Selected QA projects</h2>
        <p className="mb-10 max-w-2xl text-sm leading-relaxed text-stone-600">
          A few examples of where I focused on building confidence in critical
          user journeys, payment flows, and complex business logic through
          structured software testing.
        </p>

        <div className="grid gap-6 md:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.name}
              className="card flex flex-col overflow-hidden pb-5 pt-0 transition hover:border-stone-400/95"
            >
              <div className="project-card-accent" />
              <div className="flex grow flex-col px-5 pb-1 pt-5">
                <h3 className="mb-1 text-sm font-semibold text-stone-900">
                  {project.url ? (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noreferrer"
                      className="text-brand-800 transition hover:text-brand-700"
                    >
                      {project.name}
                    </a>
                  ) : (
                    project.name
                  )}
                </h3>
                <p className="mb-2 text-[11px] font-semibold uppercase tracking-wide text-stone-600">
                  {project.role}
                </p>
                <p className="mb-3 text-xs leading-relaxed text-stone-600">
                  {project.description}
                </p>
                <ul className="mb-4 space-y-1.5 text-[11px] leading-relaxed text-stone-700">
                  {project.focus.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-[5px] h-1.5 w-1.5 shrink-0 rounded-full bg-brand-400" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-auto flex flex-wrap gap-1.5">
                  {project.stack.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-stone-200/90 px-2 py-0.5 text-[10px] font-medium text-stone-700 ring-1 ring-stone-300/90"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="photography" className="section">
        <div className="rounded-3xl border border-stone-300/80 bg-[#f3f0ea]/65 p-6 md:p-10">
          <p className="section-heading">Hobbies</p>
          <h2 className="section-title">Photography</h2>
          <p className="mb-8 max-w-2xl text-sm leading-relaxed text-stone-600">
            Outside of testing, I love exploring the world through a camera. It
            teaches me to pay attention to{" "}
            <span className="font-medium text-stone-800">details</span>,{" "}
            <span className="font-medium text-stone-800">patterns</span>, and{" "}
            <span className="font-medium text-stone-800">composition</span> —
            the same skills that help me spot issues and edge cases in software.
          </p>

          <div className="photo-grid">
            {photos.map((photo) => (
              <div key={photo.src} className="group photo-card">
                <img
                  src={photo.src}
                  alt={`${photo.label} photography`}
                />
                <div className="photo-card-caption">
                  <span className="photo-card-caption-title">{photo.label}</span>
                  <span className="photo-card-caption-subtitle">
                    {photo.accent}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="education" className="section">
        <p className="section-heading">Education</p>
        <h2 className="section-title">Background</h2>
        <div className="card max-w-xl p-6">
          <p className="font-semibold text-stone-900">
            Bachelor of Science in Information Technology
          </p>
          <p className="mt-1 text-sm text-stone-600">
            STI College Malolos, Bulacan, PH
          </p>
          <p className="mt-2 text-xs font-medium text-brand-800/90">
            Jun 2016 – Aug 2020
          </p>
        </div>
      </section>

      <section
        id="contact"
        className="section border-t border-stone-300/80 pb-6 pt-12"
      >
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] lg:gap-14">
          <div>
            <p className="section-heading">Contact</p>
            <h2 className="section-title">Let&apos;s talk</h2>
            <p className="mb-6 max-w-xl text-sm leading-relaxed text-stone-600">
              If you&apos;re looking for a QA Engineer, Test Engineer, or QA
              Analyst who cares deeply about user experience and reliable
              releases, I&apos;d love to connect.
            </p>
            <ul className="space-y-3 text-sm text-stone-800">
              <li>
                <span className="text-stone-500">Email </span>
                <a
                  href="mailto:markcorderoqa@gmail.com"
                  className="font-medium text-brand-800 transition hover:text-brand-700"
                >
                  markcorderoqa@gmail.com
                </a>
              </li>
              <li>
                <span className="text-stone-500">Phone </span>
                <a
                  href="tel:+61401157442"
                  className="font-medium text-brand-800 transition hover:text-brand-700"
                >
                  +61 401 157 442
                </a>
              </li>
              <li>
                <span className="text-stone-500">Location </span>
                <span className="text-stone-700">Melbourne, VIC, Australia</span>
              </li>
            </ul>
          </div>

          <div className="card p-6">
            <p className="mb-4 text-sm font-semibold text-stone-900">
              Links &amp; profiles
            </p>
            <ul className="space-y-3 text-sm text-stone-700">
              <li>
                <span className="text-stone-500">LinkedIn </span>
                <a
                  href="https://www.linkedin.com/in/mrkjsphcrdro/"
                  target="_blank"
                  rel="noreferrer"
                  className="font-medium text-brand-800 transition hover:text-brand-700"
                >
                  /in/mrkjsphcrdro/
                </a>
              </li>
              <li>
                <span className="text-stone-500">GitHub </span>
                <a
                  href="https://github.com/markcorderoqa"
                  target="_blank"
                  rel="noreferrer"
                  className="font-medium text-brand-800 transition hover:text-brand-700"
                >
                  markcorderoqa
                </a>
              </li>
              <li>
                <span className="text-stone-500">Instagram </span>
                <a
                  href="https://www.instagram.com/mrkdbymrk"
                  target="_blank"
                  rel="noreferrer"
                  className="font-medium text-brand-800 transition hover:text-brand-700"
                >
                  /ig/mrkdbymrk
                </a>
              </li>
            </ul>
          </div>
        </div>

        <footer className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-stone-300/80 pt-8 text-[11px] text-stone-500 sm:flex-row sm:items-center">
          <span>
            © {new Date().getFullYear()} Mark Cordero. All rights reserved.
          </span>
          <span>Built with Next.js, TypeScript &amp; Tailwind CSS.</span>
        </footer>
      </section>
    </main>
  );
}
