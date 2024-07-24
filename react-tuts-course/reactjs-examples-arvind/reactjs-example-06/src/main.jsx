import React, {useState} from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'));


/*

1. What are hooks ?
   
  Ans: Hooks in react are plain javascript functions.
       
       hooks can only be called inside another javascript function.
       every hook should start with `use` prefix.

       rules to call functions as a hook
       ---------------------------------
       1. every hook can only be invoked inside another javascript function.
       2. every hook should start with `use` prefix.

2. What is useState ?
       
       
3. Primitive & Non Primitive States
4. Asynchronous nature of setState
5. lazy initialization

*/

// const [stateValue, setStateValue] = useState(initialState)
// setStateValue(newState) 
// setStateValue(callbackFn) => (prev) => nextValue

function compute() {
  let sum = 0;
  for (let i = 1; i <= 100; i++) {
    sum += i;
  }
  return sum;
}

function Counter() {
  // const [count, setCount] = useState(10);
  // const [count, setCount] = useState(compute()); // issue with direct calling compute() in useState() hook problem is every render time compute() is calling (performance reduce)
  const [count, setCount] = useState(compute); // lazy initialization // due this callback approach only initial render compute Fn is calling other re-renders times not calling compute Fn
  const [user, setUser] = useState({age: 23, name: "aravind"}); // hashcodevalue: #500

  const increment = () => {
    // setCount(count + 1);
    // setCount(count + 3);
    // setCount(count + 2);
    // setCount(count + 5);
    

    // setCount(prevCount => prevCount + 3);
    // setCount(prevCount => prevCount + 1);
    // setCount(prevCount => prevCount + 2);

    setCount(count + 1); // setCount(11)
    setCount((prevCount) => {
      return prevCount + 3;
    }); // setCount(callbackFn)

  }

  const incrementAge = () => {
    // console.log(user); // hashcodevalue: #500 = { age: 23, name: "aravind" }
    // user.age += 1; //  hashcodevalue: #500 = { age: 24, name: "aravind" }
    // console.log(user); //  hashcodevalue: #500 = { age:24, name: "aravind" }
    // setUser({...user}); // setUser({...user}); // #600 = {age:24, name:"aravind"}

    setUser({...user, age: user.age + 1});
  }

  return (
    <div>
      <h1>Counter Component</h1>
      <h2>Count : {count}</h2>
      <h2>name : {user.name}, age : {user.age}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={incrementAge}>Increment Age</button>
    </div>
  )
}

root.render(<Counter />);
