import { useEffect,useState } from "react"

const internalLinkStyle = "font-semibold text-text-highlight dark:text-dark-text-highlight hover:underline" // links to subpages
const NAV_ITEMS = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
]

const EXPERIENCE = [
  {
    period: 'Jan 2026 — Present',
    role: 'STEAM Facilitator · Steamoji',
    description:
      "Guide kids ages 5–13 through their first real hands-on experience with software like Python, Unity, Blender, and Onshape, providing 10+ hours of active education assistance each week. I like helping students build something themselves and walk away a little more confident that they can figure things out.",
    skills: ['Python', 'Unity', 'Blender', 'Onshape', 'Mentorship'],
  },
  {
    period: '2024 — Present',
    role: 'Math Club Co-President · Juanita High School',
    description:
      'Help organize school participation in BMT and the AMC 10/12, and partnered with the National Honor Society to set up a volunteer math tutoring program. Run presentations on college-level math subjects to get more students interested in the field.',
    skills: ['Leadership', 'Tutoring', 'AMC 10/12', 'BMT'],
  },
  {
    period: 'Jul 2026',
    role: 'Basics of ASICs · MIT Beaver Works Summer Institute',
    description:
      'Learned the PCB, FPGA, and ASIC design flows, building and simulating SystemVerilog modules in team-based labs. Developed a four-layer MNIST classifier into an ASIC over the course of five days for a capstone project.',
    skills: ['SystemVerilog', 'ASIC', 'FPGA', 'PCB Design'],
  },
  {
    period: 'Sep 2026 — Present',
    role: 'Member · National Honor Society',
    description:
      'Volunteer 30+ hours to the community and help tutor math alongside Math Club.',
    skills: ['Volunteering', 'Tutoring'],
  },
]

const PROJECTS = [
  {
    name: 'Tetris Tower',
    description:
      'A Godot game a classmate and I built for Washington TSA, where we placed second in the Video Game Design semifinals.',
    skills: ['Godot', 'GDScript', 'Game Design'],
  },
  {
    name: 'franklinvc.com',
    description:
      'This very site — a personal website built from scratch with React, TypeScript, and TailwindCSS.',
    skills: ['React', 'TypeScript', 'TailwindCSS', 'Vite'],
  },
  {
    name: 'Advent of Code',
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
      <svg viewBox="0 0 16 16" fill="currentColor" className="h-6 w-6" aria-hidden="true">
        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
      </svg>
    ),
  },
  {
    label: 'Email',
    href: 'mailto:frankvc@mit.edu',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6" aria-hidden="true">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m22 7-10 5L2 7" />
      </svg>
    ),
  },
]

function SkillPill({ skill }: { skill: string }) {
  return (
    <li className="mr-1.5 mt-2">
      <span className="inline-block rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
        {skill}
      </span>
    </li>
  )
}

