import { Link } from "react-router-dom";
import pig from "../assets/pig.png"

function Home() {
    return <div className="bg-neutral-800 text-white pt-[5rem] min-h-screen">
        <div className="flex justify-center items-center gap-[35%] px-[5rem] pt-[8rem]">
            <div className="yap align-middle">
                <h1 className="text-5xl font-semibold pb-[0.75rem]">Hi!</h1>
                <p className="max-w-lg text-lg text-gray-400">
                    This is my personal website, where I do all sorts of shenanigans.
                    Check out the
                    <Link className="font-semibold text-white" to="/projects"> projects </Link>
                     and 
                    <Link className="font-semibold text-white" to="/games"> games </Link>
                    pages to see more.
                    Or, if you'd like to learn more about me, check out my
                    <Link className="font-semibold text-white" to="/about"> about </Link> page! 
                </p>
            </div>
            <figure className="max-w-lg">
                <img className="mx-auto max-w-full rounded-lg" alt="clay pig" src={pig}></img>
                <figcaption className="mt-2 text-sm text-center text-gray-400 italic">Picture unrelated.</figcaption>
            </figure>
        </div>
    </div>
}

export default Home;