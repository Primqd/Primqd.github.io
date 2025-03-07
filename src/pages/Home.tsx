import { Link } from "react-router-dom";
import pig from "../assets/pig.png"

function Home() {
    return <div className="bg-neutral-800 text-white pt-[8vh] h-[100vh]">
        <div className="flex justify-center items-center gap-[30vw] px-[8vw] pt-[16vh]">
            <div className="yap align-middle">
                <h1 className="text-5xl font-semibold pb-[1vh]">Hi!</h1>
                <p className="max-w-lg text-lg text-gray-400">
                    This is my personal website, where I do all sorts of shenanigans.
                </p>
                <p className="max-w-lg text-lg text-gray-400">
                    Check out the
                    <Link className="font-semibold text-white" to="/projects"> projects </Link>
                     and 
                     <Link className="font-semibold text-white" to="/games"> games </Link>
                      pages to see more.
                </p>
                <p className="max-w-lg text-lg text-gray-400">
                    If you'd like to learn more about me, check out my
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