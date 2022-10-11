import React from "react"
import LinkButton from "../Button"

const Hero = () => {
  return (
    <main className="flex  py-6 flex-col-reverse justify-center gap-10 lg:flex-row ">
      <section className="space-y-6 flex-1">
        <h1 className="text-4xl lg:text-5xl font-semibold ">
          Your Weekly personal feed digest.
        </h1>
        <p className="text-gray-700">
          With IndieBrew, get personal feeds from resources around the web,
          including Reddit, HackerNews, IndieHackers and much more
        </p>
        <LinkButton />
        <img src="/users_avatar.svg" alt="user avatars" />
        <p className="text-gray-700">
          Join <span className="text-indigo-500">36,6442</span> IndieBrewers in
          curating their personal digest
        </p>
      </section>
      <section className="flex-1  flex items-center justify-center ">
        <img
          src="/feed_mockup.png"
          className="object-cover max-w-lg xl:max-w-xl w-full"
          alt="feed mockup"
        />
      </section>
    </main>
  )
}

export default Hero
