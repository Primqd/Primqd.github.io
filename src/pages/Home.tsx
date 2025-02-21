import { useState } from "react";

function Home() {
    const [num, setNum] = useState(0);

    return <>
        <h1 className="flex justify-center">Currently under work... part 3</h1>
        <input className="bg-blue-500" type="button" value={`value = ${num}`} onClick={() => (setNum(num + 1))} />
    </>
}

export default Home;