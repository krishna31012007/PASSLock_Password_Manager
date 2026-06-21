import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex justify-between px-4 m-3 bg-purple-800 rounded-[50px] text-white py-2'>
      <div className="logo font-bold text-[20px]">
        <span className='text-purple-200 text-[20px]'>&lt;</span>
        POSS<span className='text-purple-200'>Lock/</span> 
        <span className='text-purple-200 text-[20px]'>&gt;</span>
        </div>
      <ul className='flex gap-4'>
        <a className='flex justify-center items-center gap-0.5' href="">
          <li className='hover:font-bold mx-1 text-[16px]'>Home</li>
        </a><a className='flex justify-center items-center gap-0.5' href="">
          <li className='hover:font-bold mx-2 text-[16px]'>About</li>
        </a><a className='flex justify-center items-center gap-0.5' href="">
          <li className='hover:font-bold text-[16px]'>Contact</li>
        </a>
        <a className='flex justify-center items-center gap-0.5 hover:font-bold' href="https://github.com/krishna31012007"><img width={28} src="/github.svg" alt="" />Github</a>
      </ul>
    </nav>
  )
}

export default Navbar


