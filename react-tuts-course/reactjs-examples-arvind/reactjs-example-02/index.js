
// <h1 id="title">Hello React</h1>

// Using Real DOM

// const heading1 = document.createElement("h1");
// heading1.innerHTML = "Hello React JS";
// heading1.id = "title";

// const container = document.getElementById("app");
// container.appendChild(heading1);


// Using React DOM


// console.log(React);
// console.log(ReactDOM);

const heading2 = React.createElement("h1", {id: "title"}, "Welcome to React JS Course !");

// console.log(heading2);

const container = document.getElementById("app");
const root = ReactDOM.createRoot(container);

root.render(heading2);