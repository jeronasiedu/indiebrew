import React from "react"
import { BsArrowRight } from "react-icons/bs"
const Feed = () => {
  return (
    <section className="flex  py-10 flex-col-reverse justify-center gap-10 lg:flex-row">
      <div className="flex-1 space-y-6">
        <h3 className="text-3xl lg:text-4xl font-medium">
          Curate your feed from dozens of resources.
        </h3>
        <p className="text-gray-700">
          We cover all major platforms where one could want to curate their feed
          from, Reddit, ProductHunt, IndieHackers and so much more
        </p>
        <a href="#" className="text-indigo-600  flex items-center space-x-2">
          <span>See full list of resources</span> <BsArrowRight />
        </a>
      </div>
      <div className=" flex-1  flex items-center justify-center ">
        <img
          src="/social_media_icons.png"
          className="object-cover max-w-lg  w-full"
          alt="social media icons"
        />
      </div>
    </section>
  )
}

export default Feed
