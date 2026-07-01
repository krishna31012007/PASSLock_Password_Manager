
import Manager from './components/Manager'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import About from './pages/About'
import Contact from './pages/Contact'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css'

function App() {


  return (
    <>
    <div className="relative h-[98.4vh] w-full bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#63e_100%)]">  {/* my background get from ibeback */}
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Manager />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
      <Footer/>
    </div>
    </>
  )
}

export default App