function Home() {
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => { // scroll-spy: highlight the nav item whose section is in view
    const sections = NAV_ITEMS
      .map(({ id }) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: '-30% 0px -60% 0px' }
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
            <h2 className="mt-3 text-lg sm:text-xl font-medium text-dark-text-highlight">
              Student Programmer and Future Engineer
            </h2>
            <p className="mt-4 max-w-xs leading-normal">
              I build things with software and hardware — and try to understand them from first principles.
            </p>

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
                          className={`mr-4 h-px transition-all ${
                            active
                              ? 'w-16 bg-dark-text-highlight'
                              : 'w-8 bg-dark-border-bright group-hover:w-16 group-hover:bg-dark-text-highlight'
                          }`}
                        />
                        <span
                          className={`text-xs font-bold uppercase tracking-widest transition-colors ${
                            active
                              ? 'text-dark-text-highlight'
                              : 'text-dark-text-dark group-hover:text-dark-text-highlight'
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
                    rel="noreferrer"
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
                className="text-dark-text-dark underline underline-offset-2 hover:text-accent transition-colors"
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
            <h3 className="mb-8 text-sm font-bold uppercase tracking-widest text-dark-text-highlight">
              About
            </h3>
            <div className="space-y-4 leading-relaxed">
              <p>
                Hi there! I'm Franklin, and I like trying new things, whether that's new software, cutting-edge AI models, or a new cooking recipe.
                I'm a high schooler in the Cambridge AICE program with a growing focus on software and hardware, and I care about understanding things from first principles, often leading myself through new subjects.
              </p>
              <p>
                Currently, I'm a STEAM Facilitator at <span className="font-medium text-dark-text-highlight">Steamoji</span>, where I help kids get their first real hands-on experience with tools like Python, Unity, Blender, and Onshape.
                I like guiding students through projects where they build something themselves and walk away a little more confident that they can figure things out.
              </p>
              <p>
                Outside of that, I spend a lot of time on competitive programming: I've hit <span className="font-medium text-dark-text-highlight">USACO Silver</span>, kept a 300+ day LeetCode streak, and peaked at 1777 ELO.
                This past summer I dug into chip design through <span className="font-medium text-dark-text-highlight">MIT's Beaver Works Summer Institute</span>, learning the PCB-to-ASIC flow and building Verilog modules for a capstone project.
                I also build things for fun: a personal site with React and TailwindCSS, a full month of Advent of Code solutions in Python, and a Godot game called <span className="font-medium text-dark-text-highlight">Tetris Tower</span> that a classmate and I built for Washington TSA, where we placed second in semifinals.
              </p>
              <p>
                In my spare time, you can usually find me grinding LeetCode problems, tinkering with a new project idea, or seeing how far I can push a self-study rabbit hole in linear algebra or ASIC design.
              </p>
            </div>
          </section>

          <section id="experience" aria-label="Work experience and activities">
            <h3 className="mb-8 text-sm font-bold uppercase tracking-widest text-dark-text-highlight">
              Experience
            </h3>
            <ol className="group/list space-y-24">
              {EXPERIENCE.map(({ period, role, description, skills }) => (
                <li key={role} className="group relative rounded-lg transition-all lg:p-4 lg:-m-4 lg:hover:bg-dark-secondary/40 lg:group-hover/list:opacity-50 lg:hover:!opacity-100">
                  <div className="sm:grid sm:grid-cols-8 sm:gap-6">
                    <p className="sm:col-span-2 mb-2 sm:mb-0 text-xs font-semibold uppercase tracking-wide text-dark-text-dark sm:pt-1">
                      {period}
                    </p>
                    <div className="sm:col-span-6">
                      <h4 className="font-medium leading-snug text-dark-text-highlight">
                        {role}
                      </h4>
                      <p className="mt-2 text-sm leading-normal">
                        {description}
                      </p>
                      <ul className="flex flex-wrap" aria-label="Skills used">
                        {skills.map((skill) => <SkillPill key={skill} skill={skill} />)}
                      </ul>
                    </div>
                  </div>
                </li>
              ))}
            </ol>
          </section>

          <section id="projects" aria-label="Selected projects">
            <h3 className="mb-8 text-sm font-bold uppercase tracking-widest text-dark-text-highlight">
              Projects
            </h3>
            <ol className="group/list space-y-24">
              {PROJECTS.map(({ name, description, skills }) => (
                <li key={name} className="group relative rounded-lg transition-all lg:p-4 lg:-m-4 lg:hover:bg-dark-secondary/40 lg:group-hover/list:opacity-50 lg:hover:!opacity-100">
                  <h4 className="font-medium leading-snug text-dark-text-highlight">
                    {name}
                  </h4>
                  <p className="mt-2 text-sm leading-normal">
                    {description}
                  </p>
                  <ul className="flex flex-wrap" aria-label="Technologies used">
                    {skills.map((skill) => <SkillPill key={skill} skill={skill} />)}
                  </ul>
                </li>
              ))}
            </ol>
          </section>

        </main>
      </div>
    </div>
  )
}

export default Home;