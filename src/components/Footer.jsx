import React from 'react'

const Footer = () => {  /* footer from tailwind block */
  return (
    <footer className="text-gray-600 body-font bg-transparent mt-0 absolute bottom-0">
  <div className="container px-5 py-0 mx-auto flex items-center sm:flex-row flex-col justify-between w-[209vh]">
    <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
      <div className="logo font-bold text-[20px]">
        <span className='text-purple-200 text-[20px]'>&lt;</span>
        POSS<span className='text-purple-200'>Lock/</span> 
        <span className='text-purple-200 text-[20px]'>&gt;</span>
        </div>
    </a>
    <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">© 2026 PassLock —
      <a href="https://x.com/KrIsHnAXHn" className="text-gray-600 ml-1" rel="noopener noreferrer" target="_blank">@KrIsHnAXHn</a>
    </p>
    <div className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">

      <a className="ml-3 text-gray-500" href='https://x.com/KrIsHnAXHn'>
        <svg fill="currentColor" strokelinecap="round" stroke-inejoin="round" strokewidth="2" className="w-5 h-5" viewBox="0 0 24 24">
          <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
        </svg>
      </a>
      <a className="ml-3 text-gray-500" href='https://www.instagram.com/urs.krishna.hn/?hl=en'>
        <svg fill="none" stroke="currentColor" strokelinecap="round" strokelinejoin="round" strokewidth="2" className="w-5 h-5" viewBox="0 0 24 24">
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
          <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
        </svg>
      </a>
      <a className="ml-3 text-gray-500" href='www.linkedin.com/in/krishna-chouhan-7006a3333'>
        <svg fill="currentColor" stroke="currentColor" strokelinecap="round" strokelinejoin="round" strokewidth="0" className="w-5 h-5" viewBox="0 0 24 24">
          <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
          <circle cx="4" cy="4" r="2" stroke="none"></circle>
        </svg>
      </a>
    </div>
  </div>
</footer>
  )
}

export default Footer
