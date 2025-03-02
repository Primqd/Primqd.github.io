import { Link } from "react-router-dom";

function Home() {
    return <div className="bg-neutral-800 text-white pt-[8vh] h-[100vh]">
        <div className="flex justify-center gap-[40vw] pt-[16vh]">
            <div className="yap">
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
            <div>
                hello
            </div>
        </div>
    </div>
}

export default Home;