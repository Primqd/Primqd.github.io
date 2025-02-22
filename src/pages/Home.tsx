import { useState } from "react";

const buttonLines = [
    'Oof!',
    'Ouch!',
    'Stop that!',
    "I'm warning you!",
    'Hey!'
]

function Home() {
    const [num, setNum] = useState(0);

    return <>
        <h1 className="flex justify-center">welcome home</h1>
        <input className="z-1 w-[25vw] h-[25vh] text-white transition duration-300 bg-pink-600 hover:bg-pink-400 active:bg-pink-200" type="button" value={num ? buttonLines[num % buttonLines.length] : "Don't touch me!"} onClick={() => (setNum(num + 1))} />
    </>
}

export default Home;