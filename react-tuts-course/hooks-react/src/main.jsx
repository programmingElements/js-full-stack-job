import React, {useState, useRef} from 'react'
import ReactDOM from 'react-dom/client'
import Stopwatch from './useref/StopWatch'

/*

const App = () => {
  const [myNum, setMyNum] = useState(0);

  const inputOne = useRef();
  const inputTwo = useRef();

  const getNumBox = () => {
    console.log("Hello");
    inputOne.current.style.width = "250px";
    console.log(inputOne.current);
  }

  const getTextBox = () => {
    console.log("World");
    console.log(inputTwo.current);
  }

  return (
    <>
    <h2>Learncodeonline</h2>
    <input 
    ref={inputOne}
    type="number" 
    value={myNum}
    style={{width: "100px"}}
    onChange={(e) => setMyNum(e.target.value)}
    />

    <input 
    ref={inputTwo}
    type="text" 
    value={myNum}
    onChange={(e) => setMyNum(e.target.value)}
    />

    <h3>Value is : {myNum}</h3>

    <button onClick={() => getNumBox()}>Rupees</button>
    <button onClick={() => getTextBox()}>Dollars</button>
    </>
  )
}

*/

ReactDOM.createRoot(document.getElementById('root')).render(
    <Stopwatch />,
)
