const externalLinkStyle = "text-text-url dark:text-dark-text-url hover:underline";

type SectionCardProps = {
    title: string;
    eyebrow?: string;
    children: React.ReactNode;
};

const SectionCard = ({ title, eyebrow, children }: SectionCardProps) => (
    <section className="rounded-3xl border border-black/5 bg-white/70 p-6 shadow-[0_20px_80px_rgba(0,0,0,0.08)] backdrop-blur dark:border-white/10 dark:bg-white/5">
        {eyebrow && (
            <p className="pb-2 text-xs font-semibold uppercase tracking-[0.24em] text-text-url dark:text-dark-text-url">
                {eyebrow}
            </p>
        )}
        <h2 className="pb-4 text-3xl font-semibold text-text-highlight dark:text-dark-text-highlight">
            {title}
        </h2>
        {children}
    </section>
);

const quickFacts = [
    { label: "School", value: "Juanita High School" },
    { label: "Graduation", value: "June 2027" },
    { label: "Current Role", value: "Steamoji Facilitator" },
    { label: "Focus", value: "Computer Science (Web Development and Computer Architecture), Electrical Engineering (Chip Design, ASICs)" },
];

const educationItems = [
    "High-School Diploma, Juanita High School, graduation June 2027",
    "Advanced International Certificate of Education, Cambridge Program, September 2023 - June 2027",
    "Washington Food Worker Card, Washington State Food Worker Course, September 2025",
];

const courseworkItems = [
    "AP Computer Science A: practiced Java syntax, standard library data structures, and OOP, including inheritance",
    "AP Calculus BC: learned single-variable calculus, differential equations, sequences and series, and parametric equations",
    "AP Statistics: studied probability distributions, experimental design, confidence intervals, and significance tests",
    "Linear Algebra: self-studying with Introduction to Linear Algebra by Gilbert Strang and working through matrix elimination, vector spaces, projections, and determinants",
];

const experienceBullets = [
    "Facilitate STEAM learning experiences for children at Steamoji, Inc.",
    "Help students use tools like Python, TinkerCAD, and Onshape",
    "Guide hands-on projects and collaborative activities that build critical thinking and problem-solving skills",
    "Support student engagement through mentoring and interactive sessions",
];

const activityBullets = [
    "Competitive Programming: USACO Silver, a 300+ day LeetCode streak, and a 1777 peak ELO",
    "BWSI Basics of ASICs: learned the PCB and FPGA to ASIC design flow, built Verilog modules, and practiced hardware verification",
    "Technology Student Association: placed second in WTSA 2026 Coding and reached semifinals in WTSA 2026 Video Game Design",
];

const projects = [
    {
        name: "franklinvc.com",
        meta: "HTML, JavaScript, React, React Router, TailwindCSS, Git, GitHub Pages",
        body: "Frontend portfolio site built with React and TailwindCSS, with React Router and Flowbite as supporting libraries.",
    },
    {
        name: "Advent of Code",
        meta: "Python",
        body: "Solved the daily programming challenges for the entirety of December 2024 and published the solutions on GitHub.",
    },
    {
        name: "Tetris Tower",
        meta: "Godot",
        body: "Built a game with a classmate for Washington TSA 2026 and reached the semifinals stage.",
    },
];

const skillGroups = [
    {
        title: "Languages",
        items: ["Python", "Java", "C/C++", "C#", "JavaScript", "TypeScript", "HTML/CSS", "SystemVerilog", "OCaml"],
    },
    {
        title: "Frameworks",
        items: ["React", "React Router", "Node.js", "Flask", "Vite"],
    },
    {
        title: "Developer Tools",
        items: ["Git", "Docker", "VS Code", "Visual Studio", "IntelliJ", "Eclipse", "Vivado", "Unity", "Godot"],
    },
    {
        title: "Libraries",
        items: ["pandas", "NumPy", "Matplotlib", "Tailwind CSS", "Flowbite", "discord.js"],
    },
];

const contactLinks = [
    { label: "Website", value: "https://franklinvc.com/", href: "https://franklinvc.com/" },
    { label: "GitHub", value: "github.com/Primqd", href: "https://github.com/Primqd" },
    { label: "Email", value: "frankvc@mit.edu", href: "mailto:frankvc@mit.edu" },
];

