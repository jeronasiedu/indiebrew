import { AnimatePresence } from "framer-motion"
import React, { useState } from "react"
import { BiMenu } from "react-icons/bi"
import LinkButton from "../Button"
import Sidebar from "./Sidebar"
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const openSidebar = () => {
    setIsOpen(true)
  }
  const closeSidebar = () => {
    setIsOpen(false)
  }
  return (
    <>
      <nav className="py-6 flex items-center justify-between">
        <img src="/logo.svg" alt="logo" />
        <div className="hidden md:flex items-center space-x-4">
          <a href="#">Pricing</a>
          <a href="#">Support</a>
          <LinkButton />
        </div>
        <button onClick={openSidebar} className=" md:hidden icon-button">
          <BiMenu />
        </button>
      </nav>

      <AnimatePresence>
        {isOpen && <Sidebar closeSidebar={closeSidebar} />}
      </AnimatePresence>
    </>
  )
}

export default Navbar
