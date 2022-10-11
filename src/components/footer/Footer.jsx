import React from "react"

const Footer = () => {
  return (
    <footer className="py-14 grid grid-cols-1 md:grid-cols-2 ">
      <div className="max-w-sm space-y-4">
        <h4 className="text-xl font-medium">IndieBrew</h4>
        <p className="text-gray-700">
          With IndieBrew, get personal feeds from resources all around the web
          including Reddit, HackerNews and much more
        </p>
        <p className="text-gray-700">Made with ❤ in Ghana.</p>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="">
          <h4 className="font-medium text-xl">Sitemap</h4>
          <a href="#" className="block text-gray-700">
            Homepage
          </a>
          <a href="#" className="block text-gray-700">
            Pricing
          </a>
        </div>
        <div className="">
          <h4 className="font-medium text-xl">Resources</h4>
          <a href="#" className="block text-gray-700">
            Support
          </a>
          <a href="#" className="block text-gray-700">
            Contact
          </a>
          <a href="#" className="block text-gray-700">
            FAQ
          </a>
        </div>
        <div className="">
          <h4 className="font-medium text-xl">Company</h4>
          <a href="#" className="block text-gray-700">
            About
          </a>
          <a href="#" className="block text-gray-700">
            Customers
          </a>
          <a href="#" className="block text-gray-700">
            Blog
          </a>
        </div>
        <div className="">
          <h4 className="font-medium text-xl">Resources</h4>
          <a href="#" className="inline-block">
            HackerNews
          </a>
          <a href="#" className="inline-block">
            Reddit
          </a>
          <a href="#" className="inline-block">
            Twitter
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
