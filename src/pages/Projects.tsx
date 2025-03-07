import { Link } from "react-router-dom";
import test from "../assets/debug_navbar_art.png"

type ProjectProps = {
    title : string,
    description : string,
    image : string,
    link : string,
}

function Project({title, description, image, link} : ProjectProps) {
    return(
        <div className="px-[10vw] py-[8vh] w-[97.5vw] h-[47.5vh]">
            <div className="flex border-4 border-neutral-600 bg-neutral-700">
                <div className="px-[2.5vw] py-[2.5vh] w-[100%]">
                        <Link to={link} className="text-4xl font-semibold hover:underline py-[1vh] w-fit">
                            {title}
                        </Link>
                        <p className="py-[1vh] text-lg text-neutral-400">
                            {description}
                        </p>
                </div>
                <Link to={link}>
                    <figure className="max-w px-[2.5vw] py-[2.5vh]">
                        <img className="max-w-[25vw] border-4 border-gray-400" alt="clay pig" src={image}></img>
                    </figure>
                </Link>
            </div>
        </div>
    )
}

function Projects() {
    return <div className="bg-neutral-800 text-white py-[8vh]">
        <Project
            title="Lorem Ipsum" 
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            image={test} 
            link="/"
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