import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";

// <h1 id="title" style="color: red">Welcome React</h1>

/*

<div class="container">
  <h1 id="title">Heading Tag</h1>
  <p>Some Paragraph</p>
</div>

*/

// const heading = React.createElement("h1", { id: "title", className: "container" }, "Welcome to Intro of React JS Tutors !");

/*

// Javascript XML => 

const heading = React.createElement("h1", {id: "title"}, "Heading Tag");

const paragraph = React.createElement("p", null, "Some Paragraph");

const container = React.createElement("div", {className: "container"}, 
    heading,
    paragraph)

*/

const name = "Rajesh Varma";

const isMyName = true;

const users = ["aravind",<p>rajesh</p>];

const container = (
    <>
     <h1>Heading Tag {name} { 10 + 20 } by { isMyName ? "Aravind" : "Guru naidu" }.</h1>
     <h2>{ isMyName && (<b>Vamsi.</b>) }</h2>
     <h3>{ users }</h3>
     <p>Some Paragraph.</p>
    </>
);

const app = document.getElementById("app");

const root = ReactDOM.createRoot(app);

root.render(container);