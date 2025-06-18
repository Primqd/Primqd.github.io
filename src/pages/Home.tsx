import { Link } from "react-router-dom";
import pig from "../assets/pig.png"

const internalLinkStyle = "font-semibold text-white hover:underline" // links to subpages

export const Home: React.FC = () => {
    return <div className="bg-primary text-white pt-[5rem] min-h-screen">
        <div className="flex justify-center items-center gap-[35%] px-[5rem] pt-[8rem]">
            <div className="yap align-middle">
                <h1 className="text-5xl font-semibold pb-[0.75rem]">Hi!</h1>
                <p className="max-w-lg text-lg text-text-default">
                    This is my personal website, where I do all sorts of shenanigans.
                    Check out the <Link className={internalLinkStyle} to="/projects">projects</Link> and <Link className={internalLinkStyle} to="/games">games</Link> pages to see more.
                    Or, if you'd like to learn more about me, check out my <Link className={internalLinkStyle} to="/about">about</Link> page!
                </p>
            </div>
            <figure className="max-w-lg">
                <img className="mx-auto max-w-full rounded-lg" alt="clay pig" src={pig}></img>
                <figcaption className="mt-2 text-sm text-center text-text-default italic">Picture unrelated.</figcaption>
            </figure>
        </div>
    </div>
}

export default Home;