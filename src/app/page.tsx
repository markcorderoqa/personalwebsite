import { PhotoGallery } from "@/components/PhotoGallery";
import { FadeInSection } from "@/components/FadeInSection";
import { SiteHeader } from "@/components/SiteHeader";

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
  return (
    <main className="page-shell">
      <SiteHeader links={navLinks} />

      <FadeInSection
        id="about"
        className="section relative pb-8 pt-2 md:pb-12 md:pt-0"
        introOnMount
      >
        <div
          className="hero-grid-bg pointer-events-none absolute inset-0 -z-10 opacity-70"
          aria-hidden
        />

        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-14">
          <div className="text-center lg:text-left">
            <p className="mb-2 text-sm font-semibold text-brand-300">
              Hello, I&apos;m
            </p>
            <h1 className="mb-3 text-[clamp(2rem,5vw,3.25rem)] font-bold leading-[1.08] tracking-tight text-slate-50">
              Mark Joseph Cordero
            </h1>
            <p className="mx-auto mb-5 max-w-xl bg-gradient-to-r from-slate-100 via-brand-200 to-sky-300 bg-clip-text text-2xl font-semibold tracking-tight text-transparent md:text-3xl lg:mx-0">
              QA Engineer / Test Analyst
            </p>
            <p className="mx-auto mb-3 max-w-xl text-sm leading-relaxed text-slate-300 md:text-base lg:mx-0">
              Results-driven{" "}
              <span className="font-semibold text-brand-300">QA Engineer</span>{" "}
              with a passion for building confidence in software quality. I
              enjoy designing test strategies, uncovering edge cases, and
              partnering with teams to deliver reliable, user-centered products.
            </p>
            <p className="mx-auto mb-6 max-w-xl text-sm leading-relaxed text-slate-400 md:text-sm lg:mx-0">
              My focus is on clear communication, thoughtful test coverage, and
              making sure we understand both the{" "}
              <span className="font-medium text-slate-200">business goals</span>{" "}
              and the{" "}
              <span className="font-medium text-slate-200">
                real user experience
              </span>{" "}
              behind every feature.
            </p>

            <div className="mb-6 flex flex-wrap justify-center gap-2 lg:justify-start">
              <span className="badge border-brand-500/40 bg-brand-500/10 text-brand-100">
                Playwright
              </span>
              <span className="badge">Web, API &amp; Mobile Testing</span>
              <span className="badge">Agile / Scrum</span>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3 lg:justify-start">
              <div className="flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1.5 text-xs text-emerald-200">
                <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
                Open to QA / Test Engineer roles
              </div>
              <a
                href="/api/resume"
                className="inline-flex items-center justify-center rounded-full border border-slate-600 bg-slate-900/60 px-4 py-2 text-xs font-semibold text-slate-200 transition hover:border-brand-400/60 hover:text-brand-200"
              >
                Download resume
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-brand-500 to-sky-500 px-5 py-2 text-xs font-semibold text-white shadow-[0_12px_32px_rgba(54,86,245,0.35)] transition hover:brightness-110"
              >
                Get in touch
              </a>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-sm lg:mx-0 lg:max-w-none">
            <div
              className="pointer-events-none absolute -inset-6 -z-10 rounded-[2rem] bg-[radial-gradient(circle_at_30%_20%,rgba(94,123,255,0.35),transparent_55%),radial-gradient(circle_at_80%_60%,rgba(56,189,248,0.2),transparent_50%)] blur-2xl"
              aria-hidden
            />
            <div className="hero-profile">
              <img
                src="/profile.jpg"
                alt="Mark Joseph Cordero"
                className="hero-profile-image mt-3"
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
      </FadeInSection>

      <FadeInSection id="skills" className="section">
        <div className="rounded-3xl border border-slate-800/60 bg-slate-900/25 p-6 md:p-10">
          <p className="section-heading">Skills</p>
          <h2 className="section-title">How I approach quality</h2>
          <p className="section-lead mb-10">
            I combine structured test design with curiosity and a strong focus
            on communication. Here are the areas where I bring the most value as
            a software tester.
          </p>

          <div className="grid gap-5 md:grid-cols-3">
            <div className="card p-6 transition hover:border-brand-500/25">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-brand-500/15 text-lg">
                🧪
              </div>
              <h3 className="mb-3 text-sm font-semibold text-slate-50">
                Core QA skills
              </h3>
              <ul className="space-y-2 text-xs leading-relaxed text-slate-300">
                {skills.core.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-[5px] h-1.5 w-1.5 shrink-0 rounded-full bg-brand-400" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="card p-6 transition hover:border-sky-500/25">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-sky-500/15 text-lg">
                🛠️
              </div>
              <h3 className="mb-3 text-sm font-semibold text-slate-50">
                Tools &amp; technologies
              </h3>
              <ul className="space-y-2 text-xs leading-relaxed text-slate-300">
                {skills.tools.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-[5px] h-1.5 w-1.5 shrink-0 rounded-full bg-sky-400" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="card p-6 transition hover:border-fuchsia-500/20">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-fuchsia-500/10 text-lg">
                🤝
              </div>
              <h3 className="mb-3 text-sm font-semibold text-slate-50">
                Ways of working
              </h3>
              <ul className="space-y-2 text-xs leading-relaxed text-slate-300">
                {skills.practices.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-[5px] h-1.5 w-1.5 shrink-0 rounded-full bg-fuchsia-400" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </FadeInSection>

      <FadeInSection id="certifications" className="section">
        <p className="section-heading">Certifications</p>
        <h2 className="section-title">Certifications &amp; training</h2>
        <p className="section-lead mb-6">
          Formal training that underpins my hands-on testing experience.
        </p>

        <div className="card p-6 md:p-8">
          <ul className="divide-y divide-slate-800/80">
            {certifications.map((cert) => (
              <li key={cert.name} className="py-4 first:pt-0 last:pb-0">
                <p className="font-semibold text-slate-50">{cert.name}</p>
                <p className="mt-1 text-xs text-slate-500">
                  {cert.issuer} • {cert.year}
                </p>
                <p className="mt-2 text-xs leading-relaxed text-slate-400">
                  {cert.notes}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </FadeInSection>

      <FadeInSection id="experience" className="section">
        <p className="section-heading">Experience</p>
        <h2 className="section-title">Where I&apos;ve added value</h2>

        <div className="relative mt-2 space-y-8 before:hidden before:absolute before:left-4 before:top-2 before:h-[calc(100%-1rem)] before:w-px before:bg-gradient-to-b before:from-brand-500/50 before:via-slate-800 before:to-slate-800 md:before:block md:before:left-1/2 md:before:-translate-x-px">
          {experiences.map((exp, index) => (
            <article
              key={exp.role + exp.company}
              className={`relative grid gap-6 md:grid-cols-2 md:items-start md:gap-10 ${
                index % 2 === 0 ? "" : "md:[&>*:first-child]:order-2"
              }`}
            >
              <div className="flex items-center justify-center gap-3 pl-0 md:mb-0 md:justify-end md:pl-0">
                <div className="inline-flex max-w-md flex-col rounded-2xl border border-slate-800 bg-slate-900/70 px-4 py-3 text-xs text-slate-200 shadow-soft">
                  <span className="text-sm font-semibold text-slate-50">
                    {exp.role}
                  </span>
                  <span className="text-slate-500">{exp.company}</span>
                  <span className="mt-1 text-[11px] font-medium text-brand-300/90">
                    {exp.period}
                  </span>
                </div>
              </div>

              <div className="card mx-auto w-full max-w-xl p-6 text-xs leading-relaxed text-slate-200 md:mx-0 md:max-w-none md:ml-0">
                <p className="mb-3 text-sm text-slate-400">{exp.summary}</p>
                <ul className="space-y-2 text-slate-300">
                  {exp.highlights.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-[6px] h-1.5 w-1.5 shrink-0 rounded-full bg-brand-400" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div
                className="timeline-node pointer-events-none absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 md:col-span-2 md:col-start-1 md:row-start-1"
                aria-hidden
              />
            </article>
          ))}
        </div>
      </FadeInSection>

      <FadeInSection id="projects" className="section">
        <p className="section-heading">Portfolio</p>
        <h2 className="section-title">Selected QA projects</h2>
        <p className="section-lead mb-10">
          A few examples of where I focused on building confidence in critical
          user journeys, payment flows, and complex business logic through
          structured software testing.
        </p>

        <div className="grid gap-6 md:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.name}
              className="card flex flex-col overflow-hidden pb-5 pt-0 transition hover:border-slate-700/90"
            >
              <div className="project-card-accent" />
              <div className="flex grow flex-col px-5 pb-1 pt-5">
                <h3 className="mb-1 text-sm font-semibold text-slate-50">
                  {project.url ? (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noreferrer"
                      className="text-brand-300 transition hover:text-brand-200"
                    >
                      {project.name}
                    </a>
                  ) : (
                    project.name
                  )}
                </h3>
                <p className="mb-2 text-[11px] font-semibold uppercase tracking-wide text-sky-300/90">
                  {project.role}
                </p>
                <p className="mb-3 text-xs leading-relaxed text-slate-400">
                  {project.description}
                </p>
                <ul className="mb-4 space-y-1.5 text-[11px] leading-relaxed text-slate-300">
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
                      className="rounded-full bg-slate-950/80 px-2 py-0.5 text-[10px] font-medium text-slate-300 ring-1 ring-slate-800/80"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </FadeInSection>

      <FadeInSection id="photography" className="section">
        <div className="rounded-3xl border border-slate-800/60 bg-slate-900/25 p-6 md:p-10">
          <p className="section-heading">Hobbies</p>
          <h2 className="section-title">Photography</h2>
          <p className="section-lead mb-8">
            Outside of testing, I love exploring the world through a camera. It
            teaches me to pay attention to{" "}
            <span className="font-medium text-slate-200">details</span>,{" "}
            <span className="font-medium text-slate-200">patterns</span>, and{" "}
            <span className="font-medium text-slate-200">composition</span> —
            the same skills that help me spot issues and edge cases in software.
          </p>

          <PhotoGallery photos={photos} />
        </div>
      </FadeInSection>

      <FadeInSection id="education" className="section">
        <p className="section-heading">Education</p>
        <h2 className="section-title">Background</h2>
        <div className="card mx-auto max-w-xl p-6 md:mx-0">
          <p className="font-semibold text-slate-50">
            Bachelor of Science in Information Technology
          </p>
          <p className="mt-1 text-sm text-slate-400">
            STI College Malolos, Bulacan, PH
          </p>
          <p className="mt-2 text-xs font-medium text-brand-300/90">
            Jun 2016 – Aug 2020
          </p>
        </div>
      </FadeInSection>

      <FadeInSection
        id="contact"
        className="section border-t border-slate-800/80 pb-6 pt-12"
      >
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] lg:gap-14">
          <div className="text-center md:text-left">
            <p className="section-heading">Contact</p>
            <h2 className="section-title">Let&apos;s talk</h2>
            <p className="section-lead mb-6">
              If you&apos;re looking for a QA Engineer, Test Engineer, or QA
              Analyst who cares deeply about user experience and reliable
              releases, I&apos;d love to connect.
            </p>
            <ul className="space-y-3 text-sm text-slate-200 md:text-left">
              <li>
                <span className="text-slate-500">Email </span>
                <a
                  href="mailto:markcorderoqa@gmail.com"
                  className="font-medium text-brand-300 transition hover:text-brand-200"
                >
                  markcorderoqa@gmail.com
                </a>
              </li>
              <li>
                <span className="text-slate-500">Phone </span>
                <a
                  href="tel:+61401157442"
                  className="font-medium text-brand-300 transition hover:text-brand-200"
                >
                  +61 401 157 442
                </a>
              </li>
              <li>
                <span className="text-slate-500">Location </span>
                <span className="text-slate-300">Melbourne, VIC, Australia</span>
              </li>
            </ul>
          </div>

          <div className="card mx-auto w-full max-w-md p-6 text-center md:mx-0 md:max-w-none md:text-left">
            <p className="mb-4 text-sm font-semibold text-slate-50">
              Links &amp; profiles
            </p>
            <ul className="space-y-3 text-sm text-slate-300 md:text-left">
              <li>
                <span className="text-slate-500">LinkedIn: </span>
                <a
                  href="https://www.linkedin.com/in/mrkjsphcrdro/"
                  target="_blank"
                  rel="noreferrer"
                  className="font-medium text-brand-300 transition hover:text-brand-200"
                >
                  /in/mrkjsphcrdro/
                </a>
              </li>
              <li>
                <span className="text-slate-500">GitHub: </span>
                <a
                  href="https://github.com/markcorderoqa"
                  target="_blank"
                  rel="noreferrer"
                  className="font-medium text-brand-300 transition hover:text-brand-200"
                >
                  markcorderoqa
                </a>
              </li>
              <li>
                <span className="text-slate-500">Instagram: </span>
                <a
                  href="https://www.instagram.com/mrkdbymrk"
                  target="_blank"
                  rel="noreferrer"
                  className="font-medium text-brand-300 transition hover:text-brand-200"
                >
                  /ig/mrkdbymrk
                </a>
              </li>
            </ul>
          </div>
        </div>

        <footer className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-slate-800/80 pt-8 text-center text-[11px] text-slate-500 sm:flex-row sm:items-center sm:text-left">
          <span>
            © {new Date().getFullYear()} Mark Cordero. All rights reserved.
          </span>
          <span>Built with Next.js, TypeScript &amp; Tailwind CSS.</span>
        </footer>
      </FadeInSection>
    </main>
  );
}
