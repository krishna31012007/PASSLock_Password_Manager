import { useState } from 'react'
import Manager from './components/Manager'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

import './App.css'

function App() {


  return (
    <>
    <div className="relative h-[98.4vh] w-full bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#63e_100%)]">  {/* my background get from ibeback */}
    <Navbar/>
      <Manager/>
      <Footer/>
    </div>
    </>
  )
}

export default App


