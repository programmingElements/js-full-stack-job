const root = ReactDOM.createRoot(document.getElementById("vdom"));

/**
  <h1>Timer app using - Real DOM</h1>
  <input placeholder="username" />
  <button>Update Time</button>
  <p>time</p>
 */

function renderReactElements() {
    const heading = React.createElement("h1", {key: "heading1"}, "Timer app using - Virtual DOM");
    const input = React.createElement("input", {key: "input1", placeholder: "username"});
    const button = React.createElement("button", {key: "button1", onClick: renderReactElements}, "Update Time");
    const timer = React.createElement("p", {key: "paragraph1"}, new Date().toTimeString());

    root.render([heading, input, button, timer]);
}

renderReactElements();