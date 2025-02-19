import * as React from 'react';
import './App.css'

function App() {
  const [n, setN] = React.useState(0);

  return (
    <>
      <h1 className="flex justify-center">
        Currently under work... part 2
      </h1>

      <form className='flex items-center justify-center'>
        <input
          type = 'button'
          value = {n}
          onClick={() => (setN(n + 1))}
        ></input>
      </form>
    </>
  )
}

export default App
