import { useEffect,useState } from "react"

const NAV_ITEMS = [
  { id: 'about', label: 'About Me' },
  { id: 'education', label: 'Qualifications' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
]

const WORK_EXPERIENCE = [
    {
    period: 'Jan 2026 — Present',
    role: 'Steamoji Facilitator · Kirkland',
    link: 'https://www.steamoji.com/wa-kirkland',
    description:
      "Guide kids ages 5–13 through their first real hands-on experience with software like Python, Unity, Blender, and Onshape, providing 10+ hours of active education assistance each week.",
    skills: ['Python', 'Unity', 'Blender', 'Onshape', 'Mentorship'],
  },
]

const ACTIVITES = [
  {
    period: 'Jul 2026',
    role: 'Basics of ASICs · MIT Beaver Works Summer Institute',
    link: 'https://bwsi.mit.edu/bwsi-programs-2/basics-of-asics/',
    description:
      'Learned the PCB, FPGA, and ASIC design flows, building and simulating SystemVerilog modules in team-based labs. Developed a four-layer MNIST classifier into an ASIC over the course of five days for a capstone project.',
    skills: ['SystemVerilog', 'ASIC', 'FPGA', 'PCB Design'],
  },
  {
    period: '2024 — Present',
    role: 'Math Club Co-President · Juanita High School',
    link: '',
    description:
      'Help organize school participation in BMT and the AMC 10/12, and partnered with the National Honor Society to set up a volunteer math tutoring program. Run presentations on college-level math subjects to get more students interested in the field.',
    skills: ['Leadership', 'Tutoring'],
  },
  {
    period: 'Sep 2026 — Present',
    role: 'Member · National Honor Society',
    link: '',
    description:
      'Volunteer 30+ hours to the community and help tutor math alongside Math Club.',
    skills: ['Volunteering', 'Tutoring'],
  },
]

const EDUCATION = [
  {
    period: '2023 — 2027',
    role: 'High School Diploma · Juanita High School',
    link: '',
    description: '4.0 GPA, SAT 1560.',
    skills: [],
  },
  {
    period: '2023 — 2027',
    role: 'AICE Diploma · Juanita High School',
    link: '',
    description: 'On track for Merit Distinction.',
    skills: [],
  },
]

const AWARDS = [
  'AP Scholar with Distinction over 13 AP tests',
  'USACO Silver',
  'SACO 2026 2nd place',
  'WTSA Coding 2nd place',
  'WTSA Video Game Design Semifinals',
]

const PROJECTS = [
  {
    name: 'franklinvc.com',
    link: 'https://franklinvc.com/',
    description:
      'This very site — a personal website built from scratch with React, TypeScript, and TailwindCSS.',
    skills: ['React', 'TypeScript', 'TailwindCSS', 'Vite'],
  },
  {
    name: 'Tetris Tower',
    link: 'https://primqd.itch.io/tetris-tower',
    description:
      'Rougelike-tetris game built for Washington TSA, which qualified for Video Game Design semifinals. Built in Godot.',
    skills: ['Godot', 'Game Design', 'Source Control', 'Collaboration'],
  },
  {
    name: 'The Awperator',
    link: 'https://play.unity.com/api/v1/games/game/974f96db-7cac-40e1-bdab-fc4ad5b2095a/build/latest/frame',
    description: 'Experimental game built for the WANIC Game Design Summer Course at Digipen.',
    skills: ['Unity', 'Source Control']
  },
  {
    name: 'Advent of Code',
    link: 'https://github.com/Primqd/advent-of-code',
    description:
      'A full month of Advent of Code solutions written in Python.',
    skills: ['Python', 'Algorithms', 'Data Structures'],
  },
]

const SOCIALS = [
  {
    label: 'GitHub',
    href: 'https://github.com/Primqd',
    icon: (
      // github logo as svg
      <svg viewBox="0 0 16 16" fill="currentColor" className="h-6 w-6" aria-hidden="true">
        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
      </svg>
    ),
  },
  {
    label: 'Email',
    href: 'mailto:frankvc@mit.edu',
    icon: (
      // email logo as svg
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6" aria-hidden="true">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m22 7-10 5L2 7" />
      </svg>
    ),
  },
]

function SkillPill({ skill }: { skill: string }) {
  return (
    <li className="mr-1 mt-2">
      <span className="inline-block rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
        {skill}
      </span>
    </li>
  )
}

function BoldLink(text : string, link : string) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      className="text-dark-text-highlight font-semibold hover:text-accent transition-colors" // light link
    >
      {text}
    </a>
  )
}

