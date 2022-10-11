import React from "react"
import { BsArrowRight } from "react-icons/bs"

const YourComfort = () => {
  return (
    <section className="flex  py-10 flex-col-reverse justify-center gap-10 lg:flex-row items-center">
      <div className=" flex-1  flex items-center justify-center ">
        <img
          src="/phone_mockup.png"
          className="object-cover max-w-lg  w-full"
          alt="social media icons"
        />
      </div>
      <div className="flex-1 space-y-6">
        <h3 className="text-3xl lg:text-4xl font-medium">
          Access your feed from the comfort of your your phone
        </h3>
        <p className="text-gray-700">
          We have native apps for both iOS and Android, accessing your curated
          content has never been easier.
        </p>
        <a href="#" className="text-indigo-600  flex items-center space-x-2">
          <span>Sign up for the waitlist</span> <BsArrowRight />
        </a>
      </div>
    </section>
  )
}

export default YourComfort
