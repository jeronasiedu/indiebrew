import { motion } from "framer-motion"
import React from "react"
import { BiArrowBack } from "react-icons/bi"
import LinkButton from "../Button"
const Sidebar = ({ closeSidebar }) => {
  return (
    <motion.aside
      initial={{
        x: "100%",
      }}
      animate={{
        x: 0,
      }}
      exit={{
        x: "100%",
      }}
      transition={{ type: "spring", damping: 15, stiffness: 150 }}
      className="z-20 fixed min-h-screen right-0 top-0 w-2/3 bg-white shadow-sm shadow-indigo-50 border-l p-6"
    >
      <button onClick={closeSidebar} className="icon-button">
        <BiArrowBack />
      </button>
      <div className="mt-12 flex flex-col space-y-3">
        <a href="#" className="hover:underline">
          Pricing
        </a>
        <a href="#" className="hover:underline">
          Support
        </a>
        <LinkButton />
      </div>
    </motion.aside>
  )
}

export default Sidebar
