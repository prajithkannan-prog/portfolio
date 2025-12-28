import Navbar from "./components/navbar"
import Hero from "./components/hero"
import Skills from "./components/skills"
import Projects from "./components/project"
import Contact from "./components/contact"
import Footer from "./components/footer"
function App() {
  return (
    <div className="bg-gray-950 text-white min-h-screen">
      <div className="max-w-6xl mx-auto">
        <FloatingBackground/>
        <Navbar />
        <Hero />
        <Skills/>
        <Projects/>
        <Contact/>
        <Footer/>
      </div>
    </div>
  )
}


export default App
