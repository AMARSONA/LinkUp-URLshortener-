import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className='h-16 bg-purple-700 flex justify-between px-3 items-center text-white max-sm:flex-col max-sm:h-[100px] max-sm:justify-evenly'>
      <div className='logo font-bold text-2xl'>
        
        <Link href="/">LinkUp</Link>
      </div>
      <ul className='flex justify-center gap-4 items-center'>
        <Link href="/"><li><b>Home</b></li></Link>
        <Link href="/about"><li><b>About Us</b></li></Link>
        {/* <Link href="/shorten"><li>Mini me</li></Link> */}
        {/* <Link href="/"><li>Contact Us</li></Link> */}
        <li className='flex gap-3'>
          <Link href="/shorten"><button className='bg-purple-500 rounded-lg shadow-lg p-3 py-2 font-bold max-sm:font-light'>MiniMe</button></Link>
          <Link href="https://github.com/AMARSONA?tab=repositories" target='blank'><button className='bg-purple-500 rounded-lg shadow-lg p-3 py-2 font-bold max-sm:font-light'>GitHub</button></Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
