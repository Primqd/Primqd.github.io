import { Link } from "react-router-dom";

const externalLinkStyle = "text-cyan-500 hover:underline"; // links to other websites

function About() {
    return <div className="bg-neutral-800 text-white pt-[5rem] min-h-screen">
        <div className="flex px-[5rem] pt-[5rem]">
            <div className="yap align-middle">
                <div className="pb-[3rem] About me">
                    <h1 className="text-5xl font-semibold pb-[1rem]">
                        About me
                    </h1>
                    <p className="max-w-3xl text-lg text-gray-400">
                        I'm Franklin, an aspiring computer science student currently in sophmore year of high school.
                        I enjoy
                        <span className="text-white font-semibold"> web development</span> and
                        <span className="text-white font-semibold"> competitive programming</span>,
                        but I'm still learning about different fields of CS I enjoy.
                        On the side, I enjoy <span className="text-white font-semibold">photography </span>
                        and <span className="text-white font-semibold">gaming</span>.
                    </p>
                </div>
                <div className="pb-[3rem] Skills">
                    <h1 className="text-4xl font-semibold pb-[0.5rem]">
                        Skills
                    </h1>
                    <ul className="pl-[1.2rem] list-disc max-w-3xl text-lg text-gray-400">
                        <li className="Programming Languages">
                            Programming Languages
                            <ul className="pl-[2.4rem] list-[upper-roman]">
                                <li>
                                    Python, self taught using <Link
                                        className={externalLinkStyle}
                                        target="_blank"
                                        to="https://www.amazon.com/Advanced-Python-Programming-Brian-Overland/dp/0135159946">
                                            <span className="italic">Supercharged Python </span>
                                            by Brian Overland and John Bennett
                                    </Link>
                                </li>
                                <li>
                                    C++, currently working through <Link
                                        className={externalLinkStyle}
                                        target="_blank"
                                        to="https://www.stroustrup.com/tour3.html">
                                            <span className="italic">A Tour of C++ (Third Edition) </span>
                                            by Bjarne Stroustrup
                                    </Link>
                                </li>
                                <li>
                                    C# in Unity, taught by the <Link
                                        className={externalLinkStyle}
                                        target="_blank"
                                        to="https://www.digipen.edu/">
                                            DigiPen Institute of Technology
                                    </Link>
                                </li>
                                <li>
                                    Java, self taught via self-studying for AP Computer Science A (5)
                                </li>
                                <li>
                                    HTML/CSS (what do you think you're looking at?)
                                </li>
                                <li>
                                    JavaScript/TypeScript, currently working through <Link
                                            className={externalLinkStyle}
                                            target="_blank"
                                            to="https://www.amazon.com/Secrets-JavaScript-Ninja-John-Resig/dp/193398869X">
                                                <span className="italic">Secrets of the JavaScript Ninja (1st edition)</span>
                                                by John Resig and Bear Bibeault
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li className="Libraries">
                            Libraries
                            <ul className="pl-[2.4rem] list-[upper-roman]">
                                <li>
                                    React, self taught using <Link
                                            className={externalLinkStyle}
                                            target="_blank"
                                            to="https://www.roadtoreact.com/">
                                                <span className="italic">Road to React (2024 edition) </span>
                                                by Robin Wieruch
                                    </Link>
                                </li>
                                <li>
                                    TailwindCSS (used in this website)
                                </li>
                            </ul>
                        </li>
                        <li className="Education">
                            Education
                            <ul className="pl-[2.4rem] list-[upper-roman]">
                                <li>
                                    Basic Data Structures and Algorithms, informally taught by <Link
                                            className={externalLinkStyle}
                                            target="_blank"
                                            to="https://jerryvc.com/">
                                                my brother
                                    </Link>
                                </li>
                                <li> Linear Algebra, currently working through <Link
                                            className={externalLinkStyle}
                                            target="_blank"
                                            to="https://www.amazon.com/Introduction-Linear-Algebra-Gilbert-Strang/dp/0980232775">
                                                <span className="italic">Introduction to Linear Algebra (2nd edition) </span>
                                                by Gilbert Strang (link to 5th edition) 
                                    </Link> with a tutor
                                </li>
                                <li> Basic Statistics, see <Link
                                        className={externalLinkStyle}
                                        target="_blank"
                                        to="https://github.com/Primqd/franklin-latex-notes/blob/main/AP%20Stats%20Notes/AP%20STATS.pdf">
                                            my fully annotated LaTex notes 
                                    </Link> on <Link
                                            className={externalLinkStyle}
                                            target="_blank"
                                            to="https://www.bfwpub.com/high-school/us/product/The-Practice-of-Statistics/p/1319113338">
                                                <span className="italic">The Practice of Statistics for the AP Exam, 6th Edition </span>
                                                by Daren Starnes and Josh Tabor
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li className="Other Skills">
                            Other Skills
                            <ul className="pl-[2.4rem] list-[upper-roman]">
                                <li>Git, taught by <Link
                                            className={externalLinkStyle}
                                            target="_blank"
                                            to="https://learn.bwsix.edly.io/course/version-control-git-github-2025/">
                                                a MIT BWSI course
                                    </Link>
                                </li>
                                <li>LaTeX (see a collection of my LaTeX notes <Link
                                            className={externalLinkStyle}
                                            target="_blank"
                                            to="https://github.com/Primqd/franklin-latex-notes">
                                                here!
                                    </Link>)
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <div className="pb-[3rem] Hobbies">
                    <h1 className="text-4xl font-semibold pb-[0.5rem]">
                        Hobbies
                    </h1>
                    <p className="max-w-3xl text-lg text-gray-400">
                        I'm Franklin, an aspiring computer science student currently in sophmore year of high school.
                        I enjoy
                        <span className="text-white font-semibold"> web development</span> and
                        <span className="text-white font-semibold"> competitive programming</span>,
                        but I'm still learning about different fields of CS I enjoy.
                        On the side, I enjoy <span className="text-white font-semibold">photography </span>
                        and <span className="text-white font-semibold">gaming</span>.
                    </p>
                </div>
                <div className="pb-[3rem] Contact Me">
                    <h1 className="text-4xl font-semibold pb-[0.5rem]">
                        Contact Me
                    </h1>
                    <p className="max-w-3xl text-lg text-gray-400">
                        I'm Franklin, an aspiring computer science student currently in sophmore year of high school.
                        I enjoy
                        <span className="text-white font-semibold"> web development</span> and
                        <span className="text-white font-semibold"> competitive programming</span>,
                        but I'm still learning about different fields of CS I enjoy.
                        On the side, I enjoy <span className="text-white font-semibold">photography </span>
                        and <span className="text-white font-semibold">gaming</span>.
                    </p>
                </div>

            </div>
        </div>
    </div>
}

export default About;