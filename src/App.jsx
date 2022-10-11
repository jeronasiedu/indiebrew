import Feed from "./components/feed/Feed"
import YourComfort from "./components/feed/YourComfort"
import Footer from "./components/footer/Footer"
import Gradient from "./components/Gradient"
import Hero from "./components/hero/Hero"
import Navbar from "./components/navbar/Navbar"

function App() {
  return (
    <>
      <Gradient />
      <div className="container mx-auto px-4">
        <Navbar />
        <Hero />
        <Feed />
        <YourComfort />
        <Footer />
      </div>
    </>
  )
}

export default App
