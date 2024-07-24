import React, { useState } from 'react'
import Navbar from './components/navbar'
import Footer from './components/footer'
import Card from './components/card'

function App() {
  let [title, setTitle] = useState(true);
  function changeTextHandler(name) {
    console.log("running");
    setTitle(!(title));
  }
  return (
    <div className='flex flex-col h-screen bg-[#30336b]'>
      <Navbar/>
      <div>
        <h1 className='text-3xl text-white'>{title ? "Hello React JS Online" : "Hello React JS Offline"}</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae suscipit aut, sapiente tempora earum ipsa assumenda porro nemo voluptas facere hic, maxime tempore expedita ipsam autem repellat fuga ad dolorum, optio exercitationem ab dolore ut. Debitis suscipit cumque animi. A?
        </p>
        <button onClick={() => changeTextHandler('Abdul Rahman')} className="bg-white font-bold py-1 px-2 my-1 rounded-md">{title ? "Offline" : "Online"}</button>
        <Card />
        <h2>Fragments</h2>
        <b>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</b>
       </div>
       <Footer />
    </div>
  )
}

export default App
