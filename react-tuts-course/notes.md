UI -> HTML 5, CSS 3

2010 -> SPA -> Single Page Application

SPA -> bundle the js files

HTML, CSS, JS -> DOM -> Document Object Model -> Repaint

Why React -> Virtual DOM -> V - DOM

React JS -> Library [To Create User Interface]

React JS -> it is a javascript library for building user interfaces. react was first developed by jordan walke, a software engineer at facebook. it was incorporated into facebook's newsfeed in 2011 and later on instagram when it was acquired by Facebook in 2012. 

Virtual DOM -> it is programming concept where virtual representation of a UI is kept in memory. So for every object that exists in the original DOM, there is an object for that in React Virtual DOM. it is exactly the same, but it does not have the power to directly change the layout of the document. Manuplating DOM is slow, but manuplating Virtual DOM is fast as nothing gets drawn on the screen. so each time there is a change in the state of our application, the virtual DOM gets updated first instead of the real DOM.



# useRef Hook

Javascript
----------
DOM :

document
   html
     head
       title
         "My Title"

     body
       h1
        A heading
       a href
        Link Text

we are going to reference the elements using id, element, classname.

getElementById,
querySelector,
getElementsByClassName

we use to take reference of those particular element from web page or DOM element store them in variable.

These variables later on being used to change or manipulate css style, add siblings, add children etc.,

we are going to manipulate the style, add children, add siblings etc.,

this practice is deep rooted and lot of developers take advantage of it.

issue of above approach is when we do any manipulation in re-render the entire dom element.

useRef Hook

useRef is a React Hook that lets you reference a value that’s not needed for rendering.

To solve the problem of dom manipulation re-render of traditional approach. 

useRef Hook designed

giving the reference of element and holding that in a variable we can manipulate it or pass on to another component.

The core ingrident of useRef hook to store the reference of element.

useState Hook is responsible for re-rendering the that particular dom element.

but in the case of useRef Hook any of the dom element (or) how many changes you have making in useRef it never re-renders the dom element.

let compare useRef with useState

in the useState Hook we can any initial value like null, 0, string, any object.

not in the case of useRef Hook.

2 things we going to know

useRef is a object it contains the .current value

useRef never re-renders the dom element no matter how times you manipulate it.

useRef Hook not designed for storing the values for storing we are going to use useState Hook.









