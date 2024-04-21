import { useRef, useState } from 'react'
import './App.css'

function App() {
  let [count, setCount] = useState(0);
  let [error, seterror] = useState(false);
  let countRef = useRef(0)

  let handeleClick = () => {
    count++
    setCount(count)
  }

  let handeleClick2 = () => {
    console.log(countRef.current++);
    if(countRef.current==5){
      seterror(true)
    }

  }

  return (

    <>
      <div className="">
        <h1 className='aling'>UseStat & UseRaf</h1>
        <h2>{count}</h2>
        <button onClick={handeleClick}>Click</button>
      </div>

      <div className="">
        <h1 className='aling'>UseStat & UseRaf</h1>
        <h2>{countRef.current++}</h2>
        <button onClick={handeleClick2}>Click</button>
        {error && <h1>Block For 5 Minit</h1> }
      </div>
    </>
  )
}

export default App
