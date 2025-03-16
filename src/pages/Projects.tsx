import test from "../assets/debug_navbar_art.png"
import pig from "../assets/pig.png"

import Project from "../components/Project";

function Projects() {
    return <div className="bg-neutral-800 text-white pt-[8vh] pb-[4vh] min-h-screen max-w-screen items-center flex flex-col">
        <Project
            title="Lorem Ipsum"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            image={test}
            link="/"
        />
        <Project
            title="woah"
            description="According to all known laws of aviation, there is no way a bee should be able to fly.
            Its wings are too small to get its fat little body off the ground.
            The bee, of course, flies anyway because bees don't care what humans think is impossible.
            Yellow, black. Yellow, black. Yellow, black. Yellow, black.
            Ooh, black and yellow!
            Let's shake it up a little.
            Barry! Breakfast is ready!
            Coming!
            Hang on a second.
            Hello?
            Barry?
            Adam?
            Can you believe this is happening?
            I can't.
            I'll pick you up.
            Looking sharp.
            Use the stairs, Your father paid good money for those.
            Sorry. I'm excited.
            Here's the graduate.
            We're very proud of you, son.
            A perfect report card, all B's.
            Very proud.
            Ma! I got a thing going here.
            You got lint on your fuzz."
            image={pig}
            link="/games"
        />
        <Project
            title="Lorem Ipsum"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            image={test}
            link="/games"
        />
    </div>
}

export default Projects;