export const About: React.FC = () => {
    return (
        <main className="min-h-screen bg-primary px-6 pt-24 text-text-default dark:bg-dark-primary dark:text-dark-text-default">
            <div className="mx-auto flex max-w-6xl flex-col gap-8">
                <section className="rounded-[2rem] border border-black/5 bg-gradient-to-br from-white/75 via-white/60 to-white/40 p-8 shadow-[0_24px_90px_rgba(0,0,0,0.12)] backdrop-blur dark:border-white/10 dark:from-white/10 dark:via-white/5 dark:to-white/0">
                    <p className="pb-3 text-sm font-semibold uppercase tracking-[0.28em] text-text-url dark:text-dark-text-url">
                        About Me
                    </p>
                    <div className="grid gap-8 lg:grid-cols-[1.4fr_0.9fr] lg:items-start">
                        <div>
                            <h1 className="text-5xl font-semibold tracking-tight text-text-highlight dark:text-dark-text-highlight">
                                Hi!
                            </h1>
                            <p className="mt-5 max-w-3xl text-lg leading-8 text-text-default dark:text-dark-text-default">
                                I’m Franklin Chen, a Juanita High School student graduating in June 2027. My work centers on frontend
                                development, competitive programming, and steady growth in CS fundamentals. I’ve built websites with
                                React and TailwindCSS, practiced algorithmic problem solving through USACO and LeetCode, and I currently
                                work as a Steamoji Facilitator helping younger students learn with Python, TinkerCAD, and Onshape.
                            </p>
                        </div>

                        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
                            {quickFacts.map((fact) => (
                                <div
                                    key={fact.label}
                                    className="rounded-2xl border border-black/5 bg-white/80 p-4 dark:border-white/10 dark:bg-white/5"
                                >
                                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-text-url dark:text-dark-text-url">
                                        {fact.label}
                                    </p>
                                    <p className="pt-2 text-sm font-medium leading-6 text-text-highlight dark:text-dark-text-highlight">
                                        {fact.value}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <div className="grid gap-8 xl:grid-cols-2">
                    <SectionCard title="Education & Certifications" eyebrow="Background">
                        <ul className="space-y-3 text-lg leading-8">
                            {educationItems.map((item) => (
                                <li key={item} className="rounded-2xl bg-black/5 px-4 py-3 dark:bg-white/5">
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </SectionCard>

                    <SectionCard title="Coursework" eyebrow="Academics">
                        <ul className="space-y-3 text-lg leading-8">
                            {courseworkItems.map((item) => (
                                <li key={item} className="rounded-2xl bg-black/5 px-4 py-3 dark:bg-white/5">
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </SectionCard>

                    <SectionCard title="Professional Experience" eyebrow="Work">
                        <p className="pb-4 text-lg font-medium text-text-highlight dark:text-dark-text-highlight">
                            Steamoji Facilitator, Steamoji, Inc. · January 2026 - Present
                        </p>
                        <ul className="space-y-3 text-lg leading-8">
                            {experienceBullets.map((item) => (
                                <li key={item} className="rounded-2xl bg-black/5 px-4 py-3 dark:bg-white/5">
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </SectionCard>

                    <SectionCard title="Activities" eyebrow="Outside the classroom">
                        <ul className="space-y-3 text-lg leading-8">
                            {activityBullets.map((item) => (
                                <li key={item} className="rounded-2xl bg-black/5 px-4 py-3 dark:bg-white/5">
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </SectionCard>

                    <SectionCard title="Projects" eyebrow="Built work">
                        <div className="space-y-4">
                            {projects.map((project) => (
                                <article key={project.name} className="rounded-2xl bg-black/5 p-4 dark:bg-white/5">
                                    <h3 className="text-xl font-semibold text-text-highlight dark:text-dark-text-highlight">
                                        {project.name}
                                    </h3>
                                    <p className="pt-1 text-sm font-medium uppercase tracking-[0.18em] text-text-url dark:text-dark-text-url">
                                        {project.meta}
                                    </p>
                                    <p className="pt-3 text-lg leading-8">{project.body}</p>
                                </article>
                            ))}
                        </div>
                    </SectionCard>

                    <SectionCard title="Technical Skills" eyebrow="Toolkit">
                        <div className="grid gap-4 sm:grid-cols-2">
                            {skillGroups.map((group) => (
                                <div key={group.title} className="rounded-2xl bg-black/5 p-4 dark:bg-white/5">
                                    <h3 className="pb-2 text-lg font-semibold text-text-highlight dark:text-dark-text-highlight">
                                        {group.title}
                                    </h3>
                                    <p className="text-base leading-7">{group.items.join(", ")}</p>
                                </div>
                            ))}
                        </div>
                    </SectionCard>

                    <SectionCard title="Contact" eyebrow="Reach out">
                        <div className="space-y-3 text-lg leading-8">
                            {contactLinks.map((link) => (
                                <div key={link.label} className="rounded-2xl bg-black/5 px-4 py-3 dark:bg-white/5">
                                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-text-url dark:text-dark-text-url">
                                        {link.label}
                                    </p>
                                    <a className={externalLinkStyle} href={link.href} target="_blank" rel="noreferrer noopener">
                                        {link.value}
                                    </a>
                                </div>
                            ))}
                        </div>
                    </SectionCard>
                </div>
            </div>
        </main>
    );
};