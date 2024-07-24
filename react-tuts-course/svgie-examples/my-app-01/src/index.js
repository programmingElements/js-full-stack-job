// const h1 = document.createElement("h1");
// h1.innerHTML = "Welcome to Webpack 3";
// const root = document.getElementById("root");
// root.appendChild(h1);

// const sayHelloManyTimes = (times) =>
//     new Array(times).fill(1).map((_, i) => `Hello ${i + 1}`);
  
//   const helloDiv = document.createElement("div");
//   helloDiv.innerHTML = sayHelloManyTimes(10).join("<br/>");
//   document.body.append(helloDiv);

import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);