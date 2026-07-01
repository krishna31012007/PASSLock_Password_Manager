import React from 'react'
import { Link } from "react-router-dom";


const Navbar = () => {
  return (
    <nav className='flex justify-between px-4 m-3 bg-purple-800 rounded-[50px] text-white py-2'>
      <div className="logo font-bold text-[20px]">
        <span className='text-purple-200 text-[20px]'>&lt;</span>
        POSS<span className='text-purple-200'>Lock/</span> 
        <span className='text-purple-200 text-[20px]'>&gt;</span>
        </div>
      <ul className='flex gap-4'>
        <Link className='flex justify-center items-center gap-0.5' to="/">
          <li className='hover:font-bold mx-1 text-[16px]'>Home</li>
        </Link>
        <Link className='flex justify-center items-center gap-0.5' to="/About">
          <li className='hover:font-bold mx-2 text-[16px]'>About</li>
        </Link>
        <Link className='flex justify-center items-center gap-0.5' to="/Contact">
          <li className='hover:font-bold text-[16px]'>Contact</li>
        </Link>
        <Link className='flex justify-center items-center gap-0.5 hover:font-bold' to="https://github.com/krishna31012007"><img width={28} src="/github.svg" alt="" />Github</Link>
      </ul>
    </nav>
  )
}

export default Navbar



