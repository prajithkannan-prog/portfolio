function Navbar() {
  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
      <div className="flex gap-6 px-6 py-3 rounded-full
        bg-white/10 backdrop-blur-md border border-white/20
        shadow-lg text-sm"
      >
        <a href="#home" className="hover:text-blue-400 transition">
          Home
        </a>
        <a href="#skills" className="hover:text-blue-400 transition">
          Skills
        </a>
        <a href="#projects" className="hover:text-blue-400 transition">
          Projects
        </a>
        <a href="#contact" className="hover:text-blue-400 transition">
          Contact
        </a>
      </div>
    </div>
  )
}

export default Navbar
