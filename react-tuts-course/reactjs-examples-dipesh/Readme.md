# React JS Course Tutorials By Dipesh Malvia


1. Container / Presentational
------------------------------

User Component

   * User Container : State, api calls & data fetching
   * UserList Presentation : No side effects , purley presentational

   Advantages:

      Separation of Concerns

      Improve Reusability

      Simplified Testing

      Enhanced Maintainability

   Challenges:

      Increased Boilerplate 

      Overhead for small Applications

      Potential Props Drilling

      Learning Curve

   For Fake API Data : 

      [Official/Reference Link : https://reqres.in/]


________________________________________________________________________________________

2. Shadcn UI Library in React JS Vite

   Reference Link: https://ui.shadcn.com/docs/installation/vite

   Reference Link for Shadcn: https://ui.shadcn.com/

   Steps to install reactjs vite app in typescript
   ------------------------------------------------

   npm create vite@latest react-shadcn-tute -- --template react 

       Select a variant : TypeScript

   cd react-shadcn-tute [change directory to react-shadcn-tute project]

   npm install [install dependencies]

   npm run dev [To run the project]

   npm install -D tailwindcss postcss autoprefixer [install tailwindcss and postcss]

   npx tailwindcss init -p [initialize the tailwindcss js file]

   npx tailwindcss init -p --ts [initialize the tailwindcss ts file]

   Note: For configuring of Remaining Steps Follow the Reference Link [https://ui.shadcn.com/docs/installation/vite]



   * What is the Difference Between the npm and npx ?

     npm -> package manager

     npm is a package manager used to install, delete and update Javascript packages on your/our machine.

     npx -> package executer

     npx is a package executer, and it is used to execute javascript packages directly, without installing them.

   * Initializing the Shadcn UI Library

     > npx shadcn-ui@latest init
       Need to install the following packages:
       shadcn-ui@0.8.0
       Ok to proceed? (y) y

        √ Would you like to use TypeScript (recommended)? ... no / yes [yes]
        √ Which style would you like to use? » Default [Default]
        √ Which color would you like to use as base color? » Gray [Gray]
        √ Where is your global CSS file? ... src/index.css [src/index.css]
        √ Would you like to use CSS variables for colors? ... no / yes [yes]
        √ Are you using a custom tailwind prefix eg. tw-? (Leave blank if not) ...
        √ Where is your tailwind.config.js located? ... [ tailwind.config.ts ]
        √ Configure the import alias for components: ... [ @/components ]
        √ Configure the import alias for utils: ... [ @/lib/utils ]
        √ Are you using React Server Components? ... no / yes [no]
        √ Write configuration to components.json. Proceed? ... yes [yes]

        √ Writing components.json...
        √ Initializing project...
        √ Installing dependencies...

        Success! Project initialization completed. You may now add components.



