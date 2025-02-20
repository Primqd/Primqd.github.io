import { Link } from "react-router-dom";
import "../index.css";

function Navbar() {
    return (
        <>
            <div style={{ backgroundColor: 'blue', color: 'white' }} className="p-4">
                This should have a blue background and white text.
            </div>
            <p className="text-blue-600/100 dark:text-sky-400/100 bg-gray-800 p-2">The quick brown fox...</p>
            <p className="text-blue-600/75 dark:text-sky-400/75 bg-gray-800 p-2">The quick brown fox...</p>
            <p className="text-blue-600/50 dark:text-sky-400/50 bg-gray-800 p-2">The quick brown fox...</p>
            <p className="text-blue-600/25 dark:text-sky-400/25 bg-gray-800 p-2">The quick brown fox...</p>
            <p className="bg-gradient-to-r from-blue-500 via-teal-500 to-green-500 bg-clip-text flex justify-center">The quick brown fox...</p>


        </>
    )
}

export default Navbar;