// tailwind styles
const header_style = "mb-6 text-xl font-semibold uppercase tracking-widest text-dark-text-highlight";

export function Home() {
  const [activeSection, setActiveSection] = useState('about');

  // throw new Error('test');

  useEffect(() => { // scroll-spy: highlight the nav item whose section is in view
    const sections = NAV_ITEMS
      .map(({ id }) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      // callback executed every time element exits or enters the screen: https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: '-30% 0px -60% 0px' } // ??? doesn't seem to work. TODO: figure out how this option works
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-dark-primary text-dark-text-default min-h-screen">
      <div className="mx-auto max-w-6xl px-6 md:px-12 lg:px-16 lg:flex lg:gap-16">
        {/* Left column: sticky header */}
        <header className="lg:sticky lg:top-0 lg:h-screen lg:w-1/2 flex flex-col justify-between py-16 lg:py-24">
          <div>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-dark-text-highlight">
              Franklin Chen
            </h1>
            <h2 className="mt-3 text-lg sm:text-xl text-dark-text-highlight">
              Student Programmer and Future Engineer
            </h2>
            <nav className="hidden lg:block mt-16" aria-label="In-page navigation">
              <ul className="space-y-4">
                {NAV_ITEMS.map(({ id, label }) => {
                  const active = activeSection === id;
                  return (
                    <li key={id}>
                      <a
                        href={`#${id}`}
                        onClick={scrollToSection(id)}
                        className="group flex items-center"
                      >
                        <span
                          className={`mr-4 h-px transition-all ${ // transition-all specifies default lerp function between rule states
                            active
                              ? 'w-16 bg-accent'
                              : 'w-8 bg-dark-border-bright group-hover:w-8 group-hover:bg-accent' // hover color is average between dark and highlight
                          }`}
                        />
                        <span
                          className={`text-lg tracking-widest transition-colors font-light ${
                            active
                              ? 'text-dark-text-highlight'
                              : 'text-dark-text-dark group-hover:text-dark-text-average '
                          }`}
                        >
                          {label}
                        </span>
                      </a>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>

          <div className="mt-10 lg:mt-0">
            <ul className="flex items-center gap-5">
              {SOCIALS.map(({ label, href, icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noreferrer" // hide tracking data from browser
                    aria-label={label}
                    className="text-dark-text-dark hover:text-dark-text-highlight transition-colors"
                  >
                    {icon}
                  </a>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-xs text-dark-text-dark">
              Design inspired by{' '}
              <a
                href="https://brittanychiang.com"
                target="_blank"
                rel="noreferrer"
                className="text-dark-text-dark underline underline-offset-2 hover:text-accent transition-colors" // dark link
              >
                Brittany Chiang
              </a>
              .
            </p>
          </div>
        </header>

        {/* Right column: scrollable content */}
        <main className="lg:w-1/2 pb-16 lg:py-24 space-y-20 lg:space-y-28">

          <section id="about" aria-label="About me">
            <h3 className={header_style}>
              About Me
            </h3>
            <div className="space-y-4 leading-relaxed">
              <p>
                Hey there! I'm Franklin, a rising senior in the Juanita High School Cambridge Program with a focus on software and hardware development.
                I like trying new things, whether that's new software, cutting-edge AI models, or a new cooking recipe.
              </p>
              <p>
                Currently, I'm a STEAM Facilitator at {BoldLink("Steamoji Kirkland", "https://www.steamoji.com/wa-kirkland")}, where I help kids get their first real hands-on experience with tools like Python, Unity, Blender, and Onshape.
                I enjoy guiding students through projects where they build something themselves, and I hope they walk away a little more confident in their problem-solving abilities.
              </p>
              <p> {/*FUUCk i have to do codeforces :( */}
                Outside of work and school, 
                I spend a lot of time improving myself through {BoldLink("competitive programming", "https://codeforces.com/profile/Primqd")}, {BoldLink("studying advanced topics", "https://github.com/Primqd/franklin-latex-notes")}, and new opportunities.
                This past summer I dug into chip design through {BoldLink("MIT's Beaver Works Summer Institute", "https://bwsi.mit.edu/bwsi-programs-2/basics-of-asics/")}, learning the KiCad for PCB design and the ASIC design flow through (System)Verilog,
                culminating in a {BoldLink("four-layer MNIST classifier in a chip", "https://github.com/Kaursome10/bASICS-Capstone-NN")}.
              </p>

              <p>
                In my spare time, you can usually find me catching fish, taking photos, or trying out a new hobby. I also like playing video games, most notaby Geometry Dash, Minecraft, and Slay the Spire 2.
              </p>
            </div>
          </section>

          <section id="education" aria-label="Education and awards">
            <h3 className={header_style}>
              Education
            </h3>
            <ol className="group/list pt-4">
              {EDUCATION.map(({ period, role, description, skills, link }) => (
                <li key={role} className="group relative rounded-lg transition-all lg:p-4 lg:-mx-4 lg:-mt-4 mb-8 lg:hover:bg-dark-secondary/40 lg:group-hover/list:opacity-50 lg:hover:!opacity-100">
                  {((child) => (link.length === 0 ? <>{child}</> : <a href={link} target="_blank" rel="noreferrer">{child}</a>))( // link wrapper
                    <div className="sm:grid sm:grid-cols-8 sm:gap-6">
                      <p className="sm:col-span-2 mb-2 sm:mb-0 text-xs font-semibold uppercase tracking-wide text-dark-text-dark sm:pt-1">
                        {period}
                      </p>
                      <div className="sm:col-span-6">
                        <h4 className={`font-normal leading-snug text-dark-text-highlight ${link.length !== 0 ? 'group-hover:text-accent transition-colors flex items-center gap-2' : ''}`}>
                          {role} {link.length !== 0 ?
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-3 w-3 shrink-0" aria-hidden="true">
                            <line x1="0" y1="24" x2="24" y2="0" strokeWidth="3"/> {/* base */}
                            {/* tip, to account for rendering fuckery stroke width = base strokeWidth * sqrt(2) */}
                            <line x1="6" y1="0" x2="24" y2="0" strokeWidth="4.24" />
                            <line x1="24" y1="18" x2="24" y2="0"strokeWidth="4.24"/>
                          </svg> : <svg className="hidden"></svg>}
                        </h4>
                        <p className="mt-2 text-sm leading-normal">
                          {description}
                        </p>
                        <ul className="flex flex-wrap" aria-label="Skills used">
                          {skills.map((skill) => <SkillPill key={skill} skill={skill} />)}
                        </ul>
                      </div>
                    </div>
                  )}
                </li>
              ))}
            </ol>
            <h3 className={header_style}>
              Awards
            </h3>
            <ul className="pt-2 space-y-2">
              {AWARDS.map((award) => (
                <li key={award} className="flex items-start gap-3 text-sm">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                  <span className="font-normal text-dark-text-highlight">{award}</span>
                </li>
              ))}
            </ul>
          </section>

          <section id="experience" aria-label="Work experience and activities">
            <h3 className={header_style}>
              Work Experience
            </h3>
            <ol className="group/list pt-4">
              {WORK_EXPERIENCE.map(({ period, role, description, skills, link }) => (
                <li key={role} className="group relative rounded-lg transition-all lg:p-4 lg:-mx-4 lg:-mt-4 mb-8 lg:hover:bg-dark-secondary/40 lg:group-hover/list:opacity-50 lg:hover:!opacity-100">
                  {((child) => (link.length === 0 ? <>{child}</> : <a href={link} target="_blank" rel="noreferrer">{child}</a>))( // link wrapper
                    <div className="sm:grid sm:grid-cols-8 sm:gap-6">
                      <p className="sm:col-span-2 mb-2 sm:mb-0 text-xs font-semibold uppercase tracking-wide text-dark-text-dark sm:pt-1">
                        {period}
                      </p>
                      <div className="sm:col-span-6">
                        <h4 className={`font-medium leading-snug text-dark-text-highlight ${link.length !== 0 ? 'group-hover:text-accent transition-colors flex items-center gap-2' : ''}`}>
                          {role} {link.length !== 0 ?
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-3 w-3 shrink-0" aria-hidden="true">
                            <line x1="0" y1="24" x2="24" y2="0" strokeWidth="3"/> {/* base */}
                            {/* tip, to account for rendering fuckery stroke width = base strokeWidth * sqrt(2) */}
                            <line x1="6" y1="0" x2="24" y2="0" strokeWidth="4.24" />
                            <line x1="24" y1="18" x2="24" y2="0"strokeWidth="4.24"/>
                          </svg> : <svg className="hidden"></svg>}
                        </h4>
                        <p className="mt-2 text-sm leading-normal">
                          {description}
                        </p>
                        <ul className="flex flex-wrap" aria-label="Skills used">
                          {skills.map((skill) => <SkillPill key={skill} skill={skill} />)}
                        </ul>
                      </div>
                    </div>
                  )}
                </li>
              ))}
            </ol>
            <h3 className={header_style}>
              Activities
            </h3>
            <ol className="group/list pt-4">
              {ACTIVITES.map(({ period, role, description, skills, link }) => (
                <li key={role} className="group relative rounded-lg transition-all lg:p-4 lg:-mx-4 lg:-mt-4 mb-8 lg:hover:bg-dark-secondary/40 lg:group-hover/list:opacity-50 lg:hover:!opacity-100">
                  {((child) => (link.length === 0 ? <>{child}</> : <a href={link} target="_blank" rel="noreferrer">{child}</a>))( // link wrapper
                    <div className="sm:grid sm:grid-cols-8 sm:gap-6">
                      <p className="sm:col-span-2 mb-2 sm:mb-0 text-xs font-semibold uppercase tracking-wide text-dark-text-dark sm:pt-1">
                        {period}
                      </p>
                      <div className="sm:col-span-6">
                        <h4 className={`font-medium leading-snug text-dark-text-highlight ${link.length !== 0 ? 'group-hover:text-accent transition-colors flex items-center gap-2' : ''}`}>
                          {role} {link.length !== 0 ? 
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-3 w-3 shrink-0" aria-hidden="true">
                            <line x1="0" y1="24" x2="24" y2="0" strokeWidth="3"/> {/* base */}
                            {/* tip, to account for rendering fuckery stroke width = base strokeWidth * sqrt(2) */}
                            <line x1="6" y1="0" x2="24" y2="0" strokeWidth="4.24" />
                            <line x1="24" y1="18" x2="24" y2="0"strokeWidth="4.24"/>
                          </svg> : <svg className="hidden"></svg>}
                        </h4>
                        <p className="mt-2 text-sm leading-normal">
                          {description}
                        </p>
                        <ul className="flex flex-wrap" aria-label="Skills used">
                          {skills.map((skill) => <SkillPill key={skill} skill={skill} />)}
                        </ul>
                      </div>
                    </div>
                  )}
                </li>
              ))}
            </ol>
          </section>

          <section id="projects" aria-label="Selected projects">
            <h3 className={header_style}>
              Projects
            </h3>
            <ol className="group/list space-y-24">
              {PROJECTS.map(({ name, description, skills, link }) => (
                ((child) => (link.length === 0 ? <>{child}</> : <a href={link} target="_blank" rel="noreferrer">{child}</a>))(
                  <li key={name} className="group relative rounded-lg transition-all lg:p-4 lg:-mx-4 lg:-mt-4 mb-8 lg:hover:bg-dark-secondary/40 lg:group-hover/list:opacity-50 lg:hover:!opacity-100">
                    <h4 className={`font-medium leading-snug text-dark-text-highlight ${link.length !== 0 ? 'group-hover:text-accent transition-colors flex items-center gap-2' : ''}`}>
                      {name}{link.length !== 0 ? 
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-3 w-3 shrink-0" aria-hidden="true">
                            <line x1="0" y1="24" x2="24" y2="0" strokeWidth="3"/> {/* base */}
                            {/* tip, to account for rendering fuckery stroke width = base strokeWidth * sqrt(2) */}
                            <line x1="6" y1="0" x2="24" y2="0" strokeWidth="4.24" />
                            <line x1="24" y1="18" x2="24" y2="0"strokeWidth="4.24"/>
                      </svg> : <svg className="hidden"></svg>}
                    </h4>
                    <p className="mt-2 text-sm leading-normal">
                      {description}
                    </p>
                    <ul className="flex flex-wrap" aria-label="Technologies used">
                      {skills.map((skill) => <SkillPill key={skill} skill={skill} />)}
                    </ul>
                  </li>
                )
              ))}
            </ol>
          </section>

        </main>
      </div>
    </div>
  )
}