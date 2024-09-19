import React from 'react'
import H4 from './ui/h4'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className="container sticky top-0 mx-auto flex w-full flex-row items-center justify-between py-2">
      <Link href="/">
        <H4>Aufi F.</H4>
      </Link>
      {/* <div className="flex flex-row space-x-4">
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div> */}
    </nav>
  )
}

export default Navbar
