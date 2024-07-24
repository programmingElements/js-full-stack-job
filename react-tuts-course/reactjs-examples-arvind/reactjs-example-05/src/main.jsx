import React, { Component } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'



const root = ReactDOM.createRoot(document.getElementById('root'))

// functional components
// class components

// component is function it consists of state, UI, props
// component = state + UI(html + css) + props

// function User1({name,age}) {
//   return (
//     <div>
//       <p>Name: {name}, age: {age}</p>
//     </div>
//   );
// }

// class User2 extends Component {
//   constructor(props) {
//     super(props); // if we pass props to `super()` parent class it will allows the `this.props` works in constructor.
//     console.log(this.props); // `this.props` in the constructor method gives the data when only we pass props into the `super()` parent class constructor only
//     // console.log(props);
//   }
//   render() {
//     console.log(this.props);
//     return (<div>
//       <p>Name: {this.props.name}, age: {this.props.age}</p>
//     </div>)
//   }
// }


//React.createElement(User2, {name: "Bhanu", age: 19})

// h1, b, p, pre => user1 is not a valid html element

// root.render(<User2 name={"Bhanu"} age={19} />);

// state is a value it may be boolean, strings, number, array, object or anything
// state may be change according to the condition

// remounting the counter component 
function remount() {
  root.render(
    <Counter />
  )
}

// unmounting the counter component and display other JSX Element
function unmount() {
  root.render(
    <div>
          <h1>Component unmounted.</h1>
          <button onClick={remount}>Re mount component</button>
    </div>
  )
}

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 1 };
  }

  increment = () => {
    
    // console.log(this.state.count);
    // this.state.count += 1;
    // console.log(this.state.count);
    // root.render(<Counter />);

    this.setState({ count: this.state.count + 1 });
  }

  render() {
    return (
      <div>
        <h1>Count is : { this.state.count }</h1>
        <button onClick={this.increment}>Increment</button>
        <button onClick={unmount}>Unmount</button>
      </div>
    )
  }

  componentDidMount() {
    console.log("component mounted.");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(prevProps, prevState);
    console.log(this.props, this.state);
    console.log("component updated.");
  }

  componentWillUnmount() {
    console.log("component is about to unmount");
  }
}

// Component life cycle phases and methods.
// From the Start of Creating the Component to Destroying the Component.

// Phases: 1. Mounting Phase 2. Updating Phase 3. Unmounting Phase

root.render(<Counter />);