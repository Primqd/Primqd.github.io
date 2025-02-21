import { useState } from "react";

function Home() {
    const [num, setNum] = useState(0);

    return <>
        <h1 className="flex justify-center">welcome home</h1>
        <input type="button" value={`clicker = ${num}`} onClick={() => (setNum(num + 1))} />
    </>
}

export default Home;