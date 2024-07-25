# react-tuts-course
A React JS Course Tutorials By Chakravarthi

  Note: Read the React Docs & Next JS Docs Carefully

  Official Link : https://nextjs.org/learn/react-foundations
  Official Link : https://react.dev/reference/react 

  React Docs
  ----------
  Official Link : https://nextjs.org/learn/react-foundations/getting-started-with-react

# React JS

- What is React JS ?

  To Create User Interface [ React is a JavaScript library for building interactive user interfaces]

  React is a popular declarative library that you can use build user interfaces.

- Why React JS ?
   
  Features : SPA [Single Page Application], Virtual DOM

  It will uses the reconcilation algorithm to update original DOM 

  Diffing algorithm to compare Original DOM and Virtual DOM. Changes Made in Virtual DOM that is updates to Original DOM.

- React JS Foundation 
  
  Official Link : https://nextjs.org/learn/react-foundations

- Imperative & Declarative

  Imperative  : Writing the Steps for how the User interface should be updated.

  Declarative : A declarative approach is often preferred because it can speed up the development process.
  
  You're writing the steps for how the user interface should be updated. But when it comes to building user interfaces, a declarative approach is often preferred because it can speed up the development process. Instead of having to write DOM methods, it would be helpful if developers were able to declare what they want to show (in this case, an h1 tag with some text).

  In other words, imperative programming is like giving a chef step-by-step instructions on how to make a pizza. Declarative programming is like ordering a pizza without being concerned about the steps it takes to make the pizza.

  React is a popular declarative library that you can use build user interfaces.

  Official Link: https://nextjs.org/learn/react-foundations/updating-ui-with-javascript


- React 
    * Components 
    
    * Nested Components
  
    * Components vs Functions
      
      - Function is a block of code which can be reused when ever we want code.
      
      - Component is a function which returns the small piece of user interface.

    * Props [Properties]

      - pass the data from one component to another component using properties.
    
    * ReactDOM.createRoot(app).render(<Component />) 

      - place the [text/babel] or [text/jsx] in script tag <script type="text/babel"></script> for jsx working.

      - if we take multiple render(<Component />) functions. it will consider only last render(<Component />) function to render on browser.

    * Day - 04. React JS Props

      - Displaying Data with props [properties].

      - props [properties] are immutable. 

      - Using Variables in JSX [✅]

      - Object Destructuring [✅]

        (https://nextjs.org/learn/react-foundations/displaying-data-with-props)

      - https://react.dev/learn/passing-props-to-a-component

    
     * Is Props are immutable nature or not

       - immutable means cannot change the value.

       - [Yes] Props are immutable.

       - props are immutable [Yes].
    
    * Day - 05 React JS 

      - template literal [✅]

      - returned value of a function [✅]

      - ternary operators [✅]

      - iterating through lists [✅]

      - array.map() [✅] 
        
        Official Link: https://www.freecodecamp.org/news/higher-order-functions-explained/

      - Arrow Functions [✅]
    
    * Day - 6 [Rendering Lists & Importance of Keys]
     
        React is Declarative Library.

        Babel is Intermediate between the JSX to communicate the Browser.

        - Rendering Lists 

        - Importance of Keys

          -> To identify the list of values in the DOM, key is required.

        - Difference between map and filter

    * Day - 7 [Event Handlers & Responding to Events]

        - Event Handlers

        - Responding to Events
        
    * Day - 8 
        - what is state in react?

          1. State is Component's Memory

          2. State is a Component Specific Memory.

          3. Reference of State : Official Link : https://react.dev/learn/state-a-components-memory 

        - useState()

          1. Retain : Retain the data between renders.

          2. Re-render : Trigger React to render the component with new data (re-rendering).

          The useState Hook provides those two things:

            1. A state variable to retain the data between renders.
            
            2. A state setter function to update the variable and trigger React to render the component again.

        Data of Products: 
              
              -> Official Link : [https://fakestoreapi.com/]
              
              -> Official Link : [https://fakestoreapi.com/docs]

# Why we need to learn next js ?
  
   Official Link : https://react.dev/learn/start-a-new-react-project

   next js -> Framework developed by vercel

   React js -> Library

   Search Engines : Google, Yahoo, Bing, Brave, Yandex, DuckDuckGo, Baidu, StartPage, Naver

   React js is not seo friendly Library.

   Next js -> Server Side Render, SEO Friendly Framework.

   React js -> Client Side Render, Not SEO Friendly Framework.

# create-react-app

  Install NodeJS In System
    
    verify: node -v
 
  Install react using cra [create-react-app]

  npx -> node package executable

  npx create-react-app <project-name>

  node_modules cannot be pushed into git repository. it is heaviest directory.

  index.html -> public/index.html

  components[index.js, App.js] -> src/


  * Day - 9

    - component life cycle methods
       
       Joined - Mounting - componentDidMount()

       After getting Hike - Updating - componentDidUpdate()

       Before leaving company - Unmounting - componentWillUnmount()

       useEffect() -> Perform SideEffects
 
  * Day - 10 [Official Diagram : https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/]

      🔥 What is Initial Render ? ✅
      🔥 Triggering a render ? [https://react.dev/learn/adding-interactivity]
      🔥 Rendering the component (Re-render) ? [https://react.dev/learn/adding-interactivity]
      🔥 What is Committing to the DOM ? [https://react.dev/learn/adding-interactivity]
      🔥 Virtual DOM ?
      🔥 Diffing algorithm 
      🔥 Reconciliation algorithm
      🔥 useEffect Hook vs useLayoutEffect

       - componentDidMount
       - componentDidUpdate
       - componentWillUnmount

       What is Initial Render ?

         First initial render time,web app loads Component Tree into index.html through render() function is called Initial Render. 

         At the First Time, Component Tree/DOM Tree Loads into the index.html through render() function is called as Initial Render.
      
       useEffect Hook vs useLayoutEffect

         useEffect() is invoked immediately after a component is mounted (inserted into the tree). Initialization that requires DOM nodes should go here. If you need to load data from a remote endpoint, this is a good place to instantiate the network request.

         useLayoutEffect is a version of useEffect that fires before the browser repaints the screen.

         Call useLayoutEffect to perform the layout measurements before the browser repaints the screen.

         componentWillUnmount/useEffect() with return callback Fn is executed before the component is unmounted from the web app. it is performed to achieve cleanup operations/activities. 

       What is rendering ?

          rendering is a calling a component

       
  * Day - 11

      Context API 

        useContext Hook

        Redux

      
       
       


  







          

        


            


       











      



  