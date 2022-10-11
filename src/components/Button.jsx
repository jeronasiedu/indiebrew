import React from "react"

const LinkButton = () => {
  return (
    <a
      href="#"
      className="bg-indigo-500 px-4 py-3 rounded focus:ring-1 focus:ring-indigo-400 ring-offset-2 inline-block "
    >
      <span className="font-medium text-white">Get Started</span>
      <span className="text-gray-100"> - it's free</span>
    </a>
  )
}

export default LinkButton
