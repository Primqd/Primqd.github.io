import { Link } from "react-router-dom";

const externalLinkStyle = "text-text-url dark:text-dark-text-url hover:underline"; // links to other websites
const internalLinkStyle = "font-semibold text-text-highlight dark:text-dark-text-highlight hover:underline" // links to subpages

export const About: React.FC = () => {
    return <div className="bg-primary dark:bg-dark-primary text-text-highlight dark:text-dark-text-highlight pt-[5rem] min-h-screen">
        <div className="flex px-[min(5rem,10%)] pt-[min(4rem,10%)]">
            <div className="yap align-middle">
                <div className="pb-[3rem] About me">
                    <h1 className="text-5xl font-semibold pb-[1rem]">
                        About me
                    </h1>
                    <p className="max-w-3xl text-lg text-text-default dark:text-dark-text-default">
                        I'm Franklin, an aspiring computer science student currently in sophmore year of high school.
                        I enjoy
                        <span className="text-text-highlight dark:text-dark-text-highlight font-semibold"> web development</span> and
                        <span className="text-text-highlight dark:text-dark-text-highlight font-semibold"> competitive programming</span>,
                        but I'm still learning about different fields of CS I enjoy.
                        On the side, I enjoy <span className="text-text-highlight dark:text-dark-text-highlight font-semibold">photography </span>
                        and <span className="text-text-highlight dark:text-dark-text-highlight font-semibold">gaming</span>.
                    </p>
                </div>
                <div className="pb-[3rem] Skills">
                    <h1 className="text-4xl font-semibold pb-[0.5rem]">
                        Skills
                    </h1>
                    <ul className="pl-[1.2rem] list-disc max-w-3xl text-lg text-text-default dark:text-dark-text-default">
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
                                        <span className="italic">Secrets of the JavaScript Ninja (1st edition) </span>
                                        by John Resig and Bear Bibeault
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li className="Competitive Programming">
                            Competitive Programming
                            <ul className="pl-[2.4rem] list-[upper-roman]">
                                <li>USACO Silver currently</li>
                                <li>See my LeetCode profile <Link
                                    className={externalLinkStyle}
                                    target="_blank"
                                    to="https://leetcode.com/u/Primqd/">
                                    here
                                </Link></li>
                                <li>Starting this summer, I plan to begin grinding competitive programming until I can reach at least USACO Gold. Wish me luck :)</li>
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
                    <ul className="pl-[1.2rem] list-disc max-w-3xl text-lg text-gray-400 dark:text-dark-gray-400">
                        <li className="Photography">
                            Photography
                            <ul className="pl-[2.4rem] list-[upper-roman]">
                                <li>I've been taking photos on and off for the last 3 years or so!</li>
                                <li>I take all kinds of photos, but I especially like nature photography</li>
                                <li>I use a <Link
                                    className={externalLinkStyle}
                                    target="_blank"
                                    to="https://shop.panasonic.com/products/g100-mirrorless-camera-12-32mm-f3-5-5-6-lens">
                                    Panasonic LUMIX G100
                                </Link> for most of my photos!</li>
                                <li>You can see my photo portfolio  <Link
                                    className={internalLinkStyle}
                                    to="/projects/photo-portfolio">
                                    here
                                </Link>! (Once I complete it, anyways...)</li>
                            </ul>
                        </li>
                        <li className="Geometry Dash">
                            Geometry Dash
                            <ul className="pl-[2.4rem] list-[upper-roman]">
                                <li>My hardest is currently <Link
                                    className={externalLinkStyle}
                                    target="_blank"
                                    to="https://www.youtube.com/watch?v=-88D0mXLDqg">
                                    <span className="italic">Future Funk </span> by JonathanGD
                                </Link>!</li>
                                <li>You can see my profile <Link
                                    className={externalLinkStyle}
                                    target="_blank"
                                    to="https://gdbrowser.com/u/Primqd">
                                    here
                                </Link>!</li>
                            </ul>
                        </li>
                        <li className="Minecraft">
                            Minecraft
                            <ul className="pl-[2.4rem] list-[upper-roman]">
                                <li>My username is Primqd!</li>
                                <li>I used to play Hypixel Skyblock, although I've moved onto modded Minecraft currently.</li>
                                <li>I enjoy TerraFirmaCraft and GregTech... pray for my playtime ;-;</li>
                                <li>I'm currently playing through <Link
                                    className={externalLinkStyle}
                                    target="_blank"
                                    to="https://modrinth.com/modpack/angel-tech-the-greg-age">
                                    Angel Tech: The Greg Age
                                </Link> in my free time!</li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <div className="pb-[3rem] Contacts">
                    <h1 className="text-4xl font-semibold pb-[0.5rem]">
                        Contacts
                    </h1>
                    <ul className="pl-[1.2rem] list-decimal max-w-3xl text-lg text-gray-400 dark:text-dark-gray-400">
                        <li>
                            Discord Username: <span className="text-text-highlight dark:text-dark-text-highlight font-semibold">Primqd</span>
                            <ul className="pl-[2.4rem] list-[disc]"><li>Best way to contact me. Message me first before friending please- I usually don't accept random friend requests.</li></ul>
                        </li>
                        <li>
                            Email: <Link className={externalLinkStyle} target="_blank" to="mailto:franklinvchen@outlook.com"> franklinvchen@outlook.com </Link>
                            <ul className="pl-[2.4rem] list-[disc]"><li>Second best way to contact me. Please note I might take a while to reply to you :)</li></ul>
                        </li>
                        <li>
                            GitHub: <Link className={externalLinkStyle} target="_blank" to="https://github.com/Primqd/"> https://github.com/Primqd/ </Link>
                        </li>
                        <li>
                            YouTube: <Link className={externalLinkStyle} target="_blank" to="https://www.youtube.com/@primqd6254/"> https://www.youtube.com/@primqd6254 </Link>
                        </li>
                    </ul>
                </div>

            </div>
        </div>
    </div>
}