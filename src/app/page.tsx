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

export default function Home() {
  return (
    <main className="page-shell">
      {/* Header */}
      <header className="page-shell-header">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-gradient-to-tr from-brand-500 to-sky-400 text-sm font-semibold text-white shadow-soft">
            QA
          </div>
        </div>
        <nav className="hidden gap-6 text-xs font-medium text-slate-300 md:flex">
          <a href="#about" className="hover:text-brand-300">
            About
          </a>
          <a href="#skills" className="hover:text-brand-300">
            Skills
          </a>
          <a href="#certifications" className="hover:text-brand-300">
            Certifications
          </a>
          <a href="#experience" className="hover:text-brand-300">
            Experience
          </a>
          <a href="#projects" className="hover:text-brand-300">
            Projects
          </a>
          <a href="#photography" className="hover:text-brand-300">
            Photography
          </a>
          <a href="#education" className="hover:text-brand-300">
            Education
          </a>
          <a href="#contact" className="hover:text-brand-300">
            Contact
          </a>
        </nav>
      </header>

      {/* Hero */}
      <section id="about" className="section hero-layout">
        <div>
          <p className="section-heading">About</p>
          <h1 className="mb-4 text-3xl font-semibold tracking-tight text-slate-50 md:text-4xl lg:text-5xl">
            Mark Joseph Cordero
          </h1>
          <p className="mb-2 text-sm font-medium text-brand-300 md:text-base">
            QA Engineer / Test Analyst
          </p>
          <p className="mb-5 max-w-xl text-sm text-slate-300 md:text-base">
            Results-driven{" "}
            <span className="font-semibold text-brand-300">
              QA Engineer
            </span>{" "}
            with a passion for building confidence in software quality. I enjoy
            designing test strategies, uncovering edge cases, and partnering
            with teams to deliver reliable, user-centered products.
          </p>
          <p className="mb-6 max-w-xl text-sm text-slate-400 md:text-sm">
            My focus is on clear communication, thoughtful test coverage, and
            making sure we understand both the{" "}
            <span className="font-medium text-slate-200">business goals</span>{" "}
            and the{" "}
            <span className="font-medium text-slate-200">
              real user experience
            </span>{" "}
            behind every feature.
          </p>

          <div className="mb-6 flex flex-wrap items-center gap-3">
            <span className="badge border-brand-400/60 bg-brand-500/10 text-brand-100">
              Playwright
            </span>
            <span className="badge">Web, API & Mobile Testing</span>
            <span className="badge">Agile / Scrum</span>
          </div>

          <div className="flex flex-wrap gap-3 text-xs text-slate-300">
            <div className="flex items-center gap-2 rounded-full border border-slate-800 bg-slate-900/60 px-3 py-1">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              <span>Open to QA / Test Engineer roles</span>
            </div>
            <a
              href="/resume.pdf"
              download="Mark-Cordero-Resume.pdf"
              className="inline-flex items-center justify-center rounded-full border border-brand-400/60 px-4 py-1.5 text-xs font-medium text-brand-300 transition hover:border-brand-400 hover:bg-brand-500/10"
            >
              Download resume
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-brand-500 px-4 py-1.5 text-xs font-medium text-white shadow-soft transition hover:bg-brand-400"
            >
              Get in touch
            </a>
          </div>
        </div>

        <div className="hero-profile card">
          <img
            src="/profile.jpg"
            alt="Profile portrait placeholder"
            className="hero-profile-image"
          />
          <div className="hero-profile-text">
            <p className="hero-profile-tag">Profile</p>
            <p className="hero-profile-title">Mark Joseph Cordero</p>
            <p className="hero-profile-subtitle">
              Melbourne, VIC • 5+ years in QA • Automation & manual testing
            </p>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="section">
        <p className="section-heading">Skills</p>
        <h2 className="section-title">How I approach testing</h2>
        <p className="mb-8 max-w-2xl text-sm text-slate-300 md:text-sm">
          I combine structured test design with curiosity and a strong focus on
          communication. Here are the areas where I bring the most value.
        </p>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="card p-5">
            <h3 className="mb-3 text-sm font-semibold text-slate-50">
              Core QA skills
            </h3>
            <ul className="space-y-2 text-xs text-slate-300">
              {skills.core.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-[3px] h-1.5 w-1.5 rounded-full bg-brand-400" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="card p-5">
            <h3 className="mb-3 text-sm font-semibold text-slate-50">
              Tools & technologies
            </h3>
            <ul className="space-y-2 text-xs text-slate-300">
              {skills.tools.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-[3px] h-1.5 w-1.5 rounded-full bg-brand-400" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="card p-5">
            <h3 className="mb-3 text-sm font-semibold text-slate-50">
              Ways of working
            </h3>
            <ul className="space-y-2 text-xs text-slate-300">
              {skills.practices.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-[3px] h-1.5 w-1.5 rounded-full bg-brand-400" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section id="certifications" className="section">
        <p className="section-heading">Certifications</p>
        <h2 className="section-title">Certifications & training</h2>
        <p className="mb-4 max-w-2xl text-sm text-slate-300 md:text-sm">
          Formal training that underpins my hands-on testing experience.
        </p>

        <div className="card p-5">
          <ul className="space-y-3 text-sm text-slate-200">
            {certifications.map((cert) => (
              <li key={cert.name}>
                <p className="font-semibold text-slate-50">{cert.name}</p>
                <p className="text-xs text-slate-400">
                  {cert.issuer} • {cert.year}
                </p>
                <p className="mt-1 text-xs text-slate-300">{cert.notes}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="section">
        <p className="section-heading">Experience</p>
        <h2 className="section-title">Where I&apos;ve added value</h2>

        <div className="relative mt-4 space-y-6 before:absolute before:left-4 before:top-0 before:h-full before:w-px before:bg-slate-800 md:mt-6 md:space-y-8 md:before:left-1/2">
          {experiences.map((exp, index) => (
            <article
              key={exp.role + exp.company}
              className={`relative md:grid md:grid-cols-2 md:items-start md:gap-8 ${
                index % 2 === 0 ? "" : "md:[&>*:first-child]:order-2"
              }`}
            >
              <div className="relative mb-3 flex items-center gap-3 md:mb-0 md:justify-end">
                <div className="hidden h-3 w-3 -translate-x-1/2 rounded-full border border-brand-300 bg-slate-950 md:block" />
                <div className="inline-flex flex-col rounded-2xl border border-slate-800 bg-slate-900/70 px-4 py-3 text-xs text-slate-200">
                  <span className="font-semibold text-slate-50">
                    {exp.role}
                  </span>
                  <span className="text-slate-400">{exp.company}</span>
                  <span className="mt-1 text-[11px] text-slate-400">
                    {exp.period}
                  </span>
                </div>
              </div>

              <div className="card p-5 text-xs text-slate-200">
                <p className="mb-3 text-slate-300">{exp.summary}</p>
                <ul className="space-y-2 text-slate-300">
                  {exp.highlights.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-[5px] h-1.5 w-1.5 rounded-full bg-brand-400" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="section">
        <p className="section-heading">Projects</p>
        <h2 className="section-title">Selected QA projects</h2>
        <p className="mb-8 max-w-2xl text-sm text-slate-300 md:text-sm">
          A few examples of where I focused on building confidence in critical
          user journeys, payment flows, and complex business logic.
        </p>

        <div className="grid gap-6 md:grid-cols-3">
          {projects.map((project) => (
            <article key={project.name} className="card flex flex-col p-5">
              <h3 className="mb-1 text-sm font-semibold text-slate-50">
                {project.url ? (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noreferrer"
                    className="text-brand-300 hover:text-brand-200 transition"
                  >
                    {project.name}
                  </a>
                ) : (
                  project.name
                )}
              </h3>
              <p className="mb-2 text-[11px] font-medium text-brand-200">
                {project.role}
              </p>
              <p className="mb-3 text-xs text-slate-300">
                {project.description}
              </p>
              <ul className="mb-4 space-y-1.5 text-[11px] text-slate-300">
                {project.focus.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-[5px] h-1.5 w-1.5 rounded-full bg-brand-400" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-auto flex flex-wrap gap-1.5">
                {project.stack.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-slate-900/80 px-2 py-0.5 text-[10px] font-medium text-slate-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Photography */}
      <section id="photography" className="section">
        <p className="section-heading">Hobbies</p>
        <h2 className="section-title">Photography</h2>
        <p className="mb-6 max-w-2xl text-sm text-slate-300 md:text-sm">
          Outside of testing, I love exploring the world through a camera. It
          teaches me to pay attention to{" "}
          <span className="font-medium text-slate-100">details</span>,{" "}
          <span className="font-medium text-slate-100">patterns</span>, and{" "}
          <span className="font-medium text-slate-100">composition</span> — the
          same skills that help me spot issues and edge cases in software.
        </p>

        <div className="photo-grid">
          {photos.map((photo) => (
            <div key={photo.src} className="photo-card">
              <img
                src={photo.src}
                alt={`${photo.label} photography placeholder`}
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
      </section>

      {/* Education */}
      <section id="education" className="section">
        <p className="section-heading">Education</p>
        <h2 className="section-title">Background</h2>
        <div className="card p-5">
          <p className="font-semibold text-slate-50">Bachelor of Science in Information Technology</p>
          <p className="text-sm text-slate-300">STI College Malolos, Bulacan, PH</p>
          <p className="mt-1 text-xs text-slate-400">Jun 2016 – Aug 2020</p>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="section border-t border-slate-900/80 pt-10">
        <div className="grid gap-8 md:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)]">
          <div>
            <p className="section-heading">Contact</p>
            <h2 className="section-title">Let&apos;s talk</h2>
            <p className="mb-5 max-w-xl text-sm text-slate-300 md:text-sm">
              If you&apos;re looking for a QA Engineer, Test Engineer, or QA
              Analyst who cares deeply about user experience and reliable
              releases, I&apos;d love to connect.
            </p>
            <ul className="space-y-2 text-sm text-slate-200">
              <li>
                <span className="text-slate-400">Email: </span>
                <a
                  href="mailto:markcorderoqa@gmail.com"
                  className="text-brand-300 hover:text-brand-200"
                >
                  markcorderoqa@gmail.com
                </a>
              </li>
              <li>
                <span className="text-slate-400">Phone: </span>
                <a
                  href="tel:+61401157442"
                  className="text-brand-300 hover:text-brand-200"
                >
                  +61 401 157 442
                </a>
              </li>
              <li>
                <span className="text-slate-400">Location: </span>
                <span>Melbourne, VIC, Australia</span>
              </li>
            </ul>
          </div>

          <div className="card p-5 text-xs text-slate-200">
            <p className="mb-3 text-sm font-semibold text-slate-50">
              Links & profiles
            </p>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>
                <span className="text-slate-400">LinkedIn: </span>
                <a
                  href="https://www.linkedin.com/in/mrkjsphcrdro/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-brand-300 hover:text-brand-200"
                >
                  /in/mrkjsphcrdro/
                </a>
              </li>
              <li>
                <span className="text-slate-400">GitHub: </span>
                <a
                  href="https://github.com/markcorderoqa"
                  target="_blank"
                  rel="noreferrer"
                  className="text-brand-300 hover:text-brand-200"
                >
                  markcorderoqa
                </a>
              </li>
              <li>
                <span className="text-slate-400">Instagram: </span>
                <a
                  href="https://www.instagram.com/mrkdbymrk"
                  className="text-brand-300 hover:text-brand-200"
                >
                  /ig/mrkdbymrk
                </a>
              </li>
            </ul>
          </div>
        </div>

        <footer className="mt-10 flex items-center justify-between border-t border-slate-900/80 pt-6 text-[11px] text-slate-500">
          <span>
            © {new Date().getFullYear()} Mark Cordero. All rights reserved.
          </span>
          <span className="hidden md:inline">
            Built with Next.js, TypeScript & Tailwind CSS.
          </span>
        </footer>
      </section>
    </main>
  );
}

