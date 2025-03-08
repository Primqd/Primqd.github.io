import test from "../assets/debug_navbar_art.png"
import Project from "../components/Project";

function Games() {
    return <div className="bg-neutral-800 text-white py-[8vh] min-h-screen">
        <Project
            title="Lorem Ipsum" 
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            image={test} 
            link="/"
        />
    </div>
}

export default Games;